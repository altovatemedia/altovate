import { Compass, UserRound, KeyRound } from 'lucide-react';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/animations/Reveal';

const Positioning = () => {
  const focusPoints = [
    {
      icon: Compass,
      title: 'Strategie zuerst, Content danach.',
      description: 'Wir bauen die Architektur, bevor wir den ersten Post schreiben.',
    },
    {
      icon: UserRound,
      title: 'Direkt mit dem Gründer.',
      description: 'Keine Junior-PMs, keine Account-Manager als Telefon-Filter.',
    },
    {
      icon: KeyRound,
      title: 'Du behältst die Kontrolle.',
      description: 'System-Eigentum bleibt bei dir. Auch nach Vertragsende.',
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal blur>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Wir bauen Systeme. <span className="text-primary">Keine Content-Pakete.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15} blur>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 max-w-3xl mx-auto">
              Klassische Agenturen verkaufen Content, Ads oder SEO als Einzelleistung. Du bekommst Reichweite oder Klicks und musst selbst herausfinden, wie daraus Anfragen werden. Altovate dreht das um.
            </p>
          </Reveal>

          {/* Focus Points */}
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {focusPoints.map((point, index) => (
              <StaggerItem key={index} scale blur>
                <div className="flex flex-col items-center text-center space-y-4 p-7 rounded-2xl liquid-glass hover:border-primary/20 transition-colors h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <point.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-lg font-bold text-foreground leading-snug">{point.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
