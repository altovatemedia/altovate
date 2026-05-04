import { Megaphone, MousePointerClick, Inbox } from 'lucide-react';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/animations/Reveal';

const PainPoints = () => {
  const painPoints = [
    {
      icon: Megaphone,
      symptom: 'Posten ohne Strategie',
      cause: 'Reichweite ohne Käufer',
    },
    {
      icon: MousePointerClick,
      symptom: 'Ads ohne Conversion-Pfad',
      cause: 'Teurer Klick, keine Anfrage',
    },
    {
      icon: Inbox,
      symptom: 'Kein Lead-System',
      cause: 'Interessenten verschwinden',
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Reveal blur>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Wenn Marketing keine Anfragen liefert, fehlt das System.
              </h2>
            </Reveal>
            <Reveal delay={0.15} blur>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Die meisten Mittelständler posten regelmäßig, schalten gelegentlich Anzeigen und wundern sich, warum am Ende des Quartals keine Termine im Kalender stehen. Das Problem ist nicht der Content. Es ist die fehlende Verbindung zwischen Sichtbarkeit, Vertrauen und Anfrage.
              </p>
            </Reveal>
          </div>

          {/* Symptom / Cause Grid */}
          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-16" staggerDelay={0.12}>
            {painPoints.map((point, index) => (
              <StaggerItem key={index} scale blur>
                <div className="group flex flex-col gap-5 p-7 rounded-2xl liquid-glass hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-2xl liquid-glass-icon flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
                      Symptom
                    </p>
                    <p className="text-lg font-bold text-foreground leading-snug">
                      {point.symptom}
                    </p>
                  </div>
                  <div className="space-y-2 pt-4 border-t border-border/50">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                      Die Folge
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {point.cause}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Conclusion Statement */}
          <Reveal scale blur delay={0.1}>
            <div className="text-center">
              <div className="inline-block liquid-glass rounded-2xl px-8 py-6">
                <p className="text-xl md:text-2xl font-bold text-primary">
                  Altovate baut die Schicht zwischen Klick und Termin.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
