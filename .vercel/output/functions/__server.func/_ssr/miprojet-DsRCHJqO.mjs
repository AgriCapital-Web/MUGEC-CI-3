import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { D as DashboardHeader, M as MIPROJET_NAV, T as Table, j as TableHeader, k as TableRow, i as TableHead, g as TableBody, h as TableCell } from "./table-COkoqmNZ.mjs";
import { C as Card, c as CardHeader, d as CardTitle, b as CardDescription, a as CardContent } from "./card-WYnDsEnp.mjs";
import { B as Button } from "./button-BZr7_CTB.mjs";
import { I as Input } from "./input-DaEVlcQ1.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import { B as Badge } from "./badge-Bm8IJUvg.mjs";
import { S as Select, c as SelectTrigger, d as SelectValue, a as SelectContent, b as SelectItem } from "./select-DnWJAm4t.mjs";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent } from "./tabs-BnjCuFHn.mjs";
import { a0 as Sparkles, D as Download, t as ExternalLink, a9 as Wallet, o as CircleCheck, r as Clock, a2 as TrendingUp, e as Banknote, i as ChartPie, X as Search, z as Funnel, d as ArrowUpRight, a as ArrowDownRight } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, a as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, L as Legend, A as Area, d as PieChart, P as Pie, c as Cell, b as BarChart, B as Bar } from "../_libs/recharts.mjs";
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
import "./router-D_HcibeE.mjs";
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
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/radix-ui__react-tabs.mjs";
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
const PAGE = 50;
const COLORS = {
  primary: "#1e5ba8",
  teal: "#2baa8a",
  green: "#7cb342",
  amber: "#f59e0b"
};
function fmtFCFA(n) {
  return `${(n ?? 0).toLocaleString("fr-FR")} F`;
}
function MiProjetDashboard() {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = reactExports.useState(null);
  const [stats, setStats] = reactExports.useState(null);
  const [tx, setTx] = reactExports.useState([]);
  const [allTx, setAllTx] = reactExports.useState([]);
  const [page, setPage] = reactExports.useState(0);
  const [query, setQuery] = reactExports.useState("");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  reactExports.useEffect(() => {
    let active = true;
    (async () => {
      const {
        data: {
          user
        }
      } = await supabase.auth.getUser();
      if (!user) {
        navigate({
          to: "/login"
        });
        return;
      }
      const {
        data
      } = await supabase.from("user_roles").select("role").eq("user_id", user.id).eq("role", "super_admin").maybeSingle();
      if (!active) return;
      if (!data) {
        navigate({
          to: "/admin"
        });
        return;
      }
      setAuthorized(true);
    })();
    return () => {
      active = false;
    };
  }, [navigate]);
  reactExports.useEffect(() => {
    if (!authorized) return;
    supabase.rpc("miprojet_dashboard_stats").then(({
      data
    }) => {
      if (data) setStats(data);
    });
    supabase.from("transactions_miprojet").select("id, montant, statut, reference, created_at, date_virement").order("created_at", {
      ascending: false
    }).limit(1e3).then(({
      data
    }) => setAllTx(data || []));
  }, [authorized]);
  reactExports.useEffect(() => {
    supabase.from("transactions_miprojet").select("id, montant, statut, reference, created_at, date_virement").order("created_at", {
      ascending: false
    }).range(page * PAGE, page * PAGE + PAGE - 1).then(({
      data
    }) => setTx(data || []));
  }, [page]);
  const filtered = reactExports.useMemo(() => {
    const q = query.trim().toLowerCase();
    return tx.filter((t) => {
      if (statusFilter !== "all" && t.statut !== statusFilter) return false;
      if (!q) return true;
      return (t.reference || "").toLowerCase().includes(q) || t.id.toLowerCase().includes(q);
    });
  }, [tx, query, statusFilter]);
  const monthly = reactExports.useMemo(() => {
    const months = [];
    const now = /* @__PURE__ */ new Date();
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      months.push({
        key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`,
        label: d.toLocaleDateString("fr-FR", {
          month: "short"
        }),
        paye: 0,
        attente: 0,
        count: 0
      });
    }
    for (const t of allTx) {
      const d = new Date(t.created_at);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      const m = months.find((x) => x.key === key);
      if (!m) continue;
      m.count++;
      if (t.statut === "paye") m.paye += t.montant;
      else m.attente += t.montant;
    }
    return months;
  }, [allTx]);
  const splitData = reactExports.useMemo(() => [{
    name: "Part MiProjet",
    value: stats?.parts_miprojet_mois ?? 0,
    color: COLORS.primary
  }, {
    name: "Part Mutuelle",
    value: stats?.parts_mutuelle_mois ?? 0,
    color: COLORS.teal
  }], [stats]);
  const totalMois = (stats?.parts_miprojet_mois ?? 0) + (stats?.parts_mutuelle_mois ?? 0);
  const tauxConversion = (stats?.transactions_total ?? 0) > 0 ? Math.round((stats?.transactions_paye ?? 0) / (stats?.transactions_total ?? 1) * 100) : 0;
  if (authorized === null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center text-sm text-muted-foreground", children: "Vérification des droits…" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: {
    background: "var(--gradient-surface)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardHeader, { title: "Back-office Super Admin", nav: MIPROJET_NAV }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto max-w-7xl space-y-8 px-4 py-8 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl p-6 text-white shadow-2xl md:p-8", style: {
        background: "linear-gradient(135deg,#0e2f6b 0%,#1e5ba8 45%,#2580c4 75%,#2baa8a 100%)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-[#7cb342]/20 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-wrap items-start justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
              "Back-office MiProjet · Super Admin"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight md:text-4xl", children: "Tableau de bord revenus" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/80 md:text-base", children: "Supervision globale des revenus, splits automatiques et transactions MiProjet. Confidentiel — non visible côté MUGEC-CI." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", className: "bg-white text-[#1e5ba8] hover:bg-white/90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 h-4 w-4" }),
              " Exporter CSV"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "border-white/40 bg-white/10 text-white hover:bg-white/20", children: [
              "Admin MUGEC-CI ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "ml-2 h-4 w-4" })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-8 grid grid-cols-2 gap-3 md:grid-cols-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(HeroStat, { label: "Total cumulé", value: fmtFCFA(stats?.transactions_total), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(HeroStat, { label: "Payé", value: fmtFCFA(stats?.transactions_paye), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }), trend: "up" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(HeroStat, { label: "En attente", value: fmtFCFA(stats?.transactions_attente), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }), trend: "down" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(HeroStat, { label: "Taux conversion", value: `${tauxConversion}%`, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(KPICard, { label: "Part MiProjet (mois)", value: fmtFCFA(stats?.parts_miprojet_mois), sub: "20% des cotisations · split serveur", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "h-5 w-5" }), accent: COLORS.primary }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KPICard, { label: "Part Mutuelle (mois)", value: fmtFCFA(stats?.parts_mutuelle_mois), sub: "80% reversés à MUGEC-CI", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-5 w-5" }), accent: COLORS.teal }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KPICard, { label: "Sessions paiement OK", value: String(stats?.sessions_paiement ?? "—"), sub: "Webhooks confirmés", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5" }), accent: COLORS.green }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KPICard, { label: "Volume du mois", value: fmtFCFA(totalMois), sub: "MiProjet + Mutuelle", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }), accent: COLORS.amber })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Évolution des revenus" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "12 derniers mois — payé vs en attente" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "font-mono", children: [
              monthly.reduce((s, m) => s + m.count, 0),
              " tx"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: monthly, margin: {
            left: 0,
            right: 8,
            top: 8,
            bottom: 0
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "gPaye", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: COLORS.primary, stopOpacity: 0.45 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: COLORS.primary, stopOpacity: 0 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "gAttente", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: COLORS.amber, stopOpacity: 0.4 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: COLORS.amber, stopOpacity: 0 })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "hsl(var(--border))", opacity: 0.4 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "label", stroke: "hsl(var(--muted-foreground))", fontSize: 12 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "hsl(var(--muted-foreground))", fontSize: 12, tickFormatter: (v) => `${(v / 1e3).toFixed(0)}k` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => fmtFCFA(v), contentStyle: {
              background: "white",
              border: "1px solid hsl(var(--border))",
              borderRadius: 8
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: {
              fontSize: 12
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "paye", name: "Payé", stroke: COLORS.primary, strokeWidth: 2.5, fill: "url(#gPaye)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "attente", name: "En attente", stroke: COLORS.amber, strokeWidth: 2, fill: "url(#gAttente)" })
          ] }) }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartPie, { className: "h-4 w-4" }),
              " Répartition du mois"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Split MiProjet / Mutuelle" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-56 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: splitData, dataKey: "value", nameKey: "name", innerRadius: 50, outerRadius: 80, paddingAngle: 3, children: splitData.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: d.color }, d.name)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => fmtFCFA(v) })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: splitData.map((d) => {
              const pct = totalMois > 0 ? Math.round(d.value / totalMois * 100) : 0;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full", style: {
                    background: d.color
                  } }),
                  d.name
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-semibold", children: [
                  fmtFCFA(d.value),
                  " · ",
                  pct,
                  "%"
                ] })
              ] }, d.name);
            }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Volume de transactions / mois" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Nombre brut de transactions enregistrées" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-56 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: monthly, margin: {
          left: 0,
          right: 8,
          top: 8,
          bottom: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "hsl(var(--border))", opacity: 0.4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "label", stroke: "hsl(var(--muted-foreground))", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "hsl(var(--muted-foreground))", fontSize: 12, allowDecimals: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "white",
            border: "1px solid hsl(var(--border))",
            borderRadius: 8
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "count", name: "Transactions", fill: COLORS.teal, radius: [6, 6, 0, 0] })
        ] }) }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Transactions MiProjet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardDescription, { children: [
              PAGE,
              " par page · ordre antéchronologique"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Rechercher référence ou ID…", value: query, onChange: (e) => setQuery(e.target.value), className: "w-64 pl-8" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: statusFilter, onValueChange: setStatusFilter, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectTrigger, { className: "w-40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "mr-2 h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "Tous statuts" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "paye", children: "Payé" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "en_attente", children: "En attente" })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "table", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "table", children: "Tableau" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "cards", children: "Cartes" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "table", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-lg border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { className: "bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Référence" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Montant" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Statut" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Créée" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Virée" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 5, className: "py-10 text-center text-muted-foreground", children: "Aucune transaction" }) }) : filtered.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "hover:bg-muted/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs", children: t.reference || t.id.slice(0, 8) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right font-semibold", children: fmtFCFA(t.montant) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatutBadge, { statut: t.statut }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm text-muted-foreground", children: new Date(t.created_at).toLocaleDateString("fr-FR") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm text-muted-foreground", children: t.date_virement ? new Date(t.date_virement).toLocaleDateString("fr-FR") : "—" })
              ] }, t.id)) })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "cards", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: [
              filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "col-span-full py-8 text-center text-sm text-muted-foreground", children: "Aucune transaction" }),
              filtered.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-l-4", style: {
                borderLeftColor: t.statut === "paye" ? COLORS.green : COLORS.amber
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2 p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground truncate", children: t.reference || t.id.slice(0, 8) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StatutBadge, { statut: t.statut })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: fmtFCFA(t.montant) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  "Créée ",
                  new Date(t.created_at).toLocaleDateString("fr-FR"),
                  t.date_virement ? ` · Virée ${new Date(t.date_virement).toLocaleDateString("fr-FR")}` : ""
                ] })
              ] }) }, t.id))
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", disabled: page === 0, onClick: () => setPage((p) => Math.max(0, p - 1)), children: "← Précédent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
              "Page ",
              page + 1
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", disabled: tx.length < PAGE, onClick: () => setPage((p) => p + 1), children: "Suivant →" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function HeroStat({
  label,
  value,
  icon,
  trend
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-white/80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium uppercase tracking-wider", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-80", children: icon })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-baseline gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-white md:text-xl", children: value }),
      trend === "up" && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-emerald-300" }),
      trend === "down" && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownRight, { className: "h-4 w-4 text-amber-300" })
    ] })
  ] });
}
function KPICard({
  label,
  value,
  sub,
  icon,
  accent
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "relative overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-1", style: {
      background: `linear-gradient(90deg, ${accent}, ${accent}aa)`
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-2xl font-bold tracking-tight", children: value }),
        sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: sub })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white shadow", style: {
        background: accent
      }, children: icon })
    ] }) })
  ] });
}
function StatutBadge({
  statut
}) {
  if (statut === "paye") return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "border-0 bg-emerald-100 text-emerald-700 hover:bg-emerald-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mr-1 h-3 w-3" }),
    " Payé"
  ] });
  if (statut === "en_attente") return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "border-0 bg-amber-100 text-amber-700 hover:bg-amber-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "mr-1 h-3 w-3" }),
    " En attente"
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: statut });
}
export {
  MiProjetDashboard as component
};
