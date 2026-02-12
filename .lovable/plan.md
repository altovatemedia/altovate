
# Plan: 4 Fixes fuer das Artikel-Template und die Marketing-Wissen-Startseite

---

## 1. LinkedIn-Share reparieren

**Problem:** Der LinkedIn-Share-Button oeffnet eine URL, die nicht mehr funktioniert. LinkedIn hat die `sharing/share-offsite/`-URL veraendert und erfordert mittlerweile ein anderes Format.

**Loesung:** In `ShareSection.tsx` die LinkedIn-Share-URL auf das aktuelle Format umstellen:
```
https://www.linkedin.com/shareArticle?mini=true&url=...&title=...
```

---

## 2. Anchor-Link-Icons an H2-Ueberschriften entfernen

**Problem:** An jeder H2-Ueberschrift wird ein kleines Ketten-Icon (Link-Symbol) eingefuegt. Beim Klick springt die Seite zur jeweiligen Ueberschrift. Das verwirrt Nutzer, die die Funktion nicht kennen.

**Loesung:** Die `processContentHtml`-Funktion in `BlogArticle.tsx` so aendern, dass keine Anchor-Links mehr an H2-Elemente angehaengt werden. Die IDs bleiben erhalten (fuer das Inhaltsverzeichnis), aber das sichtbare Ketten-Icon und der klickbare Link werden entfernt. Die zugehoerigen CSS-Regeln in `index.css` (`.article-anchor-link`) werden ebenfalls entfernt.

---

## 3. Text-Formatierung: Aufzaehlungspunkte und Abstaende

**Problem:** Die Tailwind `prose`-Klasse entfernt standardmaessig List-Styles auf dunklen Themes. Aufzaehlungspunkte (`ul > li`) fehlen, und nach nummerierten Listen (`ol`) stimmen die Abstaende nicht.

**Loesung:** In `index.css` explizite Prose-Overrides ergaenzen:
- `prose ul` bekommt `list-style-type: disc` und linkes Padding
- `prose ol` bekommt `list-style-type: decimal` und linkes Padding  
- `prose li` bekommt korrekten Abstand (`margin-bottom`)
- `prose li::marker` bekommt die richtige Farbe (`text-muted-foreground`)
- Abstaende nach Listen werden normalisiert

---

## 4. Marketing-Wissen-Startseite: Chronologische Artikelliste mit optionalem Filter

**Problem:** Die Startseite `/marketing-wissen` zeigt aktuell nur die 5 Themencluster-Karten. Nutzer muessen erst einen Cluster waehlen, bevor sie Artikel sehen. Das ist ueberfordern.

**Loesung:** Die `MarketingSystem.tsx`-Seite wird um eine neue Sektion erweitert:
- **Schmale Filterleiste** oberhalb der Artikel: Horizontal angeordnete Chips/Buttons fuer jeden Cluster (z.B. "Alle", "ROI", "Social Media", "Funnel", "Recruiting", "GEO"). Standard: "Alle" ist aktiv.
- **Chronologische Artikelliste** darunter: Alle publizierten Artikel aus der Datenbank, sortiert nach `published_at DESC`. Jeder Eintrag zeigt Titel, Meta-Beschreibung, Lesezeit und Cluster-Zuordnung. Klick fuehrt zum Artikel.
- Die bestehende `CoreTopics`-Sektion bleibt als Themenuebersicht darueber, wird aber kompakter.
- Die Filterleiste filtert die Artikelliste live per Client-State, ohne Neuladen.

---

## Technische Aenderungen (Zusammenfassung)

| Datei | Aenderung |
|---|---|
| `src/components/marketing-system/article/ShareSection.tsx` | LinkedIn-URL-Format korrigieren |
| `src/pages/BlogArticle.tsx` | Anchor-Link-Injection aus `processContentHtml` entfernen |
| `src/index.css` | `.article-anchor-link`-CSS entfernen; Prose-Overrides fuer Listen hinzufuegen |
| `src/pages/MarketingSystem.tsx` | Neue Sektion mit Filterleiste + chronologischer Artikelliste |

Keine neuen Abhaengigkeiten noetig. Keine Datenbank-Aenderungen.
