import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { M as MembreLayout } from "./MembreLayout-DpHkgsVF.mjs";
import { C as Card, c as CardHeader, d as CardTitle, a as CardContent } from "./card-WYnDsEnp.mjs";
import { B as Button } from "./button-BZr7_CTB.mjs";
import { I as Input } from "./input-DaEVlcQ1.mjs";
import { B as Badge } from "./badge-Bm8IJUvg.mjs";
import { u as useAuth } from "./router-D_HcibeE.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import { x as FileText, s as CreditCard, X as Search, G as LoaderCircle, y as FolderOpen, t as ExternalLink, D as Download, U as QrCode } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./MemberAvatar-BOXOZN_l.mjs";
import "../_libs/radix-ui__react-avatar.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/radix-ui__react-separator.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/radix-ui__react-tooltip.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
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
import "../_libs/supabase__functions-js.mjs";
function Page() {
  const {
    user
  } = useAuth();
  const [docs, setDocs] = reactExports.useState([]);
  const [busy, setBusy] = reactExports.useState(true);
  const [q, setQ] = reactExports.useState("");
  reactExports.useEffect(() => {
    (async () => {
      if (!user) return;
      setBusy(true);
      const {
        data: member
      } = await supabase.from("members").select("id").eq("user_id", user.id).maybeSingle();
      if (!member) {
        setBusy(false);
        return;
      }
      const {
        data
      } = await supabase.from("documents").select("*").eq("member_id", member.id).order("created_at", {
        ascending: false
      });
      setDocs(data ?? []);
      setBusy(false);
    })();
  }, [user]);
  const filtered = reactExports.useMemo(() => {
    if (!q) return docs;
    const s = q.toLowerCase();
    return docs.filter((d) => d.type.toLowerCase().includes(s) || (d.title ?? "").toLowerCase().includes(s) || (d.file_name ?? "").toLowerCase().includes(s));
  }, [docs, q]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MembreLayout, { title: "Mes documents", subtitle: "Téléchargez votre carte, votre fiche officielle et vos pièces justificatives", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { icon: FileText, title: "Fiche officielle", description: "Téléchargez votre fiche d'inscription avec QR Code et filigrane MUGEC-CI.", to: "/membre/carte", gradient: "primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { icon: CreditCard, title: "Carte de membre", description: "Carte format CR80 imprimable recto/verso avec QR code de vérification.", to: "/membre/carte", gradient: "accent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6 shadow-[var(--shadow-soft)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-col gap-3 border-b sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Autres documents" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Justificatifs, attestations et pièces téléversées" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Rechercher un document…", className: "h-9 w-full pl-9 sm:w-64" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: busy ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-primary" }) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 text-center text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "mx-auto mb-2 h-10 w-10 opacity-30" }),
        q ? "Aucun résultat" : "Aucun document"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b bg-muted/30 text-left text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Document" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium text-right", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b transition hover:bg-muted/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate font-medium", children: d.title ?? d.file_name ?? "Document" }),
                d.file_name && d.title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs text-muted-foreground", children: d.file_name })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "capitalize", children: d.type }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: new Date(d.created_at).toLocaleDateString("fr-FR") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: "ghost", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: d.url, target: "_blank", rel: "noreferrer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "mr-1 h-3.5 w-3.5" }),
              " Ouvrir"
            ] }) }) })
          ] }, d.id)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y md:hidden", children: filtered.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: d.url, target: "_blank", rel: "noreferrer", className: "flex items-center gap-3 p-4 transition hover:bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate font-medium", children: d.title ?? d.file_name ?? "Document" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", children: d.type }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(d.created_at).toLocaleDateString("fr-FR") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4 shrink-0 text-muted-foreground" })
        ] }, d.id)) })
      ] }) })
    ] })
  ] });
}
function FeatureCard({
  icon: Icon,
  title,
  description,
  to,
  gradient
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "group relative overflow-hidden border-0 shadow-[var(--shadow-elegant)] transition hover:-translate-y-1 hover:shadow-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10 transition group-hover:opacity-20", style: {
      background: gradient === "primary" ? "var(--gradient-primary)" : "var(--gradient-accent)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 h-32 w-32 rounded-full opacity-20 blur-3xl", style: {
      background: gradient === "primary" ? "var(--color-primary)" : "var(--color-accent)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "relative p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg", style: {
        background: gradient === "primary" ? "var(--gradient-primary)" : "var(--gradient-accent)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-semibold tracking-tight", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-5", variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 h-4 w-4" }),
        " Télécharger"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "absolute bottom-4 right-4 h-16 w-16 text-foreground/5" })
  ] });
}
export {
  Page as component
};
