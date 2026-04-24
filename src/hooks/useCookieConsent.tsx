// ============================================================
// Backwards-Compat-Shim: useCookieConsent → useConsent
// ============================================================
// Bestehende Importe bleiben funktionsfähig, intern wird
// ausschließlich der neue ConsentContext genutzt.
import { useConsent } from '@/contexts/ConsentContext';

export type CookieCategory = 'essential' | 'statistics' | 'marketing' | 'functional';

export interface CookieConsent {
  essential: boolean;
  statistics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: string;
}

export const useCookieConsent = () => {
  const { consent, hasDecided, acceptAll, rejectAll, saveSelection, revoke } = useConsent();

  const legacy: CookieConsent = {
    essential: true,
    statistics: consent.analytics,
    marketing: consent.marketing,
    functional: consent.external_embeds,
    timestamp: consent.timestamp,
  };

  return {
    hasConsent: hasDecided,
    consent: legacy,
    saveConsent: (next: Partial<CookieConsent>) =>
      saveSelection({
        analytics: next.statistics ?? consent.analytics,
        marketing: next.marketing ?? consent.marketing,
        external_embeds: next.functional ?? consent.external_embeds,
      }),
    acceptAll,
    acceptEssentialOnly: rejectAll,
    rejectAll,
    resetConsent: revoke,
  };
};
