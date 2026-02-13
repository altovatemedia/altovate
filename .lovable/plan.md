

# Plan: Horizontales Scrollen beheben und Animationen auf Mobile beschleunigen

## Problem 1: Horizontales Scrollen

Mehrere Elemente ragen auf kleinen Bildschirmen ueber den sichtbaren Bereich hinaus:

- **Kein globaler Overflow-Schutz** auf `html`/`body` -- jedes Element, das breiter als der Viewport ist, erzeugt horizontales Scrollen.
- **ParallaxOrbs**: Fixierte Elemente mit 500-600px Breite ohne Clipping.
- **FinalCTA**: Pulsierender Glow-Kreis (600px) ueberragt den Viewport.
- **FinalCTA-Buttons**: `min-w-[280px]` ist auf schmalen Geraeten zu breit.
- **Logo-Marquee** (CaseStudies): `inline-flex` Animation kann ohne korrektes Clipping ueberlaufen.

**Loesung:**
- `overflow-x: hidden` auf `html` und `body` in `src/index.css` setzen -- das ist die sicherste globale Absicherung.
- `FinalCTA`-Buttons: `min-w-[280px]` durch `min-w-0 w-full sm:w-auto` ersetzen, damit sie sich auf Mobile anpassen.

---

## Problem 2: Langsame Animationen auf Mobile

Mehrere Effekte sind GPU-intensiv und verlangsamen insbesondere aeltere Smartphones:

| Effekt | Problem | Loesung |
|---|---|---|
| **ParallaxOrbs** (3 Elemente mit `blur(100-140px)`) | Extremer GPU-Aufwand fuer grosse Blur-Radien | Auf Mobile komplett ausblenden (`hidden md:block`) oder Blur-Radius stark reduzieren |
| **`liquid-glass` / `liquid-glass-icon`** (ca. 20+ Elemente) | `backdrop-filter: blur(20-24px)` auf jedem Element | Auf Mobile `backdrop-filter` auf `blur(8px)` reduzieren oder ganz entfernen |
| **Reveal-Komponente mit `blur`-Prop** | Jede Section-Ueberschrift animiert mit `filter: blur(12px)` Uebergang | Blur-Eigenschaft auf Mobile deaktivieren, nur `opacity + translateY` behalten |
| **TiltCard** (3D-Tilt auf Angebotskarten) | `perspective` + `rotateX/Y` auf jedem Mausbewegen | Auf Touch-Geraeten deaktivieren (kein Hover moeglich) |

**Loesung:**

### 2a. ParallaxOrbs auf Mobile ausblenden
In `src/components/animations/ParallaxOrbs.tsx`: Die drei Orbs mit `hidden md:block` versehen oder den gesamten Container auf Mobile ausblenden. Der Effekt ist auf kleinen Screens ohnehin kaum wahrnehmbar.

### 2b. Backdrop-Filter auf Mobile reduzieren
In `src/index.css`: Eine `@media (max-width: 768px)` Regel hinzufuegen, die `backdrop-filter` in `.liquid-glass` und `.liquid-glass-icon` auf `blur(8px)` oder `none` setzt.

### 2c. Reveal-Blur auf Mobile deaktivieren
In `src/components/animations/Reveal.tsx`: Den `blur`-Effekt in den Varianten nur fuer Desktop anwenden. Mobile bekommt nur `opacity + translate` -- das ist fluessiger und visuell kaum ein Unterschied.

### 2d. TiltCard auf Touch deaktivieren
In `src/components/animations/TiltCard.tsx`: Mit einem Media-Query oder `matchMedia('(hover: hover)')` den Tilt-Effekt nur fuer Geraete mit echtem Hover aktivieren. Auf Touch-Geraeten wird die Karte ohne 3D-Transformation gerendert.

---

## Technische Aenderungen

| Datei | Aenderung |
|---|---|
| `src/index.css` | `overflow-x: hidden` auf `html, body`; reduzierter `backdrop-filter` auf Mobile |
| `src/components/animations/ParallaxOrbs.tsx` | Auf Mobile (`< md`) komplett ausblenden |
| `src/components/animations/Reveal.tsx` | `blur`-Filter nur ab `md`-Viewport anwenden (per `window.matchMedia`) |
| `src/components/animations/TiltCard.tsx` | Tilt nur bei `hover: hover` Geraeten aktivieren |
| `src/components/sections/FinalCTA.tsx` | `min-w-[280px]` durch responsive Breite ersetzen |

Keine neuen Abhaengigkeiten. Keine Schema-Aenderungen.

