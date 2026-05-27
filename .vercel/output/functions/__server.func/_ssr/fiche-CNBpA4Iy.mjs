import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { M as MembreLayout } from "./MembreLayout-DpHkgsVF.mjs";
import { C as Card, a as CardContent } from "./card-WYnDsEnp.mjs";
import { B as Button } from "./button-BZr7_CTB.mjs";
import { u as useAuth, i as isSupabaseConfigured } from "./router-D_HcibeE.mjs";
import { a as generateFicheAdhesionPDF } from "./pdf-documents-BhYFnGWc.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import "../_libs/jspdf.mjs";
import "../_libs/qrcode.mjs";
import { x as FileText, G as LoaderCircle, D as Download } from "../_libs/lucide-react.mjs";
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
import "./MemberAvatar-BOXOZN_l.mjs";
import "../_libs/radix-ui__react-avatar.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./input-DaEVlcQ1.mjs";
import "../_libs/radix-ui__react-separator.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/radix-ui__react-tooltip.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "./badge-Bm8IJUvg.mjs";
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
import "../_libs/supabase__functions-js.mjs";
import "./mugec-watermark-BEf-JYMj.mjs";
import "fs";
import "path";
import "../_libs/fflate.mjs";
import "../_libs/fast-png.mjs";
import "../_libs/iobuffer.mjs";
import "../_libs/pako.mjs";
import "../_libs/html2canvas.mjs";
import "../_libs/dompurify.mjs";
import "../_libs/canvg.mjs";
import "../_libs/core-js.mjs";
import "../_libs/babel__runtime.mjs";
import "../_libs/raf.mjs";
import "../_libs/performance-now.mjs";
import "../_libs/rgbcolor.mjs";
import "../_libs/svg-pathdata.mjs";
import "../_libs/stackblur-canvas.mjs";
import "../_libs/dijkstrajs.mjs";
import "../_libs/pngjs.mjs";
import "zlib";
import "assert";
import "buffer";
function Page() {
  const {
    user,
    loading
  } = useAuth();
  const nav = useNavigate();
  const [member, setMember] = reactExports.useState(null);
  const [busy, setBusy] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!loading && !user && isSupabaseConfigured) nav({
      to: "/login"
    });
  }, [loading, user, nav]);
  reactExports.useEffect(() => {
    (async () => {
      if (!user || !isSupabaseConfigured) return;
      const {
        data
      } = await supabase.from("members").select("*").eq("user_id", user.id).maybeSingle();
      if (data) {
        setMember({
          nom: data.nom,
          prenoms: data.prenoms,
          dateNaissance: data.date_naissance ?? "",
          lieuNaissance: data.lieu_naissance ?? "",
          sexe: data.sexe ?? void 0,
          email: data.email ?? "",
          telephone: data.telephone ?? "",
          cni: data.cni ?? "",
          adresse: data.adresse ?? "",
          collectivite: data.collectivite ?? "",
          region: data.region ?? "",
          direction: data.direction ?? "",
          fonction: data.fonction ?? "",
          matriculePro: data.matricule_pro ?? data.matricule ?? "",
          dateEmbauche: data.date_embauche ?? "",
          ayantsDroit: data.ayants_droit ?? "",
          photoIdentite: data.photo_url ?? void 0,
          reference: data.matricule ?? user.id
        });
      }
    })();
  }, [user]);
  async function download() {
    if (!member) return;
    setBusy(true);
    try {
      const blob = await generateFicheAdhesionPDF(member);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `fiche-adhesion-${member.matriculePro ?? "mugec"}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success("Fiche d'adhésion téléchargée");
    } catch {
      toast.error("Erreur lors de la génération du PDF");
    } finally {
      setBusy(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MembreLayout, { title: "Fiche d'adhésion", subtitle: "Document administratif officiel — distinct de la carte de membre", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-14 w-14 place-items-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-7 w-7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Fiche d'adhésion MUGEC-CI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Document A4 PDF reprenant l'ensemble de vos informations administratives, vos ayants-droit, votre photo et le cachet officiel." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-2 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Identification complète (nom, prénoms, naissance, sexe, CNI, matricule)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Situation professionnelle (collectivité, direction)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Coordonnées (téléphone, e-mail, adresse)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Tableau des ayants-droit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Engagement, signature et cachet numérique + QR de vérification" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: download, disabled: busy || !member, children: [
        busy ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 h-4 w-4" }),
        busy ? "Génération…" : "Télécharger la fiche (PDF)"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/membre/carte", children: "Voir ma carte de membre →" }) })
    ] }),
    !member && !loading && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "Chargement de vos informations…" })
  ] }) }) }) });
}
export {
  Page as component
};
