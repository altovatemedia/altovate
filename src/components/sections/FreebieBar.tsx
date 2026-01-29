import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import BookingModal from '@/components/BookingModal';

const FreebieBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBooking = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div 
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] max-w-2xl ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <button 
          onClick={handleBooking}
          className="group flex items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-medium bg-white dark:bg-card hover:scale-[1.01] transition-all duration-200 px-4 py-2.5 md:px-6 md:py-3 rounded-xl md:rounded-full shadow-[0_2px_12px_rgba(9,0,44,0.06)] border border-border/50 w-full"
        >
          <span className="text-text text-center leading-tight">
            <span className="hidden sm:inline">Strategie-Session buchen: Klarheit statt Erstgespräch</span>
            <span className="sm:hidden">Strategie-Session</span>
          </span>
          <span className="text-primary font-semibold group-hover:text-primary/80 transition-colors whitespace-nowrap flex items-center gap-1">
            <span className="hidden sm:inline">Termin wählen</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </button>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        offerType="Strategie-Session"
      />
    </>
  );
};

export default FreebieBar;