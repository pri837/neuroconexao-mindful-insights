import { Brain, Menu, Moon, Sun, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import useDarkMode from "@/hooks/useDarkMode";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/categorias", label: "Categorias" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/contato", label: "Contato" },
];

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <Brain className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-foreground">NeuroConexão</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
            className="transition-colors"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Link to="/newsletter" className="hidden sm:block">
            <Button size="sm">Newsletter</Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background animate-accordion-down">
          <div className="container mx-auto flex flex-col py-2 px-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-3 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/newsletter"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-3 text-sm font-medium text-primary"
            >
              Newsletter
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
