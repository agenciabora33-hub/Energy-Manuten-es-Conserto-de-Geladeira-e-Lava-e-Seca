import React, { useState } from 'react';
import { ChevronDown, Search, MessageCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/faq';
import { COMPANY } from '../data/company';

interface FAQSectionProps {
  initialCategory?: string;
  limit?: number;
  showSearch?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  limit,
  showSearch = true,
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = ['Todas', ...Array.from(new Set(FAQ_LIST.map((f) => f.category || 'Geral')))];

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const filteredFaqs = FAQ_LIST.filter((item) => {
    const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory;
    const matchesQuery =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const displayFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  return (
    <section className="py-14 sm:py-18 bg-[#0a0a0c]" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-2 inline-block">
            Tire Suas Dúvidas
          </span>
          <h2 id="faq-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes sobre a Energy Manutenções
          </h2>
          <p className="mt-2 text-sm text-neutral-300">
            Respostas claras e factuais sobre atendimento a domicílio, cidades atendidas, equipamentos e garantias.
          </p>
        </div>

        {/* Filter & Search */}
        {showSearch && (
          <div className="space-y-3 mb-8">
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar dúvida (ex: geladeira, taxa, Caxias, garantia)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#13131a] border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37] transition-colors"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#d4af37] text-[#0a0a0c] font-bold'
                      : 'bg-[#14141b] text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Accordion list */}
        <div className="space-y-3">
          {displayFaqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={faq.question}
                className="rounded-xl bg-[#121217] border border-neutral-800/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-neutral-100 hover:text-[#f3e5ab] transition-colors focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#d4af37] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 bg-[#0e0e13]/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {displayFaqs.length === 0 && (
            <div className="p-8 text-center text-neutral-400 text-sm rounded-xl bg-[#121217] border border-neutral-800">
              Nenhuma pergunta encontrada para sua busca. Tem outra dúvida? Fale diretamente conosco pelo WhatsApp!
            </div>
          )}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-8 p-4 rounded-xl bg-[#14141d] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span className="text-xs text-neutral-300">
            Ficou com alguma dúvida sobre seu eletrodoméstico ou atendimento?
          </span>
          <a
            href={COMPANY.contact.defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#25D366] text-[#0a0a0c] font-bold text-xs hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Tirar dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
