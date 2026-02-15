import { Star, BadgePercent } from 'lucide-react';
import { Link } from 'react-router-dom';
import bniBadge from '@/assets/bni-badge.png';

const TrustBar = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-8 fade-in-up" style={{ animationDelay: '0.5s' }}>
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="trustbar-star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFEB3B" />
            <stop offset="35%" stopColor="#FFC107" />
            <stop offset="70%" stopColor="#FF9800" />
            <stop offset="100%" stopColor="#F57C00" />
          </linearGradient>
        </defs>
      </svg>

      {/* Google Rating */}
      <a
        href="https://www.google.com/maps/place/Altovate"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
      >
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4" style={{ fill: 'url(#trustbar-star-gradient)', stroke: 'none' }} />
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
        <img src={bniBadge} alt="BNI Mitglied" className="h-8 w-auto" width={32} height={32} loading="lazy" />
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
