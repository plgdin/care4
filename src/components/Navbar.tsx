import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onNavigate: (tab: string, anchorId?: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  onNavigate, 
  onOpenContact 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(activeTab);

  React.useEffect(() => {
    setActiveSection(activeTab);
  }, [activeTab]);

  React.useEffect(() => {
    if (activeTab !== 'home') return;

    const handleScroll = () => {
      const categoriesEl = document.getElementById('categories-section');
      const brandsEl = document.getElementById('brands-section');
      const scrollY = window.scrollY;

      if (brandsEl && scrollY >= brandsEl.offsetTop - 200) {
        setActiveSection('brands');
      } else if (categoriesEl && scrollY >= categoriesEl.offsetTop - 200) {
        setActiveSection('categories');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const handleLinkClick = (tab: string, anchorId?: string) => {
    setMobileMenuOpen(false);
    if (anchorId === 'categories-section') {
      setActiveSection('categories');
    } else if (anchorId === 'brands-section') {
      setActiveSection('brands');
    } else {
      setActiveSection(tab);
    }
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

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    onOpenContact();
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
            src="/images/care4_logo.webp" 
            alt="Care4 Associates" 
            className="navbar-logo-img"
          />
        </button>

        {/* Desktop Nav Items */}
        <nav className="navbar-nav-desktop">
          <a
            href="/"
            className={`nav-link nav-home ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(event) => { event.preventDefault(); handleLinkClick('home'); }}
          >
            Home
          </a>
          <a
            href="/about/"
            className={`nav-link nav-about ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(event) => { event.preventDefault(); handleLinkClick('about'); }}
          >
            About Us
          </a>
          <a
            href="/#categories-section"
            className={`nav-link nav-categories ${activeSection === 'categories' ? 'active' : ''}`}
            onClick={(event) => { event.preventDefault(); handleLinkClick('home', 'categories-section'); }}
          >
            Categories
          </a>
          <a
            href="/#brands-section"
            className={`nav-link nav-brands ${activeSection === 'brands' ? 'active' : ''}`}
            onClick={(event) => { event.preventDefault(); handleLinkClick('home', 'brands-section'); }}
          >
            Brands
          </a>
          <a
            href="/products/"
            className={`nav-link nav-products ${activeSection === 'products' ? 'active' : ''}`}
            onClick={(event) => { event.preventDefault(); handleLinkClick('products'); }}
          >
            Product Catalogue
          </a>
          <button 
            className="btn-quote nav-contact"
            onClick={handleContactClick}
          >
            Contact Us
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
          <a
            href="/"
            className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(event) => { event.preventDefault(); handleLinkClick('home'); }}
          >
            Home
          </a>
          <a
            href="/about/"
            className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(event) => { event.preventDefault(); handleLinkClick('about'); }}
          >
            About Us
          </a>
          <a
            href="/#categories-section"
            className={`mobile-nav-link ${activeSection === 'categories' ? 'active' : ''}`}
            onClick={(event) => { event.preventDefault(); handleLinkClick('home', 'categories-section'); }}
          >
            Categories
          </a>
          <a
            href="/#brands-section"
            className={`mobile-nav-link ${activeSection === 'brands' ? 'active' : ''}`}
            onClick={(event) => { event.preventDefault(); handleLinkClick('home', 'brands-section'); }}
          >
            Brands
          </a>
          <a
            href="/products/"
            className={`mobile-nav-link ${activeSection === 'products' ? 'active' : ''}`}
            onClick={(event) => { event.preventDefault(); handleLinkClick('products'); }}
          >
            Product Catalogue
          </a>
          <button 
            className="btn-quote mobile-quote-btn"
            onClick={handleContactClick}
          >
            Contact Us
          </button>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          height: 84px;
          background: #ffffff;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 0 0 18px 18px;
          box-shadow: 0 8px 22px rgba(15, 28, 45, 0.06);
          z-index: 1000;
          display: flex;
          align-items: center;
        }
        .navbar-container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }
        .navbar-brand {
          display: flex;
          align-items: center;
          padding: 0;
          background: transparent;
        }
        .navbar-logo-img {
          height: 64px;
          width: auto;
          object-fit: contain;
          transition: transform var(--transition-fast);
        }
        .navbar-brand:hover .navbar-logo-img {
          transform: scale(1.02);
        }
        .navbar-nav-desktop {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(18px, 2.4vw, 38px);
        }
        .navbar-nav-desktop .nav-home { order: 1; }
        .navbar-nav-desktop .nav-categories { order: 2; }
        .navbar-nav-desktop .nav-brands { order: 3; }
        .navbar-nav-desktop .nav-products { order: 4; }
        .navbar-nav-desktop .nav-about { order: 5; }
        .navbar-nav-desktop .nav-contact { order: 6; }
        .nav-link {
          display: inline-flex;
          text-decoration: none;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 18px;
          letter-spacing: -0.01em;
          color: var(--color-navy-dark);
          transition: color var(--transition-fast);
          padding: 8px 0;
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
          font-size: 17px;
          padding: 13px 30px;
          border-radius: 8px;
          transition: background-color var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast);
          box-shadow: 0 2px 10px rgba(201, 42, 42, 0.2);
        }
        .btn-quote:hover {
          background-color: var(--color-accent-red-hover);
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(201, 42, 42, 0.3);
        }
        @media (min-width: 901px) and (max-width: 1120px) {
          .navbar-container { padding: 0 20px; gap: 20px; }
          .navbar-logo-img { height: 58px; }
          .navbar-nav-desktop { gap: 18px; }
          .nav-link { font-size: 16px; }
          .btn-quote { padding: 12px 20px; font-size: 15px; }
        }
        .mobile-menu-btn {
          display: none;
          color: var(--color-navy-dark);
        }
        .mobile-drawer {
          position: absolute;
          top: 84px;
          left: 0;
          right: 0;
          background: #ffffff;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          box-shadow: var(--shadow-dropdown);
          border-bottom: 1px solid var(--color-border);
        }
        .mobile-nav-link {
          display: block;
          text-align: left;
          font-size: 18px;
          font-weight: 600;
          color: var(--color-navy-dark);
          padding: 8px 0;
          text-decoration: none;
        }
        .mobile-nav-link.active {
          color: var(--color-accent-red);
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
