import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Instagram, Linkedin, Youtube, MessageCircle, Handshake, Phone } from "lucide-react";

const Contato = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "E-mail Profissional",
      description: "Para dúvidas, sugestões e colaborações",
      contact: "contato@neuroconexao.com.br",
      action: "Enviar E-mail"
    },
    {
      icon: MessageCircle,
      title: "Parcerias e Entrevistas",
      description: "Oportunidades de colaboração e mídia",
      contact: "parcerias@neuroconexao.com.br",
      action: "Propor Parceria"
    },
    {
      icon: Handshake,
      title: "Consultoria Científica",
      description: "Serviços especializados para empresas",
      contact: "consultoria@neuroconexao.com.br",
      action: "Saber Mais"
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@neuroconexao",
      description: "Conteúdo visual e stories educativos",
      color: "from-pink-500 to-orange-500"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "NeuroConexão",
      description: "Artigos profissionais e networking",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "NeuroConexão",
      description: "Vídeos educativos e webinars",
      color: "from-red-500 to-red-600"
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
                Fale Conosco
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                Vamos Conversar Sobre
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                  Neurociência?
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Estamos aqui para responder suas dúvidas, ouvir sugestões e explorar 
                oportunidades de colaboração. Conecte-se conosco!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Envie Sua Mensagem</h2>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e nossa equipe retornará em até 48 horas.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Formulário de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nome Completo *</label>
                      <Input placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">E-mail *</label>
                      <Input type="email" placeholder="seu@email.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Assunto *</label>
                    <Input placeholder="Sobre o que você gostaria de falar?" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mensagem *</label>
                    <Textarea 
                      placeholder="Descreva sua dúvida, sugestão ou proposta..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                      <Mail className="h-4 w-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Seus dados são protegidos conforme nossa Política de Privacidade
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Outras Formas de Contato</h2>
                <p className="text-muted-foreground">
                  Escolha o canal que melhor se adequa ao seu tipo de comunicação.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                          <method.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-semibold">{method.title}</h3>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                          <p className="text-sm font-medium text-primary">{method.contact}</p>
                          <Button variant="outline" size="sm">
                            {method.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Horário de Atendimento */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta</span>
                    <span className="font-medium">9h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fins de Semana</span>
                    <span className="font-medium">E-mail apenas</span>
                  </div>
                  <div className="pt-2 text-xs text-muted-foreground">
                    Respondemos e-mails em até 48 horas úteis
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Siga-nos nas Redes Sociais</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conecte-se conosco para conteúdo exclusivo, bastidores e interação direta com nossa equipe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socialMedia.map((social, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow overflow-hidden">
                <div className={`h-24 bg-gradient-to-br ${social.color} flex items-center justify-center`}>
                  <social.icon className="h-12 w-12 text-white" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{social.name}</CardTitle>
                  <p className="text-sm font-mono text-muted-foreground">{social.handle}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{social.description}</p>
                  <Button variant="outline" className="w-full">
                    Seguir
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Perguntas Frequentes</h2>
            
            <div className="space-y-6 text-left">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Posso sugerir temas para artigos?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sim! Adoramos receber sugestões de temas. Use nosso formulário de contato 
                    ou nos mande uma mensagem nas redes sociais.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Vocês oferecem consultoria científica?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sim, oferecemos serviços de consultoria para empresas, editoras e 
                    instituições educacionais. Entre em contato pelo e-mail específico.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Como posso colaborar com vocês?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Estamos sempre abertos a parcerias! Envie sua proposta para o e-mail 
                    de parcerias detalhando como podemos colaborar.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;