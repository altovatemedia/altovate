
## Social-Media-Seite: Monatliche Abos entfernen, Preise angleichen

### Was sich aendert

**Datei: `src/pages/SocialMedia.tsx`**

**1. Monatliche Abos komplett entfernen**
- `monthlyPackages`-Array loeschen (Zeilen 107-146)
- `duration`-State und `calculatePrice`-Funktion entfernen (Zeilen 19, 37-46)
- `activeTab`-State entfernen (Zeile 20)
- Tabs-Komponente entfernen -- die einmaligen Bausteine werden direkt ohne Tab-Wechsel angezeigt
- Imports bereinigen: `Tabs`, `TabsContent`, `TabsList`, `TabsTrigger`, `Slider` entfernen

**2. Preise der einmaligen Bausteine anpassen**

| Paket | Aktuell | Neu | Grund |
|-------|---------|-----|-------|
| SEO & Social Check | 290 EUR | 390 EUR | Darf nicht guenstiger als Strategie-Session sein |
| Content Kickstart Day | 1.290 EUR | 1.800 EUR | Angleichung an PricingToggle |
| Social Media Starter | 1.800 EUR | 1.800 EUR | Bleibt gleich |
| Digitales Sichtbarkeitspaket | 5.000 EUR | 5.000 EUR | Bleibt gleich |

**3. Hero-Text: "Wir" zu "Ich"**
- Zeile 178: "Wir kuemmern uns" wird zu "Ich kuemmere mich" (Ich-Perspektive)

**4. Interaktive Tools: "unsere" zu "meine"**
- Zeile 339-340: "unsere kostenlosen Tools" anpassen

**5. Meta-Description aktualisieren**
- "Pakete ab 290 EUR" wird zu "Pakete ab 390 EUR"

### Was gleich bleibt
- Alle vier einmaligen Pakete (Cards, Layout, Features-Listen)
- Interaktive Tools (AiDemoTool, PackageFinder, VisibilityAnalysis)
- SocialMediaPreferences, ContactFunnel, Footer, ChatBot
- SEOSchema, Breadcrumbs, Scroll-Progress
