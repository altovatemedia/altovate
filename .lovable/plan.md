

## Plan: NetzwerkFrauen Landing Page -- 4 visuelle Korrekturen

### Was geandert wird

1. **Nav-Logo**: Den Text "ALTOVATE" durch das echte Logo (`/altovate-logo.png`) ersetzen, mit `brightness-0 invert` Filter (wie auf allen anderen Seiten).

2. **Bonus-Card Highlight**: Das Apple-Blitz-Emoji `⚡` entfernen. Stattdessen ein visuelles Gold-Akzent-Element verwenden -- z.B. ein `BONUS` Label im gleichen Stil wie die Prompt-Nummern ("PROMPT 01" etc.), plus ein kleines Gold-Gradient-Icon oder einfach den bestehenden Gold-Border dicker/auffalliger machen. Kein Emoji.

3. **Speaker-Avatar**: Den generischen "AB"-Kreis durch das echte Portraitfoto ersetzen (`alexander-portrait-circle.png` aus `src/assets/`). Rundes Bild mit Gold-Gradient-Border.

4. **Signatur**: Die uploaded Signatur-Datei ins Projekt kopieren und anstelle des Dancing Script "Alex Buchmann" Texts als Bild einbinden. Die Signatur ist blau auf weiss -- sie wird per CSS-Filter (`brightness-0 invert`, dann Gold-Tonung via `sepia` + `hue-rotate` + `saturate`) in Gold auf transparent umgewandelt, passend zum CI.

### Betroffene Dateien

- `src/pages/NetzwerkFrauen.tsx` -- alle 4 Anderungen
- `src/assets/signatur-alex-handschrift.png` -- neue Datei (kopiert von Upload)

### Technische Details

- Logo: `<img src="/altovate-logo.png" alt="Altovate" className="h-6 brightness-0 invert" />`
- Portrait: `import alexanderPortraitCircle from '@/assets/alexander-portrait-circle.png'` mit `object-cover rounded-full` und einem 2px Gold-Gradient-Ring via `ring` oder umgebendem `div`
- Signatur-Filter-Kette: `brightness(0) invert(1)` macht sie weiss, dann `sepia(1) saturate(3) hue-rotate(15deg)` toent sie gold
- Bonus: `BONUS` als styled Label-Text, kein Emoji

