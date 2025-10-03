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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fullwidth Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/7dcd22f3-021d-49b7-a3a7-c7cf9fba3d36.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
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
      </div>

      {/* Content with scroll animations */}
      <div className="container mx-auto px-6 text-center z-10 relative max-w-6xl py-32">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Headline with clear hierarchy */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight fade-in-up tracking-tight">
            Mehr Sichtbarkeit.<br />
            <span className="text-primary">Mehr Kunden.</span><br />
            Mehr Erfolg.
          </h1>

          {/* Subheadline - clear and explanatory */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light fade-in-up" style={{ animationDelay: '0.2s' }}>
            Wir entwickeln Marketingstrategien, die funktionieren – visuell stark und technisch durchdacht.
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
              Beratungstermin vereinbaren
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