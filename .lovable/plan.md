

## Plan: Emoji-Cleanup & Erfolgsstate-Text korrigieren

### Alle Emojis entfernen und durch CI-konforme Elemente ersetzen

**Datei:** `src/pages/NetzwerkFrauen.tsx`

| Stelle | Aktuell | Neu |
|---|---|---|
| Erfolgsstate (Z.113) | `✅` Emoji + "Du bist dabei." | SVG Checkmark-Kreis (Gold-Gradient) + **"Fertig — check dein Postfach."** |
| Formular-Label (Z.119) | `🎁 GRATIS · KEIN SPAM` | `GRATIS · KEIN SPAM` (nur Text, kein Emoji) |
| Bonus-Card (Z.174) | `⚡` Emoji als Icon | **"BONUS"** als gestyltes Text-Label (gleicher Stil wie "PROMPT 01" etc. — uppercase, 10px, gold, tracking) |

### Erfolgsstate im Detail

Statt dem Apple-Emoji ein schlankes SVG-Icon: ein Kreis mit Checkmark, Stroke in Gold-Gradient. Dazu der Text:

- **Headline:** "Fertig — check dein Postfach."
- **Subtext:** bleibt gleich ("Schau in dein Postfach — die Prompts sind auf dem Weg zu dir. Check auch deinen Spam-Ordner.")

### Technisch

Nur Textänderungen und ein kleines inline-SVG — keine neuen Dateien, keine neuen Dependencies.

