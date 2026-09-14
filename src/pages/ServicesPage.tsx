import React from 'react';
import { Wrench, AlertTriangle, ShieldCheck, MessageCircle } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { COMPANY } from '../data/company';
import { ServiceCard } from '../components/ServiceCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { CTASection } from '../components/CTASection';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const categories: ('Refrigeração' | 'Lavanderia' | 'Cozinha')[] = [
    'Refrigeração',
    'Lavanderia',
    'Cozinha',
  ];

  return (
    <>
      <SEOHead
        title="Serviços de Assistência Técnica | Energy Manutenções Caxias do Sul"
        description="Conheça todos os serviços de conserto de geladeiras, máquinas de lavar, lava e seca, freezers e fornos em Caxias do Sul e região."
        canonicalPath="/servicos/"
        breadcrumbs={[{ name: 'Serviços', url: '/servicos/' }]}
      />

      <Breadcrumbs items={[{ name: 'Serviços', url: '/servicos/' }]} onNavigate={onNavigate} />

      <section className="py-10 sm:py-16 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-2 block">
              Catálogo de Especialidades Técnicas
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Manutenção e Assistência Técnica de Eletrodomésticos
            </h1>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
              Atendimento técnico especializado em Caxias do Sul, Farroupilha e Flores da Cunha. Grande parte dos reparos pode ser realizada no endereço do cliente mediante agendamento prévio.
            </p>
          </div>

          {/* Grouped by categories */}
          {categories.map((category) => {
            const items = SERVICES_DATA.filter((s) => s.category === category);
            return (
              <div key={category} className="mb-14 last:mb-0">
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-neutral-800">
                  <span className="text-xl font-bold text-white tracking-tight">
                    Linha de {category}
                  </span>
                  <span className="text-xs text-[#d4af37] bg-[#1a1a24] px-2.5 py-0.5 rounded-full border border-[#d4af37]/20 font-mono font-semibold">
                    {items.length} {items.length === 1 ? 'equipamento' : 'equipamentos'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((service) => (
                    <ServiceCard key={service.id} service={service} onNavigate={onNavigate} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Service Exclusions Box (Strict PRD Compliance) */}
          <div className="mt-14 p-6 rounded-2xl bg-[#13131a] border border-neutral-800 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>Importante: Equipamentos e Atividades Não Atendidas</span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Para preservar a excelência e foco técnico, a Energy Manutenções <strong>NÃO</strong> atende pequenos eletrodomésticos portáteis (incluindo fritadeiras elétricas / Air fryer e cafeteiras) e <strong>NÃO</strong> comercializa peças avulsas de reposição de forma separada. Nosso trabalho é exclusivamente a prestação de serviços de diagnóstico, manutenção e conserto em equipamentos de grande porte.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Não encontrou seu equipamento ou tem dúvidas?"
        subtitle="Entre em contato via WhatsApp e consulte a viabilidade de atendimento para seu eletrodoméstico com a nossa equipe."
      />
    </>
  );
};
