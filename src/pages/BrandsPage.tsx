import React from 'react';
import { ShieldCheck, MessageCircle, AlertCircle } from 'lucide-react';
import { COMPANY } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { CTASection } from '../components/CTASection';

interface BrandsPageProps {
  onNavigate: (path: string) => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({ onNavigate }) => {
  const brandList = [
    {
      name: 'Samsung',
      description: 'Atendimento técnico para refrigeradores convencionais e Frost Free, refrigeradores Inverse, lava e seca com motor Digital Inverter e Ecobubble, além de fornos micro-ondas.',
      features: ['Lava e Seca EcoBubble e Inverter', 'Geladeiras Frost Free e Duplex', 'Micro-ondas e Fornos'],
    },
    {
      name: 'LG',
      description: 'Manutenção em lavadoras e lava e seca com tecnologia Direct Drive e AI DD, refrigeradores Smart Inverter, micro-ondas e lava-louças residenciais.',
      features: ['Lava e Seca Direct Drive e Inverter', 'Refrigeradores Smart Inverter', 'Lava-louças'],
    },
    {
      name: 'Electrolux',
      description: 'Reparos especializados em refrigeradores Frost Free, Duplex e Inverse, lavadoras Top Load e Front Load, secadoras de roupas, fornos elétricos de embutir e bancada, micro-ondas e adegas.',
      features: ['Geladeiras Frost Free e Inverse', 'Lavadoras e Secadoras', 'Fornos Elétricos e Micro-ondas'],
    },
    {
      name: 'Brastemp',
      description: 'Assistência técnica para toda a linha branca Brastemp: refrigeradores Inverse e Duplex, máquinas de lavar com sistemas de agitação e centrifugação, lava-louças e fornos elétricos.',
      features: ['Refrigeradores Duplex e Inverse', 'Máquinas de Lavar e Lava e Seca', 'Fornos de Embutir e Lava-louças'],
    },
    {
      name: 'Consul',
      description: 'Conserto e manutenção preventiva em refrigeradores Frost Free e convencionais, freezers verticais e horizontais, frigobares, cervejeiras/expositores e lavadoras Consul.',
      features: ['Refrigeradores e Freezers', 'Frigobares e Cervejeiras', 'Lavadoras de Roupas'],
    },
  ];

  return (
    <>
      <SEOHead
        title="Marcas Atendidas | Energy Manutenções - Assistência Técnica Autorizada"
        description="Assistência técnica autorizada e especializada para diferentes marcas de eletrodomésticos em Caxias do Sul e região: Samsung, LG, Electrolux, Brastemp e Consul."
        canonicalPath="/marcas/"
        breadcrumbs={[{ name: 'Marcas', url: '/marcas/' }]}
      />

      <Breadcrumbs items={[{ name: 'Marcas', url: '/marcas/' }]} onNavigate={onNavigate} />

      <section className="py-10 sm:py-16 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-2 block">
              Multi-marcas em Linha Branca
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Assistência para diferentes marcas de eletrodomésticos
            </h1>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
              {COMPANY.brandNotice}
            </p>
          </div>

          {/* Brands Detail List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandList.map((brand) => (
              <div
                key={brand.name}
                className="p-6 rounded-2xl bg-[#121217] border border-neutral-800 hover:border-[#d4af37]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-black text-white tracking-wider">
                      {brand.name}
                    </h2>
                    <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {brand.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-800/80">
                    <p className="text-[11px] font-semibold text-neutral-400 mb-2">Aparelhos frequentes:</p>
                    <ul className="space-y-1 text-xs text-neutral-300">
                      {brand.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-[#d4af37]">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800">
                  <a
                    href={COMPANY.buildWhatsAppUrl(`Olá! Gostaria de atendimento para um eletrodoméstico da marca ${brand.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#1a1a24] hover:bg-[#d4af37] text-neutral-200 hover:text-[#0a0a0c] text-xs font-bold transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Consultar {brand.name} no WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance & Disclosure Card */}
          <div className="mt-12 p-6 rounded-2xl bg-[#14141d] border border-neutral-800 flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
            <div className="text-xs text-neutral-300 space-y-1">
              <p className="font-bold text-white">Transparência e Esclarecimento:</p>
              <p className="text-neutral-400 leading-relaxed">
                A Energy Manutenções atua como assistência técnica autorizada e especializada para eletrodomésticos multimarcas. Todos os nomes de marcas, modelos e logotipos são de propriedade de seus respectivos titulares e são citados para identificação de compatibilidade técnica e direcionamento do atendimento qualificado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Precisa de assistência para o seu aparelho?"
        subtitle="Informe a marca e o modelo no WhatsApp para que possamos orientar você sobre o diagnóstico."
      />
    </>
  );
};
