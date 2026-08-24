/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarketplacesBar } from './components/MarketplacesBar';
import { PainVsSolution } from './components/PainVsSolution';
import { ServicesSection } from './components/ServicesSection';
import { SimulatorSection } from './components/SimulatorSection';
import { CoverageSection } from './components/CoverageSection';
import { StepByStep } from './components/StepByStep';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { WhatsAppModal } from './components/WhatsAppModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#00e7fe]/30 selection:text-[#00e7fe]">
      
      {/* Navbar with Sticky Blur & Operational Ticker */}
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      <main>
        {/* Hero Section */}
        <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* Certified Marketplaces Bar */}
        <MarketplacesBar />

        {/* Pain vs Solution Comparison */}
        <PainVsSolution />

        {/* Services & Logistics Solutions */}
        <ServicesSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* Interactive Seller Volume & ROI Simulator */}
        <SimulatorSection />

        {/* Coverage & SP Zones Explorer */}
        <CoverageSection />

        {/* Step-by-Step Logistics Flow */}
        <StepByStep />

        {/* Social Proof & Verified Seller Reviews */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* High Conversion Urgent CTA Banner */}
        <CtaBanner onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      </main>

      {/* Complete Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Quote / WhatsApp Modal */}
      <WhatsAppModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />

    </div>
  );
}
