import React, { useState } from 'react';
import {
  MessageCircle,
  Wrench,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { BrandSection } from '../components/BrandSection';
import { CTASection } from '../components/CTASection';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onNavigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const targetWhatsAppUrl = COMPANY.buildWhatsAppUrl(service.whatsappMessage);

  const breadcrumbItems = [
    { name: 'Serviços', url: '/servicos/' },
    { name: service.name, url: service.path }
  ];

  // Service JSON-LD Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.category,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY.tradeName,
      telephone: COMPANY.contact.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY.address.street,
        addressLocality: COMPANY.address.city,
        addressRegion: COMPANY.address.state,
        postalCode: COMPANY.address.postalCode,
        addressCountry: COMPANY.address.country,
      },
    },
    areaServed: COMPANY.confirmedAreas.map((area) => ({
      '@type': 'City',
      name: area.name,
    })),
    description: service.metaDescription,
  };

  return (
    <>
      <SEOHead
        title={service.title}
        description={service.metaDescription}
        canonicalPath={service.path}
        breadcrumbs={breadcrumbItems}
        jsonLd={serviceSchema}
      />

      <Breadcrumbs items={breadcrumbItems} onNavigate={onNavigate} />

      {/* Hero Service Section */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 bg-gradient-to-b from-[#0a0a0c] via-[#111118] to-[#0a0a0c] border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181824] border border-[#d4af37]/30 text-xs font-semibold text-[#d4af37]">
              <Wrench className="w-3.5 h-3.5" />
              <span>Assistência Técnica Especializada • {service.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {service.h1}
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              {service.heroSubheadline}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
              <a
                href={targetWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa851d] text-[#0a0a0c] font-black text-sm sm:text-base shadow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Solicitar {service.name}</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span>Caxias do Sul, Farroupilha e Flores da Cunha</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Diagnostic Details: Problems & Symptoms */}
      <section className="py-14 sm:py-18 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Common Problems */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121217] border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>Problemas Frequentes Avaliados</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Principais defeitos identificados em {service.name}
              </h2>
              <p className="text-xs text-neutral-400">
                Se o seu equipamento estiver apresentando algum dos sintomas abaixo, nossa equipe pode realizar a averiguação técnica detalhada:
              </p>
              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-neutral-300">
                {service.commonProblems.map((prob, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0" />
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* When to Seek Assistance */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121217] border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 text-[#f3e5ab] text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#d4af37]" />
                <span>Quando Procurar Assistência</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Momento ideal para solicitar o diagnóstico
              </h2>
              <p className="text-xs text-neutral-400">
                Evite danos colaterais a outros componentes desligando o equipamento e acionando atendimento técnico quando:
              </p>
              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-neutral-300">
                {service.whenToCall.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Diagnostic Process Steps */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#14141d] border border-neutral-800">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
              Como funciona o atendimento para {service.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-neutral-300">
              {service.diagnosticProcess.map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#191924] border border-neutral-800/80">
                  <span className="text-base font-black font-mono text-[#d4af37] block mb-1">
                    Passo 0{idx + 1}
                  </span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands Handled */}
      <section className="py-10 bg-[#0d0d12] border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-6">
            <h3 className="text-lg font-bold text-white">
              Marcas atendidas para {service.name}
            </h3>
            <p className="text-xs text-neutral-400">
              {COMPANY.brandNotice}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {service.brandsHandled.map((brand) => (
              <span
                key={brand}
                className="px-4 py-2 rounded-xl bg-[#14141b] border border-neutral-800 text-neutral-200 text-xs font-semibold"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Service FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-12 sm:py-16 bg-[#0a0a0c]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Dúvidas frequentes sobre {service.name}
              </h3>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.question}
                    className="rounded-xl bg-[#121217] border border-neutral-800 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm font-semibold text-neutral-100 hover:text-[#f3e5ab] transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#d4af37] flex-shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 bg-[#0f0f14]/60 pt-2">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Localities covered for this service */}
      <section className="py-10 bg-[#0d0d12] border-t border-neutral-900 text-xs text-neutral-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="font-bold text-white">
              Atendimento presencial a domicílio para {service.name}:
            </p>
            <p className="text-neutral-400 mt-0.5">
              Caxias do Sul (sede no Marechal Floriano), Farroupilha e Flores da Cunha.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('/caxias-do-sul/')}
              className="hover:text-[#d4af37] underline"
            >
              Caxias do Sul
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('/farroupilha/')}
              className="hover:text-[#d4af37] underline"
            >
              Farroupilha
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('/flores-da-cunha/')}
              className="hover:text-[#d4af37] underline"
            >
              Flores da Cunha
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA with exact contextual message */}
      <CTASection
        title={`Precisa de ${service.name.toLowerCase()}?`}
        subtitle="Envie uma mensagem pelo WhatsApp relatando o que está acontecendo com o equipamento."
        customWhatsAppMessage={service.whatsappMessage}
      />
    </>
  );
};
