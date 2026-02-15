import { useEffect, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';
import SEOSchema from '@/components/SEOSchema';
import NewNavigation from '@/components/sections/NewNavigation';
import Footer from '@/components/Footer';
import CTASection from '@/components/marketing-system/CTASection';
import { supabase } from '@/integrations/supabase/client';

interface GlossaryTerm {
  id: string;
  term: string;
  slug: string;
  short_definition: string;
  category: string | null;
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const GlossaryOverview = () => {
  const [terms, setTerms] = useState<GlossaryTerm[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchTerms = async () => {
      const { data, error } = await supabase
        .from('glossary_terms')
        .select('id, term, slug, short_definition, category')
        .eq('status', 'published')
        .order('term', { ascending: true });

      if (!error && data) {
        setTerms(data as GlossaryTerm[]);
      }
      setLoading(false);
    };
    fetchTerms();
  }, []);

  const filtered = useMemo(() => {
    let result = terms;
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) => t.term.toLowerCase().includes(q) || t.short_definition.toLowerCase().includes(q)
      );
    }
    if (activeLetter) {
      result = result.filter((t) => t.term.charAt(0).toUpperCase() === activeLetter);
    }
    return result;
  }, [terms, search, activeLetter]);

  const grouped = useMemo(() => {
    const map: Record<string, GlossaryTerm[]> = {};
    for (const term of filtered) {
      const letter = term.term.charAt(0).toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(term);
    }
    return map;
  }, [filtered]);

  const availableLetters = useMemo(() => {
    return new Set(terms.map((t) => t.term.charAt(0).toUpperCase()));
  }, [terms]);

  const faqItems = [
    { question: 'Was ist das Altovate Marketing-Glossar?', answer: 'Das Glossar erklärt zentrale Begriffe aus Online-Marketing, Funnel-Strategie, Social Media und KI-Sichtbarkeit – sachlich, kompakt und ohne Buzzwords.' },
    { question: 'Für wen ist das Glossar gedacht?', answer: 'Für Unternehmer und Entscheider, die Marketing-Begriffe verstehen wollen, ohne sich durch Agentur-Jargon arbeiten zu müssen.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Marketing-Glossar | altovate</title>
        <meta name="description" content="Marketing-Begriffe verständlich erklärt: ROI, Funnel, GEO, Social Media und mehr. Kompaktes Glossar für Unternehmer." />
        <link rel="canonical" href="https://altovate.de/marketing-wissen/glossar" />
        <meta property="og:title" content="Marketing-Glossar | altovate" />
        <meta property="og:description" content="Marketing-Begriffe verständlich erklärt: ROI, Funnel, GEO, Social Media und mehr." />
        <meta property="og:url" content="https://altovate.de/marketing-wissen/glossar" />
        <meta property="og:type" content="website" />
      </Helmet>

      <SEOSchema
        page="service"
        faqItems={faqItems}
        breadcrumbs={[
          { name: 'Startseite', url: 'https://altovate.de/' },
          { name: 'Strategisches Marketingwissen', url: 'https://altovate.de/marketing-wissen' },
          { name: 'Glossar', url: 'https://altovate.de/marketing-wissen/glossar' },
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

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Marketing-Glossar
            </h1>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Zentrale Begriffe aus Online-Marketing, Funnel-Strategie, Social Media und KI-Sichtbarkeit – sachlich erklärt, ohne Buzzwords.
            </p>

            {/* Search */}
            <div className="relative mb-8">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Begriff suchen…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-card/60 border border-border rounded-xl pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            {/* A-Z Navigation */}
            <div className="flex flex-wrap gap-1 mb-10">
              <button
                onClick={() => setActiveLetter(null)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  !activeLetter ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                Alle
              </button>
              {ALPHABET.map((letter) => (
                <button
                  key={letter}
                  onClick={() => setActiveLetter(activeLetter === letter ? null : letter)}
                  disabled={!availableLetters.has(letter)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    activeLetter === letter
                      ? 'bg-primary text-primary-foreground'
                      : availableLetters.has(letter)
                      ? 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      : 'text-muted-foreground/30 cursor-not-allowed'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>

            {/* Terms */}
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
              </div>
            ) : filtered.length === 0 ? (
              <p className="text-muted-foreground py-8">
                {search ? `Kein Ergebnis für „${search}".` : 'Noch keine Glossar-Einträge veröffentlicht.'}
              </p>
            ) : (
              <div className="space-y-10">
                {Object.keys(grouped)
                  .sort()
                  .map((letter) => (
                    <div key={letter} id={`letter-${letter}`}>
                      <h2 className="text-2xl font-bold text-primary mb-4">{letter}</h2>
                      <div className="space-y-3">
                        {grouped[letter].map((term) => (
                          <Link
                            key={term.id}
                            to={`/marketing-wissen/glossar/${term.slug}`}
                            className="block bg-card/40 rounded-xl p-5 hover:-translate-y-0.5 transition-all duration-300 group"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                                  {term.term}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  {term.short_definition}
                                </p>
                              </div>
                              <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors mt-1.5 flex-shrink-0" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {/* FAQ */}
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-foreground mb-6">Häufige Fragen</h2>
              <div className="space-y-4">
                {faqItems.map((faq, i) => (
                  <div key={i} className="bg-card/40 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
};

export default GlossaryOverview;
