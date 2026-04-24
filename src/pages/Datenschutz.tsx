import { Helmet } from 'react-helmet';
import NewNavigation from '@/components/sections/NewNavigation';
import VisualBreadcrumb from '@/components/VisualBreadcrumb';
import Footer from '@/components/Footer';

const Datenschutz = () => {
  const triggerSettings = () => window.dispatchEvent(new CustomEvent('open-cookie-settings'));

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Datenschutzerklärung | altovate GmbH</title>
        <meta name="description" content="Datenschutzerklärung der altovate GmbH gemäß DSGVO und TDDDG. Informationen zur Verarbeitung personenbezogener Daten." />
        <link rel="canonical" href="https://altovate.de/datenschutz" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <NewNavigation />
      <VisualBreadcrumb items={[{ label: 'Datenschutz' }]} />

      <main className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-[760px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-left">
              Datenschutzerklärung
            </h1>
            <p className="text-sm text-muted-foreground mb-12">Stand: {new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</p>

            <div className="prose prose-lg max-w-none text-left text-muted-foreground leading-relaxed space-y-10">

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">1. Verantwortlicher</h2>
                <p>
                  altovate GmbH<br />
                  Max-Planck-Straße 6<br />
                  54439 Saarburg, Deutschland<br />
                  Telefon: +49 1520 892 2097<br />
                  E-Mail: info@altovate.de
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">2. Allgemeine Hinweise & Pflichtinformationen</h2>
                <p>
                  Wir verarbeiten personenbezogene Daten unserer Nutzer ausschließlich auf Grundlage der
                  geltenden Datenschutzbestimmungen, insbesondere der Datenschutz-Grundverordnung (DSGVO),
                  des Bundesdatenschutzgesetzes (BDSG), des Digitale-Dienste-Gesetzes (DDG) sowie des
                  Telekommunikation-Digitale-Dienste-Datenschutz-Gesetzes (TDDDG). Diese Erklärung informiert
                  über Art, Umfang und Zweck der Verarbeitung sowie über deine Rechte als betroffene Person.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">3. SSL/TLS-Verschlüsselung</h2>
                <p>
                  Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine
                  verschlüsselte Verbindung erkennst du am „https://" und am Schloss-Symbol in deiner
                  Browserzeile.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">4. Hosting (Vercel Inc., USA)</h2>
                <p>
                  <strong>Anbieter:</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.<br />
                  <strong>Zweck:</strong> Auslieferung der Website (CDN, Edge-Functions).<br />
                  <strong>Verarbeitete Daten:</strong> IP-Adresse, User-Agent, Referrer, abgerufene URLs.<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
                  performanter, sicherer Bereitstellung).<br />
                  <strong>Drittlandtransfer:</strong> USA – Vercel ist unter dem EU-US Data Privacy Framework
                  (DPF) zertifiziert. Es besteht ein Auftragsverarbeitungsvertrag (Art. 28 DSGVO).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">5. Server-Logfiles</h2>
                <p>
                  Beim Aufruf werden technisch notwendige Informationen (IP-Adresse, Datum/Uhrzeit, abgerufene
                  Ressource, HTTP-Status, User-Agent) automatisch in Server-Logfiles erfasst.<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO.<br />
                  <strong>Speicherdauer:</strong> 7 Tage, danach automatische Löschung bzw. Anonymisierung.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">6. Google Analytics 4</h2>
                <p>
                  <strong>Anbieter:</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland;
                  Mutterunternehmen: Google LLC, USA.<br />
                  <strong>Zweck:</strong> Reichweitenmessung, Auswertung des Nutzungsverhaltens zur
                  Verbesserung des Angebots.<br />
                  <strong>Verarbeitete Daten:</strong> IP-Adresse (gekürzt), Geräte- und Browser-Informationen,
                  besuchte Seiten, Verweildauer, Interaktionen.<br />
                  <strong>Rechtsgrundlage:</strong> § 25 Abs. 1 TDDDG i.V.m. Art. 6 Abs. 1 lit. a DSGVO
                  (Einwilligung). Die Verarbeitung erfolgt ausschließlich nach aktiver Einwilligung über
                  unseren Consent-Banner. Vor Einwilligung werden die Signale gemäß Google Consent Mode V2
                  auf <em>denied</em> gesetzt; es findet kein Setzen von Tracking-Cookies und keine
                  Übertragung personenbezogener Daten an Google statt.<br />
                  <strong>Drittlandtransfer:</strong> USA – Google LLC ist unter dem EU-US DPF zertifiziert.<br />
                  <strong>Speicherdauer:</strong> bis zu 14 Monate.<br />
                  <strong>Widerruf:</strong> jederzeit über{' '}
                  <button onClick={triggerSettings} className="text-primary underline font-medium">Cookie-Einstellungen</button>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">7. Google Tag Manager</h2>
                <p>
                  <strong>Anbieter:</strong> Google Ireland Limited, Irland.<br />
                  <strong>Zweck:</strong> Container-basierte Verwaltung von Marketing- und Analyse-Tags
                  (insbesondere Google Analytics 4).<br />
                  <strong>Rechtsgrundlage:</strong> § 25 Abs. 1 TDDDG i.V.m. Art. 6 Abs. 1 lit. a DSGVO.<br />
                  <strong>Drittlandtransfer:</strong> USA (DPF). Der Container wird ausschließlich nach
                  Einwilligung geladen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">8. Cal.com (Terminbuchung)</h2>
                <p>
                  <strong>Anbieter:</strong> Cal.com, Inc., 2261 Market Street #5544, San Francisco, CA 94114, USA.<br />
                  <strong>Zweck:</strong> Bereitstellung eines eingebetteten Buchungskalenders für Erstgespräche.<br />
                  <strong>Verarbeitete Daten:</strong> IP-Adresse, Geräteinformationen, beim Buchen zusätzlich
                  Name, E-Mail, gewählter Termin.<br />
                  <strong>Rechtsgrundlage:</strong> § 25 Abs. 1 TDDDG i.V.m. Art. 6 Abs. 1 lit. a DSGVO
                  (Einwilligung über Kategorie „Externe Einbettungen"). Bei Buchung zusätzlich Art. 6 Abs. 1
                  lit. b DSGVO (Vertragsanbahnung).<br />
                  <strong>Drittlandtransfer:</strong> USA – DPF-Status nicht bestätigt; die Übermittlung
                  erfolgt nur nach ausdrücklicher Einwilligung.<br />
                  <strong>Widerruf:</strong> jederzeit über{' '}
                  <button onClick={triggerSettings} className="text-primary underline font-medium">Cookie-Einstellungen</button>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">9. Supabase (Backend & Datenbank)</h2>
                <p>
                  <strong>Anbieter:</strong> Supabase Inc., 970 Toa Payoh North #07-04, Singapur. Verarbeitung
                  in EU-Region (Frankfurt).<br />
                  <strong>Zweck:</strong> Speicherung von Formulardaten, E-Mail-Versand, Auth-Funktionen.<br />
                  <strong>Verarbeitete Daten:</strong> Eingaben aus Kontakt-/Lead-Formularen
                  (Name, E-Mail, Nachricht).<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b und f DSGVO.<br />
                  <strong>Auftragsverarbeitung:</strong> AV-Vertrag mit Supabase Inc. besteht.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">10. Kontakt- und Leadformulare</h2>
                <p>
                  Bei Nutzung unserer Formulare (z. B. Erstkontakt, Marketing-Analyse, Software-Anfrage)
                  verarbeiten wir die übermittelten Daten zur Bearbeitung deiner Anfrage.<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw.
                  Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Anfragebearbeitung).<br />
                  <strong>Speicherdauer:</strong> bis zur abschließenden Bearbeitung; gesetzliche
                  Aufbewahrungsfristen bleiben unberührt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">11. Cookies und ähnliche Technologien</h2>
                <p>Wir setzen folgende Kategorien ein:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li><strong>Essenziell:</strong> <code>altovate_consent</code> – speichert deine
                    Einwilligungsentscheidung. Laufzeit 365 Tage. Rechtsgrundlage § 25 Abs. 2 Nr. 2 TDDDG.</li>
                  <li><strong>Analytics:</strong> Google Analytics 4 (<code>_ga</code>, <code>_ga_*</code>) – nur
                    nach Einwilligung. Laufzeit bis zu 24 Monate.</li>
                  <li><strong>Externe Einbettungen:</strong> Cal.com setzt eigene Cookies/LocalStorage erst beim
                    Laden des Embeds nach Einwilligung.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">12. Rechte der betroffenen Person</h2>
                <p>Du hast nach DSGVO folgende Rechte:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Auskunft (Art. 15 DSGVO)</li>
                  <li>Berichtigung (Art. 16 DSGVO)</li>
                  <li>Löschung (Art. 17 DSGVO)</li>
                  <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Widerspruch gegen Verarbeitungen auf Basis berechtigter Interessen (Art. 21 DSGVO)</li>
                  <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO), z. B. beim Landesbeauftragten
                    für den Datenschutz Rheinland-Pfalz.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">13. Widerruf der Einwilligung</h2>
                <p>
                  Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Nutze
                  hierzu den{' '}
                  <button onClick={triggerSettings} className="text-primary underline font-medium">
                    Footer-Link „Cookie-Einstellungen"
                  </button>{' '}
                  oder schreibe an info@altovate.de. Bei Widerruf werden gesetzte Tracking-Cookies
                  (<code>_ga*</code>, <code>_gcl_*</code>) automatisch gelöscht und externe Einbettungen
                  deaktiviert.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">14. Änderungen dieser Datenschutzerklärung</h2>
                <p>
                  Wir behalten uns vor, diese Erklärung anzupassen, um sie stets den aktuellen rechtlichen
                  Anforderungen entsprechen zu lassen oder Änderungen unserer Leistungen umzusetzen. Für
                  deinen erneuten Besuch gilt dann die neue Fassung.
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

export default Datenschutz;
