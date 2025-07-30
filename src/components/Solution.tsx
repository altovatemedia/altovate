import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Solution = () => {
  const benefits = [
    "Website + Content + Ads + Funnel",
    "Chatbot + Social Media",
    "Alles in deinem Namen",
    "Fertig in 30 Tagen"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Wir machen dich zur <span className="text-primary">Marke</span>,<br />
            bei der man arbeiten und kaufen will –<br />
            <span className="text-primary">in 30 Tagen.</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            <span className="font-bold text-primary">Altovate ist deine externe Marketing-Abteilung.</span><br />
            Website, Ads, Funnel, Content & Automatisierung – alles fertig. Alles in deinem Namen.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit}
                className="flex items-center justify-center md:justify-start space-x-3 p-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg font-semibold text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button className="btn-hero group text-xl">
            Jetzt Erstgespräch buchen
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Limitation */}
          <p className="text-sm text-muted-foreground mt-6 font-medium">
            Nur 4 Plätze pro Monat verfügbar
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;