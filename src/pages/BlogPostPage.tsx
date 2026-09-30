import React from 'react';
import { Clock, Calendar, ArrowLeft, MessageCircle, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';
import { COMPANY, getAbsoluteUrl } from '../data/company';
import { BLOG_POSTS } from '../data/blog';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { CTASection } from '../components/CTASection';

interface BlogPostPageProps {
  post: BlogPost;
  onNavigate: (path: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onNavigate }) => {
  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
  };

  const breadcrumbs = [
    { name: 'Blog', url: '/blog/' },
    { name: post.title, url: post.path },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: getAbsoluteUrl(COMPANY.logoUrl),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getAbsoluteUrl(post.path),
    },
    author: {
      '@type': 'Organization',
      name: COMPANY.tradeName,
      url: getAbsoluteUrl('/'),
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.tradeName,
      logo: {
        '@type': 'ImageObject',
        url: getAbsoluteUrl(COMPANY.logoUrl),
      },
    },
  };

  const otherPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

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
            <a
              href="/blog/"
              onClick={(e) => handleNav('/blog/', e)}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-[#d4af37] transition-colors mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar para todos os artigos</span>
            </a>

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

            {/* WhatsApp Contextual CTA Button */}
            <div className="pt-4 pb-2">
              <a
                href={COMPANY.buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa851d] text-[#0a0a0c] font-black text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{post.whatsappCTA}</span>
              </a>
            </div>
          </div>

          {/* Related Articles Strip */}
          {otherPosts.length > 0 && (
            <div className="mt-14 pt-8 border-t border-neutral-800">
              <h3 className="text-lg font-bold text-white mb-4">
                Leia Também:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {otherPosts.map((p) => (
                  <a
                    key={p.id}
                    href={p.path}
                    onClick={(e) => handleNav(p.path, e)}
                    className="p-3.5 rounded-xl bg-[#121217] border border-neutral-800/80 hover:border-[#d4af37]/40 transition-colors block group"
                  >
                    <span className="text-[10px] text-[#d4af37] uppercase tracking-wider block mb-1">
                      {p.category}
                    </span>
                    <p className="text-xs font-bold text-white group-hover:text-[#f3e5ab] transition-colors line-clamp-2">
                      {p.title}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CTASection
        title="Precisa de avaliação técnica no seu aparelho?"
        subtitle="Agende uma visita técnica no seu endereço em Caxias do Sul, Farroupilha ou Flores da Cunha pelo WhatsApp."
      />
    </>
  );
};
