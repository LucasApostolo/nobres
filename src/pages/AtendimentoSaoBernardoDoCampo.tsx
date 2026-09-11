import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truck, CheckCircle2, MapPin, Clock, ShieldCheck, ArrowRight, Phone, HelpCircle, Building2, PackageCheck } from 'lucide-react';

export const AtendimentoSaoBernardoDoCampo: React.FC = () => {
  useEffect(() => {
    // SEO - Title, Meta Description e Canonical específicos para São Bernardo do Campo
    document.title = "Transportadora Envios Flex em São Bernardo do Campo | Mercado Livre e Shopee";
    
    // Atualiza ou cria a Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transportadora para Mercado Livre Envios Flex e Shopee Entrega Direta em São Bernardo do Campo. Coletas diárias programadas e entregas Same Day no ABC e Grande SP.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Transportadora para Mercado Livre Envios Flex e Shopee Entrega Direta em São Bernardo do Campo. Coletas diárias programadas e entregas Same Day no ABC e Grande SP.';
      document.head.appendChild(meta);
    }

    // Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.nbrsenviosflex.com.br/atendimento/sao-bernardo-do-campo');
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://www.nbrsenviosflex.com.br/atendimento/sao-bernardo-do-campo';
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
    const text = `Olá! Preciso de coletas e entregas Flex/Shopee para minha loja em São Bernardo do Campo (${origem}).`;
    window.open(`https://wa.me/5511980224789?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* HERO / PRIMEIRA DOBRA REGIONAL */}
        <header className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00e7fe]/10 border border-[#00e7fe]/25 text-[#00e7fe] text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <MapPin className="w-4 h-4" /> Hub Logístico do ABC Paulista
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Transportadora Mercado Livre Envios Flex e Shopee Entrega Direta em <span className="text-[#00e7fe]">São Bernardo do Campo</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed">
            A Nobres Entregas realiza coletas diárias para vendedores do Mercado Livre e Shopee em São Bernardo do Campo. Oferecemos operação dedicada de <Link to="/mercado-livre-envios-flex" className="text-[#00e7fe] hover:underline font-medium">Envios Flex</Link>, <Link to="/shopee-entrega-direta" className="text-[#00e7fe] hover:underline font-medium">Shopee Entrega Direta</Link> e distribuição no mesmo dia para todo o ABC, São Paulo e Região Metropolitana.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleWhatsApp("Hero SBC")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00e7fe] hover:bg-[#00c4d8] text-[#070A12] font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" /> Agendar Coleta em SBC
            </button>
            <Link
              to="/mercado-livre-envios-flex/regioes-atendidas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-6 py-4 rounded-xl transition-all"
            >
              Ver Todas as Regiões
            </Link>
          </div>
        </header>

        {/* DIFERENCIAIS OPERACIONAIS SBC */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <Clock className="w-8 h-8 text-[#00e7fe]" />
            <h3 className="text-xl font-bold text-white">Pontualidade no Corte</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Realizamos coletas programadas em São Bernardo nos horários de pico comercial para garantir que seus pedidos sejam bipados antes do limite da plataforma.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#00e7fe]" />
            <h3 className="text-xl font-bold text-white">Zero Atrasos no Flex</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Mantemos seu termômetro protegido com nível de serviço de 99.4% nas entregas Same Day. Veja nossas estratégias de <Link to="/mercado-livre-envios-flex/reputacao-verde" className="text-[#00e7fe] hover:underline">reputação verde no Flex</Link>.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <Truck className="w-8 h-8 text-[#00e7fe]" />
            <h3 className="text-xl font-bold text-white">SBC → Capital e Região</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Logística conectada via Anchieta e Imigrantes, distribuindo suas encomendas de São Bernardo do Campo com agilidade para toda a Grande SP.
            </p>
          </div>
        </section>

        {/* DETALHAMENTO LOCAL: Bairros e Polígonos de SBC */}
        <section className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Building2 className="w-6 h-6 text-[#00e7fe]" /> Bairros e Polos Comerciais Atendidos em São Bernardo do Campo
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Nossa operação de coletas diárias e entregas no mesmo dia cobre as principais zonas industriais e residenciais de São Bernardo:
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-slate-300 text-sm">
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Centro de SBC
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Rudge Ramos
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Paulicéia
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Demarchi
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Baeta Neves
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Assunção
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Jardim do Mar
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Nova Petrópolis
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Taboão
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Alvarenga
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Ferrazópolis
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" /> Anchieta
            </div>
          </div>
        </section>

        {/* LOGÍSTICA DE COLETAS EM SBC */}
        <section className="space-y-6">
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <PackageCheck className="w-6 h-6 text-[#00e7fe]" /> Como funciona o Envio Flex em São Bernardo do Campo?
            </h2>
            <p className="text-slate-300 leading-relaxed">
              São Bernardo do Campo possui um dos maiores parques industriais e comerciais do Estado. Nossa estrutura atende sellers locais de forma ágil para maximizar as vendas no Mercado Livre e Shopee:
            </p>
            <ul className="space-y-3 text-slate-300 text-sm sm:text-base list-disc list-inside">
              <li><strong>Coleta na Porta:</strong> Recolhemos seus pacotes diretamente na sua loja, galpão ou residência em São Bernardo.</li>
              <li><strong>Conferência e Bipagem Urgente:</strong> Notificação imediata nos sistemas das plataformas para sinalizar que o pacote está em trânsito.</li>
              <li><strong>Distribuição Expressa:</strong> Entrega garantida no mesmo dia para compradores localizados em SBC, Santo André, São Caetano, São Paulo e arredores.</li>
            </ul>
            <div className="pt-2">
              <Link to="/mercado-livre-envios-flex/como-ativar" className="text-[#00e7fe] font-semibold hover:underline inline-flex items-center gap-1 text-sm">
                Passo a passo completo para configurar o Flex na sua loja <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ EXCLUSIVA PARA SBC */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#00e7fe]" /> Perguntas Frequentes sobre Coletas em São Bernardo
            </h2>
            <p className="text-slate-400 text-sm">Dúvidas recorrentes de lojistas e e-commerces em SBC.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-lg">A Nobres atende o Flex no polo comercial de SBC?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sim! Atendemos vendedores do Mercado Livre Flex localizados em todos os bairros e polos industriais de São Bernardo do Campo.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-lg">A Shopee Entrega Direta é atendida em São Bernardo?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sim, realizamos coletas para vendedores habilitados no programa de Entrega Direta da Shopee com despacho no mesmo dia.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-lg">Quais são os horários de coleta em SBC?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                As rotas de coleta são alinhadas diretamente com o vendedor, respeitando o horário de corte configurado no painel da sua plataforma.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-lg">Como solicitar um teste de coleta em São Bernardo do Campo?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Basta clicar no botão do WhatsApp nesta página e informar seu endereço de coleta e volume estimado diário.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL DE CONVERSÃO */}
        <section className="text-center p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Quer otimizar suas entregas Mercado Livre Flex e Shopee em São Bernardo?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Entre em contato com a equipe operacional da Nobres Entregas. Agende sua primeira coleta sem complicações.
          </p>
          <button
            onClick={() => handleWhatsApp("CTA Final SBC")}
            className="inline-flex items-center gap-2 bg-[#00e7fe] hover:bg-[#00c4d8] text-[#070A12] font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105"
          >
            Falar com Especialista no WhatsApp <ArrowRight className="w-5 h-5" />
          </button>
        </section>

      </div>
    </div>
  );
};
