import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Settings, TrendingUp, Zap, Calculator, Clock, Smartphone, Brain, Lightbulb, Code, Lock, MessageSquare, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import NewNavigation from "@/components/sections/NewNavigation";
import SoftwareContactForm from "@/components/sections/SoftwareContactForm";

const SoftwareKI = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    setIsContactOpen(true);
  };

  const benefits = [
    {
      icon: Settings,
      title: "Prozesse vereinfachen",
      description: "Manuelle Schritte digital abbilden."
    },
    {
      icon: TrendingUp,
      title: "Fehler reduzieren",
      description: "Daten einmal eingeben, mehrfach nutzen."
    },
    {
      icon: Zap,
      title: "Zeit sparen",
      description: "Statt Excel-Chaos ein sauberes System."
    }
  ];

  const solutions = [
    {
      icon: Calculator,
      title: "Individuelle Rechner & Formulare",
      description: "Heizungs-, ROI- oder Preis-Tools für Websites."
    },
    {
      icon: Clock,
      title: "Zeiterfassungs- & Projekt-Tools",
      description: "Dashboards inkl. Auswertung & Export."
    },
    {
      icon: Smartphone,
      title: "Web- & App-Anwendungen",
      description: "Kundenportale, digitale Checklisten, interaktive Kalkulatoren."
    },
    {
      icon: Brain,
      title: "KI-gestützte Automatisierungen",
      description: "Texterstellung, Lead-Qualifizierung oder Datenanalyse mit GPT-Integration."
    }
  ];

  const timeline = [
    {
      step: "01",
      title: "Idee & Ziel",
      description: "Was soll die Software leisten?"
    },
    {
      step: "02",
      title: "Konzept & Architektur",
      description: "Workflow und Funktionalität planen."
    },
    {
      step: "03",
      title: "Design & Entwicklung",
      description: "Visuell im Altovate-Stil, intuitiv bedienbar."
    },
    {
      step: "04",
      title: "Testing & Integration",
      description: "Feinschliff + Einbindung bestehender Systeme."
    },
    {
      step: "05",
      title: "Go Live & Support",
      description: "Übergabe, Einweisung und Erweiterbarkeit."
    }
  ];

  const examples = [
    {
      title: "Heizungsrechner für Handwerksbetrieb",
      description: "Automatische Preisabschätzung + Lead-Erfassung."
    },
    {
      title: "Zeiterfassung für Agentur",
      description: "Projekttracking + Stundenexport."
    },
    {
      title: "Schulungsplattform für Unternehmen",
      description: "Kurse, Quiz und Zertifikate online."
    },
    {
      title: "Mini-CRM mit KI",
      description: "Anfragen automatisch klassifizieren und priorisieren."
    }
  ];

  const advantages = [
    {
      icon: Lightbulb,
      title: "Alles aus einer Hand",
      description: "Konzept + Design + Entwicklung."
    },
    {
      icon: Lock,
      title: "Sicher & skalierbar",
      description: "Läuft stabil, egal ob 10 oder 10 000 User."
    },
    {
      icon: MessageSquare,
      title: "Einfach bedienbar",
      description: "Gebaut für Menschen, nicht für Programmierer."
    }
  ];

  const faqs = [
    {
      question: "Wie individuell sind die Lösungen?",
      answer: "100 % custom – keine Templates."
    },
    {
      question: "Welche Technologien nutzt ihr?",
      answer: "React, Next.js, Supabase, GPT-APIs, Lovable."
    },
    {
      question: "Wie lange dauert die Entwicklung?",
      answer: "Kleine Tools 2–4 Wochen, größere bis 12."
    },
    {
      question: "Kann ich das Tool später erweitern?",
      answer: "Ja, modular aufgebaut und updatefähig."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Individuelle Software & KI-Lösungen | Altovate Saarburg / Region Saar–Mosel</title>
        <meta 
          name="description" 
          content="Prozesse digitalisieren, Aufgaben vereinfachen, Daten clever nutzen – mit individuellen Software- und KI-Lösungen von Altovate. Wir entwickeln Tools, die wirklich arbeiten." 
        />
        <meta name="keywords" content="Software Entwicklung Saarburg, KI Tools Trier, digitale Prozesse Automatisierung Saarland, App Entwicklung Luxemburg, Web-Tools für Unternehmen, individueller Rechner Programmierung" />
      </Helmet>

      <NewNavigation />

      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-[#ff1c5c] to-primary bg-clip-text text-transparent leading-tight pb-2">
                Deine Idee. Unsere Technologie. Ein Tool, das wirklich arbeitet.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Wir entwickeln individuelle Software- und KI-Lösungen,<br />
                die deinen Alltag vereinfachen – vom Heizungsrechner bis zur automatisierten Zeiterfassung.
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-[#ff1c5c] hover:bg-[#ff3d75] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Jetzt Projekt anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Warum eigene Software */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
                Warum eigene Software Sinn macht
              </h2>
              <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Jeder Betrieb hat Abläufe, die Zeit kosten – von Angebotsrechnern bis Excel-Listen.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Statt „Das haben wir immer so gemacht" bauen wir dir eine Lösung, die das übernimmt.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  Egal ob Web-App, Dashboard oder Automatisierung – du bekommst ein Tool, das für dich arbeitet, nicht umgekehrt.
                </p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background border-2 border-border rounded-2xl p-8 text-center hover:border-[#ff1c5c] transition-all hover:shadow-lg"
                >
                  <div className="bg-[#ff1c5c]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-10 w-10 text-[#ff1c5c]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Was wir bauen */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Was wir bauen
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-muted/30 rounded-2xl p-8 hover:bg-muted/50 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="bg-[#ff1c5c]/10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                      <solution.icon className="h-8 w-8 text-[#ff1c5c]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Wie so ein Projekt abläuft
              </h2>
            </motion.div>

            <div className="relative">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 mb-12 last:mb-0"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#ff1c5c] text-white flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow pt-2">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-lg">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Beispiele aus der Praxis
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {examples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-muted/30 rounded-2xl p-8 hover:bg-muted/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <ChevronRight className="h-6 w-6 text-[#ff1c5c] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#ff1c5c]">{example.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{example.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Was du davon hast
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background border-2 border-border rounded-2xl p-8 text-center hover:border-[#ff1c5c] transition-all hover:shadow-lg"
                >
                  <div className="bg-[#ff1c5c]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <advantage.icon className="h-10 w-10 text-[#ff1c5c]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Häufige Fragen
              </h2>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-muted/30 rounded-2xl p-8"
                >
                  <h3 className="text-xl font-bold mb-3 text-[#ff1c5c]">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact-cta" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Idee im Kopf? Wir machen ein Tool daraus.
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Lass uns dein Software-Projekt planen – verständlich, individuell und ohne Technik-Kauderwelsch.
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-[#ff1c5c] hover:bg-[#ff3d75] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Projekt starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="w-full bg-[#ff1c5c] hover:bg-[#ff3d75] text-white rounded-full shadow-lg"
          >
            Projekt anfragen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Software-Projekt anfragen</DialogTitle>
          </DialogHeader>
          <SoftwareContactForm />
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
};

export default SoftwareKI;
