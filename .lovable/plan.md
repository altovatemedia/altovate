

# SEO & GEO Audit – altovate.de

Umfassende Handlungsliste fuer die organische Sichtbarkeit in Google und die Auffindbarkeit in KI-Systemen (ChatGPT, Perplexity, Gemini etc.).

---

## 1. Kritisches CSR-Problem: Kein indexierbarer Content im HTML

**Prioritaet: SEHR HOCH**

Die gesamte Seite ist eine Client-Side-Rendered (CSR) React-SPA. Das bedeutet: Googlebot und KI-Crawler sehen im initialen HTML-Response nur ein leeres `<div id="root"></div>`. Obwohl Googlebot JavaScript rendern kann, gibt es dabei erhebliche Nachteile:

- **Crawl-Budget wird verschwendet** (Rendering-Queue kann Tage dauern)
- **KI-Crawler (Perplexity, ChatGPT-Browse, Bing-Chat) rendern oft KEIN JavaScript** -- sie sehen nur den leeren HTML-Body
- **Social-Media-Previews** funktionieren nur teilweise (og:tags sind im statischen HTML, aber Inhalte nicht)
- **Core Web Vitals**: LCP wird durch JS-Bundle-Loading verzoegert

**Loesung:** Prerendering/SSG fuer alle statischen Seiten implementieren. Da Next.js nicht moeglich ist, gibt es zwei Optionen:
- `vite-plugin-ssr` oder `vite-ssg` fuer Build-Time-Rendering
- Alternativ: Prerender-Service (prerender.io) als Middleware vor Vercel

---

## 2. Meta-Tags & Canonical URLs

**Prioritaet: HOCH**

| Problem | Seite | Detail |
|---|---|---|
| Fehlende canonical URL | Marketingwissen, BlogArticle, Tools, Kontakt, InstagramProfilCheck | Ohne canonical riskiert man Duplicate Content |
| Fehlende og:url | Marketingwissen, BlogArticle, Tools, Kontakt | Open-Graph-URL fehlt |
| Fehlende og:type | Alle Service-Seiten | Sollte "website" oder "article" sein |
| Copyright-Jahr veraltet | Footer | "2025" statt dynamisch |
| Title-Tag Tools-Seite | /tools | Pruefen ob SEO-optimiert |
| Marketingwissen fehlt in Sitemap | /marketingwissen | Nicht in sitemap.xml gelistet |
| Blog-Artikel fehlen in Sitemap | /marketingwissen/:slug | Dynamische URLs nicht in Sitemap |
| /tools fehlt in Sitemap | /tools | Nicht gelistet |
| /instagram-profil-check fehlt in Sitemap | /instagram-profil-check | Nicht gelistet |

---

## 3. HTML-Semantik & Accessibility

**Prioritaet: HOCH**

- **Navigation**: Das `<nav>` Element hat kein `aria-label`. Bei mehreren nav-Elementen auf einer Seite (Breadcrumb + Hauptnav) ist dies Pflicht.
- **Heading-Hierarchie**: Pruefen, ob jede Seite genau eine H1 hat und H2/H3 logisch verschachtelt sind. PainPoints, Positioning etc. scheinen korrekt strukturiert zu sein.
- **Alt-Texte**: Das Logo im Nav hat `alt="Altovate"` -- besser waere `alt="Altovate -- zur Startseite"`. BNI-Badge hat `alt="BNI Mitglied"` -- OK.
- **Bilder ohne width/height**: Portrait-Bilder haben keine expliziten `width` und `height` Attribute, was CLS (Cumulative Layout Shift) verursachen kann.
- **lang-Attribut**: `<html lang="de">` ist korrekt gesetzt.
- **Footer-Links**: `<a href="/impressum">` statt React-Router `<Link>` -- gemischte Navigation (manche Links sind `<a>`, manche `<Link>`). Dies ist fuer SEO OK, aber fuehrt zu Full-Page-Reloads.

---

## 4. Technisches SEO

**Prioritaet: HOCH**

### 4.1 robots.txt
- Aktuell korrekt. Sitemap-Verweis vorhanden.

### 4.2 sitemap.xml
Fehlende Seiten:
- `/tools`
- `/instagram-profil-check`
- `/marketingwissen`
- `/marketingwissen/:slug` (dynamisch -- muss per Build oder API generiert werden)

Fehlende `<lastmod>` Tags auf allen URLs -- Google nutzt diese zur Priorisierung.

### 4.3 Ladeperformance
- **Font-Loading**: `font-display: swap` ist korrekt gesetzt. Fonts sind lokal gehostet (DSGVO-konform).
- **Lazy Loading**: Sektionen sind via `React.lazy()` geladen -- gut fuer UX, aber der Content ist fuer Crawler UNSICHTBAR bis JS ausgefuehrt wird.
- **Preloader-Animation**: Blockiert den First Contentful Paint. Suchmaschinen koennen dies als "Interstitial" werten.
- **Bilder**: Portrait wird als importiertes Asset geladen (base64 oder hashed URL) -- kein `loading="lazy"`, kein `width`/`height`.

### 4.4 404-Seite
- Gibt keinen HTTP 404-Statuscode zurueck (SPA-Problem). Vercel-Rewrites leiten alles auf `index.html` mit Status 200. Googlebot sieht die 404-Seite als regulaere Seite.
- **Loesung**: In `vercel.json` spezifische Routen definieren oder eine `_redirects`/Header-Config nutzen.
- 404-Text ist auf Englisch ("Oops! Page not found") statt Deutsch.

---

## 5. Strukturierte Daten (JSON-LD)

**Prioritaet: MITTEL**

Aktuell implementiert:
- Organization Schema (korrekt)
- WebSite Schema (korrekt)
- FAQPage Schema (Startseite -- korrekt)
- BreadcrumbList (Service-Seiten -- korrekt)
- Service Schema (Service-Seiten -- korrekt)

Fehlend:
- **LocalBusiness Schema**: Fuer lokale Suche (Saarburg, Trier) essenziell. Sollte `openingHours`, `geo`, `priceRange` enthalten.
- **Person Schema** fuer Alexander Buchmann (GEO-relevant: KI-Systeme koennen den Gruender als Entitaet erkennen)
- **Article Schema** fuer Blog-Artikel
- **Review/AggregateRating Schema** fuer Google-Reviews-Sektion
- **Offer Schema** fuer die Preis-Sektion (390 EUR, 590 EUR etc.)

---

## 6. GEO (Generative Engine Optimization)

**Prioritaet: HOCH**

### 6.1 llms.txt
- Vorhanden und gut strukturiert. Sollte jedoch regelmaessig aktualisiert werden.
- Fehlend: Explizite Erwaehnung der Preise, Zielregion und Alleinstellungsmerkmale in maschinenlesbarer Form.

### 6.2 Content-Struktur fuer KI-Extraktion
- **Problem**: Da die Seite CSR ist, koennen KI-Crawler den Content nicht lesen.
- **Problem**: Viele Inhalte sind in JavaScript-Arrays definiert (z.B. `painPoints`, `bulletPoints`, `faqItems`) und werden erst zur Laufzeit in HTML gerendert. KI-Crawler, die kein JS ausfuehren, sehen diese Inhalte nicht.
- **Loesung**: Neben Prerendering sollten Kern-Inhalte auch in der `llms.txt` und idealerweise als statische HTML-Fallbacks verfuegbar sein.

### 6.3 Entitaets-Aufbau
Damit KI-Systeme "Altovate" und "Alexander Buchmann" als Entitaeten erkennen:
- Konsistente NAP-Daten (Name, Address, Phone) auf allen Seiten
- Verlinkung zu verifizierbaren externen Quellen (LinkedIn, BNI-Profil)
- Person Schema + Organization Schema muessen verknuepft sein (bereits teilweise ueber `founder` implementiert)

### 6.4 Zitierbarkeit
- Inhalte sollten in kurzen, faktischen Saetzen formuliert sein: "Altovate ist eine Marketing-Agentur in Saarburg, die Lead- und Content-Systeme fuer mittelstaendische Unternehmen entwickelt."
- Vermeidung von reinen Marketing-Floskeln in den ersten Absaetzen jeder Seite.

---

## 7. Interne Verlinkung

**Prioritaet: MITTEL**

- Footer verlinkt korrekt auf Hauptseiten.
- `InternalLinks`-Komponente wird auf einigen Service-Seiten genutzt (Werbeanzeigen, EmployerBranding, SoftwareKI, MarketingAutomation) -- gut.
- **Fehlend auf**: Startseite (keine expliziten Text-Links zu Service-Seiten im Content), Foerderung, Marketingwissen.
- Blog-Artikel sollten untereinander und zurueck zu Service-Seiten verlinken.
- Breadcrumbs sind auf Service-Seiten vorhanden, fehlen aber auf: /foerderung (hat Breadcrumb), /tools, /marketingwissen, /kontakt, /erstkontakt.

---

## 8. Lokales SEO

**Prioritaet: MITTEL**

- Google Business Profile: Nicht ueberpruefbar, aber sicherstellen, dass es existiert und verlinkt ist.
- NAP-Konsistenz: Adresse im Footer zeigt nur "Saarburg, Deutschland", im Schema steht "Max-Planck-Strasse 6, 54439 Saarburg". Diese sollten uebereinstimmen.
- Service-Seiten haben Geo-Suffix im URL-Slug (`-saarburg`) -- gut fuer lokales Ranking.
- **Fehlend**: `<meta name="geo.region" content="DE-RP" />` und `<meta name="geo.placename" content="Saarburg" />` fuer Geo-Meta-Tags.

---

## 9. Content-Luecken

**Prioritaet: MITTEL**

- Blog/Marketingwissen hat noch wenig sichtbaren Content (abhaengig von DB-Eintraegen).
- Jede Service-Seite sollte mind. 800-1200 Woerter unique Content haben.
- FAQ-Sektionen nur auf der Startseite -- sollten auch auf Service-Seiten vorhanden sein (Werbeanzeigen hat FAQ, EmployerBranding hat FAQ -- gut).
- Fehlende "Ueber uns" oder "Team"-Seite als eigenstaendige URL (aktuell nur als Sektion auf der Startseite).

---

## 10. Zusammenfassung: Priorisierte Handlungsliste

| # | Massnahme | Prioritaet | Aufwand |
|---|---|---|---|
| 1 | Prerendering/SSG implementieren (vite-ssg oder prerender.io) | Kritisch | Hoch |
| 2 | Fehlende Seiten in sitemap.xml ergaenzen + lastmod hinzufuegen | Hoch | Niedrig |
| 3 | Canonical URLs auf allen Seiten sicherstellen | Hoch | Niedrig |
| 4 | 404-Seite: HTTP-Status 404 + deutschen Text | Hoch | Niedrig |
| 5 | LocalBusiness + Person + AggregateRating Schema hinzufuegen | Hoch | Mittel |
| 6 | width/height auf allen Bildern fuer CLS | Hoch | Niedrig |
| 7 | llms.txt um Preise, USPs und Entitaets-Infos erweitern | Mittel | Niedrig |
| 8 | Fehlende og:tags und og:type auf allen Seiten | Mittel | Niedrig |
| 9 | Interne Verlinkung auf Startseite und Blog-Artikeln ausbauen | Mittel | Mittel |
| 10 | Geo-Meta-Tags fuer lokales SEO | Mittel | Niedrig |
| 11 | Nav aria-labels hinzufuegen | Mittel | Niedrig |
| 12 | Footer Copyright-Jahr dynamisch | Niedrig | Niedrig |
| 13 | Blog-Content aufbauen (mind. 10-15 Artikel) | Mittel | Hoch |

---

## Technische Details

### Prerendering-Ansatz (Punkt 1)
Da das Projekt auf Vite + React basiert und kein SSR-Framework moeglich ist, empfehle ich `vite-ssg` oder alternativ den Service **prerender.io** als Vercel-Middleware. Prerender.io erkennt Bot-User-Agents und liefert vorgerendertes HTML aus -- ohne Code-Aenderungen.

### Sitemap-Generierung (Punkt 2)
Die statische `sitemap.xml` muss manuell erweitert werden. Fuer Blog-Artikel waere ein Build-Script oder eine Edge-Function sinnvoll, die die Sitemap dynamisch aus der Datenbank generiert.

### 404-Fix (Punkt 4)
In `vercel.json` koennen spezifische Routen mit Status-Codes definiert werden, statt alles auf `index.html` umzuleiten. Alternativ eine Catch-All-Route mit `"status": 404`.

