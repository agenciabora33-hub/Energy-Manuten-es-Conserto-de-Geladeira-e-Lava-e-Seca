import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY } from '../data/company';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    equipment: 'Geladeira',
    brand: 'Brastemp',
    city: 'Caxias do Sul',
    problem: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const equipmentOptions = [
    'Geladeira',
    'Máquina de lavar',
    'Lava e seca',
    'Secadora',
    'Freezer',
    'Micro-ondas',
    'Forno elétrico',
    'Lava-louças',
    'Frigobar',
    'Adega climatizada',
    'Expositor de bebidas',
    'Outro equipamento de refrigeração/lavanderia'
  ];

  const brandOptions = [
    'Brastemp',
    'Consul',
    'Electrolux',
    'Samsung',
    'LG',
    'Outra marca'
  ];

  const cityOptions = [
    'Caxias do Sul',
    'Farroupilha',
    'Flores da Cunha',
    'Outra cidade (sob consulta)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Por favor, informe seu nome.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setError('Por favor, informe um número de telefone/WhatsApp válido.');
      return;
    }
    if (!formData.problem.trim()) {
      setError('Por favor, descreva brevemente o problema apresentado.');
      return;
    }

    setError('');
    setSubmitted(true);

    // Build the pre-filled WhatsApp message
    const waText = `Olá! Meu nome é ${formData.name.trim()}.
Moro em: ${formData.city}.
Equipamento: ${formData.equipment} (${formData.brand}).
Problema: ${formData.problem.trim()}.
Meu telefone de contato: ${formData.phone.trim()}.
Gostaria de solicitar atendimento da Energy Manutenções.`;

    const redirectUrl = COMPANY.buildWhatsAppUrl(waText);

    // Open WhatsApp in a new tab
    window.open(redirectUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#121218] border border-[#d4af37]/30 rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white tracking-tight">
          Formulário de Solicitação de Atendimento
        </h3>
        <p className="text-xs text-neutral-400 mt-1">
          Preencha os dados do seu eletrodoméstico para adiantar seu atendimento no WhatsApp.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-xl bg-[#181824] border border-emerald-500/40 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-white">Solicitação Encaminhada!</h4>
          <p className="text-xs text-neutral-300">
            Abrimos o WhatsApp com todos os seus dados preenchidos para iniciar seu atendimento com a equipe da Energy Manutenções.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-[#d4af37] underline"
            >
              Preencher nova solicitação
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {error && (
            <div className="p-3 rounded-lg bg-red-950/50 border border-red-800 text-red-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="form-name" className="block font-semibold text-neutral-200 mb-1.5">
                Seu Nome *
              </label>
              <input
                id="form-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: João da Silva"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#181822] border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div>
              <label htmlFor="form-phone" className="block font-semibold text-neutral-200 mb-1.5">
                Seu WhatsApp / Telefone *
              </label>
              <input
                id="form-phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Ex: (54) 99999-9999"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#181822] border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="form-equipment" className="block font-semibold text-neutral-200 mb-1.5">
                Tipo de Eletrodoméstico *
              </label>
              <select
                id="form-equipment"
                value={formData.equipment}
                onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-[#181822] border border-neutral-700 text-white focus:outline-none focus:border-[#d4af37]"
              >
                {equipmentOptions.map((eq) => (
                  <option key={eq} value={eq}>{eq}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="form-brand" className="block font-semibold text-neutral-200 mb-1.5">
                Marca do Aparelho *
              </label>
              <select
                id="form-brand"
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-[#181822] border border-neutral-700 text-white focus:outline-none focus:border-[#d4af37]"
              >
                {brandOptions.map((br) => (
                  <option key={br} value={br}>{br}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="form-city" className="block font-semibold text-neutral-200 mb-1.5">
                Sua Cidade *
              </label>
              <select
                id="form-city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-[#181822] border border-neutral-700 text-white focus:outline-none focus:border-[#d4af37]"
              >
                {cityOptions.map((ct) => (
                  <option key={ct} value={ct}>{ct}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="form-problem" className="block font-semibold text-neutral-200 mb-1.5">
              Qual o problema apresentado pelo aparelho? *
            </label>
            <textarea
              id="form-problem"
              required
              rows={3}
              value={formData.problem}
              onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
              placeholder="Ex: A geladeira parou de gelar na parte de baixo e está fazendo um barulho de estalo no motor..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#181822] border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#aa851d] text-[#0a0a0c] font-bold text-sm shadow-md hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Enviar e Abrir no WhatsApp</span>
            </button>

            <span className="text-[11px] text-neutral-400 text-center sm:text-left">
              Resposta rápida no horário comercial. Seus dados estão seguros.
            </span>
          </div>
        </form>
      )}
    </div>
  );
};
