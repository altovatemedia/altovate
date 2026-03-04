import { Clock, TrendingDown, User, FileQuestion } from 'lucide-react';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/animations/Reveal';

const PainPoints = () => {
  const painPoints = [
    { icon: Clock, text: "Content ohne klare Strategie" },
    { icon: TrendingDown, text: "Fehlende Werbekampagnen" },
    { icon: User, text: "Kein System zur Leadgewinnung" },
    { icon: FileQuestion, text: "Social Media wird nur bespielt, aber nicht als Vertriebskanal genutzt" }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Reveal blur>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Warum Social Media für viele Unternehmen nicht funktioniert
              </h2>
            </Reveal>
            <Reveal delay={0.15} blur>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Viele Unternehmen investieren Zeit und Geld in Social Media. Beiträge werden erstellt, Videos produziert und Profile gepflegt. Trotzdem entstehen kaum neue Kundenanfragen. Der Grund ist selten der Content selbst, sondern die fehlende Struktur dahinter.
              </p>
            </Reveal>
          </div>

          {/* Pain point list */}
          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-16" staggerDelay={0.12}>
            {painPoints.map((point, index) => (
              <StaggerItem
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div className="group flex items-start gap-4 p-6 rounded-2xl liquid-glass hover:border-primary/30 transition-all duration-300">
                  <div className="shrink-0 w-16 h-16 rounded-full liquid-glass-icon flex items-center justify-center">
                    <point.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-lg text-foreground font-medium leading-relaxed pt-2">
                    {point.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Conclusion Statement */}
          <Reveal scale blur delay={0.1}>
            <div className="text-center">
              <div className="inline-block liquid-glass rounded-2xl px-8 py-6">
                <p className="text-xl md:text-2xl font-bold text-primary">
                  Genau hier setzt Altovate an.
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
