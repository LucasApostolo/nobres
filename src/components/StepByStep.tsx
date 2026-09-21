import React from 'react';

import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Map,
  MessageCircle,
  PackageCheck,
  Route,
  Settings2,
  Truck,
} from 'lucide-react';

import { buildWhatsAppLink } from '../utils/whatsapp';

const steps = [
  {
    step: '01',
    eyebrow: 'Análise',
    title: 'Entendemos sua operação',
    subtitle: 'Volume, endereço, canal e regiões',
    description:
      'Você informa o endereço de coleta, volume médio diário, marketplaces utilizados, frequência e principais regiões de entrega.',
    icon: ClipboardCheck,
    tag: 'Diagnóstico',
  },
  {
    step: '02',
    eyebrow: 'Planejamento',
    title: 'Definimos a estrutura logística',
    subtitle: 'Coleta, capacidade e cobertura',
    description:
      'Avaliamos a viabilidade da operação e alinhamos frequência de coleta, janela operacional, capacidade e regiões atendidas.',
    icon: Settings2,
    tag: 'Planejamento',
  },
  {
    step: '03',
    eyebrow: 'Operação',
    title: 'Coletamos e organizamos as rotas',
    subtitle: 'Da expedição à última milha',
    description:
      'Os pedidos são coletados conforme a programação definida e direcionados para a operação de distribuição de acordo com as regiões de entrega.',
    icon: Truck,
    tag: 'Coleta & Rotas',
  },
  {
    step: '04',
    eyebrow: 'Acompanhamento',
    title: 'Entrega e suporte operacional',
    subtitle: 'Acompanhamento até a finalização',
    description:
      'A operação acompanha o andamento das entregas e atua no tratamento de ocorrências conforme o processo aplicável a cada modalidade.',
    icon: CheckCircle2,
    tag: 'Última Milha',
  },
];

const flowItems = [
  {
    icon: PackageCheck,
    label: 'Pedidos preparados',
  },
  {
    icon: Truck,
    label: 'Coleta programada',
  },
  {
    icon: Route,
    label: 'Distribuição das rotas',
  },
  {
    icon: Map,
    label: 'Última milha',
  },
];

export const StepByStep: React.FC = () => {
  const whatsappUrl = buildWhatsAppLink({
    message:
      'Olá! Gostaria de avaliar minha operação com a Nobres Entregas. Posso enviar meu endereço de coleta, volume diário e regiões de entrega.',
  });

  return (
    <section
      id="passo-a-passo"
      className="relative overflow-hidden bg-[#070A12] py-20 sm:py-24"
      aria-labelledby="step-heading"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008ef4]/[0.05] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-4xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00e7fe]/25 bg-[#00e7fe]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#00e7fe]">
            <Route className="h-3.5 w-3.5" />
            Da análise à última milha
          </div>

          <h2
            id="step-heading"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Como funciona a operação da{' '}
            <span className="bg-gradient-to-r from-[#00e7fe] to-[#008ef4] bg-clip-text text-transparent">
              Nobres Entregas
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Antes da primeira coleta, entendemos as características da sua
            operação para definir um fluxo compatível com volume, endereço,
            frequência e regiões de entrega.
          </p>

        </div>

        {/* FLOW OVERVIEW */}
        <div className="mb-8 hidden lg:block">

          <div className="relative grid grid-cols-4">

            {/* Connecting line */}
            <div className="absolute left-[12.5%] right-[12.5%] top-5 h-px bg-gradient-to-r from-[#00e7fe]/10 via-[#00e7fe]/40 to-[#008ef4]/10" />

            {flowItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#00e7fe]/25 bg-[#0A0E18] text-[#00e7fe]">
                    <Icon className="h-4 w-4" />
                  </div>

                  <span className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    {index + 1}. {item.label}
                  </span>
                </div>
              );
            })}

          </div>

        </div>

        {/* STEPS */}
        <div className="relative mb-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.step}
                className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00e7fe]/25 hover:bg-white/[0.04]"
              >
                {/* NUMBER */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-5 select-none text-[92px] font-black leading-none text-white/[0.025] transition-colors group-hover:text-[#00e7fe]/[0.05]"
                >
                  {item.step}
                </span>

                {/* TOP */}
                <div className="relative z-10 mb-6 flex items-start justify-between gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#00e7fe]/15 bg-[#00e7fe]/10 text-[#00e7fe] transition-transform group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="rounded-full border border-[#00e7fe]/15 bg-[#00e7fe]/5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#00e7fe]">
                    {item.tag}
                  </span>

                </div>

                {/* CONTENT */}
                <div className="relative z-10">

                  <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-600">
                    Etapa {item.step} · {item.eyebrow}
                  </p>

                  <h3 className="text-lg font-extrabold leading-snug text-white transition-colors group-hover:text-[#00e7fe]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs font-medium text-slate-500">
                    {item.subtitle}
                  </p>

                  <p className="mt-4 text-xs leading-relaxed text-slate-400">
                    {item.description}
                  </p>

                </div>

                {/* FOOTER */}
                <div className="relative z-10 mt-auto flex items-center justify-between border-t border-white/5 pt-5">

                  <span className="font-mono text-[10px] text-slate-600">
                    {item.step} / 04
                  </span>

                  {item.step !== '04' ? (
                    <ArrowRight className="h-4 w-4 text-[#00e7fe]/60 transition-transform group-hover:translate-x-1" />
                  ) : (
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  )}

                </div>

              </article>
            );
          })}

        </div>

        {/* CTA */}
        <div className="overflow-hidden rounded-3xl border border-[#00e7fe]/15 bg-gradient-to-r from-[#00e7fe]/[0.055] to-[#008ef4]/[0.025]">

          <div className="flex flex-col gap-7 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex max-w-3xl items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#00e7fe]/20 bg-[#00e7fe]/10 text-[#00e7fe]">
                <MessageCircle className="h-5 w-5" />
              </div>

              <div>

                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#00e7fe]">
                  Comece pela análise
                </p>

                <h3 className="text-lg font-bold text-white sm:text-xl">
                  Quer verificar se sua operação pode ser atendida?
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
                  Envie seu endereço de coleta, volume médio diário,
                  marketplace utilizado e principais regiões de entrega.
                  Nossa equipe avalia a disponibilidade e o formato adequado
                  para sua operação.
                </p>

              </div>

            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00e7fe] to-[#008ef4] px-6 py-3.5 text-xs font-bold text-black shadow-[0_10px_30px_rgba(0,142,244,0.2)] transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" />

              Avaliar minha operação

              <ArrowRight className="h-4 w-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
