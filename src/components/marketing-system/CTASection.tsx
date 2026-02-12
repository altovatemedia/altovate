import { useState } from 'react';
import BookingModal from '@/components/BookingModal';

const CTASection = () => {
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
          <h2 className="finom-h2 mb-4">
            Marketing verstanden.{' '}
            <span className="text-[#ff1c5c]">Jetzt umsetzen.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Keine aggressive Werbung. Nur der logische nächste Schritt.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => handleBooking('Strategie-Session 60 Minuten')}
              className="px-6 py-3 rounded-lg font-bold text-base transition-all duration-300 hover:scale-105"
              style={{ background: '#ff1c5c', color: '#fff' }}
            >
              60 Minuten Experten-Session
            </button>
            <button
              onClick={() => handleBooking('Strategie-Session 90 Minuten')}
              className="px-6 py-3 rounded-lg font-bold text-base border-2 border-[#ff1c5c] text-foreground hover:bg-[#ff1c5c]/10 transition-all duration-300 hover:scale-105"
            >
              90 Minuten Deep Dive
            </button>
            <button
              onClick={() => handleBooking('12-Wochen Consulting')}
              className="px-6 py-3 rounded-lg font-bold text-base border-2 border-[#ff1c5c] text-foreground hover:bg-[#ff1c5c]/10 transition-all duration-300 hover:scale-105"
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

export default CTASection;
