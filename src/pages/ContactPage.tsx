import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, Mail } from 'lucide-react';
import { COMPANY } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { ContactForm } from '../components/ContactForm';
import { CTASection } from '../components/CTASection';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="Contato | Energy Manutenções - Assistência Técnica Autorizada"
        description="Fale com a Energy Manutenções: Assistência técnica autorizada em Caxias do Sul e região. WhatsApp (54) 99179-6080. Rua Índia Ceci, 141, Bairro Marechal Floriano."
        canonicalPath="/contato/"
        breadcrumbs={[{ name: 'Contato', url: '/contato/' }]}
      />

      <Breadcrumbs items={[{ name: 'Contato', url: '/contato/' }]} onNavigate={onNavigate} />

      <section className="py-10 sm:py-16 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-2 block">
              Canais Oficiais de Atendimento
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Fale com a Energy Manutenções
            </h1>
            <p className="mt-3 text-base text-neutral-300 leading-relaxed">
              O WhatsApp é o nosso principal canal de comunicação e agendamento. Se preferir, você também pode preencher o formulário para adiantar as informações do seu eletrodoméstico.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left side: NAP, Address, Quick WhatsApp Callout */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#121217] border border-[#d4af37]/30 space-y-5">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[11px] font-bold text-[#f3e5ab] uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Assistência Técnica Autorizada</span>
                  </div>
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    {COMPANY.tradeName}
                  </h2>
                  <p className="text-xs text-neutral-400">{COMPANY.description}</p>
                </div>

                <div className="pt-2 border-t border-neutral-800 space-y-3 text-xs sm:text-sm text-neutral-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Endereço da Sede:</strong>
                      <p>{COMPANY.address.street}</p>
                      <p>{COMPANY.address.neighborhood}</p>
                      <p>{COMPANY.address.city} – {COMPANY.address.state}</p>
                      <p>CEP: {COMPANY.address.postalCode}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                    <div>
                      <strong className="text-white block text-xs">Telefone / WhatsApp:</strong>
                      <a
                        href={`tel:${COMPANY.contact.rawPhone}`}
                        className="text-base font-bold text-[#f3e5ab] hover:underline"
                      >
                        {COMPANY.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-800">
                  <a
                    href={COMPANY.contact.defaultWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-sm shadow-md hover:brightness-110 active:scale-95 transition-all"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Solicitar atendimento pelo WhatsApp</span>
                  </a>
                </div>

                <div className="pt-2 text-[11px] text-neutral-400 space-y-1">
                  <p><strong>Razão Social:</strong> {COMPANY.legalName}</p>
                  <p><strong>CNPJ:</strong> {COMPANY.cnpj} (Ativa)</p>
                </div>
              </div>

              {/* Area summary note */}
              <div className="p-6 rounded-2xl bg-[#14141d] border border-neutral-800 text-xs text-neutral-300 space-y-2">
                <p className="font-bold text-white text-sm">Cidades com atendimento a domicílio:</p>
                <p className="text-neutral-400">
                  Caxias do Sul (sede), Farroupilha e Flores da Cunha mediante agendamento. Outras regiões sob consulta prévia de viabilidade.
                </p>
              </div>
            </div>

            {/* Right side: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Dúvidas sobre o funcionamento do seu aparelho?"
        subtitle="Entre em contato com nossa equipe técnica pelo WhatsApp."
      />
    </>
  );
};
