

## Aenderungen am "Ueber Alex Buchmann"-Abschnitt

### Was sich aendert

Der dritte Absatz in `src/components/sections/AboutAlex.tsx` (Zeile 25-27) wird inhaltlich erweitert. Statt nur "bewusst keine grosse Agentur, du arbeitest direkt mit mir" wird die Botschaft ausgebaut:

**Aktuell:**
> Altovate ist bewusst keine grosse Agentur. Du arbeitest direkt mit mir -- ohne Umwege ueber Projektmanager oder Junior-Teams.

**Neu (sinngemass):**
> Altovate ist bewusst keine grosse Agentur. Ich arbeite mit einem Netzwerk aus Experten, die ich koordiniere -- und mit KI-Tools, Agents und automatisierten Workflows, die mich arbeiten lassen wie 10 A-Player. Du bekommst also nicht weniger, sondern mehr: direkte Zusammenarbeit mit mir, ohne Umwege ueber Projektmanager oder Junior-Teams. Wenn du wissen willst, wie wir gemeinsam mehr Zeit aus deinem Alltag holen -- lass uns sprechen.

### Zusaetzlich: Portrait-Bild mit Gradient Fade

Das Bild in diesem Abschnitt hat aktuell noch `rounded-2xl overflow-hidden shadow-2xl` -- also harte Kanten. Analog zum Hero wird das Portrait auch hier mit einem radialen Gradient-Overlay versehen, damit es nahtlos in den Hintergrund uebergeht.

### Zusammenfassung der Hero-Aenderung

Der Hero-Text (Zeile 49-51 in `NewHero.tsx`) bleibt **unveraendert** -- der aktuelle Text dort ("Altovate entwickelt Lead- & Content-Systeme...") passt als allgemeine Intro-Beschreibung und wird nicht mit der "keine grosse Agentur"-Botschaft ueberschrieben.

---

### Technische Details

**Datei:** `src/components/sections/AboutAlex.tsx`

1. **Text-Erweiterung (Zeilen 25-27):** Der dritte `<p>`-Absatz wird durch zwei Absaetze ersetzt:
   - Absatz 1: "Bewusst keine grosse Agentur" + Experten-Netzwerk + KI-Tools/Agents/Workflows als Multiplikator
   - Absatz 2: Hook/CTA -- "Wenn du wissen willst, wie wir mehr Zeit aus deinem Alltag holen..."

2. **Bild-Anpassung (Zeilen 35-43):** 
   - `rounded-2xl overflow-hidden shadow-2xl` entfernen
   - Radiales Gradient-Overlay hinzufuegen (gleiche Technik wie im Hero: `radial-gradient(ellipse ... transparent 30%, hsl(var(--background)) 65%)`)
   - Gold-Glow hinter dem Portrait als atmosphaerischer Effekt

| Datei | Aenderung |
|-------|-----------|
| `src/components/sections/AboutAlex.tsx` | Text erweitern + Portrait mit Gradient Fade |

