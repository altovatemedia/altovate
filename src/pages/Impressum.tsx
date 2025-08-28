import NewNavigation from '@/components/sections/NewNavigation';
import Footer from '@/components/Footer';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-white">
      <NewNavigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-[720px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#09002C] mb-12 text-left">
              Impressum
            </h1>
            
            <div className="prose prose-lg max-w-none text-left">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#09002C] mb-4">Angaben gemäß § 5 TMG:</h2>
                <p className="text-[#09002C]/80 leading-relaxed">
                  Buchmann & Ollinger GbR<br />
                  Am Hölzengrund 9<br />
                  66663 Merzig<br />
                  Deutschland
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#09002C] mb-4">Vertreten durch:</h2>
                <p className="text-[#09002C]/80 leading-relaxed">
                  Alexander Buchmann & Tobias Ollinger
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#09002C] mb-4">Kontakt:</h2>
                <p className="text-[#09002C]/80 leading-relaxed">
                  E-Mail: info@altovate.de
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#09002C] mb-4">Umsatzsteuer-ID:</h2>
                <p className="text-[#09002C]/80 leading-relaxed">
                  Nicht vorhanden
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#09002C] mb-4">Handelsregister:</h2>
                <p className="text-[#09002C]/80 leading-relaxed">
                  Nicht eingetragen
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#09002C] mb-4">Aufsichtsbehörde:</h2>
                <p className="text-[#09002C]/80 leading-relaxed">
                  Keine besondere Aufsichtsbehörde zuständig
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#09002C] mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
                <p className="text-[#09002C]/80 leading-relaxed">
                  Alexander Buchmann<br />
                  Am Hölzengrund 9<br />
                  66663 Merzig
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;