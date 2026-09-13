import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { BLOG_POSTS } from '../data/blog';
import { COMPANY } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { CTASection } from '../components/CTASection';

interface BlogPageProps {
  onNavigate: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const categories = ['Todas', 'Refrigeração', 'Lavanderia'];

  const filteredPosts = BLOG_POSTS.filter(
    (post) => selectedCategory === 'Todas' || post.category === selectedCategory
  );

  return (
    <>
      <SEOHead
        title="Blog & Dicas Técnicas | Energy Manutenções Caxias do Sul"
        description="Artigos informativos e orientações técnicas sobre geladeiras, lavadoras de roupa e lava e seca. Dicas de funcionamento e quando buscar assistência."
        canonicalPath="/blog/"
        breadcrumbs={[{ name: 'Blog', url: '/blog/' }]}
      />

      <Breadcrumbs items={[{ name: 'Blog', url: '/blog/' }]} onNavigate={onNavigate} />

      <section className="py-10 sm:py-16 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-2 block">
              Conhecimento Técnico & Prevenção
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Artigos Técnicos e Orientações para Eletrodomésticos
            </h1>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
              Conteúdo fundamentado na prática de manutenção para ajudar você a identificar sintomas reais, entender o funcionamento dos equipamentos e saber o momento certo de procurar assistência.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#d4af37] text-[#0a0a0c]'
                    : 'bg-[#14141b] text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="p-6 rounded-2xl bg-[#121217] border border-neutral-800 hover:border-[#d4af37]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 text-[11px] text-neutral-400">
                    <span className="text-[#d4af37] font-semibold uppercase tracking-wider bg-[#181822] px-2 py-0.5 rounded border border-[#d4af37]/20">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-neutral-500" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-lg font-bold text-white group-hover:text-[#f3e5ab] transition-colors leading-snug mb-2">
                    {post.title}
                  </h2>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(post.path)}
                    className="text-xs font-semibold text-neutral-200 group-hover:text-[#d4af37] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Ler artigo completo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Identificou algum desses sintomas no seu aparelho?"
        subtitle="Mande uma mensagem para a Energy Manutenções pelo WhatsApp para receber orientação técnica preliminar."
      />
    </>
  );
};
