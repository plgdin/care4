import React from 'react';

export const HorecaBanner: React.FC = () => {
  return (
    <section className="horeca-section" id="horeca-section">
      <div className="horeca-container">
        <div className="horeca-card">
          {/* Left Column: Eyebrow, Logo & Description */}
          <div className="horeca-left">
            <div className="section-eyebrow horeca-eyebrow">
              <span className="section-eyebrow-line" />
              <span>OUR HORECA FOCUS</span>
            </div>

            <div className="horeca-logo-row">
              {/* Exact user-provided HO|RE|CA| Logo */}
              <div className="horeca-brand-logo">
                <img 
                  src="/images/horeca_logo.webp" 
                  alt="HO|RE|CA|" 
                  className="horeca-brand-logo-img" 
                />
              </div>

              {/* Sector Tagline */}
              <div className="horeca-sectors-inline">
                <span className="sectors-sep">|</span>
                <span>HOTELS</span>
                <span className="sectors-sep">|</span>
                <span>RESTAURANTS</span>
                <span className="sectors-sep">|</span>
                <span>CAFES</span>
                <span className="sectors-sep">|</span>
                <span>CATERING</span>
              </div>
            </div>

            <p className="horeca-description">
              ‘HORECA’ refers to Hotels, Restaurants, Cafes &amp; Catering businesses. We cater to the unique needs of the sector with products and solutions designed to keep operations efficient, hygienic and guest-ready — every day.
            </p>
          </div>

          {/* Right Column: 3 Pillars with Large Icons and Lists */}
          <div className="horeca-pillars-grid">
            {/* Pillar 1: Hotels */}
            <div className="horeca-pillar">
              <div className="pillar-icon-box">
                <img 
                  src="/images/icon_hotel_lg.webp" 
                  alt="Hotels Icon" 
                  className="pillar-icon-img" 
                />
              </div>
              <h3 className="pillar-title">Hotels</h3>
              <ul className="pillar-list">
                <li>Guest amenities</li>
                <li>Housekeeping</li>
                <li>F&B supplies</li>
                <li>Cleaning solutions</li>
              </ul>
            </div>

            <div className="pillar-divider" />

            {/* Pillar 2: Restaurants & Cafes */}
            <div className="horeca-pillar">
              <div className="pillar-icon-box">
                <img 
                  src="/images/icon_restaurant_lg.webp" 
                  alt="Restaurants & Cafes Icon" 
                  className="pillar-icon-img" 
                />
              </div>
              <h3 className="pillar-title">Restaurants &amp; Cafes</h3>
              <ul className="pillar-list">
                <li>Tableware & crockery</li>
                <li>Kitchen equipment</li>
                <li>Buffet & serving</li>
                <li>Cleaning products</li>
              </ul>
            </div>

            <div className="pillar-divider" />

            {/* Pillar 3: Catering */}
            <div className="horeca-pillar">
              <div className="pillar-icon-box">
                <img 
                  src="/images/icon_catering_lg.webp" 
                  alt="Catering Icon" 
                  className="pillar-icon-img" 
                />
              </div>
              <h3 className="pillar-title">Catering</h3>
              <ul className="pillar-list">
                <li>Event supplies</li>
                <li>Disposables</li>
                <li>Buffet solutions</li>
                <li>Logistics support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .horeca-section {
          background-color: #ffffff;
          padding: 40px 0 64px 0;
        }
        .horeca-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
        }
        .horeca-card {
          width: 100%;
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 6px 28px rgba(0, 0, 0, 0.05);
          padding: 40px 44px;
          display: grid;
          grid-template-columns: 0.95fr 1.6fr;
          gap: 36px;
          align-items: center;
        }
        .horeca-left {
          display: flex;
          flex-direction: column;
          max-width: 520px;
        }
        .horeca-eyebrow {
          margin-bottom: 14px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }
        .horeca-logo-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }
        /* Exact user-provided HoReCa Logo */
        .horeca-brand-logo {
          display: inline-flex;
          align-items: center;
        }
        .horeca-brand-logo-img {
          height: 54px;
          width: auto;
          display: block;
          object-fit: contain;
        }
        .horeca-sectors-inline {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #64748b;
        }
        .sectors-sep {
          color: #cbd5e1;
          font-weight: 400;
        }
        .horeca-description {
          font-family: var(--font-body);
          font-size: 15.5px;
          line-height: 1.6;
          color: var(--color-text-secondary);
        }
        /* Right Pillars Grid */
        .horeca-pillars-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          gap: 20px;
          align-items: flex-start;
          width: 100%;
        }
        .horeca-pillar {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
        }
        .pillar-icon-box {
          height: 64px;
          width: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }
        .pillar-icon-img {
          height: 56px;
          width: 56px;
          object-fit: contain;
          display: block;
          transition: transform var(--transition-fast);
        }
        .horeca-pillar:hover .pillar-icon-img {
          transform: scale(1.08);
        }
        .pillar-title {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          color: var(--color-navy-dark);
          margin-bottom: 14px;
          letter-spacing: -0.01em;
          white-space: nowrap;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .pillar-list {
          list-style: none;
          padding: 0;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 9px;
          align-items: flex-start;
          text-align: left;
          width: fit-content;
        }
        .pillar-list li {
          font-family: var(--font-body);
          font-size: 15.5px;
          color: #374151;
          line-height: 1.4;
          font-weight: 500;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 9px;
        }
        .pillar-list li::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-accent-red);
          flex-shrink: 0;
          display: inline-block;
        }
        .pillar-divider {
          width: 1px;
          height: 180px;
          background-color: #e5e7eb;
          align-self: flex-start;
          margin-top: 10px;
        }
        @media (max-width: 1200px) {
          .horeca-card {
            grid-template-columns: 1fr;
            padding: 36px 32px;
            gap: 36px;
          }
          .horeca-left {
            max-width: 100%;
            align-items: center;
            text-align: center;
          }
          .horeca-logo-row {
            justify-content: center;
          }
          .horeca-pillars-grid {
            gap: 14px;
          }
        }
        @media (max-width: 768px) {
          .horeca-container {
            padding: 0 20px;
          }
          .horeca-card {
            padding: 32px 20px;
            border-radius: 18px;
          }
          .horeca-brand-logo-img {
            height: 44px;
          }
          .horeca-sectors-inline {
            font-size: 11px;
          }
          .horeca-description {
            font-size: 14.5px;
          }
          .horeca-pillars-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .pillar-divider {
            display: none;
          }
          .pillar-icon-box {
            height: 56px;
            width: 56px;
          }
          .pillar-icon-img {
            height: 48px;
            width: 48px;
          }
          .pillar-title {
            font-size: 19px;
          }
          .pillar-list li {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
};
