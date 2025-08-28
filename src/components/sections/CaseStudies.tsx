import { useEffect, useRef } from 'react';
const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.case-study-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-in');
            }, index * 100);
          });
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const caseStudies = [{
    title: "Philly's Burger – Expansion & Launch",
    challenge: "Eröffnung neuer Filiale in Saarbrücken, Aufbau einheitlicher Kommunikation & Franchise-Strategie.",
    solution: "Entwicklung CI-konformer Launch-Kampagnen (Social Media, Ads, Print), Content-Produktion, Onboarding-Prozesse.",
    result: "Rekordumsatz in den ersten Wochen, ausverkaufte Tage, Warteschlangen bis auf die Straße. Franchise-System in Planung.",
    logo: "Philly's"
  }, {
    title: "Circle Fitness – Content & Lead-Generierung",
    challenge: "Ganzheitliches Fitnesskonzept, Ziel: Vertrauen aufbauen, Leads generieren & Recruiting unterstützen.",
    solution: "Laufende Content-Produktion (Grafiken, Videos), zielgerichtete Performance-Kampagnen, Recruiting-Ads.",
    result: "Kontinuierliche Lead-Gewinnung, mehr Bewerbungen über Social Media, klare Positionierung als moderne Fitnessmarke in der Region.",
    logo: "Circle Fitness"
  }, {
    title: "BAV Workflow – Digitale Benefits",
    challenge: "Komplexe Themen wie betriebliche Altersvorsorge & Benefits modern und verständlich darstellen.",
    solution: "Relaunch der Website im modernen CI, Erstellung von Werbemitteln, Kampagnen-Setups für HR-Entscheider.",
    result: "Mehr qualifizierte Leads, professionellere Außendarstellung, klare und einfache Kommunikation von komplexen Themen.",
    logo: "BAV Workflow"
  }, {
    title: "Ayler Kupp – Weinhotel & Events",
    challenge: "Hochwertiges Event- & Hotelangebot, Ziel: Sichtbarkeit für Weinevents & neue Gäste.",
    solution: "Kontinuierliche Social-Media-Betreuung, Content-Produktion, Event-Marketing.",
    result: "Hohe Reichweite im Saarland & Luxemburg, ausgebuchte Veranstaltungen, gesteigerte Markenbekanntheit.",
    logo: "Ayler Kupp"
  }, {
    title: "Papa Lu – Trend-Gastronomie Trier",
    challenge: "Junge Zielgruppe ansprechen, neue Food-Trends setzen.",
    solution: "Emotionaler Social-Media-Content (Reels, Stories), Positionierung als Place-to-be in Trier.",
    result: "Virale Posts, täglich volle Tische, Stammkundschaft aufgebaut.",
    logo: "Papa Lu"
  }, {
    title: "Weitere erfolgreiche Projekte",
    challenge: "Verschiedene Branchen und Herausforderungen erfolgreich gemeistert.",
    solution: "Maßgeschneiderte Marketing-Strategien für jeden Kunden entwickelt und umgesetzt.",
    result: "Messbare Erfolge für Taza & Brotchi, SG Hochwald, LumaVision, Zec+ und weitere Partner.",
    logo: "Portfolio"
  }];
  const logos = ["Philly's", "Circle Fitness", "BAV Workflow", "Ayler Kupp", "Papa Lu", "Taza", "Brotchi", "SG Hochwald", "LumaVision", "Zec+"];
  return;
};
export default CaseStudies;