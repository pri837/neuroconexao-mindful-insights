import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Categoria = () => {
  const { slug } = useParams();

  // Mock data baseada no slug
  const getCategoryData = (slug: string) => {
    const categoriesData = {
      "neurociencia-aplicada": {
        title: "Neurociência Aplicada",
        description: "Aplicações práticas da neurociência no cotidiano, trabalho e relacionamentos.",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      },
      "habitos": {
        title: "Neurociência dos Hábitos",
        description: "Como formar e quebrar hábitos através do entendimento dos circuitos neurais.",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      },
      "desenvolvimento": {
        title: "Neurodesenvolvimento",
        description: "Desenvolvimento cerebral desde a infância até a idade adulta e seus impactos.",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
      },
      "sono": {
        title: "Distúrbios do Sono",
        description: "Como o sono afeta o cérebro e estratégias baseadas em neurociência para dormir melhor.",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
      },
      "terapias": {
        title: "Linhas Terapêuticas",
        description: "Abordagens terapêuticas modernas fundamentadas em descobertas neurocientíficas.",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
      },
      "cognitiva": {
        title: "Neurociência Cognitiva",
        description: "Processos mentais como atenção, memória, linguagem e tomada de decisões.",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
      }
    };

    return categoriesData[slug as keyof typeof categoriesData] || {
      title: "Categoria",
      description: "Explore artigos desta categoria.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    };
  };

  const categoryData = getCategoryData(slug || "");

  const articles = [
    {
      title: "Neuroplasticidade: Como Treinar seu Cérebro",
      excerpt: "Descubra como você pode moldar seu cérebro através de práticas específicas baseadas em neurociência.",
      category: categoryData.title,
      author: "Dr. Maria Santos",
      readTime: "8 min",
      date: "20 Jan 2024",
      slug: "neuroplasticidade-treinar-cerebro"
    },
    {
      title: "O Poder dos Hábitos no Cérebro",
      excerpt: "Como os hábitos se formam neurologicamente e estratégias para criar mudanças duradouras.",
      category: categoryData.title,
      author: "Prof. João Silva",
      readTime: "6 min",
      date: "18 Jan 2024",
      slug: "poder-habitos-cerebro"
    },
    {
      title: "Memória de Trabalho e Aprendizagem",
      excerpt: "Entenda como otimizar sua memória de trabalho para melhorar o processo de aprendizagem.",
      category: categoryData.title,
      author: "Dra. Ana Costa",
      readTime: "7 min",
      date: "16 Jan 2024",
      slug: "memoria-trabalho-aprendizagem"
    },
    {
      title: "Neurociência do Estresse",
      excerpt: "Como o estresse afeta o cérebro e técnicas baseadas em ciência para gerenciá-lo.",
      category: categoryData.title,
      author: "Dr. Carlos Mendes",
      readTime: "9 min",
      date: "14 Jan 2024",
      slug: "neurociencia-estresse"
    },
    {
      title: "Sono e Consolidação da Memória",
      excerpt: "A importância do sono para a formação e consolidação de memórias de longo prazo.",
      category: categoryData.title,
      author: "Dra. Lucia Oliveira",
      readTime: "8 min",
      date: "12 Jan 2024",
      slug: "sono-consolidacao-memoria"
    },
    {
      title: "Neurociência da Motivação",
      excerpt: "Os circuitos cerebrais por trás da motivação e como estimulá-los naturalmente.",
      category: categoryData.title,
      author: "Prof. Roberto Lima",
      readTime: "7 min",
      date: "10 Jan 2024",
      slug: "neurociencia-motivacao"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20" style={{ background: `${categoryData.gradient}10` }}>
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <Link to="/categorias" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para Categorias
              </Link>
              
              <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                {categoryData.title}
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold">
                {categoryData.title}
              </h1>
              
              <p className="text-xl text-muted-foreground">
                {categoryData.description}
              </p>
            </div>

            {/* Barra de Busca */}
            <div className="max-w-2xl">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Buscar nesta categoria..." 
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

      {/* Artigos */}
      <section className="py-16">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Artigos em {categoryData.title}</h2>
            <p className="text-muted-foreground">
              {articles.length} artigos encontrados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <BlogCard
                key={index}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                author={article.author}
                readTime={article.readTime}
                date={article.date}
                slug={article.slug}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Carregar Mais Artigos
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Categoria;