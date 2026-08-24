import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { MARKETPLACES, Marketplace } from '../data/logisticsData';

const MarketplaceLogo = ({ id }: { id: string }) => {
  switch (id) {
    case 'mercadolivre':
      return (
        <div className="flex items-center justify-center w-full overflow-visible">
          <img 
            src="/logos/mercadolivre.png" 
            alt="Mercado Livre" 
            className="h-16 sm:h-20 w-auto object-contain scale-[2.2] filter brightness-200 contrast-125" 
          />
        </div>
      );
    case 'shopee':
      return (
        <div className="flex items-center justify-center w-full overflow-visible">
          <img 
            src="/logos/shopee.png" 
            alt="Shopee" 
            className="h-14 sm:h-16 w-auto object-contain scale-[2.1]" 
          />
        </div>
      );
    case 'amazon':
      return (
        <div className="flex flex-col items-center justify-center">
          <span className="font-extrabold text-2xl text-white tracking-tighter leading-none">amazon</span>
          <svg className="w-14 h-3.5 text-amber-500 fill-current -mt-0.5" viewBox="0 0 50 12">
            <path d="M1 8c12 4 28 4 42-3 1-1 2 1 1 2-13 8-30 8-44 2 0-1 0-1 1-1z"/>
            <path d="M41 4l5 3-2 4c0 0-1-4-3-7z"/>
          </svg>
        </div>
      );
    case 'magalu':
      return (
        <div className="flex flex-col items-center justify-center">
          <span className="font-black text-2xl text-blue-500 tracking-tight lowercase">magalu</span>
          <div className="h-1 w-14 bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 rounded-full mt-0.5"></div>
        </div>
      );
    case 'shopify':
      return (
        <div className="flex items-center justify-center gap-2">
          {/* Logo Oficial Shopify (Intacto) */}
          <svg className="h-8 w-auto fill-current text-[#95BF47]" viewBox="0 0 108 122">
            <path d="M85.5 17.6c-1.2-3.8-4.2-4.1-4.2-4.1s-3.2-.3-6.2.7c-2.8-5.3-7.8-8.9-14.1-8.9h-.6c-1.3-2.1-3.6-3.5-6.2-3.5-4.4 0-7.8 3.4-8 7.7-4.5.9-8.5 3.3-11.2 6.8-4.1 5.3-4.8 12.6-4.8 12.6l-13.6 3.8s-4.3 1.2-5.4 5.3c-1 4.1.3 22.8 1.8 33.2 1.5 10.4 12.3 49.3 13.5 53.3 1.2 4 4.5 6.7 8.5 6.7 0 0 34.6 0 45.4 0 7.8 0 13.3-5.3 14.5-12.7 2.3-14.8 12.6-78.2 12.6-78.2s1.1-4.8-2-9.2zM52 11.2c2.1 0 3.8 1.7 3.8 3.8 0 .4-.1.8-.2 1.2l-7.3 2c.7-4 2.3-7 3.7-7zM36.1 18.2c2.2-2.9 5.5-4.8 9.3-5.3l3.5 19.3-10.8 3c.1-.4 1.3-12.5-2-17zm35.2 92.5c-.7 4.1-3.6 6.8-7.8 6.8H28.4c-2.2 0-4-1.5-4.7-3.8C22.6 110 12.7 73.8 11.4 64.1c-1.2-8.8-1.5-23-.8-26.1.7-2.8 3.1-3.6 3.1-3.6l10.9-3.1 15 82.2c.4 2.2 2.3 3.8 4.5 3.8 0 0 .1 0 .2 0 2.4-.2 4.1-2.2 4-4.6l-1.3-33.1 11.7-3.3 17 48.7z"/>
          </svg>
          <span className="font-extrabold text-2xl text-white tracking-tight">shopify</span>
        </div>
      );
    default:
      return null;
  }
};

export const MarketplacesBar: React.FC = () => {
  return (
    <section className="py-12 bg-neutral-950/80 border-y border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-emerald-400 mb-3 uppercase tracking-wider">
            Compatibilidade e Homologação Total
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            HOMOLOGADO E OTIMIZADO PARA OS MAIORES MARKETPLACES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {MARKETPLACES.map((mp: Marketplace) => (
            <div
              key={mp.id}
              className={`bg-neutral-900/90 border border-neutral-800/90 p-5 rounded-2xl flex flex-col items-center justify-between text-center transition-all duration-300 ${mp.borderColor} hover:scale-[1.02] shadow-lg`}
            >
              <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300">
                {mp.badge}
              </span>

              <div className="my-5 h-12 flex items-center justify-center w-full overflow-visible">
                <MarketplaceLogo id={mp.id} />
              </div>

              <div className="w-full">
                <h3 className="text-white font-bold text-base">{mp.name}</h3>
                <p className="text-neutral-400 text-xs mt-0.5">{mp.tag}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-800/70 w-full flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>SLA 100% no prazo</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-neutral-400 mt-6 flex items-center justify-center gap-2">
          <span>⚡ Bipagem rápida integrada no app do marketplace</span>
          <span>•</span>
          <span>🛡️ Conformidade total com as regras de cancelamento e reputação</span>
        </p>
      </div>
    </section>
  );
};
