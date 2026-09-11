import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BookOpenText,
  CheckCircle2,
  Clock,
  DollarSign,
  FileCheck,
  MapPin,
  MessageCircle,
  Minus,
  PackageCheck,
  Plus,
  Settings,
  ShieldCheck,
  Truck,
} from 'lucide-react';

const flexFaq = [
  {
    question: 'O que é Mercado Livre Envios Flex?',
    answer:
      'Mercado Livre Envios Flex é uma modalidade logística que permite ao vendedor utilizar uma operação de entrega local para oferecer prazos mais rápidos aos compradores dentro das regiões habilitadas.',
  },
  {
    question: 'A Nobres Entregas realiza coletas para Mercado Livre Envios Flex?',
    answer:
      'Sim. A Nobres Entregas atende vendedores que utilizam Mercado Livre Envios Flex em diferentes regiões de São Paulo e Grande São Paulo, conforme disponibilidade operacional e análise do endereço de coleta.',
  },
  {
    question: 'Como funciona a coleta dos pedidos?',
    answer:
      'A janela de coleta é combinada conforme o endereço, volume diário de pacotes, frequência da operação e rota disponível. Após a retirada, os volumes seguem para organização e distribuição.',
  },
  {
    question: 'Os pedidos podem ser entregues no mesmo dia?',
    answer:
      'A Nobres trabalha com operações Same Day conforme horário de coleta, região de destino, cobertura e condições operacionais aplicáveis à rota.',
  },
  {
    question: 'O que acontece se o comprador não estiver disponível?',
    answer:
      'A tratativa depende da situação encontrada na entrega e das regras da operação. A equipe pode realizar tentativa de contato e registrar a ocorrência para definição da melhor tratativa possível.',
  },
  {
    question: 'A Nobres atende toda São Paulo?',
    answer:
      'A Nobres atende diferentes regiões da capital e da Grande São Paulo. A disponibilidade precisa ser confirmada conforme endereço de coleta, regiões de entrega e características da operação.',
  },
  {
    question: 'Como funciona a atualização dos pedidos?',
    answer:
      'Os pedidos são acompanhados durante a operação e as informações de entrega são registradas conforme o fluxo utilizado pela Nobres Entregas e pelas ferramentas aplicáveis ao serviço.',
  },
  {
    question: 'Quanto custa utilizar uma transportadora para Envios Flex?',
    answer:
      'O valor depende de fatores como volume diário, região de coleta, áreas de entrega, frequência e características da operação. A Nobres realiza uma análise para apresentar a proposta adequada.',
  },
];

const regionalPages = [
  {
    name: 'Guarulhos',
    url: '/atendimento/guarulhos',
    description:
      'Coletas para vendedores Mercado Livre Envios Flex em Guarulhos.',
  },
  {
    name: 'Osasco',
    url: '/atendimento/osasco',
    description:
      'Operação de coleta para sellers localizados em Osasco e região.',
  },
  {
    name: 'Mogi das Cruzes',
    url: '/atendimento/mogi-das-cruzes',
    description:
      'Coletas para operações Mercado Livre Envios Flex no Alto Tietê.',
  },
  {
    name: 'Suzano',
    url: '/atendimento/suzano',
    description:
      'Atendimento para vendedores com operação de coleta em Suzano.',
  },
  {
    name: 'São Bernardo do Campo',
    url: '/atendimento/sao-bernardo-do-campo',
    description:
      'Operação de coleta para sellers localizados no ABC Paulista.',
  },
];

export const MercadoLivreFlex: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const pageUrl =
    'https://www.nbrsenviosflex.com.br/mercado-livre-envios-flex';

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleWhatsAppRedirect = (assunto?: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-18438688462/gHDyCJu7uvEcEM6doNhE',
        value: 1.0,
        currency: 'BRL',
      });
    }

    const text = assunto
      ? `Olá! Gostaria de saber mais sobre a operação da Nobres Entregas para Mercado Livre Envios Flex: ${assunto}.`
      : 'Olá! Gostaria de uma cotação para minha operação Mercado Livre Envios Flex.';

    window.open(
      `https://wa.me/5511980224789?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',

    name: 'Transportadora para Mercado Livre Envios Flex em São Paulo',

    description:
      'Serviço de coleta e última milha para vendedores que utilizam Mercado Livre Envios Flex em São Paulo e Grande São Paulo, com operação Same Day conforme cobertura operacional.',

    url: pageUrl,

    serviceType: [
      'Mercado Livre Envios Flex',
      'Transportadora para Mercado Livre',
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

  return (
    <>
      <Helmet>
        <title>
          Transportadora Mercado Livre Envios Flex em SP | Nobres Entregas
        </title>

        <meta
          name="description"
          content="Transportadora para Mercado Livre Envios Flex em São Paulo. Coletas programadas para sellers e entregas Same Day em SP e Grande São Paulo."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href={pageUrl}
        />

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
          content="Transportadora para Mercado Livre Envios Flex em São Paulo"
        />

        <meta
          property="og:description"
          content="Coletas programadas para vendedores Mercado Livre Envios Flex com operação de última milha em São Paulo e Grande São Paulo."
        />

        <meta
          property="og:url"
          content={pageUrl}
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Transportadora Mercado Livre Envios Flex em SP | Nobres Entregas"
        />

        <meta
          name="twitter:description"
          content="Operação de coleta e última milha para vendedores Mercado Livre Envios Flex em São Paulo e Grande SP."
        />

        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <main className="bg-[#070A12] text-slate-100">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">

          <div className="absolute inset-0 bg-gradient-to-br from-[#171105] via-[#070A12] to-[#131005]" />

          <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-amber-500/10 blur-[150px] rounded-full" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24 lg:pt-36 lg:pb-32">

            <div className="flex items-center gap-2 text-sm text-slate-500 mb-10">

              <Link
                to="/"
                className="hover:text-amber-400 transition"
              >
                Início
              </Link>

              <span>/</span>

              <span className="text-slate-300">
                Mercado Livre Envios Flex
              </span>

            </div>

            <div className="max-w-4xl">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-semibold mb-7">

                <Award size={16} />

                Mercado Livre Envios Flex em São Paulo

              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white">

                Transportadora para{' '}

                <span className="text-amber-400">
                  Mercado Livre Envios Flex
                </span>

                {' '}em São Paulo

              </h1>

              <p className="mt-7 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">

                Coletas programadas para vendedores do Mercado Livre com
                operação de última milha e entregas Same Day conforme
                cobertura operacional em São Paulo e Grande São Paulo.

              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-sm md:text-base text-slate-300">

                <div className="flex items-center gap-2">

                  <CheckCircle2
                    size={18}
                    className="text-amber-400"
                  />

                  Coletas programadas

                </div>

                <div className="flex items-center gap-2">

                  <CheckCircle2
                    size={18}
                    className="text-amber-400"
                  />

                  Operação Same Day

                </div>

                <div className="flex items-center gap-2">

                  <CheckCircle2
                    size={18}
                    className="text-amber-400"
                  />

                  São Paulo e Grande SP

                </div>

              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <button
                  onClick={() =>
                    handleWhatsAppRedirect('Cotação Mercado Livre Envios Flex')
                  }
                  className="inline-flex justify-center items-center gap-2 bg-amber-500 text-[#151005] font-bold px-7 py-4 rounded-xl hover:bg-amber-400 transition"
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

        {/* O QUE É FLEX */}
        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">

              <div>

                <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                  Entenda a modalidade
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  O que é Mercado Livre Envios Flex?

                </h2>

                <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                  Mercado Livre Envios Flex é uma modalidade logística
                  que permite ao vendedor utilizar uma operação local de
                  entrega para atender pedidos em regiões habilitadas
                  com prazos mais rápidos.

                </p>

                <p className="text-slate-400 text-lg mt-4 leading-relaxed">

                  O vendedor prepara os pedidos em sua loja, estoque ou
                  operação e uma transportadora realiza a coleta,
                  organização das rotas e entrega ao comprador.

                </p>

                <p className="text-slate-400 text-lg mt-4 leading-relaxed">

                  A Nobres Entregas atua justamente nessa etapa,
                  realizando coleta e última milha para sellers que
                  utilizam Envios Flex em São Paulo e Grande São Paulo.

                </p>

              </div>

              <div className="grid sm:grid-cols-2 gap-5">

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <PackageCheck className="text-amber-400" />

                  <h3 className="font-bold text-white mt-4">
                    Coleta dos pedidos
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                    Retirada dos volumes no endereço previamente
                    definido com o vendedor.

                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <Truck className="text-amber-400" />

                  <h3 className="font-bold text-white mt-4">
                    Última milha
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                    Organização e distribuição dos pedidos conforme as
                    rotas disponíveis.

                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <Clock className="text-amber-400" />

                  <h3 className="font-bold text-white mt-4">
                    Operação Same Day
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                    Possibilidade de entrega no mesmo dia conforme
                    cobertura, horário e condições operacionais.

                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10">

                  <ShieldCheck className="text-amber-400" />

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

        {/* COMO A NOBRES FUNCIONA */}
        <section
          id="como-funciona"
          className="py-24 bg-white/[0.025] border-y border-white/10"
        >

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl mx-auto text-center">

              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                Processo operacional
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Como funciona o Envios Flex com a Nobres Entregas?

              </h2>

              <p className="text-slate-400 text-lg mt-5">

                A operação é organizada em etapas desde a preparação dos
                pedidos até a entrega ao comprador.

              </p>

            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-14">

              <div className="p-6 rounded-2xl border border-white/10 bg-[#070A12]">

                <span className="text-amber-400 font-bold text-lg">
                  01
                </span>

                <h3 className="font-bold text-white text-lg mt-4">
                  Prepare os pedidos
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">

                  Separe os pedidos que serão enviados através da sua
                  operação Envios Flex.

                </p>

              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-[#070A12]">

                <span className="text-amber-400 font-bold text-lg">
                  02
                </span>

                <h3 className="font-bold text-white text-lg mt-4">
                  Realizamos a coleta
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">

                  A Nobres realiza a retirada conforme a janela e o
                  endereço previamente combinados.

                </p>

              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-[#070A12]">

                <span className="text-amber-400 font-bold text-lg">
                  03
                </span>

                <h3 className="font-bold text-white text-lg mt-4">
                  Roteirização
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">

                  Os volumes são organizados conforme regiões e rotas de
                  distribuição.

                </p>

              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-[#070A12]">

                <span className="text-amber-400 font-bold text-lg">
                  04
                </span>

                <h3 className="font-bold text-white text-lg mt-4">
                  Entrega ao comprador
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed">

                  Os pedidos seguem para entrega conforme cobertura e
                  condições previstas na operação.

                </p>

              </div>

            </div>

          </div>

        </section>

        {/* DIFERENCIAIS */}
        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl">

              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                Operação especializada
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Transportadora para vendedores Mercado Livre Envios Flex

              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                A Nobres Entregas trabalha com operações de e-commerce
                que precisam de coleta organizada, acompanhamento e
                distribuição de última milha em São Paulo.

              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">

              <article className="p-7 rounded-2xl bg-white/[0.025] border border-white/10">

                <Clock className="text-amber-400 w-8 h-8" />

                <h3 className="text-xl font-bold text-white mt-5">
                  Coletas programadas
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  A janela é definida conforme localização, volume,
                  frequência e características da operação.

                </p>

              </article>

              <article className="p-7 rounded-2xl bg-white/[0.025] border border-white/10">

                <ShieldCheck className="text-amber-400 w-8 h-8" />

                <h3 className="text-xl font-bold text-white mt-5">
                  Controle operacional
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  Acompanhamento das etapas da coleta e entrega para
                  facilitar a gestão dos pedidos.

                </p>

              </article>

              <article className="p-7 rounded-2xl bg-white/[0.025] border border-white/10">

                <MessageCircle className="text-amber-400 w-8 h-8" />

                <h3 className="text-xl font-bold text-white mt-5">
                  Suporte via WhatsApp
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  Canal direto para acompanhamento de situações
                  relacionadas à operação.

                </p>

              </article>

            </div>

          </div>

        </section>

        {/* CLUSTER */}
        <section
          id="cluster-hub"
          className="py-24 bg-white/[0.025] border-y border-white/10"
        >

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto">

              <span className="text-[#00e7fe] font-semibold text-sm uppercase tracking-wider">
                Guia Mercado Livre Flex
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Saiba mais sobre Mercado Livre Envios Flex

              </h2>

              <p className="text-slate-400 text-lg mt-5">

                Consulte nossos conteúdos sobre regiões, custos,
                ativação e logística da modalidade.

              </p>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

              <Link
                to="/mercado-livre-envios-flex/regioes-atendidas"
                className="group p-6 rounded-2xl border border-white/10 bg-[#070A12] hover:border-[#00e7fe]/40 transition"
              >

                <MapPin className="text-[#00e7fe]" />

                <h3 className="font-bold text-white text-lg mt-4">
                  Regiões atendidas
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Consulte cidades, bairros e áreas de coleta.
                </p>

                <div className="inline-flex items-center gap-2 mt-5 text-[#00e7fe] text-sm font-semibold">
                  Consultar cobertura
                  <ArrowRight size={16} />
                </div>

              </Link>

              <Link
                to="/mercado-livre-envios-flex/quanto-custa"
                className="group p-6 rounded-2xl border border-white/10 bg-[#070A12] hover:border-[#00e7fe]/40 transition"
              >

                <DollarSign className="text-[#00e7fe]" />

                <h3 className="font-bold text-white text-lg mt-4">
                  Quanto custa?
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Entenda como são calculados os valores da operação.
                </p>

                <div className="inline-flex items-center gap-2 mt-5 text-[#00e7fe] text-sm font-semibold">
                  Ver custos
                  <ArrowRight size={16} />
                </div>

              </Link>

              <Link
                to="/mercado-livre-envios-flex/como-ativar"
                className="group p-6 rounded-2xl border border-white/10 bg-[#070A12] hover:border-[#00e7fe]/40 transition"
              >

                <Settings className="text-[#00e7fe]" />

                <h3 className="font-bold text-white text-lg mt-4">
                  Como ativar
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Veja como funciona a ativação do Envios Flex.
                </p>

                <div className="inline-flex items-center gap-2 mt-5 text-[#00e7fe] text-sm font-semibold">
                  Ver passo a passo
                  <ArrowRight size={16} />
                </div>

              </Link>

              <Link
                to="/mercado-livre-envios-flex/reputacao-verde"
                className="group p-6 rounded-2xl border border-white/10 bg-[#070A12] hover:border-[#00e7fe]/40 transition"
              >

                <FileCheck className="text-[#00e7fe]" />

                <h3 className="font-bold text-white text-lg mt-4">
                  Reputação e logística
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Entenda como prazo e logística impactam a operação.
                </p>

                <div className="inline-flex items-center gap-2 mt-5 text-[#00e7fe] text-sm font-semibold">
                  Saiba mais
                  <ArrowRight size={16} />
                </div>

              </Link>

            </div>

          </div>

        </section>

        {/* REGIÕES */}
        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl">

              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                Atendimento regional
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Mercado Livre Envios Flex em São Paulo e Grande SP

              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                Consulte algumas das páginas regionais da Nobres para
                conhecer melhor a disponibilidade de coleta em cidades
                estratégicas da Grande São Paulo.

              </p>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

              {regionalPages.map((region) => (
                <Link
                  key={region.name}
                  to={region.url}
                  className="group p-6 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-amber-500/40 transition"
                >

                  <MapPin className="text-amber-400" />

                  <h3 className="font-bold text-white text-lg mt-4 group-hover:text-amber-400 transition">
                    Envios Flex em {region.name}
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    {region.description}
                  </p>

                  <div className="inline-flex items-center gap-2 mt-5 text-amber-400 font-semibold text-sm">

                    Ver atendimento

                    <ArrowRight size={16} />

                  </div>

                </Link>
              ))}

            </div>

          </div>

        </section>

        {/* CUSTO */}
        <section className="py-24 bg-white/[0.025] border-y border-white/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-14 items-center">

              <div>

                <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                  Valores
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Quanto custa uma transportadora para Mercado Livre Envios Flex?

                </h2>

                <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                  O custo depende do volume de pedidos, endereço de
                  coleta, regiões atendidas, frequência da operação e
                  características dos volumes.

                </p>

                <p className="text-slate-400 text-lg mt-4 leading-relaxed">

                  A Nobres analisa o perfil da operação para apresentar
                  as condições comerciais adequadas ao seller.

                </p>

              </div>

              <div className="p-8 rounded-2xl bg-[#070A12] border border-amber-500/20">

                <DollarSign className="text-amber-400 w-9 h-9" />

                <h3 className="text-2xl font-bold text-white mt-6">
                  Solicite uma cotação
                </h3>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  Informe sua localização, média diária de pacotes e
                  regiões de entrega para nossa equipe analisar a
                  operação.

                </p>

                <button
                  onClick={() =>
                    handleWhatsAppRedirect('Tabela e valores Envios Flex')
                  }
                  className="inline-flex items-center gap-2 mt-7 bg-amber-500 text-[#151005] font-bold px-6 py-3.5 rounded-xl hover:bg-amber-400 transition"
                >

                  Solicitar valores

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="py-24">

          <div className="max-w-4xl mx-auto px-6 lg:px-8">

            <div className="text-center mb-12">

              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                Perguntas frequentes
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Dúvidas sobre Mercado Livre Envios Flex

              </h2>

              <p className="text-slate-400 mt-4">

                Veja respostas para algumas das principais dúvidas de
                vendedores que utilizam a modalidade.

              </p>

            </div>

            <div className="space-y-4">

              {flexFaq.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-white/10 bg-white/[0.025] overflow-hidden"
                >

                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.025] transition"
                  >

                    <h3 className="font-semibold text-white pr-6">
                      {faq.question}
                    </h3>

                    {openFaqIndex === index ? (
                      <Minus
                        size={20}
                        className="text-amber-400 shrink-0"
                      />
                    ) : (
                      <Plus
                        size={20}
                        className="text-slate-500 shrink-0"
                      />
                    )}

                  </button>

                  {openFaqIndex === index && (
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-white/[0.025] border-t border-white/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-r from-[#171105] to-[#090b11] px-8 py-14 md:px-14">

              <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full" />

              <div className="relative max-w-3xl">

                <span className="text-amber-400 font-semibold">
                  Mercado Livre Envios Flex
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Precisa de uma transportadora para sua operação Flex?

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
                        'Análise da operação Mercado Livre Envios Flex'
                      )
                    }
                    className="inline-flex justify-center items-center gap-2 bg-amber-500 text-[#151005] font-bold px-7 py-4 rounded-xl hover:bg-amber-400 transition"
                  >

                    Solicitar cotação

                    <ArrowRight size={19} />

                  </button>

                  <Link
                    to="/mercado-livre-envios-flex/regioes-atendidas"
                    className="inline-flex justify-center items-center gap-2 border border-white/15 bg-white/5 px-7 py-4 rounded-xl text-white font-semibold hover:bg-white/10 transition"
                  >

                    <MapPin size={19} />

                    Consultar regiões

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
