import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight } from 'lucide-react';
import NewNavigation from '@/components/sections/NewNavigation';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { supabase } from '@/integrations/supabase/client';

interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  meta_description: string | null;
  hero_image_url: string | null;
  published_at: string | null;
}

const Marketingwissen = () => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('blog_articles' as any)
        .select('id, title, slug, meta_description, hero_image_url, published_at')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (!error && data) {
        setArticles(data as unknown as BlogArticle[]);
      }
      setLoading(false);
    };
    fetchArticles();
  }, []);

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Marketingwissen | altovate</title>
        <meta name="description" content="Praxisnahes Marketingwissen für Unternehmer: Strategien, Tipps und Insights rund um Social Media, Content Marketing und digitale Sichtbarkeit." />
        <link rel="canonical" href="https://altovate.de/marketingwissen" />
        <meta property="og:title" content="Marketingwissen | altovate" />
        <meta property="og:description" content="Praxisnahe Artikel rund um Marketing, Social Media und digitale Sichtbarkeit – direkt anwendbar für dein Unternehmen." />
        <meta property="og:url" content="https://altovate.de/marketingwissen" />
        <meta property="og:type" content="website" />
      </Helmet>

      <NewNavigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Marketingwissen
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Praxisnahe Artikel rund um Marketing, Social Media und digitale Sichtbarkeit – direkt anwendbar für dein Unternehmen.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Noch keine Artikel veröffentlicht. Schau bald wieder vorbei!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  to={`/marketingwissen/${article.slug}`}
                  className="group block bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {article.hero_image_url && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.hero_image_url}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {article.published_at && (
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <CalendarDays size={14} />
                        <span>{formatDate(article.published_at)}</span>
                      </div>
                    )}
                    <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    {article.meta_description && (
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {article.meta_description}
                      </p>
                    )}
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                      Weiterlesen <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Marketingwissen;
