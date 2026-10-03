import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal, EnquiryContext } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { AboutPage } from './pages/AboutPage';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'products' | 'about'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('crockery');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteContext, setQuoteContext] = useState<EnquiryContext | null>(null);

  // Sync with browser URL hash if present
  useEffect(() => {
    const handleHash = () => {
      const rawHash = window.location.hash.replace('#', '');
      const [tab, query] = rawHash.split('?');
      if (tab === 'products') {
        setActiveTab('products');
        if (query) {
          const params = new URLSearchParams(query);
          const cat = params.get('category');
          if (cat) setSelectedCategory(cat);
        }
      } else if (tab === 'about') {
        setActiveTab('about');
      } else if (tab === 'home' || tab === '') {
        setActiveTab('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenQuote = (context?: EnquiryContext) => {
    setQuoteContext(context || null);
    setQuoteModalOpen(true);
  };

  const handleNavigate = (tab: string, anchorOrCatId?: string) => {
    if (tab === 'home' || tab === 'products' || tab === 'about') {
      setActiveTab(tab);
      if (tab === 'products' && anchorOrCatId && !anchorOrCatId.includes('-section')) {
        setSelectedCategory(anchorOrCatId);
        window.location.hash = `products?category=${anchorOrCatId}`;
      } else {
        window.location.hash = tab;
      }

      if (anchorOrCatId && anchorOrCatId.includes('-section')) {
        setTimeout(() => {
          const el = document.getElementById(anchorOrCatId);
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
      />

      {activeTab === 'home' && (
        <HomePage 
          onNavigate={handleNavigate} 
          onOpenQuote={() => handleOpenQuote()} 
        />
      )}

      {activeTab === 'products' && (
        <ProductPage 
          selectedCategoryId={selectedCategory}
          onSelectCategory={(catId) => {
            setSelectedCategory(catId);
            window.location.hash = `products?category=${catId}`;
          }}
          onOpenQuote={handleOpenQuote} 
        />
      )}

      {activeTab === 'about' && (
        <AboutPage 
          onOpenQuote={() => handleOpenQuote()} 
          onNavigateHome={() => handleNavigate('home')} 
        />
      )}

      <Footer 
        onNavigate={handleNavigate} 
        onOpenQuote={() => handleOpenQuote()} 
      />

      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => {
          setQuoteModalOpen(false);
          setQuoteContext(null);
        }} 
        initialContext={quoteContext}
      />
    </div>
  );
};

export default App;
