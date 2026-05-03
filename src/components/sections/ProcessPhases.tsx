import { useState } from 'react';
import { ArrowRight, Microscope, FileSpreadsheet, Hammer, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/animations/Reveal';
import TiltCard from '@/components/animations/TiltCard';
import BookingModal from '@/components/BookingModal';

const ProcessPhases = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const phases = [
    {
      number: '1',
      icon: Microscope,
      title: 'Analyse',
      duration: '1–2 Wochen',
      description: 'Wir prüfen Marketing, Positionierung und Lead-Pfade.',
    },
    {
      number: '2',
      icon: FileSpreadsheet,
      title: 'Blueprint',
      duration: '3–4 Wochen',
      description: 'Wir bauen das System auf Papier, bevor irgendwas live geht.',
    },
    {
      number: '3',
      icon: Hammer,
      title: 'Umsetzung',
      duration: 'ab 12 Wochen',
      description: 'Wir setzen um oder begleiten dein Team. Beides möglich.',
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Reveal blur>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                So arbeitet <span className="text-primary">Altovate</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Drei Phasen, klar abgegrenzt. Jede mit einem definierten Zeitrahmen und einem konkreten Ergebnis.
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-12" staggerDelay={0.15}>
            {phases.map((phase) => (
              <StaggerItem key={phase.number} scale>
                <TiltCard>
                  <div className="liquid-glass rounded-2xl p-8 hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl liquid-glass-icon flex items-center justify-center">
                        <phase.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-5xl font-bold text-primary/20 leading-none">
                        {phase.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{phase.title}</h3>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{phase.duration}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal scale delay={0.1}>
            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold"
                onClick={() => setIsModalOpen(true)}
              >
                Analyse anfordern
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        offerType="Marketing Diagnose 60 Minuten"
      />
    </section>
  );
};

export default ProcessPhases;
