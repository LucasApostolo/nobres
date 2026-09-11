import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  MapPin,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Truck,
  Zap,
} from 'lucide-react';

export const ShopeeDireta: React.FC = () => {
  const pageUrl =
    'https://www.nbrsenviosflex.com.br/shopee-entrega-direta';

  const handleWhatsAppRedirect = (assunto?: string) => {
    // Dispara evento de conversão do Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-18438688462/gHDyCJu7uvEcEM6doNhE',
        value: 1.0,
        currency: 'BRL',
      });
    }

    const text = assunto
      ? `Olá! Gostaria de saber mais sobre a operação da Nobres Entregas para Shopee Entrega Direta: ${assunto}.`
      : 'Olá! Gostaria de uma cotação para coletas e entregas da Shopee Entrega Direta.';

    window.open(
      `https://wa.me/5511980224789?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',

    name: 'Transportadora para Shopee Entrega Direta em São Paulo',

    description:
      'Serviço de coleta e entrega para vendedores da Shopee Entrega Direta em São Paulo e Grande São Paulo, com operação de última milha e entregas Same Day conforme cobertura operacional.',

    url: pageUrl,

    serviceType: [
      'Shopee Entrega Direta',
      'Transportadora para Shopee',
      'Entrega Same Day',
      'Coleta para e-commerce',
      'Logística para marketplaces',
      'Última milha',
    ],

    provider: {
      '@type': 'Organization',
      name: 'Nobres Entregas',
      url: 'https://www.nbrsenviosflex.com.br',
    },

    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'São Paulo e Grande São Paulo',
    },
  };

  const regioes = [
    {
      nome: 'Guarulhos',
      url: '/atendimento/guarulhos',
      descricao:
        'Coletas para vendedores da Shopee em Guarulhos e região.',
    },
    {
      nome: 'Osasco',
      url: '/atendimento/osasco',
      descricao:
        'Operação para sellers localizados em Osasco e Zona Oeste.',
    },
    {
      nome: 'Suzano',
      url: '/atendimento/suzano',
      descricao:
        'Atendimento para vendedores da Shopee em Suzano.',
    },
    {
      nome: 'Mogi das Cruzes',
      url: '/atendimento/mogi-das-cruzes',
      descricao:
        'Coletas no Alto Tietê com origem em Mogi das Cruzes.',
    },
    {
      nome: 'São Bernardo do Campo',
      url: '/atendimento/sao-bernardo-do-campo',
      descricao:
        'Operação de coleta no ABC Paulista a partir de São Bernardo.',
    },
  ];

  return (
    <>
      {/* ========================================= */}
      {/* SEO */}
      {/* ========================================= */}

      <Helmet>
        <title>
          Transportadora Shopee Entrega Direta em SP | Nobres Entregas
        </title>

        <meta
          name="description"
          content="Transportadora para Shopee Entrega Direta em São Paulo. Coletas programadas para sellers e entregas Same Day em SP e Grande São Paulo."
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
          content="Transportadora para Shopee Entrega Direta em São Paulo"
        />

        <meta
          property="og:description"
          content="Coletas programadas para vendedores da Shopee Entrega Direta em São Paulo e Grande São Paulo, com operação de última milha e Same Day."
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
          content="Transportadora Shopee Entrega Direta em SP | Nobres Entregas"
        />

        <meta
          name="twitter:description"
          content="Coletas para sellers da Shopee Entrega Direta em São Paulo, com operação de última milha e entregas Same Day conforme cobertura."
        />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <main className="bg-[#070A12] text-slate-100">

        {/* ========================================= */}
        {/* HERO */}
        {/* ========================================= */}

        <section className="relative overflow-hidden border-b border-white/10">

          <div className="absolute inset-0 bg-gradient-to-br from-[#170d06] via-[#070A12] to-[#120a05]" />

          <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-orange-500/10 blur-[150px] rounded-full" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24 lg:pt-36 lg:pb-32">

            {/* Breadcrumb */}

            <div className="flex items-center gap-2 text-sm text-slate-500 mb-10">

              <Link
                to="/"
                className="hover:text-orange-400 transition"
              >
                Início
              </Link>

              <span>/</span>

              <span className="text-slate-300">
                Shopee Entrega Direta
              </span>

            </div>

            <div className="max-w-4xl">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold mb-7">

                <Zap size={16} />

                Shopee Entrega Direta em São Paulo

              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white">

                Transportadora para{' '}

                <span className="text-orange-500">
                  Shopee Entrega Direta
                </span>

                {' '}em São Paulo

              </h1>

              <p className="mt-7 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">

                Coletas programadas para vendedores da Shopee com
                operação de última milha e entregas no mesmo dia
                conforme cobertura operacional em São Paulo e Grande
                São Paulo. Conte com a Nobres Entregas para organizar a
                coleta, roteirização e distribuição dos seus pedidos.

              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-sm md:text-base text-slate-300">

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={18}
                    className="text-orange-400"
                  />

                  Coletas programadas
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={18}
                    className="text-orange-400"
                  />

                  Operação Same Day
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={18}
                    className="text-orange-400"
                  />

                  São Paulo e Grande SP
                </div>

              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <button
                  onClick={() =>
                    handleWhatsAppRedirect('Cotação Shopee Entrega Direta')
                  }
                  className="inline-flex justify-center items-center gap-2 bg-orange-500 text-[#120b06] font-bold px-7 py-4 rounded-xl hover:bg-orange-400 transition"
                >

                  Solicitar cotação

                  <ArrowRight size={19} />

                </button>

                <a
                  href="#como-funciona"
                  className="inline-flex justify-center items-center gap-2 border border-white/15 bg-white/5 px-7 py-4 rounded-xl text-white font-semibold hover:bg-white/10 transition"
                >

                  Como funciona

                </a>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* O QUE É SHOPEE ENTREGA DIRETA */}
        {/* ========================================= */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">

              <div>

                <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                  Entenda a modalidade
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  O que é Shopee Entrega Direta?

                </h2>

                <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                  Shopee Entrega Direta é uma modalidade logística
                  voltada a vendedores habilitados que permite utilizar
                  uma operação local de entrega para atender pedidos com
                  prazos mais curtos.

                </p>

                <p className="text-slate-400 text-lg mt-4 leading-relaxed">

                  Na prática, o vendedor prepara os pedidos, uma
                  transportadora realiza a coleta e os volumes seguem
                  para roteirização e entrega conforme a cobertura,
                  horário e condições da operação.

                </p>

                <p className="text-slate-400 text-lg mt-4 leading-relaxed">

                  A Nobres Entregas atua justamente nessa etapa
                  logística, conectando vendedores da Shopee aos seus
                  compradores através de uma operação organizada de
                  coleta e última milha.

                </p>

              </div>

              <div className="grid sm:grid-cols-2 gap-5">

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <PackageCheck className="text-orange-400" />

                  <h3 className="font-bold text-white mt-4">
                    Coleta dos pedidos
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                    Retirada dos volumes no endereço previamente
                    combinado com o vendedor.

                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <Truck className="text-orange-400" />

                  <h3 className="font-bold text-white mt-4">
                    Última milha
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                    Distribuição dos pedidos conforme as rotas previstas
                    para a operação.

                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <Clock className="text-orange-400" />

                  <h3 className="font-bold text-white mt-4">
                    Prazos reduzidos
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                    Operações podem ser estruturadas para entregas Same
                    Day conforme região e janela de coleta.

                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <ShieldCheck className="text-orange-400" />

                  <h3 className="font-bold text-white mt-4">
                    Acompanhamento
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                    Suporte para acompanhamento das etapas e ocorrências
                    da operação.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* TRANSPORTADORA SHOPEE */}
        {/* ========================================= */}

        <section className="py-24 bg-white/[0.025] border-y border-white/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl">

              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                Nobres Entregas
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Transportadora para Shopee Entrega Direta

              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                A Nobres Entregas atende operações de e-commerce que
                utilizam Shopee Entrega Direta e precisam de uma
                transportadora para realizar coleta e distribuição dos
                pedidos em São Paulo e Grande São Paulo.

              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">

              <article className="p-7 rounded-2xl bg-[#070A12] border border-white/10">

                <Clock className="text-orange-400 w-8 h-8" />

                <h3 className="text-xl font-bold text-white mt-5">
                  Coletas programadas
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  A janela de coleta é organizada conforme localização,
                  volume de pedidos, rota disponível e características
                  da operação.

                </p>

              </article>

              <article className="p-7 rounded-2xl bg-[#070A12] border border-white/10">

                <ShieldCheck className="text-orange-400 w-8 h-8" />

                <h3 className="text-xl font-bold text-white mt-5">
                  Controle operacional
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  Acompanhamento das etapas de coleta, distribuição e
                  ocorrências para oferecer maior controle sobre os
                  pedidos.

                </p>

              </article>

              <article className="p-7 rounded-2xl bg-[#070A12] border border-white/10">

                <PackageCheck className="text-orange-400 w-8 h-8" />

                <h3 className="text-xl font-bold text-white mt-5">
                  Comprovação da entrega
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  Registro das informações de entrega conforme o fluxo
                  operacional utilizado pela Nobres Entregas.

                </p>

              </article>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* COMO FUNCIONA */}
        {/* ========================================= */}

        <section
          id="como-funciona"
          className="py-24"
        >

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl mx-auto text-center">

              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                Processo operacional
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Como funciona a Shopee Entrega Direta com a Nobres?

              </h2>

              <p className="text-slate-400 text-lg mt-5">

                O processo é organizado em etapas simples, desde a
                preparação do pedido até a entrega ao comprador.

              </p>

            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-14">

              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">

                <span className="text-orange-400 font-bold text-lg">
                  01
                </span>

                <h3 className="font-bold text-white text-lg mt-4">
                  Prepare os pedidos
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">

                  Separe os pedidos vendidos na Shopee de acordo com o
                  fluxo da sua operação.

                </p>

              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">

                <span className="text-orange-400 font-bold text-lg">
                  02
                </span>

                <h3 className="font-bold text-white text-lg mt-4">
                  Realizamos a coleta
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">

                  A Nobres realiza a retirada dos volumes no endereço e
                  janela previamente combinados.

                </p>

              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">

                <span className="text-orange-400 font-bold text-lg">
                  03
                </span>

                <h3 className="font-bold text-white text-lg mt-4">
                  Roteirização
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">

                  Os pedidos são organizados conforme as regiões e rotas
                  previstas para distribuição.

                </p>

              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">

                <span className="text-orange-400 font-bold text-lg">
                  04
                </span>

                <h3 className="font-bold text-white text-lg mt-4">
                  Entrega ao comprador
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">

                  Os volumes seguem para entrega conforme prazo,
                  cobertura e modalidade da operação.

                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* POR QUE NOBRES */}
        {/* ========================================= */}

        <section className="py-24 bg-white/[0.025] border-y border-white/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                  Operação especializada
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Por que utilizar a Nobres na Shopee Entrega Direta?

                </h2>

                <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                  Para sellers que utilizam entregas locais, a etapa
                  logística precisa acompanhar o ritmo das vendas. Uma
                  operação organizada reduz retrabalho e facilita o
                  acompanhamento dos pedidos.

                </p>

                <p className="text-slate-400 text-lg mt-4 leading-relaxed">

                  A Nobres Entregas trabalha com coleta e última milha
                  para operações de e-commerce em São Paulo, conectando
                  o estoque do vendedor às rotas de distribuição.

                </p>

              </div>

              <div className="space-y-4">

                <div className="flex gap-4 p-5 rounded-xl border border-white/10 bg-[#070A12]">

                  <CheckCircle2 className="text-orange-400 shrink-0 mt-1" />

                  <div>

                    <h3 className="font-bold text-white">
                      Coleta no endereço do seller
                    </h3>

                    <p className="text-sm text-slate-400 mt-1">
                      Retirada em loja, estoque, operação ou endereço
                      definido previamente.
                    </p>

                  </div>

                </div>

                <div className="flex gap-4 p-5 rounded-xl border border-white/10 bg-[#070A12]">

                  <CheckCircle2 className="text-orange-400 shrink-0 mt-1" />

                  <div>

                    <h3 className="font-bold text-white">
                      Rotas de última milha
                    </h3>

                    <p className="text-sm text-slate-400 mt-1">
                      Organização dos volumes para distribuição em São
                      Paulo e áreas atendidas.
                    </p>

                  </div>

                </div>

                <div className="flex gap-4 p-5 rounded-xl border border-white/10 bg-[#070A12]">

                  <CheckCircle2 className="text-orange-400 shrink-0 mt-1" />

                  <div>

                    <h3 className="font-bold text-white">
                      Suporte operacional
                    </h3>

                    <p className="text-sm text-slate-400 mt-1">
                      Atendimento para acompanhar situações relacionadas
                      às etapas da operação.
                    </p>

                  </div>

                </div>

                <div className="flex gap-4 p-5 rounded-xl border border-white/10 bg-[#070A12]">

                  <CheckCircle2 className="text-orange-400 shrink-0 mt-1" />

                  <div>

                    <h3 className="font-bold text-white">
                      Operação Same Day
                    </h3>

                    <p className="text-sm text-slate-400 mt-1">
                      Possibilidade de entregas no mesmo dia conforme
                      região, horário e condições operacionais.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* REGIÕES */}
        {/* ========================================= */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl">

              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                Cobertura regional
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Shopee Entrega Direta em São Paulo e Grande SP

              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                A Nobres Entregas atende diferentes regiões da Grande
                São Paulo. Consulte algumas das nossas páginas regionais
                e fale com a equipe para confirmar a disponibilidade de
                coleta no seu endereço.

              </p>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

              {regioes.map((regiao) => (
                <Link
                  key={regiao.nome}
                  to={regiao.url}
                  className="group p-6 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-orange-500/40 transition"
                >

                  <MapPin className="text-orange-400" />

                  <h3 className="font-bold text-white text-lg mt-4 group-hover:text-orange-400 transition">
                    Shopee Entrega Direta em {regiao.nome}
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    {regiao.descricao}
                  </p>

                  <div className="inline-flex items-center gap-2 mt-5 text-orange-400 font-semibold text-sm">

                    Ver atendimento

                    <ArrowRight size={16} />

                  </div>

                </Link>
              ))}

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* QUANTO CUSTA */}
        {/* ========================================= */}

        <section className="py-24 bg-white/[0.025] border-y border-white/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-14 items-center">

              <div>

                <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                  Valores da operação
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Quanto custa uma transportadora para Shopee Entrega Direta?

                </h2>

                <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                  O valor da operação pode variar conforme endereço de
                  coleta, região de entrega, volume diário, frequência
                  das coletas e características dos pedidos.

                </p>

                <p className="text-slate-400 text-lg mt-4 leading-relaxed">

                  Por isso, a forma mais adequada de definir o custo é
                  analisar o perfil da sua operação antes de montar a
                  proposta.

                </p>

              </div>

              <div className="p-8 rounded-2xl bg-[#070A12] border border-orange-500/20">

                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-orange-500/10">

                  <DollarSign className="text-orange-400" />

                </div>

                <h3 className="text-2xl font-bold text-white mt-6">
                  Solicite uma cotação
                </h3>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  Informe sua região de coleta, média diária de pacotes
                  e áreas de entrega. Nossa equipe poderá avaliar a
                  operação e apresentar as condições comerciais.

                </p>

                <button
                  onClick={() =>
                    handleWhatsAppRedirect('Tabela e valores Shopee')
                  }
                  className="inline-flex items-center gap-2 mt-7 bg-orange-500 text-[#120b06] font-bold px-6 py-3.5 rounded-xl hover:bg-orange-400 transition"
                >

                  Solicitar valores

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* FAQ */}
        {/* ========================================= */}

        <section className="py-24">

          <div className="max-w-4xl mx-auto px-6 lg:px-8">

            <div className="text-center mb-12">

              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                Perguntas frequentes
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Dúvidas sobre Shopee Entrega Direta

              </h2>

            </div>

            <div className="space-y-4">

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  O que é Shopee Entrega Direta?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  É uma modalidade logística destinada a vendedores
                  elegíveis que utilizam uma operação local para realizar
                  a distribuição dos pedidos dentro das condições e
                  áreas atendidas pela modalidade.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  A Nobres Entregas coleta pedidos da Shopee?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  Sim. A Nobres atende operações de vendedores que
                  utilizam Shopee Entrega Direta em regiões cobertas,
                  conforme análise do endereço e disponibilidade
                  operacional.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  A Shopee Entrega Direta pode entregar no mesmo dia?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  A operação pode trabalhar com entregas Same Day,
                  dependendo do horário da coleta, região de destino,
                  cobertura e condições contratadas.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  Qual é o horário de coleta da Shopee?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  A janela de coleta é definida conforme localização,
                  volume de pedidos, rota disponível e características
                  da operação do vendedor.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  A Nobres atende Shopee Entrega Direta em toda São Paulo?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  A Nobres atende diferentes regiões de São Paulo e
                  Grande São Paulo. A disponibilidade deve ser
                  confirmada conforme o endereço de coleta e as áreas de
                  distribuição da operação.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  Quanto custa a coleta para Shopee Entrega Direta?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  Os valores dependem de fatores como região, quantidade
                  de pacotes, frequência das coletas e perfil da
                  operação. Entre em contato para solicitar uma cotação.

                </p>

              </details>

              <details className="group border border-white/10 rounded-xl p-6 bg-white/[0.025]">

                <summary className="cursor-pointer font-semibold text-white">

                  Como contratar uma transportadora para Shopee Entrega Direta?

                </summary>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  Informe à Nobres sua localização, média diária de
                  pedidos e regiões de entrega. Nossa equipe poderá
                  analisar a viabilidade operacional e apresentar as
                  condições para início das coletas.

                </p>

              </details>

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
                Outras soluções da Nobres Entregas
              </h2>

              <p className="text-slate-400 mt-4">

                Conheça também nossa operação para Mercado Livre Envios
                Flex e as páginas regionais da Nobres Entregas.

              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-5 mt-10">

              <Link
                to="/mercado-livre-envios-flex"
                className="p-6 border border-white/10 rounded-xl hover:border-orange-500/40 transition"
              >

                <h3 className="font-bold text-white">
                  Mercado Livre Envios Flex
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Conheça nossa solução para vendedores do Mercado Livre.
                </p>

              </Link>

              <Link
                to="/atendimento/guarulhos"
                className="p-6 border border-white/10 rounded-xl hover:border-orange-500/40 transition"
              >

                <h3 className="font-bold text-white">
                  Atendimento em Guarulhos
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Veja nossa página de coleta e entrega em Guarulhos.
                </p>

              </Link>

              <Link
                to="/atendimento/osasco"
                className="p-6 border border-white/10 rounded-xl hover:border-orange-500/40 transition"
              >

                <h3 className="font-bold text-white">
                  Atendimento em Osasco
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Conheça nossa operação para vendedores em Osasco.
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

            <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-r from-[#130c07] to-[#080b12] px-8 py-14 md:px-14">

              <div className="absolute right-0 top-0 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full" />

              <div className="relative max-w-3xl">

                <span className="text-orange-400 font-semibold">
                  Shopee Entrega Direta
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Precisa de uma transportadora para sua operação na Shopee?

                </h2>

                <p className="text-slate-300 text-lg mt-5 leading-relaxed">

                  Fale com a equipe da Nobres Entregas e solicite uma
                  análise da sua operação de coleta e última milha em
                  São Paulo e Grande São Paulo.

                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">

                  <button
                    onClick={() =>
                      handleWhatsAppRedirect(
                        'Análise da operação Shopee Entrega Direta'
                      )
                    }
                    className="inline-flex justify-center items-center gap-2 bg-orange-500 text-[#120b06] font-bold px-7 py-4 rounded-xl hover:bg-orange-400 transition"
                  >

                    Solicitar cotação

                    <ArrowRight size={19} />

                  </button>

                  <button
                    onClick={() =>
                      handleWhatsAppRedirect('Dúvidas Shopee Entrega Direta')
                    }
                    className="inline-flex justify-center items-center gap-2 border border-white/15 bg-white/5 px-7 py-4 rounded-xl text-white font-semibold hover:bg-white/10 transition"
                  >

                    <MessageCircle
                      size={19}
                      className="text-emerald-400"
                    />

                    Falar no WhatsApp

                  </button>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
};
