# E2E-Tests (Playwright)

DSGVO-/Consent-Tests, die verifizieren, dass vor Einwilligung **keine** Requests an
`google-analytics.com`, `googletagmanager.com` oder `app.cal.com` gehen und nach
Einwilligung korrekt geladen werden.

## Setup (einmalig, lokal)

```bash
npx playwright install chromium
```

## Tests ausführen

```bash
# Startet Vite (Port 8080) automatisch und führt alle Specs aus
npm run test:e2e

# Gegen einen bereits laufenden Server (z. B. Preview-URL)
PLAYWRIGHT_BASE_URL=https://altovate.lovable.app npm run test:e2e

# Einzelne Spec
npx playwright test e2e/consent.spec.ts --project=chromium
```

## Was wird getestet

| Test | Erwartung |
|------|-----------|
| Initialer Seitenaufruf | Banner erscheint, **0** Requests an Tracking-Hosts, **0** `_ga*`-Cookies |
| „Alle ablehnen" | Weiterhin keine Tracking-Requests/-Cookies, Consent-Cookie persistiert mit `analytics:false` |
| „Alle akzeptieren" | `gtm.js` wird geladen |
| Cal.com vor Consent | Platzhalter „Terminbuchung erfordert deine Zustimmung" sichtbar |
| Cal.com nach Opt-in | Requests an `app.cal.com` |
| Widerruf | `_ga*`-Cookies werden aktiv gelöscht |

## CI-Hinweis

Lovable's Standard-CI nutzt Vitest, nicht Playwright. Diese Tests laufen lokal
oder in einer separaten GitHub-Action. Sie sind aus den Vitest-Includes
ausgeschlossen (Vitest scannt nur `src/`).
