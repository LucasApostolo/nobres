import React from 'react';
import { Hero } from '../components/Hero';
import { MarketplacesBar } from '../components/MarketplacesBar';
import { PainVsSolution } from '../components/PainVsSolution';
import { ServicesSection } from '../components/ServicesSection';
import { SimulatorSection } from '../components/SimulatorSection';
import { CoverageSection } from '../components/CoverageSection';
import { StepByStep } from '../components/StepByStep';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';
import { CtaBanner } from '../components/CtaBanner';

interface HomeProps {
  onOpenQuoteModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenQuoteModal }) => {
  return (
    <main>
      {/* Hero Section */}
      <Hero onOpenQuoteModal={onOpenQuoteModal} />

      {/* Certified Marketplaces Bar */}
      <MarketplacesBar />

      {/* Pain vs Solution Comparison */}
      <PainVsSolution />

      {/* Services & Logistics Solutions */}
      <ServicesSection onOpenQuoteModal={onOpenQuoteModal} />

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
      <CtaBanner onOpenQuoteModal={onOpenQuoteModal} />
    </main>
  );
};
