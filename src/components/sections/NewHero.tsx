import { useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import alexanderPortrait from '@/assets/alexander-portrait.png';
import TrustBar from '@/components/sections/TrustBar';
import CalComModal from '@/components/CalComModal';
import BookingModal from '@/components/BookingModal';

const NewHero = () => {
  const [isCalOpen, setIsCalOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 600], [0, 80]);

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
              Wir bauen Marketing-Systeme,{' '}
              <span className="gold-gradient-text">die Anfragen liefern.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light"
            >
              Für Mittelständler in Saar-Mosel, Trier und Luxemburg. Strategie, Content und Performance-Ads als ein System. Qualifizierte Anfragen statt Reichweiten-Reports.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex flex-col sm:flex-row items-start gap-4 pt-2 relative z-30"
            >
              <Button
                size="lg"
                className="btn-hero px-8 py-6 text-base"
                onClick={() => setIsBookingOpen(true)}
              >
                Kostenlose Analyse anfordern
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base border-2 border-border hover:border-primary hover:bg-primary/5 text-foreground"
                onClick={() => setIsCalOpen(true)}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Gespräch buchen
              </Button>
            </motion.div>

            {/* Microcopy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-sm text-muted-foreground relative z-30"
            >
              Unverbindlich. Antwort in 24 Stunden.
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
              <img
                src={alexanderPortrait}
                alt="Alexander Buchmann – Gründer von Altovate"
                className="w-full max-w-lg h-auto object-contain relative z-0"
                width={512}
                height={640}
                style={{
                  maskImage: 'radial-gradient(ellipse 80% 85% at 50% 45%, black 35%, transparent 65%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 80% 85% at 50% 45%, black 35%, transparent 65%)',
                }}
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

      <CalComModal isOpen={isCalOpen} onClose={() => setIsCalOpen(false)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} offerType="Marketing Diagnose 60 Minuten" />
    </section>
  );
};

export default NewHero;
