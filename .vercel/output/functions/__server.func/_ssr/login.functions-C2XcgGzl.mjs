import { c as createServerRpc, s as supabaseAdmin } from "./client.server-D02uteyR.mjs";
import { a as createServerFn } from "./server-CR6ahDdE.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
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
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const inputSchema = objectType({
  identifier: stringType().trim().min(3).max(255),
  password: stringType().min(1).max(200)
});
const loginWithIdentifier_createServerFn_handler = createServerRpc({
  id: "b0eb4bf9fd20913ad178e990f5d9cb9e40236263e1eab7a6aae77cc773498ef4",
  name: "loginWithIdentifier",
  filename: "src/lib/login.functions.ts"
}, (opts) => loginWithIdentifier.__executeServer(opts));
const loginWithIdentifier = createServerFn({
  method: "POST"
}).inputValidator((input) => inputSchema.parse(input)).handler(loginWithIdentifier_createServerFn_handler, async ({
  data
}) => {
  const generic = {
    ok: false,
    error: "invalid_credentials"
  };
  let email = null;
  const identifier = data.identifier.trim();
  if (identifier.includes("@")) {
    email = identifier;
  } else {
    const lowerIdentifier = identifier.toLowerCase();
    if (lowerIdentifier === "mugecadmin") {
      email = "adminmgec@mugec-ci.local";
    } else if (lowerIdentifier === "admininoce") {
      email = "admininoce@miprojet.local";
    } else {
      const {
        data: resolved,
        error
      } = await supabaseAdmin.rpc("resolve_login_email", {
        p_identifier: identifier
      });
      if (error) {
        console.error("loginWithIdentifier: resolve failed", error);
      }
      if (!email && typeof resolved === "string" && resolved.length > 0) {
        email = resolved;
      }
    }
  }
  if (!email) {
    const digits = identifier.replace(/[^0-9]/g, "");
    if (digits.length >= 6) {
      const {
        data: memberData,
        error: memberError
      } = await supabaseAdmin.from("members").select("email").eq("telephone", digits).limit(1).maybeSingle();
      if (!memberError && memberData?.email) {
        email = memberData.email;
      }
    }
  }
  if (!email) return generic;
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY;
  const authClient = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      storage: void 0
    }
  });
  const {
    data: signIn,
    error: signInErr
  } = await authClient.auth.signInWithPassword({
    email,
    password: data.password
  });
  if (signInErr || !signIn.session || !signIn.user) return generic;
  let dashboard_path = "/membre";
  try {
    const {
      data: path,
      error: pathErr
    } = await supabaseAdmin.rpc("dashboard_path_for", {
      _user_id: signIn.user.id
    });
    if (!pathErr && typeof path === "string" && path.length > 0) {
      dashboard_path = path;
    }
  } catch (err) {
    console.error("loginWithIdentifier: dashboard_path_for failed", err);
  }
  return {
    ok: true,
    access_token: signIn.session.access_token,
    refresh_token: signIn.session.refresh_token,
    dashboard_path
  };
});
export {
  loginWithIdentifier_createServerFn_handler
};
