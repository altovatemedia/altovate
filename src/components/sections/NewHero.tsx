import { ArrowRight, Play, Monitor, TrendingUp, Camera, Settings, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20 subtle-grid">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        {/* Floating subtle particles */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary/3 rounded-full blur-2xl animate-glow-breathe"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-primary/8 rounded-full blur-lg animate-float-slow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10 relative max-w-content">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="finom-h1 mb-8">
            Mehr Kunden. 
            <span className="block text-primary mt-4">Mehr Bewerbungen.</span>
            <span className="block">
              Mehr Umsatz
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-medium block mt-2">– in 30 Tagen.</span>
          </h1>

          {/* Subheadline */}
          <p className="finom-lead mb-16 max-w-4xl mx-auto">
            <span className="text-primary font-semibold">Die visibility engine:</span> Dein komplettes Marketing-System für 5.000 € –<br />
            Website, Content, Ads & Automatisierung.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
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
              onClick={() => {
                const markenCheck = document.getElementById('marken-check');
                markenCheck?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Play className="mr-3 w-5 h-5" />
              Kostenlosen Marken-Check starten
            </Button>
          </div>

          {/* Clean mockups preview */}
          <div className="relative">
            <div className="finom-card max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                
                {/* Premium Website */}
                <div className="bg-[#F3F2F7] rounded-xl p-8 hover:shadow-[0_0_40px_rgba(234,59,95,0.2)] 
                             transition-all duration-300 group animate-fade-in-up hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6 group-hover:scale-105 transition-transform duration-300">
                      <div className="relative w-16 h-16 md:w-20 md:h-20">
                        <Monitor 
                          size={64} 
                          className="text-[#EA3B5F] stroke-[1.5] group-hover:drop-shadow-[0_0_15px_rgba(234,59,95,0.5)]
                                   transition-all duration-300" 
                        />
                        <TrendingUp 
                          size={24} 
                          className="absolute -top-2 -right-2 text-[#09002C] stroke-[2] 
                                   group-hover:animate-bounce" 
                        />
                      </div>
                    </div>
                    <div className="text-[#09002C] font-bold text-lg mb-2">Premium Website</div>
                    <div className="text-[#09002C]/70 text-sm">Conversion-optimiert</div>
                  </div>
                </div>
                
                {/* Content Engine */}
                <div className="bg-[#F3F2F7] rounded-xl p-8 hover:shadow-[0_0_40px_rgba(234,59,95,0.2)] 
                             transition-all duration-300 group animate-fade-in-up hover:-translate-y-1"
                     style={{ animationDelay: '0.1s' }}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Camera 
                        size={64} 
                        className="text-[#EA3B5F] stroke-[1.5] group-hover:drop-shadow-[0_0_15px_rgba(234,59,95,0.5)]
                                 transition-all duration-300 md:w-20 md:h-20" 
                      />
                    </div>
                    <div className="text-[#09002C] font-bold text-lg mb-2">Content Engine</div>
                    <div className="text-[#09002C]/70 text-sm">Videos & Fotos</div>
                  </div>
                </div>
                
                {/* Smart Automation */}
                <div className="bg-[#F3F2F7] rounded-xl p-8 hover:shadow-[0_0_40px_rgba(234,59,95,0.2)] 
                             transition-all duration-300 group animate-fade-in-up hover:-translate-y-1"
                     style={{ animationDelay: '0.2s' }}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6 group-hover:scale-105 transition-transform duration-300">
                      <div className="relative w-16 h-16 md:w-20 md:h-20">
                        <Settings 
                          size={64} 
                          className="text-[#EA3B5F] stroke-[1.5] group-hover:drop-shadow-[0_0_15px_rgba(234,59,95,0.5)]
                                   transition-all duration-300 group-hover:animate-spin-slow" 
                        />
                        <Zap 
                          size={20} 
                          className="absolute -top-1 -right-1 text-[#09002C] stroke-[2] fill-[#09002C]
                                   group-hover:animate-pulse" 
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
    </section>
  );
};

export default NewHero;