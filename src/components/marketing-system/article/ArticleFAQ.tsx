interface FAQItem {
  question: string;
  answer: string;
}

const ArticleFAQ = ({ items }: { items: FAQItem[] }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-16 mb-12">
      <h2 className="text-xl font-bold text-foreground mb-6">Häufige Fragen</h2>
      <div className="space-y-4">
        {items.map((faq, i) => (
          <div key={i} className="bg-card/40 rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleFAQ;
