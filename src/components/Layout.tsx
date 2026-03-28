import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@/assets/Logo.png";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/leistungen", label: "Leistungen" },
  { path: "/preise", label: "Preise" },
  { path: "/ueber-mich", label: "Über mich" },
  { path: "/kontakt", label: "Kontakt" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoImage}
              alt="Logo Salon Henrika"
              className="h-9 w-9 object-contain"
              width={36}
              height={36}
            />
            <span className="font-display text-xl font-semibold tracking-tight text-foreground">
              Salon Henrika
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-body tracking-wide transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
            aria-label="Menü"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-background border-b border-border"
            >
              <div className="container py-4 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-body tracking-wide transition-colors hover:text-primary ${
                      location.pathname === item.path
                        ? "text-primary font-bold"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 pt-16 md:pt-20">{children}</main>

      <footer className="border-t border-border bg-card">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src={logoImage}
              alt="Logo Salon Henrika"
              className="h-7 w-7 object-contain"
              width={28}
              height={28}
            />
            <span className="font-display text-sm text-foreground">Salon Henrika</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Salon Henrika. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4 text-xs font-body text-muted-foreground">
            <Link to="/impressum" className="transition-colors hover:text-primary">
              Impressum
            </Link>
            <Link to="/datenschutz" className="transition-colors hover:text-primary">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
