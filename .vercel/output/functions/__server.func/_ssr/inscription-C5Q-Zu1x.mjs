import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./SiteFooter-BBtrihJd.mjs";
import { C as Card, a as CardContent } from "./card-WYnDsEnp.mjs";
import { I as Input } from "./input-DaEVlcQ1.mjs";
import { L as Label } from "./label-D5ksbt7L.mjs";
import { B as Button } from "./button-BZr7_CTB.mjs";
import { T as Textarea } from "./textarea-BBdx9Lan.mjs";
import { S as Select, c as SelectTrigger, d as SelectValue, a as SelectContent, b as SelectItem } from "./select-DnWJAm4t.mjs";
import { P as Progress } from "./progress-D-hD-1Bs.mjs";
import { w as watermarkUrl } from "./mugec-watermark-BEf-JYMj.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { i as isSupabaseConfigured } from "./router-D_HcibeE.mjs";
import { c as createSsrRpc } from "./createSsrRpc-D5GVPY95.mjs";
import { a as createServerFn } from "./server-CR6ahDdE.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-B6uwEovA.mjs";
import { a as generateFicheAdhesionPDF, d as downloadBlob, g as generateAutorisationPrelevementPDF } from "./pdf-documents-BhYFnGWc.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import "../_libs/seroval.mjs";
import "../_libs/jspdf.mjs";
import "../_libs/qrcode.mjs";
import { a5 as User, x as FileText, s as CreditCard, B as BadgeCheck, j as Check, D as Download, b as ArrowLeft, c as ArrowRight, a4 as Upload, aa as X, a1 as Trash2, S as Plus } from "../_libs/lucide-react.mjs";
import { Z as ZodError, o as objectType, s as stringType, e as enumType } from "../_libs/zod.mjs";
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
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-progress.mjs";
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
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
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
function Watermark({ opacity = 0.08 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "aria-hidden": true,
      className: "pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden",
      style: { zIndex: 0 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: watermarkUrl,
          alt: "",
          crossOrigin: "anonymous",
          style: { opacity, width: "85%", maxWidth: "640px", objectFit: "contain" },
          className: "select-none"
        }
      )
    }
  );
}
const memberSchema = objectType({
  nom: stringType().trim().min(2).max(100),
  prenoms: stringType().trim().min(2).max(150),
  date_naissance: stringType().min(1),
  lieu_naissance: stringType().trim().min(2).max(100),
  sexe: enumType(["M", "F"]),
  email: stringType().email().max(255),
  telephone: stringType().trim().min(8).max(20),
  cni: stringType().trim().min(4).max(30),
  adresse: stringType().trim().min(2).max(255),
  collectivite: stringType().trim().min(2).max(150),
  region: stringType().trim().max(100).optional().nullable(),
  direction: stringType().trim().max(150).optional().nullable(),
  fonction: stringType().trim().max(150).optional().nullable(),
  matricule_pro: stringType().trim().max(50).optional().nullable(),
  date_embauche: stringType().optional().nullable(),
  ayants_droit: stringType().max(4e3).optional().nullable(),
  photo_url: stringType().max(500).regex(/^[A-Za-z0-9._\-/]+$/, "Chemin photo invalide").refine((v) => !v.startsWith("data:") && !/^https?:\/\//i.test(v), "Chemin photo invalide").optional().nullable(),
  paiement_methode: enumType(["orange", "mtn", "wave", "moov"]),
  payment_reference: stringType().min(3).max(80)
});
const finalizeRegistration = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => memberSchema.parse(input)).handler(createSsrRpc("98f0a55c7aa1efc469efdd8d083a01aa15393ff1e0ddf0d90d8d6cd5723cfc5e"));
const EMPTY_AYANT = {
  type: "",
  nom: "",
  dateNaissance: "",
  lieuNaissance: ""
};
const TYPE_LABEL = {
  pere: "Père",
  mere: "Mère",
  conjoint: "Conjoint(e)",
  enfant: "Enfant"
};
function AyantsDroitFields({
  value,
  onChange,
  max = 4
}) {
  const list = value.length ? value : [{ ...EMPTY_AYANT }];
  function update(i, patch) {
    const next = list.map((a, idx) => idx === i ? { ...a, ...patch } : a);
    onChange(next);
  }
  function add() {
    if (list.length >= max) return;
    onChange([...list, { ...EMPTY_AYANT }]);
  }
  function remove(i) {
    const next = list.filter((_, idx) => idx !== i);
    onChange(next.length ? next : [{ ...EMPTY_AYANT }]);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    list.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid gap-3 rounded-md border bg-background/50 p-3 md:grid-cols-[160px_1fr_160px_1fr_auto]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Lien de parenté" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: a.type,
                onValueChange: (v) => update(i, { type: v }),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Choisir…" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "pere", children: "Père" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "mere", children: "Mère" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "conjoint", children: "Conjoint(e)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "enfant", children: "Enfant" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Nom complet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: a.nom,
                onChange: (e) => update(i, { nom: e.target.value }),
                placeholder: a.type ? `Nom et prénoms du ${TYPE_LABEL[a.type]}` : "Nom et prénoms"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Date de naissance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                value: a.dateNaissance,
                onChange: (e) => update(i, { dateNaissance: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Lieu de naissance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: a.lieuNaissance,
                onChange: (e) => update(i, { lieuNaissance: e.target.value }),
                placeholder: "Ville / Pays"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              size: "icon",
              variant: "ghost",
              onClick: () => remove(i),
              "aria-label": "Retirer",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
            }
          ) })
        ]
      },
      i
    )),
    list.length < max ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", size: "sm", onClick: add, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-3 w-3" }),
      " Ajouter un ayant-droit (",
      list.length,
      "/",
      max,
      ")"
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
      "Maximum ",
      max,
      " ayants-droit atteint."
    ] })
  ] });
}
function ayantsDroitToText(list) {
  return list.filter((a) => a.type && a.nom).map((a) => {
    const label = TYPE_LABEL[a.type];
    const dn = a.dateNaissance ? ` — né(e) le ${a.dateNaissance}` : "";
    const lieu = a.lieuNaissance ? ` à ${a.lieuNaissance}` : "";
    return `${label} : ${a.nom}${dn}${lieu}`;
  }).join("\n");
}
function FileUploadPreview({
  label,
  value,
  onChange,
  accept = ".pdf,image/png,image/jpeg",
  aspect = "document",
  maxSizeMB = 5
}) {
  const inputRef = reactExports.useRef(null);
  const [error, setError] = reactExports.useState(null);
  async function handleFile(f) {
    setError(null);
    if (!f) return;
    if (f.size > maxSizeMB * 1024 * 1024) {
      setError(`Fichier trop volumineux (max ${maxSizeMB} Mo).`);
      return;
    }
    const dataUrl = await new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(fr.result);
      fr.onerror = reject;
      fr.readAsDataURL(f);
    });
    onChange({ name: f.name, type: f.type, dataUrl });
  }
  const isImage = value?.type?.startsWith("image/");
  const isPdf = value?.type === "application/pdf";
  const ratioClass = aspect === "photo" ? "aspect-[3/4] max-w-[260px]" : aspect === "document" ? "aspect-[16/10] max-w-full" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        ref: inputRef,
        type: "file",
        accept,
        onChange: (e) => handleFile(e.target.files?.[0]),
        className: value ? "hidden" : ""
      }
    ),
    error ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: error }) : null,
    value ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `relative overflow-hidden rounded-md border bg-muted ${ratioClass}`,
          children: isImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: value.dataUrl,
              alt: label,
              className: "h-full w-full object-cover",
              style: { imageRendering: "auto" }
            }
          ) : isPdf ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "iframe",
            {
              src: value.dataUrl,
              title: label,
              className: "h-full w-full"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full w-full flex-col items-center justify-center text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-8 w-8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 text-xs", children: value.name })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            size: "sm",
            variant: "outline",
            onClick: () => inputRef.current?.click(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "mr-1 h-3 w-3" }),
              " Remplacer"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            size: "sm",
            variant: "ghost",
            onClick: () => onChange(null),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "mr-1 h-3 w-3" }),
              " Retirer"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "self-center text-xs text-muted-foreground", children: value.name })
      ] })
    ] }) : null
  ] });
}
function PhotoIdentityUpload({
  label,
  value,
  onChange
}) {
  const inputRef = reactExports.useRef(null);
  const [processing, setProcessing] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  async function handleFile(f) {
    setError(null);
    if (!f) return;
    if (!f.type.startsWith("image/")) {
      setError("Veuillez choisir une image (JPG/PNG).");
      return;
    }
    if (f.size > 4 * 1024 * 1024) {
      setError("Image trop volumineuse (max 4 Mo).");
      return;
    }
    setProcessing(true);
    try {
      const dataUrl = await new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.onload = () => resolve(fr.result);
        fr.onerror = reject;
        fr.readAsDataURL(f);
      });
      const img = await loadImg(dataUrl);
      const targetW = 600;
      const targetH = 800;
      const srcRatio = img.width / img.height;
      const targetRatio = targetW / targetH;
      let sx = 0, sy = 0, sw = img.width, sh = img.height;
      if (srcRatio > targetRatio) {
        sw = img.height * targetRatio;
        sx = (img.width - sw) / 2;
      } else {
        sh = img.width / targetRatio;
        sy = Math.max(0, img.height * 0.08);
        if (sy + sh > img.height) sy = img.height - sh;
      }
      const canvas = document.createElement("canvas");
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, targetW, targetH);
      const finalDataUrl = canvas.toDataURL("image/jpeg", 0.92);
      onChange({ name: f.name, type: "image/jpeg", dataUrl: finalDataUrl });
    } catch {
      setError("Impossible de traiter l'image.");
    } finally {
      setProcessing(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        ref: inputRef,
        type: "file",
        accept: "image/png,image/jpeg",
        onChange: (e) => handleFile(e.target.files?.[0]),
        className: value ? "hidden" : ""
      }
    ),
    error ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: error }) : null,
    processing ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Traitement de l'image…" }) : null,
    value ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-[180px] overflow-hidden rounded-md border-2 border-primary/30 bg-muted shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[3/4] w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: value.dataUrl,
            alt: label,
            className: "h-full w-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/20"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            size: "sm",
            variant: "outline",
            onClick: () => inputRef.current?.click(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "mr-1 h-3 w-3" }),
              " Remplacer"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            size: "sm",
            variant: "ghost",
            onClick: () => onChange(null),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "mr-1 h-3 w-3" }),
              " Retirer"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Aperçu auto-recadré au format photo d'identité (3:4)." })
    ] }) : null
  ] });
}
function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}
const DRAFT_KEY = "mugec_inscription_draft_v2";
const step1Schema = objectType({
  nom: stringType().trim().min(2, "Nom requis").max(100),
  prenoms: stringType().trim().min(2, "Prénoms requis").max(150),
  dateNaissance: stringType().min(1, "Date de naissance requise"),
  lieuNaissance: stringType().trim().min(2).max(100),
  sexe: enumType(["M", "F"]),
  email: stringType().trim().email("Email invalide"),
  telephone: stringType().trim().min(8).max(20),
  cni: stringType().trim().min(4).max(30),
  adresse: stringType().trim().min(2).max(255),
  collectivite: stringType().trim().min(2).max(150),
  matriculePro: stringType().trim().min(2).max(50)
});
const steps = [{
  id: 1,
  label: "Formulaire",
  icon: User
}, {
  id: 2,
  label: "Documents signés",
  icon: FileText
}, {
  id: 3,
  label: "Paiement",
  icon: CreditCard
}, {
  id: 4,
  label: "Confirmation",
  icon: BadgeCheck
}];
const passwordSchema = stringType().min(8).regex(/[A-Z]/).regex(/[0-9]/).regex(/[^A-Za-z0-9]/);
function Page() {
  const nav = useNavigate();
  const finalize = useServerFn(finalizeRegistration);
  const [step, setStep] = reactExports.useState(1);
  const [data, setData] = reactExports.useState({
    sexe: "M",
    paiement: "orange",
    pieceType: "cni",
    ayantsDroit: [{
      ...EMPTY_AYANT
    }]
  });
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [generatingPdf, setGeneratingPdf] = reactExports.useState(null);
  reactExports.useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setData((d) => ({
          ...d,
          ...parsed
        }));
      }
    } catch {
    }
  }, []);
  reactExports.useEffect(() => {
    const t = setTimeout(() => {
      try {
        const {
          password: _pw,
          photoIdentite: _ph,
          ...safe
        } = data;
        localStorage.setItem(DRAFT_KEY, JSON.stringify(safe));
      } catch {
      }
    }, 600);
    return () => clearTimeout(t);
  }, [data]);
  const upd = (k, v) => setData((d) => ({
    ...d,
    [k]: v
  }));
  const val = (k) => data[k] ?? "";
  const ayantsText = () => ayantsDroitToText(data.ayantsDroit ?? []);
  function pdfPayload() {
    return {
      nom: data.nom,
      prenoms: data.prenoms,
      dateNaissance: data.dateNaissance,
      lieuNaissance: data.lieuNaissance,
      sexe: data.sexe,
      email: data.email,
      telephone: data.telephone,
      cni: data.cni,
      adresse: data.adresse,
      collectivite: data.collectivite,
      region: data.region,
      direction: data.direction,
      fonction: data.fonction,
      matriculePro: data.matriculePro,
      dateEmbauche: data.dateEmbauche,
      ayantsDroit: ayantsText(),
      ayantsDroitList: data.ayantsDroit,
      photoIdentite: data.photoIdentite?.dataUrl
    };
  }
  async function downloadFiche() {
    setGeneratingPdf("fiche");
    try {
      const blob = await generateFicheAdhesionPDF(pdfPayload());
      downloadBlob(blob, `fiche-inscription-${data.nom ?? "mugec"}.pdf`);
    } finally {
      setGeneratingPdf(null);
    }
  }
  async function downloadAutorisation() {
    setGeneratingPdf("autorisation");
    try {
      const blob = await generateAutorisationPrelevementPDF(pdfPayload());
      downloadBlob(blob, `autorisation-prelevement-${data.nom ?? "mugec"}.pdf`);
    } finally {
      setGeneratingPdf(null);
    }
  }
  function validateStep() {
    try {
      if (step === 1) {
        step1Schema.parse(data);
        if (!data.photoIdentite) {
          toast.error("La photo d'identité est obligatoire.");
          return false;
        }
        const valid = (data.ayantsDroit ?? []).filter((a) => a.type && a.nom.trim());
        if (valid.length === 0) {
          toast.error("Renseignez au moins un ayant-droit.");
          return false;
        }
      }
      if (step === 2) {
        if (!data.ficheSignee) {
          toast.error("La fiche d'adhésion signée est obligatoire.");
          return false;
        }
        if (!data.autorisationSignee) {
          toast.error("L'autorisation de prélèvement signée est obligatoire.");
          return false;
        }
        if (!data.extraitNaissance) {
          toast.error("L'extrait de naissance est obligatoire.");
          return false;
        }
        if (data.pieceType === "cni") {
          if (!data.cniRecto || !data.cniVerso) {
            toast.error("Veuillez téléverser la CNI recto ET verso.");
            return false;
          }
        } else if (!data.passeport) {
          toast.error("Veuillez téléverser la copie du passeport.");
          return false;
        }
      }
      if (step === 3) {
        if (!data.password || !passwordSchema.safeParse(data.password).success) {
          toast.error("Mot de passe : 8 caractères, 1 majuscule, 1 chiffre, 1 spécial.");
          return false;
        }
      }
      return true;
    } catch (err) {
      if (err instanceof ZodError) {
        err.errors.slice(0, 3).forEach((e) => toast.error(e.message));
      } else {
        toast.error("Veuillez vérifier le formulaire.");
      }
      return false;
    }
  }
  async function submit() {
    if (!validateStep()) return;
    if (!isSupabaseConfigured) {
      toast.error("Supabase non configuré.");
      return;
    }
    setSubmitting(true);
    try {
      const {
        error: authErr
      } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          emailRedirectTo: `${window.location.origin}/membre`
        }
      });
      if (authErr && !/already/i.test(authErr.message)) throw authErr;
      const {
        data: signInData,
        error: signInErr
      } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
      });
      if (signInErr) throw signInErr;
      const payRef = `${(data.paiement ?? "pay").toUpperCase()}-${Date.now()}`;
      let photoPath = null;
      const userId = signInData.user?.id;
      if (data.photoIdentite?.dataUrl && userId) {
        const res = await fetch(data.photoIdentite.dataUrl);
        const blob = await res.blob();
        const ext = (blob.type.split("/")[1] || "jpg").replace(/[^a-z0-9]/gi, "");
        const path = `${userId}/photo-${Date.now()}.${ext}`;
        const {
          error: upErr
        } = await supabase.storage.from("avatars").upload(path, blob, {
          contentType: blob.type,
          upsert: true
        });
        if (upErr) throw upErr;
        photoPath = path;
      }
      await finalize({
        data: {
          nom: data.nom,
          prenoms: data.prenoms,
          date_naissance: data.dateNaissance,
          lieu_naissance: data.lieuNaissance,
          sexe: data.sexe,
          email: data.email,
          telephone: data.telephone,
          cni: data.cni,
          adresse: data.adresse,
          collectivite: data.collectivite,
          region: data.region,
          direction: data.direction || null,
          fonction: data.fonction,
          matricule_pro: data.matriculePro || null,
          date_embauche: data.dateEmbauche || null,
          ayants_droit: ayantsText() || null,
          photo_url: photoPath,
          paiement_methode: data.paiement,
          payment_reference: payRef
        }
      });
      try {
        localStorage.removeItem(DRAFT_KEY);
      } catch {
      }
      toast.success("Inscription validée. Bienvenue !");
      nav({
        to: "/membre"
      });
    } catch (e) {
      console.error("inscription submit failed", e);
      toast.error("Échec de l'inscription. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto max-w-3xl px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Formulaire d'inscription" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-muted-foreground", children: [
        "Étape ",
        step,
        " sur 4 — vos informations sont sauvegardées automatiquement. Frais d'inscription : ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "5 000 FCFA" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: step / 4 * 100 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-2 gap-2 md:grid-cols-4", children: steps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 rounded-md border p-3 text-sm ${s.id === step ? "border-primary bg-primary/5 text-primary" : s.id < step ? "border-accent/40 bg-accent/5 text-accent" : "text-muted-foreground"}`, children: [
          s.id < step ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: s.label })
        ] }, s.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "relative mt-8 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Watermark, { opacity: 0.07 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "relative p-8", children: [
          step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Nom", v: val("nom"), on: (v) => upd("nom", v) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Prénoms", v: val("prenoms"), on: (v) => upd("prenoms", v) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Date de naissance", type: "date", v: val("dateNaissance"), on: (v) => upd("dateNaissance", v) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Lieu de naissance", v: val("lieuNaissance"), on: (v) => upd("lieuNaissance", v) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Sexe" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: data.sexe, onValueChange: (v) => upd("sexe", v), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "M", children: "Masculin" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "F", children: "Féminin" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "N° CNI / Passeport", v: val("cni"), on: (v) => upd("cni", v) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Matricule Solde", v: val("matriculePro"), on: (v) => upd("matriculePro", v) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "E-mail", type: "email", v: val("email"), on: (v) => upd("email", v) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Téléphone (WhatsApp)", v: val("telephone"), on: (v) => upd("telephone", v) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Collectivité d'origine", v: val("collectivite"), on: (v) => upd("collectivite", v) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Région", v: val("region"), on: (v) => upd("region", v) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Direction / Service", v: val("direction"), on: (v) => upd("direction", v) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Fonction", v: val("fonction"), on: (v) => upd("fonction", v) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Date d'embauche", type: "date", v: val("dateEmbauche"), on: (v) => upd("dateEmbauche", v) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Adresse postale" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: val("adresse"), onChange: (e) => upd("adresse", e.target.value), rows: 2 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border bg-secondary/30 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhotoIdentityUpload, { label: "Photo d'identité (auto-cadrée, 3:4)", value: data.photoIdentite ?? null, onChange: (v) => upd("photoIdentite", v) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border bg-secondary/30 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-base font-semibold", children: "Ayants-droit (maximum 4)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 mt-1 text-xs text-muted-foreground", children: "Renseignez chaque ayant-droit : lien de parenté, nom complet, date et lieu de naissance." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AyantsDroitFields, { value: data.ayantsDroit ?? [{
                ...EMPTY_AYANT
              }], onChange: (v) => upd("ayantsDroit", v) })
            ] })
          ] }),
          step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-primary/30 bg-primary/5 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2 font-semibold text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }),
                " Documents pré-remplis"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Téléchargez les documents pré-remplis, imprimez-les, signez-les puis téléversez les scans exigés ci-dessous." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", size: "sm", variant: "outline", onClick: downloadFiche, disabled: generatingPdf !== null, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 h-4 w-4" }),
                  generatingPdf === "fiche" ? "Génération…" : "Fiche d'inscription (pré-remplie)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", size: "sm", variant: "outline", onClick: downloadAutorisation, disabled: generatingPdf !== null, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 h-4 w-4" }),
                  generatingPdf === "autorisation" ? "Génération…" : "Autorisation de prélèvement (pré-remplie)"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileUploadPreview, { label: "Fiche d'inscription signée", value: data.ficheSignee ?? null, onChange: (v) => upd("ficheSignee", v) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileUploadPreview, { label: "Autorisation de prélèvement signée", value: data.autorisationSignee ?? null, onChange: (v) => upd("autorisationSignee", v) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border bg-secondary/30 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Type de pièce d'identité" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: data.pieceType, onValueChange: (v) => {
                upd("pieceType", v);
                if (v === "cni") upd("passeport", null);
                else {
                  upd("cniRecto", null);
                  upd("cniVerso", null);
                }
              }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-2 max-w-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cni", children: "Carte Nationale d'Identité (CNI)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "passeport", children: "Passeport" })
                ] })
              ] }),
              data.pieceType === "cni" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-6 md:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileUploadPreview, { label: "CNI — Recto", value: data.cniRecto ?? null, onChange: (v) => upd("cniRecto", v), aspect: "document" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileUploadPreview, { label: "CNI — Verso", value: data.cniVerso ?? null, onChange: (v) => upd("cniVerso", v), aspect: "document" })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileUploadPreview, { label: "Passeport (page d'identité)", value: data.passeport ?? null, onChange: (v) => upd("passeport", v), aspect: "document" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileUploadPreview, { label: "Extrait de naissance", value: data.extraitNaissance ?? null, onChange: (v) => upd("extraitNaissance", v), aspect: "document" })
          ] }),
          step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Choisissez votre moyen de paiement (5 000 FCFA)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 grid grid-cols-2 gap-3 md:grid-cols-4", children: [{
                id: "orange",
                name: "Orange Money"
              }, {
                id: "mtn",
                name: "MTN MoMo"
              }, {
                id: "wave",
                name: "Wave"
              }, {
                id: "moov",
                name: "Moov Money"
              }].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => upd("paiement", m.id), className: `rounded-md border p-4 text-sm font-medium transition ${data.paiement === m.id ? "border-primary bg-primary/10 text-primary" : "hover:bg-secondary"}`, children: m.name }, m.id)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Numéro de téléphone du paiement", v: val("telephone"), on: (v) => upd("telephone", v) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Créez un mot de passe sécurisé" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", value: val("password"), onChange: (e) => upd("password", e.target.value) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-secondary/60 p-4 text-sm text-muted-foreground", children: [
              "En cliquant sur ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Payer & confirmer" }),
              ", vous acceptez les statuts de la MUGEC-CI et autorisez le débit de 5 000 FCFA sur le numéro renseigné."
            ] })
          ] }),
          step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-primary/30 bg-primary/5 p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2 font-semibold text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-4 w-4" }),
                " Confirmation du dossier"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Après confirmation du paiement, le compte membre, le matricule, la fiche finale avec QR code et la carte CR80 recto/verso sont générés automatiquement." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "grid gap-3 text-sm md:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { k: "Nom complet", v: `${data.prenoms ?? ""} ${data.nom ?? ""}`.trim() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { k: "Téléphone", v: data.telephone ?? "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { k: "Collectivité", v: data.collectivite ?? "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { k: "Paiement", v: `${data.paiement ?? "orange"} — 5 000 FCFA` })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "ghost", onClick: () => setStep((s) => Math.max(1, s - 1)), disabled: step === 1, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
              " Précédent"
            ] }),
            step < 4 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", onClick: () => validateStep() && setStep((s) => s + 1), children: [
              "Continuer ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", onClick: submit, disabled: submitting, children: submitting ? "Traitement…" : "Payer & confirmer" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function F({
  label,
  v,
  on,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type, value: v, onChange: (e) => on(e.target.value) })
  ] });
}
function Summary({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border bg-background/80 p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs text-muted-foreground", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 font-medium text-foreground", children: v || "—" })
  ] });
}
export {
  Page as component
};
