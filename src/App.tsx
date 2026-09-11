/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { WhatsAppModal } from './components/WhatsAppModal';

// Main Pages
import { Home } from './pages/Home';
import { MercadoLivreFlex } from './pages/MercadoLivreFlex';
import { ShopeeDireta } from './pages/ShopeeDireta';

// Regional Pages
import { AtendimentoGuarulhos } from './pages/AtendimentoGuarulhos';
import { AtendimentoSuzano } from './pages/AtendimentoSuzano';
import { AtendimentoMogiDasCruzes } from './pages/AtendimentoMogiDasCruzes';
import { AtendimentoSaoBernardoDoCampo } from './pages/AtendimentoSaoBernardoDoCampo';

// Mercado Livre Envios Flex - Cluster Pages
import { RegioesAtendidasFlex } from './pages/cluster/RegioesAtendidasFlex';
import { QuantoCustaFlex } from './pages/cluster/QuantoCustaFlex';
import { ComoAtivarFlex } from './pages/cluster/ComoAtivarFlex';
import { ReputacaoVerdeFlex } from './pages/cluster/ReputacaoVerdeFlex';

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
        <div className="min-h-screen bg-[#070A12] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#00e7fe]/30 selection:text-[#00e7fe]">

          {/* ====================================== */}
          {/* NAVBAR */}
          {/* ====================================== */}

          <Navbar onOpenQuoteModal={openQuoteModal} />

          {/* ====================================== */}
          {/* ROUTES */}
          {/* ====================================== */}

          <Routes>

            {/* ================================ */}
            {/* HOME */}
            {/* ================================ */}

            <Route
              path="/"
              element={
                <Home
                  onOpenQuoteModal={openQuoteModal}
                />
              }
            />

            {/* ================================ */}
            {/* MERCADO LIVRE ENVIOS FLEX */}
            {/* ================================ */}

            <Route
              path="/mercado-livre-envios-flex"
              element={<MercadoLivreFlex />}
            />

            {/* ================================ */}
            {/* CLUSTER - MERCADO LIVRE FLEX */}
            {/* ================================ */}

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

            {/* ================================ */}
            {/* SHOPEE ENTREGA DIRETA */}
            {/* ================================ */}

            <Route
              path="/shopee-entrega-direta"
              element={<ShopeeDireta />}
            />

            {/* ================================ */}
            {/* PÁGINAS REGIONAIS */}
            {/* ================================ */}

            {/* Guarulhos */}
            <Route
              path="/atendimento/guarulhos"
              element={<AtendimentoGuarulhos />}
            />

            {/* Suzano */}
            <Route
              path="/atendimento/suzano"
              element={<AtendimentoSuzano />}
            />

            {/* Mogi das Cruzes */}
            <Route
              path="/atendimento/mogi-das-cruzes"
              element={<AtendimentoMogiDasCruzes />}
            />

            {/* São Bernardo do Campo */}
            <Route
              path="/atendimento/sao-bernardo-do-campo"
              element={<AtendimentoSaoBernardoDoCampo />}
            />

          </Routes>

          {/* ====================================== */}
          {/* FOOTER */}
          {/* ====================================== */}

          <Footer />

          {/* ====================================== */}
          {/* WHATSAPP FLUTUANTE */}
          {/* ====================================== */}

          <FloatingWhatsApp />

          {/* ====================================== */}
          {/* MODAL DE ORÇAMENTO */}
          {/* ====================================== */}

          <WhatsAppModal
            isOpen={isQuoteModalOpen}
            onClose={closeQuoteModal}
          />

        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
