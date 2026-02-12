import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface InternalLink {
  label: string;
  href: string;
  description: string;
}

interface InternalLinksProps {
  currentPage: string;
}

const allLinks: InternalLink[] = [
  {
    label: "Social Media Marketing",
    href: "/socialmedia",
    description: "Content-Strategien und Social-Media-Betreuung für Unternehmen in der Region Saarburg & Trier."
  },
  {
    label: "Werbeanzeigen & Performance",
    href: "/werbeanzeigen-saarburg",
    description: "Messbare Meta- und Google-Ads-Kampagnen für regionale Unternehmen."
  },
  {
    label: "Employer Branding",
    href: "/employer-branding-saarburg",
    description: "Arbeitgebermarke aufbauen und qualifizierte Fachkräfte in der Region gewinnen."
  },
  {
    label: "Marketing Automation",
    href: "/marketing-automation-saarburg",
    description: "Automatisierte Funnel-Systeme für planbare Leads und Kundenanfragen."
  },
  {
    label: "Software & KI-Lösungen",
    href: "/software-ki-loesungen-saarburg",
    description: "Individuelle Tools, Rechner und KI-Integrationen für den Mittelstand."
  },
  {
    label: "Förderung & Zuschüsse",
    href: "/foerderung",
    description: "Bis zu 80 % der Kosten über BAFA-Förderung abdecken – wir prüfen deine Berechtigung."
  }
];

const InternalLinks = ({ currentPage }: InternalLinksProps) => {
  const links = allLinks.filter(link => link.href !== currentPage).slice(0, 4);

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Weitere Leistungen von Altovate
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={link.href}
                className="group flex items-start gap-3 p-5 rounded-xl liquid-glass hover:border-primary/40 transition-all"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {link.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {link.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 mt-1 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
