import { Star, Zap, TrendingUp, Users, Heart, Bot } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Packages = () => {
  const packages = [
    {
      icon: Star,
      title: "Der Markenmagnet",
      price: "5.500 €",
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
      title: "Ad Impact Engine",
      price: "ab 1.500 €", 
      subline: "Deine Zielgruppe scrollt jeden Tag – aber nicht zu dir. Wir ändern das. Mit Ads, die gesehen werden. Und funktionieren.",
      description: [
        "Zielgerichtetes Ad-Setup (Meta & Google)",
        "Conversion-optimierte Creatives (Video, Grafik, Copywriting)",
        "A/B-Tests & Hook-Strategien",
        "Pixel-Integration & Tracking",
        "Reporting & Kampagnen-Feintuning"
      ]
    },
    {
      icon: Users,
      title: "Trust Content Kit",
      price: "ab 1.800 €",
      subline: "Du weißt, dass du gut bist. Wir sorgen dafür, dass es auch alle anderen sehen – mit Content, der verkauft, ohne zu nerven.",
      description: [
        "Professionelles Fotoshooting & Kurzvideos (Reels/Stories)",
        "12 fertige Social-Media-Posts (Text, Bild/Video, Hashtags)",
        "Redaktionsplan & Posting-Empfehlung",
        "Beratung zu Kanälen & Plattformstrategie",
        "Optional: Content-Vorlagen + Canva-Übergabe"
      ]
    },
    {
      icon: Bot,
      title: "SmartFlow System",
      price: "ab 1.200 €",
      subline: "Leads kommen rein. Bewerber stellen Fragen. Kunden wollen Infos. Mit uns bekommst du ein System, das alles abfängt – bevor du überhaupt reagieren musst.",
      description: [
        "WhatsApp- & Website-Chatbot-Setup",
        "Automatisierte Leadqualifizierung & Bewerberlogik",
        "E-Mail-Automation (z. B. Bewerbungseingang, Follow-ups)",
        "Terminvereinbarung via Bot (inkl. Kalender-Integration)",
        "Übergabe & einfache Anpassung durch dein Team"
      ]
    },
    {
      icon: Heart,
      title: "Team Love Kit",
      price: "990 €",
      subline: "Mitarbeiter wollen mehr als Obstkorb & Floskeln. Wir zeigen dir, was wirklich wirkt – und helfen dir, es richtig zu kommunizieren.",
      description: [
        "Analyse: Welche Benefits lohnen sich wirklich – für dich und deine Mitarbeiter?",
        "Vorstellung bewährter Lösungen von Branchenexperten für Fitness & Vorsorge",
        "Vermittlung des direkten Kontakts für Umsetzung & Fördermöglichkeiten",
        "Erstellung deiner Benefit-Kommunikation (Website, Social Media, Stellenanzeigen)",
        "Aufbau einer Benefits-Seite für deine Mitarbeiter (klar, digital, ansprechend)",
        "Integration in deinen Recruiting-Auftritt – sichtbar, greifbar, spürbar"
      ]
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
                         MOST WANTED
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