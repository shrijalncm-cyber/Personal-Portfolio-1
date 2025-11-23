-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for public contact form)
CREATE POLICY "Allow public inserts" 
ON contact_messages 
FOR INSERT 
WITH CHECK (true);

-- Allow service role to view (for admin purposes if needed later)
-- Service role bypasses RLS by default, so explicit policy isn't strictly needed for that,
-- but we ensure no one else can read.
CREATE POLICY "Deny public read" 
ON contact_messages 
FOR SELECT 
USING (false);
