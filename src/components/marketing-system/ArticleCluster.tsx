import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Article {
  id: string;
  title: string;
  slug: string;
  meta_description: string | null;
  hero_image_url: string | null;
  published_at: string | null;
  category: string | null;
  reading_time_minutes: number | null;
}

const CATEGORIES = [
  { key: 'all', label: 'Alle' },
  { key: 'roi', label: 'ROI & Wirtschaftlichkeit' },
  { key: 'social-media', label: 'Social Media Strategie' },
  { key: 'funnel', label: 'Funnel & Conversion' },
  { key: 'recruiting', label: 'Recruiting & Arbeitgebermarke' },
  { key: 'geo', label: 'GEO & KI' },
];

const ArticleCluster = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('blog_articles' as any)
        .select('id, title, slug, meta_description, hero_image_url, published_at, category, reading_time_minutes')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (!error && data) {
        setArticles(data as unknown as Article[]);
      }
      setLoading(false);
    };
    fetchArticles();
  }, []);

  const filtered = activeCategory === 'all'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  const formatDate = (d: string | null) => {
    if (!d) return '';
    return new Date(d).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  const categoryLabel = (key: string | null) =>
    CATEGORIES.find((c) => c.key === key)?.label ?? '';

  return (
    <section id="artikel" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="finom-h2 mb-4">Themencluster</h2>
          <p className="finom-lead">Strukturiertes Wissen statt endloser Blog-Feed.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-[#ff1c5c] text-white'
                  : 'liquid-glass text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ff1c5c]" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Noch keine Artikel in dieser Kategorie.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filtered.map((article) => (
              <Link
                key={article.id}
                to={`/marketing-system/${article.slug}`}
                className="group block liquid-glass rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
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
                  <div className="flex items-center gap-3 mb-3">
                    {article.category && (
                      <span className="text-xs font-semibold text-[#ff1c5c] bg-[#ff1c5c]/10 px-2 py-1 rounded">
                        {categoryLabel(article.category)}
                      </span>
                    )}
                    {article.reading_time_minutes && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock size={12} /> {article.reading_time_minutes} Min
                      </span>
                    )}
                  </div>
                  {article.published_at && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <CalendarDays size={14} />
                      <span>{formatDate(article.published_at)}</span>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-[#ff1c5c] transition-colors">
                    {article.title}
                  </h3>
                  {article.meta_description && (
                    <p className="text-sm text-muted-foreground line-clamp-3">{article.meta_description}</p>
                  )}
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#ff1c5c]">
                    Weiterlesen <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleCluster;
