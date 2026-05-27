import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const memberSchema = z.object({
  nom: z.string().trim().min(2).max(100),
  prenoms: z.string().trim().min(2).max(150),
  date_naissance: z.string().min(1),
  lieu_naissance: z.string().trim().min(2).max(100),
  sexe: z.enum(["M", "F"]),
  email: z.string().email().max(255),
  telephone: z.string().trim().min(8).max(20),
  cni: z.string().trim().min(4).max(30),
  adresse: z.string().trim().min(2).max(255),
  collectivite: z.string().trim().min(2).max(150),
  region: z.string().trim().max(100).optional().nullable(),
  direction: z.string().trim().max(150).optional().nullable(),
  fonction: z.string().trim().max(150).optional().nullable(),
  matricule_pro: z.string().trim().max(50).optional().nullable(),
  date_embauche: z.string().optional().nullable(),
  ayants_droit: z.string().max(4000).optional().nullable(),
  photo_url: z
    .string()
    .max(500)
    .regex(/^[A-Za-z0-9._\-/]+$/, "Chemin photo invalide")
    .refine((v) => !v.startsWith("data:") && !/^https?:\/\//i.test(v), "Chemin photo invalide")
    .optional()
    .nullable(),
  paiement_methode: z.enum(["orange", "mtn", "wave", "moov"]),
  payment_reference: z.string().min(3).max(80),
});

/**
 * Finalise l'inscription d'un membre.
 * En mode production (PAYMENT_SANDBOX !== 'true'), le membre est créé avec
 * statut 'en_attente' et frais_paye = false en attendant la confirmation
 * de paiement par webhook. En mode sandbox, le paiement est simulé.
 */
const isPaymentSandbox = process.env.PAYMENT_SANDBOX === 'true';
export const finalizeRegistration = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input) => memberSchema.parse(input))
  .handler(async ({ data, context }) => {
    const { userId } = context;
    const now = new Date().toISOString();

    // 1) Membre — activation conditionnelle selon le mode paiement
    const { data: member, error: memberErr } = await supabaseAdmin
      .from("members")
      .insert({
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
        statut: isPaymentSandbox ? "actif" : "en_attente",
        paiement_methode: data.paiement_methode,
        frais_paye: isPaymentSandbox,
        payment_reference: data.payment_reference,
        payment_confirmed_at: isPaymentSandbox ? now : null,
        droits_ouverts_le: isPaymentSandbox ? now : null,
        validation_mode: isPaymentSandbox ? "automatique" : "manuel",
      })
      .select()
      .single();
    if (memberErr) {
      console.error("finalizeRegistration: member insert failed", memberErr instanceof Error ? memberErr.message : String(memberErr));
      throw new Error("Échec de la création du compte. Veuillez réessayer.");
    }

    // 2) Enregistrements financiers — uniquement en mode sandbox
    if (isPaymentSandbox) {
      const { data: sub, error: subErr } = await supabaseAdmin
        .from("subscriptions")
        .insert({
          member_id: member.id,
          type: "inscription",
          montant_total: 5000,
          part_mutuelle: 4000,
          part_miprojet: 1000,
          statut_paiement: "paye",
          operateur: data.paiement_methode,
          reference_transaction: data.payment_reference,
          paid_at: now,
        })
        .select()
        .single();
      if (subErr) {
        console.error("finalizeRegistration: subscription insert failed", subErr instanceof Error ? subErr.message : String(subErr));
        throw new Error("Échec de l'enregistrement du paiement. Veuillez réessayer.");
      }

      // 3) Trace MiPROJET (1 000 FCFA) — confirmé
      await supabaseAdmin.from("transactions_miprojet").insert({
        subscription_id: sub.id,
        montant: 1000,
        statut: "confirme",
        reference: data.payment_reference,
        date_virement: now,
      });

      // 4) Cotisation d'inscription au journal des cotisations
      await supabaseAdmin.from("cotisations").insert({
        member_id: member.id,
        periode: new Date().toISOString().slice(0, 7),
        montant: 5000,
        statut: "paye",
        methode: data.paiement_methode,
        reference: data.payment_reference,
        paye_le: now,
      });
    }

    // 5) Audit
    await supabaseAdmin.from("audit_log").insert({
      user_id: userId,
      action: "registration.completed",
      entity: "members",
      entity_id: member.id,
      metadata: { simulated_payment: true, reference: data.payment_reference },
    });

    // 6) Notification d'accueil
    const baseUrl = "https://mugec-ci.ivoireprojet.com";
    const ctx = {
      prenoms: member.prenoms,
      nom: member.nom,
      matricule: member.matricule ?? "",
      collectivite: member.collectivite ?? "",
      region: member.region ?? "",
      member_url: `${baseUrl}/membre`,
      montant: 5000,
      operateur: data.paiement_methode,
    } as const;

    try {
      const { dispatchNotification } = await import("./notifications.functions");
      await dispatchNotification({
        data: {
          event: "registration_completed",
          memberId: member.id,
          userId,
          to: { email: member.email ?? undefined, phone: member.telephone ?? undefined, whatsapp: member.telephone ?? undefined },
          channels: ["email", "sms", "whatsapp"],
          context: ctx,
        },
      });
    } catch (e) {
      console.error("notif dispatch failed", e);
    }

    return { member, subscription: isPaymentSandbox ? sub : null };
  });
