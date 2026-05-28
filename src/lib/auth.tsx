import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase, isSupabaseConfigured } from "./supabase";
import { getAuthorizedArea } from "@/lib/admin-guard.functions";
import { areaToDashboardPath } from "@/lib/auth-routing";

type Ctx = {
  user: User | null;
  session: Session | null;
  roles: string[];
  isAdmin: boolean;
  isSuperAdmin: boolean;
  loading: boolean;
  signOut: () => Promise<void>;
};

export async function getCurrentSupabaseUser(): Promise<User | null> {
  if (!isSupabaseConfigured) return null;
  const storedUser = readStoredSession()?.user ?? null;
  const freshUser = supabase.auth
    .getSession()
    .then(({ data }) => data.session?.user ?? storedUser)
    .catch(() => storedUser);
  const timeout = new Promise<User | null>((resolve) => {
    window.setTimeout(() => resolve(storedUser), 800);
  });
  return Promise.race([freshUser, timeout]);
}

export async function getCurrentDashboardPath(): Promise<string | null> {
  if (!isSupabaseConfigured) return null;
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) return null;
    const area = await getAuthorizedArea();
    return areaToDashboardPath(area.area);
  } catch {
    return null;
  }
}

function readStoredSession(): Session | null {
  if (typeof window === "undefined") return null;
  try {
    const ref = new URL(import.meta.env.VITE_SUPABASE_URL).hostname.split(".")[0];
    const key = `sb-${ref}-auth-token`;
    const raw = window.localStorage.getItem(key) ?? Object.entries(window.localStorage).find(([k]) => k.startsWith("sb-") && k.endsWith("-auth-token"))?.[1];
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Session;
    return parsed?.access_token && parsed?.user ? parsed : null;
  } catch {
    return null;
  }
}

const AuthCtx = createContext<Ctx>({
  user: null,
  session: null,
  roles: [],
  isAdmin: false,
  isSuperAdmin: false,
  loading: false,
  signOut: async () => {},
});

export const ADMIN_ROLES = [
  "super_admin", "admin_national", "admin_regional", "admin_local", "agent_saisie",
  "president", "secretaire_general", "tresorier_national", "commissaire_comptes",
  "directeur_executif", "comite_controle", "conseil_sages", "secretaire_regional",
  "tresorier_regional", "delegue_section"
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(() => readStoredSession());
  const [roles, setRoles] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }
    setSession(readStoredSession());
    const sessionPromise = supabase.auth.getSession();
    sessionPromise.then(
      ({ data }) => {
        if (!mounted) return;
        setSession(data.session ?? readStoredSession());
        setLoading(false);
      },
      () => {
        if (mounted) setLoading(false);
      },
    );
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      setLoading(false);
    });
    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    if (!session?.user || !isSupabaseConfigured) {
      setRoles([]);
      return;
    }
    supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .then(
        ({ data, error }) => {
          if (!mounted) return;
          if (error || !data) {
            setRoles([]);
            return;
          }
          setRoles((data as { role: string }[]).map((row) => String(row.role)));
        },
        () => {
          if (mounted) setRoles([]);
        },
      );
    return () => {
      mounted = false;
    };
  }, [session?.user?.id]);

  const isAdmin = roles.some((role) => ADMIN_ROLES.includes(role));
  const isSuperAdmin = roles.includes("super_admin");

  return (
    <AuthCtx.Provider
      value={{
        user: session?.user ?? null,
        session,
        roles,
        isAdmin,
        isSuperAdmin,
        loading,
        signOut: async () => {
          try {
            await supabase.auth.signOut();
          } catch {}
          try {
            if (typeof window !== "undefined") {
              Object.keys(window.localStorage)
                .filter((k) => k.startsWith("sb-") && k.endsWith("-auth-token"))
                .forEach((k) => window.localStorage.removeItem(k));
            }
          } catch {}
          setSession(null);
          setRoles([]);
          if (typeof window !== "undefined") {
            window.location.assign("/login");
          }
        },
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
}

export const useAuth = () => useContext(AuthCtx);
