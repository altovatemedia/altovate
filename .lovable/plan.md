
## Social-Media-Seite: Leistungsuebersicht statt Preisliste + Warteliste

### Zusammenfassung

Die Seite wird von einer Paket-Preisliste zu einer informativen Leistungsuebersicht umgebaut -- analog zur Werbeanzeigen-Seite. Besucher sollen den Umfang professioneller Social-Media-Betreuung verstehen, ohne konkrete Preise zu sehen. Social Media "Done for You" wird als limitiertes Angebot mit Warteliste dargestellt. Die Strategie-Session bleibt als einziger direkter Einstiegspunkt.

### Was sich aendert

**Datei: `src/pages/SocialMedia.tsx`**

**1. Preispakete entfernen, Leistungsuebersicht einfuegen**
- Das `oneTimePackages`-Array (Zeilen 33-90) wird durch ein `workloadItems`-Array ersetzt, das den Aufwand professioneller Social-Media-Arbeit zeigt (analog zu Werbeanzeigen):
  - Zielgruppenanalyse & Content-Strategie
  - Contentplanung & Redaktionskalender
  - Content-Erstellung (Fotos, Reels, Grafiken)
  - Community Management & Interaktion
  - Hashtag-Strategie & SEO-Optimierung
  - Performance-Analyse & Reporting
  - Profil-Optimierung & Story-Highlights
- Darstellung als Grid mit Titel + Beschreibungstext (wie workloadItems auf der Werbeanzeigen-Seite)

**2. Pricing-Cards durch Leistungsuebersicht-Sektion ersetzen**
- Die Sektion "Einmalige Bausteine" (Zeilen 127-180) mit den 4 Pricing-Cards wird komplett ersetzt durch:
  - Headline: "Was professionelle Social-Media-Betreuung umfasst"
  - Grid mit den workloadItems (Titel + Beschreibung pro Karte)
  - Ziel: Besucher erkennen den Aufwand und die Komplexitaet

**3. "Slots belegt" + Warteliste einfuegen**
- Neue Sektion nach der Leistungsuebersicht (vor den interaktiven Tools):
  - Status-Badge: "Kapazitaet aktuell ausgelastet"
  - Headline: "Social-Media-Betreuung"
  - Erklaertext: Was das Angebot umfasst + warum limitiert
  - Warteliste-Formular (E-Mail + Consent-Checkbox + Datenschutz-Link)
  - Gleiche Logik wie Werbeanzeigen/DoneForYouSection: `supabase.functions.invoke('send-contact-email')` mit `type: 'waitlist'`
  - Alternativ-Hinweis: Verweis auf Strategie-Session als sofort buchbare Option mit Link/Button zu `/erstkontakt`

**4. Neue Imports**
- `useState` (fuer Warteliste-State: email, consent, isSubmitting, isSubmitted)
- `Link` von react-router-dom (fuer Datenschutz-Link und Strategie-Session-Verweis)
- `Loader2` von lucide-react (fuer Submit-Loading)
- `Input`, `Checkbox` von UI-Komponenten
- `supabase` Client
- `toast` von sonner

**5. Interaktive Tools bleiben**
- AiDemoTool, PackageFinder, VisibilityAnalysis bleiben erhalten
- Paketfinder-Text ggf. anpassen: "Welches Angebot passt?" statt "Welches Paket passt?"

**6. Meta-Description aktualisieren**
- "Pakete ab 390 EUR" entfernen, stattdessen neutraler: "Content-Erstellung, Instagram-Betreuung und Reels-Produktion fuer Unternehmen."

**7. Nicht mehr benoetigte Imports entfernen**
- `Star`, `ArrowRight` (keine Pricing-Cards mehr)

### Was gleich bleibt
- Hero-Section (Headline + Ich-Perspektive)
- Interaktive Tools (AiDemoTool, PackageFinder, VisibilityAnalysis)
- SocialMediaPreferences-Komponente
- ContactFunnel, Footer, ChatBot
- SEOSchema, Breadcrumbs, Scroll-Progress
- Navigation

### Technische Details

Die Warteliste nutzt das bestehende Pattern aus `DoneForYouSection.tsx` und `Werbeanzeigen.tsx`:

```text
State: email, consent, isSubmitting, isSubmitted
Submit: supabase.functions.invoke('send-contact-email', { body: { type: 'waitlist', email } })
Edge Function: 'waitlist' type bereits implementiert in send-contact-email
```

Kein neuer Edge-Function-Code noetig -- der `waitlist`-Typ existiert bereits.

### Seitenstruktur (neu)

```text
Navigation + Breadcrumb
Hero (unveraendert)
Leistungsuebersicht (NEU -- ersetzt Pricing-Cards)
"Slots belegt" + Warteliste (NEU)
Interaktive Tools (bestehend)
SocialMediaPreferences (bestehend)
ContactFunnel (bestehend)
Footer + ChatBot
```
