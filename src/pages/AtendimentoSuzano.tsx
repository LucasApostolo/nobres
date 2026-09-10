import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Truck,
} from 'lucide-react';

export function AtendimentoSuzano() {
  const pageUrl =
    'https://www.nbrsenviosflex.com.br/atendimento/suzano';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',

    name:
      'Transportadora Mercado Livre Envios Flex e Shopee Entrega Direta em Suzano',

    description:
      'Serviço de coleta e entrega para vendedores do Mercado Livre Envios Flex e Shopee Entrega Direta em Suzano, São Paulo.',

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
      name: 'Suzano',
      containedInPlace: {
        '@type': 'State',
        name: 'São Paulo',
      },
    },
  };

  return (
    <>
      {/* ========================================= */}
      {/* SEO */}
      {/* ========================================= */}

      <Helmet>

        {/* Title */}
        <title>
          Transportadora Envios Flex em Suzano | Mercado Livre e Shopee
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Transportadora para Mercado Livre Envios Flex e Shopee Entrega Direta em Suzano. Coletas diárias e entregas no mesmo dia em São Paulo e Grande SP."
        />

        {/* Indexação */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        {/* Canonical */}
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
          content="Transportadora Envios Flex em Suzano | Nobres Entregas"
        />

        <meta
          property="og:description"
          content="Coletas para Mercado Livre Envios Flex e Shopee Entrega Direta em Suzano, com operação Same Day em São Paulo e Grande SP."
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
          content="Transportadora Envios Flex em Suzano | Nobres Entregas"
        />

        <meta
          name="twitter:description"
          content="Mercado Livre Envios Flex e Shopee Entrega Direta em Suzano com coleta diária e operação Same Day."
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

          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#07111d] via-[#070A12] to-[#071827]" />

          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#00e7fe]/10 blur-[140px] rounded-full" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-24 lg:pt-32 lg:pb-32">

            <div className="max-w-4xl">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00e7fe]/30 bg-[#00e7fe]/5 text-[#00e7fe] text-sm font-semibold mb-7">

                <MapPin size={16} />

                Atendimento em Suzano - SP

              </div>

              {/* H1 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white">

                Transportadora para{' '}

                <span className="text-[#00e7fe]">
                  Mercado Livre Envios Flex
                </span>

                {' '}e{' '}

                <span className="text-[#00e7fe]">
                  Shopee Entrega Direta
                </span>

                {' '}em Suzano

              </h1>

              {/* Descrição */}
              <p className="mt-7 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">

                A Nobres Entregas realiza coletas para vendedores do
                Mercado Livre e Shopee em Suzano, com operação
                especializada em Mercado Livre Envios Flex e Shopee
                Entrega Direta. Conte com coletas programadas e
                entregas no mesmo dia em São Paulo e Grande São Paulo.

              </p>

              {/* Benefícios */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-sm md:text-base text-slate-300">

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={18}
                    className="text-[#00e7fe]"
                  />

                  Coleta programada
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={18}
                    className="text-[#00e7fe]"
                  />

                  Entrega Same Day
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={18}
                    className="text-[#00e7fe]"
                  />

                  Suporte operacional
                </div>

              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <a
                  href="https://wa.me/5511961741039?text=Olá!%20Gostaria%20de%20uma%20cotação%20para%20coletas%20em%20Suzano."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-[#00e7fe] text-[#061018] font-bold px-7 py-4 rounded-xl hover:opacity-90 transition"
                >

                  Quero cotar minha operação

                  <ArrowRight size={19} />

                </a>

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
                Mercado Livre Envios Flex e Shopee Entrega Direta em Suzano
              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                Atendemos vendedores e operações de e-commerce
                localizados em Suzano que precisam de uma transportadora
                especializada em coletas e entregas de última milha.

              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Mercado Livre */}
              <article className="p-8 rounded-2xl bg-white/[0.035] border border-white/10">

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#00e7fe]/10 mb-6">

                  <PackageCheck className="text-[#00e7fe]" />

                </div>

                <h3 className="text-2xl font-bold text-white">

                  Mercado Livre Envios Flex

                </h3>

                <p className="mt-4 text-slate-400 leading-relaxed">

                  Solução de coleta para vendedores que utilizam o
                  Mercado Livre Envios Flex e precisam despachar seus
                  pedidos com agilidade a partir de Suzano.

                </p>

                <Link
                  to="/mercado-livre-envios-flex"
                  className="inline-flex items-center gap-2 mt-6 text-[#00e7fe] font-semibold hover:gap-3 transition-all"
                >

                  Conhecer Envios Flex

                  <ArrowRight size={17} />

                </Link>

              </article>

              {/* Shopee */}
              <article className="p-8 rounded-2xl bg-white/[0.035] border border-white/10">

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#00e7fe]/10 mb-6">

                  <Truck className="text-[#00e7fe]" />

                </div>

                <h3 className="text-2xl font-bold text-white">

                  Shopee Entrega Direta

                </h3>

                <p className="mt-4 text-slate-400 leading-relaxed">

                  Operação direcionada para vendedores da Shopee que
                  utilizam Entrega Direta e buscam uma solução logística
                  para coleta e distribuição dos pedidos.

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

                Como funciona a coleta em Suzano?

              </h2>

              <p className="text-slate-400 text-lg mt-5">

                A Nobres organiza a coleta e distribuição dos pedidos
                para tornar sua operação diária mais simples e previsível.

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

                  Organize os volumes vendidos no Mercado Livre ou Shopee
                  para a coleta.

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
                  combinado em Suzano.

                </p>

              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-[#070A12]">

                <span className="text-[#00e7fe] font-bold text-lg">
                  03
                </span>

                <h3 className="font-bold text-white text-lg mt-4">
                  Distribuição
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">

                  Os pedidos são organizados e direcionados para as rotas
                  de entrega.

                </p>

              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-[#070A12]">

                <span className="text-[#00e7fe] font-bold text-lg">
                  04
                </span>

                <h3 className="font-bold text-white text-lg mt-4">
                  Entrega ao cliente
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">

                  Os volumes seguem para entrega dentro da operação
                  contratada.

                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* DIFERENCIAIS */}
        {/* ========================================= */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                  Atendimento regional
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Transportadora para vendedores de Suzano

                </h2>

                <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                  Nossa operação atende empresas e vendedores de
                  marketplaces localizados em Suzano que buscam agilidade
                  na coleta e distribuição de seus pedidos.

                </p>

                <p className="text-slate-400 text-lg mt-4 leading-relaxed">

                  A estrutura da Nobres Entregas foi desenvolvida para
                  apoiar operações de Mercado Livre Envios Flex, Shopee
                  Entrega Direta e outras demandas de logística Same Day.

                </p>

              </div>

              <div className="grid sm:grid-cols-2 gap-5">

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <Clock className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white mt-4">
                    Coletas programadas
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Organização da coleta conforme sua operação.
                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <Truck className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white mt-4">
                    Operação Same Day
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Estrutura preparada para entregas no mesmo dia.
                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <ShieldCheck className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white mt-4">
                    Suporte operacional
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Atendimento para acompanhamento da operação.
                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <MapPin className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white mt-4">
                    Suzano e região
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Atendimento direcionado para vendedores da região.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* LINKS INTERNOS */}
        {/* ========================================= */}

        <section className="py-20 bg-white/[0.025] border-y border-white/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl">

              <h2 className="text-3xl font-bold text-white">
                Conheça nossas soluções para marketplaces
              </h2>

              <p className="text-slate-400 mt-4">

                Saiba mais sobre as operações oferecidas pela Nobres
                Entregas para vendedores de e-commerce.

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
                  Veja como funciona nossa operação para vendedores do
                  Mercado Livre.
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
                  Conheça nossa solução para vendedores da Shopee.
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
                  Consulte outras regiões atendidas pela Nobres Entregas.
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

                Envios Flex e Shopee Entrega Direta em Suzano

              </h2>

            </div>

            <div className="space-y-4">

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  A Nobres coleta Mercado Livre Envios Flex em Suzano?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  Sim. A Nobres Entregas possui operação de coleta para
                  vendedores que utilizam Mercado Livre Envios Flex em
                  Suzano, conforme disponibilidade operacional e área de
                  atendimento.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  A Nobres trabalha com Shopee Entrega Direta em Suzano?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  Sim. Atendemos operações de Shopee Entrega Direta para
                  vendedores localizados em Suzano, de acordo com a
                  cobertura e condições da operação.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  As entregas são realizadas no mesmo dia?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  A Nobres trabalha com operações de entrega Same Day.
                  As condições e horários podem variar conforme coleta,
                  região de destino e modalidade contratada.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  Como solicitar uma cotação para Suzano?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  Entre em contato com nosso atendimento comercial e
                  informe a localização da coleta e a média diária de
                  pedidos para analisarmos sua operação.

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
                  Nobres Entregas em Suzano
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Precisa de uma transportadora para seus pedidos do
                  Mercado Livre ou Shopee?

                </h2>

                <p className="text-slate-300 text-lg mt-5">

                  Fale com nossa equipe e solicite uma análise da sua
                  operação de coleta em Suzano.

                </p>

                <a
                  href="https://wa.me/5511961741039?text=Olá!%20Gostaria%20de%20uma%20cotação%20para%20coletas%20em%20Suzano."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 bg-[#00e7fe] text-[#061018] font-bold px-7 py-4 rounded-xl hover:opacity-90 transition"
                >

                  Solicitar cotação

                  <ArrowRight size={19} />

                </a>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}
