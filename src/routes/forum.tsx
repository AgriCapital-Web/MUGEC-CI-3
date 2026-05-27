import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/lib/auth";
import { MessageSquare, Lock, Plus, Loader2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export const Route = createFileRoute("/forum")({
  component: Page,
});

type Topic = { id: string; title: string; author_id: string; created_at: string; closed: boolean; updated_at: string };
type Message = { id: string; topic_id: string; author_id: string; body: string; created_at: string };

function Page() {
  const { user } = useAuth();
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [busy, setBusy] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [reply, setReply] = useState("");
  const [loadingTopic, setLoadingTopic] = useState(false);

  async function loadTopics() {
    setLoading(true);
    const { data, error } = await supabase
      .from("forum_topics")
      .select("id,title,author_id,created_at,closed,updated_at")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) {
      toast.error("Impossible de charger le forum");
      setTopics([]);
    } else {
      setTopics((data as Topic[]) ?? []);
    }

    setLoading(false);
  }

  async function loadTopicMessages(topicId: string) {
    setLoadingTopic(true);
    const { data, error } = await supabase
      .from("forum_messages")
      .select("id,topic_id,author_id,body,created_at")
      .eq("topic_id", topicId)
      .order("created_at", { ascending: true });

    if (error) {
      toast.error("Impossible de charger les messages");
      setMessages([]);
    } else {
      setMessages((data as Message[]) ?? []);
    }

    setLoadingTopic(false);
  }

  useEffect(() => {
    if (user) {
      void loadTopics();
    } else {
      setTopics([]);
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (selectedTopic && user) {
      void loadTopicMessages(selectedTopic.id);
    }
  }, [selectedTopic, user]);

  async function createTopic(e: React.FormEvent) {
    e.preventDefault();
    if (!user || title.trim().length < 4) return;
    setBusy(true);
    const { error } = await supabase.from("forum_topics").insert({
      title: title.trim(),
      author_id: user.id,
    });
    setBusy(false);
    if (error) { toast.error("Impossible de créer le sujet"); return; }
    toast.success("Sujet créé");
    setTitle("");
    setCreating(false);
    void loadTopics();
  }

  async function openTopic(topic: Topic) {
    setSelectedTopic(topic);
    if (!user) {
      setMessages([]);
      return;
    }
    await loadTopicMessages(topic.id);
  }

  async function createReply() {
    if (!user || !selectedTopic || reply.trim().length < 3) return;
    setBusy(true);
    const { error } = await supabase.from("forum_messages").insert({
      topic_id: selectedTopic.id,
      author_id: user.id,
      body: reply.trim(),
    });
    setBusy(false);
    if (error) {
      toast.error("Impossible de publier la réponse");
      return;
    }
    toast.success("Réponse publiée");
    setReply("");
    await loadTopicMessages(selectedTopic.id);
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Forum & Discussions</h1>
            <p className="mt-2 text-muted-foreground">
              Espace réservé aux membres. Tout utilisateur connecté peut créer un sujet et répondre aux discussions.
            </p>
          </div>
          {user && (
            <Button onClick={() => setCreating((c) => !c)}>
              <Plus className="mr-2 h-4 w-4" /> {creating ? "Annuler" : "Nouveau sujet"}
            </Button>
          )}
        </div>

        {!user ? (
          <Card className="mt-6">
            <CardContent className="text-center">
              <Lock className="mx-auto mb-4 h-8 w-8 text-muted-foreground" />
              <h2 className="text-xl font-semibold">Espace réservé aux membres</h2>
              <p className="mt-2 text-muted-foreground">
                Connectez-vous pour accéder aux sujets et participer aux discussions.
              </p>
              <Button className="mt-4" asChild>
                <Link to="/login">Se connecter</Link>
              </Button>
            </CardContent>
          </Card>
        ) : selectedTopic ? (
          <div className="mt-6 space-y-4">
            <Card>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Sujet</p>
                    <h2 className="text-2xl font-semibold">{selectedTopic.title}</h2>
                    <p className="text-xs text-muted-foreground">
                      Créé le {new Date(selectedTopic.created_at).toLocaleString("fr-FR")}
                      {selectedTopic.closed ? " · Fermé" : ""}
                    </p>
                  </div>
                  <Button variant="secondary" onClick={() => { setSelectedTopic(null); setReply(""); setMessages([]); }}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Retour
                  </Button>
                </div>
                {user ? (
                  <div className="space-y-3">
                    {loadingTopic ? (
                      <div className="p-6 text-center text-muted-foreground">Chargement des messages...</div>
                    ) : messages.length === 0 ? (
                      <div className="p-6 text-muted-foreground">Aucun message pour ce sujet.</div>
                    ) : (
                      <div className="space-y-4">
                        {messages.map((message) => (
                          <Card key={message.id} className="border">
                            <CardContent>
                              <p className="text-sm text-muted-foreground">{message.author_id}</p>
                              <p className="mt-2 text-sm leading-6">{message.body}</p>
                              <p className="mt-3 text-xs text-muted-foreground">{new Date(message.created_at).toLocaleString("fr-FR")}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                    {selectedTopic.closed ? (
                      <div className="rounded-xl border border-muted p-4 text-sm text-muted-foreground">Ce sujet est fermé, vous ne pouvez plus répondre.</div>
                    ) : (
                      <div className="space-y-3">
                        <Textarea
                          value={reply}
                          onChange={(e) => setReply(e.target.value)}
                          placeholder="Écrire une réponse..."
                          rows={4}
                        />
                        <Button disabled={busy || reply.trim().length < 3} onClick={createReply}>
                          {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Répondre
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="text-center">
                      <Lock className="mx-auto mb-4 h-8 w-8 text-muted-foreground" />
                      <p className="text-muted-foreground mb-4">Connectez-vous pour lire les messages du sujet et répondre.</p>
                      <Button asChild><Link to="/login">Se connecter</Link></Button>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </div>
        ) : (
          <>
            {creating && user && (
              <Card className="mt-6">
                <CardContent className="p-6">
                  <form onSubmit={createTopic} className="space-y-3">
                    <Input
                      id="t"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      maxLength={200}
                      placeholder="Ex: Question sur les cotisations"
                    />
                    <Button type="submit" disabled={busy || title.trim().length < 4}>
                      {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Publier
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            <div className="mt-6 space-y-3">
              {loading ? (
                <div className="flex items-center justify-center p-10"><Loader2 className="h-5 w-5 animate-spin" /></div>
              ) : topics.length === 0 ? (
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MessageSquare className="h-5 w-5" />
                      Aucun sujet pour le moment. Soyez le premier à lancer une discussion !
                    </div>
                  </CardContent>
                </Card>
              ) : (
                topics.map((t) => (
                  <Card key={t.id} className="transition-shadow hover:shadow-md">
                    <CardContent className="flex items-center justify-between gap-3 p-4 cursor-pointer" onClick={() => void openTopic(t)}>
                      <div className="min-w-0">
                        <p className="truncate font-medium">{t.title}</p>
                        <p className="text-xs text-muted-foreground">{new Date(t.created_at).toLocaleString("fr-FR")}{t.closed ? " · fermé" : ""}</p>
                      </div>
                      <MessageSquare className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}
