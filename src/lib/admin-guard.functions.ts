import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const ADMIN_ROLES = new Set<string>([
  "super_admin", "admin_national", "admin_regional", "admin_local", "agent_saisie",
  "president", "secretaire_general", "tresorier_national", "commissaire_comptes",
  "directeur_executif", "comite_controle", "conseil_sages", "secretaire_regional",
  "tresorier_regional", "delegue_section",
]);

/**
 * Server-side admin gate. Validates the user's JWT (via requireSupabaseAuth)
 * and reads roles using the user-scoped Supabase client (RLS-respecting).
 * Returns the canonical area the user is allowed to view.
 */
export const getAuthorizedArea = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context as { supabase: any; userId: string };
    const { data, error } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId);
    if (error) {
      return { area: "membre" as const, isSuperAdmin: false };
    }
    const roles = (data ?? []).map((r: { role: string }) => String(r.role));
    const isSuperAdmin = roles.includes("super_admin");
    const isAdmin = roles.some((r) => ADMIN_ROLES.has(r));
    if (isSuperAdmin) return { area: "miprojet" as const, isSuperAdmin: true };
    if (isAdmin) return { area: "admin" as const, isSuperAdmin: false };
    return { area: "membre" as const, isSuperAdmin: false };
  });
