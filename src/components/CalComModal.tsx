import { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useConsent } from '@/contexts/ConsentContext';
import CalEmbed from '@/components/CalEmbed';

interface CalComModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalComModal = ({ isOpen, onClose }: CalComModalProps) => {
  const { consent } = useConsent();

  // Cal.com UI-Konfiguration nur initialisieren, wenn Embed erlaubt ist
  useEffect(() => {
    if (!consent.external_embeds || !isOpen) return;
    let cancelled = false;
    (async () => {
      const { getCalApi } = await import('@calcom/embed-react');
      const cal = await getCalApi();
      if (cancelled) return;
      cal('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#c8a960' } },
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [consent.external_embeds, isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold">
            Discovery Call buchen
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Wähle einen passenden Termin – 100% unverbindlich.
          </p>
        </DialogHeader>
        <div className="px-6 pb-6">
          <CalEmbed calLink="alex-buchmann/discovery-call" minHeight="450px" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalComModal;
