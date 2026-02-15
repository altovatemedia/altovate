import { Link } from 'react-router-dom';
import { TrendingUp, Eye, Target, Users, Brain, BookOpen } from 'lucide-react';

const clusters = [
  { icon: TrendingUp, title: 'ROI & Wirtschaftlichkeit', href: '/marketing-wissen/roi-wirtschaftlichkeit' },
  { icon: Eye, title: 'Social Media als System', href: '/marketing-wissen/social-media-system' },
  { icon: Target, title: 'Funnel & Nachfrage', href: '/marketing-wissen/funnel-nachfrage' },
  { icon: Users, title: 'Recruiting & Arbeitgebermarke', href: '/marketing-wissen/recruiting-arbeitgebermarke' },
  { icon: Brain, title: 'GEO & KI-Sichtbarkeit', href: '/marketing-wissen/geo-ki-sichtbarkeit' },
  { icon: BookOpen, title: 'Glossar', href: '/marketing-wissen/glossar' },
];

const CoreTopics = () => {
  return (
    <section id="cluster" className="py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-medium">Themencluster</p>
          <div className="flex flex-wrap gap-2">
            {clusters.map((cluster) => (
              <Link
                key={cluster.title}
                to={cluster.href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
              >
                <cluster.icon className="w-4 h-4 text-primary" />
                {cluster.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTopics;
