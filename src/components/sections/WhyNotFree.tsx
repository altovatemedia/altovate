import { ShieldCheck, Focus, MessageSquare, Scale } from 'lucide-react';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/animations/Reveal';

const WhyNotFree = () => {
  const benefits = [
    { icon: Focus, text: "Klaren Fokus" },
    { icon: MessageSquare, text: "Ernsthafte Gespräche" },
    { icon: Scale, text: "Saubere Entscheidungen auf beiden Seiten" },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal scale blur>
            <div className="liquid-glass rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Warum es keine kostenlosen Erstgespräche gibt
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Eine Strategie-Session bei Altovate ist keine Verkaufsveranstaltung, sondern eine vollwertige Beratungsleistung. In 60 oder 90 Minuten entsteht eine konkrete Analyse der aktuellen Situation mit priorisierten Handlungsempfehlungen. Deshalb sind alle Sessions kostenpflichtig.
                  </p>
                  <div className="pt-4">
                    <p className="text-sm font-semibold text-foreground mb-4">Das sorgt für:</p>
                    <StaggerContainer className="flex flex-wrap gap-4" staggerDelay={0.1} delay={0.3}>
                      {benefits.map((benefit, index) => (
                        <StaggerItem key={index} scale>
                          <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-full border border-white/5">
                            <benefit.icon className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WhyNotFree;
