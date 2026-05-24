import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import logo from "@/assets/mugec-logo.png";
import {
  ArrowRight,
  UserPlus,
  Wallet,
  IdCard,
  ShieldCheck,
  Bell,
  Smartphone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MUGEC-CI — Plateforme officielle" },
      {
        name: "description",
        content:
          "Plateforme officielle de la MUGEC-CI : inscription en ligne, paiement des cotisations par mobile money, carte de membre et espace sécurisé.",
      },
    ],
  }),
});

const stats = [
  { value: "50 000+", label: "Membres potentiels" },
  { value: "201", label: "Collectivités couvertes" },
  { value: "31", label: "Régions" },
  { value: "5 000 F", label: "Frais d'inscription" },
];

const services = [
  {
    icon: UserPlus,
    title: "Inscription 100% en ligne",
    desc: "Inscrivez-vous en 3 étapes, payez par mobile money et recevez votre validation automatiquement.",
  },
  {
    icon: Wallet,
    title: "Vos cotisations simplifiées",
    desc: "Réglez vos cotisations via Orange Money, MTN MoMo, Wave ou Moov, en temps réel.",
  },
  {
    icon: IdCard,
    title: "Votre fiche & carte de membre",
    desc: "Téléchargez vos documents officiels au format PDF, signés par la MUGEC-CI.",
  },
  {
    icon: ShieldCheck,
    title: "Un espace sécurisé",
    desc: "Vos données personnelles et vos documents sont protégés et chiffrés.",
  },
  {
    icon: Bell,
    title: "Restez informé(e)",
    desc: "Recevez vos rappels et notifications par SMS, WhatsApp et e-mail.",
  },
  {
    icon: Smartphone,
    title: "Accessible partout",
    desc: "Une plateforme responsive, consultable depuis votre téléphone, où que vous soyez.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center rounded-full bg-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-mint-foreground">
              Plateforme officielle
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              La MUGEC-CI,{" "}
              <span className="text-primary">solidaire</span> et{" "}
              <span className="text-accent">numérique</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Bienvenue sur votre plateforme officielle. Inscrivez-vous en ligne,
              réglez vos cotisations, téléchargez votre carte de membre et restez
              connecté(e) à votre mutuelle, où que vous soyez.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/inscription"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
              >
                M'inscrire en ligne <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/login"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                J'ai déjà un compte
              </a>
            </div>
          </div>

          {/* Card */}
          <div className="rounded-3xl bg-card p-6 sm:p-8" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="flex items-center justify-center">
              <img src={logo} alt="MUGEC-CI" className="h-24 w-auto md:h-28" />
            </div>
            <p className="mt-4 text-center text-sm italic text-muted-foreground">
              « Mutuelle Générale du Personnel des Collectivités Territoriales de Côte d'Ivoire »
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-mint/60 px-4 py-5 text-center"
                >
                  <div className="text-2xl font-extrabold text-primary sm:text-3xl">{s.value}</div>
                  <div className="mt-1 text-xs font-medium text-foreground/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Tous vos services en un seul espace
          </h2>
          <p className="mt-4 text-muted-foreground">
            La MUGEC-CI met à votre disposition une plateforme moderne, conçue
            pour vous, agents des collectivités territoriales.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/30"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Inscrivez-vous dès maintenant à la MUGEC-CI
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
            Frais d'inscription uniques de 5 000 FCFA, payables par mobile money.
            Inscription en moins de 5 minutes, sans déplacement.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="/inscription"
              className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary transition hover:bg-mint"
            >
              M'inscrire en ligne <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
