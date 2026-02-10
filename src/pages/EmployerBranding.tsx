import { Helmet } from "react-helmet";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  X, Target, Smartphone, DollarSign, Heart, Bike, 
  Shield, GraduationCap, Gift, Search, Lightbulb, 
  Megaphone, Users, CheckCircle2, ArrowRight 
} from "lucide-react";
import NewNavigation from "@/components/sections/NewNavigation";
import VisualBreadcrumb from '@/components/VisualBreadcrumb';
import Footer from "@/components/Footer";
import InternalLinks from "@/components/sections/InternalLinks";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const EmployerBranding = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const handleCTAClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  const benefits = [
    { icon: DollarSign, title: "Transparente Gehälter", desc: "Zeig eine Range – keiner bewirbt sich ins Blaue." },
    { icon: Heart, title: "Work-Life-Balance & Flexibilität", desc: "Homeoffice, Workation, Familienzeit." },
    { icon: Bike, title: "Firmenfitness & Gesundheit", desc: "Partner Circle Fitness – fitte Mitarbeiter, weniger Ausfälle, mehr Teamgefühl." },
    { icon: Shield, title: "Betriebliche Vorsorge", desc: "Partner BAV Workflow – Steuervorteile & Zukunftssicherheit für Arbeitgeber und Team." },
    { icon: GraduationCap, title: "Weiterbildung", desc: "Partner KMU (Brigitte Konstroffer) – staatlich förderbare Schulungen für Digitalisierung & Gesundheitsmanagement." },
    { icon: Gift, title: "Weitere Benefits", desc: "Urlaubs- & Weihnachtsgeld, Rabatte, Jobrad, Firmenwagen, Diensthandy u. v. m." },
  ];

  const steps = [
    { icon: Search, title: "Analyse & Strategie", desc: "Wir prüfen deinen aktuellen Auftritt (Web, Social, Stellenanzeigen)." },
    { icon: Lightbulb, title: "Story & Content", desc: "Wir entwickeln deine Arbeitgeberstory – Team, Alltag, Werte." },
    { icon: Megaphone, title: "Social Media & Kampagnen", desc: "Wir setzen dein Unternehmen authentisch in Szene und platzieren deine Jobs gezielt auf Meta & Google." },
    { icon: Users, title: "Partnernetzwerk einbinden", desc: "Wir vernetzen dich mit Circle Fitness (Firmenfitness), BAV Workflow (Vorsorge) und Partner KMU (Weiterbildung) – für echte Mehrwerte im Recruiting." },
  ];

  const packages = [
    {
      name: "Employer Check",
      price: "ab 350 €",
      features: [
        "Analyse von Social Media & Webseite",
        "Empfehlungen zur Optimierung deines Arbeitgeberauftritts",
        "1-stündiges Beratungsgespräch (online oder vor Ort)"
      ]
    },
    {
      name: "Employer Kickstart",
      price: "ab 950 €",
      features: [
        "Story & Contentplanung für 3 Monate",
        "Foto/Video-Shooting vor Ort inkl. Team-Content",
        "Aufbereitung deiner Social-Media-Profile & Highlights"
      ],
      highlighted: true
    },
    {
      name: "Employer Growth",
      price: "ab 1.500 €/Monat",
      features: [
        "Laufende Contentproduktion (10 Videos / Monat)",
        "Anzeigenkampagnen für Mitarbeitergewinnung",
        "Performance-Reporting & Optimierung",
        "(Optional mit Partnernetzwerk für Benefits und Vorsorge)"
      ]
    }
  ];

  const faqs = [
    {
      question: "Was ist Employer Branding und was bringt es konkret?",
      answer: "Employer Branding ist der strategische Aufbau einer Arbeitgebermarke. Das Ziel ist es, ein Unternehmen als attraktiven Arbeitgeber sichtbar zu machen – nach außen für Bewerber:innen und nach innen für bestehende Mitarbeiter:innen. Die konkreten Ergebnisse sind mehr qualifizierte Bewerbungen, kürzere Besetzungszeiten und geringere Fluktuation."
    },
    {
      question: "Wie lange dauert ein Employer-Branding-Prozess?",
      answer: "Erste sichtbare Ergebnisse – z. B. ein optimierter Social-Media-Auftritt und neuer Team-Content – sind bei Altovate nach wenigen Wochen verfügbar. Eine nachhaltige Wirkung auf Bewerberqualität und -quantität zeigt sich erfahrungsgemäß innerhalb von 3 bis 6 Monaten."
    },
    {
      question: "Ist Social Media für Employer Branding notwendig?",
      answer: "Social Media ist für modernes Employer Branding unverzichtbar. Der Grund: Potenzielle Bewerber:innen informieren sich über Instagram, LinkedIn und Facebook über ihren zukünftigen Arbeitgeber, bevor sie sich bewerben. Ein professioneller Social-Media-Auftritt ist damit ein zentraler Faktor für die Entscheidung einer Bewerbung."
    },
    {
      question: "Wie funktioniert das Partnernetzwerk von Altovate?",
      answer: "Altovate arbeitet mit spezialisierten Partnern zusammen: Circle Fitness für Firmenfitness, BAV Workflow für betriebliche Vorsorge und Partner KMU für staatlich förderbare Weiterbildungen. Altovate stellt den Kontakt her und integriert die Benefits nahtlos in die Employer-Branding-Strategie."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Employer Branding 2025 | Mitarbeitergewinnung in Saarburg & Region Saar–Mosel | Altovate</title>
        <meta name="description" content="Keine Bewerbungen mehr? Dann liegt's nicht an den Menschen – sondern an deinem Auftritt. Employer Branding & Mitarbeitergewinnung 2025 von Altovate: authentisch, modern und sichtbar." />
        <meta name="keywords" content="Employer Branding Saarburg, Mitarbeitergewinnung Trier, Employer Branding Agentur Saarland, Social Media Recruiting Luxemburg, Arbeitgebermarke aufbauen Saar, Personalmarketing Region Mosel" />
        <link rel="canonical" href="https://altovate.de/employer-branding-saarburg" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://altovate.de/employer-branding-saarburg" />
        <meta property="og:title" content="Employer Branding 2025 | Mitarbeitergewinnung in Saarburg & Region Saar–Mosel | Altovate" />
        <meta property="og:description" content="Keine Bewerbungen mehr? Dann liegt's nicht an den Menschen – sondern an deinem Auftritt. Employer Branding & Mitarbeitergewinnung 2025 von Altovate: authentisch, modern und sichtbar." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://altovate.de/employer-branding-saarburg" />
        <meta property="twitter:title" content="Employer Branding 2025 | Mitarbeitergewinnung in Saarburg & Region Saar–Mosel | Altovate" />
        <meta property="twitter:description" content="Keine Bewerbungen mehr? Dann liegt's nicht an den Menschen – sondern an deinem Auftritt. Employer Branding & Mitarbeitergewinnung 2025 von Altovate: authentisch, modern und sichtbar." />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Altovate - Employer Branding Agentur",
            "description": "Employer Branding & Mitarbeitergewinnung für Unternehmen in Saarburg, Trier & Luxemburg",
            "url": "https://altovate.de/employer-branding-saarburg",
            "areaServed": ["Saarburg", "Trier", "Luxemburg", "Saarland", "Hunsrück", "Region Saar-Mosel"],
            "serviceType": ["Employer Branding", "Mitarbeitergewinnung", "Social Media Recruiting", "Personalmarketing"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Saarburg",
              "addressRegion": "Rheinland-Pfalz",
              "addressCountry": "DE"
            }
          })}
        </script>
      </Helmet>

      <NewNavigation />
      <VisualBreadcrumb items={[{ label: "Lösungen", href: "/#angebote" }, { label: "Employer Branding" }]} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff1c5c]/20 via-transparent to-[#ff1c5c]/10" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-foreground"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Mitarbeiter finden? Dann zeig erstmal, wer du bist.
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Employer Branding 2025 für Unternehmen in Saarburg, Trier & Luxemburg.
              <br />
              Wir machen dein Unternehmen sichtbar – als Arbeitgeber, der Menschen anzieht statt nur anzeigen schaltet.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                onClick={handleCTAClick}
                className="bg-[#ff1c5c] hover:bg-[#ff3d75] text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-[#ff1c5c]/30 hover:shadow-[#ff1c5c]/50 transition-all"
              >
                Jetzt Beratung starten
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#ff1c5c]/20 blur-xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-[#ff1c5c]/10 blur-2xl"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-12 text-foreground text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Das Problem: Unsichtbare Arbeitgeber
            </motion.h2>

            <motion.div 
              className="space-y-6 text-lg md:text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>Der häufigste Grund für ausbleibende Bewerbungen ist nicht der Fachkräftemangel, sondern ein unsichtbarer Arbeitgeberauftritt. Viele Unternehmen haben keine aktiven Social-Media-Profile, veraltete Webseiten und keine Einblicke in den Arbeitsalltag.</p>
              
              <p>Das Ergebnis: Potenzielle Bewerber:innen finden keine Informationen über das Unternehmen als Arbeitgeber und bewerben sich bei sichtbareren Wettbewerbern.</p>
              
              <p className="text-[#ff1c5c] font-bold text-2xl">
                2025 musst du als Arbeitgeber die Hose runterlassen.
              </p>
              
              <p>Bewerber:innen erwarten heute Transparenz: Wie sieht der Arbeitsplatz aus? Wer sind die Kolleg:innen? Welche Werte lebt das Unternehmen tatsächlich?</p>
              
              <p className="font-semibold">Die Arbeitsmarkt-Realität in der Region Saar-Mosel: Es herrscht ein Arbeitnehmermarkt. Unternehmen müssen sich bei Bewerber:innen bewerben – nicht umgekehrt.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            So funktioniert Mitarbeitergewinnung 2025
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-card border-border h-full hover:border-[#ff1c5c]/50 transition-all">
                <CardContent className="p-8">
                  <X className="w-12 h-12 text-[#ff1c5c] mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Authentizität statt Floskeln</h3>
                  <p className="text-muted-foreground">
                    Stellenanzeigen mit Phrasen wie „flache Hierarchie" und „Obstkorb" erzeugen keine Bewerbungen mehr. Bewerber:innen erwarten konkrete, überprüfbare Informationen über den Arbeitsalltag.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-card border-border h-full hover:border-[#ff1c5c]/50 transition-all">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-[#ff1c5c] mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Arbeitgebermarke als System</h3>
                  <p className="text-muted-foreground">
                    Eine authentische Arbeitgebermarke zeigt den realen Arbeitsalltag: Team, Räumlichkeiten, Kultur und Werte. Altovate entwickelt dieses Bild systematisch über Content, Social Media und Kampagnen.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-card border-border h-full hover:border-[#ff1c5c]/50 transition-all">
                <CardContent className="p-8">
                  <Smartphone className="w-12 h-12 text-[#ff1c5c] mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Sichtbarkeit auf den richtigen Kanälen</h3>
                  <p className="text-muted-foreground">
                    Potenzielle Mitarbeiter:innen sind auf Instagram, Facebook und LinkedIn aktiv – nicht im Kreisblatt. Employer Branding muss dort stattfinden, wo die Zielgruppe ihre Zeit verbringt.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            className="max-w-3xl mx-auto mt-12 p-8 bg-card rounded-lg border border-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-xl text-muted-foreground italic">
              Einen Azubi findest du nicht im Kreisblatt – höchstens, wenn die Oma deine Anzeige liest.
              Aber auf Empfehlung der Oma bewirbt sich niemand mehr.
              <br /><br />
              <span className="text-foreground font-semibold">
                Zeig dich dort, wo deine zukünftigen Mitarbeiter wirklich unterwegs sind.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 text-foreground text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Was einen attraktiven Arbeitgeber 2025 ausmacht
          </motion.h2>

          <motion.div 
            className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Mitarbeitergewinnung funktioniert 2025 über nachweisbare Leistungen als Arbeitgeber, nicht über Versprechen in Stellenanzeigen.
            </p>
            <p>
              Entscheidend ist, welche konkreten Vorteile ein Unternehmen bietet – und wie glaubwürdig diese nach außen kommuniziert werden.
            </p>
            <p>
              Besonders in der Grenzregion zu Luxemburg, wo höhere Gehälter locken, müssen Arbeitgeber mit anderen Werten überzeugen: Benefits, Weiterentwicklung, Gesundheitsangebote und gelebter Teamkultur.
            </p>
            <p className="font-semibold text-foreground">
              Diese Leistungen sind 2025 keine „Extras" mehr – sie sind Grunderwartungen von Bewerber:innen:
            </p>
            <p>
              Denn genau das sind heute Dinge, die Bewerber voraussetzen:
            </p>
            <ul className="list-none space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ff1c5c] flex-shrink-0 mt-0.5" />
                faire und transparente Gehälter
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ff1c5c] flex-shrink-0 mt-0.5" />
                flexible Arbeitsmodelle & Homeoffice
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ff1c5c] flex-shrink-0 mt-0.5" />
                Weiterbildungs- und Entwicklungsmöglichkeiten
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ff1c5c] flex-shrink-0 mt-0.5" />
                Gesundheits- und Fitnessangebote
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ff1c5c] flex-shrink-0 mt-0.5" />
                betriebliche Vorsorge & Absicherung
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ff1c5c] flex-shrink-0 mt-0.5" />
                kleine Gesten, die Wertschätzung zeigen
              </li>
            </ul>
            <p className="font-semibold text-foreground pt-4">
              Employer Branding bedeutet, diese Dinge sichtbar zu machen – auf deiner Website, in Social Media und im echten Arbeitsalltag.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 text-foreground text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Starke Partner für starke Arbeitgeber
          </motion.h2>

          <motion.p 
            className="text-center text-lg text-muted-foreground max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Wir arbeiten eng mit ausgewählten Expert:innen zusammen, die wir wärmstens empfehlen können –
            für Themen, die dein Employer Branding nicht nur schöner, sondern nachhaltiger machen:
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-card border-border h-full hover:border-[#ff1c5c]/50 transition-all">
                <CardContent className="p-8">
                  <Bike className="w-12 h-12 text-[#ff1c5c] mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Firmenfitness & Gesundheit</h3>
                  <p className="text-muted-foreground mb-4">
                    Circle Fitness
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    → Gesunde, fitte Mitarbeiter, weniger Ausfälle, mehr Energie im Team.
                  </p>
                  <a 
                    href="https://www.circlefitnessclub.de/firmenfitness-betriebliches-gesundheitsmanagement" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ff1c5c] hover:text-[#ff3d75] font-semibold text-sm inline-flex items-center group"
                  >
                    Mehr erfahren 
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-card border-border h-full hover:border-[#ff1c5c]/50 transition-all">
                <CardContent className="p-8">
                  <Shield className="w-12 h-12 text-[#ff1c5c] mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Betriebliche Vorsorge</h3>
                  <p className="text-muted-foreground mb-4">
                    BAV Workflow
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    → Steueroptimierte Vorsorgelösungen für Arbeitgeber & Arbeitnehmer. Betriebliche Vorsorge (BBU, BAV, BKV)
                  </p>
                  <a 
                    href="https://www.bav-workflow.de" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ff1c5c] hover:text-[#ff3d75] font-semibold text-sm inline-flex items-center group"
                  >
                    Mehr erfahren 
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-card border-border h-full hover:border-[#ff1c5c]/50 transition-all">
                <CardContent className="p-8">
                  <GraduationCap className="w-12 h-12 text-[#ff1c5c] mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Weiterbildung & Förderung</h3>
                  <p className="text-muted-foreground mb-4">
                    Partner KMU
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    → Staatlich förderbare Schulungen & Qualifizierung im Bereich Digitalisierung & Gesundheitsmanagement.
                  </p>
                  <a 
                    href="https://partner-kmu.de/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ff1c5c] hover:text-[#ff3d75] font-semibold text-sm inline-flex items-center group"
                  >
                    Mehr erfahren 
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.p 
            className="text-center text-lg text-muted-foreground max-w-4xl mx-auto mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Diese Partner unterstützen Unternehmen in der gesamten Großregion – von Saarburg über Trier bis Luxemburg.
            <br />
            <span className="text-foreground font-semibold">
              Wir stellen auf Wunsch den direkten Kontakt her und zeigen dir, welche Förderungen und Modelle für dich sinnvoll sind.
            </span>
          </motion.p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Wie wir dich unterstützen
          </motion.h2>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Animated connecting line */}
              <motion.div 
                className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-[#ff1c5c] via-[#ff1c5c] to-[#ff1c5c]/20 hidden md:block origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ height: "100%" }}
              />

              <div className="space-y-12">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
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
                        className="flex-shrink-0 w-16 h-16 rounded-full bg-[#ff1c5c] flex items-center justify-center text-white z-10 shadow-lg shadow-[#ff1c5c]/30"
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
                          boxShadow: "0 10px 40px rgba(255, 28, 92, 0.4)"
                        }}
                      >
                        <Icon className="w-8 h-8" />
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
                        <Card className="bg-card border-border hover:border-[#ff1c5c]/40 transition-all hover:shadow-lg hover:shadow-[#ff1c5c]/10 hover:-translate-y-1">
                          <CardContent className="p-6">
                            <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                            <p className="text-muted-foreground text-lg">{step.desc}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Unsere Pakete
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className={`h-full ${pkg.highlighted ? 'bg-[#ff1c5c] border-[#ff1c5c]' : 'bg-card border-border'} hover:shadow-xl hover:shadow-[#ff1c5c]/20 transition-all`}>
                  <CardContent className="p-8">
                    <h3 className={`text-2xl font-bold mb-4 ${pkg.highlighted ? 'text-white' : 'text-foreground'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-3xl font-bold mb-6 ${pkg.highlighted ? 'text-white' : 'text-[#ff1c5c]'}`}>
                      {pkg.price}
                    </p>
                    <ul className="space-y-4">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.highlighted ? 'text-white' : 'text-[#ff1c5c]'}`} />
                          <span className={pkg.highlighted ? 'text-white' : 'text-muted-foreground'}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p 
            className="text-center text-sm text-muted-foreground/60 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Alle Pakete exkl. Media-Budget für Werbeanzeigen (z. B. Meta / Google).
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-foreground text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </motion.h2>

          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="bg-card border-border rounded-lg px-6 hover:border-[#ff1c5c]/50 transition-colors">
                    <AccordionTrigger className="text-foreground hover:text-[#ff1c5c] text-left text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 bg-background relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#ff1c5c]/10 via-transparent to-[#ff1c5c]/5"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Zeig, warum du ein geiler Arbeitgeber bist – nicht nur, dass du einer bist.
            </h2>
            
            <p className="text-xl md:text-2xl mb-10 text-muted-foreground">
              Lass uns deine Arbeitgebermarke aufbauen – ehrlich, modern und mit System.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                onClick={handleCTAClick}
                className="bg-[#ff1c5c] hover:bg-[#ff3d75] text-white text-lg px-10 py-7 rounded-full shadow-xl shadow-[#ff1c5c]/40 hover:shadow-[#ff1c5c]/60 transition-all"
              >
                Jetzt Erstgespräch vereinbaren
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#ff1c5c]/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#ff1c5c]/15 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </section>

      {/* Sticky CTA Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border z-50">
        <Button 
          onClick={handleCTAClick}
          className="w-full bg-[#ff1c5c] hover:bg-[#ff3d75] text-white rounded-full shadow-lg"
        >
          Jetzt Beratung starten
        </Button>
      </div>

      <InternalLinks currentPage="/employer-branding-saarburg" />
      <Footer />
    </>
  );
};

export default EmployerBranding;
