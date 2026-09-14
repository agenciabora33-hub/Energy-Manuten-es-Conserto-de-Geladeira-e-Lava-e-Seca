import React from 'react';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="Política de Privacidade | Energy Manutenções"
        description="Termos de privacidade e tratamento de dados da Energy Manutenções em conformidade com a legislação aplicável (LGPD)."
        canonicalPath="/politica-de-privacidade/"
        breadcrumbs={[{ name: 'Política de Privacidade', url: '/politica-de-privacidade/' }]}
      />

      <Breadcrumbs items={[{ name: 'Privacidade', url: '/politica-de-privacidade/' }]} onNavigate={onNavigate} />

      <section className="py-10 sm:py-16 bg-[#0a0a0c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-2 block">
              Privacidade & Proteção de Dados
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Política de Privacidade
            </h1>
            <p className="mt-3 text-sm text-neutral-400">
              Última atualização: Setembro de 2026.
            </p>
          </div>

          <div className="space-y-6 text-sm text-neutral-300 leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#121217] border border-neutral-800 space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#d4af37]" />
                <span>1. Quem Somos e Controlador dos Dados</span>
              </h2>
              <p>
                A <strong>ENERGY MANUTENÇÕES</strong>, com sede na Rua Índia Ceci, 141, Bairro Marechal Floriano, Caxias do Sul – RS, CEP 95013-120, é a responsável pelo tratamento dos dados pessoais coletados por este website e através dos nossos canais de atendimento via WhatsApp e telefone.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121217] border border-neutral-800 space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#d4af37]" />
                <span>2. Dados Coletados e Finalidade</span>
              </h2>
              <p>
                Coletamos apenas os dados estritamente necessários para a prestação dos serviços solicitados pelo cliente:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-400">
                <li><strong>Nome completo e telefone/WhatsApp:</strong> para identificar o solicitante e retornar os contatos de orçamento e agendamento de visita.</li>
                <li><strong>Endereço e cidade:</strong> para fins de planejamento e execução da visita técnica a domicílio nas áreas atendidas (Caxias do Sul, Farroupilha e Flores da Cunha).</li>
                <li><strong>Informações sobre o equipamento (marca, modelo e sintomas):</strong> para elaboração de diagnóstico técnico preliminar.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#121217] border border-neutral-800 space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#d4af37]" />
                <span>3. Não Compartilhamento e Segurança</span>
              </h2>
              <p>
                A Energy Manutenções <strong>não comercializa, não aluga e não repassa</strong> informações pessoais ou dados de contato para terceiros para fins de marketing ou publicidade. Todas as informações fornecidas são tratadas com sigilo e utilizadas exclusivamente para fins operacionais e cumprimento de obrigações fiscais e legais decorrentes da prestação de serviços.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121217] border border-neutral-800 space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#d4af37]" />
                <span>4. Direitos do Titular de Dados</span>
              </h2>
              <p>
                Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD), você tem o direito de solicitar a confirmação da existência de tratamento, o acesso aos dados ou a correção de informações incompletas. Para exercer esses direitos, basta entrar em contato através do nosso canal oficial de WhatsApp pelo número (54) 99179-6080.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
