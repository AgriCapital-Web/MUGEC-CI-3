import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { D as DashboardHeader, A as ADMIN_NAV, T as Table, j as TableHeader, k as TableRow, i as TableHead, g as TableBody, h as TableCell } from "./table-COkoqmNZ.mjs";
import { C as Card, c as CardHeader, d as CardTitle, b as CardDescription, a as CardContent } from "./card-WYnDsEnp.mjs";
import { B as Button } from "./button-BZr7_CTB.mjs";
import { I as Input } from "./input-DaEVlcQ1.mjs";
import { B as Badge } from "./badge-Bm8IJUvg.mjs";
import { S as Select, c as SelectTrigger, d as SelectValue, a as SelectContent, b as SelectItem } from "./select-DnWJAm4t.mjs";
import { T as Textarea } from "./textarea-BBdx9Lan.mjs";
import { D as Dialog, a as DialogContent, d as DialogHeader, e as DialogTitle, b as DialogDescription, c as DialogFooter } from "./dialog-8pCoG2m-.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { w as FileCheck, X as Search, _ as ShieldCheck, q as CircleX, o as CircleCheck } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-dialog.mjs";
const PAGE = 30;
const STEP_LABELS = ["1 — Délégué de section", "2 — Secrétaire régional", "3 — Secrétaire général", "4 — Trésorier national", "5 — Clôturé"];
const STEP_ROLES = ["delegue_section", "secretaire_regional", "secretaire_general", "tresorier_national", "system"];
function fmt(n) {
  return `${(n ?? 0).toLocaleString("fr-FR")} F`;
}
function PrestationsPage() {
  const [rows, setRows] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [page, setPage] = reactExports.useState(0);
  const [statut, setStatut] = reactExports.useState("all");
  const [q, setQ] = reactExports.useState("");
  const [open, setOpen] = reactExports.useState(false);
  const [current, setCurrent] = reactExports.useState(null);
  const [history, setHistory] = reactExports.useState([]);
  const [motif, setMotif] = reactExports.useState("");
  const [myRoles, setMyRoles] = reactExports.useState([]);
  async function loadRoles() {
    const {
      data: {
        user
      }
    } = await supabase.auth.getUser();
    if (!user) return;
    const {
      data
    } = await supabase.from("user_roles").select("role").eq("user_id", user.id);
    setMyRoles((data ?? []).map((r) => r.role));
  }
  async function load() {
    setLoading(true);
    let qb = supabase.from("prestation_requests").select("id, member_id, type_evenement, statut_global, step_validation, montant_applicable, motif_rejet, created_at, submitted_at, closed_at, members:member_id (nom, prenoms, matricule, telephone)").order("created_at", {
      ascending: false
    }).range(page * PAGE, page * PAGE + PAGE - 1);
    if (statut !== "all") qb = qb.eq("statut_global", statut);
    const {
      data,
      error
    } = await qb;
    if (error) toast.error(error.message);
    else setRows(data || []);
    setLoading(false);
  }
  reactExports.useEffect(() => {
    loadRoles();
  }, []);
  reactExports.useEffect(() => {
    load();
  }, [page, statut]);
  const filtered = reactExports.useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return rows;
    return rows.filter((x) => (x.type_evenement ?? "").toLowerCase().includes(s) || (x.members?.nom ?? "").toLowerCase().includes(s) || (x.members?.matricule ?? "").toLowerCase().includes(s));
  }, [rows, q]);
  async function openDetail(r) {
    setCurrent(r);
    setMotif("");
    setOpen(true);
    const {
      data
    } = await supabase.from("prestation_validations").select("id, niveau, action, motif, validated_at, role_requis, validateur_id").eq("request_id", r.id).order("validated_at", {
      ascending: true
    });
    setHistory(data || []);
  }
  const isSuperAdmin = myRoles.includes("super_admin");
  function canValidate(step) {
    if (isSuperAdmin) return true;
    const req = STEP_ROLES[step - 1];
    return req === "system" || myRoles.includes(req);
  }
  async function doAction(action) {
    if (!current) return;
    if (action === "rejete" && motif.trim().length < 3) {
      toast.error("Motif requis pour un rejet");
      return;
    }
    const {
      error
    } = await supabase.rpc("validate_prestation_step", {
      _request_id: current.id,
      _action: action,
      _motif: motif || void 0
    });
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success(action === "valide" ? "Validation enregistrée" : "Demande rejetée");
    setOpen(false);
    await load();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-background via-background to-muted/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardHeader, { title: "Prestations MUGEC-CI", nav: ADMIN_NAV }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto max-w-7xl space-y-6 px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-0 shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheck, { className: "h-5 w-5 text-primary" }),
            " Validation des prestations"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Workflow 4 niveaux : Délégué → Secrétaire régional → Secrétaire général → Trésorier national" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Type, nom, matricule…", value: q, onChange: (e) => setQ(e.target.value), className: "pl-9 w-72" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: statut, onValueChange: (v) => {
            setStatut(v);
            setPage(0);
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-44", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "Tous statuts" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "en_attente", children: "En attente" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "en_cours", children: "En cours" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "valide", children: "Validées" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "rejete", children: "Rejetées" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "overflow-x-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Membre" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Montant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Étape" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Statut" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 7, className: "py-8 text-center text-muted-foreground", children: "Chargement…" }) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 7, className: "py-8 text-center text-muted-foreground", children: "Aucune demande" }) }) : filtered.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "font-medium", children: [
              r.members ? `${r.members.nom} ${r.members.prenoms}` : "—",
              r.members?.matricule && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground", children: r.members.matricule })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "capitalize", children: r.type_evenement.replace(/_/g, " ") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right font-mono", children: fmt(r.montant_applicable) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "font-mono text-xs", children: STEP_LABELS[Math.max(0, r.step_validation - 1)] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
              r.statut_global === "valide" && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-emerald-500/15 text-emerald-700", children: "Validée" }),
              r.statut_global === "rejete" && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", children: "Rejetée" }),
              r.statut_global === "en_cours" && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: "En cours" }),
              r.statut_global === "en_attente" && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "En attente" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: new Date(r.created_at).toLocaleDateString("fr-FR") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => openDetail(r), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5 mr-1" }),
              "Détail"
            ] }) })
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
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Demande de prestation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { children: [
          current?.members ? `${current.members.nom} ${current.members.prenoms}` : "",
          " · ",
          current?.type_evenement?.replace(/_/g, " ")
        ] })
      ] }),
      current && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Montant applicable :" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-semibold", children: fmt(current.montant_applicable) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Étape actuelle :" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: STEP_LABELS[Math.max(0, current.step_validation - 1)] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Statut global :" }),
            " ",
            current.statut_global
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Soumise le :" }),
            " ",
            new Date(current.submitted_at).toLocaleString("fr-FR")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium mb-2", children: "Historique de validation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 max-h-48 overflow-y-auto rounded border bg-muted/30 p-2 text-xs", children: history.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Aucune validation enregistrée" }) : history.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Niveau ",
              h.niveau,
              " (",
              h.role_requis,
              ") — ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: h.action }),
              h.motif ? ` · ${h.motif}` : ""
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: new Date(h.validated_at).toLocaleString("fr-FR") })
          ] }, h.id)) })
        ] }),
        current.statut_global !== "valide" && current.statut_global !== "rejete" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { placeholder: "Motif (obligatoire pour rejet)", value: motif, onChange: (e) => setMotif(e.target.value) }),
          !canValidate(current.step_validation) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-amber-600", children: [
            "Rôle requis pour cette étape : ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: STEP_ROLES[current.step_validation - 1] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setOpen(false), children: "Fermer" }),
        current && current.statut_global !== "valide" && current.statut_global !== "rejete" && canValidate(current.step_validation) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "destructive", onClick: () => doAction("rejete"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4 mr-1" }),
            "Rejeter"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => doAction("valide"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 mr-1" }),
            "Valider l'étape"
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  PrestationsPage as component
};
