import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  Clock, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  MessageCircle, 
  Navigation, 
  Sparkles 
} from 'lucide-react';
import { SP_REGIONS } from '../data/logisticsData';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const CoverageSection: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('zl');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeRegion = SP_REGIONS.find((r) => r.id === selectedRegionId) || SP_REGIONS[0];

  // Neighborhood search matching
  const filteredNeighborhoods = activeRegion.neighborhoods.filter((n) =>
    n.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="cobertura" className="py-20 bg-[#070A12] relative overflow-hidden">
      {/* Background neon ambient */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#008ef4]/08 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#00e7fe]/30 text-[#00e7fe] text-[11px] font-bold uppercase tracking-wider mb-4">
            <Navigation className="w-3.5 h-3.5" />
            <span>São Paulo & Região Metropolitana</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Cobertura Completa de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e7fe] to-[#008ef4]">Coletas e Entregas Flex</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Atendemos os principais polos comerciais e residenciais de São Paulo com rotas setorizadas e horários otimizados para sua loja.
          </p>
        </div>

        {/* Region Selector Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar scrollbar-none">
          {SP_REGIONS.map((region) => {
            const isSelected = region.id === selectedRegionId;
            return (
              <button
                key={region.id}
                onClick={() => setSelectedRegionId(region.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#00e7fe] to-[#008ef4] text-black border-transparent shadow-[0_0_20px_rgba(0,231,254,0.3)] font-bold'
                    : 'bg-white/5 text-white/70 border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-black fill-current' : 'text-[#00e7fe]'}`} />
                <span>{region.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Region Detailed Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl mb-12 shadow-2xl">
          
          {/* Card Top Info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <h3 className="text-xl font-extrabold text-white">{activeRegion.name}</h3>
                <span className="text-[11px] font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-0.5 rounded-full border border-[#10B981]/20">
                  {activeRegion.badge}
                </span>
              </div>
              <p className="text-xs text-slate-400">Rotas diárias de coleta e entrega dedicadas para sellers desta região</p>
            </div>

            {/* Quick Operational Metrics */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00e7fe]" />
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Horário de Corte (Cut-off)</p>
                  <p className="font-bold text-slate-200">{activeRegion.cutoffTime}</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#10B981]" />
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Prazo de Entrega</p>
                  <p className="font-bold text-slate-200">{activeRegion.averageTime}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search inside neighborhoods */}
          <div className="py-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Bairros e Polos Atendidos ({filteredNeighborhoods.length}):
              </span>

              <div className="relative max-w-xs w-full">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar seu bairro..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00e7fe] transition-colors"
                />
              </div>
            </div>

            {/* Neighborhoods Tags */}
            <div className="flex flex-wrap gap-2">
              {filteredNeighborhoods.length > 0 ? (
                filteredNeighborhoods.map((neighborhood, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs border border-white/5 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00e7fe]" />
                    <span>{neighborhood}</span>
                  </div>
                ))
              ) : (
                <div className="w-full py-4 text-center text-xs text-slate-400">
                  Nenhum bairro encontrado com "{searchQuery}". Atendemos toda a extensão de {activeRegion.name}!
                </div>
              )}
            </div>
          </div>

          {/* Bottom Action inside Region */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              Sua loja fica nesta região? Podemos iniciar suas coletas hoje mesmo.
            </p>

            <a
              href={buildWhatsAppLink({
                neighborhood: activeRegion.name,
                message: `Olá! Minha loja fica na região ${activeRegion.name}. Gostaria de confirmar a rota e horário de coleta.`
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00e7fe] to-[#008ef4] text-black font-bold text-xs shadow-[0_10px_20px_rgba(0,142,244,0.3)] hover:scale-105 transition-transform shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current text-black" />
              <span>Agendar Coleta em {activeRegion.name}</span>
            </a>
          </div>

        </div>

        {/* 3 Key Operational Facilities Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-[#00e7fe]/10 text-[#00e7fe] flex items-center justify-center mb-4">
              <Truck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Sem Exigência de Volume Mínimo</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Coletamos a partir de 1 pacote diário. Apoiamos sua loja desde o início até operações de alta escala.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Conferência & Bipagem no Local</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Todos os pacotes são checados na retirada, garantindo que nada fique para trás ou sem rastreio.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-[#008ef4]/10 text-[#008ef4] flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Suporte Ativo de Trânsito</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Acompanhamento de rotas e contingências imediatas em caso de chuva ou tráfego intenso na capital paulista.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
