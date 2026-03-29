import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CalComModal from '@/components/CalComModal';

const StickyMobileCTA = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hiddenRoutes = ['/circle-marketing-check'];
  if (!isVisible || hiddenRoutes.includes(location.pathname)) return null;

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-card/95 backdrop-blur-sm border-t border-border shadow-lg">
        <div className="flex gap-2">
          <Button
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-5 text-sm font-semibold"
            onClick={() => {
              const el = document.getElementById('marketing-analyse');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Marketing Analyse
            <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            className="flex-1 py-5 text-sm font-semibold border-border"
            onClick={() => setIsModalOpen(true)}
          >
            <Calendar className="mr-1 w-4 h-4" />
            Gespräch buchen
          </Button>
        </div>
      </div>

      <CalComModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default StickyMobileCTA;
