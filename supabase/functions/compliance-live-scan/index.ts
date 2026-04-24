// ============================================================
// Compliance Live-Scan: Quartalsweiser Drittanbieter-Audit
// ============================================================
// Crawlt zentrale öffentliche Routen der Live-Domain, extrahiert
// alle Drittanbieter-Hosts aus dem initial gelieferten HTML
// (Scripts, iFrames, Links, Preconnect, Bilder) und vergleicht
// gegen die genehmigte Service-Liste in compliance.config.json.
//
// Trigger: pg_cron (quartalsweise) oder manuell via HTTP POST.
// Ergebnis: persistiert in public.compliance_scan_runs.
// ============================================================

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// --------------------- Konfiguration ---------------------
const TARGET_DOMAIN = "https://altovate.de";

// Routen, die im Crawl geprüft werden (öffentlich, kein Login).
const ROUTES_TO_SCAN = [
  "/",
  "/kontakt",
  "/erstkontakt",
  "/marketing-wissen",
  "/datenschutz",
  "/impressum",
  "/social-media-marketing",
  "/werbeanzeigen-saarburg",
  "/marketing-automation-saarburg",
  "/software-ki-loesungen-saarburg",
  "/employer-branding-saarburg",
];

// Genehmigte Drittanbieter-Hosts (synchron mit compliance.config.json).
// Pre-Consent erlaubt: nur Self / Vercel / Supabase.
// Nach-Consent erlaubt: GTM/GA, Cal.com, Google Fonts (lokal gehostet => sollte nicht erscheinen).
const APPROVED_HOSTS_PRE_CONSENT = [
  "altovate.de",
  "www.altovate.de",
  "altovate.lovable.app",
  "vercel.app",
  "supabase.co",
  "euglobmdsrurbbmfargp.supabase.co",
];

const APPROVED_HOSTS_POST_CONSENT = [
  "googletagmanager.com",
  "www.googletagmanager.com",
  "google-analytics.com",
  "www.google-analytics.com",
  "app.cal.com",
  "cal.com",
];

// Pattern, die aus initial gelieferten HTML-Antworten externe URLs ziehen.
const URL_PATTERNS = [
  /<script[^>]+src=["']([^"']+)["']/gi,
  /<iframe[^>]+src=["']([^"']+)["']/gi,
  /<link[^>]+href=["']([^"']+)["']/gi,
  /<img[^>]+src=["']([^"']+)["']/gi,
  /<source[^>]+src=["']([^"']+)["']/gi,
];

// --------------------- Helpers ---------------------
const extractHost = (raw: string): string | null => {
  try {
    if (raw.startsWith("//")) raw = "https:" + raw;
    if (raw.startsWith("/") || raw.startsWith("data:") || raw.startsWith("#")) {
      return null;
    }
    const url = new URL(raw, TARGET_DOMAIN);
    return url.hostname.toLowerCase();
  } catch {
    return null;
  }
};

const isApproved = (host: string): "pre" | "post" | "unknown" => {
  if (APPROVED_HOSTS_PRE_CONSENT.some((h) => host === h || host.endsWith("." + h))) {
    return "pre";
  }
  if (APPROVED_HOSTS_POST_CONSENT.some((h) => host === h || host.endsWith("." + h))) {
    return "post";
  }
  return "unknown";
};

interface RouteScanResult {
  route: string;
  status: number;
  hosts_pre_consent: string[];
  hosts_post_consent: string[];
  hosts_unknown: string[];
  error?: string;
}

const scanRoute = async (route: string): Promise<RouteScanResult> => {
  const url = `${TARGET_DOMAIN}${route}`;
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Altovate-ComplianceScan/1.0 (+https://altovate.de)",
        "Accept": "text/html,application/xhtml+xml",
      },
      redirect: "follow",
    });
    const html = await res.text();

    const hosts = new Set<string>();
    for (const pattern of URL_PATTERNS) {
      const matches = html.matchAll(pattern);
      for (const m of matches) {
        const host = extractHost(m[1]);
        if (host && host !== "altovate.de" && host !== "www.altovate.de") {
          hosts.add(host);
        }
      }
    }

    const pre: string[] = [];
    const post: string[] = [];
    const unknown: string[] = [];
    for (const h of hosts) {
      const cat = isApproved(h);
      if (cat === "pre") pre.push(h);
      else if (cat === "post") post.push(h);
      else unknown.push(h);
    }

    return {
      route,
      status: res.status,
      hosts_pre_consent: pre.sort(),
      hosts_post_consent: post.sort(),
      hosts_unknown: unknown.sort(),
    };
  } catch (err) {
    return {
      route,
      status: 0,
      hosts_pre_consent: [],
      hosts_post_consent: [],
      hosts_unknown: [],
      error: err instanceof Error ? err.message : String(err),
    };
  }
};

// --------------------- Handler ---------------------
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const startedAt = new Date().toISOString();
  const results: RouteScanResult[] = [];

  for (const route of ROUTES_TO_SCAN) {
    results.push(await scanRoute(route));
  }

  const allUnknown = new Set<string>();
  let routesWithIssues = 0;
  for (const r of results) {
    if (r.hosts_unknown.length > 0) routesWithIssues++;
    r.hosts_unknown.forEach((h) => allUnknown.add(h));
  }

  const status: "ok" | "warning" | "error" =
    allUnknown.size === 0 ? "ok" : "warning";

  const summary = {
    started_at: startedAt,
    finished_at: new Date().toISOString(),
    target_domain: TARGET_DOMAIN,
    routes_scanned: results.length,
    routes_with_issues: routesWithIssues,
    unknown_hosts_total: Array.from(allUnknown).sort(),
    status,
    results,
  };

  // Ergebnis persistieren (best-effort, blockiert die Antwort nicht).
  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );
    await supabase.from("compliance_scan_runs").insert({
      target_domain: TARGET_DOMAIN,
      status,
      routes_scanned: results.length,
      routes_with_issues: routesWithIssues,
      unknown_hosts: Array.from(allUnknown).sort(),
      summary,
    });
  } catch (err) {
    console.error("[compliance-live-scan] persist error:", err);
  }

  return new Response(JSON.stringify(summary, null, 2), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
