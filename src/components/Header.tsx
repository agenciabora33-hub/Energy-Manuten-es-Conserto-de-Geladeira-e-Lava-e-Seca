import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, ChevronDown, ShieldCheck } from 'lucide-react';
import { EnergyLogo } from './EnergyLogo';
import { COMPANY } from '../data/company';
import { SERVICES_DATA } from '../data/services';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(path);
  };

  const navLinks = [
    { name: 'Serviços', path: '/servicos/', hasDropdown: true },
    { name: 'Como Funciona', path: '/como-funciona/' },
    { name: 'Sobre', path: '/sobre/' },
    { name: 'Áreas Atendidas', path: '/areas-atendidas/' },
    { name: 'Seminovos', path: '/eletrodomesticos-seminovos/' },
    { name: 'FAQ', path: '/faq/' },
    { name: 'Contato', path: '/contato/' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#0a0a0c]/95 backdrop-blur-md border-[#d4af37]/20 shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
          : 'bg-[#0a0a0c] border-neutral-900'
      }`}
    >
      {/* Top micro bar with NAP phone for SXO/EEAT on desktop */}
      <div className="hidden lg:block bg-[#0f0f13] border-b border-neutral-900/80 py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-6">
            <span>
              Atendimento em <strong className="text-neutral-200">Caxias do Sul • Farroupilha • Flores da Cunha</strong>
            </span>
            <span className="text-neutral-600">|</span>
            <span>Atendimento a domicílio com agendamento</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 text-[#f3e5ab] border border-[#d4af37]/35 font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Assistência Técnica Autorizada</span>
            </span>
            <a
              href={`tel:${COMPANY.contact.rawPhone}`}
              className="flex items-center gap-1.5 text-neutral-300 hover:text-[#d4af37] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#d4af37]" />
              <span>{COMPANY.contact.phone}</span>
            </a>
            <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 font-medium">
              CNPJ: {COMPANY.cnpj}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#d4af37] rounded-lg p-1 text-left"
            aria-label="Energy Manutenções - Página Inicial"
          >
            <EnergyLogo size="md" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2 text-sm font-medium" aria-label="Navegação Principal">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick(link.path)}
                      className={`inline-flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                        isActive
                          ? 'text-[#f3e5ab] bg-[#18181f] border border-[#d4af37]/30'
                          : 'text-neutral-300 hover:text-white hover:bg-neutral-900/60'
                      }`}
                      aria-expanded={servicesDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-[#d4af37]' : 'text-neutral-500'}`} />
                    </button>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50">
                        <div className="rounded-xl bg-[#111116] border border-[#d4af37]/25 p-3 shadow-[0_12px_32px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37] px-2.5 py-1 mb-1 border-b border-neutral-800">
                            Eletrodomésticos Atendidos
                          </div>
                          <div className="grid grid-cols-1 gap-1 max-h-[360px] overflow-y-auto">
                            {SERVICES_DATA.slice(0, 8).map((service) => (
                              <button
                                key={service.path}
                                onClick={() => handleNavClick(service.path)}
                                className="w-full text-left px-2.5 py-1.5 text-xs text-neutral-300 hover:text-white hover:bg-[#1a1a24] rounded-lg transition-colors flex items-center justify-between"
                              >
                                <span className="truncate">{service.name}</span>
                                <span className="text-[10px] text-neutral-500 font-mono">{service.category}</span>
                              </button>
                            ))}
                          </div>
                          <div className="mt-2 pt-2 border-t border-neutral-800">
                            <button
                              onClick={() => handleNavClick('/servicos/')}
                              className="w-full text-center text-xs font-semibold text-[#d4af37] hover:underline py-1"
                            >
                              Ver todos os 11 serviços →
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'text-[#f3e5ab] bg-[#18181f] border border-[#d4af37]/30'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-900/60'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA (WhatsApp) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={COMPANY.contact.defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#aa851d] text-[#0a0a0c] font-bold text-sm shadow-[0_2px_12px_rgba(212,175,55,0.3)] hover:brightness-110 active:scale-[0.98] transition-all"
              aria-label="Falar com a Energy Manutenções pelo WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Controls: Compact WhatsApp icon + Menu Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={COMPANY.contact.defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#d4af37] text-[#0a0a0c] font-bold text-xs shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
              aria-label="WhatsApp da Energy"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#14141a] text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0e0e12] border-b border-[#d4af37]/20 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in fade-in duration-200">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#14141d] border border-[#d4af37]/35 text-[#f3e5ab]">
            <ShieldCheck className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wide">Assistência Técnica Autorizada</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  currentPath === link.path
                    ? 'bg-[#1a1a24] text-[#f3e5ab] font-bold border border-[#d4af37]/30'
                    : 'text-neutral-300 hover:bg-neutral-900'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('/marcas/')}
              className="w-full text-left px-4 py-2 text-sm text-neutral-400 hover:text-white"
            >
              Marcas Atendidas
            </button>
            <button
              onClick={() => handleNavClick('/blog/')}
              className="w-full text-left px-4 py-2 text-sm text-neutral-400 hover:text-white"
            >
              Artigos Técnicos / Blog
            </button>
          </div>

          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2.5">
            <a
              href={`tel:${COMPANY.contact.rawPhone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#181820] text-neutral-200 border border-neutral-700 text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Ligar: {COMPANY.contact.phone}</span>
            </a>
            <a
              href={COMPANY.contact.defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#aa851d] text-[#0a0a0c] text-sm font-bold shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Solicitar atendimento pelo WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
