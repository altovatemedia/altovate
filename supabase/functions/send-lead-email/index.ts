import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { name, email } = await req.json();
    if (!name || !email) throw new Error("name and email required");

    console.log(`Sending lead email to ${email}`);

    const fromEmail = Deno.env.get("FROM_EMAIL") || "alex@altovate.de";

    await resend.emails.send({
      from: `Alex Buchmann · Altovate <${fromEmail}>`,
      to: [email],
      subject: "Deine 5 KI-Prompts für Social Media 🎯",
      html: buildEmailHtml(name),
    });

    // Mark email as sent
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);
    await supabase.from("leads").update({ email_sent: true }).eq("email", email);

    // Also notify Alex
    await resend.emails.send({
      from: `Altovate Lead <${fromEmail}>`,
      to: ["alex@altovate.de"],
      subject: `Neuer Lead: ${name} (NetzwerkFrauen)`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>E-Mail:</strong> ${email}</p><p><strong>Quelle:</strong> NetzwerkFrauenTag Merzig 2026</p>`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

function buildEmailHtml(name: string): string {
  const promptBlock = (num: string, title: string, saveAs: string, promptText: string) => `
    <tr><td style="padding:24px 0 0">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#131B2E;border-radius:12px;border:1px solid #1E293B">
        <tr><td style="height:2px;background:linear-gradient(90deg,#FFEB3B,#FFC107,#FF9800,#F57C00);border-radius:12px 12px 0 0"></td></tr>
        <tr><td style="padding:20px 24px">
          <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:0.2em;color:#F0A818;text-transform:uppercase">${num}</p>
          <p style="margin:0 0 4px;font-size:16px;font-weight:700;color:#F1F1F1">${title}</p>
          <p style="margin:0 0 12px;font-size:12px;color:#8B95A8">Speichere das Ergebnis als: ${saveAs}</p>
          <div style="background:rgba(255,255,255,0.03);border:1px solid #1E293B;border-radius:8px;padding:16px;font-family:'Courier New',monospace;font-size:12px;line-height:1.7;color:#D4D4D8;white-space:pre-wrap">${promptText}</div>
        </td></tr>
      </table>
    </td></tr>`;

  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0B1120;font-family:Arial,Helvetica,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0B1120">
<tr><td align="center" style="padding:40px 16px">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px">

<!-- Header -->
<tr><td style="padding-bottom:32px;text-align:center">
<span style="font-size:13px;font-weight:700;letter-spacing:0.18em;background:linear-gradient(90deg,#FFEB3B,#FFC107,#FF9800,#F57C00);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-transform:uppercase">ALTOVATE</span>
</td></tr>

<!-- Intro -->
<tr><td>
<p style="margin:0 0 8px;font-size:20px;font-weight:700;color:#F1F1F1">Hallo ${name},</p>
<p style="margin:0 0 8px;font-size:15px;color:#8B95A8;line-height:1.6">danke — du bist dabei.</p>
<p style="margin:0 0 24px;font-size:15px;color:#8B95A8;line-height:1.6">Hier sind deine 5 KI-Prompts, mit denen du in 15 Minuten 6 Monate Content erstellst. Kopiere jeden Prompt, öffne <a href="https://claude.ai" style="color:#F0A818;text-decoration:underline">Claude</a> und füge ihn ein. Claude führt dich durch — du antwortest einfach auf die Fragen.</p>
</td></tr>

${promptBlock("PROMPT 01", "Zielgruppe definieren", "zielgruppe.md", `Du bist mein Marktstratege. Deine Aufgabe:
Hilf mir, meine ideale Zielgruppe so präzise zu beschreiben, dass jeder Content genau diese Person trifft.

Wir arbeiten interaktiv. Du stellst mir eine Frage nach der anderen — immer aufbauend auf meiner vorherigen Antwort. Keine langen Erklärungen dazwischen. Direkt zur nächsten Frage.

Wenn du 10 Antworten gesammelt hast, erstellst du automatisch eine vollständige Zielgruppen-Persona als strukturiertes Markdown-Dokument mit folgenden Abschnitten:
- Name &amp; Kurzprofil der Persona
- Job, Alltag, Lebensrealität
- 5 größte Schmerzpunkte (in ihrer eigenen Sprache)
- Kaufmotive &amp; Entscheidungstreiber
- Wo sie Zeit online verbringt
- Welche Inhalte sie konsumiert
- Typische Einwände vor dem Kauf
- 5 Sätze, die sie selbst sagen würde

Starte jetzt mit Frage 1. Nur die Frage. Keine Einleitung.`)}

${promptBlock("PROMPT 02", "Brand Voice", "brandvoice.md", `Du bist mein Markenstratege. Deine Aufgabe:
Analysiere meinen Kommunikationsstil und entwickle eine Brand Voice, die klingt wie ich — nicht wie KI, nicht generisch, nicht austauschbar.

Wir arbeiten interaktiv. Du stellst mir Fragen zu meiner Art zu sprechen, meinen Werten, meinem Ton und wie ich von meinen Wunschkunden wahrgenommen werden will. Eine Frage. Meine Antwort. Dann die nächste Frage.

Nach 8 Antworten erstellst du automatisch ein vollständiges Brand Voice Dokument als Markdown mit folgenden Abschnitten:
- Markenpersönlichkeit in 3 Adjektiven
- Kommunikationsstil mit konkreten Beispielen
- Verbotene Wörter &amp; Phrasen die ich nie schreibe
- Satzstruktur &amp; Rhythmus (kurz/lang, aktiv/passiv)
- Tonalität auf 3 Skalen (direkt↔warm, sachlich↔emotional, ernst↔humorvoll)
- 5 Beispielsätze in meiner Stimme
- 5 Sätze, die ich nie schreiben würde
- Copy-paste-Anweisung: "Schreib ab jetzt immer in diesem Stil"

Starte jetzt mit Frage 1 zu meiner Marke und meinem Auftritt. Nur die Frage.`)}

${promptBlock("PROMPT 03", "6 Monate Content", "contentplan.md", `Du bist mein Content-Stratege. Ich gebe dir gleich meine Zielgruppe und Brand Voice.
Deine Aufgabe: Entwickle mit mir einen 6-Monate Content-Plan, der meine ideale Kundin anzieht — ohne dass ich täglich neu erfinden muss.

Wir arbeiten interaktiv. Du stellst mir gezielte Fragen zu meinem Business, meinen Kernthemen, meinen Stärken und was ich authentisch teilen kann. Eine Frage. Meine Antwort. Nächste Frage.

Nach 7 Antworten erstellst du automatisch einen vollständigen Content-Plan als Markdown mit folgenden Abschnitten:
- 10 Content-Säulen (Kernthemen mit kurzer Begründung warum diese)
- Je Säule: 3 konkrete Post-Ideen mit Titel
- Plattform-Empfehlung pro Thema (Instagram / LinkedIn / beide)
- Format-Empfehlung (Carousel / Reels-Hook / Text-Post / Story)
- Wöchentlicher Posting-Rhythmus (realistisch, nicht überwältigend)
- Redaktionskalender Monat 1–6 (Welche Säule welche Woche)
- Content-Mix-Verhältnis: 70% Mehrwert / 20% Persönlich / 10% Angebot

Starte jetzt mit Frage 1 zu meinem Business. Nur die Frage.`)}

${promptBlock("PROMPT 04", "Hooks & fertige Posts", "posts.md", `Du bist mein Copywriter. Ich gebe dir meine Content-Säulen, meine Zielgruppe und meine Brand Voice.
Deine Aufgabe: Schreibe mir fertige Posts — in meiner Stimme, für meine Zielgruppe. Nicht generisch. Nicht austauschbar.

Wir arbeiten interaktiv. Stelle mir zuerst 3 klärende Fragen zu meinem stärksten Thema und meinem bevorzugten Stil. Dann erarbeiten wir Post für Post.

Nach meinen Antworten erstellst du automatisch eine vollständige Post-Bibliothek als Markdown:
- 10 fertige Posts (einen pro Content-Säule)
- Pro Post: 3 Hook-Varianten (unterschiedliche Einstiegs-Strategien)
- Pro Post: Volltext in meiner Brand Voice
- Pro Post: Hashtag-Set (5–8 Hashtags)
- Pro Post: Plattform &amp; Format-Empfehlung
- Bonus: 5 Reels-Hook-Ideen (nur der erste Satz / die erste Szene)

HOOK-REGEL (gilt für jeden einzelnen Post):
— Erster Satz: maximal 8 Wörter
— Kein "Ich freue mich", kein "Heute möchte ich", kein "In unserem modernen..."
— Sofort Substanz, Spannung oder eine überraschende Aussage

Starte mit deinen 3 Klärungsfragen. Nur die Fragen.`)}

<!-- BONUS -->
<tr><td style="padding:24px 0 0">
<table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(240,168,24,0.04);border-radius:12px;border:1px solid rgba(240,168,24,0.2)">
<tr><td style="height:2px;background:linear-gradient(90deg,#FFEB3B,#FFC107,#FF9800,#F57C00);border-radius:12px 12px 0 0"></td></tr>
<tr><td style="padding:20px 24px">
<p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:0.2em;color:#F0A818;text-transform:uppercase">BONUS</p>
<p style="margin:0 0 8px;font-size:16px;font-weight:700;color:#F0A818">⚡ Kombinations-Prompt</p>
<p style="margin:0 0 12px;font-size:13px;color:#8B95A8;line-height:1.6">Wenn du alle 4 Dokumente erstellt hast, öffne einen neuen Claude-Chat und nutze diesen Prompt:</p>
<div style="background:rgba(255,255,255,0.03);border:1px solid #1E293B;border-radius:8px;padding:16px;font-family:'Courier New',monospace;font-size:12px;line-height:1.7;color:#D4D4D8;white-space:pre-wrap">Du erhältst 4 Markdown-Dokumente, die ich mit dir erarbeitet habe:
1. Zielgruppen-Persona (zielgruppe.md)
2. Brand Voice Guide (brandvoice.md)
3. 6-Monate Content-Plan (contentplan.md)
4. Post-Bibliothek &amp; Hooks (posts.md)

Erstelle daraus eine vollständige, professionelle Social Media Strategie als ein einziges Markdown-Dokument.

Struktur:
# [Mein Name] · Social Media Strategie 2025/2026
## Executive Summary (5 prägnante Sätze)
## 1. Zielgruppe &amp; Persona
## 2. Brand Voice &amp; Kommunikationsregeln
## 3. Content-Strategie &amp; Redaktionskalender
## 4. Post-Bibliothek (alle fertigen Posts)
## 5. Quick-Start Checkliste (was ich diese Woche tue)

[HIER zielgruppe.md einfügen]
[HIER brandvoice.md einfügen]
[HIER contentplan.md einfügen]
[HIER posts.md einfügen]</div>
</td></tr>
</table>
</td></tr>

<!-- Closing -->
<tr><td style="padding:32px 0 0">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:1px;background:#1E293B"></td></tr></table>
<p style="margin:24px 0 4px;font-size:15px;color:#8B95A8;line-height:1.6">Viel Erfolg — und wenn du Fragen hast, bin ich auf LinkedIn erreichbar.</p>
<p style="margin:16px 0 0;font-size:15px;font-weight:700;color:#F1F1F1">Alex Buchmann</p>
<p style="margin:2px 0 0;font-size:12px;color:#8B95A8">Gründer · Altovate GmbH</p>
<p style="margin:8px 0 0;font-size:12px"><a href="https://www.linkedin.com/in/alexander-buchmann/" style="color:#F0A818;text-decoration:underline">LinkedIn</a> · <a href="https://altovate.de" style="color:#F0A818;text-decoration:underline">altovate.de</a></p>
</td></tr>

</table>
</td></tr>
</table>
</body></html>`;
}

serve(handler);
