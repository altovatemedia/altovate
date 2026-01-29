
# Website-Relaunch: Inhaltliche Neuausrichtung

## Ziel der Uberarbeitung
Transformation der bisherigen Agentur-Website zu einer performance-orientierten Personal-Brand-Seite mit klarem Fokus auf:
- Lead-Generierung durch bezahlte Strategie-Sessions
- Klare Positionierung als System-Bauer (nicht Content-Ersteller)
- Direkte Kommunikation ohne Marketing-Floskeln
- Kein kostenloses Erstgesprach - alle Sessions sind bezahlt

---

## Strukturelle Anderungen

### Sektionen die ENTFERNT werden:
1. **PricingToggle** - Wird ersetzt durch neue Angebots-Sektion
2. **ServicesVisual** - Wird ersetzt durch System-Darstellung
3. **SignatureOffer** - Wird ersetzt durch neue Angebots-Sektion
4. **Timeline** - Wird zur neuen Leistungslogik-Sektion
5. **NotFor** - Entfallt (kein direktes Pendant im neuen Konzept)

### Sektionen die BEIBEHALTEN werden:
1. **FreebieBar** - Bleibt (Text anpassen)
2. **NewNavigation** - Bleibt (Links anpassen)
3. **GoogleReviews** - Bleibt unverandert
4. **CaseStudies** - Bleibt unverandert
5. **FAQ** - Bleibt (Inhalte anpassen)
6. **ChatBot** - Bleibt
7. **Footer** - Bleibt (Links anpassen)
8. **CookieBanner** - Bleibt

### Neue Sektionen:
1. **NewHero** - Komplett neuer Inhalt
2. **PainPoints** - Neuer Inhalt (Problem-Sektion)
3. **Positioning** - NEU: Warum Altovate
4. **SystemProcess** - NEU: Leistungslogik (4 Schritte)
5. **Offers** - NEU: 3 Angebote (60min, 90min, System-Aufbau)
6. **WhyNotFree** - NEU: Warum kein kostenloses Erstgesprach
7. **AboutAlex** - Uberarbeitete About-Sektion
8. **FAQ** - Angepasste Inhalte
9. **ContactFunnel/FinalCTA** - Neuer finaler CTA mit 2 Buttons

---

## Detaillierte Anderungen pro Komponente

### 1. NewHero.tsx
**Aktuelle Headline:** "Mehr Sichtbarkeit. Mehr Kunden. Mehr Erfolg."

**Neue Inhalte:**
```text
Headline: Online-Marketing fur Unternehmer, die keine Zeit fur Marketing haben.

Subline: Ich baue klare Lead- & Content-Systeme,
die Anfragen bringen - ohne dass du Influencer werden musst.

Bullet Points (3 Stuck):
- Kein Dauer-Posten
- Kein Agentur-Blabla
- Kein Abhangigkeitsmodell

CTA Primary: Strategie-Session buchen
CTA Secondary: Direkt Klarheit statt Erstgesprach
```

**Technische Anderungen:**
- Benefit-Grid (3 Karten) entfernen
- 3 Bullet Points als einfache Liste
- Zweiten CTA-Button anpassen
- VisibilityCheck-Modal entfernen (kein Freebie-Funnel mehr)

---

### 2. PainPoints.tsx
**Aktuelle Headline:** "Das tut weh"

**Neue Inhalte:**
```text
Headline: Du weisst, dass du Marketing brauchst -
aber nicht, wie es sinnvoll in deinen Alltag passt.

Pain Points (4 Stuck statt 3):
1. Social Media frisst Zeit, bringt aber keine Anfragen
2. Agenturen reden uber Reichweite statt Umsatz
3. Dein Marketing hangt an Einzelpersonen
4. Nichts ist dokumentiert, skalierbar oder messbar

Footer-Text: Das ist kein Content-Problem.
Das ist ein fehlendes System.
```

**Technische Anderungen:**
- Pain-Point-Karten vereinfachen (keine "Verlust"-Angaben)
- 4 statt 3 Punkte
- CTA-Button entfernen
- Schluss-Statement hinzufugen

---

### 3. NEUE Komponente: Positioning.tsx
**Inhalt:**
```text
Headline: Ich verkaufe keine Posts.
Ich baue Systeme.

Text: Altovate ist keine klassische Agentur.
Ich arbeite direkt mit Unternehmern, die Ergebnisse wollen.

Fokus-Punkte (3 Stuck):
- Struktur vor Content
- System vor Aktionismus
- Abschluss vor Reichweite
```

**Design:**
- Ahnlich wie aktuelle AboutFounder-Sektion
- Portrait-Bild optional behalten
- Minimalistisch, klare Aussagen

---

### 4. NEUE Komponente: SystemProcess.tsx
**Inhalt:**
```text
Headline: So entsteht planbarer Vertrieb uber Content

4 Schritte horizontal:
1. Klarer Fokus - Zielgruppe, Angebot, Botschaft
2. Content mit Funktion - Nicht fur Likes, sondern fur Entscheidungen
3. Lead-System - DM, Landingpage oder Terminbuchung
4. Ubergabe an Abschluss - Kein Chaos, kein Nachfassen ins Leere
```

**Design:**
- Horizontale Darstellung mit Icons (ahnlich aktuellem Timeline)
- Verbindungslinien zwischen Steps
- Minimalistische Icons

---

### 5. NEUE Komponente: Offers.tsx
**Inhalt:**
```text
Headline: So kannst du mit mir arbeiten

Angebot 1: Strategie-Session 60 Minuten
Preis: 390 Euro
Fur: Klarheit, Marketing sortieren, Entscheidungsgrundlage
Ergebnis: Klare Einschatzung, nachste Schritte, Entscheidung
CTA: Direkt Termin buchen

Angebot 2: Strategie-Session 90 Minuten  
Preis: 590 Euro
Fur: Konkretes Vorhaben, Leads/Content/Ads aufsetzen, belastbares Konzept
Ergebnis: System-Empfehlung, priorisierte Massnahmen, Umsetzungslogik
CTA: Direkt Termin buchen

Angebot 3: System-Aufbau (Projektbasiert)
Preis: ab 1.800 Euro
Fur: Marketing nicht selbst tragen, funktionierendes Setup, unabhangig von Einzelpersonen
Hinweis: Kein Paket von der Stange. Umsetzung nur nach Strategie-Session.
CTA: Termin anfragen
```

**Design:**
- 3-spaltige Kartenansicht
- Mittlere Karte NICHT hervorgehoben (alle gleichwertig)
- Klare Preise, keine durchgestrichenen Preise

---

### 6. NEUE Komponente: WhyNotFree.tsx
**Inhalt:**
```text
Headline: Ich verschenke keine Beratung.

Text: In meinen Gesprachen entsteht echter strategischer Wert.
Deshalb sind alle Sessions bezahlt.

Das sorgt fur:
- Klaren Fokus
- Ernsthafte Gesprache
- Saubere Entscheidungen auf beiden Seiten
```

**Design:**
- Kompakte Sektion
- Evtl. mit Icon oder Zitat-Stil
- Setzt klare Erwartung

---

### 7. AboutFounder.tsx → AboutAlex.tsx
**Aktuelle Headline:** "Warum Altovate?"

**Neue Inhalte:**
```text
Headline: Ich bin Alex.

Text: Ich arbeite seit Jahren an der Schnittstelle aus
Marketing, Content, Automatisierung und Unternehmertum.

Ich baue keine Hype-Accounts.
Ich baue Strukturen, die funktionieren -
auch wenn du kein Marketing-Profi bist.

Altovate ist bewusst kein grosses Agenturkonstrukt.
Du arbeitest direkt mit mir.
```

**Technische Anderungen:**
- Statistik-Zahlen entfernen (zu agenturmassig)
- Zitat entfernen
- Kurzer, direkter Text
- Portrait-Bild behalten

---

### 8. FAQ.tsx
**Neue Fragen:**
```text
1. Muss ich selbst Content machen?
   → Nein. Aber du musst verstanden werden.

2. Arbeitest du mit Ads?
   → Ja, wenn sie Sinn machen.

3. Langfristige Vertrage?
   → Nein. Projekte und klare Vereinbarungen.

4. Fur wen ist das nichts?
   → Fur alle, die schnelle Likes wollen.
```

**Design:** Bestehendes Accordion-Design beibehalten

---

### 9. ContactFunnel.tsx → FinalCTA.tsx
**Komplett vereinfacht:**

```text
Headline: Wenn du Marketing willst, das zu deinem Unternehmen passt.

2 CTA-Buttons:
- 60 Minuten Strategie-Session buchen
- 90 Minuten Strategie-Session buchen
```

**Technische Anderungen:**
- Mehrstufigen Funnel entfernen
- Einfache CTA-Sektion mit Calendly-Links
- Keine Formularfelder mehr

---

### 10. FreebieBar.tsx
**Neuer Text:**
```text
Strategie-Session buchen: Klarheit statt Erstgesprach → Termin wahlen
```

---

### 11. Index.tsx - Neue Seitenstruktur
```tsx
<FreebieBar />
<NewNavigation />
<NewHero />
<PainPoints />
<Positioning />
<SystemProcess />
<Offers />
<WhyNotFree />
<AboutAlex />
<CaseStudies />
<GoogleReviews />
<FAQ />
<FinalCTA />
<Footer />
<ChatBot />
<CookieBanner />
```

---

## Zusammenfassung der Dateianderungen

### Zu erstellende Dateien:
1. `src/components/sections/Positioning.tsx`
2. `src/components/sections/SystemProcess.tsx`
3. `src/components/sections/Offers.tsx`
4. `src/components/sections/WhyNotFree.tsx`
5. `src/components/sections/FinalCTA.tsx`
6. `src/components/sections/AboutAlex.tsx`

### Zu bearbeitende Dateien:
1. `src/pages/Index.tsx` - Neue Sektionsreihenfolge
2. `src/components/sections/NewHero.tsx` - Neuer Inhalt
3. `src/components/sections/PainPoints.tsx` - Neuer Inhalt
4. `src/components/FAQ.tsx` - Neue Fragen
5. `src/components/sections/FreebieBar.tsx` - Neuer Text
6. `src/components/Footer.tsx` - Links anpassen

### Zu entfernende/nicht mehr verwendete Dateien:
- `src/components/sections/SignatureOffer.tsx` (nicht loschen, nur nicht einbinden)
- `src/components/sections/ServicesVisual.tsx` (nicht loschen, nur nicht einbinden)
- `src/components/sections/PricingToggle.tsx` (nicht loschen, nur nicht einbinden)
- `src/components/sections/ContactFunnel.tsx` (ersetzt durch FinalCTA)
- `src/components/Timeline.tsx` (ersetzt durch SystemProcess)
- `src/components/NotFor.tsx` (entfallt)

---

## Technische Details

### Beibehaltene Elemente:
- Alle Animationen (`fade-in-up`, `slide-in-right`, etc.)
- Farbschema (Primary: #EA3B5F)
- Light/Dark Mode
- Responsive Design
- Tailwind-Klassen und CSS-Variablen
- Button-Styles (`btn-hero`, `btn-secondary`)
- Karten-Styles (`finom-card`, `bold-card`)

### CTA-Aktionen:
- Alle "Termin buchen" Buttons scrollen zu Calendly oder offnen Calendly-Popup
- Alternativ: Direktlinks zu Calendly-Buchungsseiten fur 60min/90min Sessions
