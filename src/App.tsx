/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import { Helmet, HelmetProvider } from 'react-helmet-async';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { WhatsAppModal } from './components/WhatsAppModal';

// Main Pages
import { Home } from './pages/Home';
import { MercadoLivreFlex } from './pages/MercadoLivreFlex';
import { ShopeeDireta } from './pages/ShopeeDireta';

// Atendimento - Hub Regional
import { Atendimento } from './pages/Atendimento';

// Regional Pages
import { AtendimentoGuarulhos } from './pages/AtendimentoGuarulhos';
import { AtendimentoSuzano } from './pages/AtendimentoSuzano';
import { AtendimentoMogiDasCruzes } from './pages/AtendimentoMogiDasCruzes';
import { AtendimentoSaoBernardoDoCampo } from './pages/AtendimentoSaoBernardoDoCampo';
import { AtendimentoOsasco } from './pages/AtendimentoOsasco';

// Mercado Livre Envios Flex - Cluster Pages
import { RegioesAtendidasFlex } from './pages/cluster/RegioesAtendidasFlex';
import { QuantoCustaFlex } from './pages/cluster/QuantoCustaFlex';
import { ComoAtivarFlex } from './pages/cluster/ComoAtivarFlex';
import { ReputacaoVerdeFlex } from './pages/cluster/ReputacaoVerdeFlex';

/**
 * Faz cada nova rota abrir no topo.
 * Também permite que links como /#faq e /#servicos
 * levem o usuário até a seção correspondente.
 */
const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);

      return () => window.clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname, hash]);

  return null;
};

/**
 * Página para URLs inexistentes.
 */
const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Página não encontrada | Nobres Entregas</title>

        <meta
          name="description"
          content="A página que você tentou acessar não foi encontrada."
        />

        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="flex min-h-[70vh] items-center justify-center bg-[#070A12] px-4 py-24">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00e7fe]">
            Erro 404
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Página não encontrada
          </h1>

          <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
            O endereço acessado não existe ou pode ter sido alterado.
            Você pode voltar para a página inicial ou conhecer nossas
            soluções de logística para sellers.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#00e7fe] to-[#008ef4] px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-[1.02]"
            >
              Voltar para o início
            </Link>

            <Link
              to="/mercado-livre-envios-flex"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/[0.08]"
            >
              Mercado Livre Envios Flex
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollManager />

        <div className="min-h-screen bg-[#070A12] font-['Plus_Jakarta_Sans',sans-serif] text-slate-100 selection:bg-[#00e7fe]/30 selection:text-[#00e7fe]">

          {/* NAVBAR */}
          <Navbar onOpenQuoteModal={openQuoteModal} />

          {/* ROUTES */}
          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={
                <Home onOpenQuoteModal={openQuoteModal} />
              }
            />

            {/* MERCADO LIVRE ENVIOS FLEX */}
            <Route
              path="/mercado-livre-envios-flex"
              element={<MercadoLivreFlex />}
            />

            {/* CLUSTER - MERCADO LIVRE ENVIOS FLEX */}
            <Route
              path="/mercado-livre-envios-flex/regioes-atendidas"
              element={<RegioesAtendidasFlex />}
            />

            <Route
              path="/mercado-livre-envios-flex/quanto-custa"
              element={<QuantoCustaFlex />}
            />

            <Route
              path="/mercado-livre-envios-flex/como-ativar"
              element={<ComoAtivarFlex />}
            />

            <Route
              path="/mercado-livre-envios-flex/reputacao-verde"
              element={<ReputacaoVerdeFlex />}
            />

            {/* SHOPEE ENTREGA DIRETA */}
            <Route
              path="/shopee-entrega-direta"
              element={<ShopeeDireta />}
            />

            {/* HUB DE ATENDIMENTO */}
            <Route
              path="/atendimento"
              element={<Atendimento />}
            />

            {/* PÁGINAS REGIONAIS */}

            {/* Guarulhos */}
            <Route
              path="/atendimento/guarulhos"
              element={<AtendimentoGuarulhos />}
            />

            {/* Osasco */}
            <Route
              path="/atendimento/osasco"
              element={<AtendimentoOsasco />}
            />

            {/* São Bernardo do Campo */}
            <Route
              path="/atendimento/sao-bernardo-do-campo"
              element={<AtendimentoSaoBernardoDoCampo />}
            />

            {/* Mogi das Cruzes */}
            <Route
              path="/atendimento/mogi-das-cruzes"
              element={<AtendimentoMogiDasCruzes />}
            />

            {/* Suzano */}
            <Route
              path="/atendimento/suzano"
              element={<AtendimentoSuzano />}
            />

            {/* 404 */}
            <Route
              path="*"
              element={<NotFoundPage />}
            />

          </Routes>

          {/* FOOTER */}
          <Footer />

          {/* WHATSAPP FLUTUANTE */}
          <FloatingWhatsApp />

          {/* MODAL DE ORÇAMENTO */}
          <WhatsAppModal
            isOpen={isQuoteModalOpen}
            onClose={closeQuoteModal}
          />

        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
