import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Check, Users, BookOpen, Calendar, Bell } from "lucide-react";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Erro",
        description: "Por favor, insira seu e-mail.",
        variant: "destructive"
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert({ email });

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "E-mail já cadastrado",
            description: "Este e-mail já está inscrito em nossa newsletter.",
            variant: "destructive"
          });
        } else {
          throw error;
        }
        return;
      }

      toast({
        title: "Inscrição realizada!",
        description: "Obrigado por se inscrever. Você receberá nossa newsletter semanal.",
      });

      setEmail('');
    } catch (error) {
      console.error('Erro ao inscrever newsletter:', error);
      toast({
        title: "Erro ao inscrever",
        description: "Ocorreu um erro. Tente novamente.",
        variant: "destructive"
      });
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                Newsletter Semanal
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                Transforme Seu Conhecimento
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                  Com Insights Neurocientíficos
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Receba conteúdo exclusivo, pesquisas recentes e aplicações práticas 
                da neurociência diretamente no seu e-mail, toda semana.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-2xl mx-auto">
              <Card className="p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <Mail className="h-12 w-12 text-primary mx-auto" />
                    <h3 className="text-2xl font-bold">Inscreva-se Gratuitamente</h3>
                    <p className="text-muted-foreground">
                      Junte-se a mais de 15.000 pessoas que já transformaram seu entendimento sobre o cérebro
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <Input 
                      type="email"
                      placeholder="Seu melhor e-mail" 
                      className="flex-1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Inscrever-se
                    </Button>
                  </form>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Não compartilhamos seus dados. Cancele a qualquer momento.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que Você Vai Receber</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conteúdo curado por especialistas para maximizar seu aprendizado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Pesquisas Recentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  Resumos das descobertas mais importantes da neurociência mundial
                </p>
                <div className="flex items-center justify-center text-sm text-green-600">
                  <Check className="h-4 w-4 mr-1" />
                  Toda semana
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Aplicações Práticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  Como aplicar o conhecimento neurocientífico no seu dia a dia
                </p>
                <div className="flex items-center justify-center text-sm text-green-600">
                  <Check className="h-4 w-4 mr-1" />
                  Exercícios inclusos
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Conteúdo Exclusivo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  Materiais especiais disponíveis apenas para assinantes
                </p>
                <div className="flex items-center justify-center text-sm text-green-600">
                  <Check className="h-4 w-4 mr-1" />
                  Acesso antecipado
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prévia da Newsletter</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Veja o que nossos assinantes recebem toda semana
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">NeuroConexão Weekly #47</Badge>
                    <span className="text-sm text-muted-foreground">15 Jan 2024</span>
                  </div>
                  <h3 className="text-xl font-bold">Como o Exercício Remodela Seu Cérebro</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">🧠 Descoberta da Semana</h4>
                    <p className="text-muted-foreground">
                      Pesquisadores descobriram que apenas 20 minutos de exercício podem 
                      aumentar a produção de BDNF em 200%, melhorando significativamente 
                      a neuroplasticidade...
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">⚡ Aplicação Prática</h4>
                    <p className="text-muted-foreground">
                      Experimente a "Caminhada Neural": 15 minutos de caminhada moderada 
                      antes de estudar pode melhorar sua retenção em até 40%...
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">📚 Leitura Recomendada</h4>
                    <p className="text-muted-foreground">
                      Artigo completo: "Neuroplasticidade e Exercício: Uma Revisão Sistemática"
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15.000+</div>
              <div className="text-muted-foreground">Assinantes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">47</div>
              <div className="text-muted-foreground">Edições Publicadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
              <div className="text-muted-foreground">Avaliação Média</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Bell className="h-16 w-16 mx-auto opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Pronto Para Transformar Seu Conhecimento?
            </h2>
            <p className="text-xl opacity-90">
              Junte-se a milhares de pessoas que já estão aplicando a neurociência 
              para melhorar suas vidas. É gratuito e você pode cancelar a qualquer momento.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email"
                placeholder="Seu melhor e-mail" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit"
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
              >
                <Mail className="h-4 w-4 mr-2" />
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsletter;