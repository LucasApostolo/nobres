import React, { useMemo, useState } from 'react';

import {
  ArrowRight,
  BarChart3,
  Calculator,
  CalendarDays,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Package,
  Route,
  ShoppingBag,
  Sparkles,
  Store,
  Truck,
} from 'lucide-react';

import { buildWhatsAppLink } from '../utils/whatsapp';

const channels = [
  {
    id: 'mercado-livre',
    label: 'Mercado Livre Envios Flex',
    shortLabel: 'Mercado Livre',
  },
  {
    id: 'shopee',
    label: 'Shopee Entrega Direta',
    shortLabel: 'Shopee',
  },
  {
    id: 'ambos',
    label: 'Mercado Livre + Shopee',
    shortLabel: 'ML + Shopee',
  },
  {
    id: 'ecommerce',
    label: 'Loja própria / E-commerce',
    shortLabel: 'E-commerce',
  },
];

const regions = [
  'Zona Leste de São Paulo',
  'Zona Norte de São Paulo',
  'Zona Sul de São Paulo',
  'Zona Oeste de São Paulo',
  'Centro de São Paulo',
  'Guarulhos',
  'Osasco',
  'Grande ABC',
  'Mogi das Cruzes',
  'Suzano',
  'Outra região',
];

const operatingDaysOptions = [
  {
    value: 5,
    label: '5 dias/semana',
    monthlyFactor: 22,
  },
  {
    value: 6,
    label: '6 dias/semana',
    monthlyFactor: 26,
  },
  {
    value: 7,
    label: '7 dias/semana',
    monthlyFactor: 30,
  },
];

const getOperationProfile = (dailyVolume: number) => {
  if (dailyVolume < 30) {
    return {
      label: 'Operação inicial',
      description:
        'Volume adequado para uma estrutura enxuta e acompanhamento próximo da evolução da operação.',
    };
  }

  if (dailyVolume < 100) {
    return {
      label: 'Operação em crescimento',
      description:
        'Volume que exige organização de coleta, capacidade de rota e acompanhamento diário mais estruturado.',
    };
  }

  if (dailyVolume < 250) {
    return {
      label: 'Operação de alto volume',
      description:
        'Demanda que requer planejamento de capacidade, distribuição das rotas e previsibilidade de coleta.',
    };
  }

  return {
    label: 'Operação de grande volume',
    description:
      'Perfil que deve ser analisado individualmente para dimensionamento de coleta, frota, rotas e capacidade diária.',
  };
};

export const SimulatorSection: React.FC = () => {
  const [dailyVolume, setDailyVolume] = useState<number>(45);
  const [channel, setChannel] = useState<string>('mercado-livre');
  const [region, setRegion] = useState<string>('Zona Leste de São Paulo');
  const [operatingDays, setOperatingDays] = useState<number>(6);
  const [storeName, setStoreName] = useState<string>('');

  const selectedChannel =
    channels.find((item) => item.id === channel) ?? channels[0];

  const selectedDays =
    operatingDaysOptions.find((item) => item.value === operatingDays) ??
    operatingDaysOptions[1];

  const monthlyVolume = dailyVolume * selectedDays.monthlyFactor;

  const yearlyVolume = monthlyVolume * 12;

  const operationProfile = useMemo(
    () => getOperationProfile(dailyVolume),
    [dailyVolume]
  );

  const handleWhatsAppQuote = () => {
    const link = buildWhatsAppLink({
      storeName: storeName || 'Não informado',
      marketplace: selectedChannel.label,
      neighborhood: region,
      dailyPackages: dailyVolume,
      message:
        `Olá! Fiz a simulação de operação no site da Nobres Entregas.\n\n` +
        `Loja: ${storeName || 'Não informado'}\n` +
        `Canal: ${selectedChannel.label}\n` +
        `Região de coleta: ${region}\n` +
        `Volume médio: ${dailyVolume} pacotes/dia\n` +
        `Frequência: ${selectedDays.label}\n` +
        `Volume mensal estimado: ${monthlyVolume.toLocaleString('pt-BR')} pacotes\n\n` +
        `Gostaria de avaliar a disponibilidade e receber uma cotação para minha operação.`,
    });

    if (
      typeof window !== 'undefined' &&
      (window as any).gtag
    ) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-18438688462/gHDyCJu7uvEcEM6doNhE',
        value: 1.0,
        currency: 'BRL',
      });
    }

    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="simulador"
      className="relative overflow-hidden bg-[#070A12] py-20 sm:py-24"
      aria-labelledby="simulador-heading"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[520px] w-[520px] rounded-full bg-[#008ef4]/[0.07] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-4xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00e7fe]/25 bg-[#00e7fe]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#00e7fe]">
            <Calculator className="h-3.5 w-3.5" />
            Simulador de operação
          </div>

          <h2
            id="simulador-heading"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Dimensione sua operação de{' '}
            <span className="bg-gradient-to-r from-[#00e7fe] to-[#008ef4] bg-clip-text text-transparent">
              entregas em São Paulo
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Informe o volume médio de pedidos, canal de venda e região de
            coleta. O simulador organiza os principais dados da sua operação
            para facilitar a análise logística e a cotação.
          </p>

        </div>

        {/* SIMULATOR */}
        <div className="grid grid-cols-1 items-stretch gap-7 lg:grid-cols-12">

          {/* LEFT */}
          <div className="flex flex-col rounded-3xl border border-white/5 bg-white/[0.025] p-6 shadow-2xl sm:p-8 lg:col-span-7">

            <div className="mb-7 flex items-center gap-3 border-b border-white/5 pb-5">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#00e7fe]/20 bg-[#00e7fe]/10 text-[#00e7fe]">
                <Store className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                  Sua operação
                </p>

                <h3 className="text-base font-bold text-white">
                  Configure os dados abaixo
                </h3>
              </div>

            </div>

            {/* VOLUME */}
            <div className="mb-8">

              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <label
                  htmlFor="daily-volume"
                  className="text-sm font-semibold text-slate-200"
                >
                  Média de pacotes por dia
                </label>

                <div className="inline-flex w-fit items-baseline gap-1 rounded-xl border border-[#00e7fe]/20 bg-[#00e7fe]/5 px-3.5 py-2">

                  <span className="font-mono text-xl font-black text-[#00e7fe]">
                    {dailyVolume}
                  </span>

                  <span className="text-[11px] text-slate-400">
                    pacotes/dia
                  </span>

                </div>

              </div>

              <input
                id="daily-volume"
                type="range"
                min="5"
                max="500"
                step="5"
                value={dailyVolume}
                onChange={(event) =>
                  setDailyVolume(Number(event.target.value))
                }
                className="h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-[#00e7fe]"
              />

              <div className="mt-2 flex justify-between text-[10px] font-mono text-slate-600">
                <span>5</span>
                <span>100</span>
                <span>250</span>
                <span>500+</span>
              </div>

            </div>

            {/* CHANNEL */}
            <div className="mb-7">

              <label className="mb-3 block text-sm font-semibold text-slate-200">
                Principal canal de venda
              </label>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">

                {channels.map((item) => {
                  const active = channel === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setChannel(item.id)}
                      className={`flex items-center justify-between rounded-xl border p-3.5 text-left transition-all ${
                        active
                          ? 'border-[#00e7fe]/50 bg-[#00e7fe]/10 text-white'
                          : 'border-white/5 bg-white/[0.025] text-slate-400 hover:border-white/15 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">

                        <ShoppingBag
                          className={`h-4 w-4 ${
                            active
                              ? 'text-[#00e7fe]'
                              : 'text-slate-500'
                          }`}
                        />

                        <span className="text-xs font-semibold">
                          {item.label}
                        </span>

                      </div>

                      {active && (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      )}

                    </button>
                  );
                })}

              </div>

            </div>

            {/* DAYS */}
            <div className="mb-7">

              <label className="mb-3 block text-sm font-semibold text-slate-200">
                Frequência estimada da operação
              </label>

              <div className="grid grid-cols-3 gap-2">

                {operatingDaysOptions.map((item) => {
                  const active = operatingDays === item.value;

                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setOperatingDays(item.value)}
                      className={`rounded-xl border p-3 text-center text-xs font-semibold transition-all ${
                        active
                          ? 'border-[#008ef4]/50 bg-[#008ef4]/10 text-white'
                          : 'border-white/5 bg-white/[0.025] text-slate-400 hover:border-white/15'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}

              </div>

            </div>

            {/* REGION */}
            <div className="mb-7">

              <label
                htmlFor="pickup-region"
                className="mb-3 block text-sm font-semibold text-slate-200"
              >
                Região de coleta
              </label>

              <div className="relative">

                <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#00e7fe]" />

                <select
                  id="pickup-region"
                  value={region}
                  onChange={(event) => setRegion(event.target.value)}
                  className="w-full appearance-none rounded-xl border border-white/10 bg-[#0c101b] py-3 pl-10 pr-4 text-xs text-white outline-none transition-colors focus:border-[#00e7fe]/50"
                >
                  {regions.map((item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>

              </div>

            </div>

            {/* STORE */}
            <div>

              <label
                htmlFor="store-name"
                className="mb-2 block text-xs font-semibold text-slate-300"
              >
                Nome da loja{' '}
                <span className="font-normal text-slate-600">
                  — opcional
                </span>
              </label>

              <input
                id="store-name"
                type="text"
                placeholder="Ex.: Loja ABC"
                value={storeName}
                onChange={(event) => setStoreName(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-xs text-white outline-none transition-colors placeholder:text-slate-600 focus:border-[#00e7fe]/50"
              />

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col rounded-3xl border border-[#00e7fe]/20 bg-gradient-to-b from-[#00e7fe]/[0.04] to-white/[0.02] p-6 shadow-2xl sm:p-8 lg:col-span-5">

            {/* RESULT HEADER */}
            <div className="mb-6 flex items-start justify-between border-b border-white/5 pb-5">

              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#00e7fe]">
                  Resumo da simulação
                </p>

                <h3 className="text-xl font-extrabold text-white">
                  Perfil da sua operação
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#00e7fe]/20 bg-[#00e7fe]/10 text-[#00e7fe]">
                <Sparkles className="h-5 w-5" />
              </div>

            </div>

            {/* PROFILE */}
            <div className="mb-4 rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.04] p-5">

              <div className="mb-2 flex items-center gap-2 text-emerald-400">

                <BarChart3 className="h-4 w-4" />

                <span className="text-[10px] font-bold uppercase tracking-wider">
                  Perfil estimado
                </span>

              </div>

              <p className="text-lg font-extrabold text-white">
                {operationProfile.label}
              </p>

              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {operationProfile.description}
              </p>

            </div>

            {/* METRICS */}
            <div className="space-y-3">

              <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.025] p-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00e7fe]/10 text-[#00e7fe]">
                    <Package className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-500">
                      Volume mensal estimado
                    </p>

                    <p className="text-base font-bold text-white">
                      {monthlyVolume.toLocaleString('pt-BR')} pacotes
                    </p>
                  </div>

                </div>

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.025] p-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#008ef4]/10 text-[#008ef4]">
                    <CalendarDays className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-500">
                      Volume anual projetado
                    </p>

                    <p className="text-base font-bold text-white">
                      {yearlyVolume.toLocaleString('pt-BR')} pacotes
                    </p>
                  </div>

                </div>

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.025] p-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <Truck className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-500">
                      Canal informado
                    </p>

                    <p className="text-sm font-bold text-white">
                      {selectedChannel.shortLabel}
                    </p>
                  </div>

                </div>

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.025] p-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                    <MapPin className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-500">
                      Região de coleta
                    </p>

                    <p className="text-sm font-bold text-white">
                      {region}
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* NEXT STEP */}
            <div className="mt-5 rounded-2xl border border-[#00e7fe]/10 bg-[#00e7fe]/[0.025] p-4">

              <div className="flex gap-3">

                <Route className="mt-0.5 h-5 w-5 shrink-0 text-[#00e7fe]" />

                <div>
                  <p className="text-xs font-bold text-white">
                    Próximo passo: análise de viabilidade
                  </p>

                  <p className="mt-1.5 text-[11px] leading-relaxed text-slate-400">
                    Região de coleta, destinos das entregas, volume diário e
                    horário operacional são avaliados antes da definição da
                    rota e do valor da operação.
                  </p>
                </div>

              </div>

            </div>

            {/* CTA */}
            <div className="mt-auto pt-7">

              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00e7fe] to-[#008ef4] px-5 py-4 text-sm font-bold text-black shadow-[0_10px_30px_rgba(0,142,244,0.22)] transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" />

                Receber cotação desta operação

                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="mt-3 text-center text-[10px] leading-relaxed text-slate-500">
                A simulação não representa preço, prazo ou disponibilidade
                garantida. A proposta final depende da análise operacional.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
