

# Kompletter Redesign: Dark Premium Style nach Vorbild

## Vision

Die gesamte altovate.de wird von einem Light-Mode-First-Design zu einem **Dark-Premium-Design** umgebaut. Die Referenzseite zeigt den Zielstil: Dunkler Navy-Hintergrund, goldene/bernsteinfarbene Akzentfarbe, Alex als Person im Vordergrund, Premium-Kartendesign mit Glaseffekten auf dunklem Grund.

**Magenta (#EA3B5F) wird komplett ersetzt durch Gold/Amber (#D4A843).**

---

## Phase 1: Farb- und Design-System (Fundament)

### 1a: CSS-Variablen komplett neu (`src/index.css`)

Neues Farbschema:

| Token | Aktuell | Neu |
|-------|---------|-----|
| Background | #FFFFFF (weiss) | #0B1120 (tiefes Navy) |
| Card | #FFFFFF | #131B2E (leicht heller Navy) |
| Foreground/Text | #09002C | #F1F1F1 (fast weiss) |
| Muted Text | #4B4765 | #8B95A8 (gedaempftes Grau) |
| Primary (Akzent) | #EA3B5F (Magenta) | #D4A843 (Gold/Amber) |
| Primary Foreground | #FFFFFF | #0B1120 (dunkler Text auf Gold) |
| Border | #E6E4EE | #1E293B (subtile dunkle Borders) |
| Muted/Secondary BG | #F3F2F7 | #162033 (etwas helleres Navy) |

- Dark-Mode-Toggle wird entfernt (Seite ist jetzt immer dunkel)
- Die `.dark`-Klasse in CSS wird entfernt bzw. nicht mehr benoetigt
- Shadows werden angepasst: dunkle, subtile Glows statt helle Schatten
- Glassmorphism wird angepasst auf dunklen Hintergrund

### 1b: Button-Styles (`src/index.css`)

| Element | Aktuell | Neu |
|---------|---------|-----|
| `.btn-hero` | Magenta-BG, weisser Text | Gold-BG (#D4A843), dunkler Text (#0B1120), kein rounded-full sondern rounded-lg |
| `.btn-secondary` | Weisser BG, Magenta-Border | Transparenter BG, Gold-Border, weisser Text |
| Hover-Glows | Magenta-Glow | Gold-Glow |

### 1c: Tailwind Config (`tailwind.config.ts`)

- Magenta-Farbdefinitionen entfernen
- Durch Gold/Amber ersetzen
- Keyframe-Animationen beibehalten, Glow-Farben anpassen

---

## Phase 2: Navigation (`src/components/sections/NewNavigation.tsx`)

| Element | Aktuell | Neu |
|---------|---------|-----|
| Hintergrund | Weiss (Light), #1a1a1a (Dark) | Immer #0B1120 mit Backdrop-Blur |
| Text | #09002C / weiss | Immer weiss |
| Hover-Farbe | #ff1c5c (Magenta) | #D4A843 (Gold) |
| Theme-Toggle | Light/Dark Switch | **Komplett entfernen** |
| CTA-Button | Magenta `.btn-hero` | Gold-Button |
| Mobile Menu BG | Weiss/Dark | Immer dunkles Navy |

---

## Phase 3: Hero-Bereich (`src/components/sections/NewHero.tsx`)

| Element | Aktuell | Neu |
|---------|---------|-----|
| Layout | Zentriert, Text-only | **Split-Layout**: Text links, Alex-Portrait rechts (wie Referenz) |
| Hintergrund | Helles Bild mit Overlay | Dunkler Navy-BG, kein Bild |
| Headline-Akzent | `text-primary` (Magenta) | Gold-Farbe |
| Bullet-Points | X-Icons (Magenta) | Goldene Check-Icons mit erweitertem Text |
| CTA | Magenta-Button | Gold-Button mit dunklem Text |
| Portrait | Nicht vorhanden | **Grosses Alex-Portrait** rechts (alexander-portrait.png) |
| Floating Elements | Blobs + Logo-Icons | Subtiler oder entfernen |

Unterhalb des Heros: TrustBar mit "Bekannt aus" / Kunden-Logos (wie Referenz).

---

## Phase 4: Alle Sektionen anpassen

### 4a: PainPoints (`PainPoints.tsx`)
- BG: Dunkler als Haupt-BG (#0E1629)
- Cards: Dunkle glasartige Karten mit subtilen Borders (#1E293B)
- Icons: Gold statt Magenta
- Stil wie Referenz-Screenshot 3: Icon-Kreise mit Glaseffekt, zentrierter Text

### 4b: Positioning (`Positioning.tsx`)
- BG: Leicht anderer dunkler Ton fuer Abgrenzung
- Akzent-Text: Gold statt Magenta
- Cards: Dunkle Karten mit subtilen Borders

### 4c: SystemProcess (`SystemProcess.tsx`)
- BG: Dunkler Hintergrund
- Verbindungslinie: Gold-Gradient statt Magenta
- Step-Badges: Gold statt Magenta
- Icons: Gold

### 4d: Offers (`Offers.tsx`)
- Cards: Dunkle Premium-Karten (#131B2E) mit #1E293B Borders
- Icons: Gold
- Preise: Weiss auf dunkel
- CTA-Buttons: Gold
- Funding-Badges: Gold-Toene

### 4e: FoerderungHint (`FoerderungHint.tsx`)
- Dunkle Variante, Gold-Akzente

### 4f: OneOnOneSection (`OneOnOneSection.tsx`)
- Dunkle Cards, Gold-Akzente, Gold-CTA

### 4g: WhyNotFree (`WhyNotFree.tsx`)
- Dunkle Card, Gold-Icon, Gold-Badges

### 4h: AboutAlex (`AboutAlex.tsx`)
- **Grosses Portrait links, Text rechts** (wie Referenz-Screenshot 10)
- Dunkler Hintergrund mit hellem/weissem Bereich fuer Kontrast (wie Referenz)
- Gold-Akzent im Titel

### 4i: DoneForYouSection (`DoneForYouSection.tsx`)
- Dunkle Variante, Gold-Akzente

### 4j: CaseStudies (`CaseStudies.tsx`)
- Dunkle Cards auf dunklem BG
- Logo-Filter anpassen (nicht mehr invertiert)
- KPI-Zahlen: Gold statt Magenta
- Logo-Slider: Dunkler Hintergrund

### 4k: GoogleReviews (`GoogleReviews.tsx`)
- Dunkle Review-Cards
- Avatar-Farbe: Gold statt Magenta

### 4l: FAQ (`FAQ.tsx`)
- Dunkle Accordion-Cards
- Plus-Icon: Gold statt Magenta
- CTA: Gold-Button

### 4m: FinalCTA (`FinalCTA.tsx`)
- Dunkler BG mit leichtem Gold-Schimmer
- Gold-Buttons

### 4n: SignatureOffer (`SignatureOffer.tsx`)
- Dunkle Premium-Cards
- Erfolgsfarbe beibehalten fuer "0 EUR im Paket"

---

## Phase 5: Weitere Komponenten

### 5a: Footer (`Footer.tsx`)
- Bereits dunkel, minimale Anpassungen
- Magenta-Links zu Gold aendern

### 5b: StickyMobileCTA (`StickyMobileCTA.tsx`)
- Dunkler BG, Gold-Button

### 5c: ExitIntentBanner (`ExitIntentBanner.tsx`)
- Dunkle Card, Gold-Akzente

### 5d: BookingModal (`BookingModal.tsx`)
- Dunkle Variante

### 5e: ChatBot (`ChatBot.tsx`)
- Gold-Akzente statt Magenta

### 5f: CookieBanner
- Dunkle Variante

### 5g: TrustBar (`TrustBar.tsx`)
- Gold-Akzente, Foerderung-Badge in Gold

---

## Phase 6: Globale Bereinigung

- `next-themes` Provider entfernen (kein Theme-Toggle mehr)
- Alle `dark:` Tailwind-Prefixes entfernen (nicht mehr noetig)
- Alle hartkodierten Magenta-Farben (#EA3B5F, #ff1c5c) durch Gold ersetzen
- Alle hartkodierten hellen Farben (#09002C, #F9F9FB etc.) durch neue dunkle Tokens ersetzen
- `App.css` bereinigen

---

## Technische Details

### Geaenderte Dateien (ca. 25 Stueck)

| Datei | Art der Aenderung |
|-------|-------------------|
| `src/index.css` | Komplettes Farbschema neu |
| `tailwind.config.ts` | Magenta entfernen, Gold hinzufuegen |
| `src/components/sections/NewNavigation.tsx` | Theme-Toggle entfernen, Dark-first |
| `src/components/sections/NewHero.tsx` | Split-Layout mit Portrait |
| `src/components/sections/PainPoints.tsx` | Dunkle Cards, Gold-Icons |
| `src/components/sections/Positioning.tsx` | Dunkle Variante |
| `src/components/sections/SystemProcess.tsx` | Gold-Akzente |
| `src/components/sections/Offers.tsx` | Dunkle Premium-Cards |
| `src/components/sections/FoerderungHint.tsx` | Dunkle Variante |
| `src/components/sections/OneOnOneSection.tsx` | Dunkle Cards |
| `src/components/sections/WhyNotFree.tsx` | Dunkle Card |
| `src/components/sections/AboutAlex.tsx` | Split-Layout |
| `src/components/sections/DoneForYouSection.tsx` | Dunkle Variante |
| `src/components/sections/CaseStudies.tsx` | Dunkle Cards, Gold-KPIs |
| `src/components/sections/GoogleReviews.tsx` | Dunkle Cards |
| `src/components/sections/FinalCTA.tsx` | Gold-Buttons |
| `src/components/sections/SignatureOffer.tsx` | Dunkle Cards |
| `src/components/sections/TrustBar.tsx` | Gold-Akzente |
| `src/components/FAQ.tsx` | Dunkle Accordion |
| `src/components/Footer.tsx` | Gold-Links |
| `src/components/StickyMobileCTA.tsx` | Dunkle Variante |
| `src/components/ExitIntentBanner.tsx` | Dunkle Card |
| `src/components/BookingModal.tsx` | Dunkle Variante |
| `src/components/ChatBot.tsx` | Gold-Akzente |
| `src/components/CookieBanner.tsx` | Dunkle Variante |
| `src/App.tsx` | ThemeProvider-Anpassung |
| `src/main.tsx` | ggf. ThemeProvider entfernen |

### Umsetzungsreihenfolge

Da das eine massive Aenderung ist, empfehle ich eine stufenweise Umsetzung:

**Runde 1**: Farbsystem + Navigation + Hero (Fundament)
**Runde 2**: Alle Content-Sektionen (PainPoints bis FinalCTA)
**Runde 3**: Modals, Overlays, Footer, Mobile-CTAs
**Runde 4**: Bereinigung (dark:-Prefixes, alte Farbwerte, Theme-Toggle)

### Wichtige Hinweise

- Die Subpages (Datenschutz, Impressum, SocialMedia etc.) muessen ebenfalls angepasst werden, da sie das gleiche Farbsystem nutzen
- Das Memory "design/light-mode-default" muss aktualisiert werden (jetzt Dark-first)
- Das Memory "style/brand-color" muss aktualisiert werden (Gold statt Magenta)

