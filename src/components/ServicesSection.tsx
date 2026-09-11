import React from 'react';

import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  PackageCheck,
  Route,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Zap,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface ServicesSectionProps {
  onOpenQuoteModal: () => void;
}

const services = [
  {
    id: 'mercado-livre-flex',
    icon: Truck,
    eyebrow: 'Mercado Livre',
    title: 'Mercado Livre Envios Flex',
    description:
      'Operação logística para sellers que utilizam o Envios Flex em São Paulo e Grande SP, com coleta programada e organização das entregas de última milha.',
    features: [
      'Coletas programadas conforme sua operação',
      'Planejamento de rotas e regiões atendidas',
      'Operação alinhada ao horário de corte do seller',
      'Suporte para acompanhamento de ocorrências',
    ],
    highlight: 'Envios Flex',
    href: '/mercado-livre-envios-flex',
    cta: 'Conhecer o Envios Flex',
    featured: true,
  },

  {
    id: 'shopee-entrega-direta',
    icon: ShoppingBag,
    eyebrow: 'Shopee',
    title: 'Shopee Entrega Direta',
    description:
      'Estrutura logística para sellers elegíveis ao Shopee Entrega Direta, com coleta dos pedidos e distribuição para entregas rápidas em nossa área de atendimento.',
    features: [
      'Operação para sellers Shopee',
      'Coletas organizadas por volume',
      'Distribuição em São Paulo e Grande SP',
      'Acompanhamento operacional das entregas',
    ],
    highlight: 'Entrega Direta',
    href: '/shopee-entrega-direta',
    cta: 'Conhecer a Entrega Direta',
    featured: true,
  },

  {
    id: 'same-day',
    icon: Zap,
    eyebrow: 'Última milha',
    title: 'Entregas Same Day',
    description:
      'Entregas no mesmo dia para operações de e-commerce que precisam reduzir o tempo entre a expedição do pedido e a chegada ao cliente.',
    features: [
      'Rotas de última milha',
      'Atendimento em SP e Grande São Paulo',
      'Operação dimensionada conforme volume',
      'Planejamento de coleta e distribuição',
    ],
    highlight: 'Same Day',
    cta: 'Avaliar minha operação',
    featured: false,
  },

  {
    id: 'operacao-personalizada',
    icon: Boxes,
    eyebrow: 'E-commerce',
    title: 'Operação Logística Personalizada',
    description:
      'Para lojas virtuais, marketplaces e operações que precisam de uma solução adaptada ao endereço de coleta, volume diário e regiões de entrega.',
    features: [
      'Análise do perfil da operação',
      'Definição de frequência de coleta',
      'Planejamento conforme regiões atendidas',
      'Estrutura adaptada ao crescimento do seller',
    ],
    highlight: 'Sob medida',
    cta: 'Solicitar análise',
    featured: false,
  },
];

const operationalBenefits = [
  {
    icon: Clock3,
    title: 'Coleta programada',
    description: 'Horários definidos conforme a viabilidade da operação.',
  },
  {
    icon: Route,
    title: 'Rotas planejadas',
    description: 'Distribuição organizada conforme volume e regiões.',
  },
  {
    icon: MapPin,
    title: 'Cobertura em SP',
    description: 'São Paulo e Grande SP conforme área de atendimento.',
  },
  {
    icon: MessageCircle,
    title: 'Suporte operacional',
    description: 'Comunicação para acompanhamento de coletas e entregas.',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenQuoteModal,
}) => {
  const generalWhatsApp = buildWhatsAppLink({
    message:
      'Olá! Gostaria de entender qual solução da Nobres Entregas é mais adequada para minha operação.',
  });

  const serviceWhatsApp = (serviceTitle: string) =>
    buildWhatsAppLink({
      marketplace: serviceTitle,
      message: `Olá! Tenho interesse na solução "${serviceTitle}" e gostaria de avaliar minha operação com a Nobres Entregas.`,
    });

  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[#070A12] py-20 sm:py-24"
      aria-labelledby="servicos-heading"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#008ef4]/[0.07] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-4xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00e7fe]/25 bg-[#00e7fe]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#00e7fe]">
            <PackageCheck className="h-3.5 w-3.5" />
            Soluções para sellers e e-commerce
          </div>

          <h2
            id="servicos-heading"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Logística para{' '}
            <span className="bg-gradient-to-r from-[#00e7fe] to-[#008ef4] bg-clip-text text-transparent">
              Mercado Livre, Shopee
            </span>{' '}
            e operações de e-commerce
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Estruturamos coletas e entregas de última milha para vendedores
            que precisam de mais previsibilidade, organização e agilidade em
            São Paulo e Grande São Paulo.
          </p>

        </div>

        {/* OPERATIONAL BENEFITS */}
        <div className="mb-10 grid grid-cols-2 gap-3 lg:grid-cols-4">

          {operationalBenefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-2xl border border-white/5 bg-white/[0.025] p-4 sm:p-5"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-[#00e7fe]/15 bg-[#00e7fe]/10 text-[#00e7fe]">
                  <Icon className="h-4 w-4" />
                </div>

                <h3 className="text-xs font-bold text-white sm:text-sm">
                  {benefit.title}
                </h3>

                <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500 sm:text-xs">
                  {benefit.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-300 sm:p-8 ${
                  service.featured
                    ? 'border-[#00e7fe]/20 bg-[#00e7fe]/[0.025] hover:border-[#00e7fe]/40'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.035]'
                }`}
              >
                {/* ACCENT */}
                {service.featured && (
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#008ef4]/10 blur-[80px]" />
                )}

                <div className="relative z-10 flex h-full flex-col">

                  {/* TOP */}
                  <div className="mb-6 flex items-start justify-between gap-4">

                    <div className="flex items-center gap-3">

                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${
                          service.featured
                            ? 'border-[#00e7fe]/20 bg-[#00e7fe]/10 text-[#00e7fe]'
                            : 'border-white/10 bg-white/5 text-slate-300'
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                          {service.eyebrow}
                        </p>

                        <span className="mt-1 inline-flex rounded-full border border-[#00e7fe]/15 bg-[#00e7fe]/5 px-2.5 py-0.5 text-[10px] font-semibold text-[#00e7fe]">
                          {service.highlight}
                        </span>
                      </div>

                    </div>

                    {service.featured && (
                      <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-400">
                        Especialidade Nobres
                      </span>
                    )}

                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-extrabold text-white transition-colors group-hover:text-[#00e7fe] sm:text-2xl">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {service.description}
                  </p>

                  {/* FEATURES */}
                  <div className="my-7 grid gap-3 sm:grid-cols-2">

                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />

                        <span className="text-xs leading-relaxed text-slate-300">
                          {feature}
                        </span>
                      </div>
                    ))}

                  </div>

                  {/* ACTIONS */}
                  <div className="mt-auto flex flex-col gap-3 border-t border-white/5 pt-5 sm:flex-row sm:items-center sm:justify-between">

                    {service.href ? (
                      <Link
                        to={service.href}
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#00e7fe] transition-colors hover:text-white"
                      >
                        {service.cta}

                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    ) : (
                      <a
                        href={serviceWhatsApp(service.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#00e7fe] transition-colors hover:text-white"
                      >
                        {service.cta}

                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    )}

                    <a
                      href={serviceWhatsApp(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[11px] font-semibold text-slate-500 transition-colors hover:text-slate-300"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      Falar com especialista
                    </a>

                  </div>

                </div>
              </article>
            );
          })}

        </div>

        {/* ANALYSIS CTA */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-[#00e7fe]/15 bg-gradient-to-r from-[#00e7fe]/[0.06] to-[#008ef4]/[0.03]">

          <div className="flex flex-col gap-7 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex max-w-3xl items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-400">
                  Operação personalizada
                </p>

                <h3 className="text-lg font-bold text-white sm:text-xl">
                  Não sabe qual estrutura logística sua operação precisa?
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
                  Informe seu endereço de coleta, volume médio de pacotes,
                  marketplaces utilizados e principais regiões de entrega.
                  A partir dessas informações conseguimos avaliar o formato
                  mais adequado para sua operação.
                </p>
              </div>

            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">

              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00e7fe] to-[#008ef4] px-5 py-3 text-xs font-bold text-black shadow-[0_10px_30px_rgba(0,142,244,0.18)] transition-transform hover:scale-[1.03]"
              >
                Solicitar cotação

                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={generalWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-xs font-bold text-white transition-colors hover:border-[#00e7fe]/30 hover:bg-[#00e7fe]/10"
              >
                <MessageCircle className="h-4 w-4 text-[#00e7fe]" />

                Falar no WhatsApp
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
