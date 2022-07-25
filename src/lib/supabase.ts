import { createClient } from "@supabase/supabase-js";

const isProdEnvironment = import.meta.env.PROD;

const supabaseURL = isProdEnvironment
  ? import.meta.env.VITE_SUPABASE_URL_PROD
  : import.meta.env.VITE_SUPABASE_URL_DEV;
const supabaseAnonKey = isProdEnvironment
  ? import.meta.env.VITE_SUPABASE_ANON_KEY_PROD
  : import.meta.env.VITE_SUPABASE_ANON_KEY_DEV;

export const supabaseClient = createClient(supabaseURL, supabaseAnonKey);
