import React from 'react';
import { MapPin, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { LOCATIONS_DATA } from '../data/locations';
import { COMPANY } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { CTASection } from '../components/CTASection';

interface LocationsPageProps {
  onNavigate: (path: string) => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="Assistência Técnica em Caxias do Sul e Região | Energy"
        description="Áreas atendidas pela Energy Manutenções: Caxias do Sul, Farroupilha e Flores da Cunha. Atendimento a domicílio mediante agendamento."
        canonicalPath="/areas-atendidas/"
        breadcrumbs={[{ name: 'Áreas Atendidas', url: '/areas-atendidas/' }]}
      />

      <Breadcrumbs items={[{ name: 'Áreas Atendidas', url: '/areas-atendidas/' }]} onNavigate={onNavigate} />

      <section className="py-10 sm:py-16 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-2 block">
              Serra Gaúcha
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Assistência técnica de eletrodomésticos em Caxias do Sul e região
            </h1>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
              Realizamos atendimento a domicílio mediante agendamento prévio. Conheça as cidades confirmadas onde atuamos regularmente com serviços de reparo para geladeiras, lavadoras, lava e seca e demais eletrodomésticos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOCATIONS_DATA.map((loc) => (
              <div
                key={loc.id}
                className="p-6 rounded-2xl bg-[#121217] border border-neutral-800 hover:border-[#d4af37]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#d4af37] tracking-wider uppercase">
                      Rio Grande do Sul
                    </span>
                    <MapPin className="w-4 h-4 text-neutral-500" />
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-2">
                    {loc.cityName}
                  </h2>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {loc.distanceInfo}
                  </p>

                  <div className="pt-3 border-t border-neutral-800/80">
                    <p className="text-[11px] font-semibold text-neutral-300 mb-2">Serviços na cidade:</p>
                    <ul className="space-y-1 text-xs text-neutral-400">
                      {loc.serviceTypes.slice(0, 4).map((s, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(loc.path)}
                    className="text-xs font-semibold text-neutral-200 hover:text-[#f3e5ab] flex items-center gap-1"
                  >
                    <span>Ver página de {loc.cityName}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
                  </button>

                  <a
                    href={COMPANY.buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-[#0a0a0c] transition-all"
                    aria-label={`WhatsApp para atendimento em ${loc.cityName}`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation Note */}
          <div className="mt-10 p-6 rounded-2xl bg-[#14141d] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-300">
              <p className="font-bold text-white mb-1">Atendimento em outras cidades vizinhas:</p>
              <p className="text-neutral-400">
                A empresa pode atender outras localidades mediante consulta prévia de disponibilidade técnica e alinhamento de deslocamento pelo WhatsApp.
              </p>
            </div>
            <a
              href={COMPANY.buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-[#d4af37] text-[#0a0a0c] font-bold text-xs hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
            >
              Consultar minha localidade
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Agende a visita técnica no seu endereço"
        subtitle="Mande uma mensagem pelo WhatsApp informando sua cidade, bairro e o aparelho que precisa de conserto."
      />
    </>
  );
};
