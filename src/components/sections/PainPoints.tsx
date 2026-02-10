import { Clock, TrendingDown, User, FileQuestion } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const PainPoints = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const painPoints = [
    {
      icon: Clock,
      text: "Social Media frisst Zeit, bringt aber keine Anfragen"
    },
    {
      icon: TrendingDown,
      text: "Agenturen reden über Reichweite statt Umsatz"
    },
    {
      icon: User,
      text: "Dein Marketing hängt an Einzelpersonen"
    },
    {
      icon: FileQuestion,
      text: "Nichts ist dokumentiert, skalierbar oder messbar"
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
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
         {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Warum Marketing bei vielen Unternehmern nicht funktioniert
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Die häufigsten Probleme im Online-Marketing für KMU sind fehlende Struktur, keine messbaren Ergebnisse und Abhängigkeit von einzelnen Personen. Diese vier Symptome zeigen, dass kein System vorhanden ist:
            </p>
          </div>

          {/* Pain point list */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {painPoints.map((point, index) => (
              <div
                key={index}
                data-index={index}
                className={`group flex items-start gap-4 p-6 rounded-2xl bg-muted/30 border border-border
                           hover:border-primary/30 transition-all duration-500
                           ${visibleItems.includes(index) 
                             ? 'opacity-100 translate-y-0' 
                             : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg text-foreground font-medium leading-relaxed pt-2">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusion Statement */}
          <div className="text-center">
            <div className="inline-block bg-primary/5 border border-primary/20 rounded-2xl px-8 py-6">
              <p className="text-xl md:text-2xl font-bold text-foreground">
                Das ist kein Content-Problem.
              </p>
              <p className="text-xl md:text-2xl font-bold text-primary">
                Das ist ein fehlendes System.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
