import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";
import { ADMIN_ROLES } from "@/lib/auth";

export const Route = createFileRoute("/membre")({
  ssr: false,
  beforeLoad: async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) {
      throw redirect({ to: "/login" });
    }

    const { data: path, error } = await supabase.rpc("current_user_dashboard_path");
    if (!error && typeof path === "string") {
      if (path !== "/membre") {
        throw redirect({ to: path });
      }
      return;
    }

    // Fallback if the RPC is unavailable for any reason.
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id);

    const adminRolesSet = new Set(ADMIN_ROLES);
    const isSuperAdmin = (roles ?? []).some((r) => String(r.role) === "super_admin");
    const hasAdminRole = (roles ?? []).some((r) => adminRolesSet.has(String(r.role)));
    if (hasAdminRole) {
      if (isSuperAdmin) {
        throw redirect({ to: "/admin/miprojet" });
      }
      throw redirect({ to: "/admin" });
    }
  },
  component: () => <Outlet />,
});
