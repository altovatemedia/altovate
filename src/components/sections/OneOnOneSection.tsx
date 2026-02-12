import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, BadgePercent } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookingModal from '@/components/BookingModal';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/animations/Reveal';
import TiltCard from '@/components/animations/TiltCard';

const OneOnOneSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packages = [
    { duration: "12 Wochen", price: "3.900", description: "Fokussierte strategische Begleitung für klare Entscheidungen" },
    { duration: "24 Wochen", price: "7.200", description: "Tiefgreifende Zusammenarbeit für nachhaltige Transformation" }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Reveal scale>
              <div className="w-16 h-16 rounded-2xl liquid-glass-icon flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </Reveal>
            <Reveal blur delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Strategische 1:1 <span className="text-primary">Zusammenarbeit</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Für Unternehmer, die Marketing nicht mehr nebenbei entscheiden wollen.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="liquid-glass rounded-2xl p-8 md:p-12 mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Keine Agenturbetreuung. Kein klassisches Coaching. Sondern enge strategische Begleitung bei Positionierung, Angebotsstruktur und Systementscheidungen.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Ich begleite dich bei den Entscheidungen, die Umsatz, Zeit und Wachstum bestimmen – und koordiniere bei Bedarf Tools, Umsetzung und externe Beteiligte.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-12" staggerDelay={0.15}>
            {packages.map((pkg, index) => (
              <StaggerItem key={index}>
                <TiltCard>
                  <div className="liquid-glass rounded-2xl p-8 hover:border-primary/20 transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-lg font-semibold text-foreground">{pkg.duration}</span>
                    </div>
                    <div className="mb-3">
                      <span className="text-4xl font-bold text-foreground">{pkg.price} €</span>
                      <span className="text-sm text-muted-foreground ml-2">inkl. MwSt.</span>
                    </div>
                    <Link to="/foerderung" className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-4 bg-primary/10 hover:bg-primary/15 text-primary text-xs font-medium rounded-full transition-colors">
                      <BadgePercent className="w-3.5 h-3.5" />
                      Bis zu 80% förderfähig
                    </Link>
                    <p className="text-muted-foreground">{pkg.description}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal scale delay={0.1}>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-8">
                Zusammenarbeit nur nach vorheriger Strategie-Session. Begrenzte Kapazität.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold"
                onClick={() => setIsModalOpen(true)}
              >
                Zusammenarbeit besprechen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} offerType="1:1 Zusammenarbeit" />
    </section>
  );
};

export default OneOnOneSection;
