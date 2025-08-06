
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WelcomeEmailRequest {
  email: string;
  name: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, name }: WelcomeEmailRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "Neurociência Blog <onboarding@resend.dev>",
      to: [email],
      subject: "🧠 Bem-vindo ao mundo da Neurociência!",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #6366f1; font-size: 28px; margin: 0;">🧠 Neurociência Blog</h1>
          </div>
          
          <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h2 style="margin: 0 0 10px 0; font-size: 24px;">Olá, ${name}!</h2>
            <p style="margin: 0; font-size: 16px; opacity: 0.9;">Bem-vindo ao fascinante mundo da neurociência!</p>
          </div>
          
          <div style="margin-bottom: 30px;">
            <h3 style="color: #333; font-size: 20px; margin-bottom: 15px;">O que você receberá:</h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="padding: 10px 0; border-bottom: 1px solid #eee;">
                🧠 <strong>Artigos científicos</strong> sobre neuroplasticidade e desenvolvimento cerebral
              </li>
              <li style="padding: 10px 0; border-bottom: 1px solid #eee;">
                💡 <strong>Técnicas práticas</strong> para formar hábitos saudáveis baseados em neurociência
              </li>
              <li style="padding: 10px 0; border-bottom: 1px solid #eee;">
                🔬 <strong>Descobertas recentes</strong> em neurociência aplicada ao cotidiano
              </li>
              <li style="padding: 10px 0;">
                🌟 <strong>Estratégias terapêuticas</strong> para saúde mental e bem-estar
              </li>
            </ul>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
            <h3 style="color: #333; margin-top: 0;">📖 Artigos Recomendados para Começar:</h3>
            <p style="margin-bottom: 10px;">
              <a href="${Deno.env.get('SITE_URL')}/artigo/neuroplasticidade-40" style="color: #6366f1; text-decoration: none; font-weight: 500;">
                • Como a Neuroplasticidade Pode Transformar Sua Vida Aos 40+
              </a>
            </p>
            <p style="margin-bottom: 10px;">
              <a href="${Deno.env.get('SITE_URL')}/artigo/microhabitos-poder" style="color: #6366f1; text-decoration: none; font-weight: 500;">
                • O Poder dos Microhábitos: Mudanças Pequenas, Grandes Resultados
              </a>
            </p>
          </div>
          
          <div style="text-align: center; margin-bottom: 30px;">
            <a href="${Deno.env.get('SITE_URL')}/categorias" 
               style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); 
                      color: white; 
                      padding: 12px 24px; 
                      border-radius: 6px; 
                      text-decoration: none; 
                      display: inline-block; 
                      font-weight: 500;">
              Explorar Todos os Artigos
            </a>
          </div>
          
          <div style="text-align: center; color: #666; font-size: 14px; border-top: 1px solid #eee; padding-top: 20px;">
            <p>Obrigado por se juntar à nossa comunidade!</p>
            <p>Se você não deseja mais receber estes emails, <a href="#" style="color: #6366f1;">cancele sua inscrição</a>.</p>
          </div>
        </div>
      `,
    });

    console.log("Welcome email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-welcome-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
