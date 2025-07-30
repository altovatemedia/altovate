import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[1px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-neon rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 border-2 border-neon rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/30 rounded-full text-sm text-muted-foreground mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-neon rounded-full mr-2 animate-pulse-neon"></span>
            Boutique Marketing Agentur für mittelständische Unternehmen
          </div>

          {/* Main Headline */}
          <h1 className="cinematic-heading mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Weniger <span className="neon-text">bla bla</span>.<br />
            Mehr <span className="text-accent">Wirkung</span>.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Wir verwandeln solide Unternehmen in moderne Marken – 
            <br className="hidden md:block" />
            <span className="text-foreground font-medium">sichtbar, automatisiert und begehrenswert</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button className="btn-hero group">
              Marken-Check starten
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="group border-border/50 hover:border-accent">
              <Play className="mr-2 w-4 h-4" />
              Wie wir arbeiten
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-sm text-muted-foreground mb-6">Vertrauen von über 50+ Unternehmen</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-lg font-semibold text-muted-foreground">UNTERNEHMEN A</div>
              <div className="text-lg font-semibold text-muted-foreground">BRAND B</div>
              <div className="text-lg font-semibold text-muted-foreground">FIRMA C</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full p-1">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;