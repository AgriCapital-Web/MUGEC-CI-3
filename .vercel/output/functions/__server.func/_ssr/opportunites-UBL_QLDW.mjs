import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as SiteHeader, S as SiteFooter } from "./SiteFooter-BBtrihJd.mjs";
import { C as Card, a as CardContent } from "./card-WYnDsEnp.mjs";
import { B as Badge } from "./badge-Bm8IJUvg.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./button-BZr7_CTB.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./router-D_HcibeE.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./client-CBiMCG7a.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/lucide-react.mjs";
const items = [{
  type: "Formation",
  title: "Gestion administrative des collectivités",
  deadline: "30 juin 2026"
}, {
  type: "Emploi",
  title: "Agent comptable — Mairie d'Adjamé",
  deadline: "20 juin 2026"
}, {
  type: "Marché",
  title: "Fourniture de mobilier — Conseil Régional du Sud-Comoé",
  deadline: "5 juillet 2026"
}];
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto max-w-5xl px-4 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold tracking-tight", children: "Opportunités" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Formations, emplois et marchés publics relayés par la mutuelle." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-2", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: i.type }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-lg font-semibold", children: i.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
          "Date limite : ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: i.deadline })
        ] })
      ] }) }, i.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Page as component
};
