import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-auto">
      
      {/* Mini notification message bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 p-3.5 rounded-2xl bg-[#070A12]/95 backdrop-blur-xl border border-[#00e7fe]/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-xs text-slate-200 animate-in fade-in slide-in-from-bottom duration-300 max-w-xs">
          <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse shrink-0 shadow-[0_0_10px_#10B981]" />
          <div className="flex-1">
            <p className="font-bold text-white text-[11px]">Plantão Operacional SP</p>
            <p className="text-[10px] text-slate-300">Coletas abertas para hoje. Tire suas dúvidas!</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 rounded-full text-slate-400 hover:text-white transition-colors"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={buildWhatsAppLink({
          message: 'Olá! Vim pelo site da Nobres Entregas Flex e gostaria de informações sobre coletas.'
        })}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-[#10B981] via-[#00e7fe] to-[#008ef4] p-[2px] shadow-[0_0_30px_rgba(0,231,254,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
        aria-label="Falar no WhatsApp"
      >
        <div className="w-full h-full bg-[#070A12] rounded-full flex items-center justify-center group-hover:bg-[#070A12]/90">
          <MessageCircle className="w-7 h-7 text-[#00e7fe] group-hover:text-[#10B981] transition-colors fill-current" />
        </div>

        {/* Pulse radar wave */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#10B981] border-2 border-[#070A12]"></span>
        </span>
      </a>

    </div>
  );
};
