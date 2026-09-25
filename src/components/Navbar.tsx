import React, { useEffect, useState } from 'react';
import {
  ChevronDown,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Truck,
  X,
} from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [regionsOpen, setRegionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setRegionsOpen(false);
  };

  const serviceLinks = [
    {
      label: 'Mercado Livre Envios Flex',
      description: 'Logística para sellers com operação Flex.',
      href: '/mercado-livre-envios-flex',
      icon: Truck,
    },
    {
      label: 'Shopee Entrega Direta',
      description: 'Coletas e entregas para sellers Shopee.',
      href: '/shopee-entrega-direta',
      icon: PackageCheck,
    },
  ];

  const regionLinks = [
    {
      label: 'Todas as regiões',
      href: '/atendimento',
    },
    {
      label: 'Guarulhos',
      href: '/atendimento/guarulhos',
    },
    {
      label: 'Osasco',
      href: '/atendimento/osasco',
    },
    {
      label: 'São Bernardo do Campo',
      href: '/atendimento/sao-bernardo-do-campo',
    },
    {
      label: 'Mogi das Cruzes',
      href: '/atendimento/mogi-das-cruzes',
    },
    {
      label: 'Suzano',
      href: '/atendimento/suzano',
    },
  ];

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      {/* Barra superior */}
      <div className="border-b border-white/[0.06] bg-[#05070c]">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="truncate text-[10px] font-medium tracking-wide text-slate-400 sm:text-[11px]">
              Logística Same Day para sellers em São Paulo e Grande SP
            </span>
          </div>

          <a
            href="/atendimento"
            className="hidden items-center gap-1.5 text-[10px] font-semibold text-slate-400 transition-colors hover:text-[#00e7fe] sm:flex sm:text-[11px]"
          >
            <MapPin className="h-3 w-3" />
            Consultar regiões atendidas
          </a>
        </div>
      </div>

      {/* Navbar principal */}
      <header
        className={`border-b transition-all duration-300 ${
          isScrolled
            ? 'border-white/[0.08] bg-[#070A12]/95 shadow-[0_12px_40px_rgba(0,0,0,0.32)] backdrop-blur-2xl'
            : 'border-white/[0.06] bg-[#070A12]/88 backdrop-blur-xl'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? 'h-[68px]' : 'h-[76px]'
            }`}
          >
            {/* Logo */}
            <a
              href="/"
              onClick={closeMobileMenu}
              className="group flex min-w-0 items-center gap-3"
              aria-label="Nobres Entregas - Página inicial"
            >
              <img
                src="/logos/nobres.png"
                alt="Nobres Entregas"
                className="h-9 w-auto shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-10"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />

              <div className="hidden min-w-0 flex-col sm:flex">
                <span className="truncate text-[17px] font-bold tracking-[-0.02em] text-white lg:text-[18px]">
                  Nobres Entregas
                </span>

                <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-slate-500">
                  Logística para marketplaces
                </span>
              </div>
            </a>

            {/* Desktop */}
            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label="Navegação principal"
            >
              <a
                href="/"
                className="rounded-lg px-3 py-2 text-[13px] font-medium text-slate-300 transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                Início
              </a>

              {/* Dropdown Soluções */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen((current) => !current)}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-medium text-slate-300 transition-colors hover:bg-white/[0.04] hover:text-white"
                  aria-expanded={servicesOpen}
                >
                  Soluções

                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                    servicesOpen
                      ? 'visible translate-y-0 opacity-100'
                      : 'invisible -translate-y-1 opacity-0'
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0A0D16]/98 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
                    <div className="px-3 pb-2 pt-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Soluções para sellers
                      </span>
                    </div>

                    {serviceLinks.map((item) => {
                      const Icon = item.icon;

                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.05]"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#00e7fe]/15 bg-[#00e7fe]/[0.06] text-[#00e7fe]">
                            <Icon className="h-[18px] w-[18px]" />
                          </div>

                          <div>
                            <div className="text-[13px] font-semibold text-white">
                              {item.label}
                            </div>

                            <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      );
                    })}

                    <div className="mt-2 border-t border-white/[0.06] p-2">
                      <a
                        href="/mercado-livre-envios-flex/regioes-atendidas"
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-[11px] font-medium text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white"
                      >
                        Ver cobertura Mercado Livre Envios Flex
                        <span className="text-[#00e7fe]">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dropdown Regiões */}
              <div
                className="relative"
                onMouseEnter={() => setRegionsOpen(true)}
                onMouseLeave={() => setRegionsOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setRegionsOpen((current) => !current)}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-medium text-slate-300 transition-colors hover:bg-white/[0.04] hover:text-white"
                  aria-expanded={regionsOpen}
                >
                  Regiões

                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      regionsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`absolute left-1/2 top-full w-[300px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                    regionsOpen
                      ? 'visible translate-y-0 opacity-100'
                      : 'invisible -translate-y-1 opacity-0'
                  }`}
                >
                  <div className="rounded-2xl border border-white/[0.09] bg-[#0A0D16]/98 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
                    <div className="px-3 pb-2 pt-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Cobertura regional
                      </span>
                    </div>

                    {regionLinks.map((item, index) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-[12px] transition-colors hover:bg-white/[0.05] hover:text-white ${
                          index === 0
                            ? 'mb-1 font-semibold text-[#00e7fe]'
                            : 'font-medium text-slate-400'
                        }`}
                      >
                        {item.label}

                        {index === 0 && <span>→</span>}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="/mercado-livre-envios-flex/como-ativar"
                className="rounded-lg px-3 py-2 text-[13px] font-medium text-slate-300 transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                Como funciona
              </a>

              <a
                href="/#faq"
                className="rounded-lg px-3 py-2 text-[13px] font-medium text-slate-300 transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                Dúvidas
              </a>
            </nav>

            {/* CTA Desktop */}
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.03] text-slate-400 transition-all hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-white"
                aria-label="Falar com a Nobres pelo WhatsApp"
              >
                <MessageCircle className="h-[17px] w-[17px]" />
              </a>

              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#00e7fe] to-[#009cf4] px-5 py-2.5 text-[12px] font-bold text-[#031015] shadow-[0_8px_28px_rgba(0,190,240,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(0,190,240,0.28)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar cotação
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </button>
            </div>

            {/* Mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.03] text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white lg:hidden"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div
          className={`overflow-hidden border-t border-white/[0.06] bg-[#070A12]/98 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
            mobileMenuOpen
              ? 'max-h-[85vh] opacity-100'
              : 'max-h-0 border-transparent opacity-0'
          }`}
        >
          <div className="max-h-[calc(100vh-110px)] overflow-y-auto px-4 py-5 sm:px-6">
            <div className="space-y-1">
              <a
                href="/"
                onClick={closeMobileMenu}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.04]"
              >
                Início
              </a>

              {/* Mobile soluções */}
              <button
                type="button"
                onClick={() => setServicesOpen((current) => !current)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.04]"
              >
                Soluções

                <ChevronDown
                  className={`h-4 w-4 text-slate-500 transition-transform ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="space-y-1 px-2 pb-2">
                  {serviceLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00e7fe]/[0.07] text-[#00e7fe]">
                          <Icon className="h-4 w-4" />
                        </div>

                        <div>
                          <div className="text-xs font-semibold text-white">
                            {item.label}
                          </div>

                          <div className="mt-0.5 text-[10px] text-slate-500">
                            {item.description}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}

              {/* Mobile regiões */}
              <button
                type="button"
                onClick={() => setRegionsOpen((current) => !current)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.04]"
              >
                Regiões atendidas

                <ChevronDown
                  className={`h-4 w-4 text-slate-500 transition-transform ${
                    regionsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {regionsOpen && (
                <div className="grid grid-cols-2 gap-2 px-2 pb-2">
                  {regionLinks.map((item, index) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`rounded-lg border px-3 py-2.5 text-center text-[11px] font-medium ${
                        index === 0
                          ? 'col-span-2 border-[#00e7fe]/15 bg-[#00e7fe]/[0.06] text-[#00e7fe]'
                          : 'border-white/[0.06] bg-white/[0.025] text-slate-400'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}

              <a
                href="/mercado-livre-envios-flex/como-ativar"
                onClick={closeMobileMenu}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.04]"
              >
                Como funciona
              </a>

              <a
                href="/#faq"
                onClick={closeMobileMenu}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.04]"
              >
                Dúvidas frequentes
              </a>
            </div>

            <div className="mt-5 border-t border-white/[0.07] pt-5">
              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  onOpenQuoteModal();
                }}
                className="w-full rounded-xl bg-gradient-to-r from-[#00e7fe] to-[#009cf4] px-5 py-3.5 text-sm font-bold text-[#031015] shadow-[0_10px_30px_rgba(0,190,240,0.18)]"
              >
                Solicitar cotação
              </button>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-xs font-semibold text-slate-300"
              >
                <MessageCircle className="h-4 w-4 text-[#00e7fe]" />
                Falar pelo WhatsApp
              </a>

              <p className="mt-4 text-center text-[10px] leading-relaxed text-slate-600">
                Mercado Livre Envios Flex • Shopee Entrega Direta
                <br />
                São Paulo e Grande São Paulo
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
