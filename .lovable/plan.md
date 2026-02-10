

# Conversion-Optimierung: Gesamtumsetzung

## Korrekturen gegenueber dem Audit

Folgende Punkte aus deinem Feedback werden beruecksichtigt:
- **BAFA**: "Foerderfaehig" ja, aber NICHT "BAFA-zertifiziert" -- kein Zertifizierungs-Badge
- **Betreute Unternehmen**: Keine konkrete Zahl anzeigen (15+ wirkt zu gering) -- stattdessen wird nur Google-Rating und BNI-Badge genutzt
- **Preise**: Alle "inkl. MwSt." Angaben werden zu "zzgl. MwSt." korrigiert (betrifft Offers-Sektion und ueberall sonst)

---

## Phase 1: Trust-Bar + MwSt.-Korrektur

### 1.1 Neue Komponente: TrustBar
**Neue Datei:** `src/components/sections/TrustBar.tsx`

Kompakte Leiste mit drei Elementen:
- Google-Rating: "5.0 Sterne -- 9 Bewertungen" (mit Stern-Icons, Google-Logo)
- BNI-Mitglied (Badge-Icon)
- "Foerderfaehig bis 80 %" (mit BadgePercent-Icon, Link zu /foerderung)

Platzierung: direkt unter den CTA-Buttons im Hero (`NewHero.tsx`).

### 1.2 MwSt.-Korrektur
**Datei:** `src/components/sections/Offers.tsx`
- Alle "inkl. MwSt." aendern zu "zzgl. MwSt."

---

## Phase 2: Widersprueche und CTA-Konsistenz

### 2.1 ContactFunnel-Text korrigieren
**Datei:** `src/components/sections/ContactFunnel.tsx`
- Zeile 332: "Kostenloses Erstgespraech buchen" aendern zu "Anfrage senden"
- Zeile 357: "Einladung zum kostenlosen Erstgespraech" entfernen, stattdessen "Erhalte eine persoenliche Einschaetzung"
- Zeile 323: Datenschutz-Link `href="#"` korrigieren zu `href="/datenschutz"` (als React-Router Link)

### 2.2 FAQ: Calendly durch BookingModal ersetzen
**Datei:** `src/components/FAQ.tsx`
- `window.open('https://calendly.com/altovate/60min')` ersetzen durch BookingModal-State und -Komponente
- BookingModal importieren, useState hinzufuegen

### 2.3 Footer: Calendly-Links durch BookingModal ersetzen
**Datei:** `src/components/Footer.tsx`
- Zeilen 68-76: Direkte Calendly-Links (60min / 90min) durch onClick-Handler ersetzen, die den BookingModal oeffnen
- BookingModal und useState importieren

---

## Phase 3: Sticky Mobile CTA

### 3.1 Neue Komponente: StickyMobileCTA
**Neue Datei:** `src/components/StickyMobileCTA.tsx`
- Sticky Bottom-Bar, nur auf Mobile sichtbar (md:hidden)
- Erscheint nach dem Hero-Bereich (Scroll-Trigger)
- CTA: "Strategie-Session anfragen" -- oeffnet BookingModal
- Dezentes Design: leichter Schatten, Primary-Farbe

### 3.2 Einbindung
**Datei:** `src/pages/Index.tsx`
- StickyMobileCTA importieren und vor `</motion.div>` einfuegen

---

## Phase 4: Erstkontakt-Seite verbessern

### 4.1 Datenschutz-Checkbox ergaenzen
**Datei:** `src/pages/Erstkontakt.tsx`
- Checkbox mit Label und Link zu `/datenschutz` vor dem Submit-Button einfuegen
- formData um `privacy: false` erweitern
- Validierung: Checkbox muss aktiviert sein

### 4.2 Trust-Element neben dem Formular
**Datei:** `src/pages/Erstkontakt.tsx`
- Unter dem Formular: Kompakte Google-Rating-Anzeige (5.0 Sterne, 9 Bewertungen) + kurzes Alex-Zitat als Vertrauenselement

---

## Phase 5: Employer Branding umbauen

### 5.1 Preise entfernen, Leistungsuebersicht einfuegen
**Datei:** `src/pages/EmployerBranding.tsx`
- Das `packages`-Array (Zeilen 45-75) mit den 3 Preispaketen (350/950/1.500 EUR) entfernen
- Ersetzen durch eine Leistungsuebersicht analog zur Social-Media-Seite (Grid mit Icons, Titel, Beschreibung)
- Warteliste oder Verweis auf Strategie-Session als CTA

---

## Phase 6: Psychologische Elemente

### 6.1 Klarheitsversprechen
**Datei:** `src/components/sections/Offers.tsx`
- Unter den Strategie-Session-Karten: kurzer Hinweis: "Wenn du nach der Session keinen klaren naechsten Schritt hast, war sie nicht gut genug."
- Kein explizites "Geld zurueck", sondern ein Qualitaetsversprechen

### 6.2 Slot-Limitierung konkreter machen
**Datei:** `src/components/sections/DoneForYouSection.tsx` (falls vorhanden)
- "Limitiert auf wenige Spots" konkretisieren zu z.B. "Aktuell nur 2 freie Plaetze"

---

## Technische Details

### Neue Dateien
- `src/components/sections/TrustBar.tsx`
- `src/components/StickyMobileCTA.tsx`

### Geaenderte Dateien
| Datei | Aenderung |
|---|---|
| `src/components/sections/NewHero.tsx` | TrustBar einbinden |
| `src/components/sections/Offers.tsx` | MwSt.-Korrektur + Klarheitsversprechen |
| `src/components/sections/ContactFunnel.tsx` | Text-Korrekturen + Datenschutz-Link fixen |
| `src/components/FAQ.tsx` | Calendly durch BookingModal ersetzen |
| `src/components/Footer.tsx` | Calendly-Links durch BookingModal ersetzen |
| `src/pages/Index.tsx` | StickyMobileCTA einbinden |
| `src/pages/Erstkontakt.tsx` | Datenschutz-Checkbox + Trust-Element |
| `src/pages/EmployerBranding.tsx` | Preispakete durch Leistungsuebersicht ersetzen |

### Umsetzungsreihenfolge
1. MwSt.-Korrektur (schnell, ueberall)
2. TrustBar + Hero-Einbindung
3. ContactFunnel + FAQ + Footer Widersprueche fixen
4. Sticky Mobile CTA
5. Erstkontakt verbessern
6. Employer Branding umbauen
7. Psychologische Elemente (Klarheitsversprechen, Slot-Limitierung)

