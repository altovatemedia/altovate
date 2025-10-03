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
      logoSrc: "/lovable-uploads/802af6c1-6171-4113-82a2-41d3e9ef44a2.png", // Updated Philly's logo
      text: "Für Philly's haben wir das Rebranding und den Launch der Saarbrücken-Filiale begleitet – mit Content-Produktion, Ads und Franchise-Strategie. Das Ergebnis: volle Tage, lange Schlangen und lokaler Hype.",
      kpi: { value: 60000, label: "Zielgerichtete Views in 4 Tagen" },
      size: "large"
    },
    {
      id: 'circle',
      title: "Circle Fitness",
      logo: "Circle Fitness",
      logoSrc: "/lovable-uploads/572d288c-03ed-494b-a3c7-c02711246e25.png", // Updated Circle logo
      text: "Für Circle liefern wir regelmäßig Content – Videos, Grafiken und Ads, die Vertrauen schaffen, Leads generieren und Recruiting unterstützen. Das Studio wird als moderne Fitnessmarke sichtbar.",
      kpi: { value: 200, label: "Leads pro Kampagne", prefix: "+" },
      size: "large"
    },
    {
      id: 'bav',
      title: "BAV Workflow",
      logo: "BAV Workflow",
      logoSrc: "/lovable-uploads/6bcbb94c-c06b-4cce-a414-bf347db95fcd.png", // Updated BAV logo
      text: "Ein komplexes Thema modern und verständlich gemacht: Mit Website-Relaunch, ROI-Calculator und neuen Werbemitteln wird BAV Workflow für HR-Entscheider endlich greifbar – und gewinnt mehr qualifizierte Leads.",
      kpi: { text: "Komplexe Themen", label: "einfach erklärt" },
      size: "large"
    },
    {
      id: 'ayler',
      title: "WeinHotel Ayler Kupp",
      logo: "Ayler Kupp",
      logoSrc: "/lovable-uploads/50fe6fa4-8882-47de-bb67-c64cca395894.png", // Updated Ayler Kupp logo
      text: "Für das Weinhotel Ayler Kupp betreuen wir Social Media und Events. Durch kontinuierlichen Content & Event-Marketing steigerten wir die Reichweite im Saarland & Luxemburg – und füllten die Veranstaltungen.",
      size: "small"
    },
    {
      id: 'brotchi',
      title: "Brotchi",
      logo: "Brotchi",
      logoSrc: "/lovable-uploads/7dcd22f3-021d-49b7-a3a7-c7cf9fba3d36.png", // Updated Brotchi logo
      text: "Mit einem neuen Gastro-Konzept, modernem Branding und authentischem Storytelling haben wir Brotchi von Grund auf aufgebaut. Ergebnis: klare Markenidentität, starke Wiedererkennung und ein erfolgreicher Launch im hart umkämpften Food-Markt.",
      size: "small"
    }
  ];

  const logos = [
    { name: "Philly's", src: "/lovable-uploads/802af6c1-6171-4113-82a2-41d3e9ef44a2.png" }, // Updated Philly's logo
    { name: "Circle Fitness", src: "/lovable-uploads/572d288c-03ed-494b-a3c7-c02711246e25.png" }, // Updated Circle logo
    { name: "BAV Workflow", src: "/lovable-uploads/6bcbb94c-c06b-4cce-a414-bf347db95fcd.png" }, // Updated BAV logo
    { name: "Ayler Kupp", src: "/lovable-uploads/50fe6fa4-8882-47de-bb67-c64cca395894.png" }, // Updated Ayler Kupp logo
    { name: "Brotchi", src: "/lovable-uploads/7dcd22f3-021d-49b7-a3a7-c7cf9fba3d36.png" }, // Updated Brotchi logo
    { name: "Taza", src: "/lovable-uploads/7a13b33d-edd3-4e48-a5a7-4066a841b56b.png" },
    { name: "SG Hochwald", src: "/lovable-uploads/3c245c78-a67c-4767-80b3-8787c63e8cca.png" },
    { name: "LumaVision", src: "/lovable-uploads/97450c7b-0c1e-4f20-b3b4-adcc94af0dfd.png" },
    { name: "Zec+", src: "/lovable-uploads/6f42872a-3902-411d-8ec7-91f5166a2f41.png" }
  ];

  return (
    <section ref={sectionRef} id="proof" className="py-section bg-[#F9F9FB] dark:bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#09002C] dark:text-foreground mb-6">
            Ergebnisse, die für sich sprechen.
          </h2>
          <p className="text-lg text-[#09002C]/70 dark:text-muted-foreground max-w-[720px] mx-auto leading-relaxed">
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
                className="case-study-card bg-white dark:bg-card rounded-2xl p-8 shadow-[0_8px_24px_rgba(9,0,44,0.08)] 
                         hover:shadow-[0_16px_40px_rgba(9,0,44,0.12)] hover:-translate-y-1.5 
                         hover:shadow-[#EA3B5F]/20 transition-all duration-300 group opacity-0 translate-y-8"
              >
                {/* Logo Badge */}
                <div className="inline-block bg-gray-100 dark:bg-muted p-3 rounded-2xl shadow-sm mb-6 h-16 flex items-center justify-center min-w-[100px]">
                  <img 
                    src={study.logoSrc} 
                    alt={study.logo}
                    className="max-h-10 max-w-24 object-contain"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(20%) sepia(10%) saturate(1000%) hue-rotate(210deg)'
                    }}
                  />
                </div>

                {/* Case Study Image */}
                <div className="w-full h-48 rounded-xl mb-6 overflow-hidden">
                  {study.id === 'phillys' ? (
                    <img 
                      src="/lovable-uploads/24cbce68-76e8-453f-8fce-f12458644af2.png"
                      alt="Philly's Mac n' Cheese Campaign"
                      className="w-full h-full object-cover object-center"
                    />
                  ) : study.id === 'circle' ? (
                    <img 
                      src="/lovable-uploads/8c5b3133-3900-4dff-ac8b-7840e5d85931.png"
                      alt="Circle Fitness Mobile Campaign"
                      className="w-full h-full object-cover object-center"
                    />
                  ) : study.id === 'bav' ? (
                    <img 
                      src="/lovable-uploads/b8c10b63-73f3-4add-bf5a-ae99d5e6acdf.png"
                      alt="BAV Workflow Website Screenshot"
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm">
                      Case Study Image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#09002C] dark:text-foreground">{study.title}</h3>
                  
                  <p className="text-[#09002C]/70 dark:text-muted-foreground text-sm leading-relaxed">
                    {study.text}
                  </p>

                  {/* KPI Highlight */}
                  {study.kpi && (
                    <div className="pt-4 border-t border-gray-100 dark:border-border">
                       <div className="text-2xl font-bold text-[#EA3B5F]">
                         {study.kpi.text ? (
                           study.kpi.text
                         ) : (
                           <>
                             {study.kpi.prefix && study.kpi.prefix}
                              <span data-count={study.kpi.value} data-key={study.id}>
                                {study.kpi.value >= 1000 ? 
                                  (counters[study.id] || 0).toLocaleString('de-DE') : 
                                  (counters[study.id] || 0)
                                }
                              </span>
                           </>
                         )}
                       </div>
                      <div className="text-sm text-[#09002C]/50 dark:text-muted-foreground">{study.kpi.label}</div>
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
                className="case-study-card bg-white dark:bg-card rounded-2xl p-6 shadow-[0_8px_24px_rgba(9,0,44,0.08)] 
                         hover:shadow-[0_16px_40px_rgba(9,0,44,0.12)] hover:-translate-y-1.5 
                         hover:shadow-[#EA3B5F]/20 transition-all duration-300 group opacity-0 translate-y-8"
              >
                <div className="inline-block bg-gray-100 dark:bg-muted p-2 rounded-xl shadow-sm mb-4 h-12 flex items-center justify-center min-w-[80px]">
                  <img 
                    src={study.logoSrc} 
                    alt={study.logo}
                    className="max-h-8 max-w-20 object-contain"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(20%) sepia(10%) saturate(1000%) hue-rotate(210deg)'
                    }}
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#09002C] dark:text-foreground">{study.title}</h3>
                  
                  <p className="text-[#09002C]/70 dark:text-muted-foreground text-xs leading-relaxed">
                    {study.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Slider */}
        <div className="bg-gray-50 dark:bg-muted/30 rounded-2xl py-8 overflow-hidden border border-gray-100 dark:border-border">
          <div className="logo-marquee">
            <div className="logo-track">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="logo-item px-8 flex items-center justify-center h-16 transition-all duration-300 hover:scale-105"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className="max-h-12 max-w-32 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(25%) sepia(10%) saturate(1000%) hue-rotate(210deg)'
                    }}
                  />
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