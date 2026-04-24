// ============================================================
// ConsentSettings: Detail-Modal mit Kategorien-Toggles
// ============================================================
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { useConsent } from '@/contexts/ConsentContext';

interface CategoryDef {
  key: 'essential' | 'analytics' | 'marketing' | 'external_embeds';
  title: string;
  description: string;
  services: string;
  retention: string;
  alwaysOn?: boolean;
}

const CATEGORIES: CategoryDef[] = [
  {
    key: 'essential',
    title: 'Essenziell',
    description: 'Notwendig für Sicherheit, Sitzungsverwaltung und das Speichern deiner Cookie-Einstellungen.',
    services: 'altovate_consent (Einwilligungs-Cookie)',
    retention: '365 Tage',
    alwaysOn: true,
  },
  {
    key: 'analytics',
    title: 'Analytics',
    description: 'Reichweitenmessung und Auswertung des Nutzungsverhaltens zur Verbesserung der Website.',
    services: 'Google Analytics 4, Google Tag Manager (Google Ireland Ltd., Datentransfer USA — DPF)',
    retention: 'Bis zu 14 Monate (GA4)',
  },
  {
    key: 'marketing',
    title: 'Marketing',
    description: 'Platzhalter für zukünftige Marketing-Dienste (z. B. Conversion-Tracking, Retargeting). Aktuell inaktiv.',
    services: '— derzeit keine —',
    retention: '—',
  },
  {
    key: 'external_embeds',
    title: 'Externe Einbettungen',
    description: 'Eingebettete Inhalte von Drittanbietern. Beim Laden werden personenbezogene Daten (z. B. IP-Adresse) an den Anbieter übertragen.',
    services: 'Cal.com (Cal.com Inc., USA — DPF-Status nicht bestätigt)',
    retention: 'Session-basiert',
  },
];

export const ConsentSettings = () => {
  const { consent, isSettingsOpen, closeSettings, acceptAll, saveSelection } = useConsent();
  const isMobile = useIsMobile();

  const [draft, setDraft] = useState({
    analytics: consent.analytics,
    marketing: consent.marketing,
    external_embeds: consent.external_embeds,
  });

  // Bei Modal-Open aktuellen Stand übernehmen
  useEffect(() => {
    if (isSettingsOpen) {
      setDraft({
        analytics: consent.analytics,
        marketing: consent.marketing,
        external_embeds: consent.external_embeds,
      });
    }
  }, [isSettingsOpen, consent]);

  const content = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Cookie-Einstellungen</h2>
        <p className="text-sm text-muted-foreground mt-2">
          Wähle, welche Kategorien du zulässt. Essenzielle Cookies sind für den Betrieb erforderlich.
        </p>
      </div>

      <div className="space-y-4 max-h-[55vh] overflow-y-auto pr-2">
        {CATEGORIES.map((cat) => {
          const checked = cat.alwaysOn ? true : (draft[cat.key as 'analytics' | 'marketing' | 'external_embeds'] ?? false);
          return (
            <div key={cat.key} className="space-y-2 pb-4 border-b border-border last:border-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{cat.description}</p>
                  <dl className="text-xs text-muted-foreground/80 mt-2 space-y-0.5">
                    <div><dt className="inline font-medium">Dienste: </dt><dd className="inline">{cat.services}</dd></div>
                    <div><dt className="inline font-medium">Speicherdauer: </dt><dd className="inline">{cat.retention}</dd></div>
                  </dl>
                </div>
                <Switch
                  checked={checked}
                  disabled={cat.alwaysOn}
                  onCheckedChange={(v) => {
                    if (cat.alwaysOn) return;
                    setDraft((prev) => ({ ...prev, [cat.key]: v }));
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-border">
        <Button
          onClick={() => saveSelection(draft)}
          variant="outline"
          className="w-full border-2 border-border hover:bg-muted text-foreground rounded-[10px] h-12 font-medium"
        >
          Auswahl speichern
        </Button>
        <Button
          onClick={acceptAll}
          variant="outline"
          className="w-full border-2 border-border hover:bg-muted text-foreground rounded-[10px] h-12 font-medium"
        >
          Alle akzeptieren
        </Button>
      </div>
    </div>
  );

  if (!isSettingsOpen) return null;

  return isMobile ? (
    <Sheet open onOpenChange={(o) => !o && closeSettings()}>
      <SheetContent side="bottom" className="h-[90vh] rounded-t-[20px] p-6 border-0 z-[102] bg-card">
        {content}
      </SheetContent>
    </Sheet>
  ) : (
    <Dialog open onOpenChange={(o) => !o && closeSettings()}>
      <DialogContent className="max-w-[640px] p-8 rounded-[20px] shadow-2xl border border-border z-[102] bg-card">
        {content}
      </DialogContent>
    </Dialog>
  );
};
