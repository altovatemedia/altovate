import { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import VisibilityCheckModal from '@/components/visibility-check/VisibilityCheckModal';
import altovateIcon from '@/assets/altovate-icon.png';

const NewHero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const heroRef = useScrollAnimation({ threshold: 0.2 });
  const parallaxRef = useParallax();

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

      {/* Content with scroll animations */}
      <div className="container mx-auto px-6 text-center z-10 relative max-w-6xl py-32">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Headline with clear hierarchy */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight fade-in-up tracking-tight">
            Online-Marketing, das planbar<br />
            <span className="text-primary">Leads generiert.</span>
          </h1>

          {/* Subheadline - clear and explanatory */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light fade-in-up" style={{ animationDelay: '0.2s' }}>
            Strategie, Systeme & Sparring statt Content-Chaos. Ich helfe Unternehmen dabei, Social Media als funktionierendes Marketing-System aufzubauen – mit klarer Struktur, Freebies, Automationen und Content, der verkauft.
          </p>

          {/* CTA Buttons - differentiated sizing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up pt-4" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg"
              className="btn-hero px-8 py-6 text-base"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Jetzt Klarheit gewinnen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base border-2 hover:bg-primary/5"
              onClick={() => setModalOpen(true)}
            >
              <Play className="mr-2 w-5 h-5" />
              Kostenloser Sichtbarkeits-Check
            </Button>
          </div>
        </div>
      </div>
      
      <VisibilityCheckModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default NewHero;
