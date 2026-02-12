import { Helmet } from 'react-helmet';
import { ExternalLink, Clock, Sparkles, Leaf, Brain, Dumbbell, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import NewNavigation from '@/components/sections/NewNavigation';
import Footer from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';

import heraLogo from '@/assets/tools/hera-logo.svg';
import typelessLogo from '@/assets/tools/typeless-logo.png';
import whisprflowLogo from '@/assets/tools/whisprflow-logo.svg';
import lovableLogo from '@/assets/tools/lovable-logo.png';

const CopyCodeButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 text-xs font-mono text-primary/90 transition-colors cursor-pointer"
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? 'Kopiert!' : code}
    </button>
  );
};

const tools = [
  {
    name: 'Lovable',
    category: 'No-Code Website-Builder',
    logo: lovableLogo,
    benefit: '10 gratis Credits mit meinem Link',
    link: 'https://lovable.dev/invite/ADKF155',
    description:
      'Mein absolutes Lieblingstool. Websites, Web-Apps, Landingpages – alles durch einfache Prompt-Eingabe. Voll funktional mit Hosting, Datenbank und Integrationen wie Stripe, Shopify und mehr. Diese Website hier? Damit gebaut.',
    timeSave: 'Wochen an Entwicklungszeit gespart',
    featured: true,
  },
  {
    name: 'Hera',
    category: 'Motion Design / KI-Video',
    logo: heraLogo,
    benefit: '15 % Rabatt mit meinem Link',
    link: 'https://hera.cello.so/JoZSq4tkrXH',
    description:
      'Früher habe ich Stunden in After Effects verbracht, um ein einziges Motion Design zu erstellen. Mit Hera beschreibe ich per Prompt, was ich brauche – und bekomme in Sekunden ein Ergebnis in Profi-Qualität. Für mich einer der größten Zeitspar-Hebel in der Content-Produktion.',
    timeSave: 'Stunden pro Motion Design gespart',
  },
  {
    name: 'Typeless',
    category: 'Diktiersoftware (Desktop)',
    logo: typelessLogo,
    benefit: null,
    link: 'https://www.typeless.com/?via=alexander-buchmann',
    description:
      'Ich tippe fast nichts mehr. Typeless hört zu, versteht den Inhalt und formuliert daraus saubere, zusammengefasste Sätze – kein rohes Transkript, sondern fertiger Text. Spart mir täglich mindestens eine Stunde.',
    timeSave: '~1 Stunde täglich gespart',
  },
  {
    name: 'Whispr Flow',
    category: 'Diktiersoftware (iPhone & Desktop)',
    logo: whisprflowLogo,
    benefit: '1 Monat Pro gratis mit meinem Link',
    link: 'https://wisprflow.ai/r/MEAWERI!131',
    description:
      'Macht dasselbe wie Typeless, aber nativ auf dem iPhone – und mittlerweile auch auf dem Desktop. Könnte für mich bald Typeless ersetzen. Ideal, wenn du viel unterwegs diktierst.',
    timeSave: 'Perfekt für unterwegs',
  },
];

const Tools = () => {
  return (
    <>
      <Helmet>
        <title>Meine Lieblingstools – KI-Tools die ich täglich nutze | Altovate</title>
        <meta
          name="description"
          content="Meine persönlichen Empfehlungen: KI-Tools, Nahrungsergänzung und Performance-Tipps aus 15 Jahren Erfahrung. Ehrliche Empfehlungen aus der Praxis – für Unternehmer, die mehr aus sich herausholen wollen."
        />
      </Helmet>

      <NewNavigation />

      <main className="min-h-screen bg-background pt-24">
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
            <Badge className="glass-badge text-primary mb-6 mx-auto">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Persönliche Empfehlungen
            </Badge>
            <h1 className="finom-h1 mb-6">
              <span className="gold-gradient-text">Meine Lieblingstools</span>
            </h1>
            <p className="finom-lead max-w-2xl mx-auto">
              Diese Tools und Produkte nutze ich täglich, um mit der Effizienz von 10 A-Playern zu arbeiten. Kein Sponsoring, keine bezahlte Werbung – nur ehrliche Empfehlungen aus meinem Alltag.
            </p>
          </div>
        </section>

        {/* Soft transition */}
        <div className="h-16 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

        {/* Tool Cards */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tools.map((tool) => {
                return (
                  <div
                    key={tool.name}
                    className={`finom-card relative group ${tool.featured ? 'md:col-span-2' : ''}`}
                  >
                    {/* Featured glow */}
                    {tool.featured && (
                      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 -z-10 blur-sm" />
                    )}

                    <div className={`flex flex-col ${tool.featured ? 'md:flex-row md:items-start md:gap-10' : ''}`}>
                      {/* Logo + Meta */}
                      <div className={`flex items-start gap-4 mb-5 ${tool.featured ? 'md:mb-0 md:min-w-[220px]' : ''}`}>
                        <div className="liquid-glass-icon rounded-xl p-3 flex-shrink-0 w-12 h-12 flex items-center justify-center">
                          <img src={tool.logo} alt={`${tool.name} Logo`} className="w-6 h-6 object-contain" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-foreground gold-gradient-text">{tool.name}</h2>
                          <Badge variant="outline" className="mt-1.5 text-xs text-muted-foreground border-border">
                            {tool.category}
                          </Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <p className="text-foreground/80 leading-relaxed mb-4 text-[0.95rem]">
                          {tool.description}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                          <Clock className="w-4 h-4 text-primary/70" />
                          <span>{tool.timeSave}</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                          <a href={tool.link} target="_blank" rel="noopener noreferrer">
                            <Button className="btn-hero text-sm px-6 py-3 gap-2">
                              Tool ansehen
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </a>

                          {tool.benefit && (
                            <span className="text-xs text-primary/80 font-medium">
                              ✦ {tool.benefit}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Soft transition */}
        <div className="h-16 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

        {/* Performance & Gesundheit */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            {/* Section Header */}
            <div className="text-center mb-12">
              <Badge className="glass-badge text-primary mb-6 mx-auto">
                <Dumbbell className="w-3.5 h-3.5 mr-1.5" />
                Performance & Gesundheit
              </Badge>
              <h2 className="finom-h2 mb-6">
                <span className="gold-gradient-text">Meine Wurzeln</span>
              </h2>
              <p className="finom-lead max-w-3xl mx-auto mb-6">
                Neben KI-Tools gibt es noch einen Bereich, in dem ich 15 Jahre Erfahrung mitbringe: Fitness, Ernährung und Nahrungsergänzung. Gerade als Unternehmer kannst du hier unglaublich viel für deine tägliche Leistungsfähigkeit herausholen.
              </p>
              <p className="text-foreground/70 text-[0.95rem] max-w-2xl mx-auto">
                Die Basis – Bewegung und Ernährung – muss natürlich stimmen. Wer dort individuelle Unterstützung sucht, dem empfehle ich{' '}
                <a
                  href="https://www.onestepfurther.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                >
                  One Step Further
                </a>.
              </p>
            </div>

            {/* Supplement Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Adaptogen-Komplex */}
              <div className="finom-card relative group">
                <div className="flex items-start gap-4 mb-5">
                  <div className="liquid-glass-icon rounded-xl p-3 flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground gold-gradient-text">Adaptogen-Komplex</h3>
                    <Badge variant="outline" className="mt-1.5 text-xs text-muted-foreground border-border">
                      Nahrungsergänzung
                    </Badge>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-foreground/80 leading-relaxed mb-4 text-[0.95rem]">
                    Stress gehört zum Unternehmer-Alltag. Adaptogene wie Ashwagandha helfen dem Körper, besser mit chronischem Stress umzugehen – natürlich und ohne Nebenwirkungen. Für mich ein absoluter Game-Changer im Alltag.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                    <Clock className="w-4 h-4 text-primary/70" />
                    <span>Bessere Stressresistenz & Fokus</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a href="https://zec-nutrition-gmbh-co-kg.myshopify.com/10479532" target="_blank" rel="noopener noreferrer">
                      <Button className="btn-hero text-sm px-6 py-3 gap-2">
                        Produkt ansehen
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                    <CopyCodeButton code="ONESTEP" />
                  </div>
                </div>
              </div>

              {/* Vitalpilze */}
              <div className="finom-card relative group">
                <div className="flex items-start gap-4 mb-5">
                  <div className="liquid-glass-icon rounded-xl p-3 flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground gold-gradient-text">Vitalpilze (Löwenmähne)</h3>
                    <Badge variant="outline" className="mt-1.5 text-xs text-muted-foreground border-border">
                      Nahrungsergänzung
                    </Badge>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-foreground/80 leading-relaxed mb-4 text-[0.95rem]">
                    Löwenmähne-Extrakt (Lion's Mane) ist einer der spannendsten Vitalpilze für kognitive Leistung: Fokus, Klarheit, Gedächtnisleistung. Ich nehme ihn täglich und merke den Unterschied besonders an langen Arbeitstagen.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                    <Clock className="w-4 h-4 text-primary/70" />
                    <span>Mehr Fokus & kognitive Klarheit</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a href="https://zec-nutrition-gmbh-co-kg.myshopify.com/10479532" target="_blank" rel="noopener noreferrer">
                      <Button className="btn-hero text-sm px-6 py-3 gap-2">
                        Produkt ansehen
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                    <CopyCodeButton code="ONESTEP" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Soft transition */}
        <div className="h-16 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

        {/* Disclaimer */}
        <section className="pb-20">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground/70">Transparenzhinweis:</strong> Einige der Links auf dieser Seite sind Affiliate-Links. Wenn du ein Tool oder Produkt über meinen Link testest, erhalte ich ggf. eine kleine Provision – für dich entstehen keine Mehrkosten. Ich empfehle ausschließlich Produkte, die ich selbst aktiv nutze.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
};

export default Tools;
