import React from 'react';
import { MessageCircle, Wrench, ShieldCheck, MapPin, ArrowRight, Phone, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { COMPANY } from '../data/company';
import { SERVICES_DATA } from '../data/services';
import { TrustBadges } from '../components/TrustBadges';
import { BrandSection } from '../components/BrandSection';
import { LocationSection } from '../components/LocationSection';
import { HowItWorks } from '../components/HowItWorks';
import { FAQSection } from '../components/FAQSection';
import { ContactForm } from '../components/ContactForm';
import { CTASection } from '../components/CTASection';
import { ServiceCard } from '../components/ServiceCard';
import { SEOHead } from '../components/SEOHead';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="Energy Manutenções | Assistência Técnica de Eletrodomésticos em Caxias do Sul"
        description="Conserto de geladeiras, máquinas de lavar, lava e seca e outros eletrodomésticos, com atendimento profissional em Caxias do Sul e região."
        canonicalPath="/"
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24 border-b border-neutral-900 bg-gradient-to-b from-[#0a0a0c] via-[#101017] to-[#0a0a0c]">
        {/* Subtle decorative glow elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#d4af37]/8 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Top Regional Coverage Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161622] border border-[#d4af37]/30 text-xs font-semibold text-[#f3e5ab] shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Caxias do Sul • Farroupilha • Flores da Cunha</span>
            </div>

            {/* H1 Rigoroso do PRD */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Assistência técnica de eletrodomésticos em{' '}
              <span className="text-gold-gradient">Caxias do Sul</span>
            </h1>

            {/* Subheadline Rigorosa do PRD */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
              Conserto de geladeiras, máquinas de lavar, lava e seca e outros eletrodomésticos, com atendimento profissional em Caxias do Sul e região.
            </p>

            {/* CTAs Primário e Secundário */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={COMPANY.contact.defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa851d] text-[#0a0a0c] font-black text-base shadow-[0_4px_24px_rgba(212,175,55,0.35)] hover:brightness-110 active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Solicitar atendimento pelo WhatsApp</span>
              </a>

              <button
                onClick={() => onNavigate('/servicos/')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#14141d] hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-semibold text-sm transition-colors"
              >
                <span>Conhecer nossos serviços</span>
                <ArrowRight className="w-4 h-4 text-[#d4af37]" />
              </button>
            </div>

            {/* Sub-notice with real NAP phone */}
            <p className="text-xs text-neutral-400">
              Ou ligue diretamente para:{' '}
              <a href={`tel:${COMPANY.contact.rawPhone}`} className="text-neutral-200 font-bold hover:underline">
                {COMPANY.contact.phone}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 2. PROVA SOCIAL & BADGES */}
      <TrustBadges />

      {/* 3. SEÇÃO: "Seu eletrodoméstico apresentou um problema?" */}
      <section className="py-14 sm:py-18 bg-[#0d0d12] border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#13131a] border border-[#d4af37]/25 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                Diagnóstico Técnico Especializado
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Seu eletrodoméstico apresentou um problema?
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Antes de procurar uma solução improvisada, fale com quem trabalha com manutenção de eletrodomésticos.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                A Energy Manutenções atende diferentes tipos de equipamentos e busca entender o problema inicialmente pelo WhatsApp sempre que possível.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={COMPANY.contact.defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa851d] text-[#0a0a0c] font-bold text-sm hover:brightness-110 active:scale-95 transition-all text-center shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Falar com a Energy</span>
              </a>

              <button
                onClick={() => onNavigate('/como-funciona/')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#181822] text-neutral-300 hover:text-white border border-neutral-700 text-xs font-semibold transition-colors"
              >
                <span>Ver como funciona o atendimento</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRINCIPAIS SERVIÇOS */}
      <section className="py-14 sm:py-20 bg-[#0a0a0c]" aria-labelledby="services-overview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                Linhas de Refrigeração, Lavanderia e Cozinha
              </span>
              <h2 id="services-overview-heading" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                Assistência para diferentes tipos de eletrodomésticos
              </h2>
              <p className="mt-2 text-sm text-neutral-300 max-w-2xl">
                De geladeiras e freezers a máquinas de lavar, lava e seca, secadoras e outros equipamentos.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/servicos/')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#181824] hover:bg-[#20202e] text-[#f3e5ab] border border-[#d4af37]/30 text-xs font-semibold transition-colors self-start md:self-auto"
            >
              <span>Ver todos os serviços</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} onNavigate={onNavigate} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('/servicos/')}
              className="text-xs font-semibold text-[#d4af37] hover:underline"
            >
              Consultar também fornos elétricos, lava-louças, frigobares, adegas e expositores de bebidas →
            </button>
          </div>
        </div>
      </section>

      {/* 5. ATENDIMENTO PENSADO PARA FACILITAR SUA ROTINA */}
      <section className="py-14 sm:py-18 bg-[#0e0e14] border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
                <Wrench className="w-3.5 h-3.5" />
                <span>Atendimento a Domicílio</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Atendimento pensado para facilitar sua rotina
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Quando necessário, a Energy realiza atendimento no endereço do cliente mediante agendamento.
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                O objetivo é tornar o processo mais simples: entender o problema, avaliar a situação e apresentar as informações necessárias para que você decida sobre o reparo.
              </p>

              <div className="pt-2 space-y-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Sem necessidade de transportar equipamentos pesados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Avaliação prévia pelo WhatsApp sempre que possível</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Isenção da taxa técnica quando o conserto é realizado no ato da visita</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#14141c] border border-neutral-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-[#d4af37]">
                Transparência com o Cliente
              </h3>
              <div className="space-y-3 text-xs text-neutral-300">
                <p>
                  <strong>Taxa Técnica de Deslocamento:</strong> {COMPANY.technicalFeeStatement}
                </p>
                <p>
                  <strong>Garantia de Serviços:</strong> {COMPANY.serviceWarrantyStatement}
                </p>
                <p>
                  <strong>Formas de Pagamento:</strong> Dinheiro, PIX e Cartão de crédito (parcelamento conforme condições comerciais).
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={COMPANY.contact.defaultWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-[#0a0a0c] font-bold text-xs hover:brightness-110 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Agendar atendimento no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <HowItWorks onNavigate={onNavigate} />

      {/* 7. MARCAS */}
      <BrandSection onNavigate={onNavigate} />

      {/* 8. ÁREAS ATENDIDAS */}
      <LocationSection onNavigate={onNavigate} />

      {/* 9. SEMINOVOS TEASER */}
      <section className="py-14 sm:py-18 bg-[#0a0a0c] border-t border-neutral-900" aria-labelledby="seminovos-teaser-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#121217] via-[#191924] to-[#121217] border border-[#d4af37]/35 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 text-[#f3e5ab] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Eletrodomésticos Seminovos Revisados</span>
                </div>
                <h2 id="seminovos-teaser-heading" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Procurando eletrodomésticos seminovos com garantia mecânica?
                </h2>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  A Energy Manutenções também comercializa eletrodomésticos seminovos cuidadosamente revisados, com entrega programada e 60 dias de garantia mecânica conforme condições informadas pela empresa.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                    <span>Aparelhos testados e revisados</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                    <span>Troca de usado mediante análise</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                    <span>60 dias de garantia mecânica</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href={COMPANY.buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa851d] text-[#0a0a0c] font-bold text-sm shadow-md hover:brightness-110 active:scale-95 transition-all text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Consultar seminovos pelo WhatsApp</span>
                </a>

                <button
                  onClick={() => onNavigate('/eletrodomesticos-seminovos/')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#13131c] text-neutral-300 hover:text-white border border-neutral-700 text-xs font-semibold transition-colors"
                >
                  <span>Ver página de seminovos</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <FAQSection limit={6} showSearch={false} />

      {/* 11. FORMULÁRIO DE CONTATO */}
      <section className="py-12 sm:py-16 bg-[#0a0a0c] border-t border-neutral-900" aria-label="Formulário de Solicitação">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ContactForm />
        </div>
      </section>

      {/* 12. CTA FINAL */}
      <CTASection
        title="Precisa de assistência para seu eletrodoméstico?"
        subtitle="Envie uma mensagem pelo WhatsApp e explique o que está acontecendo com o equipamento."
      />
    </>
  );
};
