

## Werbeanzeigen-Seite: Fokus auf Meta Ads + "Slots belegt"-Logik

### Zusammenfassung

Die Werbeanzeigen-Unterseite wird grundlegend umgebaut: Weg von einer Preisliste mit Starter/Pro/Betreuung, hin zu einer informativen Seite, die den Umfang und die Komplexitaet von Meta Ads erklaert -- ohne konkrete Preise. Besucher sollen verstehen, was alles dazugehoert (Strategie, Creative, Targeting, Analyse), und dass Kapazitaeten aktuell begrenzt sind.

### Was sich aendert

**1. Google Ads entfernen** (`src/pages/Werbeanzeigen.tsx`)
- Die `channels`-Array-Eintraege werden auf nur Meta Ads reduziert (Push-Marketing Card bleibt, Pull-Marketing/Google wird entfernt)
- Der Hinweis "Beide Kanaele lassen sich kombinieren" faellt weg
- Die Kanalsektion wird zu einer einzelnen, ausfuehrlicheren Erklaerung von Meta Ads (Facebook + Instagram)
- SEO-Meta-Tags: "Meta- und Google-Ads" wird zu "Meta Ads (Facebook & Instagram)"

**2. Preise-Sektion komplett ersetzen** (Zeilen 532-601)
- Die drei Pricing Cards (Basic/Pro/Betreuung) werden entfernt
- Stattdessen eine neue Sektion: "Was eine professionelle Meta-Ads-Betreuung umfasst"
- Darstellung als Aufwands-Uebersicht (aehnlich wie bei DoneForYouSection), z.B.:
  - Zielgruppenanalyse & Marktrecherche
  - Kampagnenstruktur & Anzeigengruppen
  - Creative-Erstellung (Text, Bild, Video)
  - Pixel- & Conversion-Tracking Setup
  - A/B-Testing & Hook-Strategien
  - Laufende Optimierung & Budget-Steuerung
  - Monatliches Reporting & Auswertung
- Ziel: Besucher sollen denken "das ist viel Arbeit, das kostet sicher einiges"

**3. "Slots belegt" + Warteliste** (ersetzt den CTA-Bereich)
- Status-Badge: "Kapazitaet aktuell ausgelastet" (aehnlich DoneForYouSection)
- Erklaertext: Kurzer Hinweis, dass Meta-Ads-Betreuung angeboten wird, aber die Plaetze limitiert sind
- Warteliste-Formular (E-Mail + Consent) -- gleiche Logik wie DoneForYouSection mit `send-contact-email` Edge Function, inquiry type "waitlist-ads"
- Alternativ-Hinweis: Verweis auf Strategie-Session als sofort buchbare Option

**4. Prozess-Timeline anpassen** (Zeilen 74-100)
- "Wir" durch "Ich" ersetzen (konsistent mit Ich-Perspektive)
- Google-spezifische Referenzen entfernen
- Schritte bleiben inhaltlich aehnlich, nur auf Meta Ads fokussiert

**5. FAQ anpassen** (Zeilen 138-155)
- Google-Referenzen entfernen
- Frage zu Kanalkombination entfernen oder anpassen
- Optional: Neue FAQ "Warum nur Meta Ads?" hinzufuegen

### Was gleich bleibt
- Hero-Section (Headline, Parallax-Effekt, Animationen)
- "Was ist Performance-Marketing?"-Erklaersektion
- Kreisblatt-Vergleichssektion
- Vorteile-Cards (Zielgerichtet, Messbar, Effizient)
- InternalLinks-Komponente am Ende
- Footer, Navigation, Breadcrumbs

### Technische Details

**Datei:** `src/pages/Werbeanzeigen.tsx`

Aenderungen im Detail:
- `channels`-Array: Google-Eintrag entfernen, Meta-Eintrag ausfuehrlicher gestalten
- `packages`-Array: Komplett entfernen
- `steps`-Array: "Wir" zu "Ich", Google-Referenzen raus
- `faqs`-Array: Google-Referenzen entfernen, neue FAQ ergaenzen
- Pricing-Sektion (Zeilen 532-601): Ersetzen durch Leistungsuebersicht + Warteliste
- Kanal-Sektion (Zeilen 403-447): Auf eine Karte reduzieren
- CTA-Sektion (Zeilen 638-705): Anpassen auf "Interesse bekunden" statt "Jetzt starten"
- Meta-Tags: Google-Referenzen entfernen
- Neuer State fuer Warteliste (email, consent, isSubmitting, isSubmitted) -- gleiche Pattern wie DoneForYouSection

**Keine neuen Dateien noetig** -- alles innerhalb der bestehenden Komponente.

