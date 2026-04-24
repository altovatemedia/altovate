// ============================================================
// Analytics-Loader: GTM dynamisch nach Consent injizieren
// ============================================================
// GA4 läuft ausschließlich über GTM – keine separate gtag.js-Einbindung.

const GTM_SCRIPT_ID = 'gtm-script';
const GTM_ID = (import.meta.env.VITE_GTM_ID as string | undefined) || 'GTM-T5VHLN95';

export const injectGTM = (): void => {
  if (typeof document === 'undefined') return;
  if (!GTM_ID) return;
  if (document.getElementById(GTM_SCRIPT_ID)) return;

  const script = document.createElement('script');
  script.id = GTM_SCRIPT_ID;
  script.async = true;
  script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');`;
  document.head.appendChild(script);
};

export const removeGTM = (): void => {
  if (typeof document === 'undefined') return;
  document.getElementById(GTM_SCRIPT_ID)?.remove();
  // GTM iframe (für noscript-Fallback) ebenfalls entfernen
  document.querySelectorAll('iframe[src*="googletagmanager.com"]').forEach((el) => el.remove());
};
