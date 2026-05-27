import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as MembreLayout, S as Separator } from "./MembreLayout-DpHkgsVF.mjs";
import { C as Card, a as CardContent, c as CardHeader, d as CardTitle } from "./card-WYnDsEnp.mjs";
import { I as Input } from "./input-DaEVlcQ1.mjs";
import { L as Label } from "./label-D5ksbt7L.mjs";
import { B as Button } from "./button-BZr7_CTB.mjs";
import { A as Avatar, M as MemberAvatarImage, a as AvatarFallback } from "./MemberAvatar-BOXOZN_l.mjs";
import { B as Badge } from "./badge-Bm8IJUvg.mjs";
import { u as useAuth } from "./router-D_HcibeE.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { G as LoaderCircle, h as Camera, M as Mail, R as Phone, K as MapPin, g as Briefcase, a4 as Upload, a5 as User, Q as Pencil, aa as X, V as Save } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/radix-ui__react-separator.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
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
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-avatar.mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "../_libs/use-sync-external-store.mjs";
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
function Page() {
  const {
    user,
    loading
  } = useAuth();
  const [m, setM] = reactExports.useState(null);
  const [fetched, setFetched] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState(false);
  const [edit, setEdit] = reactExports.useState(false);
  const [uploading, setUploading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let active = true;
    (async () => {
      if (!user) return;
      const {
        data,
        error
      } = await supabase.from("members").select("*").eq("user_id", user.id).maybeSingle();
      if (!active) return;
      if (error) {
        console.error("profil load failed", error);
        toast.error("Impossible de charger votre profil.");
      }
      setM(data ?? {
        user_id: user.id,
        email: user.email
      });
      setFetched(true);
    })();
    return () => {
      active = false;
    };
  }, [user?.id]);
  async function save() {
    if (!m) return;
    setSaving(true);
    const {
      error
    } = await supabase.from("members").update({
      telephone: m.telephone,
      adresse: m.adresse,
      direction: m.direction,
      fonction: m.fonction,
      collectivite: m.collectivite,
      region: m.region
    }).eq("user_id", user.id);
    setSaving(false);
    if (error) {
      console.error("profil save failed", error);
      return toast.error("Impossible d'enregistrer les modifications.");
    }
    toast.success("Profil mis à jour");
    setEdit(false);
  }
  async function onPhoto(e) {
    const f = e.target.files?.[0];
    if (!f || !user) return;
    setUploading(true);
    const path = `${user.id}/photo-${Date.now()}-${f.name}`;
    const up = await supabase.storage.from("avatars").upload(path, f, {
      upsert: true
    });
    if (up.error) {
      console.error("avatar upload failed", up.error);
      setUploading(false);
      return toast.error("Impossible d'envoyer la photo. Veuillez réessayer.");
    }
    const url = path;
    const {
      error
    } = await supabase.from("members").update({
      photo_url: url
    }).eq("user_id", user.id);
    setUploading(false);
    if (error) {
      console.error("avatar update failed", error);
      return toast.error("Impossible d'enregistrer la photo.");
    }
    setM({
      ...m,
      photo_url: url
    });
    toast.success("Photo mise à jour");
  }
  if (loading || !user || !fetched) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(MembreLayout, { title: "Mon profil", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-96 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }) }) });
  }
  const ro = !edit;
  const initials = ((m.prenoms?.[0] ?? "") + (m.nom?.[0] ?? "")).toUpperCase() || "M";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MembreLayout, { title: "Mon profil", subtitle: "Gérez vos informations personnelles et professionnelles", actions: ro ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setEdit(true), size: "sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "mr-2 h-4 w-4" }),
    " Modifier"
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => setEdit(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "mr-1 h-4 w-4" }),
      " Annuler"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: save, disabled: saving, children: [
      saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "mr-2 h-4 w-4" }),
      "Enregistrer"
    ] })
  ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-1 overflow-hidden border-0 shadow-[var(--shadow-elegant)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-24", style: {
        background: "var(--gradient-primary)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "-mt-12 p-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-24 w-24 ring-4 ring-background shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MemberAvatarImage, { src: m.photo_url }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-xl bg-primary text-primary-foreground", children: initials })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "absolute -bottom-1 -right-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-2 ring-background transition hover:scale-105", children: [
            uploading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3 w-3 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-3 w-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", className: "hidden", onChange: onPhoto, disabled: uploading })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-lg font-bold tracking-tight", children: [
          m.prenoms,
          " ",
          m.nom
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: m.fonction ?? "Membre" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: m.statut === "actif" ? "default" : "secondary", className: "mt-3 capitalize", children: m.statut ?? "en attente" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-left text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: Mail, value: m.email ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: Phone, value: m.telephone ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: MapPin, value: m.collectivite ?? m.region ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: Briefcase, value: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs", children: m.matricule ?? "—" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-4 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed py-2 text-xs text-muted-foreground transition hover:border-primary hover:text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3 w-3" }),
          uploading ? "Envoi en cours…" : "Changer la photo",
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", className: "hidden", onChange: onPhoto, disabled: uploading })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 text-primary" }),
          "Identité"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nom", v: m.nom, disabled: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Prénoms", v: m.prenoms, disabled: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", v: m.email, disabled: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Téléphone", v: m.telephone, disabled: ro, on: (v) => setM({
            ...m,
            telephone: v
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4 text-primary" }),
          "Vie professionnelle"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Collectivité", v: m.collectivite, disabled: ro, on: (v) => setM({
            ...m,
            collectivite: v
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Région", v: m.region, disabled: ro, on: (v) => setM({
            ...m,
            region: v
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Direction / Service", v: m.direction, disabled: ro, on: (v) => setM({
            ...m,
            direction: v
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Fonction", v: m.fonction, disabled: ro, on: (v) => setM({
            ...m,
            fonction: v
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary" }),
          "Adresse postale"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "adresse", className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Adresse complète" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "adresse", value: m.adresse ?? "", disabled: ro, onChange: (e) => setM({
            ...m,
            adresse: e.target.value
          }), className: "h-11", placeholder: "Quartier, ville…" })
        ] }) })
      ] })
    ] })
  ] }) });
}
function Field({
  label,
  v,
  on,
  disabled
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: v ?? "", disabled, onChange: (e) => on?.(e.target.value), className: "h-11 transition disabled:bg-muted/40 disabled:opacity-100" })
  ] });
}
function InfoRow({
  icon: Icon,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-foreground", children: value })
  ] });
}
export {
  Page as component
};
