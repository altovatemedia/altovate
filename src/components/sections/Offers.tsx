import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Zap, Building, BadgePercent } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookingModal from '@/components/BookingModal';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/animations/Reveal';
import TiltCard from '@/components/animations/TiltCard';

const Offers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState('');

  const offers = [
    {
      icon: Clock, title: "Marketing Diagnose", duration: "60 Minuten", price: "590",
      forWho: ["Klarheit über dein Marketing benötigen", "die größten Wachstumshebel identifizieren wollen", "eine fundierte Entscheidungsgrundlage brauchen"],
      results: ["Klare Einschätzung", "Priorisierte Maßnahmen", "Entscheidung: selbst umsetzen oder System entwickeln"],
      cta: "Diagnose anfragen", offerType: "Marketing Diagnose 60 Minuten"
    },
    {
      icon: Zap, title: "Marketing System Analyse", duration: "90 Minuten", price: "890",
      forWho: ["ihr Marketing strukturiert aufbauen oder skalieren wollen", "systemische Marketinghebel identifizieren möchten", "konkrete Handlungsempfehlungen brauchen"],
      results: ["Konkrete Systemempfehlung", "Priorisierte Maßnahmen", "Klare Umsetzungslogik"],
      cta: "Analyse anfragen", offerType: "Marketing System Analyse 90 Minuten"
    },
    {
      icon: Building, title: "Marketing System Blueprint", duration: "Projektbasiert", price: "ab 3.500",
      forWho: ["ein vollständiges Marketing-System entwickeln wollen", "planbare Kundenanfragen generieren möchten", "ein funktionierendes Lead-System aufbauen wollen"],
      results: [], note: "Umsetzung kann durch Altovate oder dein internes Team erfolgen.",
      cta: "Blueprint besprechen", offerType: "Marketing System Blueprint", isFundingReduced: true
    }
  ];

  const handleBooking = (offerType: string) => {
    setSelectedOffer(offerType);
    setIsModalOpen(true);
  };

  return (
    <section id="angebote" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <Reveal blur>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                So kannst du mit Altovate <span className="text-primary">arbeiten</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="mb-12">
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-4 leading-relaxed">
                Die Zusammenarbeit mit Altovate folgt einer klaren Struktur:
              </p>
              <ul className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-6 leading-relaxed space-y-1">
                <li>Analyse der aktuellen Situation</li>
                <li>Entwicklung eines funktionierenden Marketing-Systems</li>
                <li>Strategische Begleitung oder Umsetzung</li>
              </ul>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
                So entstehen Marketingstrukturen, die langfristig planbare Kundenanfragen generieren.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {offers.map((offer, index) => (
              <StaggerItem key={index}>
                <TiltCard>
                  <div className="liquid-glass rounded-2xl p-8 flex flex-col hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <offer.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{offer.title}</h3>
                      <p className="text-primary font-medium">{offer.duration}</p>
                    </div>

                    <div className="mb-4">
                      <span className="text-4xl font-bold text-foreground">{offer.price} €</span>
                      <span className="text-sm text-muted-foreground ml-2">zzgl. MwSt.</span>
                    </div>
                    
                    <Link 
                      to="/foerderung"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-6 bg-primary/10 hover:bg-primary/15 text-primary text-xs font-medium rounded-full transition-colors"
                    >
                      <BadgePercent className="w-3.5 h-3.5" />
                      {'isFundingReduced' in offer ? 'Bis zu 50% förderfähig' : 'Bis zu 80% förderfähig'}
                    </Link>

                    <div className="mb-6 flex-grow">
                      <p className="text-sm font-semibold text-foreground mb-3">Für Unternehmer, die:</p>
                      <ul className="space-y-2">
                        {offer.forWho.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {offer.results.length > 0 ? (
                      <div className="mb-6 p-4 bg-muted/50 rounded-xl">
                        <p className="text-sm font-semibold text-foreground mb-2">Ergebnis:</p>
                        <ul className="space-y-1">
                          {offer.results.map((result, i) => (
                            <li key={i} className="text-sm text-muted-foreground">{result}</li>
                          ))}
                        </ul>
                      </div>
                    ) : offer.note ? (
                      <div className="mb-6 p-4 bg-muted/50 rounded-xl">
                        <p className="text-sm text-muted-foreground italic">{offer.note}</p>
                      </div>
                    ) : null}

                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold"
                      onClick={() => handleBooking(offer.offerType)}
                    >
                      {offer.cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Bezahlte Session – du bekommst echten Wert.
                    </p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal delay={0.2}>
            <div className="mt-12 text-center max-w-2xl mx-auto">
              <p className="text-muted-foreground text-sm italic">
                „Wenn du nach der Session keinen klaren nächsten Schritt hast, war sie nicht gut genug."
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        offerType={selectedOffer}
      />
    </section>
  );
};

export default Offers;
