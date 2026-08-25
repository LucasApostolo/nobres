import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ShieldCheck, Phone } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lista encurtada de links para dar respiro ao layout
  const navLinks = [
    { label: 'Soluções', href: '#servicos' },
    { label: 'Comparativo', href: '#comparativo' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Cobertura', href: '#cobertura' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <>
      {/* Top operational announcement ticker */}
      <div className="bg-[#070A12] border-b border-white/5 py-2 px-4 text-xs font-medium text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
            </span>
            <span className="text-[#10B981] font-bold uppercase tracking-wider text-[10px]">Status:</span>
            <span className="text-slate-300 hidden sm:inline">Coletas e Entregas Same Day em São Paulo e Grande SP em andamento hoje</span>
            <span className="text-slate-300 sm:hidden">Coletas Same Day ativas em SP</span>
          </div>

          <div className="hidden md:flex items-center space-x-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-[#00e7fe]">
              <ShieldCheck className="w-3.5 h-3.5" /> Reputação Verde Protegida (99.4%)
            </span>
            <span className="text-white/10">|</span>
            <a 
              href={buildWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#00e7fe] flex items-center gap-1.5 text-slate-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-[#00e7fe]" /> (11) 98022-4789
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070A12]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80 py-3'
            : 'bg-[#070A12]/70 backdrop-blur-md border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Oficial com Fallback */}
            <a href="#inicio" className="flex items-center gap-3 group">
              <img 
                src="/logos/nobres.png" 
                alt="Nobres Entregas Flex" 
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                    Nobres Entregas <span className="text-[#00e7fe]">Flex</span>
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-medium tracking-wide">
                  Logística Same Day • São Paulo
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Limpo e Encurtado) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={onOpenQuoteModal}
                className="px-4 py-2 text-xs font-semibold text-white/80 hover:text-white rounded-full border border-white/10 hover:border-white/20 bg-white/[0.03] transition-all cursor-pointer"
              >
                Cotar Coleta
              </button>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white/5 border border-[#00e7fe]/30 rounded-full flex items-center gap-2 text-xs font-semibold text-white hover:bg-[#00e7fe]/10 transition-all shadow-[0_0_20px_rgba(0,231,254,0.1)] group"
              >
                <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></span>
                <span>Falar com Especialista</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#070A12]/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in fade-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 pb-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-[#00e7fe] rounded-lg bg-white/[0.03] border border-white/5 text-center"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold text-slate-200 rounded-xl border border-white/10 bg-white/5"
              >
                Simular e Cotar Coleta
              </button>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold text-black rounded-xl bg-gradient-to-r from-[#00e7fe] to-[#008ef4] shadow-[0_10px_30px_rgba(0,142,244,0.3)]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Falar com Especialista no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
