import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { toast } from "sonner";
import logo from "@/assets/mugec-logo.png";

export const Route = createFileRoute("/login")({
  component: Page,
});

function Page() {
  const nav = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function resolveEmail(input: string): string {
    const v = input.trim();
    if (v.includes("@")) return v;
    const lower = v.toLowerCase();
    // Comptes admin spéciaux (identifiant avec lettres)
    if (lower === "inoceadmin") return "inoceadmin@miprojet.local";
    if (lower === "adminmgec") return "adminmgec@mugec-ci.local";
    // Sinon : membres → numéro de téléphone (uniquement chiffres / +)
    const digits = v.replace(/[\s.\-()]/g, "");
    return `${digits}@mugec-phone.local`;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isSupabaseConfigured) {
      toast.error("Lovable Cloud / Supabase n'est pas encore connecté.");
      return;
    }
    setLoading(true);
    const email = resolveEmail(identifier);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) toast.error(error.message);
    else {
      toast.success("Bienvenue !");
      // Redirection selon rôle
      const { data: roles } = await supabase.from("user_roles").select("role").limit(20);
      const r = (roles || []).map((x: { role: string }) => x.role);
      if (r.includes("super_admin")) nav({ to: "/admin/miprojet" });
      else if (r.some((x) => x.startsWith("admin_") || ["president","secretaire_general","tresorier_national","directeur_executif"].includes(x))) nav({ to: "/admin" });
      else nav({ to: "/membre" });
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container mx-auto max-w-md px-4 py-16">
        <Card>
          <CardContent className="p-8">
            <img src={logo} alt="MUGEC-CI" className="mx-auto h-16" />
            <h1 className="mt-4 text-center text-2xl font-bold">Espace membre</h1>
            <p className="mt-1 text-center text-sm text-muted-foreground">Connectez-vous à votre compte MUGEC-CI</p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <Label htmlFor="identifier">Identifiant (numéro de téléphone ou identifiant admin)</Label>
                <Input id="identifier" type="text" required value={identifier} onChange={(e) => setIdentifier(e.target.value)} placeholder="Ex: 0758894363 ou inoceadmin" />
              </div>
              <div>
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Connexion…" : "Se connecter"}
              </Button>
            </form>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Pas encore membre ? <Link to="/inscription" className="text-primary underline">S'inscrire</Link>
            </p>
          </CardContent>
        </Card>
      </section>
      <SiteFooter />
    </div>
  );
}
