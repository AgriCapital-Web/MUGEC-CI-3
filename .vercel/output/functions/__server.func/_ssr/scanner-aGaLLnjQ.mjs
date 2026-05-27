import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./SiteFooter-BBtrihJd.mjs";
import { C as Card, a as CardContent } from "./card-WYnDsEnp.mjs";
import { B as Button } from "./button-BZr7_CTB.mjs";
import { I as Input } from "./input-DaEVlcQ1.mjs";
import { L as Label } from "./label-D5ksbt7L.mjs";
import { W as ScanLine, G as LoaderCircle } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
function parseMatricule(raw) {
  const v = raw.trim();
  if (!v) return null;
  const m = v.match(/(?:\/m\/|\/verifier\/)([^/?#]+)/i);
  if (m) return decodeURIComponent(m[1]);
  return v;
}
function Page() {
  const nav = useNavigate();
  const [manual, setManual] = reactExports.useState("");
  const [starting, setStarting] = reactExports.useState(false);
  const [active, setActive] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const scannerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    return () => {
      scannerRef.current?.stop().catch(() => {
      }).finally(() => scannerRef.current?.clear?.());
    };
  }, []);
  async function startCamera() {
    setError(null);
    setStarting(true);
    try {
      const {
        Html5Qrcode
      } = await import("../_libs/html5-qrcode.mjs");
      const el = document.getElementById("qr-reader");
      if (!el) return;
      const html5 = new Html5Qrcode("qr-reader");
      scannerRef.current = html5;
      await html5.start({
        facingMode: "environment"
      }, {
        fps: 10,
        qrbox: {
          width: 240,
          height: 240
        }
      }, (decoded) => {
        const id = parseMatricule(decoded);
        if (id) {
          html5.stop().then(() => nav({
            to: "/verifier/$matricule",
            params: {
              matricule: id
            }
          }));
        }
      }, () => {
      });
      setActive(true);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Impossible d'accéder à la caméra.";
      setError(msg);
    } finally {
      setStarting(false);
    }
  }
  function onManual(e) {
    e.preventDefault();
    const id = parseMatricule(manual);
    if (id) nav({
      to: "/verifier/$matricule",
      params: {
        matricule: id
      }
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto max-w-2xl px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScanLine, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Scanner un QR Code" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Vérifiez l'authenticité d'une carte de membre MUGEC-CI. La connexion est requise pour consulter les informations du membre." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "qr-reader", className: "overflow-hidden rounded-xl border bg-muted/30" }),
          !active && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: startCamera, disabled: starting, className: "mt-4 w-full", children: [
            starting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ScanLine, { className: "mr-2 h-4 w-4" }),
            starting ? "Démarrage…" : "Activer la caméra"
          ] }),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-destructive", children: error })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full border-t" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center text-xs uppercase", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-card px-2 text-muted-foreground", children: "ou saisir manuellement" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: onManual, className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m", children: "Matricule MUGEC-CI" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "m", placeholder: "Ex: MUGEC-2026-00001", value: manual, onChange: (e) => setManual(e.target.value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "outline", className: "w-full", disabled: !manual.trim(), children: "Vérifier" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Page as component
};
