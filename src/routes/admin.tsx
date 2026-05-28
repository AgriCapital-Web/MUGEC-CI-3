import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";
import { getAuthorizedArea } from "@/lib/admin-guard.functions";

export const Route = createFileRoute("/admin")({
  ssr: false,
  beforeLoad: async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) {
      throw redirect({ to: "/login" });
    }

    // Server-side role verification (auth middleware validates the JWT and
    // role lookup runs through the user-scoped Supabase client / RLS).
    try {
      const result = await getAuthorizedArea();
      if (result.area === "membre") {
        throw redirect({ to: "/membre" });
      }
      // super_admin can access /admin as well; no extra redirect needed.
      return;
    } catch (e: any) {
      // Re-throw router redirects
      if (e && typeof e === "object" && ("to" in e || "href" in e || "statusCode" in e)) throw e;
      throw redirect({ to: "/login" });
    }
  },
  component: () => <Outlet />,
});
