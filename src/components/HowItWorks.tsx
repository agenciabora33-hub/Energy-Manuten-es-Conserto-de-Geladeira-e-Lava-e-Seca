import React from 'react';
import { MessageSquare, Search, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/company';

interface HowItWorksProps {
  onNavigate?: (path: string) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigate }) => {
  const steps = [
    {
      step: '01',
      title: 'Fale pelo WhatsApp',
      description: 'Envie uma mensagem contando o que está acontecendo com seu eletrodoméstico, se possível informando a marca e o modelo.',
      icon: MessageSquare,
    },
    {
      step: '02',
      title: 'Avaliação inicial',
      description: 'Sempre que possível, a equipe técnica busca entender previamente a situação para verificar sintomas comuns e orientar você.',
      icon: Search,
    },
    {
      step: '03',
      title: 'Atendimento',
      description: 'Quando necessário, é realizado atendimento no endereço do cliente mediante agendamento prévio com hora combinada.',
      icon: Wrench,
    },
    {
      step: '04',
      title: 'Solução transparente',
      description: 'Após avaliação técnica precisa, você recebe todas as informações e orçamento para decidir com total liberdade sobre o conserto.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-14 sm:py-18 bg-[#0a0a0c]" aria-labelledby="como-funciona-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-2">
            Processo Simples & Sem Burocracia
          </span>
          <h2 id="como-funciona-heading" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Como funciona o atendimento da Energy Manutenções
          </h2>
          <p className="mt-3 text-sm text-neutral-300">
            Atendimento pensado para facilitar sua rotina: entender o problema, avaliar a situação e apresentar as informações necessárias para que você decida com clareza.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative p-6 rounded-2xl bg-[#121217] border border-neutral-800/80 hover:border-[#d4af37]/35 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-[#d4af37]">
                      {item.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#1a1a24] text-[#d4af37]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/60 text-[11px] text-[#f3e5ab]">
                  {item.step === '01' && 'Envio de áudio, fotos ou modelo'}
                  {item.step === '02' && 'Alinhamento preliminar rápido'}
                  {item.step === '03' && 'Visita técnica a domicílio'}
                  {item.step === '04' && 'Orçamento transparente antes de agir'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparency callout */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-[#14141d] to-[#0f0f14] border border-[#d4af37]/25 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-300">
            <p className="font-semibold text-white mb-0.5">Política de Transparência da Taxa Técnica:</p>
            <p className="text-neutral-400">
              {COMPANY.technicalFeeStatement}
            </p>
          </div>

          <a
            href={COMPANY.contact.defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-[#d4af37] text-[#0a0a0c] font-bold text-xs hover:brightness-110 active:scale-95 transition-all whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Iniciar no WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
