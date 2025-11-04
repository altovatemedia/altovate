import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Target, TrendingUp, Search, Users, BarChart3, CheckCircle2, ArrowRight, Megaphone, MousePointerClick } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import NewNavigation from "@/components/sections/NewNavigation";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Werbeanzeigen = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const advantages = [
    {
      icon: Target,
      title: "Zielgerichtet",
      description: "Du bestimmst, wer deine Anzeige sieht."
    },
    {
      icon: BarChart3,
      title: "Messbar",
      description: "Jeder Klick, jede Anfrage wird erfasst."
    },
    {
      icon: TrendingUp,
      title: "Effizient",
      description: "Kein Streuverlust – mehr Wirkung fürs Budget."
    }
  ];

  const channels = [
    {
      title: "Meta-Ads (Facebook & Instagram)",
      icon: Users,
      description: "Deine Kunden scrollen täglich durch Social Media. Wir platzieren deine Botschaft dort, wo sie wirklich gesehen wird – im Feed, in Stories oder Reels."
    },
    {
      title: "Google-Ads (Suchanzeigen)",
      icon: Search,
      description: "Wenn jemand aktiv nach deiner Leistung sucht, bist du vorne mit dabei. Wir sorgen dafür, dass du bei relevanten Suchanfragen im Umkreis auftauchst."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Zielgruppen-Briefing",
      description: "Wir definieren, wer dein Kunde wirklich ist (Region, Alter, Interessen, Budget)."
    },
    {
      number: "02",
      title: "Kampagnen-Setup",
      description: "Erstellung deiner Anzeigen (Texte, Bilder/Videos, Zielgruppe)."
    },
    {
      number: "03",
      title: "Freigabe & Start",
      description: "Wir schalten die Kampagne live – du siehst erste Ergebnisse schon nach wenigen Tagen."
    },
    {
      number: "04",
      title: "Auswertung & Optimierung",
      description: "Wir prüfen, was funktioniert, und verbessern laufend."
    },
    {
      number: "05",
      title: "Reporting",
      description: "Du bekommst regelmäßig Einblicke in Reichweite, Klicks und Leads."
    }
  ];

  const packages = [
    {
      name: "Basic Setup",
      price: "ab 300 €",
      features: [
        "Einrichtung einer Meta- oder Google-Kampagne",
        "Zielgruppenanalyse & Tracking-Setup",
        "1 Anzeige (Text + Visual)"
      ],
      note: "(empfohlen für kleine regionale Tests)",
      isPopular: false
    },
    {
      name: "Pro Setup",
      price: "ab 600 €",
      features: [
        "Kombination Meta + Google",
        "3 Anzeigenvarianten mit A/B-Tests",
        "Reporting & Optimierung über 4 Wochen"
      ],
      note: "(für lokale Dienstleister & KMU)",
      isPopular: true
    },
    {
      name: "Laufende Betreuung",
      price: "ab 450 €/Monat",
      features: [
        "Monatliche Optimierung & Reporting",
        "Neue Anzeigen monatlich inklusive",
        "Persönlicher Ansprechpartner"
      ],
      note: "(empfohlen ab 4 Wochen Laufzeit)",
      isPopular: false
    }
  ];

  const faqs = [
    {
      question: "Brauche ich viel Budget?",
      answer: "Nein – schon kleine Kampagnen mit 5–10 € pro Tag liefern erste Ergebnisse."
    },
    {
      question: "Wie schnell sehe ich Ergebnisse?",
      answer: "Erste Klicks oft in 1–3 Tagen, echte Daten nach ca. 4 Wochen."
    },
    {
      question: "Wie regional kann ich werben?",
      answer: "Von 5 km Umkreis bis ganz Deutschland – frei wählbar."
    },
    {
      question: "Kann ich auch nur kurz testen?",
      answer: "Ja, ab 4 Wochen Laufzeit möglich."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Performance-Marketing & Werbeanzeigen | Altovate Saarburg / Region Saar–Mosel</title>
        <meta 
          name="description" 
          content="Online-Werbung, die wirkt: Wir schalten Meta- und Google-Ads für Unternehmen aus Saarburg, Trier & Umgebung – messbar, regional & effizient. Jetzt Kampagne starten mit Altovate." 
        />
        <meta name="keywords" content="Werbeanzeigen Saarburg, Performance Marketing Agentur Saarland, Meta Ads Saar, Facebook Werbung Trier, Google Ads Betreuung Region Saarburg, Online Werbung für Unternehmen" />
        <link rel="canonical" href="https://altovate.de/werbeanzeigen-saarburg" />
      </Helmet>

      <NewNavigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background pt-16">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background"
          style={{ y, opacity }}
        />
        
        {/* Decorative elements with parallax and mouse movement */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Megaphone className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Performance-Marketing aus der Region</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Werbeanzeigen, die wirken – statt Kosten, die verschwinden.
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Performance-Marketing für Saarburg, Trier & Region Saar/Mosel. Wir bringen dein Unternehmen sichtbar nach vorne – messbar, transparent und gezielt.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="btn-hero px-8 py-6 text-lg group hover-scale"
              >
                Jetzt Kampagne starten
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is Performance Marketing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Was ist Performance-Marketing eigentlich?
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Viele Unternehmer:innen kennen Werbung nur aus dem Kreisblatt oder vom Plakat an der Straße. 
                Online-Werbung funktioniert anders: Du entscheidest, wer deine Anzeige sieht, wo sie angezeigt wird und wann.
              </p>
              <p className="text-lg leading-relaxed">
                Performance-Marketing bedeutet: Wir messen, was passiert. Jeder Klick, jede Anfrage, jeder Kontakt ist 
                nachvollziehbar. So weißt du, ob dein Geld wirklich arbeitet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-primary/20 hover:border-primary/40 transition-all hover-scale group cursor-pointer">
                  <CardContent className="p-8">
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <MousePointerClick className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3">Push-Marketing</h3>
                    <p className="text-muted-foreground">
                      z. B. Facebook & Instagram – wir zeigen dein Angebot aktiven Nutzer:innen mit passenden Interessen.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-primary/20 hover:border-primary/40 transition-all hover-scale group cursor-pointer">
                  <CardContent className="p-8">
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Search className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3">Pull-Marketing</h3>
                    <p className="text-muted-foreground">
                      z. B. Google – wir erscheinen, wenn jemand gezielt nach deiner Dienstleistung sucht.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it makes sense */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Warum das Sinn macht
            </h2>

            <Card className="border-primary/20 bg-card mb-12">
              <CardContent className="p-8">
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    Du gibst 400€ pro Woche für eine Anzeige im Kreisblatt aus.
                  </p>
                  <p className="text-lg">
                    Du weißt nicht, wer sie sieht, wie viele das interessiert oder ob überhaupt jemand reagiert.
                  </p>
                  <div className="border-l-4 border-primary pl-6 my-6">
                    <p className="text-lg font-semibold text-foreground">
                      Mit Online-Werbung drehst du das Prinzip um:
                    </p>
                    <p className="text-lg mt-2">
                      Wir zeigen deine Anzeige nur den Menschen, die in deinem Umkreis leben (z. B. 25 km um Saarburg), 
                      in deiner Zielgruppe liegen und echtes Interesse haben.
                    </p>
                  </div>
                  <p className="text-lg font-semibold text-primary">
                    Du erreichst also nicht alle – sondern die Richtigen.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-primary/20 hover:border-primary/40 transition-all text-center hover-scale group cursor-pointer h-full">
                    <CardContent className="p-8">
                      <motion.div 
                        className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <advantage.icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                      <p className="text-muted-foreground">{advantage.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Channel Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Welche Optionen gibt es?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {channels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 h-full">
                    <CardContent className="p-8">
                      <motion.div 
                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <channel.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-4">{channel.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {channel.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-lg font-medium">
                💡 Beide Kanäle lassen sich auch kombinieren – für maximale Sichtbarkeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              So läuft unsere Zusammenarbeit ab
            </h2>

            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

              <div className="space-y-12">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="relative flex items-start gap-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl z-10"
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {step.number}
                    </motion.div>
                    <Card className="flex-1 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-lg">{step.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Preise & Pakete
            </h2>
            <p className="text-xl text-muted-foreground mb-16 text-center">
              Kampagnen müssen kein Vermögen kosten – wichtig ist, dass sie sauber aufgesetzt sind.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card 
                    className={`relative border-2 transition-all h-full ${
                      pkg.isPopular 
                        ? 'border-primary shadow-xl shadow-primary/20 md:scale-105' 
                        : 'border-primary/20 hover:border-primary/40 hover:shadow-lg'
                    }`}
                  >
                    {pkg.isPopular && (
                      <motion.div 
                        className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-bold rounded-full"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        BELIEBT
                      </motion.div>
                    )}
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <div className="text-3xl font-bold text-primary mb-4">{pkg.price}</div>
                      
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, fIndex) => (
                          <motion.li 
                            key={fIndex} 
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: fIndex * 0.1 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <p className="text-sm text-muted-foreground italic">{pkg.note}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
              Zzgl. Werbebudget – individuell wählbar (empfohlen mind. 300–500 €/Monat).
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Häufige Fragen
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="border border-primary/20 rounded-lg px-6 bg-card hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10"
                  >
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 bg-background relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Bereit, dein Werbebudget endlich sinnvoll einzusetzen?
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Lass uns deine Kampagne planen – kostenloses Erstgespräch in Saarburg oder online.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button 
                size="lg" 
                onClick={() => {
                  navigate('/#contact');
                  setTimeout(scrollToContact, 100);
                }}
                className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg group"
              >
                Jetzt starten
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Werbeanzeigen;