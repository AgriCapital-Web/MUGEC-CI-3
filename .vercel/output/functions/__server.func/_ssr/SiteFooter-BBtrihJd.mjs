import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { l as logo, B as Button } from "./button-BZr7_CTB.mjs";
import { u as useAuth } from "./router-D_HcibeE.mjs";
import { U as QrCode } from "../_libs/lucide-react.mjs";
const nav = [
  { to: "/", label: "Accueil" },
  { to: "/actualites", label: "Actualités" },
  { to: "/opportunites", label: "Opportunités" },
  { to: "/forum", label: "Forum" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const { user, signOut } = useAuth();
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => setMounted(true), []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 border-b bg-background/95 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex h-28 max-w-7xl items-center justify-between gap-4 px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "MUGEC-CI", className: "h-20 w-auto md:h-24" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 md:flex", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: n.to,
        className: "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary",
        activeProps: { className: "text-primary bg-secondary" },
        children: n.label
      },
      n.to
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: !mounted ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-40", "aria-hidden": true }) : user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/membre", children: "Mon espace" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => signOut(), children: "Déconnexion" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "secondary", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/scanner", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "mr-1 h-4 w-4" }),
        "Scanner un QR Code"
      ] }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "Connexion" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/inscription", children: "S'inscrire" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "secondary", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/scanner", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "mr-1 h-4 w-4" }),
        "Scanner un QR Code"
      ] }) })
    ] }) })
  ] }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-24 border-t bg-secondary/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "MUGEC-CI", className: "h-12 w-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-sm text-sm text-muted-foreground", children: "Mutuelle Générale du Personnel des Collectivités Territoriales de Côte d'Ivoire — Solidarité, protection sociale et bien-être des agents." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-3 text-sm font-semibold text-foreground", children: "Documents" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/documents/reglement-interieur-mugec-ci.pdf", target: "_blank", rel: "noreferrer", className: "hover:text-primary", children: "Règlement intérieur" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/documents/fiche-adhesion-vierge.pdf", target: "_blank", rel: "noreferrer", className: "hover:text-primary", children: "Fiche d’inscription (vierge)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/documents/autorisation-prelevement-vierge.pdf", target: "_blank", rel: "noreferrer", className: "hover:text-primary", children: "Autorisation de prélèvement" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/inscription", className: "hover:text-primary", children: "S'inscrire en ligne" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-3 text-sm font-semibold text-foreground", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Siège : Abidjan, Côte d'Ivoire",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "contact@mugec-ci.org"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t bg-background/60 py-4 text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " MUGEC-CI. Tous droits réservés."
    ] })
  ] });
}
export {
  SiteFooter as S,
  SiteHeader as a
};
