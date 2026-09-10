import React, { useEffect } from 'react';
import { Truck, CheckCircle2, MapPin, Clock, ShieldCheck, ArrowRight, Phone } from 'lucide-react';

export const AtendimentoGuarulhos: React.FC = () => {
  useEffect(() => {
    // SEO - Título e Descrição específicos para Guarulhos
    document.title = "Transportadora Mercado Livre Flex e Shopee em Guarulhos | Nobres Entregas Flex";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Operação de logística Same Day e coletas diárias para Mercado Livre Flex e Shopee em Guarulhos e região. Entregas no mesmo dia com reputação verde garantida.');
    }
  }, []);

  const handleWhatsApp = (assunto: string) => {
    // Dispara evento de conversão no Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18438688462/gHDyCJu7uvEcEM6doNhE',
        'value': 1.0,
        'currency': 'BRL'
      });
    }
    const text = `Olá! Preciso de coletas/entregas Flex na região de Guarulhos (${assunto}).`;
    window.open(`https://wa.me/5511980224789?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 pt-28 sm:pt-36 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Banner de Topo / Hero da Região */}
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00e7fe]/10 border border-[#00e7fe]/20 text-[#00e7fe] text-sm font-medium">
            <MapPin className="w-4 h-4" /> Coletas e Entregas em Guarulhos - SP
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Transportadora Mercado Livre Flex & Shopee em <span className="text-[#00e7fe]">Guarulhos</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300">
            Coletamos seus produtos em Guarulhos e entregamos no mesmo dia em toda a Grande São Paulo e Capital com pontualidade e segurança.
          </p>
          <div className="pt-4">
            <button
              onClick={() => handleWhatsApp("Solicitação Guarulhos")}
              className="inline-flex items-center gap-2 bg-[#00e7fe] hover:bg-[#00c4d8] text-[#070A12] font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" /> Solicitar Coleta em Guarulhos
            </button>
          </div>
        </header>

        {/* Destaques da Operação Local */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <Clock className="w-8 h-8 text-[#00e7fe]" />
            <h3 className="text-xl font-bold text-white">Coletas Diárias às 10h</h3>
            <p className="text-slate-400 text-sm">
              Passamos na sua empresa ou galpão em Guarulhos no horário certo para você não perder o horário de corte das plataformas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#00e7fe]" />
            <h3 className="text-xl font-bold text-white">Reputação Verde Garantida</h3>
            <p className="text-slate-400 text-sm">
              SLA de entrega de 98.7%, garantindo que seus envios cheguem no mesmo dia ao comprador sem afetar seus termômetros.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <Truck className="w-8 h-8 text-[#00e7fe]" />
            <h3 className="text-xl font-bold text-white">Cobertura Ampla em SP</h3>
            <p className="text-slate-400 text-sm">
              Coletamos em Guarulhos e entregamos em toda a Capital (Zonas Norte, Sul, Leste, Oeste, Centro) e Região Metropolitana.
            </p>
          </div>
        </section>

        {/* Bairros Atendidos em Guarulhos */}
        <section className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-[#00e7fe]" /> Bairros e Polígonos Atendidos em Guarulhos
          </h2>
          <p className="text-slate-300">
            Atendemos os principais polos comerciais, galpões e bairros residenciais de Guarulhos para coleta e distribuição:
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-slate-300 text-sm">
            <div className="p-2 rounded bg-slate-800/40 border border-slate-700/50">Centro de Guarulhos</div>
            <div className="p-2 rounded bg-slate-800/40 border border-slate-700/50">Cumbica</div>
            <div className="p-2 rounded bg-slate-800/40 border border-slate-700/50">Bonsucesso</div>
            <div className="p-2 rounded bg-slate-800/40 border border-slate-700/50">Vila Galvão</div>
            <div className="p-2 rounded bg-slate-800/40 border border-slate-700/50">Pimentas</div>
            <div className="p-2 rounded bg-slate-800/40 border border-slate-700/50">Macedo</div>
            <div className="p-2 rounded bg-slate-800/40 border border-slate-700/50">Jardim Maia</div>
            <div className="p-2 rounded bg-slate-800/40 border border-slate-700/50">Gopouuva</div>
            <div className="p-2 rounded bg-slate-800/40 border border-slate-700/50">Vila Augusta</div>
            <div className="p-2 rounded bg-slate-800/40 border border-slate-700/50">Taboão</div>
            <div className="p-2 rounded bg-slate-800/40 border border-slate-700/50">Cecap</div>
            <div className="p-2 rounded bg-slate-800/40 border border-slate-700/50">São João</div>
          </div>
        </section>

        {/* Chamada para Ação / CTA */}
        <section className="text-center p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Quer otimizar suas entregas Flex em Guarulhos?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            Fale conosco via WhatsApp e agende o teste da sua primeira coleta. Sem burocracia e com início imediato.
          </p>
          <button
            onClick={() => handleWhatsApp("CTA Final Guarulhos")}
            className="inline-flex items-center gap-2 bg-[#00e7fe] hover:bg-[#00c4d8] text-[#070A12] font-bold px-6 py-3 rounded-xl transition-all"
          >
            Falar no WhatsApp Agora <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </div>
    </div>
  );
};
