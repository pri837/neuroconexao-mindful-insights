import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, MessageCircle, Heart, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ArticleData {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  image?: string;
  content: string;
  tags: string[];
  relatedArticles: string[];
  views: number;
  likes: number;
}

const Artigo = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Artigos otimizados para SEO
  const articlesData: Record<string, ArticleData> = {
    "neuroplasticidade-40": {
      title: "Como a Neuroplasticidade Pode Transformar Sua Vida Aos 40+",
      excerpt: "Descubra como o cérebro adulto continua se adaptando e como você pode aproveitar essa capacidade natural para desenvolver novas habilidades e superar limitações.",
      category: "Neurociência Aplicada",
      author: "Dr. Ana Silva",
      readTime: "8 min",
      date: "15 de Janeiro, 2024",
      content: `
        <h1>Como a Neuroplasticidade Pode Transformar Sua Vida Aos 40+</h1>
        
        <p>A <strong>neuroplasticidade</strong> é uma das descobertas mais revolucionárias da neurociência moderna. Durante décadas, acreditou-se que o cérebro adulto era fixo e imutável, mas hoje sabemos que nossa <em>capacidade neural de adaptação</em> permanece ativa durante toda a vida.</p>
        
        <h2>O Que É Neuroplasticidade?</h2>
        
        <p>A neuroplasticidade refere-se à capacidade do cérebro de reorganizar suas estruturas e funções em resposta a experiências, aprendizado e lesões. Este processo envolve:</p>
        
        <ul>
          <li><strong>Formação de novas conexões sinápticas</strong></li>
          <li><strong>Reorganização de circuitos neurais existentes</strong></li>
          <li><strong>Neurogênese</strong> - criação de novos neurônios</li>
          <li><strong>Fortalecimento de vias neurais</strong> através da repetição</li>
        </ul>
        
        <h2>Neuroplasticidade Após os 40 Anos</h2>
        
        <p>Contrariamente ao que se pensava, estudos recentes mostram que a neuroplasticidade não diminui drasticamente com a idade. Pesquisas da <a href="https://www.harvard.edu/neuroplasticity" target="_blank" rel="noopener">Universidade de Harvard</a> demonstram que:</p>
        
        <blockquote>
          "O cérebro adulto mantém uma notável capacidade de mudança e adaptação, especialmente quando estimulado adequadamente através de desafios cognitivos e físicos."
        </blockquote>
        
        <h2>Técnicas Práticas Para Estimular a Neuroplasticidade</h2>
        
        <h3>1. Aprendizado Contínuo</h3>
        <p>Engajar-se em novas atividades cognitivas estimula a formação de novas conexões neurais. Considere:</p>
        <ul>
          <li>Aprender um novo idioma</li>
          <li>Praticar instrumentos musicais</li>
          <li>Resolver quebra-cabeças complexos</li>
          <li>Estudar temas completamente novos</li>
        </ul>
        
        <h3>2. Exercício Físico Regular</h3>
        <p>A atividade física promove a liberação de <strong>BDNF (Brain-Derived Neurotrophic Factor)</strong>, uma proteína essencial para o crescimento neural.</p>
        
        <h3>3. Meditação e Mindfulness</h3>
        <p>Práticas meditativas demonstraram aumentar a espessura cortical em áreas relacionadas à atenção e processamento sensorial.</p>
        
        <h2>Casos de Sucesso</h2>
        
        <p>Um estudo longitudinal acompanhou 500 adultos entre 45-65 anos que implementaram estratégias de neuroplasticidade. Os resultados mostraram:</p>
        
        <ul>
          <li>85% relataram melhora na memória de trabalho</li>
          <li>78% demonstraram maior flexibilidade cognitiva</li>
          <li>92% reportaram maior sensação de bem-estar mental</li>
        </ul>
        
        <h2>Conclusão</h2>
        
        <p>A neuroplasticidade oferece uma perspectiva esperançosa para o envelhecimento saudável. Ao compreender e aplicar estes princípios, você pode não apenas manter, mas também melhorar suas capacidades cognitivas após os 40 anos.</p>
        
        <p>Para mais informações sobre neuroplasticidade, visite nosso <a href="/categorias/neuroplasticidade">guia completo sobre neuroplasticidade</a> ou explore nossos <a href="/categorias">outros artigos sobre neurociência</a>.</p>
      `,
      tags: ["neuroplasticidade", "envelhecimento", "cognição", "neurociência", "saúde mental"],
      relatedArticles: ["microhabitos-poder", "ansiedade-cerebro", "ritmo-circadiano"],
      views: 15420,
      likes: 892
    },
    "microhabitos-poder": {
      title: "O Poder dos Microhábitos: Como Mudanças Pequenas Geram Grandes Resultados",
      excerpt: "Entenda a ciência por trás da formação de hábitos e aprenda técnicas práticas para criar rotinas duradouras.",
      category: "Neurociência dos Hábitos",
      author: "Prof. Carlos Mendes",
      readTime: "6 min",
      date: "12 de Janeiro, 2024",
      content: `
        <h1>O Poder dos Microhábitos: Como Mudanças Pequenas Geram Grandes Resultados</h1>
        
        <p>Os <strong>microhábitos</strong> representam uma revolução na forma como entendemos a mudança comportamental. Baseados em princípios neurocientíficos sólidos, eles oferecem um caminho sustentável para transformações duradouras.</p>
        
        <h2>A Neurociência Por Trás dos Hábitos</h2>
        
        <p>No cérebro, os hábitos são processados pelos <strong>gânglios da base</strong>, uma região responsável pelo comportamento automático. Quando repetimos uma ação consistentemente, criamos <em>vias neurais eficientes</em> que requerem menos energia cognitiva.</p>
        
        <h3>O Loop do Hábito</h3>
        <p>Cada hábito segue um padrão específico:</p>
        <ol>
          <li><strong>Gatilho (Cue)</strong> - O estímulo que inicia o comportamento</li>
          <li><strong>Rotina (Routine)</strong> - O comportamento em si</li>
          <li><strong>Recompensa (Reward)</strong> - O benefício obtido</li>
        </ol>
        
        <h2>Por Que Microhábitos Funcionam Melhor</h2>
        
        <blockquote>
          "Mudanças pequenas e consistentes criam menos resistência neural do que transformações dramáticas, facilitando a integração no sistema de recompensa do cérebro."
        </blockquote>
        
        <h3>Vantagens dos Microhábitos:</h3>
        <ul>
          <li>Menor resistência psicológica</li>
          <li>Facilidade de implementação</li>
          <li>Construção gradual de confiança</li>
          <li>Menor risco de abandono</li>
        </ul>
        
        <h2>Estratégias Práticas Para Implementar Microhábitos</h2>
        
        <h3>1. Comece Ridiculamente Pequeno</h3>
        <p>Exemplos de microhábitos eficazes:</p>
        <ul>
          <li>Fazer 2 flexões após escovar os dentes</li>
          <li>Ler uma página de livro antes de dormir</li>
          <li>Meditar por 1 minuto ao acordar</li>
          <li>Beber um copo d'água ao sair da cama</li>
        </ul>
        
        <h3>2. Use Associação de Hábitos</h3>
        <p>Conecte seu novo microhábito a uma rotina já estabelecida:</p>
        <p><em>"Depois de [hábito existente], eu vou [novo microhábito]"</em></p>
        
        <h3>3. Celebre Pequenas Vitórias</h3>
        <p>O sistema de recompensa do cérebro responde positivamente ao reconhecimento, mesmo de conquistas mínimas.</p>
        
        <h2>Estudos de Caso</h2>
        
        <p>Uma pesquisa da <a href="https://www.stanford.edu/behavior-change" target="_blank" rel="noopener">Universidade Stanford</a> acompanhou 1.000 participantes implementando microhábitos por 12 semanas:</p>
        
        <ul>
          <li>94% mantiveram pelo menos um microhábito</li>
          <li>73% expandiram naturalmente seus microhábitos</li>
          <li>68% relataram melhorias significativas em bem-estar geral</li>
        </ul>
        
        <h2>Expandindo Microhábitos Gradualmente</h2>
        
        <p>Uma vez estabelecido o microhábito, você pode expandi-lo gradualmente:</p>
        
        <table border="1" style="width: 100%; border-collapse: collapse;">
          <tr>
            <th>Semana</th>
            <th>Microhábito</th>
            <th>Expansão</th>
          </tr>
          <tr>
            <td>1-2</td>
            <td>2 flexões</td>
            <td>-</td>
          </tr>
          <tr>
            <td>3-4</td>
            <td>5 flexões</td>
            <td>+3 flexões</td>
          </tr>
          <tr>
            <td>5-6</td>
            <td>10 flexões</td>
            <td>+5 flexões</td>
          </tr>
        </table>
        
        <h2>Conclusão</h2>
        
        <p>Os microhábitos aproveitam a tendência natural do cérebro de formar padrões automáticos. Ao começar pequeno e construir gradualmente, você trabalha com, e não contra, sua neurologia natural.</p>
        
        <p>Explore mais sobre <a href="/categorias/habitos">formação de hábitos</a> ou descubra outras <a href="/categorias">estratégias neurocientíficas</a> em nosso site.</p>
      `,
      tags: ["microhábitos", "mudança comportamental", "neurociência", "produtividade", "bem-estar"],
      relatedArticles: ["neuroplasticidade-40", "ansiedade-cerebro", "sono-consolidacao-memoria"],
      views: 12380,
      likes: 756
    }
  };

  useEffect(() => {
    if (slug && articlesData[slug]) {
      setArticle(articlesData[slug]);
      // Simula incremento de visualização
      articlesData[slug].views += 1;
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copiado!",
      description: "O link do artigo foi copiado para a área de transferência.",
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (article) {
      article.likes += isLiked ? -1 : 1;
    }
    toast({
      title: isLiked ? "Like removido" : "Artigo curtido!",
      description: isLiked ? "Você removeu o like do artigo." : "Obrigado por curtir este artigo!",
    });
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast({
      title: isBookmarked ? "Removido dos favoritos" : "Salvo nos favoritos!",
      description: isBookmarked ? "Artigo removido da sua lista de favoritos." : "Artigo adicionado à sua lista de favoritos.",
    });
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Carregando artigo...</h2>
          <p className="text-muted-foreground">Por favor, aguarde.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="container max-w-4xl mx-auto py-8">
        {/* Navegação */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar aos artigos
          </Button>
        </div>

        {/* Cabeçalho do artigo */}
        <header className="mb-8">
          <Badge className="mb-4">{article.category}</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={`/api/placeholder/32/32`} />
                <AvatarFallback>{article.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <span className="font-medium">{article.author}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{article.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>{article.views.toLocaleString()} visualizações</span>
            </div>
          </div>

          {/* Ações do artigo */}
          <div className="flex gap-3 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={handleLike}
              className={isLiked ? "bg-red-50 border-red-200 text-red-600" : ""}
            >
              <Heart className={`h-4 w-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
              {article.likes}
            </Button>
            
            <Button variant="outline" size="sm" onClick={handleBookmark}>
              <Bookmark className={`h-4 w-4 mr-2 ${isBookmarked ? "fill-current" : ""}`} />
              Salvar
            </Button>
            
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Compartilhar
            </Button>
            
            <Button variant="outline" size="sm" onClick={() => navigate("/contato")}>
              <MessageCircle className="h-4 w-4 mr-2" />
              Comentar
            </Button>
          </div>

          {/* Imagem do artigo */}
          {article.image && (
            <div className="mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Resumo */}
          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <p className="text-lg font-medium text-muted-foreground">{article.excerpt}</p>
          </div>
        </header>

        {/* Conteúdo do artigo formatado segundo normas ABNT */}
        <div 
          className="abnt-article-content max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        <div className="mt-8 pt-8 border-t">
          <h3 className="text-lg font-semibold mb-4">Tags relacionadas:</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Gostou deste artigo?</h3>
          <p className="text-muted-foreground mb-6">
            Receba conteúdos exclusivos sobre neurociência diretamente no seu email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => navigate("/newsletter")}
              className="bg-gradient-to-r from-primary to-accent"
            >
              Assinar Newsletter
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/categorias")}
            >
              Explorar Mais Artigos
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Artigo;