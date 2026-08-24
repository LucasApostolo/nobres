import React from 'react';
import { MARKETPLACES } from '../data/logisticsData';
import { CheckCircle2, Zap, Shield, Sparkles } from 'lucide-react';

export const MarketplacesBar: React.FC = () => {
  return (
    <section className="py-10 bg-black/40 border-y border-white/5 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-radial-glow from-[#008ef4]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-wider text-[#00e7fe] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00e7fe]" />
            <span>Compatibilidade e Homologação Total</span>
          </div>
          <h2 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
            Homologado e Otimizado para os Maiores Marketplaces
          </h2>
        </div>

        {/* Marketplaces Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {MARKETPLACES.map((mp, index) => (
            <div
              key={index}
              className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-[#00e7fe]/30 backdrop-blur-xl rounded-2xl p-4 flex flex-col items-center text-center justify-between group relative overflow-hidden transition-all duration-300 shadow-lg"
            >
              {/* Top Accent Line */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: mp.iconColor }}
              />

              <div className="w-full flex flex-col items-center">
                {/* Badge */}
                <div className="flex justify-center mb-3">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {mp.badge}
                  </span>
                </div>

                {/* Marketplace Logo */}
                <div className="h-9 flex items-center justify-center mb-2">
                  <img 
                    src={mp.logo} 
                    alt={`Logo ${mp.name}`}
                    className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                    loading="lazy"
                  />
                </div>

                {/* Marketplace Name */}
                <h3 className="text-sm font-extrabold text-white group-hover:text-[#00e7fe] transition-colors mb-0.5">
                  {mp.name}
                </h3>
                
                {/* Tag */}
                <p className="text-[11px] font-medium text-slate-400 mb-3">
                  {mp.tag}
                </p>
              </div>

              {/* Description & Check */}
              <div className="w-full pt-2.5 border-t border-white/5 flex items-center justify-center gap-1.5 text-[10px] text-[#10B981] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">SLA 100% no prazo</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom micro-copy */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-[#00e7fe]" />
            Bipagem rápida integrada no app do marketplace
          </span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#10B981]" />
            Conformidade total com as regras de cancelamento e reputação
          </span>
        </div>

      </div>
    </section>
  );
};
