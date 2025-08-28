import { useEffect, useRef, useState } from 'react';

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [counters, setCounters] = useState<{[key: string]: number}>({});

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate cards
          const cards = entry.target.querySelectorAll('.case-study-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-in');
            }, index * 120);
          });

          // Start counter animations
          const kpiElements = entry.target.querySelectorAll('[data-count]');
          kpiElements.forEach((element) => {
            const target = parseInt(element.getAttribute('data-count') || '0');
            const key = element.getAttribute('data-key') || '';
            let current = 0;
            const increment = target / 30;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
            }, 50);
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const caseStudies = [
    {
      id: 'phillys',
      title: "Philly's Burger",
      subtitle: "Expansion & Launch",
      logo: "Philly's",
      challenge: "Launch der neuen Filiale in Saarbrücken – Ziel: Reichweite & Franchise-Strategie.",
      solution: "CI-konforme Launch-Kampagnen (Social Media, Ads, Print) + Content-Produktion & Onboarding.",
      result: "Rekordumsatz, Warteschlangen bis auf die Straße, Franchise-System in Planung.",
      kpi: { value: 60000, label: "Reichweite in 4 Tagen" },
      size: "large"
    },
    {
      id: 'circle',
      title: "Circle Fitness",
      subtitle: "Content & Lead-Generierung", 
      logo: "Circle Fitness",
      challenge: "Leads & Bewerber über Social Media gewinnen.",
      solution: "Kontinuierliche Content-Produktion (Grafiken, Videos), Performance-Ads, Recruiting-Kampagnen.",
      result: "Stetige Lead-Gewinnung, mehr Bewerbungen über Social Media, modernes Markenimage.",
      kpi: { value: 45, label: "+ Bewerbungen pro Monat" },
      size: "large"
    },
    {
      id: 'bav',
      title: "BAV Workflow",
      subtitle: "Digitale Benefits",
      logo: "BAV Workflow",
      challenge: "Komplexe Benefits verständlich & modern darstellen.",
      solution: "Website-Relaunch, ROI-Calculator im Lovable-Stil, Werbemittel & LinkedIn-Strategie.",
      result: "Mehr qualifizierte Leads, professionelle Außendarstellung, bessere Conversion-Rates.",
      kpi: { value: 120, label: "+ Leads / Monat" },
      size: "large"
    },
    {
      id: 'ayler',
      title: "Ayler Kupp",
      subtitle: "Weinhotel & Events",
      logo: "Ayler Kupp",
      challenge: "Sichtbarkeit für Events & Gäste steigern.",
      solution: "Social-Media-Betreuung, Content-Produktion, Event-Marketing.",
      result: "Ausgebuchte Veranstaltungen, mehr Reichweite im Saarland & Luxemburg.",
      kpi: { value: 85, label: "% ausgebuchte Events" },
      size: "small"
    },
    {
      id: 'papalu',
      title: "Papa Lu",
      subtitle: "Trend-Gastronomie Trier",
      logo: "Papa Lu", 
      challenge: "Junge Zielgruppe ansprechen, Trend-Gastronomie pushen.",
      solution: "Emotionaler Social-Content (Reels, Stories), Positionierung als Place-to-be in Trier.",
      result: "Virale Posts, täglich volle Tische, Stammkundschaft aufgebaut.",
      kpi: { value: 250, label: "K+ Reach viral Post" },
      size: "small"
    }
  ];

  const logos = ["Philly's", "Circle Fitness", "BAV Workflow", "Ayler Kupp", "Papa Lu", "Taza", "Brotchi", "SG Hochwald", "LumaVision", "Zec+"];

  return (
    <section ref={sectionRef} className="py-section bg-[#F9F9FB]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ergebnisse, die für sich sprechen.
          </h2>
          <p className="text-lg text-muted-foreground max-w-[720px] mx-auto leading-relaxed">
            Von regionalen Heroes bis zu wachsenden Marken – wir helfen Unternehmen, sichtbar zu werden, 
            Leads zu generieren und ihre Marke klar zu positionieren.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-8 mb-20">
          {/* Row 1: 3 large cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.filter(study => study.size === 'large').map((study, index) => (
              <div
                key={study.id}
                className="case-study-card bg-white rounded-2xl p-8 shadow-[0_8px_24px_rgba(9,0,44,0.08)] 
                         hover:shadow-[0_16px_40px_rgba(9,0,44,0.12)] hover:-translate-y-1.5 
                         transition-all duration-300 group opacity-0 translate-y-8"
              >
                {/* Logo Badge */}
                <div className="inline-block bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700 mb-6">
                  {study.logo}
                </div>

                {/* Mock Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 
                              flex items-center justify-center text-gray-400 text-sm">
                  Case Study Image
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-red-600">Challenge:</span>
                      <p className="text-gray-600 mt-1">{study.challenge}</p>
                    </div>
                    
                    <div className="border-l-2 border-gray-100 pl-4">
                      <span className="font-semibold text-blue-600">Lösung:</span>
                      <p className="text-gray-600 mt-1">{study.solution}</p>
                    </div>
                    
                    <div>
                      <span className="font-semibold text-green-600">Ergebnis:</span>
                      <p className="text-gray-600 mt-1">{study.result}</p>
                    </div>
                  </div>

                  {/* KPI Highlight */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-2xl font-bold text-[#EA3B5F]">
                      <span data-count={study.kpi.value} data-key={study.id}>
                        {counters[study.id] || 0}
                      </span>
                      {study.kpi.value >= 1000 ? 'K' : ''}
                    </div>
                    <div className="text-sm text-gray-500">{study.kpi.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 2 smaller cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {caseStudies.filter(study => study.size === 'small').map((study) => (
              <div
                key={study.id}
                className="case-study-card bg-white rounded-2xl p-6 shadow-[0_8px_24px_rgba(9,0,44,0.08)] 
                         hover:shadow-[0_16px_40px_rgba(9,0,44,0.12)] hover:-translate-y-1.5 
                         transition-all duration-300 group opacity-0 translate-y-8"
              >
                <div className="inline-block bg-gray-50 px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 mb-4">
                  {study.logo}
                </div>

                <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 
                              flex items-center justify-center text-gray-400 text-xs">
                  Case Study Image
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">{study.title}</h3>
                  
                  <div className="space-y-2 text-xs">
                    <p><span className="font-semibold text-red-600">Challenge:</span> {study.challenge}</p>
                    <p><span className="font-semibold text-blue-600">Lösung:</span> {study.solution}</p>
                    <p><span className="font-semibold text-green-600">Ergebnis:</span> {study.result}</p>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <div className="text-xl font-bold text-[#EA3B5F]">
                      <span data-count={study.kpi.value} data-key={study.id}>
                        {counters[study.id] || 0}
                      </span>
                      {study.kpi.value >= 1000 ? 'K' : ''}
                    </div>
                    <div className="text-xs text-gray-500">{study.kpi.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Slider */}
        <div className="bg-white rounded-2xl py-8 overflow-hidden">
          <div className="logo-marquee">
            <div className="logo-track">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="logo-item px-8 text-[#7A7A7A] hover:text-gray-900 transition-colors duration-300 
                           font-semibold text-lg whitespace-nowrap cursor-pointer"
                >
                  {logo}
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