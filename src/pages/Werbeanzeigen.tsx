import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Target, TrendingUp, BarChart3, CheckCircle2, ArrowRight, Megaphone, MousePointerClick, Check, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import SEOSchema from "@/components/SEOSchema";
import NewNavigation from "@/components/sections/NewNavigation";
import VisualBreadcrumb from '@/components/VisualBreadcrumb';
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import InternalLinks from "@/components/sections/InternalLinks";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Werbeanzeigen = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Waitlist state
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !consent) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error('Bitte gib eine gültige E-Mail-Adresse ein.');
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'waitlist-ads',
          email: email.trim(),
          message: 'Warteliste für Meta Ads Betreuung',
        },
      });
      if (error) throw error;
      setIsSubmitted(true);
      toast.success('Du bist auf der Warteliste!');
    } catch (error) {
      console.error('Error submitting waitlist:', error);
      toast.error('Fehler beim Eintragen. Bitte versuche es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const advantages = [
    {
      icon: Target,
      title: "Zielgerichtet",
      description: "Performance-Marketing ist zielgerichtet, weil Anzeigen nur an definierte Zielgruppen nach Region, Alter und Interessen ausgespielt werden."
    },
    {
      icon: BarChart3,
      title: "Messbar",
      description: "Jeder Klick, jede Anfrage und jeder Kontakt wird in Echtzeit erfasst. So ist der Return on Investment (ROI) jederzeit nachvollziehbar."
    },
    {
      icon: TrendingUp,
      title: "Effizient",
      description: "Durch präzises Targeting entfällt der Streuverlust klassischer Werbung. Das Ergebnis ist eine höhere Wirkung bei geringerem Budget."
    }
  ];

  const workloadItems = [
    {
      title: "Zielgruppenanalyse & Marktrecherche",
      description: "Definition der idealen Zielgruppe nach Region, Alter, Interessen und Kaufverhalten. Wettbewerbsanalyse und Marktpotenzial-Einschätzung."
    },
    {
      title: "Kampagnenstruktur & Anzeigengruppen",
      description: "Aufbau einer sauberen Kampagnenarchitektur mit klar getrennten Anzeigengruppen, Budgetverteilung und Laufzeitenplanung."
    },
    {
      title: "Creative-Erstellung (Text, Bild, Video)",
      description: "Entwicklung von Anzeigentexten, Visuals und Video-Creatives, die zur Zielgruppe passen und Aufmerksamkeit erzeugen."
    },
    {
      title: "Pixel- & Conversion-Tracking Setup",
      description: "Einrichtung des Meta-Pixels, Definition von Conversion-Events und technische Anbindung an Website oder Landingpage."
    },
    {
      title: "A/B-Testing & Hook-Strategien",
      description: "Systematisches Testen verschiedener Anzeigenvarianten, Headlines und Hooks, um die beste Performance zu identifizieren."
    },
    {
      title: "Laufende Optimierung & Budget-Steuerung",
      description: "Tägliche Überwachung der Kampagnen-Performance, Anpassung von Geboten, Zielgruppen und Creatives basierend auf Echtzeitdaten."
    },
    {
      title: "Monatliches Reporting & Auswertung",
      description: "Transparente Berichte mit allen relevanten KPIs: Reichweite, Klicks, Kosten pro Lead, Conversion-Rate und ROI."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Zielgruppen-Briefing",
      description: "Ich definiere mit dir, wer dein Kunde wirklich ist – Region, Alter, Interessen, Budget."
    },
    {
      number: "02",
      title: "Kampagnen-Setup",
      description: "Erstellung deiner Meta-Anzeigen: Texte, Bilder/Videos, Zielgruppe und Tracking."
    },
    {
      number: "03",
      title: "Freigabe & Start",
      description: "Ich schalte die Kampagne live – erste Ergebnisse sind schon nach wenigen Tagen sichtbar."
    },
    {
      number: "04",
      title: "Auswertung & Optimierung",
      description: "Ich prüfe, was funktioniert, und optimiere Anzeigen, Zielgruppen und Budget laufend."
    },
    {
      number: "05",
      title: "Reporting",
      description: "Du bekommst regelmäßig Einblicke in Reichweite, Klicks und Leads."
    }
  ];

  const faqs = [
    {
      question: "Brauche ich viel Budget für Meta Ads?",
      answer: "Meta Ads sind bereits ab 5–10 € pro Tag möglich. Altovate empfiehlt ein Mindestbudget von 300–500 € pro Monat für messbare Ergebnisse in der Region Saarburg, Trier und Luxemburg."
    },
    {
      question: "Wie schnell liefern Meta Ads Ergebnisse?",
      answer: "Erste Klicks und Impressionen sind in der Regel innerhalb von 1–3 Tagen sichtbar. Belastbare Daten für die Optimierung einer Kampagne liegen nach circa 4 Wochen vor."
    },
    {
      question: "Wie regional können Meta Ads eingesetzt werden?",
      answer: "Meta Ads lassen sich auf einen Umkreis von 5 km bis ganz Deutschland eingrenzen. Altovate setzt regionale Kampagnen typischerweise im Raum Saarburg, Trier, Konz, Luxemburg und Hunsrück um."
    },
    {
      question: "Warum nur Meta Ads und kein Google?",
      answer: "Meta Ads (Facebook & Instagram) sind für die meisten lokalen Dienstleister und KMU der effektivste Einstieg in Performance-Marketing. Die Kombination aus visuellem Content, präzisem regionalem Targeting und vergleichsweise niedrigen Einstiegskosten liefert in der Praxis die besten Ergebnisse für Unternehmen in der Region."
    },
    {
      question: "Kann ich Meta Ads auch kurzfristig testen?",
      answer: "Ja, Altovate bietet Meta-Ads-Kampagnen ab einer Laufzeit von 4 Wochen an. So lässt sich die Wirksamkeit einer Kampagne mit überschaubarem Investment prüfen."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Meta Ads Betreuung (Facebook & Instagram) | Altovate Saarburg</title>
        <meta 
          name="description" 
          content="Professionelle Meta Ads Betreuung für Unternehmen aus Saarburg, Trier & Region – von Strategie über Creative bis Reporting. Messbar, regional & effizient." 
        />
        <meta name="keywords" content="Meta Ads Saarburg, Facebook Werbung Trier, Instagram Ads Region Saar-Mosel, Performance Marketing Saarland, Social Ads Betreuung" />
        <link rel="canonical" href="https://altovate.de/werbeanzeigen-saarburg" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://altovate.de/werbeanzeigen-saarburg" />
        <meta property="og:title" content="Meta Ads Betreuung (Facebook & Instagram) | Altovate Saarburg" />
        <meta property="og:description" content="Professionelle Meta Ads Betreuung für Unternehmen aus Saarburg, Trier & Region – messbar, regional & effizient." />
        <meta property="og:image" content="https://altovate.de/altovate-logo.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://altovate.de/werbeanzeigen-saarburg" />
        <meta name="twitter:title" content="Meta Ads Betreuung (Facebook & Instagram) | Altovate Saarburg" />
        <meta name="twitter:description" content="Professionelle Meta Ads Betreuung für Unternehmen aus Saarburg, Trier & Region – messbar, regional & effizient." />
        <meta name="twitter:image" content="https://altovate.de/altovate-logo.png" />
      </Helmet>
      <SEOSchema
        page="service"
        faqItems={faqs}
        service={{
          name: "Meta Ads Betreuung (Facebook & Instagram)",
          description: "Professionelle Meta Ads Betreuung für Unternehmen aus Saarburg, Trier & Region – von Strategie über Creative-Erstellung bis laufende Optimierung und Reporting.",
          url: "https://altovate.de/werbeanzeigen-saarburg"
        }}
        breadcrumbs={[
          { name: "Startseite", url: "https://altovate.de/" },
          { name: "Meta Ads Betreuung", url: "https://altovate.de/werbeanzeigen-saarburg" }
        ]}
      />

      <NewNavigation />
      <VisualBreadcrumb items={[{ label: "Lösungen", href: "/#angebote" }, { label: "Meta Ads Betreuung" }]} />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background pt-16">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background"
          style={{ y, opacity }}
        />
        
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
              <span className="text-sm text-primary font-medium">Meta Ads aus der Region</span>
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
              Meta Ads (Facebook & Instagram) für Saarburg, Trier & Region Saar/Mosel. Ich bringe dein Unternehmen sichtbar nach vorne – messbar, transparent und gezielt.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                onClick={() => {
                  const el = document.getElementById('waitlist');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-hero px-8 py-6 text-lg group hover-scale"
              >
                Interesse bekunden
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
              Was ist Performance-Marketing?
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Performance-Marketing ist eine Form des Online-Marketings, bei der Werbemaßnahmen anhand messbarer Kennzahlen wie Klicks, Anfragen und Conversions gesteuert und optimiert werden. Im Gegensatz zu klassischer Werbung (z. B. Kreisblatt oder Plakatwerbung) bestimmt der Werbetreibende exakt, wer die Anzeige sieht, wann sie ausgespielt wird und in welcher Region.
              </p>
              <p className="text-lg leading-relaxed">
                Der Vorteil von Performance-Marketing ist die vollständige Messbarkeit: Jeder Klick, jede Anfrage und jeder Kontakt wird in Echtzeit erfasst. So lässt sich der Return on Investment (ROI) einer Kampagne jederzeit nachvollziehen und das Budget gezielt einsetzen.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                  <h3 className="text-xl font-bold mb-3">Meta Ads – Push-Marketing über Facebook & Instagram</h3>
                  <p className="text-muted-foreground">
                    Meta Ads ist ein Push-Marketing-Kanal. Das bedeutet: Anzeigen werden Nutzer:innen auf Basis ihrer Interessen und ihres Standorts angezeigt – im Feed, in Stories oder Reels. So erreicht man auch Menschen, die noch nicht aktiv nach einer Lösung suchen. Für lokale Dienstleister und KMU ist das der effektivste Einstieg in bezahlte Online-Werbung.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why it makes sense */}
      <section className="py-20 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Performance-Marketing vs. klassische Werbung: Ein Vergleich
            </h2>

            <Card className="border-primary/20 bg-card mb-12">
              <CardContent className="p-8">
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    Ein Beispiel: Eine Anzeige im Kreisblatt kostet ca. 400 € pro Woche. Dabei ist nicht messbar, wer die Anzeige sieht, wie viele Personen sich dafür interessieren oder ob eine einzige Anfrage daraus entsteht.
                  </p>
                  <div className="border-l-4 border-primary pl-6 my-6">
                    <p className="text-lg font-semibold text-foreground">
                      So funktioniert Performance-Marketing im Vergleich:
                    </p>
                    <p className="text-lg mt-2">
                      Mit Meta Ads wird die Anzeige ausschließlich an Personen ausgespielt, die in einem definierten Umkreis leben (z. B. 25 km um Saarburg), zur Zielgruppe gehören und ein nachweisbares Interesse an der beworbenen Leistung haben. Jede Interaktion wird erfasst und ausgewertet.
                    </p>
                  </div>
                  <p className="text-lg font-semibold text-primary">
                    Der Unterschied: Meta Ads erreichen nicht alle, sondern die Richtigen – messbar und nachvollziehbar.
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

      {/* What Meta Ads management involves */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Was eine professionelle Meta-Ads-Betreuung umfasst
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meta Ads sind mehr als „eine Anzeige schalten". Eine professionelle Betreuung umfasst Strategie, Umsetzung, Analyse und laufende Optimierung.
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
              <div className="space-y-6">
                {workloadItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-foreground font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
             <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              So funktioniert die Zusammenarbeit
            </motion.h2>

            <div className="relative">
              <motion.div 
                className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/20 hidden md:block origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ height: "100%" }}
              />

              <div className="space-y-12">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="relative flex items-start gap-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ 
                      duration: 0.7, 
                      delay: index * 0.15,
                      ease: "easeOut"
                    }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl z-10 shadow-lg shadow-primary/30"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.15 + 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: 360,
                      }}
                    >
                      {step.number}
                    </motion.div>
                    <motion.div
                      className="flex-1"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.15 + 0.3 
                      }}
                    >
                      <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                        <CardContent className="p-6">
                          <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground text-lg">{step.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slots belegt + Warteliste */}
      <section id="waitlist" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/10 rounded-full px-6 py-3 mb-6">
              <span className="text-foreground font-medium">Kapazität aktuell ausgelastet</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meta-Ads-Betreuung
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Altovate bietet professionelle Meta-Ads-Betreuung für Unternehmen in der Region an – von der Strategie über die Creative-Erstellung bis zur laufenden Optimierung.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Um die Qualität der Betreuung sicherzustellen, ist die Anzahl der Kunden bewusst limitiert. Aktuell sind alle Plätze belegt.
            </p>

            <p className="text-muted-foreground text-sm mb-8">
              Trag dich ein und erfahre vorab, wenn wieder ein Platz frei wird.
            </p>

            {/* Waitlist Form */}
            {!isSubmitted ? (
              <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
                <div className="flex gap-2 mb-4">
                  <Input
                    type="email"
                    placeholder="Deine E-Mail-Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    disabled={isSubmitting}
                    maxLength={255}
                  />
                  <Button 
                    type="submit" 
                    disabled={!email.trim() || !consent || isSubmitting}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <div className="flex items-start gap-2 justify-center">
                  <Checkbox
                    id="consent-ads"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked === true)}
                    disabled={isSubmitting}
                  />
                  <label 
                    htmlFor="consent-ads" 
                    className="text-xs text-muted-foreground text-left cursor-pointer"
                  >
                    Ich bin damit einverstanden, per E-Mail kontaktiert zu werden. 
                    Mehr dazu in der{' '}
                    <Link to="/datenschutz" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </Link>.
                  </label>
                </div>
              </form>
            ) : (
              <div className="max-w-md mx-auto bg-primary/10 rounded-xl p-6">
                <Check className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-foreground font-medium">Du bist auf der Liste!</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Ich melde mich, sobald ein Platz frei wird.
                </p>
              </div>
            )}

            {/* Alternative hint */}
            <div className="mt-12 p-6 bg-muted/30 rounded-xl border border-border max-w-2xl mx-auto">
              <p className="text-muted-foreground mb-3">
                Du möchtest nicht warten? In einer Strategie-Session besprechen wir, wie du Meta Ads selbst aufsetzen kannst.
              </p>
              <Button
                variant="outline"
                onClick={() => navigate('/erstkontakt')}
                className="group"
              >
                Strategie-Session anfragen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
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

      <InternalLinks currentPage="/werbeanzeigen-saarburg" />
      <Footer />
    </>
  );
};

export default Werbeanzeigen;
