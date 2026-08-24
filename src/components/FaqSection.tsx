import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/logisticsData';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#070A12] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#008ef4]/05 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#00e7fe]/30 text-[#00e7fe] text-[11px] font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#00e7fe]" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Perguntas Frequentes dos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e7fe] to-[#008ef4]">Sellers</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Respostas diretas e transparentes sobre nossa operação diária de Same Day em São Paulo.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-12">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all overflow-hidden border backdrop-blur-xl ${
                  isOpen 
                    ? 'border-[#00e7fe]/30 bg-white/[0.05] shadow-2xl' 
                    : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span className="text-[#00e7fe] font-mono text-xs">0{index + 1}.</span>
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-xl bg-white/5 text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#00e7fe] bg-[#00e7fe]/10' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 mt-1">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] text-center border border-white/5 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-white mb-1">Ainda ficou com alguma dúvida sobre sua rota?</h4>
            <p className="text-xs text-slate-400">Nossa equipe de operações responde em menos de 3 minutos no WhatsApp.</p>
          </div>

          <a
            href={buildWhatsAppLink({ message: 'Olá! Li o FAQ no site e gostaria de tirar uma dúvida específica sobre minha operação Flex.' })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-[#00e7fe]/10 text-xs font-bold text-white border border-[#00e7fe]/30 hover:border-[#00e7fe]/50 transition-all shadow-[0_0_20px_rgba(0,231,254,0.1)] shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#00e7fe]" />
            <span>Falar com o Suporte Operacional</span>
          </a>
        </div>

      </div>
    </section>
  );
};
