import React from 'react';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/company';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  customWhatsAppMessage?: string;
  variant?: 'gold' | 'dark';
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Precisa de assistência para seu eletrodoméstico?',
  subtitle = 'Envie uma mensagem pelo WhatsApp e explique o que está acontecendo com o equipamento para alinharmos seu atendimento.',
  customWhatsAppMessage,
  variant = 'gold',
}) => {
  const targetUrl = COMPANY.buildWhatsAppUrl(customWhatsAppMessage);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#0a0a0c]" aria-label="Chamada para Ação">
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative p-8 sm:p-12 border border-[#d4af37]/35 bg-gradient-to-b from-[#16161f] to-[#0d0d12] shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#d4af37]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#25D366]/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/25 text-[#d4af37] text-xs font-semibold uppercase tracking-wider">
            <span>Atendimento Rápido e Descomplicado</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa851d] text-[#0a0a0c] font-black text-sm sm:text-base shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:brightness-110 active:scale-95 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Solicitar atendimento pelo WhatsApp</span>
            </a>

            <a
              href={`tel:${COMPANY.contact.rawPhone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#14141b] hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Ligar: {COMPANY.contact.phone}</span>
            </a>
          </div>

          <p className="text-[11px] text-neutral-400 pt-2">
            Caxias do Sul • Farroupilha • Flores da Cunha • Atendimento a domicílio com agendamento
          </p>
        </div>
      </div>
    </section>
  );
};
