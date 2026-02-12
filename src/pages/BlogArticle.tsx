import { useEffect, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarDays } from 'lucide-react';
import SEOSchema from '@/components/SEOSchema';
import NewNavigation from '@/components/sections/NewNavigation';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import DefinitionBox from '@/components/marketing-system/article/DefinitionBox';
import TableOfContents from '@/components/marketing-system/article/TableOfContents';
import ShareSection from '@/components/marketing-system/article/ShareSection';
import RelatedLinks from '@/components/marketing-system/article/RelatedLinks';
import ConsultingBridge from '@/components/marketing-system/article/ConsultingBridge';
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

/**
 * Adds IDs to H2 headings and inserts anchor link icons for deep-linking.
 */
const processContentHtml = (html: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const headings = doc.querySelectorAll('h2');

  headings.forEach((h2, i) => {
    const id = h2.id || `section-${i}`;
    h2.id = id;
  });

  return doc.body.innerHTML;
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
        .from('blog_articles')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();

      if (error || !data) {
        setNotFound(true);
      } else {
        setArticle(data as Article);
      }
      setLoading(false);
    };
    fetchArticle();
  }, [slug]);

  const cluster = article?.category ? CATEGORY_TO_CLUSTER[article.category] : null;
  const backPath = cluster ? `/marketing-wissen/${cluster.slug}` : '/marketing-wissen';
  const backLabel = cluster ? cluster.label : 'Übersicht';

  const articleUrl = cluster
    ? `https://altovate.de/marketing-wissen/${cluster.slug}/${article?.slug}`
    : `https://altovate.de/marketing-wissen/${article?.slug}`;

  const processedHtml = useMemo(() => {
    if (!article?.content_html) return '';
    return processContentHtml(article.content_html);
  }, [article?.content_html]);

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

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{article.title} | altovate</title>
        {article.meta_description && <meta name="description" content={article.meta_description} />}
        <link rel="canonical" href={articleUrl} />
        <meta property="og:title" content={`${article.title} | altovate`} />
        {article.meta_description && <meta property="og:description" content={article.meta_description} />}
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        {article.hero_image_url && <meta property="og:image" content={article.hero_image_url} />}
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

      {/* Hero – dark, clean, no hero image in foreground */}
      <header className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              to={backPath}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Zurück zu {backLabel}
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {article.title}
            </h1>

            {article.meta_description && (
              <p className="text-muted-foreground text-lg mb-4">{article.meta_description}</p>
            )}

            {article.published_at && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
                <CalendarDays size={14} />
                <span>
                  {new Date(article.published_at).toLocaleDateString('de-DE', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Definition Box */}
            {article.meta_description && (
              <DefinitionBox definition={article.meta_description} articleUrl={articleUrl} />
            )}

            {/* Table of Contents */}
            {processedHtml && <TableOfContents contentHtml={processedHtml} />}

            {/* Main Content */}
            {processedHtml && (
              <article
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: processedHtml }}
              />
            )}

            {/* Related Internal Links */}
            <RelatedLinks currentCategory={article.category} />

            {/* Share */}
            <ShareSection title={article.title} url={articleUrl} />

            {/* Citation hint */}
            <p className="text-xs text-muted-foreground mt-8 leading-relaxed">
              Wenn Sie Inhalte aus diesem Artikel zitieren, verlinken Sie bitte auf die Originalquelle bei Altovate.
            </p>
          </div>
        </div>
      </main>

      {/* Consulting Bridge CTA */}
      <ConsultingBridge />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default BlogArticle;
