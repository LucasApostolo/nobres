import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Clock,
  HelpCircle,
  MapPin,
  MessageCircle,
  Minus,
  PackageCheck,
  Plus,
  QrCode,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
  Truck,
} from 'lucide-react';

const faqData = [
  {
    question:
      'O Mercado Livre Envios Flex pode afetar minha reputação?',
    answer:
      'Sim. O desempenho das entregas faz parte da experiência do comprador e envios incorretos podem influenciar a reputação do vendedor. Além disso, o Mercado Livre avalia separadamente o percentual de envios corretos do Flex para determinar a exposição dos anúncios.',
  },
  {
    question:
      'Qual percentual de envios corretos devo manter no Flex?',
    answer:
      'Segundo as regras atuais do Mercado Livre, 97% ou mais de envios corretos gera exposição excelente no Flex. Abaixo de 97%, a exposição pode ser reduzida. Abaixo de 90%, os anúncios podem perder o destaque de entrega no mesmo dia e passar a oferecer entrega no dia seguinte.',
  },
  {
    question:
      'Até que horário devo realizar as entregas Flex?',
    answer:
      'O Mercado Livre recomenda realizar as entregas antes das 21h. Isso reduz o risco de o comprador reagendar a entrega ou não estar disponível. Se o pedido não for entregue até 23h, ele pode ser reagendado automaticamente para o dia seguinte e ser considerado um envio incorreto.',
  },
  {
    question:
      'O que acontece quando o comprador está ausente?',
    answer:
      'A ocorrência deve ser registrada corretamente na operação. O Mercado Livre informa que, se o pedido não for entregue até as 21h e o comprador reagendar ou estiver ausente, o envio pode ser considerado incorreto para a métrica de desempenho do Flex.',
  },
  {
    question:
      'A baixa do QR Code é importante?',
    answer:
      'Sim. O aplicativo do Envios Flex é utilizado para escanear os pacotes e realizar as rotas. O correto registro das etapas ajuda o Mercado Livre e o seller a acompanhar o andamento das entregas.',
  },
  {
    question:
      'A Nobres garante que minha reputação ficará verde?',
    answer:
      'Não. Nenhuma transportadora pode garantir a reputação de uma conta, pois ela depende de vários fatores do seller, como reclamações, cancelamentos, preparação dos pedidos e desempenho logístico. A Nobres atua na parte operacional de coleta e entrega para reduzir riscos relacionados à logística.',
  },
  {
    question:
      'Como reduzir atrasos no Mercado Livre Envios Flex?',
    answer:
      'Ajuste o horário de corte de acordo com a capacidade da sua operação, priorize áreas mais distantes, mantenha os pacotes prontos antes da coleta e utilize uma estrutura logística compatível com seu volume de vendas.',
  },
];

export const ReputacaoVerdeFlex: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const pageUrl =
    'https://www.nbrsenviosflex.com.br/mercado-livre-envios-flex/reputacao-verde';

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
      ? `Olá! Li o conteúdo sobre reputação e desempenho no Mercado Livre Envios Flex e gostaria de conversar sobre minha operação. ${assunto}`
      : 'Olá! Gostaria de estruturar minha operação Mercado Livre Envios Flex para reduzir atrasos e melhorar o desempenho das entregas.';

    window.open(
      `https://wa.me/5511980224789?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name:
      'Como manter boa reputação no Mercado Livre Envios Flex',
    description:
      'Entenda como entregas no prazo, envios corretos, horário de corte e logística influenciam a reputação e a exposição dos anúncios no Mercado Livre Envios Flex.',
    url: pageUrl,
    about: {
      '@type': 'Service',
      name: 'Mercado Livre Envios Flex',
      provider: {
        '@type': 'Organization',
        name: 'Nobres Entregas',
        url: 'https://www.nbrsenviosflex.com.br',
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Reputação no Mercado Livre Envios Flex | Guia para Sellers
        </title>

        <meta
          name="description"
          content="Veja como proteger sua reputação no Mercado Livre Envios Flex, reduzir atrasos e manter um alto percentual de envios corretos."
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
          content="Reputação e Desempenho no Mercado Livre Envios Flex"
        />

        <meta
          property="og:description"
          content="Entenda como prazo, envios corretos e logística impactam a reputação e a exposição dos anúncios no Mercado Livre."
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
          content="Reputação no Mercado Livre Envios Flex"
        />

        <meta
          name="twitter:description"
          content="Veja como reduzir atrasos e melhorar o desempenho da sua operação Mercado Livre Flex."
        />

        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <main className="bg-[#070A12] text-slate-100 min-h-screen">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">

          <div className="absolute inset-0 bg-gradient-to-br from-[#06160f] via-[#070A12] to-[#111006]" />

          <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-emerald-500/10 blur-[150px] rounded-full" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24 lg:pt-36 lg:pb-28">

            <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-10">

              <Link
                to="/"
                className="hover:text-emerald-400 transition"
              >
                Início
              </Link>

              <ChevronRight size={14} />

              <Link
                to="/mercado-livre-envios-flex"
                className="hover:text-emerald-400 transition"
              >
                Mercado Livre Envios Flex
              </Link>

              <ChevronRight size={14} />

              <span className="text-slate-300">
                Reputação e desempenho
              </span>

            </nav>

            <div className="max-w-4xl">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-7">

                <ShieldCheck size={16} />

                Reputação e desempenho no Envios Flex

              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white">

                Como proteger sua{' '}

                <span className="text-emerald-400">
                  reputação no Mercado Livre
                </span>

                {' '}usando Envios Flex

              </h1>

              <p className="mt-7 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">

                Entenda como atrasos, envios incorretos, horário de corte
                e desempenho logístico podem afetar sua reputação e a
                exposição dos seus anúncios no Mercado Livre.

              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-sm md:text-base text-slate-300">

                <div className="flex items-center gap-2">

                  <CheckCircle2
                    size={18}
                    className="text-emerald-400"
                  />

                  Entregas dentro do prazo

                </div>

                <div className="flex items-center gap-2">

                  <CheckCircle2
                    size={18}
                    className="text-emerald-400"
                  />

                  Gestão de envios incorretos

                </div>

                <div className="flex items-center gap-2">

                  <CheckCircle2
                    size={18}
                    className="text-emerald-400"
                  />

                  Operação compatível com seu volume

                </div>

              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <a
                  href="#desempenho-flex"
                  className="inline-flex justify-center items-center gap-2 bg-emerald-500 text-[#06120c] font-bold px-7 py-4 rounded-xl hover:bg-emerald-400 transition"
                >

                  Entender as métricas

                  <ArrowRight size={19} />

                </a>

                <button
                  onClick={() =>
                    handleWhatsAppRedirect(
                      'Quero melhorar a estrutura logística da minha operação.'
                    )
                  }
                  className="inline-flex justify-center items-center gap-2 border border-white/15 bg-white/5 px-7 py-4 rounded-xl text-white font-semibold hover:bg-white/10 transition"
                >

                  <MessageCircle size={19} />

                  Falar com a Nobres

                </button>

              </div>

            </div>

          </div>

        </section>

        {/* REPUTAÇÃO X FLEX */}
        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-16 items-start">

              <div>

                <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
                  Um ponto importante
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Reputação do vendedor e desempenho do Flex não são exatamente a mesma coisa

                </h2>

                <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                  O Mercado Livre utiliza diferentes indicadores para
                  avaliar a qualidade da operação de um seller.

                </p>

                <p className="text-slate-400 text-lg mt-4 leading-relaxed">

                  A reputação geral considera fatores como reclamações,
                  cancelamentos realizados pelo vendedor e envios
                  incorretos.

                </p>

                <p className="text-slate-400 text-lg mt-4 leading-relaxed">

                  Já no Envios Flex, o Mercado Livre também acompanha
                  semanalmente a porcentagem de envios entregues
                  corretamente para definir a exposição dos anúncios.

                </p>

              </div>

              <div className="space-y-5">

                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">

                  <ShieldCheck className="text-emerald-400" />

                  <h3 className="font-bold text-white mt-4">
                    Reputação da conta
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                    Considera indicadores relacionados à experiência
                    geral oferecida pelo vendedor.

                  </p>

                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">

                  <TrendingUp className="text-emerald-400" />

                  <h3 className="font-bold text-white mt-4">
                    Exposição no Flex
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                    Está relacionada ao percentual de envios corretos
                    realizado pela operação Flex.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* DESEMPENHO FLEX */}
        <section
          id="desempenho-flex"
          className="py-24 bg-white/[0.025] border-y border-white/10"
        >

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl">

              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
                Envios corretos
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Como o percentual de envios corretos afeta seus anúncios?

              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                O Mercado Livre calcula semanalmente a porcentagem de
                envios realizados corretamente no Flex. Esse desempenho
                influencia a exposição dos anúncios na semana seguinte.

              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">

              <article className="p-7 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04]">

                <div className="text-4xl font-black text-emerald-400">
                  97%+
                </div>

                <h3 className="text-xl font-bold text-white mt-4">
                  Exposição excelente
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  Com 97% ou mais de envios corretos, o Mercado Livre
                  informa que os anúncios podem manter excelente
                  exposição e o destaque “Chegará hoje”.

                </p>

              </article>

              <article className="p-7 rounded-2xl border border-amber-500/20 bg-amber-500/[0.04]">

                <div className="text-4xl font-black text-amber-400">
                  &lt; 97%
                </div>

                <h3 className="text-xl font-bold text-white mt-4">
                  Exposição regular
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  Abaixo de 97%, o destaque pode continuar ativo, mas o
                  horário de corte pode ser limitado nas áreas com mais
                  envios incorretos.

                </p>

              </article>

              <article className="p-7 rounded-2xl border border-red-500/20 bg-red-500/[0.04]">

                <div className="text-4xl font-black text-red-400">
                  &lt; 90%
                </div>

                <h3 className="text-xl font-bold text-white mt-4">
                  Exposição muito ruim
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  Abaixo de 90%, o anúncio pode perder o destaque
                  “Chegará hoje” e passar a oferecer entrega somente no
                  dia seguinte.

                </p>

              </article>

            </div>

            <div className="flex items-start gap-4 mt-8 p-6 rounded-2xl border border-white/10 bg-white/[0.025]">

              <AlertTriangle
                className="text-amber-400 shrink-0 mt-1"
                size={22}
              />

              <p className="text-sm text-slate-400 leading-relaxed">

                Esses percentuais correspondem às regras atualmente
                publicadas pelo Mercado Livre e podem ser alterados pela
                plataforma. Consulte periodicamente sua área de Envios
                Flex para acompanhar o desempenho da conta.

              </p>

            </div>

          </div>

        </section>

        {/* PRAZOS */}
        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
                  Horário de entrega
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Por que entregar antes das 21h é tão importante?

                </h2>

                <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                  O Mercado Livre recomenda que as entregas Flex sejam
                  realizadas antes das 21h. Quanto mais tarde a entrega,
                  maior o risco de o comprador não estar disponível ou
                  solicitar um reagendamento.

                </p>

                <p className="text-slate-400 text-lg mt-4 leading-relaxed">

                  Se a entrega não for concluída até 23h, o Mercado Livre
                  informa que o pedido pode ser automaticamente reagendado
                  para o dia seguinte e considerado um envio incorreto.

                </p>

              </div>

              <div className="space-y-5">

                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">

                  <Clock className="text-emerald-400" />

                  <h3 className="font-bold text-white mt-4">
                    Priorize rotas mais distantes
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                    Regiões mais longas devem sair mais cedo para reduzir
                    o risco de atrasos no final da rota.

                  </p>

                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">

                  <MapPin className="text-emerald-400" />

                  <h3 className="font-bold text-white mt-4">
                    Ajuste o corte por região
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                    O Envios Flex permite configurar horários de corte
                    diferentes conforme a área atendida.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* O QUE É ENVIO INCORRETO */}
        <section className="py-24 bg-white/[0.025] border-y border-white/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl">

              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
                Evite problemas
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Quando uma entrega Flex pode ser considerada incorreta?

              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                O Mercado Livre considera incorreto um envio cuja
                entrega atrasa e prejudica a experiência do comprador.

              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">

              <article className="p-7 rounded-2xl border border-white/10 bg-[#070A12]">

                <Clock className="text-emerald-400" />

                <h3 className="font-bold text-white text-lg mt-5">
                  Entrega atrasada
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  Pedidos que não cumprem o prazo prometido podem afetar
                  o percentual de envios corretos.

                </p>

              </article>

              <article className="p-7 rounded-2xl border border-white/10 bg-[#070A12]">

                <RefreshCw className="text-emerald-400" />

                <h3 className="font-bold text-white text-lg mt-5">
                  Reagendamento
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  Um pedido reagendado por atraso ou indisponibilidade
                  pode entrar como envio incorreto de acordo com as regras
                  aplicáveis à entrega.

                </p>

              </article>

              <article className="p-7 rounded-2xl border border-white/10 bg-[#070A12]">

                <AlertTriangle className="text-emerald-400" />

                <h3 className="font-bold text-white text-lg mt-5">
                  Ausência do comprador
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  Atrasar a rota aumenta a chance de encontrar o
                  destinatário indisponível no período final do dia.

                </p>

              </article>

            </div>

          </div>

        </section>

        {/* BOAS PRÁTICAS */}
        <section id="boas-praticas" className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto">

              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
                Boas práticas
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Como reduzir o risco de atrasos no Envios Flex

              </h2>

              <p className="text-slate-400 text-lg mt-5">

                Uma operação bem configurada costuma ser mais importante
                do que simplesmente tentar aceitar o maior número possível
                de pedidos.

              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

              <article className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">

                <Clock className="text-emerald-400" />

                <h3 className="font-bold text-white mt-4">
                  Configure o corte corretamente
                </h3>

                <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                  O horário precisa ser compatível com preparação,
                  coleta, roteirização e distância das entregas.

                </p>

              </article>

              <article className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">

                <PackageCheck className="text-emerald-400" />

                <h3 className="font-bold text-white mt-4">
                  Deixe os pacotes prontos
                </h3>

                <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                  Embalagens e etiquetas devem estar prontas antes da
                  chegada do entregador.

                </p>

              </article>

              <article className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">

                <Truck className="text-emerald-400" />

                <h3 className="font-bold text-white mt-4">
                  Dimensione sua logística
                </h3>

                <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                  A estrutura de entrega precisa acompanhar seu volume
                  diário e os períodos de maior demanda.

                </p>

              </article>

              <article className="p-6 rounded-2xl border border-white/10 bg-white/[0.025]">

                <MapPin className="text-emerald-400" />

                <h3 className="font-bold text-white mt-4">
                  Ajuste sua cobertura
                </h3>

                <p className="text-sm text-slate-400 mt-2 leading-relaxed">

                  Evite oferecer regiões que sua operação não consegue
                  atender com previsibilidade.

                </p>

              </article>

            </div>

          </div>

        </section>

        {/* QR CODE */}
        <section className="py-24 bg-white/[0.025] border-y border-white/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div className="p-8 rounded-3xl border border-white/10 bg-[#070A12]">

                <QrCode
                  size={38}
                  className="text-emerald-400"
                />

                <h3 className="text-2xl font-bold text-white mt-6">
                  Escaneamento dos pacotes
                </h3>

                <p className="text-slate-400 mt-4 leading-relaxed">

                  O aplicativo do Envios Flex é utilizado pelo entregador
                  para escanear os pacotes e gerar a rota. Por isso, o
                  QR Code da etiqueta precisa estar legível.

                </p>

              </div>

              <div>

                <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
                  Organização da operação
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  O acompanhamento começa antes da saída da rota

                </h2>

                <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                  O Mercado Livre recomenda deixar os pacotes preparados
                  e permitir que o entregador escaneie cada volume antes
                  de iniciar a rota.

                </p>

                <p className="text-slate-400 text-lg mt-4 leading-relaxed">

                  Depois do carregamento, o seller consegue acompanhar o
                  andamento das entregas pela área de Vendas.

                </p>

              </div>

            </div>

          </div>

        </section>

        {/* NOBRES */}
        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl">

              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
                Papel da transportadora
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Como a Nobres pode ajudar no desempenho da sua operação Flex

              </h2>

              <p className="text-slate-400 text-lg mt-5 leading-relaxed">

                O seller continua responsável pelos seus envios no
                Mercado Livre, mas uma estrutura logística adequada pode
                ajudar a reduzir riscos operacionais e atrasos.

              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">

              <article className="p-7 rounded-2xl border border-white/10 bg-white/[0.025]">

                <Clock className="text-emerald-400" />

                <h3 className="text-xl font-bold text-white mt-5">
                  Coletas programadas
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  Janela de coleta definida de acordo com localização,
                  volume e estrutura da operação.

                </p>

              </article>

              <article className="p-7 rounded-2xl border border-white/10 bg-white/[0.025]">

                <Truck className="text-emerald-400" />

                <h3 className="text-xl font-bold text-white mt-5">
                  Organização das rotas
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  Distribuição dos pedidos considerando regiões e
                  necessidades da operação.

                </p>

              </article>

              <article className="p-7 rounded-2xl border border-white/10 bg-white/[0.025]">

                <MessageCircle className="text-emerald-400" />

                <h3 className="text-xl font-bold text-white mt-5">
                  Suporte operacional
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">

                  Canal para acompanhamento e tratativa das situações
                  relacionadas às entregas.

                </p>

              </article>

            </div>

            <div className="mt-8 flex items-start gap-4 p-6 rounded-2xl border border-amber-500/20 bg-amber-500/[0.04]">

              <AlertTriangle
                className="text-amber-400 shrink-0 mt-1"
                size={22}
              />

              <p className="text-sm text-slate-400 leading-relaxed">

                A Nobres não promete ou garante uma determinada cor de
                reputação, percentual de exposição ou posição nos
                resultados do Mercado Livre. Esses indicadores dependem
                das regras da plataforma e do desempenho geral da conta.

              </p>

            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="py-24 bg-white/[0.025] border-y border-white/10">

          <div className="max-w-4xl mx-auto px-6 lg:px-8">

            <div className="text-center mb-12">

              <div className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm uppercase tracking-wider">

                <HelpCircle size={17} />

                Perguntas frequentes

              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                Dúvidas sobre reputação e Mercado Livre Envios Flex

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
                        className="text-emerald-400 shrink-0"
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

        {/* CLUSTER */}
        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <h2 className="text-3xl font-bold text-white">
              Continue aprendendo sobre Mercado Livre Envios Flex
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

              <Link
                to="/mercado-livre-envios-flex"
                className="p-6 rounded-xl border border-white/10 hover:border-emerald-500/40 transition"
              >

                <h3 className="font-bold text-white">
                  Mercado Livre Envios Flex
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Conheça a operação completa da modalidade.
                </p>

              </Link>

              <Link
                to="/mercado-livre-envios-flex/como-ativar"
                className="p-6 rounded-xl border border-white/10 hover:border-emerald-500/40 transition"
              >

                <h3 className="font-bold text-white">
                  Como ativar o Flex
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Veja requisitos e configuração da operação.
                </p>

              </Link>

              <Link
                to="/mercado-livre-envios-flex/quanto-custa"
                className="p-6 rounded-xl border border-white/10 hover:border-emerald-500/40 transition"
              >

                <h3 className="font-bold text-white">
                  Quanto custa o Flex?
                </h3>

                <p className="text-sm text-slate-400 mt-2">
                  Entenda tarifas, bônus e custo logístico.
                </p>

              </Link>

            </div>

          </div>

        </section>

        {/* CTA FINAL */}
        <section className="pb-24">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-[#06160f] to-[#090b11] px-8 py-14 md:px-14">

              <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />

              <div className="relative max-w-3xl">

                <span className="text-emerald-400 font-semibold">
                  Operação Mercado Livre Flex
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">

                  Precisa melhorar a estrutura das suas entregas Flex?

                </h2>

                <p className="text-slate-300 text-lg mt-5 leading-relaxed">

                  Informe seu endereço de coleta, volume diário e regiões
                  de entrega. A equipe da Nobres poderá analisar sua
                  operação e verificar a disponibilidade logística.

                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">

                  <button
                    onClick={() =>
                      handleWhatsAppRedirect(
                        'Quero analisar minha operação Mercado Livre Envios Flex.'
                      )
                    }
                    className="inline-flex justify-center items-center gap-2 bg-emerald-500 text-[#06120c] font-bold px-7 py-4 rounded-xl hover:bg-emerald-400 transition"
                  >

                    <MessageCircle size={19} />

                    Analisar minha operação

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
