import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ChevronRight,
  DollarSign,
  HelpCircle,
  Info,
  MapPin,
  MessageCircle,
  Minus,
  PackageCheck,
  Plus,
  ShieldCheck,
  Truck,
} from 'lucide-react';

const faqData = [
  {
    question: 'Quanto custa utilizar o Mercado Livre Envios Flex?',
    answer:
      'O Mercado Livre possui tarifas próprias relacionadas ao Envios Flex, enquanto o custo da transportadora contratada pelo seller é definido separadamente. Na Nobres Entregas, o valor depende de fatores como endereço de coleta, volume diário de pacotes, frequência e regiões atendidas.',
  },
  {
    question: 'O Mercado Livre paga o custo da transportadora?',
    answer:
      'O Mercado Livre pode conceder um bônus por envio para ajudar a cobrir o custo logístico do seller. O valor depende da tarifa e das condições da venda. Esse bônus não deve ser interpretado como garantia de que o custo contratado com uma transportadora será integralmente coberto.',
  },
  {
    question: 'Como funciona o bônus do Envios Flex?',
    answer:
      'O bônus varia conforme a condição da venda, valor do produto, modalidade de frete e regras vigentes do Mercado Livre. Por isso, o seller deve consultar as condições disponíveis na própria conta antes de calcular o resultado financeiro da operação.',
  },
  {
    question: 'O preço da Nobres é igual para todos os vendedores?',
    answer:
      'Não. A operação é analisada considerando localização, média diária de pacotes, frequência de coleta, regiões de entrega e características dos volumes. Com essas informações, a equipe consegue apresentar uma proposta adequada ao perfil do seller.',
  },
  {
    question: 'Existe quantidade mínima para solicitar uma cotação?',
    answer:
      'Entre em contato com a equipe da Nobres informando sua média diária de pedidos. A viabilidade e as condições da coleta são avaliadas de acordo com o endereço e a estrutura da operação.',
  },
  {
    question: 'O custo muda conforme a região de entrega?',
    answer:
      'Pode mudar. Distância, área de cobertura, quantidade de volumes e organização das rotas são fatores que podem influenciar o custo logístico da operação.',
  },
  {
    question: 'Como descubro o valor exato para minha operação?',
    answer:
      'Informe à Nobres seu endereço de coleta, volume médio diário, frequência e principais regiões de entrega. A equipe poderá analisar a operação e apresentar uma cotação personalizada.',
  },
];

export const QuantoCustaFlex: React.FC = () => {
  const [volumeDiario, setVolumeDiario] = useState<number>(25);
  const [diasOperacao, setDiasOperacao] = useState<number>(22);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const pageUrl =
    'https://www.nbrsenviosflex.com.br/mercado-livre-envios-flex/quanto-custa';

  const volumeMensal = volumeDiario * diasOperacao;

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
      ? `Olá! Li a página sobre custos do Mercado Livre Envios Flex e gostaria de uma cotação. ${assunto}`
      : `Olá! Gostaria de uma cotação para minha operação Mercado Livre Envios Flex. Minha média aproximada é de ${volumeDiario} pacotes por dia.`;

    window.open(
      `https://wa.me/5511980224789?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',

    name: 'Quanto custa Mercado Livre Envios Flex em São Paulo?',

    description:
      'Entenda os custos do Mercado Livre Envios Flex, bônus por envio e como solicitar uma cotação de transportadora para sua operação em São Paulo.',

    url: pageUrl,

    about: {
      '@type': 'Service',
      name: 'Mercado Livre Envios Flex',
      provider: {
        '@type': 'Organization',
        name: 'Nobres Entregas',
        url: 'https://www.nbrsenviosflex.com.br',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'São Paulo e Grande São Paulo',
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
          Quanto Custa Mercado Livre Envios Flex? | Nobres Entregas
        </title>

        <meta
          name="description"
          content="Quanto custa Mercado Livre Envios Flex? Entenda tarifas, bônus por envio e os fatores que definem o preço de uma transportadora Flex em São Paulo."
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
          content="Quanto Custa Mercado Livre Envios Flex?"
        />

        <meta
          property="og:description"
          content="Entenda os custos, tarifas, bônus e fatores que influenciam o preço de uma operação Mercado Livre Envios Flex."
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
          content="Quanto Custa Mercado Livre Envios Flex?"
        />

        <meta
          name="twitter:description"
          content="Veja como funcionam tarifas, bônus e custos de uma transportadora para Mercado Livre Envios Flex."
        />

        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <main className="bg-[#070A12] text-slate-100 min-h-screen">

        {/* ========================================= */}
        {/* HERO */}
        {/* ========================================= */}

        <section className="relative overflow-hidden border-b border-white/10">

          <div className="absolute inset-0 bg-gradient-to-br from-[#171105] via-[#070A12] to-[#131005]" />

          <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-amber-500/10 blur-[150px] rounded-full" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24 lg:pt-36 lg:pb-28">

            {/* Breadcrumb */}

            <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-10">

              <Link
                to="/"
                className="hover:text-amber-400 transition"
              >
                Início
              </Link>

              <ChevronRight size={14} />

              <Link
                to="/mercado-livre-envios-flex"
                className="hover:text-amber-400 transition"
              >
                Mercado Livre Envios Flex
              </Link>

              <ChevronRight size={14} />

              <span className="text-slate-300">
                Quanto custa
              </span>

            </nav>

            <div className="max-w-4xl">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-semibold mb-7">

                <DollarSign size={16} />

                Custos do Mercado Livre Envios Flex

              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white">

                Quanto custa o{' '}

                <span className="text-amber-400">
                  Mercado Livre Envios Flex
                </span>

                ?

              </h1>

              <p className="mt-7 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">

                Entenda a diferença entre as tarifas do Mercado Livre,
                o bônus recebido pelo seller e o valor cobrado por uma
                transportadora para realizar suas entregas Flex em São
                Paulo.

              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-sm md:text-base text-slate-300">

                <div className="flex items-center gap-2">

                  <CheckCircle2
                    size={18}
                    className="text-amber-400"
                  />

                  Explicação sobre tarifas

                </div>

                <div className="flex items-center gap-2">

                  <CheckCircle2
                    size={18}
                    className="text-amber-400"
                  />

                  Bônus do Envios Flex

                </div>

                <div className="flex items-center gap-2">

                  <CheckCircle2
                    size={18}
                    className="text-amber-400"
                  />

                  Cotação personalizada

                </div>

              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <button
                  onClick={() =>
                    handleWhatsAppRedirect(
                      `Média aproximada: ${volumeDiario} pacotes por dia.`
                    )
                  }
                  className="inline-flex justify-center items-center gap-2 bg-amber-500 text-[#151005] font-bold px-7 py-4 rounded-xl hover:bg-amber-400 transition"
                >

                  Solicitar cotação

                  <ArrowRight size={19} />

                </button>

                <a
                  href="#simulador"
                  className="inline-flex justify-center items-center gap-2 border border-white/15 bg-white/5 px-7 py-4 rounded-xl text-white font-semibold hover:bg-white/10 transition"
                >

                  <Calculator size={19} />

                  Simular meu volume

                </a>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* PRIMEIRO PONTO IMPORTANTE */}
        {/* ========================================= */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-[1fr_0.9fr] gap-16 items-center">

              <div>

                <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                  Entenda a diferença
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Tarifa do Mercado Livre não é o preço da transportadora

                </h2>

                <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                  No Envios Flex, o seller é responsável por organizar
                  sua própria logística. Para isso, pode utilizar
                  veículos próprios ou contratar uma transportadora como
                  a Nobres Entregas.

                </p>

                <p className="text-slate-400 text-lg mt-4 leading-relaxed">

                  Separadamente, o Mercado Livre possui suas próprias
                  tarifas de envio e regras de bônus. Esses valores fazem
                  parte da relação entre a plataforma, o vendedor e o
                  comprador.

                </p>

                <p className="text-slate-400 text-lg mt-4 leading-relaxed">

                  Já o preço cobrado pela Nobres é definido de acordo
                  com a estrutura da sua operação logística.

                </p>

              </div>

              <div className="space-y-4">

                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">

                  <div className="flex items-start gap-4">

                    <DollarSign className="text-amber-400 shrink-0 mt-1" />

                    <div>

                      <h3 className="font-bold text-white">
                        Tarifa do Envios Flex
                      </h3>

                      <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                        Valor definido pelo Mercado Livre de acordo com
                        regras da plataforma, peso e área de entrega.

                      </p>

                    </div>

                  </div>

                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">

                  <div className="flex items-start gap-4">

                    <PackageCheck className="text-amber-400 shrink-0 mt-1" />

                    <div>

                      <h3 className="font-bold text-white">
                        Bônus por envio
                      </h3>

                      <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                        Incentivo que pode ser recebido pelo vendedor
                        conforme as condições da venda e regras vigentes
                        do Mercado Livre.

                      </p>

                    </div>

                  </div>

                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">

                  <div className="flex items-start gap-4">

                    <Truck className="text-amber-400 shrink-0 mt-1" />

                    <div>

                      <h3 className="font-bold text-white">
                        Custo da transportadora
                      </h3>

                      <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                        Valor contratado diretamente com a empresa que
                        realizará a coleta e as entregas.

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* TARIFAS ML */}
        {/* ========================================= */}

        <section className="py-24 bg-white/[0.025] border-y border-white/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl">

              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                Referência Mercado Livre
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Como são calculadas as tarifas do Envios Flex?

              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                O Mercado Livre informa que as tarifas do Flex podem
                variar de acordo com o peso do pacote e a área de
                entrega. O custo também pode considerar peso físico e
                volumétrico.

              </p>

            </div>

            <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">

              <div className="overflow-x-auto">

                <table className="w-full text-left">

                  <thead className="bg-white/[0.05]">

                    <tr>

                      <th className="px-6 py-5 text-sm font-semibold text-white">
                        Peso do pacote
                      </th>

                      <th className="px-6 py-5 text-sm font-semibold text-white">
                        Áreas próximas
                      </th>

                      <th className="px-6 py-5 text-sm font-semibold text-white">
                        Média distância
                      </th>

                      <th className="px-6 py-5 text-sm font-semibold text-white">
                        Áreas distantes
                      </th>

                    </tr>

                  </thead>

                  <tbody className="divide-y divide-white/10">

                    <tr>

                      <td className="px-6 py-5 text-slate-300">
                        Até 0,5 kg
                      </td>

                      <td className="px-6 py-5 text-amber-400 font-semibold">
                        R$ 7,99
                      </td>

                      <td className="px-6 py-5 text-amber-400 font-semibold">
                        R$ 9,89
                      </td>

                      <td className="px-6 py-5 text-amber-400 font-semibold">
                        R$ 9,99
                      </td>

                    </tr>

                    <tr>

                      <td className="px-6 py-5 text-slate-300">
                        De 0,5 a 5 kg
                      </td>

                      <td className="px-6 py-5 text-amber-400 font-semibold">
                        R$ 8,99
                      </td>

                      <td className="px-6 py-5 text-amber-400 font-semibold">
                        R$ 10,89
                      </td>

                      <td className="px-6 py-5 text-amber-400 font-semibold">
                        R$ 10,99
                      </td>

                    </tr>

                    <tr>

                      <td className="px-6 py-5 text-slate-300">
                        Mais de 5 kg
                      </td>

                      <td className="px-6 py-5 text-amber-400 font-semibold">
                        R$ 11,99
                      </td>

                      <td className="px-6 py-5 text-amber-400 font-semibold">
                        R$ 14,89
                      </td>

                      <td className="px-6 py-5 text-amber-400 font-semibold">
                        R$ 14,99
                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

            <div className="flex items-start gap-3 mt-5 p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">

              <Info className="text-amber-400 shrink-0 mt-0.5" size={20} />

              <p className="text-sm text-slate-400 leading-relaxed">

                Os valores acima são referências divulgadas pelo Mercado
                Livre para determinadas cidades e podem ser alterados
                pela plataforma. Consulte sempre sua conta e as
                condições oficiais vigentes antes de realizar cálculos
                financeiros.

              </p>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* BÔNUS */}
        {/* ========================================= */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl">

              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                Fluxo financeiro
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Como funciona o bônus por envio no Mercado Livre Flex?

              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                O Mercado Livre utiliza bônus por envio para ajudar o
                seller a custear sua própria logística. O valor recebido
                depende das características da venda.

              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">

              <article className="p-7 rounded-2xl bg-white/[0.025] border border-white/10">

                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                  Produtos abaixo de R$ 19
                </span>

                <h3 className="text-xl font-bold text-white mt-4">
                  Frete por conta do comprador
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  Quando o comprador paga o frete, o Mercado Livre
                  informa que o seller recebe um bônus equivalente à
                  tarifa, conforme peso e região.

                </p>

              </article>

              <article className="p-7 rounded-2xl bg-white/[0.025] border border-white/10">

                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                  De R$ 19 a R$ 78,99
                </span>

                <h3 className="text-xl font-bold text-white mt-4">
                  Frete grátis
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  Nas condições divulgadas pela plataforma, o seller
                  oferece frete grátis e pode receber bônus equivalente
                  à tarifa aplicável ao envio.

                </p>

              </article>

              <article className="p-7 rounded-2xl bg-white/[0.025] border border-white/10">

                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                  Produtos novos a partir de R$ 79
                </span>

                <h3 className="text-xl font-bold text-white mt-4">
                  Bônus parcial
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  O Mercado Livre informa bônus de 10% sobre a tarifa
                  para vendedores elegíveis com reputação verde, dentro
                  das condições vigentes.

                </p>

              </article>

            </div>

            <div className="mt-8 p-6 rounded-2xl border border-white/10 bg-white/[0.025]">

              <p className="text-slate-400 leading-relaxed">

                <strong className="text-white">
                  Importante:
                </strong>{' '}
                o bônus recebido do Mercado Livre não representa o preço
                cobrado pela Nobres Entregas. São relações financeiras
                diferentes e devem ser analisadas separadamente.

              </p>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* PREÇO DA NOBRES */}
        {/* ========================================= */}

        <section className="py-24 bg-white/[0.025] border-y border-white/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                  Cotação logística
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Quanto custa contratar a Nobres Entregas para Envios Flex?

                </h2>

                <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                  Não existe um único valor que represente todas as
                  operações. A cotação depende das características do
                  seller e da estrutura necessária para atender suas
                  entregas.

                </p>

              </div>

              <div className="grid sm:grid-cols-2 gap-5">

                <div className="p-6 rounded-2xl bg-[#070A12] border border-white/10">

                  <MapPin className="text-amber-400" />

                  <h3 className="font-bold text-white mt-4">
                    Endereço de coleta
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Localização da loja, estoque ou operação.
                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-[#070A12] border border-white/10">

                  <PackageCheck className="text-amber-400" />

                  <h3 className="font-bold text-white mt-4">
                    Volume diário
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Média e variação da quantidade de pedidos.
                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-[#070A12] border border-white/10">

                  <Truck className="text-amber-400" />

                  <h3 className="font-bold text-white mt-4">
                    Regiões de entrega
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Distribuição geográfica dos pedidos da operação.
                  </p>

                </div>

                <div className="p-6 rounded-2xl bg-[#070A12] border border-white/10">

                  <ShieldCheck className="text-amber-400" />

                  <h3 className="font-bold text-white mt-4">
                    Frequência
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Dias e recorrência necessários para a coleta.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* SIMULADOR */}
        {/* ========================================= */}

        <section
          id="simulador"
          className="py-24"
        >

          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-[#171105] to-[#070A12] p-7 md:p-10">

              <div className="absolute right-0 top-0 w-72 h-72 bg-amber-500/10 blur-[100px] rounded-full" />

              <div className="relative">

                <div className="max-w-3xl">

                  <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                    Simulador de operação
                  </span>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                    Quantos pacotes sua operação movimenta por mês?

                  </h2>

                  <p className="text-slate-400 text-lg mt-4">

                    Informe sua média diária e frequência de operação.
                    Use o resultado para solicitar uma cotação mais
                    adequada ao seu volume.

                  </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-10 mt-10 items-center">

                  <div className="space-y-8">

                    <div>

                      <div className="flex justify-between gap-4 text-sm font-semibold mb-3">

                        <span className="text-slate-300">
                          Média de pacotes por dia
                        </span>

                        <span className="text-amber-400">
                          {volumeDiario} pacotes
                        </span>

                      </div>

                      <input
                        type="range"
                        min="1"
                        max="300"
                        step="1"
                        value={volumeDiario}
                        onChange={(event) =>
                          setVolumeDiario(Number(event.target.value))
                        }
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                      />

                    </div>

                    <div>

                      <div className="flex justify-between gap-4 text-sm font-semibold mb-3">

                        <span className="text-slate-300">
                          Dias de operação por mês
                        </span>

                        <span className="text-amber-400">
                          {diasOperacao} dias
                        </span>

                      </div>

                      <input
                        type="range"
                        min="4"
                        max="31"
                        step="1"
                        value={diasOperacao}
                        onChange={(event) =>
                          setDiasOperacao(Number(event.target.value))
                        }
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                      />

                    </div>

                  </div>

                  <div className="p-7 rounded-2xl bg-[#070A12] border border-white/10 text-center">

                    <span className="text-xs uppercase tracking-wider text-slate-500">
                      Volume mensal estimado
                    </span>

                    <div className="text-4xl md:text-5xl font-black text-amber-400 mt-3">
                      {volumeMensal.toLocaleString('pt-BR')}
                    </div>

                    <p className="text-slate-400 mt-2">
                      pacotes por mês
                    </p>

                    <button
                      onClick={() =>
                        handleWhatsAppRedirect(
                          `Minha operação possui aproximadamente ${volumeDiario} pacotes por dia, em ${diasOperacao} dias de operação por mês, totalizando cerca de ${volumeMensal} pacotes/mês.`
                        )
                      }
                      className="w-full inline-flex items-center justify-center gap-2 mt-7 bg-amber-500 text-[#151005] font-bold px-5 py-3.5 rounded-xl hover:bg-amber-400 transition"
                    >

                      Cotar esse volume

                      <ArrowRight size={18} />

                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* FROTA PRÓPRIA X TRANSPORTADORA */}
        {/* ========================================= */}

        <section className="py-24 bg-white/[0.025] border-y border-white/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto">

              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                Estrutura logística
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Frota própria ou transportadora para Envios Flex?

              </h2>

              <p className="text-slate-400 text-lg mt-5">

                O Mercado Livre permite que o seller organize suas
                entregas utilizando estrutura própria ou um serviço
                terceirizado.

              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-12">

              <div className="p-8 rounded-2xl bg-white/[0.025] border border-white/10">

                <Truck className="text-slate-400 w-8 h-8" />

                <h3 className="text-xl font-bold text-white mt-5">
                  Operação própria
                </h3>

                <ul className="space-y-4 mt-6 text-slate-400">

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-slate-500 shrink-0 mt-1" size={17} />
                    Gestão própria de entregadores e disponibilidade.
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-slate-500 shrink-0 mt-1" size={17} />
                    Administração de veículos, rotas e ocorrências.
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-slate-500 shrink-0 mt-1" size={17} />
                    Necessidade de dimensionar capacidade para os picos.
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-slate-500 shrink-0 mt-1" size={17} />
                    Responsabilidade interna pela continuidade operacional.
                  </li>

                </ul>

              </div>

              <div className="p-8 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20">

                <ShieldCheck className="text-amber-400 w-8 h-8" />

                <h3 className="text-xl font-bold text-white mt-5">
                  Transportadora especializada
                </h3>

                <ul className="space-y-4 mt-6 text-slate-300">

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-amber-400 shrink-0 mt-1" size={17} />
                    Operação de coleta previamente organizada.
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-amber-400 shrink-0 mt-1" size={17} />
                    Estrutura de roteirização e última milha.
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-amber-400 shrink-0 mt-1" size={17} />
                    Atendimento operacional para ocorrências.
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-amber-400 shrink-0 mt-1" size={17} />
                    Possibilidade de ajustar a operação conforme volume e cobertura.
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* REGIÕES */}
        {/* ========================================= */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-14 items-center">

              <div>

                <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                  Cobertura
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  O endereço de coleta também influencia a cotação

                </h2>

                <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                  Sellers localizados em regiões diferentes podem exigir
                  estruturas de coleta diferentes. Por isso, endereço,
                  volume e frequência precisam ser analisados em
                  conjunto.

                </p>

              </div>

              <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.025]">

                <MapPin className="text-amber-400" size={30} />

                <h3 className="text-xl font-bold text-white mt-5">
                  Consulte nossa cobertura
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  Veja as principais cidades e bairros atendidos pela
                  operação Mercado Livre Envios Flex da Nobres.

                </p>

                <Link
                  to="/mercado-livre-envios-flex/regioes-atendidas"
                  className="inline-flex items-center gap-2 mt-6 text-amber-400 font-semibold"
                >

                  Ver regiões atendidas

                  <ArrowRight size={17} />

                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* FAQ */}
        {/* ========================================= */}

        <section className="py-24 bg-white/[0.025] border-y border-white/10">

          <div className="max-w-4xl mx-auto px-6 lg:px-8">

            <div className="text-center mb-12">

              <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm uppercase tracking-wider">

                <HelpCircle size={17} />

                Perguntas frequentes

              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Dúvidas sobre custos do Mercado Livre Envios Flex

              </h2>

            </div>

            <div className="space-y-4">

              {faqData.map((item, index) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-white/10 bg-[#070A12] overflow-hidden"
                >

                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.025] transition"
                  >

                    <h3 className="font-semibold text-white pr-6">
                      {item.question}
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
                      {item.answer}
                    </div>
                  )}

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* LINKS DO CLUSTER */}
        {/* ========================================= */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <h2 className="text-3xl font-bold text-white">
              Continue aprendendo sobre Envios Flex
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

              <Link
                to="/mercado-livre-envios-flex"
                className="p-6 rounded-xl border border-white/10 hover:border-amber-500/40 transition"
              >

                <h3 className="font-bold text-white">
                  Mercado Livre Envios Flex
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Conheça a operação completa da Nobres.
                </p>

              </Link>

              <Link
                to="/mercado-livre-envios-flex/como-ativar"
                className="p-6 rounded-xl border border-white/10 hover:border-amber-500/40 transition"
              >

                <h3 className="font-bold text-white">
                  Como ativar o Envios Flex
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Veja os requisitos e o processo de ativação.
                </p>

              </Link>

              <Link
                to="/mercado-livre-envios-flex/reputacao-verde"
                className="p-6 rounded-xl border border-white/10 hover:border-amber-500/40 transition"
              >

                <h3 className="font-bold text-white">
                  Reputação e Envios Flex
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Entenda a importância da logística e dos prazos.
                </p>

              </Link>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* CTA FINAL */}
        {/* ========================================= */}

        <section className="pb-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-r from-[#171105] to-[#090b11] px-8 py-14 md:px-14">

              <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full" />

              <div className="relative max-w-3xl">

                <span className="text-amber-400 font-semibold">
                  Cotação personalizada
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Quer saber quanto custa a sua operação Envios Flex?

                </h2>

                <p className="text-slate-300 text-lg mt-5 leading-relaxed">

                  Informe seu endereço de coleta, média diária de
                  pacotes e regiões de entrega. A equipe da Nobres
                  poderá avaliar sua operação e apresentar as condições
                  comerciais.

                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">

                  <button
                    onClick={() =>
                      handleWhatsAppRedirect(
                        `Minha média aproximada é de ${volumeDiario} pacotes por dia.`
                      )
                    }
                    className="inline-flex justify-center items-center gap-2 bg-amber-500 text-[#151005] font-bold px-7 py-4 rounded-xl hover:bg-amber-400 transition"
                  >

                    <MessageCircle size={19} />

                    Solicitar minha cotação

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
