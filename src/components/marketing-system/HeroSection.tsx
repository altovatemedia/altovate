const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="finom-h1 mb-6">
            Marketing ohne Bullshit.{' '}
            <span className="text-[#ff1c5c]">Mit System.</span>
          </h1>
          <p className="finom-lead max-w-2xl mx-auto mb-10">
            Kein Agentur-Blabla. Keine Buzzwords. Sondern klare Modelle, echte Zahlen und ehrliche Antworten für Unternehmen, die Marketing nicht als Beschäftigungstherapie betreiben wollen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollTo('kernthemen')}
              className="px-6 py-3 rounded-lg font-bold text-base transition-all duration-300 hover:scale-105"
              style={{ background: '#ff1c5c', color: '#fff' }}
            >
              ROI verstehen
            </button>
            <button
              onClick={() => scrollTo('framework')}
              className="px-6 py-3 rounded-lg font-bold text-base border-2 border-[#ff1c5c] text-foreground hover:bg-[#ff1c5c]/10 transition-all duration-300 hover:scale-105"
            >
              Sichtbarkeit aufbauen
            </button>
            <button
              onClick={() => scrollTo('kernthemen')}
              className="px-6 py-3 rounded-lg font-bold text-base border-2 border-[#ff1c5c] text-foreground hover:bg-[#ff1c5c]/10 transition-all duration-300 hover:scale-105"
            >
              GEO &amp; KI verstehen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
