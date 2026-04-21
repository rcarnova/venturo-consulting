-- Tabella codici di accesso al toolkit culturale
CREATE TABLE public.toolkit_access_codes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  client_name TEXT NOT NULL,
  notes TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_accessed_at TIMESTAMP WITH TIME ZONE,
  access_count INTEGER NOT NULL DEFAULT 0
);

ALTER TABLE public.toolkit_access_codes ENABLE ROW LEVEL SECURITY;

-- Nessun accesso pubblico via client. Tutto passa da edge function con service role.
CREATE POLICY "Deny all client access" ON public.toolkit_access_codes
  FOR ALL TO anon, authenticated USING (false) WITH CHECK (false);

CREATE INDEX idx_toolkit_codes_code ON public.toolkit_access_codes(code);