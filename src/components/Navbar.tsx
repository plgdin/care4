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
        backgroundColor: isScrolled ? 'rgba(245, 245, 243, 0.92)' : 'var(--bg-hero)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.25s ease',
        borderBottom: isScrolled ? '1px solid var(--border-light)' : '1px solid transparent',
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
          <img
            src="/care4-logo.png"
            alt="Care4 Logo"
            style={{
              height: '32px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
          <span
            style={{
              fontSize: '17px',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-heading)',
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
            backgroundColor: 'var(--bg-white)',
            padding: '4px',
            borderRadius: '9999px',
            gap: '4px',
            border: '1px solid var(--border-medium)',
            boxShadow: 'var(--shadow-sm)',
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
              color: activeTab === 'home' ? '#FFFFFF' : 'var(--text-secondary)',
              backgroundColor: activeTab === 'home' ? 'var(--primary-blue)' : 'transparent',
              boxShadow: activeTab === 'home' ? '0 2px 8px rgba(26, 75, 160, 0.3)' : 'none',
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
              color: activeTab === 'products' ? '#FFFFFF' : 'var(--text-secondary)',
              backgroundColor: activeTab === 'products' ? 'var(--primary-blue)' : 'transparent',
              boxShadow: activeTab === 'products' ? '0 2px 8px rgba(26, 75, 160, 0.3)' : 'none',
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
              color: activeTab === 'about' ? '#FFFFFF' : 'var(--text-secondary)',
              backgroundColor: activeTab === 'about' ? 'var(--primary-blue)' : 'transparent',
              boxShadow: activeTab === 'about' ? '0 2px 8px rgba(26, 75, 160, 0.3)' : 'none',
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
            className="btn-accent"
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
            color: 'var(--text-heading)',
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
            backgroundColor: 'var(--bg-white)',
            borderRadius: '20px',
            padding: '20px',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border-medium)',
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
              backgroundColor: activeTab === 'home' ? 'var(--accent-blue-light)' : 'transparent',
              color: activeTab === 'home' ? 'var(--primary-blue)' : 'var(--text-secondary)',
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
              backgroundColor: activeTab === 'products' ? 'var(--accent-blue-light)' : 'transparent',
              color: activeTab === 'products' ? 'var(--primary-blue)' : 'var(--text-secondary)',
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
              backgroundColor: activeTab === 'about' ? 'var(--accent-blue-light)' : 'transparent',
              color: activeTab === 'about' ? 'var(--primary-blue)' : 'var(--text-secondary)',
            }}
          >
            About
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenContact) onOpenContact();
            }}
            className="btn-accent"
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
