

# BNI-Mitgliedschaft im Footer einbauen

## Ziel

BNI-Mitgliedschafts-Badge im Footer unter den Kontaktdaten einfügen, um die Netzwerk-Zugehörigkeit sichtbar zu machen.

## Umsetzung

### 1. BNI-Logo ins Projekt kopieren

Das hochgeladene Logo wird in den `src/assets` Ordner kopiert, da es als React-Import verwendet wird.

**Datei:** `src/assets/bni-badge.png`

### 2. Footer erweitern

**Datei:** `src/components/sections/Footer.tsx`

Nach den Kontaktdaten (Mail, Telefon, Standort) wird ein neuer Bereich eingefügt:

```
Kontakt
├── info@altovate.de
├── +49 (0) 1520 892 2097
├── Saarburg, Deutschland
│
└── [Trennlinie]
    └── [BNI Badge mit Link]
```

**Technische Details:**
- Trennlinie wie bei der Förderung in Spalte 2 (`border-t border-white/10`)
- BNI-Logo als klickbarer Link (optional zur BNI-Website)
- Dezente Größe (ca. 100px Breite)
- Hover-Effekt für Interaktion

### Vorschau der Änderung

```text
┌─────────────────────────────────────────────────────────────────┐
│  Spalte 3 - Kontakt                                             │
├─────────────────────────────────────────────────────────────────┤
│  ✉️  info@altovate.de                                           │
│  📞 +49 (0) 1520 892 2097                                       │
│  📍 Saarburg, Deutschland                                       │
│  ─────────────────────────                                      │
│  [BNI Badge - "Unternehmen bei BNI"]                            │
└─────────────────────────────────────────────────────────────────┘
```

---

## Technische Änderungen

| Aktion | Datei |
|--------|-------|
| Kopieren | `user-uploads://bni-unternehmen-button-rgb-rot.png` nach `src/assets/bni-badge.png` |
| Bearbeiten | `src/components/Footer.tsx` - BNI-Badge nach Kontaktdaten einfügen |

---

## Optional: Link zur BNI-Website

Das Badge kann optional zur BNI-Website oder deinem BNI-Profil verlinken. Falls du einen spezifischen Link hast (z.B. dein Chapter oder Profil), kann ich den gerne einbauen.

