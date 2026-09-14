import React from 'react';
import { Sparkles, ShieldCheck, RefreshCw, Truck, MessageCircle, AlertCircle, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { CTASection } from '../components/CTASection';

interface RefurbishedPageProps {
  onNavigate: (path: string) => void;
}

export const RefurbishedPage: React.FC<RefurbishedPageProps> = ({ onNavigate }) => {
  const whatsappUrl = COMPANY.buildWhatsAppUrl();

  const pillars = [
    {
      title: 'Equipamentos Revisados',
      description: 'Cada aparelho comercializado passa por testes e revisão preventiva criteriosa em nosso laboratório técnico antes de ser disponibilizado para venda.',
      icon: RefreshCw,
    },
    {
      title: 'Possibilidade de Troca de Usado',
      description: 'Avaliamos a possibilidade de receber seu aparelho eletrodoméstico usado na negociação mediante análise prévia das condições estruturais e mecânicas.',
      icon: Sparkles,
    },
    {
      title: 'Entrega Programada',
      description: 'Combinamos a entrega do eletrodoméstico seminovo de maneira programada e segura diretamente no seu endereço na região atendida.',
      icon: Truck,
    },
    {
      title: '60 Dias de Garantia Mecânica',
      description: 'Os eletrodomésticos seminovos contam com 60 dias de garantia mecânica, conforme as condições comerciais informadas no ato da aquisição.',
      icon: ShieldCheck,
    },
  ];

  return (
    <>
      <SEOHead
        title="Eletrodomésticos Seminovos em Caxias do Sul | Energy Manutenções"
        description="Eletrodomésticos seminovos revisados com 60 dias de garantia mecânica. Possibilidade de troca de usado mediante análise. Consulte no WhatsApp."
        canonicalPath="/eletrodomesticos-seminovos/"
        breadcrumbs={[{ name: 'Seminovos', url: '/eletrodomesticos-seminovos/' }]}
      />

      <Breadcrumbs items={[{ name: 'Seminovos', url: '/eletrodomesticos-seminovos/' }]} onNavigate={onNavigate} />

      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 bg-gradient-to-b from-[#0a0a0c] via-[#111119] to-[#0a0a0c] border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181824] border border-[#d4af37]/30 text-xs font-semibold text-[#f3e5ab]">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Linha de Seminovos Selecionados</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Eletrodomésticos seminovos revisados
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Equipamentos de linha branca revisados tecnicamente, com 60 dias de garantia mecânica conforme condições informadas e entrega programada em Caxias do Sul e região.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa851d] text-[#0a0a0c] font-black text-sm sm:text-base shadow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Consultar seminovos pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="py-14 sm:py-18 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Como funciona a aquisição de seminovos na Energy
            </h2>
            <p className="mt-2 text-sm text-neutral-300">
              Processo seguro, transparente e com suporte direto de quem entende de manutenção técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#121217] border border-neutral-800 hover:border-[#d4af37]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 rounded-xl bg-[#181822] text-[#d4af37] w-fit mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Stock Disclaimer Note */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#14141d] border border-neutral-800 space-y-4">
            <div className="flex items-center gap-2 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>Estoque Dinâmico e Informações em Tempo Real</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Quer saber quais aparelhos estão disponíveis agora?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              O estoque de eletrodomésticos seminovos (como refrigeradores Frost Free, máquinas de lavar e lava e seca) varia continuamente conforme revisões são finalizadas em nossa bancada. Para receber fotos reais, modelos atuais e detalhes das condições comerciais sem perda de tempo, entre em contato direto pelo WhatsApp.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-[#0a0a0c] font-bold text-xs hover:brightness-110 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Consultar seminovos disponíveis</span>
              </a>

              <span className="text-xs text-neutral-400">
                Garantia mecânica de 60 dias expressa nas condições informadas.
              </span>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Tem um aparelho usado e quer trocar por um seminovo revisado?"
        subtitle="Mande fotos e a descrição do seu eletrodoméstico usado pelo WhatsApp para análise prévia."
      />
    </>
  );
};
