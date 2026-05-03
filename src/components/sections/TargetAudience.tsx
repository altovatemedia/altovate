import { CheckCircle, AlertCircle } from 'lucide-react';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/animations/Reveal';

const TargetAudience = () => {
  const industries = [
    "Dienstleister",
    "Handwerksbetriebe",
    "Fitness und Gesundheit",
    "Regionale Mittelständler",
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Reveal blur>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Für wen <span className="text-primary">Altovate arbeitet</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Altovate arbeitet vor allem mit Inhabern und Geschäftsführern, die kein eigenes Marketing-Team haben. Wenig Zeit, hohe Eigenverantwortung, klares Wachstumsziel.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <p className="text-lg text-muted-foreground mb-8 text-center">Typische Branchen:</p>
          </Reveal>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12" staggerDelay={0.1}>
            {industries.map((industry, index) => (
              <StaggerItem key={index} direction="left">
                <div className="flex items-center gap-3 p-4 rounded-xl liquid-glass">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{industry}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal delay={0.3} scale>
            <div className="max-w-2xl mx-auto p-6 rounded-2xl liquid-glass border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-primary font-semibold mb-2">
                    Klar abgegrenzt
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Wenn du gerade nach jemandem suchst, der drei Posts pro Woche liefert — das ist nicht Altovate.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
