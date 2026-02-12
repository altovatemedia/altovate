import { useState } from 'react';
import { Linkedin, Copy, Check, FileDown } from 'lucide-react';

interface ShareSectionProps {
  title: string;
  url: string;
}

const ShareSection = ({ title, url }: ShareSectionProps) => {
  const [linkCopied, setLinkCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const handleLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handlePdf = () => {
    window.print();
  };

  return (
    <div className="mt-16 mb-8">
      <h3 className="text-sm font-medium text-foreground mb-4">Artikel teilen</h3>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleLinkedIn}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-muted-foreground border border-border hover:text-primary hover:border-primary/30 transition-all duration-300"
        >
          <Linkedin size={16} /> LinkedIn
        </button>
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-muted-foreground border border-border hover:text-primary hover:border-primary/30 transition-all duration-300"
        >
          {linkCopied ? <Check size={16} /> : <Copy size={16} />}
          {linkCopied ? 'Kopiert' : 'Link kopieren'}
        </button>
        <button
          onClick={handlePdf}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-muted-foreground border border-border hover:text-primary hover:border-primary/30 transition-all duration-300"
        >
          <FileDown size={16} /> Als PDF speichern
        </button>
      </div>
    </div>
  );
};

export default ShareSection;
