import { useState } from 'react';
import BookingModal from '@/components/BookingModal';

const ConsultingBridge = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState('');

  const handleBooking = (offer: string) => {
    setSelectedOffer(offer);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Marketing verstanden.{' '}
            <span className="gold-gradient-text">Jetzt strukturieren.</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Wenn Sie Ihr Marketing wirtschaftlich bewerten oder neu aufsetzen möchten, buchen Sie eine strukturierte Experten-Session.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => handleBooking('Strategie-Session 60 Minuten')}
              className="btn-primary px-6 py-3 rounded-lg font-bold text-base transition-all duration-300 hover:scale-105"
            >
              60 Minuten Session
            </button>
            <button
              onClick={() => handleBooking('Strategie-Session 90 Minuten')}
              className="px-6 py-3 rounded-lg font-bold text-base border border-border text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              90 Minuten Deep Dive
            </button>
            <button
              onClick={() => handleBooking('12-Wochen Consulting')}
              className="px-6 py-3 rounded-lg font-bold text-base border border-border text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              12 Wochen Consulting
            </button>
          </div>
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

export default ConsultingBridge;
