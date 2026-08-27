import React, { useState } from 'react';
import { 
  Settings, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Smartphone, 
  HelpCircle, 
  ChevronRight, 
  Plus, 
  Minus, 
  AlertTriangle,
  Zap,
  ShieldCheck,
  Building2
} from 'lucide-react';

export const ComoAtivarFlex: React.FC = () => {
  const whatsappUrl = "https://wa.me/5511980224789?text=Ol%C3%A1!%20Li%20o%20guia%20de%20como%20ativar%20o%20Flex%20no%20site%20da%20Nobres%20Entregas%20Flex%20e%20gostaria%20de%20conectar%20minha%20loja.";

  // FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "Por que a opção do Envios Flex não aparece no meu painel?",
      a: "O Mercado Livre disponibiliza o Flex gradualmente para contas com reputação Amarela ou Verde localizadas dentro da área de cobertura metropolitana de São Paulo. Caso cumpra os requisitos e não veja a opção, entre em contato com o suporte do Mercado Livre para solicitar a habilitação manual do seu CEP de origem."
    },
    {
      q: "Qual é o horário limite de corte recomendado para entregas no mesmo dia?",
      a: "Recomendamos definir o horário de corte entre 12h:00 e 13h:00 no painel do Meli. Dessa forma, suas vendas efetuadas na manhã e na noite anterior são consolidadas para coleta pela Nobres Entregas Flex a partir das 10h da manhã."
    },
    {
      q: "Como o entregador faz a leitura do QR Code das etiquetas Flex?",
      a: "A Nobres Entregas Flex utiliza aplicativos homologados compatíveis com o ecossistema do Mercado Livre. Durante a entrega presencial ao comprador, o motoboy bipará a etiqueta diretamente pelo smartphone, atualizando o status do envio instantaneamente."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-32 sm:pt-28 md:pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Breadcrumb Navigation */}
      <nav className="max-w-6xl mx-auto mb-6 sm:mb-8 text-xs text-slate-400 flex items-center gap-2 relative z-10">
        <a href="/" className="hover:text-amber-400 transition-colors">Início</a>
        <ChevronRight className="w-3 h-3" />
        <a href="/mercado-livre-envios-flex" className="hover:text-amber-400 transition-colors">Mercado Livre Flex</a>
        <ChevronRight className="w-3 h-3" />
        <span className="text-amber-400 font-semibold">Como Ativar o Flex</span>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center py-4 sm:py-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
          <Settings className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Guia Prático de Configuração e Habilitação</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4 sm:mb-6 leading-tight">
          Como Ativar o <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400">Mercado Livre Flex</span> na Sua Loja
        </h1>
        
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
          Aprenda o passo a passo completo para habilitar as entregas no mesmo dia no painel do seu e-commerce e conecte sua conta à operação de logística da <strong className="text-white font-semibold">Nobres Entregas Flex</strong>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-xl shadow-amber-500/20 text-sm sm:text-base"
          >
            Ativar e Conectar Transportadora <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a 
            href="#passo-a-passo"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 transition-all text-sm sm:text-base"
          >
            <Clock className="mr-2 w-5 h-5 text-amber-400" /> Ver Guia Passo a Passo
          </a>
        </div>
      </section>

      {/* Pré-requisitos Obrigatórios do Meli */}
      <section className="max-w-6xl mx-auto py-8 relative z-10">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-sm shadow-xl">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Pré-requisitos Exigidos pelo Mercado Livre</h2>
            <p className="text-slate-400 text-xs sm:text-sm">Certifique-se de que sua conta atende aos critérios abaixo antes de tentar ativar o recurso.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/20">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">1. Reputação Mínima</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sua conta deve possuir reputação Amarela, Verde ou ser medalhista MercadoLíder. Contas no termômetro Vermelho ficam temporariamente restritas de habilitar novos envios Flex.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/20">
                <Building2 className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">2. Endereço na Cobertura</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                O seu CEP de expedição (galpão, loja física ou residência) precisa estar cadastrado dentro da área metropolitana de São Paulo at земля pelo programa Flex.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/20">
                <Zap className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">3. Capacidade de Coleta</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ter pacotes prontos, embalados e etiquetados antes do horário de passagem da Nobres Entregas Flex (coletas programadas a partir das 10h da manhã).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Passo a Passo Ilustrado */}
      <section id="passo-a-passo" className="max-w-5xl mx-auto py-10 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">4 Passos Simples para Ativar no Painel</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">Siga as instruções dentro da sua conta do Mercado Livre e ative a modalidade hoje mesmo.</p>
        </div>

        <div className="space-y-6">
          {/* Passo 1 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-xl shrink-0 border border-amber-500/30">
              1
            </div>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-white">Acesse o Menu de Configurações de Envio</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                No seu painel do Mercado Livre, navegue até <strong className="text-amber-400">Vendas &gt; Configurações &gt; Formas de envio</strong>. Procure pelo bloco intitulado <strong className="text-white">Mercado Envios Flex</strong>.
              </p>
            </div>
          </div>

          {/* Passo 2 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-xl shrink-0 border border-amber-500/30">
              2
            </div>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-white">Clique em "Ativar Mercado Envios Flex"</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Confirme as informações do seu endereço de coleta. Certifique-se de que o CEP cadastrado é o local exato onde nossa equipe fará a retirada dos pacotes diariamente.
              </p>
            </div>
          </div>

          {/* Passo 3 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-xl shrink-0 border border-amber-500/30">
              3
            </div>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-white">Configure o Horário de Corte e Limite Diário</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ajuste o horário limite até onde o comprador pode adquirir produtos para receber no mesmo dia (recomendado entre 12h e 13h). Defina também a quantidade máxima diária de envios Flex que sua equipe consegue embalar.
              </p>
            </div>
          </div>

          {/* Passo 4 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row gap-6 items-start border-l-4 border-l-amber-500">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl shrink-0 shadow-lg shadow-amber-500/20">
              4
            </div>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-white">Avise a Nobres Entregas Flex para Iniciar as Coletas</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Chame nossa equipe no WhatsApp <strong className="text-amber-400">(11) 98022-4789</strong> e repasse o endereço para inclusão imediata na rota do dia. A partir daí, nós cuidamos da bipagem e entrega presencial no mesmo dia!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dicas Essenciais para Não Ter Atrasos */}
      <section className="max-w-6xl mx-auto py-8 relative z-10">
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900 border border-amber-500/20">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-3">
            <AlertTriangle className="w-4 h-4" /> Alerta de Operação
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Atenção Especial com as Etiquetas de Envio</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mb-6">
            No Envios Flex, as etiquetas contêm um <strong className="text-white">QR Code específico de bipagem</strong>. Imprima as etiquetas com boa nitidez em impressoras térmicas ou a laser para garantir rápida verificação pelos motoboys na coleta e no ato da entrega presencial ao destinatário.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Imprima etiquetas sem rasuras ou falhas de tinta</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Mantenha as embalagens devidamente seladas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Separe os volumes por região ou romaneio</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Forneça contatos atualizados dos destinatários</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ do Módulo de Ativação */}
      <section className="max-w-4xl mx-auto py-10 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" /> Perguntas Frequentes
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Dúvidas sobre Habilitação</h2>
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
      <section className="max-w-5xl mx-auto mt-8 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-900 border border-amber-500/30 text-center relative z-10 shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Precisa de ajuda para ativar na sua conta?</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
          Nossa equipe de suporte auxilia você na configuração de corte e prepara a logística de coletas para sua loja começar a vender com entregas no mesmo dia.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-500/20 text-sm sm:text-base"
        >
          Falar com Suporte de Ativação (11) 98022-4789
        </a>
      </section>

    </main>
  );
};
