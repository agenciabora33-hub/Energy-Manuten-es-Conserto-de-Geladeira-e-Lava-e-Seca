import React from 'react';
import { MessageCircle, Wrench, ArrowLeft, Home } from 'lucide-react';
import { COMPANY } from '../data/company';
import { SEOHead } from '../components/SEOHead';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="Página Não Encontrada (404) | Energy Manutenções"
        description="A página que você está procurando não foi encontrada. Mas podemos ajudar você a encontrar assistência para seu eletrodoméstico em Caxias do Sul."
        canonicalPath="/404/"
      />

      <section className="min-h-[65vh] flex items-center justify-center py-16 px-4 sm:px-6 bg-[#0a0a0c]">
        <div className="max-w-md w-full text-center space-y-6">
          <span className="text-5xl sm:text-6xl font-black font-mono text-[#d4af37]">
            404
          </span>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Não encontramos essa página.
            </h1>
            <p className="text-sm sm:text-base text-neutral-300">
              Mas podemos ajudar você a encontrar assistência para seu eletrodoméstico.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('/servicos/')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa851d] text-[#0a0a0c] font-bold text-sm shadow hover:brightness-110 active:scale-95 transition-all"
            >
              <Wrench className="w-4 h-4" />
              <span>Ver serviços</span>
            </button>

            <a
              href={COMPANY.contact.defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-[#0a0a0c] font-bold text-sm hover:brightness-110 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Voltar para a página inicial</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
