
# Überarbeitung: Förderseite & Done for You Sektion

## Änderungen im Überblick

### 1. Förderseite erweitern und verbessern

**Datei:** `src/pages/Foerderung.tsx`

**Probleme:**
- Zu wenig Inhalt in den Boxen (nur 3 Punkte pro Karte)
- "Beratung (BAFA)" klingt zu bürokratisch/technisch
- Seite wirkt insgesamt zu leer

**Änderungen:**

**Box 1 - Titel umbenennen:**
- Alt: "Beratung (BAFA)"
- Neu: "Strategieberatung" (BAFA-Hinweis kann klein darunter)

**Mehr Inhaltspunkte Box 1 (Strategieberatung):**
- Bis zu 80 % Förderung möglich
- Gilt für reine Beratung, keine Umsetzung
- Strategie-Sessions förderfähig
- 1:1 Zusammenarbeit förderfähig
- Auch für Gründer & junge Unternehmen
- Altovate übernimmt Dokumentation
- Schnelle Antragsprüfung möglich
- Keine Vorleistung nötig

**Mehr Inhaltspunkte Box 2 (Marketing-Maßnahmen):**
- Bis zu 50 % Förderung möglich
- Je nach Bundesland unterschiedlich
- Für Website, Content, Ads, Automationen
- Projektbasierte Abrechnung
- Kombinierbar mit anderen Programmen
- Voraussetzung: klare Projektstruktur
- Altovate prüft Optionen vorab

**Zusätzliche Sektion: "So läuft es ab"**
- Kurze 3-Schritte-Darstellung des Förderprozesses
- Gibt der Seite mehr Substanz

**Hero-Bereich erweitern:**
- Kurzer einleitender Text unter der Subline

---

### 2. Done for You Sektion - Hintergrund anpassen

**Datei:** `src/components/sections/DoneForYouSection.tsx`

**Problem:**
- Dunkler Hintergrund (`bg-[#1a1a1a]`) wirkt wie Fehler im Light-Mode
- Inkonsistent mit dem restlichen Design

**Lösung:**
- Hellen Hintergrund verwenden: `bg-muted/30` (wie andere Premium-Sektionen)
- Alle Textfarben anpassen: `text-white` zu `text-foreground`
- Border-Styles anpassen: `border-white/10` zu `border-border`
- Premium-Charakter durch subtile Design-Elemente behalten (Crown-Icon, hochwertige Typografie)

---

## Technische Umsetzung

### Datei 1: `src/pages/Foerderung.tsx`
- Titel "Beratung (BAFA)" zu "Strategieberatung" ändern
- BAFA als kleine Annotation darunter
- 8 Punkte pro Box statt 3
- Neue Sektion "So läuft es ab" mit 3 Schritten
- Hero-Text erweitern
- BookingModal Integration (statt direkter Calendly-Link)

### Datei 2: `src/components/sections/DoneForYouSection.tsx`
- `bg-[#1a1a1a]` zu `bg-muted/30` ändern
- `text-white` zu `text-foreground` ändern
- `text-white/70`, `text-white/80` zu `text-muted-foreground`
- `bg-white/5` zu `bg-background`
- `border-white/10` zu `border-border`
- `bg-white/10` zu `bg-primary/10`
- Dekorative Elemente anpassen

---

## Zusammenfassung

| Datei | Änderung |
|-------|----------|
| `src/pages/Foerderung.tsx` | Mehr Inhalt, neue Titel, zusätzliche Sektion |
| `src/components/sections/DoneForYouSection.tsx` | Heller Hintergrund, konsistente Farben |
