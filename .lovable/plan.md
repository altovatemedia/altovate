

# Plan: Textliche Optimierung der Startseite altovate.de

Alle Anderungen sind rein textlich. Layout, Design, Farbschema und Struktur bleiben vollstandig erhalten.

---

## Ubersicht der Anderungen

| # | Anforderung | Umsetzung |
|---|---|---|
| 1 | Hero-Text scharfen | Subline + Zusatztext + CTA-Button in `NewHero.tsx` andern |
| 2 | Diagnose-Abschnitt | Bestehende `PainPoints.tsx` textlich anpassen (gleiche Komponente, neuer Text) |
| 3 | Altovate System | Bestehende `SystemProcess.tsx` textlich anpassen (gleiche Komponente, neuer Text) |
| 4 | Strategische Positionierung | Bestehende `Positioning.tsx` textlich anpassen |
| 5 | Referenz-Einleitung | Kurzen Einleitungstext in `CaseStudies.tsx` anpassen |
| 6 | Zielgruppe | Neue schlanke Textkomponente `TargetAudience.tsx` erstellen (nutzt bestehendes `Reveal`-Pattern) |
| 7 | Lead-Magnet | Neue Textkomponente `MarketingAnalyse.tsx` mit CTA-Button, der das bestehende `BookingModal` offnet |
| 8 | Formular | Neues Inline-Formular `MarketingAnalyseForm.tsx` mit den 6 Feldern, sendet uber bestehende `send-contact-email` Edge Function |
| 9 | Alex-Abschnitt | Bleibt komplett unverandert |
| 10 | Abschluss-CTA | `FinalCTA.tsx` Text anpassen |

---

## Technische Details

### Datei-Anderungen (bestehende Dateien)

**`src/components/sections/NewHero.tsx`**
- Subline-Text andern zu: "Altovate entwickelt Marketing- und Lead-Systeme, die planbar Kundenanfragen generieren..."
- Zusatztext erganzen: "Strategie, Content und Performance-Ads kombiniert..."
- Primary CTA-Button: "Kostenlose Marketing Analyse" (scrollt zum Lead-Magnet-Abschnitt statt BookingModal)
- Secondary CTA bleibt
- Microcopy anpassen: "Unverbindlich. Analyse in 24h."

**`src/components/sections/PainPoints.tsx`**
- Headline andern zu: "Warum Social Media fur viele Unternehmen nicht funktioniert"
- Subtext andern zum geforderten Text
- Die 4 Pain-Point-Karten textlich anpassen: "Content ohne klare Strategie", "fehlende Werbekampagnen", "kein System zur Leadgewinnung", "Social Media wird nur bespielt, nicht als Vertriebskanal genutzt"
- Conclusion andern zu: "Genau hier setzt Altovate an."

**`src/components/sections/Positioning.tsx`**
- Headline andern zu: "Mehr als eine klassische Marketingagentur"
- Text andern zu den geforderten Inhalten
- Drei Focus-Points anpassen: "Klare Strategie statt Aktionismus", "Strukturierte Leadgewinnung statt zufalliger Reichweite", "Marketing, das dauerhaft fur dein Unternehmen arbeitet"
- Optional-Text erganzen

**`src/components/sections/SystemProcess.tsx`**
- Headline andern zu: "Das Altovate Marketing System"
- Subtext andern
- Die 4 (auf 5) Schritte anpassen: Analyse, Positionierung, Content-System, Performance Ads, Lead-System (5 Schritte statt 4, Grid anpassen auf `md:grid-cols-5`)

**`src/components/sections/CaseStudies.tsx`**
- Einleitungstext andern zu: "Ergebnisse aus realen Projekten zeigen, wie Marketing-Systeme in der Praxis funktionieren."

**`src/components/sections/FinalCTA.tsx`**
- Headline andern zu: "Bereit fur planbare Kundenanfragen?"
- Text erganzen: "Lass uns dein aktuelles Marketing analysieren..."
- CTA-Button: "Kostenlose Marketing Analyse anfordern" (scrollt zum Formular)

### Neue Dateien

**`src/components/sections/TargetAudience.tsx`**
- Einfache Textsektion im bestehenden Stil (nutzt `Reveal`, `container`, gleiche Typografie)
- Headline: "Fur welche Unternehmen Altovate arbeitet"
- Text + Branchenliste als einfache Aufzahlung mit bestehenden Check-Icons

**`src/components/sections/MarketingAnalyse.tsx`**
- Lead-Magnet-Sektion mit Headline, Text, Vorteils-Liste und eingebettetem Formular
- Formular direkt inline (keine Modal): Name, Unternehmen, Website, Instagram/LinkedIn, Branche, großte Herausforderung
- Sendet uber bestehende `send-contact-email` Edge Function (type: `marketing-analyse`)
- CTA-Button: "Analyse anfordern"
- Nutzt bestehende UI-Komponenten (`Input`, `Textarea`, `Button`, `Label`)

### Seitenreihenfolge in `Index.tsx`

```text
NewHero
PainPoints (= Diagnose, Punkt 2)
Positioning (= Strategische Positionierung, Punkt 4)
SystemProcess (= Altovate System, Punkt 3)
Offers
FoerderungHint
OneOnOneSection
WhyNotFree
AboutAlex (unverandert, Punkt 9)
DoneForYouSection
TargetAudience (NEU, Punkt 6)
CaseStudies (mit neuem Einleitungstext, Punkt 5)
GoogleReviews
MarketingAnalyse (NEU, Punkt 7+8, mit Formular)
FAQ
FinalCTA (angepasst, Punkt 10)
```

### Edge Function

Die bestehende `send-contact-email` Edge Function unterstutzt bereits verschiedene `type`-Werte. Es wird ein neuer Type `marketing-analyse` mit den entsprechenden Feldern erganzt.

