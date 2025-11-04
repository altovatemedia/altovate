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
  const [activeTab, setActiveTab] = useState('onetime');

  // Preisstaffelung berechnen mit Rundung auf glatte 10er
  const calculatePrice = (basePrice: number) => {
    let multiplier = 1;
    if (duration === 3) multiplier = 1.25; // +25%
    if (duration === 6) multiplier = 1.15; // +15%
    
    const calculated = basePrice * multiplier;
    // Aufrunden auf glatte 10er
    return Math.ceil(calculated / 10) * 10;
  };

  const oneTimePackages = [
    {
      title: "Social Media Starter",
      price: "1.800 €",
      subtitle: "Professioneller erster Eindruck",
      features: [
        "Zielgruppenanalyse",
        "Instagram-Profil Einrichtung/Refresh",
        "Name, Profilbild, Bio",
        "Kontakt & Verlinkung",
        "Story-Highlights (Leistungen, Team, Rezensionen)",
        "5 Design-Vorlagen für Canva",
        "6–8 Fotos & 3–4 Reels vor Ort",
        "Zugang zu KI-Tool (Themenideen, Texte)",
        "Contentplaner für Selbstverwaltung"
      ]
    },
    {
      title: "Content Kickstart Day",
      price: "1.290 €",
      subtitle: "Dein Content-Vorrat an einem Tag",
      features: [
        "Zielgruppen- & Themenanalyse",
        "Planung passender Beiträge",
        "2h Videodreh & Fotoshooting vor Ort",
        "Schnitt, Formatierung, Musik & Untertitel",
        "Ausgabe in passenden Formaten",
        "Optional: Einpflege & Text durch Altovate"
      ]
    },
    {
      title: "Sichtbarkeitspaket",
      price: "5.000 €",
      subtitle: "All-in-One für deinen digitalen Auftritt",
      isPopular: true,
      features: [
        "Moderne Onepager-Website",
        "SEO-Basics & Mobiloptimierung",
        "Instagram-Kanal Optimierung/Aufbau",
        "Content Kickstart (3 Videos + 20 Fotos)",
        "Automatisierte Prozesse (Chatbot, Funnel)",
        "Zugang zu allen Altovate-KI-Tools",
        "Go-Live in 30 Tagen garantiert"
      ]
    },
    {
      title: "SEO & Social Check",
      price: "290 €",
      subtitle: "Analyse & Handlungsempfehlung",
      features: [
        "Analyse von Website & Instagram",
        "Konkrete Checkliste zur Optimierung",
        "Tool-Tipps für bessere Ergebnisse",
        "Zugang zu KI-Tool für Texte & Themen",
        "Ideal als Einstieg ohne Risiko"
      ]
    }
  ];

  const monthlyPackages = [
    {
      title: "Content Basic",
      basePrice: 390,
      subtitle: "Sichtbar bleiben mit minimalem Aufwand",
      features: [
        "2 Beiträge/Monat (Reel oder Karussell)",
        "Texterstellung inkl. Untertitel & Hashtags",
        "Themenvorgabe durch Altovate oder gemeinsam",
        "Upload oder Übergabe",
        "Zugang zu 1 KI-Tool"
      ]
    },
    {
      title: "Content Plus",
      basePrice: 690,
      subtitle: "Ideal für wachsende Betriebe",
      features: [
        "4 Beiträge/Monat (Reels & Karussell)",
        "1 Drehtag pro Quartal vor Ort",
        "Monatliche Themenplanung",
        "Zugang zu 2 KI-Tools (Texte, Zielgruppen, Hook-Ideen)",
        "Mehrproduktion auf Vorrat möglich"
      ]
    },
    {
      title: "Performance Scale",
      basePrice: 1250,
      subtitle: "Vollumfängliche Content-Betreuung",
      isPopular: true,
      features: [
        "Monatlicher Drehtag vor Ort",
        "Mindestens 10 Videos + 4 Karussell-Posts",
        "Kompletter Schnitt, Titel, Untertitel, Musik",
        "Upload auf Instagram inkl. Terminierung",
        "Zugang zu allen Altovate-KI-Tools",
        "Persönlicher Ansprechpartner"
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

      {/* Tabs Section */}
      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-12 mb-12">
            <TabsTrigger value="onetime" className="text-base">Einmalige Bausteine</TabsTrigger>
            <TabsTrigger value="monthly" className="text-base">Monatliche Abos</TabsTrigger>
          </TabsList>

          {/* Einmalige Bausteine */}
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
                        Beliebt
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="finom-h3 mb-2">{pkg.title}</h3>
                    <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                    {pkg.subtitle && (
                      <p className="text-xs text-muted-foreground italic">{pkg.subtitle}</p>
                    )}
                  </div>

                  <div className="space-y-2.5 mb-8">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-xs leading-tight">{feature}</span>
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

          {/* Monatliche Abos mit Laufzeit-Toggle */}
          <TabsContent value="monthly" className="mt-12">
            {/* Laufzeit-Buttons */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full p-1.5 border border-border">
                {[12, 6, 3].map((months) => (
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
                    {months === 12 && <span className="ml-1.5 text-xs opacity-75">✓ Basispreis</span>}
                    {months === 6 && <span className="ml-1.5 text-xs opacity-75">+15%</span>}
                    {months === 3 && <span className="ml-1.5 text-xs opacity-75">+25%</span>}
                  </button>
                ))}
              </div>
            </div>
            {/* Package Cards */}
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
                            Beliebt
                          </span>
                        </div>
                      )}
                      
                      <div className="text-center mb-6">
                        <h3 className="finom-h3 mb-2">{pkg.title}</h3>
                        <div className="text-4xl font-bold text-primary mb-2">{finalPrice} €</div>
                        <div className="text-xs text-muted-foreground mb-1">pro Monat</div>
                        {pkg.subtitle && (
                          <p className="text-xs text-muted-foreground italic mt-2">{pkg.subtitle}</p>
                        )}
                      </div>

                      <div className="space-y-2.5 mb-8">
                        {pkg.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs leading-tight">{feature}</span>
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

              {/* Additional Info */}
              <div className="space-y-12">
                <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    <strong>Automatische Preisstaffelung:</strong> Je nach Laufzeit passen sich die Preise an – 
                    bei 6 Monaten +15%, bei 3 Monaten +25%. Der beste Preis gilt bei 12 Monaten Laufzeit.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          </Tabs>
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
