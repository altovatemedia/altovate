import { useState, useEffect } from 'react';
import VisibilityCheckModal from '@/components/visibility-check/VisibilityCheckModal';

const FreebieBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div 
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] max-w-2xl ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <button 
          onClick={() => setModalOpen(true)}
          className="group flex items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-medium bg-white dark:bg-card hover:scale-[1.01] transition-all duration-200 px-4 py-2.5 md:px-6 md:py-3 rounded-xl md:rounded-full shadow-[0_2px_12px_rgba(9,0,44,0.06)] border border-border/50 w-full"
        >
          <span className="text-base md:text-lg">🚀</span>
          <span className="text-text text-center leading-tight">
            <span className="hidden sm:inline">Gratis-Check: Wie sichtbar bist du als Arbeitgeber?</span>
            <span className="sm:hidden">Sichtbarkeits-Check</span>
          </span>
          <span className="text-primary font-semibold group-hover:text-primary/80 transition-colors whitespace-nowrap">
            <span className="hidden sm:inline">Jetzt prüfen →</span>
            <span className="sm:hidden">→</span>
          </span>
        </button>
      </div>
      
      <VisibilityCheckModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default FreebieBar;