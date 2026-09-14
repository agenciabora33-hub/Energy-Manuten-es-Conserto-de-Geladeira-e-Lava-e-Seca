import React from 'react';
import { MapPin, MessageCircle, Phone, CheckCircle2, ChevronRight, Wrench } from 'lucide-react';
import { LocationItem } from '../types';
import { COMPANY } from '../data/company';
import { SERVICES_DATA } from '../data/services';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { CTASection } from '../components/CTASection';

interface LocationDetailPageProps {
  location: LocationItem;
  onNavigate: (path: string) => void;
}

export const LocationDetailPage: React.FC<LocationDetailPageProps> = ({ location, onNavigate }) => {
  const breadcrumbItems = [
    { name: 'Áreas Atendidas', url: '/areas-atendidas/' },
    { name: location.cityName, url: location.path },
  ];

  return (
    <>
      <SEOHead
        title={location.title}
        description={location.metaDescription}
        canonicalPath={location.path}
        breadcrumbs={breadcrumbItems}
      />

      <Breadcrumbs items={breadcrumbItems} onNavigate={onNavigate} />

      {/* Hero Location Section */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 bg-gradient-to-b from-[#0a0a0c] via-[#111118] to-[#0a0a0c] border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181824] border border-[#d4af37]/30 text-xs font-semibold text-[#d4af37]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Atendimento Local a Domicílio • {location.cityName} - RS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {location.h1}
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Conserto e manutenção especializada em geladeiras, máquinas de lavar, lava e seca e eletrodomésticos com visita no seu endereço em {location.cityName}.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
              <a
                href={COMPANY.buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa851d] text-[#0a0a0c] font-black text-sm sm:text-base shadow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Solicitar atendimento em {location.cityName}</span>
              </a>

              <a
                href={`tel:${COMPANY.contact.rawPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#14141b] text-neutral-200 border border-neutral-700 text-xs font-semibold hover:bg-neutral-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>{COMPANY.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Details & Process */}
      <section className="py-12 sm:py-16 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: How service operates locally */}
            <div className="lg:col-span-8 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#121217] border border-neutral-800 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Como funciona o atendimento em {location.cityName}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {location.coverageDetails}
                </p>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Para facilitar a sua rotina, buscamos sempre entender o defeito previamente através de fotos, vídeos ou relatos no WhatsApp. Quando a visita é necessária, nosso técnico se desloca até a sua residência ou empresa no horário previamente agendado.
                </p>

                <div className="pt-3 border-t border-neutral-800">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-3">
                    Serviços prestados em {location.cityName}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                    {location.serviceTypes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Local FAQs */}
              {location.faqs && location.faqs.length > 0 && (
                <div className="p-6 sm:p-8 rounded-3xl bg-[#121217] border border-neutral-800 space-y-4">
                  <h3 className="text-lg font-bold text-white">
                    Dúvidas sobre atendimento em {location.cityName}
                  </h3>
                  <div className="space-y-3">
                    {location.faqs.map((faq, i) => (
                      <div key={i} className="p-4 rounded-xl bg-[#181822] border border-neutral-800/80">
                        <p className="text-xs font-bold text-white mb-1">{faq.question}</p>
                        <p className="text-xs text-neutral-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right sidebar: NAP & Policies */}
            <div className="lg:col-span-4 space-y-5">
              <div className="p-6 rounded-2xl bg-[#14141d] border border-neutral-800 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider text-[#d4af37]">
                  Dados de Contato da Energy
                </h3>
                <address className="not-italic text-xs text-neutral-300 space-y-1">
                  <p className="font-bold text-white">{COMPANY.tradeName}</p>
                  <p>{COMPANY.address.street}</p>
                  <p>{COMPANY.address.neighborhood}</p>
                  <p>{COMPANY.address.city} – {COMPANY.address.state}</p>
                  <p>CEP: {COMPANY.address.postalCode}</p>
                </address>

                <div className="pt-2 border-t border-neutral-800 space-y-1 text-xs">
                  <p className="text-neutral-400">Telefone / WhatsApp:</p>
                  <p className="font-bold text-white">{COMPANY.contact.phone}</p>
                </div>
              </div>

              {/* Service shortcut links */}
              <div className="p-6 rounded-2xl bg-[#121217] border border-neutral-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-3">
                  Atalhos de Serviços
                </h4>
                <div className="space-y-2 text-xs">
                  {SERVICES_DATA.slice(0, 5).map((s) => (
                    <button
                      key={s.id}
                      onClick={() => onNavigate(s.path)}
                      className="w-full text-left flex items-center justify-between text-neutral-300 hover:text-white py-1 transition-colors"
                    >
                      <span className="truncate">{s.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Agende seu conserto em ${location.cityName}`}
        subtitle="Entre em contato pelo WhatsApp e combine o melhor dia e horário para a visita no seu endereço."
      />
    </>
  );
};
