import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, e as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { H as redirect } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const isSupabaseConfigured = Boolean(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqZ3BpcHhtYWZ6eHFxa3dhaXdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyMjAzMjUsImV4cCI6MjA5NDc5NjMyNX0.R0aa8YP5HTO_BPlt0OE9GdC5jzVffs3qzF3Tn8TIFGk"
);
async function getCurrentSupabaseUser() {
  if (!isSupabaseConfigured) return null;
  const storedUser = readStoredSession()?.user ?? null;
  const freshUser = supabase.auth.getSession().then(({ data }) => data.session?.user ?? storedUser).catch(() => storedUser);
  const timeout = new Promise((resolve) => {
    window.setTimeout(() => resolve(storedUser), 800);
  });
  return Promise.race([freshUser, timeout]);
}
async function getCurrentDashboardPath() {
  if (!isSupabaseConfigured) return null;
  try {
    const { data, error } = await supabase.rpc("current_user_dashboard_path");
    if (error || !data) return null;
    return typeof data === "string" ? data : String(data);
  } catch {
    return null;
  }
}
function readStoredSession() {
  if (typeof window === "undefined") return null;
  try {
    const ref = new URL("https://bjgpipxmafzxqqkwaiwq.supabase.co").hostname.split(".")[0];
    const key = `sb-${ref}-auth-token`;
    const raw = window.localStorage.getItem(key) ?? Object.entries(window.localStorage).find(([k]) => k.startsWith("sb-") && k.endsWith("-auth-token"))?.[1];
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed?.access_token && parsed?.user ? parsed : null;
  } catch {
    return null;
  }
}
const AuthCtx = reactExports.createContext({
  user: null,
  session: null,
  roles: [],
  isAdmin: false,
  isSuperAdmin: false,
  loading: false,
  signOut: async () => {
  }
});
const ADMIN_ROLES = [
  "super_admin",
  "admin_national",
  "admin_regional",
  "admin_local",
  "agent_saisie",
  "president",
  "secretaire_general",
  "tresorier_national",
  "commissaire_comptes",
  "directeur_executif",
  "comite_controle",
  "conseil_sages",
  "secretaire_regional",
  "tresorier_regional",
  "delegue_section"
];
function AuthProvider({ children }) {
  const [session, setSession] = reactExports.useState(() => readStoredSession());
  const [roles, setRoles] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let mounted = true;
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }
    setSession(readStoredSession());
    const sessionPromise = supabase.auth.getSession();
    sessionPromise.then(
      ({ data }) => {
        if (!mounted) return;
        setSession(data.session ?? readStoredSession());
        setLoading(false);
      },
      () => {
        if (mounted) setLoading(false);
      }
    );
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      setLoading(false);
    });
    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);
  reactExports.useEffect(() => {
    let mounted = true;
    if (!session?.user || !isSupabaseConfigured) {
      setRoles([]);
      return;
    }
    supabase.from("user_roles").select("role").eq("user_id", session.user.id).then(
      ({ data, error }) => {
        if (!mounted) return;
        if (error || !data) {
          setRoles([]);
          return;
        }
        setRoles(data.map((row) => String(row.role)));
      },
      () => {
        if (mounted) setRoles([]);
      }
    );
    return () => {
      mounted = false;
    };
  }, [session?.user?.id]);
  const isAdmin = roles.some((role) => ADMIN_ROLES.includes(role));
  const isSuperAdmin = roles.includes("super_admin");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AuthCtx.Provider,
    {
      value: {
        user: session?.user ?? null,
        session,
        roles,
        isAdmin,
        isSuperAdmin,
        loading,
        signOut: async () => {
          try {
            await supabase.auth.signOut();
          } catch {
          }
          try {
            if (typeof window !== "undefined") {
              Object.keys(window.localStorage).filter((k) => k.startsWith("sb-") && k.endsWith("-auth-token")).forEach((k) => window.localStorage.removeItem(k));
            }
          } catch {
          }
          setSession(null);
          setRoles([]);
          if (typeof window !== "undefined") {
            window.location.assign("/login");
          }
        }
      },
      children
    }
  );
}
const useAuth = () => reactExports.useContext(AuthCtx);
const appCss = "/assets/styles-C-pOwZJZ.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$q = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MUGEC-CI — Mutuelle Générale du Personnel des Collectivités" },
      { name: "description", content: "MUGEC-CI est une plateforme dédiée aux agents des collectivités territoriales, facilitant l’accès aux informations, services et démarches liés à la mutuelle." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "MUGEC-CI — Mutuelle Générale du Personnel des Collectivités" },
      { property: "og:description", content: "MUGEC-CI est une plateforme dédiée aux agents des collectivités territoriales, facilitant l’accès aux informations, services et démarches liés à la mutuelle." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "MUGEC-CI — Mutuelle Générale du Personnel des Collectivités" },
      { name: "twitter:description", content: "MUGEC-CI est une plateforme dédiée aux agents des collectivités territoriales, facilitant l’accès aux informations, services et démarches liés à la mutuelle." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/v4bzOAwB95UUgZRmpFou7lsqiq03/social-images/social-1779636555574-MUGEC-CI.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/v4bzOAwB95UUgZRmpFou7lsqiq03/social-images/social-1779636555574-MUGEC-CI.webp" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$q.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) });
}
const BASE_URL = "";
const Route$p = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/inscription", changefreq: "monthly", priority: "0.9" },
          { path: "/login", changefreq: "yearly", priority: "0.5" },
          { path: "/actualites", changefreq: "weekly", priority: "0.8" },
          { path: "/opportunites", changefreq: "weekly", priority: "0.7" },
          { path: "/forum", changefreq: "daily", priority: "0.7" },
          { path: "/faq", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "yearly", priority: "0.5" },
          { path: "/scanner", changefreq: "yearly", priority: "0.4" }
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$o = () => import("./scanner-aGaLLnjQ.mjs");
const Route$o = createFileRoute("/scanner")({
  component: lazyRouteComponent($$splitComponentImporter$o, "component"),
  head: () => ({
    meta: [{
      title: "Scanner un QR Code — MUGEC-CI"
    }, {
      name: "description",
      content: "Vérifiez l'authenticité d'une carte de membre MUGEC-CI en scannant le QR code."
    }]
  })
});
const $$splitComponentImporter$n = () => import("./reset-password-fz_xFEh-.mjs");
const Route$n = createFileRoute("/reset-password")({
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./opportunites-UBL_QLDW.mjs");
const Route$m = createFileRoute("/opportunites")({
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./membre-BFsOu0JM.mjs");
const Route$l = createFileRoute("/membre")({
  ssr: false,
  beforeLoad: async () => {
    const {
      data: {
        session
      }
    } = await supabase.auth.getSession();
    if (!session?.user) {
      throw redirect({
        to: "/login"
      });
    }
    const {
      data: path,
      error
    } = await supabase.rpc("current_user_dashboard_path");
    if (!error && typeof path === "string") {
      if (path !== "/membre") {
        throw redirect({
          to: path
        });
      }
      return;
    }
    const {
      data: roles
    } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id);
    const adminRolesSet = new Set(ADMIN_ROLES);
    const isSuperAdmin = (roles ?? []).some((r) => String(r.role) === "super_admin");
    const hasAdminRole = (roles ?? []).some((r) => adminRolesSet.has(String(r.role)));
    if (hasAdminRole) {
      if (isSuperAdmin) {
        throw redirect({
          to: "/admin/miprojet"
        });
      }
      throw redirect({
        to: "/admin"
      });
    }
  },
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./login-B0iV0aev.mjs");
const Route$k = createFileRoute("/login")({
  beforeLoad: async () => {
    const {
      data: {
        session
      }
    } = await supabase.auth.getSession();
    if (session?.user) {
      const redirectPath = await getCurrentDashboardPath();
      if (redirectPath) {
        throw redirect({
          to: redirectPath
        });
      }
    }
  },
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./inscription-C5Q-Zu1x.mjs");
const Route$j = createFileRoute("/inscription")({
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./forum-CWyy9lgb.mjs");
const Route$i = createFileRoute("/forum")({
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./faq-Aqs1iV8A.mjs");
const Route$h = createFileRoute("/faq")({
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./contact-MIOQ-48d.mjs");
const Route$g = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$g, "component"),
  head: () => ({
    meta: [{
      title: "Contact — MUGEC-CI"
    }, {
      name: "description",
      content: "Contactez la MUGEC-CI. Envoyez-nous un message, nous vous répondrons rapidement."
    }]
  })
});
const $$splitComponentImporter$f = () => import("./admin-BFsOu0JM.mjs");
const Route$f = createFileRoute("/admin")({
  ssr: false,
  beforeLoad: async () => {
    const {
      data: {
        session
      }
    } = await supabase.auth.getSession();
    if (!session?.user) {
      throw redirect({
        to: "/login"
      });
    }
    const {
      data: path,
      error
    } = await supabase.rpc("current_user_dashboard_path");
    if (!error && typeof path === "string") {
      if (path === "/membre") {
        throw redirect({
          to: "/membre"
        });
      }
      return;
    }
    const {
      data: roles
    } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id);
    const allowed = /* @__PURE__ */ new Set(["super_admin", "admin_national", "admin_regional", "admin_local", "agent_saisie", "president", "secretaire_general", "tresorier_national", "commissaire_comptes", "directeur_executif", "comite_controle", "conseil_sages", "secretaire_regional", "tresorier_regional", "delegue_section"]);
    const isAdmin = (roles ?? []).some((r) => allowed.has(String(r.role)));
    if (!isAdmin) {
      throw redirect({
        to: "/membre"
      });
    }
  },
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./actualites-BVCt8GzN.mjs");
const Route$e = createFileRoute("/actualites")({
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./index-rI0oOAgY.mjs");
const Route$d = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./index-ClTWQfz8.mjs");
const Route$c = createFileRoute("/membre/")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./index-BoG6eXh9.mjs");
const Route$b = createFileRoute("/admin/")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./verifier._matricule-QpJZn4Xf.mjs");
const Route$a = createFileRoute("/verifier/$matricule")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./profil-C2sYrGTn.mjs");
const Route$9 = createFileRoute("/membre/profil")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./fiche-CNBpA4Iy.mjs");
const Route$8 = createFileRoute("/membre/fiche")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./documents-CghZ0Clq.mjs");
const Route$7 = createFileRoute("/membre/documents")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./cotisations-D-OivQix.mjs");
const Route$6 = createFileRoute("/membre/cotisations")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./carte-C6jsZR1v.mjs");
const Route$5 = createFileRoute("/membre/carte")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./prestations-Dz64uqBH.mjs");
const Route$4 = createFileRoute("/admin/prestations")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./notifications-DbcEpUHQ.mjs");
const Route$3 = createFileRoute("/admin/notifications")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./miprojet-DsRCHJqO.mjs");
const Route$2 = createFileRoute("/admin/miprojet")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./membres-C2Lq1VKz.mjs");
const Route$1 = createFileRoute("/admin/membres")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./cotisations-CaoBZu_4.mjs");
const Route = createFileRoute("/admin/cotisations")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$p.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$q
});
const ScannerRoute = Route$o.update({
  id: "/scanner",
  path: "/scanner",
  getParentRoute: () => Route$q
});
const ResetPasswordRoute = Route$n.update({
  id: "/reset-password",
  path: "/reset-password",
  getParentRoute: () => Route$q
});
const OpportunitesRoute = Route$m.update({
  id: "/opportunites",
  path: "/opportunites",
  getParentRoute: () => Route$q
});
const MembreRoute = Route$l.update({
  id: "/membre",
  path: "/membre",
  getParentRoute: () => Route$q
});
const LoginRoute = Route$k.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$q
});
const InscriptionRoute = Route$j.update({
  id: "/inscription",
  path: "/inscription",
  getParentRoute: () => Route$q
});
const ForumRoute = Route$i.update({
  id: "/forum",
  path: "/forum",
  getParentRoute: () => Route$q
});
const FaqRoute = Route$h.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$q
});
const ContactRoute = Route$g.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$q
});
const AdminRoute = Route$f.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$q
});
const ActualitesRoute = Route$e.update({
  id: "/actualites",
  path: "/actualites",
  getParentRoute: () => Route$q
});
const IndexRoute = Route$d.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$q
});
const MembreIndexRoute = Route$c.update({
  id: "/",
  path: "/",
  getParentRoute: () => MembreRoute
});
const AdminIndexRoute = Route$b.update({
  id: "/",
  path: "/",
  getParentRoute: () => AdminRoute
});
const VerifierMatriculeRoute = Route$a.update({
  id: "/verifier/$matricule",
  path: "/verifier/$matricule",
  getParentRoute: () => Route$q
});
const MembreProfilRoute = Route$9.update({
  id: "/profil",
  path: "/profil",
  getParentRoute: () => MembreRoute
});
const MembreFicheRoute = Route$8.update({
  id: "/fiche",
  path: "/fiche",
  getParentRoute: () => MembreRoute
});
const MembreDocumentsRoute = Route$7.update({
  id: "/documents",
  path: "/documents",
  getParentRoute: () => MembreRoute
});
const MembreCotisationsRoute = Route$6.update({
  id: "/cotisations",
  path: "/cotisations",
  getParentRoute: () => MembreRoute
});
const MembreCarteRoute = Route$5.update({
  id: "/carte",
  path: "/carte",
  getParentRoute: () => MembreRoute
});
const AdminPrestationsRoute = Route$4.update({
  id: "/prestations",
  path: "/prestations",
  getParentRoute: () => AdminRoute
});
const AdminNotificationsRoute = Route$3.update({
  id: "/notifications",
  path: "/notifications",
  getParentRoute: () => AdminRoute
});
const AdminMiprojetRoute = Route$2.update({
  id: "/miprojet",
  path: "/miprojet",
  getParentRoute: () => AdminRoute
});
const AdminMembresRoute = Route$1.update({
  id: "/membres",
  path: "/membres",
  getParentRoute: () => AdminRoute
});
const AdminCotisationsRoute = Route.update({
  id: "/cotisations",
  path: "/cotisations",
  getParentRoute: () => AdminRoute
});
const AdminRouteChildren = {
  AdminCotisationsRoute,
  AdminMembresRoute,
  AdminMiprojetRoute,
  AdminNotificationsRoute,
  AdminPrestationsRoute,
  AdminIndexRoute
};
const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
const MembreRouteChildren = {
  MembreCarteRoute,
  MembreCotisationsRoute,
  MembreDocumentsRoute,
  MembreFicheRoute,
  MembreProfilRoute,
  MembreIndexRoute
};
const MembreRouteWithChildren = MembreRoute._addFileChildren(MembreRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  ActualitesRoute,
  AdminRoute: AdminRouteWithChildren,
  ContactRoute,
  FaqRoute,
  ForumRoute,
  InscriptionRoute,
  LoginRoute,
  MembreRoute: MembreRouteWithChildren,
  OpportunitesRoute,
  ResetPasswordRoute,
  ScannerRoute,
  SitemapDotxmlRoute,
  VerifierMatriculeRoute
};
const routeTree = Route$q._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$a as R,
  getCurrentSupabaseUser as a,
  getCurrentDashboardPath as g,
  isSupabaseConfigured as i,
  router as r,
  useAuth as u
};
