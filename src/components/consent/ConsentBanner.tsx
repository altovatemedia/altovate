// ============================================================
// ConsentBanner: initiales DSGVO-Banner
// ============================================================
// Drei gleichwertige Buttons, kein Dark Pattern.
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useIsMobile } from '@/hooks/use-mobile';
import { useConsent } from '@/contexts/ConsentContext';
import { ConsentSettings } from './ConsentSettings';

export const ConsentBanner = () => {
  const { isBannerOpen, isSettingsOpen, openSettings, acceptAll, rejectAll, hasDecided } = useConsent();
  const isMobile = useIsMobile();

  // Banner nur zeigen, wenn noch nicht entschieden und Settings nicht offen
  const showBanner = isBannerOpen && !hasDecided && !isSettingsOpen;

  const content = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Diese Website verwendet Cookies</h2>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
          Wir verwenden essenzielle Cookies für den Betrieb der Seite. Mit deiner Einwilligung
          setzen wir zusätzlich Dienste für Statistik (Google Analytics über GTM) und externe
          Einbettungen (Cal.com) ein. Du kannst deine Auswahl jederzeit über den Footer-Link
          „Cookie-Einstellungen" anpassen.
        </p>
      </div>

      <div className="flex gap-3 text-sm">
        <a href="/impressum" className="text-primary hover:underline font-medium">Impressum</a>
        <span className="text-muted-foreground/50">·</span>
        <a href="/datenschutz" className="text-primary hover:underline font-medium">Datenschutz</a>
      </div>

      {/* Drei gleichwertige Buttons – identisches Visual Weight */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-border">
        <Button
          onClick={acceptAll}
          variant="outline"
          className="w-full border-2 border-border hover:bg-muted text-foreground rounded-[10px] h-12 font-medium"
        >
          Alle akzeptieren
        </Button>
        <Button
          onClick={rejectAll}
          variant="outline"
          className="w-full border-2 border-border hover:bg-muted text-foreground rounded-[10px] h-12 font-medium"
        >
          Alle ablehnen
        </Button>
        <Button
          onClick={openSettings}
          variant="outline"
          className="w-full border-2 border-border hover:bg-muted text-foreground rounded-[10px] h-12 font-medium"
        >
          Einstellungen
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {showBanner && (
        <>
          {isMobile ? (
            <Sheet open modal={false}>
              <SheetContent
                side="bottom"
                className="rounded-t-[20px] p-6 border-0 z-[101] bg-card"
                onInteractOutside={(e) => e.preventDefault()}
                onEscapeKeyDown={(e) => e.preventDefault()}
              >
                {content}
              </SheetContent>
            </Sheet>
          ) : (
            <Dialog open modal={false}>
              <DialogContent
                className="max-w-[600px] p-8 rounded-[20px] shadow-2xl border border-border z-[101] bg-card"
                onInteractOutside={(e) => e.preventDefault()}
                onEscapeKeyDown={(e) => e.preventDefault()}
              >
                {content}
              </DialogContent>
            </Dialog>
          )}
        </>
      )}
      <ConsentSettings />
    </>
  );
};
