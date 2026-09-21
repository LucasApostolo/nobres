import React from 'react';

import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  MapPin,
  MessageCircle,
  PackageCheck,
  Route,
} from 'lucide-react';

import { buildWhatsAppLink } from '../utils/whatsapp';

interface CtaBannerProps {
  onOpenQuoteModal: () => void;
}

const analysisItems = [
  {
    icon: MapPin,
    label: 'Endereço de coleta',
  },
  {
    icon: PackageCheck,
    label: 'Volume diário',
  },
  {
    icon: Route,
    label: 'Regiões de entrega',
  },
];

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onOpenQuoteModal,
}) => {
  const whatsappUrl = buildWhatsAppLink({
    message:
      'Olá! Gostaria de solicitar uma cotação com a Nobres Entregas. Posso enviar meu endereço de coleta, volume médio diário, marketplace utilizado e principais regiões de entrega.',
  });

  return (
    <section
      className="relative overflow-hidden bg-[#070A12] py-20 sm:py-24"
      aria-labelledby="final-cta-heading"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#00e7fe]/[0.08] via-[#008ef4]/[0.08] to-emerald-500/[0.04] blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[32px] border border-[#00e7fe]/20 bg-white/[0.03] shadow-2xl backdrop-blur-2xl">

          {/* SUBTLE GRID */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
              backgroundSize: '42px 42px',
            }}
          />

          <div className="relative p-7 sm:p-10 md:p-14 lg:p-16">

            {/* BADGE */}
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00e7fe]/25 bg-[#00e7fe]/5 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#00e7fe]">
                <ClipboardCheck className="h-3.5 w-3.5" />
                Análise da sua operação
              </div>
            </div>

            {/* HEADING */}
            <div className="mx-auto max-w-4xl text-center">

              <h2
                id="final-cta-heading"
                className="text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl"
              >
                Sua operação precisa de uma logística que acompanhe o{' '}
                <span className="bg-gradient-to-r from-[#00e7fe] to-[#008ef4] bg-clip-text text-transparent">
                  ritmo das suas vendas
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                Envie as informações da sua operação e nossa equipe avalia a
                disponibilidade de coleta, cobertura e o formato logístico
                adequado para seus envios.
              </p>

            </div>

            {/* WHAT WE NEED */}
            <div className="mx-auto mt-9 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">

              {analysisItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center justify-center gap-2.5 rounded-2xl border border-white/5 bg-white/[0.025] px-4 py-3.5"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-[#00e7fe]" />

                    <span className="text-xs font-semibold text-slate-300">
                      {item.label}
                    </span>
                  </div>
                );
              })}

            </div>

            {/* CTA BUTTONS */}
            <div className="mx-auto mt-9 flex max-w-xl flex-col items-stretch justify-center gap-3 sm:flex-row">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#00e7fe] to-[#008ef4] px-7 py-4 text-sm font-bold text-black shadow-[0_10px_30px_rgba(0,142,244,0.22)] transition-transform hover:scale-[1.025]"
              >
                <MessageCircle className="h-4.5 w-4.5" />

                Solicitar cotação

                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition-all hover:border-white/20 hover:bg-white/[0.08]"
              >
                <ClipboardCheck className="h-4 w-4 text-[#00e7fe]" />

                Informar minha operação
              </button>

            </div>

            {/* SUPPORTING TEXT */}
            <p className="mx-auto mt-4 max-w-xl text-center text-[10px] leading-relaxed text-slate-600">
              A disponibilidade, valores, frequência e horários são definidos
              após análise das características da operação.
            </p>

            {/* BOTTOM TRUST BAR */}
            <div className="mt-10 border-t border-white/5 pt-7">

              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] text-slate-400">

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  Mercado Livre Envios Flex
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  Shopee Entrega Direta
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  São Paulo e Grande SP
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  Operação de última milha
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
