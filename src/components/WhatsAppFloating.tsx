import React, { useState } from 'react';
import { X } from 'lucide-react';
import { COMPANY } from '../data/company';

interface WhatsAppFloatingProps {
  customMessage?: string;
}

export const WhatsAppFloating: React.FC<WhatsAppFloatingProps> = ({ customMessage }) => {
  const [showTooltip, setShowTooltip] = useState(true);
  const targetUrl = COMPANY.buildWhatsAppUrl(customMessage);

  return (
    <div
      id="whatsapp-floating-container"
      className="fixed right-3.5 sm:right-6 md:right-8 z-[99999] flex flex-col items-end gap-2.5 select-none pointer-events-auto"
      style={{
        bottom: 'max(1.25rem, calc(1.25rem + env(safe-area-inset-bottom, 0px)))',
      }}
    >
      {/* Micro prompt tooltip */}
      {showTooltip && (
        <div
          id="whatsapp-floating-tooltip"
          className="flex items-center gap-2 bg-[#121216]/95 border-2 border-[#25D366]/60 text-neutral-200 text-xs py-1.5 px-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.85)] backdrop-blur-md animate-whatsapp-bounce max-w-[280px] sm:max-w-none"
        >
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1.5">
            <span className="font-extrabold text-white text-[12px] sm:text-xs tracking-tight">
              Atendimento Online
            </span>
            <span className="text-[11px] text-neutral-300 font-normal">
              • Resposta rápida
            </span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-neutral-400 hover:text-white p-1 ml-1 rounded-full hover:bg-neutral-800/60 transition-colors"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main floating button */}
      <a
        id="whatsapp-floating-button"
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#1ebd58] hover:from-[#20ba59] hover:to-[#179c48] text-white font-bold text-sm sm:text-base shadow-[0_4px_25px_rgba(37,211,102,0.6)] hover:shadow-[0_8px_35px_rgba(37,211,102,0.8)] hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/40 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 animate-whatsapp-ripple"
        aria-label="Conversar com a Energy Manutenções pelo WhatsApp"
      >
        {/* Glow halo layer */}
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/40 blur-md pointer-events-none group-hover:opacity-100 opacity-75 transition-opacity" />

        {/* Attention Unread Badge Notification "1" */}
        <span className="absolute -top-2 -right-1.5 flex items-center justify-center min-w-[22px] h-[22px] px-1.5 bg-rose-600 text-white text-[11px] font-black rounded-full border-2 border-[#121216] shadow-lg animate-pulse z-10">
          1
        </span>

        {/* Button Content */}
        <div className="relative z-10 flex items-center gap-2.5">
          {/* Authentic WhatsApp Icon */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 flex items-center justify-center">
            <svg
              className="w-full h-full text-white fill-current drop-shadow-sm"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>

          {/* Text Labels */}
          <div className="flex flex-col items-start leading-tight">
            {/* Mobile View */}
            <div className="sm:hidden flex flex-col">
              <span className="font-black text-sm tracking-wide text-white drop-shadow">
                WhatsApp
              </span>
              <span className="text-[10px] text-emerald-100 font-semibold tracking-tight">
                Chamar agora
              </span>
            </div>

            {/* Desktop View */}
            <div className="hidden sm:flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white drop-shadow">
                Falar com a Energy
              </span>
              <span className="text-[11px] text-emerald-100 font-medium">
                Atendimento Rápido
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

