import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import FreebieBar from '@/components/sections/FreebieBar';
import NewNavigation from '@/components/sections/NewNavigation';
import NewHero from '@/components/sections/NewHero';
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

const faqItems = [
  {
    question: "Muss ich selbst Content machen?",
    answer: "Nein. Aber du musst verstanden werden. Ich helfe dir, Inhalte zu entwickeln, die deine Zielgruppe erreichen – unabhängig davon, ob du sie selbst erstellst oder wir das gemeinsam lösen."
  },
  {
    question: "Arbeitest du mit Ads?",
    answer: "Ja, wenn sie Sinn machen. Werbeanzeigen sind ein Werkzeug, kein Selbstzweck. Wir setzen sie ein, wenn sie dein Ziel schneller erreichen als organische Maßnahmen."
  },
  {
    question: "Langfristige Verträge?",
    answer: "Nein. Projekte und klare Vereinbarungen. Du buchst konkrete Leistungen mit definierten Ergebnissen. Keine Knebelverträge, keine versteckten Laufzeiten."
  },
  {
    question: "Für wen ist das nichts?",
    answer: "Für alle, die schnelle Likes wollen. Wenn es dir um Reichweite ohne Substanz geht, bin ich der falsche Ansprechpartner. Ich arbeite mit Unternehmern, die echte Ergebnisse suchen."
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
          <title>altovate | Online-Marketing für Unternehmer – Saarburg & Region</title>
          <meta name="description" content="Lead- & Content-Systeme für mittelständische Unternehmen in Saarburg, Trier & Region. Planbare Anfragen statt Reichweiten-Blabla. Strategie-Session ab 390 €." />
          <link rel="canonical" href="https://altovate.de/" />
          <meta property="og:title" content="altovate | Online-Marketing für Unternehmer – Saarburg & Region" />
          <meta property="og:description" content="Lead- & Content-Systeme für mittelständische Unternehmen. Planbare Anfragen statt Reichweiten-Blabla." />
          <meta property="og:url" content="https://altovate.de/" />
          <meta property="og:type" content="website" />
        </Helmet>
        <SEOSchema page="home" faqItems={faqItems} />

        <div className="scroll-progress" style={{ width: '0%' }}></div>
      
        <FreebieBar />
        <NewNavigation />
        
        <main>
          <article>
            <NewHero />
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
          </article>
        </main>
        
        <Footer />
        <ChatBot />
        <CookieBannerWrapper />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
