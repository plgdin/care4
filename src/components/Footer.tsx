import React from 'react';

interface FooterProps {
  onNavClick?: (tab: 'home' | 'products' | 'about') => void;
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenContact }) => {
  const socials = [
    { label: 'in', title: 'LinkedIn', href: '#' },
    { label: 'x', title: 'X / Twitter', href: '#' },
    { label: 'gh', title: 'GitHub', href: '#' },
    { label: 'fb', title: 'Facebook', href: '#' },
  ];

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        padding: '64px 0 40px',
        backgroundColor: 'var(--bg-main)',
      }}
    >
      <div className="container">
        {/* Main Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 2' }} className="footer-brand-col">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '14px',
                cursor: 'pointer',
              }}
              onClick={() => onNavClick && onNavClick('home')}
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
              <span style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-primary)' }}>
                Care4 Associates
              </span>
            </div>

            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '280px',
                marginBottom: '20px',
              }}
            >
              Calm, all-in-one project management for teams that ship exceptional products.
            </p>

            {/* Social chips */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.title}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#EDE9E1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    textTransform: 'lowercase',
                    transition: 'all 0.15s ease',
                    border: '1px solid rgba(0,0,0,0.04)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--text-primary)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#EDE9E1';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4
              style={{
                fontSize: '11px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--text-primary)',
                marginBottom: '16px',
              }}
            >
              Product
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button
                  onClick={() => onNavClick && onNavClick('home')}
                  style={{ fontSize: '13px', color: 'var(--text-secondary)' }}
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick && onNavClick('home')}
                  style={{ fontSize: '13px', color: 'var(--text-secondary)' }}
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick && onNavClick('products')}
                  style={{ fontSize: '13px', color: 'var(--text-secondary)' }}
                >
                  Pricing & Plans
                </button>
              </li>
              <li>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Changelog</span>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4
              style={{
                fontSize: '11px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--text-primary)',
                marginBottom: '16px',
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button
                  onClick={() => onNavClick && onNavClick('about')}
                  style={{ fontSize: '13px', color: 'var(--text-secondary)' }}
                >
                  About Us
                </button>
              </li>
              <li>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Careers</span>
              </li>
              <li>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Press</span>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  style={{ fontSize: '13px', color: 'var(--text-secondary)' }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4
              style={{
                fontSize: '11px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--text-primary)',
                marginBottom: '16px',
              }}
            >
              Resources
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Documentation</span></li>
              <li><span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Guides</span></li>
              <li><span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>API Reference</span></li>
              <li><span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>System Status</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Subfooter */}
        <div
          style={{
            borderTop: '1px solid rgba(0, 0, 0, 0.06)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '12px',
            color: 'var(--text-muted)',
          }}
        >
          <div>© {new Date().getFullYear()} Care4 Associates. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Privacy</span>
            <span>·</span>
            <span>Terms</span>
            <span>·</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-brand-col {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </footer>
  );
};
