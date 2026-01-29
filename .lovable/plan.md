
# Website-Erweiterung: Neue Angebotsstruktur & Förderungsseite

## Ubersicht der Anderungen

Diese Anpassung erweitert die bestehende Website um:
1. Uberarbeitete Positioning-Sektion (neue Headline)
2. Neue Premium-Angebote (1:1 Zusammenarbeit, Done for You)
3. Angepasste Angebotsstruktur mit "inkl. MwSt." Preisen
4. Forderungs-Hinweis im Footer
5. Neue Unterseite "/foerderung"

---

## Detaillierte Anderungen

### 1. Positioning-Sektion anpassen

**Datei:** `src/components/sections/Positioning.tsx`

**Aktuelle Headline:**
"Ich verkaufe keine Posts. Ich baue Systeme."

**Neue Inhalte:**
```text
Headline: Marketing, das als System funktioniert.

Subline: Altovate arbeitet mit Unternehmern, die planbare Anfragen, 
klare Prozesse und messbare Ergebnisse wollen - ohne Influencer-Zirkus.

Fokus-Punkte (bleiben):
- Struktur vor Content
- System vor Aktionismus
- Abschluss vor Reichweite
```

---

### 2. Offers-Sektion komplett uberarbeiten

**Datei:** `src/components/sections/Offers.tsx`

**Struktur neu:**

**Strategie-Sessions (2 Karten nebeneinander):**

| 60 Minuten Strategie-Session | 90 Minuten Strategie-Session |
|------------------------------|------------------------------|
| 390 Euro inkl. MwSt. | 590 Euro inkl. MwSt. |
| Fur: Klarheit, sortieren, Entscheidungsgrundlage | Fur: konkretes Vorhaben, belastbares Konzept |
| CTA: Direkt Termin buchen | CTA: Direkt Termin buchen |

**System-Aufbau (eigene Karte):**
- ab 1.800 Euro inkl. MwSt.
- Projektbasierter Aufbau eines klar definierten Marketing- oder Lead-Systems
- Hinweis: Kein Paket von der Stange. Umsetzung ausschliesslich nach Strategie-Session.
- CTA: Termin anfragen

---

### 3. NEUE Sektion: Strategische 1:1 Zusammenarbeit

**Neue Datei:** `src/components/sections/OneOnOneSection.tsx`

**Position:** Direkt nach Offers-Sektion

**Inhalt:**
```text
Uberschrift: Strategische 1:1 Zusammenarbeit

Subline: Fur Unternehmer, die Marketing nicht mehr nebenbei entscheiden wollen.

Text:
Keine Agenturbetreuung. Kein klassisches Coaching.
Sondern enge strategische Begleitung bei Positionierung, Angebotsstruktur
und Systementscheidungen.

Ich begleite dich bei den Entscheidungen, die Umsatz, Zeit und Wachstum bestimmen
- und koordiniere bei Bedarf Tools, Umsetzung und externe Beteiligte.

Preise:
- 12 Wochen 1:1 Zusammenarbeit: 3.900 Euro inkl. MwSt.
- 24 Wochen 1:1 Zusammenarbeit: 7.200 Euro inkl. MwSt.

Hinweis: Zusammenarbeit nur nach vorheriger Strategie-Session. Begrenzte Kapazitat.

CTA: Zusammenarbeit besprechen (offnet Calendly)
```

**Design:**
- Eigene Sektion mit anderem Hintergrund (bg-muted/30)
- Zwei Preis-Karten nebeneinander (12 Wochen / 24 Wochen)
- Ruhig, hochwertig, klar abgegrenzt

---

### 4. NEUE Sektion: Done for You (Premium)

**Neue Datei:** `src/components/sections/DoneForYouSection.tsx`

**Position:** Nach AboutAlex, vor CaseStudies

**Inhalt:**
```text
Uberschrift: Done for You
Subtitle: Marketing als vollstandiges System

Subline: Die komplette Verantwortung liegt bei uns.

Text:
Dieses Modell richtet sich an Unternehmen, die Marketing nicht intern steuern
oder auf mehrere Schultern verteilen wollen.

Wir ubernehmen den gesamten Prozess:
von der strategischen Idee uber die Umsetzung bis zur laufenden Auswertung.

Leistungsumfang:
- Strategische Gesamtarchitektur (Lead, Sales, Delivery)
- Angebots- & Funnel-Logik
- Content- & Kampagnenkonzeption
- Koordination von Design, Video, Copy & Ads
- Technischer Aufbau (Tracking, Automationen, Tools)
- Ausspielung & laufende Optimierung
- Analyse, Reporting & Entscheidungsgrundlagen

Status:
Dieses Modell ist bewusst limitiert.
Aktuell ausgebucht.

Neue Projekte ausschliesslich:
- nach bestehender Zusammenarbeit
- oder auf personliche Empfehlung
```

**Design:**
- Eigene, ruhige Sektion
- Dunkler/kontrastierter Hintergrund (bg-[#1a1a1a] mit heller Schrift)
- KEIN Preis
- KEIN CTA-Button
- Exklusivitat betonen durch dezente, edle Gestaltung
- Checkmarks oder minimalistische Icons fur Leistungen

---

### 5. Footer anpassen

**Datei:** `src/components/Footer.tsx`

**Neue Spalte oder Link hinzufugen:**
```text
Forderungsmoglichkeiten fur Marketing & Beratung
Je nach Ausgangslage sind Zuschusse bis zu 50 % oder 80 % moglich.
CTA: Forderung prufen (Link zu /foerderung)
```

---

### 6. NEUE Seite: Forderung

**Neue Datei:** `src/pages/Foerderung.tsx`

**Route:** `/foerderung`

**Inhalt strukturiert:**

**Abschnitt 1 - Beratung (BAFA):**
- bis zu 80 % Forderung
- reine Beratung, keine Umsetzung
- Strategie-Sessions & 1:1 Zusammenarbeit geeignet
- Altovate unterstutzt bei Ablauf & Unterlagen

**Abschnitt 2 - Marketing-Massnahmen:**
- je nach Programm bis zu 50 %
- projektabhangig
- nur sinnvoll bei klarer Struktur

**Hinweis:**
Nicht jedes Unternehmen ist forderfaehig.
Das klaren wir vorab - ehrlich und ohne Verkaufsdruck.

**CTA:** Strategie-Session buchen

**Design:**
- Gleiches Layout wie andere Unterseiten
- Navigation + Footer
- Saubere, informative Darstellung
- Zwei klar getrennte Abschnitte

---

### 7. Index.tsx - Neue Sektionsreihenfolge

**Datei:** `src/pages/Index.tsx`

```tsx
<FreebieBar />
<NewNavigation />
<NewHero />
<PainPoints />
<Positioning />          // Uberarbeitete Headline
<SystemProcess />
<Offers />               // Strategie-Sessions + System-Aufbau
<OneOnOneSection />      // NEU: 1:1 Zusammenarbeit
<WhyNotFree />
<AboutAlex />
<DoneForYouSection />    // NEU: Done for You
<CaseStudies />
<GoogleReviews />
<FAQ />
<FinalCTA />
<Footer />               // Mit Forderungs-Link
<ChatBot />
<CookieBanner />
```

---

### 8. App.tsx - Neue Route

**Datei:** `src/App.tsx`

Neue Route hinzufugen:
```tsx
<Route path="/foerderung" element={<Foerderung />} />
```

---

## Zusammenfassung der Datei-Anderungen

### Zu erstellende Dateien:
1. `src/components/sections/OneOnOneSection.tsx` - 1:1 Zusammenarbeit
2. `src/components/sections/DoneForYouSection.tsx` - Done for You Premium
3. `src/pages/Foerderung.tsx` - Forderungs-Unterseite

### Zu bearbeitende Dateien:
1. `src/components/sections/Positioning.tsx` - Neue Headline
2. `src/components/sections/Offers.tsx` - Angepasste Struktur mit MwSt.
3. `src/components/Footer.tsx` - Forderungs-Hinweis
4. `src/pages/Index.tsx` - Neue Sektionsreihenfolge
5. `src/App.tsx` - Route fur /foerderung

---

## Technische Details

### Beibehaltene Elemente:
- Alle Animationen und Hover-Effekte
- Farbschema (Primary: #EA3B5F)
- Light/Dark Mode Unterstutzung
- Responsive Design
- Tailwind-Klassen
- Button-Styles

### CTA-Verlinkungen:
- Strategie-Session 60 Min: `https://calendly.com/altovate/60min`
- Strategie-Session 90 Min: `https://calendly.com/altovate/90min`
- System-Aufbau / 1:1 Zusammenarbeit: `https://calendly.com/altovate/60min` (Anfrage)

### Tonalitat:
- Unternehmer zu Unternehmer
- Keine Emojis
- Keine Coach-Floskeln
- Klar, ruhig, selbstbewusst
- Alex als Person sichtbar, Altovate als operative Einheit
