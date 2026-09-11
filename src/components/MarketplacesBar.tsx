import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MARKETPLACES, Marketplace } from '../data/logisticsData';

const MarketplaceLogo = ({ id }: { id: string }) => {
  switch (id) {
    case 'mercadolivre':
      return (
        <div className="flex items-center justify-center w-full h-full overflow-visible">
          <img
            src="/logos/mercadolivre.png"
            alt="Mercado Livre"
            className="h-16 w-auto max-w-none object-contain scale-[1.8] sm:scale-[2.0]"
            loading="lazy"
          />
        </div>
      );

    case 'shopee':
      return (
        <div className="flex items-center justify-center w-full h-full overflow-visible">
          <img
            src="/logos/shopee.png"
            alt="Shopee"
            className="h-14 w-auto max-w-none object-contain scale-[1.6] sm:scale-[1.8]"
            loading="lazy"
          />
        </div>
      );

    case 'amazon':
      return (
        <div className="flex flex-col items-center justify-center">
          <span className="font-extrabold text-2xl text-white tracking-tighter leading-none">
            amazon
          </span>

          <svg
            className="w-14 h-3.5 text-amber-500 fill-current -mt-0.5"
            viewBox="0 0 50 12"
            aria-hidden="true"
          >
            <path d="M1 8c12 4 28 4 42-3 1-1 2 1 1 2-13 8-30 8-44 2 0-1 0-1 1-1z" />
            <path d="M41 4l5 3-2 4c0 0-1-4-3-7z" />
          </svg>
        </div>
      );

    case 'magalu':
      return (
        <div className="flex flex-col items-center justify-center">
          <span className="font-black text-2xl text-blue-500 tracking-tight lowercase">
            magalu
          </span>

          <div className="h-1 w-14 bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 rounded-full mt-0.5" />
        </div>
      );

    case 'shopify':
      return (
        <div className="flex items-center justify-center gap-2">
          <svg
            className="h-7 w-auto fill-[#95BF47]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M21.2 5.1s-1.8-.4-3.1-.4c-1.1 0-1.8.4-2.1.6L19.4 19l3.4-1.1-1.6-12.8z" />
            <path d="M16.3 3.3c-.1 0-.8 0-1.8.3-.9-.6-1.9-.9-2.8-.9-2.7 0-4.2 1.6-4.2 3.1 0 2.2 3.2 2.8 3.2 4.2 0 .6-.5.9-1.1.9-.9 0-1.6-.4-2.1-.8l-.6 1.5c.7.5 1.7.8 2.8.8 2.5 0 4-1.4 4-3.1 0-2.3-3.2-2.7-3.2-4.2 0-.4.3-.8 1-.8.7 0 1.3.3 1.8.6l.5-1.4c-.1 0 0 0-.5-.2z" />
            <path d="M5.3 8.4 3 18.3l13.5 2.8L14.9 7.3s-.9-.4-1.9-.4c-1.1 0-2.1.4-2.1.4L9.6 4.1 5.3 8.4z" />
          </svg>

          <span className="font-extrabold text-2xl text-white tracking-tight">
            shopify
          </span>
        </div>
      );

    default:
      return null;
  }
};

const marketplaceContent: Record<
  string,
  {
    badge: string;
    tag: string;
    footer: string;
    href?: string;
  }
> = {
  mercadolivre: {
    badge: 'Envios Flex',
    tag: 'Operação para sellers Mercado Livre',
    footer: 'Coletas e entregas para Envios Flex',
    href: '/mercado-livre-envios-flex',
  },

  shopee: {
    badge: 'Entrega Direta',
    tag: 'Operação para sellers Shopee',
    footer: 'Logística para Shopee Entrega Direta',
    href: '/shopee-entrega-direta',
  },

  amazon: {
    badge: 'E-commerce',
    tag: 'Soluções logísticas para vendedores',
    footer: 'Coletas e entregas conforme operação',
  },

  magalu: {
    badge: 'Marketplace',
    tag: 'Soluções para operações de e-commerce',
    footer: 'Logística adaptada ao seu volume',
  },

  shopify: {
    badge: 'Loja própria',
    tag: 'Logística para lojas virtuais',
    footer: 'Entrega para operações D2C',
  },
};

export const MarketplacesBar: React.FC = () => {
  return (
    <section
      className="py-14 bg-neutral-950/80 border-y border-neutral-800/80"
      aria-labelledby="marketplaces-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CABEÇALHO */}
        <div className="text-center max-w-3xl mx-auto mb-10">

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-emerald-400 mb-3 uppercase tracking-wider">
            Logística para marketplaces e e-commerce
          </span>

          <h2
            id="marketplaces-heading"
            className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
          >
            Operação preparada para os principais canais de venda
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 mt-3 leading-relaxed">
            Estruturamos coletas e entregas para vendedores que operam
            nos principais marketplaces e plataformas de e-commerce.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

          {MARKETPLACES.map((mp: Marketplace) => {
            const content = marketplaceContent[mp.id] ?? {
              badge: 'E-commerce',
              tag: 'Soluções logísticas',
              footer: 'Operação personalizada',
            };

            const cardContent = (
              <>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300">
                  {content.badge}
                </span>

                <div className="my-5 h-14 flex items-center justify-center w-full overflow-visible">
                  <MarketplaceLogo id={mp.id} />
                </div>

                <div className="w-full">
                  <h3 className="text-white font-bold text-base">
                    {mp.name}
                  </h3>

                  <p className="text-neutral-400 text-xs mt-1 leading-relaxed min-h-[32px]">
                    {content.tag}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-800/70 w-full flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-medium">

                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />

                  <span>{content.footer}</span>

                </div>

                {content.href && (
                  <div className="mt-3 flex items-center justify-center gap-1 text-[11px] text-neutral-500 group-hover:text-amber-400 transition-colors">
                    Saiba mais
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                )}
              </>
            );

            if (content.href) {
              return (
                <Link
                  key={mp.id}
                  to={content.href}
                  className={`group bg-neutral-900/90 border border-neutral-800/90 p-5 rounded-2xl flex flex-col items-center justify-between text-center transition-all duration-300 ${mp.borderColor} hover:scale-[1.02] shadow-lg overflow-hidden`}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div
                key={mp.id}
                className={`bg-neutral-900/90 border border-neutral-800/90 p-5 rounded-2xl flex flex-col items-center justify-between text-center transition-all duration-300 ${mp.borderColor} hover:scale-[1.02] shadow-lg overflow-hidden`}
              >
                {cardContent}
              </div>
            );
          })}

        </div>

        {/* TEXTO DE APOIO */}
        <div className="max-w-4xl mx-auto mt-8">

          <p className="text-center text-xs sm:text-sm text-neutral-400 leading-relaxed">
            A operação logística varia conforme a modalidade utilizada,
            endereço de coleta, volume diário e regiões de entrega.
            Mercado Livre Envios Flex e Shopee Entrega Direta possuem
            processos específicos que devem ser configurados pelo seller
            nas respectivas plataformas.
          </p>

        </div>

      </div>
    </section>
  );
};
