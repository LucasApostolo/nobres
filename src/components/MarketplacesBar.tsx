import React from 'react';
import { MARKETPLACES, Marketplace } from '../data/logisticsData';

const MarketplaceIcon = ({ id, color }: { id: string; color: string }) => {
  switch (id) {
    case 'mercadolivre':
      return (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current" style={{ color }}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
          <path d="M18.8 8.7c-.5-.9-1.4-1.5-2.4-1.7l-1.3-.3-1.1 1.1c-.2.2-.5.3-.8.3s-.6-.1-.8-.3L11.3 6.7l-1.3.3c-1 .2-1.9.8-2.4 1.7-.6 1.1-.6 2.3-.1 3.4l2.5 4.5c.3.5.8.8 1.4.9h.4c.6 0 1.1-.3 1.4-.8l1.2-2.1 1.2 2.1c.3.5.8.8 1.4.8h.4c.6 0 1.1-.3 1.4-.9l2.5-4.5c.5-1.1.5-2.3-.1-3.4z"/>
        </svg>
      );
    case 'shopee':
      return (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current" style={{ color }}>
          <path d="M19.338 6.883l-2.091-1.383c-.022-.015-.048-.022-.074-.022h-1.523V3.621C15.65 2.176 14.474 1 13.029 1h-2.058C9.526 1 8.35 2.176 8.35 3.621v1.857H6.827c-.026 0-.052.007-.074.022L4.662 6.883C4.254 7.153 4 7.609 4 8.098v10.98C4 20.138 4.862 21 5.92 21h12.16c1.058 0 1.92-.862 1.92-1.922V8.098c0-.489-.254-.945-.662-1.215zM9.85 3.621c0-.623.507-1.13 1.121-1.13h2.058c.614 0 1.121.507 1.121 1.13v1.857H9.85V3.621zm8.15 15.457c0 .237-.193.43-.43.43H6.43a.431.431 0 01-.43-.43V8.38l1.525-1.009h8.95l1.525 1.009v10.698z"/>
        </svg>
      );
    case 'amazon':
      return (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current" style={{ color }}>
          <path d="M13.722 14.34c-1.32 1.258-3.08 1.96-4.908 1.96-3.87 0-6.666-2.613-6.666-6.427C2.148 5.86 5.163 3 9.176 3c2.05 0 3.774.82 4.827 2.148l-1.63 1.488c-.682-.87-1.777-1.38-3.056-1.38-2.58 0-4.39 1.905-4.39 4.29 0 2.384 1.76 4.316 4.336 4.316 1.173 0 2.227-.477 2.946-1.228l1.513 1.706zm4.843-2.906c0 1.21-.424 2.148-1.282 2.72-.818.547-1.99.71-3.136.71h-1.01V9.223h1.364c1.118 0 1.99.218 2.536.655.573.436.855 1.118.855 2.18l-.327-.624zm2.181 0c0-1.745-.518-3.08-1.554-3.954-1.037-.872-2.537-1.28-4.502-1.28H11.85v10.5h2.836v-3.79h.845c1.173 0 2.373.19 3.245.71 1.01.627 1.528 1.69 1.528 3.08h2.918c0-1.88-.654-3.41-1.963-4.316 1.036-.954 1.472-2.263 1.472-3.95z"/>
          <path d="M19.98 18.232c-3.57 2.613-8.81 3.518-13.253 2.155-.708-.218-1.527.19-1.527.927 0 .436.273.818.71.954 4.962 1.528 10.825.518 14.814-2.399.545-.382.682-1.118.3-1.637-.355-.49-1.064-.627-1.58-.273z"/>
        </svg>
      );
    case 'magalu':
      return (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current" style={{ color }}>
          <path d="M3 7h3.5l2.5 5 2.5-5H15l2.5 5 2.5-5H21v10h-3v-5l-2.5 5h-2L11 12v5H8v-5L5.5 17H3V7z"/>
        </svg>
      );
    case 'shopify':
      return (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current" style={{ color }}>
          <path d="M15.34 2.87c-.12.04-.23.13-.28.25l-.89 2.05c-.48-.13-.98-.2-1.49-.2-.84 0-1.65.18-2.39.52L9.4 3.79c-.07-.15-.22-.24-.38-.23-.17.01-.31.12-.36.28l-1.39 4.79C5.35 9.4 4 11.3 4 13.5 4 17.09 7.58 20 12 20s8-2.91 8-6.5c0-2.18-1.32-4.06-3.23-4.88l-1.43-5.75c-.05-.17-.19-.28-.36-.29-.02 0-.04 0-.06.01zM12 18c-3.31 0-6-2.02-6-4.5S8.69 9 12 9s6 2.02 6 4.5-2.69 4.5-6 4.5z"/>
        </svg>
      );
    default:
      return null;
  }
};

export const MarketplacesBar = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {MARKETPLACES.map((mp: Marketplace) => (
        <div 
          key={mp.id} 
          className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 p-6 rounded-xl flex flex-col items-center justify-between text-center transition-all duration-300"
        >
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 mb-4">
            {mp.badge}
          </span>
          
          <div className="my-3 flex items-center justify-center h-12 w-12">
            <MarketplaceIcon id={mp.id} color={mp.iconColor} />
          </div>

          <div>
            <h3 className="text-white font-bold text-lg">{mp.name}</h3>
            <p className="text-neutral-400 text-xs mt-1">{mp.tag}</p>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-800/60 w-full flex items-center justify-center gap-1.5 text-xs text-emerald-400">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>SLA 100% no prazo</span>
          </div>
        </div>
      ))}
    </div>
  );
};
