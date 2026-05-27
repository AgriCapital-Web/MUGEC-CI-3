import { c as createServerRpc, s as supabaseAdmin } from "./client.server-D02uteyR.mjs";
import { a as createServerFn } from "./server-CR6ahDdE.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-B6uwEovA.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, r as recordType, s as stringType, u as unionType, n as numberType, a as arrayType, e as enumType } from "../_libs/zod.mjs";
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
function render(template, ctx) {
  return template.replace(/{{\s*(\w+)\s*}}/g, (_, k) => String(ctx[k] ?? ""));
}
async function sendSms(to, body) {
  const url = process.env.SMS_API_URL;
  const key = process.env.SMS_API_KEY;
  const sender = process.env.SMS_SENDER ?? "MUGEC-CI";
  if (!url || !key) return {
    ok: false,
    error: "SMS provider not configured"
  };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`
      },
      body: JSON.stringify({
        to,
        from: sender,
        text: body
      })
    });
    return {
      ok: res.ok,
      reference: res.headers.get("x-request-id") ?? null,
      status: res.status
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : String(e)
    };
  }
}
async function sendWhatsapp(to, body) {
  const url = process.env.WHATSAPP_API_URL;
  const token = process.env.WHATSAPP_API_TOKEN;
  const from = process.env.WHATSAPP_SENDER_ID;
  if (!url || !token) return {
    ok: false,
    error: "WhatsApp provider not configured"
  };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        from,
        type: "text",
        text: {
          body
        }
      })
    });
    return {
      ok: res.ok,
      status: res.status
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : String(e)
    };
  }
}
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
async function sendEmail(to, subject, body) {
  const url = process.env.EMAIL_API_URL;
  const key = process.env.EMAIL_API_KEY;
  const from = process.env.EMAIL_FROM ?? "no-reply@mugec-ci.ci";
  if (!url || !key) return {
    ok: false,
    error: "Email provider not configured"
  };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: escapeHtml(subject),
        text: body,
        html: `<pre style="font-family:Inter,Arial,sans-serif;white-space:pre-wrap">${escapeHtml(body)}</pre>`
      })
    });
    return {
      ok: res.ok,
      status: res.status
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : String(e)
    };
  }
}
const dispatchNotification_createServerFn_handler = createServerRpc({
  id: "a545897a1d6a034569ba7081a3c11133ff3713b0d5859bf852cb64e59db8bd59",
  name: "dispatchNotification",
  filename: "src/lib/notifications.functions.ts"
}, (opts) => dispatchNotification.__executeServer(opts));
const dispatchNotification = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
  event: stringType().min(2).max(64),
  memberId: stringType().uuid().optional(),
  userId: stringType().uuid().optional(),
  to: objectType({
    email: stringType().email().optional(),
    phone: stringType().min(6).max(20).optional(),
    whatsapp: stringType().min(6).max(20).optional()
  }).default({}),
  channels: arrayType(enumType(["email", "sms", "whatsapp", "in_app"])).default(["email", "sms", "whatsapp"]),
  context: recordType(stringType(), unionType([stringType(), numberType()])).default({})
}).parse(input)).handler(dispatchNotification_createServerFn_handler, async ({
  data,
  context: ctx
}) => {
  let {
    event,
    memberId,
    userId,
    to,
    channels,
    context
  } = data;
  const callerId = ctx.userId;
  const isSelfUser = userId && userId === callerId;
  let memberRow = null;
  if (memberId) {
    const {
      data: m
    } = await supabaseAdmin.from("members").select("user_id,email,telephone").eq("id", memberId).maybeSingle();
    memberRow = m ?? null;
  }
  const isSelfMember = !!memberRow && memberRow.user_id === callerId;
  const {
    data: roles
  } = await supabaseAdmin.from("user_roles").select("role").eq("user_id", callerId);
  const adminRoles = /* @__PURE__ */ new Set(["super_admin", "admin_national", "admin_regional", "admin_local", "agent_saisie", "president", "secretaire_general", "tresorier_national", "commissaire_comptes", "directeur_executif", "comite_controle", "conseil_sages", "secretaire_regional", "tresorier_regional", "delegue_section"]);
  const isAdmin = (roles ?? []).some((r) => adminRoles.has(String(r.role)));
  if (!isAdmin) {
    if (!isSelfUser && !isSelfMember) {
      throw new Error("Forbidden: admin role required");
    }
    const SELF_ALLOWED_EVENTS = /* @__PURE__ */ new Set(["registration_completed", "payment_confirmed", "prestation_submitted"]);
    if (!SELF_ALLOWED_EVENTS.has(event)) {
      throw new Error("Forbidden: event not allowed for non-admin caller");
    }
    userId = callerId;
    to = {
      email: memberRow?.email ?? void 0,
      phone: memberRow?.telephone ?? void 0,
      whatsapp: memberRow?.telephone ?? void 0
    };
    const safeContext = {};
    for (const [k, v] of Object.entries(context)) {
      if (k === "message" || k === "html" || k === "body") continue;
      safeContext[k] = v;
    }
    context = safeContext;
  }
  const {
    data: templates,
    error
  } = await supabaseAdmin.from("notification_templates").select("*").eq("event", event).eq("active", true);
  if (error) {
    console.error("dispatchNotification: template query failed", error);
    throw new Error("Erreur lors de l'envoi de la notification.");
  }
  const results = [];
  for (const t of templates ?? []) {
    if (!channels.includes(t.channel)) continue;
    const title = render(t.title, context);
    const body = render(t.body, context);
    let outcome = {
      ok: false,
      error: "no_target"
    };
    if (t.channel === "email" && to.email) outcome = await sendEmail(to.email, title, body);
    else if (t.channel === "sms" && to.phone) outcome = await sendSms(to.phone, body);
    else if (t.channel === "whatsapp" && (to.whatsapp || to.phone)) outcome = await sendWhatsapp(to.whatsapp ?? to.phone, body);
    else if (t.channel === "in_app" && userId) outcome = {
      ok: true
    };
    await supabaseAdmin.from("notifications_log").insert({
      member_id: memberId ?? null,
      user_id: userId ?? null,
      canal: t.channel,
      event,
      contenu: `${title}

${body}`,
      statut: outcome.ok ? "envoye" : "echoue",
      error_message: outcome.error ?? null,
      sent_at: outcome.ok ? (/* @__PURE__ */ new Date()).toISOString() : null
    });
    if (t.channel === "in_app" && userId) {
      await supabaseAdmin.from("notifications").insert({
        user_id: userId,
        channel: "in_app",
        title,
        body
      });
    }
    results.push({
      channel: t.channel,
      ok: outcome.ok,
      error: outcome.error
    });
  }
  return {
    results
  };
});
export {
  dispatchNotification_createServerFn_handler
};
