import { useState } from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingToggle = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  const oneTimeOffers = [
    {
      title: "Website Refresh",
      price: "3.000 €",
      features: [
        "Komplette Website-Überarbeitung",
        "Mobile-first Responsive Design",
        "SEO-Grundoptimierung",
        "Performance-Optimierung",
        "Content-Management-System",
        "1 Monat Support inklusive"
      ]
    },
    {
      title: "Performance Set", 
      price: "1.500 €",
      features: [
        "Facebook & Google Ads Setup",
        "Zielgruppen-Analyse & Research",
        "Kampagnen-Struktur & Creatives",
        "Tracking & Conversion Setup",
        "1 Monat Kampagnen-Betreuung",
        "Performance-Report"
      ]
    },
    {
      title: "Das Sichtbarkeits-Paket",
      price: "5.000 €",
      isHighlight: true,
      features: [
        "Moderne One-Page Website",
        "Content Kickstart (3 Videos, 20 Fotos)",
        "Ad Setup (Meta/Google)",
        "SmartFlow Light Automation",
        "30 Tage Go-Live Garantie",
        "Alles aus einer Hand"
      ]
    },
    {
      title: "Content Kickstart Day",
      price: "1.800 €", 
      features: [
        "Professioneller Drehtag vor Ort",
        "20+ Social Media Assets",
        "3 kurze Werbevideos",
        "Foto-Retusche inklusive",
        "Nutzungsrechte ohne Limit",
        "Content-Strategie-Beratung"
      ]
    }
  ];

  const monthlyPlans = [
    {
      title: "Content Lite",
      price: "690 €",
      period: "pro Monat",
      features: [
        "4 Social-Assets pro Monat",
        "Mix aus Reels & Posts",
        "Themenplanung & Vorlagen", 
        "Upload & Caption inkl. Hashtags",
        "Monatliche Strategieberatung",
        "Performance-Tracking"
      ]
    },
    {
      title: "Ads & Automation",
      price: "890 €",
      period: "pro Monat", 
      features: [
        "Kampagnen-Management (2-3 Anzeigengruppen)",
        "Landingpage A/B-Testing light",
        "SmartFlow Pflege & Optimierung",
        "Monatliches Performance-Reporting",
        "Zielgruppen-Optimierung",
        "Creative-Refresh bei Bedarf"
      ]
    },
    {
      title: "Scale Plan",
      price: "1.250 €",
      period: "pro Monat",
      isHighlight: true,
      isRecommended: true,
      features: [
        "1x Website-Refresh in Monat 1",
        "Kampagnen-Setup + monatliche Optimierung", 
        "1 Content-Drehtag pro Quartal",
        "SmartFlow laufend (Chatbot/Auto-Reply)",
        "Monatliches Strategie-Meeting",
        "Prioritärer Support & Betreuung"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-section bg-muted/30">
      <div className="container mx-auto px-6 max-w-content">
        {/* Section Header with Toggle */}
        <div className="text-center mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <h2 className="finom-h2 whitespace-nowrap">Pakete & Preise</h2>
            
            {/* Toggle Switch */}
            <div className="flex items-center gap-4 bg-white dark:bg-card rounded-full p-2 shadow-card mx-auto md:mx-0 border border-border">
              <button
                onClick={() => setIsMonthly(false)}
                className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                  !isMonthly 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Einmalig
              </button>
              <button
                onClick={() => setIsMonthly(true)}
                className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                  isMonthly 
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                12 Monate
              </button>
            </div>
          </div>
          
          <p className="finom-lead max-w-3xl mx-auto">
            {!isMonthly 
              ? "Einmalige Projekte für schnelle Ergebnisse – perfekt für den sofortigen Start."
              : "Langfristige Partnerschaften für nachhaltiges Wachstum – mit kontinuierlicher Betreuung."
            }
          </p>
        </div>

        {/* Pricing Cards */}
        {!isMonthly ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {oneTimeOffers.map((offer, index) => (
              <div
                key={index}
                className={`relative ${
                  offer.isHighlight
                    ? 'finom-card border-2 border-primary shadow-elegant transform scale-105'
                    : 'finom-card hover-lift'
                }`}
              >
                {offer.isHighlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                      Beliebteste Wahl
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="finom-h3 mb-2">{offer.title}</h3>
                  <div className="text-3xl font-bold text-primary mb-1">{offer.price}</div>
                  <div className="text-sm text-muted-foreground">Einmalzahlung</div>
                </div>

                <div className="space-y-3 mb-8">
                  {offer.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={offer.isHighlight ? 'btn-hero w-full' : 'btn-secondary w-full'}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Jetzt buchen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {monthlyPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative ${
                  plan.isHighlight
                    ? 'finom-card border-2 border-primary shadow-elegant transform scale-105'
                    : 'finom-card hover-lift'
                }`}
              >
                {plan.isRecommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Recommended
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="finom-h3 mb-2">{plan.title}</h3>
                  <div className="text-3xl font-bold text-primary mb-1">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                  <div className="text-xs text-muted-foreground mt-1">12 Monate Mindestlaufzeit</div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={plan.isHighlight ? 'btn-hero w-full' : 'btn-secondary w-full'}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Apply now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="finom-body text-muted-foreground mb-6">
            Nicht sicher welches Paket das richtige ist? Lass uns gemeinsam die beste Lösung finden.
          </p>
          <Button 
            className="btn-secondary text-lg px-8 py-4"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Kostenloses Beratungsgespräch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingToggle;