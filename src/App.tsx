import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { BrandsPage } from './pages/BrandsPage';
import { LocationsPage } from './pages/LocationsPage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { RefurbishedPage } from './pages/RefurbishedPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { FAQPage } from './pages/FAQPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { SERVICES_DATA } from './data/services';
import { LOCATIONS_DATA } from './data/locations';
import { BLOG_POSTS } from './data/blog';

// Helper to normalize paths (ensure trailing slash or handle root)
function normalizePath(pathname: string): string {
  if (!pathname || pathname === '') return '/';
  let p = pathname;
  // If query strings or hash exist, strip them for route matching
  p = p.split('?')[0].split('#')[0];
  if (!p.startsWith('/')) p = '/' + p;
  if (!p.endsWith('/')) p = p + '/';
  return p;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return normalizePath(window.location.pathname);
  });

  const handleNavigate = (targetPath: string) => {
    const normalized = normalizePath(targetPath);
    if (normalized !== currentPath) {
      window.history.pushState({}, '', normalized);
      setCurrentPath(normalized);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Determine which page component to render
  const renderPage = () => {
    // 1. Home
    if (currentPath === '/') {
      return <HomePage onNavigate={handleNavigate} />;
    }

    // 2. Services Index
    if (currentPath === '/servicos/') {
      return <ServicesPage onNavigate={handleNavigate} />;
    }

    // 3. Individual Service Pages
    const matchedService = SERVICES_DATA.find(
      (s) => normalizePath(s.path) === currentPath
    );
    if (matchedService) {
      return <ServiceDetailPage service={matchedService} onNavigate={handleNavigate} />;
    }

    // 4. Brands Page
    if (currentPath === '/marcas/') {
      return <BrandsPage onNavigate={handleNavigate} />;
    }

    // 5. Locations Index
    if (currentPath === '/areas-atendidas/') {
      return <LocationsPage onNavigate={handleNavigate} />;
    }

    // 6. Individual Location Pages
    const matchedLocation = LOCATIONS_DATA.find(
      (loc) => normalizePath(loc.path) === currentPath
    );
    if (matchedLocation) {
      return <LocationDetailPage location={matchedLocation} onNavigate={handleNavigate} />;
    }

    // 7. Refurbished (Seminovos) Page
    if (currentPath === '/eletrodomesticos-seminovos/') {
      return <RefurbishedPage onNavigate={handleNavigate} />;
    }

    // 8. How It Works
    if (currentPath === '/como-funciona/') {
      return <HowItWorksPage onNavigate={handleNavigate} />;
    }

    // 9. FAQ
    if (currentPath === '/faq/') {
      return <FAQPage onNavigate={handleNavigate} />;
    }

    // 10. About
    if (currentPath === '/sobre/') {
      return <AboutPage onNavigate={handleNavigate} />;
    }

    // 11. Contact
    if (currentPath === '/contato/') {
      return <ContactPage onNavigate={handleNavigate} />;
    }

    // 12. Blog Index
    if (currentPath === '/blog/') {
      return <BlogPage onNavigate={handleNavigate} />;
    }

    // 13. Individual Blog Post Pages
    const matchedBlogPost = BLOG_POSTS.find(
      (post) => normalizePath(post.path) === currentPath
    );
    if (matchedBlogPost) {
      return <BlogPostPage post={matchedBlogPost} onNavigate={handleNavigate} />;
    }

    // 14. Privacy Policy
    if (currentPath === '/politica-de-privacidade/') {
      return <PrivacyPolicyPage onNavigate={handleNavigate} />;
    }

    // 15. Fallback 404
    return <NotFoundPage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 flex flex-col font-sans selection:bg-[#d4af37] selection:text-[#0a0a0c]">
      <Header currentPath={currentPath} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppFloating />
    </div>
  );
}
