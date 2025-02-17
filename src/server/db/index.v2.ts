import { env } from "@/env";
import type { Database } from "@/server/db/types";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR update.
 */
const globalDB = globalThis as unknown as {
  connection: SupabaseClient<Database> | undefined;
};

const supabaseDB =
  globalDB.connection ??
  createClient<Database>(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);

if (env.NODE_ENV !== "production") globalDB.connection = supabaseDB;

export const db = supabaseDB;
