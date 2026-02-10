

## Ziel
Den "Über mich"-Abschnitt auf der Startseite authentischer gestalten: Ich-Perspektive statt 3. Person, "Alex" statt "Alexander", und den Ton so anpassen, dass es nicht nach großer Agentur klingt, sondern nach einem Unternehmer, der direkt mit seinen Kunden arbeitet.

## Betroffene Dateien

### 1. `src/components/sections/AboutAlex.tsx` (Hauptseite – aktiv)
Kompletter Text-Rewrite in Ich-Form:

- **Headline**: "Über Alexander Buchmann" wird zu "Über Alex Buchmann" (oder einfach "Über mich")
- **Text umschreiben** von 3. Person ("Er entwickelt...") zu 1. Person ("Ich entwickle..."):
  - Absatz 1: Kurze Vorstellung – wer ich bin, was ich mache, wo ich sitze
  - Absatz 2: Schwerpunkt/Arbeitsweise – direkt und persönlich formuliert
  - Absatz 3: Warum bewusst kein großes Team – "Du arbeitest direkt mit mir" statt "Unternehmer arbeiten direkt mit Alexander Buchmann"

### 2. `src/components/sections/AboutFounder.tsx` (aktuell nicht eingebunden)
- Gleiche Anpassungen der Texte für Konsistenz, falls die Komponente später reaktiviert wird
- "Alexander" durch "Alex" ersetzen wo sinnvoll
- Statistik "5 Experten im Team" entfernen oder anpassen (passt nicht zum Solopreneur-Bild)
- "Bei uns" / "Wir" durch "Bei mir" / "Ich" ersetzen

### 3. `src/pages/Kontakt.tsx`
- Meta-Description: "Alexander Buchmann" zu "Alex Buchmann"
- LinkedIn-Anzeigename: "Alexander Buchmann" zu "Alex Buchmann"

### 4. `src/components/SEOSchema.tsx`
- Schema.org founder name: bleibt "Alexander Buchmann" (offizieller juristischer Name ist hier korrekt für structured data)

### 5. `src/pages/Impressum.tsx`
- Bleibt unverändert – "Geschäftsführer Alexander Buchmann" ist die rechtlich korrekte Angabe

## Textvorschlag AboutAlex (Ich-Perspektive)

```
Headline: Über Alex Buchmann

Absatz 1:
Ich bin Gründer der altovate GmbH in Saarburg und entwickle
Marketing-Systeme für mittelständische Unternehmen in der
Region Saar-Mosel, Trier und Luxemburg.

Absatz 2:
Mein Schwerpunkt liegt an der Schnittstelle von Content-Strategie,
Marketing-Automatisierung und Vertriebssystem-Aufbau. Der Ansatz
ist klar: dokumentierte Prozesse, messbare Ergebnisse und
Unabhängigkeit von einzelnen Dienstleistern.

Absatz 3 (hervorgehoben):
Altovate ist bewusst keine große Agentur. Du arbeitest direkt
mit mir – ohne Umwege über Projektmanager oder Junior-Teams.
```

## Was sich nicht ändert
- Layout, Bild, Styling und Animationen bleiben identisch
- Impressum bleibt bei "Alexander Buchmann" (rechtlich erforderlich)
- SEOSchema bleibt bei "Alexander Buchmann" (structured data / offizieller Name)
- vCard bleibt bei "Alex Buchmann" (ist bereits korrekt)
