import { useState } from 'react';
import { ArrowRight, Play, Rocket, Target, Handshake } from 'lucide-react';
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

          {/* Benefits Section */}
          <div className="fade-in-up pt-12" style={{ animationDelay: '0.6s' }}>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                
                {/* Benefit 1: Schnell sichtbar */}
                <div className="text-center md:text-left space-y-4">
                  <div className="flex justify-center md:justify-start">
                    <Rocket className="w-12 h-12 text-[#ff1c5c]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Schnell sichtbar
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Online sichtbar in nur 30 Tagen – mit klarer Struktur und messbaren Ergebnissen.
                  </p>
                </div>

                {/* Benefit 2: Messbar wirksam */}
                <div className="text-center md:text-left space-y-4">
                  <div className="flex justify-center md:justify-start">
                    <Target className="w-12 h-12 text-[#ff1c5c]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Messbar wirksam
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Marketing, das auf Zahlen basiert. Keine Bauchentscheidungen, sondern echte Performance.
                  </p>
                </div>

                {/* Benefit 3: Ehrlich & direkt */}
                <div className="text-center md:text-left space-y-4">
                  <div className="flex justify-center md:justify-start">
                    <Handshake className="w-12 h-12 text-[#ff1c5c]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Ehrlich & direkt
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Wir beraten ohne Bullshit. Wenn eine Idee keinen Sinn macht, sagen wir es dir.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center mt-12">
                <Button 
                  variant="ghost"
                  className="text-primary hover:text-primary hover:bg-primary/5 group"
                  onClick={() => {
                    const servicesSection = Array.from(document.querySelectorAll('section')).find(
                      section => section.textContent?.includes('Was wir für dich tun')
                    );
                    servicesSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Mehr erfahren
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
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