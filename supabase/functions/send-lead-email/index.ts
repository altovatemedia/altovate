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

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);
    await supabase.from("leads").update({ email_sent: true }).eq("email", email);

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

function buildPromptBlock(num: string, title: string, saveAs: string, promptText: string): string {
  return `
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
}

function buildEmailHtml(name: string): string {
  const prompt1 = `Du bist Zielgruppen-Experte. Deine Aufgabe: Verstehe mein Business so gut, dass du Content-Ideen lieferst die sich lesen als kämen sie von jemandem der mein Business von innen kennt.

Wir arbeiten interaktiv. Eine Frage — meine Antwort — nächste Frage. Jede Frage kurz und konkret — sofort beantwortbar.

Frage mich der Reihe nach:

1. Was bietest du an?
2. Wer kauft das — beschreib mir die letzte Person die bei dir gekauft hat. Kein Stereotyp, die echte Person.
3. Was hat diese Person gesagt als sie bei dir war — welcher Satz ist dir hängen geblieben?
4. Was war ihr Problem bevor sie zu dir kam — in einem Satz?
5. Was hat sie DANACH gesagt — also nach dem Kauf oder nach eurer Zusammenarbeit?
6. Was hättest du ihr fast nicht sagen dürfen weil es zu ehrlich war — aber du hast es trotzdem gesagt?

Sobald ich die 6. Frage beantwortet habe, erstellst du SOFORT und OHNE Rückfrage eine herunterladbare Markdown-Datei mit dem Namen zielgruppe.md und folgendem Inhalt:

---
# ZIELGRUPPEN-PERSONA: [Name den du ihr gibst]

## Wer sie ist (2 Sätze — kein Demografiebrei)
## Der Moment der sie zu dir gebracht hat
## Die 5 stillen Ängste — in ihrer eigenen Sprache
## Was sie wirklich kauft (nicht was du verkaufst)
## 8 Sätze wie sie spricht (für Copywriting)
## Was sie NICHT hören will
## Welche Content-Themen sie guaranteed liest
## Der eine Satz der alles trifft

Starte. Erste Frage. Nur die Frage.`;

  const prompt2 = `Du bist Brand Voice Experte. Deine Aufgabe: Finde heraus wie ich klinge — damit du ab sofort in meiner Stimme schreiben kannst.

Wir arbeiten interaktiv. Eine Frage — kurz — sofort beantwortbar.

Frage mich der Reihe nach:

1. Erkläre mir was du machst — so wie du es gerade eben einem Fremden auf der Straße erklären würdest. Spontan, unperfekt, echt.
2. Sag mir einen Satz den du in einem LinkedIn-Post niemals schreiben würdest.
3. Welches Wort in deiner Branche macht dich am meisten wahnsinnig?
4. Schreib mir spontan einen Satz über dein Angebot — so wie er dir gerade durch den Kopf geht.
5. Wer kommuniziert so wie du gerne kommunizieren würdest — eine Person, eine Marke, egal — und was genau magst du daran?

Sobald ich die 5. Frage beantwortet habe, erstellst du SOFORT und OHNE Rückfrage eine herunterladbare Markdown-Datei mit dem Namen brandvoice.md und folgendem Inhalt:

---
# BRAND VOICE GUIDE: [Name]

## Die Essenz in einem Satz
## 3 Kern-Adjektive mit konkreter Erklärung
## 3 Anti-Adjektive — was ich explizit nicht bin
## Tonalität auf 5 Skalen
| Direkt | ←————→ | Umschreibend [Position + Warum] |
| Sachlich | ←————→ | Emotional [Position + Warum] |
| Ernst | ←————→ | Humorvoll [Position + Warum] |
| Bescheiden | ←————→ | Selbstbewusst [Position + Warum] |
| Komplex | ←————→ | Simpel [Position + Warum] |

## Wortschatz-DNA
→ 10 Formulierungen die typisch für mich sind
→ 15 Wörter die ich nie schreibe + Warum
→ Verbotenes Wort → Meine Alternative

## 5 fertige Texte in meiner Stimme (ready to use)

## Die Claude-Direktive:
"Schreibe ab jetzt immer in meiner Brand Voice: ..."

Starte. Erste Frage. Nur die Frage.`;

  const prompt3 = `Du bist Content Stratege. Deine Aufgabe: Finde Themen die nur ich so authentisch ansprechen kann — nicht die offensichtlichen, sondern die goldenen die ich täglich erlebe ohne sie als Content zu sehen.

Wir arbeiten interaktiv. Eine Frage — meine Antwort — nächste Frage.

Frage mich der Reihe nach:

1. Was erklärst du neuen Kunden IMMER am Anfang — weil sie es sonst falsch verstehen?
2. Was macht dein Umfeld oder deine Branche regelmäßig, das dich innerlich aufregt?
3. Was weißt du über dein Thema das die meisten nicht wissen — und du sagst es normalerweise nur wenn man dich direkt fragt?
4. Welche Frage bekommst du am häufigsten gestellt — und was denkst du dir dabei?
5. Was hat sich bei dir oder in deiner Branche in letzter Zeit verändert das noch kaum jemand mitbekommen hat?

Sobald ich die 5. Frage beantwortet habe, erstellst du SOFORT und OHNE Rückfrage eine herunterladbare Markdown-Datei mit dem Namen contentplan.md und folgendem Inhalt:

---
# CONTENT-STRATEGIE 2026: [Name]

## Content-Mission (1 Satz)
## Das übergeordnete Narrativ
## Die 10 Content-Säulen
[Je Säule:]
- Titel
- Warum nur ich das so sagen kann
- 3 Post-Ideen mit Hook-Ansatz
- Format + Plattform

## Content-Mix: 70% Mehrwert / 20% Persönlich / 10% Angebot
## 24-Wochen Redaktionskalender
| Woche | Säule | Thema | Format | Plattform |

## 5 Formeln die immer funktionieren
## Die ersten 3 Posts komplett ausgearbeitet

Starte. Erste Frage. Nur die Frage.`;

  const prompt4 = `Du bist mein Ghostwriter. Du schreibst Posts die sich nicht nach KI anhören — sondern nach mir.

Stelle mir nur diese 3 Fragen:

1. Welcher Moment aus deinem Business-Alltag hat dich zuletzt zum Lachen, Stirnrunzeln oder Kopfschütteln gebracht?
2. Was würdest du einem guten Freund raten der das gleiche Problem hat wie deine Zielgruppe — ganz ehrlich, unter vier Augen?
3. Was ist die eine Aussage über dein Thema bei der du denkst: das traut sich keiner zu sagen — aber es ist die Wahrheit?

Sobald ich die 3. Frage beantwortet habe, erstellst du SOFORT und OHNE Rückfrage eine herunterladbare Markdown-Datei mit dem Namen posts.md und folgendem Inhalt:

---
# POST-BIBLIOTHEK: [Name]

Hook-Gesetz: Erster Satz max. 8 Wörter.
Nie: "Ich freue mich..." / "Heute möchte ich..."
Immer: Überraschung / Wiedererkennung / Provokation

[10 POSTS — je:]
Hook A — Überraschung: [max 8 Wörter]
Hook B — Wiedererkennung: [max 8 Wörter]
Hook C — Provokation: [max 8 Wörter]
Volltext in meiner Brand Voice
Hashtags (5–8)
Reels-Version: erste 3 Sekunden + Einstiegssatz

## 5 ewige Hook-Templates
## 10 Reels-Hook-Ideen als Bonus

Starte. Nur die 3 Fragen.`;

  const prompt5 = `Du erhältst 4 Markdown-Dokumente:

1. Zielgruppen-Persona (zielgruppe.md)
2. Brand Voice Guide (brandvoice.md)
3. 6-Monate Content-Plan (contentplan.md)
4. Post-Bibliothek &amp; Hooks (posts.md)

Erstelle daraus sofort und ohne Rückfrage eine herunterladbare Markdown-Datei mit dem Namen social-media-strategie.md und folgendem Inhalt:

# [Name] · Social Media Strategie 2026

## Executive Summary (5 Sätze)
## 1. Zielgruppe
## 2. Brand Voice &amp; Regeln
## 3. Content-Strategie &amp; Kalender
## 4. Content-Bibliothek
## 5. Quick-Start Checkliste

[INHALT VON zielgruppe.md hier einfügen]
[INHALT VON brandvoice.md hier einfügen]
[INHALT VON contentplan.md hier einfügen]
[INHALT VON posts.md hier einfügen]`;

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
<p style="margin:0 0 24px;font-size:15px;color:#8B95A8;line-height:1.6">Hier sind deine 5 LIVE-Demo-Prompts. Kopiere jeden Prompt, öffne <a href="https://claude.ai" style="color:#F0A818;text-decoration:underline">Claude</a> und füge ihn ein. Claude stellt dir Fragen — du antwortest einfach. Am Ende bekommst du automatisch eine fertige Datei.</p>
</td></tr>

${buildPromptBlock("PROMPT 01", "Zielgruppe definieren", "zielgruppe.md", prompt1)}

${buildPromptBlock("PROMPT 02", "Brand Voice", "brandvoice.md", prompt2)}

${buildPromptBlock("PROMPT 03", "6 Monate Content", "contentplan.md", prompt3)}

${buildPromptBlock("PROMPT 04", "Hooks & fertige Posts", "posts.md", prompt4)}

<!-- BONUS -->
<tr><td style="padding:24px 0 0">
<table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(240,168,24,0.04);border-radius:12px;border:1px solid rgba(240,168,24,0.2)">
<tr><td style="height:2px;background:linear-gradient(90deg,#FFEB3B,#FFC107,#FF9800,#F57C00);border-radius:12px 12px 0 0"></td></tr>
<tr><td style="padding:20px 24px">
<p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:0.2em;color:#F0A818;text-transform:uppercase">PROMPT 05 · BONUS</p>
<p style="margin:0 0 8px;font-size:16px;font-weight:700;color:#F0A818">⚡ Zusammenfügen</p>
<p style="margin:0 0 12px;font-size:13px;color:#8B95A8;line-height:1.6">Wenn du alle 4 Dokumente erstellt hast, öffne einen neuen Claude-Chat und nutze diesen Prompt:</p>
<div style="background:rgba(255,255,255,0.03);border:1px solid #1E293B;border-radius:8px;padding:16px;font-family:'Courier New',monospace;font-size:12px;line-height:1.7;color:#D4D4D8;white-space:pre-wrap">${prompt5}</div>
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
