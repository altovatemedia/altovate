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
    if (duration === 3) multiplier = 1.2;
    if (duration === 6) multiplier = 1.1;
    
    const calculated = basePrice * multiplier;
    // Aufrunden auf glatte 10er
    return Math.ceil(calculated / 10) * 10;
  };

  const oneTimePackages = [
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
    },
    {
      title: "Social Media Starter",
      price: "2.400 €",
      features: [
        "Profil-Optimierung (Bio, Highlights)",
        "Content-Strategie & Themenplan",
        "10 fertige Post-Templates",
        "Hashtag-Recherche",
        "Story-Vorlagen",
        "1 Monat Coaching"
      ]
    },
    {
      title: "Kampagnen Quick-Setup",
      price: "1.500 €",
      isPopular: true,
      features: [
        "Meta & Google Ads Setup",
        "Zielgruppenanalyse",
        "3 Kampagnen mit Creatives",
        "Tracking & Conversion Setup",
        "Performance-Report",
        "1 Monat Betreuung inklusive"
      ]
    },
    {
      title: "All-in-One Social Boost",
      price: "4.200 €",
      features: [
        "Content Kickstart Day",
        "Profil-Komplettoptimierung",
        "Kampagnen-Setup",
        "20+ Social Assets",
        "Automation-Einrichtung",
        "2 Monate Betreuung"
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
          <h1 className="finom-h1 mb-6">Social Media Marketing Pakete</h1>
          <p className="finom-lead text-muted-foreground">
            Wähle zwischen unseren einmaligen Starter-Bausteinen oder einer langfristigen Partnerschaft mit monatlicher Betreuung.
          </p>
        </div>
      </section>

      {/* Tabs Section - Sticky */}
      <div className={`transition-all duration-300 ${isSticky ? 'sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border shadow-card' : ''}`}>
        <div className="container mx-auto px-6 py-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-12">
              <TabsTrigger value="monthly" className="text-base">Monatliche Betreuung</TabsTrigger>
              <TabsTrigger value="onetime" className="text-base">Einmalige Sets</TabsTrigger>
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
                      {months === 3 && <span className="ml-1.5 text-xs opacity-75">+20%</span>}
                      {months === 6 && <span className="ml-1.5 text-xs opacity-75">+10%</span>}
                      {months === 12 && <span className="ml-1.5 text-xs opacity-75">✓</span>}
                    </button>
                  ))}
                </div>
              </div>
              {/* Sticky Package Cards Container */}
              <div className="relative max-w-6xl mx-auto">
                <div className="sticky top-24 z-30">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">
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
                </div>

                {/* Scrollable Background Content */}
                <div className="space-y-16 pt-96">
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

            {/* Einmalige Sets */}
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
                          Top-Set
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
          </Tabs>
        </div>
      </div>

      {/* Paketfinder Sektion */}
      <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="finom-h2 mb-4">Finde dein passendes Paket</h2>
            <p className="finom-lead text-muted-foreground">
              Beantworte ein paar kurze Fragen und erhalte eine individuelle Empfehlung
            </p>
          </div>

          <div className="finom-card max-w-2xl mx-auto">
            <PackageFinder />
          </div>
        </div>
      </section>

      {/* Social Media Analyse Sektion */}
      <section id="analysis" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="finom-h2 mb-4">Wie gut ist dein Auftritt wirklich?</h2>
            <p className="finom-lead text-muted-foreground">
              Prüfe dein Optimierungspotenzial und erhalte konkrete Verbesserungsvorschläge
            </p>
          </div>

          <div className="finom-card max-w-2xl mx-auto">
            <VisibilityAnalysis />
          </div>

          <div className="text-center mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">
              <strong>Unser Versprechen:</strong> Unser Team meldet sich mit konkreten Verbesserungsvorschlägen innerhalb von 48 Stunden bei dir.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMedia;
