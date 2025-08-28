import { useState, useEffect } from 'react';

const FreebieBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !hasScrolled) {
        setHasScrolled(true);
        setTimeout(() => setIsVisible(false), 2000); // Fade out after 2 seconds of scrolling
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const handleClick = () => {
    // TODO: Open lead capture modal
    console.log('Open lead capture for template download');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-white relative z-50 transition-all duration-500">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center py-4">
          <button
            onClick={handleClick}
            className="group flex items-center gap-3 text-sm font-medium bg-bg-soft hover:scale-[1.01] transition-all duration-200 px-6 py-3 rounded-full shadow-[0_2px_12px_rgba(9,0,44,0.06)]"
          >
            <span className="text-lg">🚀</span>
            <span className="text-text">
              Gratis-Template: So wirst du als Top-Arbeitgeber wahrgenommen.
            </span>
            <span className="text-primary font-semibold group-hover:text-primary/80 transition-colors">
              Jetzt downloaden →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreebieBar;