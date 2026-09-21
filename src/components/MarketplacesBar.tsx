import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Marketplace = {
  id: string;
  name: string;
  borderColor: string;
};

const marketplaces: Marketplace[] = [
  {
    id: 'mercadolivre',
    name: 'Mercado Livre',
    borderColor: 'hover:border-amber-400/40',
  },
  {
    id: 'shopee',
    name: 'Shopee',
    borderColor: 'hover:border-orange-500/40',
  },
  {
    id: 'amazon',
    name: 'Amazon',
    borderColor: 'hover:border-amber-500/30',
  },
  {
    id: 'magalu',
    name: 'Magalu',
    borderColor: 'hover:border-blue-500/30',
  },
  {
    id: 'shopify',
    name: 'Shopify',
    borderColor: 'hover:border-emerald-500/30',
  },
];

const MarketplaceLogo = ({ id }: { id: string }) => {
  switch (id) {
    case 'mercadolivre':
      return (
        <div className="flex h-full w-full items-center justify-center overflow-visible">
          <img
            src="/logos/mercadolivre.png"
            alt="Mercado Livre"
            className="h-16 w-auto max-w-none scale-[1.8] object-contain sm:scale-[2.0]"
            loading="lazy"
          />
        </div>
      );

    case 'shopee':
      return (
        <div className="flex h-full w-full items-center justify-center overflow-visible">
          <img
            src="/logos/shopee.png"
            alt="Shopee"
            className="h-14 w-auto max-w-none scale-[1.6] object-contain sm:scale-[1.8]"
            loading="lazy"
          />
        </div>
      );

    case 'amazon':
      return (
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl font-extrabold leading-none tracking-tighter text-white">
            amazon
          </span>

          <svg
            className="-mt-0.5 h-3.5 w-14 fill-current text-amber-500"
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
          <span className="text-2xl font-black lowercase tracking-tight text-blue-500">
            magalu
          </span>

          <div className="mt-0.5 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400" />
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

          <span className="text-2xl font-extrabold tracking-tight text-white">
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
      className="border-y border-neutral-800/80 bg-neutral-950/80 py-14"
      aria-labelledby="marketplaces-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* CABEÇALHO */}
        <div className="mx-auto mb-10 max-w-3xl text-center">

          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Logística para marketplaces e e-commerce
          </span>

          <h2
            id="marketplaces-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Operação preparada para os principais canais de venda
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-neutral-400 sm:text-base">
            Estruturamos coletas e entregas para vendedores que operam nos
            principais marketplaces e plataformas de e-commerce.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {marketplaces.map((mp) => {
            const content = marketplaceContent[mp.id] ?? {
              badge: 'E-commerce',
              tag: 'Soluções logísticas',
              footer: 'Operação personalizada',
            };

            const cardContent = (
              <>
                <span className="rounded-full bg-neutral-800 px-2.5 py-0.5 text-[11px] font-medium text-neutral-300">
                  {content.badge}
                </span>

                <div className="my-5 flex h-14 w-full items-center justify-center overflow-visible">
                  <MarketplaceLogo id={mp.id} />
                </div>

                <div className="w-full">
                  <h3 className="text-base font-bold text-white">
                    {mp.name}
                  </h3>

                  <p className="mt-1 min-h-[32px] text-xs leading-relaxed text-neutral-400">
                    {content.tag}
                  </p>
                </div>

                <div className="mt-5 flex w-full items-center justify-center gap-1.5 border-t border-neutral-800/70 pt-3 text-xs font-medium text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />

                  <span>{content.footer}</span>
                </div>

                {content.href && (
                  <div className="mt-3 flex items-center justify-center gap-1 text-[11px] text-neutral-500 transition-colors group-hover:text-amber-400">
                    Saiba mais
                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                )}
              </>
            );

            if (content.href) {
              return (
                <Link
                  key={mp.id}
                  to={content.href}
                  className={`group flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-neutral-800/90 bg-neutral-900/90 p-5 text-center shadow-lg transition-all duration-300 hover:scale-[1.02] ${mp.borderColor}`}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div
                key={mp.id}
                className={`flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-neutral-800/90 bg-neutral-900/90 p-5 text-center shadow-lg transition-all duration-300 hover:scale-[1.02] ${mp.borderColor}`}
              >
                {cardContent}
              </div>
            );
          })}

        </div>

        {/* TEXTO DE APOIO */}
        <div className="mx-auto mt-8 max-w-4xl">

          <p className="text-center text-xs leading-relaxed text-neutral-400 sm:text-sm">
            A operação logística varia conforme a modalidade utilizada,
            endereço de coleta, volume diário e regiões de entrega. Mercado
            Livre Envios Flex e Shopee Entrega Direta possuem processos
            específicos que devem ser configurados pelo seller nas respectivas
            plataformas.
          </p>

        </div>

      </div>
    </section>
  );
};
