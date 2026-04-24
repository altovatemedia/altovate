// ============================================================
// ConsentContext: globaler Consent-State
// ============================================================
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import {
  ConsentCategory,
  ConsentState,
  CONSENT_VERSION,
  DEFAULT_CONSENT,
  clearTrackingCookies,
  pushConsentUpdate,
  readConsentCookie,
  setConsentCookie,
  deleteConsentCookie,
} from '@/lib/consent';
import { injectGTM, removeGTM } from '@/lib/analytics';

interface ConsentContextValue {
  consent: ConsentState;
  hasDecided: boolean;
  isBannerOpen: boolean;
  isSettingsOpen: boolean;
  openBanner: () => void;
  openSettings: () => void;
  closeSettings: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  saveSelection: (selection: Partial<Record<ConsentCategory, boolean>>) => void;
  revoke: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export const ConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_CONSENT);
  const [hasDecided, setHasDecided] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Initiales Laden aus Cookie
  useEffect(() => {
    const stored = readConsentCookie();
    if (stored) {
      setConsent(stored);
      setHasDecided(true);
      applySideEffects(stored);
    } else {
      setIsBannerOpen(true);
    }
  }, []);

  // Footer-Link "Cookie-Einstellungen" öffnet das Settings-Modal erneut
  useEffect(() => {
    const handler = () => setIsSettingsOpen(true);
    window.addEventListener('open-cookie-settings', handler);
    return () => window.removeEventListener('open-cookie-settings', handler);
  }, []);

  const applySideEffects = (state: ConsentState) => {
    pushConsentUpdate(state);
    if (state.analytics) {
      injectGTM();
    } else {
      removeGTM();
      clearTrackingCookies();
    }
  };

  const persist = useCallback((next: ConsentState) => {
    setConsentCookie(next);
    setConsent(next);
    setHasDecided(true);
    setIsBannerOpen(false);
    setIsSettingsOpen(false);
    applySideEffects(next);
  }, []);

  const acceptAll = useCallback(() => {
    persist({
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      essential: true,
      analytics: true,
      marketing: true,
      external_embeds: true,
    });
  }, [persist]);

  const rejectAll = useCallback(() => {
    persist({
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      essential: true,
      analytics: false,
      marketing: false,
      external_embeds: false,
    });
  }, [persist]);

  const saveSelection = useCallback(
    (selection: Partial<Record<ConsentCategory, boolean>>) => {
      persist({
        version: CONSENT_VERSION,
        timestamp: new Date().toISOString(),
        essential: true,
        analytics: selection.analytics ?? consent.analytics,
        marketing: selection.marketing ?? consent.marketing,
        external_embeds: selection.external_embeds ?? consent.external_embeds,
      });
    },
    [consent, persist]
  );

  const revoke = useCallback(() => {
    deleteConsentCookie();
    clearTrackingCookies();
    removeGTM();
    setConsent(DEFAULT_CONSENT);
    setHasDecided(false);
    setIsBannerOpen(true);
    setIsSettingsOpen(false);
    pushConsentUpdate(DEFAULT_CONSENT);
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      hasDecided,
      isBannerOpen,
      isSettingsOpen,
      openBanner: () => setIsBannerOpen(true),
      openSettings: () => setIsSettingsOpen(true),
      closeSettings: () => setIsSettingsOpen(false),
      acceptAll,
      rejectAll,
      saveSelection,
      revoke,
    }),
    [consent, hasDecided, isBannerOpen, isSettingsOpen, acceptAll, rejectAll, saveSelection, revoke]
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
};

export const useConsent = (): ConsentContextValue => {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error('useConsent must be used within ConsentProvider');
  return ctx;
};
