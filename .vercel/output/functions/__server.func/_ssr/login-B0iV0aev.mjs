import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./SiteFooter-BBtrihJd.mjs";
import { C as Card, a as CardContent } from "./card-WYnDsEnp.mjs";
import { I as Input } from "./input-DaEVlcQ1.mjs";
import { L as Label } from "./label-D5ksbt7L.mjs";
import { l as logo, B as Button } from "./button-BZr7_CTB.mjs";
import { i as isSupabaseConfigured, g as getCurrentDashboardPath } from "./router-D_HcibeE.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { c as createSsrRpc } from "./createSsrRpc-D5GVPY95.mjs";
import { a as createServerFn } from "./server-CR6ahDdE.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import "../_libs/seroval.mjs";
import { v as EyeOff, u as Eye } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
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
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const inputSchema = objectType({
  identifier: stringType().trim().min(3).max(255),
  password: stringType().min(1).max(200)
});
const loginWithIdentifier = createServerFn({
  method: "POST"
}).inputValidator((input) => inputSchema.parse(input)).handler(createSsrRpc("b0eb4bf9fd20913ad178e990f5d9cb9e40236263e1eab7a6aae77cc773498ef4"));
function Page() {
  const [identifier, setIdentifier] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [errorMsg, setErrorMsg] = reactExports.useState(null);
  const doLogin = useServerFn(loginWithIdentifier);
  async function onSubmit(e) {
    e.preventDefault();
    setErrorMsg(null);
    if (!isSupabaseConfigured) {
      setErrorMsg("Lovable Cloud / Supabase n'est pas encore connecté.");
      return;
    }
    setLoading(true);
    try {
      const res = await doLogin({
        data: {
          identifier,
          password
        }
      });
      if (!res?.ok) {
        setErrorMsg("Identifiant ou mot de passe incorrect, veuillez réessayer.");
        return;
      }
      const {
        error: setErr
      } = await supabase.auth.setSession({
        access_token: res.access_token,
        refresh_token: res.refresh_token
      });
      if (setErr) {
        console.error("login setSession failed", setErr);
        setErrorMsg("Identifiant ou mot de passe incorrect, veuillez réessayer.");
        return;
      }
      let target = res.dashboard_path || "/membre";
      if (target === "/membre") {
        const computed = await getCurrentDashboardPath();
        if (computed && computed !== "/membre") {
          target = computed;
        }
      }
      toast.success("Bienvenue !");
      window.location.assign(target);
    } catch (err) {
      console.error("login failed", err);
      setErrorMsg("Identifiant ou mot de passe incorrect, veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto max-w-md px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "MUGEC-CI", className: "mx-auto h-16" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-center text-2xl font-bold", children: "Espace membre" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-center text-sm text-muted-foreground", children: "Connectez-vous à votre compte MUGEC-CI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "mt-6 space-y-4", children: [
        errorMsg && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "alert", "aria-live": "assertive", className: "rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive", children: errorMsg }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "identifier", children: "Identifiant (numéro de téléphone ou identifiant admin)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "identifier", type: "text", required: true, value: identifier, onChange: (e) => {
            setIdentifier(e.target.value);
            if (errorMsg) setErrorMsg(null);
          }, placeholder: "Ex: 0758894363, mugecadmin ou admininoce", "aria-invalid": errorMsg ? true : void 0, className: errorMsg ? "border-destructive focus-visible:ring-destructive" : void 0 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "Mot de passe" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "password", type: showPassword ? "text" : "password", required: true, value: password, onChange: (e) => {
              setPassword(e.target.value);
              if (errorMsg) setErrorMsg(null);
            }, className: `pr-10 ${errorMsg ? "border-destructive focus-visible:ring-destructive" : ""}`, "aria-invalid": errorMsg ? true : void 0 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPassword((v) => !v), "aria-label": showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe", className: "absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground", tabIndex: -1, children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", disabled: loading, children: loading ? "Connexion…" : "Se connecter" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-sm text-muted-foreground", children: [
        "Pas encore membre ? ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/inscription", className: "text-primary underline", children: "S'inscrire" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Page as component
};
