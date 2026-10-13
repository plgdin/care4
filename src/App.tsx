import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ContactModal } from './components/ContactModal';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'products' | 'about' | 'contact'>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedQuoteProduct, setSelectedQuoteProduct] = useState<string | undefined>(undefined);

  const handleOpenQuote = (productName?: string) => {
    setSelectedQuoteProduct(productName);
    setQuoteModalOpen(true);
  };

  const handleOpenContact = () => {
    setContactModalOpen(true);
  };

  // Sync with browser URL hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'products' || hash === 'about') {
        setActiveTab(hash);
      } else if (hash === 'contact') {
        setContactModalOpen(true);
      } else if (hash === 'home' || hash === '') {
        setActiveTab('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (tab: string, anchorId?: string) => {
    if (tab === 'contact') {
      setContactModalOpen(true);
      return;
    }
    if (tab === 'home' || tab === 'products' || tab === 'about') {
      setActiveTab(tab as any);
      window.location.hash = tab;
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
        onOpenQuote={() => handleOpenQuote()} 
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
        />
      )}

      {activeTab === 'about' && (
        <AboutPage 
          onOpenQuote={() => handleOpenQuote()} 
          onNavigateHome={() => handleNavigate('home')} 
        />
      )}

      {activeTab === 'contact' && (
        <ContactPage 
          onNavigateHome={() => handleNavigate('home')} 
        />
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
