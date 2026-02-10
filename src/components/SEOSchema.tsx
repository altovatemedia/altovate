import { Helmet } from 'react-helmet';

// Organization schema - used on every page
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "altovate GmbH",
  "url": "https://altovate.de",
  "logo": "https://altovate.de/altovate-logo.png",
  "description": "Ganzheitliches, sichtbarkeitsorientiertes Marketing für mittelständische Unternehmen. Lead- & Content-Systeme, die planbare Anfragen generieren.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Max-Planck-Straße 6",
    "addressLocality": "Saarburg",
    "postalCode": "54439",
    "addressCountry": "DE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-1520-892-2097",
    "contactType": "sales",
    "email": "info@altovate.de",
    "availableLanguage": "German"
  },
  "sameAs": [
    "https://www.linkedin.com/company/altovatemedia/",
    "https://www.instagram.com/altovatemedia/"
  ],
  "founder": {
    "@type": "Person",
    "name": "Alexander Buchmann"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "altovate",
  "url": "https://altovate.de",
  "description": "Marketing mit Wirkung – Lead- & Content-Systeme für mittelständische Unternehmen.",
  "publisher": {
    "@type": "Organization",
    "name": "altovate GmbH"
  }
};

interface SEOSchemaProps {
  page?: 'home' | 'service' | 'contact' | 'legal';
  faqItems?: Array<{ question: string; answer: string }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
  service?: {
    name: string;
    description: string;
    url: string;
  };
}

const SEOSchema = ({ page = 'home', faqItems, breadcrumbs, service }: SEOSchemaProps) => {
  const schemas: object[] = [organizationSchema];

  if (page === 'home') {
    schemas.push(websiteSchema);
  }

  if (faqItems && faqItems.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    });
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    });
  }

  if (service) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.name,
      "description": service.description,
      "url": service.url,
      "provider": {
        "@type": "Organization",
        "name": "altovate GmbH"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 49.6108,
          "longitude": 6.5533
        },
        "geoRadius": "50000"
      }
    });
  }

  return (
    <Helmet>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOSchema;
