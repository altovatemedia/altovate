import { Eye, Video, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Eye,
      title: "Sichtbarkeits-Booster",
      description: "Website, Social Media, Branding – alles aus einer Hand für maximale Marken-Konsistenz.",
      features: ["High-End Website Design", "Social Media Strategie", "Corporate Branding"],
      color: "text-accent"
    },
    {
      icon: Video,
      title: "Medienproduktion",
      description: "Cinematic Content Creation mit High-End Foto, Film und Grafik für perfekte Marken-Inszenierung.",
      features: ["4K Video Produktion", "Professional Photography", "Motion Graphics"],
      color: "text-neon"
    },
    {
      icon: TrendingUp,
      title: "Performance-Marketing",
      description: "Meta Ads, SEO, Funnels und Marketing-Automatisierung für messbare Ergebnisse.",
      features: ["Meta Ads Management", "SEO Optimierung", "Marketing Automation"],
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Arbeitgeberattraktivität",
      description: "BAV Workflow, Firmenfitness und Benefits-Optimierung für eine starke Arbeitgebermarke.",
      features: ["Betriebliche Vorsorge", "Circle Fitness Integration", "Employee Benefits"],
      color: "text-foreground"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/50 rounded-full text-sm text-muted-foreground mb-6">
            <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
            Unsere Leistungen
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Ganzheitliches Marketing,<br />
            <span className="neon-text">das wirkt</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Keine Baustellen, keine Übergaben. Wir übernehmen alle nötigen Maßnahmen 
            für Ihre moderne Marken-Transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="glass-card p-8 group hover:scale-105 transition-all duration-300 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-secondary/50 ${service.color}`}>
                  <service.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card p-12">
          <h3 className="text-2xl md:text-3xl font-light mb-4">
            Bereit für Ihre <span className="neon-text">Transformation</span>?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam analysieren, wo Ihr Unternehmen steht und wie wir 
            Ihre Marke auf das nächste Level heben können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero group">
              Kostenlose Analyse buchen
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-border/50 hover:border-accent">
              Leistungen im Detail
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;