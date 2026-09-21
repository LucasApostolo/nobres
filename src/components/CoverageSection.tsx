import React, { useMemo, useState } from 'react';

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Navigation,
  PackageCheck,
  Route,
  Search,
  Truck,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { buildWhatsAppLink } from '../utils/whatsapp';

type CoverageRegion = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  neighborhoods: string[];
};

type RegionalPage = {
  city: string;
  region: string;
  href: string;
  description: string;
};

const coverageRegions: CoverageRegion[] = [
  {
    id: 'zl',
    name: 'Zona Leste de São Paulo',
    shortName: 'Zona Leste',
    description:
      'Atendimento logístico em importantes polos comerciais e residenciais da Zona Leste de São Paulo.',
    neighborhoods: [
      'Tatuapé',
      'Mooca',
      'Belém',
      'Penha',
      'Vila Carrão',
      'Vila Formosa',
      'Anália Franco',
      'Vila Prudente',
      'Aricanduva',
      'Itaquera',
      'São Mateus',
    ],
  },

  {
    id: 'zn',
    name: 'Zona Norte de São Paulo',
    shortName: 'Zona Norte',
    description:
      'Coletas e operação de última milha em diferentes regiões da Zona Norte da capital.',
    neighborhoods: [
      'Santana',
      'Tucuruvi',
      'Vila Guilherme',
      'Vila Maria',
      'Casa Verde',
      'Limão',
      'Freguesia do Ó',
      'Mandaqui',
      'Tremembé',
      'Jaçanã',
      'Parada Inglesa',
    ],
  },

  {
    id: 'zs',
    name: 'Zona Sul de São Paulo',
    shortName: 'Zona Sul',
    description:
      'Atendimento conforme viabilidade operacional em bairros e polos da Zona Sul de São Paulo.',
    neighborhoods: [
      'Itaim Bibi',
      'Moema',
      'Vila Mariana',
      'Santo Amaro',
      'Jabaquara',
      'Morumbi',
      'Campo Belo',
      'Saúde',
      'Ipiranga',
      'Sacomã',
    ],
  },

  {
    id: 'zo-centro',
    name: 'Zona Oeste e Centro de São Paulo',
    shortName: 'Oeste e Centro',
    description:
      'Operação em importantes áreas comerciais da Zona Oeste e região central da capital.',
    neighborhoods: [
      'Lapa',
      'Perdizes',
      'Barra Funda',
      'Pinheiros',
      'Vila Madalena',
      'Butantã',
      'Centro',
      'República',
      'Consolação',
      'Bela Vista',
      'Brás',
      'Bom Retiro',
      'Pari',
    ],
  },

  {
    id: 'abc',
    name: 'Grande ABC',
    shortName: 'Grande ABC',
    description:
      'Atendimento a operações localizadas nos principais municípios do ABC Paulista.',
    neighborhoods: [
      'Santo André',
      'São Bernardo do Campo',
      'São Caetano do Sul',
      'Diadema',
      'Mauá',
    ],
  },

  {
    id: 'guarulhos',
    name: 'Guarulhos',
    shortName: 'Guarulhos',
    description:
      'Coletas programadas para sellers e operações de e-commerce em Guarulhos.',
    neighborhoods: [
      'Centro de Guarulhos',
      'Cumbica',
      'Bonsucesso',
      'Vila Galvão',
      'Pimentas',
      'Macedo',
      'Jardim Maia',
      'Gopoúva',
      'Vila Augusta',
      'Taboão',
      'Cecap',
      'São João',
    ],
  },

  {
    id: 'osasco',
    name: 'Osasco e região',
    shortName: 'Osasco',
    description:
      'Atendimento logístico para operações localizadas em Osasco e áreas próximas da Zona Oeste Metropolitana.',
    neighborhoods: [
      'Centro de Osasco',
      'Vila Campesina',
      'Vila Yara',
      'Presidente Altino',
      'Jaguaribe',
      'Bela Vista',
      'Umuarama',
      'Bussocaba',
      'Rochdale',
      'Quitaúna',
    ],
  },

  {
    id: 'alto-tiete',
    name: 'Alto Tietê',
    shortName: 'Alto Tietê',
    description:
      'Operação em cidades estratégicas do Alto Tietê, conforme área e disponibilidade logística.',
    neighborhoods: [
      'Mogi das Cruzes',
      'Suzano',
      'César de Souza',
      'Brás Cubas',
      'Jundiapeba',
    ],
  },
];

const regionalPages: RegionalPage[] = [
  {
    city: 'Guarulhos',
    region: 'Grande São Paulo',
    href: '/atendimento/guarulhos',
    description:
      'Mercado Livre Envios Flex e Shopee Entrega Direta em Guarulhos.',
  },
  {
    city: 'Osasco',
    region: 'Zona Oeste Metropolitana',
    href: '/atendimento/osasco',
    description:
      'Operação Flex e Entrega Direta para sellers em Osasco.',
  },
  {
    city: 'São Bernardo do Campo',
    region: 'Grande ABC',
    href: '/atendimento/sao-bernardo-do-campo',
    description:
      'Coletas e entregas para sellers no ABC Paulista.',
  },
  {
    city: 'Mogi das Cruzes',
    region: 'Alto Tietê',
    href: '/atendimento/mogi-das-cruzes',
    description:
      'Operação logística para Mercado Livre e Shopee em Mogi das Cruzes.',
  },
  {
    city: 'Suzano',
    region: 'Alto Tietê',
    href: '/atendimento/suzano',
    description:
      'Coletas programadas e entregas para sellers em Suzano.',
  },
];

const normalizeText = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

export const CoverageSection: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('zl');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeRegion =
    coverageRegions.find((region) => region.id === selectedRegionId) ??
    coverageRegions[0];

  const filteredNeighborhoods = useMemo(() => {
    const query = normalizeText(searchQuery);

    if (!query) {
      return activeRegion.neighborhoods;
    }

    return activeRegion.neighborhoods.filter((neighborhood) =>
      normalizeText(neighborhood).includes(query)
    );
  }, [activeRegion, searchQuery]);

  const coverageWhatsApp = buildWhatsAppLink({
    neighborhood: activeRegion.name,
    message:
      `Olá! Gostaria de confirmar a disponibilidade de atendimento da Nobres Entregas.\n\n` +
      `Região de coleta: ${activeRegion.name}\n` +
      `${searchQuery ? `Bairro pesquisado: ${searchQuery}\n` : ''}` +
      `Gostaria de verificar a cobertura e receber informações sobre a operação.`,
  });

  return (
    <section
      id="cobertura"
      className="relative overflow-hidden bg-[#070A12] py-20 sm:py-24"
      aria-labelledby="coverage-heading"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute left-10 top-1/3 h-96 w-96 rounded-full bg-[#008ef4]/[0.07] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-4xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00e7fe]/25 bg-[#00e7fe]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#00e7fe]">
            <Navigation className="h-3.5 w-3.5" />
            São Paulo e Grande São Paulo
          </div>

          <h2
            id="coverage-heading"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Regiões atendidas para{' '}
            <span className="bg-gradient-to-r from-[#00e7fe] to-[#008ef4] bg-clip-text text-transparent">
              coletas e entregas
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Consulte algumas das regiões atendidas pela Nobres Entregas em
            São Paulo e Grande SP para operações de Mercado Livre Envios Flex,
            Shopee Entrega Direta e entregas de última milha.
          </p>

          <Link
            to="/mercado-livre-envios-flex/regioes-atendidas"
            className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#00e7fe] transition-colors hover:text-white"
          >
            Ver cobertura detalhada
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>

        {/* REGION SELECTOR */}
        <div className="mb-7 flex items-center gap-2.5 overflow-x-auto pb-3 no-scrollbar">

          {coverageRegions.map((region) => {
            const selected = region.id === selectedRegionId;

            return (
              <button
                key={region.id}
                type="button"
                onClick={() => {
                  setSelectedRegionId(region.id);
                  setSearchQuery('');
                }}
                className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2.5 text-xs font-semibold transition-all ${
                  selected
                    ? 'border-transparent bg-gradient-to-r from-[#00e7fe] to-[#008ef4] font-bold text-black shadow-[0_0_20px_rgba(0,231,254,0.18)]'
                    : 'border-white/5 bg-white/[0.03] text-slate-400 hover:border-white/15 hover:text-white'
                }`}
              >
                <MapPin
                  className={`h-3.5 w-3.5 ${
                    selected ? 'text-black' : 'text-[#00e7fe]'
                  }`}
                />

                {region.shortName}
              </button>
            );
          })}

        </div>

        {/* REGION EXPLORER */}
        <div className="mb-14 overflow-hidden rounded-3xl border border-white/5 bg-white/[0.025] shadow-2xl">

          {/* REGION HEADER */}
          <div className="flex flex-col gap-6 border-b border-white/5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <div className="mb-2 flex items-center gap-2">

                <MapPin className="h-4 w-4 text-[#00e7fe]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#00e7fe]">
                  Região selecionada
                </span>

              </div>

              <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                {activeRegion.name}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
                {activeRegion.description}
              </p>

            </div>

            <div className="grid grid-cols-2 gap-3 sm:flex">

              <div className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3">

                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                  Modalidade
                </p>

                <p className="mt-1 text-xs font-bold text-white">
                  Última milha
                </p>

              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3">

                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                  Operação
                </p>

                <p className="mt-1 text-xs font-bold text-emerald-400">
                  Sob análise
                </p>

              </div>

            </div>

          </div>

          {/* SEARCH */}
          <div className="p-6 sm:p-8">

            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

              <div>

                <p className="text-xs font-bold text-white">
                  Bairros e polos da região
                </p>

                <p className="mt-1 text-[11px] text-slate-500">
                  Pesquise na lista abaixo ou consulte nossa equipe para
                  confirmar um endereço específico.
                </p>

              </div>

              <div className="relative w-full sm:max-w-sm">

                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                <input
                  type="search"
                  placeholder="Ex.: Tatuapé, Cumbica..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pl-10 pr-4 text-xs text-white outline-none transition-colors placeholder:text-slate-600 focus:border-[#00e7fe]/50"
                />

              </div>

            </div>

            {/* NEIGHBORHOODS */}
            {filteredNeighborhoods.length > 0 ? (
              <div className="flex flex-wrap gap-2">

                {filteredNeighborhoods.map((neighborhood) => (
                  <div
                    key={neighborhood}
                    className="flex items-center gap-1.5 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />

                    {neighborhood}
                  </div>
                ))}

              </div>
            ) : (
              <div className="rounded-2xl border border-[#00e7fe]/10 bg-[#00e7fe]/[0.025] p-5">

                <div className="flex items-start gap-3">

                  <Search className="mt-0.5 h-5 w-5 shrink-0 text-[#00e7fe]" />

                  <div>

                    <p className="text-sm font-bold text-white">
                      Não encontrou “{searchQuery}” na lista?
                    </p>

                    <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                      A ausência do bairro nesta lista não significa
                      necessariamente que não exista atendimento. Consulte a
                      equipe da Nobres para verificar o endereço e a
                      disponibilidade operacional.
                    </p>

                  </div>

                </div>

              </div>
            )}

          </div>

          {/* REGION CTA */}
          <div className="flex flex-col gap-4 border-t border-white/5 bg-white/[0.015] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">

            <div>

              <p className="text-xs font-semibold text-white">
                Sua operação fica em {activeRegion.name}?
              </p>

              <p className="mt-1 text-[11px] text-slate-500">
                Confirme a disponibilidade para seu endereço de coleta.
              </p>

            </div>

            <a
              href={coverageWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00e7fe] to-[#008ef4] px-5 py-3 text-xs font-bold text-black shadow-[0_10px_25px_rgba(0,142,244,0.18)] transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" />
              Consultar esta região
            </a>

          </div>

        </div>

        {/* LOCAL SEO */}
        <div className="mb-8">

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#00e7fe]">
                Atendimento regional
              </p>

              <h3 className="text-2xl font-extrabold text-white">
                Conheça nossas operações por cidade
              </h3>

              <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-400 sm:text-sm">
                Consulte informações específicas sobre atendimento, regiões e
                modalidades disponíveis em importantes polos da Grande São
                Paulo e Alto Tietê.
              </p>

            </div>

          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">

            {regionalPages.map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className="group flex flex-col rounded-2xl border border-white/5 bg-white/[0.025] p-5 transition-all hover:-translate-y-0.5 hover:border-[#00e7fe]/25 hover:bg-white/[0.04]"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-[#00e7fe]/15 bg-[#00e7fe]/10 text-[#00e7fe]">
                  <Building2 className="h-4 w-4" />
                </div>

                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-600">
                  {page.region}
                </p>

                <h4 className="mt-1 text-sm font-bold text-white transition-colors group-hover:text-[#00e7fe]">
                  {page.city}
                </h4>

                <p className="mt-2 flex-1 text-[11px] leading-relaxed text-slate-500">
                  {page.description}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold text-[#00e7fe]">
                  Ver atendimento
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}

          </div>

        </div>

        {/* BENEFITS */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00e7fe]/10 text-[#00e7fe]">
              <Truck className="h-5 w-5" />
            </div>

            <h4 className="text-sm font-bold text-white">
              Coletas programadas
            </h4>

            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Frequência e horário definidos conforme endereço, volume e
              viabilidade da operação.
            </p>

          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <PackageCheck className="h-5 w-5" />
            </div>

            <h4 className="text-sm font-bold text-white">
              Operação para sellers
            </h4>

            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Estrutura voltada a Mercado Livre Envios Flex, Shopee Entrega
              Direta e operações de e-commerce.
            </p>

          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#008ef4]/10 text-[#008ef4]">
              <Route className="h-5 w-5" />
            </div>

            <h4 className="text-sm font-bold text-white">
              Rotas dimensionadas
            </h4>

            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Planejamento considerando regiões de entrega, capacidade e
              volume diário da operação.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
