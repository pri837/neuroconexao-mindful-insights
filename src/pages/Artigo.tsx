import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-brain.jpg";

interface ArticleData {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  image?: string;
  content: string;
}

const Artigo = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<ArticleData | null>(null);

  // Dados simulados dos artigos
  const articlesData: Record<string, ArticleData> = {
    'neuroplasticidade-40': {
      title: "Como a Neuroplasticidade Pode Transformar Sua Vida Aos 40+",
      excerpt: "Descubra como o cérebro adulto continua se adaptando e como você pode aproveitar essa capacidade natural para desenvolver novas habilidades e superar limitações.",
      category: "Neurociência Aplicada",
      author: "Dr. Ana Silva",
      readTime: "8 min",
      date: "2 dias",
      image: heroImage,
      content: `
        <h2>O Mito do Cérebro Adulto Imutável</h2>
        <p>Por décadas, acreditou-se que o cérebro adulto era uma estrutura fixa, incapaz de mudanças significativas após a adolescência. Essa visão limitante foi completamente revolucionada pelas descobertas sobre neuroplasticidade.</p>
        
        <h2>O Que É Neuroplasticidade?</h2>
        <p>A neuroplasticidade refere-se à capacidade extraordinária do cérebro de se reorganizar, formar novas conexões neurais e até mesmo gerar novos neurônios ao longo da vida. Essa descoberta representa uma das maiores revoluções na neurociência moderna.</p>
        
        <h2>Tipos de Neuroplasticidade</h2>
        <h3>1. Plasticidade Estrutural</h3>
        <p>Refere-se às mudanças físicas na estrutura cerebral, incluindo o crescimento de novos dendritos, a formação de novas sinapses e até mesmo a neurogênese - a criação de novos neurônios.</p>
        
        <h3>2. Plasticidade Funcional</h3>
        <p>É a capacidade do cérebro de transferir funções de áreas danificadas para regiões saudáveis, permitindo a recuperação após lesões ou traumas.</p>
        
        <h2>Como Estimular a Neuroplasticidade Após os 40</h2>
        <h3>1. Aprendizado Contínuo</h3>
        <p>Desafie seu cérebro regularmente com novas habilidades. Aprender um idioma, tocar um instrumento musical ou dominar uma nova tecnologia são excelentes formas de estimular a formação de novas conexões neurais.</p>
        
        <h3>2. Exercício Físico Regular</h3>
        <p>A atividade física aumenta a produção de BDNF (Fator Neurotrófico Derivado do Cérebro), uma proteína essencial para o crescimento e sobrevivência dos neurônios.</p>
        
        <h3>3. Meditação e Mindfulness</h3>
        <p>Estudos mostram que a prática regular de meditação pode aumentar a densidade da massa cinzenta em áreas relacionadas à atenção, regulação emocional e autoconsciência.</p>
        
        <h3>4. Sono de Qualidade</h3>
        <p>Durante o sono, o cérebro consolida memórias e elimina toxinas. Um sono reparador é fundamental para os processos de neuroplasticidade.</p>
        
        <h3>5. Alimentação Neuroprotetora</h3>
        <p>Alimentos ricos em ômega-3, antioxidantes e vitaminas do complexo B fornecem os nutrientes necessários para a saúde neural e a formação de novas conexões.</p>
        
        <h2>Casos de Sucesso Real</h2>
        <p>Estudos documentaram casos impressionantes de adultos que desenvolveram novas habilidades complexas após os 40, 50 e até 60 anos, demonstrando na prática o poder transformador da neuroplasticidade.</p>
        
        <h2>Conclusão</h2>
        <p>A neuroplasticidade nos ensina que nunca é tarde demais para mudar, crescer e se desenvolver. Independentemente da idade, seu cérebro mantém a capacidade extraordinária de se adaptar e evoluir. O segredo está em fornecer os estímulos corretos e manter uma atitude de crescimento contínuo.</p>
        
        <p>Lembre-se: cada novo desafio que você aceita, cada nova habilidade que desenvolve, está literalmente remodelando seu cérebro para melhor. A transformação não é apenas possível - é inevitável quando você abraça o poder da neuroplasticidade.</p>
      `
    },
    'microhabitos-poder': {
      title: "O Poder dos Microhábitos: Como Mudanças Pequenas Geram Grandes Resultados",
      excerpt: "Entenda a ciência por trás da formação de hábitos e aprenda técnicas práticas para criar rotinas duradouras.",
      category: "Neurociência dos Hábitos",
      author: "Prof. Carlos Mendes",
      readTime: "6 min",
      date: "4 dias",
      content: `
        <h2>A Ciência dos Microhábitos</h2>
        <p>Os microhábitos são pequenas ações que parecem insignificantes, mas quando praticadas consistentemente, podem gerar transformações profundas em nossas vidas. A neurociência revela como essas pequenas mudanças podem literalmente rewrtar nosso cérebro.</p>
        
        <h2>Como o Cérebro Forma Hábitos</h2>
        <p>O processo de formação de hábitos ocorre nos gânglios da base, uma região cerebral responsável pelos automatismos. Quando repetimos uma ação, criamos trilhas neurais que se fortalecem a cada repetição, tornando o comportamento automático.</p>
        
        <h2>O Loop do Hábito</h2>
        <p>Todo hábito segue um padrão de três partes:</p>
        <ul>
          <li><strong>Gatilho:</strong> O sinal que inicia o comportamento</li>
          <li><strong>Rotina:</strong> A ação em si</li>
          <li><strong>Recompensa:</strong> O benefício obtido</li>
        </ul>
        
        <h2>Exemplos Práticos de Microhábitos</h2>
        <h3>1. Microhábito de Leitura</h3>
        <p>Em vez de tentar ler 30 páginas por dia, comece com apenas uma página. Esse pequeno compromisso é mais fácil de manter e frequentemente leva a sessões mais longas.</p>
        
        <h3>2. Microhábito de Exercício</h3>
        <p>Faça apenas 5 flexões por dia. A simplicidade remove a resistência mental e constrói o momentum necessário para hábitos maiores.</p>
        
        <h3>3. Microhábito de Gratidão</h3>
        <p>Anote uma coisa pela qual você é grato todos os dias. Este simples ato pode melhorar significativamente seu bem-estar mental.</p>
        
        <h2>A Estratégia dos 1%</h2>
        <p>Melhorar apenas 1% a cada dia pode parecer insignificante, mas o efeito composto é extraordinário. Em um ano, você será 37 vezes melhor do que quando começou.</p>
        
        <h2>Como Implementar Microhábitos</h2>
        <ol>
          <li><strong>Comece ridiculamente pequeno:</strong> Tão pequeno que é impossível falhar</li>
          <li><strong>Conecte ao hábito existente:</strong> Use hábitos já estabelecidos como gatilhos</li>
          <li><strong>Celebre imediatamente:</strong> Reforce o comportamento com uma recompensa mental</li>
          <li><strong>Seja consistente:</strong> Foque na frequência, não na performance</li>
        </ol>
        
        <h2>Conclusão</h2>
        <p>Os microhábitos funcionam porque trabalham com a natureza do cérebro, não contra ela. Eles são o caminho mais sustentável para mudanças duradouras e transformação pessoal.</p>
      `
    },
    'ansiedade-cerebro': {
      title: "Ansiedade: O Que Acontece no Seu Cérebro e Como Lidar",
      excerpt: "Uma análise neurocientífica da ansiedade e estratégias baseadas em evidências para o manejo dos sintomas.",
      category: "Saúde Mental",
      author: "Dra. Marina Costa",
      readTime: "10 min",
      date: "1 semana",
      content: `
        <h2>O Cérebro Ansioso: Uma Perspectiva Neurocientífica</h2>
        <p>A ansiedade é muito mais do que um simples sentimento de preocupação. É uma resposta complexa que envolve múltiplas regiões cerebrais e sistemas neuroquímicos trabalhando em conjunto.</p>
        
        <h2>As Estruturas Cerebrais Envolvidas</h2>
        <h3>A Amígdala: O Centro do Alarme</h3>
        <p>A amígdala é responsável por detectar ameaças e disparar a resposta de luta ou fuga. Em pessoas com ansiedade, esta estrutura pode estar hiperativa, interpretando situações normais como perigosas.</p>
        
        <h3>O Córtex Pré-frontal: O Centro Executivo</h3>
        <p>Esta região é responsável pelo pensamento racional e tomada de decisões. Na ansiedade, pode haver uma desconexão entre o córtex pré-frontal e a amígdala, dificultando o controle das respostas emocionais.</p>
        
        <h3>O Hipocampo: O Centro da Memória</h3>
        <p>O hipocampo armazena memórias contextuais. Quando funcionamento inadequadamente, pode contribuir para a generalização do medo a situações similares.</p>
        
        <h2>Os Neurotransmissores da Ansiedade</h2>
        <h3>GABA: O Freio Natural</h3>
        <p>O GABA é o principal neurotransmissor inibitório do cérebro. Níveis baixos estão associados ao aumento da ansiedade.</p>
        
        <h3>Serotonina: O Regulador do Humor</h3>
        <p>Desequilíbrios na serotonina podem contribuir tanto para ansiedade quanto para depressão.</p>
        
        <h3>Noradrenalina: O Alertador</h3>
        <p>Níveis elevados mantêm o sistema nervoso em estado de alerta constante.</p>
        
        <h2>Estratégias Neurociência-Based para Manejo da Ansiedade</h2>
        
        <h3>1. Técnicas de Respiração</h3>
        <p>A respiração profunda ativa o sistema nervoso parassimpático, reduzindo a ativação da amígdala. Pratique a respiração 4-7-8:</p>
        <ul>
          <li>Inspire por 4 segundos</li>
          <li>Segure por 7 segundos</li>
          <li>Expire por 8 segundos</li>
        </ul>
        
        <h3>2. Mindfulness e Meditação</h3>
        <p>Estudos mostram que a prática regular de mindfulness fortalece o córtex pré-frontal e reduz a reatividade da amígdala.</p>
        
        <h3>3. Exercício Físico</h3>
        <p>O exercício aumenta a produção de GABA e endorfinas, além de promover a neurogênese no hipocampo.</p>
        
        <h3>4. Terapia Cognitivo-Comportamental (TCC)</h3>
        <p>A TCC ajuda a reestruturar padrões de pensamento disfuncionais, fortalecendo as conexões entre o córtex pré-frontal e outras regiões cerebrais.</p>
        
        <h3>5. Higiene do Sono</h3>
        <p>O sono inadequado aumenta a atividade da amígdala e reduz a função do córtex pré-frontal, exacerbando a ansiedade.</p>
        
        <h2>Quando Buscar Ajuda Profissional</h2>
        <p>Procure um profissional se a ansiedade:</p>
        <ul>
          <li>Interfere significativamente no trabalho ou relacionamentos</li>
          <li>Causa ataques de pânico frequentes</li>
          <li>Gera comportamentos evitativos excessivos</li>
          <li>Está associada a pensamentos de autolesão</li>
        </ul>
        
        <h2>Conclusão</h2>
        <p>Compreender a neurociência da ansiedade nos empodera com conhecimento e estratégias eficazes. Lembre-se: a ansiedade é tratável, e seu cérebro tem a capacidade de se adaptar e curar.</p>
      `
    },
    'ritmo-circadiano': {
      title: "Ritmo Circadiano: A Chave Para Um Sono Reparador",
      excerpt: "Como sincronizar seu relógio biológico interno para melhorar a qualidade do sono e a produtividade.",
      category: "Distúrbios do Sono",
      author: "Dr. Pedro Oliveira",
      readTime: "7 min",
      date: "1 semana",
      content: `
        <h2>O Relógio Interno do Corpo</h2>
        <p>O ritmo circadiano é nosso relógio biológico interno que regula diversos processos fisiológicos ao longo de aproximadamente 24 horas. Este sistema complexo é controlado principalmente pelo núcleo supraquiasmático no hipotálamo.</p>
        
        <h2>A Ciência Por Trás do Ritmo Circadiano</h2>
        <h3>O Papel da Luz</h3>
        <p>A luz é o principal zeitgeber (sincronizador) do nosso ritmo circadiano. Quando a luz atinge a retina, sinais são enviados ao núcleo supraquiasmático, que então coordena a produção de hormônios como melatonina e cortisol.</p>
        
        <h3>Os Genes do Relógio</h3>
        <p>Genes específicos (Clock, Period, Cryptochrome) criam loops de feedback que mantêm nosso ritmo interno funcionando mesmo na ausência de pistas ambientais.</p>
        
        <h2>Como o Ritmo Circadiano Afeta o Sono</h2>
        <h3>Produção de Melatonina</h3>
        <p>A melatonina começa a ser produzida pela glândula pineal cerca de 2 horas antes do horário habitual de dormir, sinalizando ao corpo que é hora de relaxar.</p>
        
        <h3>Temperatura Corporal</h3>
        <p>Nossa temperatura corporal naturalmente diminui à noite, facilitando o adormecer. Disruções neste padrão podem causar insônia.</p>
        
        <h2>Fatores que Desregulam o Ritmo Circadiano</h2>
        <ul>
          <li><strong>Luz azul à noite:</strong> Telas de dispositivos eletrônicos suprimem a produção de melatonina</li>
          <li><strong>Horários irregulares:</strong> Dormir e acordar em horários diferentes confunde o relógio interno</li>
          <li><strong>Jet lag:</strong> Viagens através de fusos horários desalinham nosso ritmo interno</li>
          <li><strong>Trabalho noturno:</strong> Inverte completamente os sinais naturais de luz e escuridão</li>
          <li><strong>Cafeína tarde:</strong> Pode bloquear receptores de adenosina, interferindo no sono</li>
        </ul>
        
        <h2>Estratégias Para Sincronizar Seu Ritmo Circadiano</h2>
        
        <h3>1. Terapia de Luz Matinal</h3>
        <p>Exponha-se à luz solar intensa logo ao acordar. Se não for possível, use uma caixa de luz de 10.000 lux por 20-30 minutos.</p>
        
        <h3>2. Higiene da Luz Noturna</h3>
        <p>Reduza a exposição à luz azul 2-3 horas antes de dormir. Use filtros de luz azul ou óculos especiais.</p>
        
        <h3>3. Horários Consistentes</h3>
        <p>Mantenha horários regulares para dormir e acordar, mesmo nos fins de semana. Variações de mais de 1 hora podem disruptr o ritmo.</p>
        
        <h3>4. Ambiente de Sono Otimizado</h3>
        <ul>
          <li>Temperatura entre 16-19°C</li>
          <li>Escuridão total (use cortinas blackout)</li>
          <li>Ruído mínimo ou ruído branco</li>
          <li>Colchão e travesseiros confortáveis</li>
        </ul>
        
        <h3>5. Timing das Refeições</h3>
        <p>Coma refeições regulares e evite comidas pesadas 3 horas antes de dormir. O timing das refeições também ajuda a sincronizar o ritmo circadiano.</p>
        
        <h3>6. Exercício no Horário Certo</h3>
        <p>Exercite-se regularmente, mas evite atividade física intensa 4 horas antes de dormir.</p>
        
        <h2>Suplementação Estratégica</h2>
        <h3>Melatonina</h3>
        <p>Doses baixas (0,5-3mg) tomadas 30 minutos antes do horário desejado de dormir podem ajudar a resetar o ritmo circadiano.</p>
        
        <h3>Magnésio</h3>
        <p>O magnésio promove relaxamento muscular e pode melhorar a qualidade do sono.</p>
        
        <h2>Monitorando Seu Progresso</h2>
        <p>Use diários de sono ou dispositivos wearables para acompanhar:</p>
        <ul>
          <li>Horário de dormir e acordar</li>
          <li>Qualidade subjetiva do sono</li>
          <li>Níveis de energia durante o dia</li>
          <li>Exposição à luz</li>
        </ul>
        
        <h2>Conclusão</h2>
        <p>Sincronizar seu ritmo circadiano é uma das estratégias mais poderosas para melhorar a qualidade do sono e a saúde geral. Com consistência e as estratégias certas, você pode treinar seu relógio biológico para trabalhar a seu favor.</p>
      `
    }
  };

  useEffect(() => {
    if (slug && articlesData[slug]) {
      setArticle(articlesData[slug]);
    } else {
      // Artigo não encontrado, redirecionar ou mostrar erro
      navigate('/');
    }
  }, [slug, navigate]);

  if (!article) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="py-8">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Botão Voltar */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6 hover:bg-primary/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar aos artigos
          </Button>

          {/* Header do Artigo */}
          <header className="mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-white">
              {article.category}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} de leitura</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Publicado há {article.date}</span>
              </div>
            </div>

            {article.image && (
              <div className="mb-8">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6 italic">
              {article.excerpt}
            </p>
          </header>

          {/* Conteúdo do Artigo */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Gostou do artigo?</h3>
            <p className="text-muted-foreground mb-4">
              Inscreva-se na nossa newsletter para receber mais conteúdo como este
            </p>
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              Inscrever-se na Newsletter
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Artigo;