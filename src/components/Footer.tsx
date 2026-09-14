import React from 'react';
import { MapPin, Phone, MessageCircle, ShieldCheck, CreditCard, ChevronRight } from 'lucide-react';
import { EnergyLogo } from './EnergyLogo';
import { COMPANY } from '../data/company';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#070709] border-t border-[#d4af37]/20 text-neutral-400 text-sm">
      {/* Upper Footer CTA Strip */}
      <div className="border-b border-neutral-900 bg-gradient-to-r from-[#0d0d12] via-[#14141d] to-[#0d0d12] py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Precisa de assistência técnica para seu eletrodoméstico?
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Atendimento a domicílio com agendamento em Caxias do Sul, Farroupilha e Flores da Cunha.
            </p>
          </div>
          <a
            href={COMPANY.contact.defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#aa851d] text-[#0a0a0c] font-bold text-sm shadow-[0_4px_16px_rgba(212,175,55,0.25)] hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar pelo WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main Footer Links & Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1: Identity, NAP, CNPJ */}
          <div className="space-y-4">
            <button
              onClick={() => onNavigate('/')}
              className="focus:outline-none focus:ring-1 focus:ring-[#d4af37] rounded"
            >
              <EnergyLogo size="md" />
            </button>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {COMPANY.description}
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <address className="not-italic text-neutral-300 leading-snug">
                  <strong>Energy Manutenções</strong><br />
                  {COMPANY.address.street}<br />
                  {COMPANY.address.neighborhood}<br />
                  {COMPANY.address.city} – {COMPANY.address.state}<br />
                  CEP {COMPANY.address.postalCode}
                </address>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <a
                  href={`tel:${COMPANY.contact.rawPhone}`}
                  className="text-neutral-200 hover:text-[#d4af37] transition-colors font-medium"
                >
                  {COMPANY.contact.phone}
                </a>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#111116] border border-neutral-800 text-[11px] text-neutral-400">
              <p><strong className="text-neutral-300">CNPJ:</strong> {COMPANY.cnpj}</p>
            </div>
          </div>

          {/* Column 2: Principais Serviços */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-4">
              Serviços Especializados
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/conserto-geladeira-caxias-do-sul/')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Conserto de Geladeira</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/conserto-maquina-de-lavar-caxias-do-sul/')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Conserto de Máquina de Lavar</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/conserto-lava-e-seca-caxias-do-sul/')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Conserto de Lava e Seca</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/conserto-secadora-caxias-do-sul/')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Conserto de Secadora de Roupas</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/conserto-freezer-caxias-do-sul/')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Conserto de Freezer</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/conserto-micro-ondas-caxias-do-sul/')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Conserto de Micro-ondas</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/conserto-forno-eletrico-caxias-do-sul/')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Conserto de Forno Elétrico</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/conserto-lava-loucas-caxias-do-sul/')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Conserto de Lava-louças</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/servicos/')}
                  className="text-[#d4af37] font-semibold hover:underline flex items-center gap-1.5 pt-1"
                >
                  <span>Ver lista completa de serviços →</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Áreas, Seminovos & Marcas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-4">
              Localidades & Comercial
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/caxias-do-sul/')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Caxias do Sul (Sede)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/farroupilha/')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Farroupilha</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/flores-da-cunha/')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Flores da Cunha</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/areas-atendidas/')}
                  className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Todas as áreas atendidas</span>
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onNavigate('/eletrodomesticos-seminovos/')}
                  className="text-[#f3e5ab] hover:underline font-medium flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Eletrodomésticos Seminovos (60 dias garantia mecânica)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/marcas/')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Marcas: Samsung, LG, Electrolux, Brastemp, Consul</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/blog/')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Artigos e Dicas Técnicas</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Institucional, Garantias e Formas de Pagamento */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37]">
              Institucional & Transparência
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => onNavigate('/sobre/')} className="hover:text-white transition-colors">
                  Sobre a Empresa
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/como-funciona/')} className="hover:text-white transition-colors">
                  Como Funciona o Atendimento
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/faq/')} className="hover:text-white transition-colors">
                  Dúvidas Frequentes (FAQ)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contato/')} className="hover:text-white transition-colors">
                  Fale Conosco
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/politica-de-privacidade/')} className="hover:text-white transition-colors">
                  Política de Privacidade
                </button>
              </li>
            </ul>

            <div className="pt-2 border-t border-neutral-900 space-y-2 text-[11px] text-neutral-400">
              <div className="flex items-start gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-neutral-300">Garantia:</strong> Serviços conforme OS/legislação. Seminovos: 60 dias de garantia mecânica.
                </p>
              </div>
              <div className="flex items-start gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-neutral-300">Pagamento:</strong> Dinheiro, PIX e Cartão de crédito (parcelamento conforme condições comerciais).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Note */}
        <div className="mt-10 pt-6 border-t border-neutral-900 text-[11px] text-neutral-400 leading-relaxed">
          <p className="mb-2">{COMPANY.brandNotice}</p>
          <p className="mb-2">
            <strong>Taxa Técnica:</strong> {COMPANY.technicalFeeStatement}
          </p>
          <p className="text-neutral-400">
            <strong>Exclusões:</strong> Não atendemos pequenos eletrodomésticos (como air fryer e cafeteiras) e não comercializamos peças avulsas separadamente.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Energy Manutenções. Todos os direitos reservados. CNPJ: {COMPANY.cnpj}.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('/politica-de-privacidade/')}
              className="hover:text-neutral-300 underline underline-offset-2"
            >
              Privacidade
            </button>
            <a
              href={COMPANY.contact.defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] hover:underline"
            >
              WhatsApp Oficial: {COMPANY.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
