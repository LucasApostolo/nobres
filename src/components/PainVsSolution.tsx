import React from 'react';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  PackageCheck,
  Route,
  ShieldCheck,
  TrendingUp,
  Truck,
  XCircle,
} from 'lucide-react';

import { buildWhatsAppLink } from '../utils/whatsapp';

const comparisonRows = [
  {
    feature: 'Planejamento de coleta',
    common: 'Coletas sem rotina definida e pouca previsibilidade operacional.',
    nobres:
      'Coletas programadas de acordo com endereço, volume e necessidade da operação.',
  },
  {
    feature: 'Horário de corte',
    common:
      'Horário definido sem considerar distância, volume ou capacidade da rota.',
    nobres:
      'Operação alinhada ao horário de corte configurado pelo seller e às regiões atendidas.',
  },
  {
    feature: 'Cobertura',
    common:
      'Expansão de regiões sem avaliar impacto no tempo de entrega.',
    nobres:
      'Cobertura analisada conforme viabilidade operacional e capacidade da rota.',
  },
  {
    feature: 'Capacidade diária',
    common:
      'Pouca adaptação quando o volume cresce ou há picos de pedidos.',
    nobres:
      'Planejamento de capacidade conforme volume diário e sazonalidade.',
  },
  {
    feature: 'Acompanhamento',
    common:
      'Baixa visibilidade sobre ocorrências e andamento das entregas.',
    nobres:
      'Comunicação operacional para acompanhamento de coletas, rotas e ocorrências.',
  },
  {
    feature: 'Foco no seller',
    common:
      'Modelo logístico genérico para diferentes tipos de operação.',
    nobres:
      'Operação direcionada às necessidades de sellers e entregas de última milha.',
  },
];

const operationPoints = [
  {
    icon: Clock3,
    title: 'Coleta programada',
    description:
      'Organização de horários conforme a rotina do seller e a capacidade da operação.',
  },
  {
    icon: Route,
    title: 'Rotas planejadas',
    description:
      'Distribuição das entregas considerando regiões, volume e tempo disponível.',
  },
  {
    icon: MapPin,
    title: 'Cobertura controlada',
    description:
      'Atendimento definido conforme viabilidade operacional em São Paulo e Grande SP.',
  },
  {
    icon: MessageCircle,
    title: 'Suporte operacional',
    description:
      'Canal direto para acompanhamento de coletas, entregas e ocorrências.',
  },
];

export const PainVsSolution: React.FC = () => {
  const whatsappUrl = buildWhatsAppLink({
    message:
      'Olá! Quero entender como a Nobres Entregas pode estruturar minha operação de Mercado Livre Envios Flex ou Shopee Entrega Direta.',
  });

  return (
    <section
      id="comparativo"
      className="relative overflow-hidden bg-[#070A12] py-20 sm:py-24"
      aria-labelledby="comparativo-heading"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-rose-500/5 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 rounded-full bg-[#008ef4]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-4xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00e7fe]/20 bg-[#00e7fe]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#00e7fe]">
            <ShieldCheck className="h-3.5 w-3.5" />
            Logística estruturada para sellers
          </div>

          <h2
            id="comparativo-heading"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Sua logística precisa acompanhar o ritmo das suas vendas
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Em operações de entrega rápida, horário de corte, capacidade
            diária, cobertura e organização das rotas precisam funcionar em
            conjunto. Uma logística mal dimensionada pode aumentar atrasos e
            comprometer a experiência do comprador.
          </p>

        </div>

        {/* CONTEXT CARD */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-white/5 bg-white/[0.025]">

          <div className="grid lg:grid-cols-[1.35fr_0.65fr]">

            <div className="p-6 sm:p-8 lg:p-10">

              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
                  <AlertTriangle className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    O desafio
                  </p>

                  <h3 className="text-xl font-bold text-white">
                    Same Day exige planejamento operacional
                  </h3>
                </div>

              </div>

              <p className="max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
                No Mercado Livre Envios Flex, por exemplo, os pedidos
                realizados até o horário de corte configurado pelo seller
                precisam ser entregues dentro da promessa correspondente.
                Por isso, expandir regiões ou aumentar o horário de corte sem
                considerar capacidade e distância pode tornar a operação mais
                difícil de cumprir.
              </p>

            </div>

            <div className="border-t border-white/5 bg-white/[0.02] p-6 sm:p-8 lg:border-l lg:border-t-0">

              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Operação bem dimensionada
              </p>

              <div className="mt-4 flex items-end gap-3">

                <span className="text-4xl font-black text-white">
                  97%+
                </span>

                <span className="pb-1 text-sm font-semibold text-emerald-400">
                  referência Flex
                </span>

              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                O Mercado Livre informa que 97% ou mais de envios corretos
                proporcionam excelente exposição no Envios Flex. O resultado
                depende da operação e das métricas do próprio seller.
              </p>

            </div>

          </div>

        </div>

        {/* 4 OPERATIONAL PILLARS */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {operationPoints.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/5 bg-white/[0.025] p-5 transition-colors hover:border-[#00e7fe]/20 hover:bg-white/[0.04]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#00e7fe]/20 bg-[#00e7fe]/10 text-[#00e7fe]">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* MAIN COMPARISON */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Improvised */}
          <article className="rounded-3xl border border-rose-500/15 bg-rose-500/[0.025] p-6 sm:p-8">

            <div className="mb-7 flex items-center gap-3 border-b border-rose-500/10 pb-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-rose-500/20 bg-rose-500/10 text-rose-400">
                <XCircle className="h-6 w-6" />
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                  Operação sem planejamento
                </p>

                <h3 className="text-lg font-extrabold text-white">
                  Logística improvisada
                </h3>
              </div>

            </div>

            <div className="space-y-6">

              <div className="flex gap-3">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
                <div>
                  <strong className="block text-sm font-semibold text-white">
                    Coleta pouco previsível
                  </strong>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    Dificuldade para preparar pedidos e organizar o despacho
                    quando não há uma rotina operacional definida.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
                <div>
                  <strong className="block text-sm font-semibold text-white">
                    Cobertura maior que a capacidade
                  </strong>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    Atender áreas distantes sem ajustar rotas e horários pode
                    comprometer os prazos da operação.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
                <div>
                  <strong className="block text-sm font-semibold text-white">
                    Volume sem planejamento
                  </strong>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    Picos de pedidos podem sobrecarregar uma estrutura que não
                    foi dimensionada para a demanda.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
                <div>
                  <strong className="block text-sm font-semibold text-white">
                    Pouca visibilidade operacional
                  </strong>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    Falta de comunicação dificulta o tratamento rápido de
                    ocorrências durante as entregas.
                  </p>
                </div>
              </div>

            </div>

          </article>

          {/* Nobres */}
          <article className="relative rounded-3xl border border-[#00e7fe]/25 bg-[#00e7fe]/[0.035] p-6 shadow-[0_20px_80px_rgba(0,142,244,0.08)] sm:p-8">

            <div className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-[#00e7fe] to-[#008ef4] px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-black">
              Operação Nobres
            </div>

            <div className="mb-7 flex items-center gap-3 border-b border-[#00e7fe]/10 pb-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#00e7fe]/20 bg-[#00e7fe]/10 text-[#00e7fe]">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#00e7fe]">
                  Estrutura operacional
                </p>

                <h3 className="text-lg font-extrabold text-white">
                  Nobres Entregas
                </h3>
              </div>

            </div>

            <div className="space-y-6">

              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <div>
                  <strong className="block text-sm font-semibold text-white">
                    Coletas programadas
                  </strong>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    A operação é planejada conforme endereço, volume diário,
                    frequência e disponibilidade logística.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <div>
                  <strong className="block text-sm font-semibold text-white">
                    Horário alinhado à operação
                  </strong>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    O horário de coleta é analisado em conjunto com regiões,
                    volume e horário de corte configurado pelo seller.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <div>
                  <strong className="block text-sm font-semibold text-white">
                    Rotas dimensionadas
                  </strong>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    Organização das rotas considerando capacidade operacional e
                    regiões atendidas.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <div>
                  <strong className="block text-sm font-semibold text-white">
                    Atendimento operacional
                  </strong>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    Canal direto para acompanhamento e tratamento de situações
                    relacionadas à operação.
                  </p>
                </div>
              </div>

            </div>

          </article>

        </div>

        {/* COMPARISON TABLE */}
        <div className="overflow-hidden rounded-3xl border border-white/5 bg-white/[0.025]">

          <div className="flex flex-col gap-5 border-b border-white/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">

            <div className="max-w-2xl">

              <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-[#00e7fe]">
                Comparativo operacional
              </p>

              <h3 className="text-xl font-bold text-white">
                O que muda quando a logística é planejada para sua operação?
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Compare uma estrutura genérica com uma operação dimensionada
                para entregas rápidas e última milha.
              </p>

            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00e7fe] to-[#008ef4] px-5 py-3 text-xs font-bold text-black shadow-[0_10px_30px_rgba(0,142,244,0.18)] transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" />
              Avaliar minha operação
            </a>

          </div>

          {/* DESKTOP TABLE */}
          <div className="hidden overflow-x-auto md:block">

            <table className="w-full text-left">

              <thead>
                <tr className="border-b border-white/5 bg-white/[0.015] text-[10px] font-bold uppercase tracking-wider text-slate-500">

                  <th className="px-7 py-4">
                    Critério
                  </th>

                  <th className="px-7 py-4 text-rose-400">
                    Operação genérica
                  </th>

                  <th className="px-7 py-4 text-[#00e7fe]">
                    Operação Nobres
                  </th>

                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">

                {comparisonRows.map((item) => (
                  <tr
                    key={item.feature}
                    className="transition-colors hover:bg-white/[0.02]"
                  >

                    <td className="px-7 py-5 text-sm font-semibold text-white">
                      {item.feature}
                    </td>

                    <td className="px-7 py-5">
                      <div className="flex gap-2 text-xs leading-relaxed text-slate-400">
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                        {item.common}
                      </div>
                    </td>

                    <td className="px-7 py-5">
                      <div className="flex gap-2 text-xs leading-relaxed text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        {item.nobres}
                      </div>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

          {/* MOBILE CARDS */}
          <div className="divide-y divide-white/5 md:hidden">

            {comparisonRows.map((item) => (
              <div
                key={item.feature}
                className="p-6"
              >

                <h4 className="mb-4 text-sm font-bold text-white">
                  {item.feature}
                </h4>

                <div className="mb-3 rounded-xl border border-rose-500/10 bg-rose-500/[0.03] p-4">

                  <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-rose-400">
                    <XCircle className="h-3.5 w-3.5" />
                    Operação genérica
                  </div>

                  <p className="text-xs leading-relaxed text-slate-400">
                    {item.common}
                  </p>

                </div>

                <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/[0.03] p-4">

                  <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Nobres Entregas
                  </div>

                  <p className="text-xs leading-relaxed text-slate-300">
                    {item.nobres}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* FINAL MICRO CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-5 sm:flex-row">

          <div className="flex items-start gap-3">

            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <Truck className="h-4 w-4" />
            </div>

            <div>

              <p className="text-sm font-semibold text-white">
                Já opera com Mercado Livre Flex ou Shopee Entrega Direta?
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Envie seu endereço de coleta, volume médio diário e regiões de
                entrega para avaliarmos sua operação.
              </p>

            </div>

          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-bold text-[#00e7fe] transition-colors hover:text-white"
          >
            Falar com a Nobres
            <ArrowRight className="h-4 w-4" />
          </a>

        </div>

      </div>
    </section>
  );
};
