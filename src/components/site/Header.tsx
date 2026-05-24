import { Link } from "@tanstack/react-router";
import logo from "@/assets/mugec-logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { label: "Accueil", href: "/" },
  { label: "Actualités", href: "/actualites" },
  { label: "Opportunités", href: "/opportunites" },
  { label: "Forum", href: "/forum" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full bg-background/85 backdrop-blur border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MUGEC-CI" className="h-12 w-auto md:h-14" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-mint text-mint-foreground"
                  : "text-foreground/70 hover:bg-secondary hover:text-foreground"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="/login" className="text-sm font-medium text-foreground/80 hover:text-foreground">
            Connexion
          </a>
          <a
            href="/inscription"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
          >
            S'inscrire
          </a>
        </div>

        <button
          aria-label="Menu"
          className="rounded-md p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <a href="/login" className="flex-1 rounded-full border border-border px-4 py-2 text-center text-sm font-medium">
                Connexion
              </a>
              <a href="/inscription" className="flex-1 rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground">
                S'inscrire
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
