import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, Target, Award, Heart, BookOpen } from "lucide-react";

const QuemSomos = () => {
  const values = [
    {
      icon: Brain,
      title: "Conhecimento Científico",
      description: "Todo nosso conteúdo é baseado em pesquisas revisadas por pares e evidências científicas sólidas."
    },
    {
      icon: Users,
      title: "Acessibilidade",
      description: "Traduzimos conceitos complexos em linguagem clara e aplicável para o público geral."
    },
    {
      icon: Target,
      title: "Aplicabilidade Prática",
      description: "Focamos em conhecimento que pode ser aplicado no dia a dia para melhorar a qualidade de vida."
    },
    {
      icon: Award,
      title: "Excelência Editorial",
      description: "Mantemos os mais altos padrões de qualidade em nossa curadoria e produção de conteúdo."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 hero-neural-gradient">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                Conheça Nossa Missão
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                Tornando a Neurociência
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                  Acessível a Todos
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Nossa missão é tornar o conhecimento neurocientífico acessível, confiável e 
                aplicável no dia a dia, desmistificando o cérebro para promover saúde integral 
                com base em evidências.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Nossa História</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  O NeuroConexão nasceu da paixão compartilhada de um grupo de neurocientistas, 
                  terapeutas e comunicadores científicos que perceberam uma lacuna significativa: 
                  o conhecimento neurocientífico permanecia restrito ao meio acadêmico, distante 
                  das pessoas que poderiam se beneficiar enormemente dele.
                </p>
                <p>
                  Em 2023, decidimos mudar essa realidade. Criamos uma plataforma que traduz 
                  descobertas científicas complexas em insights práticos e aplicáveis, sempre 
                  mantendo o rigor científico que nossa área exige.
                </p>
                <p>
                  Hoje, somos uma comunidade de mais de 10 mil leitores que buscam compreender 
                  melhor seu cérebro e aplicar esse conhecimento para viver de forma mais 
                  consciente e saudável.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">Artigos Publicados</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary">10k+</div>
                    <div className="text-sm text-muted-foreground">Leitores Ativos</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary">7</div>
                    <div className="text-sm text-muted-foreground">Especialidades</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary">2023</div>
                    <div className="text-sm text-muted-foreground">Ano de Fundação</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e garantem a qualidade do conteúdo que produzimos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Compromisso */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Heart className="h-16 w-16 mx-auto opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold">Nosso Compromisso</h2>
              <p className="text-xl opacity-90">
                Estamos comprometidos em manter os mais altos padrões éticos e científicos 
                em tudo que fazemos. Nosso conteúdo nunca substitui orientação médica ou 
                psicológica profissional, mas serve como complemento educativo baseado em evidências.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="space-y-2">
                <BookOpen className="h-8 w-8 mx-auto" />
                <h3 className="font-semibold">Educação Contínua</h3>
                <p className="text-sm opacity-80">
                  Atualizamos constantemente nosso conhecimento com as mais recentes pesquisas
                </p>
              </div>
              <div className="space-y-2">
                <Award className="h-8 w-8 mx-auto" />
                <h3 className="font-semibold">Revisão Científica</h3>
                <p className="text-sm opacity-80">
                  Todo conteúdo passa por rigorosa revisão de especialistas qualificados
                </p>
              </div>
              <div className="space-y-2">
                <Users className="h-8 w-8 mx-auto" />
                <h3 className="font-semibold">Comunidade Ativa</h3>
                <p className="text-sm opacity-80">
                  Construímos uma comunidade engajada de pessoas interessadas em neurociência
                </p>
              </div>
            </div>

            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Junte-se à Nossa Comunidade
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;