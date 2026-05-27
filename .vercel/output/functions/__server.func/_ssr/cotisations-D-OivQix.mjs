import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as MembreLayout } from "./MembreLayout-DpHkgsVF.mjs";
import { C as Card, c as CardHeader, d as CardTitle, a as CardContent } from "./card-WYnDsEnp.mjs";
import { B as Badge } from "./badge-Bm8IJUvg.mjs";
import { B as Button } from "./button-BZr7_CTB.mjs";
import { I as Input } from "./input-DaEVlcQ1.mjs";
import { u as useAuth } from "./router-D_HcibeE.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import { a9 as Wallet, o as CircleCheck, r as Clock, a2 as TrendingUp, X as Search, G as LoaderCircle, S as Plus } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, b as BarChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, B as Bar } from "../_libs/recharts.mjs";
import "./MemberAvatar-BOXOZN_l.mjs";
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
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/lodash.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
function Page() {
  const {
    user
  } = useAuth();
  const [rows, setRows] = reactExports.useState([]);
  const [busy, setBusy] = reactExports.useState(true);
  const [q, setQ] = reactExports.useState("");
  const [filter, setFilter] = reactExports.useState("tous");
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
      } = await supabase.from("subscriptions").select("*").eq("member_id", member.id).order("created_at", {
        ascending: false
      });
      setRows(data ?? []);
      setBusy(false);
    })();
  }, [user]);
  const stats = reactExports.useMemo(() => {
    const paid = rows.filter((r) => r.statut_paiement === "paye");
    const pending = rows.filter((r) => r.statut_paiement !== "paye");
    return {
      total: paid.reduce((s, r) => s + (r.montant_total ?? 0), 0),
      paid: paid.length,
      pending: pending.length,
      pendingAmount: pending.reduce((s, r) => s + (r.montant_total ?? 0), 0)
    };
  }, [rows]);
  const chartData = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    const now = /* @__PURE__ */ new Date();
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const k = d.toLocaleDateString("fr-FR", {
        month: "short"
      });
      map.set(k, 0);
    }
    rows.filter((r) => r.statut_paiement === "paye" && r.paid_at).forEach((r) => {
      const d = new Date(r.paid_at);
      const k = d.toLocaleDateString("fr-FR", {
        month: "short"
      });
      if (map.has(k)) map.set(k, (map.get(k) ?? 0) + (r.montant_total ?? 0));
    });
    return Array.from(map.entries()).map(([mois, montant]) => ({
      mois,
      montant
    }));
  }, [rows]);
  const filtered = reactExports.useMemo(() => {
    return rows.filter((r) => {
      if (filter !== "tous" && r.statut_paiement !== filter) return false;
      if (!q) return true;
      const s = q.toLowerCase();
      return r.type.toLowerCase().includes(s) || (r.periode ?? "").toLowerCase().includes(s) || (r.reference_transaction ?? "").toLowerCase().includes(s) || (r.operateur ?? "").toLowerCase().includes(s);
    });
  }, [rows, q, filter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MembreLayout, { title: "Mes cotisations", subtitle: "Historique de vos paiements et adhésions", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-2 h-4 w-4" }),
    " Nouveau paiement"
  ] }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Total cotisé", value: `${stats.total.toLocaleString("fr-FR")} F`, icon: Wallet, tone: "primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Paiements validés", value: String(stats.paid), icon: CircleCheck, tone: "success" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "En attente", value: String(stats.pending), icon: Clock, tone: "warning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Montant en attente", value: `${stats.pendingAmount.toLocaleString("fr-FR")} F`, icon: TrendingUp, tone: "muted" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6 shadow-[var(--shadow-soft)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Évolution sur 12 mois" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Montant cotisé par mois" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: chartData, margin: {
        top: 10,
        right: 10,
        left: 0,
        bottom: 0
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--color-border)", vertical: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "mois", stroke: "var(--color-muted-foreground)", fontSize: 11 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "var(--color-muted-foreground)", fontSize: 11, tickFormatter: (v) => `${(v / 1e3).toFixed(0)}k` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { cursor: {
          fill: "var(--color-muted)",
          opacity: 0.4
        }, contentStyle: {
          background: "var(--color-card)",
          border: "1px solid var(--color-border)",
          borderRadius: 8,
          fontSize: 12
        }, formatter: (v) => [`${v.toLocaleString("fr-FR")} F`, "Montant"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "montant", fill: "var(--color-primary)", radius: [6, 6, 0, 0] })
      ] }) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6 shadow-[var(--shadow-soft)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-col gap-3 border-b sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Historique" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Rechercher…", className: "h-9 w-full pl-9 sm:w-56" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-md border bg-muted/30 p-0.5", children: ["tous", "paye", "en_attente"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(k), className: `rounded px-3 py-1 text-xs font-medium capitalize transition ${filter === k ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`, children: k === "tous" ? "Tous" : k === "paye" ? "Payés" : "En attente" }, k)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: busy ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-primary" }) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 text-center text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "mx-auto mb-2 h-10 w-10 opacity-30" }),
        "Aucune cotisation"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b bg-muted/30 text-left text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Période" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Montant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Opérateur" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Référence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Statut" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b transition hover:bg-muted/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium capitalize", children: r.type }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: r.periode ?? "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 font-semibold tabular-nums", children: [
              (r.montant_total ?? 0).toLocaleString("fr-FR"),
              " F"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: r.operateur ?? "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-xs text-muted-foreground", children: r.reference_transaction ?? "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: new Date(r.paid_at ?? r.created_at).toLocaleDateString("fr-FR") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: r.statut_paiement === "paye" ? "default" : "secondary", className: "capitalize", children: r.statut_paiement.replace("_", " ") }) })
          ] }, r.id)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y md:hidden", children: filtered.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold capitalize", children: r.type }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                r.periode ?? "—",
                " ·",
                " ",
                new Date(r.paid_at ?? r.created_at).toLocaleDateString("fr-FR")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: r.statut_paiement === "paye" ? "default" : "secondary", className: "shrink-0 text-[10px] capitalize", children: r.statut_paiement.replace("_", " ") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-end justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: r.operateur ?? "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono", children: r.reference_transaction ?? "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg font-bold tabular-nums", children: [
              (r.montant_total ?? 0).toLocaleString("fr-FR"),
              " F"
            ] })
          ] })
        ] }, r.id)) })
      ] }) })
    ] })
  ] });
}
function StatCard({
  label,
  value,
  icon: Icon,
  tone
}) {
  const tones = {
    primary: "from-primary/15 to-primary/5 text-primary",
    success: "from-emerald-500/15 to-emerald-500/5 text-emerald-600",
    warning: "from-amber-500/15 to-amber-500/5 text-amber-600",
    muted: "from-muted to-muted/30 text-muted-foreground"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "relative overflow-hidden shadow-[var(--shadow-soft)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute right-0 top-0 h-20 w-20 rounded-full bg-gradient-to-br opacity-50 blur-2xl ${tones[tone]}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "relative p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-lg bg-gradient-to-br p-2 ${tones[tone]}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-2xl font-bold tabular-nums", children: value })
    ] })
  ] });
}
export {
  Page as component
};
