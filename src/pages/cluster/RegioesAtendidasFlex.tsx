import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Truck,
  XCircle,
} from 'lucide-react';

type SearchStatus = 'idle' | 'found' | 'not_found';

interface SearchResult {
  status: SearchStatus;
  item?: string;
}

interface CoverageZone {
  region: string;
  badge: string;
  color: string;
  neighborhoods: string[];
}

const coverageData: CoverageZone[] = [
  {
    region: 'Zona Norte de São Paulo',
    badge: 'Coleta programada',
    color: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
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
    region: 'Zona Leste de São Paulo',
    badge: 'Área atendida',
    color:
      'border-[#00e7fe]/30 bg-[#00e7fe]/10 text-[#00e7fe]',
    neighborhoods: [
      'Tatuapé',
      'Mooca',
      'Anália Franco',
      'Vila Prudente',
      'Aricanduva',
      'Belém',
      'Penha',
      'Carrão',
      'Itaquera',
      'São Mateus',
      'Vila Formosa',
    ],
  },
  {
    region: 'Zona Sul de São Paulo',
    badge: 'Área atendida',
    color:
      'border-[#00e7fe]/30 bg-[#00e7fe]/10 text-[#00e7fe]',
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
    region: 'Zona Oeste e Centro de São Paulo',
    badge: 'Área atendida',
    color:
      'border-[#00e7fe]/30 bg-[#00e7fe]/10 text-[#00e7fe]',
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
    region: 'Grande ABC Paulista',
    badge: 'Rota regional',
    color:
      'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    neighborhoods: [
      'Santo André',
      'São Bernardo do Campo',
      'São Caetano do Sul',
      'Diadema',
      'Mauá',
    ],
  },
  {
    region: 'Guarulhos e Região',
    badge: 'Rota regional',
    color:
      'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    neighborhoods: [
      'Guarulhos',
      'Centro de Guarulhos',
      'Bonsucesso',
      'Cumbica',
      'Pimentas',
      'Vila Galvão',
      'Macedo',
      'Gopoúva',
    ],
  },
  {
    region: 'Alto Tietê',
    badge: 'Atendimento regional',
    color:
      'border-violet-500/30 bg-violet-500/10 text-violet-400',
    neighborhoods: [
      'Mogi das Cruzes',
      'Suzano',
      'César de Souza',
      'Brás Cubas',
      'Jundiapeba',
    ],
  },
  {
    region: 'Osasco e Zona Oeste Metropolitana',
    badge: 'Atendimento regional',
    color:
      'border-violet-500/30 bg-violet-500/10 text-violet-400',
    neighborhoods: [
      'Osasco',
      'Vila Yara',
      'Presidente Altino',
      'Quitaúna',
      'Vila Campesina',
      'Bela Vista',
      'Jaguaribe',
    ],
  },
];

const regionalPages = [
  {
    name: 'Guarulhos',
    url: '/atendimento/guarulhos',
    description:
      'Coletas para Mercado Livre Envios Flex em Guarulhos e região.',
  },
  {
    name: 'Osasco',
    url: '/atendimento/osasco',
    description:
      'Operação de coleta para sellers localizados em Osasco.',
  },
  {
    name: 'Mogi das Cruzes',
    url: '/atendimento/mogi-das-cruzes',
    description:
      'Atendimento para vendedores do Mercado Livre no Alto Tietê.',
  },
  {
    name: 'Suzano',
    url: '/atendimento/suzano',
    description:
      'Coletas para operações de e-commerce com origem em Suzano.',
  },
  {
    name: 'São Bernardo do Campo',
    url: '/atendimento/sao-bernardo-do-campo',
    description:
      'Operação de coleta no ABC Paulista com origem em São Bernardo.',
  },
];

export const RegioesAtendidasFlex: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<SearchResult>({
    status: 'idle',
  });

  const pageUrl =
    'https://www.nbrsenviosflex.com.br/mercado-livre-envios-flex/regioes-atendidas';

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const query = searchTerm.toLowerCase().trim();

    if (!query) {
      return;
    }

    let foundLocation = '';

    for (const zone of coverageData) {
      const regionMatch = zone.region
        .toLowerCase()
        .includes(query);

      const neighborhoodMatch = zone.neighborhoods.find((location) =>
        location.toLowerCase().includes(query)
      );

      if (neighborhoodMatch) {
        foundLocation = `${neighborhoodMatch} — ${zone.region}`;
        break;
      }

      if (regionMatch) {
        foundLocation = zone.region;
        break;
      }
    }

    if (foundLocation) {
      setSearchResult({
        status: 'found',
        item: foundLocation,
      });
    } else {
      setSearchResult({
        status: 'not_found',
        item: searchTerm,
      });
    }
  };

  const handleWhatsAppRedirect = (origem?: string) => {
    // Conversão Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-18438688462/gHDyCJu7uvEcEM6doNhE',
        value: 1.0,
        currency: 'BRL',
      });
    }

    const text = origem
      ? `Olá! Gostaria de confirmar a disponibilidade de coleta para Mercado Livre Envios Flex na região: ${origem}.`
      : 'Olá! Gostaria de consultar se minha região é atendida pela Nobres Entregas para Mercado Livre Envios Flex.';

    window.open(
      `https://wa.me/5511980224789?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',

    name:
      'Regiões atendidas para Mercado Livre Envios Flex em São Paulo',

    description:
      'Cobertura de coleta para vendedores que utilizam Mercado Livre Envios Flex em São Paulo, Grande São Paulo, ABC Paulista, Guarulhos, Osasco e Alto Tietê.',

    url: pageUrl,

    serviceType: [
      'Mercado Livre Envios Flex',
      'Coleta para e-commerce',
      'Entrega Same Day',
      'Logística para marketplaces',
      'Última milha',
    ],

    provider: {
      '@type': 'Organization',
      name: 'Nobres Entregas',
      url: 'https://www.nbrsenviosflex.com.br',
    },

    areaServed: [
      {
        '@type': 'City',
        name: 'São Paulo',
      },
      {
        '@type': 'City',
        name: 'Guarulhos',
      },
      {
        '@type': 'City',
        name: 'Osasco',
      },
      {
        '@type': 'City',
        name: 'Mogi das Cruzes',
      },
      {
        '@type': 'City',
        name: 'Suzano',
      },
      {
        '@type': 'City',
        name: 'São Bernardo do Campo',
      },
    ],
  };

  return (
    <>
      {/* ========================================= */}
      {/* SEO */}
      {/* ========================================= */}

      <Helmet>
        <title>
          Regiões Atendidas Mercado Livre Envios Flex SP | Nobres Entregas
        </title>

        <meta
          name="description"
          content="Consulte as regiões atendidas pela Nobres Entregas para Mercado Livre Envios Flex em São Paulo, Grande SP, ABC, Guarulhos, Osasco e Alto Tietê."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href={pageUrl}
        />

        {/* Open Graph */}
        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="Nobres Entregas"
        />

        <meta
          property="og:title"
          content="Regiões Atendidas Mercado Livre Envios Flex em SP"
        />

        <meta
          property="og:description"
          content="Consulte a cobertura da Nobres Entregas para coletas do Mercado Livre Envios Flex em São Paulo e Grande São Paulo."
        />

        <meta
          property="og:url"
          content={pageUrl}
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Regiões Atendidas Mercado Livre Envios Flex"
        />

        <meta
          name="twitter:description"
          content="Veja as regiões atendidas pela Nobres Entregas para Mercado Livre Envios Flex em São Paulo e Grande SP."
        />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <main className="bg-[#070A12] text-slate-100 min-h-screen">

        {/* ========================================= */}
        {/* HERO */}
        {/* ========================================= */}

        <section className="relative overflow-hidden border-b border-white/10">

          <div className="absolute inset-0 bg-gradient-to-br from-[#07111d] via-[#070A12] to-[#071827]" />

          <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-[#00e7fe]/10 blur-[150px] rounded-full" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24 lg:pt-36 lg:pb-28">

            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-10">

              <Link
                to="/"
                className="hover:text-[#00e7fe] transition"
              >
                Início
              </Link>

              <span>/</span>

              <Link
                to="/mercado-livre-envios-flex"
                className="hover:text-[#00e7fe] transition"
              >
                Mercado Livre Envios Flex
              </Link>

              <span>/</span>

              <span className="text-slate-300">
                Regiões atendidas
              </span>

            </div>

            <div className="max-w-4xl">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00e7fe]/30 bg-[#00e7fe]/10 text-[#00e7fe] text-sm font-semibold mb-7">

                <MapPin size={16} />

                Cobertura Mercado Livre Envios Flex

              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white">

                Regiões atendidas para{' '}

                <span className="text-[#00e7fe]">
                  Mercado Livre Envios Flex
                </span>

                {' '}em São Paulo

              </h1>

              <p className="mt-7 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">

                Consulte as principais áreas de coleta atendidas pela
                Nobres Entregas para vendedores que utilizam Mercado
                Livre Envios Flex em São Paulo, Grande São Paulo,
                ABC Paulista, Guarulhos, Osasco e Alto Tietê.

              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-sm md:text-base text-slate-300">

                <div className="flex items-center gap-2">

                  <CheckCircle2
                    size={18}
                    className="text-[#00e7fe]"
                  />

                  Coletas programadas

                </div>

                <div className="flex items-center gap-2">

                  <CheckCircle2
                    size={18}
                    className="text-[#00e7fe]"
                  />

                  São Paulo e Grande SP

                </div>

                <div className="flex items-center gap-2">

                  <CheckCircle2
                    size={18}
                    className="text-[#00e7fe]"
                  />

                  Operação Same Day

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* BUSCA */}
        {/* ========================================= */}

        <section className="py-20">

          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <div className="relative overflow-hidden p-7 md:p-9 rounded-3xl bg-white/[0.035] border border-white/10">

              <div className="absolute right-0 top-0 w-72 h-72 bg-[#00e7fe]/10 blur-[100px] rounded-full pointer-events-none" />

              <div className="relative">

                <div className="max-w-2xl">

                  <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                    Consulte sua região
                  </span>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 flex items-center gap-3">

                    <Search className="text-[#00e7fe] shrink-0" />

                    Seu bairro é atendido pelo Envios Flex?

                  </h2>

                  <p className="text-slate-400 mt-4 leading-relaxed">

                    Digite o nome do bairro ou cidade de coleta para
                    verificar se a região aparece entre as áreas
                    atualmente listadas pela Nobres Entregas.

                  </p>

                </div>

                <form
                  onSubmit={handleSearch}
                  className="flex flex-col sm:flex-row gap-3 mt-8"
                >

                  <input
                    type="text"
                    placeholder="Ex: Tatuapé, Guarulhos, Osasco, São Bernardo..."
                    value={searchTerm}
                    onChange={(event) =>
                      setSearchTerm(event.target.value)
                    }
                    className="flex-1 bg-[#070A12] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00e7fe]/60 transition"
                  />

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#00e7fe] text-[#061018] font-bold rounded-xl hover:opacity-90 transition"
                  >

                    <Search size={18} />

                    Verificar atendimento

                  </button>

                </form>

                {searchResult.status === 'found' && (
                  <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10">

                    <div className="flex items-start gap-3">

                      <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" />

                      <div>

                        <p className="font-semibold text-emerald-300">
                          Região localizada na cobertura cadastrada
                        </p>

                        <p className="text-sm text-slate-300 mt-1">
                          {searchResult.item}
                        </p>

                      </div>

                    </div>

                    <button
                      onClick={() =>
                        handleWhatsAppRedirect(searchResult.item)
                      }
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-emerald-500 text-slate-950 text-sm font-bold rounded-lg hover:opacity-90 transition shrink-0"
                    >

                      <MessageCircle size={16} />

                      Confirmar coleta

                    </button>

                  </div>
                )}

                {searchResult.status === 'not_found' && (
                  <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl border border-amber-500/30 bg-amber-500/10">

                    <div className="flex items-start gap-3">

                      <XCircle className="text-amber-400 shrink-0 mt-0.5" />

                      <div>

                        <p className="font-semibold text-amber-300">
                          A região não apareceu na lista
                        </p>

                        <p className="text-sm text-slate-300 mt-1">

                          Isso não significa necessariamente que não
                          exista atendimento. Fale com nossa equipe para
                          avaliarmos o endereço.

                        </p>

                      </div>

                    </div>

                    <button
                      onClick={() =>
                        handleWhatsAppRedirect(searchResult.item)
                      }
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-amber-500 text-slate-950 text-sm font-bold rounded-lg hover:opacity-90 transition shrink-0"
                    >

                      <MessageCircle size={16} />

                      Consultar região

                    </button>

                  </div>
                )}

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* COBERTURA */}
        {/* ========================================= */}

        <section className="py-20 bg-white/[0.025] border-y border-white/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl">

              <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                Cobertura operacional
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Principais regiões de coleta para Mercado Livre Envios Flex

              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                A Nobres Entregas atende diferentes áreas da capital e
                da Região Metropolitana de São Paulo. A disponibilidade
                exata deve ser confirmada conforme endereço, volume,
                frequência e características da operação.

              </p>

            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">

              {coverageData.map((zone) => (
                <article
                  key={zone.region}
                  className="p-6 rounded-2xl border border-white/10 bg-[#070A12] flex flex-col"
                >

                  <div className="flex items-start justify-between gap-3">

                    <div className="w-11 h-11 rounded-xl bg-[#00e7fe]/10 flex items-center justify-center shrink-0">

                      <MapPin className="text-[#00e7fe]" size={21} />

                    </div>

                    <span
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${zone.color}`}
                    >
                      {zone.badge}
                    </span>

                  </div>

                  <h3 className="text-lg font-bold text-white mt-5">
                    {zone.region}
                  </h3>

                  <p className="text-xs text-slate-500 mt-5 mb-3">
                    Exemplos de áreas:
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {zone.neighborhoods.map((neighborhood) => (
                      <span
                        key={neighborhood}
                        className="text-xs px-2.5 py-1.5 rounded-lg bg-white/[0.035] border border-white/10 text-slate-300"
                      >
                        {neighborhood}
                      </span>
                    ))}

                  </div>

                  <button
                    onClick={() =>
                      handleWhatsAppRedirect(zone.region)
                    }
                    className="inline-flex items-center gap-2 mt-6 text-[#00e7fe] text-sm font-semibold hover:gap-3 transition-all text-left"
                  >

                    Consultar coleta nessa região

                    <ArrowRight size={16} />

                  </button>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* COMO FUNCIONA A COBERTURA */}
        {/* ========================================= */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                  Atendimento Flex
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Como funciona a cobertura de coleta do Envios Flex?

                </h2>

                <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                  A cobertura de coleta depende da localização do
                  vendedor e da estrutura da rota disponível para aquela
                  operação. Por isso, cidades, bairros e endereços podem
                  possuir condições diferentes de atendimento.

                </p>

                <p className="text-slate-400 text-lg mt-4 leading-relaxed">

                  Antes do início das coletas, a Nobres avalia o endereço,
                  média de pacotes, frequência e características da
                  operação para confirmar a viabilidade logística.

                </p>

              </div>

              <div className="grid sm:grid-cols-2 gap-5">

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <Clock className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white mt-4">
                    Janela programada
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                    O horário é definido conforme rota, endereço e
                    perfil operacional do seller.

                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <Truck className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white mt-4">
                    Operação Same Day
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                    As rotas podem ser estruturadas para entregas no
                    mesmo dia conforme cobertura e condições operacionais.

                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <ShieldCheck className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white mt-4">
                    Acompanhamento operacional
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                    Suporte para acompanhamento das etapas e ocorrências
                    relacionadas à operação.

                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <MapPin className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white mt-4">
                    Análise por endereço
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                    A viabilidade é confirmada considerando o endereço
                    real de coleta e o perfil da operação.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* PÁGINAS REGIONAIS */}
        {/* ========================================= */}

        <section className="py-24 bg-white/[0.025] border-y border-white/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl">

              <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                Atendimento local
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Mercado Livre Envios Flex por cidade

              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                Consulte também nossas páginas regionais para conhecer
                melhor o atendimento em algumas das principais cidades
                da Grande São Paulo.

              </p>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

              {regionalPages.map((region) => (
                <Link
                  key={region.name}
                  to={region.url}
                  className="group p-6 rounded-2xl border border-white/10 bg-[#070A12] hover:border-[#00e7fe]/40 transition"
                >

                  <MapPin className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white text-lg mt-4 group-hover:text-[#00e7fe] transition">
                    Envios Flex em {region.name}
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    {region.description}
                  </p>

                  <div className="inline-flex items-center gap-2 mt-5 text-[#00e7fe] font-semibold text-sm">

                    Ver atendimento

                    <ArrowRight size={16} />

                  </div>

                </Link>
              ))}

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* FAQ */}
        {/* ========================================= */}

        <section className="py-24">

          <div className="max-w-4xl mx-auto px-6 lg:px-8">

            <div className="text-center mb-12">

              <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                Perguntas frequentes
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Dúvidas sobre regiões atendidas no Mercado Livre Envios Flex

              </h2>

            </div>

            <div className="space-y-4">

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  A Nobres atende Mercado Livre Envios Flex em toda São Paulo?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  A Nobres atende diferentes regiões da capital e da
                  Grande São Paulo. A disponibilidade deve ser
                  confirmada conforme endereço de coleta, rota e perfil
                  da operação.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  A Nobres realiza coleta de Envios Flex em Guarulhos?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  Sim. Guarulhos está entre as cidades atendidas pela
                  operação da Nobres, conforme disponibilidade da rota
                  para o endereço informado.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  Há coleta de Mercado Livre Envios Flex em Osasco?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  A Nobres atende operações com origem em Osasco e
                  diferentes áreas da Zona Oeste. Consulte a equipe para
                  confirmar a disponibilidade no endereço da sua operação.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  O ABC Paulista é atendido?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  A cobertura inclui áreas do ABC Paulista, como São
                  Bernardo do Campo, Santo André, São Caetano do Sul,
                  Diadema e Mauá, conforme viabilidade operacional.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  Qual é o horário de coleta do Mercado Livre Envios Flex?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  A janela de coleta varia conforme endereço, volume,
                  rota disponível e características da operação. O
                  horário é definido antes do início do atendimento.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  Meu bairro não aparece na lista. Isso significa que não é atendido?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  Não necessariamente. A lista apresenta exemplos das
                  principais áreas atendidas. Entre em contato com a
                  Nobres para validar a possibilidade de coleta no seu
                  endereço específico.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  Como consultar se meu CEP é atendido?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  Você pode utilizar a busca desta página como referência
                  e depois falar com nossa equipe pelo WhatsApp para
                  confirmar a disponibilidade operacional do endereço.

                </p>

              </details>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* LINKS DO CLUSTER */}
        {/* ========================================= */}

        <section className="py-24 bg-white/[0.025] border-y border-white/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl">

              <h2 className="text-3xl font-bold text-white">
                Saiba mais sobre Mercado Livre Envios Flex
              </h2>

              <p className="text-slate-400 mt-4 leading-relaxed">

                Consulte outras páginas do nosso guia para entender a
                operação, custos, ativação e boas práticas relacionadas
                ao Mercado Livre Envios Flex.

              </p>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

              <Link
                to="/mercado-livre-envios-flex"
                className="p-6 border border-white/10 rounded-xl hover:border-[#00e7fe]/40 transition"
              >

                <h3 className="font-bold text-white">
                  Mercado Livre Envios Flex
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Conheça a solução completa da Nobres para sellers.
                </p>

              </Link>

              <Link
                to="/mercado-livre-envios-flex/quanto-custa"
                className="p-6 border border-white/10 rounded-xl hover:border-[#00e7fe]/40 transition"
              >

                <h3 className="font-bold text-white">
                  Quanto custa?
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Entenda como são definidos os valores da operação.
                </p>

              </Link>

              <Link
                to="/mercado-livre-envios-flex/como-ativar"
                className="p-6 border border-white/10 rounded-xl hover:border-[#00e7fe]/40 transition"
              >

                <h3 className="font-bold text-white">
                  Como ativar o Flex
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Veja como funciona a ativação da modalidade.
                </p>

              </Link>

              <Link
                to="/mercado-livre-envios-flex/reputacao-verde"
                className="p-6 border border-white/10 rounded-xl hover:border-[#00e7fe]/40 transition"
              >

                <h3 className="font-bold text-white">
                  Reputação no Mercado Livre
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Entenda a relação entre logística, prazo e reputação.
                </p>

              </Link>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* CTA FINAL */}
        {/* ========================================= */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="relative overflow-hidden rounded-3xl border border-[#00e7fe]/20 bg-gradient-to-r from-[#081626] to-[#07101c] px-8 py-14 md:px-14">

              <div className="absolute right-0 top-0 w-96 h-96 bg-[#00e7fe]/10 blur-[120px] rounded-full" />

              <div className="relative max-w-3xl">

                <span className="text-[#00e7fe] font-semibold">
                  Consulte sua operação
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Quer saber se a Nobres coleta Mercado Livre Envios Flex na sua região?

                </h2>

                <p className="text-slate-300 text-lg mt-5 leading-relaxed">

                  Informe sua cidade, bairro, endereço aproximado e média
                  diária de pacotes. Nossa equipe poderá avaliar a
                  disponibilidade da rota e as condições de atendimento.

                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">

                  <button
                    onClick={() =>
                      handleWhatsAppRedirect(
                        'Consulta de cobertura Mercado Livre Envios Flex'
                      )
                    }
                    className="inline-flex justify-center items-center gap-2 bg-[#00e7fe] text-[#061018] font-bold px-7 py-4 rounded-xl hover:opacity-90 transition"
                  >

                    <MessageCircle size={19} />

                    Consultar minha região

                    <ArrowRight size={19} />

                  </button>

                  <Link
                    to="/mercado-livre-envios-flex"
                    className="inline-flex justify-center items-center gap-2 border border-white/15 bg-white/5 px-7 py-4 rounded-xl text-white font-semibold hover:bg-white/10 transition"
                  >

                    Conhecer Envios Flex

                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
};
