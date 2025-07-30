import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, FileText, Mail, AlertTriangle } from "lucide-react";

const Privacidade = () => {
  const sections = [
    {
      icon: FileText,
      title: "Coleta de Dados",
      content: [
        "Coletamos apenas os dados necessários para fornecer nossos serviços, incluindo:",
        "• Nome e e-mail quando você se inscreve na newsletter",
        "• Dados de navegação através de cookies técnicos e analíticos",
        "• Informações fornecidas voluntariamente em formulários de contato",
        "• Comentários e interações em nossos artigos"
      ]
    },
    {
      icon: Lock,
      title: "Uso dos Dados",
      content: [
        "Utilizamos seus dados exclusivamente para:",
        "• Envio de newsletter semanal com conteúdo sobre neurociência",
        "• Resposta a dúvidas e comunicações via formulário de contato",
        "• Análise de tráfego e melhoria da experiência do usuário",
        "• Personalização de conteúdo relevante aos seus interesses"
      ]
    },
    {
      icon: Shield,
      title: "Proteção de Dados",
      content: [
        "Implementamos medidas de segurança rigorosas:",
        "• Criptografia SSL em todas as transmissões de dados",
        "• Armazenamento seguro em servidores com backup regular",
        "• Acesso restrito aos dados apenas pela equipe autorizada",
        "• Monitoramento contínuo contra acessos não autorizados"
      ]
    },
    {
      icon: Eye,
      title: "Cookies e Rastreamento",
      content: [
        "Utilizamos cookies para:",
        "• Cookies técnicos: funcionamento básico do site",
        "• Cookies analíticos: Google Analytics para estatísticas",
        "• Cookies de preferência: lembrar suas configurações",
        "• Você pode gerenciar cookies nas configurações do seu navegador"
      ]
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
                Política de Privacidade
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                Sua Privacidade é
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                  Nossa Prioridade
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Conheça como coletamos, utilizamos e protegemos suas informações 
                pessoais em conformidade com a LGPD e as melhores práticas de segurança.
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              Última atualização: Janeiro de 2024
            </div>
          </div>
        </div>
      </section>

      {/* Principais Seções */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <section.icon className="h-5 w-5 text-white" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* LGPD Compliance */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Shield className="h-6 w-6 text-primary" />
                  Conformidade com a LGPD
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  O NeuroConexão está em total conformidade com a Lei Geral de Proteção 
                  de Dados (LGPD - Lei 13.709/2018). Garantimos seus direitos como titular dos dados:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold">Seus Direitos:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Confirmação da existência de tratamento</li>
                      <li>• Acesso aos dados pessoais</li>
                      <li>• Correção de dados incompletos ou incorretos</li>
                      <li>• Anonimização ou eliminação de dados</li>
                      <li>• Portabilidade dos dados</li>
                      <li>• Informação sobre compartilhamento</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold">Como Exercer:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Entre em contato através do nosso formulário</li>
                      <li>• Envie e-mail para: privacidade@neuroconexao.com.br</li>
                      <li>• Resposta em até 15 dias úteis</li>
                      <li>• Processo gratuito e seguro</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compartilhamento de Dados */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Compartilhamento de Dados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros 
                  para fins comerciais. Compartilhamento limitado pode ocorrer apenas:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Com provedores de serviços técnicos (hospedagem, e-mail marketing)</li>
                  <li>• Para cumprimento de obrigações legais</li>
                  <li>• Em caso de transferência de propriedade do negócio (com notificação prévia)</li>
                  <li>• Com seu consentimento explícito</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Retenção de Dados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Mantemos seus dados pelo tempo necessário para:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Newsletter: até o cancelamento da inscrição</li>
                  <li>• Comentários: enquanto o artigo estiver publicado</li>
                  <li>• Contatos: por 2 anos após o último contato</li>
                  <li>• Dados analíticos: 24 meses (anonimizados)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimer Médico */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-200 dark:border-orange-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-orange-700 dark:text-orange-300">
                  <AlertTriangle className="h-6 w-6" />
                  Importante: Disclaimer Médico
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>O conteúdo do NeuroConexão é exclusivamente educativo e informativo.</strong> 
                  Não constitui aconselhamento médico, psicológico ou terapêutico profissional.
                </p>
                
                <div className="bg-orange-50 dark:bg-orange-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">
                    Sempre consulte profissionais qualificados:
                  </h4>
                  <ul className="space-y-1 text-sm text-orange-600 dark:text-orange-400">
                    <li>• Para diagnósticos de condições neurológicas ou psicológicas</li>
                    <li>• Antes de iniciar qualquer tratamento ou terapia</li>
                    <li>• Para medicação ou intervenções médicas</li>
                    <li>• Em caso de emergências de saúde mental</li>
                  </ul>
                </div>

                <p className="text-muted-foreground text-sm">
                  O NeuroConexão não se responsabiliza por decisões tomadas com base 
                  exclusivamente em nosso conteúdo educativo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato para Privacidade */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-3 text-xl">
                  <Mail className="h-6 w-6 text-primary" />
                  Dúvidas sobre Privacidade?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Para questões específicas sobre privacidade, proteção de dados ou 
                  exercício dos seus direitos sob a LGPD:
                </p>
                <div className="space-y-2">
                  <p className="font-medium">E-mail: privacidade@neuroconexao.com.br</p>
                  <p className="text-sm text-muted-foreground">
                    Resposta garantida em até 15 dias úteis
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacidade;