import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookingModal from '@/components/BookingModal';

const FinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState('');

  const handleBooking = (offerType: string) => {
    setSelectedOffer(offerType);
    setIsModalOpen(true);
  };

  return (
    <section id="contact" className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-12">
            Wenn du Marketing willst,<br />
            <span className="text-primary">das zu deinem Unternehmen passt.</span>
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-7 text-lg font-semibold min-w-[280px]"
              onClick={() => handleBooking('Strategie-Session 60 Minuten')}
            >
              60-Min-Session anfragen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-7 text-lg font-semibold min-w-[280px]"
              onClick={() => handleBooking('Strategie-Session 90 Minuten')}
            >
              90-Min-Session anfragen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Subtext */}
          <p className="text-muted-foreground mt-8 text-sm">
            Beide Sessions sind bezahlt. Keine Erstgespräche, kein Pitch.
          </p>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        offerType={selectedOffer}
      />
    </section>
  );
};

export default FinalCTA;
