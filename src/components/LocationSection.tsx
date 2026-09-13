import React from 'react';
import { MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { LOCATIONS_DATA } from '../data/locations';
import { COMPANY } from '../data/company';

interface LocationSectionProps {
  onNavigate: (path: string) => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-14 sm:py-18 bg-[#0d0d12] border-t border-neutral-900" aria-labelledby="loc-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-xs font-semibold uppercase tracking-wider mb-2.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Cobertura Regional Confirmada</span>
            </div>
            <h2 id="loc-heading" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Assistência técnica em Caxias do Sul e região
            </h2>
            <p className="mt-2 text-sm text-neutral-300 max-w-2xl">
              Grande parte dos atendimentos pode ser realizada no endereço do cliente mediante agendamento prévio.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/areas-atendidas/')}
            className="text-xs font-semibold text-[#d4af37] hover:underline flex items-center gap-1 self-start md:self-auto"
          >
            <span>Ver detalhes de atendimento</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Main Confirmed Cities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {LOCATIONS_DATA.map((loc) => (
            <div
              key={loc.id}
              className="p-6 rounded-2xl bg-[#13131a] border border-neutral-800 hover:border-[#d4af37]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#d4af37] tracking-wider uppercase">
                    {loc.state}
                  </span>
                  <MapPin className="w-4 h-4 text-neutral-500 group-hover:text-[#d4af37] transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                  {loc.cityName}
                </h3>

                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {loc.distanceInfo}
                </p>

                <p className="text-xs text-neutral-300 mt-3 pt-3 border-t border-neutral-800/80">
                  {loc.coverageDetails}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(loc.path)}
                  className="text-xs font-semibold text-neutral-300 hover:text-white flex items-center gap-1"
                >
                  <span>Página de {loc.cityName}</span>
                  <ArrowRight className="w-3 h-3 text-[#d4af37]" />
                </button>

                <a
                  href={COMPANY.buildWhatsAppUrl(loc.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-[#0a0a0c] transition-all"
                  aria-label={`Solicitar atendimento em ${loc.cityName} pelo WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note about other locations */}
        <div className="mt-6 p-4 rounded-xl bg-[#111116] border border-neutral-800 text-xs text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span>
            <strong>Mora em outra localidade próxima?</strong> A empresa pode atender outras localidades mediante consulta prévia de viabilidade de deslocamento.
          </span>
          <a
            href={COMPANY.buildWhatsAppUrl('Olá! Gostaria de consultar se a Energy Manutenções atende minha cidade.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#d4af37] hover:underline whitespace-nowrap"
          >
            Consultar localidade no WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};
