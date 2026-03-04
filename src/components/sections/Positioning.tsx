import { Layers, Target, CheckCircle } from 'lucide-react';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/animations/Reveal';

const Positioning = () => {
  const focusPoints = [
    { text: "Klare Strategie statt Aktionismus", icon: Target },
    { text: "Strukturierte Leadgewinnung statt zufälliger Reichweite", icon: Layers },
    { text: "Marketing, das dauerhaft für dein Unternehmen arbeitet", icon: CheckCircle },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal blur>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Mehr als eine klassische <span className="text-primary">Marketingagentur</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15} blur>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto">
              Viele Agenturen erstellen Inhalte oder schalten Werbung. Altovate entwickelt Marketing-Systeme.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-16 max-w-3xl mx-auto">
              Die Umsetzung kann durch Altovate erfolgen oder durch dein eigenes Team.
            </p>
          </Reveal>

          {/* Focus Points */}
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {focusPoints.map((point, index) => (
              <StaggerItem key={index} scale blur>
                <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl liquid-glass hover:border-primary/20 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <point.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">{point.text}</p>
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
