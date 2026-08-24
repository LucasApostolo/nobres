import React, { useState } from 'react';
import { X, MessageCircle, Truck } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  const [contactName, setContactName] = useState('');
  const [storeName, setStoreName] = useState('');
  const [marketplace, setMarketplace] = useState('Mercado Livre Flex');
  const [neighborhood, setNeighborhood] = useState('Zona Leste - SP');
  const [dailyPackages, setDailyPackages] = useState('30 a 50');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = buildWhatsAppLink({
      contactName,
      storeName,
      marketplace,
      neighborhood,
      dailyPackages,
      message: message || 'Gostaria de agendar a primeira coleta e saber a janela exata de horário.'
    });
    window.open(link, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-[#070A12] border border-[#00e7fe]/30 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl overflow-hidden text-left">
        
        {/* Glow backdrop inside modal */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#008ef4]/10 rounded-full blur-[70px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#00e7fe] to-[#008ef4] p-[1px] shadow-[0_0_15px_rgba(0,231,254,0.3)] flex items-center justify-center">
            <div className="w-full h-full bg-[#070A12] rounded-[15px] flex items-center justify-center text-[#00e7fe]">
              <Truck className="w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-white">Cotar Rota de Coleta Flex</h3>
            <p className="text-xs text-slate-400">Receba a proposta e janela de horário em minutos</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Seu Nome</label>
              <input
                type="text"
                required
                placeholder="Ex: Lucas Silva"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00e7fe] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Nome da sua Loja</label>
              <input
                type="text"
                required
                placeholder="Ex: Tech SP Store"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00e7fe] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Canal Principal</label>
              <select
                value={marketplace}
                onChange={(e) => setMarketplace(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#00e7fe] transition-colors [&>option]:bg-[#070A12]"
              >
                <option value="Mercado Livre Flex">Mercado Livre Flex</option>
                <option value="Shopee Direta & Flex">Shopee Direta & Flex</option>
                <option value="Amazon Prime Flex">Amazon Prime Flex</option>
                <option value="Magalu Entregas">Magalu Entregas</option>
                <option value="Site Próprio / WhatsApp">Site Próprio / WhatsApp</option>
                <option value="Vários Marketplaces">Vários Marketplaces</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Média Diária de Pacotes</label>
              <select
                value={dailyPackages}
                onChange={(e) => setDailyPackages(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#00e7fe] transition-colors [&>option]:bg-[#070A12]"
              >
                <option value="1 a 10 pacotes/dia">1 a 10 pacotes/dia</option>
                <option value="11 a 30 pacotes/dia">11 a 30 pacotes/dia</option>
                <option value="31 a 80 pacotes/dia">31 a 80 pacotes/dia</option>
                <option value="81 a 200 pacotes/dia">81 a 200 pacotes/dia</option>
                <option value="Mais de 200 pacotes/dia">Mais de 200 pacotes/dia</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Bairro / Região de Coleta em SP</label>
            <input
              type="text"
              required
              placeholder="Ex: Tatuapé, Mooca, Brás, Santo Amaro, Pinheiros, etc."
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00e7fe] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Observações ou Dúvidas (Opcional)</label>
            <textarea
              rows={2}
              placeholder="Ex: Gostaria de coletar às 14h e saber sobre atendimento aos sábados..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00e7fe] resize-none transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00e7fe] to-[#008ef4] text-black font-bold text-sm flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(0,142,244,0.3)] hover:scale-105 transition-transform cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Enviar e Iniciar Conversa no WhatsApp</span>
          </button>

          <p className="text-center text-[10px] text-slate-400">
            🔒 Seus dados são protegidos e usados apenas para o atendimento operacional.
          </p>
        </form>

      </div>
    </div>
  );
};
