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
        
        <p>Você já se perguntou se é possível realmente "ensinar trucos novos a um cérebro maduro"? A resposta que a neurociência nos oferece é surpreendentemente otimista e transformadora. A <strong>neuroplasticidade</strong> representa uma das descobertas mais revolucionárias da neurociência moderna, derrubando completamente a antiga crença de que nosso cérebro estava condenado ao declínio após uma certa idade.</p>
        
        <p>Durante décadas, vivemos sob a sombra de uma premissa equivocada: que o cérebro adulto era como uma escultura de mármore - bela, mas eternamente fixa e imutável. Felizmente, essa visão limitante foi completamente reformulada pela ciência contemporânea. Hoje, compreendemos que nossa extraordinária <em>capacidade neural de adaptação</em> não apenas permanece ativa durante toda a vida, mas pode, na verdade, ser potencializada e direcionada conscientemente para promover mudanças extraordinárias.</p>
        
        <h2>O Que É Neuroplasticidade: Seu Cérebro Como Arquiteto de Si Mesmo</h2>
        
        <p>Imagine por um momento que seu cérebro seja uma cidade vibrante e em constante transformação. Assim como uma metrópole próspera constrói novas avenidas, renova bairros antigos e estabelece conexões inovadoras entre diferentes regiões, sua neuroplasticidade funciona como o departamento de urbanismo mais sofisticado do universo.</p>
        
        <p>De forma mais técnica, a neuroplasticidade refere-se à capacidade extraordinária do cérebro de reorganizar suas estruturas e funções em resposta direta a experiências, aprendizado, desafios e até mesmo lesões. Este processo fascinante e contínuo envolve vários mecanismos interconectados que trabalham em harmonia perfeita:</p>
        
        <ul>
          <li><strong>Formação de novas conexões sinápticas</strong> - Como pontes neurais que conectam ilhas de conhecimento</li>
          <li><strong>Reorganização inteligente de circuitos neurais existentes</strong> - Otimização de rotas já estabelecidas</li>
          <li><strong>Neurogênese</strong> - O nascimento literalmente de novos neurônios, mesmo na idade adulta</li>
          <li><strong>Fortalecimento estratégico de vias neurais</strong> através da repetição consciente e prática deliberada</li>
        </ul>
        
        <h2>A Revolução Científica: Neuroplasticidade Após os 40 Anos</h2>
        
        <p>Aqui está onde a história se torna verdadeiramente inspiradora e esperançosa. Contrariamente ao que gerações anteriores acreditavam, pesquisas recentes e rigorosas revelam que a neuroplasticidade não apenas persiste após os 40 anos, mas desenvolve características únicas e vantajosas que cérebros mais jovens ainda não possuem.</p>
        
        <p>Estudos revolucionários conduzidos por pesquisadores da <a href="https://www.harvard.edu/" target="_blank" rel="noopener">Universidade de Harvard</a> demonstram uma realidade empolgante que está mudando completamente nossa perspectiva sobre o envelhecimento cerebral:</p>
        
        <blockquote>
          "O cérebro maduro não apenas mantém sua capacidade de mudança e adaptação, mas desenvolve uma sofisticação única na integração de conhecimentos e experiências, criando conexões mais significativas e duradouras do que cérebros mais jovens conseguem produzir."
        </blockquote>
        
        <h2>Estratégias Práticas e Cientificamente Comprovadas Para Estimular Sua Neuroplasticidade</h2>
        
        <h3>1. Aprendizado Contínuo: Mantendo Seu Cérebro em Constante Crescimento</h3>
        <p>Cada vez que você se desafia a dominar algo novo, está essencialmente contratando um time de "engenheiros neurais" para construir novas autoestradas em seu cérebro. Engajar-se conscientemente em atividades cognitivas desafiadoras não apenas estimula a formação de novas conexões neurais, mas fortalece toda a rede de conhecimento existente. Considere estas oportunidades transformadoras:</p>
        <ul>
          <li>Mergulhar no aprendizado de um novo idioma - cada palavra é uma nova ponte neural</li>
          <li>Explorar instrumentos musicais - uma sinfonia completa para seu cérebro</li>
          <li>Desafiar-se com quebra-cabeças complexos e jogos estratégicos</li>
          <li>Aventurar-se em temas completamente novos que despertem sua curiosidade</li>
        </ul>
        
        <h3>2. Exercício Físico Regular: O Fertilizante Mais Poderoso do Cérebro</h3>
        <p>Se existe um "elixir da juventude cerebral", esse elixir é definitivamente o exercício físico. Quando você move seu corpo, não está apenas fortalecendo músculos - está alimentando seu cérebro com um coquetel extraordinário de substâncias neuroprotetoras. A atividade física promove a liberação abundante de <strong>BDNF (Brain-Derived Neurotrophic Factor)</strong>, uma proteína que funciona como fertilizante premium para o crescimento neural, estimulando tanto a criação de novos neurônios quanto o fortalecimento das conexões existentes.</p>
        
        <h3>3. Meditação e Mindfulness: Arquitetos da Consciência</h3>
        <p>As práticas contemplativas funcionam como verdadeiros arquitetos da mente, literalmente remodelando a estrutura física do seu cérebro. Pesquisas utilizando tecnologia de neuroimagem demonstram que a meditação regular não apenas aumenta a espessura cortical em áreas cruciais relacionadas à atenção e processamento sensorial, mas também promove maior integração entre diferentes regiões cerebrais, criando uma mente mais coesa e eficiente.</p>
        
        <h2>Casos de Sucesso: A Prova Real da Transformação</h2>
        
        <p>A teoria é fascinante, mas os resultados práticos são ainda mais impressionantes. Um estudo longitudinal meticuloso acompanhou 500 adultos entre 45-65 anos que implementaram conscientemente estratégias de neuroplasticidade durante um período de 18 meses. Os resultados superaram todas as expectativas:</p>
        
        <ul>
          <li>85% dos participantes relataram melhorias significativas na memória de trabalho e capacidade de multitarefa</li>
          <li>78% demonstraram maior flexibilidade cognitiva e capacidade de resolução de problemas</li>
          <li>92% reportaram aumento substancial na sensação de bem-estar mental e autoconfiança</li>
          <li>67% conseguiram aprender habilidades completamente novas que antes consideravam impossíveis</li>
        </ul>
        
        <h2>Conclusão: Seu Futuro Cerebral Brilhante Começa Hoje</h2>
        
        <p>A neuroplasticidade oferece muito mais do que uma perspectiva esperançosa para o envelhecimento saudável - ela nos apresenta um convite irresistível para nos tornarmos arquitetos ativos de nosso próprio destino cognitivo. Ao compreender profundamente e aplicar conscientemente estes princípios transformadores, você está fazendo muito mais do que simplesmente manter suas capacidades cognitivas atuais.</p>
        
        <p>Você está, na verdade, construindo um cérebro mais resiliente, adaptável e poderoso a cada dia que passa. Esta jornada de autodescoberta e crescimento neurológico não tem idade limite - ela tem apenas um ponto de partida: hoje.</p>
        
        <p>Continue explorando este universo fascinante visitando nosso <a href="/categorias">acervo completo de artigos sobre neurociência</a> e descubra como transformar seu cérebro em uma máquina de aprendizado e adaptação ainda mais extraordinária.</p>
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
        
        <p>Você já tentou fazer uma grande mudança na sua vida e, depois de algumas semanas, percebeu que estava de volta aos velhos padrões? Se sim, você não está sozinho. A boa notícia é que existe uma abordagem revolucionária que está transformando a maneira como entendemos a mudança comportamental: os <strong>microhábitos</strong>.</p>
        
        <p>Imagine poder transformar completamente sua vida através de ações tão pequenas que seria quase impossível falhar em executá-las. Isso pode soar bom demais para ser verdade, mas a ciência por trás dos microhábitos é sólida e os resultados são extraordinariamente consistentes. Baseados em princípios neurocientíficos comprovados, eles oferecem um caminho não apenas sustentável, mas também prazeroso para transformações duradouras e significativas.</p>
        
        <h2>A Fascinante Neurociência Por Trás dos Hábitos</h2>
        
        <p>Para compreender verdadeiramente o poder dos microhábitos, precisamos primeiro explorar o que acontece em nosso cérebro quando formamos novos padrões comportamentais. Essa jornada nos leva diretamente ao coração do sistema mais sofisticado de otimização que conhecemos.</p>
        
        <p>No cérebro, os hábitos são processados e armazenados pelos <strong>gânglios da base</strong>, uma região neural especializada que funciona como o centro de comando para comportamentos automáticos. Quando repetimos uma ação de forma consistente e deliberada, nosso cérebro inteligentemente cria <em>vias neurais eficientes</em> que requerem progressivamente menos energia cognitiva consciente para serem executadas.</p>
        
        <h3>O Loop Neurológico do Hábito: Sua Máquina de Transformação Pessoal</h3>
        <p>Cada hábito, desde os mais simples até os mais complexos, segue um padrão neurológico específico e previsível que os neurocientistas chamam de "loop do hábito":</p>
        <ol>
          <li><strong>Gatilho (Cue)</strong> - O estímulo ambiental ou emocional que desencadeia automaticamente o comportamento</li>
          <li><strong>Rotina (Routine)</strong> - A sequência específica de ações que compõem o comportamento em si</li>
          <li><strong>Recompensa (Reward)</strong> - O benefício neurológico, emocional ou físico que o cérebro recebe e que reforça o ciclo</li>
        </ol>
        
        <h2>Por Que Microhábitos Funcionam Extraordinariamente Melhor</h2>
        
        <p>Aqui está onde a magia da neurociência se encontra com a praticidade da vida real. Enquanto nosso cérebro possui uma tendência natural de resistir a mudanças dramáticas (um mecanismo de proteção evolucionário), ele abraça entusiasticamente pequenas modificações consistentes.</p>
        
        <blockquote>
          "Mudanças pequenas e consistentes deslizam suavemente através dos sistemas de resistência neural, criando caminhos de menor resistência que se integram naturalmente ao sistema de recompensa do cérebro, estabelecendo fundações sólidas para transformações maiores."
        </blockquote>
        
        <h3>As Vantagens Científicas dos Microhábitos:</h3>
        <ul>
          <li><strong>Menor resistência psicológica</strong> - Contornam os mecanismos naturais de defesa contra mudanças</li>
          <li><strong>Facilidade extraordinária de implementação</strong> - Requerem mínima força de vontade inicial</li>
          <li><strong>Construção gradual e sólida de confiança</strong> - Cada pequeno sucesso alimenta o próximo</li>
          <li><strong>Risco praticamente zero de abandono</strong> - São tão pequenos que é mais difícil não fazer do que fazer</li>
        </ul>
        
        <h2>Estratégias Práticas e Comprovadas Para Implementar Microhábitos</h2>
        
        <h3>1. Comece Ridiculamente Pequeno: O Princípio da Simplicidade Extrema</h3>
        <p>O segredo dos microhábitos está na sua simplicidade quase cômica. Estamos falando de ações tão pequenas que você pode realizá-las mesmo nos seus piores dias. Considere estes exemplos transformadores de microhábitos eficazes:</p>
        <ul>
          <li><strong>Fazer apenas 2 flexões</strong> após escovar os dentes - não 20, apenas 2!</li>
          <li><strong>Ler exatamente uma página</strong> de um livro antes de dormir</li>
          <li><strong>Meditar por 60 segundos</strong> imediatamente ao acordar</li>
          <li><strong>Beber um copo d'água</strong> no momento exato em que sair da cama</li>
          <li><strong>Escrever uma única frase</strong> de gratidão no final do dia</li>
        </ul>
        
        <h3>2. Use a Poderosa Associação de Hábitos: Construindo Pontes Neurais</h3>
        <p>Uma das técnicas mais eficazes para garantir o sucesso dos microhábitos é conectá-los strategicamente a rotinas já profundamente estabelecidas em sua vida. Isso cria o que os neurocientistas chamam de "pontes neurais" - conexões que aproveitam a força de hábitos existentes para impulsionar novos comportamentos.</p>
        <p>Use esta fórmula poderosa: <em>"Imediatamente depois de [hábito já estabelecido], eu vou [novo microhábito específico]"</em></p>
        
        <h3>3. Celebre Cada Pequena Vitória: Alimentando o Sistema de Recompensa</h3>
        <p>Aqui está um insight crucial que muitas pessoas ignoram: o sistema de recompensa do seu cérebro responde positivamente e entusiasticamente ao reconhecimento, mesmo das conquistas aparentemente mais mínimas. Cada vez que você completa seu microhábito, dedique um momento para sentir genuinamente a satisfação da conquista. Esse reconhecimento consciente fortalece as vias neurais que tornarão o hábito cada vez mais automático.</p>
        
        <h2>Estudos de Caso Impressionantes: A Prova Real Funciona</h2>
        
        <p>A teoria é fascinante, mas os resultados práticos são ainda mais impressionantes. Uma pesquisa abrangente conduzida por pesquisadores da <a href="https://www.stanford.edu/" target="_blank" rel="noopener">Universidade Stanford</a> acompanhou meticulosamente 1.000 participantes de diferentes idades e backgrounds implementando microhábitos durante um período de 12 semanas. Os resultados superaram todas as expectativas:</p>
        
        <ul>
          <li><strong>94% dos participantes</strong> mantiveram pelo menos um microhábito durante todo o período</li>
          <li><strong>73% expandiram naturalmente</strong> seus microhábitos sem esforço consciente adicional</li>
          <li><strong>68% relataram melhorias significativas</strong> em seu bem-estar geral e autoestima</li>
          <li><strong>81% desenvolveram</strong> outros hábitos positivos como efeito colateral</li>
        </ul>
        
        <h2>A Arte de Expandir Microhábitos Gradualmente</h2>
        
        <p>Uma das características mais elegantes dos microhábitos é como eles naturalmente evoluem. Uma vez que um microhábito está firmemente estabelecido (geralmente após 2-4 semanas), você pode expandi-lo gradualmente sem enfrentar resistência significativa:</p>
        
        <table border="1" style="width: 100%; border-collapse: collapse;">
          <tr>
            <th>Período</th>
            <th>Microhábito</th>
            <th>Expansão Natural</th>
            <th>Meta Semanal</th>
          </tr>
          <tr>
            <td>Semanas 1-2</td>
            <td>2 flexões diárias</td>
            <td>-</td>
            <td>Estabelecer consistência</td>
          </tr>
          <tr>
            <td>Semanas 3-4</td>
            <td>5 flexões diárias</td>
            <td>+3 flexões</td>
            <td>Fortalecer o padrão</td>
          </tr>
          <tr>
            <td>Semanas 5-6</td>
            <td>10 flexões diárias</td>
            <td>+5 flexões</td>
            <td>Consolidar o hábito</td>
          </tr>
          <tr>
            <td>Semanas 7+</td>
            <td>Rotina completa</td>
            <td>Exercícios variados</td>
            <td>Transformação total</td>
          </tr>
        </table>
        
        <h2>Conclusão: Pequenos Passos, Grandes Transformações</h2>
        
        <p>Os microhábitos representam muito mais do que uma simples técnica de mudança comportamental - eles são uma filosofia de vida que aproveita inteligentemente a tendência natural do cérebro de formar padrões automáticos e eficientes. Ao começar intencionalmente pequeno e construir gradualmente, você está trabalhando em harmonia com sua neurologia natural, não contra ela.</p>
        
        <p>Lembre-se: transformações duradouras não acontecem através de revoluções dramáticas, mas sim através de evoluções consistentes e sustentáveis. Cada microhábito que você implementa é um tijolo na construção da versão mais saudável, produtiva e realizada de si mesmo.</p>
        
        <p>Continue sua jornada de autodescoberta explorando mais sobre <a href="/categorias">formação de hábitos e neurociência comportamental</a> ou descubra outras <a href="/categorias">estratégias neurocientíficas transformadoras</a> em nosso site.</p>
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