import { X } from 'lucide-react';

const NotFor = () => {
  const notForItems = [
    "Wenn du 300 € Budget hast",
    "Wenn du keine Veränderung willst", 
    "Wenn du denkst, ein Azubi kann das nebenher machen"
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-12">
            Für wen <span className="text-primary">NICHT</span>
          </h2>

          <div className="space-y-6">
            {notForItems.map((item, index) => (
              <div 
                key={item}
                className="flex items-center justify-center space-x-4 p-6 bold-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <X className="w-8 h-8 text-primary flex-shrink-0" />
                <span className="text-xl font-bold text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFor;