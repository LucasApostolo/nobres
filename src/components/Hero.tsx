import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  PackageCheck,
  Play,
  Truck,
} from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const operationalHighlights = [
    {
      icon: PackageCheck,
      label: 'Coletas programadas',
      color: 'text-emerald-400',
      background: 'bg-emerald-400/[0.07]',
      border: 'border-emerald-400/[0.12]',
    },
    {
      icon: Truck,
      label: 'Entregas Same Day',
      color: 'text-[#00e7fe]',
      background: 'bg-[#00e7fe]/[0.06]',
      border: 'border-[#00e7fe]/[0.12]',
    },
    {
      icon: MapPin,
      label: 'São Paulo e Grande SP',
      color: 'text-emerald-400',
      background: 'bg-emerald-400/[0.07]',
      border: 'border-emerald-400/[0.12]',
    },
  ];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-16 pt-10 tech-grid-pattern md:pb-20 md:pt-14 lg:pb-24 lg:pt-16"
    >
      {/* Ambient light */}
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] -z-10 h-[520px] w-[520px] rounded-full bg-[#008ef4] opacity-[0.075] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-220px] left-[-180px] -z-10 h-[480px] w-[480px] rounded-full bg-[#00e7fe] opacity-[0.04] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Conteúdo */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00e7fe]/15 bg-[#00e7fe]/[0.05] px-3.5 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00e7fe] opacity-30" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00e7fe]" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#66eefe] sm:text-[11px]">
                Logística especializada para sellers
              </span>
            </div>

            {/* H1 — texto preservado para SEO */}
            <h1 className="mb-6 max-w-[880px] text-[2.55rem] font-extrabold leading-[1.04] tracking-[-0.035em] text-white sm:text-[3.25rem] lg:text-[3.35rem] xl:text-[3.65rem]">
              Transportadora para{' '}
              <span className="bg-gradient-to-r from-[#00e7fe] to-[#008ef4] bg-clip-text text-transparent">
                Mercado Livre Envios Flex
              </span>{' '}
              e{' '}
              <span className="bg-gradient-to-r from-[#00e7fe] to-[#008ef4] bg-clip-text text-transparent">
                Shopee Entrega Direta
              </span>{' '}
              em São Paulo
            </h1>

            {/* Descrição */}
            <p className="mb-7 max-w-[720px] text-[15px] font-normal leading-[1.8] text-slate-400 sm:text-[17px]">
              Coletas programadas no seu CD, loja ou operação, com entregas
              no mesmo dia em São Paulo e Grande São Paulo. A{' '}
              <strong className="font-medium text-slate-200">
                Nobres Entregas
              </strong>{' '}
              é especializada em Mercado Livre Envios Flex e Shopee Entrega
              Direta, oferecendo mais agilidade e controle para sua operação.
            </p>

            {/* Destaques operacionais */}
            <div className="mb-8 grid w-full grid-cols-1 gap-2.5 sm:grid-cols-3">
              {operationalHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3.5 py-3"
                  >
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${item.background} ${item.border}`}
                    >
                      <Icon className={`h-3.5 w-3.5 ${item.color}`} />
                    </div>

                    <span className="text-[11px] font-medium text-slate-300 xl:text-xs">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="group flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#00e7fe] to-[#008ef4] px-7 py-3.5 text-sm font-bold text-[#031015] shadow-[0_10px_32px_rgba(0,142,244,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(0,142,244,0.30)] active:translate-y-0 sm:text-[15px]"
              >
                <span>Quero Cotar Minha Operação</span>

                <ArrowRight className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#passo-a-passo"
                className="group flex items-center justify-center gap-2.5 rounded-xl border border-white/[0.09] bg-white/[0.025] px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.05] hover:text-white"
              >
                <span>Como Funciona a Coleta</span>

                <ArrowRight className="h-4 w-4 text-slate-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-slate-300" />
              </a>
            </div>

            {/* Micro confiança */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400/80" />
                Operação para sellers
              </div>

              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400/80" />
                Atendimento comercial especializado
              </div>

              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400/80" />
                Cobertura regional
              </div>
            </div>
          </div>

          {/* Vídeo */}
          <div className="relative w-full lg:col-span-5">
            {/* glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00e7fe]/10 blur-[80px]" />

            <div className="group relative overflow-hidden rounded-[26px] border border-[#00e7fe]/20 bg-white/[0.025] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl">
              <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#00e7fe]/10 blur-[55px]" />

              <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-[19px] border border-white/[0.08] bg-black">
                {!isPlaying ? (
                  <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 to-black">
                    <img
                      src="/logos/cover-meli-shopee.png"
                      alt="Apresentação da operação Nobres Entregas para Mercado Livre Envios Flex e Shopee Entrega Direta"
                      className="h-full w-full object-cover opacity-[0.78] transition-transform duration-700 group-hover:scale-[1.025]"
                    />

                    {/* overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />

                    <button
                      type="button"
                      onClick={() => setIsPlaying(true)}
                      className="group/play absolute flex h-[68px] w-[68px] items-center justify-center rounded-full border border-white/20 bg-gradient-to-r from-[#00e7fe] to-[#008ef4] text-black shadow-[0_0_35px_rgba(0,231,254,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_45px_rgba(0,231,254,0.48)] active:scale-95"
                      aria-label="Assistir apresentação da Nobres Entregas"
                    >
                      <Play className="ml-1 h-7 w-7 fill-current transition-transform duration-300 group-hover/play:scale-105" />
                    </button>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-xl border border-white/[0.09] bg-black/65 px-3.5 py-2.5 backdrop-blur-md">
                      <div className="min-w-0">
                        <p className="truncate text-[11px] font-semibold text-white sm:text-xs">
                          Conheça a operação Nobres Entregas
                        </p>
                      </div>

                      <span className="shrink-0 text-[11px] font-bold text-[#00e7fe]">
                        0:18
                      </span>
                    </div>
                  </div>
                ) : (
                  <video
                    controls
                    autoPlay
                    playsInline
                    className="h-full w-full object-cover"
                    src="/videos/apresentacao.mp4"
                  >
                    Seu navegador não suporta a exibição deste vídeo.
                  </video>
                )}
              </div>
            </div>

            {/* legenda externa */}
            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-600 lg:justify-start">
              <span className="h-1 w-1 rounded-full bg-[#00e7fe]" />
              Operação logística para marketplaces
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
