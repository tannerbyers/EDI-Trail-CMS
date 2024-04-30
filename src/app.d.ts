import { SupabaseClient, Session } from "@supabase/supabase-js"
import { Database } from "./DatabaseDefinitions"

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient<Database>
      supabaseServiceRole: SupabaseClient<Database>
      getSession(): Promise<Session | null>
    }
    interface PageData {
      session: Session | null
    }
    // interface Error {}
    // interface Platform {}
    // TODO: Something about env variables needs to be set here with Platform. Didn't really understand the instructions here on step 3 https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/#deploy-with-cloudflare-pages
  }
}

export { }
