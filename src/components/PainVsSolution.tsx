import React from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle,
  Zap
} from 'lucide-react';
import { COMPARISON_DATA } from '../data/logisticsData';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const PainVsSolution: React.FC = () => {
  return (
    <section id="comparativo" className="py-20 bg-[#070A12] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#008ef4]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[11px] font-bold uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>O Custo Oculto da Logística Ineficiente</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Está cansado de transportadoras que <span className="text-rose-400 underline decoration-rose-500/40">atrasam coletas</span> e derrubam sua reputação?
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            No Mercado Livre e na Shopee, 1% de atraso pode tirar sua medalha de Mercado Líder e derrubar até 70% das suas impressões diárias. Veja o contraste entre uma logística comum e o padrão de excelência Nobres Entregas Flex.
          </p>
        </div>

        {/* Big Contrast Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card: Dor / Transportadoras Comuns */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white/[0.02] border border-rose-500/20 backdrop-blur-xl relative">
            <div className="flex items-center justify-between pb-6 border-b border-rose-500/20 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">Transportadoras Convencionais</h3>
                  <p className="text-xs text-rose-300/80 font-medium">O pesadelo do seller no Same Day</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/30 uppercase tracking-wider">
                Alto Risco
              </span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Coletas sem horário fixo ou "furos"</strong>
                  <span className="text-slate-400 text-xs">O motorista avisa que não vai passar às 16h, quando não há mais tempo hábil de contingência.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Horário de corte muito cedo (11h às 12h)</strong>
                  <span className="text-slate-400 text-xs">Você é obrigado a encerrar os anúncios Same Day no almoço, perdendo o pico de vendas da tarde.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Termômetro rebaixado para amarelo/vermelho</strong>
                  <span className="text-slate-400 text-xs">Atrasos de pacotes que geram reclamações, cancelamentos e perda de buy box no Mercado Livre.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Suporte via tickets ou robôs ineficientes</strong>
                  <span className="text-slate-400 text-xs">Horas esperando resposta em formulários enquanto o cliente reclama no chat da plataforma.</span>
                </div>
              </li>
            </ul>

            <div className="mt-8 p-3.5 rounded-2xl bg-rose-500/5 border border-rose-500/15 flex items-center justify-between text-xs text-rose-300">
              <span>Resultado: Perda de faturamento e risco de suspensão da conta</span>
              <AlertTriangle className="w-4 h-4 text-rose-400" />
            </div>
          </div>

          {/* Card: Solução / Padrão Nobres Entregas Flex */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white/[0.03] border border-[#00e7fe]/25 backdrop-blur-xl relative shadow-2xl">
            {/* Featured top badge */}
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-[#00e7fe] to-[#008ef4] text-black text-xs font-black px-3.5 py-1 rounded-full shadow-[0_10px_20px_rgba(0,142,244,0.3)] flex items-center gap-1.5 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 fill-current" />
              <span>PADRÃO NOBRES FLEX</span>
            </div>

            <div className="flex items-center justify-between pb-6 border-b border-[#00e7fe]/20 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#00e7fe]/10 border border-[#00e7fe]/30 flex items-center justify-center text-[#00e7fe]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">Nobres Entregas Flex</h3>
                  <p className="text-xs text-[#00e7fe] font-medium">Logística Same Day de Alta Performance</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-full border border-[#10B981]/30 uppercase tracking-wider">
                SLA 99.4%
              </span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Janela de coleta garantida com motorista dedicado</strong>
                  <span className="text-slate-300 text-xs">Compromisso diário e pontualidade britânica no seu endereço ou galpão.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Cut-off estendido até 14h30/15h00</strong>
                  <span className="text-slate-300 text-xs">Venda durante toda a manhã e início da tarde sabendo que tudo será coletado e entregue hoje.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Reputação 100% verde blindada</strong>
                  <span className="text-slate-300 text-xs">Protegemos suas medalhas Mercado Líder Platinum e Vendedor Indicado Shopee todos os dias.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Grupo VIP no WhatsApp com gestor de conta ativo</strong>
                  <span className="text-slate-300 text-xs">Comunicação direta em tempo real. Resposta média em menos de 3 minutos.</span>
                </div>
              </li>
            </ul>

            <div className="mt-8 p-3.5 rounded-2xl bg-[#00e7fe]/10 border border-[#00e7fe]/30 flex items-center justify-between text-xs text-cyan-200 font-semibold">
              <span>Resultado: Mais vendas, clientes fiéis e zero estresse operacional</span>
              <Zap className="w-4 h-4 text-[#00e7fe]" />
            </div>
          </div>

        </div>

        {/* Detailed Feature Comparison Table */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
            <div>
              <h3 className="text-lg font-bold text-white">Quadro Comparativo Direto</h3>
              <p className="text-xs text-slate-400">Entenda item a item por que sellers migram para a Nobres Entregas Flex</p>
            </div>

            <a
              href={buildWhatsAppLink({
                message: 'Quero migrar minha operação Flex para a Nobres Entregas e blindar minha reputação.'
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-black bg-gradient-to-r from-[#00e7fe] to-[#008ef4] px-5 py-2.5 rounded-xl shadow-[0_10px_20px_rgba(0,142,244,0.3)] hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Migrar Minha Operação Agora</span>
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/5 text-slate-400 font-bold uppercase tracking-wider text-[11px]">
                  <th className="pb-3 pr-4">Critério Logístico</th>
                  <th className="pb-3 px-4 text-rose-400">Transportadora Comum</th>
                  <th className="pb-3 pl-4 text-[#00e7fe] font-extrabold">Nobres Entregas Flex</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {COMPARISON_DATA.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 pr-4 font-semibold text-white">
                      {item.feature}
                    </td>
                    <td className="py-4 px-4 text-slate-400 text-xs">
                      <span className="flex items-center gap-1.5 text-rose-300/90">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                        {item.commonCarrier}
                      </span>
                    </td>
                    <td className="py-4 pl-4 text-slate-200 text-xs font-medium">
                      <span className="flex items-center gap-1.5 text-[#10B981]">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                        {item.nobresCarrier}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

