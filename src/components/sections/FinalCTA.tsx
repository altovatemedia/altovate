import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import BookingModal from '@/components/BookingModal';
import Reveal from '@/components/animations/Reveal';

const FinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState('');

  const handleBooking = (offerType: string) => {
    setSelectedOffer(offerType);
    setIsModalOpen(true);
  };

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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-12">
              Wenn du Marketing willst,<br />
              <span className="text-primary">das zu deinem Unternehmen passt.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.3} scale>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-7 text-lg font-semibold w-full sm:w-auto sm:min-w-[280px]"
                onClick={() => handleBooking('Strategie-Session 60 Minuten')}
              >
                60-Min-Session anfragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-foreground hover:bg-primary/10 px-8 py-7 text-lg font-semibold w-full sm:w-auto sm:min-w-[280px]"
                onClick={() => handleBooking('Strategie-Session 90 Minuten')}
              >
                90-Min-Session anfragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="text-muted-foreground mt-8 text-sm">
              Beide Sessions sind bezahlt. Keine Erstgespräche, kein Pitch.
            </p>
          </Reveal>
        </div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} offerType={selectedOffer} />
    </section>
  );
};

export default FinalCTA;
