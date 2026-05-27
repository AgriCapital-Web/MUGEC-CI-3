import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./SiteFooter-BBtrihJd.mjs";
import { B as Button, l as logo } from "./button-BZr7_CTB.mjs";
import { C as Card, a as CardContent } from "./card-WYnDsEnp.mjs";
import { c as ArrowRight, W as ScanLine, a8 as Users, a9 as Wallet, F as FileBadge, _ as ShieldCheck, f as Bell, $ as Smartphone } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const stats = [{
  label: "Membres potentiels",
  value: "50 000+"
}, {
  label: "Collectivités couvertes",
  value: "201"
}, {
  label: "Régions",
  value: "31"
}, {
  label: "Frais d’inscription",
  value: "5 000 F"
}];
const features = [{
  icon: Users,
  title: "Inscription 100% en ligne",
  desc: "Inscrivez-vous en 3 étapes, payez par mobile money et recevez votre validation automatiquement."
}, {
  icon: Wallet,
  title: "Vos cotisations simplifiées",
  desc: "Réglez vos cotisations via Orange Money, MTN MoMo, Wave ou Moov, en temps réel."
}, {
  icon: FileBadge,
  title: "Votre fiche & carte de membre",
  desc: "Téléchargez vos documents officiels au format PDF, signés par la MUGEC-CI."
}, {
  icon: ShieldCheck,
  title: "Un espace sécurisé",
  desc: "Vos données personnelles et vos documents sont protégés et chiffrés."
}, {
  icon: Bell,
  title: "Restez informé(e)",
  desc: "Recevez vos rappels et notifications par SMS, WhatsApp et e-mail."
}, {
  icon: Smartphone,
  title: "Accessible partout",
  desc: "Une plateforme responsive, consultable depuis votre téléphone, où que vous soyez."
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary", children: "Plateforme officielle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl", children: [
            "La MUGEC-CI, ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "solidaire" }),
            " et",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "numérique" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "Bienvenue sur votre plateforme officielle. Inscrivez-vous en ligne, réglez vos cotisations, téléchargez votre carte de membre et restez connecté(e) à votre mutuelle, où que vous soyez." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/inscription", children: [
              "M'inscrire en ligne ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "J'ai déjà un compte" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "secondary", size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/scanner", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ScanLine, { className: "mr-2 h-4 w-4" }),
              " Scanner un QR Code"
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-8 shadow-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "MUGEC-CI", className: "mx-auto h-32 w-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-center text-sm italic text-muted-foreground", children: "« Mutuelle Générale du Personnel des Collectivités Territoriales de Côte d'Ivoire »" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 gap-4", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-secondary/60 p-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-primary", children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.label })
          ] }, s.label)) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto max-w-7xl px-4 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold tracking-tight md:text-4xl", children: "Tous vos services en un seul espace" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "La MUGEC-CI met à votre disposition une plateforme moderne, conçue pour vous, agents des collectivités territoriales." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "transition-shadow hover:shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: f.desc })
      ] }) }, f.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto max-w-7xl px-4 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-br from-primary to-accent p-10 text-center text-white md:p-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold md:text-4xl", children: "Inscrivez-vous dès maintenant à la MUGEC-CI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-2xl text-white/90", children: "Frais d'inscription uniques de 5 000 FCFA, payables par mobile money. Inscription en moins de 5 minutes, sans déplacement." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "secondary", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/inscription", children: "M'inscrire en ligne" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Index as component
};
