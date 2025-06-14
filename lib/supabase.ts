import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client with proper error handling
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create a server client (for server components and server actions)
export function getServerSupabaseClient() {
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Supabase server credentials not available")
  }
  return createClient(supabaseUrl, supabaseServiceKey)
}

// Create a client client (for client components)
export function getClientSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase client credentials not available")
  }
  return createClient(supabaseUrl, supabaseAnonKey)
}

// Check if Supabase is configured
export function isSupabaseConfigured() {
  return Boolean(supabaseUrl && (supabaseServiceKey || supabaseAnonKey))
}
