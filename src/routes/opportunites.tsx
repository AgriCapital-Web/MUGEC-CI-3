import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export const Route = createFileRoute("/opportunites")({
  component: Page,
});

type Opportunity = {
  id: string;
  title: string;
  description: string;
  type: string | null;
  date_limite: string | null;
  lieu: string | null;
};

function Page() {
  const [items, setItems] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const { data, error } = await supabase
      .from("opportunites")
      .select("id,title,description,type,date_limite,lieu")
      .eq("published", true)
      .order("date_limite", { ascending: true })
      .limit(50);

    if (error) {
      toast.error("Impossible de charger les opportunités");
      setItems([]);
    } else {
      setItems((data as Opportunity[]) ?? []);
    }

    setLoading(false);
  }

  useEffect(() => { void load(); }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Opportunités</h1>
        <p className="mt-3 text-muted-foreground">
          Formations, emplois et marchés publics relayés par la mutuelle.
        </p>

        {loading ? (
          <div className="mt-10 rounded-xl border border-dashed border-slate-200 bg-muted p-10 text-center text-base text-slate-600">
            Chargement des opportunités...
          </div>
        ) : items.length === 0 ? (
          <Card className="mt-10">
            <CardContent className="p-10 text-center text-muted-foreground">
              Aucune opportunité publiée pour le moment.
            </CardContent>
          </Card>
        ) : (
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {items.map((item) => (
              <Card key={item.id} className="transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{item.type ?? "Général"}</Badge>
                    {item.lieu && <span className="text-sm text-muted-foreground">{item.lieu}</span>}
                  </div>
                  <h2 className="mt-3 text-lg font-semibold">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{item.description}</p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Date limite : <strong>{item.date_limite ? new Date(item.date_limite).toLocaleDateString("fr-FR") : "Sans date limite"}</strong>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}
