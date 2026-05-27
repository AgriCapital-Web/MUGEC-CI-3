import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as MemberAvatarImg } from "./MemberAvatar-BOXOZN_l.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./SiteFooter-BBtrihJd.mjs";
import { C as Card, a as CardContent } from "./card-WYnDsEnp.mjs";
import { B as Button } from "./button-BZr7_CTB.mjs";
import { B as Badge } from "./badge-Bm8IJUvg.mjs";
import { R as Route$a, u as useAuth } from "./router-D_HcibeE.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import { G as LoaderCircle, Z as ShieldAlert, _ as ShieldCheck, p as CircleUserRound } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-avatar.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
function Page() {
  const {
    matricule
  } = Route$a.useParams();
  const {
    user,
    loading
  } = useAuth();
  const nav = useNavigate();
  const [info, setInfo] = reactExports.useState(null);
  const [err, setErr] = reactExports.useState(null);
  const [busy, setBusy] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (loading) return;
    if (!user) {
      nav({
        to: "/login",
        search: {
          redirect: `/verifier/${matricule}`
        }
      });
      return;
    }
    (async () => {
      setBusy(true);
      setErr(null);
      const {
        data,
        error
      } = await supabase.rpc("member_public_info", {
        p_matricule: matricule
      });
      if (error) setErr("Impossible de vérifier ce matricule.");
      else if (!data) setErr("Matricule introuvable.");
      else setInfo(data);
      setBusy(false);
    })();
  }, [user, loading, matricule, nav]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto max-w-2xl px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex items-center gap-2 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/scanner", className: "underline", children: "← Nouveau scan" }) }),
      busy || loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin" }) }) : err ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col items-center gap-3 p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-10 w-10 text-destructive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: err }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Matricule : ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: matricule })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/scanner", children: "Réessayer" }) })
      ] }) }) : info ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-primary to-accent p-4 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium uppercase tracking-wider", children: "Carte vérifiée" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-28 w-24 shrink-0 overflow-hidden rounded-lg border bg-muted", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MemberAvatarImg, { src: info.photo_url, alt: `${info.prenoms} ${info.nom}`, className: "h-full w-full object-cover" }),
              !info.photo_url && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleUserRound, { className: "h-10 w-10" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "truncate text-xl font-bold", children: `${info.prenoms ?? ""} ${info.nom ?? ""}`.trim() || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-mono text-sm text-muted-foreground", children: info.matricule }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: info.statut === "actif" ? "default" : "secondary", children: (info.statut ?? "—").toUpperCase() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: (info.type_membre ?? "office").toUpperCase() })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-6 grid grid-cols-1 gap-3 border-t pt-4 text-sm sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Fonction", value: info.fonction }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Collectivité", value: info.collectivite }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Région", value: info.region }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Inscrit le", value: info.date_inscription ? new Date(info.date_inscription).toLocaleDateString("fr-FR") : "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 rounded-md bg-muted/50 p-3 text-xs text-muted-foreground", children: "Les informations financières (cotisations, prestations) ne sont jamais affichées via ce service de vérification." })
        ] })
      ] }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Field({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-0.5 font-medium", children: value || "—" })
  ] });
}
export {
  Page as component
};
