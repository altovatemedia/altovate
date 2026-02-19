import { Helmet } from 'react-helmet';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "altovate GmbH",
  "url": "https://altovate.de",
  "logo": "https://altovate.de/altovate-logo.png",
  "description": "Altovate ist eine Marketing-Agentur in Saarburg, die Lead- und Content-Systeme für mittelständische Unternehmen entwickelt. Gründer Alexander Buchmann berät projektbasiert zu Social Media, Werbeanzeigen, Employer Branding und Marketing-Automation.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Max-Planck-Straße 6",
    "addressLocality": "Saarburg",
    "postalCode": "54439",
    "addressRegion": "Rheinland-Pfalz",
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
    "https://www.instagram.com/altovate.de/"
  ],
  "founder": {
    "@type": "Person",
    "name": "Alexander Buchmann",
    "url": "https://www.linkedin.com/in/alexander-buchmann",
    "jobTitle": "Geschäftsführer",
    "sameAs": [
      "https://www.linkedin.com/in/alexander-buchmann",
      "https://www.instagram.com/iamalexbuchmann/"
    ]
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://altovate.de/#localbusiness",
  "name": "altovate GmbH",
  "image": "https://altovate.de/altovate-logo.png",
  "url": "https://altovate.de",
  "telephone": "+49-1520-892-2097",
  "email": "info@altovate.de",
  "description": "Marketing-Agentur für Lead- und Content-Systeme in Saarburg. Projektbasierte Beratung für mittelständische Unternehmen in der Region Trier, Saarburg und Saar-Mosel.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Max-Planck-Straße 6",
    "addressLocality": "Saarburg",
    "postalCode": "54439",
    "addressRegion": "Rheinland-Pfalz",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 49.6108,
    "longitude": 6.5533
  },
  "priceRange": "€€",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.linkedin.com/company/altovatemedia/",
    "https://www.instagram.com/altovate.de/"
  ]
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alexander Buchmann",
  "jobTitle": "Geschäftsführer & Marketing-Berater",
  "url": "https://altovate.de",
  "worksFor": {
    "@type": "Organization",
    "name": "altovate GmbH",
    "url": "https://altovate.de"
  },
  "sameAs": [
    "https://www.linkedin.com/in/alexander-buchmann",
    "https://www.instagram.com/iamalexbuchmann/"
  ],
  "knowsAbout": [
    "Social Media Marketing",
    "Content Marketing",
    "Lead-Generierung",
    "Marketing-Automation",
    "Employer Branding",
    "KI-gestütztes Marketing"
  ]
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
  article?: {
    headline: string;
    description: string;
    url: string;
    datePublished?: string;
    image?: string;
  };
}

const SEOSchema = ({ page = 'home', faqItems, breadcrumbs, service, article }: SEOSchemaProps) => {
  const schemas: object[] = [organizationSchema];

  if (page === 'home') {
    schemas.push(websiteSchema, localBusinessSchema, personSchema);
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

  if (article) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.headline,
      "description": article.description,
      "url": article.url,
      ...(article.datePublished && { "datePublished": article.datePublished }),
      ...(article.image && { "image": article.image }),
      "author": {
        "@type": "Person",
        "name": "Alexander Buchmann"
      },
      "publisher": {
        "@type": "Organization",
        "name": "altovate GmbH",
        "logo": {
          "@type": "ImageObject",
          "url": "https://altovate.de/altovate-logo.png"
        }
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
