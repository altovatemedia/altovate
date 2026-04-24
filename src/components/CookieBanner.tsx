import { useState, useEffect } from 'react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useIsMobile } from '@/hooks/use-mobile';
import { X } from 'lucide-react';

export const CookieBanner = () => {
  const { hasConsent, consent, saveConsent, acceptAll, acceptEssentialOnly } = useCookieConsent();
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [localConsent, setLocalConsent] = useState(consent);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (hasConsent === false) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [hasConsent]);

  useEffect(() => {
    setLocalConsent(consent);
  }, [consent]);

  const handleAcceptAll = () => {
    acceptAll();
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const handleEssentialOnly = () => {
    acceptEssentialOnly();
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const handleSaveSelection = () => {
    saveConsent(localConsent);
    setIsOpen(false);
    setShowDetails(false);
    document.body.style.overflow = '';
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowDetails(false);
    document.body.style.overflow = '';
  };

  if (hasConsent === null || !isOpen) return null;

  const content = showDetails ? (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-start justify-between">
        <h2 className="text-2xl font-semibold text-foreground">Cookie-Einstellungen 🍪</h2>
      </div>

      <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
        {/* Essential */}
        <div className="space-y-2 pb-4 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Essenziell</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Erforderlich für grundlegende Funktionen wie Sicherheit und Seitennavigation.
              </p>
            </div>
            <div className="ml-4">
              <Switch checked={true} disabled />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="space-y-2 pb-4 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Statistik</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Google Analytics hilft uns zu verstehen, wie Besucher unsere Website nutzen, um sie stetig zu verbessern.
              </p>
            </div>
            <div className="ml-4">
              <Switch
                checked={localConsent.statistics}
                onCheckedChange={(checked) =>
                  setLocalConsent({ ...localConsent, statistics: checked })
                }
              />
            </div>
          </div>
        </div>

        {/* Marketing */}
        <div className="space-y-2 pb-4 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Marketing</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Ermöglicht uns, relevante Werbung über Meta & LinkedIn zu schalten.
              </p>
            </div>
            <div className="ml-4">
              <Switch
                checked={localConsent.marketing}
                onCheckedChange={(checked) =>
                  setLocalConsent({ ...localConsent, marketing: checked })
                }
              />
            </div>
          </div>
        </div>

        {/* Functional */}
        <div className="space-y-2 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Funktional</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Optimiert dein Nutzungserlebnis (z. B. Karten, Videos, Formulare).
              </p>
            </div>
            <div className="ml-4">
              <Switch
                checked={localConsent.functional}
                onCheckedChange={(checked) =>
                  setLocalConsent({ ...localConsent, functional: checked })
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-border">
        <Button
          onClick={handleEssentialOnly}
          variant="outline"
          className="w-full border-2 border-border hover:bg-muted text-foreground rounded-[10px] h-12 font-medium"
        >
          Alle ablehnen
        </Button>
        <Button
          onClick={handleSaveSelection}
          variant="outline"
          className="w-full border-2 border-border hover:bg-muted text-foreground rounded-[10px] h-12 font-medium"
        >
          Auswahl speichern
        </Button>
        <Button
          onClick={handleAcceptAll}
          variant="outline"
          className="w-full border-2 border-border hover:bg-muted text-foreground rounded-[10px] h-12 font-medium"
        >
          Alle akzeptieren
        </Button>
      </div>
    </div>
  ) : (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-semibold text-foreground">
        Diese Website verwendet Cookies 🍪
      </h2>

      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Wir verwenden Cookies und ähnliche Technologien, um unsere Website sicher, funktional und
          benutzerfreundlich zu gestalten. Mit deiner Zustimmung helfen uns optionale Tools dabei,
          Reichweite zu messen und Werbung zu optimieren. Du entscheidest, welche Kategorien du erlaubst.
        </p>
      </div>

      <div className="flex gap-3 text-sm">
        <a
          href="/impressum"
          className="text-primary hover:underline font-medium"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/impressum';
          }}
        >
          Impressum
        </a>
        <span className="text-muted-foreground/50">·</span>
        <a
          href="/datenschutz"
          className="text-primary hover:underline font-medium"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/datenschutz';
          }}
        >
          Datenschutzerklärung
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-border">
        <Button
          onClick={handleEssentialOnly}
          variant="outline"
          className="w-full border-2 border-border hover:bg-muted text-foreground rounded-[10px] h-12 font-medium"
        >
          Alle ablehnen
        </Button>
        <Button
          onClick={() => setShowDetails(true)}
          variant="outline"
          className="w-full border-2 border-border hover:bg-muted text-foreground rounded-[10px] h-12 font-medium"
        >
          Einstellungen
        </Button>
        <Button
          onClick={handleAcceptAll}
          variant="outline"
          className="w-full border-2 border-border hover:bg-muted text-foreground rounded-[10px] h-12 font-medium"
        >
          Alle akzeptieren
        </Button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] animate-fade-in"
            style={{ animationDuration: '200ms' }}
          />
        )}
        <Sheet open={isOpen} onOpenChange={handleClose}>
          <SheetContent
            side="bottom"
            className="h-[90vh] rounded-t-[20px] p-6 border-0 z-[101] bg-card"
          >
            {content}
          </SheetContent>
        </Sheet>
      </>
    );
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] animate-fade-in"
          style={{ animationDuration: '200ms' }}
        />
      )}
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent
          className="max-w-[600px] p-8 rounded-[20px] shadow-2xl border border-border z-[101] bg-card animate-fade-in"
          style={{ animationDuration: '200ms' }}
        >
          {content}
        </DialogContent>
      </Dialog>
    </>
  );
};

export const openCookieSettings = () => {
  const event = new CustomEvent('open-cookie-settings');
  window.dispatchEvent(event);
};

export const CookieBannerWrapper = () => {
  const { resetConsent } = useCookieConsent();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      resetConsent();
      setIsOpen(true);
    };

    window.addEventListener('open-cookie-settings', handleOpen);
    return () => window.removeEventListener('open-cookie-settings', handleOpen);
  }, [resetConsent]);

  return <CookieBanner />;
};
