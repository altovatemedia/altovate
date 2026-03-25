import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

/* ─── fade-up hook ─── */
const useFadeUp = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("fade-up-visible"); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const FadeUp = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useFadeUp();
  return (
    <div ref={ref} className={`fade-up ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

/* ─── Prompt Card ─── */
const PromptCard = ({ num, title, text, output, delay = 0 }: { num: string; title: string; text: string; output: string; delay?: number }) => (
  <FadeUp delay={delay} className="glass-card relative overflow-hidden group hover:-translate-y-0.5 transition-transform duration-300">
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFEB3B] via-[#FFC107] to-[#F57C00]" />
    <div className="p-6">
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#F0A818] mb-2">{num}</p>
      <h3 className="text-base font-bold text-[#F1F1F1] mb-3">{title}</h3>
      <p className="text-[13px] leading-relaxed text-[#8B95A8] mb-4">{text}</p>
      <p className="text-[10px] font-mono text-[#F0A818]/60">→ Output: {output}</p>
    </div>
  </FadeUp>
);

/* ─── Page ─── */
const NetzwerkFrauen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle");

  useEffect(() => {
    document.title = "Die 5 KI-Prompts für Social Media · Gratis · Altovate";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "4 interaktive Claude-Prompts + Kombinations-Prompt. 6 Monate Content in 15 Minuten. Kostenlos anfordern.");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStatus("loading");
    try {
      const { error } = await supabase.from("leads").insert({ name: name.trim(), email: email.trim() });
      if (error) {
        if (error.code === "23505") { setStatus("duplicate"); return; }
        throw error;
      }
      // trigger email edge function
      await supabase.functions.invoke("send-lead-email", { body: { name: name.trim(), email: email.trim() } });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-[#F1F1F1] overflow-x-hidden" style={{ backgroundImage: "radial-gradient(ellipse 60% 40% at 80% 10%, rgba(240,168,24,0.06), transparent)" }}>
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B1120]/70 border-b border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
          <span className="text-sm font-bold tracking-[0.18em] uppercase bg-gradient-to-r from-[#FFEB3B] via-[#FFC107] to-[#F57C00] bg-clip-text text-transparent">ALTOVATE</span>
          <a href="https://altovate.de" target="_blank" rel="noopener" className="text-xs text-[#8B95A8] hover:text-[#F0A818] transition-colors">altovate.de →</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-[100dvh] flex flex-col items-center justify-center px-5 pt-20 pb-16">
        <FadeUp className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F0A818]/20 bg-[#F0A818]/10 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF4444] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EF4444]" />
          </span>
          <span className="text-xs font-medium text-[#F0A818]">NetzwerkFrauen-Tag Merzig · 28.03.2026</span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="text-center font-extrabold tracking-[-0.02em] leading-[1.1] max-w-3xl" style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}>
            Die 5 KI-Prompts die du heute{" "}
            <span className="bg-gradient-to-r from-[#FFEB3B] via-[#FFC107] to-[#F57C00] bg-clip-text text-transparent">live gesehen hast.</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-center text-[#8B95A8] text-base md:text-lg max-w-[580px] mt-6 leading-relaxed">
            4 interaktive Prompts + 1 Kombinations-Prompt. Kopieren. Einfügen. Fertig.{" "}
            <span className="text-[#F1F1F1] font-medium">6 Monate Content in 15 Minuten.</span>
          </p>
        </FadeUp>

        {/* ── FORM CARD ── */}
        <FadeUp delay={0.35} className="w-full max-w-[500px] mt-10">
          <div className="glass-card relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFEB3B] via-[#FFC107] to-[#F57C00]" />
            <div className="p-6 md:p-8">
              {status === "success" ? (
                <div className="text-center py-6">
                  <p className="text-5xl mb-4">✅</p>
                  <h3 className="text-xl font-bold text-[#F0A818] mb-2">Du bist dabei.</h3>
                  <p className="text-sm text-[#8B95A8] leading-relaxed">Schau in dein Postfach — die Prompts sind auf dem Weg zu dir. Check auch deinen Spam-Ordner.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#F0A818]">🎁 GRATIS · KEIN SPAM</p>
                  <h2 className="text-[22px] font-bold">Direkt in dein Postfach.</h2>
                  <p className="text-[13px] text-[#8B95A8]">Trag dich ein — die Prompts kommen automatisch zu dir.</p>
                  <input
                    type="text" required value={name} onChange={e => setName(e.target.value)}
                    placeholder="Dein Vorname"
                    className="nf-input" disabled={status === "loading"}
                  />
                  <input
                    type="email" required value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="Deine E-Mail-Adresse"
                    className="nf-input" disabled={status === "loading"}
                  />
                  {status === "duplicate" && (
                    <p className="text-xs text-[#EF4444]/80">Diese E-Mail ist bereits eingetragen. Schau in dein Postfach.</p>
                  )}
                  {status === "error" && (
                    <p className="text-xs text-[#EF4444]/80">Etwas ist schiefgelaufen. Bitte versuche es erneut.</p>
                  )}
                  <button
                    type="submit" disabled={status === "loading"}
                    className="w-full py-3.5 rounded-xl font-bold text-base bg-gradient-to-r from-[#FFEB3B] via-[#FFC107] to-[#F57C00] text-[#0B1120] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(240,168,24,0.3)] transition-all duration-300 disabled:opacity-60"
                  >
                    {status === "loading" ? "Wird gesendet…" : "Ja, ich will die Prompts →"}
                  </button>
                  <p className="text-[11px] text-[#8B95A8] text-center">Kostenlos. Kein Abo. Abmeldung jederzeit.</p>
                </form>
              )}
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── WAS DU BEKOMMST ── */}
      <section className="px-5 py-20 md:py-28 max-w-5xl mx-auto">
        <FadeUp className="text-center mb-14">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#F0A818] mb-3">WAS DU BEKOMMST</p>
          <h2 className="font-extrabold tracking-[-0.02em] leading-tight" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
            5 Prompts.{" "}
            <span className="bg-gradient-to-r from-[#FFEB3B] via-[#FFC107] to-[#F57C00] bg-clip-text text-transparent">Ein System.</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <PromptCard num="PROMPT 01" title="Zielgruppe definieren" text="Claude stellt dir 10 präzise Fragen zu deiner Wunschkundin. Du antwortest. Ergebnis: eine vollständige Persona, die sich anfühlt als ob du sie 10 Jahre kennst — Schmerzpunkte, Kaufmotive, ihre eigene Sprache." output="zielgruppe.md" delay={0} />
          <PromptCard num="PROMPT 02" title="Brand Voice" text="8 Fragen zu deinem Kommunikationsstil. Claude analysiert wie du klingst und schreibt ab sofort ausschließlich in deiner Stimme — nicht in KI-Sprech, nicht generisch." output="brandvoice.md" delay={0.1} />
          <PromptCard num="PROMPT 03" title="6 Monate Content" text="7 Fragen zu deinem Business und deinen Kernthemen. Claude entwickelt 10 Content-Säulen mit je 3 konkreten Post-Ideen — plus einen strukturierten Redaktionskalender für 24 Wochen." output="contentplan.md" delay={0.2} />
          <PromptCard num="PROMPT 04" title="Hooks & fertige Posts" text="Claude schreibt dir 10 fertige Posts mit je 3 Hook-Varianten — in deiner Stimme, auf deine Zielgruppe zugeschnitten. Erste Zeile maximal 8 Wörter. Kein generischer Einstieg. Sofort veröffentlichbar." output="posts.md" delay={0.3} />
        </div>

        {/* Bonus */}
        <FadeUp delay={0.1} className="mt-5">
          <div className="glass-card relative overflow-hidden border-[#F0A818]/20 bg-[#F0A818]/[0.04]">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFEB3B] via-[#FFC107] to-[#F57C00]" />
            <div className="p-6 flex gap-4 items-start">
              <span className="text-4xl shrink-0">⚡</span>
              <div>
                <h3 className="text-base font-bold text-[#F0A818] mb-2">Bonus: Kombinations-Prompt</h3>
                <p className="text-[13px] leading-relaxed text-[#8B95A8]">Füge alle 4 Markdown-Dokumente in einen letzten Prompt ein — Claude kombiniert alles zu deiner persönlichen Social Media Strategie. Ein Dokument. Vollständig. Ready to use.</p>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── SPEAKER ── */}
      <section className="px-5 py-20 md:py-28">
        <FadeUp className="max-w-[700px] mx-auto glass-card relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFEB3B] via-[#FFC107] to-[#F57C00]" />
          <div className="p-8 md:p-10 flex flex-col items-center text-center">
            <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#FFEB3B] to-[#F57C00] flex items-center justify-center mb-4">
              <span className="text-[#0B1120] font-extrabold text-2xl">AB</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Alex Buchmann</h3>
            <p className="text-[13px] text-[#8B95A8] mb-5">Gründer · Altovate GmbH · B2B Marketing & Strategy</p>
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#FFEB3B] to-[#F57C00] mx-auto mb-5" />
            <p className="text-[15px] italic text-[#8B95A8] leading-relaxed max-w-lg">
              "Social Media funktioniert nicht wegen Quantität. Es funktioniert wegen Klarheit — über wen du erreichst, was du sagst und wie du klingst. Das System gibt dir beides."
            </p>
            <p className="mt-5 text-2xl text-[#F0A818]" style={{ fontFamily: "'Dancing Script', cursive" }}>Alex Buchmann</p>
          </div>
        </FadeUp>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#1E293B] px-5 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <span className="font-bold tracking-[0.18em] uppercase bg-gradient-to-r from-[#FFEB3B] via-[#FFC107] to-[#F57C00] bg-clip-text text-transparent">ALTOVATE</span>
          <div className="flex items-center gap-4 text-[#8B95A8]">
            <a href="https://altovate.de" target="_blank" rel="noopener" className="hover:text-[#F0A818] transition-colors">altovate.de</a>
            <a href="https://www.linkedin.com/in/alexander-buchmann/" target="_blank" rel="noopener" className="hover:text-[#F0A818] transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/iamalexbuchmann/" target="_blank" rel="noopener" className="hover:text-[#F0A818] transition-colors">Instagram</a>
          </div>
          <span className="text-[#8B95A8]/50">© 2026 Altovate GmbH · Saarburg</span>
        </div>
      </footer>

      {/* ── INLINE STYLES ── */}
      <style>{`
        .glass-card {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          box-shadow: 0 25px 50px rgba(0,0,0,0.4);
        }
        .nf-input {
          width: 100%;
          padding: 12px 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid #1E293B;
          border-radius: 12px;
          color: #F1F1F1;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .nf-input:focus {
          border-color: rgba(240,168,24,0.4);
          box-shadow: 0 0 0 3px rgba(240,168,24,0.08);
        }
        .nf-input::placeholder { color: #8B95A8; }
        .nf-input:disabled { opacity: 0.6; }
        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-up-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default NetzwerkFrauen;
