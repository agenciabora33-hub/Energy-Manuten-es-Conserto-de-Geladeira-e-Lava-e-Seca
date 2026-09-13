import React from 'react';
import { COMPANY } from '../data/company';

interface BrandSectionProps {
  onNavigate?: (path: string) => void;
}

export const BrandSection: React.FC<BrandSectionProps> = ({ onNavigate }) => {
  const brands = [
    { name: 'Samsung', origin: 'Tecnologia Inverter, Digital Inverter e Ecobubble' },
    { name: 'LG', origin: 'Sistemas Smart Inverter, Direct Drive e AI DD' },
    { name: 'Electrolux', origin: 'Geladeiras Frost Free, Lavadoras e Fornos' },
    { name: 'Brastemp', origin: 'Refrigeradores Inverse, Lavadoras e Fornos de Embutir' },
    { name: 'Consul', origin: 'Refrigeradores, Freezers, Lavadoras e Frigobares' },
  ];

  return (
    <section className="py-14 sm:py-16 bg-[#0a0a0c]" aria-labelledby="marcas-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 id="marcas-heading" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Assistência para diferentes marcas de eletrodomésticos
          </h2>
          <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
            {COMPANY.brandNotice}
          </p>
        </div>

        {/* Brand visual grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="p-5 rounded-xl bg-[#121217] border border-neutral-800/80 hover:border-[#d4af37]/40 transition-all flex flex-col items-center text-center group"
            >
              <span className="text-xl sm:text-2xl font-black tracking-wider text-white group-hover:text-[#f3e5ab] transition-colors">
                {brand.name}
              </span>
              <span className="text-[11px] text-neutral-400 mt-2 line-clamp-2">
                {brand.origin}
              </span>
            </div>
          ))}
        </div>

        {onNavigate && (
          <div className="text-center mt-6">
            <button
              onClick={() => onNavigate('/marcas/')}
              className="text-xs font-semibold text-[#d4af37] hover:underline"
            >
              Saiba mais sobre as marcas atendidas pela Energy Manutenções →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
