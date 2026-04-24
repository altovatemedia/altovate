import { useState, useEffect } from 'react';

export type CookieCategory = 'essential' | 'statistics' | 'marketing' | 'functional';

export interface CookieConsent {
  essential: boolean;
  statistics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: string;
}

const COOKIE_NAME = 'altovate_cookie_consent';
const CONSENT_VALIDITY_DAYS = 365;
const GTM_ID = 'GTM-T5VHLN95';
const GA_ID = 'G-XJNMLPW6RZ';

// --- Cookie helpers ---
const setCookie = (name: string, value: string, days: number) => {
  if (typeof document === 'undefined') return;
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  const isHttps = typeof window !== 'undefined' && window.location.protocol === 'https:';
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax${isHttps ? ';Secure' : ''}`;
};

const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
};

const deleteCookie = (name: string) => {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
};

// --- gtag helper (always available because of default consent in index.html) ---
const gtag = (...args: unknown[]) => {
  if (typeof window === 'undefined') return;
  // @ts-expect-error gtag is global
  window.dataLayer = window.dataLayer || [];
  // @ts-expect-error
  window.dataLayer.push(arguments.length === 1 ? args[0] : args);
};

// Push raw args to dataLayer in the gtag('consent', 'update', {...}) format
const pushConsentUpdate = (consentData: CookieConsent) => {
  if (typeof window === 'undefined') return;
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  function _gtag() { w.dataLayer.push(arguments); }
  // @ts-expect-error
  _gtag('consent', 'update', {
    ad_storage: consentData.marketing ? 'granted' : 'denied',
    ad_user_data: consentData.marketing ? 'granted' : 'denied',
    ad_personalization: consentData.marketing ? 'granted' : 'denied',
    analytics_storage: consentData.statistics ? 'granted' : 'denied',
    functionality_storage: consentData.functional ? 'granted' : 'denied',
    personalization_storage: consentData.functional ? 'granted' : 'denied',
  });
};

// Inject GTM script (only once)
const loadGTM = () => {
  if (typeof document === 'undefined') return;
  if (document.getElementById('gtm-script')) return;
  const script = document.createElement('script');
  script.id = 'gtm-script';
  script.async = true;
  script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');`;
  document.head.appendChild(script);
};

// Inject GA4 script (only once)
const loadGA = () => {
  if (typeof document === 'undefined') return;
  if (document.getElementById('ga-script')) return;
  const s = document.createElement('script');
  s.id = 'ga-script';
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  const inline = document.createElement('script');
  inline.id = 'ga-inline';
  inline.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}', { anonymize_ip: true });
  `;
  document.head.appendChild(inline);
};

export const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [consent, setConsent] = useState<CookieConsent>({
    essential: true,
    statistics: false,
    marketing: false,
    functional: false,
    timestamp: new Date().toISOString(),
  });

  useEffect(() => {
    checkExistingConsent();
  }, []);

  const checkExistingConsent = () => {
    const stored = getCookie(COOKIE_NAME);
    if (!stored) {
      setHasConsent(false);
      return;
    }

    try {
      const parsed = JSON.parse(stored) as CookieConsent;
      setConsent(parsed);
      setHasConsent(true);
      applyConsent(parsed);
    } catch {
      deleteCookie(COOKIE_NAME);
      setHasConsent(false);
    }
  };

  const applyConsent = (consentData: CookieConsent) => {
    // 1. Update Google Consent Mode V2 signals
    pushConsentUpdate(consentData);

    // 2. Conditionally load tracking scripts
    if (consentData.statistics) {
      loadGA();
      loadGTM();
    }
  };

  const saveConsent = (newConsent: Partial<CookieConsent>) => {
    const fullConsent: CookieConsent = {
      essential: true,
      statistics: newConsent.statistics ?? false,
      marketing: newConsent.marketing ?? false,
      functional: newConsent.functional ?? false,
      timestamp: new Date().toISOString(),
    };

    setCookie(COOKIE_NAME, JSON.stringify(fullConsent), CONSENT_VALIDITY_DAYS);
    setConsent(fullConsent);
    setHasConsent(true);
    applyConsent(fullConsent);
  };

  const acceptAll = () => {
    saveConsent({
      statistics: true,
      marketing: true,
      functional: true,
    });
  };

  const acceptEssentialOnly = () => {
    saveConsent({
      statistics: false,
      marketing: false,
      functional: false,
    });
  };

  const rejectAll = acceptEssentialOnly;

  const resetConsent = () => {
    deleteCookie(COOKIE_NAME);
    // Also clear legacy localStorage entry from previous version
    try { localStorage.removeItem('altovate_cookie_consent'); } catch {}
    setHasConsent(false);
    setConsent({
      essential: true,
      statistics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString(),
    });
  };

  return {
    hasConsent,
    consent,
    saveConsent,
    acceptAll,
    acceptEssentialOnly,
    rejectAll,
    resetConsent,
  };
};
