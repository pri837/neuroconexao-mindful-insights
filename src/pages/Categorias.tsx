import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Users, Zap, BookOpen, Target, Search, Filter } from "lucide-react";

const Categorias = () => {
  const categories = [
    {
      title: "Neurociência Básica",
      description: "Fundamentos do funcionamento cerebral, anatomia neural e processos cognitivos fundamentais.",
      icon: Brain,
      postCount: 45,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      slug: "neurociencia-basica"
    },
    {
      title: "Saúde Mental",
      description: "Bem-estar emocional, transtornos mentais, estratégias de coping e neurociência clínica.",
      icon: Heart,
      postCount: 32,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      slug: "saude-mental"
    },
    {
      title: "Comportamento Social",
      description: "Neurociência social, relacionamentos, comunicação e comportamentos interpessoais.",
      icon: Users,
      postCount: 28,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      slug: "comportamento-social"
    },
    {
      title: "Neuroplasticidade",
      description: "Capacidade de adaptação do cérebro, aprendizagem e mudanças neurais ao longo da vida.",
      icon: Zap,
      postCount: 24,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      slug: "neuroplasticidade"
    },
    {
      title: "Aprendizagem e Memória",
      description: "Processos de formação de memórias, técnicas de estudo e otimização cognitiva.",
      icon: BookOpen,
      postCount: 38,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      slug: "aprendizagem-memoria"
    },
    {
      title: "Performance Cognitiva",
      description: "Otimização da performance mental, foco, concentração e produtividade.",
      icon: Target,
      postCount: 22,
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      slug: "performance-cognitiva"
    }
  ];

  const featuredArticles = [
    {
      title: "Como o Sono Afeta a Consolidação da Memória",
      excerpt: "Descobertas recentes sobre como diferentes fases do sono contribuem para o processamento e armazenamento de memórias de longo prazo.",
      category: "Neurociência Básica",
      author: "Dr. Marina Silva",
      readTime: "8 min",
      date: "15 Jan 2024",
      image: "/api/placeholder/600/300",
      featured: true,
      slug: "sono-consolidacao-memoria"
    },
    {
      title: "Neuroplasticidade na Terceira Idade",
      excerpt: "Como o cérebro mantém sua capacidade de adaptação mesmo em idades avançadas e estratégias para estimular essa plasticidade.",
      category: "Neuroplasticidade",
      author: "Prof. Carlos Mendes",
      readTime: "6 min",
      date: "12 Jan 2024",
      slug: "neuroplasticidade-terceira-idade"
    },
    {
      title: "A Base Neural da Empatia",
      excerpt: "Compreendendo os circuitos cerebrais responsáveis pela nossa capacidade de entender e compartilhar emoções.",
      category: "Comportamento Social",
      author: "Dra. Ana Costa",
      readTime: "7 min",
      date: "10 Jan 2024",
      slug: "base-neural-empatia"
    },
    {
      title: "Técnicas de Memorização Baseadas em Neurociência",
      excerpt: "Métodos cientificamente comprovados para melhorar a retenção de informações e otimizar o aprendizado.",
      category: "Aprendizagem e Memória",
      author: "Dr. Rafael Oliveira",
      readTime: "9 min",
      date: "8 Jan 2024",
      slug: "tecnicas-memorizacao-neurociencia"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                Explore por Categoria
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                Descubra Conteúdo
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                  Organizado por Temas
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Encontre artigos sobre neurociência organizados por categorias específicas 
                para facilitar sua jornada de aprendizado.
              </p>
            </div>

            {/* Barra de Busca */}
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Buscar artigos, temas ou palavras-chave..." 
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias Principais */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Categorias Principais</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore nossos conteúdos organizados por áreas específicas da neurociência
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                description={category.description}
                icon={category.icon}
                postCount={category.postCount}
                gradient={category.gradient}
                slug={category.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Artigos em Destaque */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Artigos em Destaque</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os artigos mais lidos e comentados de cada categoria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <BlogCard
                key={index}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                author={article.author}
                readTime={article.readTime}
                date={article.date}
                image={article.image}
                featured={article.featured}
                slug={article.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardContent className="p-0 space-y-2">
                <div className="text-3xl font-bold text-primary">189</div>
                <div className="text-muted-foreground">Artigos Publicados</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0 space-y-2">
                <div className="text-3xl font-bold text-primary">6</div>
                <div className="text-muted-foreground">Categorias Principais</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0 space-y-2">
                <div className="text-3xl font-bold text-primary">15k+</div>
                <div className="text-muted-foreground">Leitores Mensais</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0 space-y-2">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-muted-foreground">Satisfação dos Leitores</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Não Encontrou o que Procurava?
            </h2>
            <p className="text-xl opacity-90">
              Sugerimos temas para novos artigos! Nossa equipe está sempre trabalhando 
              para trazer conteúdo relevante e atualizado sobre neurociência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                Sugerir Tema
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Ver Todos os Artigos
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Categorias;