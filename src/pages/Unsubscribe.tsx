import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const Unsubscribe = () => {
  const [status, setStatus] = useState<"loading" | "valid" | "already" | "invalid" | "success" | "error">("loading");
  const token = new URLSearchParams(window.location.search).get("token");

  useEffect(() => {
    if (!token) { setStatus("invalid"); return; }

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

    fetch(`${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${token}`, {
      headers: { apikey: anonKey },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.valid === false && data.reason === "already_unsubscribed") setStatus("already");
        else if (data.valid) setStatus("valid");
        else setStatus("invalid");
      })
      .catch(() => setStatus("invalid"));
  }, [token]);

  const handleUnsubscribe = async () => {
    if (!token) return;
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", { body: { token } });
      if (error) throw error;
      if (data?.success) setStatus("success");
      else if (data?.reason === "already_unsubscribed") setStatus("already");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center px-5">
      <div className="max-w-md w-full text-center">
        <p className="text-[13px] font-bold tracking-[0.18em] text-[#F0A818] uppercase mb-6">ALTOVATE</p>

        {status === "loading" && <p className="text-[#8B95A8]">Wird geladen…</p>}

        {status === "valid" && (
          <>
            <h1 className="text-xl font-bold text-[#F1F1F1] mb-4">E-Mail-Abmeldung</h1>
            <p className="text-[#8B95A8] mb-6 text-sm leading-relaxed">
              Möchtest du dich wirklich von unseren E-Mails abmelden?
            </p>
            <button
              onClick={handleUnsubscribe}
              className="px-6 py-3 bg-[#F0A818] text-[#0B1120] font-bold rounded-lg hover:bg-[#d4940f] transition-colors"
            >
              Abmeldung bestätigen
            </button>
          </>
        )}

        {status === "success" && (
          <>
            <h1 className="text-xl font-bold text-[#F1F1F1] mb-4">Erfolgreich abgemeldet</h1>
            <p className="text-[#8B95A8] text-sm">Du erhältst keine weiteren E-Mails von uns.</p>
          </>
        )}

        {status === "already" && (
          <>
            <h1 className="text-xl font-bold text-[#F1F1F1] mb-4">Bereits abgemeldet</h1>
            <p className="text-[#8B95A8] text-sm">Du bist bereits von unseren E-Mails abgemeldet.</p>
          </>
        )}

        {status === "invalid" && (
          <>
            <h1 className="text-xl font-bold text-[#F1F1F1] mb-4">Ungültiger Link</h1>
            <p className="text-[#8B95A8] text-sm">Dieser Abmelde-Link ist ungültig oder abgelaufen.</p>
          </>
        )}

        {status === "error" && (
          <>
            <h1 className="text-xl font-bold text-[#F1F1F1] mb-4">Fehler</h1>
            <p className="text-[#8B95A8] text-sm">Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Unsubscribe;
