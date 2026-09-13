/**
 * DADOS OFICIAIS DA ENERGY MANUTENÇÕES
 * Regra absoluta: NÃO inventar informações.
 * Todos os dados foram extraídos do PRD oficial.
 */

export const COMPANY_DOMAIN = '{{DOMAIN}}';

export function getAbsoluteUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `https://${COMPANY_DOMAIN}${cleanPath}`;
}

export const COMPANY = {
  tradeName: 'Energy Manutenções',
  legalName: 'Eduardo Borges Baumgarten',
  cnpj: '46.067.650/0001-55',
  registrationStatus: 'Ativa',
  openingDate: '18/04/2022',
  legalNature: 'Empresário Individual',
  primaryActivity: 'Reparação e manutenção de equipamentos eletroeletrônicos de uso pessoal e doméstico.',
  description: 'Assistência técnica autorizada e manutenção de eletrodomésticos em Caxias do Sul e região.',
  logoUrl: '/logo.png',
  logoExternalUrl: 'https://i.ibb.co/VYBYP2zH/ALTA-ENETGY-400-X150.png',
  faviconUrl: '/favicon.png',
  
  address: {
    street: 'Rua Índia Ceci, 141',
    neighborhood: 'Marechal Floriano',
    city: 'Caxias do Sul',
    state: 'RS',
    stateCode: 'RS',
    postalCode: '95013-120',
    country: 'BR',
    fullFormatted: 'Rua Índia Ceci, 141, Bairro Marechal Floriano, Caxias do Sul – RS, CEP 95013-120',
    geo: {
      latitude: -29.1764,
      longitude: -51.1895
    }
  },

  contact: {
    phone: '(54) 99179-6080',
    whatsapp: '(54) 99179-6080',
    rawPhone: '5554991796080',
    defaultWhatsAppUrl: 'https://wa.me/5554991796080',
  },

  reputation: {
    googleRating: '4.9',
    reviewCountDescription: 'Centenas de avaliações no Google',
    badgeText: 'Avaliação de destaque no Google (~4.9 estrelas)',
  },

  confirmedAreas: [
    { name: 'Caxias do Sul', slug: 'caxias-do-sul', path: '/caxias-do-sul/' },
    { name: 'Farroupilha', slug: 'farroupilha', path: '/farroupilha/' },
    { name: 'Flores da Cunha', slug: 'flores-da-cunha', path: '/flores-da-cunha/' },
  ],

  confirmedBrands: [
    'Samsung',
    'LG',
    'Electrolux',
    'Brastemp',
    'Consul',
  ],

  brandNotice: 'A Energy Manutenções é uma assistência técnica autorizada e especializada no atendimento a equipamentos das principais fabricantes do mercado, como Samsung, LG, Electrolux, Brastemp e Consul.',

  paymentMethods: [
    'Dinheiro',
    'PIX',
    'Cartão de crédito',
    'Parcelamento conforme condições comerciais',
  ],

  serviceWarrantyStatement: 'As condições de garantia dos serviços seguem a legislação aplicável e as condições informadas no orçamento e/ou ordem de serviço.',

  refurbishedWarrantyStatement: '60 dias de garantia mecânica, conforme as condições comerciais informadas pela empresa.',

  technicalFeeStatement: 'Quando é necessária uma visita e o serviço não é realizado, poderá haver cobrança referente ao deslocamento e diagnóstico. Quando o conserto é aprovado e realizado no momento da visita, essa taxa é isenta, conforme as condições da empresa.',

  serviceExclusions: [
    'Não atende pequenos eletrodomésticos, incluindo Air fryer e cafeteiras.',
    'Não comercializa peças avulsas separadamente.',
  ],

  buildWhatsAppUrl(customText?: string): string {
    if (!customText) {
      return 'https://wa.me/5554991796080';
    }
    return `https://wa.me/5554991796080?text=${encodeURIComponent(customText)}`;
  }
};
