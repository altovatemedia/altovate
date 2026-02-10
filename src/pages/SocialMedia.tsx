import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SEOSchema from '@/components/SEOSchema';
import { Check, ArrowRight, Star, Sparkles, MessageCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NewNavigation from '@/components/sections/NewNavigation';
import VisualBreadcrumb from '@/components/VisualBreadcrumb';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import ContactFunnel from '@/components/sections/ContactFunnel';
import AiDemoTool from '@/components/social-media/AiDemoTool';
import PackageFinder from '@/components/social-media/PackageFinder';
import VisibilityAnalysis from '@/components/social-media/VisibilityAnalysis';
import SocialMediaPreferences from '@/components/social-media/SocialMediaPreferences';

const SocialMedia = () => {

  // Scroll Progress Bar
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / scrollTotal) * 100;
      const progressBar = document.querySelector('.scroll-progress') as HTMLElement;
      if (progressBar) {
        progressBar.style.width = `${scrollProgress}%`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const oneTimePackages = [
    {
      title: "SEO & Social Check",
      price: "390 €",
      subtitle: "Analyse & Handlungsempfehlung",
      features: [
        "Analyse von Website & Instagram",
        "Konkrete Checkliste zur Optimierung",
        "Tool-Tipps für bessere Ergebnisse",
        "Zugang zu KI-Tool für Texte & Themen",
        "Ideal als Einstieg ohne Risiko"
      ]
    },
    {
      title: "Content Kickstart Day",
      price: "1.800 €",
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
      title: "Digitales Sichtbarkeitspaket",
      price: "5.000 €",
      subtitle: "All-in-One-Paket für deinen Auftritt",
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
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Social Media Marketing Saarburg | Content & Betreuung – altovate</title>
        <meta name="description" content="Social Media Marketing für Unternehmen in Saarburg & Region. Content-Erstellung, Instagram-Betreuung und Reels-Produktion. Pakete ab 390 €." />
        <link rel="canonical" href="https://altovate.de/socialmedia" />
        <meta property="og:title" content="Social Media Marketing Saarburg | altovate" />
        <meta property="og:description" content="Social Media Marketing für Unternehmen. Content-Erstellung, Instagram-Betreuung und Reels-Produktion." />
        <meta property="og:url" content="https://altovate.de/socialmedia" />
      </Helmet>
      <SEOSchema
        page="service"
        service={{ name: "Social Media Marketing", description: "Content-Erstellung, Instagram-Betreuung und Reels-Produktion für Unternehmen in Saarburg und Region.", url: "https://altovate.de/socialmedia" }}
        breadcrumbs={[
          { name: "Startseite", url: "https://altovate.de/" },
          { name: "Social Media Marketing", url: "https://altovate.de/socialmedia" }
        ]}
      />

      {/* Scroll Progress Indicator */}
      <div className="scroll-progress" style={{ width: '0%' }}></div>
      
      <NewNavigation />
      <VisualBreadcrumb items={[{ label: "Social Media Marketing" }]} />
      
      {/* Hero Section */}
      <section className="pt-8 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="finom-h1 mb-6">Social Media, das funktioniert.</h1>
          <p className="finom-lead text-muted-foreground">
            Von der Contentplanung bis zur Performance-Analyse: Ich kümmere mich um deinen Auftritt – du konzentrierst dich aufs Geschäft.
          </p>
        </div>
      </section>

      {/* Einmalige Bausteine */}
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h2 className="finom-h2 mb-4">Einmalige Bausteine</h2>
          <p className="finom-lead text-muted-foreground">Wähle das passende Paket für deinen Start</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {oneTimePackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative finom-card hover-lift flex flex-col ${
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

              <div className="space-y-2.5 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-xs leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={pkg.isPopular ? 'btn-hero w-full mt-auto' : 'btn-secondary w-full mt-auto'}
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
      </div>

      {/* Interaktive Tools Sektion */}
      <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="finom-h2 mb-4">Interaktive Tools</h2>
            <p className="finom-lead text-muted-foreground">
              Teste meine kostenlosen Tools und finde das perfekte Paket für dich
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

      <SocialMediaPreferences />

      <ContactFunnel />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default SocialMedia;
