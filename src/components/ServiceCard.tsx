import React from 'react';
import { ArrowRight, MessageCircle, Wrench, Shield } from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY } from '../data/company';

interface ServiceCardProps {
  service: ServiceItem;
  onNavigate: (path: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onNavigate }) => {
  const targetWhatsAppUrl = COMPANY.buildWhatsAppUrl(service.whatsappMessage);

  return (
    <article className="group rounded-2xl bg-[#121217] border border-neutral-800 hover:border-[#d4af37]/45 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)]">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#181822] text-[#d4af37] border border-[#d4af37]/20">
            {service.category}
          </span>
          <Wrench className="w-4 h-4 text-neutral-500 group-hover:text-[#d4af37] transition-colors" />
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-[#f3e5ab] transition-colors leading-snug">
          {service.name}
        </h3>

        <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Common issues snippet for SXO/AEO clarity */}
        <div className="mt-4 pt-3 border-t border-neutral-800/80">
          <p className="text-[11px] font-semibold text-neutral-300 mb-1.5">Problemas frequentes:</p>
          <ul className="space-y-1 text-[11px] text-neutral-400">
            {service.commonProblems.slice(0, 2).map((prob, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-[#d4af37]">•</span>
                <span className="line-clamp-1">{prob}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-5 mt-5 border-t border-neutral-800 flex items-center justify-between gap-2">
        <button
          onClick={() => onNavigate(service.path)}
          className="text-xs font-semibold text-neutral-300 hover:text-white flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-[#d4af37] rounded py-1"
        >
          <span>Ver detalhes do serviço</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#d4af37] group-hover:translate-x-0.5 transition-transform" />
        </button>

        <a
          href={targetWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-[#0a0a0c] transition-all flex items-center justify-center"
          title={`Solicitar ${service.name} pelo WhatsApp`}
          aria-label={`Solicitar ${service.name} pelo WhatsApp`}
        >
          <MessageCircle className="w-4 h-4 fill-current" />
        </a>
      </div>
    </article>
  );
};
