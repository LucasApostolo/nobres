import React from 'react';
import { Helmet } from 'react-helmet-async';

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
  const pageUrl = 'https://www.nbrsenviosflex.com.br/';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nobres Entregas',
    url: pageUrl,
    telephone: '+55 11 98022-4789',
    email: 'operacional@nobresentregas.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua São Leopoldo, 811',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'São Paulo e Grande São Paulo',
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Transportadora Mercado Livre Flex e Shopee em SP | Nobres Entregas
        </title>

        <meta
          name="description"
          content="Transportadora para Mercado Livre Envios Flex e Shopee Entrega Direta em São Paulo e Grande SP. Coletas programadas e entregas Same Day para sellers."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href={pageUrl}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="Nobres Entregas"
        />

        <meta
          property="og:title"
          content="Transportadora Mercado Livre Flex e Shopee em SP"
        />

        <meta
          property="og:description"
          content="Coletas programadas e entregas Same Day para Mercado Livre Envios Flex e Shopee Entrega Direta em São Paulo."
        />

        <meta
          property="og:url"
          content={pageUrl}
        />

        <meta
          name="twitter:card"
          content="summary"
        />

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <main>
        <Hero onOpenQuoteModal={onOpenQuoteModal} />

        <MarketplacesBar />

        <PainVsSolution />

        <ServicesSection onOpenQuoteModal={onOpenQuoteModal} />

        <SimulatorSection />

        <CoverageSection />

        <StepByStep />

        <TestimonialsSection />

        <FaqSection />

        <CtaBanner onOpenQuoteModal={onOpenQuoteModal} />
      </main>
    </>
  );
};
