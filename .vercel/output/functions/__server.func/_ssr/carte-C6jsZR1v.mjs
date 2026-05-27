import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as MemberAvatarImg } from "./MemberAvatar-BOXOZN_l.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { M as MembreLayout } from "./MembreLayout-DpHkgsVF.mjs";
import { B as Button, l as logo } from "./button-BZr7_CTB.mjs";
import { C as Card, a as CardContent } from "./card-WYnDsEnp.mjs";
import { u as useAuth, i as isSupabaseConfigured } from "./router-D_HcibeE.mjs";
import { w as watermarkUrl } from "./mugec-watermark-BEf-JYMj.mjs";
import { Q as QRCode } from "../_libs/qrcode.mjs";
import { j as jsPDF } from "../_libs/jspdf.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import { G as LoaderCircle, T as Printer, D as Download } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
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
import "../_libs/dijkstrajs.mjs";
import "fs";
import "../_libs/pngjs.mjs";
import "zlib";
import "assert";
import "buffer";
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
let imageCache = {};
async function imageToDataUrl(src) {
  if (imageCache[src]) return imageCache[src];
  const res = await fetch(src);
  const blob = await res.blob();
  imageCache[src] = await new Promise((resolve) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result);
    fr.readAsDataURL(blob);
  });
  return imageCache[src];
}
function addPdfWatermark(pdf, watermarkData) {
  const anyPdf = pdf;
  anyPdf.setGState(new anyPdf.GState({
    opacity: 0.07
  }));
  pdf.addImage(watermarkData, "PNG", 20, 7, 45, 40, void 0, "FAST");
  anyPdf.setGState(new anyPdf.GState({
    opacity: 1
  }));
}
function writeLabelValue(pdf, label, value, x, y, maxWidth) {
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(5.4);
  pdf.setTextColor(30, 91, 168);
  pdf.text(label.toUpperCase(), x, y);
  pdf.setFont("courier", "normal");
  pdf.setFontSize((value?.length ?? 0) > 26 ? 6.2 : 7);
  pdf.setTextColor(26, 58, 143);
  pdf.text(value?.trim() || "—", x, y + 3.5, {
    maxWidth
  });
}
function drawCardFront(pdf, m, qr, logoData, watermarkData) {
  addPdfWatermark(pdf, watermarkData);
  pdf.setDrawColor(30, 91, 168);
  pdf.setLineWidth(0.7);
  pdf.rect(1.5, 1.5, 82.6, 51, "S");
  pdf.addImage(logoData, "PNG", 4, 3.5, 15, 12, void 0, "FAST");
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(7.5);
  pdf.setTextColor(30, 91, 168);
  pdf.text("CARTE DE MEMBRE MUGEC-CI", 42.8, 7.5, {
    align: "center"
  });
  pdf.setFontSize(4.8);
  pdf.setTextColor(40, 40, 40);
  pdf.text("Mutuelle Générale du Personnel des Collectivités Territoriales", 42.8, 11.2, {
    align: "center"
  });
  pdf.setDrawColor(210, 210, 210);
  pdf.roundedRect(5, 17, 17, 22, 1, 1, "S");
  pdf.setFontSize(5);
  pdf.setTextColor(120, 120, 120);
  pdf.text("PHOTO", 13.5, 28.5, {
    align: "center"
  });
  writeLabelValue(pdf, "Nom & prénoms", `${m.nom ?? ""} ${m.prenoms ?? ""}`.trim(), 25, 18, 38);
  writeLabelValue(pdf, "Matricule", m.matricule, 25, 26, 30);
  writeLabelValue(pdf, "Type", m.type_membre ?? "office", 58, 26, 18);
  writeLabelValue(pdf, "Collectivité", m.collectivite, 25, 34, 34);
  writeLabelValue(pdf, "Statut", m.statut ?? "actif", 58, 34, 18);
  writeLabelValue(pdf, "Date d'inscription", m.date_inscription ? new Date(m.date_inscription).toLocaleDateString("fr-FR") : "—", 25, 42, 30);
  if (qr) pdf.addImage(qr, "PNG", 64, 31, 17, 17, void 0, "FAST");
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(3.8);
  pdf.setTextColor(70, 70, 70);
  pdf.text("QR code vérifiable — marge haute correction pour impression", 64, 50);
}
function drawCardBack(pdf, m, watermarkData) {
  addPdfWatermark(pdf, watermarkData);
  pdf.setDrawColor(30, 91, 168);
  pdf.setLineWidth(0.7);
  pdf.rect(1.5, 1.5, 82.6, 51, "S");
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(8);
  pdf.setTextColor(30, 91, 168);
  pdf.text("MUGEC-CI", 42.8, 10, {
    align: "center"
  });
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(5.8);
  pdf.setTextColor(40, 40, 40);
  pdf.text("Cette carte est strictement personnelle et demeure la propriété de la MUGEC-CI.", 42.8, 19, {
    align: "center",
    maxWidth: 70
  });
  pdf.text("En cas de perte, prévenir immédiatement la mutuelle.", 42.8, 27, {
    align: "center",
    maxWidth: 70
  });
  pdf.setFont("helvetica", "bold");
  pdf.text("À retourner à la MUGEC-CI en cas de cessation de qualité de membre.", 42.8, 35, {
    align: "center",
    maxWidth: 70
  });
  pdf.setFont("courier", "normal");
  pdf.setTextColor(26, 58, 143);
  pdf.text(`Matricule : ${m.matricule ?? "—"}`, 42.8, 43, {
    align: "center"
  });
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(30, 91, 168);
  pdf.text("Tél : 07 58 89 43 63 / 07 08 27 67 51", 42.8, 49, {
    align: "center"
  });
}
function Page() {
  const {
    user,
    loading
  } = useAuth();
  const nav = useNavigate();
  const ref = reactExports.useRef(null);
  const [m, setM] = reactExports.useState({});
  const [qr, setQr] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!loading && !user && isSupabaseConfigured) nav({
      to: "/login"
    });
  }, [loading, user, nav]);
  reactExports.useEffect(() => {
    (async () => {
      if (user && isSupabaseConfigured) {
        const {
          data
        } = await supabase.from("members").select("*").eq("user_id", user.id).maybeSingle();
        if (data) setM(data);
      } else {
        setM({
          nom: "DEMO",
          prenoms: "Utilisateur",
          email: "demo@mugec-ci.org",
          telephone: "+225 00 00 00 00",
          collectivite: "Mairie de Cocody",
          region: "Abidjan",
          fonction: "Agent administratif",
          matricule: "MUGEC-2026-0001",
          cni: "CI00000000",
          date_naissance: "1985-04-12",
          lieu_naissance: "Abidjan"
        });
      }
    })();
  }, [user]);
  reactExports.useEffect(() => {
    const id = m.matricule ?? user?.id ?? "demo";
    const verifyUrl = m.qr_code ?? `https://mugec-ci.ivoireprojet.com/verifier/${encodeURIComponent(id)}`;
    QRCode.toDataURL(verifyUrl, {
      width: 420,
      margin: 4,
      errorCorrectionLevel: "H",
      color: {
        dark: "#000000",
        light: "#ffffff"
      }
    }).then(setQr);
  }, [m, user]);
  async function downloadPDF() {
    setBusy(true);
    try {
      const logoData = await imageToDataUrl(logo);
      const watermarkData = await imageToDataUrl(watermarkUrl);
      const pdf = new jsPDF({
        unit: "mm",
        format: [85.6, 54],
        orientation: "landscape"
      });
      drawCardFront(pdf, m, qr, logoData, watermarkData);
      pdf.addPage([85.6, 54], "landscape");
      drawCardBack(pdf, m, watermarkData);
      pdf.save(`carte-membre-recto-verso-${m.matricule ?? "mugec"}.pdf`);
    } finally {
      setBusy(false);
    }
  }
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin" }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MembreLayout, { title: "Carte de membre", subtitle: "Format CR80 — recto / verso officiel MUGEC-CI", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold tracking-tight", children: "Votre carte membre" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Imprimable en format carte bancaire (85,6 × 54 mm)." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: () => window.print(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "mr-2 h-4 w-4" }),
          " Imprimer"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: downloadPDF, disabled: busy, className: "bg-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 h-4 w-4" }),
          " ",
          busy ? "Génération…" : "Télécharger le PDF"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "grid gap-8 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Recto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[1.585/1] w-full overflow-hidden rounded-2xl text-white shadow-2xl ring-1 ring-black/5", style: {
          background: "linear-gradient(135deg,#0e2f6b 0%,#1e5ba8 45%,#2580c4 75%,#2baa8a 100%)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", "aria-hidden": true, className: "pointer-events-none absolute -right-10 -top-10 h-56 w-56 opacity-[0.08]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute right-3 top-3 flex gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#1e5ba8] ring-1 ring-white/40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#2baa8a] ring-1 ring-white/40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#7cb342] ring-1 ring-white/40" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-white/15 bg-white/5 px-4 py-2.5 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-md bg-white p-1 shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "MUGEC-CI", className: "h-full w-full object-contain" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90", children: "MUGEC-CI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-[9px] text-white/70", children: "Mutuelle Générale du Personnel des Collectivités Territoriales" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto rounded-sm bg-white/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider", children: "Carte officielle" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[88px_1fr] gap-3 px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[108px] w-[88px] overflow-hidden rounded-md bg-white/95 ring-2 ring-white/70 shadow-inner", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MemberAvatarImg, { src: m.photo_url, alt: m.prenoms ?? "membre", className: "h-full w-full object-cover" }),
              !m.photo_url && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center text-[10px] font-medium text-slate-400", children: "PHOTO" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-3", style: {
                background: "linear-gradient(90deg,#1e5ba8,#2baa8a,#7cb342)"
              } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardField, { label: "Nom & prénoms", value: `${m.nom ?? ""} ${m.prenoms ?? ""}`.trim() || "—", bold: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardField, { label: "Matricule", value: m.matricule ?? "—", mono: true }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardField, { label: "Type", value: (m.type_membre ?? "office").toUpperCase() })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardField, { label: "Statut", value: (m.statut ?? "actif").toUpperCase() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardField, { label: "Inscrit le", value: m.date_inscription ? new Date(m.date_inscription).toLocaleDateString("fr-FR") : "—" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 flex items-center gap-3 border-t border-white/15 bg-black/25 px-4 py-2 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] uppercase tracking-wider text-white/70", children: "Collectivité" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-[12px] font-semibold", children: m.collectivite ?? "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto h-12 w-12 shrink-0 overflow-hidden rounded bg-white p-0.5 shadow", children: qr ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: qr, alt: "QR", className: "h-full w-full object-contain" }) : null })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Verso" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[1.585/1] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5", style: {
          background: "linear-gradient(160deg,#ffffff 0%,#f1f6ff 55%,#e4f3ee 100%)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 w-2", style: {
            background: "linear-gradient(180deg,#1e5ba8,#2baa8a,#7cb342)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", "aria-hidden": true, className: "pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full flex-col px-5 py-3 text-slate-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-slate-200 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", className: "h-7 w-7 object-contain" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold uppercase tracking-[0.18em] text-[#1e5ba8]", children: "MUGEC-CI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto text-[9px] font-medium uppercase tracking-wider text-slate-500", children: "République de Côte d'Ivoire" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 space-y-1.5 text-[10px] leading-snug text-slate-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "Cette carte est ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "strictement personnelle" }),
                " et demeure la propriété de la MUGEC-CI. En cas de perte, prévenir immédiatement la mutuelle."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "À retourner à la MUGEC-CI en cas de cessation de qualité de membre. Toute utilisation frauduleuse expose son auteur à des poursuites." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto grid grid-cols-[1fr_auto] items-end gap-3 border-t border-slate-200 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5 text-[9.5px] text-slate-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#1e5ba8]", children: "Tél :" }),
                  " 07 58 89 43 63 / 07 08 27 67 51"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#1e5ba8]", children: "Web :" }),
                  " mugec-ci.ivoireprojet.com"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[#1e5ba8]", children: [
                  "Matricule : ",
                  m.matricule ?? "—"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 h-9 w-24 rounded border border-dashed border-slate-300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] uppercase tracking-wider text-slate-500", children: "Cachet & signature" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-dashed", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-wrap items-center gap-x-4 gap-y-1 px-4 py-3 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: {
          background: "#1e5ba8"
        } }),
        " Bleu MUGEC"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: {
          background: "#2baa8a"
        } }),
        " Teal"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: {
          background: "#7cb342"
        } }),
        " Vert"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto", children: "CR80 · 85,6 × 54 mm · 300 dpi · QR vérifiable" })
    ] }) })
  ] }) });
}
function CardField({
  label,
  value,
  bold,
  mono
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] font-semibold uppercase tracking-[0.14em] text-white/70", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `truncate text-[12px] leading-tight ${bold ? "font-bold" : "font-medium"} ${mono ? "font-mono" : ""}`, children: value })
  ] });
}
export {
  Page as component
};
