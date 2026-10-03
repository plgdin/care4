import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (tab: string, anchorId?: string) => {
    setMobileMenuOpen(false);
    if (anchorId && activeTab === 'home') {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    onNavigate(tab);
    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo */}
        <button 
          className="navbar-brand" 
          onClick={() => handleLinkClick('home')}
          aria-label="Care4 Associates Home"
        >
          <img 
            src="/images/care4_logo.png" 
            alt="Care4 Associates" 
            className="navbar-logo-img"
          />
        </button>

        {/* Desktop Nav Items */}
        <nav className="navbar-nav-desktop">
          <button 
            className={`nav-link ${activeTab === 'categories' ? 'active' : ''}`}
            onClick={() => handleLinkClick('home', 'categories-section')}
          >
            Categories
          </button>
          <button 
            className={`nav-link ${activeTab === 'brands' ? 'active' : ''}`}
            onClick={() => handleLinkClick('home', 'brands-section')}
          >
            Brands
          </button>
          <button 
            className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            About Us
          </button>
          <button 
            className={`nav-link ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => handleLinkClick('products')}
          >
            Product Catalog
          </button>
          <button 
            className="btn-quote"
            onClick={onOpenQuote}
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <button 
            className="mobile-nav-link"
            onClick={() => handleLinkClick('home', 'categories-section')}
          >
            Categories
          </button>
          <button 
            className="mobile-nav-link"
            onClick={() => handleLinkClick('home', 'brands-section')}
          >
            Brands
          </button>
          <button 
            className="mobile-nav-link"
            onClick={() => handleLinkClick('about')}
          >
            About Us
          </button>
          <button 
            className="mobile-nav-link"
            onClick={() => handleLinkClick('products')}
          >
            Product Catalog
          </button>
          <button 
            className="btn-quote mobile-quote-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
          >
            Get a Quote
          </button>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: #ffffff;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          z-index: 1000;
          display: flex;
          align-items: center;
        }
        .navbar-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-brand {
          display: flex;
          align-items: center;
          padding: 0;
          background: transparent;
        }
        .navbar-logo-img {
          height: 44px;
          width: auto;
          object-fit: contain;
        }
        .navbar-nav-desktop {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-link {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 14px;
          color: var(--color-navy-dark);
          transition: color var(--transition-fast);
          padding: 6px 0;
          position: relative;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--color-accent-red);
        }
        .btn-quote {
          background-color: var(--color-accent-red);
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 14px;
          padding: 10px 22px;
          border-radius: var(--radius-xs);
          transition: background-color var(--transition-fast), transform var(--transition-fast);
        }
        .btn-quote:hover {
          background-color: var(--color-accent-red-hover);
          transform: translateY(-1px);
        }
        .mobile-menu-btn {
          display: none;
          color: var(--color-navy-dark);
        }
        .mobile-drawer {
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          background: #ffffff;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: var(--shadow-dropdown);
          border-bottom: 1px solid var(--color-border);
        }
        .mobile-nav-link {
          text-align: left;
          font-size: 16px;
          font-weight: 600;
          color: var(--color-navy-dark);
          padding: 8px 0;
        }
        .mobile-quote-btn {
          text-align: center;
          margin-top: 8px;
        }
        @media (max-width: 900px) {
          .navbar-container {
            padding: 0 20px;
          }
          .navbar-nav-desktop {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};
