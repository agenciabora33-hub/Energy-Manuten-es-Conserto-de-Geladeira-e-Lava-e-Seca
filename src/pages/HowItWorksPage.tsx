import React from 'react';
import { MessageSquare, Search, Wrench, CheckCircle2, ShieldCheck, CreditCard, ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { CTASection } from '../components/CTASection';

interface HowItWorksPageProps {
  onNavigate: (path: string) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  const steps = [
    {
      number: '01',
      title: 'Fale pelo WhatsApp',
      headline: 'Envio das informações iniciais',
      description: 'Envie uma mensagem pelo WhatsApp relatando o que está acontecendo com o seu equipamento. Se possível, informe a marca, o modelo exato e, caso ache conveniente, envie uma foto ou vídeo curto demonstrando o sintoma ou barulho apresentado.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Avaliação inicial',
      headline: 'Alinhamento técnico prévio',
      description: 'Sempre que possível, a equipe da Energy Manutenções busca entender previamente a situação por mensagem para verificar as hipóteses mais prováveis de defeito e verificar se o equipamento se enquadra na nossa linha de atuação.',
      icon: Search,
    },
    {
      number: '03',
      title: 'Atendimento a domicílio',
      headline: 'Visita técnica com hora combinada',
      description: 'Quando necessário, é realizado atendimento presencial no endereço do cliente mediante agendamento prévio. O técnico comparece ao local com ferramental adequado para inspecionar os componentes elétricos e mecânicos do eletrodoméstico.',
      icon: Wrench,
    },
    {
      number: '04',
      title: 'Solução e decisão clara',
      headline: 'Transparência total antes da execução',
      description: 'Após a avaliação presencial, o cliente recebe as informações técnicas necessárias e o orçamento detalhado para que possa decidir com total liberdade e clareza sobre a realização do conserto.',
      icon: CheckCircle2,
    },
  ];

  return (
    <>
      <SEOHead
        title="Como Funciona o Atendimento | Energy Manutenções Caxias do Sul"
        description="Entenda o passo a passo do atendimento a domicílio da Energy Manutenções: contato pelo WhatsApp, avaliação inicial, visita técnica e solução transparente."
        canonicalPath="/como-funciona/"
        breadcrumbs={[{ name: 'Como Funciona', url: '/como-funciona/' }]}
      />

      <Breadcrumbs items={[{ name: 'Como Funciona', url: '/como-funciona/' }]} onNavigate={onNavigate} />

      <section className="py-10 sm:py-16 bg-[#0a0a0c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-2 block">
              Passo a Passo Transparente
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Como funciona o atendimento da Energy Manutenções
            </h1>
            <p className="mt-3 text-base text-neutral-300 leading-relaxed">
              Estruturamos nosso atendimento para que o processo seja simples, seguro e sem surpresas. Saiba o que esperar desde a primeira mensagem até a conclusão do reparo.
            </p>
          </div>

          {/* Detailed Steps */}
          <div className="space-y-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="p-6 sm:p-8 rounded-3xl bg-[#121217] border border-neutral-800 hover:border-[#d4af37]/35 transition-colors flex flex-col sm:flex-row gap-6 items-start"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-[#181824] border border-[#d4af37]/25 text-[#d4af37]">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#d4af37]">
                        ETAPA {step.number}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-white tracking-tight">
                      {step.title} — <span className="text-[#f3e5ab] text-base font-medium">{step.headline}</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technical Fee & Commercial Rules Explanation */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#14141d] border border-[#d4af37]/30 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
              <span>Condições Comerciais e Informações Importantes</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
              <p>
                <strong>Taxa Técnica de Visita:</strong> {COMPANY.technicalFeeStatement}
              </p>
              <p>
                <strong>Garantia de Manutenção:</strong> {COMPANY.serviceWarrantyStatement}
              </p>
              <p>
                <strong>Formas de Pagamento:</strong> Aceitamos dinheiro, PIX e cartão de crédito, com opção de parcelamento conforme as condições comerciais acordadas.
              </p>
              <p className="text-neutral-400">
                <strong>Importante:</strong> Não prometemos atendimento imediato, conserto no mesmo dia ou orçamentos instantâneos sem inspeção das variáveis técnicas do equipamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Pronto para solicitar seu atendimento?"
        subtitle="Mande uma mensagem agora pelo WhatsApp e explique o que está acontecendo com seu aparelho."
      />
    </>
  );
};
