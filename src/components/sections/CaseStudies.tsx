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
      logo: "Philly's",
      text: "Für Philly's haben wir das Rebranding und den Launch der Saarbrücken-Filiale begleitet – mit Content-Produktion, Ads und Franchise-Strategie. Das Ergebnis: volle Tage, lange Schlangen und lokaler Hype.",
      kpi: { value: 60, label: "K Reichweite in 4 Tagen" },
      size: "large"
    },
    {
      id: 'circle',
      title: "Circle Fitness",
      logo: "Circle Fitness",
      text: "Für Circle liefern wir regelmäßig Content – Videos, Grafiken und Ads, die Vertrauen schaffen, Leads generieren und Recruiting unterstützen. Das Studio wird als moderne Fitnessmarke sichtbar.",
      kpi: { value: 45, label: "+ Bewerbungen über Social Media" },
      size: "large"
    },
    {
      id: 'bav',
      title: "BAV Workflow",
      logo: "BAV Workflow",
      text: "Ein komplexes Thema modern und verständlich gemacht: Mit Website-Relaunch, ROI-Calculator und neuen Werbemitteln wird BAV Workflow für HR-Entscheider endlich greifbar – und gewinnt mehr qualifizierte Leads.",
      kpi: { value: 120, label: "+ Leads pro Monat" },
      size: "large"
    },
    {
      id: 'ayler',
      title: "Ayler Kupp",
      logo: "Ayler Kupp",
      text: "Für das Weinhotel Ayler Kupp betreuen wir Social Media und Events. Durch kontinuierlichen Content & Event-Marketing steigerten wir die Reichweite im Saarland & Luxemburg – und füllten die Veranstaltungen.",
      size: "small"
    },
    {
      id: 'papalu',
      title: "Papa Lu",
      logo: "Papa Lu", 
      text: "Mit emotionalem Content, Reels und Storytelling haben wir Papa Lu als Place-to-be in Trier positioniert. Ergebnis: virale Posts, volle Tische und eine treue Stammkundschaft.",
      size: "small"
    }
  ];

  const logos = ["Philly's", "Circle Fitness", "BAV Workflow", "Ayler Kupp", "Papa Lu", "Taza", "Brotchi", "SG Hochwald", "LumaVision", "Zec+"];

  return (
    <section ref={sectionRef} className="py-section bg-[#F9F9FB]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#09002C] mb-6">
            Ergebnisse, die für sich sprechen.
          </h2>
          <p className="text-lg text-[#09002C]/70 max-w-[720px] mx-auto leading-relaxed">
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
                         hover:shadow-[#EA3B5F]/20 transition-all duration-300 group opacity-0 translate-y-8"
              >
                {/* Logo Badge */}
                <div className="inline-block bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-[#09002C] mb-6">
                  {study.logo}
                </div>

                {/* Mock Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 
                              flex items-center justify-center text-gray-400 text-sm">
                  Case Study Image
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#09002C]">{study.title}</h3>
                  
                  <p className="text-[#09002C]/70 text-sm leading-relaxed">
                    {study.text}
                  </p>

                  {/* KPI Highlight */}
                  {study.kpi && (
                    <div className="pt-4 border-t border-gray-100">
                      <div className="text-2xl font-bold text-[#EA3B5F]">
                        <span data-count={study.kpi.value} data-key={study.id}>
                          {counters[study.id] || 0}
                        </span>
                        {study.kpi.value >= 1000 ? 'K' : study.kpi.label.includes('K') ? 'K' : ''}
                      </div>
                      <div className="text-sm text-[#09002C]/50">{study.kpi.label}</div>
                    </div>
                  )}
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
                         hover:shadow-[#EA3B5F]/20 transition-all duration-300 group opacity-0 translate-y-8"
              >
                <div className="inline-block bg-gray-50 px-3 py-1.5 rounded-full text-xs font-medium text-[#09002C] mb-4">
                  {study.logo}
                </div>

                <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 
                              flex items-center justify-center text-gray-400 text-xs">
                  Case Study Image
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#09002C]">{study.title}</h3>
                  
                  <p className="text-[#09002C]/70 text-xs leading-relaxed">
                    {study.text}
                  </p>
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
                  className="logo-item px-8 text-[#7A7A7A] hover:text-[#09002C] transition-colors duration-300 
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