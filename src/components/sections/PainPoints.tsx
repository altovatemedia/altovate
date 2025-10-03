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
    <section ref={sectionRef} className="py-section bg-white dark:bg-background relative">
      <div className="container mx-auto px-6 relative max-w-content">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-8">
            <AlertTriangle className="w-8 h-8 text-red-500" />
            <h2 className="finom-h2">
              Das tut <span className="text-red-500">weh</span>
            </h2>
          </div>
          
          <p className="finom-lead max-w-3xl mx-auto">
            Du verlierst täglich Umsatz, Bewerber und Chancen – 
            <span className="text-primary font-semibold"> ohne es zu merken.</span>
          </p>
        </div>

        {/* Pain point cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div
              key={index}
              data-index={index}
              className={`group relative finom-card h-full flex flex-col
                         ${visibleItems.includes(index) 
                           ? 'opacity-100 translate-y-0' 
                           : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-card">
                  <point.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="finom-h3 mb-4">
                    {point.title}
                  </h3>
                  
                  <p className="finom-body text-muted-foreground mb-6">
                    {point.description}
                  </p>
                </div>

                {/* Impact */}
                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-4 mt-auto">
                  <p className="text-red-600 dark:text-red-400 font-semibold text-sm">
                    💸 {point.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="btn-hero text-xl px-12 py-4"
            onClick={() => {
              const offerSection = document.getElementById('signature-offer');
              offerSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Zeit, das zu ändern
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;