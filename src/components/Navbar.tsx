import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeTab: 'home' | 'products' | 'about';
  setActiveTab: (tab: 'home' | 'products' | 'about') => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: 'home' | 'products' | 'about') => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        padding: '16px 24px',
        backgroundColor: isScrolled ? 'rgba(246, 243, 238, 0.85)' : 'var(--bg-main)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.25s ease',
        borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1080px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          <span
            style={{
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              backgroundColor: 'var(--text-primary)',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontSize: '17px',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}
          >
            Care4 Associates
          </span>
        </div>

        {/* Floating Center Pill Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            backgroundColor: '#EAE6DE',
            padding: '4px',
            borderRadius: '9999px',
            gap: '4px',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.04)',
          }}
          className="desktop-nav"
        >
          <button
            onClick={() => handleNavClick('home')}
            style={{
              padding: '8px 20px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: activeTab === 'home' ? 700 : 500,
              color: activeTab === 'home' ? 'var(--text-primary)' : 'var(--text-secondary)',
              backgroundColor: activeTab === 'home' ? '#FFFFFF' : 'transparent',
              boxShadow: activeTab === 'home' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.15s ease',
            }}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('products')}
            style={{
              padding: '8px 20px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: activeTab === 'products' ? 700 : 500,
              color: activeTab === 'products' ? 'var(--text-primary)' : 'var(--text-secondary)',
              backgroundColor: activeTab === 'products' ? '#FFFFFF' : 'transparent',
              boxShadow: activeTab === 'products' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.15s ease',
            }}
          >
            Products
          </button>
          <button
            onClick={() => handleNavClick('about')}
            style={{
              padding: '8px 20px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: activeTab === 'about' ? 700 : 500,
              color: activeTab === 'about' ? 'var(--text-primary)' : 'var(--text-secondary)',
              backgroundColor: activeTab === 'about' ? '#FFFFFF' : 'transparent',
              boxShadow: activeTab === 'about' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.15s ease',
            }}
          >
            About
          </button>
        </nav>

        {/* Right CTA */}
        <div style={{ display: 'none', alignItems: 'center', gap: '12px' }} className="desktop-cta">
          <button
            onClick={onOpenContact}
            className="btn-primary"
            style={{ padding: '9px 20px', fontSize: '13px' }}
          >
            Get started
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            padding: '8px',
            color: 'var(--text-primary)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="mobile-burger"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            marginTop: '16px',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '20px',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <button
            onClick={() => handleNavClick('home')}
            style={{
              textAlign: 'left',
              padding: '12px 16px',
              borderRadius: '12px',
              fontWeight: activeTab === 'home' ? 800 : 600,
              backgroundColor: activeTab === 'home' ? 'var(--bg-main)' : 'transparent',
              color: 'var(--text-primary)',
            }}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('products')}
            style={{
              textAlign: 'left',
              padding: '12px 16px',
              borderRadius: '12px',
              fontWeight: activeTab === 'products' ? 800 : 600,
              backgroundColor: activeTab === 'products' ? 'var(--bg-main)' : 'transparent',
              color: 'var(--text-primary)',
            }}
          >
            Products
          </button>
          <button
            onClick={() => handleNavClick('about')}
            style={{
              textAlign: 'left',
              padding: '12px 16px',
              borderRadius: '12px',
              fontWeight: activeTab === 'about' ? 800 : 600,
              backgroundColor: activeTab === 'about' ? 'var(--bg-main)' : 'transparent',
              color: 'var(--text-primary)',
            }}
          >
            About
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenContact) onOpenContact();
            }}
            className="btn-primary"
            style={{ marginTop: '8px', width: '100%' }}
          >
            Get started <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* Responsive CSS for nav */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-burger { display: none !important; }
        }
      `}</style>
    </header>
  );
};
