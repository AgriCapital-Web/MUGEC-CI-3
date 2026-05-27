import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as SiteHeader, S as SiteFooter } from "./SiteFooter-BBtrihJd.mjs";
import { C as Card, a as CardContent } from "./card-WYnDsEnp.mjs";
import { I as Input } from "./input-DaEVlcQ1.mjs";
import { L as Label } from "./label-D5ksbt7L.mjs";
import { T as Textarea } from "./textarea-BBdx9Lan.mjs";
import { B as Button } from "./button-BZr7_CTB.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { K as MapPin, R as Phone, M as Mail, o as CircleCheck, G as LoaderCircle } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function Page() {
  const [form, setForm] = reactExports.useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: ""
  });
  const [busy, setBusy] = reactExports.useState(false);
  const [sent, setSent] = reactExports.useState(false);
  const [err, setErr] = reactExports.useState(null);
  function update(k, v) {
    setForm((f) => ({
      ...f,
      [k]: v
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();
    setErr(null);
    if (form.nom.trim().length < 2) {
      setErr("Veuillez indiquer votre nom.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setErr("E-mail invalide.");
      return;
    }
    if (form.message.trim().length < 5) {
      setErr("Votre message est trop court.");
      return;
    }
    setBusy(true);
    try {
      const {
        data: {
          user
        }
      } = await supabase.auth.getUser();
      const {
        error
      } = await supabase.from("contact_messages").insert({
        nom: form.nom.trim(),
        email: form.email.trim(),
        telephone: form.telephone.trim() || null,
        sujet: form.sujet.trim() || null,
        message: form.message.trim(),
        user_id: user?.id ?? null
      });
      if (error) throw error;
      setSent(true);
      toast.success("Message envoyé avec succès");
      setForm({
        nom: "",
        email: "",
        telephone: "",
        sujet: "",
        message: ""
      });
    } catch (e2) {
      console.error("contact submit failed", e2);
      setErr("Une erreur s'est produite. Veuillez réessayer plus tard.");
      toast.error("L'envoi a échoué");
    } finally {
      setBusy(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto max-w-5xl px-4 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold tracking-tight", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Joignez la MUGEC-CI ou écrivez-nous via le formulaire." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-4 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mx-auto h-8 w-8 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm", children: "Siège — Abidjan, Côte d'Ivoire" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mx-auto h-8 w-8 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm", children: "07 58 89 43 63 / 07 08 27 67 51" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mx-auto h-8 w-8 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm", children: "contact@mugec-ci.org" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6 md:p-8", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 py-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-12 w-12 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Message bien reçu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Nous accusons réception de votre message. Notre équipe vous répondra dans les meilleurs délais." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setSent(false), children: "Envoyer un autre message" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "nom", children: "Nom complet *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "nom", required: true, value: form.nom, onChange: (e) => update("nom", e.target.value), maxLength: 120 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "E-mail *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", required: true, value: form.email, onChange: (e) => update("email", e.target.value), maxLength: 255 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "tel", children: "Téléphone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "tel", value: form.telephone, onChange: (e) => update("telephone", e.target.value), maxLength: 32 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "sujet", children: "Sujet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "sujet", value: form.sujet, onChange: (e) => update("sujet", e.target.value), maxLength: 200 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "message", children: "Message *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "message", required: true, rows: 6, value: form.message, onChange: (e) => update("message", e.target.value), maxLength: 4e3 })
        ] }),
        err && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-2 text-sm text-destructive", children: err }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: busy, children: [
          busy && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
          busy ? "Envoi…" : "Envoyer le message"
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Page as component
};
