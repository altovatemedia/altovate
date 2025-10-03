import { useState } from 'react';
import { ArrowRight, Play, Monitor, TrendingUp, Camera, Settings, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import VisibilityCheckModal from '@/components/visibility-check/VisibilityCheckModal';

const NewHero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const heroRef = useScrollAnimation({ threshold: 0.2 });
  const parallaxRef = useParallax();

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20 subtle-grid"
    >
      {/* Parallax background elements */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 parallax-bg"
      >
        {/* Enhanced floating particles with better positioning */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary/3 rounded-full blur-2xl animate-glow-breathe"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-primary/8 rounded-full blur-lg animate-float-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-primary/4 rounded-full blur-xl animate-float-drift"></div>
      </div>

      {/* Content with scroll animations */}
      <div className="container mx-auto px-6 text-center z-10 relative max-w-content">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline with fade-in */}
          <h1 className="finom-h1 mb-8 fade-in-up">
            Mehr Kunden. 
            <span className="block text-primary mt-4">Mehr Bewerbungen.</span>
            <span className="block">
              Mehr Umsatz
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-medium block mt-2">– in 30 Tagen.</span>
          </h1>

          {/* Subheadline with delayed fade-in */}
          <p className="finom-lead mb-16 max-w-4xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-primary font-semibold">Die visibility engine:</span> Dein komplettes Marketing-System für 5.000 € –<br />
            Website, Content, Ads & Automatisierung.
          </p>

          {/* CTA Buttons with staggered animations */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="btn-hero text-lg px-8 py-4"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Jetzt Erstgespräch sichern
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
            
            <Button 
              className="btn-secondary text-lg px-8 py-4"
              onClick={() => setModalOpen(true)}
            >
              <Play className="mr-3 w-5 h-5" />
              0€ Sichtbarkeits-Check
            </Button>
          </div>

          {/* Enhanced mockups preview with module animations */}
          <div className="relative fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="finom-card max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                
                {/* Premium Website - Enhanced Module Box */}
                <div className="module-box glass-cta rounded-xl p-8 hover-float">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6 group-hover:scale-110 transition-all duration-500">
                      <div className="relative w-16 h-16 md:w-20 md:h-20">
                        <Monitor 
                          size={64} 
                          className="text-[#EA3B5F] stroke-[1.5] drop-shadow-lg" 
                        />
                        <TrendingUp 
                          size={24} 
                          className="absolute -top-2 -right-2 text-[#09002C] stroke-[2] animate-bounce" 
                        />
                      </div>
                    </div>
                    <div className="text-[#09002C] font-bold text-lg mb-2">Premium Website</div>
                    <div className="text-[#09002C]/70 text-sm">Conversion-optimiert</div>
                  </div>
                </div>
                
                {/* Content Engine - Enhanced Module Box */}
                <div className="module-box glass-cta rounded-xl p-8 hover-float">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6 group-hover:scale-110 transition-all duration-500">
                      <Camera 
                        size={64} 
                        className="text-[#EA3B5F] stroke-[1.5] drop-shadow-lg md:w-20 md:h-20" 
                      />
                    </div>
                    <div className="text-[#09002C] font-bold text-lg mb-2">Content Engine</div>
                    <div className="text-[#09002C]/70 text-sm">Videos & Fotos</div>
                  </div>
                </div>
                
                {/* Smart Automation - Enhanced Module Box */}
                <div className="module-box glass-cta rounded-xl p-8 hover-float">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6 group-hover:scale-110 transition-all duration-500">
                      <div className="relative w-16 h-16 md:w-20 md:h-20">
                        <Settings 
                          size={64} 
                          className="text-[#EA3B5F] stroke-[1.5] drop-shadow-lg" 
                        />
                        <Zap 
                          size={20} 
                          className="absolute -top-1 -right-1 text-[#09002C] stroke-[2] fill-[#09002C] animate-pulse" 
                        />
                      </div>
                    </div>
                    <div className="text-[#09002C] font-bold text-lg mb-2">Smart Automation</div>
                    <div className="text-[#09002C]/70 text-sm">KI-gestützt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <VisibilityCheckModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default NewHero;