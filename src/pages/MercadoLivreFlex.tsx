import React from 'react';
import { ShieldCheck, Clock, MapPin, CheckCircle2, ArrowRight, Truck, Award, Zap, Building2 } from 'lucide-react';

export const MercadoLivreFlex: React.FC = () => {
  const whatsappUrl = "https://wa.me/5511964402156?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20cota%C3%A7%C3%A3o%20para%20minha%20opera%C3%A7%C3%A3o%20Mercado%20Livre%20Flex.";

  return (
    <main className="min-h-screen bg-[#070A12] text-slate-100 pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Luzes de Fundo (Glow Effects) para tirar o tom 'escuro plano' */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center py-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold mb-6 backdrop-blur-md shadow-lg shadow-amber-500/5">
          <Award className="w-4 h-4 text-amber-400" /> Especialistas em Mercado Livre Flex SP
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
          Entregas <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Mercado Livre Flex</span> com Reputação Verde
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
          Operação logística de alta precisão em São Paulo e Grande SP. Bipagem na coleta, aviso ao destinatário e <strong className="text-white">SLA de 99,4% garantido</strong> no seu painel Meli.
        </p>

        {/* Badges Rápidos de Confiança */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-xs sm:text-sm text-slate-300">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Coleta Diária às 10h
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Tratativa de Ausência em Tempo Real
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Frota Dedicada SP, ABC e Guarulhos
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-amber-500/25"
          >
            Cotar Operação Flex Agora <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Cards de Diferenciais com Visual Destacado */}
      <section className="max-w-6xl mx-auto py-12 relative z-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-12 text-white">
          Sua loja sem risco de perder o selo Flex
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20">
              <Clock className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Horário Limite Estendido</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Atendemos suas vendas do dia com coleta matutina garantida e entrega no mesmo dia até 22h sem atrasos.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Bipagem & Baixa Imediata</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Todas as etiquetas são bipadas e sincronizadas com a API do Mercado Livre no momento da entrega ao cliente final.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20">
              <Truck className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Suporte Direto via WhatsApp</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Canal de comunicação dedicado entre sua equipe de expedição e nosso time operacional durante todo o percurso.
            </p>
          </div>
        </div>
      </section>

      {/* Tabela de Cobertura com Alto Contraste */}
      <section className="max-w-6xl mx-auto py-12 relative z-10">
        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl">
          <div className="mb-8 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">Regiões Atendidas para Meli Flex</h2>
            <p className="text-slate-400 text-sm">Cidades e micro-regiões homologadas com frota própria para coleta e entrega.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-800/90 text-amber-400 uppercase text-xs">
                <tr>
                  <th className="py-4 px-6 rounded-l-xl">Zona / Região</th>
                  <th className="py-4 px-6">Bairros / Cidades Principais</th>
                  <th className="py-4 px-6 rounded-r-xl">SLA de Entrega</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">São Paulo (Capital)</td>
                  <td className="py-4 px-6">Zona Norte, Zona Sul, Zona Leste, Zona Oeste e Centro</td>
                  <td className="py-4 px-6 text-emerald-400 font-bold">Mesmo Dia (Até 22h)</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">ABC Paulista</td>
                  <td className="py-4 px-6">Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema</td>
                  <td className="py-4 px-6 text-emerald-400 font-bold">Mesmo Dia (Até 22h)</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">Grande SP / Região Oest Metropolitana</td>
                  <td className="py-4 px-6">Guarulhos, Osasco, Barueri, Carapicuíba, Taboão da Serra</td>
                  <td className="py-4 px-6 text-emerald-400 font-bold">Mesmo Dia (Até 22h)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Banner de Fechamento / CTA */}
      <section className="max-w-5xl mx-auto mt-8 p-10 rounded-3xl bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-900 border border-amber-500/30 text-center relative z-10 shadow-2xl">
        <h2 className="text-3xl font-extrabold text-white mb-4">Pronto para otimizar suas entregas Flex?</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-base">
          Receba uma proposta sob medida para a metragem e volume diário do seu e-commerce em menos de 5 minutos.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-500/20"
        >
          Solicitar Tabela no WhatsApp
        </a>
      </section>
    </main>
  );
};
