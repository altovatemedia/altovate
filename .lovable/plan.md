

# Marketing System – Kompletter Seitenumbau

## Zusammenfassung

Die bisherige Blog-Listenseite "Marketingwissen" wird zu einer modularen Wissensarchitektur "Marketing System" umgebaut. Neuer Slug `/marketing-system`, neues Design mit Magenta-Akzent (#ff1c5c), Hero-Section, drei Kernthemen-Karten, Framework-Visualisierung, filterbare Artikel-Kategorien und interaktive Tools (ROI-Rechner, Budget-Rechner, Sichtbarkeits-Check).

---

## Schritt 1: Datenbank – Kategorie-Feld hinzufuegen

Die `blog_articles`-Tabelle bekommt eine neue Spalte `category` (text, nullable) mit den Werten:
- `roi` (ROI & Wirtschaftlichkeit)
- `social-media` (Social Media Strategie)
- `funnel` (Funnel & Conversion)
- `recruiting` (Recruiting & Arbeitgebermarke)
- `geo` (GEO & KI)

Zusaetzlich eine Spalte `reading_time_minutes` (integer, nullable) fuer die Lesedauer.

---

## Schritt 2: Routing & Redirects aktualisieren

**App.tsx:**
- `/marketingwissen` wird zu `/marketing-system`
- `/marketingwissen/:slug` wird zu `/marketing-system/:slug`
- Alte Routen `/marketingwissen` und `/marketingwissen/:slug` leiten per `<Navigate>` auf die neuen URLs um (301-Redirect-Logik)

**vercel.json:**
- Neue Rewrites fuer `/marketing-system` und `/marketing-system/:slug`
- Alte `/marketingwissen`-Rewrites bleiben fuer Redirect-Kompatibilitaet

---

## Schritt 3: Neue Seite `MarketingSystem.tsx`

Komplett neue Datei mit folgenden Sektionen:

### 3.1 Hero Section
- H1: "Marketing ohne Bullshit. Mit System."
- Subline wie im Briefing
- 3 CTA-Buttons: "ROI verstehen", "Sichtbarkeit aufbauen", "GEO & KI verstehen"
- Scroll-Anker zu den jeweiligen Sektionen

### 3.2 Drei Kernthemen-Karten
Drei grosse Karten mit Lucide-Icons:
1. **Wirtschaftlichkeit & ROI** – mit Button "ROI-Modelle ansehen"
2. **Sichtbarkeit & Funnel** – mit Button "System verstehen"
3. **GEO & KI-Sichtbarkeit** – mit Button "GEO lernen"

Liquid-Glass-Design, Magenta-Akzent fuer Hover und Buttons.

### 3.3 Framework-Bereich: Das Altovate Marketing-System
- Dreistufiges visuelles Modell: Aufmerksamkeit -> Vertrauen -> Conversion
- Jede Stufe mit zitierfahiger Definition
- Horizontale Darstellung auf Desktop, vertikal auf Mobile
- Verbindungslinien/Pfeile zwischen den Stufen

### 3.4 Themencluster-Navigation (Artikel mit Filtern)
- Filter-Tabs: ROI & Wirtschaftlichkeit | Social Media Strategie | Funnel & Conversion | Recruiting & Arbeitgebermarke | GEO & KI | Alle
- Artikel-Karten mit: Kategorie-Badge, Lesedauer, Teaser-Text, interner Link
- Daten aus `blog_articles` mit `category`-Filter
- Kein endloser Feed, sondern strukturierte Darstellung

### 3.5 Interaktive Tools
Drei Tool-Karten die zu Inline-Modulen fuehren:
1. **ROI-Rechner** – Eingabe: Werbebudget, Klickpreis, Conversionrate -> Berechnet Cost-per-Lead und ROI
2. **Marketingbudget-Rechner** – Eingabe: Jahresumsatz, Branche -> Empfohlenes Budget
3. **Sichtbarkeits-Selbsttest** – Oeffnet den bestehenden VisibilityCheckModal

### 3.6 Sticky Navigation (oben)
Drei Buttons permanent sichtbar innerhalb der Seite:
- "System verstehen" (Scroll zu Framework)
- "ROI berechnen" (Scroll zu Tools)
- "Kontakt" (Scroll zu Kontakt auf Startseite)

---

## Schritt 4: BlogArticle.tsx aktualisieren

- Alle `/marketingwissen/`-Referenzen zu `/marketing-system/` aendern
- Breadcrumb: "Marketing System" statt "Marketingwissen"
- Canonical URLs aktualisieren

---

## Schritt 5: Alle Referenzen aktualisieren

- **Footer.tsx**: Link und Text von "Marketingwissen" zu "Marketing System" aendern
- **NewNavigation.tsx**: Falls Marketingwissen im Dropdown, umbenennen
- **index.html (noscript)**: Link aktualisieren
- **public/sitemap.xml**: URL von `/marketingwissen` zu `/marketing-system`
- **supabase/functions/sitemap/index.ts**: URLs aktualisieren
- **public/llms.txt**: Referenzen aktualisieren

---

## Schritt 6: SEO & Schema

- Meta Title: "Marketing System fuer Unternehmen | ROI, Social Media, GEO – Altovate"
- Meta Description: "Fundiertes Marketingwissen fuer Unternehmen ohne internes Marketingteam. ROI-Modelle, Budgetrechner, GEO-Optimierung und ehrliche Analysen."
- Canonical: `https://altovate.de/marketing-system`
- FAQ Schema fuer die Kernthemen-Definitionen
- BreadcrumbList Schema

---

## Schritt 7: Design-Richtlinien

- Dunkles Layout (bestehend)
- **Magenta #ff1c5c als Akzent** fuer CTAs und Hover-States auf dieser Seite (via CSS-Variablen oder Inline)
- Klare Typografie, strukturierte Boxen, viel Weissraum
- Keine verspielten Blog-Layouts
- Liquid-Glass-Karten wie auf dem Rest der Seite

---

## Neue Dateien

| Datei | Zweck |
|---|---|
| `src/pages/MarketingSystem.tsx` | Komplette neue Seite |
| `src/components/marketing-system/HeroSection.tsx` | Hero mit CTAs |
| `src/components/marketing-system/CoreTopics.tsx` | 3 Kernthemen-Karten |
| `src/components/marketing-system/FrameworkSection.tsx` | Dreistufiges Modell |
| `src/components/marketing-system/ArticleCluster.tsx` | Filterbare Artikel |
| `src/components/marketing-system/InteractiveTools.tsx` | ROI-/Budget-Rechner |
| `src/components/marketing-system/ROICalculator.tsx` | ROI-Rechner Logik |
| `src/components/marketing-system/BudgetCalculator.tsx` | Budget-Rechner Logik |

## Geaenderte Dateien

| Datei | Aenderung |
|---|---|
| `src/App.tsx` | Neue Route + Redirect |
| `src/pages/BlogArticle.tsx` | URLs aktualisieren |
| `src/components/Footer.tsx` | Link umbenennen |
| `vercel.json` | Neue Rewrites |
| `public/sitemap.xml` | URL aendern |
| `supabase/functions/sitemap/index.ts` | URL aendern |
| `index.html` | Noscript-Links |
| `public/llms.txt` | Referenzen |

## Datenbank-Migration

```sql
ALTER TABLE blog_articles ADD COLUMN category text;
ALTER TABLE blog_articles ADD COLUMN reading_time_minutes integer;
```

