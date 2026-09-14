import React from 'react';
import { Star, Shield, Home, Clock } from 'lucide-react';
import { COMPANY } from '../data/company';

export const TrustBadges: React.FC = () => {
  return (
    <section className="py-8 bg-[#0e0e13] border-y border-neutral-900" aria-label="Diferenciais e Prova Social">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Badge 1: Google Rating */}
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#14141b] border border-neutral-800/80">
            <div className="p-2 rounded-lg bg-[#d4af37]/10 text-[#d4af37] flex-shrink-0">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-white text-base leading-none">4.9</span>
                <div className="flex text-[#d4af37] text-xs">
                  {'★★★★★'}
                </div>
              </div>
              <p className="text-[11px] text-neutral-200 font-bold mt-1">Nota 4.9 no Google</p>
              <p className="text-[10px] text-neutral-400 font-medium">+850 avaliações reais</p>
            </div>
          </div>

          {/* Badge 2: Garantia nos Serviços */}
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#14141b] border border-neutral-800/80">
            <div className="p-2 rounded-lg bg-[#d4af37]/10 text-[#d4af37] flex-shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-none">Garantia no Serviço</p>
              <p className="text-[11px] text-[#f3e5ab] font-medium mt-1">Garantia de 90 dias</p>
              <p className="text-[10px] text-neutral-400">Peças e mão de obra</p>
            </div>
          </div>

          {/* Badge 3: Atendimento a Domicílio */}
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#14141b] border border-neutral-800/80">
            <div className="p-2 rounded-lg bg-[#d4af37]/10 text-[#d4af37] flex-shrink-0">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-none">Atendimento a Domicílio</p>
              <p className="text-[11px] text-neutral-300 font-medium mt-1">Mediante agendamento</p>
              <p className="text-[10px] text-neutral-400">Caxias, Farroupilha e Flores</p>
            </div>
          </div>

          {/* Badge 4: Transparência Técnica */}
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#14141b] border border-neutral-800/80">
            <div className="p-2 rounded-lg bg-[#d4af37]/10 text-[#d4af37] flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-none">Avaliação Prévia</p>
              <p className="text-[11px] text-neutral-300 font-medium mt-1">Orientação via WhatsApp</p>
              <p className="text-[10px] text-neutral-400">Diagnóstico técnico claro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
