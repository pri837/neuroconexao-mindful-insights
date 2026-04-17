import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import CategoryCard from "@/components/CategoryCard";
import BrainMap from "@/components/BrainMap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brain, Lightbulb, Baby, Moon, Heart, Stethoscope, Smartphone, ArrowRight, TrendingUp, Users, Mail, Search, Filter, FileText, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-brain.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const [loadMoreCount, setLoadMoreCount] = useState(1);
  const categories = [
    {
      title: "Neurociência Aplicada",
      description: "Pesquisas recentes, descobertas e aplicações práticas da neuroplasticidade no comportamento humano.",
      icon: Brain,
      postCount: 24,
      gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      slug: "neurociencia-aplicada"
    },
    {
      title: "Neurociência dos Hábitos",
      description: "Como formar e mudar hábitos usando técnicas baseadas em neurociência para produtividade e foco.",
      icon: Lightbulb,
      postCount: 18,
      gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
      slug: "habitos"
    },
    {
      title: "Neurodesenvolvimento",
      description: "Desenvolvimento cerebral na infância, adolescência e influência de estímulos ambientais.",
      icon: Baby,
      postCount: 15,
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      slug: "desenvolvimento"
    },
    {
      title: "Distúrbios do Sono",
      description: "Causas neurológicas da insônia, ritmo circadiano e estratégias terapêuticas para melhorar o sono.",
      icon: Moon,
      postCount: 21,
      gradient: "linear-gradient(135deg, #8b5cf6, #a855f7)",
      slug: "sono"
    },
    {
      title: "Linhas Terapêuticas",
      description: "TCC, terapias integrativas, mindfulness, EMDR, PNL e abordagens somáticas neuropsicológicas.",
      icon: Heart,
      postCount: 12,
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      slug: "terapias"
    },
    {
      title: "Saúde Mental",
      description: "Ansiedade, depressão e estresse sob a ótica da neurociência com técnicas de regulação emocional.",
      icon: Stethoscope,
      postCount: 28,
      gradient: "linear-gradient(135deg, #ef4444, #dc2626)",
      slug: "saude-mental"
    },
    {
      title: "Tecnologia e Cérebro",
      description: "Neurotecnologias, wearables, inteligência artificial, cognição e realidade virtual em terapias.",
      icon: Smartphone,
      postCount: 9,
      gradient: "linear-gradient(135deg, #6366f1, #4f46e5)",
      slug: "tecnologia"
    }
  ];

  const featuredPosts = [
    {
      title: "Como a Neuroplasticidade Pode Transformar Sua Vida Aos 40+",
      excerpt: "Descubra como o cérebro adulto continua se adaptando e como você pode aproveitar essa capacidade natural para desenvolver novas habilidades e superar limitações.",
      category: "Neurociência Aplicada",
      author: "Dr. Ana Silva",
      readTime: "8 min",
      date: "2 dias",
      image: heroImage,
      featured: true,
      slug: "neuroplasticidade-40"
    },
    {
      title: "O Poder dos Microhábitos: Como Mudanças Pequenas Geram Grandes Resultados",
      excerpt: "Entenda a ciência por trás da formação de hábitos e aprenda técnicas práticas para criar rotinas duradouras.",
      category: "Neurociência dos Hábitos",
      author: "Prof. Carlos Mendes",
      readTime: "6 min",
      date: "4 dias",
      slug: "microhabitos-poder"
    },
    {
      title: "Ansiedade: O Que Acontece no Seu Cérebro e Como Lidar",
      excerpt: "Uma análise neurocientífica da ansiedade e estratégias baseadas em evidências para o manejo dos sintomas.",
      category: "Saúde Mental",
      author: "Dra. Marina Costa",
      readTime: "10 min",
      date: "1 semana",
      slug: "ansiedade-cerebro"
    },
    {
      title: "Ritmo Circadiano: A Chave Para Um Sono Reparador",
      excerpt: "Como sincronizar seu relógio biológico interno para melhorar a qualidade do sono e a produtividade.",
      category: "Distúrbios do Sono",
      author: "Dr. Pedro Oliveira",
      readTime: "7 min",
      date: "1 semana",
      slug: "ritmo-circadiano"
    }
  ];

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/categorias?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleNewsletterSignup = async () => {
    if (!email.trim()) {
      toast({
        title: "Email obrigatório",
        description: "Por favor, insira seu email para se inscrever.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email: email.trim() }]);

      if (error) throw error;

      // Enviar email de confirmação automático
      const response = await fetch('/api/send-welcome-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          name: email.split('@')[0] // Usar parte antes do @ como nome temporário
        }),
      });

      if (response.ok) {
        toast({
          title: "Inscrição realizada com sucesso!",
          description: "Verifique seu email para confirmar a inscrição. Um email de boas-vindas foi enviado.",
        });
      } else {
        toast({
          title: "Inscrição realizada!",
          description: "Você receberá nossos melhores conteúdos em seu email.",
        });
      }
      setEmail("");
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast({
        title: "Erro na inscrição",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    }
  };

  const handleLoadMore = () => {
    setLoadMoreCount(prev => prev + 1);
    toast({
      title: "Carregando mais artigos...",
      description: `Exibindo ${(loadMoreCount + 1) * 4} artigos`,
    });
  };

  const handleJoinCommunity = () => {
    window.open("https://discord.gg/neurociencia", "_blank");
  };

  const handleContactUs = () => {
    navigate("/contato");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden hero-neural-gradient">
        <div className="absolute inset-0 pointer-events-none" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Desvende os
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                    Mistérios do Cérebro
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Explore o fascinante mundo da neurociência com conteúdo científico acessível, 
                  aplicável e transformador para sua vida.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                  onClick={() => navigate("/artigo/neuroplasticidade-40")}
                >
                  Explorar Artigos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleJoinCommunity}
                >
                  Junte-se à Comunidade
                  <Users className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              {/* Barra de busca */}
              <div className="flex gap-2 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Buscar artigos..." 
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button onClick={handleSearch}>
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">100+ Artigos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">10k+ Leitores</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Neurociência e Cérebro"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Brain className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="featured-posts" className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Artigos em Destaque</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conteúdo curado por especialistas para expandir seu conhecimento sobre neurociência
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.slice(0, loadMoreCount * 3).map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={handleLoadMore}
              className="mr-4"
            >
              <FileText className="mr-2 h-4 w-4" />
              Carregar Mais Artigos
            </Button>
            <Button 
              variant="ghost" 
              onClick={handleContactUs}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>

      {/* Brain Map Interactive */}
      <BrainMap />

      {/* Categories */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore por Categoria</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mergulhe profundamente nos temas que mais despertam sua curiosidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="newsletter" className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Transforme Seu Conhecimento em Ação
              </h2>
              <p className="text-xl opacity-90">
                Receba insights neurocientíficos semanais e guias práticos para aplicar 
                o conhecimento do cérebro no seu dia a dia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Seu melhor e-mail" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleNewsletterSignup()}
              />
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={handleNewsletterSignup}
              >
                Inscrever-se
              </Button>
            </div>

            <p className="text-sm opacity-75">
              Sem spam. Cancele quando quiser. 100% gratuito.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
