import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ContactModal } from './components/ContactModal';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { AboutPage } from './pages/AboutPage';
import { LegalPage } from './pages/LegalPage';

const SITE_ORIGIN = 'https://care4associates.com';
const PAGE_METADATA = {
  home: {
    path: '/',
    title: 'Care4 Associates | Hospitality Supplies in Kerala',
    description: 'Care4 Associates supplies hotels, resorts, restaurants and hospitals across Kerala with commercial kitchen equipment, crockery, housekeeping products and guest amenities.'
  },
  products: {
    path: '/products/',
    title: 'Hospitality Supplies & Commercial Kitchen Equipment | Care4 Associates',
    description: 'Browse commercial kitchen equipment, crockery, cutlery, linen, guest amenities, housekeeping supplies and cleaning products from Care4 Associates.'
  },
  about: {
    path: '/about/',
    title: 'About Care4 Associates | Hospitality Supplier in Kerala',
    description: 'Learn about Care4 Associates, a Thiruvananthapuram-based supplier of hospitality, housekeeping and commercial kitchen products across Kerala.'
  },
  privacy: {
    path: '/privacy-policy/',
    title: 'Privacy Policy | Care4 Associates',
    description: 'Read how Care4 Associates handles contact, quotation, cookie and analytics information on this website.'
  },
  terms: {
    path: '/terms/',
    title: 'Terms of Use | Care4 Associates',
    description: 'Review the terms for using the Care4 Associates website and submitting product or quotation enquiries.'
  }
} as const;

const routeForPath = (pathname: string): keyof typeof PAGE_METADATA | null => {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  const routeMap: Record<string, keyof typeof PAGE_METADATA> = {
    '/': 'home',
    '/products': 'products',
    '/about': 'about',
    '/privacy-policy': 'privacy',
    '/terms': 'terms'
  };
  return routeMap[normalizedPath] ?? null;
};

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'products' | 'about' | 'privacy' | 'terms'>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedQuoteProduct, setSelectedQuoteProduct] = useState<string | undefined>(undefined);
  const [productFilter, setProductFilter] = useState<string | undefined>(undefined);

  const handleOpenQuote = (productName?: string) => {
    setSelectedQuoteProduct(productName);
    setQuoteModalOpen(true);
  };

  const handleOpenContact = () => {
    setContactModalOpen(true);
  };

  // Sync with browser URL hash if present
  useEffect(() => {
    const syncRoute = () => {
      const pathRoute = routeForPath(window.location.pathname);
      if (pathRoute && pathRoute !== 'home') {
        setActiveTab(pathRoute);
        return;
      }

      const hash = window.location.hash.replace('#', '');
      if (hash === 'products' || hash === 'about' || hash === 'privacy' || hash === 'terms') {
        setActiveTab(hash === 'privacy' ? 'privacy' : hash === 'terms' ? 'terms' : hash);
      } else if (hash === 'what-we-offer' || hash === 'offer') {
        setActiveTab('about');
        setTimeout(() => {
          const el = document.getElementById('what-we-offer');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (hash === 'contact') {
        setContactModalOpen(true);
      } else if (hash === 'home' || hash === '') {
        setActiveTab('home');
      } else if (pathRoute) {
        setActiveTab(pathRoute);
      }
    };
    syncRoute();
    window.addEventListener('hashchange', syncRoute);
    window.addEventListener('popstate', syncRoute);
    return () => {
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener('popstate', syncRoute);
    };
  }, []);

  useEffect(() => {
    const metadata = PAGE_METADATA[activeTab];
    const canonicalUrl = `${SITE_ORIGIN}${metadata.path}`;
    document.title = metadata.title;

    const setMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.append(element);
      }
      element.content = content;
    };

    setMeta('meta[name="description"]', 'name', 'description', metadata.description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', metadata.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', metadata.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', metadata.title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', metadata.description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.append(canonical);
    }
    canonical.href = canonicalUrl;
  }, [activeTab]);

  const handleNavigate = (tab: string, anchorId?: string, categoryOrSector?: string) => {
    if (tab === 'contact') {
      setContactModalOpen(true);
      return;
    }
    if (tab === 'home' || tab === 'products' || tab === 'about' || tab === 'privacy' || tab === 'terms') {
      setActiveTab(tab);
      const route = PAGE_METADATA[tab];
      window.history.pushState({}, '', route.path);
      if (categoryOrSector && tab === 'products') {
        setProductFilter(categoryOrSector);
      }
      if (anchorId) {
        setTimeout(() => {
          const el = document.getElementById(anchorId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="app-root">
      <Navbar 
        activeTab={activeTab} 
        onNavigate={handleNavigate} 
        onOpenContact={handleOpenContact}
      />

      {activeTab === 'home' && (
        <HomePage 
          onNavigate={handleNavigate} 
          onOpenQuote={() => handleOpenQuote()} 
        />
      )}

      {activeTab === 'products' && (
        <ProductPage 
          onOpenQuote={(prod) => handleOpenQuote(prod)} 
          initialFilter={productFilter}
          onClearInitialFilter={() => setProductFilter(undefined)}
        />
      )}

      {activeTab === 'about' && (
        <AboutPage 
          onOpenQuote={() => handleOpenQuote()} 
          onNavigateHome={() => handleNavigate('home')} 
        />
      )}

      {(activeTab === 'privacy' || activeTab === 'terms') && (
        <LegalPage type={activeTab} />
      )}

      <Footer 
        onNavigate={handleNavigate} 
        onOpenQuote={() => handleOpenQuote()} 
        onOpenContact={handleOpenContact}
      />

      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
        initialProduct={selectedQuoteProduct}
      />

      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </div>
  );
};

export default App;
