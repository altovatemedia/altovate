---
name: Consent Management
description: DSGVO/§ 25 TDDDG-konformes Consent-System mit ConsentContext, Banner, Settings und Cal.com-Gating
type: feature
---
Eigenbau-Consent-Management ohne externe CMP. Architektur:

- `src/lib/consent.ts` — Cookie `altovate_consent` (365 Tage, JSON, version=1), Google Consent Mode V2 push, aktives Löschen von `_ga*`, `_gcl_*`, `_fbp` bei Widerruf.
- `src/lib/analytics.ts` — `injectGTM()` / `removeGTM()`. GA4 läuft ausschließlich über GTM (ID via `VITE_GTM_ID`, Fallback GTM-T5VHLN95).
- `src/contexts/ConsentContext.tsx` — globaler Provider mit `useConsent()`. Methoden: `acceptAll`, `rejectAll`, `saveSelection`, `revoke`, `openSettings`. Lauscht auf `open-cookie-settings` Event vom Footer.
- `src/components/consent/ConsentBanner.tsx` — initiales Banner, drei gleichwertige Buttons (Akzeptieren/Ablehnen/Einstellungen), keine Dark Patterns.
- `src/components/consent/ConsentSettings.tsx` — vier Kategorien-Toggles: essential (locked), analytics, marketing, external_embeds.
- `src/components/CalEmbed.tsx` — consent-gated Cal.com-Wrapper. Vor Consent: Platzhalter mit „Zustimmen und laden". Nach Consent: lazy-loaded `@calcom/embed-react`.

Default in `index.html`: alle Tracking-Signale `denied` via Google Consent Mode V2. Kein Hardcoded-GTM/GA mehr.

Backwards-Compat: `useCookieConsent` und `CookieBanner`/`CookieBannerWrapper` sind Shims, die auf den neuen Context mappen — bestehende Importe in Index.tsx, Erstkontakt.tsx, Tools.tsx, Kontakt.tsx funktionieren weiter (rendern aber `null`, da der Banner global in App.tsx montiert ist).
