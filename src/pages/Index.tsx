import { useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

// Above the fold – eagerly loaded
import NewNavigation from '@/components/sections/NewNavigation';
import NewHero from '@/components/sections/NewHero';
import ParallaxOrbs from '@/components/animations/ParallaxOrbs';
import SEOSchema from '@/components/SEOSchema';

// Below the fold – lazy loaded
const PainPoints = lazy(() => import('@/components/sections/PainPoints'));
const Positioning = lazy(() => import('@/components/sections/Positioning'));
const SystemProcess = lazy(() => import('@/components/sections/SystemProcess'));
const Offers = lazy(() => import('@/components/sections/Offers'));
const FoerderungHint = lazy(() => import('@/components/sections/FoerderungHint'));
const OneOnOneSection = lazy(() => import('@/components/sections/OneOnOneSection'));
const WhyNotFree = lazy(() => import('@/components/sections/WhyNotFree'));
const AboutAlex = lazy(() => import('@/components/sections/AboutAlex'));
const DoneForYouSection = lazy(() => import('@/components/sections/DoneForYouSection'));
const CaseStudies = lazy(() => import('@/components/sections/CaseStudies'));
const GoogleReviews = lazy(() => import('@/components/sections/GoogleReviews'));
const FAQ = lazy(() => import('@/components/FAQ'));
const FinalCTA = lazy(() => import('@/components/sections/FinalCTA'));
const Footer = lazy(() => import('@/components/Footer'));
const CookieBannerWrapper = lazy(() => import('@/components/CookieBanner').then(m => ({ default: m.CookieBannerWrapper })));
const ExitIntentBanner = lazy(() => import('@/components/ExitIntentBanner'));

const faqItems = [
  {
    question: "Muss ich als Unternehmer selbst Content erstellen?",
    answer: "Nein. Altovate entwickelt Content-Strategien und übernimmt auf Wunsch die komplette Erstellung – von der Themenplanung über den Dreh bis zur Veröffentlichung. Voraussetzung ist lediglich, dass du deine Zielgruppe und dein Angebot kennst. Alternativ kann Altovate dir ein System aufbauen, mit dem du selbst effizient Content produzierst."
  },
  {
    question: "Arbeitet Altovate mit bezahlter Werbung (Ads)?",
    answer: "Ja, wenn bezahlte Werbung das effizienteste Mittel ist, um dein Ziel zu erreichen. Werbeanzeigen auf Meta (Facebook & Instagram) und Google werden eingesetzt, wenn sie schneller und günstiger Ergebnisse liefern als rein organische Maßnahmen. Die Entscheidung basiert auf Daten, nicht auf Bauchgefühl."
  },
  {
    question: "Gibt es langfristige Vertragsbindungen?",
    answer: "Nein. Altovate arbeitet projektbasiert mit klar definierten Leistungen und Ergebnissen. Es gibt keine Knebelverträge und keine versteckten Laufzeiten. Jede Zusammenarbeit beginnt mit einer Strategie-Session, die einzeln buchbar ist."
  },
  {
    question: "Für wen ist Altovate nicht geeignet?",
    answer: "Altovate ist nicht geeignet für Unternehmer, die schnelle Likes und Follower-Zahlen als Ziel definieren. Der Fokus liegt auf messbaren Geschäftsergebnissen wie qualifizierten Anfragen, Terminbuchungen und Umsatz. Wenn Reichweite ohne Vertriebsziel im Vordergrund steht, ist Altovate der falsche Ansprechpartner."
  }
];

const Index = () => {

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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background"
    >
        <Helmet>
          <title>altovate | Online-Marketing für Unternehmer</title>
          <meta name="description" content="Lead- & Content-Systeme für mittelständische Unternehmen in Saarburg, Trier & Region. Planbare Anfragen statt Reichweiten-Blabla. Strategie-Session ab 390 €." />
          <link rel="canonical" href="https://altovate.de/" />
          <meta property="og:title" content="altovate | Online-Marketing für Unternehmer" />
          <meta property="og:description" content="Lead- & Content-Systeme für mittelständische Unternehmen. Planbare Anfragen statt Reichweiten-Blabla." />
          <meta property="og:url" content="https://altovate.de/" />
          <meta property="og:type" content="website" />
        </Helmet>
        <SEOSchema page="home" faqItems={faqItems} />

        <div className="scroll-progress" style={{ width: '0%' }}></div>
        
        <ParallaxOrbs />
        <NewNavigation />
        
        <main>
          <article>
            <NewHero />
            <Suspense fallback={null}>
              <PainPoints />
              <Positioning />
              <SystemProcess />
              <Offers />
              <FoerderungHint />
              <OneOnOneSection />
              <WhyNotFree />
              <AboutAlex />
              <DoneForYouSection />
              <CaseStudies />
              <GoogleReviews />
              <FAQ />
              <FinalCTA />
            </Suspense>
          </article>
        </main>
        
        <Suspense fallback={null}>
          <Footer />
          <CookieBannerWrapper />
          <ExitIntentBanner />
        </Suspense>
    </motion.div>
  );
};

export default Index;
