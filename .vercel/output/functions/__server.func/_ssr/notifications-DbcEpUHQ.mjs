import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { D as DashboardHeader, A as ADMIN_NAV, T as Table, j as TableHeader, k as TableRow, i as TableHead, g as TableBody, h as TableCell } from "./table-COkoqmNZ.mjs";
import { C as Card, c as CardHeader, d as CardTitle, b as CardDescription, a as CardContent } from "./card-WYnDsEnp.mjs";
import { B as Button, c as cn } from "./button-BZr7_CTB.mjs";
import { I as Input } from "./input-DaEVlcQ1.mjs";
import { B as Badge } from "./badge-Bm8IJUvg.mjs";
import { S as Select, c as SelectTrigger, d as SelectValue, a as SelectContent, b as SelectItem } from "./select-DnWJAm4t.mjs";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent } from "./tabs-BnjCuFHn.mjs";
import { R as Root, T as Thumb } from "../_libs/radix-ui__react-switch.mjs";
import { T as Textarea } from "./textarea-BBdx9Lan.mjs";
import { L as Label } from "./label-D5ksbt7L.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { f as Bell, X as Search, S as Plus, M as Mail, Y as Send, O as MessageSquare } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-label.mjs";
const Switch = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = Root.displayName;
function CanalIcon({
  c
}) {
  if (c === "email") return /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" });
  if (c === "sms") return /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3.5 w-3.5" });
  if (c === "whatsapp") return /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3.5 w-3.5" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-3.5 w-3.5" });
}
function NotificationsPage() {
  const [logs, setLogs] = reactExports.useState([]);
  const [tpls, setTpls] = reactExports.useState([]);
  const [q, setQ] = reactExports.useState("");
  const [canal, setCanal] = reactExports.useState("all");
  const [creating, setCreating] = reactExports.useState(false);
  const [draft, setDraft] = reactExports.useState({
    event: "",
    channel: "email",
    title: "",
    body: "",
    active: true
  });
  async function loadLogs() {
    let qb = supabase.from("notifications_log").select("id, canal, event, contenu, statut, created_at, sent_at, error_message").order("created_at", {
      ascending: false
    }).limit(200);
    if (canal !== "all") qb = qb.eq("canal", canal);
    const {
      data,
      error
    } = await qb;
    if (error) toast.error(error.message);
    else setLogs(data || []);
  }
  async function loadTpls() {
    const {
      data,
      error
    } = await supabase.from("notification_templates").select("*").order("created_at", {
      ascending: false
    });
    if (error) toast.error(error.message);
    else setTpls(data || []);
  }
  reactExports.useEffect(() => {
    loadLogs();
    loadTpls();
  }, [canal]);
  const filtered = logs.filter((l) => {
    const s = q.trim().toLowerCase();
    if (!s) return true;
    return l.event.toLowerCase().includes(s) || l.contenu.toLowerCase().includes(s);
  });
  async function toggleTpl(t) {
    const {
      error
    } = await supabase.from("notification_templates").update({
      active: !t.active
    }).eq("id", t.id);
    if (error) toast.error(error.message);
    else {
      toast.success("Modèle mis à jour");
      loadTpls();
    }
  }
  async function saveDraft() {
    if (!draft.event || !draft.channel || !draft.title || !draft.body) {
      toast.error("Tous les champs sont requis");
      return;
    }
    const {
      error
    } = await supabase.from("notification_templates").insert([{
      event: draft.event,
      channel: draft.channel,
      title: draft.title,
      body: draft.body,
      active: draft.active ?? true
    }]);
    if (error) toast.error(error.message);
    else {
      toast.success("Modèle créé");
      setCreating(false);
      setDraft({
        event: "",
        channel: "email",
        title: "",
        body: "",
        active: true
      });
      loadTpls();
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-background via-background to-muted/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardHeader, { title: "Notifications MUGEC-CI", nav: ADMIN_NAV }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto max-w-7xl space-y-6 px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "logs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "logs", children: "Historique" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "templates", children: "Modèles" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "logs", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-0 shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-5 w-5 text-primary" }),
              " Journal des notifications"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Email · SMS · WhatsApp · In-app" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Événement, contenu…", value: q, onChange: (e) => setQ(e.target.value), className: "pl-9 w-72" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: canal, onValueChange: setCanal, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "Tous canaux" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "email", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sms", children: "SMS" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "whatsapp", children: "WhatsApp" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "in_app", children: "In-app" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Canal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Événement" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Contenu" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Statut" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Date" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 5, className: "py-8 text-center text-muted-foreground", children: "Aucune notification" }) }) : filtered.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CanalIcon, { c: l.canal }),
              l.canal
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs", children: l.event }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "max-w-md truncate text-xs text-muted-foreground", title: l.contenu, children: l.contenu }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: l.statut === "envoye" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-emerald-500/15 text-emerald-700", children: "Envoyé" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", children: l.statut }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: new Date(l.created_at).toLocaleString("fr-FR") })
          ] }, l.id)) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "templates", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-0 shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Modèles de notification" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardDescription, { children: [
              "Variables : ",
              "{{nom}}, {{prenoms}}, {{matricule}}, {{montant}}, {{periode}}"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setCreating((v) => !v), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-1" }),
            creating ? "Annuler" : "Nouveau"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          creating && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-dashed", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Événement" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "ex: cotisation_relance", value: draft.event ?? "", onChange: (e) => setDraft({
                ...draft,
                event: e.target.value
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Canal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: draft.channel, onValueChange: (v) => setDraft({
                ...draft,
                channel: v
              }), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "email", children: "Email" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sms", children: "SMS" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "whatsapp", children: "WhatsApp" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "in_app", children: "In-app" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Titre / Sujet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.title ?? "", onChange: (e) => setDraft({
                ...draft,
                title: e.target.value
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Corps du message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 4, value: draft.body ?? "", onChange: (e) => setDraft({
                ...draft,
                body: e.target.value
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: saveDraft, children: "Enregistrer" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Événement" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Canal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Titre" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Actif" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: tpls.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 4, className: "py-8 text-center text-muted-foreground", children: "Aucun modèle" }) }) : tpls.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs", children: t.event }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CanalIcon, { c: t.channel }),
                t.channel
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: t.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: t.active, onCheckedChange: () => toggleTpl(t) }) })
            ] }, t.id)) })
          ] })
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  NotificationsPage as component
};
