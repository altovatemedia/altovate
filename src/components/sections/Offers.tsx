import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Zap, Building, BadgePercent } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookingModal from '@/components/BookingModal';
const Offers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState('');

  const offers = [
    {
      icon: Clock,
      title: "Strategie-Session",
      duration: "60 Minuten",
      price: "390",
      forWho: [
        "Klarheit brauchen",
        "ihr Marketing sortieren wollen",
        "eine saubere Entscheidungsgrundlage suchen"
      ],
      results: [
        "Klare Einschätzung",
        "Konkrete nächste Schritte",
        "Entscheidung: selber umsetzen oder skalieren"
      ],
      cta: "60-Min-Session anfragen",
      offerType: "Strategie-Session 60 Minuten"
    },
    {
      icon: Zap,
      title: "Strategie-Session",
      duration: "90 Minuten",
      price: "590",
      forWho: [
        "ein konkretes Vorhaben haben",
        "Leads, Content oder Ads sauber aufsetzen wollen",
        "ein belastbares Konzept brauchen"
      ],
      results: [
        "Klare System-Empfehlung",
        "Priorisierte Maßnahmen",
        "Konkrete Umsetzungslogik"
      ],
      cta: "90-Min-Session anfragen",
      offerType: "Strategie-Session 90 Minuten"
    },
    {
      icon: Building,
      title: "Social Media Setup",
      duration: "Projektbasiert",
      price: "ab 1.800",
      forWho: [
        "Marketing nicht selbst tragen wollen",
        "ein funktionierendes Setup brauchen",
        "unabhängig von Einzelpersonen werden möchten"
      ],
      results: [],
      note: "Kein Paket von der Stange. Umsetzung nur nach Strategie-Session.",
      cta: "Setup besprechen",
      offerType: "Social Media Setup",
      isFundingReduced: true
    }
  ];

  const handleBooking = (offerType: string) => {
    setSelectedOffer(offerType);
    setIsModalOpen(true);
  };

  return (
    <section id="angebote" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
         {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              So kannst du mit Altovate <span className="text-primary">arbeiten</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Altovate bietet drei Angebotsformate: eine 60-Minuten-Strategie-Session für erste Klarheit, eine 90-Minuten-Session für konkrete Konzepte und ein projektbasiertes Social Media Setup für die vollständige Umsetzung. Alle Formate sind einzeln buchbar – ohne Abo oder Mindestlaufzeit.
          </p>

          {/* Offer Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <div 
                key={index}
                className="bg-background rounded-2xl border border-border p-8 flex flex-col hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon & Title */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <offer.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {offer.title}
                  </h3>
                  <p className="text-primary font-medium">{offer.duration}</p>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{offer.price} €</span>
                  <span className="text-sm text-muted-foreground ml-2">zzgl. MwSt.</span>
                </div>
                
                {/* Funding Badge */}
                <Link 
                  to="/foerderung"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-6 bg-primary/10 hover:bg-primary/15 text-primary text-xs font-medium rounded-full transition-colors"
                >
                  <BadgePercent className="w-3.5 h-3.5" />
                  {'isFundingReduced' in offer ? 'Bis zu 50% förderfähig' : 'Bis zu 80% förderfähig'}
                </Link>

                {/* For Who */}
                <div className="mb-6 flex-grow">
                  <p className="text-sm font-semibold text-foreground mb-3">Für Unternehmer, die:</p>
                  <ul className="space-y-2">
                    {offer.forWho.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results or Note */}
                {offer.results.length > 0 ? (
                  <div className="mb-6 p-4 bg-muted/50 rounded-xl">
                    <p className="text-sm font-semibold text-foreground mb-2">Ergebnis:</p>
                    <ul className="space-y-1">
                      {offer.results.map((result, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : offer.note ? (
                  <div className="mb-6 p-4 bg-muted/50 rounded-xl">
                    <p className="text-sm text-muted-foreground italic">
                      {offer.note}
                    </p>
                  </div>
                ) : null}

                {/* CTA */}
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
            ))}
          </div>

          {/* Klarheitsversprechen */}
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm italic">
              „Wenn du nach der Session keinen klaren nächsten Schritt hast, war sie nicht gut genug."
            </p>
          </div>
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
