import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Truck,
} from 'lucide-react';

export const AtendimentoSaoBernardoDoCampo: React.FC = () => {
  const pageUrl =
    'https://www.nbrsenviosflex.com.br/atendimento/sao-bernardo-do-campo';

  const handleWhatsApp = (origem: string) => {
    // Dispara evento de conversão do Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-18438688462/gHDyCJu7uvEcEM6doNhE',
        value: 1.0,
        currency: 'BRL',
      });
    }

    const text = `Olá! Gostaria de uma cotação para coletas e entregas em São Bernardo do Campo (${origem}).`;

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
      'Transportadora Mercado Livre Envios Flex e Shopee Entrega Direta em São Bernardo do Campo',

    description:
      'Serviço de coleta e entrega para vendedores do Mercado Livre Envios Flex e Shopee Entrega Direta em São Bernardo do Campo e região do ABC Paulista.',

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

    areaServed: {
      '@type': 'City',
      name: 'São Bernardo do Campo',
      containedInPlace: {
        '@type': 'State',
        name: 'São Paulo',
      },
    },
  };

  const bairros = [
    'Centro',
    'Rudge Ramos',
    'Paulicéia',
    'Demarchi',
    'Baeta Neves',
    'Assunção',
    'Jardim do Mar',
    'Nova Petrópolis',
    'Taboão',
    'Alvarenga',
    'Ferrazópolis',
    'Anchieta',
  ];

  return (
    <>
      {/* ========================================= */}
      {/* SEO */}
      {/* ========================================= */}

      <Helmet>
        <title>
          Transportadora Envios Flex em São Bernardo do Campo | Mercado Livre e Shopee
        </title>

        <meta
          name="description"
          content="Transportadora para Mercado Livre Envios Flex e Shopee Entrega Direta em São Bernardo do Campo. Coletas programadas e entregas Same Day no ABC e Grande SP."
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
          content="Transportadora Envios Flex em São Bernardo do Campo | Nobres Entregas"
        />

        <meta
          property="og:description"
          content="Coletas para Mercado Livre Envios Flex e Shopee Entrega Direta em São Bernardo do Campo, com operação Same Day no ABC Paulista e Grande São Paulo."
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
          content="Transportadora Envios Flex em São Bernardo do Campo | Nobres Entregas"
        />

        <meta
          name="twitter:description"
          content="Mercado Livre Envios Flex e Shopee Entrega Direta em São Bernardo do Campo com coleta programada e operação Same Day."
        />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <main>

        {/* ========================================= */}
        {/* HERO */}
        {/* ========================================= */}

        <section className="relative overflow-hidden border-b border-white/10">

          <div className="absolute inset-0 bg-gradient-to-br from-[#07111d] via-[#070A12] to-[#071827]" />

          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#00e7fe]/10 blur-[140px] rounded-full" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-24 lg:pt-32 lg:pb-32">

            <div className="max-w-4xl">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00e7fe]/30 bg-[#00e7fe]/5 text-[#00e7fe] text-sm font-semibold mb-7">

                <MapPin size={16} />

                Atendimento em São Bernardo do Campo - SP

              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white">

                Transportadora para{' '}

                <span className="text-[#00e7fe]">
                  Mercado Livre Envios Flex
                </span>

                {' '}e{' '}

                <span className="text-[#00e7fe]">
                  Shopee Entrega Direta
                </span>

                {' '}em São Bernardo do Campo

              </h1>

              <p className="mt-7 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">

                A Nobres Entregas realiza coletas para vendedores do
                Mercado Livre e Shopee em São Bernardo do Campo, com
                operação especializada em Mercado Livre Envios Flex e
                Shopee Entrega Direta. Atendemos operações com origem
                no ABC Paulista e distribuição para São Paulo e Grande
                São Paulo.

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

                  Operação Same Day
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={18}
                    className="text-[#00e7fe]"
                  />

                  Atendimento no ABC Paulista
                </div>

              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <button
                  onClick={() =>
                    handleWhatsApp('Hero São Bernardo do Campo')
                  }
                  className="inline-flex justify-center items-center gap-2 bg-[#00e7fe] text-[#061018] font-bold px-7 py-4 rounded-xl hover:opacity-90 transition"
                >

                  <Phone size={19} />

                  Quero cotar minha operação

                  <ArrowRight size={19} />

                </button>

                <a
                  href="#como-funciona"
                  className="inline-flex justify-center items-center gap-2 border border-white/15 bg-white/5 px-7 py-4 rounded-xl text-white font-semibold hover:bg-white/10 transition"
                >

                  Como funciona a coleta

                </a>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* SERVIÇOS */}
        {/* ========================================= */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl mb-12">

              <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                Logística para marketplaces
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Mercado Livre Envios Flex e Shopee Entrega Direta em São Bernardo do Campo

              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                Atendemos vendedores, lojas, centros de distribuição e
                operações de e-commerce localizados em São Bernardo do
                Campo que precisam de uma transportadora especializada
                em coleta, última milha e entregas no mesmo dia.

              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <article className="p-8 rounded-2xl bg-white/[0.035] border border-white/10">

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#00e7fe]/10 mb-6">

                  <PackageCheck className="text-[#00e7fe]" />

                </div>

                <h3 className="text-2xl font-bold text-white">
                  Mercado Livre Envios Flex
                </h3>

                <p className="mt-4 text-slate-400 leading-relaxed">

                  Coleta para vendedores que utilizam Mercado Livre
                  Envios Flex e precisam despachar seus pedidos a partir
                  de São Bernardo do Campo com agilidade e
                  acompanhamento operacional.

                </p>

                <Link
                  to="/mercado-livre-envios-flex"
                  className="inline-flex items-center gap-2 mt-6 text-[#00e7fe] font-semibold hover:gap-3 transition-all"
                >

                  Conhecer Envios Flex

                  <ArrowRight size={17} />

                </Link>

              </article>

              <article className="p-8 rounded-2xl bg-white/[0.035] border border-white/10">

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#00e7fe]/10 mb-6">

                  <Truck className="text-[#00e7fe]" />

                </div>

                <h3 className="text-2xl font-bold text-white">
                  Shopee Entrega Direta
                </h3>

                <p className="mt-4 text-slate-400 leading-relaxed">

                  Solução logística para vendedores da Shopee que
                  utilizam Entrega Direta e precisam de coleta e
                  distribuição com origem em São Bernardo do Campo.

                </p>

                <Link
                  to="/shopee-entrega-direta"
                  className="inline-flex items-center gap-2 mt-6 text-[#00e7fe] font-semibold hover:gap-3 transition-all"
                >

                  Conhecer Shopee Entrega Direta

                  <ArrowRight size={17} />

                </Link>

              </article>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* COMO FUNCIONA */}
        {/* ========================================= */}

        <section
          id="como-funciona"
          className="py-24 bg-white/[0.025] border-y border-white/10"
        >

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl mx-auto text-center">

              <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                Processo simples
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Como funciona a coleta em São Bernardo do Campo?

              </h2>

              <p className="text-slate-400 text-lg mt-5">

                Organizamos a retirada e distribuição dos pedidos para
                tornar sua operação de e-commerce mais simples,
                previsível e eficiente.

              </p>

            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-14">

              <div className="p-6 rounded-2xl border border-white/10 bg-[#070A12]">

                <span className="text-[#00e7fe] font-bold text-lg">
                  01
                </span>

                <h3 className="font-bold text-white text-lg mt-4">
                  Prepare os pedidos
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">

                  Organize os volumes vendidos no Mercado Livre ou
                  Shopee para a coleta.

                </p>

              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-[#070A12]">

                <span className="text-[#00e7fe] font-bold text-lg">
                  02
                </span>

                <h3 className="font-bold text-white text-lg mt-4">
                  Realizamos a coleta
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">

                  Nossa operação realiza a retirada dos pedidos no local
                  combinado em São Bernardo do Campo.

                </p>

              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-[#070A12]">

                <span className="text-[#00e7fe] font-bold text-lg">
                  03
                </span>

                <h3 className="font-bold text-white text-lg mt-4">
                  Organização das rotas
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">

                  Os pedidos são separados e direcionados para as rotas
                  previstas na operação.

                </p>

              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-[#070A12]">

                <span className="text-[#00e7fe] font-bold text-lg">
                  04
                </span>

                <h3 className="font-bold text-white text-lg mt-4">
                  Entrega ao comprador
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">

                  Os volumes seguem para entrega conforme a modalidade,
                  horário e região de destino.

                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* ABC PAULISTA */}
        {/* ========================================= */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                  Atendimento regional
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Transportadora para vendedores e empresas de São Bernardo do Campo

                </h2>

                <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                  São Bernardo do Campo possui uma forte concentração
                  industrial, comercial e logística no ABC Paulista.
                  A Nobres Entregas atende vendedores, lojas, empresas
                  e operações de e-commerce que precisam organizar a
                  coleta dos pedidos vendidos em marketplaces.

                </p>

                <p className="text-slate-400 text-lg mt-4 leading-relaxed">

                  Nossa operação conecta coletas realizadas em São
                  Bernardo do Campo às rotas de distribuição para o
                  próprio ABC, São Paulo e demais regiões atendidas pela
                  Nobres Entregas.

                </p>

              </div>

              <div className="grid sm:grid-cols-2 gap-5">

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <Clock className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white mt-4">
                    Coletas programadas
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Janela de coleta organizada conforme sua operação.
                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <Truck className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white mt-4">
                    Operação Same Day
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Estrutura direcionada para operações com entrega no mesmo dia.
                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <ShieldCheck className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white mt-4">
                    Acompanhamento operacional
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Suporte para acompanhamento das etapas da operação.
                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <MapPin className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white mt-4">
                    ABC Paulista
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Atendimento com origem em São Bernardo do Campo.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* BAIRROS */}
        {/* ========================================= */}

        <section className="py-24 bg-white/[0.025] border-y border-white/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl">

              <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                Cobertura local
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 flex items-center gap-3">

                <Building2 className="text-[#00e7fe] shrink-0" />

                Bairros e regiões atendidas em São Bernardo do Campo

              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                A operação pode atender vendedores, empresas, lojas,
                residências comerciais e galpões localizados em
                diferentes regiões de São Bernardo do Campo. Consulte
                nossa equipe para confirmar a disponibilidade da coleta
                no seu endereço.

              </p>

            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">

              {bairros.map((bairro) => (
                <div
                  key={bairro}
                  className="flex items-center gap-2 p-4 rounded-xl bg-white/[0.035] border border-white/10 text-slate-300"
                >

                  <CheckCircle2
                    size={17}
                    className="text-[#00e7fe] shrink-0"
                  />

                  <span className="text-sm font-medium">
                    {bairro}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* CONTEÚDO LOCAL */}
        {/* ========================================= */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-4xl">

              <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                Operação local
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Logística para e-commerce no ABC Paulista

              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                São Bernardo do Campo possui grande movimentação
                comercial, industrial e de distribuição, com fácil
                conexão às demais cidades do ABC e à capital paulista.
                Para vendedores de marketplaces, isso torna a
                organização da coleta e da última milha uma parte
                importante da operação.

              </p>

              <p className="text-slate-400 text-lg mt-4 leading-relaxed">

                A Nobres Entregas trabalha com operações de coleta e
                distribuição voltadas ao e-commerce, permitindo que
                vendedores de São Bernardo do Campo concentrem a
                expedição dos seus pedidos em um fluxo operacional
                organizado.

              </p>

              <div className="mt-8">

                <Link
                  to="/mercado-livre-envios-flex/como-ativar"
                  className="inline-flex items-center gap-2 text-[#00e7fe] font-semibold hover:gap-3 transition-all"
                >

                  Veja como ativar o Mercado Livre Envios Flex

                  <ArrowRight size={17} />

                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* LINKS INTERNOS */}
        {/* ========================================= */}

        <section className="py-24 bg-white/[0.025] border-y border-white/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl">

              <h2 className="text-3xl font-bold text-white">
                Conheça nossas soluções para marketplaces
              </h2>

              <p className="text-slate-400 mt-4">

                Veja outras páginas da Nobres Entregas e conheça melhor
                nossas soluções para Mercado Livre, Shopee e operações
                de entrega Same Day.

              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-5 mt-10">

              <Link
                to="/mercado-livre-envios-flex"
                className="p-6 border border-white/10 rounded-xl hover:border-[#00e7fe]/40 transition"
              >

                <h3 className="font-bold text-white">
                  Mercado Livre Envios Flex
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Conheça nossa operação para vendedores do Mercado Livre.
                </p>

              </Link>

              <Link
                to="/shopee-entrega-direta"
                className="p-6 border border-white/10 rounded-xl hover:border-[#00e7fe]/40 transition"
              >

                <h3 className="font-bold text-white">
                  Shopee Entrega Direta
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Veja como funciona nossa solução para vendedores da Shopee.
                </p>

              </Link>

              <Link
                to="/mercado-livre-envios-flex/regioes-atendidas"
                className="p-6 border border-white/10 rounded-xl hover:border-[#00e7fe]/40 transition"
              >

                <h3 className="font-bold text-white">
                  Regiões atendidas
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Consulte outras cidades e regiões atendidas pela Nobres.
                </p>

              </Link>

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

                Envios Flex e Shopee Entrega Direta em São Bernardo do Campo

              </h2>

            </div>

            <div className="space-y-4">

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  A Nobres coleta Mercado Livre Envios Flex em São Bernardo do Campo?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  Sim. A Nobres Entregas atende vendedores que utilizam
                  Mercado Livre Envios Flex em São Bernardo do Campo,
                  conforme disponibilidade operacional e área de coleta.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  A Nobres trabalha com Shopee Entrega Direta em São Bernardo?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  Sim. Atendemos operações de Shopee Entrega Direta para
                  vendedores localizados em São Bernardo do Campo, de
                  acordo com a cobertura e as condições da operação.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  Quais bairros de São Bernardo podem ter coleta?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  A operação pode atender diferentes regiões da cidade,
                  incluindo Centro, Rudge Ramos, Paulicéia, Demarchi,
                  Baeta Neves, Assunção, Jardim do Mar e outras áreas.
                  A disponibilidade deve ser confirmada conforme o
                  endereço.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  As entregas são realizadas no mesmo dia?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  A Nobres trabalha com operações Same Day. As condições
                  de entrega variam conforme horário da coleta, endereço
                  do destinatário e modalidade contratada.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  Qual é o horário de coleta em São Bernardo do Campo?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  A janela de coleta é definida conforme endereço, volume
                  de pedidos, rota disponível e necessidade operacional
                  do vendedor.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  Como solicitar uma cotação?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  Informe sua região de coleta, endereço aproximado,
                  marketplace utilizado e média diária de pacotes. Nossa
                  equipe poderá avaliar a operação e apresentar as
                  condições de atendimento.

                </p>

              </details>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* CTA FINAL */}
        {/* ========================================= */}

        <section className="pb-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="relative overflow-hidden rounded-3xl border border-[#00e7fe]/20 bg-gradient-to-r from-[#081626] to-[#07101c] px-8 py-14 md:px-14">

              <div className="absolute right-0 top-0 w-80 h-80 bg-[#00e7fe]/10 blur-[100px] rounded-full" />

              <div className="relative max-w-3xl">

                <span className="text-[#00e7fe] font-semibold">
                  Nobres Entregas em São Bernardo do Campo
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Precisa de uma transportadora para seus pedidos do
                  Mercado Livre ou Shopee?

                </h2>

                <p className="text-slate-300 text-lg mt-5">

                  Fale com nossa equipe e solicite uma análise da sua
                  operação de coleta em São Bernardo do Campo.

                </p>

                <button
                  onClick={() =>
                    handleWhatsApp('CTA Final São Bernardo do Campo')
                  }
                  className="inline-flex items-center gap-2 mt-8 bg-[#00e7fe] text-[#061018] font-bold px-7 py-4 rounded-xl hover:opacity-90 transition"
                >

                  Solicitar cotação

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
