import React from 'react';
import { 
  Star, 
  TrendingUp, 
  CheckCircle2, 
  Award 
} from 'lucide-react';
import { TESTIMONIALS } from '../data/logisticsData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-[#070A12] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#10B981]/05 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#008ef4]/08 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#10B981]/30 text-[#10B981] text-[11px] font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Reputação Comprovada por Sellers de Elite</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Quem Usa e Confia na <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e7fe] to-[#008ef4]">Nobres Entregas Flex</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Veja o que dizem os lojistas que transformaram a logística de Same Day em uma máquina de vendas e fidelização.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-[#00e7fe]/30 backdrop-blur-xl flex flex-col justify-between relative group transition-all duration-300 shadow-2xl"
            >
              <div>
                {/* Top Badge & Metric */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/5">
                  <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20 flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {t.badge}
                  </span>

                  <span className="text-xs font-black text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-full border border-[#10B981]/20 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {t.salesIncrease}
                  </span>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & Volume Footer */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#00e7fe]/40 shadow-sm"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      {t.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    </h4>
                    <p className="text-[11px] text-[#00e7fe] font-medium">{t.storeName}</p>
                    <p className="text-[10px] text-slate-400">{t.deliveryVolume}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-center shadow-lg">
            <span className="block text-xl sm:text-2xl font-black text-[#10B981] mb-0.5">98.7%</span>
            <span className="text-xs text-slate-400 font-medium">Pontualidade no Prazo</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-center shadow-lg">
            <span className="block text-xl sm:text-2xl font-black text-[#00e7fe] mb-0.5">+250k</span>
            <span className="text-xs text-slate-400 font-medium">Pacotes Entregues</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-center shadow-lg">
            <span className="block text-xl sm:text-2xl font-black text-white mb-0.5">&lt; 3 min</span>
            <span className="text-xs text-slate-400 font-medium">Tempo Médio de Resposta</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-center shadow-lg">
            <span className="block text-xl sm:text-2xl font-black text-[#10B981] mb-0.5">0 Bloqueios</span>
            <span className="text-xs text-slate-400 font-medium">Por Atraso de Envio</span>
          </div>
        </div>

      </div>
    </section>
  );
};
