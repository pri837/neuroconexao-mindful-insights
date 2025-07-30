import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/categorias", label: "Categorias" },
    { href: "/quem-somos", label: "Quem Somos" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative">
            <Brain className="h-8 w-8 text-primary" />
            <div className="absolute inset-0 rounded-full animate-pulse" style={{
              background: 'var(--neuro-gradient)',
              filter: 'blur(8px)',
              opacity: 0.3
            }} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NeuroConexão
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block">
              Desvendando a Mente e o Corpo
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button variant="ghost" size="sm">
            <Search className="h-4 w-4" />
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
            Newsletter
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex space-x-2 pt-2">
              <Button variant="ghost" size="sm" className="flex-1">
                <Search className="h-4 w-4 mr-2" />
                Buscar
              </Button>
              <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent">
                Newsletter
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;