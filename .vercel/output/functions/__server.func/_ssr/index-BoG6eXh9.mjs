import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as Avatar, M as MemberAvatarImage, a as AvatarFallback } from "./MemberAvatar-BOXOZN_l.mjs";
import { D as DashboardHeader, A as ADMIN_NAV, T as Table, j as TableHeader, k as TableRow, i as TableHead, g as TableBody, h as TableCell, a as DropdownMenu, f as DropdownMenuTrigger, b as DropdownMenuContent, d as DropdownMenuLabel, c as DropdownMenuItem, e as DropdownMenuSeparator } from "./table-COkoqmNZ.mjs";
import { C as Card, c as CardHeader, b as CardDescription, d as CardTitle, a as CardContent } from "./card-WYnDsEnp.mjs";
import { B as Button } from "./button-BZr7_CTB.mjs";
import { I as Input } from "./input-DaEVlcQ1.mjs";
import { B as Badge } from "./badge-Bm8IJUvg.mjs";
import { D as Dialog, a as DialogContent, d as DialogHeader, e as DialogTitle, c as DialogFooter } from "./dialog-8pCoG2m-.mjs";
import { L as Label } from "./label-D5ksbt7L.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { a0 as Sparkles, A as Activity, a8 as Users, a6 as UserCheck, a7 as UserMinus, a9 as Wallet, w as FileCheck, d as ArrowUpRight, X as Search, E as Ellipsis, u as Eye } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, a as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, A as Area, d as PieChart, P as Pie, c as Cell } from "../_libs/recharts.mjs";
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
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__react-label.mjs";
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
const STATUTS = ["actif", "en_attente", "suspendu", "decede", "marie", "licencie", "assiste", "retraite"];
function AdminDashboard() {
  const [stats, setStats] = reactExports.useState(null);
  const [members, setMembers] = reactExports.useState([]);
  const [page, setPage] = reactExports.useState(0);
  const [search, setSearch] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(true);
  const [selected, setSelected] = reactExports.useState(null);
  const [editOpen, setEditOpen] = reactExports.useState(false);
  const [editData, setEditData] = reactExports.useState(null);
  const [trend, setTrend] = reactExports.useState([]);
  async function loadStats() {
    const {
      data,
      error
    } = await supabase.rpc("admin_dashboard_stats");
    if (!error && data) setStats(data);
  }
  async function loadMembers() {
    setLoading(true);
    let q = supabase.from("members").select("id, matricule, nom, prenoms, telephone, email, statut, created_at, photo_url").order("created_at", {
      ascending: false
    }).range(page * PAGE, page * PAGE + PAGE - 1);
    if (search.trim()) {
      const s = `%${search.trim()}%`;
      q = q.or(`nom.ilike.${s},prenoms.ilike.${s},telephone.ilike.${s},matricule.ilike.${s},email.ilike.${s}`);
    }
    const {
      data,
      error
    } = await q;
    if (error) toast.error(error.message);
    else setMembers(data || []);
    setLoading(false);
  }
  async function loadTrend() {
    const now = /* @__PURE__ */ new Date();
    const buckets = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      buckets.push({
        mois: d.toLocaleDateString("fr-FR", {
          month: "short"
        }),
        key,
        inscriptions: 0,
        cotisations: 0
      });
    }
    const from = new Date(now.getFullYear(), now.getMonth() - 5, 1).toISOString();
    const [{
      data: ins
    }, {
      data: cot
    }] = await Promise.all([supabase.from("members").select("created_at").gte("created_at", from), supabase.from("cotisations").select("montant, created_at").gte("created_at", from).limit(5e3)]);
    (ins ?? []).forEach((r) => {
      const k = r.created_at?.slice(0, 7);
      const b = buckets.find((x) => x.key === k);
      if (b) b.inscriptions += 1;
    });
    (cot ?? []).forEach((r) => {
      const k = r.created_at?.slice(0, 7);
      const b = buckets.find((x) => x.key === k);
      if (b) b.cotisations += Number(r.montant) || 0;
    });
    setTrend(buckets.map(({
      mois,
      inscriptions,
      cotisations
    }) => ({
      mois,
      inscriptions,
      cotisations
    })));
  }
  reactExports.useEffect(() => {
    loadStats();
    loadTrend();
  }, []);
  reactExports.useEffect(() => {
    loadMembers();
  }, [page]);
  async function setStatus(id, statut) {
    const {
      error
    } = await supabase.from("members").update({
      statut
    }).eq("id", id);
    if (error) toast.error(error.message);
    else {
      toast.success(`Statut → ${statut}`);
      loadMembers();
      loadStats();
    }
  }
  async function openEdit(m) {
    const {
      data
    } = await supabase.from("members").select("*").eq("id", m.id).maybeSingle();
    setEditData(data);
    setEditOpen(true);
  }
  async function saveEdit() {
    if (!editData) return;
    const {
      id,
      created_at,
      updated_at,
      user_id,
      ...patch
    } = editData;
    const {
      error
    } = await supabase.from("members").update(patch).eq("id", id);
    if (error) toast.error(error.message);
    else {
      toast.success("Membre mis à jour");
      setEditOpen(false);
      loadMembers();
    }
  }
  const repartition = reactExports.useMemo(() => {
    const total = stats?.members_total ?? 0;
    const actifs = stats?.members_actifs ?? 0;
    const attente = stats?.members_en_attente ?? 0;
    const autres = Math.max(0, total - actifs - attente);
    return [{
      name: "Actifs",
      value: actifs,
      color: "hsl(142 71% 45%)"
    }, {
      name: "En attente",
      value: attente,
      color: "hsl(38 92% 50%)"
    }, {
      name: "Autres",
      value: autres,
      color: "hsl(220 14% 70%)"
    }];
  }, [stats]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-background via-background to-muted/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardHeader, { title: "Admin MUGEC-CI", nav: ADMIN_NAV }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto px-4 py-8 space-y-8 max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden rounded-3xl border bg-gradient-to-br from-primary via-primary to-primary/80 p-8 text-primary-foreground shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "mb-3 gap-1 bg-white/15 text-white border-white/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
              " Espace national"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight sm:text-4xl", children: "Tableau de bord Admin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-2xl text-sm text-white/80", children: "Pilotage en temps réel des membres, cotisations et prestations de la mutuelle." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", className: "bg-white text-primary hover:bg-white/90", onClick: () => {
            loadStats();
            loadMembers();
            loadTrend();
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "mr-2 h-4 w-4" }),
            " Actualiser"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-2 gap-4 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PremiumKPI, { icon: Users, label: "Membres total", value: stats?.members_total ?? 0, gradient: "from-blue-500 to-indigo-600", trend: "+12%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PremiumKPI, { icon: UserCheck, label: "Actifs", value: stats?.members_actifs ?? 0, gradient: "from-emerald-500 to-green-600", trend: "+8%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PremiumKPI, { icon: UserMinus, label: "En attente", value: stats?.members_en_attente ?? 0, gradient: "from-amber-500 to-orange-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PremiumKPI, { icon: Wallet, label: "Cotisations mois", value: `${((stats?.cotisations_mois ?? 0) / 1e3).toFixed(0)}k F`, gradient: "from-purple-500 to-pink-600", trend: "+24%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PremiumKPI, { icon: Wallet, label: "Cotisations cumul", value: `${((stats?.cotisations_total ?? 0) / 1e3).toFixed(0)}k F`, gradient: "from-cyan-500 to-blue-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PremiumKPI, { icon: FileCheck, label: "Prest. en cours", value: stats?.prestations_en_cours ?? 0, gradient: "from-amber-500 to-red-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PremiumKPI, { icon: FileCheck, label: "Prest. validées (mois)", value: stats?.prestations_validees_mois ?? 0, gradient: "from-teal-500 to-emerald-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PremiumKPI, { icon: FileCheck, label: "Prest. rejetées (mois)", value: stats?.prestations_rejetees_mois ?? 0, gradient: "from-rose-500 to-red-600" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid gap-4 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-0 shadow-md overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-gradient-to-r from-amber-500 to-orange-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Droits d'adhésion" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl tabular-nums", children: [
              ((stats?.droits_adhesion_total ?? 0) / 1e3).toFixed(0),
              " k F"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "text-xs text-muted-foreground", children: [
            "Ce mois : ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
              ((stats?.droits_adhesion_mois ?? 0) / 1e3).toFixed(0),
              " k F"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-0 shadow-md overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-gradient-to-r from-purple-500 to-pink-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Cotisations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl tabular-nums", children: [
              ((stats?.cotisations_total ?? 0) / 1e3).toFixed(0),
              " k F"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "text-xs text-muted-foreground", children: [
            "Ce mois : ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
              ((stats?.cotisations_mois ?? 0) / 1e3).toFixed(0),
              " k F"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-0 shadow-md overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Revenus globaux" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl tabular-nums", children: [
              ((stats?.revenus_total ?? (stats?.droits_adhesion_total ?? 0) + (stats?.cotisations_total ?? 0)) / 1e3).toFixed(0),
              " k F"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "text-xs text-muted-foreground", children: [
            "Ce mois : ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
              ((stats?.revenus_mois ?? (stats?.droits_adhesion_mois ?? 0) + (stats?.cotisations_mois ?? 0)) / 1e3).toFixed(0),
              " k F"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid gap-4 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2 border-0 shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Activité des 6 derniers mois" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Inscriptions et cotisations cumulées par mois" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" }),
              " Tendance"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: trend, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "g1", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "hsl(var(--primary))", stopOpacity: 0.4 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "hsl(var(--primary))", stopOpacity: 0 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "g2", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "hsl(142 71% 45%)", stopOpacity: 0.4 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "hsl(142 71% 45%)", stopOpacity: 0 })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", className: "stroke-muted" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "mois", className: "text-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { className: "text-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
              borderRadius: 12,
              border: "1px solid hsl(var(--border))"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "inscriptions", stroke: "hsl(var(--primary))", fill: "url(#g1)", strokeWidth: 2 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "cotisations", stroke: "hsl(142 71% 45%)", fill: "url(#g2)", strokeWidth: 2 })
          ] }) }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-0 shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Répartition membres" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Statut actuel" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: repartition, dataKey: "value", nameKey: "name", innerRadius: 50, outerRadius: 90, paddingAngle: 3, children: repartition.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: e.color }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {})
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap justify-center gap-3 text-xs", children: repartition.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full", style: {
                background: r.color
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: r.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: r.value })
            ] }, r.name)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-0 shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-primary" }),
              " Gestion des membres"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Consultation, modification et changement de statut" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Rechercher nom, matricule, téléphone…", value: search, onChange: (e) => setSearch(e.target.value), onKeyDown: (e) => e.key === "Enter" && (setPage(0), loadMembers()), className: "w-full pl-9 sm:w-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => {
              setPage(0);
              loadMembers();
            }, children: "Filtrer" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "overflow-x-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "hover:bg-transparent", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-12" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Matricule" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Nom" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Téléphone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Statut" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Inscription" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 7, className: "text-center py-8 text-muted-foreground", children: "Chargement…" }) }) : members.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 7, className: "text-center py-8 text-muted-foreground", children: "Aucun membre" }) }) : members.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-9 w-9 ring-2 ring-background shadow-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MemberAvatarImage, { src: m.photo_url }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-xs bg-gradient-to-br from-primary/20 to-primary/5 text-primary font-semibold", children: (m.prenoms?.[0] ?? "") + (m.nom?.[0] ?? "") })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs", children: m.matricule || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "whitespace-nowrap font-medium", children: [
                m.nom,
                " ",
                m.prenoms
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: m.telephone || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatutBadge, { statut: m.statut }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground text-xs", children: new Date(m.created_at).toLocaleDateString("fr-FR") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "opacity-60 group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { className: "h-4 w-4" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-56", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuLabel, { children: "Actions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: () => setSelected(m), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "mr-2 h-4 w-4" }),
                    " Voir le profil"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { onClick: () => openEdit(m), children: "Modifier les informations" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuLabel, { className: "text-xs text-muted-foreground", children: "Statut" }),
                  STATUTS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { disabled: m.statut === s, onClick: () => setStatus(m.id, s), children: labelStatut(s) }, s))
                ] })
              ] }) })
            ] }, m.id)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", disabled: page === 0, onClick: () => setPage((p) => Math.max(0, p - 1)), children: "← Précédent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
              "Page ",
              page + 1
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", disabled: members.length < PAGE, onClick: () => setPage((p) => p + 1), children: "Suivant →" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!selected, onOpenChange: (o) => !o && setSelected(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Profil membre" }) }),
      selected && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-24 w-24 ring-4 ring-primary/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MemberAvatarImage, { src: selected.photo_url }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-gradient-to-br from-primary/20 to-primary/5 text-primary font-bold text-xl", children: (selected.prenoms?.[0] ?? "") + (selected.nom?.[0] ?? "") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "grid grid-cols-2 gap-2 text-sm flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(D, { k: "Matricule", v: selected.matricule || "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(D, { k: "Nom", v: `${selected.nom} ${selected.prenoms}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(D, { k: "Email", v: selected.email || "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(D, { k: "Téléphone", v: selected.telephone || "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(D, { k: "Statut", v: selected.statut }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(D, { k: "Inscription", v: new Date(selected.created_at).toLocaleDateString("fr-FR") })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: editOpen, onOpenChange: setEditOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-3xl max-h-[80vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Modifier le membre" }) }),
      editData && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2", children: ["nom", "prenoms", "email", "telephone", "cni", "adresse", "photo_url", "collectivite", "region", "direction", "fonction", "matricule_pro", "matricule", "sexe", "lieu_naissance", "date_naissance", "date_embauche", "ayants_droit", "type_membre", "validation_mode", "payment_reference", "suspended_reason"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: f }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: editData[f] ?? "", onChange: (e) => setEditData({
          ...editData,
          [f]: e.target.value
        }) })
      ] }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setEditOpen(false), children: "Annuler" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: saveEdit, children: "Enregistrer" })
      ] })
    ] }) })
  ] });
}
function labelStatut(s) {
  return {
    actif: "Activer",
    en_attente: "Mettre en attente",
    suspendu: "Suspendre",
    decede: "Déclarer décédé",
    marie: "Déclarer marié",
    licencie: "Déclarer licencié",
    assiste: "Déclarer assisté",
    retraite: "Déclarer retraité"
  }[s] ?? s;
}
function StatutBadge({
  statut
}) {
  const map = {
    actif: "bg-emerald-100 text-emerald-700 border-emerald-200",
    en_attente: "bg-amber-100 text-amber-700 border-amber-200",
    suspendu: "bg-red-100 text-red-700 border-red-200",
    decede: "bg-slate-200 text-slate-700 border-slate-300"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${map[statut] ?? "bg-muted text-muted-foreground border-border"}`, children: statut });
}
function PremiumKPI({
  icon: Icon,
  label,
  value,
  gradient,
  trend
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "relative overflow-hidden border-0 shadow-md transition-all hover:shadow-xl hover:-translate-y-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${gradient} opacity-[0.08]` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "relative p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-muted-foreground", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold tracking-tight", children: value }),
        trend && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-emerald-600 font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" }),
          " ",
          trend
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) })
    ] }) })
  ] });
}
function D({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b pb-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: v })
  ] });
}
export {
  AdminDashboard as component
};
