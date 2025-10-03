import { Quote } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import signatureImage from '@/assets/signatur-alex.png';
import alexanderPortrait from '@/assets/alexander-portrait.png';
import { useCountUp } from '@/hooks/useCountUp';

const AboutFounder = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  
  const yearsCount = useCountUp(10, 2000);
  const projectsCount = useCountUp(100, 2500);
  const industriesCount = useCountUp(15, 2000);
  const teamCount = useCountUp(5, 1800);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          yearsCount.startCounting();
          projectsCount.startCounting();
          industriesCount.startCounting();
          teamCount.startCounting();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, yearsCount, projectsCount, industriesCount, teamCount]);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Grid Layout: Text + Image */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-sm text-primary mb-4">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                Über Altovate
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Warum <span className="text-primary">Altovate</span>?
              </h2>
              
              <div className="relative pl-6 border-l-4 border-primary/20">
                <Quote className="absolute -left-3 top-0 w-6 h-6 text-primary" />
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light italic">
                  „Ich habe Altovate gegründet, weil ich gesehen habe, wie viele großartige Unternehmen 
                  unter dem Radar fliegen. Nicht weil sie schlecht sind – sondern weil sie nicht 
                  sichtbar sind. Und das wollte ich ändern."
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <p className="text-base text-foreground leading-relaxed">
                  Schon bevor ich lesen konnte, habe ich Programme auf dem alten Familien-PC installiert 
                  und ausprobiert, was passiert. Kreativität, Technik und Neugier haben mich seitdem nicht 
                  mehr losgelassen. Aus dem Kinderzimmer-Geek wurde ein Familienvater, Fitness-Enthusiast 
                  und Workaholic mit über 10 Jahren Erfahrung im digitalen Marketing.
                </p>
                
                <p className="text-base text-foreground leading-relaxed">
                  Bei uns bekommst du keine Standard-Pakete und auch kein „Wir machen einfach, was du sagst". 
                  Wir hören zu, denken mit – und sagen dir ehrlich, wenn eine Idee Quatsch ist. Stattdessen 
                  bekommst du das, was wirklich zu dir passt: kreative Konzepte, ehrliche Beratung und 
                  Marketing, das funktioniert.
                </p>
              </div>

              {/* Signature */}
              <div className="pt-6">
                <img 
                  src={signatureImage} 
                  alt="Alexander Unterschrift" 
                  className="h-16 w-auto mb-2"
                />
                <p className="text-sm text-muted-foreground">
                  Gründer & Geschäftsführer, Altovate
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Main image with subtle border */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={alexanderPortrait}
                    alt="Alexander - Gründer von Altovate" 
                    className="w-full h-auto object-cover"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-border">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{yearsCount.count}+</div>
              <p className="text-sm text-muted-foreground">Jahre Erfahrung</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{projectsCount.count}+</div>
              <p className="text-sm text-muted-foreground">Erfolgreiche Projekte</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{industriesCount.count}+</div>
              <p className="text-sm text-muted-foreground">Branchen betreut</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{teamCount.count}</div>
              <p className="text-sm text-muted-foreground">Experten im Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
