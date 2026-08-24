import React from 'react';
import { MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface CtaBannerProps {
  onOpenQuoteModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-20 bg-[#070A12] relative overflow-hidden">
      {/* Background glowing circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-r from-[#00e7fe]/10 via-[#008ef4]/10 to-[#10B981]/05 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Box */}
        <div className="relative rounded-[32px] p-8 sm:p-12 md:p-16 bg-white/[0.03] border border-[#00e7fe]/30 backdrop-blur-2xl shadow-2xl text-center overflow-hidden">
          
          {/* Top subtle badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#00e7fe]/30 text-[#00e7fe] text-[11px] font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vagas Limitadas por Região de SP</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto">
            Pronto para escalar sua conta no Mercado Livre e Shopee{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e7fe] to-[#008ef4]">sem se preocupar com logística?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Junte-se a centenas de sellers em São Paulo que protegem sua reputação verde, estendem seu horário de corte e entregam com 99.4% de pontualidade.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
            <a
              href={buildWhatsAppLink({
                message: 'Olá! Gostaria de cotar envios flex para minha loja.'
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-black bg-gradient-to-r from-[#00e7fe] to-[#008ef4] shadow-[0_10px_30px_rgba(0,142,244,0.3)] hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-5 h-5 fill-current text-black" />
              <span>Cotar no WhatsApp Agora</span>
              <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
            >
              <span>Personalizar Minha Rota</span>
            </button>
          </div>

          {/* Guarantees Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-300 pt-8 border-t border-white/5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>Sem taxa de adesão</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe]" />
              <span>Ativação em até 2 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>Coleta a partir de 1 pacote</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e7fe]" />
              <span>SLA 99.4% garantido</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
