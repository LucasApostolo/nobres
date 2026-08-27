import React, { useState } from 'react';
import { ShieldCheck, Clock, CheckCircle2, ArrowRight, Truck, Award, Plus, Minus, BookOpenText } from 'lucide-react';

// Dados simulados para a seção de FAQ
const flexFaq = [
  {
    question: "O que acontece se o cliente não estiver em casa?",
    answer: "Nossos entregadores fazem uma tentativa de contato e, se autorizado, podem entregar a um vizinho ou portaria, registrando o nome e documento. Se não for possível, realizamos uma reentrega sem custo adicional na rota do dia seguinte, para não impactar seu SLA."
  },
  {
    question: "Vocês atendem todas as faixas de CEP de São Paulo?",
    answer: "Atendemos a maioria das faixas de CEP configuráveis no painel Mercado Livre Flex de SP e Grande SP. No momento da cotação, validamos sua lista de CEPs para garantir 100% de cobertura operacional."
  },
  {
    question: "Como funciona a bipagem e a baixa no Mercado Livre?",
    answer: "Nobres Entregas Flex é parceira homologada. Nossos entregadores utilizam um app integrado à API do Mercado Livre. O escaneamento da etiqueta é feito no ato da entrega presencial, garantindo baixa em tempo real e prova de entrega robusta."
  }
];

export const MercadoLivreFlex: React.FC = () => {
  const whatsappUrl = "https://wa.me/5511980224789?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Nobres%20Entregas%20Flex%20e%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20para%20minha%20opera%C3%A7%C3%A3o%20Mercado%20Livre%20Envios%20Flex.";
  
  // Estado para controlar o FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-32 sm:pt-28 md:pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Luzes de Fundo (Glow Effects) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-amber-500/10 via-orange-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section - Otimizada para Mobile */}
      <section className="max-w-5xl mx-auto text-center py-4 sm:py-8 md:py-12 relative z-10">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 backdrop-blur-md shadow-lg shadow-amber-500/5">
          <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
          <span>Especialistas em Mercado Livre Envios Flex SP</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4 sm:mb-6 leading-tight">
          Entregas <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400">Mercado Livre Envios Flex</span> com Reputação Verde
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed font-normal">
          Operação logística de alta precisão em São Paulo e Grande SP. Bipagem na entrega, atualização imediata e <strong className="text-white font-semibold">SLA de 99,4% garantido</strong> para manter o selo verde no seu painel Meli.
        </p>

        {/* Badges Rápidos de Confiança */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 text-xs sm:text-sm text-slate-200">
          <span className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/90 border border-slate-800 shadow-md">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Coleta Matutina a partir das 10h
          </span>
          <span className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/90 border border-slate-800 shadow-md">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Tratativa de Ausência em Tempo Real
          </span>
          <span className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/90 border border-slate-800 shadow-md">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Cobertura em SP, ABC e Guarulhos
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-amber-500/25 text-sm sm:text-base"
          >
            Cotar Operação Envios Flex <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <button className="inline-flex items-center justify-center px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-medium bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 transition-all text-sm sm:text-base">
            <BookOpenText className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" /> Guia Rápido de Expedição Meli Flex
          </button>
        </div>
      </section>

      {/* Seção de Valor */}
      <section className="max-w-6xl mx-auto py-10 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-slate-900/50 p-6 sm:p-10 rounded-3xl border border-slate-800/80 backdrop-blur-sm shadow-xl">
          <div className="space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold backdrop-blur-md">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Essencial para a Medalha Ouro e Líder
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              A logística Flex é o motor da sua reputação no Mercado Livre.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              O algoritmo do Meli prioriza anúncios com promessa de entrega Same Day. Seus atrasos podem custar sua medalha. Com a Nobres Entregas Flex, você não apenas cumpre o SLA, mas também gera avaliações positivas que aumentam sua taxa de conversão.
            </p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
              <h3 className="font-semibold text-white mb-1.5 text-sm">Menos Reclamações, Mais Vendas</h3>
              <p className="text-slate-400 text-xs">Entregas no mesmo dia reduzem a ansiedade do comprador e a taxa de 'Onde está meu produto?'.</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
              <h3 className="font-semibold text-white mb-1.5 text-sm">Alta Pontuação no SLA</h3>
              <p className="text-slate-400 text-xs">Garantimos a bipagem correta no momento da entrega, mantendo seu índice acima de 99,4%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards de Diferenciais Operacionais */}
      <section className="max-w-6xl mx-auto py-8 sm:py-12 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
            A Nobres Entregas Flex cuida de cada etapa
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Processos operacionais alinhados às regras e métricas exigidas pelo Mercado Livre.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/50 transition-all shadow-xl backdrop-blur-sm group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5 sm:mb-6 border border-amber-500/20 group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Pontualidade no SLA</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Cumprimento rigoroso dos horários de corte para garantir 100% dos pacotes entregues no mesmo dia até às 22h.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/50 transition-all shadow-xl backdrop-blur-sm group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5 sm:mb-6 border border-amber-500/20 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Baixa do QR Code no Destino</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Escaneamento e baixa do pacote realizados na entrega presencial, prevenindo divergências e reclamações.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/50 transition-all shadow-xl backdrop-blur-sm group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5 sm:mb-6 border border-amber-500/20 group-hover:scale-110 transition-transform">
              <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Suporte Direto via WhatsApp</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Canal rápido de comunicação com o time operacional da Nobres Entregas durante todo o itinerário das rotas.
            </p>
          </div>
        </div>
      </section>

      {/* Tabela de Cobertura */}
      <section className="max-w-6xl mx-auto py-8 sm:py-10 relative z-10">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md">
          <div className="mb-6 sm:mb-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Regiões Atendidas para Mercado Livre Envios Flex</h2>
            <p className="text-slate-400 text-xs sm:text-sm">Zonas e municípios com frota dedicada e logística Same Day.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300">
              <thead className="bg-slate-800/80 text-amber-400 uppercase text-[10px] sm:text-xs tracking-wider">
                <tr>
                  <th className="py-3 px-4 sm:py-4 sm:px-6 rounded-l-xl">Região</th>
                  <th className="py-3 px-4 sm:py-4 sm:px-6">Bairros e Cidades de Cobertura</th>
                  <th className="py-3 px-4 sm:py-4 sm:px-6 rounded-r-xl">Prazo de Entrega</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 sm:py-4 sm:px-6 font-semibold text-white">São Paulo (Capital)</td>
                  <td className="py-3 px-4 sm:py-4 sm:px-6 text-slate-300">Zona Norte, Zona Sul, Zona Leste, Zona Oeste e Centro</td>
                  <td className="py-3 px-4 sm:py-4 sm:px-6 text-emerald-400 font-bold whitespace-nowrap">Mesmo Dia (Até 22h)</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 sm:py-4 sm:px-6 font-semibold text-white">ABC Paulista</td>
                  <td className="py-3 px-4 sm:py-4 sm:px-6 text-slate-300">Santo André, São Bernardo, São Caetano e Diadema</td>
                  <td className="py-3 px-4 sm:py-4 sm:px-6 text-emerald-400 font-bold whitespace-nowrap">Mesmo Dia (Até 22h)</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 sm:py-4 sm:px-6 font-semibold text-white">Grande SP / Região Oeste</td>
                  <td className="py-3 px-4 sm:py-4 sm:px-6 text-slate-300">Guarulhos, Osasco, Barueri, Carapicuíba e Taboão da Serra</td>
                  <td className="py-3 px-4 sm:py-4 sm:px-6 text-emerald-400 font-bold whitespace-nowrap">Mesmo Dia (Até 22h)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Seção de FAQ (Accordion) */}
      <section className="max-w-4xl mx-auto py-10 sm:py-16 relative z-10">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Dúvidas Frequentes da Operação Flex</h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-2 text-xs sm:text-sm">Respostas diretas para as dores operacionais mais comuns dos sellers Meli.</p>
        </div>
        <div className="space-y-3 sm:space-y-4">
          {flexFaq.map((faq, index) => (
            <div key={index} className="rounded-xl border border-slate-800/80 bg-slate-900/70 overflow-hidden">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-800/50 transition-colors group"
              >
                <h3 className="text-sm sm:text-base font-medium text-slate-100 group-hover:text-amber-400 transition-colors pr-2">{faq.question}</h3>
                {openFaqIndex === index ? (
                  <Minus className="w-5 h-5 text-amber-500 shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-600 group-hover:text-amber-500 transition-colors shrink-0" />
                )}
              </button>
              {openFaqIndex === index && (
                <div className="p-4 sm:p-5 pt-1 border-t border-slate-800 text-xs sm:text-sm text-slate-400 leading-relaxed bg-slate-900/90">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Banner CTA Final */}
      <section className="max-w-5xl mx-auto mt-6 sm:mt-8 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-900 border border-amber-500/30 text-center relative z-10 shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 sm:mb-4">Pronto para otimizar suas entregas Flex?</h2>
        <p className="text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-xs sm:text-base">
          Fale diretamente com a equipe da Nobres Entregas Flex e solicite a tabela personalizada para o volume do seu e-commerce.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-500/20 text-sm sm:text-base"
        >
          Falar com Atendimento Comercial
        </a>
      </section>
    </main>
  );
};
