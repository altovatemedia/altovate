import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const STATIC_URLS = [
  { loc: "https://altovate.de/", changefreq: "weekly", priority: "1.0" },
  { loc: "https://altovate.de/socialmedia", changefreq: "monthly", priority: "0.8" },
  { loc: "https://altovate.de/werbeanzeigen-saarburg", changefreq: "monthly", priority: "0.8" },
  { loc: "https://altovate.de/employer-branding-saarburg", changefreq: "monthly", priority: "0.8" },
  { loc: "https://altovate.de/marketing-automation-saarburg", changefreq: "monthly", priority: "0.8" },
  { loc: "https://altovate.de/software-ki-loesungen-saarburg", changefreq: "monthly", priority: "0.8" },
  { loc: "https://altovate.de/tools", changefreq: "monthly", priority: "0.6" },
  { loc: "https://altovate.de/marketing-wissen", changefreq: "weekly", priority: "0.7" },
  { loc: "https://altovate.de/marketing-wissen/roi-wirtschaftlichkeit", changefreq: "monthly", priority: "0.7" },
  { loc: "https://altovate.de/marketing-wissen/social-media-system", changefreq: "monthly", priority: "0.7" },
  { loc: "https://altovate.de/marketing-wissen/funnel-nachfrage", changefreq: "monthly", priority: "0.7" },
  { loc: "https://altovate.de/marketing-wissen/recruiting-arbeitgebermarke", changefreq: "monthly", priority: "0.7" },
  { loc: "https://altovate.de/marketing-wissen/geo-ki-sichtbarkeit", changefreq: "monthly", priority: "0.7" },
  { loc: "https://altovate.de/marketing-wissen/glossar", changefreq: "weekly", priority: "0.7" },
  { loc: "https://altovate.de/instagram-profil-check", changefreq: "monthly", priority: "0.6" },
  { loc: "https://altovate.de/erstkontakt", changefreq: "monthly", priority: "0.7" },
  { loc: "https://altovate.de/kontakt", changefreq: "monthly", priority: "0.7" },
  { loc: "https://altovate.de/foerderung", changefreq: "monthly", priority: "0.7" },
  { loc: "https://altovate.de/impressum", changefreq: "yearly", priority: "0.3" },
  { loc: "https://altovate.de/datenschutz", changefreq: "yearly", priority: "0.3" },
];

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: articles, error } = await supabase
      .from("blog_articles")
      .select("slug, published_at, updated_at")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Error fetching articles:", error);
    }

    const today = new Date().toISOString().split("T")[0];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    for (const page of STATIC_URLS) {
      xml += `  <url>\n`;
      xml += `    <loc>${page.loc}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += `  </url>\n`;
    }

    if (articles && articles.length > 0) {
      for (const article of articles) {
        const lastmod = article.updated_at
          ? article.updated_at.split("T")[0]
          : article.published_at
          ? article.published_at.split("T")[0]
          : today;

        xml += `  <url>\n`;
        xml += `    <loc>https://altovate.de/marketing-wissen/${article.slug}</loc>\n`;
        xml += `    <lastmod>${lastmod}</lastmod>\n`;
        xml += `    <changefreq>monthly</changefreq>\n`;
        xml += `    <priority>0.6</priority>\n`;
        xml += `  </url>\n`;
      }
    }

    // Add glossary terms
    const { data: glossaryTerms, error: glossaryError } = await supabase
      .from("glossary_terms")
      .select("slug, updated_at")
      .eq("status", "published")
      .order("term", { ascending: true });

    if (glossaryError) {
      console.error("Error fetching glossary terms:", glossaryError);
    }

    if (glossaryTerms && glossaryTerms.length > 0) {
      for (const term of glossaryTerms) {
        const lastmod = term.updated_at ? term.updated_at.split("T")[0] : today;
        xml += `  <url>\n`;
        xml += `    <loc>https://altovate.de/marketing-wissen/glossar/${term.slug}</loc>\n`;
        xml += `    <lastmod>${lastmod}</lastmod>\n`;
        xml += `    <changefreq>monthly</changefreq>\n`;
        xml += `    <priority>0.5</priority>\n`;
        xml += `  </url>\n`;
      }
    }

    xml += `</urlset>`;

    return new Response(xml, {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (err) {
    console.error("Sitemap generation error:", err);
    return new Response("Internal Server Error", {
      status: 500,
      headers: corsHeaders,
    });
  }
});
