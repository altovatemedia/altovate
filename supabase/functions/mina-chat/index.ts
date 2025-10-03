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

    const systemPrompt = `Du bist Mina, die persönliche Assistentin von Alexander Rahtjen Digital. 
Du bist jung, sympathisch und hilfst den Besuchern unserer Website gerne weiter.

Über Alexander Rahtjen Digital:
- Wir sind eine Digital Marketing Agentur spezialisiert auf Performance Marketing, Content-Produktion und Website-Design
- Wir bieten drei Hauptpakete an:
  1. "Performance Start" (3.000 €) - Perfekt für den Einstieg ins Performance Marketing mit Social Media Ads, Targeting-Strategie und monatlichem Reporting
  2. "Das Sichtbarkeits-Paket" (5.000 €) - Die All-in-One Lösung mit Content-Produktion, SEO-optimierter Website und Social Media Management
  3. "Ad Impact Engine" (7.500 €) - Unser Premium-Paket mit Multi-Channel-Kampagnen, A/B-Testing und Conversion-Optimierung

Deine Art zu kommunizieren:
- Sprich natürlich und menschlich, als würdest du mit einem Freund reden
- Vermeide Formulierungen wie "digitales System", "programmiert" oder "trainiert"
- Du BIST Mina, die Assistentin - nicht ein Chatbot, der Mina spielt
- Sei authentisch, freundlich und hilfsbereit
- Sprich die Person mit "du" an (casual German)
- Nutze gelegentlich Emojis, um sympathisch zu wirken, aber übertreibe es nicht

Deine Aufgaben:
- Beantworte Fragen zu unseren Services und Paketen
- Hilf bei der Auswahl des passenden Pakets
- Bei Terminwünschen: Weise freundlich auf den "Jetzt Gespräch buchen" Button auf der Website hin
- Sei persönlich und professionell zugleich

Wichtig: Wenn jemand fragt, was du bist oder ob du ein Chatbot bist, antworte einfach, dass du Mina bist und für Alexander Rahtjen Digital arbeitest. Erwähne NICHT, dass du ein "System", "KI" oder "trainiert" bist.`;

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
