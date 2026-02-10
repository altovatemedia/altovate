import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import SEOSchema from '@/components/SEOSchema';
import { Check, Sparkles, MessageCircle, Search, Loader2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import NewNavigation from '@/components/sections/NewNavigation';
import VisualBreadcrumb from '@/components/VisualBreadcrumb';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import ContactFunnel from '@/components/sections/ContactFunnel';
import AiDemoTool from '@/components/social-media/AiDemoTool';
import PackageFinder from '@/components/social-media/PackageFinder';
import VisibilityAnalysis from '@/components/social-media/VisibilityAnalysis';
import SocialMediaPreferences from '@/components/social-media/SocialMediaPreferences';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const workloadItems = [
  {
    title: "Zielgruppenanalyse & Content-Strategie",
    description: "Ich analysiere deine Zielgruppe, definiere Themenwelten und entwickle eine Strategie, die zu deinem Geschäftsmodell passt."
  },
  {
    title: "Contentplanung & Redaktionskalender",
    description: "Systematische Planung aller Inhalte mit festem Veröffentlichungsrhythmus – kein Raten, kein Improvisieren."
  },
  {
    title: "Content-Erstellung (Fotos, Reels, Grafiken)",
    description: "Professionelle Produktion von Bildern, Kurzvideos und Design-Vorlagen – abgestimmt auf deine Marke."
  },
  {
    title: "Community Management & Interaktion",
    description: "Kommentare, Direktnachrichten und Engagement – ich sorge dafür, dass deine Community wächst und aktiv bleibt."
  },
  {
    title: "Hashtag-Strategie & SEO-Optimierung",
    description: "Gezielte Hashtag-Recherche und Profil-Optimierung, damit du von den richtigen Menschen gefunden wirst."
  },
  {
    title: "Performance-Analyse & Reporting",
    description: "Monatliche Auswertung der relevanten Kennzahlen mit klaren Handlungsempfehlungen."
  },
  {
    title: "Profil-Optimierung & Story-Highlights",
    description: "Dein Profil wird so aufgebaut, dass es professionell wirkt und Besucher sofort verstehen, was du anbietest."
  }
];

const SocialMedia = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !consent) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error('Bitte gib eine gültige E-Mail-Adresse ein.');
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'waitlist',
          email: email.trim(),
          message: 'Warteliste für Social-Media-Betreuung',
        },
      });
      if (error) throw error;
      setIsSubmitted(true);
      toast.success('Du bist auf der Warteliste!');
    } catch (error) {
      console.error('Error submitting waitlist:', error);
      toast.error('Fehler beim Eintragen. Bitte versuche es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Social Media Marketing Saarburg | Content & Betreuung – altovate</title>
        <meta name="description" content="Social Media Marketing für Unternehmen in Saarburg & Region. Content-Erstellung, Instagram-Betreuung und Reels-Produktion." />
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

      {/* Leistungsübersicht */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="finom-h2 mb-4">Was professionelle Social-Media-Betreuung umfasst</h2>
            <p className="finom-lead text-muted-foreground">
              Ein funktionierender Social-Media-Auftritt ist kein einzelner Post – sondern ein System aus Strategie, Produktion und Analyse.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workloadItems.map((item, idx) => (
              <div key={idx} className="finom-card hover-lift">
                <h3 className="finom-h3 mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warteliste – Slots belegt */}
      <section className="py-20 px-6 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <div className="inline-block bg-primary/10 rounded-full px-6 py-3 mb-6">
            <span className="text-foreground font-medium">Kapazität aktuell ausgelastet</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Social-Media-Betreuung</h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Ich betreue Social-Media-Kanäle als fester Bestandteil meiner Kundenarbeit – von der Strategie über die Content-Produktion bis zur laufenden Optimierung. Da ich mit wenigen Kunden gleichzeitig arbeite, ist die Kapazität begrenzt.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Trag dich ein und erfahre vorab, wenn wieder ein Platz frei wird.
          </p>

          {/* Waitlist Form */}
          {!isSubmitted ? (
            <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
              <div className="flex gap-2 mb-4">
                <Input
                  type="email"
                  placeholder="Deine E-Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  disabled={isSubmitting}
                  maxLength={255}
                />
                <Button
                  type="submit"
                  disabled={!email.trim() || !consent || isSubmitting}
                  className="bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <div className="flex items-start gap-2 justify-center">
                <Checkbox
                  id="sm-consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked === true)}
                  disabled={isSubmitting}
                />
                <label htmlFor="sm-consent" className="text-xs text-muted-foreground text-left cursor-pointer">
                  Ich bin damit einverstanden, per E-Mail kontaktiert zu werden.
                  Mehr dazu in der{' '}
                  <Link to="/datenschutz" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </Link>.
                </label>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-primary/10 rounded-xl p-6">
              <Check className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-foreground font-medium">Du bist auf der Liste!</p>
              <p className="text-sm text-muted-foreground mt-1">
                Ich melde mich, sobald ein Platz frei wird.
              </p>
            </div>
          )}

          {/* Strategie-Session Hinweis */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm mb-4">
              Du möchtest nicht warten? In einer Strategie-Session klären wir gemeinsam, welche nächsten Schritte für dich sinnvoll sind.
            </p>
            <Link to="/erstkontakt">
              <Button variant="outline" className="btn-secondary">
                Strategie-Session anfragen
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Interaktive Tools Sektion */}
      <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="finom-h2 mb-4">Interaktive Tools</h2>
            <p className="finom-lead text-muted-foreground">
              Teste meine kostenlosen Tools und finde heraus, wo du stehst
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
                <h3 className="finom-h3 mb-2">🔍 Welches Angebot passt?</h3>
                <p className="text-sm text-muted-foreground">
                  Finde das passende Angebot in 2 Minuten
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
