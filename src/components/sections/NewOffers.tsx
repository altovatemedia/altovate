import { ArrowRight, Check, Clock, Sparkles, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewOffers = () => {
  const offers = [
    {
      icon: Zap,
      title: "Marketing Quick Check",
      price: "349 €",
      priceNote: "zzgl. MwSt",
      features: [
        "60 Minuten 1:1 Call",
        "Analyse von Profil, Angebot & Sichtbarkeit",
        "Klare Priorisierung der nächsten Schritte",
        "Schriftliche Zusammenfassung im Nachgang"
      ],
      cta: "Quick Check buchen",
      highlighted: false
    },
    {
      icon: Clock,
      title: "Marketing Strategy Session",
      price: "549 €",
      priceNote: "zzgl. MwSt",
      features: [
        "90 Minuten Deep Dive",
        "Positionierung & Angebotslogik",
        "Content- & Lead-Strategie",
        "Erste Funnel- und Freebie-Ideen",
        "Strukturierte Roadmap als Ergebnis"
      ],
      cta: "Strategy Session buchen",
      highlighted: false
    },
    {
      icon: Users,
      title: "Marketing Sparring & Systemaufbau",
      subtitle: "Für Unternehmer, die ihr Online-Marketing strategisch aufbauen wollen – ohne Agentur-Abhängigkeit.",
      price: "ab 2.400 €",
      priceNote: "12 Wochen · ab 4.800 € für 24 Wochen · zzgl. MwSt",
      features: [
        "Positionierung & Angebotsklarheit",
        "Profil-Optimierung",
        "Freebie- & Funnel-Konzept",
        "Content-System (keine operative Erstellung)",
        "Regelmäßiges Sparring & Feedback",
        "Klare Meilensteine"
      ],
      cta: "Zusammenarbeit anfragen",
      highlighted: true
    },
    {
      icon: Sparkles,
      title: "Full Marketing System",
      badge: "Done for you",
      subtitle: "Dieses Angebot richtet sich an ausgewählte Unternehmen.",
      price: "ab 5.000 €",
      priceNote: "pro Monat · zzgl. MwSt",
      features: [
        "Komplette Marketing-Struktur",
        "Content-Planung & Ausspielung",
        "Freebie & Funnel",
        "Automationen",
        "Optional Ads & Reporting"
      ],
      cta: "Anfrage stellen",
      highlighted: false,
      muted: true
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="offers" className="py-section bg-white dark:bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="finom-h2 mb-4">
            Angebote & <span className="text-primary">Zusammenarbeit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Klare Strukturen, echte Ergebnisse – wähle das passende Format für deine Situation.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 h-full flex flex-col
                ${offer.highlighted 
                  ? 'bg-primary/5 border-2 border-primary shadow-lg' 
                  : offer.muted 
                    ? 'bg-muted/30 border border-border/50' 
                    : 'bg-background border border-border hover:border-primary/30 hover:shadow-md'
                }`}
            >
              {/* Badge */}
              {offer.badge && (
                <div className="absolute -top-3 right-6">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {offer.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                  ${offer.highlighted 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-primary/10 text-primary'
                  }`}
                >
                  <offer.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{offer.title}</h3>
                  {offer.subtitle && (
                    <p className="text-sm text-muted-foreground mt-1">{offer.subtitle}</p>
                  )}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">{offer.price}</span>
                <span className="text-sm text-muted-foreground ml-2">{offer.priceNote}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {offer.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${offer.highlighted ? 'text-primary' : 'text-primary/70'}`} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                className={`w-full ${offer.highlighted ? 'btn-hero' : ''}`}
                variant={offer.highlighted ? 'default' : 'outline'}
                onClick={scrollToContact}
              >
                {offer.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center">
          <p className="text-muted-foreground">
            Unsicher, welches Angebot passt?{' '}
            <button 
              onClick={scrollToContact}
              className="text-primary font-medium hover:underline"
            >
              Lass uns sprechen
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewOffers;
