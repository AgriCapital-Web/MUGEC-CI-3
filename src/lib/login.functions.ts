import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { normalizeDashboardPath } from "@/lib/auth-routing";

const inputSchema = z.object({
  identifier: z.string().trim().min(3).max(255),
  password: z.string().min(1).max(200),
});

/**
 * Server-side login by identifier (phone, admin login, or email).
 *
 * Returns BOTH the session tokens and the canonical dashboard path for the
 * authenticated user, computed server-side from `user_roles` via the
 * `dashboard_path_for(uuid)` function. This eliminates the race condition
 * where `supabase.rpc("current_user_dashboard_path")` was called from the
 * browser before `setSession()` had finished propagating, causing every
 * profile (incl. admins) to be redirected to `/membre`.
 */
export const loginWithIdentifier = createServerFn({ method: "POST" })
  .inputValidator((input) => inputSchema.parse(input))
  .handler(async ({ data }) => {
    const generic = { ok: false as const, error: "invalid_credentials" };

    let email: string | null = null;
    const identifier = data.identifier.trim();

    if (identifier.includes("@")) {
      email = identifier;
    } else {
      const { data: resolved, error } = await supabaseAdmin.rpc(
        "resolve_login_email",
        { p_identifier: identifier },
      );
      if (error) {
        console.error("loginWithIdentifier: resolve failed", error instanceof Error ? error.message : String(error));
      }
      if (typeof resolved === "string" && resolved.length > 0) {
        email = resolved;
      }
    }

    if (!email) {
      const digits = identifier.replace(/[^0-9]/g, "");
      if (digits.length >= 6) {
        const { data: memberData, error: memberError } = await supabaseAdmin
          .from("members")
          .select("email")
          .eq("telephone", digits)
          .limit(1)
          .maybeSingle();
        if (!memberError && memberData?.email) {
          email = memberData.email;
        }
      }
    }

    if (!email) return generic;

    const SUPABASE_URL = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;
    const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
      console.error("loginWithIdentifier: missing Supabase runtime configuration");
      return generic;
    }
    const authClient = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
    });

    const { data: signIn, error: signInErr } = await authClient.auth.signInWithPassword({
      email,
      password: data.password,
    });
    if (signInErr || !signIn.session || !signIn.user) return generic;

    // Compute the dashboard path server-side from this user's roles.
    let dashboard_path = "/membre";
    try {
      const { data: path, error: pathErr } = await supabaseAdmin.rpc(
        "dashboard_path_for",
        { _user_id: signIn.user.id },
      );
      if (!pathErr) {
        dashboard_path = normalizeDashboardPath(path);
      }
    } catch (err) {
      console.error("loginWithIdentifier: dashboard_path_for failed", err instanceof Error ? err.message : String(err));
    }

    return {
      ok: true as const,
      access_token: signIn.session.access_token,
      refresh_token: signIn.session.refresh_token,
      dashboard_path,
    };
  });
