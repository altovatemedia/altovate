import { Search, Crosshair, FileText, Megaphone, Link2 } from 'lucide-react';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/animations/Reveal';
import { motion } from 'framer-motion';

const SystemProcess = () => {
  const steps = [
    { icon: Search, number: "1", title: "Analyse", description: "Analyse des aktuellen Marketings" },
    { icon: Crosshair, number: "2", title: "Positionierung", description: "Positionierung und Angebotsstruktur" },
    { icon: FileText, number: "3", title: "Content-System", description: "Content-System für Sichtbarkeit" },
    { icon: Megaphone, number: "4", title: "Performance Ads", description: "Performance Ads für Reichweite" },
    { icon: Link2, number: "5", title: "Lead-System", description: "Lead-System für planbare Anfragen" }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Reveal blur>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Das <span className="text-primary">Altovate Marketing System</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Altovate entwickelt Marketing-Systeme, die Strategie, Content und Performance-Marketing miteinander verbinden. Ziel ist es, Social Media nicht nur als Content-Kanal zu nutzen, sondern als System zur planbaren Leadgewinnung.
              </p>
            </Reveal>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-5 gap-6 relative">
            {/* Animated Connection Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 origin-left"
            />
            
            <StaggerContainer className="grid md:grid-cols-5 gap-6 col-span-full" staggerDelay={0.15} delay={0.2}>
              {steps.map((step, index) => (
                <StaggerItem key={index} scale>
                  <div className="relative text-center group">
                    <div className="relative z-10 mx-auto w-20 h-20 rounded-2xl liquid-glass-icon group-hover:border-primary/50 transition-colors flex items-center justify-center mb-5">
                      <step.icon className="w-8 h-8 text-primary" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-bold flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemProcess;
