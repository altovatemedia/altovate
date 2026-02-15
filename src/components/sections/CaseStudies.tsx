import { useEffect, useRef, useState } from 'react';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/animations/Reveal';

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [counters, setCounters] = useState<{[key: string]: number}>({});

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const kpiElements = entry.target.querySelectorAll('[data-count]');
          kpiElements.forEach((element) => {
            const target = parseInt(element.getAttribute('data-count') || '0');
            const key = element.getAttribute('data-key') || '';
            let current = 0;
            const increment = target / 40;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
            }, 40);
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const caseStudies = [
    {
      id: 'phillys', title: "Philly's Burger", logo: "Philly's",
      logoSrc: "/lovable-uploads/802af6c1-6171-4113-82a2-41d3e9ef44a2.png",
      text: "Für Philly's haben wir das Rebranding und den Launch der Saarbrücken-Filiale begleitet – mit Content-Produktion, Ads und Franchise-Strategie. Das Ergebnis: volle Tage, lange Schlangen und lokaler Hype.",
      kpi: { value: 60000, label: "Zielgerichtete Views in 4 Tagen" },
      imgSrc: "/lovable-uploads/24cbce68-76e8-453f-8fce-f12458644af2.png",
      imgAlt: "Philly's Burger Saarbrücken – Social Media Kampagne mit Content-Produktion und Werbeanzeigen",
      size: "large"
    },
    {
      id: 'circle', title: "Circle Fitness", logo: "Circle Fitness",
      logoSrc: "/lovable-uploads/572d288c-03ed-494b-a3c7-c02711246e25.png",
      text: "Für Circle liefern wir regelmäßig Content – Videos, Grafiken und Ads, die Vertrauen schaffen, Leads generieren und Recruiting unterstützen. Das Studio wird als moderne Fitnessmarke sichtbar.",
      kpi: { value: 200, label: "Leads pro Kampagne", prefix: "+" },
      imgSrc: "/lovable-uploads/8c5b3133-3900-4dff-ac8b-7840e5d85931.png",
      imgAlt: "Circle Fitness – Mobile Werbekampagne für Lead-Generierung und Mitgliedergewinnung",
      size: "large"
    },
    {
      id: 'bav', title: "BAV Workflow", logo: "BAV Workflow",
      logoSrc: "/lovable-uploads/6bcbb94c-c06b-4cce-a414-bf347db95fcd.png",
      text: "Ein komplexes Thema modern und verständlich gemacht: Mit Website-Relaunch, ROI-Calculator und neuen Werbemitteln wird BAV Workflow für HR-Entscheider endlich greifbar – und gewinnt mehr qualifizierte Leads.",
      kpi: { text: "Komplexe Themen", label: "einfach erklärt" },
      imgSrc: "/lovable-uploads/b8c10b63-73f3-4add-bf5a-ae99d5e6acdf.png",
      imgAlt: "BAV Workflow – Website-Relaunch mit ROI-Calculator für HR-Entscheider",
      size: "large"
    },
    {
      id: 'ayler', title: "WeinHotel Ayler Kupp", logo: "Ayler Kupp",
      logoSrc: "/lovable-uploads/50fe6fa4-8882-47de-bb67-c64cca395894.png",
      text: "Für das Weinhotel Ayler Kupp betreuen wir Social Media und Events. Durch kontinuierlichen Content & Event-Marketing steigerten wir die Reichweite im Saarland & Luxemburg – und füllten die Veranstaltungen.",
      size: "small"
    },
    {
      id: 'brotchi', title: "Brotchi", logo: "Brotchi",
      logoSrc: "/lovable-uploads/7dcd22f3-021d-49b7-a3a7-c7cf9fba3d36.png",
      text: "Mit einem neuen Gastro-Konzept, modernem Branding und authentischem Storytelling haben wir Brotchi von Grund auf aufgebaut. Ergebnis: klare Markenidentität, starke Wiedererkennung und ein erfolgreicher Launch im hart umkämpften Food-Markt.",
      size: "small"
    }
  ];

  const logos = [
    { name: "Philly's", src: "/lovable-uploads/802af6c1-6171-4113-82a2-41d3e9ef44a2.png" },
    { name: "Circle Fitness", src: "/lovable-uploads/572d288c-03ed-494b-a3c7-c02711246e25.png" },
    { name: "BAV Workflow", src: "/lovable-uploads/6bcbb94c-c06b-4cce-a414-bf347db95fcd.png" },
    { name: "Ayler Kupp", src: "/lovable-uploads/50fe6fa4-8882-47de-bb67-c64cca395894.png" },
    { name: "Brotchi", src: "/lovable-uploads/7dcd22f3-021d-49b7-a3a7-c7cf9fba3d36.png" },
    { name: "Taza – Restaurant & Bar Saarburg", src: "/lovable-uploads/7a13b33d-edd3-4e48-a5a7-4066a841b56b.png" },
    { name: "SG Hochwald – Sportgemeinschaft", src: "/lovable-uploads/3c245c78-a67c-4767-80b3-8787c63e8cca.png" },
    { name: "LumaVision – Videoproduktion", src: "/lovable-uploads/97450c7b-0c1e-4f20-b3b4-adcc94af0dfd.png" },
    { name: "Zec+ Nutrition – Sportnahrung", src: "/lovable-uploads/6f42872a-3902-411d-8ec7-91f5166a2f41.png" }
  ];

  return (
    <section ref={sectionRef} id="proof" className="py-section">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal blur>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ergebnisse, die für sich sprechen.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-lg text-muted-foreground max-w-[720px] mx-auto leading-relaxed">
              Von regionalen Heroes bis zu wachsenden Marken – wir helfen Unternehmen, sichtbar zu werden, 
              Leads zu generieren und ihre Marke klar zu positionieren.
            </p>
          </Reveal>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-8 mb-20">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {caseStudies.filter(s => s.size === 'large').map((study) => (
              <StaggerItem key={study.id} scale>
                <div className="liquid-glass rounded-2xl p-8 transition-all duration-300 group h-full">
                  <div className="inline-block liquid-glass-icon p-3 rounded-2xl mb-6 h-16 flex items-center justify-center min-w-[100px]">
                    <img src={study.logoSrc} alt={study.logo} className="max-h-10 max-w-24 object-contain brightness-0 invert opacity-70" width={96} height={40} loading="lazy" />
                  </div>
                  {'imgSrc' in study && (
                    <div className="w-full h-48 rounded-xl mb-6 overflow-hidden">
                      <img src={study.imgSrc} alt={study.imgAlt} className="w-full h-full object-cover object-center" loading="lazy" />
                    </div>
                  )}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">{study.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{study.text}</p>
                    {study.kpi && (
                      <div className="pt-4 border-t border-border">
                        <div className="text-2xl font-bold text-primary">
                          {study.kpi.text ? study.kpi.text : (
                            <>
                              {study.kpi.prefix && study.kpi.prefix}
                              <span data-count={study.kpi.value} data-key={study.id}>
                                {study.kpi.value >= 1000 ? (counters[study.id] || 0).toLocaleString('de-DE') : (counters[study.id] || 0)}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">{study.kpi.label}</div>
                      </div>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" staggerDelay={0.15} delay={0.1}>
            {caseStudies.filter(s => s.size === 'small').map((study) => (
              <StaggerItem key={study.id} scale>
                <div className="liquid-glass rounded-2xl p-6 transition-all duration-300 group h-full">
                  <div className="inline-block liquid-glass-icon p-2 rounded-xl mb-4 h-12 flex items-center justify-center min-w-[80px]">
                    <img src={study.logoSrc} alt={study.logo} className="max-h-8 max-w-20 object-contain brightness-0 invert opacity-70" width={80} height={32} loading="lazy" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-foreground">{study.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{study.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Logo Slider */}
        <Reveal>
          <div className="liquid-glass rounded-2xl py-8 overflow-hidden">
            <div className="logo-marquee">
              <div className="logo-track">
                {[...logos, ...logos].map((logo, index) => (
                  <div key={index} className="logo-item px-8 flex items-center justify-center h-16 transition-all duration-300 hover:scale-105">
                    <img src={logo.src} alt={logo.name} className="max-h-12 max-w-32 object-contain brightness-0 invert opacity-50 hover:opacity-80 transition-opacity duration-300" width={128} height={48} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CaseStudies;
