import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CLIENT_CATEGORIES } from '../data/siteData';

interface CategoriesSectionProps {
  onViewAll: () => void;
  onSelectCategory: (catId: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onViewAll, onSelectCategory }) => {
  return (
    <section className="categories-section" id="categories-section">
      <div className="categories-container">
        {/* Section Header */}
        <div className="categories-header">
          <div className="header-left">
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span>OUR CATEGORIES</span>
            </div>
            <h2 className="categories-title">
              Everything you need, in one place.
            </h2>
          </div>
          <div className="header-right">
            <p className="categories-desc">
              A complete range of products to support every corner of your operation.
            </p>
            <button className="action-link" onClick={onViewAll}>
              <span>View all categories</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Categories Grid (8 Official Client Categories) */}
        <div className="categories-grid">
          {CLIENT_CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              className="category-card"
              onClick={() => onSelectCategory(cat.id)}
            >
              <div className="card-image-box">
                <img src={cat.image} alt={cat.name} className="card-img" />
              </div>
              <div className="card-meta">
                <h3 className="card-title">{cat.name}</h3>
                <p className="card-subtitle">{cat.description}</p>
                <div className="card-footer-row">
                  <div className="arrow-btn">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .categories-section {
          background-color: var(--color-bg-alt);
          padding: 96px 0;
        }
        .categories-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
        }
        .categories-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 48px;
          margin-bottom: 56px;
        }
        .header-left {
          max-width: 640px;
        }
        .categories-title {
          font-family: var(--font-heading);
          font-size: 46px;
          font-weight: 700;
          color: var(--color-navy-dark);
          line-height: 1.15;
        }
        .header-right {
          max-width: 420px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }
        .categories-desc {
          font-family: var(--font-body);
          font-size: 17px;
          line-height: 1.6;
          color: var(--color-text-secondary);
        }
        .action-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 600;
          color: var(--color-navy-dark);
          transition: color var(--transition-fast), transform var(--transition-fast);
        }
        .action-link:hover {
          color: var(--color-accent-red);
          transform: translateX(4px);
        }
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .category-card {
          background-color: #ffffff;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-smooth), box-shadow var(--transition-smooth);
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .category-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-hover);
        }
        .card-image-box {
          width: 100%;
          height: 300px;
          overflow: hidden;
          background-color: #e5e7eb;
        }
        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .category-card:hover .card-img {
          transform: scale(1.04);
        }
        .card-meta {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .card-title {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 700;
          color: var(--color-navy-dark);
          margin-bottom: 8px;
        }
        .card-subtitle {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .card-footer-row {
          display: flex;
          justify-content: flex-end;
        }
        .arrow-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--color-bg-alt);
          color: var(--color-navy-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
        }
        .category-card:hover .arrow-btn {
          background-color: var(--color-accent-red);
          color: #ffffff;
          transform: translateX(4px);
        }
        @media (max-width: 1100px) {
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .categories-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
        @media (max-width: 600px) {
          .categories-grid {
            grid-template-columns: 1fr;
          }
          .categories-container {
            padding: 0 20px;
          }
          .categories-title {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
};
