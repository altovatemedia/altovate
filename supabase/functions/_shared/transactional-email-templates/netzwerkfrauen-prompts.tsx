import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Link, Section, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "altovate"

interface Props { name?: string }

const PromptBlock = ({ num, title, saveAs, children }: { num: string; title: string; saveAs: string; children: string }) => (
  <Section style={promptCard}>
    <div style={promptGradientBar} />
    <Text style={promptNum}>{num}</Text>
    <Text style={promptTitle}>{title}</Text>
    <Text style={promptSaveAs}>Speichere das Ergebnis als: {saveAs}</Text>
    <Text style={promptCode}>{children}</Text>
  </Section>
)

const NetzwerkfrauenPromptsEmail = ({ name }: Props) => (
  <Html lang="de" dir="ltr">
    <Head />
    <Preview>Deine 5 KI-Prompts für Social Media — kopieren, einfügen, loslegen.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={logoText}>ALTOVATE</Text>

        <Heading style={h1}>{name ? `Hallo ${name},` : 'Hallo,'}</Heading>
        <Text style={text}>danke — du bist dabei.</Text>
        <Text style={text}>
          Hier sind deine 5 LIVE-Demo-Prompts. Kopiere jeden Prompt, öffne{' '}
          <Link href="https://claude.ai" style={link}>Claude</Link> und füge ihn ein.
          Claude stellt dir Fragen — du antwortest einfach. Am Ende bekommst du automatisch eine fertige Datei.
        </Text>

        <PromptBlock num="PROMPT 01" title="Zielgruppe definieren" saveAs="zielgruppe.md">{prompt1}</PromptBlock>
        <PromptBlock num="PROMPT 02" title="Brand Voice" saveAs="brandvoice.md">{prompt2}</PromptBlock>
        <PromptBlock num="PROMPT 03" title="6 Monate Content" saveAs="contentplan.md">{prompt3}</PromptBlock>
        <PromptBlock num="PROMPT 04" title="Hooks & fertige Posts" saveAs="posts.md">{prompt4}</PromptBlock>

        {/* BONUS */}
        <Section style={bonusCard}>
          <div style={promptGradientBar} />
          <Text style={bonusNum}>PROMPT 05 · BONUS</Text>
          <Text style={bonusTitle}>⚡ Zusammenfügen</Text>
          <Text style={bonusSub}>Wenn du alle 4 Dokumente erstellt hast, öffne einen neuen Claude-Chat und nutze diesen Prompt:</Text>
          <Text style={promptCode}>{prompt5}</Text>
        </Section>

        <Hr style={hr} />
        <Text style={text}>Viel Erfolg — und wenn du Fragen hast, bin ich auf LinkedIn erreichbar.</Text>
        <Text style={signName}>Alex Buchmann</Text>
        <Text style={signRole}>Gründer · Altovate GmbH</Text>
        <Text style={signLinks}>
          <Link href="https://www.linkedin.com/in/alexander-buchmann/" style={link}>LinkedIn</Link>
          {' · '}
          <Link href="https://altovate.de" style={link}>altovate.de</Link>
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: NetzwerkfrauenPromptsEmail,
  subject: 'Deine 5 KI-Prompts für Social Media 🎯',
  displayName: 'NetzwerkFrauen KI-Prompts',
  previewData: { name: 'Lisa' },
} satisfies TemplateEntry

/* ─── Prompt content ─── */

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

Starte. Erste Frage. Nur die Frage.`

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

Starte. Erste Frage. Nur die Frage.`

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

Starte. Erste Frage. Nur die Frage.`

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

Starte. Nur die 3 Fragen.`

const prompt5 = `Du erhältst 4 Markdown-Dokumente:

1. Zielgruppen-Persona (zielgruppe.md)
2. Brand Voice Guide (brandvoice.md)
3. 6-Monate Content-Plan (contentplan.md)
4. Post-Bibliothek & Hooks (posts.md)

Erstelle daraus sofort und ohne Rückfrage eine herunterladbare Markdown-Datei mit dem Namen social-media-strategie.md und folgendem Inhalt:

# [Name] · Social Media Strategie 2026

## Executive Summary (5 Sätze)
## 1. Zielgruppe
## 2. Brand Voice & Regeln
## 3. Content-Strategie & Kalender
## 4. Content-Bibliothek
## 5. Quick-Start Checkliste

[INHALT VON zielgruppe.md hier einfügen]
[INHALT VON brandvoice.md hier einfügen]
[INHALT VON contentplan.md hier einfügen]
[INHALT VON posts.md hier einfügen]`

/* ─── Styles ─── */
const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { maxWidth: '600px', margin: '0 auto', padding: '40px 24px' }
const logoText = { fontSize: '13px', fontWeight: '700' as const, letterSpacing: '0.18em', color: '#F0A818', textTransform: 'uppercase' as const, textAlign: 'center' as const, margin: '0 0 32px' }
const h1 = { fontSize: '20px', fontWeight: '700' as const, color: '#0B1120', margin: '0 0 8px' }
const text = { fontSize: '15px', color: '#555', lineHeight: '1.6', margin: '0 0 16px' }
const link = { color: '#F0A818', textDecoration: 'underline' }

const promptCard = { backgroundColor: '#0B1120', borderRadius: '12px', border: '1px solid #1E293B', padding: '20px 24px', marginTop: '24px' }
const promptGradientBar = { height: '2px', background: 'linear-gradient(90deg, #FFEB3B, #FFC107, #FF9800, #F57C00)', borderRadius: '12px 12px 0 0', marginBottom: '12px' }
const promptNum = { margin: '0 0 4px', fontSize: '10px', fontWeight: '700' as const, letterSpacing: '0.2em', color: '#F0A818', textTransform: 'uppercase' as const }
const promptTitle = { margin: '0 0 4px', fontSize: '16px', fontWeight: '700' as const, color: '#F1F1F1' }
const promptSaveAs = { margin: '0 0 12px', fontSize: '12px', color: '#8B95A8' }
const promptCode = { background: 'rgba(255,255,255,0.03)', border: '1px solid #1E293B', borderRadius: '8px', padding: '16px', fontFamily: "'Courier New', monospace", fontSize: '12px', lineHeight: '1.7', color: '#D4D4D8', whiteSpace: 'pre-wrap' as const }

const bonusCard = { backgroundColor: 'rgba(240,168,24,0.06)', borderRadius: '12px', border: '1px solid rgba(240,168,24,0.2)', padding: '20px 24px', marginTop: '24px' }
const bonusNum = { margin: '0 0 4px', fontSize: '10px', fontWeight: '700' as const, letterSpacing: '0.2em', color: '#F0A818', textTransform: 'uppercase' as const }
const bonusTitle = { margin: '0 0 8px', fontSize: '16px', fontWeight: '700' as const, color: '#F0A818' }
const bonusSub = { margin: '0 0 12px', fontSize: '13px', color: '#555', lineHeight: '1.6' }

const hr = { borderColor: '#E5E7EB', margin: '32px 0' }
const signName = { margin: '16px 0 0', fontSize: '15px', fontWeight: '700' as const, color: '#0B1120' }
const signRole = { margin: '2px 0 0', fontSize: '12px', color: '#8B95A8' }
const signLinks = { margin: '8px 0 0', fontSize: '12px' }
