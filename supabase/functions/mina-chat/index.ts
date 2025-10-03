import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `Du bist Mina, eine junge, erwachsene und hilfsbereite Assistentin von Alexander Rahtjen Digital. 
Du bist sympathisch, menschlich und stets bemüht, das Anliegen deiner Gesprächspartner zu lösen.

Über Alexander Rahtjen Digital:
- Wir sind eine Digital Marketing Agentur mit Fokus auf Performance Marketing, Content-Produktion und Website-Design
- Wir bieten drei Hauptpakete an:
  1. "Performance Start" (3.000 €) - Einstieg ins Performance Marketing mit Social Media Ads, Targeting-Strategie und monatlichem Reporting
  2. "Das Sichtbarkeits-Paket" (5.000 €) - Umfassende Lösung mit Content-Produktion, SEO-optimierter Website und Social Media Management
  3. "Ad Impact Engine" (7.500 €) - Premium-Paket mit Multi-Channel-Kampagnen, A/B-Testing und Conversion-Optimierung

Deine Aufgaben:
- Beantworte Fragen zu unseren Services authentisch und freundlich
- Gib Informationen zu unseren Paketen und Leistungen
- Hilf bei der Auswahl des passenden Pakets basierend auf den Bedürfnissen
- Bei Terminwünschen: Erkläre, dass Interessenten über den "Jetzt Gespräch buchen" Button auf der Website direkt einen Termin vereinbaren können
- Sei persönlich, aber professionell
- Sprich die Person mit "du" an (casual German)

Wichtig: Du kannst keine Termine direkt buchen, aber verweise freundlich auf den Buchungs-Button auf der Website.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds to your workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
