import React from 'react';
import { MapPin, Phone, MessageCircle, ShieldCheck, CreditCard, ChevronRight, Star } from 'lucide-react';
import { EnergyLogo } from './EnergyLogo';
import { COMPANY } from '../data/company';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
  };

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
            <a
              href="/"
              onClick={(e) => handleNav('/', e)}
              className="inline-block focus:outline-none focus:ring-1 focus:ring-[#d4af37] rounded"
              aria-label="Energy Manutenções - Página Inicial"
            >
              <EnergyLogo size="md" />
            </a>
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

            <div className="p-3 rounded-xl bg-[#121219] border border-[#d4af37]/25 flex items-center gap-2.5">
              <Star className="w-4 h-4 fill-current text-[#d4af37] flex-shrink-0" />
              <div className="text-[11px]">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <span>Nota 4.9 no Google</span>
                  <span className="text-[#d4af37]">★★★★★</span>
                </div>
                <p className="text-neutral-400 text-[10px] mt-0.5">Mais de 850 avaliações de clientes</p>
              </div>
            </div>
          </div>

          {/* Column 2: Principais Serviços (Crawlable internal links with keywords) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-4">
              Serviços Especializados
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/conserto-geladeira-caxias-do-sul/"
                  onClick={(e) => handleNav('/conserto-geladeira-caxias-do-sul/', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Conserto de Geladeira em Caxias do Sul</span>
                </a>
              </li>
              <li>
                <a
                  href="/conserto-maquina-de-lavar-caxias-do-sul/"
                  onClick={(e) => handleNav('/conserto-maquina-de-lavar-caxias-do-sul/', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Conserto de Máquina de Lavar</span>
                </a>
              </li>
              <li>
                <a
                  href="/conserto-lava-e-seca-caxias-do-sul/"
                  onClick={(e) => handleNav('/conserto-lava-e-seca-caxias-do-sul/', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Conserto de Lava e Seca</span>
                </a>
              </li>
              <li>
                <a
                  href="/conserto-secadora-caxias-do-sul/"
                  onClick={(e) => handleNav('/conserto-secadora-caxias-do-sul/', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Conserto de Secadora de Roupas</span>
                </a>
              </li>
              <li>
                <a
                  href="/conserto-freezer-caxias-do-sul/"
                  onClick={(e) => handleNav('/conserto-freezer-caxias-do-sul/', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Conserto de Freezer</span>
                </a>
              </li>
              <li>
                <a
                  href="/conserto-micro-ondas-caxias-do-sul/"
                  onClick={(e) => handleNav('/conserto-micro-ondas-caxias-do-sul/', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Conserto de Micro-ondas</span>
                </a>
              </li>
              <li>
                <a
                  href="/conserto-forno-eletrico-caxias-do-sul/"
                  onClick={(e) => handleNav('/conserto-forno-eletrico-caxias-do-sul/', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Conserto de Forno Elétrico</span>
                </a>
              </li>
              <li>
                <a
                  href="/conserto-lava-loucas-caxias-do-sul/"
                  onClick={(e) => handleNav('/conserto-lava-loucas-caxias-do-sul/', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Conserto de Lava-louças</span>
                </a>
              </li>
              <li>
                <a
                  href="/servicos/"
                  onClick={(e) => handleNav('/servicos/', e)}
                  className="text-[#d4af37] font-semibold hover:underline flex items-center gap-1.5 pt-1"
                >
                  <span>Ver lista completa de serviços →</span>
                </a>
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
                <a
                  href="/caxias-do-sul/"
                  onClick={(e) => handleNav('/caxias-do-sul/', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Caxias do Sul (Sede)</span>
                </a>
              </li>
              <li>
                <a
                  href="/farroupilha/"
                  onClick={(e) => handleNav('/farroupilha/', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Farroupilha</span>
                </a>
              </li>
              <li>
                <a
                  href="/flores-da-cunha/"
                  onClick={(e) => handleNav('/flores-da-cunha/', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Flores da Cunha</span>
                </a>
              </li>
              <li>
                <a
                  href="/areas-atendidas/"
                  onClick={(e) => handleNav('/areas-atendidas/', e)}
                  className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Todas as áreas atendidas</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="/eletrodomesticos-seminovos/"
                  onClick={(e) => handleNav('/eletrodomesticos-seminovos/', e)}
                  className="text-[#f3e5ab] hover:underline font-medium flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Eletrodomésticos Seminovos (60 dias garantia mecânica)</span>
                </a>
              </li>
              <li>
                <a
                  href="/marcas/"
                  onClick={(e) => handleNav('/marcas/', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Marcas: Samsung, LG, Electrolux, Brastemp, Consul</span>
                </a>
              </li>
              <li>
                <a
                  href="/blog/"
                  onClick={(e) => handleNav('/blog/', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>Artigos e Dicas Técnicas</span>
                </a>
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
                <a href="/sobre/" onClick={(e) => handleNav('/sobre/', e)} className="hover:text-white transition-colors block py-0.5">
                  Sobre a Empresa
                </a>
              </li>
              <li>
                <a href="/como-funciona/" onClick={(e) => handleNav('/como-funciona/', e)} className="hover:text-white transition-colors block py-0.5">
                  Como Funciona o Atendimento
                </a>
              </li>
              <li>
                <a href="/faq/" onClick={(e) => handleNav('/faq/', e)} className="hover:text-white transition-colors block py-0.5">
                  Dúvidas Frequentes (FAQ)
                </a>
              </li>
              <li>
                <a href="/contato/" onClick={(e) => handleNav('/contato/', e)} className="hover:text-white transition-colors block py-0.5">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="/politica-de-privacidade/" onClick={(e) => handleNav('/politica-de-privacidade/', e)} className="hover:text-white transition-colors block py-0.5">
                  Política de Privacidade
                </a>
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
            <a
              href="/politica-de-privacidade/"
              onClick={(e) => handleNav('/politica-de-privacidade/', e)}
              className="hover:text-neutral-300 underline underline-offset-2"
            >
              Privacidade
            </a>
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
