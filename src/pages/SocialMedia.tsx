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
  const [activeTab, setActiveTab] = useState('monthly');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Preisstaffelung berechnen mit Rundung auf glatte 10er
  const calculatePrice = (basePrice: number) => {
    let multiplier = 1;
    if (duration === 3) multiplier = 1.29; // +29% für 890 aus 690
    if (duration === 6) multiplier = 1.145; // +14.5% für 790 aus 690
    
    const calculated = basePrice * multiplier;
    // Aufrunden auf glatte 10er
    return Math.ceil(calculated / 10) * 10;
  };

  const oneTimePackages = [
    {
      title: "Social Media Starter",
      price: "1.800 €",
      isPopular: true,
      features: [
        "Professioneller Dreh vor Ort",
        "20+ Social Media Assets",
        "3 Werbevideos",
        "Foto-Retusche inklusive",
        "Nutzung ohne Limit",
        "Content-Strategieberatung",
        "Einrichtung oder Re-Optimierung deiner Kanäle",
        "Bio, Highlights, gepinnte Beiträge, Kanalcheck"
      ]
    }
  ];

  const monthlyPackages = [
    {
      title: "Content Lite",
      basePrice: 690,
      features: [
        "4 Social Assets (Reels & Posts)",
        "Themenplanung & Vorlagen",
        "Upload & Caption inkl. Hashtags",
        "Monatliche Strategieberatung",
        "Performance-Tracking"
      ]
    },
    {
      title: "Ads & Automation",
      basePrice: 890,
      features: [
        "Kampagnen-Management (2–3 Gruppen)",
        "Landingpage A/B Testing (light)",
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
        "Kampagnen-Setup + laufende Optimierung",
        "1 Content-Drehtag pro Quartal",
        "SmartFlow dauerhaft (z. B. Chatbot)",
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
          <h1 className="finom-h1 mb-6">Social Media, das funktioniert.</h1>
          <p className="finom-lead text-muted-foreground">
            Von der Contentplanung bis zur Performance-Analyse: Wir kümmern uns um deinen Auftritt – du konzentrierst dich aufs Geschäft.
          </p>
        </div>
      </section>

      {/* Tabs Section - Sticky */}
      <div className={`transition-all duration-300 ${isSticky ? 'sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border shadow-card' : ''}`}>
        <div className="container mx-auto px-6 py-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-12">
              <TabsTrigger value="monthly" className="text-base">Monatliche Betreuung</TabsTrigger>
              <TabsTrigger value="onetime" className="text-base">Einmalige Startpakete</TabsTrigger>
            </TabsList>

            {/* Monatliche Pakete mit verschachteltem Laufzeit-Toggle */}
            <TabsContent value="monthly" className="mt-12">
              {/* Laufzeit-Buttons (Zweite Ebene) */}
              <div className="flex justify-center mb-12">
                <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full p-1.5 border border-border">
                  {[3, 6, 12].map((months) => (
                    <button
                      key={months}
                      onClick={() => setDuration(months)}
                      className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 text-sm ${
                        duration === months
                          ? 'bg-primary text-white shadow-sm'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {months} Monate
                      {months === 12 && <span className="ml-1.5 text-xs opacity-75">✓ Standardpreis</span>}
                    </button>
                  ))}
                </div>
              </div>
              {/* Package Cards Container */}
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                  {monthlyPackages.map((pkg, idx) => {
                    const finalPrice = calculatePrice(pkg.basePrice);
                    
                    return (
                      <div
                        key={idx}
                        className={`relative finom-card transition-all duration-300 ${
                          pkg.isPopular ? 'border-2 border-primary shadow-elegant scale-105' : ''
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
                          <div className="text-4xl font-bold text-primary mb-1">{finalPrice} €</div>
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

                {/* Additional Info Section */}
                <div className="space-y-12">
                  <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-12 text-center">
                    <h3 className="finom-h2 mb-4">Warum monatliche Betreuung?</h3>
                    <p className="finom-lead text-muted-foreground max-w-2xl mx-auto">
                      Social Media ist ein Marathon, kein Sprint. Mit kontinuierlicher Betreuung bleibst du sichtbar, 
                      relevant und wächst nachhaltig – während du dich auf dein Kerngeschäft konzentrierst.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center p-6">
                      <div className="text-4xl font-bold text-primary mb-2">4x</div>
                      <p className="text-sm text-muted-foreground">mehr Reichweite im ersten Quartal</p>
                    </div>
                    <div className="text-center p-6">
                      <div className="text-4xl font-bold text-primary mb-2">70%</div>
                      <p className="text-sm text-muted-foreground">höhere Engagement-Rate</p>
                    </div>
                    <div className="text-center p-6">
                      <div className="text-4xl font-bold text-primary mb-2">12h</div>
                      <p className="text-sm text-muted-foreground">Zeitersparnis pro Monat</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Einmalige Startpakete */}
            <TabsContent value="onetime" className="mt-12">
              <div className="max-w-3xl mx-auto">
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
                          Empfohlen
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="finom-h3 mb-3">{pkg.title}</h3>
                      <div className="text-4xl font-bold text-primary mb-1">{pkg.price}</div>
                      <div className="text-xs text-muted-foreground">Einmalzahlung</div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className="btn-hero w-full text-lg"
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

                <div className="mt-12 text-center p-8 bg-muted/30 rounded-2xl">
                  <p className="text-sm text-muted-foreground">
                    <strong>Perfekt für:</strong> Unternehmen, die einen professionellen Start wollen und direkt verwertbaren Content brauchen. Alle Rechte, keine versteckten Kosten.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Interaktive Tools Sektion */}
      <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="finom-h2 mb-4">Interaktive Tools</h2>
            <p className="finom-lead text-muted-foreground">
              Teste unsere kostenlosen Tools und finde das perfekte Paket für dich
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tool 1: KI-Demo */}
            <div className="finom-card hover-lift">
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h3 className="finom-h3 mb-2">🧠 Content-Ideen Finder</h3>
                <p className="text-sm text-muted-foreground">
                  Erhalte 3 maßgeschneiderte Content-Ideen
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
                <h3 className="finom-h3 mb-2">🔍 Welches Paket passt?</h3>
                <p className="text-sm text-muted-foreground">
                  Finde dein perfektes Paket in 2 Minuten
                </p>
              </div>
              <PackageFinder />
            </div>

            {/* Tool 3: Social Media Check */}
            <div className="finom-card hover-lift">
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-7 h-7 text-primary" />
                </div>
                <h3 className="finom-h3 mb-2">📊 Social Media Check</h3>
                <p className="text-sm text-muted-foreground">
                  Sofortanalyse deines Auftritts
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
