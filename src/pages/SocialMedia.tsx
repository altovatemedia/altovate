import { useState, useEffect } from 'react';
import { Check, ArrowRight, Star, Sparkles, MessageCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import NewNavigation from '@/components/sections/NewNavigation';
import Footer from '@/components/Footer';
import AiDemoTool from '@/components/social-media/AiDemoTool';
import PackageFinder from '@/components/social-media/PackageFinder';
import VisibilityAnalysis from '@/components/social-media/VisibilityAnalysis';

const SocialMedia = () => {
  const [duration, setDuration] = useState(12);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Preisstaffelung berechnen
  const getPriceMultiplier = () => {
    if (duration === 12) return 1;
    if (duration === 6) return 1.1;
    return 1.2;
  };

  const oneTimePackages = [
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
        "Zielgruppenanalyse",
        "Kampagnenstruktur & Creatives",
        "Tracking + Conversion Setup",
        "1 Monat Kampagnenbetreuung",
        "Performance-Report"
      ]
    },
    {
      title: "Sichtbarkeitspaket",
      price: "5.000 €",
      isPopular: true,
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

  const monthlyPackages = [
    {
      title: "Content Lite",
      basePrice: 690,
      features: [
        "4 Social Assets / Monat (Reels & Posts)",
        "Themenplanung & Vorlagen",
        "Upload & Beitragstext inkl. Hashtags",
        "Monatliche Strategieberatung",
        "Performance-Tracking"
      ]
    },
    {
      title: "Ads & Automation",
      basePrice: 890,
      features: [
        "Kampagnen-Management (2–3 Anzeigengruppen)",
        "Landingpage A/B-Tests (light)",
        "SmartFlow Pflege & Optimierung",
        "Zielgruppen-Optimierung",
        "Creative-Refresh bei Bedarf",
        "Monatliches Performance-Reporting"
      ]
    },
    {
      title: "Scale Plan",
      basePrice: 1250,
      isPopular: true,
      features: [
        "Website-Refresh in Monat 1",
        "Kampagnen-Setup + Optimierung",
        "1 Content-Drehtag pro Quartal",
        "SmartFlow laufend (z. B. Chatbot)",
        "Monatliches Strategie-Meeting",
        "Priorisierter Support & Betreuung"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NewNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="finom-h1 mb-6">Pakete & Preise</h1>
          <p className="finom-lead text-muted-foreground">
            Wähle zwischen unseren einmaligen Starter-Bausteinen oder einer langfristigen Partnerschaft mit monatlicher Betreuung.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <div className={`transition-all duration-300 ${isSticky ? 'sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border shadow-card' : ''}`}>
        <div className="container mx-auto px-6 py-4">
          <Tabs defaultValue="onetime" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-12">
              <TabsTrigger value="onetime" className="text-base">Einmalige Projekte</TabsTrigger>
              <TabsTrigger value="monthly" className="text-base">Monatliche Betreuung</TabsTrigger>
            </TabsList>

            {/* Einmalige Pakete */}
            <TabsContent value="onetime" className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {oneTimePackages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className={`relative finom-card hover-lift ${
                      pkg.isPopular ? 'border-2 border-primary shadow-elegant' : ''
                    }`}
                  >
                    {pkg.isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-primary text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Beliebteste Wahl
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="finom-h3 mb-3">{pkg.title}</h3>
                      <div className="text-3xl font-bold text-primary mb-1">{pkg.price}</div>
                      <div className="text-xs text-muted-foreground">Einmalzahlung</div>
                    </div>

                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className={pkg.isPopular ? 'btn-hero w-full' : 'btn-secondary w-full'}
                      onClick={() => {
                        const contact = document.getElementById('contact');
                        contact?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Jetzt buchen
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Monatliche Pakete */}
            <TabsContent value="monthly" className="mt-12">
              <div className="max-w-5xl mx-auto">
                {/* Laufzeitregler */}
                <div className="bg-muted/50 rounded-2xl p-8 mb-12 border border-border">
                  <div className="text-center mb-6">
                    <h3 className="finom-h3 mb-2">Wähle deine Laufzeit</h3>
                    <p className="text-sm text-muted-foreground">
                      Je länger die Laufzeit, desto günstiger der Monatspreis
                    </p>
                  </div>
                  
                  <div className="max-w-md mx-auto">
                    <Slider
                      value={[duration]}
                      onValueChange={(value) => setDuration(value[0])}
                      min={3}
                      max={12}
                      step={3}
                      className="mb-6"
                    />
                    
                    <div className="flex justify-between text-sm">
                      <div className={`text-center ${duration === 3 ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                        <div className="text-2xl font-bold">{duration === 3 ? '✓' : ''} 3</div>
                        <div className="text-xs">Monate</div>
                        <div className="text-xs mt-1">+20%</div>
                      </div>
                      <div className={`text-center ${duration === 6 ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                        <div className="text-2xl font-bold">{duration === 6 ? '✓' : ''} 6</div>
                        <div className="text-xs">Monate</div>
                        <div className="text-xs mt-1">+10%</div>
                      </div>
                      <div className={`text-center ${duration === 12 ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                        <div className="text-2xl font-bold">{duration === 12 ? '✓' : ''} 12</div>
                        <div className="text-xs">Monate</div>
                        <div className="text-xs mt-1 text-success">Bester Preis</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Monatliche Pakete Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {monthlyPackages.map((pkg, idx) => {
                    const finalPrice = Math.round(pkg.basePrice * getPriceMultiplier());
                    
                    return (
                      <div
                        key={idx}
                        className={`relative finom-card hover-lift ${
                          pkg.isPopular ? 'border-2 border-primary shadow-elegant' : ''
                        }`}
                      >
                        {pkg.isPopular && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <span className="bg-primary text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              Beliebteste Wahl
                            </span>
                          </div>
                        )}
                        
                        <div className="text-center mb-6">
                          <h3 className="finom-h3 mb-3">{pkg.title}</h3>
                          <div className="text-3xl font-bold text-primary mb-1">{finalPrice} €</div>
                          <div className="text-xs text-muted-foreground">pro Monat</div>
                          <div className="text-xs text-muted-foreground mt-1">{duration} Monate Laufzeit</div>
                        </div>

                        <div className="space-y-3 mb-8">
                          {pkg.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm leading-tight">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Button 
                          className={pkg.isPopular ? 'btn-hero w-full' : 'btn-secondary w-full'}
                          onClick={() => {
                            const contact = document.getElementById('contact');
                            contact?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          Jetzt buchen
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Interaktive Sektion */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="finom-h2 mb-4">Welches Paket passt zu dir?</h2>
            <p className="finom-lead text-muted-foreground">
              Oder lieber direkt ausprobieren?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tool 1: KI-Ideen-Tool */}
            <div className="finom-card hover-lift">
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h3 className="finom-h3 mb-2">KI-Ideen-Tool</h3>
                <p className="text-sm text-muted-foreground">
                  Lass dir passende Content-Ideen generieren
                </p>
              </div>
              <AiDemoTool />
            </div>

            {/* Tool 2: Paketfinder */}
            <div className="finom-card hover-lift">
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="finom-h3 mb-2">Paketfinder</h3>
                <p className="text-sm text-muted-foreground">
                  Finde das passende Paket für deine Bedürfnisse
                </p>
              </div>
              <PackageFinder />
            </div>

            {/* Tool 3: Sichtbarkeits-Check */}
            <div className="finom-card hover-lift">
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-7 h-7 text-primary" />
                </div>
                <h3 className="finom-h3 mb-2">Sichtbarkeits-Check</h3>
                <p className="text-sm text-muted-foreground">
                  Prüfe dein Optimierungspotenzial
                </p>
              </div>
              <VisibilityAnalysis />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMedia;
