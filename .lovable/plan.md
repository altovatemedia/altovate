

## Neue Kategorie "Performance & Gesundheit" auf der Tools-Seite

### Was sich aendert

Die `/tools`-Seite wird um einen neuen Abschnitt erweitert, der sich thematisch von den KI-Tools absetzt. Unter einer eigenen Zwischen-Headline (z.B. "Performance & Gesundheit") werden Empfehlungen aus dem Bereich Fitness, Ernaehrung und Nahrungsergaenzung praesentiert -- mit persoenlichem Kontext zu Alex' 15 Jahren Erfahrung in diesem Bereich.

### Seitenstruktur (erweitert)

Die bisherige Seite bleibt unveraendert. Unterhalb der KI-Tool-Karten kommt:

1. **Ueberleitung/Intro-Block**: Ein kurzer Text, der den Schwenk von KI-Tools zu Performance-Themen macht. Kernbotschaft: "Meine Wurzeln liegen in der Fitness-Welt. 15 Jahre Erfahrung in Fitness, Ernaehrung und Bodybuilding. Gerade fuer Unternehmer kann man hier unglaublich viel herausholen."
2. **One Step Further Verweis**: Hinweis, dass die Basis (Bewegung + Ernaehrung) stimmen muss, mit Link zu One Step Further fuer individuelle Betreuung.
3. **Supplement-Karten**: Zwei Karten im selben Liquid-Glass-Design:
   - **Adaptogen-Komplex** (z.B. Ashwagandha) -- Stresskiller Nr. 1 fuer Unternehmer
   - **Vitalpilze** (z.B. Loewenmaehne) -- kognitive Performance
   - Beide mit Rabattcode ONESTEP und Affiliate-Link zu Zec+

### Texte (Entwurf)

**Intro-Block:**
> Neben KI-Tools gibt es noch einen Bereich, in dem ich 15 Jahre Erfahrung mitbringe: Fitness, Ernaehrung und Nahrungsergaenzung. Gerade als Unternehmer kannst du hier unglaublich viel fuer deine taegliche Leistungsfaehigkeit herausholen. Die Basis -- Bewegung und Ernaehrung -- muss natuerlich stimmen. Wer dort Unterstuetzung sucht, dem empfehle ich One Step Further.

**Adaptogen-Komplex:**
> Stress gehoert zum Unternehmer-Alltag. Adaptogene wie Ashwagandha helfen dem Koerper, besser mit chronischem Stress umzugehen -- natuerlich und ohne Nebenwirkungen. Fuer mich ein absoluter Game-Changer im Alltag.

**Vitalpilze (Loewenmaehne):**
> Loewenmaehne-Extrakt (Lion's Mane) ist einer der spannendsten Vitalpilze fuer kognitive Leistung: Fokus, Klarheit, Gedaechtnisleistung. Ich nehme ihn taeglich und merke den Unterschied besonders an langen Arbeitstagen.

---

### Technische Details

**Datei:** `src/pages/Tools.tsx`

1. **Hero-Text anpassen**: Die Meta-Description und den Lead-Text leicht erweitern, damit die Seite nicht mehr nur "KI-Tools" verspricht, sondern breiter als "Empfehlungen" positioniert ist.

2. **Neuer Abschnitt nach den Tool-Karten**: Eine neue `<section>` mit:
   - Zwischen-Headline "Performance & Gesundheit" (gold-gradient)
   - Intro-Text mit persoenlichem Hintergrund (Fitness-Wurzeln, 15 Jahre Erfahrung)
   - Link zu One Step Further (externer Link, eigene kleine Karte oder Inline-Link)
   - Zwei Supplement-Karten im gleichen Grid-Layout wie die KI-Tools, aber mit:
     - Kategorie-Badge "Nahrungsergaenzung"
     - Rabattcode "ONESTEP" als Benefit (statt Prozent-Rabatt)
     - Gleicher Affiliate-Link zu Zec+ fuer beide
   - Placeholder-Icons (Lucide: `Leaf` fuer Adaptogene, `Brain` fuer Vitalpilze) bis echte Produktbilder hochgeladen werden

3. **Keine neuen Dateien noetig** -- alles in `Tools.tsx` ergaenzt.

| Datei | Aenderung |
|-------|-----------|
| `src/pages/Tools.tsx` | Neuer Abschnitt "Performance & Gesundheit" mit Intro, One Step Further Link, zwei Supplement-Karten |

