

# Verfeinerung: Gold-Gradient, Logo-Farbe, Hero-Portrait und Liquid Glass

## Was sich aendert

### 1. Logo weiss machen (`NewNavigation.tsx`)
Das Logo im Header bekommt einen CSS-Filter (`brightness(0) invert(1)`), damit es auf dem dunklen Hintergrund weiss erscheint.

### 2. Gold-Farbverlauf statt flaches Gold

**CSS-Variablen und Buttons (`index.css`)**:
- Die `.btn-hero`-Klasse bekommt einen Verlauf von warmem Gold (#F5C842) ueber Orange-Gold (#E8A020) statt der flachen `bg-primary`-Farbe
- Hover-Glow wird waermer und intensiver mit orange-goldenen Toenen
- Neuer `.gold-gradient-text`-Utility fuer Headline-Akzente: `background: linear-gradient(135deg, #F5C842, #D4A843, #E8A020)` mit `-webkit-background-clip: text`

**Tailwind Config**: Gold-Farbtokens erweitern um `gold-light: #F5C842` und `gold-warm: #E8A020`

### 3. Hero-Portrait ohne Hintergrund, fliessend eingebettet (`NewHero.tsx`)

Aktuell wird das Foto einfach als rechteckiges Bild gezeigt mit einem `rounded-2xl` Container. Stattdessen:
- `rounded-2xl` entfernen - das Bild soll "frei" stehen (alexander-portrait.png hat bereits freigestellten Hintergrund)
- Gradient von unten (`bg-gradient-to-t from-background via-background/50 to-transparent`) damit das Portrait nahtlos in den Hintergrund uebergeht - wie bei der Referenzseite
- Leichter Gold-Glow hinter dem Portrait als atmosphaerischer Effekt
- Portrait etwas groesser machen (`max-w-lg` statt `max-w-md`)

### 4. Liquid Glass Effekte

**Neue CSS-Klasse `.liquid-glass` (`index.css`)**:
```css
.liquid-glass {
  background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.06),
    0 8px 32px rgba(0,0,0,0.3);
}
```

**Neue CSS-Klasse `.liquid-glass-icon` fuer Icon-Container** (wie im Referenz-Screenshot 5 - die Kreise mit Glas-Effekt um die Icons):
```css
.liquid-glass-icon {
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12), rgba(255,255,255,0.03));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 
    inset 0 1px 2px rgba(255,255,255,0.08),
    0 4px 16px rgba(0,0,0,0.3);
}
```

**Anwendung in PainPoints.tsx**:
- Cards bekommen `.liquid-glass` statt `bg-muted/30`
- Icon-Container bekommen `.liquid-glass-icon` statt `bg-primary/10`
- Icons bleiben `text-primary` (Gold)
- Runde Icon-Container (`rounded-full` statt `rounded-xl`, groesser `w-16 h-16`)

### 5. Gold-Akzent-Text fuer Headlines

In `NewHero.tsx` wird der `<span className="text-primary">` durch eine Gradient-Variante ersetzt:
```jsx
<span className="gold-gradient-text">die keine Zeit fuer Marketing haben.</span>
```

Der CSS-Gradient erzeugt den Effekt aus dem Referenz-Screenshot: warmes Gold von hell nach dunkel, nicht flach.

---

## Geaenderte Dateien (4 Stueck)

| Datei | Aenderung |
|-------|-----------|
| `src/index.css` | `.btn-hero` Gold-Gradient, `.liquid-glass`, `.liquid-glass-icon`, `.gold-gradient-text` |
| `tailwind.config.ts` | Erweiterte Gold-Farbtokens |
| `src/components/sections/NewHero.tsx` | Portrait fliessend eingebettet, Gold-Gradient-Text, Glow hinter Portrait |
| `src/components/sections/NewNavigation.tsx` | Logo-Filter weiss |
| `src/components/sections/PainPoints.tsx` | Liquid Glass Cards und Icon-Container |

