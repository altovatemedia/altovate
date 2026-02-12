import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Article {
  id: string;
  title: string;
  slug: string;
  meta_description: string | null;
  category: string | null;
  published_at: string | null;
  reading_time_minutes: number | null;
}

const CATEGORY_MAP: Record<string, { label: string; clusterSlug: string }> = {
  roi: { label: 'ROI', clusterSlug: 'roi-wirtschaftlichkeit' },
  'social-media': { label: 'Social Media', clusterSlug: 'social-media-system' },
  funnel: { label: 'Funnel', clusterSlug: 'funnel-nachfrage' },
  recruiting: { label: 'Recruiting', clusterSlug: 'recruiting-arbeitgebermarke' },
  geo: { label: 'GEO', clusterSlug: 'geo-ki-sichtbarkeit' },
};

const FILTERS = [
  { key: 'all', label: 'Alle' },
  { key: 'roi', label: 'ROI' },
  { key: 'social-media', label: 'Social Media' },
  { key: 'funnel', label: 'Funnel' },
  { key: 'recruiting', label: 'Recruiting' },
  { key: 'geo', label: 'GEO' },
];

const ArticleFeed = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from('blog_articles')
        .select('id, title, slug, meta_description, category, published_at, reading_time_minutes')
        .eq('status', 'published')
        .order('published_at', { ascending: false });
      setArticles((data as Article[]) || []);
      setLoading(false);
    };
    fetch();
  }, []);

  const filtered = activeFilter === 'all'
    ? articles
    : articles.filter((a) => a.category === activeFilter);

  if (loading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (articles.length === 0) return null;

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="finom-h2 mb-8">Alle Artikel</h2>

          {/* Filter chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === f.key
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'text-muted-foreground border-border hover:text-foreground hover:border-foreground/30'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Article list */}
          <div className="space-y-6">
            {filtered.map((article) => {
              const cat = article.category ? CATEGORY_MAP[article.category] : null;
              const href = cat
                ? `/marketing-wissen/${cat.clusterSlug}/${article.slug}`
                : `/marketing-wissen/${article.slug}`;

              return (
                <Link
                  key={article.id}
                  to={href}
                  className="block liquid-glass rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    {cat && (
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                        {cat.label}
                      </span>
                    )}
                    {article.published_at && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground/60">
                        <CalendarDays size={12} />
                        {new Date(article.published_at).toLocaleDateString('de-DE', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    )}
                    {article.reading_time_minutes && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground/60">
                        <Clock size={12} />
                        {article.reading_time_minutes} Min.
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {article.title}
                  </h3>
                  {article.meta_description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {article.meta_description}
                    </p>
                  )}
                </Link>
              );
            })}

            {filtered.length === 0 && (
              <p className="text-muted-foreground text-center py-8">
                Keine Artikel in dieser Kategorie.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleFeed;
