import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle, 
  Sparkles,
  Package
} from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const SimulatorSection: React.FC = () => {
  const [dailyVolume, setDailyVolume] = useState<number>(45);
  const [channel, setChannel] = useState<string>('Mercado Livre Flex');
  const [region, setRegion] = useState<string>('Zona Leste (SP)');
  const [storeName, setStoreName] = useState<string>('');

  // Computations based on inputs
  const monthlyVolume = dailyVolume * 26; // 26 working days
  const estimatedConversionBoost = dailyVolume < 30 ? 32 : dailyVolume < 100 ? 42 : 48;

  const getCutoff = (reg: string) => {
    if (reg.includes('Centro')) return '15h00';
    if (reg.includes('Leste') || reg.includes('Sul') || reg.includes('Oeste')) return '13h00';
    if (reg.includes('Norte')) return '13:00';
    return '13h00';
  };

  const handleWhatsAppQuote = () => {
    const link = buildWhatsAppLink({
      storeName: storeName || 'Minha Loja',
      marketplace: channel,
      neighborhood: region,
      dailyPackages: dailyVolume,
      message: `Simulei no site: ${dailyVolume} pacotes/dia (${monthlyVolume} pacotes/mês) para a região ${region}. Gostaria de fechar a rota e alinhar a primeira coleta!`
    });
    window.open(link, '_blank');
  };

  return (
    <section id="simulador" className="py-20 bg-[#070A12] relative overflow-hidden">
      {/* Background neon ambient */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#008ef4]/08 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#00e7fe]/30 text-[#00e7fe] text-[11px] font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#00e7fe]" />
            <span>Simulador Interativo para Sellers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Simule o Potencial da sua Operação com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e7fe] to-[#008ef4]">Nobres Entregas</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Descubra como o horário de corte estendido e a pontualidade na coleta impactam o faturamento e a reputação da sua conta.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="text-base font-extrabold text-white flex items-center gap-2 mb-6 pb-3 border-b border-white/5">
                <Package className="w-5 h-5 text-[#00e7fe]" />
                Configure os Dados da sua Loja
              </h3>

              {/* Slider: Daily Volume */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-semibold text-slate-200">
                    Média de Envios Flex por Dia:
                  </label>
                  <span className="text-lg sm:text-xl font-mono font-black text-[#00e7fe] bg-white/5 px-3.5 py-1 rounded-xl border border-[#00e7fe]/30 shadow-[0_0_15px_rgba(0,231,254,0.1)]">
                    {dailyVolume} <span className="text-xs font-normal text-slate-400">pacotes/dia</span>
                  </span>
                </div>

                <input
                  type="range"
                  min="5"
                  max="400"
                  step="5"
                  value={dailyVolume}
                  onChange={(e) => setDailyVolume(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00e7fe]"
                />

                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>5 pacotes</span>
                  <span>100 pacotes</span>
                  <span>250 pacotes</span>
                  <span>400+ pacotes</span>
                </div>
              </div>

              {/* Channel Selector */}
              <div className="space-y-2 mb-6">
                <label className="text-xs sm:text-sm font-semibold text-slate-200 block">
                  Canal Principal de Venda:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Mercado Livre Flex',
                    'Shopee Direta',
                    'Amazon Flex',
                    'Magalu Entregas',
                    'Site / WhatsApp',
                    'Multi-Marketplace'
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setChannel(item)}
                      className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all border cursor-pointer ${
                        channel === item
                          ? 'bg-[#00e7fe]/15 border-[#00e7fe]/60 text-white shadow-[0_0_15px_rgba(0,231,254,0.15)]'
                          : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Region Selector */}
              <div className="space-y-2 mb-6">
                <label className="text-xs sm:text-sm font-semibold text-slate-200 block">
                  Região de Coleta em São Paulo:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Zona Leste (SP)',
                    'Zona Sul (SP)',
                    'Zona Oeste (SP)',
                    'Zona Norte (SP)',
                    'Centro / Brás / Bom Retiro',
                    'Grande ABC Paulista',
                    'Guarulhos / Osasco',
                    'Barueri / Alphaville'
                  ].map((reg) => (
                    <button
                      key={reg}
                      type="button"
                      onClick={() => setRegion(reg)}
                      className={`p-2.5 rounded-xl text-[11px] font-semibold text-left transition-all border cursor-pointer truncate ${
                        region === reg
                          ? 'bg-[#008ef4]/20 border-[#008ef4]/60 text-white shadow-[0_0_15px_rgba(0,142,244,0.2)]'
                          : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200'
                      }`}
                    >
                      {reg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Store Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Nome da Loja (Opcional):
                </label>
                <input
                  type="text"
                  placeholder="Ex: Minha Loja no Mercado Livre"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-[#00e7fe] focus:outline-none placeholder:text-slate-600 transition-colors"
                />
              </div>
            </div>

            <p className="text-[11px] text-slate-500 mt-6">
              * Estimativas baseadas em médias históricas de sellers com entregas Same Day no Estado de São Paulo.
            </p>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-white/[0.03] border border-[#00e7fe]/25 backdrop-blur-xl flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#00e7fe]">
                    Projeção de Performance
                  </span>
                  <h3 className="text-lg font-extrabold text-white">Impacto na sua Operação</h3>
                </div>
                <div className="w-8 h-8 rounded-xl bg-[#00e7fe]/10 border border-[#00e7fe]/30 flex items-center justify-center text-[#00e7fe]">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              {/* Metric Cards Grid */}
              <div className="space-y-3.5">
                
                {/* Metric 1 */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Aumento Estimado nas Vendas</p>
                      <p className="text-lg font-extrabold text-[#10B981]">+{estimatedConversionBoost}% de Conversão</p>
                    </div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#00e7fe]/10 text-[#00e7fe] flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Horário de Corte Sugerido</p>
                      <p className="text-lg font-extrabold text-white">Até {getCutoff(region)} no mesmo dia</p>
                    </div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#008ef4]/10 text-[#008ef4] flex items-center justify-center">
                      <Package className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Volume Projetado Mensal</p>
                      <p className="text-lg font-extrabold text-slate-200">~{monthlyVolume.toLocaleString('pt-BR')} pacotes/mês</p>
                    </div>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="p-4 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#10B981]/20 text-[#10B981] flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Proteção de Reputação</p>
                      <p className="text-sm font-bold text-[#10B981]">Termômetro 100% Verde Blindado</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA directly with prefilled WhatsApp */}
            <div className="mt-8 pt-4 border-t border-white/5">
              <button
                onClick={handleWhatsAppQuote}
                className="w-full py-4 rounded-xl font-bold text-black bg-gradient-to-r from-[#00e7fe] to-[#008ef4] shadow-[0_10px_30px_rgba(0,142,244,0.3)] hover:scale-105 transition-transform flex items-center justify-center gap-2 text-base cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Cotar Esta Operação no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2.5">
                ⚡ Resposta média em menos de 3 minutos via WhatsApp
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
