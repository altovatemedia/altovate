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
    <div className="bg-white border-b border-border relative z-50 transition-all duration-500">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center py-3">
          <button
            onClick={handleClick}
            className="group flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="text-lg">🚀</span>
            <span>
              <strong className="text-primary">Gratis-Template:</strong> So wirst du als Top-Arbeitgeber wahrgenommen.
            </span>
            <span className="text-primary font-bold group-hover:translate-x-1 transition-transform duration-300">
              Jetzt downloaden →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreebieBar;