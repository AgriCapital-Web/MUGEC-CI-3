import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as Avatar, M as MemberAvatarImage, a as AvatarFallback } from "./MemberAvatar-BOXOZN_l.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { M as MembreLayout } from "./MembreLayout-DpHkgsVF.mjs";
import { C as Card, a as CardContent, c as CardHeader, d as CardTitle } from "./card-WYnDsEnp.mjs";
import { B as Badge } from "./badge-Bm8IJUvg.mjs";
import { B as Button } from "./button-BZr7_CTB.mjs";
import { P as Progress } from "./progress-D-hD-1Bs.mjs";
import { i as isSupabaseConfigured, a as getCurrentSupabaseUser } from "./router-D_HcibeE.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import { a0 as Sparkles, a9 as Wallet, o as CircleCheck, r as Clock, _ as ShieldCheck, a2 as TrendingUp, s as CreditCard, x as FileText, d as ArrowUpRight, C as CalendarDays } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, a as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, A as Area } from "../_libs/recharts.mjs";
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
import "./input-DaEVlcQ1.mjs";
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
import "../_libs/radix-ui__react-progress.mjs";
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
  const [member, setMember] = reactExports.useState(null);
  const [subs, setSubs] = reactExports.useState([]);
  reactExports.useEffect(() => {
    let alive = true;
    (async () => {
      if (!isSupabaseConfigured) return;
      const currentUser = await getCurrentSupabaseUser();
      if (!alive || !currentUser) return;
      const {
        data: m2
      } = await supabase.from("members").select("*").eq("user_id", currentUser.id).maybeSingle();
      if (!alive) return;
      if (m2) setMember(m2);
      if (m2?.id) {
        const {
          data: s
        } = await supabase.from("subscriptions").select("id, type, montant_total, statut_paiement, paid_at, created_at, periode").eq("member_id", m2.id).order("created_at", {
          ascending: false
        }).limit(50);
        if (alive) setSubs(s ?? []);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);
  const m = member ?? {};
  const initials = `${m.prenoms?.[0] ?? ""}${m.nom?.[0] ?? ""}`.toUpperCase() || "M";
  const stats = reactExports.useMemo(() => {
    const paid = subs.filter((s) => s.statut_paiement === "paye");
    const total = paid.reduce((sum, s) => sum + (s.montant_total ?? 0), 0);
    const pending = subs.filter((s) => s.statut_paiement !== "paye").length;
    const lastPaid = paid[0]?.paid_at ?? paid[0]?.created_at ?? null;
    return {
      total,
      pending,
      paidCount: paid.length,
      lastPaid
    };
  }, [subs]);
  const chartData = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    const now = /* @__PURE__ */ new Date();
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const k = d.toLocaleDateString("fr-FR", {
        month: "short"
      });
      map.set(k, 0);
    }
    subs.filter((s) => s.statut_paiement === "paye" && s.paid_at).forEach((s) => {
      const d = new Date(s.paid_at);
      const k = d.toLocaleDateString("fr-FR", {
        month: "short"
      });
      if (map.has(k)) map.set(k, (map.get(k) ?? 0) + (s.montant_total ?? 0));
    });
    return Array.from(map.entries()).map(([mois, montant]) => ({
      mois,
      montant
    }));
  }, [subs]);
  const droitsOuverts = !!m.droits_ouverts_le && new Date(m.droits_ouverts_le) <= /* @__PURE__ */ new Date();
  const daysSinceInscription = m.date_inscription ? Math.max(0, Math.floor((Date.now() - new Date(m.date_inscription).getTime()) / 864e5)) : 0;
  const droitsProgress = droitsOuverts ? 100 : Math.min(100, Math.round(daysSinceInscription / 90 * 100));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MembreLayout, { title: `Bonjour, ${m.prenoms ?? "Membre"} 👋`, subtitle: "Voici l'état de votre adhésion à la MUGEC-CI", actions: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/membre/cotisations", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "mr-2 h-4 w-4" }),
    " Payer"
  ] }) }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden border-0 shadow-[var(--shadow-elegant)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-28", style: {
        background: "var(--gradient-primary)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:24px_24px]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "-mt-14 p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-24 w-24 ring-4 ring-background shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MemberAvatarImage, { src: m.photo_url, alt: `${m.prenoms} ${m.nom}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-xl bg-primary text-primary-foreground", children: initials })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold tracking-tight md:text-2xl", children: [
              m.prenoms,
              " ",
              m.nom
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              m.fonction ?? "—",
              " · ",
              m.collectivite ?? m.region ?? "—"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs font-mono text-muted-foreground", children: m.matricule ?? "Matricule en attente" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: m.statut === "actif" ? "default" : "secondary", className: "uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-1 h-3 w-3" }),
          m.statut ?? "en attente"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { icon: Wallet, label: "Total cotisé", value: `${stats.total.toLocaleString("fr-FR")} F`, hint: `${stats.paidCount} paiement${stats.paidCount > 1 ? "s" : ""}`, tone: "primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { icon: CircleCheck, label: "Paiements validés", value: String(stats.paidCount), hint: stats.lastPaid ? `Dernier : ${new Date(stats.lastPaid).toLocaleDateString("fr-FR")}` : "Aucun", tone: "success" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { icon: Clock, label: "En attente", value: String(stats.pending), hint: stats.pending > 0 ? "À régulariser" : "À jour", tone: "warning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { icon: ShieldCheck, label: "Droits aux prestations", value: droitsOuverts ? "Ouverts" : "En délai", hint: droitsOuverts ? "Vous pouvez déposer une demande" : `${droitsProgress}% des 90 jours`, tone: droitsOuverts ? "success" : "muted" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2 shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Cotisations des 6 derniers mois" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Vue d'ensemble de vos paiements" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: chartData, margin: {
          top: 10,
          right: 10,
          left: 0,
          bottom: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "colorMontant", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--color-primary)", stopOpacity: 0.4 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--color-primary)", stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--color-border)", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "mois", stroke: "var(--color-muted-foreground)", fontSize: 11 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "var(--color-muted-foreground)", fontSize: 11, tickFormatter: (v) => `${(v / 1e3).toFixed(0)}k` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "var(--color-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 8,
            fontSize: 12
          }, formatter: (v) => [`${v.toLocaleString("fr-FR")} F`, "Montant"] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "montant", stroke: "var(--color-primary)", strokeWidth: 2, fill: "url(#colorMontant)" })
        ] }) }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Ma progression" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Ouverture des droits après 90 jours" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Délai 90 jours" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                droitsProgress,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: droitsProgress, className: "h-2" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 border-t pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(QuickLink, { to: "/membre/cotisations", icon: CreditCard, label: "Payer ma cotisation", tone: "primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(QuickLink, { to: "/membre/carte", icon: CreditCard, label: "Ma carte de membre", tone: "accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(QuickLink, { to: "/membre/documents", icon: FileText, label: "Mes documents", tone: "muted" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6 shadow-[var(--shadow-soft)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Activité récente" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Vos derniers mouvements" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/membre/cotisations", children: [
          "Tout voir ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-1 h-3 w-3" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2", children: [
        subs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border-2 border-dashed p-8 text-center text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "mx-auto mb-2 h-8 w-8 opacity-40" }),
          "Aucune activité pour le moment"
        ] }),
        subs.slice(0, 5).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg border p-3 transition hover:bg-muted/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-9 w-9 items-center justify-center rounded-full ${s.statut_paiement === "paye" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`, children: s.statut_paiement === "paye" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium capitalize", children: [
                s.type,
                " ",
                s.periode ? `— ${s.periode}` : ""
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: new Date(s.paid_at ?? s.created_at).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric"
              }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold tabular-nums", children: [
              (s.montant_total ?? 0).toLocaleString("fr-FR"),
              " F"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: s.statut_paiement === "paye" ? "default" : "secondary", className: "text-[10px]", children: s.statut_paiement })
          ] })
        ] }, s.id))
      ] })
    ] })
  ] });
}
function QuickLink({
  to,
  icon: Icon,
  label,
  tone
}) {
  const tones = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/15 text-accent",
    muted: "bg-secondary text-secondary-foreground"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, className: "group flex items-center justify-between rounded-lg border p-3 transition hover:border-primary hover:bg-primary/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-md p-2 ${tones[tone]}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground transition group-hover:text-primary" })
  ] });
}
function KpiCard({
  icon: Icon,
  label,
  value,
  hint,
  tone
}) {
  const tones = {
    primary: "from-primary/10 to-primary/5 text-primary",
    success: "from-emerald-500/15 to-emerald-500/5 text-emerald-600",
    warning: "from-amber-500/15 to-amber-500/5 text-amber-600",
    muted: "from-muted to-muted/30 text-muted-foreground"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "relative overflow-hidden border shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-elegant)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute right-0 top-0 h-24 w-24 rounded-full bg-gradient-to-br opacity-50 blur-2xl ${tones[tone]}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "relative p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-lg bg-gradient-to-br p-2 ${tones[tone]}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-2xl font-bold tracking-tight tabular-nums", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: hint })
    ] })
  ] });
}
export {
  Page as component
};
