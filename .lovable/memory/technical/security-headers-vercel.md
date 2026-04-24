---
name: Vercel Security Headers
description: HSTS, X-Frame, Referrer-Policy, Permissions-Policy und CSP-Report-Only via vercel.json
type: feature
---
`vercel.json` enthält neben den Prerender-Rewrites einen `headers`-Block für `/(.*)`:

- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()`
- `Content-Security-Policy-Report-Only` mit Allowlist für googletagmanager, google-analytics, app.cal.com, *.supabase.co, fonts.googleapis/gstatic.

CSP läuft zunächst im **Report-Only**-Modus. Nach 48h Beobachtung ohne Console-Errors auf enforcing (`Content-Security-Policy`) umstellen.
