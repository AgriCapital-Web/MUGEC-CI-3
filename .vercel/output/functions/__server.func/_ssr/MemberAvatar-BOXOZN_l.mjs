import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Root, F as Fallback, I as Image } from "../_libs/radix-ui__react-avatar.mjs";
import { c as cn } from "./button-BZr7_CTB.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
const Avatar = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    ref,
    className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }
));
Avatar.displayName = Root.displayName;
const AvatarImage = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = Image.displayName;
const AvatarFallback = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = Fallback.displayName;
const AVATARS_BUCKET = "avatars";
const SIGN_TTL_SECONDS = 60 * 60;
const cache = /* @__PURE__ */ new Map();
function extractAvatarPath(stored) {
  if (!stored) return null;
  if (stored.startsWith("data:")) return null;
  const marker = `/storage/v1/object/`;
  const idx = stored.indexOf(marker);
  if (idx >= 0) {
    const after = stored.slice(idx + marker.length);
    const parts = after.split("/");
    if (parts.length >= 3 && parts[1] === AVATARS_BUCKET) {
      const path = parts.slice(2).join("/").split("?")[0];
      return decodeURIComponent(path);
    }
  }
  if (!/^https?:\/\//.test(stored)) return stored.replace(/^\/+/, "");
  return null;
}
async function getDisplayableAvatarUrl(stored) {
  if (!stored) return null;
  if (stored.startsWith("data:")) return stored;
  const path = extractAvatarPath(stored);
  if (!path) return stored;
  const cached = cache.get(path);
  const now = Date.now();
  if (cached && cached.expires > now + 3e4) return cached.url;
  const { data, error } = await supabase.storage.from(AVATARS_BUCKET).createSignedUrl(path, SIGN_TTL_SECONDS);
  if (error || !data?.signedUrl) return null;
  cache.set(path, { url: data.signedUrl, expires: now + SIGN_TTL_SECONDS * 1e3 });
  return data.signedUrl;
}
function useResolvedAvatar(stored) {
  const [url, setUrl] = reactExports.useState(null);
  reactExports.useEffect(() => {
    let active = true;
    if (!stored) {
      setUrl(null);
      return;
    }
    getDisplayableAvatarUrl(stored).then((u) => {
      if (active) setUrl(u);
    });
    return () => {
      active = false;
    };
  }, [stored]);
  return url;
}
function MemberAvatarImage({ src, alt }) {
  const url = useResolvedAvatar(src);
  if (!url) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: url, alt });
}
function MemberAvatarImg({
  src,
  alt,
  className
}) {
  const url = useResolvedAvatar(src);
  if (!url) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: url, alt: alt ?? "", className });
}
export {
  Avatar as A,
  MemberAvatarImage as M,
  AvatarFallback as a,
  MemberAvatarImg as b
};
