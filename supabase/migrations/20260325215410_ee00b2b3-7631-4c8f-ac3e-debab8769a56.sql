
CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  source text DEFAULT 'NetzwerkFrauenTag Merzig 2026',
  email_sent boolean DEFAULT false,
  CONSTRAINT leads_email_unique UNIQUE (email)
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads" ON public.leads
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated can select leads" ON public.leads
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Only authenticated can update leads" ON public.leads
  FOR UPDATE TO authenticated
  USING (true);
