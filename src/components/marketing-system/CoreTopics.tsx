import { Link } from 'react-router-dom';
import { TrendingUp, Eye, Target, Users, Brain } from 'lucide-react';

const clusters = [
  {
    icon: TrendingUp,
    title: 'ROI & Wirtschaftlichkeit',
    definition: 'Marketing ist nur dann sinnvoll, wenn der Deckungsbeitrag höher ist als die Investition. Umsatz ist keine Kennzahl. Marge, Abschlussquote und Kundenwert sind es.',
    cta: 'ROI verstehen',
    href: '/marketing-wissen/roi-wirtschaftlichkeit',
  },
  {
    icon: Eye,
    title: 'Social Media als System',
    definition: 'Posts sind kein Marketing. Marketing entsteht erst, wenn Aufmerksamkeit, Vertrauen und Nachfrage strukturiert aufgebaut werden.',
    cta: 'System verstehen',
    href: '/marketing-wissen/social-media-system',
  },
  {
    icon: Target,
    title: 'Funnel & Nachfrage',
    definition: 'Sichtbarkeit ohne System erzeugt Reichweite. Kein Umsatz. Ein Funnel übersetzt Aufmerksamkeit in messbare Nachfrage.',
    cta: 'Nachfrage aufbauen',
    href: '/marketing-wissen/funnel-nachfrage',
  },
  {
    icon: Users,
    title: 'Recruiting & Arbeitgebermarke',
    definition: 'Fachkräfte bewerben sich nicht bei Unternehmen, die sie nicht kennen. Sichtbarkeit entscheidet, bevor die Stellenausschreibung gelesen wird.',
    cta: 'Recruiting verstehen',
    href: '/marketing-wissen/recruiting-arbeitgebermarke',
  },
  {
    icon: Brain,
    title: 'GEO & KI-Sichtbarkeit',
    definition: 'Ranking reicht nicht mehr. Unternehmen müssen so strukturiert schreiben, dass KI-Systeme sie als Quelle erkennen und zitieren.',
    cta: 'GEO lernen',
    href: '/marketing-wissen/geo-ki-sichtbarkeit',
  },
];

const CoreTopics = () => {
  return (
    <section id="cluster" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="finom-h2 mb-4">Themencluster</h2>
          <p className="text-muted-foreground text-lg">
            Strukturiertes Wissen. Keine chronologische Liste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {clusters.map((cluster) => (
            <Link
              key={cluster.title}
              to={cluster.href}
              className="liquid-glass rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 group block"
            >
              <div className="w-14 h-14 rounded-xl liquid-glass-icon flex items-center justify-center mb-6">
                <cluster.icon className="w-7 h-7 text-[#ff1c5c]" />
              </div>
              <h2 className="finom-h3 mb-4">{cluster.title}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                {cluster.definition}
              </p>
              <span className="text-[#ff1c5c] font-semibold text-sm group-hover:underline transition-colors">
                {cluster.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTopics;
