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
                <h2 className="text-2xl font-bold text-[#09002C] mb-4">Angaben gemäß § 5 TMG</h2>
                <p className="text-[#09002C]/80 leading-relaxed">
                  altovate GmbH<br />
                  Max-Planck-Straße 6<br />
                  54439 Saarburg
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#09002C] mb-4">Vertreten durch:</h2>
                <p className="text-[#09002C]/80 leading-relaxed">
                  Geschäftsführer Alexander Buchmann
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#09002C] mb-4">Kontakt:</h2>
                <p className="text-[#09002C]/80 leading-relaxed">
                  Telefon: +49 1520 892 2097<br />
                  E-Mail: info@altovate.de
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#09002C] mb-4">Registereintrag:</h2>
                <p className="text-[#09002C]/80 leading-relaxed">
                  Eintragung im Handelsregister.<br />
                  Registergericht: Amtsgericht Wittlich<br />
                  Registernummer: wird nachgereicht
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#09002C] mb-4">Umsatzsteuer-ID:</h2>
                <p className="text-[#09002C]/80 leading-relaxed">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: wird nachgereicht
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#09002C] mb-4">Haftungsausschluss</h2>
                
                <h3 className="text-xl font-bold text-[#09002C] mb-3 mt-6">Haftung für Inhalte</h3>
                <p className="text-[#09002C]/80 leading-relaxed mb-4">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>

                <h3 className="text-xl font-bold text-[#09002C] mb-3 mt-6">Haftung für Links</h3>
                <p className="text-[#09002C]/80 leading-relaxed mb-4">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>

                <h3 className="text-xl font-bold text-[#09002C] mb-3 mt-6">Urheberrecht</h3>
                <p className="text-[#09002C]/80 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte, Werke, Bilder und Grafiken auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                  Alle Bilder und Grafiken auf dieser Website wurden von uns selbst angefertigt.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#09002C] mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                <p className="text-[#09002C]/80 leading-relaxed">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
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