import { CheckCircle } from 'lucide-react';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/animations/Reveal';

const TargetAudience = () => {
  const industries = [
    "Dienstleister",
    "Handwerksbetriebe",
    "Fitness- und Gesundheitsunternehmen",
    "Regionale mittelständische Unternehmen"
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Reveal blur>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Für welche Unternehmen Altovate arbeitet
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Altovate arbeitet vor allem mit Unternehmen ohne eigenes Marketingteam. Viele dieser Unternehmen haben wenig Zeit für Marketing, möchten aber planbar neue Kunden gewinnen.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <p className="text-lg text-muted-foreground mb-8 text-center">Typische Branchen sind:</p>
          </Reveal>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto" staggerDelay={0.1}>
            {industries.map((industry, index) => (
              <StaggerItem key={index} direction="left">
                <div className="flex items-center gap-3 p-4 rounded-xl liquid-glass">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{industry}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
