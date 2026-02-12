import { Star, BadgePercent } from 'lucide-react';
import { Link } from 'react-router-dom';
import bniBadge from '@/assets/bni-badge.png';

const TrustBar = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-8 fade-in-up" style={{ animationDelay: '0.5s' }}>
      {/* Google Rating */}
      <a
        href="https://www.google.com/maps/place/Altovate"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
      >
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-sm font-medium">
          5.0 <span className="text-muted-foreground/70">· 9 Bewertungen</span>
        </span>
      </a>

      {/* Divider */}
      <div className="hidden md:block w-px h-6 bg-border" />

      {/* BNI Badge */}
      <a
        href="https://bni.de"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
      >
        <img src={bniBadge} alt="BNI Mitglied" className="h-8 w-auto" />
      </a>

      {/* Divider */}
      <div className="hidden md:block w-px h-6 bg-border" />

      {/* Förderfähig */}
      <Link
        to="/foerderung"
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <BadgePercent className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">Förderfähig bis 80 %</span>
      </Link>
    </div>
  );
};

export default TrustBar;
