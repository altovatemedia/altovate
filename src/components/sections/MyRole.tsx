import { Target, TrendingUp, Users } from 'lucide-react';

const MyRole = () => {
  const benefits = [
    {
      icon: Target,
      text: "Vertrauen aufbaut"
    },
    {
      icon: TrendingUp,
      text: "Leads generiert"
    },
    {
      icon: Users,
      text: "langfristig unabhängig macht"
    }
  ];

  return (
    <section id="my-role" className="py-section bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          <h2 className="finom-h2 mb-8">
            Meine Rolle in deinem <span className="text-primary">Marketing</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Ich bin kein klassischer Social-Media-Betreuer und kein reiner Coach.
            </p>
            <p className="text-foreground font-medium">
              Ich arbeite als strategischer Sparringpartner und Systemarchitekt für dein Online-Marketing.
            </p>
            <p>
              Gemeinsam entwickeln wir ein Setup, das:
            </p>
          </div>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-background border border-border rounded-xl px-6 py-4 shadow-sm"
              >
                <benefit.icon className="w-6 h-6 text-primary" />
                <span className="text-foreground font-semibold">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyRole;
