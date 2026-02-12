import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface DefinitionBoxProps {
  definition: string;
  articleUrl: string;
}

const DefinitionBox = ({ definition, articleUrl }: DefinitionBoxProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(definition);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(articleUrl);
  };

  return (
    <div className="relative bg-card/60 rounded-lg pl-6 pr-6 py-6 mb-12 border-l-2 border-primary">
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        title="Definition kopieren"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">Definition</p>
      <p className="text-foreground leading-relaxed pr-8">{definition}</p>
      <div className="mt-4 flex items-center gap-4">
        <span className="text-xs text-muted-foreground">
          Quelle: Altovate – Strategisches Marketingwissen
        </span>
        <button
          onClick={handleCopyLink}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
        >
          Direktlink kopieren
        </button>
      </div>
    </div>
  );
};

export default DefinitionBox;
