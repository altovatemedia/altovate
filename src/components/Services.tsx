import { Star, Zap, TrendingUp, Users, Heart, Bot } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Packages = () => {
  const packages = [
    {
      icon: Star,
      title: "Der Markenmagnet",
      price: "9.900 €",
      subline: "Dein komplettes Marken-Makeover – Website, Ads, Content, Funnel & Automatisierung. Damit Kunden & Bewerber dich sehen. Und wollen.",
      description: [
        "High-End Website inkl. Copy & CI",
        "Social Media Grundstruktur & 12 Posts", 
        "Contentshooting (Foto & Video)",
        "Bewerber- oder Verkaufsfunnel",
        "Meta & Google Ads inkl. Creatives",
        "Automatisierter Chat- & Mailflow",
        "Mitarbeiterbenefits inkl. Integration",
        "Performance-Tracking + Erfolgsauswertung"
      ],
      isPopular: true
    },
    {
      icon: Zap,
      title: "Website Refresh",
      price: "ab 3.000 €",
      subline: "Dein Unternehmen ist längst gewachsen – deine Website leider nicht. Wir holen sie ins Jetzt. Modern. Schnell. Aussagekräftig.",
      description: [
        "Design-Update deiner bestehenden Website",
        "Conversion-optimiertes UX-Layout",
        "Klare Struktur, starke Texte (optional)",
        "SEO-Basics & DSGVO-Fit",
        "Mobile- & Ladezeitoptimierung",
        "Anbindung von Tracking & Terminen (z. B. Calendly)"
      ]
    },
    {
      icon: TrendingUp,
      title: "Ad-Booster",
      price: "ab 2.500 €", 
      description: "Meta Ads, die performen"
    },
    {
      icon: Users,
      title: "Content Kickstart",
      price: "ab 1.800 €",
      description: "Content-Strategie & Umsetzung"
    },
    {
      icon: Bot,
      title: "Automatisierung & Chatbot",
      price: "ab 1.200 €",
      description: "Prozesse automatisieren"
    },
    {
      icon: Heart,
      title: "Mitarbeitervorteile Setup",
      price: "990 €",
      description: "Circle & BAV Workflow"
    }
  ];

  return (
    <section id="packages" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Unsere <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Nicht billig. Aber günstiger als ein leerer Kalender.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Popover key={pkg.title}>
              <PopoverTrigger asChild>
                <div 
                  className={`bold-card p-8 transition-all duration-300 hover:scale-105 hover:shadow-elegant relative cursor-pointer ${
                    pkg.isPopular ? 'ring-2 ring-primary bg-primary/5' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {pkg.isPopular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                        BELIEBT
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-xl flex items-center justify-center">
                      <pkg.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {pkg.title}
                    </h3>
                    
                    <div className="text-3xl font-black text-primary mb-4">
                      {pkg.price}
                    </div>
                    
                    {pkg.subline && (
                      <p className="text-sm text-muted-foreground font-medium mb-3 leading-relaxed">
                        {pkg.subline}
                      </p>
                    )}
                    
                    {!pkg.subline && (
                      <p className="text-muted-foreground font-medium">
                        {typeof pkg.description === 'string' ? pkg.description : pkg.description.join(' • ')}
                      </p>
                    )}
                  </div>
                </div>
              </PopoverTrigger>
              
              {Array.isArray(pkg.description) && (
                <PopoverContent className="w-80 p-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground mb-3">Enthaltene Leistungen:</h4>
                    <ul className="space-y-2">
                      {pkg.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </PopoverContent>
              )}
            </Popover>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;