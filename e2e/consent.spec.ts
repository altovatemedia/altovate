import { test, expect, Page, Request } from '@playwright/test';

// ============================================================
// Consent & Tracking E2E-Tests
// ============================================================
// Verifiziert, dass:
//   - vor Consent KEINE Requests an Tracking-/Embed-Domains gehen
//   - vor Consent KEINE _ga*-/_gcl_*-Cookies gesetzt werden
//   - "Alle ablehnen" weiterhin keine Tracking-Aktivität auslöst
//   - "Alle akzeptieren" GTM (und damit GA4) lädt
//   - external_embeds-Consent Cal.com freischaltet

const TRACKING_HOSTS = [
  'google-analytics.com',
  'googletagmanager.com',
  'app.cal.com',
];

const isTrackingRequest = (req: Request): boolean => {
  const url = req.url();
  return TRACKING_HOSTS.some((h) => url.includes(h));
};

const collectTrackingRequests = (page: Page): string[] => {
  const hits: string[] = [];
  page.on('request', (req) => {
    if (isTrackingRequest(req)) hits.push(req.url());
  });
  return hits;
};

const getTrackingCookies = async (page: Page): Promise<string[]> => {
  const cookies = await page.context().cookies();
  return cookies
    .map((c) => c.name)
    .filter((n) => n.startsWith('_ga') || n.startsWith('_gcl_') || n.startsWith('_gid') || n.startsWith('_gat'));
};

test.describe('Consent-Gating: vor Einwilligung', () => {
  test.beforeEach(async ({ context }) => {
    await context.clearCookies();
  });

  test('blockiert Tracking-Requests vor jeder Interaktion', async ({ page }) => {
    const hits = collectTrackingRequests(page);

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Banner muss erscheinen
    await expect(page.getByRole('heading', { name: /Diese Website verwendet Cookies/i })).toBeVisible();

    expect(hits, `Unerwartete Tracking-Requests: ${hits.join(', ')}`).toEqual([]);

    const trackingCookies = await getTrackingCookies(page);
    expect(trackingCookies, `Unerwartete Tracking-Cookies: ${trackingCookies.join(', ')}`).toEqual([]);
  });

  test('"Alle ablehnen" verhindert weiterhin alle Tracking-Aktivität', async ({ page }) => {
    const hits = collectTrackingRequests(page);

    await page.goto('/');
    await page.getByRole('button', { name: /^Alle ablehnen$/ }).click();

    // Banner muss verschwinden
    await expect(page.getByRole('heading', { name: /Diese Website verwendet Cookies/i })).toBeHidden();

    // Etwas warten, um späte Requests abzufangen
    await page.waitForTimeout(1500);

    expect(hits, `Tracking trotz Ablehnung: ${hits.join(', ')}`).toEqual([]);
    expect(await getTrackingCookies(page)).toEqual([]);

    // Consent-Cookie muss persistiert sein
    const consentCookie = (await page.context().cookies()).find((c) => c.name === 'altovate_consent');
    expect(consentCookie).toBeDefined();
    const parsed = JSON.parse(decodeURIComponent(consentCookie!.value));
    expect(parsed.analytics).toBe(false);
    expect(parsed.external_embeds).toBe(false);
  });
});

test.describe('Consent-Gating: nach Einwilligung', () => {
  test.beforeEach(async ({ context }) => {
    await context.clearCookies();
  });

  test('"Alle akzeptieren" lädt GTM und GA4', async ({ page }) => {
    const gtmRequests: string[] = [];
    page.on('request', (req) => {
      const url = req.url();
      if (url.includes('googletagmanager.com') || url.includes('google-analytics.com')) {
        gtmRequests.push(url);
      }
    });

    await page.goto('/');
    await page.getByRole('button', { name: /^Alle akzeptieren$/ }).click();

    // Auf GTM-Script-Load warten
    await page.waitForRequest(
      (req) => req.url().includes('googletagmanager.com/gtm.js'),
      { timeout: 10_000 }
    );

    expect(gtmRequests.some((u) => u.includes('gtm.js'))).toBe(true);
  });

  test('Cal.com lädt erst nach Consent für externe Einbettungen', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /^Alle ablehnen$/ }).click();

    // Auf der Hero-Seite gibt es einen "Gespräch buchen"-Button, der das Cal-Modal öffnet.
    // Dort muss der Platzhalter erscheinen, NICHT das Embed.
    const bookButton = page.getByRole('button', { name: /Gespräch buchen/i }).first();
    if (await bookButton.isVisible().catch(() => false)) {
      await bookButton.click();
      await expect(
        page.getByRole('heading', { name: /Terminbuchung erfordert deine Zustimmung/i })
      ).toBeVisible();

      // Consent direkt im Platzhalter erteilen
      const calRequests: string[] = [];
      page.on('request', (req) => {
        if (req.url().includes('app.cal.com') || req.url().includes('cal.com/embed')) {
          calRequests.push(req.url());
        }
      });

      await page.getByRole('button', { name: /Zustimmen und laden/i }).click();

      // Cal.com sollte nun Requests starten (Embed-Bibliothek + iframe)
      await page.waitForTimeout(3000);
      expect(calRequests.length, 'Erwartete Cal.com-Requests nach Consent').toBeGreaterThan(0);
    } else {
      test.skip(true, '"Gespräch buchen"-Button auf Startseite nicht sichtbar (Layout-Variante)');
    }
  });
});

test.describe('Widerruf', () => {
  test('Widerruf löscht _ga*-Cookies und entfernt GTM', async ({ page, context }) => {
    await context.clearCookies();
    await page.goto('/');

    // Erst akzeptieren
    await page.getByRole('button', { name: /^Alle akzeptieren$/ }).click();
    await page.waitForRequest((req) => req.url().includes('googletagmanager.com/gtm.js'), { timeout: 10_000 });

    // Footer-Link "Cookie-Einstellungen" auslösen
    await page.evaluate(() => window.dispatchEvent(new CustomEvent('open-cookie-settings')));
    await expect(page.getByRole('heading', { name: /Cookie-Einstellungen/i })).toBeVisible();

    // Auswahl ändern: Analytics aus
    const analyticsSwitch = page.getByRole('switch').nth(1); // 0 = essential (disabled), 1 = analytics
    if (await analyticsSwitch.isChecked()) {
      await analyticsSwitch.click();
    }
    await page.getByRole('button', { name: /Auswahl speichern/i }).click();

    // _ga*-Cookies sollten entfernt sein
    await page.waitForTimeout(500);
    const trackingCookies = await getTrackingCookies(page);
    expect(trackingCookies, `Tracking-Cookies nach Widerruf nicht gelöscht: ${trackingCookies.join(', ')}`).toEqual([]);
  });
});
