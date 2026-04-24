// ============================================================
// CalEmbed: Consent-gated Wrapper für Cal.com
// ============================================================
// Vor Consent: Platzhalter mit Opt-in-Button.
// Nach Consent: dynamisch geladenes Cal.com-Embed.
import { lazy, Suspense } from 'react';
import { useConsent } from '@/contexts/ConsentContext';
import { Button } from '@/components/ui/button';

// Lazy: Cal.com-Bibliothek wird erst geladen, wenn Consent erteilt ist
const CalLazy = lazy(() => import('@calcom/embed-react').then((m) => ({ default: m.default })));

interface CalEmbedProps {
  calLink: string;
  className?: string;
  minHeight?: string;
}

export const CalEmbed = ({ calLink, className, minHeight = '450px' }: CalEmbedProps) => {
  const { consent, saveSelection } = useConsent();

  if (!consent.external_embeds) {
    return (
      <div
        className={
          'rounded-[14px] border border-border bg-card/60 p-6 text-center space-y-4 ' + (className ?? '')
        }
        style={{ minHeight }}
      >
        <h3 className="text-lg font-semibold text-foreground">Terminbuchung erfordert deine Zustimmung</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Um die Terminbuchung zu laden, benötigen wir deine Zustimmung zu externen Einbettungen
          (Cal.com). Beim Laden werden Daten (z. B. IP-Adresse) an Cal.com Inc. (USA) übertragen.
        </p>
        <Button
          onClick={() => saveSelection({ external_embeds: true })}
          className="rounded-[10px]"
        >
          Zustimmen und laden
        </Button>
        <p className="text-xs text-muted-foreground/70">
          Alternativ: <a href="mailto:info@altovate.de" className="underline">info@altovate.de</a>
        </p>
      </div>
    );
  }

  return (
    <Suspense fallback={<div style={{ minHeight }} className="flex items-center justify-center text-sm text-muted-foreground">Kalender wird geladen…</div>}>
      <CalLazy
        calLink={calLink}
        config={{ layout: 'month_view', theme: 'dark' }}
        style={{ width: '100%', height: '100%', overflow: 'auto', minHeight }}
      />
    </Suspense>
  );
};

export default CalEmbed;
