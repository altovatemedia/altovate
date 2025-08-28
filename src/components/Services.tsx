import { Star, Zap, TrendingUp, Users, Heart, Bot } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
const Packages = () => {
  const packages = [{
    icon: Star,
    title: "Der Markenmagnet",
    price: "5.500 €",
    subline: "Dein komplettes Marken-Makeover – Website, Ads, Content, Funnel & Automatisierung. Damit Kunden & Bewerber dich sehen. Und wollen.",
    description: ["High-End Website inkl. Copy & CI", "Social Media Grundstruktur & 12 Posts", "Contentshooting (Foto & Video)", "Bewerber- oder Verkaufsfunnel", "Meta & Google Ads inkl. Creatives", "Automatisierter Chat- & Mailflow", "Mitarbeiterbenefits inkl. Integration", "Performance-Tracking + Erfolgsauswertung"],
    isPopular: true
  }, {
    icon: Zap,
    title: "Website Refresh",
    price: "ab 3.000 €",
    subline: "Dein Unternehmen ist längst gewachsen – deine Website leider nicht. Wir holen sie ins Jetzt. Modern. Schnell. Aussagekräftig.",
    description: ["Design-Update deiner bestehenden Website", "Conversion-optimiertes UX-Layout", "Klare Struktur, starke Texte (optional)", "SEO-Basics & DSGVO-Fit", "Mobile- & Ladezeitoptimierung", "Anbindung von Tracking & Terminen (z. B. Calendly)"]
  }, {
    icon: TrendingUp,
    title: "Ad Impact Engine",
    price: "ab 1.500 €",
    subline: "Deine Zielgruppe scrollt jeden Tag – aber nicht zu dir. Wir ändern das. Mit Ads, die gesehen werden. Und funktionieren.",
    description: ["Zielgerichtetes Ad-Setup (Meta & Google)", "Conversion-optimierte Creatives (Video, Grafik, Copywriting)", "A/B-Tests & Hook-Strategien", "Pixel-Integration & Tracking", "Reporting & Kampagnen-Feintuning"]
  }, {
    icon: Users,
    title: "Trust Content Kit",
    price: "ab 1.800 €",
    subline: "Du weißt, dass du gut bist. Wir sorgen dafür, dass es auch alle anderen sehen – mit Content, der verkauft, ohne zu nerven.",
    description: ["Professionelles Fotoshooting & Kurzvideos (Reels/Stories)", "12 fertige Social-Media-Posts (Text, Bild/Video, Hashtags)", "Redaktionsplan & Posting-Empfehlung", "Beratung zu Kanälen & Plattformstrategie", "Optional: Content-Vorlagen + Canva-Übergabe"]
  }, {
    icon: Bot,
    title: "SmartFlow System",
    price: "ab 1.200 €",
    subline: "Leads kommen rein. Bewerber stellen Fragen. Kunden wollen Infos. Mit uns bekommst du ein System, das alles abfängt – bevor du überhaupt reagieren musst.",
    description: ["WhatsApp- & Website-Chatbot-Setup", "Automatisierte Leadqualifizierung & Bewerberlogik", "E-Mail-Automation (z. B. Bewerbungseingang, Follow-ups)", "Terminvereinbarung via Bot (inkl. Kalender-Integration)", "Übergabe & einfache Anpassung durch dein Team"]
  }, {
    icon: Heart,
    title: "Team Love Kit",
    price: "990 €",
    subline: "Mitarbeiter wollen mehr als Obstkorb & Floskeln. Wir zeigen dir, was wirklich wirkt – und helfen dir, es richtig zu kommunizieren.",
    description: ["Analyse: Welche Benefits lohnen sich wirklich – für dich und deine Mitarbeiter?", "Vorstellung bewährter Lösungen von Branchenexperten für Fitness & Vorsorge", "Vermittlung des direkten Kontakts für Umsetzung & Fördermöglichkeiten", "Erstellung deiner Benefit-Kommunikation (Website, Social Media, Stellenanzeigen)", "Aufbau einer Benefits-Seite für deine Mitarbeiter (klar, digital, ansprechend)", "Integration in deinen Recruiting-Auftritt – sichtbar, greifbar, spürbar"]
  }];
  return <section id="packages" className="py-24 bg-secondary/20">
      
    </section>;
};
export default Packages;