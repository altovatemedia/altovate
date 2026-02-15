

# Plan: Dropdown-Fix + SEO/GEO-Audit

## Teil 1: Dropdown "Losungen" – UX-Fix (Desktop)

**Problem:** Das Dropdown verschwindet, sobald die Maus den Button verlasst, weil zwischen dem Button und dem Dropdown-Menu ein Abstand (`mt-2`) existiert. Wenn die Maus diesen Zwischenraum passiert, wird `onMouseLeave` ausgelost und das Menu schließt sich.

**Losung:** Einen unsichtbaren Bereich (Padding/Bridge) zwischen Button und Dropdown einbauen, sodass die Maus den Hover-Bereich nie verlasst. Konkret:
- Den `mt-2` Gap durch ein `pt-2` innerhalb eines Container-Elements ersetzen, das den gesamten Hover-Bereich abdeckt
- So bleibt der `onMouseEnter/onMouseLeave` durchgangig auf dem Eltern-Element

**Datei:** `src/components/sections/NewNavigation.tsx`
- Zeile 112: Die Dropdown-`div` bekommt statt `mt-2` ein Wrapper-Element mit `pt-2` und `top-full`, um eine nahtlose Hover-Zone zu schaffen

---

## Teil 2: SEO/GEO-Audit – Ergebnisse

### Was bereits gut funktioniert

| Bereich | Status |
|---|---|
| Prerender Edge Function | Vollstandig implementiert fur alle 14 statischen Seiten + dynamische Blog-Artikel |
| vercel.json Rewrites | Crawler-Erkennung per User-Agent (Google, Bing, GPT, Perplexity, Claude, etc.) aktiv |
| JSON-LD Schema | Organization, LocalBusiness, Person, WebSite, FAQPage, BreadcrumbList, Service, Article |
| Canonical Tags | Auf allen Seiten korrekt gesetzt |
| Geo-Meta-Tags | `geo.region`, `geo.placename`, `geo.position`, `ICBM` vorhanden |
| noscript Fallback | Strukturierter HTML-Content in `index.html` |
| llms.txt | Vollstandig mit allen Leistungen, Preisen, USPs und Ressourcen-Links |
| Sitemap | Statische XML + dynamische Edge Function fur Blog-Artikel |
| OG/Twitter Tags | Auf allen Seiten vorhanden |
| Lokale Fonts | DSGVO-konform lokal gehostet |

### Gefundene Optimierungspotenziale

#### 1. `twitter:site` in index.html zeigt auf `@lovable_dev` statt `@altovatemedia`
- **Datei:** `index.html`, Zeile 38
- **Fix:** Andern zu `@altovatemedia` (oder entfernen, falls kein Twitter/X-Account existiert)

#### 2. Fehlende `width` und `height` Attribute auf Images (CLS-Problem)
- Mehrere `<img>`-Tags in Komponenten wie `CaseStudies.tsx`, `AboutAlex.tsx`, `NewHero.tsx`, `GoogleReviews.tsx` haben keine expliziten `width`/`height` Attribute
- **Fix:** Explizite Dimensionen hinzufugen, um Cumulative Layout Shift (CLS) zu vermeiden

#### 3. Fehlende Seiten in Sitemap
- `/impressum` und `/datenschutz` fehlen in der statischen `sitemap.xml` (sind zwar `noindex`, aber konnen trotzdem gelistet sein)
- Cluster-Seiten fehlen (z.B. `/marketing-wissen/roi-wirtschaftlichkeit`)
- **Fix:** Cluster-Seiten in Sitemap aufnehmen

#### 4. Fehlende Prerender-Routen in vercel.json
- `/impressum` und `/datenschutz` haben keine Prerender-Rewrites (weniger kritisch wegen `noindex`)
- Cluster-Seiten (`/marketing-wissen/:clusterSlug`) fehlen im Prerender – Crawler bekommen leere SPA-Shell
- **Fix:** Prerender-Regel fur `/marketing-wissen/:slug` (Cluster-Ebene) hinzufugen und passende statische Seiten in der Prerender-Funktion definieren

#### 5. Einige Seiten haben sehr lange Title-Tags (uber 50 Zeichen)
- `SoftwareKI.tsx`: "Individuelle Software & KI-Losungen | Altovate Saarburg / Region Saar-Mosel" (75 Zeichen)
- `MarketingAutomation.tsx`: "Marketing Automation & Funnel Systeme | Altovate Saarburg / Region Saar-Mosel" (78 Zeichen)
- `Foerderung.tsx`: "Forderung fur Marketing & Beratung | Bis zu 80 % Zuschuss – altovate" (70 Zeichen)
- **Fix:** Title-Tags auf max. 55-60 Zeichen kurzen

#### 6. Fehlende `loading="lazy"` auf einigen Bildern
- Bilder in `CaseStudies.tsx` (Logos), `GoogleReviews.tsx`, `TrustBar.tsx` fehlt `loading="lazy"`
- **Fix:** `loading="lazy"` auf alle Below-the-fold Bilder setzen

---

## Technischer Umsetzungsplan

### Schritt 1: Dropdown-Fix
- `NewNavigation.tsx`: Hover-Bridge zwischen Button und Menu einfugen (unsichtbarer Bereich schließt den Gap)

### Schritt 2: SEO-Fixes
1. `index.html`: `twitter:site` korrigieren
2. `sitemap.xml`: Cluster-Seiten erganzen
3. `vercel.json`: Prerender-Regel fur Cluster-Seiten erganzen
4. `prerender/index.ts`: Cluster-Seiten als statische Seiten hinzufugen
5. Title-Tags auf betroffenen Seiten kurzen
6. `loading="lazy"` und `width`/`height` auf relevante Images setzen

