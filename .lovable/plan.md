## Homepage-Relaunch "Löwen-Fokus"

Übernahme der Copy aus `altovate-startseite.md` in die bestehenden Sektionen. Layout, Animationen, Farben und das "Liquid Glass"-Design bleiben unverändert — nur Texte, Reihenfolge einzelner Sektionen und ein paar strukturelle Details werden angepasst.

### Reihenfolge der Sektionen (nach Doc)

```text
1  Hero                  → NewHero
2  Problem               → PainPoints
3  Differenzierung       → Positioning
4  Das System (5 Bausteine)→ SystemProcess
5  Prozess (3 Phasen)    → NEU: ProcessPhases
6  Pricing (3 Pakete)    → Offers
7  Förderung             → FoerderungHint
8  Strategische Begleitung→ OneOnOneSection
9  Done for You          → DoneForYouSection
10 Cases                 → CaseStudies
11 Founder               → AboutAlex
12 Social Proof (3 Quotes)→ NEU: TestimonialQuotes (statt GoogleReviews-Wand)
13 Zielgruppe            → TargetAudience
14 FAQ                   → FAQ
15 Schluss-CTA           → FinalCTA
```

Raus: `WhyNotFree` (Inhalt wandert in FAQ als Frage 5), `MarketingAnalyse`-Sektion bleibt als Lead-Capture im Hintergrund (Anker `#marketing-analyse`), wird aber aus dem sichtbaren Flow entfernt — Hero-CTA scrollt stattdessen direkt zur `Offers`-Sektion oder öffnet den `BookingModal` mit "Diagnose anfragen".

### Inhaltliche Änderungen pro Sektion

**Hero (`NewHero.tsx`)**
- H1: „Wir bauen Marketing-Systeme, die Anfragen liefern."
- Sub: regionaler Bezug Saar-Mosel/Trier/Luxemburg, Strategie+Content+Performance-Ads als ein System.
- Bullet-Points raus → ersetzt durch Sub-Absatz mit Outcome-Fokus.
- CTAs: „Kostenlose Analyse anfordern" (primär, scrollt zu Offers/Diagnose) + „Gespräch buchen" (Cal.com).
- Microcopy: „Unverbindlich. Antwort in 24 Stunden."

**TrustBar (`TrustBar.tsx`)**
- Eine Zeile: `5,0 ★ Google (9 Bewertungen) · BNI Trier-Koblenz · bis zu 80 % förderfähig · +200 Leads pro Kampagne`

**PainPoints**
- H2: „Wenn Marketing keine Anfragen liefert, fehlt das System."
- Intro angepasst, 3 Symptom/Ursache-Paare statt 4 generischer Items.
- Schluss: „Altovate baut die Schicht zwischen Klick und Termin."

**Positioning**
- H2: „Wir bauen Systeme. Keine Content-Pakete."
- 3 Punkte: Strategie zuerst / Direkt mit dem Gründer / Du behältst die Kontrolle.

**SystemProcess**
- H2: „Fünf Bausteine, ein System."
- Steps mit Outcome-Suffix (z. B. „Analyse → Wo liegt das größte Wachstumspotenzial?").

**Neu: `ProcessPhases.tsx`**
- 3-Spalten: Analyse (1–2 Wochen), Blueprint (3–4 Wochen), Umsetzung (ab 12 Wochen).
- CTA: „Analyse anfordern" (öffnet `BookingModal` mit Diagnose).
- Stil: gleiche `liquid-glass` Cards wie `Positioning`.

**Offers (Pricing)**
- Preise & Texte gemäß Doc:
  - Diagnose 60 Min · 590 € · bis 80 % förderfähig
  - System Analyse 90 Min · 890 € · bis 80 % förderfähig
  - System Blueprint Projekt · ab 4.500 € · bis 50 % förderfähig
- „Ergebnis"-Block als Outcome-Satz, nicht als Listen-Wiederholung.
- Footer-Microcopy „Bezahlte Session – du bekommst echten Mehrwert." raus (Floskel laut Doc).
- Zitat unter den Cards bleibt.

**FoerderungHint**
- H2 inline: „Bis zu 80 % staatlicher Zuschuss."
- Copy laut Doc, CTA: „Förderung prüfen" → `/foerderung`.

**OneOnOneSection (Strategische Begleitung)**
- H2: „Wenn das System steht, beginnt die Arbeit."
- 12 Wochen / 4.800 € · 24 Wochen / 8.400 € (inkl. MwSt.) — bleibt strukturell gleich.
- Hinweis: „Zusammenarbeit nur nach vorheriger Analyse-Session. Begrenzte Kapazität."

**DoneForYouSection**
- H2: „Komplette Umsetzung. Auf Anfrage."
- Bulletliste an Doc angeglichen (6 Punkte).
- „ab 5.000 € / Monat · aktuell keine freien Plätze" prominent.

**CaseStudies**
- 3 Haupt-Cases mit großer Kennzahl (Philly's 60.000 / Circle +200 / BAV „Komplexes Thema, einfach erklärt") — bleibt nahezu identisch.
- Kleine Cases (Ayler Kupp, Brotchi) bleiben, da nicht im Doc verboten und gut für Tiefe.
- Logo-Strip gemäß Doc-Reihenfolge.

**AboutAlex (Founder)**
- H2: „Wer hier antwortet."
- Copy aus Doc Sektion 11, Schluss-CTA: „Strategie-Session buchen" (öffnet `BookingModal`).

**Neu: `TestimonialQuotes.tsx` ersetzt `GoogleReviews` auf der Homepage**
- 3 prägnante Zitate (Joel Adler, s g, Micho) als zentrierte Quote-Cards.
- Sub: „5,0 ★ basierend auf 9 Google-Bewertungen."
- `GoogleReviews.tsx` bleibt als Komponente erhalten (für eventuelle Sub-Pages), wird aus `Index.tsx` entfernt.

**TargetAudience**
- H2: „Für wen Altovate arbeitet."
- 4 Branchen wie aktuell, ergänzt um Negativ-Abgrenzung: „Wenn du gerade nach jemandem suchst, der drei Posts pro Woche liefert — das ist nicht Altovate."

**FAQ**
- 5 Fragen statt 4 (neu: „Warum gibt es keine kostenlosen Erstgespräche?" — übernimmt den Inhalt von WhyNotFree).
- Antworten auf Doc-Versionen aktualisiert (90-Tage-Erwartung, Budget ab 500 €/Monat, etc.).
- `faqItems` in `Index.tsx` (für FAQPage-Schema) entsprechend synchronisieren.

**FinalCTA**
- H2: „Bereit für planbare Anfragen?"
- Sub und Microcopy aus Doc.

### Technische Details

- `Index.tsx`: Sektionsreihenfolge anpassen, `WhyNotFree` & `GoogleReviews` & `MarketingAnalyse` aus dem sichtbaren Flow entfernen, neue `ProcessPhases` und `TestimonialQuotes` einbinden (lazy), `MarketingAnalyse` ggf. unsichtbar als Anker behalten oder ganz entfernen → Hero/FinalCTA-CTAs auf `BookingModal` umstellen.
- `<Helmet>` Title/Description aktualisieren auf neue Positionierung.
- `SEOSchema` `faqItems` an neue 5 FAQs anpassen.
- `prerender` Edge Function Home-Route Body-Content auf neue H2/Texte updaten, damit Bot-Sicht Parität hat.
- Keine neuen Dependencies, kein Datenmodell-Change, keine Migrations.
- Keine Emojis (Memory-Regel), Dancing-Script/Inter-Typografie und Gold/Navy-Palette unverändert.

### Aus Doc bewusst nicht übernommen / offene Punkte

- Doc nennt „Logo-Strip Philly's · Circle Fitness · BAV Workflow · Ayler Kupp · Brotchi · Taza · SG Hochwald · LumaVision · Zec+ Nutrition" — exakt das, was bereits im Logo-Marquee steht. Keine Änderung nötig.
- Founder-Foto rechts im Hero ist bereits so. Bleibt.
- `MarketingAnalyse`-Quiz (Doc erwähnt es nicht) → vorgeschlagen: aus Homepage entfernen, Komponente bleibt erhalten und kann auf einer separaten Landing genutzt werden. Falls du den Quiz-Funnel auf der Startseite behalten willst, sag Bescheid.

### Reihenfolge der Umsetzung

1. Copy-Updates in bestehenden Komponenten (NewHero, TrustBar, PainPoints, Positioning, SystemProcess, Offers, FoerderungHint, OneOnOne, DoneForYou, AboutAlex, TargetAudience, FAQ, FinalCTA).
2. Neu: `ProcessPhases.tsx`, `TestimonialQuotes.tsx`.
3. `Index.tsx` Sektionsreihenfolge + lazy-Imports umstellen, `faqItems` & `<Helmet>` aktualisieren.
4. `prerender` Edge Function für `/` an neue H2s/Description angleichen.
