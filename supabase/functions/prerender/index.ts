import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// ── Category → Cluster mapping (for articles) ──
const CATEGORY_TO_CLUSTER: Record<string, { label: string; slug: string }> = {
  roi: { label: "ROI & Wirtschaftlichkeit", slug: "roi-wirtschaftlichkeit" },
  "social-media": { label: "Social Media als System", slug: "social-media-system" },
  funnel: { label: "Funnel & Nachfrage", slug: "funnel-nachfrage" },
  recruiting: { label: "Recruiting & Arbeitgebermarke", slug: "recruiting-arbeitgebermarke" },
  geo: { label: "GEO & KI-Sichtbarkeit", slug: "geo-ki-sichtbarkeit" },
};

// ── Static page definitions ──
interface StaticPage {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  canonical: string;
  breadcrumbs: Array<{ name: string; url: string }>;
  bodyContent: string;
  jsonLdExtra?: object[];
}

const STATIC_PAGES: Record<string, StaticPage> = {
  "/": {
    title: "altovate | Online-Marketing für Unternehmer",
    description: "Lead- & Content-Systeme für mittelständische Unternehmen in Saarburg, Trier & Region. Planbare Anfragen statt Reichweiten-Blabla. Strategie-Session ab 390 €.",
    canonical: "https://altovate.de/",
    ogType: "website",
    breadcrumbs: [],
    bodyContent: `<h1>altovate – Online-Marketing für Unternehmer</h1>
<p>Lead- &amp; Content-Systeme für mittelständische Unternehmen in Saarburg, Trier &amp; Region. Planbare Anfragen statt Reichweiten-Blabla.</p>
<h2>Leistungen</h2>
<ul>
  <li><strong>Social Media Marketing</strong> – Content-Erstellung, Instagram-Betreuung und Reels-Produktion</li>
  <li><strong>Meta Ads Betreuung</strong> – Facebook &amp; Instagram Werbeanzeigen mit messbarem ROI</li>
  <li><strong>Employer Branding</strong> – Mitarbeitergewinnung durch authentische Arbeitgeberpräsenz</li>
  <li><strong>Marketing Automation</strong> – Funnel-Systeme für planbare Lead-Generierung</li>
  <li><strong>Software &amp; KI-Lösungen</strong> – Individuelle Tools und Automatisierungen</li>
</ul>
<h2>Über altovate</h2>
<p>Altovate ist eine Marketing-Agentur in Saarburg, gegründet von Alexander Buchmann. Wir entwickeln Lead- und Content-Systeme für mittelständische Unternehmen in der Region Trier, Saarburg und Saar-Mosel.</p>
<p>Kontakt: info@altovate.de | +49 1520 892 2097 | Max-Planck-Straße 6, 54439 Saarburg</p>`,
    jsonLdExtra: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "altovate",
        url: "https://altovate.de",
        description: "Marketing mit Wirkung – Lead- & Content-Systeme für mittelständische Unternehmen.",
        publisher: { "@type": "Organization", name: "altovate GmbH" },
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://altovate.de/#localbusiness",
        name: "altovate GmbH",
        image: "https://altovate.de/altovate-logo.png",
        url: "https://altovate.de",
        telephone: "+49-1520-892-2097",
        email: "info@altovate.de",
        description: "Marketing-Agentur für Lead- und Content-Systeme in Saarburg.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Max-Planck-Straße 6",
          addressLocality: "Saarburg",
          postalCode: "54439",
          addressRegion: "Rheinland-Pfalz",
          addressCountry: "DE",
        },
        geo: { "@type": "GeoCoordinates", latitude: 49.6108, longitude: 6.5533 },
        priceRange: "€€",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Alexander Buchmann",
        jobTitle: "Geschäftsführer & Marketing-Berater",
        url: "https://altovate.de",
        worksFor: { "@type": "Organization", name: "altovate GmbH", url: "https://altovate.de" },
        sameAs: [
          "https://www.linkedin.com/in/alexander-buchmann",
          "https://www.instagram.com/iamalexbuchmann/",
        ],
      },
    ],
  },
  "/socialmedia": {
    title: "Social Media Marketing Saarburg | altovate",
    description: "Social Media Marketing für Unternehmen in Saarburg & Region. Content-Erstellung, Instagram-Betreuung und Reels-Produktion.",
    canonical: "https://altovate.de/socialmedia",
    breadcrumbs: [
      { name: "Startseite", url: "https://altovate.de/" },
      { name: "Social Media Marketing", url: "https://altovate.de/socialmedia" },
    ],
    bodyContent: `<h1>Social Media Marketing für Unternehmen in Saarburg &amp; Region</h1>
<p>Content-Erstellung, Instagram-Betreuung und Reels-Produktion – systematisch statt sporadisch.</p>
<h2>Was wir übernehmen</h2>
<ul>
  <li>Zielgruppenanalyse &amp; Content-Strategie</li>
  <li>Contentplanung &amp; Redaktionskalender</li>
  <li>Content-Erstellung (Fotos, Reels, Grafiken)</li>
  <li>Community Management &amp; Interaktion</li>
  <li>Hashtag-Strategie &amp; SEO-Optimierung</li>
  <li>Performance-Analyse &amp; Reporting</li>
</ul>
<p>Kontakt: <a href="https://altovate.de/erstkontakt">Erstgespräch anfragen</a></p>`,
  },
  "/werbeanzeigen-saarburg": {
    title: "Meta Ads Betreuung | Altovate Saarburg",
    description: "Professionelle Meta Ads Betreuung für Unternehmen aus Saarburg, Trier & Region – messbar, regional & effizient. Facebook & Instagram Werbeanzeigen mit ROI-Fokus.",
    canonical: "https://altovate.de/werbeanzeigen-saarburg",
    breadcrumbs: [
      { name: "Startseite", url: "https://altovate.de/" },
      { name: "Meta Ads Betreuung", url: "https://altovate.de/werbeanzeigen-saarburg" },
    ],
    bodyContent: `<h1>Meta Ads Betreuung (Facebook &amp; Instagram) – Saarburg &amp; Region</h1>
<p>Professionelle Meta Ads Betreuung für Unternehmen aus Saarburg, Trier &amp; Region – von Strategie über Creative-Erstellung bis laufende Optimierung und Reporting.</p>
<h2>Leistungen</h2>
<ul>
  <li>Zielgruppenanalyse &amp; Marktrecherche</li>
  <li>Kampagnenstruktur &amp; Anzeigengruppen</li>
  <li>Creative-Erstellung (Text, Bild, Video)</li>
  <li>Pixel- &amp; Conversion-Tracking Setup</li>
  <li>A/B-Testing &amp; Hook-Strategien</li>
  <li>Laufende Optimierung &amp; Budget-Steuerung</li>
  <li>Monatliches Reporting &amp; Auswertung</li>
</ul>
<p>Meta Ads sind bereits ab 5–10 € pro Tag möglich. Empfohlenes Mindestbudget: 300–500 € pro Monat für messbare Ergebnisse.</p>`,
    jsonLdExtra: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Meta Ads Betreuung (Facebook & Instagram)",
        description: "Professionelle Meta Ads Betreuung für Unternehmen aus Saarburg, Trier & Region.",
        url: "https://altovate.de/werbeanzeigen-saarburg",
        provider: { "@type": "Organization", name: "altovate GmbH" },
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: { "@type": "GeoCoordinates", latitude: 49.6108, longitude: 6.5533 },
          geoRadius: "50000",
        },
      },
    ],
  },
  "/employer-branding-saarburg": {
    title: "Employer Branding | Altovate Saarburg",
    description: "Keine Bewerbungen mehr? Dann liegt's nicht an den Menschen – sondern an deinem Auftritt. Employer Branding & Mitarbeitergewinnung von Altovate: authentisch, modern und sichtbar.",
    canonical: "https://altovate.de/employer-branding-saarburg",
    breadcrumbs: [
      { name: "Startseite", url: "https://altovate.de/" },
      { name: "Employer Branding", url: "https://altovate.de/employer-branding-saarburg" },
    ],
    bodyContent: `<h1>Employer Branding &amp; Mitarbeitergewinnung – Saarburg &amp; Region</h1>
<p>Keine Bewerbungen mehr? Dann liegt es nicht an den Menschen – sondern an deinem Auftritt. Employer Branding von Altovate: authentisch, modern und sichtbar.</p>
<h2>Vorgehensweise</h2>
<ol>
  <li><strong>Analyse &amp; Strategie</strong> – Prüfung des aktuellen Auftritts (Web, Social, Stellenanzeigen)</li>
  <li><strong>Story &amp; Content</strong> – Entwicklung der Arbeitgeberstory (Team, Alltag, Werte)</li>
  <li><strong>Social Media &amp; Kampagnen</strong> – Authentische Inszenierung und gezielte Platzierung auf Meta &amp; Google</li>
  <li><strong>Partnernetzwerk einbinden</strong> – Firmenfitness, betriebliche Vorsorge, Weiterbildung</li>
</ol>`,
    jsonLdExtra: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Employer Branding & Mitarbeitergewinnung",
        description: "Employer Branding & Mitarbeitergewinnung für Unternehmen in Saarburg & Region.",
        url: "https://altovate.de/employer-branding-saarburg",
        provider: { "@type": "Organization", name: "altovate GmbH" },
      },
    ],
  },
  "/marketing-automation-saarburg": {
    title: "Marketing Automation & Funnel | Altovate Saarburg",
    description: "Kein Autopilot, sondern ein System, das für dich arbeitet. Marketing-Automation generiert Leads, baut Vertrauen auf und bringt Anfragen – Schritt für Schritt.",
    canonical: "https://altovate.de/marketing-automation-saarburg",
    breadcrumbs: [
      { name: "Startseite", url: "https://altovate.de/" },
      { name: "Marketing Automation", url: "https://altovate.de/marketing-automation-saarburg" },
    ],
    bodyContent: `<h1>Marketing Automation &amp; Funnel-Systeme – Saarburg &amp; Region</h1>
<p>Kein Autopilot, sondern ein System, das für dich arbeitet. Marketing-Automation generiert Leads, baut Vertrauen auf und bringt planbare Anfragen.</p>
<h2>So funktioniert der Prozess</h2>
<ol>
  <li>Anzeigen / Social Media → Aufmerksamkeit erzeugen</li>
  <li>Freebie oder Mehrwert → Interesse wecken</li>
  <li>Chat- oder E-Mail-Automatisierung (z. B. Manychat)</li>
  <li>Newsletter-System (z. B. Mailchimp, Brevo)</li>
  <li>Lead oder Buchung → Konversion erreichen</li>
</ol>
<h2>Vorteile</h2>
<ul>
  <li><strong>Zeitersparnis</strong> – Einmal eingerichtet, läuft der Prozess selbstständig</li>
  <li><strong>Planbarkeit</strong> – Du weißt immer, wo neue Leads herkommen</li>
  <li><strong>Vertrauen</strong> – Dein Content arbeitet für dich</li>
</ul>`,
    jsonLdExtra: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Marketing Automation & Funnel-Systeme",
        description: "Marketing-Automation und Funnel-Systeme für planbare Lead-Generierung.",
        url: "https://altovate.de/marketing-automation-saarburg",
        provider: { "@type": "Organization", name: "altovate GmbH" },
      },
    ],
  },
  "/software-ki-loesungen-saarburg": {
    title: "Software & KI-Lösungen | Altovate Saarburg",
    description: "Prozesse digitalisieren, Aufgaben vereinfachen, Daten clever nutzen – mit individuellen Software- und KI-Lösungen von Altovate.",
    canonical: "https://altovate.de/software-ki-loesungen-saarburg",
    breadcrumbs: [
      { name: "Startseite", url: "https://altovate.de/" },
      { name: "Software & KI-Lösungen", url: "https://altovate.de/software-ki-loesungen-saarburg" },
    ],
    bodyContent: `<h1>Individuelle Software &amp; KI-Lösungen – Saarburg &amp; Region</h1>
<p>Prozesse digitalisieren, Aufgaben vereinfachen, Daten clever nutzen – mit individuellen Software- und KI-Lösungen von Altovate.</p>
<h2>Lösungen</h2>
<ul>
  <li>Individuelle Rechner &amp; Formulare</li>
  <li>Zeiterfassungs- &amp; Projekt-Tools</li>
  <li>Web- &amp; App-Anwendungen</li>
  <li>KI-gestützte Automatisierungen</li>
</ul>
<h2>Beispiele</h2>
<ul>
  <li>Heizungsrechner für Handwerksbetrieb</li>
  <li>Zeiterfassung für Agentur</li>
  <li>Schulungsplattform für Unternehmen</li>
  <li>Mini-CRM mit KI</li>
</ul>`,
    jsonLdExtra: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Individuelle Software & KI-Lösungen",
        description: "Individuelle Software- und KI-Lösungen für mittelständische Unternehmen.",
        url: "https://altovate.de/software-ki-loesungen-saarburg",
        provider: { "@type": "Organization", name: "altovate GmbH" },
      },
    ],
  },
  "/marketing-wissen": {
    title: "Strategisches Marketingwissen | altovate",
    description: "Klare Modelle, echte Zahlen und strukturierte Analysen zu ROI, Social Media, Funnel, Recruiting und KI-Sichtbarkeit. Für Unternehmen, die Marketing wirtschaftlich denken.",
    canonical: "https://altovate.de/marketing-wissen",
    ogType: "website",
    breadcrumbs: [
      { name: "Startseite", url: "https://altovate.de/" },
      { name: "Strategisches Marketingwissen", url: "https://altovate.de/marketing-wissen" },
    ],
    bodyContent: `<h1>Strategisches Marketingwissen</h1>
<p>Klare Modelle, echte Zahlen und strukturierte Analysen zu ROI, Social Media, Funnel, Recruiting und KI-Sichtbarkeit.</p>
<h2>Themencluster</h2>
<ul>
  <li><a href="https://altovate.de/marketing-wissen/roi-wirtschaftlichkeit">ROI &amp; Wirtschaftlichkeit</a></li>
  <li><a href="https://altovate.de/marketing-wissen/social-media-system">Social Media als System</a></li>
  <li><a href="https://altovate.de/marketing-wissen/funnel-nachfrage">Funnel &amp; Nachfrage</a></li>
  <li><a href="https://altovate.de/marketing-wissen/recruiting-arbeitgebermarke">Recruiting &amp; Arbeitgebermarke</a></li>
  <li><a href="https://altovate.de/marketing-wissen/geo-ki-sichtbarkeit">GEO &amp; KI-Sichtbarkeit</a></li>
</ul>`,
  },
  "/tools": {
    title: "Meine Lieblingstools – KI-Tools | altovate",
    description: "Kuratierte Auswahl an KI- und Marketing-Tools, die Alexander Buchmann täglich nutzt. Mit exklusiven Rabatten und Empfehlungscodes.",
    canonical: "https://altovate.de/tools",
    breadcrumbs: [
      { name: "Startseite", url: "https://altovate.de/" },
      { name: "Tools", url: "https://altovate.de/tools" },
    ],
    bodyContent: `<h1>Meine Lieblingstools – KI-Tools für Unternehmer</h1>
<p>Kuratierte Auswahl an KI- und Marketing-Tools, die ich täglich nutze.</p>
<ul>
  <li><strong>Lovable</strong> – No-Code Website-Builder</li>
  <li><strong>Hera</strong> – Motion Design / KI-Video</li>
  <li><strong>Typeless</strong> – KI-Texterstellung</li>
  <li><strong>WhisprFlow</strong> – Sprache-zu-Text</li>
</ul>`,
  },
  "/foerderung": {
    title: "Förderung für Marketing & Beratung | altovate",
    description: "Staatliche Förderung für Marketing-Beratung: Bis zu 80 % Zuschuss für Strategie-Sessions und 1:1 Zusammenarbeit. Altovate begleitet den Antragsprozess.",
    canonical: "https://altovate.de/foerderung",
    breadcrumbs: [
      { name: "Startseite", url: "https://altovate.de/" },
      { name: "Förderung", url: "https://altovate.de/foerderung" },
    ],
    bodyContent: `<h1>Förderung für Marketing &amp; Beratung – Bis zu 80 % Zuschuss</h1>
<p>Staatliche Förderung für Marketing-Beratung: Bis zu 80 % Zuschuss für Strategie-Sessions und 1:1 Zusammenarbeit.</p>
<h2>Förderprogramme</h2>
<ul>
  <li>BAFA – Förderung unternehmerischen Know-hows (bis 80 %)</li>
  <li>go-digital – Digitalisierung für KMU (bis 50 %)</li>
  <li>Regionale Programme in Rheinland-Pfalz und Saarland</li>
</ul>`,
  },
  "/erstkontakt": {
    title: "Erstgespräch anfragen | altovate",
    description: "Bereit für systematische Kundengewinnung? Fordere jetzt dein persönliches Erstgespräch mit Alex an und erhalte individuelle Terminvorschläge.",
    canonical: "https://altovate.de/erstkontakt",
    breadcrumbs: [
      { name: "Startseite", url: "https://altovate.de/" },
      { name: "Erstgespräch", url: "https://altovate.de/erstkontakt" },
    ],
    bodyContent: `<h1>Erstgespräch anfragen</h1>
<p>Bereit für systematische Kundengewinnung? Fordere jetzt dein persönliches Erstgespräch mit Alexander Buchmann an.</p>
<p>Kontakt: info@altovate.de | +49 1520 892 2097</p>`,
  },
  "/kontakt": {
    title: "Kontakt | altovate GmbH – Saarburg",
    description: "Kontaktiere altovate für Marketing-Beratung in Saarburg & Region. Termin buchen, anrufen oder schreiben. Alex Buchmann freut sich auf dein Projekt.",
    canonical: "https://altovate.de/kontakt",
    breadcrumbs: [
      { name: "Startseite", url: "https://altovate.de/" },
      { name: "Kontakt", url: "https://altovate.de/kontakt" },
    ],
    bodyContent: `<h1>Kontakt – altovate GmbH</h1>
<p>altovate GmbH · Max-Planck-Straße 6, 54439 Saarburg</p>
<p>E-Mail: info@altovate.de | Telefon: +49 1520 892 2097</p>
<p>Geschäftsführer: Alexander Buchmann</p>`,
  },
  "/instagram-profil-check": {
    title: "Instagram-Profil-Check | altovate",
    description: "Kostenloser Instagram-Profil-Check für Unternehmen. Analyse von Bio, Content-Strategie und Optimierungspotenzial durch KI.",
    canonical: "https://altovate.de/instagram-profil-check",
    breadcrumbs: [
      { name: "Startseite", url: "https://altovate.de/" },
      { name: "Instagram-Profil-Check", url: "https://altovate.de/instagram-profil-check" },
    ],
    bodyContent: `<h1>Instagram-Profil-Check für Unternehmen</h1>
<p>Kostenloser Instagram-Profil-Check: Analyse von Bio, Content-Strategie und Optimierungspotenzial.</p>`,
  },
};

// ── Helpers ──
function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function buildHtml(opts: {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  ogImage?: string;
  publishedDate?: string;
  breadcrumbs: Array<{ name: string; url: string }>;
  bodyContent: string;
  jsonLdSchemas: object[];
}): string {
  const { title, description, canonical, ogType, ogImage, publishedDate, breadcrumbs, bodyContent, jsonLdSchemas } = opts;

  const breadcrumbHtml = breadcrumbs.length > 0
    ? breadcrumbs.map((b, i) => i < breadcrumbs.length - 1
        ? `<a href="${escapeHtml(b.url)}">${escapeHtml(b.name)}</a>`
        : `<span>${escapeHtml(b.name)}</span>`
      ).join(" › ")
    : "";

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="${ogType || "website"}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="altovate">
  ${ogImage ? `<meta property="og:image" content="${escapeHtml(ogImage)}">` : ""}
  ${publishedDate ? `<meta property="article:published_time" content="${publishedDate}">` : ""}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  ${ogImage ? `<meta name="twitter:image" content="${escapeHtml(ogImage)}">` : ""}
  <meta name="geo.region" content="DE-RP">
  <meta name="geo.placename" content="Saarburg">
  <meta name="geo.position" content="49.6108;6.5533">
  <meta name="ICBM" content="49.6108, 6.5533">
  ${jsonLdSchemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join("\n  ")}
  <style>
    body{font-family:system-ui,sans-serif;max-width:720px;margin:0 auto;padding:2rem;color:#e2e8f0;background:#0B1120}
    h1{font-size:2rem;line-height:1.3;margin-bottom:1rem;color:#f1f5f9}
    h2{font-size:1.4rem;margin-top:2rem;color:#f1f5f9}
    h3{font-size:1.1rem;margin-top:1.5rem;color:#f1f5f9}
    p{line-height:1.7;margin-bottom:1rem}
    a{color:#c8a862}
    ul,ol{margin:1rem 0;padding-left:1.5rem}
    li{margin-bottom:.5rem;line-height:1.6}
    table{border-collapse:collapse;width:100%;margin:1.5rem 0}
    th,td{border:1px solid #334155;padding:.75rem;text-align:left}
    th{background:#1e293b}
    .breadcrumb{font-size:.875rem;color:#94a3b8;margin-bottom:2rem}
    .breadcrumb a{color:#94a3b8;text-decoration:underline}
    .meta{font-size:.875rem;color:#64748b;margin-bottom:2rem}
  </style>
</head>
<body>
  ${breadcrumbHtml ? `<nav class="breadcrumb"><a href="https://altovate.de/">Startseite</a> › ${breadcrumbHtml}</nav>` : ""}
  <article>
    ${bodyContent}
    ${publishedDate ? `<p class="meta">Veröffentlicht: ${new Date(publishedDate).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })}</p>` : ""}
  </article>
  <footer style="margin-top:3rem;padding-top:1.5rem;border-top:1px solid #334155;font-size:.875rem;color:#64748b;">
    <p>© altovate GmbH · Max-Planck-Straße 6, 54439 Saarburg · <a href="https://altovate.de">altovate.de</a></p>
    <p>Quelle: <a href="${canonical}">${canonical}</a></p>
  </footer>
</body>
</html>`;
}

// ── Main handler ──
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const path = url.searchParams.get("path") || "/";
    const normalizedPath = path.replace(/\/+$/, "") || "/";

    // ── 1. Check static pages ──
    const staticPage = STATIC_PAGES[normalizedPath];
    if (staticPage) {
      const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "altovate GmbH",
        url: "https://altovate.de",
        logo: "https://altovate.de/altovate-logo.png",
      };

      const breadcrumbSchema = staticPage.breadcrumbs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: staticPage.breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: b.url,
        })),
      } : null;

      const schemas: object[] = [orgSchema];
      if (breadcrumbSchema) schemas.push(breadcrumbSchema);
      if (staticPage.jsonLdExtra) schemas.push(...staticPage.jsonLdExtra);

      const html = buildHtml({
        title: staticPage.title,
        description: staticPage.description,
        canonical: staticPage.canonical,
        ogType: staticPage.ogType,
        breadcrumbs: staticPage.breadcrumbs,
        bodyContent: staticPage.bodyContent,
        jsonLdSchemas: schemas,
      });

      return new Response(html, {
        headers: {
          ...corsHeaders,
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=3600, s-maxage=86400",
        },
      });
    }

    // ── 2. Check blog article ──
    const segments = normalizedPath.replace(/^\//, "").split("/").filter(Boolean);
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
    const publishedDate = article.published_at ? new Date(article.published_at).toISOString() : "";

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description,
      url: canonicalUrl,
      ...(publishedDate && { datePublished: publishedDate }),
      ...(article.hero_image_url && { image: article.hero_image_url }),
      author: { "@type": "Person", name: "Alexander Buchmann", url: "https://www.linkedin.com/in/alexander-buchmann" },
      publisher: { "@type": "Organization", name: "altovate GmbH", logo: { "@type": "ImageObject", url: "https://altovate.de/altovate-logo.png" } },
    };

    const breadcrumbItems = [
      { name: "Startseite", url: "https://altovate.de/" },
      { name: "Strategisches Marketingwissen", url: "https://altovate.de/marketing-wissen" },
      ...(cluster ? [{ name: cluster.label, url: `https://altovate.de/marketing-wissen/${cluster.slug}` }] : []),
      { name: article.title, url: canonicalUrl },
    ];

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map((b, i) => ({ "@type": "ListItem", position: i + 1, name: b.name, item: b.url })),
    };

    const orgSchema = { "@context": "https://schema.org", "@type": "Organization", name: "altovate GmbH", url: "https://altovate.de", logo: "https://altovate.de/altovate-logo.png" };

    // Extract FAQ
    const schemas: object[] = [orgSchema, breadcrumbSchema, articleSchema];
    const faqRegex = /<h2[^>]*>.*?(?:FAQ|Häufige Fragen).*?<\/h2>([\s\S]*?)(?=<h2|$)/i;
    const faqMatch = article.content_html?.match(faqRegex);
    if (faqMatch) {
      const questions: Array<{ question: string; answer: string }> = [];
      const qaRegex = /<h3[^>]*>(.*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi;
      let m;
      while ((m = qaRegex.exec(faqMatch[1])) !== null) {
        questions.push({ question: stripHtmlTags(m[1]), answer: stripHtmlTags(m[2]) });
      }
      if (questions.length > 0) {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: questions.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: { "@type": "Answer", text: q.answer },
          })),
        });
      }
    }

    const articleBody = `<h1>${escapeHtml(article.title)}</h1>
${description ? `<p><em>${escapeHtml(description)}</em></p>` : ""}
${article.content_html || ""}`;

    const html = buildHtml({
      title,
      description,
      canonical: canonicalUrl,
      ogType: "article",
      ogImage: article.hero_image_url || undefined,
      publishedDate: publishedDate || undefined,
      breadcrumbs: breadcrumbItems,
      bodyContent: articleBody,
      jsonLdSchemas: schemas,
    });

    return new Response(html, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    });
  } catch (err) {
    console.error("Prerender error:", err);
    return new Response("Internal Server Error", { status: 500, headers: corsHeaders });
  }
});
