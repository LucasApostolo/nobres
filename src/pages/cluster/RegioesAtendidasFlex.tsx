import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Search, 
  CheckCircle2, 
  XCircle, 
  ArrowLeft, 
  ArrowRight, 
  Truck, 
  Clock, 
  ShieldCheck, 
  MessageCircle 
} from 'lucide-react';

const coverageData = [
  {
    region: 'Zona Norte (SP)',
    badge: 'Base Operacional',
    color: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    neighborhoods: ['Santana', 'Tucuruvi', 'Vila Guilherme', 'Vila Maria', 'Casa Verde', 'Limão', 'Freguesia do Ó', 'Mandaqui', 'Tremembé', 'Jaçanã', 'Parada Inglesa']
  },
  {
    region: 'Zona Leste (SP)',
    badge: 'Atendimento Completo',
    color: 'border-[#00e7fe]/30 bg-[#00e7fe]/10 text-[#00e7fe]',
    neighborhoods: ['Tatuapé', 'Mooca', 'Anália Franco', 'Vila Prudente', 'Aricanduva', 'Belém', 'Penha', 'Carrão', 'Itaquera', 'São Mateus', 'Vila Formosa']
  },
  {
    region: 'Zona Sul (SP)',
    badge: 'Atendimento Completo',
    color: 'border-[#00e7fe]/30 bg-[#00e7fe]/10 text-[#00e7fe]',
    neighborhoods: ['Itaim Bibi', 'Moema', 'Pinheiros', 'Vila Mariana', 'Santo Amaro', 'Jabaquara', 'Morumbi', 'Campo Belo', 'Saúde', 'Ipiranga', 'Sacomã']
  },
  {
    region: 'Zona Oeste & Centro (SP)',
    badge: 'Atendimento Completo',
    color: 'border-[#00e7fe]/30 bg-[#00e7fe]/10 text-[#00e7fe]',
    neighborhoods: ['Lapa', 'Perdizes', 'Barra Funda', 'Pinheiros', 'Vila Madalena', 'Butantã', 'Centro', 'República', 'Consolação', 'Bela Vista', 'Brás', 'Bom Retiro', 'Pari']
  },
  {
    region: 'Grande ABC Paulista',
    badge: 'Rota Diária Flex',
    color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    neighborhoods: ['Santo André', 'São Bernardo do Campo', 'São Caetano do Sul', 'Diadema', 'Mauá']
  },
  {
    region: 'Guarulhos & Região',
    badge: 'Rota Diária Flex',
    color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    neighborhoods: ['Guarulhos (Centro)', 'Bonsucesso', 'Cumbica', 'Pimentas', 'Vila Galvão', 'Macedo', 'Gopoúva']
  }
];

export const RegioesAtendidasFlex: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<{ status: 'idle' | 'found' | 'not_found'; item?: string }>({ status: 'idle' });

  useEffect(() => {
    document.title = "Regiões e CEPs Atendidos | Mercado Livre Envios Flex SP - Nobres Entregas Flex";
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    const query = searchTerm.toLowerCase().trim();
    let foundLocation = '';

    for (const zone of coverageData) {
      const match = zone.neighborhoods.find(n => n.toLowerCase().includes(query));
      if (match) {
        foundLocation = `${match} (${zone.region})`;
        break;
      }
    }

    if (foundLocation) {
      setSearchResult({ status: 'found', item: foundLocation });
    } else {
      setSearchResult({ status: 'not_found', item: searchTerm });
    }
  };

  const handleWhatsAppRedirect = (bairro?: string) => {
    const text = bairro 
      ? `Olá! Gostaria de confirmar a coleta/entrega do Mercado Livre Flex para o bairro/região: ${bairro}`
      : `Olá! Quero consultar se meu CEP é atendido na coleta diária do Mercado Livre Flex.`;
    window.open(`https://wa.me/5511964402156?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs text-slate-400">
          <a href="/mercado-livre-envios-flex" className="hover:text-[#00e7fe] transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Voltar para Hub Mercado Livre Envios Flex
          </a>
          <span>/</span>
          <span className="text-slate-200">Regiões Atendidas</span>
        </div>

        {/* Header principal */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00e7fe]/10 border border-[#00e7fe]/30 text-[#00e7fe] text-xs font-semibold mb-4">
            <MapPin className="w-3.5 h-3.5" /> Cobertura Logística Same Day
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Regiões e CEPs Atendidos no <span className="text-[#00e7fe]">Mercado Livre Envios Flex</span>
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Atendemos toda a Capital de São Paulo, Grande ABC e Guarulhos com coletas diárias a partir das 10h da manhã e taxa de entrega concluída de 98,7%.
          </p>
        </div>

        {/* Ferramenta de Busca Rápida */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#00e7fe]/10 blur-[90px] pointer-events-none rounded-full" />
          
          <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <Search className="w-5 h-5 text-[#00e7fe]" /> Consulte seu Bairro ou Região
          </h2>
          <p className="text-slate-400 text-xs mb-6">
            Digite o nome do seu bairro ou cidade de coleta para verificar se a Nobres atende a sua conta.
          </p>

          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Ex: Santana, Tatuapé, Moema, Guarulhos, Santo André..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00e7fe] transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#00e7fe] text-slate-950 font-bold text-sm rounded-xl hover:bg-[#00d5eb] transition-all flex items-center justify-center gap-2 shrink-0"
            >
              Verificar Atendimento
            </button>
          </form>

          {/* Resultado da busca */}
          {searchResult.status === 'found' && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Região atendida com coleta diária: <strong>{searchResult.item}</strong></span>
              </div>
              <button
                onClick={() => handleWhatsAppRedirect(searchResult.item)}
                className="text-xs bg-emerald-500 text-slate-950 font-bold px-3 py-2 rounded-lg hover:bg-emerald-400 transition-colors flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5" /> Solicitar Coleta Aqui
              </button>
            </div>
          )}

          {searchResult.status === 'not_found' && (
            <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>Não encontrou "{searchResult.item}" na busca? Fale conosco para validar a rota dedicada.</span>
              </div>
              <button
                onClick={() => handleWhatsAppRedirect(searchResult.item)}
                className="text-xs bg-amber-500 text-slate-950 font-bold px-3 py-2 rounded-lg hover:bg-amber-400 transition-colors flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5" /> Consultar no WhatsApp
              </button>
            </div>
          )}
        </div>

        {/* Grid de Zonas e Bairros */}
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-8 text-center">
            Mapeamento de Cobertura para Coletas e Entregas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageData.map((zone, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-white text-base">{zone.region}</h3>
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${zone.color}`}>
                      {zone.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-3">Principais Bairros Cobertos:</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {zone.neighborhoods.map((n, i) => (
                      <span key={i} className="text-[11px] bg-slate-950 text-slate-300 px-2 py-1 rounded-md border border-slate-800/80">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsAppRedirect(zone.region)}
                  className="w-full py-2.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs text-slate-200 font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  Agendar Coleta em {zone.region} <ArrowRight className="w-3.5 h-3.5 text-[#00e7fe]" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Destaques operacionais */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 text-center">
            <Clock className="w-6 h-6 text-[#00e7fe] mx-auto mb-2" />
            <h4 className="text-sm font-bold text-white">Coleta às 10:00 AM</h4>
            <p className="text-xs text-slate-400 mt-1">Garantia de saída antecipada das rotas para cumprir o SLA do dia.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 text-center">
            <Truck className="w-6 h-6 text-[#00e7fe] mx-auto mb-2" />
            <h4 className="text-sm font-bold text-white">Segunda Tentativa Inclusa</h4>
            <p className="text-xs text-slate-400 mt-1">Reentrega sem custo adicional caso o comprador esteja ausente na 1ª tentativa.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 text-center">
            <ShieldCheck className="w-6 h-6 text-[#00e7fe] mx-auto mb-2" />
            <h4 className="text-sm font-bold text-white">Termômetro Verde Protegido</h4>
            <p className="text-xs text-slate-400 mt-1">Baixa em tempo real via QR Code para evitar qualquer cancelamento no Meli.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
          <h3 className="text-2xl font-extrabold text-white mb-2">
            Pronto para ativar suas vendas no mesmo dia?
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Veja o funcionamento completo da nossa operação, calculadoras e planos personalizados no nosso hub oficial do Mercado Livre Flex.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/mercado-livre-envios-flex"
              className="px-6 py-3.5 bg-[#00e7fe] text-slate-950 font-bold text-sm rounded-xl hover:bg-[#00d5eb] transition-all flex items-center justify-center gap-2"
            >
              Conhecer Solução Completa Flex <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => handleWhatsAppRedirect()}
              className="px-6 py-3.5 bg-slate-900 border border-slate-700 text-white font-bold text-sm rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" /> Falar com Operacional no WhatsApp
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
