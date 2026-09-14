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
  description: 'Manutenção e assistência técnica de eletrodomésticos em Caxias do Sul e região.',
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

  defaultWhatsAppMessage: 'Olá! Vi seu contato no Google e gostaria de solicitar um atendimento técnico.',

  contact: {
    phone: '(54) 99179-6080',
    whatsapp: '(54) 99179-6080',
    rawPhone: '5554991796080',
    defaultWhatsAppUrl: 'https://wa.me/5554991796080?text=Ol%C3%A1!%20Vi%20seu%20contato%20no%20Google%20e%20gostaria%20de%20solicitar%20um%20atendimento%20t%C3%A9cnico.',
  },

  reputation: {
    googleRating: '4.9',
    reviewCount: 850,
    reviewCountText: '+850',
    reviewCountDescription: 'Mais de 850 avaliações no Google com nota 4.9',
    badgeText: 'Mais de 850 avaliações no Google com nota 4.9',
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

  brandNotice: 'A Energy Manutenções atende equipamentos de diferentes fabricantes, com destaque para marcas como Samsung, LG, Electrolux, Brastemp e Consul. Não atuamos como assistência técnica autorizada exclusiva de nenhuma fabricante.',

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
    const message = customText && customText.trim() !== ''
      ? customText
      : COMPANY.defaultWhatsAppMessage;
    return `https://wa.me/5554991796080?text=${encodeURIComponent(message)}`;
  }
};
