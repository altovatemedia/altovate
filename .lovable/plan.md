
# Preloader entfernen + Mina-Wissen aktualisieren

## Zusammenfassung

Zwei Aenderungen: (1) Der Preloader wird komplett entfernt, da er Performance kostet und trotz CSS-Filter kurz das Magenta-Logo zeigt. (2) Minas System-Prompt wird mit dem aktuellen Angebot aus der llms.txt synchronisiert -- insbesondere die REP-Methode, Strategie-Sessions, 1:1-Programme, Foerdermoeglichkeiten und der neue Marketing-System-Bereich.

---

## Aenderung 1: Preloader entfernen

Der Preloader (2,2 Sekunden Verzoegerung) wird komplett entfernt. Die Seite laedt direkt.

**Betroffene Dateien:**

| Datei | Aenderung |
|---|---|
| `src/pages/Index.tsx` | `Preloader`-Import und -Logik entfernen, `loading`-State entfernen, `AnimatePresence` vereinfachen |
| `src/components/Preloader.tsx` | Datei loeschen |

**Details:**
- `useState(true)` fuer `loading` faellt weg
- `handlePreloaderComplete` Callback faellt weg
- Die `motion.div` bleibt fuer den sanften Fade-In, startet aber sofort
- Der `framer-motion` Import in Index.tsx kann vereinfacht werden

---

## Aenderung 2: Mina System-Prompt aktualisieren

Der System-Prompt in `supabase/functions/mina-chat/index.ts` wird aktualisiert, um die aktuelle Positionierung widerzuspiegeln:

**Was sich aendert im Prompt:**

1. **Positionierung**: "Digital Marketing Agentur" wird zu "Lead- und Content-Systeme fuer mittelstaendische Unternehmen". Betonung der REP-Methode (Relevanz, Effizienz, Planbarkeit).

2. **Strategie-Sessions hinzufuegen**: 60 Min ab 390 Euro, 90 Min ab 590 Euro -- als niedrigschwelligen Einstieg erwaehnen.

3. **1:1 Zusammenarbeit**: 12-Wochen und 24-Wochen Programme als Premium-Option.

4. **Foerderung**: Mina soll aktiv auf bis zu 80% Foerderung hinweisen (BAFA, Landesfoerderung).

5. **Marketing System**: Verweis auf /marketing-system mit ROI-Rechner und Sichtbarkeits-Check.

6. **Region**: Saarburg, Trier, Saar-Mosel-Region betonen.

7. **USPs aktualisieren**: Systembasiert statt Einzelmassnahmen, projektbasiert ohne Knebelvertraege, eigene REP-Methode.

**Bestehende Paket-Infos bleiben erhalten** (Content Lite, Ads & Automation, Scale Plan, einmalige Pakete etc.) -- diese werden nur um die neuen Punkte ergaenzt.

**Betroffene Datei:**

| Datei | Aenderung |
|---|---|
| `supabase/functions/mina-chat/index.ts` | System-Prompt erweitern (Zeilen 35-196) |

---

## Technische Details

### Index.tsx vorher:
```text
const [loading, setLoading] = useState(true);
const handlePreloaderComplete = useCallback(() => setLoading(false), []);
...
{loading && <Preloader onComplete={handlePreloaderComplete} />}
<AnimatePresence mode="wait">
  <motion.div ...>
```

### Index.tsx nachher:
```text
// Kein loading-State, kein Preloader
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
  className="min-h-screen bg-background"
>
```

### Mina-Prompt Ergaenzungen (neue Abschnitte):
- "UNSERE POSITIONIERUNG & METHODE" mit REP-Erklaerung
- "STRATEGIE-SESSIONS" als Einstieg
- "FOERDERUNG" mit konkreten Zahlen
- "INTERAKTIVE TOOLS" Verweis auf /marketing-system
