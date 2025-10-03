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
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <button 
          onClick={() => setModalOpen(true)}
          className="group flex items-center gap-3 text-sm font-medium bg-white hover:scale-[1.01] transition-all duration-200 px-6 py-3 rounded-full shadow-[0_2px_12px_rgba(9,0,44,0.06)] border border-border/50"
        >
          <span className="text-lg">🚀</span>
          <span className="text-text">
            Gratis-Check: Wie sichtbar bist du als Arbeitgeber?
          </span>
          <span className="text-primary font-semibold group-hover:text-primary/80 transition-colors">
            Jetzt prüfen →
          </span>
        </button>
      </div>
      
      <VisibilityCheckModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default FreebieBar;