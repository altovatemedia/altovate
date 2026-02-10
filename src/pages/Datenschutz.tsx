import { Helmet } from 'react-helmet';
import NewNavigation from '@/components/sections/NewNavigation';
import Footer from '@/components/Footer';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Datenschutzerklärung | altovate GmbH</title>
        <meta name="description" content="Datenschutzerklärung der altovate GmbH gemäß DSGVO. Informationen zur Erhebung und Verarbeitung personenbezogener Daten." />
        <link rel="canonical" href="https://altovate.de/datenschutz" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <NewNavigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-[720px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-left">
              Datenschutzerklärung
            </h1>
            
            <div className="prose prose-lg max-w-none text-left">
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Ihre personenbezogenen Daten werden vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO, BDSG, TMG) behandelt.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Verantwortlicher</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Buchmann & Ollinger GbR<br />
                  Am Hölzengrund 9<br />
                  66663 Merzig<br />
                  E-Mail: info@altovate.de
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wir verarbeiten personenbezogene Daten, die Sie uns übermitteln, etwa über unser Kontaktformular (Name, E-Mail-Adresse). Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage genutzt und nicht ohne Ihre Einwilligung an Dritte weitergegeben.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Hosting und Infrastruktur</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Unsere Website wird über Loveable.dev in Kombination mit GitHub, Vercel und Supabase bereitgestellt. Die Datenverarbeitung findet überwiegend in Rechenzentren innerhalb der EU statt. Eine Datenübertragung in die USA kann nicht ausgeschlossen werden, da Dienste von Vercel und Supabase US-Anbieter sind.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Einsatz von Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wir setzen Cookies ein, um unsere Website nutzerfreundlicher und effektiver zu machen. Dazu gehören notwendige Cookies (z. B. für den Betrieb der Seite) sowie Analyse- und Marketing-Cookies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Analytische Dienste</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wir nutzen Google Analytics (Google Ireland Limited). Google Analytics verwendet Cookies zur Analyse Ihres Nutzerverhaltens. Die Daten können in die USA übertragen werden.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Marketing-Tools / Pixel</h2>
                <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
                  <li>Facebook Pixel (Meta Platforms Ireland Limited)</li>
                  <li>TikTok Pixel (TikTok Technology Limited)</li>
                  <li>LinkedIn Insight Tag (LinkedIn Ireland Unlimited Company)</li>
                  <li>Google Ads Conversion Tracking (Google Ireland Limited)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Social Media Plugins</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Auf unserer Seite finden Sie Buttons zu LinkedIn und Instagram. Beim Anklicken wird eine direkte Verbindung zu den Servern der Anbieter aufgebaut.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Eingesetzte Drittanbieter-Tools</h2>
                <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
                  <li>Calendly (Terminbuchung)</li>
                  <li>Typeform (Formulare)</li>
                  <li>Zapier (Automatisierungen)</li>
                  <li>OpenAI GPT (Chatbot-Funktion)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Diese Dienste können personenbezogene Daten (z. B. E-Mail, IP-Adresse) verarbeiten. Teilweise erfolgt eine Datenübertragung in die USA.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Rechte der Nutzer</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Sie haben jederzeit das Recht auf:</p>
                <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
                  <li>Auskunft über die gespeicherten Daten (Art. 15 DSGVO)</li>
                  <li>Berichtigung (Art. 16 DSGVO)</li>
                  <li>Löschung (Art. 17 DSGVO)</li>
                  <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Speicherdauer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck erforderlich ist oder wie es gesetzlich vorgeschrieben ist.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Beschwerderecht</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren (z. B. beim Landesdatenschutzbeauftragten des Saarlandes).
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
