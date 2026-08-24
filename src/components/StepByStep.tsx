import React from 'react';
import { 
  FileText, 
  Truck, 
  Map, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Clock, 
  Sparkles 
} from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const StepByStep: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Alinhamento Rápido no WhatsApp',
      subtitle: 'Sem burocracia de contratos longos',
      description: 'Você nos informa o endereço da sua loja, horário ideal de coleta e média diária de pacotes. Inclusão na rota em minutos.',
      icon: <FileText className="w-5 h-5 text-[#00e7fe]" />,
      tag: 'Início Imediato'
    },
    {
      step: '02',
      title: 'Coleta Diária Pontual',
      subtitle: 'Motorista dedicado na sua porta',
      description: 'Nosso motorista chega pontualmente na janela combinada, realiza a conferência e a bipagem dos pacotes no app do marketplace.',
      icon: <Truck className="w-5 h-5 text-[#00e7fe]" />,
      tag: 'Bipagem na Retirada'
    },
    {
      step: '03',
      title: 'Roteirização Inteligente',
      subtitle: 'Divisão por micro-regiões de SP',
      description: 'Os pacotes são distribuídos estrategicamente para entregadores setorizados nas Zonas Sul, Leste, Oeste, Norte, Centro e ABC.',
      icon: <Map className="w-5 h-5 text-[#00e7fe]" />,
      tag: 'Inteligência Logística'
    },
    {
      step: '04',
      title: 'Entrega Same Day & Reputação Verde',
      subtitle: 'Comprovante digital com foto e assinatura',
      description: 'Entregas finalizadas até às 21h/22h com baixa instantânea na plataforma e suporte em tempo real se o cliente estiver ausente.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#10B981]" />,
      tag: '100% no Prazo'
    }
  ];

  return (
    <section id="passo-a-passo" className="py-20 bg-[#070A12] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#008ef4]/05 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#00e7fe]/30 text-[#00e7fe] text-[11px] font-bold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5 text-[#00e7fe]" />
            <span>Processo Ágil & Sem Fricção</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Como Funciona a Operação da <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e7fe] to-[#008ef4]">Nobres Entregas Flex</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Eliminamos a complexidade para que você possa focar no que realmente importa: vender mais e encantar seus clientes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-14">
          {steps.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-[#00e7fe]/30 backdrop-blur-xl flex flex-col justify-between relative group overflow-hidden transition-all duration-300 shadow-2xl"
            >
              {/* Step number watermark */}
              <span className="absolute -top-3 -right-2 text-6xl font-black text-white/5 select-none group-hover:text-[#00e7fe]/10 transition-colors">
                {item.step}
              </span>

              <div>
                {/* Header with Icon and Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#00e7fe]/40 group-hover:scale-105 transition-all">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-[#00e7fe] bg-[#00e7fe]/10 px-2.5 py-1 rounded-full border border-[#00e7fe]/20">
                    {item.tag}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-base font-extrabold text-white mb-1 group-hover:text-[#00e7fe] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-3">
                  {item.subtitle}
                </p>

                {/* Step Description */}
                <p className="text-slate-300 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Progress indicator at bottom */}
              <div className="pt-5 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Etapa {item.step} de 04</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00e7fe] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout Box */}
        <div className="rounded-3xl p-6 sm:p-8 bg-white/[0.03] border border-[#00e7fe]/25 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#00e7fe]" />
              Pronto para iniciar suas coletas hoje mesmo?
            </h4>
            <p className="text-xs text-slate-300">
              Não cobramos taxa de adesão e você não fica preso a contratos engessados.
            </p>
          </div>

          <a
            href={buildWhatsAppLink({
              message: 'Olá! Gostaria de agendar a primeira coleta Flex na minha loja.'
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00e7fe] to-[#008ef4] text-black font-bold text-xs shadow-[0_10px_20px_rgba(0,142,244,0.3)] hover:scale-105 transition-transform shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current text-black" />
            <span>Agendar Primeira Coleta</span>
          </a>
        </div>

      </div>
    </section>
  );
};
