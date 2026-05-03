import { Quote, Star } from 'lucide-react';
import Reveal, { StaggerContainer, StaggerItem } from '@/components/animations/Reveal';

const TestimonialQuotes = () => {
  const quotes = [
    {
      text: 'Mehrere Aufträge, jedes Mal zuverlässig, Arbeit ist top.',
      author: 'Joel Adler',
    },
    {
      text: 'Seitdem Alex an Bord ist, sehen unsere Bilder so gut aus, dass man fast das Essen vom Bildschirm schmecken könnte.',
      author: 's g, Gastro',
    },
    {
      text: 'Bilder sind jedes Mal on point. Egal ob Food-Fotografie oder Stimmung vom Laden — perfekt in Szene gesetzt.',
      author: 'Micho Fliesen & Trockenbau',
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="quote-star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFEB3B" />
              <stop offset="35%" stopColor="#FFC107" />
              <stop offset="70%" stopColor="#FF9800" />
              <stop offset="100%" stopColor="#F57C00" />
            </linearGradient>
          </defs>
        </svg>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Reveal blur>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Was <span className="text-primary">Kunden sagen</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4" style={{ fill: 'url(#quote-star-gradient)', stroke: 'none' }} />
                  ))}
                </div>
                <span className="text-sm">5,0 basierend auf 9 Google-Bewertungen.</span>
              </div>
            </Reveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {quotes.map((q, index) => (
              <StaggerItem key={index} scale blur>
                <div className="liquid-glass rounded-2xl p-8 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-primary/40 mb-6" />
                  <p className="text-lg text-foreground leading-relaxed mb-6 flex-grow">
                    „{q.text}"
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    — {q.author}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default TestimonialQuotes;
