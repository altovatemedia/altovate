import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, ArrowRight, Copy, Check } from 'lucide-react';
import SEOSchema from '@/components/SEOSchema';
import NewNavigation from '@/components/sections/NewNavigation';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import CTASection from '@/components/marketing-system/CTASection';
import { supabase } from '@/integrations/supabase/client';

interface Article {
  id: string;
  title: string;
  slug: string;
  meta_description: string | null;
  category: string | null;
  reading_time_minutes: number | null;
}

interface ClusterConfig {
  slug: string;
  category: string;
  h1: string;
  definition: string;
  metaTitle: string;
  metaDescription: string;
  faqItems: { question: string; answer: string }[];
}

const CLUSTERS: ClusterConfig[] = [
  {
    slug: 'roi-wirtschaftlichkeit',
    category: 'roi',
    h1: 'ROI & Wirtschaftlichkeit im Marketing',
    definition: 'Der Marketing-ROI berechnet sich aus (Gewinn – Investition) / Investition. Entscheidend ist nicht der Umsatz, sondern der Deckungsbeitrag der gewonnenen Kunden. Ohne eine klare Wirtschaftlichkeitsbetrachtung bleibt Marketing ein Kostenfaktor statt einer Investition.',
    metaTitle: 'ROI & Wirtschaftlichkeit im Marketing | altovate',
    metaDescription: 'Marketing-ROI berechnen: Deckungsbeitrag, Abschlussquote und Kundenwert als echte Kennzahlen. Rechenmodelle und Entscheidungsgrundlagen.',
    faqItems: [
      { question: 'Wie berechnet man den Marketing-ROI?', answer: 'Der Marketing-ROI berechnet sich aus (Gewinn – Investition) / Investition. Dabei zählt der Deckungsbeitrag, nicht der Bruttoumsatz.' },
      { question: 'Ab welchem Budget lohnt sich Online-Marketing?', answer: 'Es gibt kein Mindestbudget. Entscheidend ist, ob der Cost-per-Lead unter dem Kundenwert liegt. Das lässt sich bereits mit kleinen Budgets testen.' },
      { question: 'Warum ist Reichweite keine relevante Kennzahl?', answer: 'Reichweite misst Sichtbarkeit, nicht Wirtschaftlichkeit. Ein Unternehmen kann Millionen erreichen und trotzdem keinen einzigen Kunden gewinnen.' },
    ],
  },
  {
    slug: 'social-media-system',
    category: 'social-media',
    h1: 'Social Media als System',
    definition: 'Social Media Marketing funktioniert nur als System. Einzelne Posts erzeugen keine Nachfrage. Erst die Kombination aus wiederholter Sichtbarkeit, relevantem Content und klarer Handlungsaufforderung führt zu messbaren Ergebnissen.',
    metaTitle: 'Social Media als System für Unternehmen | altovate',
    metaDescription: 'Social Media funktioniert nur als System. Wie Unternehmen Aufmerksamkeit, Vertrauen und Nachfrage strukturiert aufbauen.',
    faqItems: [
      { question: 'Warum funktionieren einzelne Posts nicht?', answer: 'Ein einzelner Post erreicht nur einen Bruchteil der Zielgruppe. Ohne Wiederholung und Struktur entsteht weder Wiedererkennung noch Vertrauen.' },
      { question: 'Wie viele Beiträge pro Woche sind sinnvoll?', answer: 'Die Frequenz ist weniger wichtig als die Konsistenz. 2-3 durchdachte Beiträge pro Woche übertreffen 7 beliebige Posts.' },
    ],
  },
  {
    slug: 'funnel-nachfrage',
    category: 'funnel',
    h1: 'Funnel & Nachfrage',
    definition: 'Ein Funnel ist ein strukturierter Prozess, der Aufmerksamkeit in Nachfrage übersetzt. Ohne Funnel bleibt Sichtbarkeit wirkungslos. Jede Stufe – von der ersten Wahrnehmung bis zur Anfrage – muss messbar und optimierbar sein.',
    metaTitle: 'Funnel & Nachfrage aufbauen | altovate',
    metaDescription: 'Wie Unternehmen aus Sichtbarkeit messbare Nachfrage erzeugen. Funnel-Strukturen, Conversion-Modelle und Lead-Prozesse.',
    faqItems: [
      { question: 'Was ist ein Marketing-Funnel?', answer: 'Ein Marketing-Funnel beschreibt den strukturierten Weg vom ersten Kontakt bis zur Anfrage. Er macht jeden Schritt messbar und optimierbar.' },
      { question: 'Braucht jedes Unternehmen einen Funnel?', answer: 'Jedes Unternehmen, das online Anfragen generieren will, braucht einen definierten Prozess. Ob einfach oder komplex hängt vom Geschäftsmodell ab.' },
    ],
  },
  {
    slug: 'recruiting-arbeitgebermarke',
    category: 'recruiting',
    h1: 'Recruiting & Arbeitgebermarke',
    definition: 'Fachkräfte bewerben sich nicht bei Unternehmen, die sie nicht kennen. Die Arbeitgebermarke entscheidet über die Qualität und Quantität eingehender Bewerbungen. Sichtbarkeit als Arbeitgeber ist keine Option, sondern Voraussetzung.',
    metaTitle: 'Recruiting & Arbeitgebermarke aufbauen | altovate',
    metaDescription: 'Fachkräfte gewinnen durch systematischen Aufbau der Arbeitgebermarke. Sichtbarkeit entscheidet vor der Stellenausschreibung.',
    faqItems: [
      { question: 'Warum reichen Stellenanzeigen nicht mehr?', answer: 'Stellenanzeigen erreichen nur aktiv Suchende. Die besten Fachkräfte sind passiv – sie wechseln nur zu Arbeitgebern, die sie bereits kennen.' },
      { question: 'Was macht eine starke Arbeitgebermarke aus?', answer: 'Authentische Einblicke in den Arbeitsalltag, klare Positionierung als Arbeitgeber und konsistente Präsenz auf den Kanälen der Zielgruppe.' },
    ],
  },
  {
    slug: 'geo-ki-sichtbarkeit',
    category: 'geo',
    h1: 'GEO & KI-Sichtbarkeit',
    definition: 'Generative Engine Optimization (GEO) beschreibt die Optimierung von Inhalten für KI-basierte Suchsysteme. Klassisches SEO-Ranking reicht nicht mehr aus. Unternehmen müssen Inhalte so strukturieren, dass KI-Systeme sie als zitierfähige Quelle erkennen.',
    metaTitle: 'GEO & KI-Sichtbarkeit für Unternehmen | altovate',
    metaDescription: 'Generative Engine Optimization: Wie Unternehmen in KI-Suchsystemen sichtbar werden. Strukturierte Inhalte, Definitionen und Zitierfähigkeit.',
    faqItems: [
      { question: 'Was ist GEO?', answer: 'GEO steht für Generative Engine Optimization. Es beschreibt die Optimierung von Inhalten, damit KI-Systeme wie ChatGPT oder Google AI sie als Quelle erkennen und zitieren.' },
      { question: 'Ersetzt GEO klassisches SEO?', answer: 'Nein. GEO ergänzt SEO. Klassische Rankings bleiben relevant, aber die Art, wie Inhalte strukturiert und formuliert werden, muss sich anpassen.' },
    ],
  },
];

const DefinitionBox = ({ definition, clusterSlug }: { definition: string; clusterSlug: string }) => {
  const [copied, setCopied] = useState(false);
  const url = `https://altovate.de/marketing-wissen/${clusterSlug}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(definition);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="relative bg-card/60 rounded-lg pl-6 pr-6 py-6 mb-12 border-l-2 border-primary">
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        title="Definition kopieren"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">Definition</p>
      <p className="text-foreground leading-relaxed pr-8">
        {definition}
      </p>
      <div className="mt-4 flex items-center gap-4">
        <span className="text-xs text-muted-foreground">
          Quelle: Altovate – Strategisches Marketingwissen
        </span>
        <button
          onClick={handleCopyLink}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
        >
          Direktlink kopieren
        </button>
      </div>
    </div>
  );
};

const ClusterPage = () => {
  const { clusterSlug } = useParams<{ clusterSlug: string }>();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const cluster = CLUSTERS.find((c) => c.slug === clusterSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!cluster) return;

    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('blog_articles' as any)
        .select('id, title, slug, meta_description, category, reading_time_minutes')
        .eq('status', 'published')
        .eq('category', cluster.category)
        .order('published_at', { ascending: false });

      if (!error && data) {
        setArticles(data as unknown as Article[]);
      }
      setLoading(false);
    };
    fetchArticles();
  }, [cluster]);

  if (!cluster) {
    return <Navigate to="/marketing-wissen" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{cluster.metaTitle}</title>
        <meta name="description" content={cluster.metaDescription} />
        <link rel="canonical" href={`https://altovate.de/marketing-wissen/${cluster.slug}`} />
        <meta property="og:title" content={cluster.metaTitle} />
        <meta property="og:description" content={cluster.metaDescription} />
        <meta property="og:url" content={`https://altovate.de/marketing-wissen/${cluster.slug}`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <SEOSchema
        page="service"
        faqItems={cluster.faqItems}
        breadcrumbs={[
          { name: 'Startseite', url: 'https://altovate.de/' },
          { name: 'Strategisches Marketingwissen', url: 'https://altovate.de/marketing-wissen' },
          { name: cluster.h1, url: `https://altovate.de/marketing-wissen/${cluster.slug}` },
        ]}
      />

      <NewNavigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/marketing-wissen"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Zurück zur Übersicht
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              {cluster.h1}
            </h1>

            <DefinitionBox definition={cluster.definition} clusterSlug={cluster.slug} />

            {/* Artikelübersicht */}
            <h2 className="finom-h3 mb-6">Artikel in diesem Themencluster</h2>

            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
              </div>
            ) : articles.length === 0 ? (
              <p className="text-muted-foreground py-8">
                Noch keine Artikel in diesem Themencluster veröffentlicht.
              </p>
            ) : (
              <div className="space-y-4 mb-16">
                {articles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/marketing-wissen/${cluster.slug}/${article.slug}`}
                    className="block bg-card/40 rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {article.title}
                        </h3>
                        {article.meta_description && (
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {article.meta_description}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        {article.reading_time_minutes && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock size={12} /> {article.reading_time_minutes} Min
                          </span>
                        )}
                        <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* FAQ */}
            {cluster.faqItems.length > 0 && (
              <div className="mb-16">
                <h2 className="finom-h3 mb-6">Häufige Fragen</h2>
                <div className="space-y-4">
                  {cluster.faqItems.map((faq, i) => (
                    <div key={i} className="bg-card/40 rounded-xl p-6">
                      <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <CTASection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default ClusterPage;
