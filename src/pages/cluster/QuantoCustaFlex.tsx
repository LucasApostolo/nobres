import React, { useState } from 'react';
import { 
  DollarSign, 
  Calculator, 
  ArrowRight, 
  TrendingUp, 
  HelpCircle, 
  CheckCircle2, 
  ShieldAlert, 
  Truck, 
  ChevronRight, 
  Plus, 
  Minus,
  Sparkles
} from 'lucide-react';

export const QuantoCustaFlex: React.FC = () => {
  const whatsappUrl = "https://wa.me/5511980224789?text=Ol%C3%A1!%20Li%20o%20guia%20de%20custos%20do%20Flex%20no%20site%20da%20Nobres%20Entregas%20Flex%20e%20gostaria%20de%20solicitar%20uma%20tabela%20personalizada.";

  // Estados para a calculadora interativa
  const [volumeDiario, setVolumeDiario] = useState<number>(25);
  const [ticketMedioFrete, setTicketMedioFrete] = useState<number>(14.90);

  // FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "O repasse do Mercado Livre cobre todo o custo do frete?",
      a: "Para a grande maioria das zonas e produtos elegíveis, o valor tarifário repassado pelo Mercado Livre cobre integralmente a taxa de entrega da transportadora, gerando um custo neutro ou até margem positiva de frete para o e-commerce."
    },
    {
      q: "Como funciona a cobrança de reentregas em caso de ausência?",
      a: "Na Nobres Entregas Flex, a primeira reentrega do pacote não gera taxa adicional se for encaixada na rota do dia seguinte, preservando sua margem financeira e o SLA da sua conta."
    },
    {
      q: "Existe quantidade mínima diária para coleta?",
      a: "Não exigimos quantidade mínima de pacotes ou contratos de fidelidade prévia. Coletamos a partir de 1 volume mantendo o mesmo padrão de SLA e atendimento humanizado."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-32 sm:pt-28 md:pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-[#00e7fe]/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Breadcrumb Navigation */}
      <nav className="max-w-6xl mx-auto mb-6 sm:mb-8 text-xs text-slate-400 flex items-center gap-2 relative z-10">
        <a href="/" className="hover:text-amber-400 transition-colors">Início</a>
        <ChevronRight className="w-3 h-3" />
        <a href="/mercado-livre-envios-flex" className="hover:text-amber-400 transition-colors">Mercado Livre Flex</a>
        <ChevronRight className="w-3 h-3" />
        <span className="text-amber-400 font-semibold">Quanto Custa o Flex?</span>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center py-4 sm:py-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
          <DollarSign className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Gestão Financeira & Tabela de Fretes</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4 sm:mb-6 leading-tight">
          Quanto Custa o <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400">Mercado Livre Flex</span> em SP?
        </h1>
        
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
          Entenda como funcionam os repasses de frete do Mercado Livre, a estrutura de custos por pacote e como a <strong className="text-white font-semibold">Nobres Entregas Flex</strong> otimiza a margem de lucro do seu e-commerce.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-xl shadow-amber-500/20 text-sm sm:text-base"
          >
            Solicitar Tabela de Frete <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a 
            href="#simulador"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 transition-all text-sm sm:text-base"
          >
            <Calculator className="mr-2 w-5 h-5 text-amber-400" /> Simular Custos Diários
          </a>
        </div>
      </section>

      {/* Explicação dos Repasses do Mercado Livre */}
      <section className="max-w-6xl mx-auto py-10 relative z-10">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-sm shadow-xl">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Como Funciona o Repasse do Mercado Livre ao Seller?
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              No sistema Envios Flex, o Mercado Livre cobra o frete do comprador (ou subsidia o envio frete grátis) e repassa esse valor diretamente na sua conta Mercado Pago por cada etiqueta bipada e entregue no prazo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/20">
                <DollarSign className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">1. Cobrança do Cliente</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                O comprador paga a taxa de envio Same Day calculada pelo algoritmo do Meli com base na distância entre o seu CEP de coleta e o CEP de destino.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/20">
                <TrendingUp className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">2. Repasse Direto</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Após a confirmação de baixa da entrega no aplicativo de logística, o valor integral da tarifa de frete daquela zona entra nos seus recebíveis do Meli.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/20">
                <Truck className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">3. Pagamento à Nobres</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Você repassa o valor combinado do frete por pacote à Nobres Entregas Flex com base nas faturas consolidadas, sem surpresas ou taxas ocultas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabela de Referência da Tarifa Mercado Livre */}
      <section className="max-w-6xl mx-auto py-8 relative z-10">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Valores de Repasse Médio por Zona (Meli SP)</h2>
              <p className="text-xs sm:text-sm text-slate-400">Estimativa base de repasse tarifário pago pela plataforma do Mercado Livre em São Paulo.</p>
            </div>
            <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Atualização 2026
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300">
              <thead className="bg-slate-800/80 text-amber-400 uppercase text-[10px] sm:text-xs tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 rounded-l-xl">Zona de Destino</th>
                  <th className="py-3.5 px-4">Raio de Distância</th>
                  <th className="py-3.5 px-4">Repasse Estimado Meli</th>
                  <th className="py-3.5 px-4 rounded-r-xl">Impacto no Lucro do Seller</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-white">Zona 1 (Próxima)</td>
                  <td className="py-3.5 px-4 text-slate-300">Mesmo bairro / Raio curto</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400">R$ 8,90 – R$ 11,90</td>
                  <td className="py-3.5 px-4 text-xs text-slate-400">Custo Neutro / Operação Coberta</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-white">Zona 2 (Capital SP)</td>
                  <td className="py-3.5 px-4 text-slate-300">Zonas Norte, Sul, Leste, Oeste e Centro</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400">R$ 13,90 – R$ 16,90</td>
                  <td className="py-3.5 px-4 text-xs text-slate-400">Excelente Margem de Absorção</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-white">Zona 3 (Grande SP / ABC / GRU)</td>
                  <td className="py-3.5 px-4 text-slate-300">Santo André, Bernardo, Guarulhos, Osasco</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400">R$ 18,90 – R$ 24,90</td>
                  <td className="py-3.5 px-4 text-xs text-slate-400">Alta Rentabilidade em Rotas Estendidas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Simulador Interativo de Volume x Repasse */}
      <section id="simulador" className="max-w-5xl mx-auto py-10 relative z-10">
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl">
          <div className="flex items-center gap-2 mb-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Simulação de Repasse Bruto
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Simule a Entrada de Frete na Sua Conta</h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-8">
            Calcule o montante aproximado de repasses recebidos do Mercado Livre mensalmente conforme o volume de expedição da sua loja.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Controles de Entrada */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-2 text-slate-200">
                  <span>Média de Pacotes por Dia:</span>
                  <span className="text-amber-400 font-bold">{volumeDiario} pacotes/dia</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="150" 
                  step="5"
                  value={volumeDiario} 
                  onChange={(e) => setVolumeDiario(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-2 text-slate-200">
                  <span>Média de Repasse por Etiqueta Meli:</span>
                  <span className="text-amber-400 font-bold">R$ {ticketMedioFrete.toFixed(2)}</span>
                </div>
                <input 
                  type="range" 
                  min="9.90" 
                  max="22.90" 
                  step="0.50"
                  value={ticketMedioFrete} 
                  onChange={(e) => setTicketMedioFrete(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>
            </div>

            {/* Resultado da Simulação */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-4">
              <span className="text-xs text-slate-400 uppercase tracking-widest block">Repasse Mensal Estimado (22 dias úteis)</span>
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                R$ {(volumeDiario * ticketMedioFrete * 22).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <p className="text-[11px] text-slate-400">
                Esse valor financeiro entra no seu extrato do Mercado Pago para amortizar integralmente os serviços operacionais de coleta e entrega.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all"
              >
                Negociar Tabela por Volume de Envio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparativo: Frota Própria vs. Nobres Entregas Flex */}
      <section className="max-w-6xl mx-auto py-10 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Próprio Entregador vs. Nobres Entregas Flex</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">Por que terceirizar a frota Same Day reduz riscos operacionais e custos fixos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Frota Própria */}
          <div className="p-6 rounded-2xl bg-red-950/20 border border-red-900/30 space-y-4">
            <h3 className="text-lg font-bold text-red-400 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" /> Fazer com Motoboy Próprio
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span> Alto custo fixo de combustível e manutenção.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span> Risco de atrasos se o entregador faltar ou a moto quebrar.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span> Falta de aplicativo profissional para baixa de QR Code presencial.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span> Limitação de raio geográfico (dificuldade em atender o ABC e Guarulhos).
              </li>
            </ul>
          </div>

          {/* Nobres Entregas Flex */}
          <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-900/30 space-y-4">
            <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Operar com a Nobres Entregas Flex
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Zero custo fixo: você só paga o pacote que coletar e entregar.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Coletas garantidas a partir das 10h da manhã na sua empresa.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Baixa do aplicativo em tempo real no ato da entrega presencial.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> Cobertura total em São Paulo Capital, ABC Paulista e Guarulhos.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ do Módulo financeiro */}
      <section className="max-w-4xl mx-auto py-10 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" /> Dúvidas Financeiras
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Perguntas Frequentes sobre Custos</h2>
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
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Quer uma cotação exata para sua operação?</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
          Envie sua média diária de envios para nossa equipe comercial e receba uma proposta de frete sob medida para alavancar suas vendas no Mercado Livre.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-500/20 text-sm sm:text-base"
        >
          Falar com Atendimento Comercial (11) 98022-4789
        </a>
      </section>

    </main>
  );
};
