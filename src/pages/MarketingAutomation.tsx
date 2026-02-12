import { useEffect } from "react";
import { Helmet } from "react-helmet";
import SEOSchema from "@/components/SEOSchema";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, Users, Target, Mail, Zap, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import NewNavigation from "@/components/sections/NewNavigation";
import VisualBreadcrumb from '@/components/VisualBreadcrumb';
import InternalLinks from "@/components/sections/InternalLinks";

const MarketingAutomation = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-cta");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const processSteps = [
    { icon: Target, title: "Anzeigen / Social Media", description: "Aufmerksamkeit erzeugen" },
    { icon: Zap, title: "Freebie oder Mehrwert", description: "Interesse wecken" },
    { icon: Mail, title: "Chat- oder E-Mail-Automatisierung", description: "z. B. Manychat" },
    { icon: TrendingUp, title: "Newsletter-System", description: "z. B. Mailchimp, Brevo" },
    { icon: CheckCircle2, title: "Lead oder Buchung", description: "Konversion erreichen" }
  ];

  const benefits = [
    { icon: Clock, title: "Zeitersparnis", description: "Einmal eingerichtet, läuft der Prozess selbstständig." },
    { icon: TrendingUp, title: "Planbarkeit", description: "Du weißt immer, wo neue Leads herkommen." },
    { icon: Users, title: "Vertrauen", description: "Dein Content arbeitet für dich, nicht gegen dich." }
  ];

  const examples = [
    { title: "Handwerksbetrieb aus der Region", steps: ["Facebook-Kampagne → kostenloser Ratgeber \"5 Dinge, die du bei der Heizungsmodernisierung beachten musst\"", "Download → E-Mail-Sequenz mit Tipps", "Nach drei Wochen Anfrage über Kontaktformular"] },
    { title: "Fitnessstudio / Coach", steps: ["Freebie: \"Trainingsplan für Berufstätige\"", "Automatische E-Mail-Reihe mit Tipps, Storytelling & Call-to-Action", "Ergebnis: Beratungstermine und neue Mitglieder"] }
  ];

  const timeline = [
    { step: "01", title: "Analyse & Zieldefinition", description: "Wer ist dein Kunde, was soll passieren?" },
    { step: "02", title: "Funnel-Konzept", description: "Wir planen den gesamten Ablauf – Anzeige bis E-Mail." },
    { step: "03", title: "Content & Technik", description: "Freebie, Landingpage, Automatisierung." },
    { step: "04", title: "Launch & Test", description: "Start, Auswertung, Optimierung." },
    { step: "05", title: "Dauerhafte Betreuung", description: "Wir halten dein System aktuell und wirksam." }
  ];

  const targetGroups = [
    "Coaches & Berater mit digitalen Angeboten",
    "Dienstleister mit erklärungsbedürftigen Leistungen",
    "Handwerksbetriebe, die Anfragen vorqualifizieren wollen",
    "Unternehmen mit regelmäßigem Content-Output"
  ];

  const faqs = [
    { question: "Was bedeutet Marketing-Automation genau?", answer: "Marketing-Automation ist die technische Verknüpfung von Marketing-Kanälen (Social Media, E-Mail, Website) zu einem automatisierten Prozess, der Interessenten systematisch zu Kunden entwickelt. Bei Altovate umfasst das typischerweise Anzeigen, Freebies, Chat- oder E-Mail-Sequenzen und ein CRM-System." },
    { question: "Wie lange dauert der Aufbau eines Marketing-Funnels?", answer: "Der Aufbau eines vollständigen Marketing-Funnels dauert bei Altovate 4 bis 8 Wochen. Das umfasst Konzeption, Freebie-Erstellung, Landingpage, E-Mail-Sequenzen und die technische Integration aller Systeme." },
    { question: "Welche Tools setzt Altovate für Marketing-Automation ein?", answer: "Altovate setzt je nach Anforderung auf Manychat (Chat-Automatisierung), Mailchimp oder Brevo (E-Mail-Marketing), Zapier (Workflow-Automatisierung) und Notion (Content-Planung). Die Tool-Auswahl wird individuell auf das Geschäftsmodell abgestimmt." },
    { question: "Was kostet Marketing-Automation bei Altovate?", answer: "Die Kosten für Marketing-Automation hängen vom Umfang des Funnels ab. Altovate bietet ein kostenloses Erstgespräch an, in dem Ziel, Aufwand und Budget transparent besprochen werden." }
  ];

  return (
    <>
      <Helmet>
        <title>Marketing Automation & Funnel Systeme | Altovate Saarburg / Region Saar–Mosel</title>
        <meta name="description" content="Kein Autopilot, sondern ein System, das für dich arbeitet. Wir zeigen dir, wie Marketing-Automation Leads generiert, Vertrauen aufbaut und Anfragen bringt – Schritt für Schritt." />
        <meta name="keywords" content="Marketing Automation Saarburg, Funnel Aufbau Trier, Leadgenerierung Saarland, E-Mail Marketing Luxemburg, Manychat Automatisierung, Sales Funnel Agentur Saar-Mosel" />
        <link rel="canonical" href="https://altovate.de/marketing-automation-saarburg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://altovate.de/marketing-automation-saarburg" />
        <meta property="og:title" content="Marketing Automation & Funnel Systeme | Altovate Saarburg" />
        <meta property="og:description" content="Marketing-Automation, die Leads generiert, Vertrauen aufbaut und Anfragen bringt – Schritt für Schritt." />
        <meta property="og:image" content="https://altovate.de/altovate-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://altovate.de/marketing-automation-saarburg" />
        <meta name="twitter:title" content="Marketing Automation & Funnel Systeme | Altovate Saarburg" />
        <meta name="twitter:description" content="Marketing-Automation, die Leads generiert, Vertrauen aufbaut und Anfragen bringt – Schritt für Schritt." />
        <meta name="twitter:image" content="https://altovate.de/altovate-logo.png" />
      </Helmet>
      <SEOSchema page="service" faqItems={faqs}
        service={{ name: "Marketing Automation & Funnel-Systeme", description: "Marketing-Automation für mittelständische Unternehmen in Saarburg, Trier & Region. Automatisierte Leadgenerierung mit Manychat, Mailchimp, Brevo und Zapier.", url: "https://altovate.de/marketing-automation-saarburg" }}
        breadcrumbs={[{ name: "Startseite", url: "https://altovate.de/" }, { name: "Marketing Automation", url: "https://altovate.de/marketing-automation-saarburg" }]}
      />

      <NewNavigation />
      <VisualBreadcrumb items={[{ label: "Lösungen", href: "/#angebote" }, { label: "Marketing Automation" }]} />

      <div className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gold-gradient-text leading-tight pb-2">
                Automatisch Kunden gewinnen – aber bitte mit System.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Marketing-Automation bedeutet nicht: Knopf drücken, Geld verdienen.<br />
                Es bedeutet: einmal aufbauen, dauerhaft profitieren.
              </p>
              <Button onClick={scrollToContact} size="lg" className="btn-hero px-8 py-6 text-lg rounded-full">
                Jetzt Funnel-Beratung buchen <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Was ist Marketing Automation */}
        <section className="py-20 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Was ist Marketing-Automation?</h2>
              <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">Marketing-Automation ist die systematische Verknüpfung von Marketing-Kanälen zu einem automatisierten Prozess. Das Ziel ist es, Interessenten durch eine definierte Abfolge von Kontaktpunkten – von der ersten Aufmerksamkeit bis zur Kaufentscheidung – zu führen.</p>
                <p className="text-lg leading-relaxed mb-6">Der Unterschied zu klassischem Marketing: Marketing-Automation ersetzt nicht die Strategie, sondern automatisiert die <strong>wiederkehrenden Prozesse</strong> innerhalb einer Strategie – z. B. E-Mail-Sequenzen, Chat-Antworten und Lead-Qualifizierung.</p>
                <p className="text-lg leading-relaxed mb-8">So funktioniert ein Funnel bei Altovate: Website, Social Media, Freebies und E-Mail-Automation greifen als System ineinander. Interessenten werden Schritt für Schritt zu qualifizierten Leads entwickelt – auch wenn der Unternehmer gerade keine Zeit für aktives Marketing hat.</p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto items-stretch">
              {processSteps.map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative flex">
                  <div className="bg-background border-2 border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all hover:shadow-lg flex flex-col items-center justify-start w-full min-h-[240px]">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 flex-shrink-0">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2 text-sm leading-tight">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <ChevronRight className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 text-primary h-8 w-8 z-10" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Die Vorteile von Marketing-Automation</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-muted/30 rounded-2xl p-8 text-center hover:bg-muted/50 transition-all">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Der Unterschied zwischen einer Werbekampagne und Marketing-Automation: Eine Kampagne endet, wenn das Budget aufgebraucht ist.<br />
                <strong>Ein Marketing-Funnel arbeitet dauerhaft</strong> – einmal aufgesetzt, generiert er kontinuierlich Leads, solange der Content-Input besteht.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Examples */}
        <section className="py-20 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Praxisbeispiele</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {examples.map((example, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
                  <h3 className="text-xl font-bold mb-6 text-primary">{example.title}</h3>
                  <ul className="space-y-4">
                    {example.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-3">
                        <ChevronRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
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
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Unser Vorgehen</h2>
            </motion.div>

            <div className="relative">
              {timeline.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 mb-12 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">{item.step}</div>
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
        <section className="py-20 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Für wen ist Marketing-Automation geeignet?</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              {targetGroups.map((group, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background border-2 border-border rounded-2xl p-6 flex items-center gap-4 hover:border-primary/50 transition-all">
                  <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
                  <p className="text-lg font-medium">{group}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
              <p className="text-muted-foreground italic">Besonders effektiv, wenn bereits eine Social-Media- oder Lead-Kampagne läuft.</p>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Häufige Fragen</h2>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-muted/30 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact-cta" className="py-20 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Dein Marketing muss nicht automatisch laufen – aber es darf für dich arbeiten.</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">Lass uns dein Funnel-System entwickeln: ehrlich, messbar und individuell für dein Business.</p>
              <Button onClick={scrollToContact} size="lg" className="btn-hero px-8 py-6 text-lg rounded-full">
                Jetzt Termin vereinbaren <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50">
          <Button onClick={scrollToContact} size="lg" className="w-full btn-hero rounded-full">
            Funnel-Beratung buchen <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <InternalLinks currentPage="/marketing-automation-saarburg" />
      <Footer />
    </>
  );
};

export default MarketingAutomation;
