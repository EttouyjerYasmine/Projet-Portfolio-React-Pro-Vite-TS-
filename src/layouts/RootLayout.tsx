import { Outlet, Link, useLocation } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function RootLayout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/experience", label: "Expériences" },
    { to: "/education", label: "Formations" },
    { to: "/certifications", label: "Certifications" },
    { to: "/projects", label: "Projets" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header Professionnel */}
      <header className="sticky top-0 z-50 w-full border-b-2 border-border/50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-professional">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="text-2xl md:text-3xl font-bold gradient-text group-hover:scale-105 transition-transform">
                Yasmine Ettouyjer
              </div>
            </Link>

            {/* Desktop Navigation Professionnelle */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={clsx(
                    "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all relative group",
                    isActive(link.to)
                      ? "text-primary bg-primary/10 shadow-professional"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-primary rounded-full"></span>
                  )}
                </Link>
              ))}
              <div className="ml-4 pl-4 border-l border-border">
                <ThemeToggle />
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-2 animate-slideUp">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    "block px-4 py-3 rounded-lg text-sm font-medium transition-all",
                    isActive(link.to)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content Professionnel */}
      <main className="flex-1 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <Outlet />
        </div>
      </main>

      {/* Footer Professionnel */}
      <footer className="border-t-2 border-border/50 bg-card/80 backdrop-blur-md mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-base font-medium text-muted-foreground">
                &copy; {new Date().getFullYear()} <span className="font-bold gradient-text">Yasmine Ettouyjer</span>. Tous droits réservés.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Portfolio Professionnel - Ingénieure en Informatique
              </p>
            </div>
            <div className="flex items-center gap-8 text-sm">
              <Link to="/" className="font-medium text-muted-foreground hover:text-primary transition-colors">
                Accueil
              </Link>
              <Link to="/certifications" className="font-medium text-muted-foreground hover:text-primary transition-colors">
                Certifications
              </Link>
              <Link to="/contact" className="font-medium text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
