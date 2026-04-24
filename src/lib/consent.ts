// ============================================================
// Consent-Utility: Cookie-Read/Write + Google Consent Mode V2
// ============================================================
// DSGVO/§ 25 TDDDG-konformes Consent-Management.
// Quelle der Wahrheit für alle Tracking-/Embed-Entscheidungen.

export const CONSENT_COOKIE_NAME = 'altovate_consent';
export const CONSENT_VERSION = 1;
export const CONSENT_VALIDITY_DAYS = 365;

export interface ConsentState {
  version: number;
  timestamp: string;
  essential: true;
  analytics: boolean;
  marketing: boolean;
  external_embeds: boolean;
}

export type ConsentCategory = 'essential' | 'analytics' | 'marketing' | 'external_embeds';

export const DEFAULT_CONSENT: ConsentState = {
  version: CONSENT_VERSION,
  timestamp: new Date(0).toISOString(),
  essential: true,
  analytics: false,
  marketing: false,
  external_embeds: false,
};

// --------------------- Cookie-Helpers ---------------------
export const setConsentCookie = (state: ConsentState): void => {
  if (typeof document === 'undefined') return;
  const expires = new Date();
  expires.setTime(expires.getTime() + CONSENT_VALIDITY_DAYS * 24 * 60 * 60 * 1000);
  const isHttps = typeof window !== 'undefined' && window.location.protocol === 'https:';
  const value = encodeURIComponent(JSON.stringify(state));
  document.cookie = `${CONSENT_COOKIE_NAME}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax${isHttps ? ';Secure' : ''}`;
};

export const readConsentCookie = (): ConsentState | null => {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + CONSENT_COOKIE_NAME + '=([^;]+)'));
  if (!match) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(match[2])) as ConsentState;
    // Bei Versions-Mismatch: erneut fragen
    if (parsed.version !== CONSENT_VERSION) return null;
    return {
      ...DEFAULT_CONSENT,
      ...parsed,
      essential: true,
    };
  } catch {
    return null;
  }
};

export const deleteConsentCookie = (): void => {
  if (typeof document === 'undefined') return;
  document.cookie = `${CONSENT_COOKIE_NAME}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
};

// --------------------- Tracking-Cookies aktiv löschen ---------------------
const TRACKING_COOKIE_PREFIXES = ['_ga', '_gid', '_gat', '_gcl_', '_fbp', '_fbc'];

export const clearTrackingCookies = (): void => {
  if (typeof document === 'undefined') return;
  const cookies = document.cookie.split(';');
  const host = window.location.hostname;
  const rootDomain = host.split('.').slice(-2).join('.');
  for (const c of cookies) {
    const name = c.split('=')[0].trim();
    if (TRACKING_COOKIE_PREFIXES.some((p) => name.startsWith(p))) {
      // Auf allen plausiblen Pfaden/Domains überschreiben
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${host}`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${host}`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${rootDomain}`;
    }
  }
};

// --------------------- Google Consent Mode V2 ---------------------
type GtagArgs = unknown[];
declare global {
  interface Window {
    dataLayer?: GtagArgs[];
  }
}

export const pushConsentUpdate = (state: ConsentState): void => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push([
    'consent',
    'update',
    {
      analytics_storage: state.analytics ? 'granted' : 'denied',
      ad_storage: state.marketing ? 'granted' : 'denied',
      ad_user_data: state.marketing ? 'granted' : 'denied',
      ad_personalization: state.marketing ? 'granted' : 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted',
    },
  ]);
};
