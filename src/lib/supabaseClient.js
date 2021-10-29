import { createClient } from '@supabase/supabase-js';

const supabaseURL = '';
const supabaseAnonKey = '';

export const supabase = createClient(supabaseURL, supabaseAnonKey);
