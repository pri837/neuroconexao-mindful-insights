import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain, Search } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Fechar menu mobile quando a rota mudar
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Fechar menu mobile ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/categorias", label: "Categorias" },
    { href: "/quem-somos", label: "Quem Somos" },
    { href: "/contato", label: "Contato" },
  ];

  const isActiveRoute = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

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
              className={`text-sm font-medium transition-all duration-200 hover:text-primary relative ${
                isActiveRoute(item.href) 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground/80'
              }`}
            >
              {item.label}
              {isActiveRoute(item.href) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/categorias')}
            className="hover:bg-primary/10"
            aria-label="Buscar artigos"
          >
            <Search className="h-4 w-4" />
          </Button>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-md hover:shadow-lg transition-all duration-200"
            onClick={() => navigate('/newsletter')}
          >
            Newsletter
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden hover:bg-primary/10 transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden border-t bg-background/95 backdrop-blur transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`block text-sm font-medium transition-all duration-200 py-2 px-3 rounded-md ${
                isActiveRoute(item.href)
                  ? 'text-primary bg-primary/10 font-semibold'
                  : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex space-x-2 pt-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex-1 hover:bg-primary/10 transition-colors duration-200"
              onClick={() => {
                navigate('/categorias');
                setIsMenuOpen(false);
              }}
            >
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
            <Button 
              size="sm" 
              className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-md hover:shadow-lg transition-all duration-200"
              onClick={() => {
                navigate('/newsletter');
                setIsMenuOpen(false);
              }}
            >
              Newsletter
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;