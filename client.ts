import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function supabaseBrowser() {
  if (!url || !anonKey) throw new Error('Tsy mbola napetraka ny Supabase environment variables.');
  return createClient(url, anonKey);
}
