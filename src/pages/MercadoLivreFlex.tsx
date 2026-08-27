import React from 'react';
import { ShieldCheck, Clock, CheckCircle2, ArrowRight, Truck, Award } from 'lucide-react';

export const MercadoLivreFlex: React.FC = () => {
  const whatsappUrl = "https://wa.me/5511964402156?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Nobres%20Entregas%20Flex%20e%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20para%20minha%20opera%C3%A7%C3%A3o%20Mercado%20Livre%20Envios%20Flex.";

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Luzes de Fundo (Glow Effects) para quebrar o fundo escuro plano */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-amber-500/15 via-orange-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center py-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold mb-6 backdrop-blur-md shadow-lg shadow-amber-500/5">
          <Award className="w-4 h-4 text-amber-400" /> Especialistas em Mercado Livre Envios Flex SP
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
          Entregas <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400">Mercado Livre Envios Flex</span> com Reputação Verde
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
          Operação logística de alta precisão em São Paulo e Grande SP. Bipagem na entrega, atualização imediata e <strong className="text-white font-semibold">SLA de 99,4% garantido</strong> para manter o selo verde no seu painel Meli.
        </p>

        {/* Badges Rápidos de Confiança */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 text-xs sm:text-sm text-slate-200">
          <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 shadow-md">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Coleta Matutina a partir das 10h
          </span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 shadow-md">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Tratativa de Ausência em Tempo Real
          </span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 shadow-md">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cobertura em SP, ABC e Guarulhos
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-amber-500/25 text-base"
          >
            Cotar Operação Envios Flex <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Cards de Diferenciais */}
      <section className="max-w-6xl mx-auto py-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Por que a Nobres Entregas Flex é a parceira ideal?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Processos operacionais alinhados às regras e métricas exigidas pelo Mercado Livre.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/50 transition-all shadow-xl backdrop-blur-sm group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Pontualidade no SLA</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Cumprimento rigoroso dos horários de corte para garantir 100% dos pacotes entregues no mesmo dia até às 22h.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/50 transition-all shadow-xl backdrop-blur-sm group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Baixa do QR Code no Destino</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Escaneamento e baixa do pacote realizados na entrega presencial, prevenindo divergências e reclamações.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/50 transition-all shadow-xl backdrop-blur-sm group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 group-hover:scale-110 transition-transform">
              <Truck className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Suporte Direto via WhatsApp</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Canal rápido de comunicação com o time operacional da Nobres Entregas durante todo o itinerário das rotas.
            </p>
          </div>
        </div>
      </section>

      {/* Tabela de Cobertura */}
      <section className="max-w-6xl mx-auto py-10 relative z-10">
        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md">
          <div className="mb-8 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">Regiões Atendidas para Mercado Livre Envios Flex</h2>
            <p className="text-slate-400 text-sm">Zonas e municípios com frota dedicada e logística Same Day.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-800/80 text-amber-400 uppercase text-xs tracking-wider">
                <tr>
                  <th className="py-4 px-6 rounded-l-xl">Região</th>
                  <th className="py-4 px-6">Bairros e Cidades de Cobertura</th>
                  <th className="py-4 px-6 rounded-r-xl">Prazo de Entrega</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">São Paulo (Capital)</td>
                  <td className="py-4 px-6 text-slate-300">Zona Norte, Zona Sul, Zona Leste, Zona Oeste e Centro</td>
                  <td className="py-4 px-6 text-emerald-400 font-bold">Mesmo Dia (Até 22h)</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">ABC Paulista</td>
                  <td className="py-4 px-6 text-slate-300">Santo André, São Bernardo, São Caetano e Diadema</td>
                  <td className="py-4 px-6 text-emerald-400 font-bold">Mesmo Dia (Até 22h)</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">Grande SP / Região Oeste</td>
                  <td className="py-4 px-6 text-slate-300">Guarulhos, Osasco, Barueri, Carapicuíba e Taboão da Serra</td>
                  <td className="py-4 px-6 text-emerald-400 font-bold">Mesmo Dia (Até 22h)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Banner CTA Final */}
      <section className="max-w-5xl mx-auto mt-8 p-10 rounded-3xl bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-900 border border-amber-500/30 text-center relative z-10 shadow-2xl">
        <h2 className="text-3xl font-extrabold text-white mb-4">Pronto para otimizar suas entregas Flex?</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-base">
          Fale diretamente com a equipe da Nobres Entregas Flex e solicite a tabela personalizada para o volume do seu e-commerce.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-500/20 text-base"
        >
          Falar com Nobres Entregas Flex
        </a>
      </section>
    </main>
  );
};
