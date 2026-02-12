import { Clock, TrendingDown, User, FileQuestion } from 'lucide-react';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/animations/Reveal';

const PainPoints = () => {
  const painPoints = [
    { icon: Clock, text: "Social Media frisst Zeit, bringt aber keine Anfragen" },
    { icon: TrendingDown, text: "Agenturen reden über Reichweite statt Umsatz" },
    { icon: User, text: "Dein Marketing hängt an Einzelpersonen" },
    { icon: FileQuestion, text: "Nichts ist dokumentiert, skalierbar oder messbar" }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Reveal blur>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Warum Marketing bei vielen Unternehmern nicht funktioniert
              </h2>
            </Reveal>
            <Reveal delay={0.15} blur>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Die häufigsten Probleme im Online-Marketing für KMU sind fehlende Struktur, keine messbaren Ergebnisse und Abhängigkeit von einzelnen Personen. Diese vier Symptome zeigen, dass kein System vorhanden ist:
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
                <p className="text-xl md:text-2xl font-bold text-foreground">
                  Das ist kein Content-Problem.
                </p>
                <p className="text-xl md:text-2xl font-bold text-primary">
                  Das ist ein fehlendes System.
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
