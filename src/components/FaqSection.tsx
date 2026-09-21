import React, { useState } from 'react';

import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  MessageCircle,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { buildWhatsAppLink } from '../utils/whatsapp';

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

const faqItems: FaqItem[] = [
  {
    question: 'A Nobres Entregas trabalha com Mercado Livre Envios Flex?',
    answer: (
      <>
        Sim. A Nobres Entregas oferece operação logística para sellers que
        utilizam o Mercado Livre Envios Flex, com coleta programada e
        distribuição de última milha em São Paulo e regiões atendidas. A
        disponibilidade depende do endereço de coleta, volume e características
        da operação.
      </>
    ),
  },
  {
    question: 'Vocês também atendem Shopee Entrega Direta?',
    answer: (
      <>
        Sim. Atendemos vendedores que utilizam a modalidade Shopee Entrega
        Direta, conforme disponibilidade operacional e área de atendimento. A
        habilitação da modalidade na conta do seller é definida pela própria
        Shopee; a Nobres atua na operação logística após essa etapa.
      </>
    ),
  },
  {
    question: 'Quais regiões são atendidas pela Nobres Entregas?',
    answer: (
      <>
        Nossa operação atende áreas de São Paulo e Grande São Paulo, incluindo
        regiões da capital e municípios como Guarulhos, Osasco, São Bernardo do
        Campo, Mogi das Cruzes e Suzano. Como a disponibilidade pode variar
        conforme endereço, volume e rota, recomendamos confirmar seu CEP com
        nossa equipe.
      </>
    ),
  },
  {
    question: 'Como funciona a coleta dos pedidos?',
    answer: (
      <>
        Primeiro analisamos o endereço da operação, volume médio diário,
        frequência e regiões de entrega. Com a viabilidade confirmada,
        alinhamos a programação de coleta e o fluxo operacional adequado para
        sua loja, estoque ou centro de distribuição.
      </>
    ),
  },
  {
    question: 'Existe quantidade mínima de pacotes para contratar?',
    answer: (
      <>
        A viabilidade é analisada de acordo com a localização da coleta,
        frequência, volume diário e regiões de entrega. Por isso, mesmo
        operações em fase inicial podem consultar nossa equipe para verificar
        as condições disponíveis.
      </>
    ),
  },
  {
    question: 'Qual é o horário de coleta e o horário de corte?',
    answer: (
      <>
        Não existe um único horário válido para todas as operações. A janela de
        coleta é definida conforme localização, volume, capacidade da rota e
        modalidade utilizada. No Mercado Livre Envios Flex, o próprio seller
        também configura seu horário de corte na plataforma de acordo com sua
        capacidade operacional.
      </>
    ),
  },
  {
    question: 'Quanto custa contratar a Nobres Entregas?',
    answer: (
      <>
        O valor depende principalmente do endereço de coleta, volume de
        pacotes, frequência da operação, regiões de entrega e perfil dos
        envios. Com essas informações, nossa equipe consegue analisar a
        operação e preparar uma proposta adequada.
      </>
    ),
  },
  {
    question: 'Como faço para começar a operar com a Nobres?',
    answer: (
      <>
        Envie para nossa equipe o endereço de coleta, volume médio diário,
        marketplace utilizado e principais regiões de entrega. Analisamos a
        disponibilidade operacional e, sendo viável, alinhamos a proposta e a
        programação da operação.
      </>
    ),
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const whatsappUrl = buildWhatsAppLink({
    message:
      'Olá! Estava consultando as perguntas frequentes no site da Nobres Entregas e gostaria de tirar uma dúvida sobre minha operação.',
  });

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#070A12] py-20 sm:py-24"
      aria-labelledby="faq-heading"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-[#008ef4]/[0.05] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00e7fe]/25 bg-[#00e7fe]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#00e7fe]">
            <HelpCircle className="h-3.5 w-3.5" />
            Dúvidas frequentes
          </div>

          <h2
            id="faq-heading"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Perguntas frequentes sobre{' '}
            <span className="bg-gradient-to-r from-[#00e7fe] to-[#008ef4] bg-clip-text text-transparent">
              coletas e entregas
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Entenda como funciona a operação da Nobres Entregas para Mercado
            Livre Envios Flex, Shopee Entrega Direta e operações de e-commerce
            em São Paulo.
          </p>

        </div>

        {/* FAQ */}
        <div className="mb-8 space-y-3">

          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <article
                key={item.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-[#00e7fe]/25 bg-white/[0.045]'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.03]'
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <div className="flex items-start gap-3">

                    <span
                      className={`mt-0.5 font-mono text-[10px] font-bold ${
                        isOpen ? 'text-[#00e7fe]' : 'text-slate-600'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="text-sm font-bold leading-relaxed text-white sm:text-base">
                      {item.question}
                    </span>

                  </div>

                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                      isOpen
                        ? 'rotate-180 border-[#00e7fe]/20 bg-[#00e7fe]/10 text-[#00e7fe]'
                        : 'border-white/5 bg-white/[0.03] text-slate-500'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="border-t border-white/5 px-5 pb-6 pt-4 sm:px-6"
                  >
                    <div className="pl-0 text-xs leading-relaxed text-slate-400 sm:pl-7 sm:text-sm">
                      {item.answer}
                    </div>
                  </div>
                )}

              </article>
            );
          })}

        </div>

        {/* USEFUL LINKS */}
        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">

          <Link
            to="/mercado-livre-envios-flex"
            className="group rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-[#00e7fe]/20 hover:bg-white/[0.035]"
          >
            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-600">
              Mercado Livre
            </p>

            <div className="mt-1 flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-white">
                Conhecer Envios Flex
              </span>

              <ArrowRight className="h-3.5 w-3.5 text-[#00e7fe] transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link
            to="/shopee-entrega-direta"
            className="group rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-[#00e7fe]/20 hover:bg-white/[0.035]"
          >
            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-600">
              Shopee
            </p>

            <div className="mt-1 flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-white">
                Conhecer Entrega Direta
              </span>

              <ArrowRight className="h-3.5 w-3.5 text-[#00e7fe] transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link
            to="/mercado-livre-envios-flex/regioes-atendidas"
            className="group rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-[#00e7fe]/20 hover:bg-white/[0.035]"
          >
            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-600">
              Cobertura
            </p>

            <div className="mt-1 flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-white">
                Consultar regiões
              </span>

              <ArrowRight className="h-3.5 w-3.5 text-[#00e7fe] transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

        </div>

        {/* CONTACT */}
        <div className="rounded-3xl border border-white/5 bg-white/[0.025] p-6 sm:p-8">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="max-w-2xl">

              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#00e7fe]">
                Precisa de uma análise específica?
              </p>

              <h3 className="text-base font-bold text-white sm:text-lg">
                Fale com nossa equipe sobre sua operação
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Informe endereço de coleta, volume médio diário e regiões de
                entrega para verificarmos a disponibilidade.
              </p>

            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#00e7fe]/25 bg-[#00e7fe]/10 px-5 py-3 text-xs font-bold text-white transition-all hover:border-[#00e7fe]/40 hover:bg-[#00e7fe]/15"
            >
              <MessageCircle className="h-4 w-4 text-[#00e7fe]" />
              Falar com a equipe
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
