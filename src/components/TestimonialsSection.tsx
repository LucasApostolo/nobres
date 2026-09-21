import React from 'react';

import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  MapPinned,
  PackageCheck,
  Route,
  ShieldCheck,
  ShoppingBag,
  Store,
} from 'lucide-react';

import { Link } from 'react-router-dom';

const sellerAdvantages = [
  {
    icon: Store,
    title: 'Operação pensada para sellers',
    description:
      'A logística é estruturada considerando a rotina de expedição, volume de pedidos, horário operacional e canais de venda da loja.',
  },
  {
    icon: Route,
    title: 'Planejamento antes de expandir',
    description:
      'Cobertura, capacidade e frequência são avaliadas antes da definição da operação, evitando promessas incompatíveis com a rota.',
  },
  {
    icon: Headphones,
    title: 'Contato com a operação',
    description:
      'Acompanhamento para tratar dúvidas e ocorrências relacionadas às coletas e entregas da sua operação.',
  },
];

const platformCards = [
  {
    icon: ShoppingBag,
    eyebrow: 'Mercado Livre',
    title: 'Envios Flex',
    description:
      'Operação de coleta e última milha para sellers que utilizam o Mercado Livre Envios Flex.',
    href: '/mercado-livre-envios-flex',
  },
  {
    icon: PackageCheck,
    eyebrow: 'Shopee',
    title: 'Entrega Direta',
    description:
      'Estrutura logística para vendedores elegíveis à modalidade Shopee Entrega Direta.',
    href: '/shopee-entrega-direta',
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
            Estrutura especializada
          </div>

          <h2
            id="trust-heading"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Logística que acompanha a rotina de quem{' '}
            <span className="bg-gradient-to-r from-[#00e7fe] to-[#008ef4] bg-clip-text text-transparent">
              vende todos os dias
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Uma operação de entregas rápidas precisa considerar muito mais do
            que apenas retirar pacotes. Volume, capacidade, cobertura e
            acompanhamento precisam funcionar em conjunto.
          </p>

        </div>

        {/* ADVANTAGES */}
        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">

          {sellerAdvantages.map((item) => {
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

                <p className="mt-3 text-xs leading-relaxed text-slate-400">
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

        {/* PLATFORM AREA */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">

          {/* LEFT INFO */}
          <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 lg:col-span-5">

            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-500/15 bg-emerald-500/10 text-emerald-400">
              <MapPinned className="h-5 w-5" />
            </div>

            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-400">
              São Paulo e Grande SP
            </p>

            <h3 className="text-xl font-extrabold text-white sm:text-2xl">
              Cada operação começa pela análise da rota
            </h3>

            <p className="mt-3 text-xs leading-relaxed text-slate-400 sm:text-sm">
              Antes da definição da coleta, avaliamos localização, volume
              médio, frequência e principais destinos para entender a
              viabilidade operacional.
            </p>

            <Link
              to="/mercado-livre-envios-flex/regioes-atendidas"
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#00e7fe] transition-colors hover:text-white"
            >
              Consultar regiões atendidas
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

          {/* PLATFORM CARDS */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">

            {platformCards.map((platform) => {
              const Icon = platform.icon;

              return (
                <Link
                  key={platform.href}
                  to={platform.href}
                  className="group flex flex-col rounded-3xl border border-white/5 bg-white/[0.025] p-6 transition-all hover:-translate-y-1 hover:border-[#00e7fe]/25 hover:bg-white/[0.04] sm:p-7"
                >
                  <div className="mb-6 flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#00e7fe]/15 bg-[#00e7fe]/10 text-[#00e7fe]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="rounded-full border border-white/5 bg-white/[0.03] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                      {platform.eyebrow}
                    </span>

                  </div>

                  <h3 className="text-lg font-extrabold text-white transition-colors group-hover:text-[#00e7fe]">
                    {platform.title}
                  </h3>

                  <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-400">
                    {platform.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-4 text-xs font-bold text-[#00e7fe]">
                    Conhecer a solução

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>

                </Link>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};
