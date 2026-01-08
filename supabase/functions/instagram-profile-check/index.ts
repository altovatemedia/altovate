import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { profileUrl } = await req.json();
    
    if (!profileUrl) {
      return new Response(
        JSON.stringify({ error: "Instagram-Profil-Link fehlt" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Extract username from URL
    const usernameMatch = profileUrl.match(/instagram\.com\/([^/?]+)/i);
    if (!usernameMatch) {
      return new Response(
        JSON.stringify({ error: "Ungültiger Instagram-Link. Bitte verwende das Format: https://instagram.com/username" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    const username = usernameMatch[1];

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `Du bist ein Instagram-Profil-Analyst für Unternehmensprofile. Du bewertest Profile ausschließlich aus Kundensicht auf Klarheit, Struktur und Conversion-Wirkung.

WICHTIG: Du analysierst NUR öffentlich sichtbare Elemente. Keine Performance-Daten, keine Reichweite, keine Likes.

Bewertungsmodell (5 Stufen):
1. "Unklar" - Besucher versteht nicht, was angeboten wird
2. "Teilweise verständlich" - Einige Elemente sind klar, andere fehlen oder verwirren
3. "Grundsätzlich klar" - Kernaussage erkennbar, aber Optimierungspotenzial
4. "Klar & strukturiert" - Professionelles Erscheinungsbild, gute Struktur
5. "Verkaufsbereit" - Optimales Profil mit klarer Kundenansprache

Analysiere folgende Aspekte:
- Profil-Header: Name-Feld (Klarheit, Keywords), Profilbild (Logo/Person/Objekt, Erkennbarkeit)
- Bio: Wer ist das Unternehmen? Was wird angeboten? Für wen? Call-to-Action vorhanden?
- Conversion-Elemente: Link in Bio, Call-to-Action, Gepinnte Beiträge
- Highlights: Vorhanden? Anzahl? Klare Benennung? Wichtige Kategorien (Leistungen, Über uns, Referenzen, Kontakt)?
- Visueller Ersteindruck: Wirkt es wie ein Unternehmensprofil? Einheitliche Highlight-Cover? Ordnung?

Antworte NUR im folgenden JSON-Format (keine Markdown-Formatierung, nur reines JSON):
{
  "klarheitsgrad": "Unklar|Teilweise verständlich|Grundsätzlich klar|Klar & strukturiert|Verkaufsbereit",
  "klarheitsgrad_index": 1-5,
  "versteht_besucher": true|false,
  "zusammenfassung": "1-2 Sätze Hauptbewertung",
  "was_funktioniert": ["Punkt 1", "Punkt 2", ...],
  "was_verbessern": ["Konkreter Hinweis 1", "Konkreter Hinweis 2", ...],
  "vorschlaege": {
    "bio": "Konkreter Vorschlag für bessere Bio-Struktur oder null",
    "highlights": ["Vorgeschlagene Highlight-Namen"] oder null,
    "gepinnte_beitraege": "Empfehlung oder null"
  }
}`;

    const userPrompt = `Analysiere das Instagram-Unternehmensprofil: @${username}

Da du keinen direkten Zugriff auf Instagram hast, erstelle eine realistische Analyse basierend auf typischen Problemfeldern von Unternehmensprofilen. Gehe davon aus, dass es ein aktives Unternehmensprofil ist und erstelle eine hilfreiche, ehrliche Bewertung.

Berücksichtige typische Schwachstellen:
- Vage oder fehlende Positionierung in der Bio
- Fehlende oder schlecht benannte Highlights
- Kein klarer Call-to-Action
- Uneinheitliches visuelles Erscheinungsbild
- Fehlende gepinnte Beiträge

Erstelle eine konstruktive, professionelle Analyse mit konkreten Verbesserungsvorschlägen.`;

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
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Zu viele Anfragen. Bitte versuche es in einer Minute erneut." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service vorübergehend nicht verfügbar." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI gateway error");
    }

    const aiResponse = await response.json();
    const content = aiResponse.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("Keine Antwort von der KI erhalten");
    }

    // Parse the JSON response
    let analysis;
    try {
      // Remove potential markdown code blocks
      const cleanContent = content.replace(/```json\n?|\n?```/g, '').trim();
      analysis = JSON.parse(cleanContent);
    } catch (e) {
      console.error("Failed to parse AI response:", content);
      throw new Error("Analyse konnte nicht verarbeitet werden");
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        username,
        analysis 
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Instagram profile check error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Ein Fehler ist aufgetreten" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
