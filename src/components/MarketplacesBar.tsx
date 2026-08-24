import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { MARKETPLACES, Marketplace } from '../data/logisticsData';

const MarketplaceLogo = ({ id }: { id: string }) => {
  switch (id) {
    case 'mercadolivre':
      return (
        <div className="flex items-center justify-center">
          {/* Logo Oficial Mercado Livre: Aperto de Mãos dentro da elipse amarela */}
          <svg className="h-10 w-auto" viewBox="0 0 100 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0C22.3858 0 0 15.2223 0 34C0 52.7777 22.3858 68 50 68C77.6142 68 100 52.7777 100 34C100 15.2223 77.6142 0 50 0Z" fill="#FFE600"/>
            <path d="M68.5 24.5C66.8 22.8 64.1 22.8 62.4 24.5L52.8 34.1L48.2 29.5C46.5 27.8 43.8 27.8 42.1 29.5L30.5 41.1C28.8 42.8 28.8 45.5 30.5 47.2C32.2 48.9 34.9 48.9 36.6 47.2L45.2 38.6L49.8 43.2C51.5 44.9 54.2 44.9 55.9 43.2L68.5 30.6C70.2 28.9 70.2 26.2 68.5 24.5Z" fill="#2D3277"/>
            <path d="M41.8 38.2L36.2 32.6C34.5 30.9 31.8 30.9 30.1 32.6L27.5 35.2C25.8 36.9 25.8 39.6 27.5 41.3L36.1 49.9C37.8 51.6 40.5 51.6 42.2 49.9L44.8 47.3C46.5 45.6 46.5 42.9 44.8 41.2L41.8 38.2Z" fill="#2D3277"/>
          </svg>
        </div>
      );
    case 'shopee':
      return (
        <div className="flex items-center justify-center gap-2">
          {/* Sacola Oficial Shopee */}
          <svg className="w-8 h-8 text-[#EE4D2D] fill-current" viewBox="0 0 24 24">
            <path d="M19.35 6.04h-3.23a4.12 4.12 0 0 0-8.24 0H4.65A1.65 1.65 0 0 0 3 7.69l.86 12.1A2.48 2.48 0 0 0 6.34 22h11.32a2.48 2.48 0 0 0 2.48-2.21l.86-12.1a1.65 1.65 0 0 0-1.65-1.65ZM12 3.5a2.47 2.47 0 0 1 2.47 2.54H9.53A2.47 2.47 0 0 1 12 3.5Zm-2.8 11.23c0-.8.64-1.35 1.83-1.64l1.24-.3c1.3-.31 1.88-.78 1.88-1.57 0-.97-.93-1.55-2.22-1.55-1.37 0-2.31.67-2.37 1.73H7.83c.08-2.02 1.8-3.15 4.11-3.15 2.41 0 4.02 1.2 4.02 3.01 0 1.54-.95 2.27-2.67 2.68l-1.12.27c-1.01.24-1.42.6-1.42 1.22 0 .76.82 1.3 2.12 1.3 1.48 0 2.41-.62 2.53-1.74h1.72c-.11 2.08-1.77 3.22-4.22 3.22-2.58 0-4.28-1.28-4.28-3.18Z" />
          </svg>
          <span className="font-extrabold text-2xl text-[#EE4D2D] tracking-tight">Shopee</span>
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
          {/* Sacola Oficial Shopify com o S verde */}
          <svg className="w-8 h-8 text-[#95BF47] fill-current" viewBox="0 0 24 24">
            <path d="M15.34 3.26a.5.5 0 0 0-.48-.33c-.04 0-.82.02-1.8.27-.92-.62-1.92-.85-2.8-.85-2.73 0-4.22 1.63-4.22 3.1 0 2.22 3.2 2.76 3.2 4.18 0 .58-.45.92-1.12.92-.86 0-1.63-.44-2.12-.8l-.58 1.48c.67.5 1.68.85 2.78.85 2.45 0 4.02-1.37 4.02-3.12 0-2.33-3.21-2.72-3.21-4.2 0-.42.34-.78.96-.78.68 0 1.34.25 1.83.56l.54-1.36Z"/>
            <path d="M20.2 6.55s-1.8-.38-3.08-.38c-1.14 0-1.78.36-2.07.62l3.43 12.27 3.42-1.07-1.7-11.44Z"/>
            <path d="M4.3 8.35 2 18.25l13.52 2.78L13.88 7.3s-.9-.4-1.87-.4c-1.12 0-2.13.38-2.13.38L8.6 4.12 4.3 8.35Z"/>
          </svg>
          <span className="font-bold text-xl text-[#95BF47] tracking-tight">shopify</span>
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

              <div className="my-5 h-12 flex items-center justify-center w-full">
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
