-- Create update timestamp function if not exists
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create table for visibility check leads
CREATE TABLE IF NOT EXISTS public.visibility_check_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  answers JSONB NOT NULL,
  score_pct INTEGER NOT NULL,
  consent_status TEXT NOT NULL DEFAULT 'pending' CHECK (consent_status IN ('pending', 'confirmed')),
  consent_timestamp TIMESTAMPTZ,
  doi_token TEXT UNIQUE,
  ip_address TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.visibility_check_leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow inserts from anyone (public form)
CREATE POLICY "Anyone can submit visibility check"
  ON public.visibility_check_leads
  FOR INSERT
  WITH CHECK (true);

-- Policy: Allow updates only with valid token
CREATE POLICY "Update with valid token"
  ON public.visibility_check_leads
  FOR UPDATE
  USING (true);

-- Create index on email and doi_token
CREATE INDEX idx_visibility_check_email ON public.visibility_check_leads(email);
CREATE INDEX idx_visibility_check_doi_token ON public.visibility_check_leads(doi_token);

-- Create updated_at trigger
CREATE TRIGGER update_visibility_check_leads_updated_at
  BEFORE UPDATE ON public.visibility_check_leads
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();