import React from 'react';

import {
  CheckCircle2,
  Headphones,
  MapPin,
  PackageCheck,
  Route,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from 'lucide-react';

const trustPoints = [
  {
    icon: Truck,
    title: 'Coletas programadas',
    description:
      'Planejamento conforme endereço, volume e frequência da operação.',
  },
  {
    icon: Route,
    title: 'Operação de última milha',
    description:
      'Organização de rotas conforme capacidade e regiões de entrega.',
  },
  {
    icon: Headphones,
    title: 'Suporte operacional',
    description:
      'Canal de comunicação para acompanhamento de coletas e ocorrências.',
  },
];

const operationHighlights = [
  {
    icon: ShoppingBag,
    value: 'Mercado Livre',
    label: 'Operação para Envios Flex',
  },
  {
    icon: PackageCheck,
    value: 'Shopee',
    label: 'Operação para Entrega Direta',
  },
  {
    icon: MapPin,
    value: 'São Paulo',
    label: 'Capital e Grande SP',
  },
  {
    icon: ShieldCheck,
    value: 'Sob análise',
    label: 'Operação dimensionada por seller',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="confianca"
      className="relative overflow-hidden bg-[#070A12] py-20 sm:py-24"
      aria-labelledby="trust-heading"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-80 w-80 rounded-full bg-emerald-500/[0.05] blur-[130px]" />
      <div className="pointer-events-none absolute right-10 top-1/3 h-96 w-96 rounded-full bg-[#008ef4]/[0.07] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-4xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            Estrutura para operações de e-commerce
          </div>

          <h2
            id="trust-heading"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Logística pensada para a rotina de{' '}
            <span className="bg-gradient-to-r from-[#00e7fe] to-[#008ef4] bg-clip-text text-transparent">
              sellers
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Da coleta à última milha, estruturamos a operação considerando
            volume, localização, marketplaces utilizados e regiões de entrega.
          </p>

        </div>

        {/* MAIN TRUST CARDS */}
        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">

          {trustPoints.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-3xl border border-white/5 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00e7fe]/20 hover:bg-white/[0.04] sm:p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#00e7fe]/15 bg-[#00e7fe]/10 text-[#00e7fe]">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-base font-extrabold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center gap-2 border-t border-white/5 pt-4 text-[10px] font-semibold text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Estrutura operacional Nobres
                </div>
              </article>
            );
          })}

        </div>

        {/* OPERATION HIGHLIGHTS */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

          {operationHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.value}
                className="rounded-2xl border border-white/5 bg-white/[0.025] p-4 sm:p-5"
              >
                <div className="mb-3 flex items-center gap-2">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-[#00e7fe]">
                    <Icon className="h-4 w-4" />
                  </div>

                  <span className="text-sm font-extrabold text-white sm:text-base">
                    {item.value}
                  </span>

                </div>

                <p className="text-[10px] leading-relaxed text-slate-500 sm:text-xs">
                  {item.label}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
