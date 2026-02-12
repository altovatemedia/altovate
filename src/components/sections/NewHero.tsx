import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import alexanderPortrait from '@/assets/alexander-portrait.png';
import BookingModal from '@/components/BookingModal';
import TrustBar from '@/components/sections/TrustBar';

const NewHero = () => {
  const heroRef = useScrollAnimation({ threshold: 0.2 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bulletPoints = [
    "Kein Dauer-Posten – Systeme, die für dich arbeiten",
    "Kein Agentur-Blabla – direkt mit dem Experten",
    "Kein Abhängigkeitsmodell – du behältst die Kontrolle"
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
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight fade-in-up tracking-tight">
              Online-Marketing für Unternehmer,{' '}
              <span className="gold-gradient-text">die keine Zeit für Marketing haben.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light fade-in-up" style={{ animationDelay: '0.2s' }}>
              Altovate entwickelt Lead- & Content-Systeme, die planbare Anfragen generieren – ohne dass du selbst zum Influencer werden musst. Für mittelständische Unternehmen in Saarburg, Trier und der Region Saar-Mosel.
            </p>

            {/* Bullet Points */}
            <div className="space-y-3 fade-in-up" style={{ animationDelay: '0.3s' }}>
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/80 text-base">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 fade-in-up pt-2" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg"
                className="btn-hero px-8 py-6 text-base"
                onClick={handleBooking}
              >
                Strategie-Session anfragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base border-2 border-border hover:border-primary hover:bg-primary/5 text-foreground relative z-20"
                onClick={scrollToOffers}
              >
                Direkt Klarheit statt Erstgespräch
              </Button>
            </div>

            {/* Microcopy */}
            <p className="text-sm text-muted-foreground fade-in-up" style={{ animationDelay: '0.5s' }}>
              Bezahlte Session. Keine Verkaufsshow.
            </p>
          </div>

          {/* Right: Portrait */}
          <div className="hidden lg:flex justify-center items-end fade-in-up relative" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Gold glow behind portrait */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(245,200,66,0.25) 0%, rgba(232,160,32,0.15) 40%, transparent 70%)' }}></div>
              {/* Bottom fade gradient - taller and smoother */}
              <div className="absolute bottom-0 left-[-20%] right-[-20%] h-2/5 bg-gradient-to-t from-background via-background/70 to-transparent z-10"></div>
              <img 
                src={alexanderPortrait}
                alt="Alexander – Gründer von Altovate"
                className="w-full max-w-lg h-auto object-contain relative z-0"
              />
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <TrustBar />
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
