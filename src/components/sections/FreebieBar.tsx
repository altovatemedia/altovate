import { Rocket, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const FreebieBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-magenta to-magenta-dark text-white py-3 px-4 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-magenta/20 via-magenta-light/30 to-magenta/20 animate-pulse"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 text-sm md:text-base font-medium">
            <Rocket className="w-5 h-5 animate-bounce" />
            <span>
              <strong>🚀 Gratis-Template:</strong> So wirst du als Top-Arbeitgeber wahrgenommen (und musst nie wieder Bewerber suchen).
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              className="ml-4 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-1 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => {
                // TODO: Open lead capture modal
                console.log('Open lead capture for template download');
              }}
            >
              Jetzt downloaden
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white hover:bg-white/20 p-1"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FreebieBar;