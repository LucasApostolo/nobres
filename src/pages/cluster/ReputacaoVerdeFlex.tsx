import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  ChevronRight, 
  Plus, 
  Minus, 
  AlertTriangle,
  QrCode,
  MapPin,
  RefreshCw,
  TrendingUp
} from 'lucide-react';

export const ReputacaoVerdeFlex: React.FC = () => {
  const whatsappUrl = "https://wa.me/5511980224789?text=Ol%C3%A1!%20Li%20o%20guia%20de%20Reputa%C3%A7%C3%A3o%20Verde%20no%20site%20da%20Nobres%20Entregas%20Flex%20e%20quero%20proteger%20o%20SLA%20da%20minha%20loja.";

  // FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "Qual é o impacto de uma entrega atrasada na reputação do Mercado Livre?",
      a: "O Mercado Livre tolera uma taxa máxima de atraso (geralmente abaixo de 3% a 15% dependendo do volume total e do nível da conta). Exceder esse limite rebaixa a cor da sua reputação, reduz a exposição dos anúncios nas buscas e pode levar à perda da medalha de MercadoLíder."
    },
    {
      q: "O que acontece se o comprador estiver ausente na entrega?",
      a: "Se o comprador não for localizado na primeira tentativa Same Day, o entregador registra a tentativa no aplicativo. Na Nobres Entregas Flex, efetuamos uma segunda tentativa de entrega sem taxa adicional na rota do dia seguinte, evitando que a venda seja cancelada ou negativada."
    },
    {
      q: "Por que a baixa do QR Code em tempo real é tão crucial?",
      a: "A baixa do QR Code pelo aplicativo de entrega é a comprovação digital imediata para o algoritmo do Mercado Livre de que o pacote foi entregue dentro do prazo. Sem essa bipagem em tempo real, o sistema pode considerar o envio como atrasado."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-32 sm:pt-28 md:pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-emerald-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Breadcrumb Navigation */}
      <nav className="max-w-6xl mx-auto mb-6 sm:mb-8 text-xs text-slate-400 flex items-center gap-2 relative z-10">
        <a href="/" className="hover:text-amber-400 transition-colors">Início</a>
        <ChevronRight className="w-3 h-3" />
        <a href="/mercado-livre-envios-flex" className="hover:text-amber-400 transition-colors">Mercado Livre Flex</a>
        <ChevronRight className="w-3 h-3" />
        <span className="text-amber-400 font-semibold">Reputação Verde no Flex</span>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center py-4 sm:py-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Proteção de SLA e Qualidade de Conta</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4 sm:mb-6 leading-tight">
          Como Manter a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-green-400">Reputação Verde</span> no Flex
        </h1>
        
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
          Evite reclamações, penalidades e atrasos na sua conta. Veja como a operação com baixa em tempo real da <strong className="text-white font-semibold">Nobres Entregas Flex</strong> garante seu termômetro no verde e alavanca suas vendas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-xl shadow-amber-500/20 text-sm sm:text-base"
          >
            Proteger Meu Termômetro Verde <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a 
            href="#boas-praticas"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 transition-all text-sm sm:text-base"
          >
            <Award className="mr-2 w-5 h-5 text-amber-400" /> Ver Boas Práticas
          </a>
        </div>
      </section>

      {/* Métricas de Ouro do Mercado Livre */}
      <section className="max-w-6xl mx-auto py-8 relative z-10">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-sm shadow-xl">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">O que Afeta o Termômetro no Envios Flex?</h2>
            <p className="text-slate-400 text-xs sm:text-sm">O algoritmo do Mercado Livre monitora rigorosamente 3 pilares principais em entregas no mesmo dia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 border border-emerald-500/20">
                <Clock className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">1. Entregas no Prazo (SLA)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pacotes do Flex devem ser obrigatoriamente entregues até o final do mesmo dia da compra. Atrasos reduzem diretamente a nota da sua loja.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 border border-emerald-500/20">
                <QrCode className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">2. Bipagem no Aplicativo</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                A leitura do QR Code na presença do destinatário atesta a conclusão da rota. Bipagens tardias ou manuais geram alertas no painel.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 border border-emerald-500/20">
                <RefreshCw className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">3. Gestão de Insucessos</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ausências de compradores e endereços incorretos exigem rápida justificativa no app para que o atraso não seja imputado à sua reputação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Boas Práticas da Nobres Entregas Flex */}
      <section id="boas-praticas" className="max-w-5xl mx-auto py-10 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Como a Nobres Garante seu Termômetro Verde</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">Nossos processos operacionais foram desenhados especificamente para blindar o SLA das contas parceiras.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-400 font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Horário de Coleta Pontual às 10h</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Coletamos seus pacotes logo no primeiro período da manhã. Isso dá tempo de sobra para roteirizar e entregar 100% das encomendas ainda no período da tarde e início da noite.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-400 font-bold">
              <QrCode className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Baixa do QR Code Presencial</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Nossos motoboys utilizam o aplicativo com geolocalização e bipam o pacote no momento exato em que entregam o produto na mão do cliente final.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-400 font-bold">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Reentrega Sem Custo na 2ª Tentativa</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Comprador ausente? Reencaixamos o pacote no dia seguinte sem cobrar uma nova taxa completa, assegurando a resolução do pedido e a satisfação do comprador.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-400 font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Ampla Cobertura Metropolitana</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Cobertura completa em São Paulo Capital (Zonas Norte, Sul, Leste, Oeste, Centro), ABC Paulista e Guarulhos, sem deixar regiões periféricas desatendidas.
            </p>
          </div>
        </div>
      </section>

      {/* Dicas On-Page de Preparação de Pacotes */}
      <section className="max-w-6xl mx-auto py-8 relative z-10">
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950/20 to-slate-900 border border-emerald-500/20">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-3">
            <TrendingUp className="w-4 h-4" /> Dica de Ouro para Sellers
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Como Aumentar a Venda mantendo a Medalha MercadoLíder</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mb-6">
            Anúncios atrelados ao Mercado Envios Flex ganham o selo de destaque <strong className="text-emerald-400">"Chegará Hoje"</strong> no aplicativo do Mercado Livre. Essa exposição aumenta a taxa de conversão em até 300% em relação ao frete convencional via Correios ou Jadlog.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Fixe o selo "Chegará Hoje" nas suas campanhas de Ads</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Embale os produtos antes do horário de passagem da coleta</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Responda dúvidas de compradores antes do horário de corte</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Utilize a Nobres para manter 99%+ de entregas no prazo</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ do Módulo de Reputação */}
      <section className="max-w-4xl mx-auto py-10 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" /> Perguntas Frequentes
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Dúvidas sobre Reputação e SLA</h2>
        </div>

        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div key={index} className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-800/40 transition-colors"
              >
                <span className="text-sm sm:text-base font-semibold text-slate-200">{item.q}</span>
                {openFaqIndex === index ? (
                  <Minus className="w-5 h-5 text-amber-400 shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-500 shrink-0" />
                )}
              </button>
              {openFaqIndex === index && (
                <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-5xl mx-auto mt-8 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-slate-900 to-slate-900 border border-emerald-500/30 text-center relative z-10 shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Quer proteger o SLA da sua conta Mercado Livre?</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
          Entre em contato com a Nobres Entregas Flex e conte com uma equipe pontual, segura e focada em manter seu termômetro no verde todos os dias.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-500/20 text-sm sm:text-base"
        >
          Falar com Especialista em SLA (11) 98022-4789
        </a>
      </section>

    </main>
  );
};
