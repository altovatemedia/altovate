import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface RelatedLink {
  title: string;
  href: string;
}

const CLUSTER_LINKS: RelatedLink[] = [
  { title: 'ROI & Wirtschaftlichkeit', href: '/marketing-wissen/roi-wirtschaftlichkeit' },
  { title: 'Funnel & Nachfrage', href: '/marketing-wissen/funnel-nachfrage' },
  { title: 'Social Media als System', href: '/marketing-wissen/social-media-system' },
  { title: 'GEO & KI-Sichtbarkeit', href: '/marketing-wissen/geo-ki-sichtbarkeit' },
  { title: 'Recruiting & Arbeitgebermarke', href: '/marketing-wissen/recruiting-arbeitgebermarke' },
];

const RelatedLinks = ({ currentCategory }: { currentCategory: string | null }) => {
  // Show links to other clusters, excluding the current one
  const categoryToSlug: Record<string, string> = {
    roi: 'roi-wirtschaftlichkeit',
    'social-media': 'social-media-system',
    funnel: 'funnel-nachfrage',
    recruiting: 'recruiting-arbeitgebermarke',
    geo: 'geo-ki-sichtbarkeit',
  };

  const currentSlug = currentCategory ? categoryToSlug[currentCategory] : null;
  const links = CLUSTER_LINKS.filter((l) => !currentSlug || !l.href.includes(currentSlug)).slice(0, 3);

  return (
    <div className="mt-12 mb-8">
      <h2 className="text-lg font-bold text-foreground mb-4">Weiterführende Themen</h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowRight size={14} /> {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedLinks;
