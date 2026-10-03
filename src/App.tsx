import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { AboutPage } from './pages/AboutPage';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'products' | 'about'>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // Sync with browser URL hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'products' || hash === 'about') {
        setActiveTab(hash);
      } else if (hash === 'home' || hash === '') {
        setActiveTab('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (tab: string, anchorId?: string) => {
    if (tab === 'home' || tab === 'products' || tab === 'about') {
      setActiveTab(tab);
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
        onOpenQuote={() => setQuoteModalOpen(true)} 
      />

      {activeTab === 'home' && (
        <HomePage 
          onNavigate={handleNavigate} 
          onOpenQuote={() => setQuoteModalOpen(true)} 
        />
      )}

      {activeTab === 'products' && (
        <ProductPage 
          onOpenQuote={() => setQuoteModalOpen(true)} 
        />
      )}

      {activeTab === 'about' && (
        <AboutPage 
          onOpenQuote={() => setQuoteModalOpen(true)} 
          onNavigateHome={() => handleNavigate('home')} 
        />
      )}

      <Footer 
        onNavigate={handleNavigate} 
        onOpenQuote={() => setQuoteModalOpen(true)} 
      />

      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
      />
    </div>
  );
};

export default App;
