import { Link } from 'react-router-dom';
import { ArrowRight, BadgePercent } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';

const FoerderungHint = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal scale>
            <Link 
              to="/foerderung"
              className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 bg-background rounded-2xl border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <BadgePercent className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground mb-1">
                    Wusstest du, dass strategische Beratung staatlich gefördert wird?
                  </p>
                  <p className="text-muted-foreground">
                    Bis zu 80% Zuschuss möglich – je nach Ausgangslage.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary font-semibold shrink-0 group-hover:gap-3 transition-all duration-300">
                Mehr erfahren
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FoerderungHint;
