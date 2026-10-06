import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BRANDS_ROW_1, BRANDS_ROW_2 } from '../data/siteData';

interface BrandsSectionProps {
  onViewAllBrands?: () => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ onViewAllBrands }) => {
  return (
    <section className="brands-section" id="brands-section">
      <div className="brands-container">
        {/* Section Header */}
        <div className="brands-header">
          <div className="header-left">
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span>TRUSTED BRANDS</span>
            </div>
            <h2 className="brands-title">
              The brands behind great hospitality.
            </h2>
          </div>
          <div className="header-right">
            <p className="brands-desc">
              We use well-known and reliable brands in our supply solutions, so you get quality products that perform.
            </p>
            {onViewAllBrands && (
              <button className="action-link" onClick={onViewAllBrands}>
                <span>View all brands</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Brand Grid Container */}
        <div className="brands-grid-wrapper">
          {/* Row 1 */}
          <div className="brands-row">
            {BRANDS_ROW_1.map((brand, i) => (
              <React.Fragment key={brand.name}>
                <div className="brand-logo-cell">
                  <img src={brand.logo} alt={brand.name} className="brand-logo-img" />
                </div>
                {i < BRANDS_ROW_1.length - 1 && <div className="brand-vertical-divider" />}
              </React.Fragment>
            ))}
          </div>

          <div className="brand-horizontal-divider" />

          {/* Row 2 */}
          <div className="brands-row">
            {BRANDS_ROW_2.map((brand, i) => (
              <React.Fragment key={brand.name}>
                <div className="brand-logo-cell">
                  <img src={brand.logo} alt={brand.name} className="brand-logo-img" />
                </div>
                {i < BRANDS_ROW_2.length - 1 && <div className="brand-vertical-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .brands-section {
          background-color: #ffffff;
          padding: 88px 0;
        }
        .brands-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
        }
        .brands-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 48px;
          margin-bottom: 48px;
        }
        .header-left {
          max-width: 720px;
        }
        .brands-title {
          font-family: var(--font-heading);
          font-size: 50px;
          font-weight: 700;
          color: var(--color-navy-dark);
          line-height: 1.15;
          letter-spacing: -0.015em;
        }
        .header-right {
          max-width: 520px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }
        .brands-desc {
          font-family: var(--font-body);
          font-size: 18.5px;
          line-height: 1.65;
          color: var(--color-text-body);
        }
        .action-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 17px;
          font-weight: 600;
          color: var(--color-navy-dark);
          transition: color var(--transition-fast), transform var(--transition-fast);
        }
        .action-link:hover {
          color: var(--color-accent-red);
          transform: translateX(4px);
        }
        .brands-grid-wrapper {
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #ffffff;
        }
        .brands-row {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .brand-logo-cell {
          flex: 1;
          height: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 24px;
          transition: transform var(--transition-fast), filter var(--transition-fast);
        }
        .brand-logo-cell:hover {
          transform: scale(1.05);
        }
        .brand-logo-img {
          max-height: 60px;
          max-width: 160px;
          object-fit: contain;
          filter: grayscale(15%);
          transition: filter var(--transition-fast);
        }
        .brand-logo-cell:hover .brand-logo-img {
          filter: grayscale(0%);
        }
        .brand-vertical-divider {
          width: 1px;
          height: 60px;
          background-color: var(--color-border-dark);
          opacity: 0.6;
        }
        .brand-horizontal-divider {
          width: 100%;
          height: 1px;
          background-color: var(--color-border);
        }
        @media (max-width: 992px) {
          .brands-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .brands-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
          .brand-vertical-divider {
            display: none;
          }
          .brand-logo-cell {
            border-bottom: 1px solid var(--color-border);
            border-right: 1px solid var(--color-border);
          }
        }
        @media (max-width: 600px) {
          .brands-container {
            padding: 0 20px;
          }
          .brands-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .brands-title {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
};
