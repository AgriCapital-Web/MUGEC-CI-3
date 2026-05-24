import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/")({ component: AdminDashboard });

type Stats = {
  members_total: number; members_actifs: number; members_en_attente: number;
  cotisations_mois: number; cotisations_total: number;
  prestations_en_cours: number; prestations_validees_mois: number;
  transactions_miprojet_total: number;
};

const PAGE = 50;

function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [members, setMembers] = useState<Array<{ id: string; matricule: string | null; nom: string; prenoms: string; telephone: string | null; statut: string; created_at: string }>>([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadStats() {
    const { data, error } = await supabase.rpc("admin_dashboard_stats");
    if (!error && data) setStats(data as Stats);
  }
  async function loadMembers() {
    setLoading(true);
    let q = supabase
      .from("members")
      .select("id, matricule, nom, prenoms, telephone, statut, created_at")
      .order("created_at", { ascending: false })
      .range(page * PAGE, page * PAGE + PAGE - 1);
    if (search.trim()) {
      const s = `%${search.trim()}%`;
      q = q.or(`nom.ilike.${s},prenoms.ilike.${s},telephone.ilike.${s},matricule.ilike.${s}`);
    }
    const { data, error } = await q;
    if (error) toast.error(error.message);
    else setMembers(data || []);
    setLoading(false);
  }
  useEffect(() => { loadStats(); }, []);
  useEffect(() => { loadMembers(); }, [page]);

  async function setStatus(id: string, statut: string) {
    const { error } = await supabase.from("members").update({ statut }).eq("id", id);
    if (error) toast.error(error.message); else { toast.success("Statut mis à jour"); loadMembers(); loadStats(); }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Tableau de bord MUGEC-CI</h1>
          <Link to="/membre"><Button variant="outline">Espace membre</Button></Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <KPI label="Membres" value={stats?.members_total ?? "—"} />
          <KPI label="Actifs" value={stats?.members_actifs ?? "—"} />
          <KPI label="En attente" value={stats?.members_en_attente ?? "—"} />
          <KPI label="Cotis. ce mois (F)" value={(stats?.cotisations_mois ?? 0).toLocaleString("fr-FR")} />
          <KPI label="Cotis. cumul (F)" value={(stats?.cotisations_total ?? 0).toLocaleString("fr-FR")} />
          <KPI label="Prestations en cours" value={stats?.prestations_en_cours ?? "—"} />
          <KPI label="Prestations validées (mois)" value={stats?.prestations_validees_mois ?? "—"} />
          <KPI label="MiProjet (F)" value={(stats?.transactions_miprojet_total ?? 0).toLocaleString("fr-FR")} />
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Membres ({PAGE}/page)</CardTitle>
            <div className="flex gap-2">
              <Input placeholder="Rechercher nom, téléphone, matricule…" value={search} onChange={(e) => setSearch(e.target.value)} className="w-72" />
              <Button onClick={() => { setPage(0); loadMembers(); }}>Filtrer</Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Matricule</TableHead>
                  <TableHead>Nom</TableHead>
                  <TableHead>Téléphone</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Inscription</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow><TableCell colSpan={6}>Chargement…</TableCell></TableRow>
                ) : members.length === 0 ? (
                  <TableRow><TableCell colSpan={6}>Aucun membre</TableCell></TableRow>
                ) : members.map((m) => (
                  <TableRow key={m.id}>
                    <TableCell className="font-mono text-xs">{m.matricule || "—"}</TableCell>
                    <TableCell>{m.nom} {m.prenoms}</TableCell>
                    <TableCell>{m.telephone || "—"}</TableCell>
                    <TableCell><Badge variant={m.statut === "actif" ? "default" : "secondary"}>{m.statut}</Badge></TableCell>
                    <TableCell>{new Date(m.created_at).toLocaleDateString("fr-FR")}</TableCell>
                    <TableCell className="text-right space-x-1">
                      {m.statut !== "actif" && <Button size="sm" onClick={() => setStatus(m.id, "actif")}>Valider</Button>}
                      {m.statut !== "suspendu" && <Button size="sm" variant="outline" onClick={() => setStatus(m.id, "suspendu")}>Suspendre</Button>}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex justify-between items-center mt-4">
              <Button variant="outline" disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))}>← Précédent</Button>
              <span className="text-sm text-muted-foreground">Page {page + 1}</span>
              <Button variant="outline" disabled={members.length < PAGE} onClick={() => setPage((p) => p + 1)}>Suivant →</Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
}

function KPI({ label, value }: { label: string; value: string | number }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
