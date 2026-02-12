import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface KeyStatementProps {
  text: string;
}

const KeyStatement = ({ text }: KeyStatementProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-12 py-6">
      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">Kernaussage</p>
      <p className="text-lg text-foreground/90 leading-relaxed pr-8">{text}</p>
      <button
        onClick={handleCopy}
        className="absolute top-6 right-0 text-muted-foreground hover:text-foreground transition-colors"
        title="Kernaussage kopieren"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );
};

export default KeyStatement;
