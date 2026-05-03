import { useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Reveal from '@/components/animations/Reveal';
import CalComModal from '@/components/CalComModal';
import BookingModal from '@/components/BookingModal';

const FinalCTA = () => {
  const [isCalOpen, setIsCalOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Pulsating glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal blur duration={0.9}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Bereit für planbare <span className="text-primary">Anfragen?</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
              Wir prüfen dein aktuelles Marketing und sagen dir, wo das größte Wachstumspotenzial liegt. Jede Anfrage geht direkt an mich. Wenn ich nicht der Richtige bin, sage ich das.
            </p>
          </Reveal>

          <Reveal delay={0.3} scale>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-7 text-lg font-semibold w-full sm:w-auto sm:min-w-[320px]"
                onClick={() => setIsBookingOpen(true)}
              >
                Kostenlose Analyse anfordern
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-7 text-lg font-semibold border-2 border-border hover:border-primary hover:bg-primary/5 text-foreground w-full sm:w-auto"
                onClick={() => setIsCalOpen(true)}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Strategie-Session buchen
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="text-muted-foreground mt-8 text-sm">
              Unverbindlich. Antwort in 24 Stunden.
            </p>
          </Reveal>
        </div>
      </div>
      <CalComModal isOpen={isCalOpen} onClose={() => setIsCalOpen(false)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} offerType="Marketing Diagnose 60 Minuten" />
    </section>
  );
};

export default FinalCTA;

