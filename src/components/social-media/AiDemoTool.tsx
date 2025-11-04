import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AiDemoTool = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [usageCount, setUsageCount] = useState(0);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Bitte fülle das Feld aus",
        description: "Beschreibe dein Unternehmen und was du erreichen möchtest.",
        variant: "destructive"
      });
      return;
    }

    // Check usage limit (2 per 24h - simplified version)
    if (usageCount >= 2) {
      toast({
        title: "Limit erreicht",
        description: "Du hast die maximale Anzahl an Nutzungen (2 pro Tag) erreicht.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulierte KI-Antwort (später mit echtem Backend ersetzen)
    setTimeout(() => {
      const ideas = [
        `📱 Content-Idee 1: Zeige einen "Tag im Leben" deines Unternehmens - authentische Einblicke schaffen Vertrauen.`,
        `🎯 Content-Idee 2: Erstelle eine Serie zu häufigen Kundenfragen - positioniere dich als Experte.`,
        `✨ Content-Idee 3: Präsentiere Vorher/Nachher-Beispiele - zeige konkrete Ergebnisse deiner Arbeit.`,
        `💡 Content-Idee 4: Teile einen Quick-Tipp oder Hack aus deiner Branche - biete echten Mehrwert.`,
        `🔥 Content-Idee 5: Nutze aktuelle Trends oder Themen und verbinde sie mit deinem Angebot.`
      ].join('\n\n');

      setResult(ideas);
      setUsageCount(prev => prev + 1);
      setIsLoading(false);
      
      toast({
        title: "Ideen generiert!",
        description: `Nutzung ${usageCount + 1} von 2 heute verbraucht.`,
      });
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Ich bin ... / Ich verkaufe ... / Ich möchte ..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="min-h-24 resize-none"
        disabled={isLoading}
      />
      
      <Button 
        onClick={handleGenerate}
        disabled={isLoading || usageCount >= 2}
        className="w-full btn-hero"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Generiere...
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4 mr-2" />
            Ideen generieren {usageCount > 0 && `(${2 - usageCount} übrig)`}
          </>
        )}
      </Button>

      {result && (
        <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
          <h4 className="font-bold text-sm mb-3">Deine Content-Ideen:</h4>
          <div className="text-sm whitespace-pre-line text-foreground leading-relaxed">
            {result}
          </div>
        </div>
      )}
    </div>
  );
};

export default AiDemoTool;
