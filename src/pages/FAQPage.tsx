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
        title="Perguntas Frequentes (FAQ) | Energy Manutenções"
        description="Tire dúvidas sobre assistência técnica a domicílio, valores de visita, garantia de peças, modelos atendidos e cidades cobertas na Serra Gaúcha."
        canonicalPath="/faq/"
        breadcrumbs={[{ name: 'FAQ', url: '/faq/' }]}
        jsonLd={faqSchema}
      />

      <Breadcrumbs items={[{ name: 'FAQ', url: '/faq/' }]} onNavigate={onNavigate} />

      <section className="pt-8 pb-4 bg-[#0a0a0c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Perguntas Frequentes sobre Assistência Técnica em Caxias do Sul
          </h1>
          <p className="mt-2 text-sm text-neutral-300">
            Respostas claras e factuais sobre nosso atendimento a domicílio, garantia de 90 dias, marcas e valores de visita.
          </p>
        </div>
      </section>

      <FAQSection showSearch={true} />

      {/* Internal Navigation Shortcuts */}
      <section className="py-8 bg-[#0c0c11] border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-3 text-center">
            Navegue por Outras Seções Úteis
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <a
              href="/servicos/"
              onClick={(e) => { e.preventDefault(); onNavigate('/servicos/'); }}
              className="px-3 py-1.5 rounded-lg bg-[#14141d] border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#d4af37]/40 transition-colors"
            >
              Catálogo de Serviços
            </a>
            <a
              href="/como-funciona/"
              onClick={(e) => { e.preventDefault(); onNavigate('/como-funciona/'); }}
              className="px-3 py-1.5 rounded-lg bg-[#14141d] border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#d4af37]/40 transition-colors"
            >
              Como Funciona o Atendimento
            </a>
            <a
              href="/marcas/"
              onClick={(e) => { e.preventDefault(); onNavigate('/marcas/'); }}
              className="px-3 py-1.5 rounded-lg bg-[#14141d] border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#d4af37]/40 transition-colors"
            >
              Marcas Atendidas
            </a>
            <a
              href="/caxias-do-sul/"
              onClick={(e) => { e.preventDefault(); onNavigate('/caxias-do-sul/'); }}
              className="px-3 py-1.5 rounded-lg bg-[#14141d] border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#d4af37]/40 transition-colors"
            >
              Caxias do Sul (Sede)
            </a>
            <a
              href="/farroupilha/"
              onClick={(e) => { e.preventDefault(); onNavigate('/farroupilha/'); }}
              className="px-3 py-1.5 rounded-lg bg-[#14141d] border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#d4af37]/40 transition-colors"
            >
              Farroupilha
            </a>
            <a
              href="/flores-da-cunha/"
              onClick={(e) => { e.preventDefault(); onNavigate('/flores-da-cunha/'); }}
              className="px-3 py-1.5 rounded-lg bg-[#14141d] border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#d4af37]/40 transition-colors"
            >
              Flores da Cunha
            </a>
            <a
              href="/contato/"
              onClick={(e) => { e.preventDefault(); onNavigate('/contato/'); }}
              className="px-3 py-1.5 rounded-lg bg-[#14141d] border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#d4af37]/40 transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Sua dúvida não foi listada aqui?"
        subtitle="Nosso atendimento está à disposição no WhatsApp para responder suas perguntas com clareza e transparência."
      />
    </>
  );
};
