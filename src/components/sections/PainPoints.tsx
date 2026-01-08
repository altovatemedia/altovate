import { FileQuestion, Users, Building2, Workflow, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const PainPoints = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const painPoints = [
    {
      icon: FileQuestion,
      title: "Zu viel Content, keine Strategie",
      description: "Du postest regelmäßig, aber es passiert... nichts. Keine Anfragen, kein Wachstum.",
    },
    {
      icon: Users,
      title: "Sichtbarkeit ohne Anfragen",
      description: "Follower wachsen, aber Leads bleiben aus. Reichweite allein bringt keine Kunden.",
    },
    {
      icon: Building2,
      title: "Agenturen liefern Posts, aber keine Ergebnisse",
      description: "Du zahlst für Content, nicht für Wachstum. Das Ergebnis? Frustration und verbranntes Budget.",
    },
    {
      icon: Workflow,
      title: "Keine Struktur für Leads",
      description: "Kein Freebie, kein Funnel, keine Automatisierung. Potenzielle Kunden verschwinden einfach.",
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
          <h2 className="finom-h2 mb-6">
            Warum Social Media für viele Unternehmen <span className="text-primary">nicht funktioniert</span>
          </h2>
        </div>

        {/* Pain point cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <div
              key={index}
              data-index={index}
              className={`group relative finom-card h-full flex flex-col
                         ${visibleItems.includes(index) 
                           ? 'opacity-100 translate-y-0' 
                           : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-r from-primary to-primary/80 rounded-xl flex items-center justify-center mb-5 shadow-card">
                  <point.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {point.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-foreground font-medium">
            Social Media ist kein Selbstzweck. Es ist ein Werkzeug zur Kundengewinnung – <span className="text-primary">wenn es richtig aufgebaut ist.</span>
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="btn-hero text-lg px-10 py-4"
            onClick={() => {
              const offerSection = document.getElementById('my-role');
              offerSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            So funktioniert es richtig
            <ArrowRight className="ml-3 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
