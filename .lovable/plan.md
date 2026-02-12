

## Neue Unterseite: "Meine Lieblingstools" (Affiliate-Tool-Sammlung)

### Konzept

Eine neue Unterseite `/tools` wird erstellt, die Alex' persoenlich genutzte KI-Tools vorstellt. Der Fokus liegt auf **authentischer Empfehlung**, nicht auf Werbung. Jedes Tool wird mit einem kurzen, persoenlichen Erfahrungsbericht praesentiert -- warum Alex es nutzt, welches Problem es loest und wie viel Zeit es spart. Der Affiliate-Vorteil wird subtil als "Bonus" erwaehnt, nicht als Hauptargument.

### Seitenstruktur

1. **Hero-Bereich**: Kurze Einleitung in Ich-Perspektive -- "Diese Tools nutze ich taeglich, um mit der Effizienz von 10 A-Playern zu arbeiten. Wenn du auch Zeit sparen willst, probier sie aus."
2. **Tool-Karten**: Jedes Tool als eigene Karte im Dark-Premium-Design (Liquid Glass) mit:
   - Tool-Logo (Platzhalter-Icon bis Logos hochgeladen werden)
   - Tool-Name und Kategorie-Badge (z.B. "Motion Design", "Diktiersoftware", "No-Code")
   - 2-3 Saetze persoenlicher Erfahrungsbericht
   - Konkreter Zeitersparnis-Hinweis
   - Subtiler Vorteil (z.B. "Mit meinem Link: 15% Rabatt" als kleiner Hinweis, nicht als Headline)
   - CTA-Button zum Affiliate-Link (extern, target="_blank")
3. **Disclaimer**: Transparenter Hinweis am Ende, dass Affiliate-Links enthalten sind

### Tools zum Start

| Tool | Kategorie | Vorteil | Link |
|------|-----------|---------|------|
| **Hera** | Motion Design / KI-Video | 15% Rabatt | hera.cello.so/JoZSq4tkrXH |
| **Typeless** | Diktiersoftware (Desktop) | -- | typeless.com/?via=alexander-buchmann |
| **Whispr Flow** | Diktiersoftware (iPhone/Cross) | 1 Monat Pro gratis | wisprflow.ai/r/MEAWERI!131 |
| **Lovable** | No-Code Website-Builder | 10 gratis Credits | lovable.dev/invite/ADKF155 |

### Texte (Entwurf)

**Hera**: "Frueher habe ich Stunden in After Effects verbracht, um ein einziges Motion Design zu erstellen. Mit Hera beschreibe ich per Prompt, was ich brauche -- und bekomme in Sekunden ein Ergebnis in Profi-Qualitaet. Fuer mich einer der groessten Zeitspar-Hebel in der Content-Produktion."

**Typeless**: "Ich tippe fast nichts mehr. Typeless hoert zu, versteht den Inhalt und formuliert daraus saubere, zusammengefasste Saetze -- kein rohes Transkript, sondern fertiger Text. Spart mir taeglich mindestens eine Stunde."

**Whispr Flow**: "Macht dasselbe wie Typeless, aber nativ auf dem iPhone -- und mittlerweile auch auf dem Desktop. Koennte fuer mich bald Typeless ersetzen. Ideal, wenn du viel unterwegs diktierst."

**Lovable**: "Mein absolutes Lieblingstool. Websites, Web-Apps, Landingpages -- alles durch einfache Prompt-Eingabe. Voll funktional mit Hosting, Datenbank und Integrationen wie Stripe, Shopify und mehr. Diese Website hier? Damit gebaut."

---

### Technische Details

**Neue Dateien:**

| Datei | Beschreibung |
|-------|-------------|
| `src/pages/Tools.tsx` | Neue Seite mit Helmet, Navigation, Footer, Tool-Karten |

**Bestehende Dateien:**

| Datei | Aenderung |
|-------|-----------|
| `src/App.tsx` | Route `/tools` hinzufuegen |
| `src/components/sections/NewNavigation.tsx` | Optional: Link zu Tools in der Navigation oder im Footer |

**Design-Vorgaben:**
- Liquid-Glass-Karten fuer jedes Tool (konsistent mit restlicher Website)
- Gold-Gradient fuer Tool-Namen und Kategorie-Badges
- Externe Links mit `target="_blank"` und `rel="noopener noreferrer"`
- Responsive Grid: 1 Spalte mobil, 2 Spalten ab md
- Radiale Gradient-Uebergaenge zwischen Sektionen (keine harten Kanten)
- Tool-Logos werden als Platzhalter-Icons (Lucide) eingesetzt bis du die echten Logos hochlaedst

