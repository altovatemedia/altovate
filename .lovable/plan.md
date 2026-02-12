

# Conversion-Optimierung: Button-Texte und Microcopy

## Ausgangslage

Aktuell nutzen viele Buttons generische Texte wie "Anfrage senden", "Weiter", "Jetzt starten" oder "Nachricht senden". Diese sagen dem Nutzer nicht, was konkret passiert. Durch ergebnisorientierte Button-Texte und unterstuetzende Microcopy (kleine Hilfstexte unter/neben Buttons) laesst sich die Conversion-Rate deutlich steigern.

---

## Alle Buttons mit Optimierungsvorschlaegen

### 1. BookingModal.tsx (Strategie-Session Anfrage)

| Element | Aktuell | Optimiert |
|---------|---------|-----------|
| Button Schritt 1-2 | "Weiter" | "Weiter zu Schritt {n}" |
| Submit-Button | "Anfrage senden" | "Session-Anfrage absenden" |
| Microcopy | fehlt | "Antwort innerhalb von 24h - kein Abo, keine Verpflichtung." |
| Loading-Text | "Wird gesendet..." | "Anfrage wird uebermittelt..." |

### 2. Offers.tsx (Angebotskarten)

| Element | Aktuell | Optimiert |
|---------|---------|-----------|
| Button 60 Min | "Direkt Termin buchen" | "60-Min-Session anfragen" |
| Button 90 Min | "Direkt Termin buchen" | "90-Min-Session anfragen" |
| Button Setup | "Termin anfragen" | "Setup besprechen" |
| Microcopy | fehlt | Unter jedem Button: "Bezahlte Session - du bekommst echten Wert." |

### 3. NewHero.tsx (Hero-Bereich)

| Element | Aktuell | Optimiert |
|---------|---------|-----------|
| Primaer-CTA | "Strategie-Session buchen" | "Strategie-Session anfragen" |
| Sekundaer-CTA | "Direkt Klarheit statt Erstgespraech" | bleibt (gut) |
| Microcopy | fehlt | Unter dem CTA-Block: "Bezahlte Session. Keine Verkaufsshow." |

### 4. FinalCTA.tsx (Finaler Call-to-Action)

| Element | Aktuell | Optimiert |
|---------|---------|-----------|
| Button 1 | "60 Min Strategie-Session" | "60-Min-Session anfragen" |
| Button 2 | "90 Min Strategie-Session" | "90-Min-Session anfragen" |
| Microcopy | "Beide Sessions sind bezahlt..." | "Beide Sessions sind bezahlt. Keine Erstgespraeche, kein Pitch." |

### 5. StickyMobileCTA.tsx (Mobile Footer-Button)

| Element | Aktuell | Optimiert |
|---------|---------|-----------|
| Button | "Strategie-Session anfragen" | bleibt (bereits gut) |
| Microcopy | fehlt | Kleine Zeile darueber: "Ab 390 EUR - Antwort in 24h" |

### 6. FreebieBar.tsx (Top-Banner)

| Element | Aktuell | Optimiert |
|---------|---------|-----------|
| CTA-Text | "Termin waehlen" | "Jetzt Termin sichern" |

### 7. Contact.tsx (Kontaktformular)

| Element | Aktuell | Optimiert |
|---------|---------|-----------|
| Submit-Button | "Nachricht senden" | "Nachricht absenden" |
| Microcopy | fehlt | "Antwort innerhalb von 24 Stunden." |
| Marken-Check Button | "Marken-Check starten" | bleibt (bereits gut) |

### 8. ContactFunnel.tsx (Mehrstufiger Funnel)

| Element | Aktuell | Optimiert |
|---------|---------|-----------|
| Submit-Button | "Anfrage senden" | "Persoenliche Einschaetzung anfordern" |
| Microcopy | fehlt | "Kostenfrei und unverbindlich. Antwort in 24h." |
| Back-Button | "Zurueck" | bleibt |

### 9. SoftwareContactForm.tsx (Software-Anfrage)

| Element | Aktuell | Optimiert |
|---------|---------|-----------|
| Submit-Button | "Anfrage senden" | "Projektanfrage absenden" |
| Microcopy | fehlt | "Wir melden uns innerhalb von 24h mit einer Einschaetzung." |

### 10. SignatureOffer.tsx (Sichtbarkeitspaket)

| Element | Aktuell | Optimiert |
|---------|---------|-----------|
| 2x "Jetzt starten" | "Jetzt starten" | "Unverbindlich anfragen" |
| Microcopy | "Oder separat buchen..." | bleibt |

### 11. OneOnOneSection.tsx (1:1 Zusammenarbeit)

| Element | Aktuell | Optimiert |
|---------|---------|-----------|
| Button | "Zusammenarbeit besprechen" | bleibt (bereits gut) |
| Microcopy | "Nur nach Strategie-Session..." | bleibt |

### 12. DoneForYouSection.tsx (Warteliste)

| Element | Aktuell | Optimiert |
|---------|---------|-----------|
| Submit-Button | nur Pfeil-Icon | "Eintragen" (mit Icon) |
| Microcopy | fehlt | "Kein Spam. Nur eine Info, wenn ein Platz frei wird." |

### 13. ExitIntentBanner.tsx

| Element | Aktuell | Optimiert |
|---------|---------|-----------|
| CTA | "Kostenlosen Sichtbarkeits-Check starten" | bleibt (bereits gut) |
| Microcopy | "Keine Anmeldung noetig - Sofort Ergebnis" | bleibt (bereits gut) |

### 14. VisibilityCheckModal.tsx

| Element | Aktuell | Optimiert |
|---------|---------|-----------|
| Start-Button | "Check starten" | "Jetzt Check starten - kostenlos" |
| Weiter-Button | "Weiter" / "Fertig" | "Naechste Frage" / "Ergebnis berechnen" |
| E-Mail Submit | "Ergebnis anzeigen" | "Mein Ergebnis jetzt sehen" |
| Microcopy E-Mail | fehlt | "Deine Daten bleiben bei uns. Kein Newsletter." |
| Fertig-Button | "Fertig" | "Check abschliessen" |

---

## Zusammenfassung der Aenderungen

### Geaenderte Dateien (13 Stueck)

| Datei | Art der Aenderung |
|-------|-------------------|
| `src/components/BookingModal.tsx` | Button-Texte + Microcopy |
| `src/components/sections/Offers.tsx` | Button-Texte + Microcopy |
| `src/components/sections/NewHero.tsx` | Button-Text + Microcopy |
| `src/components/sections/FinalCTA.tsx` | Button-Texte + Microcopy |
| `src/components/StickyMobileCTA.tsx` | Microcopy |
| `src/components/sections/FreebieBar.tsx` | CTA-Text |
| `src/components/Contact.tsx` | Button-Text + Microcopy |
| `src/components/sections/ContactFunnel.tsx` | Button-Text + Microcopy |
| `src/components/sections/SoftwareContactForm.tsx` | Button-Text + Microcopy |
| `src/components/sections/SignatureOffer.tsx` | Button-Texte |
| `src/components/sections/DoneForYouSection.tsx` | Button-Text + Microcopy |
| `src/components/visibility-check/VisibilityCheckModal.tsx` | Button-Texte + Microcopy |
| `src/components/ChatBot.tsx` | keine Aenderung (Chat-Input ist kein CTA) |

### Grundprinzipien der Optimierung

1. **Ergebnis statt Aktion**: Was bekommt der Nutzer, nicht was er tut
2. **Risiko reduzieren**: Microcopy wie "Keine Verpflichtung", "Antwort in 24h"
3. **Konkreter Kontext**: "Projektanfrage absenden" statt "Anfrage senden"
4. **Konsistente Sprache**: "anfragen" statt "buchen" (da keine Direktbuchung moeglich)

