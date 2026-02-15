
-- Glossary terms table
CREATE TABLE public.glossary_terms (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  term TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  short_definition TEXT NOT NULL,
  content_html TEXT,
  related_terms TEXT[] DEFAULT '{}',
  category TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.glossary_terms ENABLE ROW LEVEL SECURITY;

-- Public read for published terms
CREATE POLICY "Anyone can read published glossary terms"
  ON public.glossary_terms
  FOR SELECT
  USING (status = 'published');

-- Timestamp trigger
CREATE TRIGGER update_glossary_terms_updated_at
  BEFORE UPDATE ON public.glossary_terms
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Index for slug lookups
CREATE INDEX idx_glossary_terms_slug ON public.glossary_terms(slug);
CREATE INDEX idx_glossary_terms_status ON public.glossary_terms(status);
