import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FreebieBar from '@/components/sections/FreebieBar';
import NewNavigation from '@/components/sections/NewNavigation';
import NewHero from '@/components/sections/NewHero';
import PainPoints from '@/components/sections/PainPoints';
import SignatureOffer from '@/components/sections/SignatureOffer';
import CaseStudies from '@/components/sections/CaseStudies';
import GoogleReviews from '@/components/sections/GoogleReviews';
import PricingToggle from '@/components/sections/PricingToggle';
import Solution from '@/components/Solution';
import ServicesVisual from '@/components/sections/ServicesVisual';
import AboutFounder from '@/components/sections/AboutFounder';
import Timeline from '@/components/Timeline';
import NotFor from '@/components/NotFor';
import FAQ from '@/components/FAQ';
import ContactFunnel from '@/components/sections/ContactFunnel';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

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
        <SignatureOffer />
        <ServicesVisual />
        <AboutFounder />
        <PricingToggle />
        <Solution />
        <CaseStudies />
        <GoogleReviews />
        <Timeline />
        <NotFor />
        <FAQ />
        <ContactFunnel />
        <Footer />
        <ChatBot />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
