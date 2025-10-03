import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SignatureOffer = () => {
  const mainOffer = {
    title: "Die visibility engine",
    price: "5.000 €",
    subtitle: "Fixpreis – alles inklusive",
    features: [
      "Moderne One-Page Website (conversion-optimiert)",
      "Content Kickstart (3 Kurzvideos, 20 Fotos)",
      "Ad Setup (Meta/Google) inkl. 1 Kampagnenstruktur", 
      "SmartFlow Light (Lead-/Bewerber-Auto-Reply + Terminvergabe)"
    ],
    badge: "30 Tage Go-Live"
  };

  const modules = [
    {
      title: "Website Refresh",
      price: "ab 3.000 €",
      features: [
        "Komplette Website-Überarbeitung",
        "Mobile-first Design",
        "SEO-Optimierung",
        "Performance-Boost"
      ]
    },
    {
      title: "Ad Impact Engine", 
      price: "ab 1.500 €",
      features: [
        "Facebook & Google Ads Setup",
        "Zielgruppen-Analyse", 
        "Kampagnen-Struktur",
        "1 Monat Betreuung"
      ]
    },
    {
      title: "Content Kickstart",
      price: "ab 1.800 €",
      features: [
        "Professioneller Drehtag",
        "20+ Social Media Assets",
        "3 Kurze Werbevideos",
        "Nutzungsrechte inklusive"
      ]
    },
    {
      title: "SmartFlow System",
      price: "ab 1.200 €", 
      features: [
        "KI-Chatbot Integration",
        "Automatisierte Antworten",
        "Lead-Qualifikation",
        "Terminbuchung-System"
      ]
    }
  ];

  return (
    <section id="signature-offer" className="py-section bg-white">
      <div className="container mx-auto px-6 max-w-content">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="finom-h2 mb-6">
            Das komplette Marketing-System
          </h2>
          <p className="finom-lead max-w-3xl mx-auto">
            Alles was du brauchst, um in 30 Tagen mehr Kunden und Bewerber zu gewinnen – 
            <span className="text-primary font-semibold"> zu einem Fixpreis.</span>
          </p>
        </div>

        {/* Main Offer Card */}
        <div className="highlight-card max-w-4xl mx-auto mb-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="finom-h3">{mainOffer.title}</h3>
                <span className="glass-badge text-primary">
                  {mainOffer.badge}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6">{mainOffer.subtitle}</p>
              
              <div className="space-y-4">
                {mainOffer.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="finom-body">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="text-4xl font-bold text-foreground mb-2">
                {mainOffer.price}
              </div>
              <Button 
                className="btn-hero text-sm md:text-base lg:text-lg px-4 md:px-6 lg:px-8 py-3 lg:py-4"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Jetzt starten
                <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="mb-12">
          <h3 className="finom-h3 text-center mb-4">
            Einzelmodule – separat buchbar, im visibility engine-Paket inklusive
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="finom-card hover-lift group relative">
                <h4 className="text-xl font-bold mb-4">{module.title}</h4>
                
                {/* Mobile: 0 € im Paket first, then crossed out price */}
                <div className="block md:hidden mb-4">
                  <div className="text-2xl font-bold text-[hsl(var(--color-success))] mb-2">
                    0 € im Paket
                  </div>
                  <div className="text-sm text-[hsl(var(--color-text-muted))] line-through">
                    {module.price}
                  </div>
                </div>
                
                {/* Desktop: crossed out price first, then 0 € im Paket */}
                <div className="hidden md:block mb-4">
                  <div className="text-sm text-[hsl(var(--color-text-muted))] line-through mb-2">
                    {module.price}
                  </div>
                  <div className="text-2xl font-bold text-[hsl(var(--color-success))]">
                    0 € im Paket
                  </div>
                </div>
                
                {/* Hover Badge */}
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  In visibility engine enthalten
                </div>
                
                <div className="space-y-2 mt-4">
                  {module.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground">
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="btn-hero text-sm md:text-base lg:text-lg px-4 md:px-6 lg:px-8 py-3 lg:py-4 mb-3"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Jetzt starten
            <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
          </Button>
          <p className="text-sm text-muted-foreground">
            Oder separat buchen, falls du nicht das ganze Paket willst.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignatureOffer;