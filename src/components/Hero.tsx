import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  TrendingUp, 
  Package, 
  Sparkles,
  Truck,
  Award
} from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="inicio" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden tech-grid-pattern">
      {/* Background ambient neon glows matching Sophisticated Dark theme */}
      <div className="absolute top-[-100px] right-[-100px] w-[450px] h-[450px] bg-[#008ef4] opacity-[0.08] blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#00e7fe] opacity-[0.05] blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Copywriting & High Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Operational Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-[11px] font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span>Status: Coletas e Entregas em Andamento SP</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight text-white mb-6">
              Sua operação <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e7fe] to-[#008ef4]">Flex</span> sem atrasos e sem falhas.
            </h1>

            {/* High Conversion Subtitle */}
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed mb-8 max-w-2xl">
              Coletas diárias no seu CD com entrega no mesmo dia. Proteja sua reputação no Mercado Livre, Shopee, Amazon e Magalu com a logística premium da <strong className="text-white font-medium">Nobres Entregas</strong>.
            </p>

            {/* Quick Guarantees Pill Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full mb-8">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span className="text-xs font-medium text-slate-300">Coleta a partir de 1 pacote</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#00e7fe] shrink-0" />
                <span className="text-xs font-medium text-slate-300">Melhor Horário de Corte</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span className="text-xs font-medium text-slate-300">Sem contrato de fidelidade</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={buildWhatsAppLink({
                  message: 'Gostaria de otimizar os envios Flex da minha loja e conhecer a janela de coleta.'
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[#00e7fe] to-[#008ef4] rounded-xl text-black font-bold text-base hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(0,142,244,0.3)] active:scale-[0.98]"
              >
                <span>Otimizar Meus Envios Flex</span>
                <ArrowRight className="w-5 h-5 text-black stroke-[2.5]" />
              </a>

              <a
                href="#passo-a-passo"
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <span>Como funciona a coleta</span>
                <Clock className="w-4 h-4 text-[#00e7fe]" />
              </a>
            </div>

            {/* Trust SLA Highlight Bar */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-slate-200">98.7% Taxa de SLA</p>
                  <p className="text-[11px] text-slate-400">Entregas no prazo garantido</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#00e7fe]/10 text-[#00e7fe] border border-[#00e7fe]/20">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-slate-200">+1.000.000 milhão Pacotes</p>
                  <p className="text-[11px] text-slate-400">Entregues com sucesso em SP</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-slate-200">Zero Bloqueios</p>
                  <p className="text-[11px] text-slate-400">Termômetro 100% verde</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Operational Dashboard Visual */}
          <div className="lg:col-span-5 flex flex-col gap-4 relative">
            
            {/* Main SLA & Reputation Card */}
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-[#00e7fe]/20 backdrop-blur-xl relative overflow-hidden group shadow-2xl">
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#00e7fe]/10 blur-[40px] pointer-events-none"></div>

              {/* SLA Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-[#00e7fe]/20 rounded-2xl flex items-center justify-center text-[#00e7fe] border border-[#00e7fe]/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold">SLA de Entrega</div>
                  <div className="text-3xl sm:text-4xl font-black text-[#10B981]">98.7%</div>
                </div>
              </div>

              {/* Status rows */}
              <div className="space-y-3 mb-5">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-xs sm:text-sm text-slate-300 font-medium">Reputação nos Marketplaces</span>
                  <span className="text-xs font-bold text-[#10B981] px-2.5 py-0.5 bg-[#10B981]/10 rounded-full border border-[#10B981]/20">
                    100% PROTEGIDA
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-xs sm:text-sm text-slate-300 font-medium">Área de Atuação Flex</span>
                  <span className="text-xs font-bold text-white">São Paulo, ABC & Região</span>
                </div>
              </div>

              {/* Live Mini Route Progress */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="flex justify-between text-[11px] font-mono text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#00e7fe]" /> Rotas em Execução:
                  </span>
                  <span className="text-[#00e7fe] font-bold">142 / 148 baixas POD</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00e7fe] to-[#008ef4] rounded-full" style={{ width: '96%' }}></div>
                </div>
              </div>

              {/* Quick interactive trigger */}
              <button
                onClick={onOpenQuoteModal}
                className="w-full mt-4 py-2.5 rounded-xl bg-white/5 hover:bg-[#00e7fe]/10 text-cyan-300 hover:text-cyan-200 font-semibold text-xs border border-[#00e7fe]/20 hover:border-[#00e7fe]/40 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,231,254,0.08)]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00e7fe]" />
                Calcular Janela de Coleta para Meu Endereço
              </button>
            </div>

            {/* Active Sellers Banner */}
            <div className="p-5 rounded-3xl bg-[#008ef4]/10 border border-[#008ef4]/20 backdrop-blur-md flex items-center gap-4 shadow-lg">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#070A12] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">R.M</div>
                <div className="w-10 h-10 rounded-full border-2 border-[#070A12] bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white">C.S</div>
                <div className="w-10 h-10 rounded-full border-2 border-[#070A12] bg-gradient-to-br from-[#00e7fe] to-[#008ef4] flex items-center justify-center text-[10px] font-black text-black">+500</div>
              </div>
              <div className="text-sm">
                <span className="block font-bold text-white">Sellers de Alta Performance</span>
                <span className="text-xs text-slate-400">Escalando com Same Day diariamente em SP</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

