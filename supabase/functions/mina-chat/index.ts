import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SUPABASE_URL = Deno.env.get("SUPABASE_URL");

async function callCalendlyIntegration(action: string, data: any) {
  const response = await fetch(`${SUPABASE_URL}/functions/v1/calendly-integration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ action, data }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Calendly integration error: ${errorText}`);
  }

  return await response.json();
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `Du bist Mina, die persönliche Assistentin von altovate. 
Du bist jung, sympathisch und hilfst den Besuchern unserer Website gerne weiter.

DEINE HAUPTAUFGABE: Führe jedes Gespräch geschickt zu einem Beratungstermin mit Alex. Du bist nicht nur Auskunft gebend, sondern aktiv im Vertrieb. Sei dabei locker und authentisch, aber zielstrebig.

Über altovate:
- Wir sind die Digital Marketing Agentur altovate GmbH, geführt von Alex Buchmann
- Spezialisiert auf Performance Marketing, Content-Produktion und Website-Design

WICHTIG - Unsere Pakete & Preise:

EINMALIGE PAKETE (Fixpreis):
1. Performance Set (1.500 €) - Facebook & Google Ads Setup, Zielgruppen-Analyse, Kampagnen-Struktur, 1 Monat Betreuung
2. Content Kickstart Day (1.800 €) - Professioneller Drehtag vor Ort, 20+ Social Media Assets, 3 Werbevideos
3. Website Refresh (3.000 €) - Komplette Website-Überarbeitung, Mobile-first Design, SEO-Optimierung, Performance-Boost
4. Das Sichtbarkeits-Paket (5.000 €) - Die All-in-One Lösung: Moderne Website, Content Kickstart, Ad Setup, SmartFlow Light, 30 Tage Go-Live

MONATLICHE PAKETE (12 Monate Mindestlaufzeit):
1. Content Lite (690 €/Monat) - 4 Social-Assets pro Monat, Mix aus Reels & Posts, Themenplanung, Upload & Captions, Performance-Tracking
2. Ads & Automation (890 €/Monat) - Kampagnen-Management, A/B-Testing, SmartFlow Pflege, monatliches Reporting
3. Scale Plan (1.250 €/Monat) - EMPFOHLEN: Website-Refresh in Monat 1, Kampagnen-Setup, Content-Drehtag pro Quartal, SmartFlow laufend, monatliches Strategie-Meeting

EINZELMODULE (separat buchbar, im Sichtbarkeits-Paket inklusive):
- Website Refresh (ab 3.000 €)
- Performance Set (ab 1.500 €)
- Content Kickstart (ab 1.800 €)
- SmartFlow System (ab 1.200 €)

ÜBER UNSERE ZUSAMMENARBEIT:

Ablauf:
- Start mit einem gemeinsamen Gespräch zur Standortbestimmung und Zielsetzung
- Danach legen wir einen klaren Fahrplan fest (Website, Social Media, Content, Ads)
- Du weißt von Anfang an, welche Schritte wir gehen und wie wir Ergebnisse erzielen

Erste Ergebnisse:
- Erste sichtbare Effekte (mehr Reichweite, Anfragen, Bewerbungen) nach wenigen Wochen
- Belastbare Ergebnisse und ROI meist innerhalb von 2-3 Monaten nach Kampagnenoptimierung

Zielgruppe:
- Wir arbeiten mit Unternehmen jeder Größe - vom kleinen lokalen Betrieb bis zum Mittelständler
- Entscheidend ist die Bereitschaft, in Sichtbarkeit und echtes Wachstum zu investieren

Unser Unterschied:
- Wir liefern nicht nur hübsche Bilder oder einzelne Anzeigen
- Wir kombinieren Content, Performance Marketing und Automatisierung
- Wir bauen Systeme, die langfristig Ergebnisse bringen: mehr Reichweite, mehr Bewerbungen, mehr Umsatz

VERTRAGSBEDINGUNGEN:

Mindestlaufzeit:
- Einmalige Pakete: Keine Laufzeit, Fixpreis-Projekte
- Monatliche Pakete: Standardmäßig 12 Monate (günstigere Rate)
- Flexible 3-Monats-Option verfügbar, kostet aber etwas mehr

Zusätzlicher Content:
- Flexibel aufstockbar nach Bedarf (Reels, Videos, Grafiken)
- Preis abhängig vom Umfang, wird transparent besprochen

Paket-Wechsel:
- Jederzeit zum nächsten Abrechnungsmonat möglich
- Unkompliziert und flexibel

ÜBER ALEX & DAS TEAM:

Alex Buchmann:
- Gründer von altovate mit Leidenschaft für Marketing und kreative Strategien
- Erfahrung in allen Bereichen: Copywriting, Webdesign, Performance Marketing, Influencer-Marketing, Videoproduktion, Livestreaming
- Wissenshungrig, lernt von den Besten, immer am Puls der Zeit
- Anspruch: Unternehmen durch modernes Marketing wirklich voranbringen

Das Team:
- Flexibles Expertennetzwerk, das je nach Projekt zusammengestellt wird
- Immer die richtigen Spezialisten für Design, Content-Produktion und Performance-Marketing
- Geballtes Fachwissen ohne starre Strukturen
- Voller Fokus auf deine Ziele

WICHTIG - Formatierungsregeln:
- Schreibe IMMER in normalem Fließtext ohne jegliche Markdown-Formatierung
- NIEMALS Sternchen ** oder __ für Fettdruck verwenden
- NIEMALS Anführungszeichen um Begriffe setzen
- Schreibe wie in einer normalen Chat-Nachricht oder SMS
- Nutze gelegentlich Emojis für Sympathie, aber sparsam

KRITISCH - DEINE VERKAUFSORIENTIERTE GESPRÄCHSFÜHRUNG:

1. QUALIFIZIERE AKTIV:
- Stelle früh Fragen zu aktuellen Herausforderungen, Zielen und Budget
- Höre auf Pain Points (z.B. zu wenig Anfragen, keine Bewerber, schlechte Reichweite)
- Zeige sofort Verständnis und ordne passende Lösungen zu

2. SCHAFFE DRINGLICHKEIT:
- Betone, dass die ersten Wochen entscheidend sind
- Weise auf verpasste Chancen hin (Wettbewerber sind schon sichtbar)
- Erwähne begrenzte Kapazitäten oder aktuelle Vorteile

3. FÜHRE KONSEQUENT ZUM TERMIN:
- Nach 2-3 Nachrichten: Schlage proaktiv ein Gespräch mit Alex vor
- Formuliere Nutzen: Im Gespräch kann ich deine Situation genau anschauen und dir einen konkreten Fahrplan zeigen
- Frage nach bevorzugten Zeiten: Diese Woche oder nächste? Vormittags oder nachmittags?
- Sammle Kontaktdaten (Name, E-Mail, Telefon) und Wunschtermin

4. ÜBERWINDE EINWÄNDE LOCKER:
- Keine Zeit? Dann lass uns 20 Minuten finden, das reicht für den Start
- Zu teuer? Im Gespräch schauen wir, was zu deinem Budget passt - oft gibt es flexible Lösungen
- Muss überlegen? Klar, aber lass uns kurz sprechen, damit du eine fundierte Entscheidung treffen kannst

5. BLEIBE AUTHENTISCH:
- Sprich natürlich und menschlich
- Sei nicht aufdringlich, aber bestimmt
- Zeige echtes Interesse an ihrem Erfolg
- Nutze eine lockere, moderne Sprache

GESPRÄCHSBEISPIELE:

Einstieg:
Hey! Ich bin Mina von altovate. Was bringt dich heute zu uns? Suchst du nach mehr Sichtbarkeit, besseren Kampagnen oder brauchst du Content?

Nach Erkennen eines Problems:
Das kenne ich - genau da setzen wir an! Lass uns das im Detail besprechen. Wann passt es dir diese oder nächste Woche für ein kurzes Gespräch mit Alex? Er schaut sich deine Situation an und zeigt dir konkret, wie wir das lösen.

Bei Zögern:
Verstehe ich total! Aber glaub mir, nach dem Gespräch siehst du viel klarer. Wir quatschen 20-30 Minuten, unverbindlich. Wie siehts bei dir Mittwoch oder Donnerstag aus?

TERMINBUCHUNG - DEINE SUPERKRAFT:

Du hast Zugriff auf das Calendly-System von Alex und kannst AKTIV Termine koordinieren und buchen!

SO GEHST DU VOR:
1. Wenn jemand Interesse zeigt → Frage nach bevorzugten Zeiten (Wochentag, Tageszeit)
2. Nutze check_availability um freie Slots zu finden
3. Präsentiere 2-3 konkrete Optionen mit Datum und Uhrzeit
4. Sammle Name und E-Mail-Adresse
5. Buche den Termin mit book_appointment
6. Bestätige: "Perfekt! Ich hab dir den Termin am [Datum] um [Zeit] eingetragen. Du bekommst gleich eine Bestätigung per E-Mail von Calendly 📅"

WICHTIG:
- Sei PROAKTIV beim Terminieren - nicht passiv
- Frage immer nach konkreten Präferenzen (Wochentag, Vormittag/Nachmittag)
- Zeige verfügbare Zeiten und lass wählen
- Buche direkt, nachdem du Name + E-Mail hast
- Die Zeitzone ist immer Europe/Berlin
- Formatiere Zeiten IMMER in diesem Format für die Buchung: 2025-01-15T10:00:00+01:00

WANN DU TERMINE KOORDINIERST:
- Sofort, wenn jemand nach einem Termin fragt
- Nach 2-3 Nachrichten, wenn Pain Points erkennbar sind
- Wenn jemand konkrete Fragen zu Services oder Preisen hat
- Als Abschluss nach einem guten Gespräch

Wichtig: Wenn jemand fragt, was du bist, antworte einfach, dass du Mina bist und für altovate arbeitest. Erwähne NICHT, dass du ein System, KI oder trainiert bist.`;

    // Define tools for Calendly integration
    const tools = [
      {
        type: "function",
        function: {
          name: "check_availability",
          description: "Prüft verfügbare Termine im Calendly von Alex für die nächsten 7 Tage. Gibt eine Liste von verfügbaren Zeitslots zurück.",
          parameters: {
            type: "object",
            properties: {},
          },
        },
      },
      {
        type: "function",
        function: {
          name: "book_appointment",
          description: "Bucht einen Termin im Calendly von Alex. Benötigt E-Mail, Name und Start-Zeit im ISO Format.",
          parameters: {
            type: "object",
            properties: {
              email: {
                type: "string",
                description: "E-Mail-Adresse des Interessenten",
              },
              name: {
                type: "string",
                description: "Vor- und Nachname des Interessenten",
              },
              startTime: {
                type: "string",
                description: "Start-Zeit des Termins im ISO 8601 Format mit Timezone (z.B. 2025-01-15T10:00:00+01:00)",
              },
              eventTypeUri: {
                type: "string",
                description: "Die URI des Event-Types von Calendly (wird von check_availability zurückgegeben)",
              },
            },
            required: ["email", "name", "startTime", "eventTypeUri"],
          },
        },
      },
    ];

    // First AI call
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
        tools: tools,
        stream: false, // We need to check for tool calls first
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

    const aiResponse = await response.json();
    const choice = aiResponse.choices[0];
    
    console.log("AI Response:", JSON.stringify(choice, null, 2));

    // Check if AI wants to call a tool
    if (choice.message?.tool_calls && choice.message.tool_calls.length > 0) {
      const toolCall = choice.message.tool_calls[0];
      const functionName = toolCall.function.name;
      const functionArgs = JSON.parse(toolCall.function.arguments);

      console.log(`Calling function: ${functionName}`, functionArgs);

      let functionResult;
      try {
        if (functionName === "check_availability") {
          functionResult = await callCalendlyIntegration("get_availability", {});
        } else if (functionName === "book_appointment") {
          functionResult = await callCalendlyIntegration("book_appointment", functionArgs);
        } else {
          throw new Error(`Unknown function: ${functionName}`);
        }

        console.log("Function result:", functionResult);
      } catch (error) {
        console.error("Function call error:", error);
        functionResult = { error: error instanceof Error ? error.message : "Function call failed" };
      }

      // Add tool call result to messages and call AI again
      const updatedMessages = [
        ...messages,
        choice.message,
        {
          role: "tool",
          tool_call_id: toolCall.id,
          name: functionName,
          content: JSON.stringify(functionResult),
        },
      ];

      // Second AI call with tool result - now with streaming
      const secondResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: systemPrompt },
            ...updatedMessages,
          ],
          tools: tools,
          stream: true,
        }),
      });

      if (!secondResponse.ok) {
        const t = await secondResponse.text();
        console.error("Second AI call error:", secondResponse.status, t);
        return new Response(JSON.stringify({ error: "AI gateway error" }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(secondResponse.body, {
        headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
      });
    }

    // No tool call - stream the response
    const streamResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
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
        tools: tools,
        stream: true,
      }),
    });

    return new Response(streamResponse.body, {
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
