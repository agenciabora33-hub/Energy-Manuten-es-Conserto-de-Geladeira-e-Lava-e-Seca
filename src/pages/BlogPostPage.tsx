import React from 'react';
import { Clock, Calendar, ArrowLeft, MessageCircle, AlertCircle, CheckCircle2 } from 'lucide-react';
import { BlogPost } from '../types';
import { COMPANY } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { CTASection } from '../components/CTASection';

interface BlogPostPageProps {
  post: BlogPost;
  onNavigate: (path: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onNavigate }) => {
  const breadcrumbs = [
    { name: 'Blog', url: '/blog/' },
    { name: post.title, url: post.path },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    author: {
      '@type': 'Organization',
      name: COMPANY.tradeName,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.tradeName,
    },
  };

  return (
    <>
      <SEOHead
        title={`${post.title} | Energy Manutenções`}
        description={post.metaDescription}
        canonicalPath={post.path}
        breadcrumbs={breadcrumbs}
        jsonLd={articleSchema}
      />

      <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

      <article className="py-8 sm:py-14 bg-[#0a0a0c]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <header className="mb-10 space-y-4">
            <button
              onClick={() => onNavigate('/blog/')}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-[#d4af37] transition-colors mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar para todos os artigos</span>
            </button>

            <div className="flex items-center gap-3 text-xs text-neutral-400">
              <span className="text-[#d4af37] font-semibold bg-[#181822] px-2.5 py-1 rounded border border-[#d4af37]/25 uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-neutral-500" />
                <span>{post.readTime}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base text-neutral-300 italic border-l-2 border-[#d4af37] pl-3 py-0.5">
              {post.excerpt}
            </p>
          </header>

          {/* Body Sections */}
          <div className="space-y-8 text-sm sm:text-base text-neutral-300 leading-relaxed">
            {post.sections.map((sec, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="text-xl font-bold text-white tracking-tight">
                  {sec.heading}
                </h2>
                {sec.content.map((p, pIdx) => (
                  <p key={pIdx} className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                    {p}
                  </p>
                ))}
              </section>
            ))}

            {/* When to Seek Assistance Callout Box */}
            {post.whenToSeekAssistance && post.whenToSeekAssistance.length > 0 && (
              <div className="p-6 rounded-2xl bg-[#14141d] border border-[#d4af37]/35 space-y-3 my-8">
                <div className="flex items-center gap-2 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>Quando procurar assistência técnica imediatamente</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {post.whenToSeekAssistance.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Post Author Box with NAP */}
          <footer className="mt-12 pt-8 border-t border-neutral-800 text-xs text-neutral-400 space-y-2">
            <p>
              <strong className="text-white">Publicado por:</strong> Energy Manutenções — Assistência técnica de eletrodomésticos em Caxias do Sul e região.
            </p>
            <p>
              Rua Índia Ceci, 141, Bairro Marechal Floriano, Caxias do Sul – RS. WhatsApp: {COMPANY.contact.phone}.
            </p>
          </footer>
        </div>
      </article>

      <CTASection
        title="Precisa de avaliação técnica para o seu equipamento?"
        subtitle={post.whatsappCTA}
      />
    </>
  );
};
