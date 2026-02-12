/**
 * Soft gradient divider between sections to eliminate hard edges.
 * Renders a vertical gradient that blends sections smoothly into each other.
 */
const SectionDivider = ({ className = '' }: { className?: string }) => (
  <div 
    className={`h-24 md:h-32 w-full pointer-events-none ${className}`}
    style={{
      background: 'linear-gradient(180deg, transparent 0%, hsl(var(--muted) / 0.15) 40%, hsl(var(--muted) / 0.15) 60%, transparent 100%)'
    }}
    aria-hidden="true"
  />
);

export default SectionDivider;
