import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Wrench } from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY } from '../data/company';

interface ServiceCardProps {
  service: ServiceItem;
  onNavigate: (path: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onNavigate }) => {
  const [imageError, setImageError] = useState(false);
  const targetWhatsAppUrl = COMPANY.buildWhatsAppUrl();

  return (
    <article className="group rounded-2xl bg-[#121217] border border-neutral-800/90 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_36px_rgba(212,175,55,0.08)]">
      <div>
        {/* Service Photograph Block */}
        <div
          onClick={() => onNavigate(service.path)}
          className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 cursor-pointer"
        >
          {service.imageUrl && !imageError ? (
            <img
              src={service.imageUrl}
              alt={service.imageAlt || service.name}
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#181822] to-[#0e0e14] text-neutral-500">
              <Wrench className="w-10 h-10 text-[#d4af37]/40 mb-2" />
              <span className="text-xs font-medium text-neutral-400">Energy Manutenções</span>
            </div>
          )}

          {/* Vignette and Dark Fade Gradient into Card Body */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-[#121217]/30 to-black/20" />

          {/* Category Tag Overlay */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#0a0a0c]/85 backdrop-blur-sm text-[#d4af37] border border-[#d4af37]/30 shadow-sm">
              {service.category}
            </span>
          </div>

          {/* Quick Info Badge */}
          <div className="absolute bottom-2.5 right-3">
            <span className="text-[10px] font-medium text-neutral-300 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded border border-neutral-700/50">
              A Domicílio
            </span>
          </div>
        </div>

        {/* Card Body Content */}
        <div className="p-5 sm:p-6 pt-3 sm:pt-4">
          <h3
            onClick={() => onNavigate(service.path)}
            className="text-lg font-bold text-white group-hover:text-[#f3e5ab] transition-colors leading-snug cursor-pointer"
          >
            {service.name}
          </h3>

          <p className="text-xs text-neutral-400 mt-2 leading-relaxed line-clamp-2">
            {service.shortDescription}
          </p>

          {/* Common issues snippet for SXO/AEO clarity */}
          <div className="mt-4 pt-3 border-t border-neutral-800/80">
            <p className="text-[11px] font-semibold text-neutral-300 mb-1.5">Problemas frequentes:</p>
            <ul className="space-y-1 text-[11px] text-neutral-400">
              {service.commonProblems.slice(0, 2).map((prob, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-[#d4af37] flex-shrink-0">•</span>
                  <span className="line-clamp-1">{prob}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 border-t border-neutral-800/80 flex items-center justify-between gap-2">
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
          className="p-2 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-[#0a0a0c] transition-all flex items-center justify-center shrink-0"
          title={`Solicitar ${service.name} pelo WhatsApp`}
          aria-label={`Solicitar ${service.name} pelo WhatsApp`}
        >
          <MessageCircle className="w-4 h-4 fill-current" />
        </a>
      </div>
    </article>
  );
};
