import fs from 'fs';
import path from 'path';

interface StaticRoute {
  path: string;
  title: string;
  description: string;
  h1: string;
  breadcrumbs: { name: string; url: string }[];
  contentHtml: string;
  schemas: any[];
}

const SITE_URL = 'https://energy-manutencoes.vercel.app';

const BASE_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  'additionalType': 'https://schema.org/LocalBusiness',
  'name': 'Energy Manutenções',
  'legalName': 'Eduardo Borges Baumgarten',
  'alternateName': 'Energy Assistência Técnica de Eletrodomésticos',
  'description': 'Assistência técnica e conserto de geladeiras, máquinas de lavar, lava e seca e eletrodomésticos em Caxias do Sul, Farroupilha e Flores da Cunha.',
  'url': `${SITE_URL}/`,
  'logo': `${SITE_URL}/logo.png`,
  'image': `${SITE_URL}/logo.png`,
  'telephone': '+55 54 99179-6080',
  'priceRange': '$$',
  'paymentAccepted': 'Dinheiro, PIX, Cartão de crédito',
  'currenciesAccepted': 'BRL',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Rua Índia Ceci, 141',
    'addressLocality': 'Caxias do Sul',
    'addressRegion': 'RS',
    'postalCode': '95013-120',
    'addressCountry': 'BR'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': -29.1764,
    'longitude': -51.1895
  },
  'areaServed': [
    { '@type': 'City', 'name': 'Caxias do Sul' },
    { '@type': 'City', 'name': 'Farroupilha' },
    { '@type': 'City', 'name': 'Flores da Cunha' }
  ],
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.9',
    'bestRating': '5',
    'worstRating': '1',
    'ratingCount': 850
  },
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'opens': '08:00',
      'closes': '18:30'
    }
  ]
};

function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}

function createFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

function createServiceSchema(serviceName: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': serviceName,
    'description': description,
    'url': `${SITE_URL}${url}`,
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Energy Manutenções',
      'telephone': '+55 54 99179-6080',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Rua Índia Ceci, 141',
        'addressLocality': 'Caxias do Sul',
        'addressRegion': 'RS',
        'postalCode': '95013-120',
        'addressCountry': 'BR'
      }
    },
    'areaServed': [
      { '@type': 'City', 'name': 'Caxias do Sul' },
      { '@type': 'City', 'name': 'Farroupilha' },
      { '@type': 'City', 'name': 'Flores da Cunha' }
    ]
  };
}

const STATIC_ROUTES: StaticRoute[] = [
  // 0. Página Inicial
  {
    path: '/',
    title: 'Energy Manutenções | Assistência Técnica de Eletrodomésticos em Caxias do Sul',
    description: 'Assistência técnica e conserto de geladeiras, máquinas de lavar, lava e seca e eletrodomésticos em Caxias do Sul, Farroupilha e Flores da Cunha. Avaliação 4.9 no Google (+850 avaliações). Atendimento a domicílio.',
    h1: 'Assistência Técnica de Eletrodomésticos em Caxias do Sul e Região',
    breadcrumbs: [
      { name: 'Início', url: '/' }
    ],
    contentHtml: `
      <p class="lead">Assistência técnica especializada no conserto e manutenção de geladeiras, máquinas de lavar roupas, lava e seca, secadoras, freezers e eletrodomésticos da linha branca em Caxias do Sul, Farroupilha e Flores da Cunha.</p>
      <h2>Serviços em Destaque</h2>
      <ul>
        <li><a href="/conserto-geladeira-caxias-do-sul/">Conserto de Geladeiras em Caxias do Sul</a></li>
        <li><a href="/conserto-maquina-de-lavar-caxias-do-sul/">Conserto de Máquinas de Lavar em Caxias do Sul</a></li>
        <li><a href="/conserto-lava-e-seca-caxias-do-sul/">Conserto de Lava e Seca em Caxias do Sul</a></li>
        <li><a href="/conserto-secadora-caxias-do-sul/">Conserto de Secadoras de Roupas</a></li>
        <li><a href="/conserto-freezer-caxias-do-sul/">Conserto de Freezers</a></li>
        <li><a href="/conserto-micro-ondas-caxias-do-sul/">Conserto de Fornos Micro-ondas</a></li>
      </ul>
      <h2>Cidades Atendidas na Serra Gaúcha</h2>
      <ul>
        <li><a href="/caxias-do-sul/">Assistência Técnica em Caxias do Sul</a></li>
        <li><a href="/farroupilha/">Assistência Técnica em Farroupilha</a></li>
        <li><a href="/flores-da-cunha/">Assistência Técnica em Flores da Cunha</a></li>
      </ul>
      <h2>Por Que Escolher a Energy Manutenções?</h2>
      <p>Mais de 850 clientes satisfeitos com nota 4.9 no Google. Técnicos qualificados, garantia em todos os serviços executados e peças originais.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createBreadcrumbSchema([{ name: 'Início', url: '/' }])
    ]
  },
  // 1. Serviços Index
  {
    path: '/servicos/',
    title: 'Serviços de Assistência Técnica de Eletrodomésticos | Energy Manutenções',
    description: 'Catálogo de conserto e assistência técnica em Caxias do Sul: geladeiras, máquinas de lavar, lava e seca, secadoras, freezers e fornos a domicílio.',
    h1: 'Serviços Especializados de Assistência Técnica em Caxias do Sul',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Serviços', url: '/servicos/' }
    ],
    contentHtml: `
      <p class="lead">Atendimento técnico qualificado a domicílio para conserto e manutenção preventiva e corretiva de eletrodomésticos da linha branca em Caxias do Sul, Farroupilha e Flores da Cunha.</p>
      <h2>Lista Completa de Equipamentos Atendidos</h2>
      <ul>
        <li><a href="/conserto-geladeira-caxias-do-sul/">Conserto de Geladeiras (Frost Free, Duplex, Inverse)</a></li>
        <li><a href="/conserto-maquina-de-lavar-caxias-do-sul/">Conserto de Máquinas de Lavar Roupas</a></li>
        <li><a href="/conserto-lava-e-seca-caxias-do-sul/">Conserto de Lava e Seca</a></li>
        <li><a href="/conserto-secadora-caxias-do-sul/">Conserto de Secadoras de Roupas</a></li>
        <li><a href="/conserto-freezer-caxias-do-sul/">Conserto de Freezers Verticais e Horizontais</a></li>
        <li><a href="/conserto-micro-ondas-caxias-do-sul/">Conserto de Fornos Micro-ondas</a></li>
        <li><a href="/conserto-forno-eletrico-caxias-do-sul/">Conserto de Fornos Elétricos de Embutir e Bancada</a></li>
        <li><a href="/conserto-lava-loucas-caxias-do-sul/">Conserto de Lava-louças</a></li>
        <li><a href="/conserto-frigobar-caxias-do-sul/">Conserto de Frigobares</a></li>
        <li><a href="/conserto-adega-caxias-do-sul/">Conserto de Adegas Climatizadas</a></li>
        <li><a href="/conserto-expositor-de-bebidas-caxias-do-sul/">Conserto de Expositores de Bebidas</a></li>
      </ul>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Serviços', url: '/servicos/' }
      ])
    ]
  },

  // 2. Geladeira
  {
    path: '/conserto-geladeira-caxias-do-sul/',
    title: 'Conserto de Geladeira em Caxias do Sul | Energy Manutenções',
    description: 'Assistência técnica para geladeiras em Caxias do Sul. Conserto de Frost Free, Duplex, Inverse e convencionais a domicílio. Solicite no WhatsApp.',
    h1: 'Conserto de Geladeira em Caxias do Sul e Região',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Serviços', url: '/servicos/' },
      { name: 'Conserto de Geladeira', url: '/conserto-geladeira-caxias-do-sul/' }
    ],
    contentHtml: `
      <p class="lead">Avaliação técnica criteriosa para geladeiras que não gelam, vazam água, emitem barulhos anormais ou apresentam falhas no sistema de degelo e compressor em Caxias do Sul, Farroupilha e Flores da Cunha.</p>
      <h2>Problemas Frequentes Solucionados</h2>
      <ul>
        <li>Geladeira parou de gelar na parte de baixo enquanto o freezer continua congelando</li>
        <li>Alimentos congelando no compartimento de refrigerador</li>
        <li>Vazamento de água sob o eletrodoméstico ou na gaveta de legumes</li>
        <li>Bloqueio de gelo no evaporador e duto de ar entupido</li>
        <li>Motor compressor não liga, estala ou desarma pelo protetor térmico</li>
        <li>Borracha de vedação gasta gerando condensação excessiva</li>
      </ul>
      <h2>Marcas Atendidas</h2>
      <p>Samsung, LG, Electrolux, Brastemp, Consul e outros fabricantes renomados do mercado.</p>
      <h2>Perguntas Frequentes sobre Conserto de Geladeira</h2>
      <section>
        <h3>O atendimento é feito na minha residência?</h3>
        <p>Sim, realizamos o diagnóstico e conserto diretamente no local em Caxias do Sul e cidades vizinhas mediante agendamento prévio.</p>
      </section>
      <section>
        <h3>Vocês atendem geladeiras Inverse e Frost Free?</h3>
        <p>Sim, nossos técnicos atendem sistemas Frost Free, inversores (Inverter), modelos duplex e side by side.</p>
      </section>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createServiceSchema('Conserto de Geladeira em Caxias do Sul', 'Assistência técnica para geladeiras Frost Free, Duplex e Inverse.', '/conserto-geladeira-caxias-do-sul/'),
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Serviços', url: '/servicos/' },
        { name: 'Conserto de Geladeira', url: '/conserto-geladeira-caxias-do-sul/' }
      ]),
      createFAQSchema([
        { question: 'O atendimento é feito na minha residência?', answer: 'Sim, realizamos o diagnóstico e conserto diretamente no local em Caxias do Sul e cidades vizinhas mediante agendamento prévio.' },
        { question: 'Vocês atendem geladeiras Inverse e Frost Free?', answer: 'Sim, nossos técnicos atendem sistemas Frost Free, inversores (Inverter), modelos duplex e side by side.' }
      ])
    ]
  },

  // 3. Máquina de Lavar
  {
    path: '/conserto-maquina-de-lavar-caxias-do-sul/',
    title: 'Conserto de Máquina de Lavar em Caxias do Sul | Energy Manutenções',
    description: 'Assistência técnica para máquinas de lavar roupas em Caxias do Sul. Conserto de lavadoras que não centrifugam, vazam ou não ligam. Chame no WhatsApp.',
    h1: 'Conserto de Máquina de Lavar em Caxias do Sul',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Serviços', url: '/servicos/' },
      { name: 'Conserto de Máquina de Lavar', url: '/conserto-maquina-de-lavar-caxias-do-sul/' }
    ],
    contentHtml: `
      <p class="lead">Diagnóstico e conserto especializado para máquinas de lavar que não centrifugam, não drenam a água, fazem barulho excessivo no rolamento ou travam o cesto durante a lavagem.</p>
      <h2>Problemas Comuns em Lavadoras</h2>
      <ul>
        <li>Máquina de lavar não solta a água (falha na eletrobomba de drenagem)</li>
        <li>Lavadora não centrifuga ou bate roupa fraco</li>
        <li>Barulho alto metálico de rolamento estourado durante a centrifugação</li>
        <li>Vazamento de água pela parte inferior ou mangueiras</li>
        <li>Painel não liga, pisca ou não avança as etapas do ciclo</li>
      </ul>
      <h2>Marcas Atendidas</h2>
      <p>Brastemp, Consul, Electrolux, Samsung, LG e demais marcas.</p>
      <h2>Perguntas Frequentes</h2>
      <section>
        <h3>Vale a pena consertar máquina com barulho no rolamento?</h3>
        <p>Geralmente sim, a troca do kit mecânico (retentor, rolamentos e eixo) renova a vida útil da máquina por muitos anos com custo bem menor que uma nova.</p>
      </section>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createServiceSchema('Conserto de Máquina de Lavar em Caxias do Sul', 'Conserto e manutenção de lavadoras de roupa a domicílio em Caxias do Sul.', '/conserto-maquina-de-lavar-caxias-do-sul/'),
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Serviços', url: '/servicos/' },
        { name: 'Conserto de Máquina de Lavar', url: '/conserto-maquina-de-lavar-caxias-do-sul/' }
      ]),
      createFAQSchema([
        { question: 'Vale a pena consertar máquina com barulho no rolamento?', answer: 'Geralmente sim, a troca do kit mecânico (retentor, rolamentos e eixo) renova a vida útil da máquina por muitos anos com custo bem menor que uma nova.' }
      ])
    ]
  },

  // 4. Lava e Seca
  {
    path: '/conserto-lava-e-seca-caxias-do-sul/',
    title: 'Conserto de Lava e Seca em Caxias do Sul | Energy Manutenções',
    description: 'Lava e seca não seca, trava a porta ou dá erro? Técnico a domicílio em Caxias do Sul. Samsung, LG e Electrolux. Chame no WhatsApp.',
    h1: 'Conserto de Lava e Seca em Caxias do Sul',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Serviços', url: '/servicos/' },
      { name: 'Conserto de Lava e Seca', url: '/conserto-lava-e-seca-caxias-do-sul/' }
    ],
    contentHtml: `
      <p class="lead">Atendimento técnico especializado em lavadoras Lava e Seca com tecnologia Inverter, reparo no duto de secagem, resistência de aquecimento, termostatos e placas de potência.</p>
      <h2>Principais Falhas em Lava e Seca</h2>
      <ul>
        <li>Roupas saem úmidas ou quentes mas não secam completamente (duto obstruído ou resistência aberta)</li>
        <li>Códigos de erro no display (ex: dE, 4E, OE, FE, dC, LE, tE)</li>
        <li>Porta travada que não abre ao fim do ciclo</li>
        <li>Vibração extrema ou ruído no amortecedor e suspensão</li>
        <li>Vazamento de água pela gaveta de sabão ou vedação da borracha da porta (fole)</li>
      </ul>
    `,
    schemas: [
      {
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
              addressCountry: 'BR'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: -29.1764,
              longitude: -51.1895
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '08:00',
              closes: '18:30'
            },
            areaServed: [
              { '@type': 'City', name: 'Caxias do Sul' },
              { '@type': 'City', name: 'Farroupilha' },
              { '@type': 'City', name: 'Flores da Cunha' }
            ]
          },
          {
            '@type': 'Service',
            name: 'Conserto de Lava e Seca',
            serviceType: 'Assistência técnica de lava e seca',
            provider: { '@id': 'https://energy-manutencoes.vercel.app/#negocio' },
            areaServed: 'Caxias do Sul, RS'
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Minha lava e seca não seca as roupas. O que pode ser?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'As causas mais comuns são duto de secagem obstruído, resistência de aquecimento com defeito ou problema em sensor e termostato. Só o diagnóstico no local confirma a causa.'
                }
              },
              {
                '@type': 'Question',
                name: 'O que significam os códigos de erro dE, 4E e OE?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Cada marca usa códigos diferentes, e eles costumam indicar porta, abastecimento de água ou drenagem. Envie uma foto do display pelo WhatsApp que o técnico orienta.'
                }
              },
              {
                '@type': 'Question',
                name: 'A porta da lava e seca travou. O que fazer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Não force a porta. Desligue o equipamento, aguarde alguns minutos e, se continuar travada, chame um técnico.'
                }
              },
              {
                '@type': 'Question',
                name: 'Vocês atendem em casa?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sim, atendemos a domicílio em Caxias do Sul, Farroupilha e Flores da Cunha.'
                }
              },
              {
                '@type': 'Question',
                name: 'Quanto custa o conserto?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'O valor depende do defeito e das peças. Envie o modelo e o problema pelo WhatsApp para receber um orçamento rápido.'
                }
              },
              {
                '@type': 'Question',
                name: 'O serviço tem garantia?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sim, o serviço é realizado com garantia. Pergunte as condições pelo WhatsApp.'
                }
              },
              {
                '@type': 'Question',
                name: 'Quais marcas vocês atendem?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Samsung, LG e Electrolux.'
                }
              },
              {
                '@type': 'Question',
                name: 'Qual o horário de atendimento?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'De segunda a sábado, das 08:00 às 18:30.'
                }
              }
            ]
          }
        ]
      }
    ]
  },

  // 5. Secadora
  {
    path: '/conserto-secadora-caxias-do-sul/',
    title: 'Conserto de Secadora de Roupas em Caxias do Sul | Energy Manutenções',
    description: 'Assistência técnica para secadoras de roupas em Caxias do Sul. Secadora não aquece, não gira o tambor ou faz barulho? Agende visita técnica no WhatsApp.',
    h1: 'Conserto de Secadora de Roupas em Caxias do Sul',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Serviços', url: '/servicos/' },
      { name: 'Conserto de Secadora', url: '/conserto-secadora-caxias-do-sul/' }
    ],
    contentHtml: `
      <p class="lead">Manutenção e reparo de secadoras de roupas de parede e piso. Troca de correia, reparo de termostato, resistência de aquecimento e motor elétrico em Caxias do Sul.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createServiceSchema('Conserto de Secadora em Caxias do Sul', 'Manutenção e conserto de secadoras de roupa em Caxias do Sul.', '/conserto-secadora-caxias-do-sul/'),
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Serviços', url: '/servicos/' },
        { name: 'Conserto de Secadora', url: '/conserto-secadora-caxias-do-sul/' }
      ])
    ]
  },

  // 6. Freezer
  {
    path: '/conserto-freezer-caxias-do-sul/',
    title: 'Conserto de Freezer em Caxias do Sul | Energy Manutenções',
    description: 'Assistência técnica e conserto de freezer horizontal e vertical em Caxias do Sul. Reparo de compressores, termostatos e gás refrigerante a domicílio.',
    h1: 'Conserto de Freezer em Caxias do Sul',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Serviços', url: '/servicos/' },
      { name: 'Conserto de Freezer', url: '/conserto-freezer-caxias-do-sul/' }
    ],
    contentHtml: `
      <p class="lead">Reparo rápido e eficiente para freezers residenciais e comerciais verticais e horizontais em Caxias do Sul, Farroupilha e Flores da Cunha.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createServiceSchema('Conserto de Freezer em Caxias do Sul', 'Assistência técnica para freezers horizontais e verticais.', '/conserto-freezer-caxias-do-sul/'),
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Serviços', url: '/servicos/' },
        { name: 'Conserto de Freezer', url: '/conserto-freezer-caxias-do-sul/' }
      ])
    ]
  },

  // 7. Micro-ondas
  {
    path: '/conserto-micro-ondas-caxias-do-sul/',
    title: 'Conserto de Micro-ondas em Caxias do Sul | Energy Manutenções',
    description: 'Assistência técnica para fornos micro-ondas em Caxias do Sul. Não esquenta, faísca ou queimou fusível? Solicite atendimento via WhatsApp.',
    h1: 'Conserto de Micro-ondas em Caxias do Sul',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Serviços', url: '/servicos/' },
      { name: 'Conserto de Micro-ondas', url: '/conserto-micro-ondas-caxias-do-sul/' }
    ],
    contentHtml: `
      <p class="lead">Conserto seguro de fornos micro-ondas: substituição de magnetron, capacitor de alta tensão, chave da porta e membrana do teclado.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createServiceSchema('Conserto de Micro-ondas em Caxias do Sul', 'Conserto de fornos micro-ondas em Caxias do Sul.', '/conserto-micro-ondas-caxias-do-sul/'),
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Serviços', url: '/servicos/' },
        { name: 'Conserto de Micro-ondas', url: '/conserto-micro-ondas-caxias-do-sul/' }
      ])
    ]
  },

  // 8. Forno Elétrico
  {
    path: '/conserto-forno-eletrico-caxias-do-sul/',
    title: 'Conserto de Forno Elétrico em Caxias do Sul | Energy Manutenções',
    description: 'Assistência técnica para forno elétrico de embutir e bancada em Caxias do Sul. Conserto de resistência, termostato e fiação a domicílio.',
    h1: 'Conserto de Forno Elétrico em Caxias do Sul',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Serviços', url: '/servicos/' },
      { name: 'Conserto de Forno Elétrico', url: '/conserto-forno-eletrico-caxias-do-sul/' }
    ],
    contentHtml: `
      <p class="lead">Atendimento a domicílio para conserto de fornos elétricos de embutir e bancada das principais marcas em Caxias do Sul.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createServiceSchema('Conserto de Forno Elétrico em Caxias do Sul', 'Conserto de fornos elétricos residenciais.', '/conserto-forno-eletrico-caxias-do-sul/'),
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Serviços', url: '/servicos/' },
        { name: 'Conserto de Forno Elétrico', url: '/conserto-forno-eletrico-caxias-do-sul/' }
      ])
    ]
  },

  // 9. Lava-louças
  {
    path: '/conserto-lava-loucas-caxias-do-sul/',
    title: 'Conserto de Lava-louças em Caxias do Sul | Energy Manutenções',
    description: 'Assistência técnica para máquinas lava-louças em Caxias do Sul. Reparo de vazamentos, bombas de circulação e sistema de aquecimento.',
    h1: 'Conserto de Lava-louças em Caxias do Sul',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Serviços', url: '/servicos/' },
      { name: 'Conserto de Lava-louças', url: '/conserto-lava-loucas-caxias-do-sul/' }
    ],
    contentHtml: `
      <p class="lead">Conserto especializado de máquinas lava-louças em Caxias do Sul e Serra Gaúcha com atendimento pontual a domicílio.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createServiceSchema('Conserto de Lava-louças em Caxias do Sul', 'Conserto de lava-louças residenciais em Caxias do Sul.', '/conserto-lava-loucas-caxias-do-sul/'),
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Serviços', url: '/servicos/' },
        { name: 'Conserto de Lava-louças', url: '/conserto-lava-loucas-caxias-do-sul/' }
      ])
    ]
  },

  // 10. Frigobar
  {
    path: '/conserto-frigobar-caxias-do-sul/',
    title: 'Conserto de Frigobar em Caxias do Sul | Energy Manutenções',
    description: 'Assistência técnica e conserto de frigobares em Caxias do Sul. Não gela, faz barulho ou vaza água? Atendimento rápido via WhatsApp.',
    h1: 'Conserto de Frigobar em Caxias do Sul',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Serviços', url: '/servicos/' },
      { name: 'Conserto de Frigobar', url: '/conserto-frigobar-caxias-do-sul/' }
    ],
    contentHtml: `
      <p class="lead">Manutenção e reparo de frigobares residenciais e corporativos em Caxias do Sul e região.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createServiceSchema('Conserto de Frigobar em Caxias do Sul', 'Assistência técnica para frigobares em Caxias do Sul.', '/conserto-frigobar-caxias-do-sul/'),
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Serviços', url: '/servicos/' },
        { name: 'Conserto de Frigobar', url: '/conserto-frigobar-caxias-do-sul/' }
      ])
    ]
  },

  // 11. Adega
  {
    path: '/conserto-adega-caxias-do-sul/',
    title: 'Conserto de Adega Climatizada em Caxias do Sul | Energy Manutenções',
    description: 'Assistência técnica para adegas climatizadas em Caxias do Sul. Conserto de adegas com compressor e termoelétricas para preservação de vinhos.',
    h1: 'Conserto de Adega Climatizada em Caxias do Sul',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Serviços', url: '/servicos/' },
      { name: 'Conserto de Adega Climatizada', url: '/conserto-adega-caxias-do-sul/' }
    ],
    contentHtml: `
      <p class="lead">Mantenha seus vinhos na temperatura exata com assistência técnica qualificada para adegas climatizadas na Serra Gaúcha.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createServiceSchema('Conserto de Adega Climatizada em Caxias do Sul', 'Conserto de adegas climatizadas na Serra Gaúcha.', '/conserto-adega-caxias-do-sul/'),
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Serviços', url: '/servicos/' },
        { name: 'Conserto de Adega', url: '/conserto-adega-caxias-do-sul/' }
      ])
    ]
  },

  // 12. Expositor de Bebidas
  {
    path: '/conserto-expositor-de-bebidas-caxias-do-sul/',
    title: 'Conserto de Expositor de Bebidas em Caxias do Sul | Energy Manutenções',
    description: 'Manutenção de expositor de bebidas e cervejeiras em Caxias do Sul. Conserto comercial e residencial com atendimento ágil no WhatsApp.',
    h1: 'Conserto de Expositor de Bebidas e Cervejeiras em Caxias do Sul',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Serviços', url: '/servicos/' },
      { name: 'Conserto de Expositor de Bebidas', url: '/conserto-expositor-de-bebidas-caxias-do-sul/' }
    ],
    contentHtml: `
      <p class="lead">Atendimento para expositores verticais, cervejeiras e refrigeradores comerciais para comércios e residências em Caxias do Sul.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createServiceSchema('Conserto de Expositor de Bebidas em Caxias do Sul', 'Conserto de cervejeiras e expositores de bebidas em Caxias do Sul.', '/conserto-expositor-de-bebidas-caxias-do-sul/'),
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Serviços', url: '/servicos/' },
        { name: 'Conserto de Expositor de Bebidas', url: '/conserto-expositor-de-bebidas-caxias-do-sul/' }
      ])
    ]
  },

  // 13. Áreas Atendidas Index
  {
    path: '/areas-atendidas/',
    title: 'Áreas Atendidas | Assistência Técnica em Caxias do Sul, Farroupilha e Flores da Cunha',
    description: 'Conheça as cidades atendidas pela Energy Manutenções na Serra Gaúcha: Caxias do Sul, Farroupilha e Flores da Cunha. Atendimento presencial a domicílio.',
    h1: 'Cidades Atendidas na Serra Gaúcha',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Áreas Atendidas', url: '/areas-atendidas/' }
    ],
    contentHtml: `
      <p class="lead">A Energy Manutenções presta atendimento a domicílio com pontualidade e segurança nas seguintes cidades da Serra Gaúcha:</p>
      <ul>
        <li><a href="/caxias-do-sul/"><strong>Caxias do Sul – RS:</strong> Sede no bairro Marechal Floriano e cobertura em todos os bairros da cidade.</a></li>
        <li><a href="/farroupilha/"><strong>Farroupilha – RS:</strong> Atendimento residencial e comercial com deslocamento programado.</a></li>
        <li><a href="/flores-da-cunha/"><strong>Flores da Cunha – RS:</strong> Suporte especializado para eletrodomésticos a domicílio.</a></li>
      </ul>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Áreas Atendidas', url: '/areas-atendidas/' }
      ])
    ]
  },

  // 14. Caxias do Sul
  {
    path: '/caxias-do-sul/',
    title: 'Assistência Técnica de Eletrodomésticos em Caxias do Sul | Energy',
    description: 'Conserto de geladeiras, máquinas de lavar, lava e seca e eletrodomésticos em Caxias do Sul. Atendimento a domicílio com nota 4.9 no Google. WhatsApp.',
    h1: 'Assistência Técnica de Eletrodomésticos em Caxias do Sul – RS',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Áreas Atendidas', url: '/areas-atendidas/' },
      { name: 'Caxias do Sul', url: '/caxias-do-sul/' }
    ],
    contentHtml: `
      <p class="lead">Sede própria na Rua Índia Ceci, 141, Bairro Marechal Floriano, Caxias do Sul – RS. Atendemos todos os bairros da cidade: Centro, São Pelegrino, Pio X, Panazzolo, Cruzeiro, Santa Catarina, Lourdes, Rio Branco e arredores.</p>
      <h2>Serviços Disponíveis em Caxias do Sul</h2>
      <ul>
        <li><a href="/conserto-geladeira-caxias-do-sul/">Conserto de Geladeiras Frost Free e Inverse</a></li>
        <li><a href="/conserto-maquina-de-lavar-caxias-do-sul/">Conserto de Máquinas de Lavar Roupas</a></li>
        <li><a href="/conserto-lava-e-seca-caxias-do-sul/">Conserto de Lava e Seca Inverter</a></li>
        <li><a href="/conserto-secadora-caxias-do-sul/">Conserto de Secadoras de Roupas</a></li>
        <li><a href="/conserto-freezer-caxias-do-sul/">Conserto de Freezers e Fornos Elétricos</a></li>
      </ul>
      <h2>Perguntas Frequentes sobre Atendimento em Caxias do Sul</h2>
      <section>
        <h3>Qual é o endereço da sede em Caxias do Sul?</h3>
        <p>Rua Índia Ceci, 141, Bairro Marechal Floriano, Caxias do Sul – RS, CEP 95013-120.</p>
      </section>
      <section>
        <h3>Como agendar uma visita técnica em Caxias do Sul?</h3>
        <p>Basta enviar uma mensagem no WhatsApp (54) 99179-6080 relatando o defeito do equipamento para combinarmos o horário.</p>
      </section>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Áreas Atendidas', url: '/areas-atendidas/' },
        { name: 'Caxias do Sul', url: '/caxias-do-sul/' }
      ]),
      createFAQSchema([
        { question: 'Qual é o endereço da sede em Caxias do Sul?', answer: 'Rua Índia Ceci, 141, Bairro Marechal Floriano, Caxias do Sul – RS, CEP 95013-120.' },
        { question: 'Como agendar uma visita técnica em Caxias do Sul?', answer: 'Basta enviar uma mensagem no WhatsApp (54) 99179-6080 relatando o defeito do equipamento para combinarmos o horário.' }
      ])
    ]
  },

  // 15. Farroupilha
  {
    path: '/farroupilha/',
    title: 'Assistência Técnica de Eletrodomésticos em Farroupilha | Energy',
    description: 'Assistência técnica para eletrodomésticos em Farroupilha - RS. Conserto de geladeiras, lavadoras e lava e seca a domicílio. Agende no WhatsApp.',
    h1: 'Assistência Técnica de Eletrodomésticos em Farroupilha – RS',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Áreas Atendidas', url: '/areas-atendidas/' },
      { name: 'Farroupilha', url: '/farroupilha/' }
    ],
    contentHtml: `
      <p class="lead">Atendimento a domicílio na cidade vizinha de Farroupilha mediante agendamento prévio. Conserto de geladeiras, máquinas de lavar, secadoras e lava e seca.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Áreas Atendidas', url: '/areas-atendidas/' },
        { name: 'Farroupilha', url: '/farroupilha/' }
      ])
    ]
  },

  // 16. Flores da Cunha
  {
    path: '/flores-da-cunha/',
    title: 'Assistência Técnica de Eletrodomésticos em Flores da Cunha | Energy',
    description: 'Assistência técnica para eletrodomésticos em Flores da Cunha - RS. Conserto de geladeiras, lavadoras e freezers com agendamento no WhatsApp.',
    h1: 'Assistência Técnica de Eletrodomésticos em Flores da Cunha – RS',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Áreas Atendidas', url: '/areas-atendidas/' },
      { name: 'Flores da Cunha', url: '/flores-da-cunha/' }
    ],
    contentHtml: `
      <p class="lead">Atendimento programado a domicílio para residências e empresas em Flores da Cunha – RS para conserto de eletrodomésticos da linha branca.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Áreas Atendidas', url: '/areas-atendidas/' },
        { name: 'Flores da Cunha', url: '/flores-da-cunha/' }
      ])
    ]
  },

  // 17. Marcas
  {
    path: '/marcas/',
    title: 'Marcas de Eletrodomésticos Atendidas | Energy Manutenções',
    description: 'Atendemos Samsung, LG, Electrolux, Brastemp, Consul e outras marcas em Caxias do Sul. Assistência técnica especializada e multimarcas a domicílio.',
    h1: 'Marcas de Eletrodomésticos Atendidas',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Marcas', url: '/marcas/' }
    ],
    contentHtml: `
      <p class="lead">A Energy Manutenções atende equipamentos de diferentes fabricantes, com amplo conhecimento técnico em marcas como Samsung, LG, Electrolux, Brastemp e Consul.</p>
      <p><em>Nota informativa: Atuamos como assistência técnica independente multimarcas especializada, não atuando como autorizada exclusiva de nenhuma fabricante.</em></p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Marcas', url: '/marcas/' }
      ])
    ]
  },

  // 18. Eletrodomésticos Seminovos
  {
    path: '/eletrodomesticos-seminovos/',
    title: 'Eletrodomésticos Seminovos Revisados em Caxias do Sul | Energy Manutenções',
    description: 'Geladeiras e máquinas de lavar seminovas revisadas com garantia mecânica de 60 dias em Caxias do Sul. Consulte disponibilidade no WhatsApp.',
    h1: 'Eletrodomésticos Seminovos Revisados com Garantia',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Seminovos', url: '/eletrodomesticos-seminovos/' }
    ],
    contentHtml: `
      <p class="lead">Comercializamos geladeiras, lavadoras e eletrodomésticos seminovos revisados tecnicamente, testados e com garantia mecânica de 60 dias em Caxias do Sul.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Seminovos', url: '/eletrodomesticos-seminovos/' }
      ])
    ]
  },

  // 19. Sobre Nós
  {
    path: '/sobre/',
    title: 'Sobre a Energy Manutenções | Assistência Técnica em Caxias do Sul',
    description: 'Conheça a história da Energy Manutenções: fundada em 2022 por Eduardo Borges Baumgarten, mais de 850 avaliações 5 estrelas no Google e sede em Caxias do Sul.',
    h1: 'Sobre a Energy Manutenções',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Sobre', url: '/sobre/' }
    ],
    contentHtml: `
      <p class="lead">Fundada em 18 de abril de 2022 em Caxias do Sul por Eduardo Borges Baumgarten, a Energy Manutenções (CNPJ: 46.067.650/0001-55) é referência em reparação e manutenção de eletrodomésticos na Serra Gaúcha.</p>
      <p>Com mais de 850 avaliações de clientes e nota média de 4.9 no Google, priorizamos diagnósticos técnicos transparentes, pontualidade no atendimento a domicílio e peças de alta procedência.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Sobre', url: '/sobre/' }
      ])
    ]
  },

  // 20. Como Funciona
  {
    path: '/como-funciona/',
    title: 'Como Funciona o Atendimento Técnico | Energy Manutenções',
    description: 'Veja o passo a passo: contato inicial no WhatsApp, agendamento de visita a domicílio, diagnóstico transparente e execução do conserto com garantia.',
    h1: 'Como Funciona o Nosso Atendimento',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Como Funciona', url: '/como-funciona/' }
    ],
    contentHtml: `
      <ol>
        <li><strong>1. Contato Inicial:</strong> Você nos envia uma mensagem no WhatsApp relatando o modelo do aparelho e o defeito observado.</li>
        <li><strong>2. Agendamento da Visita:</strong> Combinamos o melhor dia e período para deslocamento até a sua residência ou empresa.</li>
        <li><strong>3. Diagnóstico e Orçamento:</strong> O técnico realiza testes elétricos e mecânicos e apresenta o diagnóstico detalhado.</li>
        <li><strong>4. Execução do Reparo:</strong> Aprovado o orçamento, o conserto é realizado com garantia das peças substituídas.</li>
      </ol>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Como Funciona', url: '/como-funciona/' }
      ])
    ]
  },

  // 21. FAQ
  {
    path: '/faq/',
    title: 'Perguntas Frequentes (FAQ) | Energy Manutenções Caxias do Sul',
    description: 'Tire suas dúvidas sobre garantia, agendamento a domicílio, taxa de visita técnica, formas de pagamento e marcas atendidas pela Energy Manutenções.',
    h1: 'Perguntas Frequentes sobre Nossos Serviços',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'FAQ', url: '/faq/' }
    ],
    contentHtml: `
      <section>
        <h3>Qual a taxa de visita técnica?</h3>
        <p>Quando é necessária uma visita e o serviço não é realizado, poderá haver cobrança referente ao deslocamento e diagnóstico. Quando o conserto é aprovado e realizado no momento da visita, essa taxa é isenta.</p>
      </section>
      <section>
        <h3>Quais formas de pagamento são aceitas?</h3>
        <p>Aceitamos Dinheiro, PIX e Cartão de crédito (com opção de parcelamento conforme condições comerciais).</p>
      </section>
      <section>
        <h3>Os serviços possuem garantia?</h3>
        <p>Sim! As condições de garantia dos serviços seguem a legislação aplicável e as condições informadas no orçamento e/ou ordem de serviço.</p>
      </section>
      <section>
        <h3>Vocês atendem pequenos eletrodomésticos (Air fryer, cafeteiras)?</h3>
        <p>Não, focamos exclusivamente em eletrodomésticos da linha branca de grande porte (geladeiras, lavadoras, lava e seca, secadoras, freezers, fornos, micro-ondas e lava-louças).</p>
      </section>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'FAQ', url: '/faq/' }
      ]),
      createFAQSchema([
        { question: 'Qual a taxa de visita técnica?', answer: 'Quando é necessária uma visita e o serviço não é realizado, poderá haver cobrança referente ao deslocamento e diagnóstico. Quando o conserto é aprovado e realizado no momento da visita, essa taxa é isenta.' },
        { question: 'Quais formas de pagamento são aceitas?', answer: 'Aceitamos Dinheiro, PIX e Cartão de crédito (com opção de parcelamento conforme condições comerciais).' },
        { question: 'Os serviços possuem garantia?', answer: 'Sim! As condições de garantia dos serviços seguem a legislação aplicável e as condições informadas no orçamento e/ou ordem de serviço.' },
        { question: 'Vocês atendem pequenos eletrodomésticos (Air fryer, cafeteiras)? answer', answer: 'Não, focamos exclusivamente em eletrodomésticos da linha branca de grande porte.' }
      ])
    ]
  },

  // 22. Contato
  {
    path: '/contato/',
    title: 'Contato e WhatsApp | Energy Manutenções Caxias do Sul',
    description: 'Fale diretamente com a Energy Manutenções pelo WhatsApp (54) 99179-6080. Sede na Rua Índia Ceci, 141, Bairro Marechal Floriano, Caxias do Sul – RS.',
    h1: 'Fale com a Energy Manutenções',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Contato', url: '/contato/' }
    ],
    contentHtml: `
      <p class="lead">Entre em contato para orçamentos, dúvidas técnicas e agendamento de visitas a domicílio em Caxias do Sul, Farroupilha e Flores da Cunha.</p>
      <p><strong>WhatsApp / Telefone:</strong> <a href="https://wa.me/5554991796080">(54) 99179-6080</a></p>
      <p><strong>Endereço:</strong> Rua Índia Ceci, 141, Bairro Marechal Floriano, Caxias do Sul – RS, CEP 95013-120</p>
      <p><strong>Horário de Atendimento:</strong> Segunda a Sábado das 08:00 às 18:30</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Contato', url: '/contato/' }
      ])
    ]
  },

  // 23. Política de Privacidade
  {
    path: '/politica-de-privacidade/',
    title: 'Política de Privacidade | Energy Manutenções',
    description: 'Informações sobre a privacidade dos dados coletados durante o agendamento de assistência técnica conforme a Lei Geral de Proteção de Dados (LGPD).',
    h1: 'Política de Privacidade e Proteção de Dados',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Privacidade', url: '/politica-de-privacidade/' }
    ],
    contentHtml: `
      <p class="lead">A Energy Manutenções respeita a sua privacidade. Os dados fornecidos (como nome, endereço e telefone) são utilizados única e exclusivamente para a prestação de serviços técnicos, agendamento e emissão de ordens de serviço.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Privacidade', url: '/politica-de-privacidade/' }
      ])
    ]
  },

  // 24. Blog Index
  {
    path: '/blog/',
    title: 'Blog & Dicas Técnicas de Eletrodomésticos | Energy Manutenções',
    description: 'Artigos técnicos sobre defeitos comuns, soluções para geladeiras que não gelam, lavadoras que não centrifugam e manutenção de eletrodomésticos.',
    h1: 'Blog e Dicas de Especialistas em Eletrodomésticos',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Blog', url: '/blog/' }
    ],
    contentHtml: `
      <p class="lead">Conteúdo prático produzido por técnicos especialistas da Energy Manutenções para ajudar você a identificar problemas e cuidar melhor dos seus aparelhos.</p>
      <ul>
        <li><a href="/blog/geladeira-nao-gela-principais-causas/">Geladeira não gela: principais causas e quando procurar assistência técnica</a></li>
        <li><a href="/blog/maquina-de-lavar-nao-centrifuga/">Máquina de lavar não centrifuga: o que pode estar acontecendo?</a></li>
        <li><a href="/blog/lava-e-seca-nao-seca-causas/">Lava e seca não seca as roupas: conheça os motivos mais frequentes</a></li>
        <li><a href="/blog/quando-vale-a-pena-consertar-geladeira/">Quando vale a pena consertar a geladeira versus comprar uma nova?</a></li>
        <li><a href="/blog/geladeira-fazendo-barulho-quando-procurar-assistencia/">Geladeira fazendo barulho estranho: saiba quando procurar assistência</a></li>
        <li><a href="/blog/como-identificar-sinais-problema-maquina-lavar/">Como identificar sinais de que sua máquina de lavar precisa de manutenção</a></li>
      </ul>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Blog', url: '/blog/' }
      ])
    ]
  },

  // 25. Artigo 1
  {
    path: '/blog/geladeira-nao-gela-principais-causas/',
    title: 'Geladeira não gela: causas e quando chamar assistência | Energy Manutenções',
    description: 'Descubra por que a geladeira para de gelar embaixo ou no geral, o papel do sistema de degelo e o momento ideal de acionar um técnico especializado.',
    h1: 'Geladeira não gela: principais causas e quando procurar assistência técnica',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Blog', url: '/blog/' },
      { name: 'Geladeira não gela', url: '/blog/geladeira-nao-gela-principais-causas/' }
    ],
    contentHtml: `
      <p class="lead">Entenda por que o freezer congela normalmente enquanto o refrigerador esquenta e saiba identificar defeitos no sistema Frost Free.</p>
      <h2>Bloqueio de gelo no evaporador</h2>
      <p>Quando a resistência de degelo, termofusível ou bimetal queimam, o gelo se acumula bloqueando a passagem de ar para o compartimento inferior.</p>
      <h2>Ventilador inoperante ou damper travado</h2>
      <p>Se a ventoinha parar de girar, o ar refrigerado não circula. Da mesma forma, um damper termostático travado impede o resfriamento dos alimentos.</p>
      <p>Precisa de assistência técnica em Caxias do Sul? <a href="/conserto-geladeira-caxias-do-sul/">Conheça nosso serviço de conserto de geladeiras</a> ou chame no WhatsApp.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': 'Geladeira não gela: principais causas e quando procurar assistência técnica',
        'description': 'Descubra por que a geladeira para de gelar embaixo ou no geral, o papel do sistema de degelo e o momento ideal de acionar um técnico especializado.',
        'datePublished': '2025-03-10',
        'author': { '@type': 'Organization', 'name': 'Energy Manutenções' },
        'publisher': { '@type': 'Organization', 'name': 'Energy Manutenções', 'logo': { '@type': 'ImageObject', 'url': `${SITE_URL}/logo.png` } },
        'url': `${SITE_URL}/blog/geladeira-nao-gela-principais-causas/`
      },
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Blog', url: '/blog/' },
        { name: 'Geladeira não gela', url: '/blog/geladeira-nao-gela-principais-causas/' }
      ])
    ]
  },

  // 26. Artigo 2
  {
    path: '/blog/maquina-de-lavar-nao-centrifuga/',
    title: 'Máquina de lavar não centrifuga: o que pode ser? | Energy Manutenções',
    description: 'Veja os motivos mais recorrentes para lavadoras de roupa não centrifugarem, desde problemas no atuador até eletrobomba e trava de segurança.',
    h1: 'Máquina de lavar não centrifuga: o que pode estar acontecendo?',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Blog', url: '/blog/' },
      { name: 'Máquina não centrifuga', url: '/blog/maquina-de-lavar-nao-centrifuga/' }
    ],
    contentHtml: `
      <p class="lead">Lavadora parou cheia de água ou o motor ronca mas não gira o cesto? Saiba quais peças podem estar com defeito.</p>
      <p>Falhas comuns incluem eletrobomba de drenagem travada por objetos (moedas, grampos), atuador de freio com engrenagem gasta ou capacitor do motor sem força.</p>
      <p><a href="/conserto-maquina-de-lavar-caxias-do-sul/">Consulte nosso serviço de conserto de máquinas de lavar em Caxias do Sul</a>.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': 'Máquina de lavar não centrifuga: o que pode estar acontecendo?',
        'description': 'Veja os motivos mais recorrentes para lavadoras de roupa não centrifugarem.',
        'datePublished': '2025-02-15',
        'author': { '@type': 'Organization', 'name': 'Energy Manutenções' },
        'publisher': { '@type': 'Organization', 'name': 'Energy Manutenções', 'logo': { '@type': 'ImageObject', 'url': `${SITE_URL}/logo.png` } },
        'url': `${SITE_URL}/blog/maquina-de-lavar-nao-centrifuga/`
      },
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Blog', url: '/blog/' },
        { name: 'Máquina não centrifuga', url: '/blog/maquina-de-lavar-nao-centrifuga/' }
      ])
    ]
  },

  // 27. Artigo 3
  {
    path: '/blog/lava-e-seca-nao-seca-causas/',
    title: 'Lava e seca não seca as roupas: motivos e soluções | Energy Manutenções',
    description: 'Entenda por que a máquina lava e seca termina o ciclo com roupas molhadas, duto entupido por fiapos ou resistência de secagem inoperante.',
    h1: 'Lava e seca não seca as roupas: conheça os motivos mais frequentes',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Blog', url: '/blog/' },
      { name: 'Lava e seca não seca', url: '/blog/lava-e-seca-nao-seca-causas/' }
    ],
    contentHtml: `
      <p class="lead">Acúmulo de fiapos no duto de condensação, termostato de segurança desarmado ou resistência de aquecimento rompida são os vilões mais comuns.</p>
      <p><a href="/conserto-lava-e-seca-caxias-do-sul/">Solicite conserto de Lava e Seca em Caxias do Sul</a>.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': 'Lava e seca não seca as roupas: conheça os motivos mais frequentes',
        'description': 'Entenda por que a máquina lava e seca termina o ciclo com roupas molhadas.',
        'datePublished': '2025-01-20',
        'author': { '@type': 'Organization', 'name': 'Energy Manutenções' },
        'publisher': { '@type': 'Organization', 'name': 'Energy Manutenções', 'logo': { '@type': 'ImageObject', 'url': `${SITE_URL}/logo.png` } },
        'url': `${SITE_URL}/blog/lava-e-seca-nao-seca-causas/`
      },
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Blog', url: '/blog/' },
        { name: 'Lava e seca não seca', url: '/blog/lava-e-seca-nao-seca-causas/' }
      ])
    ]
  },

  // 28. Artigo 4
  {
    path: '/blog/quando-vale-a-pena-consertar-geladeira/',
    title: 'Quando vale a pena consertar a geladeira? | Energy Manutenções',
    description: 'Análise de custo-benefício: entenda quando o conserto do refrigerador compensa financeiramente em comparação com a compra de um aparelho novo.',
    h1: 'Quando vale a pena consertar a geladeira versus comprar uma nova?',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Blog', url: '/blog/' },
      { name: 'Vale a pena consertar geladeira', url: '/blog/quando-vale-a-pena-consertar-geladeira/' }
    ],
    contentHtml: `
      <p class="lead">Na maioria dos casos de falha em sensores, relés, ventiladores ou peças de degelo, o conserto custa uma fração do valor de uma geladeira nova.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': 'Quando vale a pena consertar a geladeira versus comprar uma nova?',
        'description': 'Análise de custo-benefício para reparo de refrigeradores.',
        'datePublished': '2025-01-05',
        'author': { '@type': 'Organization', 'name': 'Energy Manutenções' },
        'publisher': { '@type': 'Organization', 'name': 'Energy Manutenções', 'logo': { '@type': 'ImageObject', 'url': `${SITE_URL}/logo.png` } },
        'url': `${SITE_URL}/blog/quando-vale-a-pena-consertar-geladeira/`
      },
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Blog', url: '/blog/' },
        { name: 'Vale a pena consertar', url: '/blog/quando-vale-a-pena-consertar-geladeira/' }
      ])
    ]
  },

  // 29. Artigo 5
  {
    path: '/blog/geladeira-fazendo-barulho-quando-procurar-assistencia/',
    title: 'Geladeira fazendo barulho: quando procurar assistência? | Energy',
    description: 'Identifique a origem dos ruídos: estalos no motor, zumbido contínuo, vibração da bandeja ou ventoinha pegando no gelo.',
    h1: 'Geladeira fazendo barulho estranho: saiba quando procurar assistência',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Blog', url: '/blog/' },
      { name: 'Geladeira com barulho', url: '/blog/geladeira-fazendo-barulho-quando-procurar-assistencia/' }
    ],
    contentHtml: `
      <p class="lead">Ruídos repentinos ou vibrações estridentes podem indicar hélice da ventoinha batendo em blocos de gelo ou desgaste mecânico no compressor.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': 'Geladeira fazendo barulho estranho: saiba quando procurar assistência',
        'description': 'Identifique a origem de ruídos estranhos em geladeiras.',
        'datePublished': '2024-12-18',
        'author': { '@type': 'Organization', 'name': 'Energy Manutenções' },
        'publisher': { '@type': 'Organization', 'name': 'Energy Manutenções', 'logo': { '@type': 'ImageObject', 'url': `${SITE_URL}/logo.png` } },
        'url': `${SITE_URL}/blog/geladeira-fazendo-barulho-quando-procurar-assistencia/`
      },
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Blog', url: '/blog/' },
        { name: 'Geladeira com barulho', url: '/blog/geladeira-fazendo-barulho-quando-procurar-assistencia/' }
      ])
    ]
  },

  // 30. Artigo 6
  {
    path: '/blog/como-identificar-sinais-problema-maquina-lavar/',
    title: 'Sinais de que sua máquina de lavar precisa de manutenção | Energy',
    description: 'Manchas de graxa nas roupas, vazamentos graduais, desnível e cheiro de queimado: saiba quando antecipar a visita técnica para evitar prejuízos maiores.',
    h1: 'Como identificar sinais de que sua máquina de lavar precisa de manutenção',
    breadcrumbs: [
      { name: 'Início', url: '/' },
      { name: 'Blog', url: '/blog/' },
      { name: 'Sinais na máquina de lavar', url: '/blog/como-identificar-sinais-problema-maquina-lavar/' }
    ],
    contentHtml: `
      <p class="lead">A manutenção preventiva pode salvar a sua máquina antes que um rolamento quebrado danifique todo o conjunto mecânico e o motor.</p>
    `,
    schemas: [
      BASE_BUSINESS_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': 'Como identificar sinais de que sua máquina de lavar precisa de manutenção',
        'description': 'Sinais preventivos para evitar que sua lavadora pare de funcionar.',
        'datePublished': '2024-11-25',
        'author': { '@type': 'Organization', 'name': 'Energy Manutenções' },
        'publisher': { '@type': 'Organization', 'name': 'Energy Manutenções', 'logo': { '@type': 'ImageObject', 'url': `${SITE_URL}/logo.png` } },
        'url': `${SITE_URL}/blog/como-identificar-sinais-problema-maquina-lavar/`
      },
      createBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Blog', url: '/blog/' },
        { name: 'Sinais na lavadora', url: '/blog/como-identificar-sinais-problema-maquina-lavar/' }
      ])
    ]
  }
];

function buildLavaESecaCrawlableBody(): string {
  const WHATSAPP_URL = 'https://wa.me/5554991796080?text=Ol%C3%A1!%20Preciso%20de%20conserto%20para%20minha%20lava%20e%20seca%20em%20Caxias%20do%20Sul.';
  const PHONE_URL = 'tel:+5554991796080';

  return `
    <!-- 5.1 Cabeçalho enxuto -->
    <header id="cabecalho" style="background: #0a0a0c; border-bottom: 1px solid #222;">
      <div style="background: #14141d; border-bottom: 1px solid #222; padding: 6px 12px; text-align: center; font-size: 12px; color: #ccc;">
        <span style="color: #d4af37; font-weight: bold;">★ 4.9 no Google (+850 avaliações)</span>
        <span style="margin: 0 6px; color: #555;">|</span>
        <span>Caxias do Sul, Farroupilha e Flores da Cunha</span>
      </div>
      <div style="max-width: 1100px; margin: 0 auto; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between;">
        <a href="/" style="font-weight: bold; color: #fff; text-decoration: none; font-size: 18px;" aria-label="Energy Manutenções - Página Inicial">
          Energy Manutenções
        </a>
        <div style="display: flex; align-items: center; gap: 12px;">
          <a href="${PHONE_URL}" data-location="cabecalho" style="color: #ccc; text-decoration: none; font-size: 13px;">(54) 99179-6080</a>
          <a href="${WHATSAPP_URL}" data-location="cabecalho" target="_blank" rel="noopener noreferrer" style="background: #25d366; color: #000; padding: 8px 16px; border-radius: 8px; font-weight: bold; font-size: 13px; text-decoration: none;">WhatsApp</a>
        </div>
      </div>
    </header>

    <!-- 5.2 Hero (acima da dobra) -->
    <section id="hero" style="max-width: 1100px; margin: 0 auto; padding: 40px 16px; border-bottom: 1px solid #1a1a24;">
      <p style="color: #d4af37; font-size: 12px; font-weight: bold; text-transform: uppercase; margin-bottom: 8px;">Especialista em Lava e Seca Inverter</p>
      <h1 style="font-size: 2.25rem; color: #fff; line-height: 1.2; margin: 0 0 16px 0;">Conserto de Lava e Seca em Caxias do Sul</h1>
      <p style="font-size: 1.1rem; color: #ccc; line-height: 1.6; max-width: 700px; margin-bottom: 24px;">
        Sua lava e seca não seca, trava a porta ou mostra erro no display? Técnico a domicílio, orçamento rápido pelo WhatsApp.
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
        <a href="${WHATSAPP_URL}" data-location="hero" target="_blank" rel="noopener noreferrer" style="background: #25d366; color: #000; padding: 14px 28px; border-radius: 12px; font-weight: bold; font-size: 16px; text-decoration: none; display: inline-block;">
          Chamar no WhatsApp
        </a>
        <a href="${PHONE_URL}" data-location="hero" style="border: 1px solid #444; color: #eee; padding: 14px 24px; border-radius: 12px; font-size: 14px; text-decoration: none; display: inline-block;">
          Ligar agora
        </a>
      </div>
      <p style="font-size: 13px; color: #888; margin-top: 12px;">
        Atendimento a domicílio • Segunda a sábado, 08:00 às 18:30 • Serviço com garantia
      </p>
    </section>

    <!-- 5.3 Faixa de confiança -->
    <section id="confianca" style="background: #0e0e14; border-bottom: 1px solid #1a1a24; padding: 24px 16px;">
      <div style="max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; text-align: center;">
        <div style="padding: 12px; background: #14141d; border: 1px solid #222; border-radius: 8px;"><strong style="color: #d4af37;">★ 4.9 no Google</strong><br><small style="color: #888;">Avaliação dos clientes</small></div>
        <div style="padding: 12px; background: #14141d; border: 1px solid #222; border-radius: 8px;"><strong style="color: #fff;">+850 avaliações</strong><br><small style="color: #888;">Histórico comprovado</small></div>
        <div style="padding: 12px; background: #14141d; border: 1px solid #222; border-radius: 8px;"><strong style="color: #fff;">Atendimento a domicílio</strong><br><small style="color: #888;">Na sua residência</small></div>
        <div style="padding: 12px; background: #14141d; border: 1px solid #222; border-radius: 8px;"><strong style="color: #f3e5ab;">Samsung • LG • Electrolux</strong><br><small style="color: #888;">Principais marcas</small></div>
      </div>
    </section>

    <!-- 5.4 Problemas que resolvemos -->
    <section id="problemas" style="max-width: 1100px; margin: 0 auto; padding: 40px 16px;">
      <h2 style="font-size: 1.6rem; color: #fff; margin-bottom: 20px;">Sua lava e seca está com algum desses problemas?</h2>
      <ul style="color: #ccc; line-height: 1.8; font-size: 15px;">
        <li><strong>Não seca as roupas:</strong> Roupas saem úmidas ou só mornas. Pode ser duto obstruído ou resistência com defeito.</li>
        <li><strong>Erro no display:</strong> Códigos como dE, 4E, OE, FE, dC, LE e tE indicam problemas específicos. Um técnico identifica a causa.</li>
        <li><strong>Porta travada:</strong> A porta não abre ao fim do ciclo de lavagem ou secagem.</li>
        <li><strong>Barulho e vibração:</strong> Ruído forte ou balanço excessivo costuma envolver amortecedores e suspensão.</li>
        <li><strong>Vazamento de água:</strong> Água saindo pela gaveta de sabão ou pela borracha da porta (fole).</li>
        <li><strong>Não liga ou para no meio do ciclo:</strong> Pode envolver placa de potência, sensores ou termostato.</li>
      </ul>
      <p style="margin-top: 16px;">
        <a href="${WHATSAPP_URL}" data-location="problemas" style="color: #25d366; font-weight: bold; text-decoration: underline;">Falar com um técnico no WhatsApp sobre o defeito →</a>
      </p>
    </section>

    <!-- 5.5 Como funciona o atendimento -->
    <section id="como-funciona" style="background: #0e0e14; border-top: 1px solid #1a1a24; border-bottom: 1px solid #1a1a24; padding: 40px 16px;">
      <div style="max-width: 1100px; margin: 0 auto;">
        <h2 style="font-size: 1.6rem; color: #fff; margin-bottom: 20px;">Como funciona</h2>
        <ol style="color: #ccc; line-height: 1.8; font-size: 15px;">
          <li><strong>1. Chame no WhatsApp:</strong> Conte o problema e a marca da sua lava e seca.</li>
          <li><strong>2. Agendamos a visita:</strong> O técnico vai até a sua casa em Caxias do Sul ou região.</li>
          <li><strong>3. Conserto com garantia:</strong> Diagnóstico no local e reparo com peças adequadas.</li>
        </ol>
        <div style="margin-top: 24px;">
          <a href="${WHATSAPP_URL}" data-location="como-funciona" style="background: #25d366; color: #000; padding: 12px 24px; border-radius: 10px; font-weight: bold; text-decoration: none; display: inline-block;">Agendar visita pelo WhatsApp</a>
        </div>
      </div>
    </section>

    <!-- 5.6 Marcas atendidas -->
    <section id="marcas" style="max-width: 1100px; margin: 0 auto; padding: 40px 16px;">
      <h2 style="font-size: 1.6rem; color: #fff; margin-bottom: 12px;">Marcas de lava e seca que atendemos</h2>
      <p style="color: #ccc; font-size: 15px;">Atendemos Samsung, LG e Electrolux.</p>
    </section>

    <!-- 5.7 Peças e reparos mais comuns -->
    <section id="reparos" style="background: #0e0e14; border-top: 1px solid #1a1a24; border-bottom: 1px solid #1a1a24; padding: 40px 16px;">
      <div style="max-width: 1100px; margin: 0 auto;">
        <h2 style="font-size: 1.6rem; color: #fff; margin-bottom: 16px;">Reparos mais realizados em lava e seca</h2>
        <ul style="color: #ccc; line-height: 1.8; font-size: 15px;">
          <li>Duto de secagem</li>
          <li>Resistência de aquecimento</li>
          <li>Termostatos</li>
          <li>Placas de potência</li>
          <li>Amortecedores e suspensão</li>
          <li>Borracha da porta (fole)</li>
          <li>Travas de porta</li>
        </ul>
        <p style="color: #aaa; font-size: 14px; margin-top: 12px;">Tecnologia Inverter e sistemas de secagem.</p>
      </div>
    </section>

    <!-- 5.8 Região atendida -->
    <section id="regiao" style="max-width: 1100px; margin: 0 auto; padding: 40px 16px;">
      <h2 style="font-size: 1.6rem; color: #fff; margin-bottom: 12px;">Atendimento em Caxias do Sul e região</h2>
      <p style="color: #ccc; font-size: 15px; line-height: 1.6;">
        Atendemos Caxias do Sul, Farroupilha e Flores da Cunha, com sede no bairro Marechal Floriano.
      </p>
    </section>

    <!-- 5.9 Perguntas frequentes (FAQ) -->
    <section id="faq" style="background: #0e0e14; border-top: 1px solid #1a1a24; border-bottom: 1px solid #1a1a24; padding: 40px 16px;">
      <div style="max-width: 800px; margin: 0 auto;">
        <h2 style="font-size: 1.6rem; color: #fff; margin-bottom: 24px;">Perguntas frequentes sobre conserto de lava e seca</h2>
        
        <details style="margin-bottom: 14px; background: #14141d; padding: 14px; border-radius: 8px; border: 1px solid #222;">
          <summary style="font-weight: bold; color: #fff; cursor: pointer;">Minha lava e seca não seca as roupas. O que pode ser?</summary>
          <p style="color: #ccc; margin-top: 10px; line-height: 1.6;">As causas mais comuns são duto de secagem obstruído, resistência de aquecimento com defeito ou problema em sensor e termostato. Só o diagnóstico no local confirma a causa.</p>
        </details>

        <details style="margin-bottom: 14px; background: #14141d; padding: 14px; border-radius: 8px; border: 1px solid #222;">
          <summary style="font-weight: bold; color: #fff; cursor: pointer;">O que significam os códigos de erro dE, 4E e OE?</summary>
          <p style="color: #ccc; margin-top: 10px; line-height: 1.6;">Cada marca usa códigos diferentes, e eles costumam indicar porta, abastecimento de água ou drenagem. Envie uma foto do display pelo WhatsApp que o técnico orienta.</p>
        </details>

        <details style="margin-bottom: 14px; background: #14141d; padding: 14px; border-radius: 8px; border: 1px solid #222;">
          <summary style="font-weight: bold; color: #fff; cursor: pointer;">A porta da lava e seca travou. O que fazer?</summary>
          <p style="color: #ccc; margin-top: 10px; line-height: 1.6;">Não force a porta. Desligue o equipamento, aguarde alguns minutos e, se continuar travada, chame um técnico.</p>
        </details>

        <details style="margin-bottom: 14px; background: #14141d; padding: 14px; border-radius: 8px; border: 1px solid #222;">
          <summary style="font-weight: bold; color: #fff; cursor: pointer;">Vocês atendem em casa?</summary>
          <p style="color: #ccc; margin-top: 10px; line-height: 1.6;">Sim, atendemos a domicílio em Caxias do Sul, Farroupilha e Flores da Cunha.</p>
        </details>

        <details style="margin-bottom: 14px; background: #14141d; padding: 14px; border-radius: 8px; border: 1px solid #222;">
          <summary style="font-weight: bold; color: #fff; cursor: pointer;">Quanto custa o conserto?</summary>
          <!-- CONFIRMAR COM CLIENTE: [VALOR_ORCAMENTO] -->
          <p style="color: #ccc; margin-top: 10px; line-height: 1.6;">O valor depende do defeito e das peças. Envie o modelo e o problema pelo WhatsApp para receber um orçamento rápido.</p>
        </details>

        <details style="margin-bottom: 14px; background: #14141d; padding: 14px; border-radius: 8px; border: 1px solid #222;">
          <summary style="font-weight: bold; color: #fff; cursor: pointer;">O serviço tem garantia?</summary>
          <!-- CONFIRMAR COM CLIENTE: [GARANTIA] -->
          <p style="color: #ccc; margin-top: 10px; line-height: 1.6;">Sim, o serviço é realizado com garantia. Pergunte as condições pelo WhatsApp.</p>
        </details>

        <details style="margin-bottom: 14px; background: #14141d; padding: 14px; border-radius: 8px; border: 1px solid #222;">
          <summary style="font-weight: bold; color: #fff; cursor: pointer;">Quais marcas vocês atendem?</summary>
          <p style="color: #ccc; margin-top: 10px; line-height: 1.6;">Samsung, LG e Electrolux.</p>
        </details>

        <details style="margin-bottom: 14px; background: #14141d; padding: 14px; border-radius: 8px; border: 1px solid #222;">
          <summary style="font-weight: bold; color: #fff; cursor: pointer;">Qual o horário de atendimento?</summary>
          <p style="color: #ccc; margin-top: 10px; line-height: 1.6;">De segunda a sábado, das 08:00 às 18:30.</p>
        </details>
      </div>
    </section>

    <!-- 5.10 Chamada final -->
    <section id="final" style="max-width: 800px; margin: 40px auto; padding: 30px 16px; text-align: center; background: #14141d; border-radius: 12px; border: 1px solid #333;">
      <h2 style="font-size: 1.8rem; color: #fff; margin-bottom: 12px;">Sua lava e seca parada? Fale com um técnico agora.</h2>
      <p style="color: #ccc; margin-bottom: 24px;">Atendimento a domicílio com agendamento ágil em Caxias do Sul e cidades vizinhas.</p>
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px;">
        <a href="${WHATSAPP_URL}" data-location="final" target="_blank" rel="noopener noreferrer" style="background: #25d366; color: #000; padding: 14px 28px; border-radius: 12px; font-weight: bold; font-size: 15px; text-decoration: none;">Chamar no WhatsApp</a>
        <a href="${PHONE_URL}" data-location="final" style="border: 1px solid #444; color: #eee; padding: 14px 24px; border-radius: 12px; font-size: 14px; text-decoration: none;">Ligar agora</a>
      </div>
    </section>

    <!-- 9. Rodapé enxuto (único) -->
    <footer id="rodape" style="border-top: 1px solid #222; padding: 30px 16px; text-align: center; font-size: 12px; color: #888; background: #070709;">
      <p style="color: #ccc; font-weight: bold; margin-bottom: 8px;">Energy Manutenções | CNPJ: 46.067.650/0001-55</p>
      <p style="margin-bottom: 8px;">Rua Índia Ceci, 141, Bairro Marechal Floriano, Caxias do Sul – RS, CEP 95013-120<br>Atendimento: Segunda a Sábado, das 08:00 às 18:30</p>
      <p style="margin-bottom: 12px;">
        <a href="/" style="color: #aaa; text-decoration: underline; margin-right: 12px;">Início</a>
        <a href="/contato/" style="color: #aaa; text-decoration: underline; margin-right: 12px;">Contato</a>
        <a href="/politica-de-privacidade/" style="color: #aaa; text-decoration: underline;">Política de Privacidade</a>
      </p>
      <p style="color: #777;">Atendimento a domicílio em Caxias do Sul, Farroupilha e Flores da Cunha.</p>
    </footer>
  `;
}

function buildCrawlableBody(route: StaticRoute): string {
  const breadcrumbLinks = route.breadcrumbs
    .map(b => `<a href="${b.url}" style="color: #d4af37; text-decoration: underline;">${b.name}</a>`)
    .join(' <span style="color: #666;">/</span> ');

  return `
    <header style="padding: 1.25rem 1rem; text-align: center; border-bottom: 1px solid #222; background: #0e0e12;">
      <p style="font-size: 0.85rem; color: #d4af37; margin: 0 0 0.5rem 0;">
        ★ 4.9 no Google (+850 avaliações de clientes) | Atendimento em Caxias do Sul, Farroupilha e Flores da Cunha
      </p>
      <div style="font-size: 1.25rem; font-weight: bold; color: #fff;">
        <a href="/" style="color: #fff; text-decoration: none;">Energy Manutenções</a>
      </div>
      <p style="margin: 0.25rem 0 0.5rem 0; color: #bbb; font-size: 0.85rem;">
        Telefone / WhatsApp: <a href="https://wa.me/5554991796080" style="color: #d4af37; font-weight: bold;">(54) 99179-6080</a>
      </p>
    </header>

    <main style="max-width: 960px; margin: 0 auto; padding: 2rem 1rem; color: #ddd; line-height: 1.7;">
      <nav aria-label="Breadcrumb" style="font-size: 0.85rem; margin-bottom: 1.5rem; color: #888;">
        ${breadcrumbLinks}
      </nav>

      <h1 style="font-size: 2rem; color: #fff; margin-bottom: 1.25rem; line-height: 1.3;">
        ${route.h1}
      </h1>

      <div style="font-size: 1.05rem; color: #ccc;">
        ${route.contentHtml}
      </div>

      <div style="margin: 2.5rem 0; padding: 1.5rem; background: #14141c; border: 1px solid #d4af37; border-radius: 8px; text-align: center;">
        <h3 style="color: #fff; margin-top: 0;">Precisa de Atendimento ou Orçamento?</h3>
        <p style="color: #bbb; margin-bottom: 1.25rem;">
          Atendimento a domicílio com agendamento ágil em Caxias do Sul e cidades vizinhas.
        </p>
        <a href="https://wa.me/5554991796080" style="display: inline-block; background: #25d366; color: #000; padding: 0.85rem 1.75rem; border-radius: 9999px; font-weight: bold; text-decoration: none; font-size: 1rem;">
          Falar no WhatsApp: (54) 99179-6080
        </a>
      </div>

      <h2 style="font-size: 1.25rem; color: #d4af37; margin-top: 2rem;">Principais Serviços Prestados:</h2>
      <ul style="line-height: 1.8; color: #ccc;">
        <li><a href="/conserto-geladeira-caxias-do-sul/" style="color: #f3e5ab;">Conserto de Geladeira em Caxias do Sul</a></li>
        <li><a href="/conserto-maquina-de-lavar-caxias-do-sul/" style="color: #f3e5ab;">Conserto de Máquina de Lavar em Caxias do Sul</a></li>
        <li><a href="/conserto-lava-e-seca-caxias-do-sul/" style="color: #f3e5ab;">Conserto de Lava e Seca em Caxias do Sul</a></li>
        <li><a href="/conserto-secadora-caxias-do-sul/" style="color: #f3e5ab;">Conserto de Secadora de Roupas</a></li>
        <li><a href="/conserto-freezer-caxias-do-sul/" style="color: #f3e5ab;">Conserto de Freezer</a></li>
        <li><a href="/conserto-micro-ondas-caxias-do-sul/" style="color: #f3e5ab;">Conserto de Micro-ondas</a></li>
        <li><a href="/conserto-forno-eletrico-caxias-do-sul/" style="color: #f3e5ab;">Conserto de Forno Elétrico</a></li>
        <li><a href="/conserto-lava-loucas-caxias-do-sul/" style="color: #f3e5ab;">Conserto de Lava-louças</a></li>
      </ul>

      <h2 style="font-size: 1.25rem; color: #d4af37; margin-top: 2rem;">Cidades Atendidas:</h2>
      <p style="color: #ccc;">
        <a href="/caxias-do-sul/" style="color: #f3e5ab; margin-right: 1.5rem;">Caxias do Sul (Sede Marechal Floriano)</a>
        <a href="/farroupilha/" style="color: #f3e5ab; margin-right: 1.5rem;">Farroupilha</a>
        <a href="/flores-da-cunha/" style="color: #f3e5ab;">Flores da Cunha</a>
      </p>

      <footer style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid #222; font-size: 0.8rem; color: #888;">
        <p><strong>Energy Manutenções</strong> | Eduardo Borges Baumgarten | CNPJ: 46.067.650/0001-55</p>
        <p>Endereço: Rua Índia Ceci, 141, Bairro Marechal Floriano, Caxias do Sul – RS, CEP 95013-120</p>
        <p>Atendimento: Segunda a Sábado das 08:00 às 18:30 | Contato: (54) 99179-6080</p>
        <p style="margin-top: 0.75rem;">
          <a href="/servicos/" style="color: #aaa; margin-right: 1rem;">Serviços</a>
          <a href="/marcas/" style="color: #aaa; margin-right: 1rem;">Marcas</a>
          <a href="/eletrodomesticos-seminovos/" style="color: #aaa; margin-right: 1rem;">Seminovos</a>
          <a href="/sobre/" style="color: #aaa; margin-right: 1rem;">Sobre Nós</a>
          <a href="/faq/" style="color: #aaa; margin-right: 1rem;">FAQ</a>
          <a href="/blog/" style="color: #aaa; margin-right: 1rem;">Blog</a>
          <a href="/contato/" style="color: #aaa;">Contato</a>
        </p>
      </footer>
    </main>
  `;
}

export function generateStaticHtmlFiles() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const indexHtmlPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(indexHtmlPath)) {
    console.error(`Error: ${indexHtmlPath} does not exist. Run "vite build" first.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

  console.log(`Starting static HTML pre-rendering for ${STATIC_ROUTES.length} routes...`);

  for (const route of STATIC_ROUTES) {
    const canonicalUrl = `${SITE_URL}${route.path}`;
    let html = baseHtml;

    // 1. Title
    html = html.replace(/<title>[\s\S]*?<\/title>/i, () => `<title>${route.title}</title>`);

    // 2. Meta description
    html = html.replace(
      /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      () => `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}" />`
    );

    // 3. Canonical URL
    html = html.replace(
      /<link\s+rel=["']canonical["']\s+href=["'][\s\S]*?["']\s*\/?>/i,
      () => `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // 4. OpenGraph tags
    html = html.replace(
      /<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      () => `<meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />`
    );
    html = html.replace(
      /<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      () => `<meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}" />`
    );
    html = html.replace(
      /<meta\s+property=["']og:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      () => `<meta property="og:url" content="${canonicalUrl}" />`
    );

    // 5. Twitter tags
    html = html.replace(
      /<meta\s+name=["']twitter:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      () => `<meta name="twitter:title" content="${route.title.replace(/"/g, '&quot;')}" />`
    );
    html = html.replace(
      /<meta\s+name=["']twitter:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      () => `<meta name="twitter:description" content="${route.description.replace(/"/g, '&quot;')}" />`
    );

    // 6. Schema.org JSON-LD
    const schemaJson = JSON.stringify(route.schemas, null, 2);
    html = html.replace(
      /<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i,
      () => `<script type="application/ld+json">\n${schemaJson}\n    </script>`
    );

    // 7. Inject semantic crawlable body into <div id="root">
    const crawlableBody = route.path === '/conserto-lava-e-seca-caxias-do-sul/'
      ? buildLavaESecaCrawlableBody()
      : buildCrawlableBody(route);

    html = html.replace(
      /<div\s+id=["']root["']>[\s\S]*?<\/div>/i,
      () => `<div id="root">${crawlableBody}</div>`
    );

    // Etapa 1: Limpeza técnica para /conserto-lava-e-seca-caxias-do-sul/ (remover keywords e tags de verificação vazias)
    if (route.path === '/conserto-lava-e-seca-caxias-do-sul/') {
      html = html.replace(/<meta\s+name=["']keywords["'][\s\S]*?\/?>\s*/i, '');
      html = html.replace(/<meta\s+name=["']google-site-verification["']\s+content=["']\s*["']\s*\/?>\s*/i, '');
      html = html.replace(/<meta\s+name=["']msvalidate\.01["']\s+content=["']\s*["']\s*\/?>\s*/i, '');
    }

    // 8. Write to dist${route.path}index.html
    const routeDirPath = path.join(distDir, route.path.replace(/^\//, ''));
    fs.mkdirSync(routeDirPath, { recursive: true });
    const targetFilePath = path.join(routeDirPath, 'index.html');
    fs.writeFileSync(targetFilePath, html, 'utf8');

    console.log(`Pre-rendered: ${route.path} -> ${targetFilePath}`);
  }

  // 9. Generate and write validated W3C Sitemaps (XML and Text for Bing & Google)
  const today = new Date().toISOString().split('T')[0];
  const sitemapXmlEntries = STATIC_ROUTES.map((r) => {
    const priority =
      r.path === '/'
        ? '1.0'
        : r.path === '/servicos/' ||
          r.path.includes('geladeira') ||
          r.path.includes('maquina-de-lavar') ||
          r.path.includes('lava-e-seca') ||
          r.path === '/caxias-do-sul/'
        ? '0.95'
        : r.path.startsWith('/conserto-') || r.path === '/areas-atendidas/'
        ? '0.90'
        : r.path === '/politica-de-privacidade/'
        ? '0.30'
        : '0.85';

    const changefreq =
      r.path === '/' || r.path === '/servicos/' || r.path.startsWith('/conserto-')
        ? 'weekly'
        : r.path === '/politica-de-privacidade/'
        ? 'yearly'
        : 'monthly';

    const loc = `${SITE_URL}${r.path}`;
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  }).join('\n');

  const sitemapXmlContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n${sitemapXmlEntries}\n</urlset>\n`;

  const sitemapTxtContent = STATIC_ROUTES.map((r) => `${SITE_URL}${r.path}`).join('\n') + '\n';

  // Write to dist
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXmlContent, 'utf8');
  fs.writeFileSync(path.join(distDir, 'sitemap.txt'), sitemapTxtContent, 'utf8');
  fs.writeFileSync(path.join(distDir, 'urllist.txt'), sitemapTxtContent, 'utf8');

  // Write to public for source control sync
  const publicDir = path.resolve(process.cwd(), 'public');
  if (fs.existsSync(publicDir)) {
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXmlContent, 'utf8');
    fs.writeFileSync(path.join(publicDir, 'sitemap.txt'), sitemapTxtContent, 'utf8');
    fs.writeFileSync(path.join(publicDir, 'urllist.txt'), sitemapTxtContent, 'utf8');
  }

  console.log(`Generated validated sitemap.xml, sitemap.txt, and urllist.txt with ${STATIC_ROUTES.length} URLs!`);
  console.log(`Successfully pre-rendered ${STATIC_ROUTES.length} static routes for Google Search Console & Bing Webmaster Tools!`);
}

generateStaticHtmlFiles();
