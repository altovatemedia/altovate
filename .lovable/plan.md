

# Marketingwissen-Sektion mit BabyLoveGrowth-Integration

## Uebersicht

BabyLoveGrowth arbeitet als Push-System: Es sendet fertige Blogbeitraege per Webhook an deine Seite. Die Architektur besteht aus drei Teilen:

1. **Datenbank-Tabelle** fuer Artikel
2. **Webhook-Endpoint** (Backend-Funktion), der Artikel von BabyLoveGrowth empfaengt und speichert
3. **Blog-Seiten** (Uebersicht + Einzelartikel) im Frontend, verlinkt im Footer

---

## Schritt 1: Datenbank-Tabelle erstellen

Neue Tabelle `blog_articles` mit folgenden Feldern:

| Feld | Typ | Beschreibung |
|------|-----|-------------|
| id | uuid (PK) | Automatisch generiert |
| title | text | Artikeltitel |
| slug | text (unique) | URL-freundlicher Pfad |
| content_html | text | HTML-Inhalt des Artikels |
| content_markdown | text | Markdown-Inhalt (optional) |
| meta_description | text | SEO-Beschreibung |
| hero_image_url | text | Titelbild-URL |
| status | text | "draft" oder "published" |
| published_at | timestamptz | Veroeffentlichungsdatum |
| created_at | timestamptz | Erstellungsdatum |

RLS-Policy: Oeffentlich lesbar (SELECT) fuer alle, kein INSERT/UPDATE/DELETE ueber den Client.

---

## Schritt 2: Webhook-Endpoint (Backend-Funktion)

**Neue Datei:** `supabase/functions/babylovegrowth-webhook/index.ts`

- Empfaengt POST-Requests von BabyLoveGrowth
- Authentifizierung per API-Key im Header (Bearer Token)
- Speichert den API-Key als Secret (`BABYLOVEGROWTH_API_KEY`)
- Akzeptiert: `title`, `slug`, `content_html`, `content_markdown`, `metaDescription`, `heroImageUrl`, `status`
- Erstellt oder aktualisiert Artikel (upsert auf `slug`)
- Gibt Ping-Endpoint zurueck (GET-Request)

Die Webhook-URL, die du in BabyLoveGrowth konfigurierst, wird sein:
`https://euglobmdsrurbbmfargp.supabase.co/functions/v1/babylovegrowth-webhook`

---

## Schritt 3: Blog-Seiten im Frontend

### 3a: Uebersichtsseite `/marketingwissen`

**Neue Datei:** `src/pages/Marketingwissen.tsx`

- Navigation + Footer (wie alle anderen Seiten)
- SEO-Helmet mit Titel "Marketingwissen | altovate"
- Grid mit Artikelkarten (Bild, Titel, Beschreibung, Datum)
- Nur Artikel mit `status = 'published'` anzeigen
- Sortiert nach `published_at DESC`
- Klick fuehrt zur Einzelansicht

### 3b: Einzelartikel-Seite `/marketingwissen/:slug`

**Neue Datei:** `src/pages/BlogArticle.tsx`

- Artikel per `slug` aus der Datenbank laden
- HTML-Inhalt rendern (sanitized mit dangerouslySetInnerHTML)
- Titelbild, Titel, Datum, Inhalt
- Zurueck-Link zur Uebersicht
- SEO: Dynamischer Titel + Meta-Description aus Artikeldaten

---

## Schritt 4: Routing

**Datei:** `src/App.tsx`

- Neue Route: `/marketingwissen` -> `Marketingwissen`
- Neue Route: `/marketingwissen/:slug` -> `BlogArticle`

---

## Schritt 5: Footer-Verlinkung

**Datei:** `src/components/Footer.tsx`

- In der Angebote-Spalte einen neuen Link "Marketingwissen" hinzufuegen, der auf `/marketingwissen` zeigt

---

## Schritt 6: API-Key als Secret speichern

Der API-Key (`ec2cebf7-fe9b-4cfd-94f0-ecced6a0b0f5`) wird als Secret `BABYLOVEGROWTH_API_KEY` gespeichert, damit der Webhook nur authentifizierte Anfragen akzeptiert.

---

## Technische Details

### Neue Dateien
| Datei | Beschreibung |
|-------|-------------|
| `supabase/functions/babylovegrowth-webhook/index.ts` | Webhook-Endpoint |
| `src/pages/Marketingwissen.tsx` | Blog-Uebersicht |
| `src/pages/BlogArticle.tsx` | Einzelartikel-Ansicht |

### Geaenderte Dateien
| Datei | Aenderung |
|-------|----------|
| `src/App.tsx` | 2 neue Routen |
| `src/components/Footer.tsx` | Link zu /marketingwissen |
| `supabase/config.toml` | Neue Funktion registrieren |

### Umsetzungsreihenfolge
1. Datenbank-Tabelle + RLS-Policies erstellen
2. API-Key als Secret speichern lassen
3. Webhook-Funktion erstellen + deployen
4. Blog-Seiten (Uebersicht + Einzelartikel) erstellen
5. Routing + Footer-Link hinzufuegen
6. In BabyLoveGrowth die Webhook-URL konfigurieren (das machst du selbst im BabyLoveGrowth-Dashboard)

