import React from 'react';
import { Shield, Building2, MapPin, Calendar, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { COMPANY } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { CTASection } from '../components/CTASection';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="Sobre a Energy Manutenções | Assistência Técnica em Caxias do Sul"
        description="Conheça a Energy Manutenções: empresa ativa desde 2022, especializada em assistência técnica e manutenção de eletrodomésticos em Caxias do Sul e região."
        canonicalPath="/sobre/"
        breadcrumbs={[{ name: 'Sobre', url: '/sobre/' }]}
      />

      <Breadcrumbs items={[{ name: 'Sobre', url: '/sobre/' }]} onNavigate={onNavigate} />

      <section className="py-10 sm:py-16 bg-[#0a0a0c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-2 block">
              Institucional & Transparência
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Sobre a Energy Manutenções
            </h1>
            <p className="mt-3 text-base text-neutral-300 leading-relaxed">
              Atuação séria e transparente em manutenção e assistência técnica de eletrodomésticos para Caxias do Sul e municípios da Serra Gaúcha.
            </p>
          </div>

          <div className="space-y-6 text-sm text-neutral-300 leading-relaxed">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121217] border border-neutral-800 space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight">
                Nossa Atuação e Compromisso
              </h2>
              <p>
                A Energy Manutenções é uma empresa de assistência técnica especializada, com atuação contínua desde <strong>18 de abril de 2022</strong> em Caxias do Sul e região da Serra Gaúcha.
              </p>
              <p>
                Nossa atividade principal é a reparação e manutenção de equipamentos eletroeletrônicos e eletrodomésticos de uso doméstico e comercial leve. Atuamos com uma ampla gama de equipamentos essenciais para o dia a dia das famílias e empresas, incluindo geladeiras, máquinas de lavar, aparelhos lava e seca, secadoras, freezers, fornos elétricos, micro-ondas, adegas climatizadas, frigobares e lava-louças.
              </p>
              <p>
                Acreditamos que a confiança se constrói com diagnósticos claros, explicações técnicas sinceras e respeito às necessidades do cliente, buscando sempre entender a situação antes de propor qualquer intervenção.
              </p>
            </div>

            {/* Business Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#14141d] border border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <Calendar className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Fundação</span>
                </div>
                <p className="text-base font-bold text-white">18/04/2022</p>
                <p className="text-xs text-neutral-400">
                  Atendimento com experiência e compromisso na manutenção de eletrodomésticos.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#14141d] border border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Localização da Sede</span>
                </div>
                <p className="text-base font-bold text-white">Caxias do Sul – RS</p>
                <p className="text-xs text-neutral-400">
                  {COMPANY.address.fullFormatted}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#14141d] border border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <Building2 className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Áreas Atendidas</span>
                </div>
                <p className="text-base font-bold text-white">Caxias, Farroupilha e Flores</p>
                <p className="text-xs text-neutral-400">
                  Atendimento presencial a domicílio mediante agendamento prévio.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#14141d] border border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <Shield className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Transparência</span>
                </div>
                <p className="text-base font-bold text-white">Avaliação Técnica</p>
                <p className="text-xs text-neutral-400">
                  Isenção da taxa de deslocamento quando o reparo é realizado no momento da visita.
                </p>
              </div>
            </div>

            {/* Informações Institucionais */}
            <div className="p-6 rounded-2xl bg-[#121217] border border-neutral-800 space-y-2 text-xs">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-[#d4af37] mb-2">
                Informações Institucionais
              </h3>
              <p><strong className="text-white">Empresa:</strong> {COMPANY.tradeName}</p>
              <p><strong className="text-white">Segmento:</strong> {COMPANY.primaryActivity}</p>
              <p><strong className="text-white">Sede Técnica:</strong> {COMPANY.address.fullFormatted}</p>
              <p><strong className="text-white">Central de Atendimento:</strong> {COMPANY.contact.phone}</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Precisa de assistência técnica para seu aparelho?"
        subtitle="Entre em contato com nossa equipe pelo WhatsApp para relatar o problema e agendar uma visita."
      />
    </>
  );
};
