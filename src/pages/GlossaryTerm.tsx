import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Copy, Check } from 'lucide-react';
import SEOSchema from '@/components/SEOSchema';
import NewNavigation from '@/components/sections/NewNavigation';
import Footer from '@/components/Footer';
import CTASection from '@/components/marketing-system/CTASection';
import { supabase } from '@/integrations/supabase/client';

interface Term {
  id: string;
  term: string;
  slug: string;
  short_definition: string;
  content_html: string | null;
  related_terms: string[] | null;
  category: string | null;
}

interface RelatedTerm {
  term: string;
  slug: string;
}

const GlossaryTerm = () => {
  const { slug } = useParams<{ slug: string }>();
  const [term, setTerm] = useState<Term | null>(null);
  const [relatedTerms, setRelatedTerms] = useState<RelatedTerm[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!slug) return;

    const fetchTerm = async () => {
      const { data, error } = await supabase
        .from('glossary_terms')
        .select('id, term, slug, short_definition, content_html, related_terms, category')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();

      if (error || !data) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      setTerm(data as Term);

      // Fetch related terms
      if (data.related_terms && data.related_terms.length > 0) {
        const { data: related } = await supabase
          .from('glossary_terms')
          .select('term, slug')
          .in('slug', data.related_terms)
          .eq('status', 'published');

        if (related) {
          setRelatedTerms(related as RelatedTerm[]);
        }
      }

      setLoading(false);
    };
    fetchTerm();
  }, [slug]);

  const handleCopy = () => {
    if (!term) return;
    navigator.clipboard.writeText(term.short_definition);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (notFound) {
    return <Navigate to="/marketing-wissen/glossar" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <NewNavigation />
        <div className="flex justify-center items-center pt-48">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      </div>
    );
  }

  if (!term) return null;

  const metaTitle = `${term.term} – Marketing-Glossar | altovate`;
  const canonical = `https://altovate.de/marketing-wissen/glossar/${term.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={term.short_definition} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={term.short_definition} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
      </Helmet>

      <SEOSchema
        page="service"
        breadcrumbs={[
          { name: 'Startseite', url: 'https://altovate.de/' },
          { name: 'Strategisches Marketingwissen', url: 'https://altovate.de/marketing-wissen' },
          { name: 'Glossar', url: 'https://altovate.de/marketing-wissen/glossar' },
          { name: term.term, url: canonical },
        ]}
      />

      <NewNavigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/marketing-wissen/glossar"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Zurück zum Glossar
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              {term.term}
            </h1>

            {/* Definition Box */}
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
                {term.short_definition}
              </p>
              <div className="mt-4">
                <span className="text-xs text-muted-foreground">
                  Quelle: Altovate – Strategisches Marketingwissen
                </span>
              </div>
            </div>

            {/* Content */}
            {term.content_html && (
              <div
                className="prose prose-invert prose-lg max-w-none mb-16 
                  prose-headings:text-foreground prose-headings:font-bold
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-strong:text-foreground
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-li:text-muted-foreground
                  prose-table:border-border prose-th:text-foreground prose-td:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: term.content_html }}
              />
            )}

            {/* Related Terms */}
            {relatedTerms.length > 0 && (
              <div className="mb-16">
                <h2 className="text-xl font-bold text-foreground mb-4">Verwandte Begriffe</h2>
                <div className="flex flex-wrap gap-3">
                  {relatedTerms.map((rt) => (
                    <Link
                      key={rt.slug}
                      to={`/marketing-wissen/glossar/${rt.slug}`}
                      className="bg-card/40 border border-border rounded-lg px-4 py-2 text-sm text-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    >
                      {rt.term}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
};

export default GlossaryTerm;
