import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./SiteFooter-BBtrihJd.mjs";
import { C as Card, a as CardContent } from "./card-WYnDsEnp.mjs";
import { u as useAuth } from "./router-D_HcibeE.mjs";
import { B as Button } from "./button-BZr7_CTB.mjs";
import { I as Input } from "./input-DaEVlcQ1.mjs";
import { L as Label } from "./label-D5ksbt7L.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { S as Plus, I as Lock, G as LoaderCircle, O as MessageSquare } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
function Page() {
  const {
    user
  } = useAuth();
  const [topics, setTopics] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [creating, setCreating] = reactExports.useState(false);
  const [title, setTitle] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  async function load() {
    setLoading(true);
    const {
      data
    } = await supabase.from("forum_topics").select("id,title,author_id,created_at,closed").order("created_at", {
      ascending: false
    }).limit(50);
    setTopics(data ?? []);
    setLoading(false);
  }
  reactExports.useEffect(() => {
    if (user) void load();
  }, [user]);
  async function createTopic(e) {
    e.preventDefault();
    if (!user || title.trim().length < 4) return;
    setBusy(true);
    const {
      error
    } = await supabase.from("forum_topics").insert({
      title: title.trim(),
      author_id: user.id
    });
    setBusy(false);
    if (error) {
      toast.error("Impossible de créer le sujet");
      return;
    }
    toast.success("Sujet créé");
    setTitle("");
    setCreating(false);
    void load();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto max-w-4xl px-4 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold tracking-tight", children: "Forum & Discussions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Espace réservé aux membres. Tout utilisateur connecté peut créer un sujet." })
        ] }),
        user && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setCreating((c) => !c), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-2 h-4 w-4" }),
          " ",
          creating ? "Annuler" : "Nouveau sujet"
        ] })
      ] }),
      !user ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col items-center gap-4 p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-10 w-10 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Connectez-vous pour accéder au forum et créer un sujet." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "Se connecter" }) })
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        creating && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: createTopic, className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "t", children: "Titre du sujet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "t", value: title, onChange: (e) => setTitle(e.target.value), maxLength: 200, placeholder: "Ex: Question sur les cotisations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: busy || title.trim().length < 4, children: [
            busy && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
            " Publier"
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin" }) }) : topics.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-5 w-5" }),
          "Aucun sujet pour le moment. Soyez le premier à lancer une discussion !"
        ] }) }) }) : topics.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "transition-shadow hover:shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex items-center justify-between gap-3 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate font-medium", children: t.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              new Date(t.created_at).toLocaleString("fr-FR"),
              " ",
              t.closed && "· fermé"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4 shrink-0 text-muted-foreground" })
        ] }) }, t.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Page as component
};
