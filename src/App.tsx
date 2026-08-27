/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { WhatsAppModal } from './components/WhatsAppModal';

// Pages
import { Home } from './pages/Home';
import { MercadoLivreFlex } from './pages/MercadoLivreFlex';
import { ShopeeDireta } from './pages/ShopeeDireta';

// Cluster Pages (Mercado Livre Flex)
import { RegioesAtendidasFlex } from './pages/cluster/RegioesAtendidasFlex';
import { QuantoCustaFlex } from './pages/cluster/QuantoCustaFlex';
import { ComoAtivarFlex } from './pages/cluster/ComoAtivarFlex';
import { ReputacaoVerdeFlex } from './pages/cluster/ReputacaoVerdeFlex';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#070A12] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#00e7fe]/30 selection:text-[#00e7fe]">
        
        {/* Navbar mantida globalmente para todas as páginas */}
        <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* Gerenciador de Rotas */}
        <Routes>
          <Route 
            path="/" 
            element={<Home onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />} 
          />
          <Route 
            path="/mercado-livre-envios-flex" 
            element={<MercadoLivreFlex />} 
          />
          
          {/* Topic Cluster: Subpáginas do Mercado Livre Flex */}
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

          <Route 
            path="/shopee-entrega-direta" 
            element={<ShopeeDireta />} 
          />
        </Routes>

        {/* Footer mantido globalmente */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />

        {/* Interactive Quote / WhatsApp Modal */}
        <WhatsAppModal 
          isOpen={isQuoteModalOpen} 
          onClose={() => setIsQuoteModalOpen(false)} 
        />

      </div>
    </BrowserRouter>
  );
}
