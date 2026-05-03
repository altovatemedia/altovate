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
      description: "Für Unternehmer, die Klarheit wollen, bevor sie investieren.\n\nIn 60 Minuten: Analyse der aktuellen Marketing-Situation, Bewertung von Positionierung und Angebot, drei priorisierte Hebel mit konkreten nächsten Schritten.",
      forWho: ["Analyse der aktuellen Marketing-Situation", "Bewertung von Positionierung und Angebot", "Drei priorisierte Hebel", "Konkrete nächste Schritte"],
      result: "Du gehst raus mit einer Entscheidungsgrundlage, nicht mit Hausaufgaben.",
      cta: "Diagnose anfragen", offerType: "Marketing Diagnose 60 Minuten"
    },
    {
      icon: Zap, title: "Marketing System Analyse", duration: "90 Minuten", price: "890",
      description: "Für Unternehmer, die ihr Marketing strukturiert ausbauen wollen.\n\nWir analysieren, wie Content, Ads und Lead-Prozesse aktuell zusammenspielen — und wo das System bricht. Vertieft, mit Systemarchitektur-Empfehlung.",
      forWho: ["Analyse der Marketingstruktur", "Bewertung von Content- und Ads-Strategie", "Bewertung der Leadgewinnung", "Identifikation systemischer Marketinghebel"],
      result: "Konkrete Systemempfehlung, klare Umsetzungslogik, priorisierte Wachstumsmaßnahmen.",
      cta: "Analyse anfragen", offerType: "Marketing System Analyse 90 Minuten"
    },
    {
      icon: Building, title: "Marketing System Blueprint", duration: "Projekt", price: "ab 4.500",
      description: "Für Unternehmer, die ein vollständiges System bauen wollen.\n\nWir entwickeln Positionierung, Content-Architektur, Ads-Struktur, Lead-Logik und technische Marketingebene — als ein Plan.",
      forWho: ["Positionierung und Angebotsstruktur", "Content-Architektur", "Ads- und Kampagnenstruktur", "Lead-Logik", "Technische Marketingebene"],
      result: "Ein Marketing-Fahrplan, an dem dein Team oder Altovate umsetzen kann. Nichts bleibt offen.",
      cta: "Blueprint anfragen", offerType: "Marketing System Blueprint", isFundingReduced: true
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
          <div className="text-center mb-16">
            <Reveal blur>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Drei Wege zu <span className="text-primary">starten</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Drei klar abgegrenzte Einstiege — von der schnellen Diagnose bis zum vollständigen System-Blueprint.
              </p>
            </Reveal>
          </div>

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

                    {'description' in offer && offer.description && (
                      <div className="mb-4">
                        {offer.description.split('\n\n').map((p, i) => (
                          <p key={i} className="text-sm text-muted-foreground mb-2 last:mb-0">{p}</p>
                        ))}
                      </div>
                    )}

                    <div className="mb-6 flex-grow">
                      <p className="text-sm font-semibold text-foreground mb-3">Inhalte:</p>
                      <ul className="space-y-2">
                        {offer.forWho.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {offer.result && (
                      <div className="mb-6 p-4 bg-muted/50 rounded-xl">
                        <p className="text-sm font-semibold text-foreground mb-2">Ergebnis:</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{offer.result}</p>
                      </div>
                    )}

                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold"
                      onClick={() => handleBooking(offer.offerType)}
                    >
                      {offer.cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal delay={0.2}>
            <div className="mt-12 text-center max-w-2xl mx-auto">
              <p className="text-muted-foreground text-base italic">
                „Wenn du nach der Session keinen klaren nächsten Schritt hast, war sie nicht gut genug."
              </p>
              <p className="text-xs text-muted-foreground mt-2">— Alex Buchmann</p>
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
