import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import alexanderPortrait from '@/assets/alexander-portrait.png';
import BookingModal from '@/components/BookingModal';
import TrustBar from '@/components/sections/TrustBar';

const NewHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 600], [0, 80]);

  const bulletPoints = [
    "Kein Dauer-Posten – Systeme, die für dich arbeiten",
    "Kein Agentur-Blabla – direkt mit dem Experten",
    "Kein Abhängigkeitsmodell – du behältst die Kontrolle"
  ];

  const handleBooking = () => {
    setIsModalOpen(true);
  };

  const scrollToOffers = () => {
    const offersSection = document.getElementById('angebote');
    offersSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 z-10 relative py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              Online-Marketing für Unternehmer, die{' '}
              <span className="gold-gradient-text">keine Zeit für Marketing</span> haben.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light"
            >
              Altovate entwickelt Lead- & Content-Systeme, die planbare Anfragen generieren – ohne dass du selbst zum Influencer werden musst. Für mittelständische Unternehmen in Saarburg, Trier und der Region Saar-Mosel.
            </motion.p>

            {/* Bullet Points */}
            <div className="space-y-3">
              {bulletPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 + index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/80 text-base">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex flex-col sm:flex-row items-start gap-4 pt-2 relative z-30"
            >
              <Button 
                size="lg"
                className="btn-hero px-8 py-6 text-base"
                onClick={handleBooking}
              >
                Strategie-Session anfragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base border-2 border-border hover:border-primary hover:bg-primary/5 text-foreground"
                onClick={scrollToOffers}
              >
                Direkt Klarheit statt Erstgespräch
              </Button>
            </motion.div>

            {/* Microcopy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-sm text-muted-foreground relative z-30"
            >
              Bezahlte Session. Keine Verkaufsshow.
            </motion.p>
          </div>

          {/* Right: Portrait with parallax */}
          <motion.div
            style={{ y: portraitY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="hidden lg:flex justify-center items-end relative"
          >
            <div className="relative">
              <div className="absolute inset-[-15%] z-10 pointer-events-none" style={{
                background: `radial-gradient(ellipse 75% 85% at 50% 50%, transparent 30%, hsl(var(--background)) 65%)`
              }}></div>
              <img 
                src={alexanderPortrait}
                alt="Alexander – Gründer von Altovate"
                className="w-full max-w-lg h-auto object-contain relative z-0"
              />
            </div>
          </motion.div>
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <TrustBar />
        </motion.div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        offerType="Strategie-Session"
      />
    </section>
  );
};

export default NewHero;
