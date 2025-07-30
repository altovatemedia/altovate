import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/10 overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 opacity-80">
        {/* Large floating particles with movement */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full opacity-60 animate-float-slow" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-primary/60 rounded-full opacity-80 animate-float-drift" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-primary/80 rounded-full opacity-70 animate-float-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-4 h-4 bg-primary/30 rounded-full opacity-90 animate-float-drift" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-60 left-1/2 w-2 h-2 bg-primary/50 rounded-full opacity-60 animate-float-slow" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-primary/70 rounded-full opacity-100 animate-float-drift" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-primary/40 rounded-full opacity-70 animate-float-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-40 left-1/2 w-1 h-1 bg-primary rounded-full opacity-80 animate-float-drift" style={{ animationDelay: '1.2s' }}></div>
        
        {/* Additional particles for more density with movement */}
        <div className="absolute top-80 right-40 w-2 h-2 bg-primary/70 rounded-full opacity-50 animate-float-slow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-16 left-1/3 w-1 h-1 bg-primary/60 rounded-full opacity-90 animate-float-drift" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute bottom-80 right-16 w-1.5 h-1.5 bg-primary/80 rounded-full opacity-60 animate-float-slow" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute top-36 right-60 w-1 h-1 bg-primary rounded-full opacity-70 animate-float-drift" style={{ animationDelay: '3.2s' }}></div>
        <div className="absolute bottom-32 left-40 w-2.5 h-2.5 bg-primary/50 rounded-full opacity-80 animate-float-slow" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-72 left-16 w-1 h-1 bg-primary/90 rounded-full opacity-60 animate-float-drift" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-48 right-80 w-2 h-2 bg-primary/40 rounded-full opacity-90 animate-float-slow" style={{ animationDelay: '1.7s' }}></div>
        <div className="absolute top-28 left-80 w-1.5 h-1.5 bg-primary/75 rounded-full opacity-50 animate-float-drift" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Dynamic magenta glow areas */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-primary/40 to-transparent rounded-full blur-3xl animate-glow-breathe" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-primary/35 to-transparent rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-primary/25 to-transparent rounded-full blur-3xl animate-glow-breathe" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-primary/30 to-transparent rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-52 h-52 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl animate-glow-breathe" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 animate-fade-in-up">
            Niemand bewirbt sich? 
            <span className="text-primary block">Kein Wunder.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Deine Website ist outdated. Deine Anzeige klingt nach Amtsblatt.<br />
            <span className="text-foreground font-bold">Auf Social Media herrscht Totenstille? Dann wird auch keiner anklopfen.</span>
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button className="btn-hero group text-xl">
              Jetzt sichtbar werden
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Customer Logos */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm text-muted-foreground/60 mb-8 font-medium">
              Marken, die auf uns setzen
            </p>
            
            <div className="overflow-hidden">
              <div className="flex items-center justify-center space-x-12 animate-[slide-in-right_20s_linear_infinite]">
                {/* Logo placeholders - white transparent style */}
                <div className="text-white/30 font-bold text-lg whitespace-nowrap">TECHCORP</div>
                <div className="text-white/30 font-bold text-lg whitespace-nowrap">INNOVATE AG</div>
                <div className="text-white/30 font-bold text-lg whitespace-nowrap">DIGITAL SOLUTIONS</div>
                <div className="text-white/30 font-bold text-lg whitespace-nowrap">FUTURE WORKS</div>
                <div className="text-white/30 font-bold text-lg whitespace-nowrap">SMART BUSINESS</div>
                <div className="text-white/30 font-bold text-lg whitespace-nowrap">TECHCORP</div>
                <div className="text-white/30 font-bold text-lg whitespace-nowrap">INNOVATE AG</div>
                <div className="text-white/30 font-bold text-lg whitespace-nowrap">DIGITAL SOLUTIONS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;