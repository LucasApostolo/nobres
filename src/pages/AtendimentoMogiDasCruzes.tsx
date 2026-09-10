import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truck, CheckCircle2, MapPin, Clock, ShieldCheck, ArrowRight, Phone, HelpCircle, Building2, PackageCheck } from 'lucide-react';

export const AtendimentoMogiDasCruzes: React.FC = () => {
  useEffect(() => {
    // SEO - Title, Meta Description e Canonical específicos para Mogi das Cruzes
    document.title = "Transportadora Envios Flex em Mogi das Cruzes | Mercado Livre e Shopee";
    
    // Atualiza ou cria a Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transportadora para Mercado Livre Envios Flex e Shopee Entrega Direta em Mogi das Cruzes. Coletas diárias programadas e entregas Same Day no Alto Tietê e Grande SP.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Transportadora para Mercado Livre Envios Flex e Shopee Entrega Direta em Mogi das Cruzes. Coletas diárias programadas e entregas Same Day no Alto Tietê e Grande SP.';
      document.head.appendChild(meta);
    }

    // Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.nbrsenviosflex.com.br/atendimento/mogi-das-cruzes');
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://www.nbrsenviosflex.com.br/atendimento/mogi-das-cruzes';
      document.head.appendChild(link);
    }
  }, []);

  const handleWhatsApp = (origem: string) => {
    // Dispara evento de conversão do Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18438688462/gHDyCJu7uvEcEM6doNhE',
        'value': 1.0,
        'currency': 'BRL'
      });
    }
    const text = `Olá! Preciso de coletas e entregas Flex/Shopee para minha loja em Mogi das Cruzes (${origem}).`;
    window.open(`https://wa.me/5511980224789?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* HERO / PRIMEIRA DOBRA REGIONAL */}
        <header className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00e7fe]/10 border border-[#00e7fe]/25 text-[#00e7fe] text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <MapPin className="w-4 h-4" /> Polo Logístico do Alto Tietê
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Transportadora Mercado Livre Envios Flex e Shopee Entrega Direta em <span className="text-[#00e7fe]">Mogi das Cruzes</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed">
            A Nobres Entregas realiza coletas para vendedores do Mercado Livre e Shopee em Mogi das Cruzes, com operação especializada de <Link to="/mercado-livre-envios-flex" className="text-[#00e7fe] hover:underline font-medium">Envios Flex</Link>, <Link to="/shopee-entrega-direta" className="text-[#00e7fe] hover:underline font-medium">Shopee Entrega Direta</Link> e envios no mesmo dia para Mogi, todo o Alto Tietê, São Paulo e Região Metropolitana.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleWhatsApp("Hero Mogi das Cruzes")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00e7fe] hover:bg-[#00c4d8] text-[#070A12] font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" /> Agendar Coleta em Mogi
            </button>
            <Link
              to="/mercado-livre-envios-flex/regioes-atendidas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-6 py-4 rounded-xl transition-all"
            >
              Ver Todas as Regiões
            </Link>
          </div>
        </header>

        {/* DIFERENCIAIS OPERACIONAIS MOGI */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <Clock className="w-8 h-8 text-[#00e7fe]" />
            <h3 className="text-xl font-bold text-white">Rota de Coleta Pontual</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Coletamos diretamente no seu galpão, loja física ou centro de distribuição em Mogi das Cruzes no horário combinado, garantindo o tempo hábil para bipe e expedição.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#00e7fe]" />
            <h3 className="text-xl font-bold text-white">SLA e Termômetro Protegido</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Com taxa de entrega no mesmo dia superior a 99%, garantimos que suas vendas na Shopee e Mercado Livre mantenham o selo de entrega no prazo. Saiba mais sobre <Link to="/mercado-livre-envios-flex/reputacao-verde" className="text-[#00e7fe] hover:underline">reputação verde no Flex</Link>.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <Truck className="w-8 h-8 text-[#00e7fe]" />
            <h3 className="text-xl font-bold text-white">Conexão Mogi → Toda a Grande SP</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Expedição rápida conectando os vendedores de Mogi das Cruzes até o destino final dos compradores na Capital, ABCD e Zona Norte/Oeste/Leste/Sul de SP.
            </p>
          </div>
        </section>

        {/* DETALHAMENTO LOCAL: Bairros e Polígonos de Mogi */}
        <section className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Building2 className="w-6 h-6 text-[#00e7fe]" /> Bairros e Polos Comerciais Atendidos em Mogi das Cruzes
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Nossa frota realiza rotas de coleta e entregas Same Day cobrindo os principais bairros e distritos industriais de Mogi das Cruzes:
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-slate-300 text-sm">
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Centro Histórico
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Cesar de Souza
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Brás Cubas
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Taboão (Distr. Ind.)
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Mogilar
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Alto do Ipiranga
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Vila Oliveira
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Jundiapeba
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Socorro
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Parque Monte Líbano
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Vila Industrial
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Sabaúna
            </div>
          </div>
        </section>

        {/* LOGÍSTICA DE COLETAS EM MOGI */}
        <section className="space-y-6">
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <PackageCheck className="w-6 h-6 text-[#00e7fe]" /> Como funciona a Coleta Express em Mogi das Cruzes?
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Mogi das Cruzes é um dos maiores hubs produtivos e comerciais do Alto Tietê. Para atender os sellers da cidade sem falhas no prazo de corte, estruturamos uma logística rápida:
            </p>
            <ul className="space-y-3 text-slate-300 text-sm sm:text-base list-disc list-inside">
              <li><strong>Coletas Diárias Programadas:</strong> Nossa equipe passa na sua empresa em horário fixo para recolher seus pacotes prontos.</li>
              <li><strong>Triagem e Bipagem Rápida:</strong> Seus envios do Mercado Livre Flex e Shopee são atualizados no sistema logo após a coleta.</li>
              <li><strong>Entrega Same Day:</strong> O cliente que comprou até o horário limite recebe no mesmo dia, no conforto de casa em Mogi ou qualquer cidade atendida da Grande SP.</li>
            </ul>
            <div className="pt-2">
              <Link to="/mercado-livre-envios-flex/como-ativar" className="text-[#00e7fe] font-semibold hover:underline inline-flex items-center gap-1 text-sm">
                Veja o passo a passo de como ativar o Flex na sua conta <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ EXCLUSIVA PARA MOGI DAS CRUZES */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#00e7fe]" /> Perguntas Frequentes sobre Coletas em Mogi
            </h2>
            <p className="text-slate-400 text-sm">Dúvidas comuns de sellers de Mogi das Cruzes antes de contratar nossa transportadora.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-lg">A Nobres coleta Mercado Livre Envios Flex em Mogi?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sim! Realizamos coletas diárias em estabelecimentos comerciais, galpões e residências de sellers habilitados no Mercado Livre Flex em Mogi das Cruzes.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-lg">A Shopee Entrega Direta funciona com coleta em Mogi das Cruzes?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sim, coletamos pedidos de lojas que operam no modelo de Entrega Direta da Shopee na região de Mogi e realizamos a distribuição no mesmo dia.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-lg">Qual é o horário de coleta em Mogi das Cruzes?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Alinhamos a janela de coleta conforme o volume do cliente e o horário de corte configurado nas suas contas de e-commerce.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-lg">Existe volume mínimo de pacotes para coleta?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Atendemos tanto pequenos e médios vendedores quanto operações com alto volume diário. Entre em contato para analisar a viabilidade para a sua rota.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL DE CONVERSÃO */}
        <section className="text-center p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Pronto para impulsionar suas vendas em Mogi das Cruzes com entrega Same Day?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Fale diretamente com nossa equipe no WhatsApp. Configuramos seu atendimento e agendamos o teste de coleta para Mogi sem complicação.
          </p>
          <button
            onClick={() => handleWhatsApp("CTA Final Mogi das Cruzes")}
            className="inline-flex items-center gap-2 bg-[#00e7fe] hover:bg-[#00c4d8] text-[#070A12] font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105"
          >
            Falar com Especialista no WhatsApp <ArrowRight className="w-5 h-5" />
          </button>
        </section>

      </div>
    </div>
  );
};
