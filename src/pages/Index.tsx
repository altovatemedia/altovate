import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FreebieBar from '@/components/sections/FreebieBar';
import NewNavigation from '@/components/sections/NewNavigation';
import NewHero from '@/components/sections/NewHero';
import PainPoints from '@/components/sections/PainPoints';
import Positioning from '@/components/sections/Positioning';
import SystemProcess from '@/components/sections/SystemProcess';
import Offers from '@/components/sections/Offers';
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

const Index = () => {
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

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-background"
      >
        {/* Scroll Progress Indicator */}
        <div className="scroll-progress" style={{ width: '0%' }}></div>
      
        <FreebieBar />
        <NewNavigation />
        <NewHero />
        <PainPoints />
        <Positioning />
        <SystemProcess />
        <Offers />
        <OneOnOneSection />
        <WhyNotFree />
        <AboutAlex />
        <DoneForYouSection />
        <CaseStudies />
        <GoogleReviews />
        <FAQ />
        <FinalCTA />
        <Footer />
        <ChatBot />
        <CookieBannerWrapper />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
