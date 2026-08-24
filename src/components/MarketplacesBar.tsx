import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { MARKETPLACES, Marketplace } from '../data/logisticsData';

const MarketplaceLogo = ({ id }: { id: string }) => {
  switch (id) {
    case 'mercadolivre':
      return (
        <div className="flex items-center gap-2 font-bold text-yellow-400 text-lg tracking-tight">
          <svg className="w-8 h-8 fill-current text-yellow-400" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            <path d="M7 11.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V9h-7v2.5z"/>
          </svg>
          <span>Mercado Libre</span>
        </div>
      );
    case 'shopee':
      return (
        <div className="flex items-center gap-2 font-bold text-orange-500 text-lg tracking-tight">
          <svg className="w-7 h-7 fill-current text-orange-500" viewBox="0 0 24 24">
            <path d="M19 6h-3.17c-.42-1.16-1.52-2-2.83-2s-2.41.84-2.83 2H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 15H7V8h2v1c0 .55.45 1 1 1s1-.45 1-1V8h2v1c0 .55.45 1 1 1s1-.45 1-1V8h2v11z"/>
          </svg>
          <span>Shopee</span>
        </div>
      );
    case 'amazon':
      return (
        <div className="flex flex-col items-center justify-center text-white">
          <span className="font-extrabold text-xl tracking-tighter leading-none">amazon</span>
          <svg className="w-12 h-3 text-amber-500 fill-current -mt-0.5" viewBox="0 0 50 12">
            <path d="M1 8c12 4 28 4 42-3 1-1 2 1 1 2-13 8-30 8-44 2 0-1 0-1 1-1z"/>
            <path d="M41 4l5 3-2 4c0 0-1-4-3-7z"/>
          </svg>
        </div>
      );
    case 'magalu':
      return (
        <div className="flex flex-col items-center justify-center">
          <span className="font-black text-xl text-blue-500 tracking-tight lowercase">magalu</span>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 rounded-full mt-0.5"></div>
        </div>
      );
    case 'shopify':
      return (
        <div className="flex items-center gap-2 font-bold text-lime-400 text-lg tracking-tight">
          <svg className="w-7 h-7 fill-current text-lime-400" viewBox="0 0 24 24">
            <path d="M16 6h-2c0-2.21-1.79-4-4-4S6 3.79 6 6H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 15H4V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h6v2c0 .55.45 1 1 1s1-.45 1-1V8h2v11z"/>
          </svg>
          <span>Shopify</span>
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

              <div className="my-5 h-10 flex items-center justify-center w-full">
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
