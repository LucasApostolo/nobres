import React from 'react';

import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Route,
  ShieldCheck,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { buildWhatsAppLink } from '../utils/whatsapp';

const mercadoLivreLinks = [
  {
    label: 'Mercado Livre Envios Flex',
    href: '/mercado-livre-envios-flex',
  },
  {
    label: 'Regiões atendidas',
    href: '/mercado-livre-envios-flex/regioes-atendidas',
  },
  {
    label: 'Quanto custa o Envios Flex',
    href: '/mercado-livre-envios-flex/quanto-custa',
  },
  {
    label: 'Como ativar o Envios Flex',
    href: '/mercado-livre-envios-flex/como-ativar',
  },
  {
    label: 'Reputação no Envios Flex',
    href: '/mercado-livre-envios-flex/reputacao-verde',
  },
];

const regionalLinks = [
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

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = buildWhatsAppLink({
    message:
      'Olá! Gostaria de falar com a equipe da Nobres Entregas sobre minha operação logística.',
  });

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#070A12] text-xs text-slate-400">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[#008ef4]/[0.035] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">

          {/* BRAND */}
          <div className="space-y-5 lg:col-span-4">

            <a href="#inicio" className="group inline-flex items-center gap-3">

              <img
                src="/logos/nobres.png"
                alt="Nobres Entregas"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              <div className="flex flex-col">

                <div className="flex flex-wrap items-center gap-1.5">

                  <span className="text-lg font-extrabold tracking-tight text-white">
                    NOBRES
                  </span>

                  <span className="bg-gradient-to-r from-[#00e7fe] to-[#008ef4] bg-clip-text text-lg font-black tracking-tight text-transparent">
                    ENTREGAS
                  </span>

                </div>

                <span className="text-[10px] font-medium text-slate-500">
                  Logística de última milha • São Paulo
                </span>

              </div>

            </a>

            <p className="max-w-sm text-xs leading-relaxed text-slate-400">
              Operação logística para sellers e e-commerces, com foco em
              Mercado Livre Envios Flex, Shopee Entrega Direta, coletas
              programadas e entregas de última milha em São Paulo e Grande SP.
            </p>

            <div className="flex flex-wrap gap-2">

              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.03] px-3 py-2 text-[10px] font-semibold text-slate-300">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                Operação para sellers
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.03] px-3 py-2 text-[10px] font-semibold text-slate-300">
                <Route className="h-3.5 w-3.5 text-[#00e7fe]" />
                Última milha
              </div>

            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#00e7fe]/20 bg-[#00e7fe]/5 px-4 py-2.5 text-[11px] font-bold text-[#00e7fe] transition-all hover:border-[#00e7fe]/35 hover:bg-[#00e7fe]/10"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com a Nobres
            </a>

          </div>

          {/* MERCADO LIVRE CLUSTER */}
          <div className="space-y-4 lg:col-span-2">

            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-white">
              Mercado Livre
            </h4>

            <ul className="space-y-2.5">
              {mercadoLivreLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="transition-colors hover:text-[#00e7fe]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* SOLUTIONS */}
          <div className="space-y-4 lg:col-span-2">

            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-white">
              Soluções
            </h4>

            <ul className="space-y-2.5">

              <li>
                <Link
                  to="/shopee-entrega-direta"
                  className="transition-colors hover:text-[#00e7fe]"
                >
                  Shopee Entrega Direta
                </Link>
              </li>

              <li>
                <a
                  href="/#servicos"
                  className="transition-colors hover:text-[#00e7fe]"
                >
                  Coletas programadas
                </a>
              </li>

              <li>
                <a
                  href="/#servicos"
                  className="transition-colors hover:text-[#00e7fe]"
                >
                  Entregas Same Day
                </a>
              </li>

              <li>
                <a
                  href="/#simulador"
                  className="transition-colors hover:text-[#00e7fe]"
                >
                  Simulador de operação
                </a>
              </li>

              <li>
                <a
                  href="/#faq"
                  className="transition-colors hover:text-[#00e7fe]"
                >
                  Perguntas frequentes
                </a>
              </li>

            </ul>

          </div>

          {/* REGIONAL */}
          <div className="space-y-4 lg:col-span-2">

            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-white">
              Atendimento
            </h4>

            <ul className="space-y-2.5">

              {regionalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="transition-colors hover:text-[#00e7fe]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* CONTACT */}
          <div className="space-y-4 lg:col-span-2">

            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-white">
              Contato
            </h4>

            <div className="space-y-3 text-[11px] text-slate-400">

              <div className="flex items-start gap-2.5">

                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#00e7fe]" />

                <span className="leading-relaxed">
                  Rua São Leopoldo, 811
                  <br />
                  Belenzinho
                  <br />
                  São Paulo - SP
                </span>

              </div>

              <div className="flex items-center gap-2.5">

                <Phone className="h-4 w-4 shrink-0 text-[#00e7fe]" />

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#00e7fe]"
                >
                  (11) 98022-4789
                </a>

              </div>

              <div className="flex items-start gap-2.5">

                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#00e7fe]" />

                <a
                  href="mailto:operacional@nobresentregas.com.br"
                  className="break-all transition-colors hover:text-[#00e7fe]"
                >
                  operacional@nobresentregas.com.br
                </a>

              </div>

              <div className="flex items-start gap-2.5">

                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#00e7fe]" />

                <span className="leading-relaxed">
                  Atendimento conforme horário operacional
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* SEO / REGIONAL CONTEXT */}
        <div className="mt-12 rounded-2xl border border-white/5 bg-white/[0.015] px-5 py-4">

          <p className="text-[10px] leading-relaxed text-slate-600">
            A Nobres Entregas oferece soluções de logística de última milha
            para sellers e operações de e-commerce em São Paulo e Grande São
            Paulo. A disponibilidade de coleta e entrega depende do endereço,
            volume, frequência, modalidade utilizada e regiões de destino.
          </p>

        </div>

        {/* BOTTOM */}
        <div className="mt-8 flex flex-col gap-5 border-t border-white/5 pt-7 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <p className="text-[11px] text-slate-500">
              © {currentYear} Nobres Entregas. Todos os direitos reservados.
            </p>

            <p className="mt-1 text-[10px] text-slate-600">
              CNPJ 52.982.861/0001-16 • São Paulo - SP
            </p>

          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] text-slate-600">

            <a
              href="/#faq"
              className="transition-colors hover:text-slate-400"
            >
              Dúvidas frequentes
            </a>

            <Link
              to="/mercado-livre-envios-flex/regioes-atendidas"
              className="transition-colors hover:text-slate-400"
            >
              Regiões atendidas
            </Link>

            <span>
              São Paulo • Brasil
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
};
