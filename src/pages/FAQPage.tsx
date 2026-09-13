import React from 'react';
import { FAQ_LIST } from '../data/faq';
import { COMPANY } from '../data/company';
import { FAQSection } from '../components/FAQSection';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { CTASection } from '../components/CTASection';

interface FAQPageProps {
  onNavigate: (path: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_LIST.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title="Dúvidas Frequentes (FAQ) | Energy Manutenções Caxias do Sul"
        description="Confira as respostas para as principais dúvidas sobre conserto a domicílio, cidades atendidas, taxas de visita e garantia de eletrodomésticos."
        canonicalPath="/faq/"
        breadcrumbs={[{ name: 'FAQ', url: '/faq/' }]}
        jsonLd={faqSchema}
      />

      <Breadcrumbs items={[{ name: 'FAQ', url: '/faq/' }]} onNavigate={onNavigate} />

      <FAQSection showSearch={true} />

      <CTASection
        title="Sua dúvida não foi listada aqui?"
        subtitle="Nosso atendimento está à disposição no WhatsApp para responder suas perguntas com clareza e transparência."
      />
    </>
  );
};
