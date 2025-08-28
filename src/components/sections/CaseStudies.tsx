import { useEffect, useRef } from 'react';

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.case-study-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const caseStudies = [
    {
      title: "Philly's Burger – Expansion & Launch",
      challenge: "Eröffnung neuer Filiale in Saarbrücken, Aufbau einheitlicher Kommunikation & Franchise-Strategie.",
      solution: "Entwicklung CI-konformer Launch-Kampagnen (Social Media, Ads, Print), Content-Produktion, Onboarding-Prozesse.",
      result: "Rekordumsatz in den ersten Wochen, ausverkaufte Tage, Warteschlangen bis auf die Straße. Franchise-System in Planung.",
      logo: "Philly's"
    },
    {
      title: "Circle Fitness – Content & Lead-Generierung",
      challenge: "Ganzheitliches Fitnesskonzept, Ziel: Vertrauen aufbauen, Leads generieren & Recruiting unterstützen.",
      solution: "Laufende Content-Produktion (Grafiken, Videos), zielgerichtete Performance-Kampagnen, Recruiting-Ads.",
      result: "Kontinuierliche Lead-Gewinnung, mehr Bewerbungen über Social Media, klare Positionierung als moderne Fitnessmarke in der Region.",
      logo: "Circle Fitness"
    },
    {
      title: "BAV Workflow – Digitale Benefits",
      challenge: "Komplexe Themen wie betriebliche Altersvorsorge & Benefits modern und verständlich darstellen.",
      solution: "Relaunch der Website im modernen CI, Erstellung von Werbemitteln, Kampagnen-Setups für HR-Entscheider.",
      result: "Mehr qualifizierte Leads, professionellere Außendarstellung, klare und einfache Kommunikation von komplexen Themen.",
      logo: "BAV Workflow"
    },
    {
      title: "Ayler Kupp – Weinhotel & Events",
      challenge: "Hochwertiges Event- & Hotelangebot, Ziel: Sichtbarkeit für Weinevents & neue Gäste.",
      solution: "Kontinuierliche Social-Media-Betreuung, Content-Produktion, Event-Marketing.",
      result: "Hohe Reichweite im Saarland & Luxemburg, ausgebuchte Veranstaltungen, gesteigerte Markenbekanntheit.",
      logo: "Ayler Kupp"
    },
    {
      title: "Papa Lu – Trend-Gastronomie Trier",
      challenge: "Junge Zielgruppe ansprechen, neue Food-Trends setzen.",
      solution: "Emotionaler Social-Media-Content (Reels, Stories), Positionierung als Place-to-be in Trier.",
      result: "Virale Posts, täglich volle Tische, Stammkundschaft aufgebaut.",
      logo: "Papa Lu"
    },
    {
      title: "Weitere erfolgreiche Projekte",
      challenge: "Verschiedene Branchen und Herausforderungen erfolgreich gemeistert.",
      solution: "Maßgeschneiderte Marketing-Strategien für jeden Kunden entwickelt und umgesetzt.",
      result: "Messbare Erfolge für Taza & Brotchi, SG Hochwald, LumaVision, Zec+ und weitere Partner.",
      logo: "Portfolio"
    }
  ];

  const logos = [
    "Philly's", "Circle Fitness", "BAV Workflow", "Ayler Kupp", 
    "Papa Lu", "Taza", "Brotchi", "SG Hochwald", "LumaVision", "Zec+"
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#0e0e0e] relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff1c5c]/5 via-transparent to-[#ff1c5c]/5"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ergebnisse, die für sich sprechen.
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Von regionalen Heroes bis zu wachsenden Marken – wir helfen Unternehmen, 
            sichtbar zu werden, mehr Anfragen zu generieren und ihre Marke klar zu positionieren.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="case-study-card group opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              <div className="relative h-full p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-[#ff1c5c]/30 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#ff1c5c]/20">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ff1c5c]/20 via-transparent to-[#ff1c5c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                
                <div className="relative z-10">
                  {/* Logo placeholder */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#ff1c5c] to-[#ff1c5c]/80 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">{study.logo}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                    {study.title}
                  </h3>

                  {/* Content sections */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[#ff1c5c] font-semibold mb-2 text-sm uppercase tracking-wide">Challenge</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-[#ff1c5c] font-semibold mb-2 text-sm uppercase tracking-wide">Lösung</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-[#ff1c5c] font-semibold mb-2 text-sm uppercase tracking-wide">Ergebnis</h4>
                      <p className="text-white text-sm leading-relaxed font-medium">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Slider */}
        <div className="relative">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Vertrauen von über 50+ Unternehmen
          </h3>
          
          <div className="overflow-hidden relative">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0e0e0e] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0e0e0e] to-transparent z-10"></div>
            
            <div className="logo-marquee flex items-center space-x-12 py-8">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-32 h-16 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10 hover:border-[#ff1c5c]/30 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <span className="text-gray-400 font-medium text-sm group-hover:text-[#ff1c5c] transition-colors duration-300">
                    {logo}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-32 h-16 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10 hover:border-[#ff1c5c]/30 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <span className="text-gray-400 font-medium text-sm group-hover:text-[#ff1c5c] transition-colors duration-300">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CaseStudies;