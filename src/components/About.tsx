import { Target, Zap, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Strategisch",
      description: "Jede Maßnahme folgt einer durchdachten Strategie. Wir denken wie Unternehmer, nicht wie Dienstleister."
    },
    {
      icon: Zap,
      title: "Technologieaffin",
      description: "Modernste Tools, KI-Integration und automatisierte Workflows für maximale Effizienz."
    },
    {
      icon: Award,
      title: "High-End",
      description: "Kompromisslose Qualität in Design, Content und Umsetzung. Perfektion ist unser Standard."
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="lg:pr-8">
            <div className="inline-flex items-center px-4 py-2 bg-card/50 rounded-full text-sm text-muted-foreground mb-6">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
              Über Altovate
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Warum <span className="neon-text">Altovate</span>?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Wir sind keine typische Agentur. Als Boutique-Partner verstehen wir die 
              Herausforderungen mittelständischer Unternehmen und entwickeln 
              maßgeschneiderte Lösungen.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-background rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Kein Baukasten-Marketing</h3>
                  <p className="text-muted-foreground">
                    Individuelle Strategien, die zu Ihrem Unternehmen und Ihren Zielen passen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-background rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Alles aus einer Hand</h3>
                  <p className="text-muted-foreground">
                    Von der Strategie bis zur Umsetzung – ein Team, eine Vision, ein Ergebnis.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-background rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Messbare Ergebnisse</h3>
                  <p className="text-muted-foreground">
                    Performance-orientiert mit klaren KPIs und transparenter Erfolgsmessung.
                  </p>
                </div>
              </div>
            </div>

            <Button className="btn-hero group">
              Unser Team kennenlernen
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="glass-card p-6 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <value.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Zufriedene Kunden" },
            { number: "200%", label: "Durchschn. ROI-Steigerung" },
            { number: "98%", label: "Kundenzufriedenheit" },
            { number: "24/7", label: "Support & Betreuung" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-light text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;