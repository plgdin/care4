import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { Footer } from './components/Footer';

export function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'products' | 'about'>('home');

  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveTab('home');
      setTimeout(() => {
        const contactEl = document.getElementById('contact-section');
        if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenContact={scrollToContact}
      />

      <div style={{ flex: 1 }}>
        {activeTab === 'home' && <HomePage onGetStarted={scrollToContact} />}
        {activeTab === 'products' && <ProductsPage />}
        {activeTab === 'about' && <AboutPage />}
      </div>

      <Footer
        onNavClick={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenContact={scrollToContact}
      />
    </div>
  );
}

export default App;
