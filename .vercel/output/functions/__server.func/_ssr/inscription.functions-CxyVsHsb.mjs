import { c as createServerRpc, s as supabaseAdmin } from "./client.server-D02uteyR.mjs";
import { a as createServerFn } from "./server-CR6ahDdE.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-B6uwEovA.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, e as enumType } from "../_libs/zod.mjs";
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
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
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
const finalizeRegistration_createServerFn_handler = createServerRpc({
  id: "98f0a55c7aa1efc469efdd8d083a01aa15393ff1e0ddf0d90d8d6cd5723cfc5e",
  name: "finalizeRegistration",
  filename: "src/lib/inscription.functions.ts"
}, (opts) => finalizeRegistration.__executeServer(opts));
const finalizeRegistration = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => memberSchema.parse(input)).handler(finalizeRegistration_createServerFn_handler, async ({
  data,
  context
}) => {
  const {
    userId
  } = context;
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const {
    data: member,
    error: memberErr
  } = await supabaseAdmin.from("members").insert({
    user_id: userId,
    nom: data.nom,
    prenoms: data.prenoms,
    date_naissance: data.date_naissance,
    lieu_naissance: data.lieu_naissance,
    sexe: data.sexe,
    email: data.email,
    telephone: data.telephone,
    cni: data.cni,
    adresse: data.adresse,
    collectivite: data.collectivite,
    region: data.region,
    direction: data.direction,
    fonction: data.fonction,
    matricule_pro: data.matricule_pro,
    date_embauche: data.date_embauche || null,
    ayants_droit: data.ayants_droit,
    photo_url: data.photo_url ?? null,
    statut: "actif",
    paiement_methode: data.paiement_methode,
    frais_paye: true,
    payment_reference: data.payment_reference,
    payment_confirmed_at: now,
    droits_ouverts_le: now,
    validation_mode: "automatique"
  }).select().single();
  if (memberErr) {
    console.error("finalizeRegistration: member insert failed", memberErr);
    throw new Error("Échec de la création du compte. Veuillez réessayer.");
  }
  const {
    data: sub,
    error: subErr
  } = await supabaseAdmin.from("subscriptions").insert({
    member_id: member.id,
    type: "inscription",
    montant_total: 5e3,
    part_mutuelle: 4e3,
    part_miprojet: 1e3,
    statut_paiement: "paye",
    operateur: data.paiement_methode,
    reference_transaction: data.payment_reference,
    paid_at: now
  }).select().single();
  if (subErr) {
    console.error("finalizeRegistration: subscription insert failed", subErr);
    throw new Error("Échec de l'enregistrement du paiement. Veuillez réessayer.");
  }
  await supabaseAdmin.from("transactions_miprojet").insert({
    subscription_id: sub.id,
    montant: 1e3,
    statut: "confirme",
    reference: data.payment_reference,
    date_virement: now
  });
  await supabaseAdmin.from("cotisations").insert({
    member_id: member.id,
    periode: (/* @__PURE__ */ new Date()).toISOString().slice(0, 7),
    montant: 5e3,
    statut: "paye",
    methode: data.paiement_methode,
    reference: data.payment_reference,
    paye_le: now
  });
  await supabaseAdmin.from("audit_log").insert({
    user_id: userId,
    action: "registration.completed",
    entity: "members",
    entity_id: member.id,
    metadata: {
      simulated_payment: true,
      reference: data.payment_reference
    }
  });
  const baseUrl = "https://mugec-ci.ivoireprojet.com";
  const ctx = {
    prenoms: member.prenoms,
    nom: member.nom,
    matricule: member.matricule ?? "",
    collectivite: member.collectivite ?? "",
    region: member.region ?? "",
    member_url: `${baseUrl}/membre`,
    montant: 5e3,
    operateur: data.paiement_methode
  };
  try {
    const {
      dispatchNotification
    } = await import("./notifications.functions-uIaxsgFI.mjs");
    await dispatchNotification({
      data: {
        event: "registration_completed",
        memberId: member.id,
        userId,
        to: {
          email: member.email ?? void 0,
          phone: member.telephone ?? void 0,
          whatsapp: member.telephone ?? void 0
        },
        channels: ["email", "sms", "whatsapp"],
        context: ctx
      }
    });
  } catch (e) {
    console.error("notif dispatch failed", e);
  }
  return {
    member,
    subscription: sub
  };
});
export {
  finalizeRegistration_createServerFn_handler
};
