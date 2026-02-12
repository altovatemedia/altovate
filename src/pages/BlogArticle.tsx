import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarDays } from 'lucide-react';
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
  content_html: string | null;
  meta_description: string | null;
  hero_image_url: string | null;
  published_at: string | null;
  category: string | null;
}

const CATEGORY_TO_CLUSTER: Record<string, { label: string; slug: string }> = {
  roi: { label: 'ROI & Wirtschaftlichkeit', slug: 'roi-wirtschaftlichkeit' },
  'social-media': { label: 'Social Media als System', slug: 'social-media-system' },
  funnel: { label: 'Funnel & Nachfrage', slug: 'funnel-nachfrage' },
  recruiting: { label: 'Recruiting & Arbeitgebermarke', slug: 'recruiting-arbeitgebermarke' },
  geo: { label: 'GEO & KI-Sichtbarkeit', slug: 'geo-ki-sichtbarkeit' },
};

const BlogArticle = () => {
  const { slug, clusterSlug } = useParams<{ slug: string; clusterSlug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchArticle = async () => {
      if (!slug) return;
      const { data, error } = await supabase
        .from('blog_articles' as any)
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();

      if (error || !data) {
        setNotFound(true);
      } else {
        setArticle(data as unknown as Article);
      }
      setLoading(false);
    };
    fetchArticle();
  }, [slug]);

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const cluster = article?.category ? CATEGORY_TO_CLUSTER[article.category] : null;
  const backPath = cluster ? `/marketing-wissen/${cluster.slug}` : '/marketing-wissen';
  const backLabel = cluster ? cluster.label : 'Übersicht';

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <NewNavigation />
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !article) {
    return (
      <div className="min-h-screen bg-background">
        <NewNavigation />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
          <h1 className="text-2xl font-bold text-foreground mb-4">Artikel nicht gefunden</h1>
          <Link to="/marketing-wissen" className="text-primary hover:underline flex items-center gap-2">
            <ArrowLeft size={16} /> Zurück zur Übersicht
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const articleUrl = cluster
    ? `https://altovate.de/marketing-wissen/${cluster.slug}/${article.slug}`
    : `https://altovate.de/marketing-wissen/${article.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{article.title} | altovate</title>
        {article.meta_description && (
          <meta name="description" content={article.meta_description} />
        )}
        <link rel="canonical" href={articleUrl} />
        <meta property="og:title" content={`${article.title} | altovate`} />
        {article.meta_description && (
          <meta property="og:description" content={article.meta_description} />
        )}
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        {article.hero_image_url && (
          <meta property="og:image" content={article.hero_image_url} />
        )}
      </Helmet>

      <SEOSchema
        page="service"
        article={{
          headline: article.title,
          description: article.meta_description || '',
          url: articleUrl,
          datePublished: article.published_at || undefined,
          image: article.hero_image_url || undefined,
        }}
        breadcrumbs={[
          { name: 'Startseite', url: 'https://altovate.de/' },
          { name: 'Strategisches Marketingwissen', url: 'https://altovate.de/marketing-wissen' },
          ...(cluster ? [{ name: cluster.label, url: `https://altovate.de/marketing-wissen/${cluster.slug}` }] : []),
          { name: article.title, url: articleUrl },
        ]}
      />

      <NewNavigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              to={backPath}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#ff1c5c] transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Zurück zu {backLabel}
            </Link>

            {article.hero_image_url && (
              <div className="rounded-xl overflow-hidden mb-8">
                <img
                  src={article.hero_image_url}
                  alt={article.title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            )}

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {article.title}
            </h1>

            {article.published_at && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <CalendarDays size={16} />
                <span>{formatDate(article.published_at)}</span>
              </div>
            )}

            {article.content_html && (
              <article
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: article.content_html }}
              />
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

export default BlogArticle;
