import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Solution = () => {
  const benefits = [
    "Klare Positionierung, die sofort verstanden wird",
    "Ein System, das Leads generiert – nicht nur Likes",
    "Strukturierte Prozesse statt ständigem Improvisieren",
    "Unabhängigkeit von Agenturen und Freelancern"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-foreground">
            Marketing, das <span className="text-primary">funktioniert</span> – nicht nur gut aussieht.
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Du bekommst ein durchdachtes System, das planbar Leads generiert. Keine Spielereien, keine leeren Versprechen – nur Struktur, die wirkt.
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
          <Button 
            className="btn-hero group text-xl"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Jetzt Erstgespräch buchen
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solution;
