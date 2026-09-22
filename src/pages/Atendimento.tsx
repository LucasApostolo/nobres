import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  PackageCheck,
  Phone,
  Route,
  Search,
  Truck,
} from 'lucide-react';

export const Atendimento: React.FC = () => {
  const pageUrl = 'https://www.nbrsenviosflex.com.br/atendimento';

  const handleWhatsApp = (assunto: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-18438688462/gHDyCJu7uvEcEM6doNhE',
        value: 1.0,
        currency: 'BRL',
      });
    }

    const text = `Olá! Gostaria de verificar a disponibilidade de coleta da Nobres Entregas na minha região (${assunto}).`;

    window.open(
      `https://wa.me/5511980224789?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const regionalPages = [
    {
      city: 'Guarulhos',
      region: 'Grande São Paulo',
      description:
        'Coletas para sellers e operações de e-commerce localizadas em Guarulhos, incluindo importantes polos comerciais e logísticos da cidade.',
      path: '/atendimento/guarulhos',
      areas: ['Cumbica', 'Bonsucesso', 'Centro', 'Pimentas'],
    },
    {
      city: 'Osasco',
      region: 'Oeste Metropolitana',
      description:
        'Operação de coleta para vendedores localizados em Osasco e conexão logística com São Paulo e outras áreas atendidas da Região Metropolitana.',
      path: '/atendimento/osasco',
      areas: ['Vila Yara', 'Quitaúna', 'Centro', 'Presidente Altino'],
    },
    {
      city: 'São Bernardo do Campo',
      region: 'Grande ABC',
      description:
        'Atendimento para operações de marketplace e e-commerce em São Bernardo do Campo, um dos principais polos empresariais do ABC.',
      path: '/atendimento/sao-bernardo-do-campo',
      areas: ['Rudge Ramos', 'Demarchi', 'Centro', 'Paulicéia'],
    },
    {
      city: 'Mogi das Cruzes',
      region: 'Alto Tietê',
      description:
        'Coletas programadas para vendedores de Mogi das Cruzes com distribuição para regiões atendidas em São Paulo e Grande SP.',
      path: '/atendimento/mogi-das-cruzes',
      areas: ['César de Souza', 'Brás Cubas', 'Centro', 'Jundiapeba'],
    },
    {
      city: 'Suzano',
      region: 'Alto Tietê',
      description:
        'Atendimento para sellers e empresas de Suzano que precisam estruturar sua operação de coleta e entregas para marketplaces.',
      path: '/atendimento/suzano',
      areas: ['Suzano', 'Alto Tietê', 'Grande SP'],
    },
  ];

  const coverageGroups = [
    {
      title: 'São Paulo Capital',
      description:
        'Operações de coleta e distribuição conectadas às principais regiões da capital paulista.',
      areas: ['Zona Leste', 'Zona Norte', 'Zona Sul', 'Zona Oeste', 'Centro'],
    },
    {
      title: 'Grande ABC',
      description:
        'Atendimento regional para importantes polos comerciais e empresariais do ABC Paulista.',
      areas: [
        'São Bernardo do Campo',
        'Santo André',
        'São Caetano do Sul',
        'Diadema',
        'Mauá',
      ],
    },
    {
      title: 'Guarulhos',
      description:
        'Coletas em diferentes polos comerciais, industriais e logísticos da cidade.',
      areas: ['Cumbica', 'Bonsucesso', 'Centro', 'Pimentas'],
    },
    {
      title: 'Alto Tietê',
      description:
        'Operação regional para sellers localizados em cidades estratégicas do Alto Tietê.',
      areas: ['Mogi das Cruzes', 'Suzano'],
    },
    {
      title: 'Oeste Metropolitana',
      description:
        'Atendimento para operações localizadas em Osasco e áreas da região oeste metropolitana.',
      areas: ['Osasco', 'Vila Yara', 'Quitaúna', 'Presidente Altino'],
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Transportadora Mercado Livre Envios Flex e Shopee Entrega Direta em São Paulo',
    description:
      'Serviço de coleta e entrega para vendedores do Mercado Livre Envios Flex e Shopee Entrega Direta em São Paulo e Grande São Paulo.',
    url: pageUrl,
    serviceType: [
      'Mercado Livre Envios Flex',
      'Shopee Entrega Direta',
      'Entrega Same Day',
      'Logística para marketplaces',
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
        name: 'São Bernardo do Campo',
      },
      {
        '@type': 'City',
        name: 'Mogi das Cruzes',
      },
      {
        '@type': 'City',
        name: 'Suzano',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Transportadora Envios Flex em São Paulo e Grande SP | Nobres Entregas
        </title>

        <meta
          name="description"
          content="Transportadora para Mercado Livre Envios Flex e Shopee Entrega Direta em São Paulo e Grande SP. Consulte cidades e regiões atendidas pela Nobres Entregas."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nobres Entregas" />

        <meta
          property="og:title"
          content="Transportadora Envios Flex em São Paulo e Grande SP | Nobres Entregas"
        />

        <meta
          property="og:description"
          content="Consulte a cobertura da Nobres Entregas para Mercado Livre Envios Flex e Shopee Entrega Direta em São Paulo e Grande São Paulo."
        />

        <meta property="og:url" content={pageUrl} />

        <meta name="twitter:card" content="summary" />

        <meta
          name="twitter:title"
          content="Transportadora Envios Flex em São Paulo e Grande SP"
        />

        <meta
          name="twitter:description"
          content="Mercado Livre Envios Flex e Shopee Entrega Direta em São Paulo e Grande SP."
        />

        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#07111d] via-[#070A12] to-[#071827]" />

          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#00e7fe]/10 blur-[140px] rounded-full" />

          <div className="absolute -bottom-52 -left-40 w-[450px] h-[450px] bg-[#00e7fe]/5 blur-[140px] rounded-full" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-24 lg:pt-32 lg:pb-32">
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00e7fe]/30 bg-[#00e7fe]/5 text-[#00e7fe] text-sm font-semibold mb-7">
                <MapPin size={16} />
                Cobertura em São Paulo e Grande SP
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white">
                Transportadora para{' '}
                <span className="text-[#00e7fe]">
                  Mercado Livre Envios Flex
                </span>{' '}
                e{' '}
                <span className="text-[#00e7fe]">
                  Shopee Entrega Direta
                </span>{' '}
                em São Paulo e Grande SP
              </h1>

              <p className="mt-7 text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl">
                A Nobres Entregas realiza coletas programadas para vendedores
                de marketplaces em São Paulo e Região Metropolitana, com
                operação voltada ao Mercado Livre Envios Flex, Shopee Entrega
                Direta e entregas Same Day.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-sm md:text-base text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#00e7fe]" />
                  Coletas programadas
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#00e7fe]" />
                  São Paulo e Grande SP
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#00e7fe]" />
                  Operação para marketplaces
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <button
                  onClick={() => handleWhatsApp('Página de atendimento')}
                  className="inline-flex justify-center items-center gap-2 bg-[#00e7fe] text-[#061018] font-bold px-7 py-4 rounded-xl hover:opacity-90 transition"
                >
                  <Phone size={19} />
                  Consultar minha região
                  <ArrowRight size={19} />
                </button>

                <a
                  href="#regioes"
                  className="inline-flex justify-center items-center gap-2 border border-white/15 bg-white/5 px-7 py-4 rounded-xl text-white font-semibold hover:bg-white/10 transition"
                >
                  <MapPin size={18} />
                  Ver regiões atendidas
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* VISÃO GERAL */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-center">
              <div>
                <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                  Cobertura logística
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                  Uma operação conectada às principais regiões de São Paulo
                </h2>

                <p className="text-slate-400 text-lg mt-5 leading-relaxed">
                  A cobertura da Nobres é organizada de acordo com a origem da
                  coleta, volume da operação e regiões de destino. Isso permite
                  avaliar cada seller de forma adequada antes do início das
                  coletas.
                </p>

                <p className="text-slate-400 text-lg mt-4 leading-relaxed">
                  Atendemos operações na capital e em cidades estratégicas da
                  Região Metropolitana, incluindo polos do ABC, Guarulhos,
                  Osasco e Alto Tietê.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">
                  <Building2 className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white text-lg mt-4">
                    São Paulo Capital
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Atendimento em diferentes zonas e polos comerciais da
                    capital.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">
                  <MapPin className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white text-lg mt-4">
                    Grande São Paulo
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Coletas em cidades estratégicas da Região Metropolitana.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">
                  <PackageCheck className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white text-lg mt-4">
                    Marketplaces
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Operação voltada para sellers do Mercado Livre e Shopee.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">
                  <Route className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white text-lg mt-4">
                    Rotas estruturadas
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Planejamento conforme coleta, volume e destinos da
                    operação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REGIÕES */}
        <section
          id="regioes"
          className="py-24 bg-white/[0.025] border-y border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                Áreas de atendimento
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                Regiões atendidas pela Nobres Entregas
              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">
                Nossa operação atende diferentes regiões de São Paulo e Grande
                São Paulo. A disponibilidade da coleta é analisada conforme o
                endereço e as características da operação.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {coverageGroups.map((group) => (
                <article
                  key={group.title}
                  className="p-7 rounded-2xl bg-[#070A12] border border-white/10 hover:border-[#00e7fe]/30 transition"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#00e7fe]/10 flex items-center justify-center">
                    <MapPin size={21} className="text-[#00e7fe]" />
                  </div>

                  <h3 className="text-xl font-bold text-white mt-5">
                    {group.title}
                  </h3>

                  <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                    {group.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {group.areas.map((area) => (
                      <span
                        key={area}
                        className="text-xs text-slate-300 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.035]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/mercado-livre-envios-flex/regioes-atendidas"
                className="inline-flex items-center gap-2 text-[#00e7fe] font-semibold hover:gap-3 transition-all"
              >
                Consultar cobertura detalhada
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* PÁGINAS REGIONAIS */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                Atendimento regional
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                Encontre a Nobres Entregas na sua cidade
              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">
                Consulte nossas páginas regionais para conhecer melhor a
                operação, áreas atendidas e condições de coleta em cada
                localidade.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {regionalPages.map((regional) => (
                <Link
                  key={regional.city}
                  to={regional.path}
                  className="group relative overflow-hidden p-7 md:p-8 rounded-2xl bg-white/[0.035] border border-white/10 hover:border-[#00e7fe]/40 transition"
                >
                  <div className="absolute -right-16 -top-16 w-44 h-44 bg-[#00e7fe]/5 blur-[60px] rounded-full" />

                  <div className="relative">
                    <div className="flex justify-between gap-5">
                      <div>
                        <span className="text-[#00e7fe] text-sm font-semibold">
                          {regional.region}
                        </span>

                        <h3 className="text-2xl font-bold text-white mt-2">
                          {regional.city}
                        </h3>
                      </div>

                      <div className="w-11 h-11 shrink-0 rounded-xl bg-[#00e7fe]/10 flex items-center justify-center group-hover:bg-[#00e7fe]/15 transition">
                        <ArrowRight
                          size={20}
                          className="text-[#00e7fe] group-hover:translate-x-0.5 transition"
                        />
                      </div>
                    </div>

                    <p className="text-slate-400 mt-5 leading-relaxed">
                      {regional.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {regional.areas.map((area) => (
                        <span
                          key={area}
                          className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300"
                        >
                          {area}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 mt-7 text-[#00e7fe] font-semibold">
                      Ver atendimento em {regional.city}
                      <ArrowRight
                        size={17}
                        className="group-hover:translate-x-1 transition"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl border border-dashed border-white/15 bg-white/[0.02]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div>
                  <h3 className="font-bold text-white text-lg">
                    Sua cidade não aparece na lista?
                  </h3>

                  <p className="text-slate-400 mt-2">
                    Consulte nossa equipe. A disponibilidade pode variar
                    conforme endereço, volume e planejamento da rota.
                  </p>
                </div>

                <button
                  onClick={() => handleWhatsApp('Consulta de outra região')}
                  className="shrink-0 inline-flex justify-center items-center gap-2 border border-[#00e7fe]/30 text-[#00e7fe] font-semibold px-5 py-3 rounded-xl hover:bg-[#00e7fe]/5 transition"
                >
                  Consultar endereço
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* MARKETPLACES */}
        <section className="py-24 bg-white/[0.025] border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                Logística para sellers
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                Mercado Livre Envios Flex e Shopee Entrega Direta
              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">
                Além da cobertura regional, conheça as páginas específicas
                sobre as modalidades de entrega atendidas pela Nobres.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
              <Link
                to="/mercado-livre-envios-flex"
                className="group p-8 rounded-2xl bg-[#070A12] border border-white/10 hover:border-[#00e7fe]/40 transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#00e7fe]/10">
                  <PackageCheck className="text-[#00e7fe]" />
                </div>

                <h3 className="text-2xl font-bold text-white mt-6">
                  Mercado Livre Envios Flex
                </h3>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  Entenda como funciona nossa operação de coleta e distribuição
                  para vendedores que utilizam Mercado Livre Envios Flex.
                </p>

                <span className="inline-flex items-center gap-2 mt-6 text-[#00e7fe] font-semibold">
                  Conhecer operação
                  <ArrowRight
                    size={17}
                    className="group-hover:translate-x-1 transition"
                  />
                </span>
              </Link>

              <Link
                to="/shopee-entrega-direta"
                className="group p-8 rounded-2xl bg-[#070A12] border border-white/10 hover:border-[#00e7fe]/40 transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#00e7fe]/10">
                  <Truck className="text-[#00e7fe]" />
                </div>

                <h3 className="text-2xl font-bold text-white mt-6">
                  Shopee Entrega Direta
                </h3>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  Conheça nossa solução logística para vendedores da Shopee que
                  utilizam Entrega Direta nas regiões atendidas.
                </p>

                <span className="inline-flex items-center gap-2 mt-6 text-[#00e7fe] font-semibold">
                  Conhecer operação
                  <ArrowRight
                    size={17}
                    className="group-hover:translate-x-1 transition"
                  />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                Da sua operação ao destinatário
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                Como funciona o atendimento regional?
              </h2>

              <p className="text-slate-400 text-lg mt-5">
                Antes do início da operação, avaliamos as características da
                coleta e as regiões envolvidas na distribuição.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-14">
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">
                <span className="text-[#00e7fe] font-bold text-lg">01</span>

                <Search className="text-[#00e7fe] mt-5" size={23} />

                <h3 className="font-bold text-white text-lg mt-4">
                  Analisamos a região
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                  Verificamos o endereço da coleta e as características da
                  operação.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">
                <span className="text-[#00e7fe] font-bold text-lg">02</span>

                <PackageCheck className="text-[#00e7fe] mt-5" size={23} />

                <h3 className="font-bold text-white text-lg mt-4">
                  Definimos a coleta
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                  Alinhamos a rotina de retirada conforme volume e condições
                  operacionais.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">
                <span className="text-[#00e7fe] font-bold text-lg">03</span>

                <Route className="text-[#00e7fe] mt-5" size={23} />

                <h3 className="font-bold text-white text-lg mt-4">
                  Organizamos as rotas
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                  Os pedidos são direcionados de acordo com as regiões de
                  entrega previstas.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">
                <span className="text-[#00e7fe] font-bold text-lg">04</span>

                <Truck className="text-[#00e7fe] mt-5" size={23} />

                <h3 className="font-bold text-white text-lg mt-4">
                  Realizamos as entregas
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                  Os volumes seguem para distribuição conforme modalidade e
                  área atendida.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white/[0.025] border-y border-white/10">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                Perguntas frequentes
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                Atendimento e regiões de coleta
              </h2>
            </div>

            <div className="space-y-4">
              <details className="group border border-white/10 rounded-xl p-6 bg-[#070A12]">
                <summary className="cursor-pointer font-semibold text-white">
                  Quais regiões a Nobres Entregas atende?
                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  A Nobres possui operação em São Paulo e diferentes cidades
                  da Grande São Paulo, incluindo Guarulhos, Osasco, São
                  Bernardo do Campo, Mogi das Cruzes e Suzano. A
                  disponibilidade deve ser confirmada conforme o endereço da
                  coleta e as condições da operação.
                </p>
              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-[#070A12]">
                <summary className="cursor-pointer font-semibold text-white">
                  A Nobres atende Mercado Livre Envios Flex?
                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  Sim. Atendemos vendedores que utilizam Mercado Livre Envios
                  Flex nas áreas cobertas pela operação, conforme
                  disponibilidade de coleta e distribuição.
                </p>
              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-[#070A12]">
                <summary className="cursor-pointer font-semibold text-white">
                  A Nobres atende Shopee Entrega Direta?
                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  Sim. Também realizamos operações para vendedores que
                  utilizam Shopee Entrega Direta, de acordo com a área de
                  atendimento e as características da coleta.
                </p>
              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-[#070A12]">
                <summary className="cursor-pointer font-semibold text-white">
                  Minha cidade não está entre as páginas regionais. Posso
                  solicitar atendimento?
                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  Sim. As páginas regionais destacam algumas das localidades
                  atendidas e não representam necessariamente toda a cobertura
                  disponível. Entre em contato para avaliarmos seu endereço.
                </p>
              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-[#070A12]">
                <summary className="cursor-pointer font-semibold text-white">
                  Como saber se existe coleta no meu endereço?
                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  Informe o endereço ou região da coleta, marketplace
                  utilizado e média diária de pacotes. A equipe da Nobres
                  poderá analisar a disponibilidade para sua operação.
                </p>
              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-[#070A12]">
                <summary className="cursor-pointer font-semibold text-white">
                  As entregas podem ser realizadas no mesmo dia?
                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  Trabalhamos com operações Same Day. A possibilidade de
                  entrega no mesmo dia depende da modalidade, horário da
                  coleta, região de destino e condições definidas para a
                  operação.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-[#00e7fe]/20 bg-gradient-to-r from-[#081626] to-[#07101c] px-8 py-14 md:px-14">
              <div className="absolute right-0 top-0 w-80 h-80 bg-[#00e7fe]/10 blur-[100px] rounded-full" />

              <div className="relative max-w-3xl">
                <span className="text-[#00e7fe] font-semibold">
                  Consulte sua região
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                  Quer saber se a Nobres pode coletar na sua operação?
                </h2>

                <p className="text-slate-300 text-lg mt-5 leading-relaxed">
                  Informe sua localização, marketplace e média diária de
                  pacotes para avaliarmos a disponibilidade de atendimento.
                </p>

                <button
                  onClick={() => handleWhatsApp('CTA final - atendimento')}
                  className="inline-flex items-center gap-2 mt-8 bg-[#00e7fe] text-[#061018] font-bold px-7 py-4 rounded-xl hover:opacity-90 transition"
                >
                  <Phone size={19} />
                  Consultar minha região
                  <ArrowRight size={19} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
