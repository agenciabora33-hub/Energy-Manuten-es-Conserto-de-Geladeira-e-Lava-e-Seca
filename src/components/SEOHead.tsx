import React, { useEffect } from 'react';
import { SEOProps } from '../types';
import { COMPANY, getAbsoluteUrl } from '../data/company';

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath,
  robots = 'index, follow',
  ogType = 'website',
  breadcrumbs,
  jsonLd,
}) => {
  const canonicalUrl = getAbsoluteUrl(canonicalPath);

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to set or update meta tag
    const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Set standard meta tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', robots);

    // 4. Open Graph
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:locale', 'pt_BR');
    setMetaTag('property', 'og:site_name', COMPANY.tradeName);
    setMetaTag('property', 'og:image', getAbsoluteUrl(COMPANY.logoUrl));

    // 5. Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', getAbsoluteUrl(COMPANY.logoUrl));

    // 6. Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 7. Favicon link
    let linkFavicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
    if (linkFavicon) {
      linkFavicon.setAttribute('href', '/favicon.png');
    }

    // 7. Inject Structured Data JSON-LD
    const baseLocalBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: COMPANY.tradeName,
      legalName: COMPANY.tradeName,
      description: COMPANY.description,
      url: getAbsoluteUrl('/'),
      telephone: COMPANY.contact.phone,
      image: getAbsoluteUrl(COMPANY.logoUrl),
      logo: getAbsoluteUrl(COMPANY.logoUrl),
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY.address.street,
        addressLocality: COMPANY.address.city,
        addressRegion: COMPANY.address.state,
        postalCode: COMPANY.address.postalCode,
        addressCountry: COMPANY.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: COMPANY.address.geo.latitude,
        longitude: COMPANY.address.geo.longitude,
      },
      areaServed: COMPANY.confirmedAreas.map((area) => ({
        '@type': 'City',
        name: area.name,
      })),
    };

    const schemasToInject: Record<string, unknown>[] = [baseLocalBusinessSchema];

    // Add BreadcrumbList Schema if present
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemasToInject.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: getAbsoluteUrl(crumb.url),
        })),
      });
    }

    // Add custom page schemas if provided
    if (jsonLd) {
      if (Array.isArray(jsonLd)) {
        schemasToInject.push(...jsonLd);
      } else {
        schemasToInject.push(jsonLd);
      }
    }

    const scriptId = 'seo-structured-data-jsonld';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(schemasToInject);
  }, [title, description, canonicalUrl, robots, ogType, breadcrumbs, jsonLd]);

  return null;
};
