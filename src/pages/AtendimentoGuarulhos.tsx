import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Truck,
} from 'lucide-react';

export const AtendimentoGuarulhos: React.FC = () => {
  const pageUrl =
    'https://www.nbrsenviosflex.com.br/atendimento/guarulhos';

  const handleWhatsApp = (assunto: string) => {
    // Evento de conversão do Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-18438688462/gHDyCJu7uvEcEM6doNhE',
        value: 1.0,
        currency: 'BRL',
      });
    }

    const text = `Olá! Gostaria de uma cotação para coletas e entregas em Guarulhos (${assunto}).`;

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
      'Transportadora Mercado Livre Envios Flex e Shopee Entrega Direta em Guarulhos',

    description:
      'Serviço de coleta e entrega para vendedores do Mercado Livre Envios Flex e Shopee Entrega Direta em Guarulhos, São Paulo.',

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
      name: 'Guarulhos',
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
        <title>
          Transportadora Envios Flex em Guarulhos | Mercado Livre e Shopee
        </title>

        <meta
          name="description"
          content="Transportadora para Mercado Livre Envios Flex e Shopee Entrega Direta em Guarulhos. Coletas diárias e entregas Same Day em São Paulo e Grande SP."
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
          content="Transportadora Envios Flex em Guarulhos | Nobres Entregas"
        />

        <meta
          property="og:description"
          content="Coletas para Mercado Livre Envios Flex e Shopee Entrega Direta em Guarulhos, com operação Same Day em São Paulo e Grande SP."
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
          content="Transportadora Envios Flex em Guarulhos | Nobres Entregas"
        />

        <meta
          name="twitter:description"
          content="Mercado Livre Envios Flex e Shopee Entrega Direta em Guarulhos com coleta diária e operação Same Day."
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

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00e7fe]/30 bg-[#00e7fe]/5 text-[#00e7fe] text-sm font-semibold mb-7">

                <MapPin size={16} />

                Atendimento em Guarulhos - SP

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

                {' '}em Guarulhos

              </h1>

              {/* Descrição */}
              <p className="mt-7 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">

                A Nobres Entregas realiza coletas para vendedores do
                Mercado Livre e Shopee em Guarulhos, com operação
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

                  Coletas diárias
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

                  Suporte operacional
                </div>

              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <button
                  onClick={() => handleWhatsApp('Hero Guarulhos')}
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
                Mercado Livre Envios Flex e Shopee Entrega Direta em Guarulhos
              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                Atendemos vendedores, lojas, centros de distribuição
                e operações de e-commerce localizados em Guarulhos que
                precisam de uma transportadora especializada em coleta,
                última milha e entregas no mesmo dia.

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

                  Coleta para vendedores que utilizam Mercado Livre
                  Envios Flex e precisam despachar seus pedidos a partir
                  de Guarulhos com agilidade e acompanhamento operacional.

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

                  Solução logística para vendedores da Shopee que
                  utilizam Entrega Direta e buscam coleta e distribuição
                  de pedidos a partir de Guarulhos.

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

                Como funciona a coleta em Guarulhos?

              </h2>

              <p className="text-slate-400 text-lg mt-5">

                Organizamos a retirada e distribuição dos pedidos para
                tornar sua operação de e-commerce mais previsível e
                eficiente.

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
                  combinado em Guarulhos.

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
                  de entrega previstas na operação.

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

                  Os volumes seguem para entrega conforme a modalidade e
                  a região de destino.

                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* DIFERENCIAIS / GUARULHOS */}
        {/* ========================================= */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                  Atendimento regional
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Transportadora para vendedores e empresas de Guarulhos

                </h2>

                <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                  Guarulhos possui uma forte concentração de empresas,
                  centros logísticos, galpões e operações de e-commerce.
                  A Nobres Entregas atende vendedores da região que
                  precisam de coleta e distribuição para suas vendas em
                  marketplaces.

                </p>

                <p className="text-slate-400 text-lg mt-4 leading-relaxed">

                  Nossa estrutura atende operações de Mercado Livre
                  Envios Flex, Shopee Entrega Direta e demandas de
                  logística Same Day com origem em Guarulhos e
                  distribuição para São Paulo e Grande São Paulo.

                </p>

              </div>

              <div className="grid sm:grid-cols-2 gap-5">

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <Clock className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white mt-4">
                    Coletas diárias
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Coleta organizada conforme as condições da sua operação.
                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <Truck className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white mt-4">
                    Operação Same Day
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Estrutura preparada para operações com entrega no mesmo dia.
                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <ShieldCheck className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white mt-4">
                    SLA operacional
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Acompanhamento da operação com foco em prazo e qualidade.
                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <MapPin className="text-[#00e7fe]" />

                  <h3 className="font-bold text-white mt-4">
                    Guarulhos e região
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Atendimento para diferentes polos comerciais e logísticos.
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

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Bairros e regiões atendidas em Guarulhos

              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                A operação pode atender vendedores, empresas, lojas e
                galpões localizados em diferentes regiões de Guarulhos.
                Consulte nossa equipe para confirmar a disponibilidade
                da coleta no seu endereço.

              </p>

            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">

              {[
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
              ].map((bairro) => (
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
        {/* LINKS INTERNOS */}
        {/* ========================================= */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl">

              <h2 className="text-3xl font-bold text-white">
                Conheça nossas soluções para marketplaces
              </h2>

              <p className="text-slate-400 mt-4">

                Veja outras páginas da Nobres Entregas e entenda melhor
                como funcionam nossas operações para Mercado Livre e Shopee.

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

        <section className="py-24 bg-white/[0.025] border-y border-white/10">

          <div className="max-w-4xl mx-auto px-6 lg:px-8">

            <div className="text-center mb-12">

              <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                Perguntas frequentes
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Envios Flex e Shopee Entrega Direta em Guarulhos

              </h2>

            </div>

            <div className="space-y-4">

              <details className="group border border-white/10 rounded-xl p-6 bg-[#070A12]">

                <summary className="cursor-pointer font-semibold text-white">

                  A Nobres coleta Mercado Livre Envios Flex em Guarulhos?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  Sim. A Nobres Entregas atende vendedores que utilizam
                  Mercado Livre Envios Flex em Guarulhos, conforme
                  disponibilidade operacional e área de coleta.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-[#070A12]">

                <summary className="cursor-pointer font-semibold text-white">

                  A Nobres trabalha com Shopee Entrega Direta em Guarulhos?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  Sim. Atendemos operações de Shopee Entrega Direta para
                  vendedores localizados em Guarulhos, conforme as
                  condições da operação e área de atendimento.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-[#070A12]">

                <summary className="cursor-pointer font-semibold text-white">

                  A Nobres coleta em Cumbica e Bonsucesso?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  Essas regiões fazem parte das áreas atendidas pela
                  operação. A disponibilidade de coleta deve ser
                  confirmada de acordo com o endereço e o volume diário
                  de pedidos.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-[#070A12]">

                <summary className="cursor-pointer font-semibold text-white">

                  As entregas são feitas no mesmo dia?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  A Nobres trabalha com operações Same Day. As condições
                  de entrega dependem do horário da coleta, endereço de
                  destino e modalidade contratada.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-[#070A12]">

                <summary className="cursor-pointer font-semibold text-white">

                  Qual é o horário de coleta em Guarulhos?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  Os horários são definidos conforme a rota e a operação
                  contratada. Fale com nossa equipe comercial para
                  verificarmos o melhor horário disponível para seu
                  endereço em Guarulhos.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-[#070A12]">

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

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="relative overflow-hidden rounded-3xl border border-[#00e7fe]/20 bg-gradient-to-r from-[#081626] to-[#07101c] px-8 py-14 md:px-14">

              <div className="absolute right-0 top-0 w-80 h-80 bg-[#00e7fe]/10 blur-[100px] rounded-full" />

              <div className="relative max-w-3xl">

                <span className="text-[#00e7fe] font-semibold">
                  Nobres Entregas em Guarulhos
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Precisa de uma transportadora para seus pedidos do
                  Mercado Livre ou Shopee?

                </h2>

                <p className="text-slate-300 text-lg mt-5">

                  Fale com nossa equipe e solicite uma análise da sua
                  operação de coleta em Guarulhos.

                </p>

                <button
                  onClick={() => handleWhatsApp('CTA Final Guarulhos')}
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
