import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { D as DashboardHeader, A as ADMIN_NAV, T as Table, j as TableHeader, k as TableRow, i as TableHead, g as TableBody, h as TableCell } from "./table-COkoqmNZ.mjs";
import { C as Card, c as CardHeader, d as CardTitle, b as CardDescription, a as CardContent } from "./card-WYnDsEnp.mjs";
import { B as Button } from "./button-BZr7_CTB.mjs";
import { I as Input } from "./input-DaEVlcQ1.mjs";
import { B as Badge } from "./badge-Bm8IJUvg.mjs";
import { S as Select, c as SelectTrigger, d as SelectValue, a as SelectContent, b as SelectItem } from "./select-DnWJAm4t.mjs";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent } from "./tabs-BnjCuFHn.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { dispatchNotification } from "./notifications.functions-uIaxsgFI.mjs";
import "../_libs/seroval.mjs";
import { o as CircleCheck, a9 as Wallet, a3 as TriangleAlert, Y as Send, X as Search, O as MessageSquare } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "./createSsrRpc-D5GVPY95.mjs";
import "./server-CR6ahDdE.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./auth-middleware-B6uwEovA.mjs";
import "../_libs/zod.mjs";
const PAGE = 50;
function fmt(n) {
  return `${(n ?? 0).toLocaleString("fr-FR")} F`;
}
function CotisationsPage() {
  const [rows, setRows] = reactExports.useState([]);
  const [page, setPage] = reactExports.useState(0);
  const [statut, setStatut] = reactExports.useState("all");
  const [q, setQ] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(true);
  const dispatch = useServerFn(dispatchNotification);
  async function load() {
    setLoading(true);
    let qb = supabase.from("cotisations").select("id, member_id, periode, montant, statut, methode, reference, paye_le, created_at, members:member_id (nom, prenoms, telephone, matricule, user_id)").order("created_at", {
      ascending: false
    }).range(page * PAGE, page * PAGE + PAGE - 1);
    if (statut !== "all" && statut !== "en_retard") qb = qb.eq("statut", statut);
    const {
      data,
      error
    } = await qb;
    if (error) toast.error(error.message);
    else setRows(data || []);
    setLoading(false);
  }
  reactExports.useEffect(() => {
    load();
  }, [page, statut]);
  const filtered = reactExports.useMemo(() => {
    const s = q.trim().toLowerCase();
    let r = rows;
    if (statut === "en_retard") {
      const lim = /* @__PURE__ */ new Date();
      lim.setDate(lim.getDate() - 30);
      r = r.filter((x) => x.statut !== "paye" && new Date(x.created_at) < lim);
    }
    if (!s) return r;
    return r.filter((x) => (x.reference ?? "").toLowerCase().includes(s) || (x.periode ?? "").toLowerCase().includes(s) || (x.members?.nom ?? "").toLowerCase().includes(s) || (x.members?.matricule ?? "").toLowerCase().includes(s));
  }, [rows, q, statut]);
  async function markPaid(id) {
    const {
      error
    } = await supabase.from("cotisations").update({
      statut: "paye",
      paye_le: (/* @__PURE__ */ new Date()).toISOString()
    }).eq("id", id);
    if (error) toast.error(error.message);
    else {
      toast.success("Marqué payé");
      load();
    }
  }
  async function relancer(r, channels) {
    if (!r.members) {
      toast.error("Membre introuvable");
      return;
    }
    try {
      await dispatch({
        data: {
          event: "cotisation_relance",
          memberId: r.member_id,
          userId: r.members.user_id,
          to: {
            phone: r.members.telephone ?? void 0,
            whatsapp: r.members.telephone ?? void 0
          },
          channels,
          context: {
            nom: r.members.nom,
            prenoms: r.members.prenoms,
            periode: r.periode,
            montant: r.montant,
            matricule: r.members.matricule ?? ""
          }
        }
      });
      toast.success(`Relance envoyée (${channels.join(", ")})`);
    } catch (e) {
      toast.error(e?.message ?? "Échec de la relance");
    }
  }
  async function relanceMass(channels) {
    const cibles = filtered.filter((r) => r.statut !== "paye");
    if (cibles.length === 0) {
      toast.info("Aucune cotisation à relancer");
      return;
    }
    toast.message(`Envoi de ${cibles.length} relance(s)…`);
    let ok = 0;
    for (const r of cibles) {
      try {
        await relancer(r, channels);
        ok++;
      } catch {
      }
    }
    toast.success(`${ok}/${cibles.length} relance(s) traitée(s)`);
  }
  const stats = reactExports.useMemo(() => {
    const paye = filtered.filter((r) => r.statut === "paye").reduce((a, b) => a + (b.montant || 0), 0);
    const attente = filtered.filter((r) => r.statut !== "paye").reduce((a, b) => a + (b.montant || 0), 0);
    const retard = filtered.filter((r) => {
      const lim = /* @__PURE__ */ new Date();
      lim.setDate(lim.getDate() - 30);
      return r.statut !== "paye" && new Date(r.created_at) < lim;
    }).length;
    return {
      paye,
      attente,
      retard,
      total: filtered.length
    };
  }, [filtered]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-background via-background to-muted/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardHeader, { title: "Cotisations MUGEC-CI", nav: ADMIN_NAV }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto max-w-7xl space-y-6 px-4 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MiniStat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }), label: "Payées (vue)", value: fmt(stats.paye), accent: "from-emerald-500 to-green-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MiniStat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-4 w-4" }), label: "En attente", value: fmt(stats.attente), accent: "from-amber-500 to-orange-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MiniStat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }), label: "En retard (>30j)", value: String(stats.retard), accent: "from-rose-500 to-red-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MiniStat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }), label: "Lignes affichées", value: String(stats.total), accent: "from-blue-500 to-indigo-600" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-0 shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-5 w-5 text-primary" }),
              " Suivi des cotisations"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Marquage des paiements, relances SMS / WhatsApp / Email" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Référence, période, nom…", value: q, onChange: (e) => setQ(e.target.value), className: "pl-9 w-72" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: statut, onValueChange: (v) => {
              setStatut(v);
              setPage(0);
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-44", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "Tous statuts" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "paye", children: "Payées" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "en_attente", children: "En attente" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "en_retard", children: "En retard (>30j)" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "table", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "table", children: "Tableau" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "mass", children: "Relance de masse" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "table", className: "mt-4 overflow-x-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Membre" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Période" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Montant" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Statut" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Actions" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 6, className: "py-8 text-center text-muted-foreground", children: "Chargement…" }) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 6, className: "py-8 text-center text-muted-foreground", children: "Aucune cotisation" }) }) : filtered.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "font-medium", children: [
                  r.members ? `${r.members.nom} ${r.members.prenoms}` : "—",
                  r.members?.matricule && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground", children: r.members.matricule })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: r.periode }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right font-mono", children: fmt(r.montant) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: r.statut === "paye" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-emerald-500/15 text-emerald-700 hover:bg-emerald-500/20", children: "Payée" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: r.statut.replace("_", " ") }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: new Date(r.created_at).toLocaleDateString("fr-FR") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end gap-1", children: r.statut !== "paye" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => relancer(r, ["sms"]), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3.5 w-3.5 mr-1" }),
                    "SMS"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => relancer(r, ["whatsapp"]), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3.5 w-3.5 mr-1" }),
                    "WA"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => markPaid(r.id), children: "Marquer payée" })
                ] }) }) })
              ] }, r.id)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", disabled: page === 0, onClick: () => setPage((p) => Math.max(0, p - 1)), children: "← Précédent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                "Page ",
                page + 1
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", disabled: rows.length < PAGE, onClick: () => setPage((p) => p + 1), children: "Suivant →" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "mass", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-dashed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Relancer les impayés affichés" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Envoie une relance à chaque ligne non payée du filtre actuel." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => relanceMass(["sms"]), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "mr-2 h-4 w-4" }),
                "Relance SMS"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", onClick: () => relanceMass(["whatsapp"]), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "mr-2 h-4 w-4" }),
                "Relance WhatsApp"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => relanceMass(["sms", "whatsapp", "email"]), children: "Tous les canaux" })
            ] })
          ] }) })
        ] }) })
      ] })
    ] })
  ] });
}
function MiniStat({
  icon,
  label,
  value,
  accent
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-0 shadow-md overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-10 w-10 rounded-xl bg-gradient-to-br ${accent} text-white flex items-center justify-center shadow`, children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold", children: value })
    ] })
  ] }) });
}
export {
  CotisationsPage as component
};
