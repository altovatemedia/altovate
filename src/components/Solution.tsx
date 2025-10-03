import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Solution = () => {
  const benefits = [
    "Online-Auftritt, den man nicht übersehen kann",
    "Werbeanzeigen, die wahrgenommen – und geklickt – werden",
    "Automatisierte Kundenbetreuung, während du im Urlaub bist",
    'Content, bei dem man denkt: „Von denen will ich mehr sehen"'
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-foreground">
            In nur <span className="text-primary">30 Tagen</span> machen wir dich zur Marke, die jeder kennt - und <span className="text-primary">jeder will</span>.
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Mehr Anfragen. Mehr Umsatz. Mehr „Habt ihr noch Stellen frei?" Du wirst sichtbar, begehrenswert – und bleibst dabei ganz bei deinem Kerngeschäft.
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

          {/* Limitation */}
          <div className="mt-6">
            <p className="text-lg font-bold text-foreground">
              Premium-Service mit limitierter Anzahl
            </p>
            <p className="text-sm text-muted-foreground font-light mt-1">
              Jedes Projekt wird persönlich begleitet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;