import { Rocket, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const FreebieBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gray-50 border-b border-gray-200 py-3 px-4 relative">
      <div className="container mx-auto relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 text-sm md:text-base">
            <Rocket className="w-5 h-5 text-primary" />
            <span className="text-gray-700">
              <strong className="text-gray-900">🚀 Gratis-Template:</strong> So wirst du als Top-Arbeitgeber wahrgenommen.
            </span>
            <Button 
              size="sm" 
              className="ml-4 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200 shadow-card hover:shadow-hover"
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
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-1"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FreebieBar;