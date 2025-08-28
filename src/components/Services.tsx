import { Star, Zap, TrendingUp, Users, Heart, Bot } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
const Packages = () => {
  const packages = [{
    icon: Star,
    title: "Die visibility engine",
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
  return <section id="packages" className="py-24 bg-secondary/20">Bitte füge eine neue Case Studies Section ein, direkt vor der Section „Der Ablauf“.
Die Section soll hell, clean und modern wirken – im Stil von Finom / SaaS-Websites. Viel Weißraum, klare Hierarchie, Karten-Design, Hover- und Scroll-Effekte.
Aufbau & Struktur
Hintergrund: Hellgrau #F9F9FB.
Intro (zentriert):
Headline (H2): „Ergebnisse, die für sich sprechen.“
Subheadline (Lead): „Von regionalen Heroes bis zu wachsenden Marken – wir helfen Unternehmen, sichtbar zu werden, Leads zu generieren und ihre Marke klar zu positionieren.“ (Farbe --color-text-muted, max-width 720px).
Grid:
Reihe 1: 3 große Case-Study-Cards (Philly’s, Circle, BAV).
Reihe 2: 2 kleinere Cards (Ayler Kupp, Papa Lu).
Darunter: Logo-Slider mit Kundenlogos (Marquee).
Card-Design
Hintergrund: #FFFFFF.
Abgerundete Ecken (Radius 16px).
Schatten: 0 8px 24px rgba(9,0,44,0.08).
Hover: Card hebt sich leicht an (translateY(-6px)), Shadow intensiver, dezenter Glow in Magenta #EA3B5F.
Logo oben links, leicht schwebend (Badge-Style, abgerundet).
Darunter ein großes Bild oder Mockup (z. B. Social-Media-Feed, Website-Screenshot, Eventfoto).
Text-Content: 3 Abschnitte Challenge → Lösung → Ergebnis, sauber getrennt durch kleine Divider-Linien oder Icons.
KPIs (Zahlen) visuell hervorgehoben (fett, animiert „Count-Up“ beim Scroll).
Inhalte der Case-Study-Cards
Card 1 – Philly’s Burger
Logo: [Philly’s]
Bild: Foto vom Opening oder Social Mockup.
Challenge: „Launch der neuen Filiale in Saarbrücken – Ziel: Reichweite & Franchise-Strategie.“
Lösung: „CI-konforme Launch-Kampagnen (Social Media, Ads, Print) + Content-Produktion & Onboarding.“
Ergebnis: „Rekordumsatz, Warteschlangen bis auf die Straße, Franchise-System in Planung.“
KPI-Highlight: „60.000 Reichweite in 4 Tagen“
Card 2 – Circle Fitness
Logo: [Circle Fitness]
Bild: Mockup Social Posts + Video-Screens.
Challenge: „Leads & Bewerber über Social Media gewinnen.“
Lösung: „Kontinuierliche Content-Produktion (Grafiken, Videos), Performance-Ads, Recruiting-Kampagnen.“
Ergebnis: „Stetige Lead-Gewinnung, mehr Bewerbungen über Social Media, modernes Markenimage.“
KPI-Highlight: „+ Bewerbungen pro Monat“ (animiert hochzählen).
Card 3 – BAV Workflow
Logo: [BAV Workflow]
Bild: Screenshot der neuen Website oder ROI-Calculator.
Challenge: „Komplexe Benefits verständlich & modern darstellen.“
Lösung: „Website-Relaunch, ROI-Calculator im Lovable-Stil, Werbemittel & LinkedIn-Strategie.“
Ergebnis: „Mehr qualifizierte Leads, professionelle Außendarstellung, bessere Conversion-Rates.“
KPI-Highlight: „+ Leads / Monat“ (Platzhalter, Count-Up).
Card 4 – Ayler Kupp (kleiner)
Logo: [Ayler Kupp]
Bild: Eventfoto oder Weinhotel.
Challenge: „Sichtbarkeit für Events & Gäste steigern.“
Lösung: „Social-Media-Betreuung, Content-Produktion, Event-Marketing.“
Ergebnis: „Ausgebuchte Veranstaltungen, mehr Reichweite im Saarland & Luxemburg.“
Card 5 – Papa Lu (kleiner)
Logo: [Papa Lu]
Bild: Food-Content Mockup.
Challenge: „Junge Zielgruppe ansprechen, Trend-Gastronomie pushen.“
Lösung: „Emotionaler Social-Content (Reels, Stories), Positionierung als Place-to-be in Trier.“
Ergebnis: „Virale Posts, täglich volle Tische, Stammkundschaft aufgebaut.“
Logo-Slider (unten)
Hintergrund: Weiß (#FFFFFF).
Automatischer Marquee-Effekt (langsames horizontales Scrollen, infinite loop).
Logos monochrom grau (#7A7A7A).
Hover: Logo wechselt in volle Farbe.
Logos: Philly’s, Circle Fitness, BAV Workflow, Ayler Kupp, Papa Lu, Taza, Brotchi, SG Hochwald, LumaVision, Zec+.
Interaktionen & Effekte
Scroll-Reveal: Cards faden von unten ein (Stagger 120ms).
KPIs: Zahlen zählen von 0 bis Zielwert beim Erscheinen.
Hover auf Cards: TranslateY(-6px) + Glow (#EA3B5F, 20% blur).
Logo-Slider: kontinuierlich, smooth, Hover = Farbwechsel.
  </section>;
};
export default Packages;