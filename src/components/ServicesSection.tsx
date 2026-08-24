import React from 'react';
import { 
  Truck, 
  Zap, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle,
  Package,
  Layers
} from 'lucide-react';
import { SERVICES_DATA } from '../data/logisticsData';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface ServicesSectionProps {
  onOpenQuoteModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck': return <Truck className="w-6 h-6 text-[#00e7fe]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#00e7fe]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#10B981]" />;
      case 'Clock': return <Clock className="w-6 h-6 text-[#00e7fe]" />;
      default: return <Package className="w-6 h-6 text-[#00e7fe]" />;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-[#070A12] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#008ef4]/08 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#00e7fe]/30 text-[#00e7fe] text-[11px] font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Soluções Logísticas Especializadas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Infraestrutura Completa de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e7fe] to-[#008ef4]">Same Day Delivery</span> em SP
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Desenvolvemos uma operação ágil, moderna e flexível para atender às demandas mais rigorosas do e-commerce brasileiro.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {SERVICES_DATA.map((service) => {
            const isPopular = service.popular;

            return (
              <div
                key={service.id}
                className={`p-6 sm:p-8 rounded-3xl bg-white/[0.03] border backdrop-blur-xl flex flex-col justify-between relative overflow-hidden group transition-all duration-300 ${
                  isPopular 
                    ? 'border-[#00e7fe]/40 shadow-[0_0_30px_rgba(0,142,244,0.15)] hover:border-[#00e7fe]/60' 
                    : 'border-white/5 hover:border-[#00e7fe]/30 hover:bg-white/[0.05]'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute top-0 right-8 bg-gradient-to-r from-[#00e7fe] to-[#008ef4] text-black font-black text-[10px] tracking-wider uppercase px-3.5 py-1 rounded-b-xl shadow-md">
                    Mais Escolhido pelos Sellers
                  </div>
                )}

                <div>
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#00e7fe]/40 group-hover:scale-105 transition-all">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-bold text-[#00e7fe] bg-[#00e7fe]/10 px-3 py-1 rounded-full border border-[#00e7fe]/20">
                      {service.highlight}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-extrabold text-white mb-1 group-hover:text-[#00e7fe] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mb-4">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-5 border-t border-white/5 flex items-center justify-between gap-4">
                  <a
                    href={buildWhatsAppLink({
                      marketplace: service.title,
                      message: `Olá! Tenho interesse no serviço: "${service.title}". Gostaria de saber mais.`
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white/80 hover:text-white group-hover:text-[#00e7fe] transition-colors"
                  >
                    <span>Contratar este serviço</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#00e7fe]" />
                  </a>

                  <button
                    onClick={onOpenQuoteModal}
                    className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#00e7fe]/10 text-[11px] font-semibold text-[#00e7fe] border border-[#00e7fe]/30 hover:border-[#00e7fe]/50 transition-all cursor-pointer"
                  >
                    Simular Cotação
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Banner inside Services */}
        <div className="rounded-3xl p-6 bg-white/[0.02] border border-white/5 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Sua mercadoria 100% segurada e rastreada</h4>
              <p className="text-xs text-slate-400">Trabalhamos com conferência na coleta e protocolo de baixa digital imediata na entrega.</p>
            </div>
          </div>

          <a
            href={buildWhatsAppLink({ message: 'Olá! Gostaria de tirar dúvidas sobre a segurança e seguro das entregas.' })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-[#00e7fe]/10 text-xs font-bold text-white border border-[#00e7fe]/30 transition-all shrink-0 shadow-[0_0_20px_rgba(0,231,254,0.1)]"
          >
            <MessageCircle className="w-4 h-4 text-[#00e7fe]" />
            <span>Falar com Gerente de Operações</span>
          </a>
        </div>

      </div>
    </section>
  );
};

