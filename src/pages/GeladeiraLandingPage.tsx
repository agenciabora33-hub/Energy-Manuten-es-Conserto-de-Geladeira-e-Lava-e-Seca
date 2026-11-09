import React, { useEffect } from 'react';
import {
  MessageCircle,
  Phone,
  ShieldCheck,
  Clock,
  Home,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  Star,
  Zap,
  Wrench,
  ThermometerSnowflake,
  Sparkles,
  HelpCircle,
  Check
} from 'lucide-react';
import { COMPANY, getAbsoluteUrl } from '../data/company';
import { EnergyLogo } from '../components/EnergyLogo';
import imgGeladeira from '../assets/images/conserto_geladeira_1789402030705.jpg';

interface GeladeiraLandingPageProps {
  onNavigate: (path: string) => void;
}

export const GeladeiraLandingPage: React.FC<GeladeiraLandingPageProps> = ({ onNavigate }) => {
  const WHATSAPP_BASE_URL = 'https://wa.me/5554991796080';
  const WHATSAPP_DEFAULT_URL =
    'https://wa.me/5554991796080?text=Ol%C3%A1!%20Preciso%20de%20conserto%20para%20minha%20geladeira%20em%20Caxias%20do%20Sul.';
  const WHATSAPP_FREEZER_ADEGA_URL =
    'https://wa.me/5554991796080?text=Ol%C3%A1!%20Preciso%20de%20manuten%C3%A7%C3%A3o%20em%20um%20freezer%20ou%20adega%20em%20Caxias%20do%20Sul.';
  const PHONE_URL = 'tel:+5554991796080';

  const PAGE_TITLE = 'Conserto de Geladeira em Caxias do Sul | Energy Manutenções';
  const PAGE_DESC =
    'Geladeira parou de gelar, vaza água ou faz barulho? Técnico a domicílio em Caxias do Sul. Frost Free, Inverse e Duplex. Chame no WhatsApp.';
  const CANONICAL_URL = 'https://energy-manutencoes.vercel.app/conserto-geladeira-caxias-do-sul/';

  // Etapa 1, 4 & 5: Head cleaning, dataLayer tracking, JSON-LD
  useEffect(() => {
    // 1. Title (até 60 caracteres)
    document.title = PAGE_TITLE;

    // 2. Helper to set/update meta tag
    const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attribute, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 3. Update description and social tags
    setMetaTag('name', 'description', PAGE_DESC);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('property', 'og:title', PAGE_TITLE);
    setMetaTag('property', 'og:description', PAGE_DESC);
    setMetaTag('property', 'og:url', CANONICAL_URL);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:image', getAbsoluteUrl('/logo.png'));
    setMetaTag('name', 'twitter:title', PAGE_TITLE);
    setMetaTag('name', 'twitter:description', PAGE_DESC);
    setMetaTag('name', 'twitter:image', getAbsoluteUrl('/logo.png'));

    // 4. Update canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', CANONICAL_URL);

    // 5. Etapa 1: Remover completamente meta keywords e tags de verificação vazias
    const keywordsEl = document.querySelector('meta[name="keywords"]');
    if (keywordsEl) keywordsEl.remove();

    const gVerify = document.querySelector('meta[name="google-site-verification"][content=""]');
    if (gVerify) gVerify.remove();

    const msVerify = document.querySelector('meta[name="msvalidate.01"][content=""]');
    if (msVerify) msVerify.remove();

    // 6. Etapa 5: JSON-LD Graph (LocalBusiness, Service, FAQPage) - NUNCA exibir nome do proprietário
    const jsonLdGraph = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://energy-manutencoes.vercel.app/#negocio',
          name: 'Energy Manutenções',
          url: 'https://energy-manutencoes.vercel.app/',
          telephone: '+5554991796080',
          image: 'https://energy-manutencoes.vercel.app/logo.png',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Rua Índia Ceci, 141',
            addressLocality: 'Caxias do Sul',
            addressRegion: 'RS',
            postalCode: '95013-120',
            addressCountry: 'BR',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -29.1764,
            longitude: -51.1895,
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '08:00',
            closes: '18:30',
          },
          areaServed: [
            { '@type': 'City', name: 'Caxias do Sul' },
            { '@type': 'City', name: 'Farroupilha' },
            { '@type': 'City', name: 'Flores da Cunha' },
          ],
        },
        {
          '@type': 'Service',
          name: 'Conserto de Geladeira',
          serviceType: 'Assistência técnica de geladeiras, freezers e adegas',
          provider: { '@id': 'https://energy-manutencoes.vercel.app/#negocio' },
          areaServed: 'Caxias do Sul, RS',
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Minha geladeira não gela embaixo, mas o freezer congela. O que pode ser?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Costuma ser bloqueio de gelo no evaporador, duto de ar entupido ou falha no sistema de degelo. Só o diagnóstico no local confirma a causa.',
              },
            },
            {
              '@type': 'Question',
              name: 'Por que os alimentos estão congelando no refrigerador?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Pode haver problema na circulação de ar ou no controle de temperatura. Um técnico precisa avaliar o equipamento.',
              },
            },
            {
              '@type': 'Question',
              name: 'Minha geladeira está vazando água. É grave?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'O vazamento costuma estar ligado ao sistema de degelo e ao dreno. Quanto antes for avaliado, menor o risco de danos ao piso e ao equipamento.',
              },
            },
            {
              '@type': 'Question',
              name: 'O compressor não liga ou fica estalando. O que fazer?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Evite ligar e desligar várias vezes. Chame um técnico para avaliar o compressor e o protetor térmico.',
              },
            },
            {
              '@type': 'Question',
              name: 'O atendimento é feito na minha residência?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sim, realizamos o diagnóstico e o conserto no local em Caxias do Sul e cidades vizinhas, mediante agendamento.',
              },
            },
            {
              '@type': 'Question',
              name: 'Vocês atendem geladeiras Inverse e Frost Free?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sim, atendemos Frost Free, Inverse, Inverter, Duplex e side by side.',
              },
            },
            {
              '@type': 'Question',
              name: 'Quais marcas vocês atendem?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Samsung, LG, Electrolux, Brastemp, Consul e outros fabricantes.',
              },
            },
            {
              '@type': 'Question',
              name: 'Vocês fazem manutenção em freezers e adegas?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sim, além de geladeiras, fazemos manutenção de freezers e adegas.',
              },
            },
            {
              '@type': 'Question',
              name: 'Quanto custa o conserto?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'O valor depende do defeito e das peças. Envie o modelo e o problema pelo WhatsApp para receber um orçamento rápido.',
              },
            },
            {
              '@type': 'Question',
              name: 'O serviço tem garantia?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sim, o serviço é realizado com garantia. Pergunte as condições pelo WhatsApp.',
              },
            },
            {
              '@type': 'Question',
              name: 'Qual o horário de atendimento?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'De segunda a sábado, das 08:00 às 18:30.',
              },
            },
          ],
        },
      ],
    };

    const scriptId = 'geladeira-jsonld';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(jsonLdGraph);

    return () => {
      scriptEl?.remove();
    };
  }, []);

  // Etapa 4: Disparo dos eventos do dataLayer
  const trackConversion = (type: 'whatsapp' | 'telefone', locationId: string, symptom?: string) => {
    if (typeof window !== 'undefined') {
      const win = window as unknown as { dataLayer?: Record<string, unknown>[] };
      win.dataLayer = win.dataLayer || [];
      if (type === 'whatsapp') {
        win.dataLayer.push({
          event: 'click_whatsapp',
          page_path: window.location.pathname,
          button_location: locationId || 'geral',
          symptom: symptom || '',
        });
      } else {
        win.dataLayer.push({
          event: 'click_telefone',
          page_path: window.location.pathname,
          button_location: locationId || 'geral',
        });
      }
    }
  };

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
  };

  // Sintomas mapeados para WhatsApp específico (Seção 6.4)
  const sintomas = [
    {
      symptomId: 'nao-gela-embaixo',
      title: 'Não gela embaixo, mas o freezer congela',
      desc: 'Costuma estar ligado a bloqueio de gelo no evaporador ou duto de ar entupido.',
      whatsappMsg: 'Olá! Minha geladeira não está gelando embaixo, mas o freezer congela. Moro em Caxias do Sul.',
    },
    {
      symptomId: 'congelando-alimentos',
      title: 'Alimentos congelando na parte de baixo',
      desc: 'Quando verduras e bebidas congelam no refrigerador, o técnico precisa avaliar a circulação de ar e o controle de temperatura.',
      whatsappMsg: 'Olá! Os alimentos estão congelando na parte de baixo da minha geladeira. Moro em Caxias do Sul.',
    },
    {
      symptomId: 'vazando-agua',
      title: 'Vazando água',
      desc: 'Água embaixo da geladeira ou na gaveta de legumes.',
      whatsappMsg: 'Olá! Minha geladeira está vazando água. Moro em Caxias do Sul.',
    },
    {
      symptomId: 'gelo-evaporador',
      title: 'Gelo acumulado e ar entupido',
      desc: 'Bloqueio de gelo no evaporador e duto de ar prejudicam o resfriamento.',
      whatsappMsg: 'Olá! Minha geladeira está com gelo acumulado e não gela direito. Moro em Caxias do Sul.',
    },
    {
      symptomId: 'compressor',
      title: 'Compressor não liga, estala ou desarma',
      desc: 'O motor compressor pode desarmar pelo protetor térmico.',
      whatsappMsg: 'Olá! O compressor da minha geladeira não liga ou fica estalando. Moro em Caxias do Sul.',
    },
    {
      symptomId: 'barulho',
      title: 'Barulho anormal',
      desc: 'Ruídos fora do normal precisam de avaliação técnica.',
      whatsappMsg: 'Olá! Minha geladeira está fazendo barulho anormal. Moro em Caxias do Sul.',
    },
    {
      symptomId: 'borracha-vedacao',
      title: 'Borracha de vedação gasta',
      desc: 'Vedação ruim causa condensação excessiva e gasto de energia.',
      whatsappMsg: 'Olá! A borracha de vedação da minha geladeira está gasta. Moro em Caxias do Sul.',
    },
  ];

  return (
    <div className="bg-[#0a0a0c] text-neutral-100 min-h-screen pb-24 md:pb-0 font-sans selection:bg-[#d4af37] selection:text-[#0a0a0c]">
      {/* 6.1 Cabeçalho enxuto */}
      <header id="cabecalho" className="sticky top-0 z-40 bg-[#0a0a0c]/95 backdrop-blur border-b border-neutral-800">
        {/* Faixa superior fina */}
        <div className="bg-[#14141d] border-b border-neutral-800/80 py-1.5 px-3 text-center text-[11px] sm:text-xs text-neutral-300">
          <span className="text-[#d4af37] font-semibold">★ 4.9 no Google (+850 avaliações)</span>
          <span className="mx-1.5 text-neutral-600">|</span>
          <span>Caxias do Sul, Farroupilha e Flores da Cunha</span>
        </div>

        <div className="max-w-[1100px] mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo (link exclusivo para a home) */}
          <a
            href="/"
            onClick={(e) => handleNavClick('/', e)}
            className="flex items-center gap-2 focus:outline-none focus:ring-1 focus:ring-[#d4af37] rounded"
            aria-label="Energy Manutenções - Página Inicial"
          >
            <EnergyLogo size="sm" />
          </a>

          {/* Botões do cabeçalho */}
          <div className="flex items-center gap-3">
            {/* Mobile: Botão Ligar */}
            <a
              href={PHONE_URL}
              data-location="cabecalho"
              onClick={() => trackConversion('telefone', 'cabecalho')}
              className="md:hidden inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-800 text-white text-xs font-bold border border-neutral-700 hover:border-[#d4af37] active:scale-95 transition-all"
              aria-label="Ligar para Energy Manutenções"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Ligar</span>
            </a>

            {/* Desktop: Telefone visível (link tel:) + Botão WhatsApp */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={PHONE_URL}
                data-location="cabecalho"
                onClick={() => trackConversion('telefone', 'cabecalho')}
                className="text-xs text-neutral-300 hover:text-white flex items-center gap-1.5 font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>(54) 99179-6080</span>
              </a>
              <a
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-location="cabecalho"
                onClick={() => trackConversion('whatsapp', 'cabecalho')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25d366] text-[#0a0a0c] text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-[0_2px_12px_rgba(37,211,102,0.25)]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 6.2 Hero (acima da dobra) */}
      <section id="hero" className="py-10 sm:py-16 px-4 bg-gradient-to-b from-[#0a0a0c] via-[#111118] to-[#0a0a0c] border-b border-neutral-900">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c28] border border-[#d4af37]/30 text-[11px] font-semibold text-[#f3e5ab]">
              <ThermometerSnowflake className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Atendimento de Emergência a Domicílio</span>
            </div>

            {/* Único H1 da página */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Conserto de Geladeira em Caxias do Sul e Região
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Geladeira parou de gelar, vaza água ou faz barulho? Técnico a domicílio para Frost Free, Inverse, Duplex e side by side. Orçamento rápido pelo WhatsApp.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-location="hero"
                onClick={() => trackConversion('whatsapp', 'hero')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#25d366] text-[#0a0a0c] text-base font-bold shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:brightness-110 active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chamar no WhatsApp</span>
              </a>

              <a
                href={PHONE_URL}
                data-location="hero"
                onClick={() => trackConversion('telefone', 'hero')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-transparent text-neutral-200 text-sm font-semibold border border-neutral-700 hover:border-[#d4af37] hover:text-white active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Ligar agora</span>
              </a>
            </div>

            {/* Linha de confiança abaixo dos botões */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Atendimento a domicílio</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Segunda a sábado, 08:00 às 18:30</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                {/* CONFIRMAR COM CLIENTE: [GARANTIA] */}
                <span>Serviço com garantia</span>
              </span>
            </div>
          </div>

          {/* Imagem do Hero (sem lazy loading, com dimensões) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl max-w-md w-full">
              <img
                src={imgGeladeira}
                alt="Técnico consertando geladeira em Caxias do Sul"
                width={640}
                height={480}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#0e0e14]/90 backdrop-blur border border-neutral-800 text-xs text-neutral-300">
                <p className="font-bold text-white">Atendimento a domicílio na Serra Gaúcha</p>
                <p className="text-[11px] text-neutral-400 mt-0.5">Frost Free, Inverse, Duplex, Inverter e Side by Side</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.3 Faixa de confiança */}
      <section id="confianca" className="py-6 bg-[#0e0e14] border-b border-neutral-900">
        <div className="max-w-[1100px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-xl bg-[#14141d] border border-neutral-800/80">
            <div className="flex items-center justify-center gap-1 text-[#d4af37] font-bold text-sm">
              <Star className="w-4 h-4 fill-current" />
              <span>4.9 no Google</span>
            </div>
            <p className="text-[11px] text-neutral-400 mt-0.5">Avaliação dos clientes</p>
          </div>
          <div className="p-3 rounded-xl bg-[#14141d] border border-neutral-800/80">
            {/* CONFIRMAR COM CLIENTE: [LINK_AVALIACOES] - se não informado, não criar link */}
            <p className="text-white font-bold text-sm">+850 avaliações</p>
            <p className="text-[11px] text-neutral-400 mt-0.5">Histórico comprovado</p>
          </div>
          <div className="p-3 rounded-xl bg-[#14141d] border border-neutral-800/80">
            <p className="text-white font-bold text-sm">Atendimento a domicílio</p>
            <p className="text-[11px] text-neutral-400 mt-0.5">Na sua residência</p>
          </div>
          <div className="p-3 rounded-xl bg-[#14141d] border border-neutral-800/80">
            <p className="text-[#f3e5ab] font-bold text-sm">Samsung • LG • Electrolux • Brastemp • Consul</p>
            <p className="text-[11px] text-neutral-400 mt-0.5">Principais marcas</p>
          </div>
        </div>
      </section>

      {/* 6.4 Sintomas (cards que casam com os grupos de anúncios) */}
      <section id="sintomas" className="py-12 px-4 max-w-[1100px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            O que está acontecendo com a sua geladeira?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            Identifique o problema e fale diretamente com o técnico informando o sintoma pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sintomas.map((item) => {
            const encodedUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(item.whatsappMsg)}`;
            return (
              <div
                key={item.symptomId}
                className="p-5 rounded-2xl bg-[#121217] border border-neutral-800 hover:border-[#d4af37]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                    <h3 className="text-sm font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
                <div>
                  <a
                    href={encodedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-location="sintomas"
                    data-symptom={item.symptomId}
                    onClick={() => trackConversion('whatsapp', 'sintomas', item.symptomId)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1c1c28] border border-[#25d366]/40 text-[#25d366] text-xs font-bold hover:bg-[#25d366] hover:text-[#0a0a0c] active:scale-95 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Falar sobre isso</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6.5 Como funciona o atendimento */}
      <section id="como-funciona" className="py-12 px-4 bg-[#0e0e14] border-y border-neutral-900">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Como funciona
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              Atendimento prático e direto para restabelecer a refrigeração dos seus alimentos sem complicação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#14141d] border border-neutral-800 relative">
              <span className="text-3xl font-black text-[#d4af37]/40 block mb-2">01</span>
              <h3 className="text-base font-bold text-white mb-2">Chame no WhatsApp</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Conte o problema e a marca da sua geladeira.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#14141d] border border-neutral-800 relative">
              <span className="text-3xl font-black text-[#d4af37]/40 block mb-2">02</span>
              <h3 className="text-base font-bold text-white mb-2">Agendamos a visita</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                O técnico vai até a sua casa em Caxias do Sul ou região.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#14141d] border border-neutral-800 relative">
              <span className="text-3xl font-black text-[#d4af37]/40 block mb-2">03</span>
              <h3 className="text-base font-bold text-white mb-2">Conserto com garantia</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Diagnóstico no local e reparo com peças adequadas.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={WHATSAPP_DEFAULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-location="como-funciona"
              onClick={() => trackConversion('whatsapp', 'como-funciona')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#25d366] text-[#0a0a0c] text-sm font-bold hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_16px_rgba(37,211,102,0.25)]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Agendar pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6.6 Enquanto o técnico não chega */}
      <section id="cuidados" className="py-12 px-4 max-w-[1100px] mx-auto">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#14141d] border border-neutral-800">
          <div className="max-w-3xl">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#d4af37]" />
              <span>Geladeira parou de gelar? Cuidados enquanto você espera</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 mb-5">
              Siga estas recomendações práticas para proteger seus alimentos e evitar danos graves ao eletrodoméstico:
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span>Mantenha a porta fechada o máximo possível para conservar o frio interno.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span>Passe alimentos perecíveis para uma caixa térmica, se possível com gelo.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span>Não raspe o gelo com faca ou objeto pontiagudo: você pode furar o evaporador.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span>Se o compressor estiver estalando ou desarmando, não fique ligando e desligando da tomada.</span>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-neutral-400">
                Descreva o problema no WhatsApp e orientamos o melhor próximo passo.
              </p>
              <a
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-location="cuidados"
                onClick={() => trackConversion('whatsapp', 'cuidados')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#25d366] text-[#0a0a0c] text-xs font-bold hover:brightness-110 active:scale-95 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Pedir orientação imediata</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6.7 Tipos e marcas atendidos */}
      <section id="tipos-marcas" className="py-10 px-4 bg-[#0e0e14] border-y border-neutral-900 text-center">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-3">
            Tipos de geladeira e marcas que atendemos
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            Atendemos geladeiras Frost Free, Inverse, Duplex, convencionais, com tecnologia Inverter e side by side, das marcas Samsung, LG, Electrolux, Brastemp, Consul e outros fabricantes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Samsung', 'LG', 'Electrolux', 'Brastemp', 'Consul', 'Outros Fabricantes'].map((marca, i) => (
              <div
                key={i}
                className="px-5 py-2.5 rounded-xl bg-[#14141d] border border-neutral-800 text-xs sm:text-sm font-bold text-white tracking-wide"
              >
                {marca}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.8 Também fazemos manutenção em freezers e adegas */}
      <section id="freezer-adega" className="py-12 px-4 max-w-[1100px] mx-auto text-center">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#14141d] via-[#1c1c28] to-[#14141d] border border-[#d4af37]/30 max-w-3xl mx-auto space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Também fazemos manutenção de freezers e adegas
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl mx-auto">
            Além de geladeiras, a Energy Manutenções faz manutenção de freezers e adegas em Caxias do Sul e região. Descreva o equipamento e o problema pelo WhatsApp.
          </p>
          <div className="pt-2">
            <a
              href={WHATSAPP_FREEZER_ADEGA_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-location="freezer-adega"
              onClick={() => trackConversion('whatsapp', 'freezer-adega')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25d366] text-[#0a0a0c] text-xs sm:text-sm font-bold hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_16px_rgba(37,211,102,0.25)]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Solicitar manutenção de freezer ou adega</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6.9 Perguntas frequentes (FAQ) - Acordeão acessível details/summary */}
      <section id="faq" className="py-12 px-4 bg-[#0e0e14] border-t border-neutral-900">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Perguntas frequentes sobre conserto de geladeira
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              Tire suas dúvidas antes de agendar o atendimento a domicílio.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Minha geladeira não gela embaixo, mas o freezer congela. O que pode ser?',
                a: 'Costuma ser bloqueio de gelo no evaporador, duto de ar entupido ou falha no sistema de degelo. Só o diagnóstico no local confirma a causa.',
              },
              {
                q: 'Por que os alimentos estão congelando no refrigerador?',
                a: 'Pode haver problema na circulação de ar ou no controle de temperatura. Um técnico precisa avaliar o equipamento.',
              },
              {
                q: 'Minha geladeira está vazando água. É grave?',
                a: 'O vazamento costuma estar ligado ao sistema de degelo e ao dreno. Quanto antes for avaliado, menor o risco de danos ao piso e ao equipamento.',
              },
              {
                q: 'O compressor não liga ou fica estalando. O que fazer?',
                a: 'Evite ligar e desligar várias vezes. Chame um técnico para avaliar o compressor e o protetor térmico.',
              },
              {
                q: 'O atendimento é feito na minha residência?',
                a: 'Sim, realizamos o diagnóstico e o conserto no local em Caxias do Sul e cidades vizinhas, mediante agendamento.',
              },
              {
                q: 'Vocês atendem geladeiras Inverse e Frost Free?',
                a: 'Sim, atendemos Frost Free, Inverse, Inverter, Duplex e side by side.',
              },
              {
                q: 'Quais marcas vocês atendem?',
                a: 'Samsung, LG, Electrolux, Brastemp, Consul e outros fabricantes.',
              },
              {
                q: 'Vocês fazem manutenção em freezers e adegas?',
                a: 'Sim, além de geladeiras, fazemos manutenção de freezers e adegas.',
              },
              {
                q: 'Quanto custa o conserto?',
                a: 'O valor depende do defeito e das peças. Envie o modelo e o problema pelo WhatsApp para receber um orçamento rápido.',
                comment: '<!-- CONFIRMAR COM CLIENTE: [VALOR_ORCAMENTO] -->',
              },
              {
                q: 'O serviço tem garantia?',
                a: 'Sim, o serviço é realizado com garantia. Pergunte as condições pelo WhatsApp.',
                comment: '<!-- CONFIRMAR COM CLIENTE: [GARANTIA] -->',
              },
              {
                q: 'Qual o horário de atendimento?',
                a: 'De segunda a sábado, das 08:00 às 18:30.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl bg-[#14141d] border border-neutral-800 p-4 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none text-xs sm:text-sm font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-[#d4af37] transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-2" />
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/80 pt-2.5">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6.10 Chamada final */}
      <section id="final" className="py-12 sm:py-16 px-4 bg-gradient-to-r from-[#14141d] via-[#1c1c28] to-[#14141d] border-t border-neutral-800 text-center">
        <div className="max-w-[700px] mx-auto space-y-4">
          {/* H2 convertido (fora do FAQ) */}
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Precisa de atendimento ou orçamento?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Atendimento a domicílio com agendamento ágil em Caxias do Sul e cidades vizinhas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={WHATSAPP_DEFAULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-location="final"
              onClick={() => trackConversion('whatsapp', 'final')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#25d366] text-[#0a0a0c] text-sm font-bold hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_16px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chamar no WhatsApp</span>
            </a>

            <a
              href={PHONE_URL}
              data-location="final"
              onClick={() => trackConversion('telefone', 'final')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-800 text-white text-xs font-bold border border-neutral-700 hover:border-[#d4af37] active:scale-95 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Ligar agora</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6.11 Região atendida (texto simples sem links) */}
      <section id="regiao" className="py-6 px-4 bg-[#0a0a0c] border-t border-neutral-900 text-center">
        <p className="text-xs text-neutral-400">
          Atendemos Caxias do Sul, Farroupilha e Flores da Cunha, com sede no bairro Marechal Floriano.
        </p>
      </section>

      {/* 10. Rodapé enxuto (único) - NUNCA exibir o nome do proprietário */}
      <footer id="rodape" className="bg-[#070709] border-t border-neutral-900 py-8 px-4 text-xs text-neutral-400">
        <div className="max-w-[1100px] mx-auto text-center space-y-3">
          <p className="font-semibold text-neutral-200">
            Energy Manutenções | CNPJ: 46.067.650/0001-55
          </p>
          <p className="text-neutral-400">
            Rua Índia Ceci, 141, Bairro Marechal Floriano, Caxias do Sul – RS, CEP 95013-120
            <br />
            Atendimento: Segunda a Sábado, das 08:00 às 18:30
          </p>
          <div className="flex items-center justify-center gap-4 text-[11px] pt-1 text-neutral-400">
            <a
              href="/"
              onClick={(e) => handleNavClick('/', e)}
              className="hover:text-white transition-colors underline"
            >
              Início
            </a>
            <span>•</span>
            <a
              href="/contato/"
              onClick={(e) => handleNavClick('/contato/', e)}
              className="hover:text-white transition-colors underline"
            >
              Contato
            </a>
            <span>•</span>
            <a
              href="/politica-de-privacidade/"
              onClick={(e) => handleNavClick('/politica-de-privacidade/', e)}
              className="hover:text-white transition-colors underline"
            >
              Política de Privacidade
            </a>
          </div>
          <p className="text-[11px] text-neutral-400 pt-2">
            Atendimento a domicílio em Caxias do Sul, Farroupilha e Flores da Cunha. Manutenção de geladeiras, freezers e adegas.
          </p>
        </div>
      </footer>

      {/* 7. Etapa 3: Barra fixa no celular (apenas telas <= 768px, bottom: 0) */}
      <div
        id="barra-fixa"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0c]/95 backdrop-blur border-t border-neutral-800 p-2.5 flex items-center gap-2 shadow-[0_-4px_16px_rgba(0,0,0,0.5)]"
      >
        <a
          href={WHATSAPP_DEFAULT_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-location="barra-fixa"
          onClick={() => trackConversion('whatsapp', 'barra-fixa')}
          className="flex-[65] min-h-[48px] h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] text-[#0a0a0c] text-sm font-bold shadow-[0_2px_10px_rgba(37,211,102,0.3)] active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>

        <a
          href={PHONE_URL}
          data-location="barra-fixa"
          onClick={() => trackConversion('telefone', 'barra-fixa')}
          className="flex-[35] min-h-[48px] h-12 inline-flex items-center justify-center gap-1.5 rounded-xl bg-neutral-800 text-white text-xs font-bold border border-neutral-700 active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Ligar</span>
        </a>
      </div>
    </div>
  );
};
