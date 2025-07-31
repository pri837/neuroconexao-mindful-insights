import { useState } from "react";

interface BrainPartInfo {
  title: string;
  description: string;
  color: string;
}

const BrainMap = () => {
  const [activeInfo, setActiveInfo] = useState<BrainPartInfo | null>(null);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

  const brainParts: Record<string, BrainPartInfo> = {
    frontal: {
      title: 'Lobo Frontal',
      description: 'O lobo frontal é responsável por funções executivas como planejamento, tomada de decisões, controle de impulsos, raciocínio e resolução de problemas. Também controla os movimentos voluntários e abriga a área de Broca, relacionada à produção da fala. É a região que nos torna "humanos", pois gerencia nossa personalidade e comportamento social.',
      color: '#FF7E79'
    },
    parietal: {
      title: 'Lobo Parietal',
      description: 'O lobo parietal processa informações sensoriais como toque, temperatura, pressão e dor. É responsável pela percepção espacial, orientação e navegação. Também integra informações sensoriais de diferentes partes do corpo, permitindo reconhecer objetos pelo tato e compreender a posição do corpo no espaço.',
      color: '#7EB6FF'
    },
    temporal: {
      title: 'Lobo Temporal',
      description: 'O lobo temporal processa estímulos auditivos e é fundamental para a compreensão da linguagem (área de Wernicke). Também está envolvido no reconhecimento de rostos, objetos e na formação de memórias de longo prazo. Contém estruturas importantes como o hipocampo e a amígdala.',
      color: '#FFDE7E'
    },
    occipital: {
      title: 'Lobo Occipital',
      description: 'O lobo occipital é o centro de processamento visual do cérebro. Interpreta imagens captadas pelos olhos, reconhece cores, formas, movimentos e profundidade. Lesões nesta área podem causar cegueira parcial ou total, mesmo com olhos perfeitamente saudáveis.',
      color: '#7EFFB2'
    },
    cerebellum: {
      title: 'Cerebelo',
      description: 'O cerebelo coordena movimentos precisos, mantém o equilíbrio e a postura corporal. Embora represente apenas 10% do volume cerebral, contém mais da metade de todos os neurônios. Também está envolvido na aprendizagem motora, permitindo que movimentos complexos se tornem automáticos com a prática.',
      color: '#D67EFF'
    },
    brainstem: {
      title: 'Tronco Cerebral',
      description: 'O tronco cerebral conecta o cérebro à medula espinhal e controla funções vitais automáticas como respiração, batimentos cardíacos, pressão arterial, deglutição e digestão. Também regula o ciclo sono-vigília e contém vias nervosas que conectam o cérebro ao resto do corpo.',
      color: '#FF9D7E'
    },
    hypothalamus: {
      title: 'Hipotálamo',
      description: 'O hipotálamo regula funções corporais básicas como fome, sede, temperatura corporal e ritmos circadianos. Controla o sistema endócrino através da hipófise, influenciando hormônios que afetam crescimento, metabolismo, reprodução e resposta ao estresse.',
      color: '#7EFFD4'
    },
    amygdala: {
      title: 'Amígdala',
      description: 'A amígdala processa emoções, especialmente medo e ansiedade. É crucial para o condicionamento do medo e memórias emocionais. Ajuda a avaliar ameaças potenciais e desencadeia respostas de "luta ou fuga". Também está envolvida em comportamentos sociais e reconhecimento emocional.',
      color: '#FF7ED4'
    },
    hippocampus: {
      title: 'Hipocampo',
      description: 'O hipocampo é essencial para a formação de novas memórias declarativas (fatos e eventos). Converte memórias de curto prazo em memórias de longo prazo e ajuda na navegação espacial. Danos ao hipocampo podem causar amnésia anterógrada - incapacidade de formar novas memórias.',
      color: '#C4FF7E'
    }
  };

  const handleBrainPartHover = (partId: string, event: React.MouseEvent) => {
    const partInfo = brainParts[partId];
    setActiveInfo(partInfo);
    
    const rect = event.currentTarget.getBoundingClientRect();
    setCardPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    });
  };

  const handleBrainPartLeave = () => {
    setActiveInfo(null);
  };

  const brainRegions = [
    { id: 'frontal', color: '#FF7E79', title: 'Lobo Frontal', description: 'Responsável pelo pensamento, planejamento, tomada de decisões e controle motor.' },
    { id: 'parietal', color: '#7EB6FF', title: 'Lobo Parietal', description: 'Processa informações sensoriais e espaciais, como toque, temperatura e posição corporal.' },
    { id: 'temporal', color: '#FFDE7E', title: 'Lobo Temporal', description: 'Processa sons, compreensão da linguagem e formação de memórias.' },
    { id: 'occipital', color: '#7EFFB2', title: 'Lobo Occipital', description: 'Responsável pelo processamento visual e interpretação das imagens.' },
    { id: 'cerebellum', color: '#D67EFF', title: 'Cerebelo', description: 'Coordena movimentos, equilíbrio e postura corporal.' },
    { id: 'brainstem', color: '#FF9D7E', title: 'Tronco Cerebral', description: 'Controla funções vitais como respiração, batimentos cardíacos e ciclo sono-vigília.' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mapa Cerebral Interativo</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passe o mouse sobre as diferentes regiões para descobrir suas funções
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative w-full max-w-2xl mx-auto">
            <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              {/* Lobo Frontal */}
              <path
                id="frontal"
                className="cursor-pointer transition-all duration-300 hover:scale-105 filter hover:drop-shadow-lg"
                fill="#FF7E79"
                fillOpacity="0.7"
                stroke="#333"
                strokeWidth="1.5"
                d="M300,200 Q250,150 200,180 Q150,220 170,280 Q190,330 240,350 L300,320 Q350,300 370,250 Q380,200 350,180 Q320,170 300,200 Z"
                onMouseEnter={(e) => handleBrainPartHover('frontal', e)}
                onMouseLeave={handleBrainPartLeave}
              />
              
              {/* Lobo Parietal */}
              <path
                id="parietal"
                className="cursor-pointer transition-all duration-300 hover:scale-105 filter hover:drop-shadow-lg"
                fill="#7EB6FF"
                fillOpacity="0.7"
                stroke="#333"
                strokeWidth="1.5"
                d="M300,320 L240,350 Q260,400 300,430 Q350,450 400,430 Q440,400 450,350 L400,320 Q350,340 300,320 Z"
                onMouseEnter={(e) => handleBrainPartHover('parietal', e)}
                onMouseLeave={handleBrainPartLeave}
              />
              
              {/* Lobo Temporal */}
              <path
                id="temporal"
                className="cursor-pointer transition-all duration-300 hover:scale-105 filter hover:drop-shadow-lg"
                fill="#FFDE7E"
                fillOpacity="0.7"
                stroke="#333"
                strokeWidth="1.5"
                d="M170,280 Q190,330 240,350 L300,320 Q350,340 400,320 L450,350 Q470,320 480,280 Q490,240 470,200 Q440,170 400,180 Q350,200 300,200 Q250,150 200,180 Q150,220 170,280 Z"
                onMouseEnter={(e) => handleBrainPartHover('temporal', e)}
                onMouseLeave={handleBrainPartLeave}
              />
              
              {/* Lobo Occipital */}
              <path
                id="occipital"
                className="cursor-pointer transition-all duration-300 hover:scale-105 filter hover:drop-shadow-lg"
                fill="#7EFFB2"
                fillOpacity="0.7"
                stroke="#333"
                strokeWidth="1.5"
                d="M300,430 Q350,450 400,430 Q440,400 450,350 Q470,320 480,280 Q500,320 490,370 Q470,420 430,450 Q380,470 330,460 Q300,450 300,430 Z"
                onMouseEnter={(e) => handleBrainPartHover('occipital', e)}
                onMouseLeave={handleBrainPartLeave}
              />
              
              {/* Cerebelo */}
              <path
                id="cerebellum"
                className="cursor-pointer transition-all duration-300 hover:scale-105 filter hover:drop-shadow-lg"
                fill="#D67EFF"
                fillOpacity="0.7"
                stroke="#333"
                strokeWidth="1.5"
                d="M330,460 Q380,470 430,450 Q470,420 490,370 Q510,400 500,440 Q480,480 430,500 Q380,510 330,500 Q300,480 330,460 Z"
                onMouseEnter={(e) => handleBrainPartHover('cerebellum', e)}
                onMouseLeave={handleBrainPartLeave}
              />
              
              {/* Tronco Cerebral */}
              <path
                id="brainstem"
                className="cursor-pointer transition-all duration-300 hover:scale-105 filter hover:drop-shadow-lg"
                fill="#FF9D7E"
                fillOpacity="0.7"
                stroke="#333"
                strokeWidth="1.5"
                d="M380,510 Q430,500 480,480 L470,520 Q440,540 400,550 Q360,540 330,520 L380,510 Z"
                onMouseEnter={(e) => handleBrainPartHover('brainstem', e)}
                onMouseLeave={handleBrainPartLeave}
              />
              
              {/* Hipotálamo */}
              <circle
                id="hypothalamus"
                className="cursor-pointer transition-all duration-300 hover:scale-105 filter hover:drop-shadow-lg"
                fill="#7EFFD4"
                fillOpacity="0.7"
                stroke="#333"
                strokeWidth="1.5"
                cx="350"
                cy="280"
                r="20"
                onMouseEnter={(e) => handleBrainPartHover('hypothalamus', e)}
                onMouseLeave={handleBrainPartLeave}
              />
              
              {/* Amígdala */}
              <circle
                id="amygdala"
                className="cursor-pointer transition-all duration-300 hover:scale-105 filter hover:drop-shadow-lg"
                fill="#FF7ED4"
                fillOpacity="0.7"
                stroke="#333"
                strokeWidth="1.5"
                cx="300"
                cy="290"
                r="15"
                onMouseEnter={(e) => handleBrainPartHover('amygdala', e)}
                onMouseLeave={handleBrainPartLeave}
              />
              
              {/* Hipocampo */}
              <path
                id="hippocampus"
                className="cursor-pointer transition-all duration-300 hover:scale-105 filter hover:drop-shadow-lg"
                fill="#C4FF7E"
                fillOpacity="0.7"
                stroke="#333"
                strokeWidth="1.5"
                d="M320,300 Q340,290 360,300 Q380,310 360,320 Q340,330 320,320 Q300,310 320,300 Z"
                onMouseEnter={(e) => handleBrainPartHover('hippocampus', e)}
                onMouseLeave={handleBrainPartLeave}
              />
            </svg>
            
            {/* Info Card */}
            {activeInfo && (
              <div
                className="absolute bg-card border rounded-lg p-4 shadow-lg w-80 z-50 transition-all duration-300 transform -translate-x-1/2 -translate-y-full pointer-events-none"
                style={{
                  left: `${cardPosition.x}px`,
                  top: `${cardPosition.y - 20}px`,
                }}
              >
                <h3 
                  className="text-lg font-semibold mb-2 border-b-2 pb-2"
                  style={{ borderColor: activeInfo.color }}
                >
                  {activeInfo.title}
                </h3>
                <p className="text-sm text-muted-foreground">{activeInfo.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* Brain Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {brainRegions.map((region) => (
            <div key={region.id} className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div 
                className="w-6 h-6 rounded-full mb-4"
                style={{ backgroundColor: region.color }}
              />
              <h3 className="text-lg font-semibold mb-2">{region.title}</h3>
              <p className="text-muted-foreground">{region.description}</p>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="bg-card rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-bold mb-4">Sobre o Cérebro Humano</h3>
          <p className="text-muted-foreground mb-4">
            O cérebro humano é o órgão mais complexo do corpo, pesando cerca de 1,4 kg e contendo aproximadamente 86 bilhões de neurônios. 
            É responsável por controlar praticamente todas as funções do corpo, desde movimentos voluntários até processos automáticos como respiração e batimentos cardíacos.
          </p>
          <p className="text-muted-foreground">
            Cada região cerebral tem funções específicas, mas trabalham em conjunto de forma integrada. O cérebro é dividido em dois hemisférios (direito e esquerdo) 
            e possui quatro lobos principais (frontal, parietal, temporal e occipital), além de estruturas como o cerebelo, tronco cerebral e sistema límbico.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrainMap;