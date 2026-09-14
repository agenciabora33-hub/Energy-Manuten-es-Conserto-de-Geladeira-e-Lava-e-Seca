import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY } from '../data/company';

interface WhatsAppFloatingProps {
  customMessage?: string;
}

export const WhatsAppFloating: React.FC<WhatsAppFloatingProps> = ({ customMessage }) => {
  const [showTooltip, setShowTooltip] = useState(true);
  const defaultText = customMessage || 'Olá! Gostaria de tirar dúvidas e solicitar atendimento técnico para meu eletrodoméstico com a Energy Manutenções.';
  const targetUrl = COMPANY.buildWhatsAppUrl(defaultText);

  return (
    <aside
      aria-label="Atendimento rápido via WhatsApp"
      className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-[999] flex flex-col items-end gap-2.5 select-none"
    >
      {/* Eye-catching Tooltip / Speech Bubble (visible on both mobile and desktop) */}
      {showTooltip && (
        <div className="relative flex items-center gap-2.5 bg-[#121217] border border-[#25D366]/40 text-neutral-100 text-xs py-2 px-3.5 rounded-2xl shadow-[0_10px_28px_rgba(0,0,0,0.85)] max-w-[280px] sm:max-w-xs animate-in fade-in slide-in-from-bottom-3 duration-300">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>

          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 hover:text-[#25D366] transition-colors leading-snug"
          >
            <strong className="text-white block text-[11px] sm:text-xs">Atendimento Online</strong>
            <span className="text-neutral-300 text-[10px] sm:text-[11px]">
              Precisa de conserto? Fale no WhatsApp agora!
            </span>
          </a>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-neutral-500 hover:text-white p-1 rounded-full hover:bg-neutral-800 transition-colors shrink-0"
            aria-label="Fechar mensagem de atendimento"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Little speech bubble triangle pointing to the button */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#121217] border-r border-b border-[#25D366]/40 rotate-45" />
        </div>
      )}

      {/* Main Eye-Catching Floating Button */}
      <a
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#25D366] via-[#20ba5a] to-[#128C7E] text-white font-bold shadow-[0_8px_30px_rgba(37,211,102,0.55)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.85)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/30 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 animate-whatsapp-radar"
        aria-label="Conversar com a Energy Manutenções pelo WhatsApp (abre em nova janela)"
      >
        {/* Pulsing Radar Ring */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"
          aria-hidden="true"
        />

        {/* WhatsApp Icon */}
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white drop-shadow-sm shrink-0" />
        </div>

        {/* Label on Mobile & Desktop */}
        <div className="flex flex-col text-left leading-tight">
          <span className="font-black text-sm sm:text-base tracking-wide text-white drop-shadow-sm whitespace-nowrap">
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">Falar no WhatsApp</span>
          </span>
          <span className="text-[10px] sm:text-[11px] text-emerald-100 font-semibold tracking-normal flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>Online agora</span>
          </span>
        </div>

        {/* Unread / Notification Counter Badge */}
        <span
          className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 border-2 border-[#0a0a0c] text-[10px] font-black text-white shadow-md animate-pulse"
          title="1 atendente disponível"
        >
          1
        </span>
      </a>
    </aside>
  );
};

