import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import altovateIcon from '@/assets/altovate-icon.png';
import BookingModal from '@/components/BookingModal';
import TrustBar from '@/components/sections/TrustBar';

const NewHero = () => {
  const heroRef = useScrollAnimation({ threshold: 0.2 });
  const parallaxRef = useParallax();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bulletPoints = [
    "Kein Dauer-Posten",
    "Kein Agentur-Blabla",
    "Kein Abhängigkeitsmodell"
  ];

  const handleBooking = () => {
    setIsModalOpen(true);
  };

  const scrollToOffers = () => {
    const offersSection = document.getElementById('angebote');
    offersSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fullwidth Background Image with Overlay - Hidden in dark mode */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/7dcd22f3-021d-49b7-a3a7-c7cf9fba3d36.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover dark:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/80"></div>
      </div>

      {/* Subtle floating elements */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 parallax-bg pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary/3 rounded-full blur-2xl animate-glow-breathe"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-primary/8 rounded-full blur-lg animate-float-slow"></div>
        
        {/* Subtle logo icon decorations */}
        <img 
          src={altovateIcon} 
          alt="" 
          className="absolute top-1/4 right-10 w-32 h-32 opacity-[0.03] dark:opacity-[0.02] animate-float-slow pointer-events-none"
        />
        <img 
          src={altovateIcon} 
          alt="" 
          className="absolute bottom-1/4 left-10 w-40 h-40 opacity-[0.02] dark:opacity-[0.015] animate-float pointer-events-none rotate-12"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10 relative max-w-5xl py-32">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight fade-in-up tracking-tight">
            Online-Marketing für Unternehmer,<br />
            <span className="text-primary">die keine Zeit für Marketing haben.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light fade-in-up" style={{ animationDelay: '0.2s' }}>
            Altovate entwickelt Lead- & Content-Systeme, die planbare Anfragen generieren – ohne dass du selbst zum Influencer werden musst. Für mittelständische Unternehmen in Saarburg, Trier und der Region Saar-Mosel.
          </p>

          {/* Bullet Points */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 fade-in-up pt-4" style={{ animationDelay: '0.3s' }}>
            {bulletPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <X className="w-4 h-4 text-primary" />
                <span className="text-sm md:text-base font-medium">{point}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up pt-6" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg"
              className="btn-hero px-8 py-6 text-base"
              onClick={handleBooking}
            >
              Strategie-Session buchen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base border-2 hover:bg-primary/5"
              onClick={scrollToOffers}
            >
              Direkt Klarheit statt Erstgespräch
            </Button>
          </div>

          {/* Trust Bar */}
          <TrustBar />
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        offerType="Strategie-Session"
      />
    </section>
  );
};

export default NewHero;
