

# Förderhinweis prominenter platzieren

## Das Problem

Die Förderung von bis zu 80% ist ein starkes Verkaufsargument, wird aber nur im Footer und auf der Förderseite erwähnt. Viele potenzielle Kunden sehen das gar nicht.

## Lösungsansätze

### Option A: Badge bei den Angebots-Preisen

Bei den Strategie-Sessions und der 1:1 Zusammenarbeit einen kleinen Badge hinzufügen, der auf die Fördermöglichkeit hinweist.

Beispiel bei Preisanzeige:
```
390 € inkl. MwSt.
[Bis zu 80% förderfähig]
```

**Vorteile:**
- Direkt dort, wo die Kaufentscheidung fällt
- Macht den Preis psychologisch attraktiver
- Nicht aufdringlich

### Option B: Hinweis-Banner nach den Pain Points

Eine dezente Sektion zwischen bestehenden Bereichen, die auf die Förderung hinweist.

**Vorteile:**
- Eigenständiger Aufmerksamkeitsfänger
- Mehr Platz für Erklärung

### Option C: FreebieBar (Top-Banner) erweitern

Den oberen Banner alternierend oder zusätzlich mit Förderhinweis versehen.

**Vorteile:**
- Sehr hohe Sichtbarkeit
- Sofort beim Seitenaufruf präsent

---

## Empfehlung: Kombination A + B

### 1. Förder-Badges bei Preisen hinzufügen

**Dateien:** `Offers.tsx`, `OneOnOneSection.tsx`

Bei den Strategie-Sessions und 1:1-Paketen unter dem Preis:
- Kleiner Badge mit Text "Bis zu 80% förderfähig"
- Link zur Förderseite
- Dezentes Design (primary/10 Hintergrund)

### 2. Neue Förder-Hinweis-Sektion erstellen

**Neue Datei:** `FoerderungHint.tsx`

Positionierung auf der Startseite nach den Angeboten (nach `Offers`):
- Kurze, prägnante Botschaft
- Dezentes Design, nicht zu werblich
- Link zur vollständigen Förderseite
- Badge-Style mit Icon

Inhalt:
```
"Wusstest du, dass strategische Beratung staatlich gefördert wird?"
Bis zu 80% Zuschuss möglich – je nach Ausgangslage.
→ Mehr erfahren
```

---

## Technische Umsetzung

| Datei | Änderung |
|-------|----------|
| `src/components/sections/Offers.tsx` | Förder-Badge unter den Preisen der Strategie-Sessions |
| `src/components/sections/OneOnOneSection.tsx` | Förder-Badge bei den 1:1-Paketen |
| `src/components/sections/FoerderungHint.tsx` | Neue kompakte Hinweis-Sektion (neu erstellen) |
| `src/pages/Index.tsx` | FoerderungHint nach Offers-Sektion einbinden |

---

## Erwartetes Ergebnis

- Förderung wird an 3 strategischen Stellen sichtbar (statt nur Footer)
- Keine Überladung der Seite
- Natürliche Integration ins bestehende Design
- Klare Call-to-Actions zur Förderseite

