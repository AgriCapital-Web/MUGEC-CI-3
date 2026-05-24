import logo from "@/assets/mugec-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src={logo} alt="MUGEC-CI" className="h-14 w-auto" />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Mutuelle Générale du Personnel des Collectivités Territoriales de Côte d'Ivoire.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Navigation</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-foreground">Accueil</a></li>
              <li><a href="/actualites" className="hover:text-foreground">Actualités</a></li>
              <li><a href="/opportunites" className="hover:text-foreground">Opportunités</a></li>
              <li><a href="/forum" className="hover:text-foreground">Forum</a></li>
              <li><a href="/faq" className="hover:text-foreground">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Abidjan, Côte d'Ivoire</li>
              <li>contact@mugec-ci.com</li>
              <li>+225 00 00 00 00</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} MUGEC-CI. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
