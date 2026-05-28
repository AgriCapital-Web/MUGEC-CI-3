import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";
import { getAuthorizedArea } from "@/lib/admin-guard.functions";
import { areaToDashboardPath } from "@/lib/auth-routing";

export const Route = createFileRoute("/membre")({
  ssr: false,
  beforeLoad: async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) {
      throw redirect({ to: "/login" });
    }

    const area = await getAuthorizedArea();
    const path = areaToDashboardPath(area.area);
    if (path !== "/membre") {
      throw redirect({ to: path });
    }
  },
  component: () => <Outlet />,
});
