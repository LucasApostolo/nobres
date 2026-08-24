import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  TrendingUp, 
  Award,
  Play
} from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="inicio" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden tech-grid-pattern">
      {/* Background ambient neon glows */}
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

          {/* Right Column: Embedded Presentation Video Frame */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative rounded-3xl bg-white/[0.03] border border-[#00e7fe]/20 p-2 shadow-2xl backdrop-blur-xl group overflow-hidden">
              
              {/* Efeito Glow neon atrás da caixa do vídeo */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00e7fe]/15 blur-[50px] pointer-events-none"></div>

              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-white/10">
                
                {!isPlaying ? (
                  /* Capa/Thumbnail e Botão Play */
                  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-black">
                    <img 
                      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
                      alt="Apresentação Nobres Entregas" 
                      className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Botão Play Neon */}
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-[#00e7fe] to-[#008ef4] text-black flex items-center justify-center shadow-[0_0_25px_rgba(0,231,254,0.5)] hover:scale-110 active:scale-95 transition-all cursor-pointer group/btn"
                      aria-label="Tocar Vídeo de Apresentação"
                    >
                      <Play className="w-7 h-7 fill-current ml-1 text-black" />
                    </button>

                    <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs text-white font-medium flex items-center justify-between">
                      <span>Conheça a operação Nobres Entregas</span>
                      <span className="text-[#00e7fe] font-bold">1:30 min</span>
                    </div>
                  </div>
                ) : (
                  /* Player de Vídeo Local (MP4) ou Iframe */
                  <video 
                    controls 
                    autoPlay 
                    className="w-full h-full object-cover"
                    src="/videos/apresentacao.mp4"
                  >
                    Seu navegador não suporta a exibição deste vídeo.
                  </video>

                  /* DICA: Se for usar YouTube, remova a tag <video> e descomente abaixo:
                  <iframe 
                    className="w-full h-full" 
                    src="https://www.youtube.com/embed/SEU_ID_AQUI?autoplay=1" 
                    title="Apresentação Nobres Entregas"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                  */
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
