// ============================================================
// Backwards-Compat-Shim: leitet auf neuen ConsentBanner um
// ============================================================
// Der echte Banner wird global in App.tsx via <ConsentBanner /> eingebunden.
// Diese Datei existiert nur, damit bestehende Imports nicht brechen.
import { ConsentBanner } from '@/components/consent/ConsentBanner';

export const CookieBanner = () => null;
export const CookieBannerWrapper = () => null;

// Footer-Trigger weiterhin verfügbar
export const openCookieSettings = () => {
  const event = new CustomEvent('open-cookie-settings');
  window.dispatchEvent(event);
};

// Re-Export für Konsumenten, die den neuen Banner direkt einbinden wollen
export { ConsentBanner };
