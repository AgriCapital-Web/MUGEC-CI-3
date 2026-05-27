import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as Avatar, M as MemberAvatarImage, a as AvatarFallback } from "./MemberAvatar-BOXOZN_l.mjs";
import { D as DashboardHeader, A as ADMIN_NAV, T as Table, j as TableHeader, k as TableRow, i as TableHead, g as TableBody, h as TableCell, a as DropdownMenu, f as DropdownMenuTrigger, b as DropdownMenuContent, d as DropdownMenuLabel, e as DropdownMenuSeparator, c as DropdownMenuItem } from "./table-COkoqmNZ.mjs";
import { C as Card, c as CardHeader, d as CardTitle, b as CardDescription, a as CardContent } from "./card-WYnDsEnp.mjs";
import { B as Button } from "./button-BZr7_CTB.mjs";
import { I as Input } from "./input-DaEVlcQ1.mjs";
import { B as Badge } from "./badge-Bm8IJUvg.mjs";
import { S as Select, c as SelectTrigger, d as SelectValue, a as SelectContent, b as SelectItem } from "./select-DnWJAm4t.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { a8 as Users, X as Search, z as Funnel, E as Ellipsis } from "../_libs/lucide-react.mjs";
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
const PAGE = 50;
const STATUTS = ["actif", "en_attente", "suspendu", "decede", "marie", "licencie", "assiste", "retraite"];
function StatutBadge({
  s
}) {
  const v = {
    actif: "default",
    en_attente: "secondary",
    suspendu: "destructive"
  }[s] || "outline";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: v, children: s.replace("_", " ") });
}
function MembresPage() {
  const [rows, setRows] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [page, setPage] = reactExports.useState(0);
  const [q, setQ] = reactExports.useState("");
  const [statut, setStatut] = reactExports.useState("all");
  async function load() {
    setLoading(true);
    let qb = supabase.from("members").select("id, matricule, nom, prenoms, telephone, email, statut, created_at, photo_url, region, collectivite").order("created_at", {
      ascending: false
    }).range(page * PAGE, page * PAGE + PAGE - 1);
    if (statut !== "all") qb = qb.eq("statut", statut);
    if (q.trim()) {
      const safe = q.trim().replace(/[(),*\\]/g, " ").slice(0, 100);
      const s = `%${safe}%`;
      qb = qb.or(`nom.ilike.${s},prenoms.ilike.${s},telephone.ilike.${s},matricule.ilike.${s},email.ilike.${s}`);
    }
    const {
      data,
      error
    } = await qb;
    if (error) {
      console.error("admin members load failed", error);
      toast.error("Impossible de charger la liste des membres.");
    } else setRows(data || []);
    setLoading(false);
  }
  reactExports.useEffect(() => {
    load();
  }, [page, statut]);
  async function setStatus(id, s) {
    const {
      error
    } = await supabase.from("members").update({
      statut: s
    }).eq("id", id);
    if (error) {
      console.error("admin members setStatus failed", error);
      toast.error("Impossible de mettre à jour le statut.");
    } else {
      toast.success(`Statut → ${s}`);
      load();
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-background via-background to-muted/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardHeader, { title: "Membres MUGEC-CI", nav: ADMIN_NAV }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto max-w-7xl space-y-6 px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-0 shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-primary" }),
            " Gestion des membres"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Recherche, filtres et actions sur les membres" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Nom, matricule, téléphone…", value: q, onChange: (e) => setQ(e.target.value), onKeyDown: (e) => e.key === "Enter" && (setPage(0), load()), className: "pl-9 w-72" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: statut, onValueChange: (v) => {
            setStatut(v);
            setPage(0);
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectTrigger, { className: "w-40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "mr-2 h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "Tous statuts" }),
              STATUTS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => {
            setPage(0);
            load();
          }, children: "Filtrer" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "overflow-x-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Matricule" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Nom" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Téléphone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Région" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Statut" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 7, className: "py-8 text-center text-muted-foreground", children: "Chargement…" }) }) : rows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 7, className: "py-8 text-center text-muted-foreground", children: "Aucun membre" }) }) : rows.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-9 w-9 ring-2 ring-background shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MemberAvatarImage, { src: m.photo_url }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-xs bg-gradient-to-br from-primary/20 to-primary/5 text-primary font-semibold", children: (m.prenoms?.[0] ?? "") + (m.nom?.[0] ?? "") })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs", children: m.matricule || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "font-medium whitespace-nowrap", children: [
              m.nom,
              " ",
              m.prenoms
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: m.telephone || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground text-xs", children: m.region || m.collectivite || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatutBadge, { s: m.statut }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { className: "h-4 w-4" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuLabel, { children: "Changer le statut" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
                STATUTS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { disabled: m.statut === s, onClick: () => setStatus(m.id, s), children: s }, s))
              ] })
            ] }) })
          ] }, m.id)) })
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
    ] }) })
  ] });
}
export {
  MembresPage as component
};
