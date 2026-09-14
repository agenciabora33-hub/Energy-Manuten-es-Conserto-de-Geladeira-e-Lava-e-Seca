export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  path: string;
  name: string;
  h1: string;
  title: string;
  metaDescription: string;
  category: 'Refrigeração' | 'Lavanderia' | 'Cozinha';
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  imageUrl?: string;
  imageAlt?: string;
  commonProblems: string[];
  symptoms: string[];
  whenToCall: string[];
  diagnosticProcess: string[];
  brandsHandled: string[];
  whatsappMessage: string;
  faqs: { question: string; answer: string }[];
}

export interface LocationItem {
  id: string;
  slug: string;
  path: string;
  cityName: string;
  state: string;
  h1: string;
  title: string;
  metaDescription: string;
  distanceInfo?: string;
  serviceTypes: string[];
  coverageDetails: string;
  whatsappMessage: string;
  faqs: { question: string; answer: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  path: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  publishedDate: string;
  readTime: string;
  author: string;
  sections: {
    heading: string;
    content: string[];
  }[];
  warningTips?: string[];
  whenToSeekAssistance: string[];
  whatsappCTA: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  robots?: string;
  ogType?: string;
  ogImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}
