import { UserX, TrendingDown, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const PainPoints = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const painPoints = [
    {
      icon: UserX,
      title: "Keine Bewerber",
      description: "Deine Stellenanzeigen verschwinden im Nichts. Qualifizierte Kandidaten gehen zur Konkurrenz.",
      impact: "Verlust: 50.000€+ pro unbesetzter Stelle"
    },
    {
      icon: TrendingDown,
      title: "Kaum Kundenanfragen",
      description: "Deine Website ist eine digitale Geisterstadt. Potenzielle Kunden finden dich nicht.",
      impact: "Verlust: 10-20 Neukunden pro Monat"
    },
    {
      icon: Clock,
      title: "Keine Zeit",
      description: "Du arbeitest IM Unternehmen statt AM Unternehmen. Marketing bleibt liegen.",
      impact: "Opportunitätskosten: Unbezahlbar"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-radial from-red-600/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-radial from-magenta/10 to-transparent blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-8">
            <AlertTriangle className="w-8 h-8 text-red-500" />
            <h2 className="text-5xl md:text-7xl font-black text-white">
              Das tut <span className="text-red-500">weh</span>
            </h2>
          </div>
          
          <p className="text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Du verlierst täglich Umsatz, Bewerber und Chancen – 
            <span className="text-magenta font-semibold"> ohne es zu merken.</span>
          </p>
        </div>

        {/* Pain point cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div
              key={index}
              data-index={index}
              className={`group relative bg-card/30 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 
                         transition-all duration-700 transform hover:scale-105
                         ${visibleItems.includes(index) 
                           ? 'opacity-100 translate-y-0' 
                           : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-magenta/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse">
                  <point.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                  {point.title}
                </h3>
                
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  {point.description}
                </p>

                {/* Impact */}
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-400 font-semibold text-sm">
                    {point.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="btn-hero group text-2xl px-20 py-8 bg-gradient-to-r from-magenta to-red-500 hover:from-red-500 hover:to-magenta"
            onClick={() => {
              const offerSection = document.getElementById('signature-offer');
              offerSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Zeit, das zu ändern
            <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;