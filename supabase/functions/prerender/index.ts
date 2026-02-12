import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const CATEGORY_TO_CLUSTER: Record<string, { label: string; slug: string }> = {
  roi: { label: "ROI & Wirtschaftlichkeit", slug: "roi-wirtschaftlichkeit" },
  "social-media": { label: "Social Media als System", slug: "social-media-system" },
  funnel: { label: "Funnel & Nachfrage", slug: "funnel-nachfrage" },
  recruiting: { label: "Recruiting & Arbeitgebermarke", slug: "recruiting-arbeitgebermarke" },
  geo: { label: "GEO & KI-Sichtbarkeit", slug: "geo-ki-sichtbarkeit" },
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const path = url.searchParams.get("path") || "";

    // Extract slug from path: /marketing-wissen/:cluster/:slug or /marketing-wissen/:slug
    const segments = path.replace(/^\//, "").split("/").filter(Boolean);
    let articleSlug = "";

    if (segments[0] === "marketing-wissen" && segments.length >= 2) {
      articleSlug = segments[segments.length - 1];
    }

    if (!articleSlug) {
      return new Response("Not found", { status: 404, headers: corsHeaders });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: article, error } = await supabase
      .from("blog_articles")
      .select("*")
      .eq("slug", articleSlug)
      .eq("status", "published")
      .maybeSingle();

    if (error || !article) {
      return new Response("Article not found", { status: 404, headers: corsHeaders });
    }

    const cluster = article.category ? CATEGORY_TO_CLUSTER[article.category] : null;
    const canonicalUrl = cluster
      ? `https://altovate.de/marketing-wissen/${cluster.slug}/${article.slug}`
      : `https://altovate.de/marketing-wissen/${article.slug}`;

    const title = `${article.title} | altovate`;
    const description = article.meta_description || "";
    const publishedDate = article.published_at
      ? new Date(article.published_at).toISOString()
      : "";

    // JSON-LD Article Schema
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: description,
      url: canonicalUrl,
      ...(publishedDate && { datePublished: publishedDate }),
      ...(article.hero_image_url && { image: article.hero_image_url }),
      author: {
        "@type": "Person",
        name: "Alexander Buchmann",
        url: "https://www.linkedin.com/in/alexander-buchmann",
      },
      publisher: {
        "@type": "Organization",
        name: "altovate GmbH",
        logo: {
          "@type": "ImageObject",
          url: "https://altovate.de/altovate-logo.png",
        },
      },
    };

    // JSON-LD BreadcrumbList
    const breadcrumbs = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: "https://altovate.de/" },
        { "@type": "ListItem", position: 2, name: "Strategisches Marketingwissen", item: "https://altovate.de/marketing-wissen" },
        ...(cluster
          ? [{ "@type": "ListItem", position: 3, name: cluster.label, item: `https://altovate.de/marketing-wissen/${cluster.slug}` }]
          : []),
        {
          "@type": "ListItem",
          position: cluster ? 4 : 3,
          name: article.title,
          item: canonicalUrl,
        },
      ],
    };

    // JSON-LD Organization
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "altovate GmbH",
      url: "https://altovate.de",
      logo: "https://altovate.de/altovate-logo.png",
    };

    // Extract FAQ from content if present (look for FAQ pattern in HTML)
    let faqSchema = "";
    const faqRegex = /<h2[^>]*>.*?(?:FAQ|Häufige Fragen).*?<\/h2>([\s\S]*?)(?=<h2|$)/i;
    const faqMatch = article.content_html?.match(faqRegex);
    if (faqMatch) {
      const faqHtml = faqMatch[1];
      const questions: Array<{ question: string; answer: string }> = [];
      const qaRegex = /<h3[^>]*>(.*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi;
      let m;
      while ((m = qaRegex.exec(faqHtml)) !== null) {
        questions.push({
          question: stripHtmlTags(m[1]),
          answer: stripHtmlTags(m[2]),
        });
      }
      if (questions.length > 0) {
        const faqObj = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: questions.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: { "@type": "Answer", text: q.answer },
          })),
        };
        faqSchema = `<script type="application/ld+json">${JSON.stringify(faqObj)}</script>`;
      }
    }

    // Plain-text excerpt for noscript / LLM consumption
    const plainText = article.content_html ? stripHtmlTags(article.content_html).slice(0, 2000) : "";

    const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${canonicalUrl}">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:site_name" content="altovate">
  ${article.hero_image_url ? `<meta property="og:image" content="${escapeHtml(article.hero_image_url)}">` : ""}
  ${publishedDate ? `<meta property="article:published_time" content="${publishedDate}">` : ""}

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  ${article.hero_image_url ? `<meta name="twitter:image" content="${escapeHtml(article.hero_image_url)}">` : ""}

  <!-- Structured Data -->
  <script type="application/ld+json">${JSON.stringify(articleSchema)}</script>
  <script type="application/ld+json">${JSON.stringify(breadcrumbs)}</script>
  <script type="application/ld+json">${JSON.stringify(orgSchema)}</script>
  ${faqSchema}

  <!-- Geo Meta -->
  <meta name="geo.region" content="DE-RP">
  <meta name="geo.placename" content="Saarburg">
  <meta name="geo.position" content="49.6108;6.5533">
  <meta name="ICBM" content="49.6108, 6.5533">

  <style>
    body { font-family: system-ui, sans-serif; max-width: 720px; margin: 0 auto; padding: 2rem; color: #e2e8f0; background: #0B1120; }
    h1 { font-size: 2rem; line-height: 1.3; margin-bottom: 1rem; color: #f1f5f9; }
    h2 { font-size: 1.4rem; margin-top: 2rem; color: #f1f5f9; }
    h3 { font-size: 1.1rem; margin-top: 1.5rem; color: #f1f5f9; }
    p { line-height: 1.7; margin-bottom: 1rem; }
    a { color: #c8a862; }
    table { border-collapse: collapse; width: 100%; margin: 1.5rem 0; }
    th, td { border: 1px solid #334155; padding: 0.75rem; text-align: left; }
    th { background: #1e293b; }
    .breadcrumb { font-size: 0.875rem; color: #94a3b8; margin-bottom: 2rem; }
    .breadcrumb a { color: #94a3b8; text-decoration: underline; }
    .meta { font-size: 0.875rem; color: #64748b; margin-bottom: 2rem; }
  </style>
</head>
<body>
  <nav class="breadcrumb">
    <a href="https://altovate.de/">Startseite</a> ›
    <a href="https://altovate.de/marketing-wissen">Marketingwissen</a> ›
    ${cluster ? `<a href="https://altovate.de/marketing-wissen/${cluster.slug}">${escapeHtml(cluster.label)}</a> › ` : ""}
    <span>${escapeHtml(article.title)}</span>
  </nav>

  <article>
    <h1>${escapeHtml(article.title)}</h1>
    ${description ? `<p><em>${escapeHtml(description)}</em></p>` : ""}
    ${publishedDate ? `<p class="meta">Veröffentlicht: ${new Date(publishedDate).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })}</p>` : ""}
    ${article.content_html || ""}
  </article>

  <footer style="margin-top:3rem;padding-top:1.5rem;border-top:1px solid #334155;font-size:0.875rem;color:#64748b;">
    <p>© altovate GmbH · Max-Planck-Straße 6, 54439 Saarburg · <a href="https://altovate.de">altovate.de</a></p>
    <p>Quelle: <a href="${canonicalUrl}">${canonicalUrl}</a></p>
  </footer>
</body>
</html>`;

    return new Response(html, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    });
  } catch (err) {
    console.error("Prerender error:", err);
    return new Response("Internal Server Error", {
      status: 500,
      headers: corsHeaders,
    });
  }
});
