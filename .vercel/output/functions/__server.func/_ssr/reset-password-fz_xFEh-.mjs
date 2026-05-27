import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./SiteFooter-BBtrihJd.mjs";
import { C as Card, a as CardContent } from "./card-WYnDsEnp.mjs";
import { I as Input } from "./input-DaEVlcQ1.mjs";
import { L as Label } from "./label-D5ksbt7L.mjs";
import { B as Button } from "./button-BZr7_CTB.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import { t as toast } from "../_libs/sonner.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function Page() {
  const nav = useNavigate();
  const [pwd, setPwd] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  async function onSubmit(e) {
    e.preventDefault();
    if (pwd.length < 8) return toast.error("Minimum 8 caractères");
    setLoading(true);
    const {
      error
    } = await supabase.auth.updateUser({
      password: pwd
    });
    setLoading(false);
    if (error) {
      console.error("reset password failed", error);
      return toast.error("Impossible de mettre à jour le mot de passe. Veuillez réessayer.");
    }
    toast.success("Mot de passe mis à jour");
    nav({
      to: "/membre"
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto max-w-md px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Nouveau mot de passe" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "pwd", children: "Mot de passe (8 caractères min.)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "pwd", type: "password", value: pwd, onChange: (e) => setPwd(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", disabled: loading, children: loading ? "Mise à jour…" : "Mettre à jour" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Page as component
};
