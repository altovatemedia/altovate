

# Plan: Themencluster kompakter machen, neuen Artikel einfuegen und Cross-Links setzen

---

## 1. CoreTopics-Sektion deutlich verkleinern

**Problem:** Die fuenf Cluster-Karten nehmen zu viel Platz ein und ueberfordern auf der Startseite.

**Loesung:** Die Karten von grossen Bloecken mit Icon, Beschreibung und CTA zu einer kompakten horizontalen Leiste umbauen. Statt `p-8` und grossem Icon wird jeder Cluster ein kleiner Chip/Pill-Link in einer einzigen Zeile -- aehnlich den Filter-Chips, aber als eigenstaendige Navigationslinks zu den Cluster-Seiten. Die lange Definition faellt weg, es bleibt nur Icon + Titel als Link.

**Datei:** `src/components/marketing-system/CoreTopics.tsx`

---

## 2. Neuen Artikel in die Datenbank einfuegen

**Artikel:** "Lokale Werbung im Wochenblatt – Warum 800 Euro pro Woche im Kreisblatt selten eine Strategie sind"

- Kategorie: `roi` (Cluster: ROI & Wirtschaftlichkeit)
- Slug: `lokale-werbung-wochenblatt`
- Lesezeit: ca. 7 Minuten
- Vollstaendiger HTML-Content mit Definition-Box, Kernaussage, Rechenbeispiel-Tabelle, FAQ-Schema

---

## 3. Cross-Links zwischen allen Artikeln

Der neue Artikel referenziert thematisch drei bestehende Artikel. Gleichzeitig koennen bestehende Artikel zurueckverlinken:

| Von | Nach | Stelle im Text |
|---|---|---|
| lokale-werbung-wochenblatt | roi-im-marketing | "Weiterfuehrende Themen" + Rechenbeispiel-Abschnitt |
| lokale-werbung-wochenblatt | was-social-media-unternehmen-wirklich-kostet | "Weiterfuehrende Themen" |
| lokale-werbung-wochenblatt | social-media-ohne-budget | Abschnitt "Lokale Sichtbarkeit heute" |
| roi-im-marketing | lokale-werbung-wochenblatt | Abschnitt "Typische ROI-Fehler" (nicht messbare Kanaele) |
| was-social-media-unternehmen-wirklich-kostet | lokale-werbung-wochenblatt | Abschnitt "Werbebudget" (Vergleich Print vs. Digital) |

---

## Technische Aenderungen

| Datei / Aktion | Aenderung |
|---|---|
| `src/components/marketing-system/CoreTopics.tsx` | Kompakte horizontale Darstellung statt grosse Karten |
| SQL INSERT | Neuer Artikel mit HTML-Content, category `roi` |
| SQL UPDATE (2x) | Cross-Links in bestehenden Artikeln ergaenzen |

Keine neuen Abhaengigkeiten. Keine Schema-Aenderungen.

