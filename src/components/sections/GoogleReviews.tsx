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
    { name: "s g", rating: 5, date: "vor 4 Monaten", text: "Alex weiß, wie man Appetit macht – im wahrsten Sinne. Seitdem Alex bei uns mit an Bord ist, sehen unsere Bilder und Videos so gut aus, dass man fast denkt, man könnte das Essen direkt vom Bildschirm riechen und schmecken. Absolute Empfehlung für alle, die ihre Gastro-Marke lebendig machen wollen!", avatar: "S" },
    { name: "Thomas Greßnich", rating: 5, date: "vor 4 Monaten", text: "Ich bin absolut begeistert von der Umsetzung meines Logos. Die Kommunikation war unkompliziert, meine Wünsche wurden bis ins kleinste Detail berücksichtigt und mit viel Kreativität sowie Sorgfalt umgesetzt. Das Ergebnis hat meine Erwartungen übertroffen. Vielen Dank für die tolle Zusammenarbeit – jederzeit wieder!", avatar: "T" },
    { name: "Micho Fliesen & Trockenbau", rating: 5, date: "vor 3 Monaten", text: "Absolut empfehlenswert! Wir arbeiten schon seit einiger Zeit mit ihm zusammen – die Bilder sind jedes Mal on point! Egal ob Food-Fotografie oder Stimmungsaufnahmen vom Laden: Er schafft es immer, unsere Produkte perfekt in Szene zu setzen. Super zuverlässig, kreativ und professionell!", avatar: "M" },
    { name: "joel adler", rating: 5, date: "vor 4 Monaten", text: "Ich habe schon mehrere Aufträge an Altovate Media vergeben, sehr zuverlässig und die Arbeit ist top 👍", avatar: "J" },
    { name: "Jamal Mala", rating: 5, date: "vor 4 Monaten", text: "Ich bin begeistert von der Arbeit. Professionell, kreativ und mit einem tollen Blick für Details. Der ganze Ablauf war super angenehm. Ich habe mich während des Shootings wohlgefühlt. Klare Weiterempfehlung!", avatar: "J" },
    { name: "Felix", rating: 5, date: "vor 4 Monaten", text: "Schnelle Reaktionszeit, engagiert, gute Arbeit 5/5, würde ich weiterempfehlen", avatar: "F" },
    { name: "Happy Denny d.o.o", rating: 5, date: "vor 4 Monaten", text: "THE BEST! Beautiful pictures and ideas that help us very much!", avatar: "H" },
    { name: "Akkurat Official", rating: 5, date: "vor 4 Monaten", text: "Immer wieder ein Vergnügen. Mit dir arbeiten zu können lg", avatar: "A" },
    { name: "Wasim Ahmad", rating: 5, date: "vor 4 Monaten", text: "Professionelle Zusammenarbeit und hervorragende Ergebnisse. Sehr empfehlenswert!", avatar: "W" }
  ];

  const avgRating = 5.0;
  const totalReviews = 9;

  return (
    <section ref={sectionRef} className="py-section bg-background">
      <div className="container mx-auto px-6">
        {/* SVG Gradient Definition */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFEB3B" />
              <stop offset="35%" stopColor="#FFC107" />
              <stop offset="70%" stopColor="#FF9800" />
              <stop offset="100%" stopColor="#F57C00" />
            </linearGradient>
          </defs>
        </svg>

        {/* Header with Google Rating */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
              alt="Google"
              className="h-6 opacity-90"
            />
            <span className="text-muted-foreground text-sm font-medium">Bewertungen</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-5xl font-bold gold-gradient-text">{avgRating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6" style={{ fill: 'url(#star-gradient)', stroke: 'none' }} />
              ))}
            </div>
          </div>
          
          <p className="text-muted-foreground">
            Basierend auf {totalReviews} Google Bewertungen
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card liquid-glass rounded-2xl p-6
                       hover:border-primary/20 hover:-translate-y-1
                       transition-all duration-300"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Avatar & Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.date}</div>
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
                  <Star key={i} className="w-4 h-4" style={{ fill: 'url(#star-gradient)', stroke: 'none' }} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-muted-foreground leading-relaxed">
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
