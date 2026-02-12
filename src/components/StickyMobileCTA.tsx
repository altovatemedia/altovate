import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookingModal from '@/components/BookingModal';

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-card/95 backdrop-blur-sm border-t border-border shadow-lg">
        <p className="text-xs text-muted-foreground text-center mb-1.5">Ab 390 € – Antwort in 24h</p>
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-5 text-base font-semibold"
          onClick={() => setIsModalOpen(true)}
        >
          Strategie-Session anfragen
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        offerType="Strategie-Session"
      />
    </>
  );
};

export default StickyMobileCTA;
