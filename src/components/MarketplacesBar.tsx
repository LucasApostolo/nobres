import React from 'react';
import { CheckCircle2 } from 'lucide-react';
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
          {/* Logo Oficial Shopify */}
          <svg className="h-7 w-auto fill-[#95BF47]" viewBox="0 0 24 24">
            <path d="M21.2 5.1s-1.8-.4-3.1-.4c-1.1 0-1.8.4-2.1.6L19.4 19l3.4-1.1-1.6-12.8z"/>
            <path d="M16.3 3.3c-.1 0-.8 0-1.8.3-.9-.6-1.9-.9-2.8-.9-2.7 0-4.2 1.6-4.2 3.1 0 2.2 3.2 2.8 3.2 4.2 0 .6-.5.9-1.1.9-.9 0-1.6-.4-2.1-.8l-.6 1.5c.7.5 1.7.8 2.8.8 2.5 0 4-1.4 4-3.1 0-2.3-3.2-2.7-3.2-4.2 0-.4.3-.8 1-.8.7 0 1.3.3 1.8.6l.5-1.4c-.1 0 0 0-.5-.2z"/>
            <path d="M5.3 8.4 3 18.3l13.5 2.8L14.9 7.3s-.9-.4-1.9-.4c-1.1 0-2.1.4-2.1.4L9.6 4.1 5.3 8.4z"/>
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
              className={`bg-neutral-900/90 border border-neutral-800/90 p-5 rounded-2xl flex flex-col items-center justify-between text-center transition-all duration-300 ${mp.borderColor} hover:scale-[1.02] shadow-lg overflow-hidden`}
            >
              <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300">
                {mp.badge}
              </span>

              <div className="my-5 h-14 flex items-center justify-center w-full overflow-visible">
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
