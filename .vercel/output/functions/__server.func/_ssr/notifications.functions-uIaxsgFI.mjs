import { c as createSsrRpc } from "./createSsrRpc-D5GVPY95.mjs";
import { a as createServerFn } from "./server-CR6ahDdE.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-B6uwEovA.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, r as recordType, s as stringType, u as unionType, n as numberType, a as arrayType, e as enumType } from "../_libs/zod.mjs";
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
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
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
}).parse(input)).handler(createSsrRpc("a545897a1d6a034569ba7081a3c11133ff3713b0d5859bf852cb64e59db8bd59"));
export {
  dispatchNotification
};
