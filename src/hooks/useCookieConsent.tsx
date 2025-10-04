import { useState, useEffect } from 'react';

export type CookieCategory = 'essential' | 'statistics' | 'marketing' | 'functional';

export interface CookieConsent {
  essential: boolean;
  statistics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'altovate_cookie_consent';
const CONSENT_VALIDITY_MONTHS = 12;

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
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setHasConsent(false);
      return;
    }

    try {
      const parsed = JSON.parse(stored);
      const consentDate = new Date(parsed.timestamp);
      const expiryDate = new Date(consentDate);
      expiryDate.setMonth(expiryDate.getMonth() + CONSENT_VALIDITY_MONTHS);

      if (new Date() > expiryDate) {
        localStorage.removeItem(STORAGE_KEY);
        setHasConsent(false);
      } else {
        setConsent(parsed);
        setHasConsent(true);
        applyConsent(parsed);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      setHasConsent(false);
    }
  };

  const applyConsent = (consentData: CookieConsent) => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      if (consentData.statistics) {
        (window as any).dataLayer.push({ event: 'consent_statistics_granted' });
      }
      if (consentData.marketing) {
        (window as any).dataLayer.push({ event: 'consent_marketing_granted' });
      }
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

    localStorage.setItem(STORAGE_KEY, JSON.stringify(fullConsent));
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

  const resetConsent = () => {
    localStorage.removeItem(STORAGE_KEY);
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
    resetConsent,
  };
};
