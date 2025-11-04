import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, Users, Target, Mail, Zap, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import NewNavigation from "@/components/sections/NewNavigation";

const MarketingAutomation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-cta");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const processSteps = [
    { icon: Target, title: "Anzeigen / Social Media", description: "Aufmerksamkeit erzeugen" },
    { icon: Zap, title: "Freebie oder Mehrwert", description: "Interesse wecken" },
    { icon: Mail, title: "Chat- oder E-Mail-Automatisierung", description: "z. B. Manychat" },
    { icon: TrendingUp, title: "Newsletter-System", description: "z. B. Mailchimp, Brevo" },
    { icon: CheckCircle2, title: "Lead oder Buchung", description: "Konversion erreichen" }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Zeitersparnis",
      description: "Einmal eingerichtet, läuft der Prozess selbstständig."
    },
    {
      icon: TrendingUp,
      title: "Planbarkeit",
      description: "Du weißt immer, wo neue Leads herkommen."
    },
    {
      icon: Users,
      title: "Vertrauen",
      description: "Dein Content arbeitet für dich, nicht gegen dich."
    }
  ];

  const examples = [
    {
      title: "Handwerksbetrieb aus der Region",
      steps: [
        "Facebook-Kampagne → kostenloser Ratgeber \"5 Dinge, die du bei der Heizungsmodernisierung beachten musst\"",
        "Download → E-Mail-Sequenz mit Tipps",
        "Nach drei Wochen Anfrage über Kontaktformular"
      ]
    },
    {
      title: "Fitnessstudio / Coach",
      steps: [
        "Freebie: \"Trainingsplan für Berufstätige\"",
        "Automatische E-Mail-Reihe mit Tipps, Storytelling & Call-to-Action",
        "Ergebnis: Beratungstermine und neue Mitglieder"
      ]
    }
  ];

  const timeline = [
    {
      step: "01",
      title: "Analyse & Zieldefinition",
      description: "Wer ist dein Kunde, was soll passieren?"
    },
    {
      step: "02",
      title: "Funnel-Konzept",
      description: "Wir planen den gesamten Ablauf – Anzeige bis E-Mail."
    },
    {
      step: "03",
      title: "Content & Technik",
      description: "Freebie, Landingpage, Automatisierung."
    },
    {
      step: "04",
      title: "Launch & Test",
      description: "Start, Auswertung, Optimierung."
    },
    {
      step: "05",
      title: "Dauerhafte Betreuung",
      description: "Wir halten dein System aktuell und wirksam."
    }
  ];

  const targetGroups = [
    "Coaches & Berater mit digitalen Angeboten",
    "Dienstleister mit erklärungsbedürftigen Leistungen",
    "Handwerksbetriebe, die Anfragen vorqualifizieren wollen",
    "Unternehmen mit regelmäßigem Content-Output"
  ];

  const faqs = [
    {
      question: "Läuft das wirklich automatisch?",
      answer: "Teilweise – du brauchst weiterhin aktiven Content, um neue Leute in den Funnel zu bringen."
    },
    {
      question: "Wie lange dauert der Aufbau?",
      answer: "4–8 Wochen bis zur fertigen Automatisierung."
    },
    {
      question: "Welche Tools nutzt ihr?",
      answer: "Manychat, Mailchimp, Brevo, Zapier, Notion u. a. – immer individuell abgestimmt."
    },
    {
      question: "Was kostet das?",
      answer: "Der Aufwand hängt vom Funnel-Typ ab – wir starten mit einem kostenlosen Strategie-Call."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Marketing Automation & Funnel Systeme | Altovate Saarburg / Region Saar–Mosel</title>
        <meta 
          name="description" 
          content="Kein Autopilot, sondern ein System, das für dich arbeitet. Wir zeigen dir, wie Marketing-Automation Leads generiert, Vertrauen aufbaut und Anfragen bringt – Schritt für Schritt." 
        />
        <meta name="keywords" content="Marketing Automation Saarburg, Funnel Aufbau Trier, Leadgenerierung Saarland, E-Mail Marketing Luxemburg, Manychat Automatisierung, Sales Funnel Agentur Saar-Mosel" />
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-[#ff1c5c] to-primary bg-clip-text text-transparent">
                Automatisch Kunden gewinnen – aber bitte mit System.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Marketing-Automation bedeutet nicht: Knopf drücken, Geld verdienen.<br />
                Es bedeutet: einmal aufbauen, dauerhaft profitieren.
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-[#ff1c5c] hover:bg-[#ff3d75] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Jetzt Funnel-Beratung buchen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Was ist Marketing Automation */}
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
                Was Marketing-Automation wirklich ist
              </h2>
              <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Viele denken: „Automation heißt, alles läuft von allein."<br />
                  Das stimmt nicht.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  In Wahrheit geht es darum, <strong>Prozesse zu automatisieren</strong> – nicht dein Marketinggefühl zu ersetzen.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  Wir bauen Systeme, die dauerhaft Vertrauen schaffen – auch wenn du gerade keine Zeit hast.<br />
                  Website, Social Media, Freebies und E-Mail-Automation greifen ineinander, um Interessenten Schritt für Schritt zu Kunden zu machen.
                </p>
              </div>
            </motion.div>

            {/* Process Flow */}
            <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto items-stretch">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex"
                >
                  <div className="bg-background border-2 border-border rounded-2xl p-6 text-center hover:border-[#ff1c5c] transition-all hover:shadow-lg flex flex-col items-center justify-start w-full min-h-[240px]">
                    <div className="bg-[#ff1c5c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 flex-shrink-0">
                      <step.icon className="h-8 w-8 text-[#ff1c5c]" />
                    </div>
                    <h3 className="font-semibold mb-2 text-sm leading-tight">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <ChevronRight className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 text-[#ff1c5c] h-8 w-8 z-10" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
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
                Warum das Sinn macht
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-muted/30 rounded-2xl p-8 text-center hover:bg-muted/50 transition-all"
                >
                  <div className="bg-[#ff1c5c]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-10 w-10 text-[#ff1c5c]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Viele Werbekampagnen sind wie ein Strohfeuer: an, aus, vorbei.<br />
                <strong>Marketing-Automation ist dein Dauerfeuer</strong> – einmal aufgesetzt, brennt's, bis du stoppst.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Examples */}
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
                Praxisbeispiele
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {examples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background border-2 border-border rounded-2xl p-8 hover:border-[#ff1c5c] transition-all"
                >
                  <h3 className="text-xl font-bold mb-6 text-[#ff1c5c]">{example.title}</h3>
                  <ul className="space-y-4">
                    {example.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-3">
                        <ChevronRight className="h-5 w-5 text-[#ff1c5c] mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-lg text-muted-foreground">
                Es gibt kein One-Size-Fits-All-System – aber das Prinzip bleibt:<br />
                <strong>Aufmerksamkeit → Vertrauen → Entscheidung.</strong>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
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
                Unser Vorgehen
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

        {/* Target Groups */}
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
                Für wen das geeignet ist
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              {targetGroups.map((group, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background border-2 border-border rounded-2xl p-6 flex items-center gap-4 hover:border-[#ff1c5c] transition-all"
                >
                  <CheckCircle2 className="h-8 w-8 text-[#ff1c5c] flex-shrink-0" />
                  <p className="text-lg font-medium">{group}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="text-muted-foreground italic">
                Besonders effektiv, wenn bereits eine Social-Media- oder Lead-Kampagne läuft.
              </p>
            </motion.div>
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
                Dein Marketing muss nicht automatisch laufen – aber es darf für dich arbeiten.
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Lass uns dein Funnel-System entwickeln: ehrlich, messbar und individuell für dein Business.
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-[#ff1c5c] hover:bg-[#ff3d75] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Jetzt Termin vereinbaren
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
            Funnel-Beratung buchen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MarketingAutomation;
