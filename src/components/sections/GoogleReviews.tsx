import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const GoogleReviews = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.review-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-in');
            }, index * 100);
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const reviews = [
    {
      name: "Michael S.",
      rating: 5,
      date: "vor 2 Wochen",
      text: "Professionelle Beratung und exzellente Umsetzung. Altovate hat unsere Erwartungen übertroffen. Die Zusammenarbeit war unkompliziert und das Ergebnis spricht für sich.",
      avatar: "M"
    },
    {
      name: "Sarah K.",
      rating: 5,
      date: "vor 1 Monat",
      text: "Top Service! Alexander und sein Team haben unsere Website komplett neu aufgesetzt. Modern, schnell und genau nach unseren Vorstellungen. Absolut empfehlenswert!",
      avatar: "S"
    },
    {
      name: "Thomas B.",
      rating: 5,
      date: "vor 3 Wochen",
      text: "Endlich ein Partner, der digitales Marketing wirklich versteht. Die Performance-Kampagnen bringen messbare Ergebnisse. Klare Kommunikation, faire Preise.",
      avatar: "T"
    },
    {
      name: "Julia M.",
      rating: 5,
      date: "vor 2 Monaten",
      text: "Hervorragende Content-Produktion und kreative Ideen. Altovate hat uns geholfen, unsere Marke auf das nächste Level zu heben. Sehr zufrieden mit der Zusammenarbeit!",
      avatar: "J"
    }
  ];

  const avgRating = 5.0;
  const totalReviews = 47;

  return (
    <section ref={sectionRef} className="py-section bg-white dark:bg-background">
      <div className="container mx-auto px-6">
        {/* Header with Google Rating */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
              alt="Google"
              className="h-6 opacity-90"
            />
            <span className="text-[#09002C]/60 dark:text-muted-foreground text-sm font-medium">Bewertungen</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-5xl font-bold text-[#09002C] dark:text-foreground">{avgRating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          
          <p className="text-[#09002C]/60 dark:text-muted-foreground">
            Basierend auf {totalReviews} Google Bewertungen
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card bg-[#F9F9FB] dark:bg-card rounded-2xl p-6 shadow-[0_4px_16px_rgba(9,0,44,0.06)]
                       hover:shadow-[0_8px_24px_rgba(9,0,44,0.1)] hover:-translate-y-1
                       transition-all duration-300 opacity-0 translate-y-4"
            >
              {/* Avatar & Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#EA3B5F] flex items-center justify-center text-white font-bold">
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-[#09002C] dark:text-foreground">{review.name}</div>
                  <div className="text-xs text-[#09002C]/50 dark:text-muted-foreground">{review.date}</div>
                </div>
                <img 
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                  alt="Google"
                  className="h-4 opacity-70"
                />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-[#09002C]/70 dark:text-muted-foreground leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
