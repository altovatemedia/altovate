
-- 1. Add explicit SELECT deny policy
CREATE POLICY "No public read access"
  ON public.visibility_check_leads
  FOR SELECT
  USING (false);

-- 2. Drop the overly permissive UPDATE policy
DROP POLICY IF EXISTS "Update with valid token" ON public.visibility_check_leads;

-- 3. Add restricted UPDATE policy - only allow updates when doi_token matches
CREATE POLICY "Update only with matching doi_token"
  ON public.visibility_check_leads
  FOR UPDATE
  USING (doi_token IS NOT NULL AND doi_token = current_setting('request.headers', true)::json->>'x-doi-token');

-- 4. Add explicit DELETE deny policy
CREATE POLICY "No public delete access"
  ON public.visibility_check_leads
  FOR DELETE
  USING (false);
