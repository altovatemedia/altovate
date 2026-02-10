import { useState, useEffect, useCallback } from 'react';
import { X, Eye, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VisibilityCheckModal from '@/components/visibility-check/VisibilityCheckModal';

const ExitIntentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isCheckOpen, setIsCheckOpen] = useState(false);

  const showBanner = useCallback(() => {
    if (isDismissed) return;
    const alreadyShown = sessionStorage.getItem('exit-intent-shown');
    if (alreadyShown) return;
    setIsVisible(true);
    sessionStorage.setItem('exit-intent-shown', 'true');
  }, [isDismissed]);

  useEffect(() => {
    // Desktop: mouse leaves viewport at the top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showBanner();
      }
    };

    // Mobile: scroll up rapidly (back-to-top gesture)
    let lastScrollY = window.scrollY;
    let scrollTimer: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const currentScroll = window.scrollY;
        const scrolledUp = lastScrollY - currentScroll;
        // If user scrolled up significantly and was already deep in the page
        if (scrolledUp > 300 && lastScrollY > window.innerHeight * 1.5) {
          showBanner();
        }
        lastScrollY = currentScroll;
      }, 150);
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, [showBanner]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  const handleStartCheck = () => {
    setIsVisible(false);
    setIsCheckOpen(true);
  };

  if (!isVisible && !isCheckOpen) return null;

  return (
    <>
      {/* Overlay + Banner */}
      {isVisible && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={handleDismiss}
          />

          {/* Banner Card */}
          <div className="relative bg-background border border-border rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
            {/* Close */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>

            {/* Content */}
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Bevor du gehst …
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Finde in 2 Minuten heraus, wie sichtbar dein Unternehmen online wirklich ist – kostenlos und unverbindlich.
            </p>

            {/* CTA */}
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold"
              onClick={handleStartCheck}
            >
              Kostenlosen Sichtbarkeits-Check starten
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Keine Anmeldung nötig · Sofort Ergebnis
            </p>
          </div>
        </div>
      )}

      {/* Visibility Check Modal */}
      <VisibilityCheckModal
        open={isCheckOpen}
        onOpenChange={setIsCheckOpen}
      />
    </>
  );
};

export default ExitIntentBanner;
