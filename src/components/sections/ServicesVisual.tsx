import { Monitor, Camera, BarChart3, Users, Bot, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesVisual = () => {
  const services = [
    {
      icon: Monitor,
      title: "Website & Design",
      subtitle: "Deine digitale Visitenkarte",
      description: "High-End Websites, die nicht nur gut aussehen, sondern auch konvertieren. Von der ersten Idee bis zum Launch – strategisch geplant und perfekt umgesetzt.",
      image: "/lovable-uploads/website-design-bav.png",
      features: ["Conversion-optimiert", "Mobile-first", "SEO-ready"]
    },
    {
      icon: Camera,
      title: "Content & Produktion",
      subtitle: "Inhalte, die bewegen",
      description: "Professionelle Foto- und Videoproduktionen, Social Media Content und Storytelling, das deine Marke zum Leben erweckt.",
      image: "/lovable-uploads/content-produktion-phone.png",
      features: ["Fotografie", "Video-Content", "Social Media"]
    },
    {
      icon: BarChart3,
      title: "Performance Marketing",
      subtitle: "Ads, die funktionieren",
      description: "Datengetriebene Kampagnen auf Meta und Google. Wir sorgen dafür, dass jeder Euro messbare Ergebnisse bringt.",
      image: "/lovable-uploads/performance-marketing-phillys.png",
      features: ["Meta Ads", "Google Ads", "Tracking & Analytics"]
    },
    {
      icon: Users,
      title: "Employer Branding",
      subtitle: "Die besten wollen zu dir",
      description: "Wir machen dich zur Arbeitgebermarke, die Top-Talente anzieht. Von der Strategie bis zur Umsetzung im Recruiting.",
      image: "/lovable-uploads/50fe6fa4-8882-47de-bb67-c64cca395894.png",
      features: ["Recruiting-Kampagnen", "Arbeitgeber-Content"]
    },
    {
      icon: Bot,
      title: "Marketing Automation",
      subtitle: "Effizienz durch Automatisierung",
      description: "Chatbots, E-Mail-Flows und smarte Systeme, die 24/7 für dich arbeiten – während du dich um dein Kerngeschäft kümmerst.",
      image: "/lovable-uploads/802af6c1-6171-4113-82a2-41d3e9ef44a2.png",
      features: ["WhatsApp-Bots", "E-Mail-Automation", "Lead-Qualifizierung"]
    },
    {
      icon: Heart,
      title: "Mitarbeiter Benefits",
      subtitle: "Mehr als nur Obstkorb",
      description: "Wir vermitteln dich an spezialisierte Experten für Benefits, die wirklich wirken – und machen auf Wunsch direkt die Termine für dich aus.",
      image: "/lovable-uploads/7a13b33d-edd3-4e48-a5a7-4066a841b56b.png",
      features: ["Experten-Vermittlung", "Termin-Organisation", "Benefit-Beratung"]
    }
  ];

  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-sm text-primary mb-6">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Unsere Leistungen
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Was wir für dich tun
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Individuelle Lösungen statt Standard-Pakete. Wir arbeiten mit dir zusammen, 
            um genau das zu schaffen, was dein Unternehmen wirklich braucht.
          </p>
        </div>

        {/* Services Grid with alternating layout */}
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Image */}
                <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
                    </div>
                    {/* Icon badge */}
                    <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    className="group text-primary hover:text-primary hover:bg-primary/5 pl-0"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Projekt anfragen
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center mt-24 pt-12">
          <p className="text-lg text-muted-foreground mb-8">
            Nicht sicher, welche Leistung zu dir passt? Kein Problem.
          </p>
          <Button 
            size="lg"
            className="btn-hero px-8 py-6"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Lass uns darüber sprechen
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesVisual;
