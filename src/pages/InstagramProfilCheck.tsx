import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, CheckCircle2, XCircle, Lightbulb, ArrowRight, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import NewNavigation from "@/components/sections/NewNavigation";
import VisualBreadcrumb from '@/components/VisualBreadcrumb';
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

interface AnalysisResult {
  klarheitsgrad: string;
  klarheitsgrad_index: number;
  versteht_besucher: boolean;
  zusammenfassung: string;
  was_funktioniert: string[];
  was_verbessern: string[];
  vorschlaege: {
    bio: string | null;
    highlights: string[] | null;
    gepinnte_beitraege: string | null;
  };
}

const loadingSteps = [
  "Profilstruktur wird geprüft",
  "Bio & Positionierung werden analysiert",
  "Conversion-Elemente werden bewertet",
  "Visueller Ersteindruck wird eingeordnet",
];

const klarheitsgradColors: Record<string, string> = {
  "Unklar": "text-red-500",
  "Teilweise verständlich": "text-orange-500",
  "Grundsätzlich klar": "text-yellow-500",
  "Klar & strukturiert": "text-emerald-500",
  "Verkaufsbereit": "text-primary",
};

const klarheitsgradBgColors: Record<string, string> = {
  "Unklar": "bg-red-500/10 border-red-500/30",
  "Teilweise verständlich": "bg-orange-500/10 border-orange-500/30",
  "Grundsätzlich klar": "bg-yellow-500/10 border-yellow-500/30",
  "Klar & strukturiert": "bg-emerald-500/10 border-emerald-500/30",
  "Verkaufsbereit": "bg-primary/10 border-primary/30",
};

export default function InstagramProfilCheck() {
  const [profileUrl, setProfileUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [username, setUsername] = useState("");
  const { toast } = useToast();

  const handleAnalyze = async () => {
    if (!profileUrl.trim()) {
      toast({
        title: "Bitte gib einen Instagram-Link ein",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setCurrentStep(0);
    setResult(null);

    // Animate through loading steps
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1500);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/instagram-profile-check`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ profileUrl }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Analyse fehlgeschlagen");
      }

      setUsername(data.username);
      setResult(data.analysis);
    } catch (error) {
      toast({
        title: "Fehler bei der Analyse",
        description: error instanceof Error ? error.message : "Bitte versuche es erneut",
        variant: "destructive",
      });
    } finally {
      clearInterval(stepInterval);
      setIsLoading(false);
    }
  };

  const handleScrollToContact = () => {
    window.location.href = "/#kontakt";
  };

  return (
    <>
      <Helmet>
        <title>Instagram-Profil-Check für Unternehmen | Altovate</title>
        <meta
          name="description"
          content="Kostenloser Instagram-Profil-Check: Erhalte eine KI-gestützte Bewertung deines Unternehmensprofils aus Kundensicht – in wenigen Sekunden."
        />
      </Helmet>

      <NewNavigation />
      <VisualBreadcrumb items={[{ label: "Instagram Profil-Check" }]} />

      <main className="min-h-screen bg-background pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Instagram className="w-4 h-4" />
              Kostenloser Profil-Check
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Wie klar ist dein Instagram-Profil als Unternehmen?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Erhalte eine ehrliche Bewertung aus Kundensicht – kostenlos und in wenigen Sekunden.
            </p>
          </motion.div>

          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="url"
                    placeholder="Instagram-Profil-Link einfügen (z. B. https://instagram.com/...)"
                    value={profileUrl}
                    onChange={(e) => setProfileUrl(e.target.value)}
                    className="flex-1 h-12 text-base"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleAnalyze}
                    disabled={isLoading}
                    className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Analysiere...
                      </>
                    ) : (
                      "Profil analysieren"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Loading Animation */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8"
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur">
                  <CardContent className="p-6 md:p-8">
                    <div className="space-y-4">
                      {loadingSteps.map((step, index) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{
                            opacity: index <= currentStep ? 1 : 0.3,
                            x: 0,
                          }}
                          transition={{ delay: index * 0.2, duration: 0.3 }}
                          className="flex items-center gap-3"
                        >
                          {index < currentStep ? (
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                          ) : index === currentStep ? (
                            <Loader2 className="w-5 h-5 text-primary animate-spin" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-muted" />
                          )}
                          <span
                            className={`text-sm ${
                              index <= currentStep
                                ? "text-foreground"
                                : "text-muted-foreground"
                            }`}
                          >
                            {step}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Section */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-8 space-y-6"
              >
                {/* Main Rating */}
                <Card className={`border-2 ${klarheitsgradBgColors[result.klarheitsgrad] || "border-border"}`}>
                  <CardContent className="p-6 md:p-8 text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Analyse für @{username}
                    </p>
                    <h2
                      className={`text-2xl md:text-3xl font-bold mb-4 ${
                        klarheitsgradColors[result.klarheitsgrad] || "text-foreground"
                      }`}
                    >
                      {result.klarheitsgrad}
                    </h2>
                    <p className="text-foreground mb-4">{result.zusammenfassung}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm">
                      <span className="text-muted-foreground">
                        Versteht ein neuer Besucher sofort, was du anbietest?
                      </span>
                      <span
                        className={`font-medium ${
                          result.versteht_besucher ? "text-emerald-500" : "text-red-500"
                        }`}
                      >
                        {result.versteht_besucher ? "Ja" : "Nein"}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* What works / What to improve */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* What works */}
                  <Card className="border-emerald-500/30 bg-emerald-500/5">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <h3 className="font-semibold text-foreground">
                          Was bereits gut funktioniert
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {result.was_funktioniert.map((item, index) => (
                          <li
                            key={index}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-emerald-500 mt-0.5">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* What to improve */}
                  <Card className="border-red-500/30 bg-red-500/5">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <XCircle className="w-5 h-5 text-red-500" />
                        <h3 className="font-semibold text-foreground">
                          Was aktuell verbessert werden sollte
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {result.was_verbessern.map((item, index) => (
                          <li
                            key={index}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-red-500 mt-0.5">✗</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Suggestions */}
                {(result.vorschlaege.bio ||
                  result.vorschlaege.highlights ||
                  result.vorschlaege.gepinnte_beitraege) && (
                  <Card className="border-primary/30 bg-primary/5">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Lightbulb className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-foreground">
                          Konkrete Vorschläge
                        </h3>
                      </div>
                      <div className="space-y-4">
                        {result.vorschlaege.bio && (
                          <div>
                            <p className="text-sm font-medium text-foreground mb-1">
                              Bio-Struktur:
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {result.vorschlaege.bio}
                            </p>
                          </div>
                        )}
                        {result.vorschlaege.highlights && (
                          <div>
                            <p className="text-sm font-medium text-foreground mb-1">
                              Empfohlene Highlights:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {result.vorschlaege.highlights.map((highlight, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {result.vorschlaege.gepinnte_beitraege && (
                          <div>
                            <p className="text-sm font-medium text-foreground mb-1">
                              Gepinnte Beiträge:
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {result.vorschlaege.gepinnte_beitraege}
                            </p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Closing note */}
                <div className="text-center pt-8 border-t border-border/50">
                  <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    Diese Analyse zeigt, wo dein Profil aktuell Klarheit verliert. Genau
                    diese Punkte lassen sich strukturiert optimieren.
                  </p>
                  <Button
                    onClick={handleScrollToContact}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Profil gezielt optimieren
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <Footer />
    </>
  );
}
