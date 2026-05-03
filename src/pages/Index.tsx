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
const ProcessPhases = lazy(() => import('@/components/sections/ProcessPhases'));
const Offers = lazy(() => import('@/components/sections/Offers'));
const FoerderungHint = lazy(() => import('@/components/sections/FoerderungHint'));
const OneOnOneSection = lazy(() => import('@/components/sections/OneOnOneSection'));
const AboutAlex = lazy(() => import('@/components/sections/AboutAlex'));
const DoneForYouSection = lazy(() => import('@/components/sections/DoneForYouSection'));
const TargetAudience = lazy(() => import('@/components/sections/TargetAudience'));
const CaseStudies = lazy(() => import('@/components/sections/CaseStudies'));
const TestimonialQuotes = lazy(() => import('@/components/sections/TestimonialQuotes'));
const FAQ = lazy(() => import('@/components/FAQ'));
const FinalCTA = lazy(() => import('@/components/sections/FinalCTA'));
const Footer = lazy(() => import('@/components/Footer'));
const CookieBannerWrapper = lazy(() => import('@/components/CookieBanner').then(m => ({ default: m.CookieBannerWrapper })));
const ExitIntentBanner = lazy(() => import('@/components/ExitIntentBanner'));

const faqItems = [
  {
    question: "Muss ich als Unternehmer selbst Content erstellen?",
    answer: "Wenn du Gesicht der Marke bist: ja, aber gezielt. Wir minimieren den Aufwand auf 1–2 Stunden pro Monat — und produzieren in dieser Zeit Content für 4 Wochen. Wenn du im Hintergrund bleiben willst: auch das geht, mit Mitarbeiter-Content, Kunden-Cases und Brand-Storytelling."
  },
  {
    question: "Arbeitet Altovate mit bezahlter Werbung?",
    answer: "Ja. Performance-Ads sind ein Pflichtbaustein, weil organische Reichweite allein nicht planbar ist. Budget ab 500 € / Monat aufwärts, je nach Markt und Ziel."
  },
  {
    question: "Gibt es langfristige Vertragsbindungen?",
    answer: "Nein. Strategische Begleitung läuft in 12- oder 24-Wochen-Blöcken. Done-for-You monatlich kündbar nach Mindestlaufzeit von 3 Monaten. Du behältst die Kontrolle."
  },
  {
    question: "Für wen ist Altovate nicht geeignet?",
    answer: "Für Unternehmer, die schnelle Tricks suchen, viral gehen wollen, oder erwarten dass Marketing in 4 Wochen Anfragen liefert. Systeme brauchen 90 Tage, bis sie greifen. Wenn du das nicht aushältst — nicht Altovate."
  },
  {
    question: "Warum gibt es keine kostenlosen Erstgespräche?",
    answer: "Eine Strategie-Session ist eine Beratungsleistung, kein Verkaufsgespräch. In 60 oder 90 Minuten bekommst du eine echte Analyse mit konkreten Empfehlungen. Bezahlt heißt: beide Seiten kommen vorbereitet, beide Seiten holen etwas raus."
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
          <title>Altovate | Marketing-Systeme für Mittelständler</title>
          <meta name="description" content="Wir bauen Marketing-Systeme, die Anfragen liefern. Strategie, Content & Performance-Ads als ein System – für Mittelständler in Saar-Mosel, Trier & Luxemburg." />
          <link rel="canonical" href="https://altovate.de/" />
          <meta property="og:title" content="Altovate | Marketing-Systeme für Mittelständler" />
          <meta property="og:description" content="Wir bauen Marketing-Systeme, die Anfragen liefern. Strategie, Content & Performance-Ads als ein System." />
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
              <ProcessPhases />
              <Offers />
              <FoerderungHint />
              <OneOnOneSection />
              <DoneForYouSection />
              <CaseStudies />
              <AboutAlex />
              <TestimonialQuotes />
              <TargetAudience />
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
