import { LocationItem } from '../types';

export const LOCATIONS_DATA: LocationItem[] = [
  {
    id: 'caxias-do-sul',
    slug: 'caxias-do-sul',
    path: '/caxias-do-sul/',
    cityName: 'Caxias do Sul',
    state: 'RS',
    h1: 'Assistência técnica de eletrodomésticos em Caxias do Sul',
    title: 'Assistência Técnica de Eletrodomésticos em Caxias do Sul | Energy',
    metaDescription: 'Conserto de geladeiras, máquinas de lavar, lava e seca e eletrodomésticos em Caxias do Sul. Atendimento a domicílio. WhatsApp.',
    distanceInfo: 'Sede da Energy Manutenções no bairro Marechal Floriano',
    serviceTypes: [
      'Conserto de Geladeira (Duplex, Inverse, Frost Free)',
      'Conserto de Máquina de Lavar',
      'Conserto de Lava e Seca',
      'Conserto de Secadora de Roupas',
      'Conserto de Freezer',
      'Conserto de Micro-ondas e Forno Elétrico',
      'Conserto de Lava-louças, Frigobar e Adega'
    ],
    coverageDetails: 'Atendimento presencial em bairros de Caxias do Sul como Marechal Floriano, Centro, São Pelegrino, Pio X, Panazzolo, Cruzeiro, Santa Catarina, Lourdes, Rio Branco, Villagio Iguatemi e regiões adjacentes mediante agendamento.',
    whatsappMessage: 'Olá! Gostaria de agendar assistência técnica para meu eletrodoméstico em Caxias do Sul.',
    faqs: [
      {
        question: 'Onde fica a sede da Energy Manutenções em Caxias do Sul?',
        answer: 'Nossa sede está localizada na Rua Índia Ceci, 141, Bairro Marechal Floriano, Caxias do Sul – RS, CEP 95013-120.'
      },
      {
        question: 'Como funciona o agendamento em Caxias do Sul?',
        answer: 'Você entra em contato pelo WhatsApp (54) 99179-6080, relata o defeito do seu equipamento e combinamos o melhor horário para atendimento a domicílio.'
      },
      {
        question: 'Existe taxa para visita técnica em Caxias do Sul?',
        answer: 'Quando é necessária uma visita e o serviço não é realizado, poderá haver cobrança referente ao deslocamento e diagnóstico. Quando o conserto é aprovado e realizado no momento da visita, essa taxa é isenta, conforme as condições da empresa.'
      }
    ]
  },
  {
    id: 'farroupilha',
    slug: 'farroupilha',
    path: '/farroupilha/',
    cityName: 'Farroupilha',
    state: 'RS',
    h1: 'Assistência técnica de eletrodomésticos em Farroupilha',
    title: 'Assistência Técnica de Eletrodomésticos em Farroupilha | Energy',
    metaDescription: 'Assistência técnica para eletrodomésticos em Farroupilha - RS. Conserto de geladeiras, lavadoras e lava e seca a domicílio. Agende no WhatsApp.',
    distanceInfo: 'Atendimento a domicílio na cidade vizinha mediante agendamento programado',
    serviceTypes: [
      'Manutenção de Geladeiras e Freezers',
      'Conserto de Máquinas de Lavar e Lava e Seca',
      'Reparo de Secadoras e Fornos Elétricos',
      'Atendimento em micro-ondas e lava-louças'
    ],
    coverageDetails: 'Atendemos clientes residenciais e comerciais em Farroupilha – RS, com deslocamento programado e atendimento pontual diretamente no endereço do cliente.',
    whatsappMessage: 'Olá! Moro em Farroupilha e gostaria de agendar um atendimento para meu eletrodoméstico.',
    faqs: [
      {
        question: 'A Energy realiza atendimento a domicílio em Farroupilha?',
        answer: 'Sim, realizamos visitas técnicas em Farroupilha com horários previamente combinados pelo WhatsApp.'
      },
      {
        question: 'Quais eletrodomésticos são atendidos em Farroupilha?',
        answer: 'Atendemos refrigeradores, máquinas de lavar, lava e seca, secadoras, freezers, fornos elétricos, micro-ondas, adegas, frigobares e lava-louças.'
      }
    ]
  },
  {
    id: 'flores-da-cunha',
    slug: 'flores-da-cunha',
    path: '/flores-da-cunha/',
    cityName: 'Flores da Cunha',
    state: 'RS',
    h1: 'Assistência técnica de eletrodomésticos em Flores da Cunha',
    title: 'Assistência Técnica de Eletrodomésticos em Flores da Cunha | Energy',
    metaDescription: 'Conserto de geladeiras, lavadoras, lava e seca e eletrodomésticos em Flores da Cunha - RS. Atendimento a domicílio com agendamento.',
    distanceInfo: 'Atendimento técnico com rota programada em Flores da Cunha',
    serviceTypes: [
      'Conserto de Geladeiras e Refrigeradores Frost Free',
      'Manutenção de Máquinas de Lavar e Lava e Seca',
      'Conserto de Adegas Climatizadas e Freezers',
      'Reparo de Fornos Elétricos e Micro-ondas'
    ],
    coverageDetails: 'Levamos atendimento técnico especializado ao município de Flores da Cunha – RS, facilitando o conserto de aparelhos sem a necessidade de o cliente transportar eletrodomésticos pesados.',
    whatsappMessage: 'Olá! Estou em Flores da Cunha e preciso de assistência técnica para meu eletrodoméstico.',
    faqs: [
      {
        question: 'A Energy Manutenções vai até Flores da Cunha?',
        answer: 'Sim, atendemos Flores da Cunha mediante agendamento prévio. O atendimento é feito no local do cliente.'
      },
      {
        question: 'Como solicitar orçamento em Flores da Cunha?',
        answer: 'Envie uma mensagem pelo WhatsApp informando a marca, modelo e o defeito apresentado para que nossa equipe avalie previamente a situação.'
      }
    ]
  }
];

export function getLocationBySlug(slug: string): LocationItem | undefined {
  return LOCATIONS_DATA.find((l) => l.slug === slug || l.path === `/${slug}/` || l.path === slug);
}
