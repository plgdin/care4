import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string, anchorId?: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Top Call to Action Box */}
        <div className="footer-cta-card">
          <div className="cta-content">
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span>LET'S WORK TOGETHER</span>
            </div>
            <h2 className="cta-headline">
              Ready to elevate your hospitality experience?
            </h2>
            <p className="cta-subhead">
              Tell us what you need — we'll help you find the right products at the best value.
            </p>
          </div>

          <div className="cta-buttons">
            <button className="btn-cta-quote" onClick={onOpenQuote}>
              <span>Get a Quote</span>
              <ArrowRight size={15} />
            </button>
            <button className="btn-cta-contact" onClick={onOpenQuote}>
              <span>Contact Us</span>
            </button>
          </div>
        </div>

        {/* Links & Brand Section */}
        <div className="footer-nav-grid">
          {/* Col 1: Logo & Mission */}
          <div className="footer-col col-brand">
            <div className="footer-brand-header">
              <img 
                src="/images/footer_brand_logo_clean.png" 
                alt="Care4 Associates - HoReCa Supplies & Solutions" 
                className="footer-brand-logo-img" 
              />
            </div>
            <p className="footer-tagline">
              Supplying the essentials behind exceptional hospitality.
            </p>
            <div className="footer-socials">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="social-icon-btn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="social-icon-btn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => onNavigate('home')}>Home</button></li>
              <li><button onClick={() => onNavigate('products')}>Products</button></li>
              <li><button onClick={() => onNavigate('home', 'categories-section')}>Industries</button></li>
              <li><button onClick={() => onNavigate('about')}>About Us</button></li>
              <li><button onClick={onOpenQuote}>Contact</button></li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div className="footer-col">
            <h4 className="footer-col-title">Industries</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => onNavigate('home', 'categories-section')}>Hotels</button></li>
              <li><button onClick={() => onNavigate('home', 'categories-section')}>Restaurants</button></li>
              <li><button onClick={() => onNavigate('home', 'categories-section')}>Catering</button></li>
            </ul>
          </div>

          {/* Col 4: Products */}
          <div className="footer-col">
            <h4 className="footer-col-title">Products</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => onNavigate('products')}>Tableware & Crockery</button></li>
              <li><button onClick={() => onNavigate('products')}>Buffet & Banquet</button></li>
              <li><button onClick={() => onNavigate('products')}>Cleaning & Janitorial</button></li>
              <li><button onClick={() => onNavigate('products')}>Guest Amenities</button></li>
              <li><button onClick={() => onNavigate('products')}>Paper & Disposables</button></li>
              <li><button onClick={() => onNavigate('products')}>Housekeeping</button></li>
            </ul>
          </div>

          {/* Col 5: Exact Signature Hospitality refined logo */}
          <div className="footer-col col-motto">
            <div className="motto-box">
              <img 
                src="/images/hospitality_refined_clean.png" 
                alt="Hospitality refined. A cleaner. Safer. Better tomorrow." 
                className="hospitality-refined-img"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2025 Care4 Associates. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="legal-sep">|</span>
            <a href="#terms">Terms</a>
            <span className="legal-sep">|</span>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: #fafaf9;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          padding: 40px 0 20px 0;
          position: relative;
        }
        .footer-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
        }
        .footer-cta-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          padding-bottom: 26px;
          border-bottom: 1px solid #e5e7eb;
          margin-bottom: 28px;
        }
        .cta-content {
          max-width: 720px;
        }
        .footer-cta-card .section-eyebrow {
          margin-bottom: 8px;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--color-navy-dark);
        }
        .footer-cta-card .section-eyebrow-line {
          width: 22px;
          height: 2.5px;
        }
        .cta-headline {
          font-family: var(--font-heading);
          font-size: 34px;
          font-weight: 700;
          color: var(--color-navy-dark);
          line-height: 1.15;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }
        .cta-subhead {
          font-family: var(--font-body);
          font-size: 14.5px;
          color: var(--color-text-body);
          line-height: 1.5;
        }
        .cta-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .btn-cta-quote {
          background-color: var(--color-accent-red);
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 14px;
          padding: 10px 24px;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background-color var(--transition-fast), transform var(--transition-fast);
        }
        .btn-cta-quote:hover {
          background-color: var(--color-accent-red-hover);
          transform: translateY(-1px);
        }
        .btn-cta-contact {
          background-color: transparent;
          color: var(--color-navy-dark);
          border: 1.5px solid var(--color-navy-dark);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 14px;
          padding: 9.5px 24px;
          border-radius: var(--radius-full);
          transition: background-color var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
        }
        .btn-cta-contact:hover {
          background-color: var(--color-navy-dark);
          color: #ffffff;
          transform: translateY(-1px);
        }
        .footer-nav-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.25fr 1.4fr;
          gap: 32px;
          padding-bottom: 28px;
          border-bottom: 1px solid #e5e7eb;
          align-items: flex-start;
        }
        .footer-brand-header {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
        }
        .footer-brand-logo-img {
          height: 38px;
          width: auto;
          object-fit: contain;
        }
        .footer-tagline {
          font-family: var(--font-body);
          font-size: 13.5px;
          line-height: 1.5;
          color: var(--color-text-body);
          margin-bottom: 14px;
          max-width: 260px;
        }
        .footer-socials {
          display: flex;
          gap: 10px;
        }
        .social-icon-btn {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          border: 1px solid #d1d5db;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-navy-dark);
          transition: all var(--transition-fast);
        }
        .social-icon-btn:hover {
          background-color: var(--color-accent-red);
          color: #ffffff;
          border-color: var(--color-accent-red);
        }
        .footer-col-title {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          color: var(--color-navy-dark);
          margin-bottom: 12px;
        }
        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .footer-links-list button {
          font-family: var(--font-body);
          font-size: 13.5px;
          color: #64748b;
          text-align: left;
          transition: color var(--transition-fast);
          padding: 0;
          line-height: 1.4;
        }
        .footer-links-list button:hover {
          color: var(--color-accent-red);
        }
        .col-motto {
          display: flex;
          justify-content: flex-end;
        }
        .motto-box {
          border-left: 1px solid #e5e7eb;
          padding-left: 24px;
          display: flex;
          align-items: center;
        }
        .hospitality-refined-img {
          width: 100%;
          max-width: 250px;
          height: auto;
          display: block;
          object-fit: contain;
        }
        .footer-bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          padding-bottom: 6px;
          font-family: var(--font-body);
          font-size: 13px;
          color: #94a3b8;
        }
        .legal-links {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .legal-links a {
          color: #64748b;
          transition: color var(--transition-fast);
        }
        .legal-links a:hover {
          color: var(--color-accent-red);
        }
        .legal-sep {
          color: #cbd5e1;
        }
        @media (max-width: 1024px) {
          .footer-cta-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .footer-nav-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
          .motto-box {
            border-left: none;
            padding-left: 0;
          }
        }
        @media (max-width: 600px) {
          .site-footer {
            padding: 32px 0 16px 0;
          }
          .footer-container {
            padding: 0 20px;
          }
          .footer-nav-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
