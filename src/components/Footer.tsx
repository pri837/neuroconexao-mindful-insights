import { Brain, Mail, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                NeuroConexão
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Tornando o conhecimento neurocientífico acessível, confiável e aplicável no dia a dia.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://instagram.com/neuroconexao" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com/company/neuroconexao" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://youtube.com/@neuroconexao" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Categorias */}
          <div className="space-y-4">
            <h3 className="font-semibold">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/categoria/neurociencia-aplicada" className="text-muted-foreground hover:text-primary transition-colors">Neurociência Aplicada</Link></li>
              <li><Link to="/categoria/habitos" className="text-muted-foreground hover:text-primary transition-colors">Neurociência dos Hábitos</Link></li>
              <li><Link to="/categoria/desenvolvimento" className="text-muted-foreground hover:text-primary transition-colors">Neurodesenvolvimento</Link></li>
              <li><Link to="/categoria/sono" className="text-muted-foreground hover:text-primary transition-colors">Distúrbios do Sono</Link></li>
              <li><Link to="/categoria/terapias" className="text-muted-foreground hover:text-primary transition-colors">Linhas Terapêuticas</Link></li>
            </ul>
          </div>

          {/* Links Importantes */}
          <div className="space-y-4">
            <h3 className="font-semibold">Links Importantes</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/quem-somos" className="text-muted-foreground hover:text-primary transition-colors">Quem Somos</Link></li>
              <li><Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</Link></li>
              <li><Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/newsletter" className="text-muted-foreground hover:text-primary transition-colors">Newsletter</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Newsletter Semanal</h3>
            <p className="text-sm text-muted-foreground">
              Receba insights neurocientíficos diretamente no seu e-mail.
            </p>
            <div className="space-y-2">
              <Input placeholder="Seu e-mail" />
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <Mail className="h-4 w-4 mr-2" />
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 NeuroConexão. Todos os direitos reservados.</p>
          <p className="mt-2">
            Conteúdo educativo. Não substitui orientação médica ou psicológica profissional.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;