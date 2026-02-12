import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
}

const TableOfContents = ({ contentHtml }: { contentHtml: string }) => {
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(contentHtml, 'text/html');
    const headings = doc.querySelectorAll('h2');
    const tocItems: TocItem[] = [];

    headings.forEach((h, i) => {
      const id = h.id || `section-${i}`;
      tocItems.push({ id, text: h.textContent || '' });
    });

    setItems(tocItems);
  }, [contentHtml]);

  if (items.length < 2) return null;

  return (
    <nav className="mb-12">
      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">Inhalt</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
