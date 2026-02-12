import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';

import NewNavigation from '@/components/sections/NewNavigation';
import NewHero from '@/components/sections/NewHero';
import SectionDivider from '@/components/sections/SectionDivider';
import PainPoints from '@/components/sections/PainPoints';
import Positioning from '@/components/sections/Positioning';
import SystemProcess from '@/components/sections/SystemProcess';
import Offers from '@/components/sections/Offers';
import FoerderungHint from '@/components/sections/FoerderungHint';
import OneOnOneSection from '@/components/sections/OneOnOneSection';
import WhyNotFree from '@/components/sections/WhyNotFree';
import AboutAlex from '@/components/sections/AboutAlex';
import DoneForYouSection from '@/components/sections/DoneForYouSection';
import CaseStudies from '@/components/sections/CaseStudies';
import GoogleReviews from '@/components/sections/GoogleReviews';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { CookieBannerWrapper } from '@/components/CookieBanner';
import SEOSchema from '@/components/SEOSchema';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import ExitIntentBanner from '@/components/ExitIntentBanner';

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
    <AnimatePresence mode="wait">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
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
      
        
        <NewNavigation />
        
        <main>
          <article>
            <NewHero />
            <SectionDivider />
            <PainPoints />
            <SectionDivider />
            <Positioning />
            <SectionDivider />
            <SystemProcess />
            <SectionDivider />
            <Offers />
            <SectionDivider />
            <FoerderungHint />
            <SectionDivider />
            <OneOnOneSection />
            <SectionDivider />
            <WhyNotFree />
            <SectionDivider />
            <AboutAlex />
            <SectionDivider />
            <DoneForYouSection />
            <SectionDivider />
            <CaseStudies />
            <SectionDivider />
            <GoogleReviews />
            <SectionDivider />
            <FAQ />
            <SectionDivider />
            <FinalCTA />
          </article>
        </main>
        
        <Footer />
        <ChatBot />
        <StickyMobileCTA />
        <CookieBannerWrapper />
        <ExitIntentBanner />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
