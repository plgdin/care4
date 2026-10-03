import React, { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { 
  CATALOG_PRODUCTS, 
  CATEGORY_FILTERS, 
  TABLEWARE_DETAIL_ITEMS 
} from '../data/siteData';

interface ProductPageProps {
  onOpenQuote: () => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ onOpenQuote }) => {
  const [activeFilter, setActiveFilter] = useState('Tableware & Crockery');

  return (
    <div className="product-page">
      {/* Product Hero Header */}
      <section className="product-hero-section">
        <div className="product-hero-container">
          <div className="product-hero-left">
            <h1 className="product-hero-title">Our Products</h1>
            <div className="product-hero-bar" />
            <p className="product-hero-desc">
              A complete range of hospitality products for hotels, restaurants and catering businesses.
            </p>
            <button className="btn-browse-catalog" onClick={onOpenQuote}>
              <span>Browse Catalogue</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="product-hero-right">
            <div className="product-hero-image-card">
              <img 
                src="/images/image__hospitality_tableware__eab14684.png" 
                alt="Hospitality Tableware Collection" 
                className="product-hero-img" 
              />
              <div className="product-hero-img-gradient" />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="category-filters-section">
        <div className="category-filters-container">
          <span className="filters-label">Filter:</span>
          <div className="filter-pills-list">
            {CATEGORY_FILTERS.map((filter) => (
              <button
                key={filter}
                className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Spotlight Detail (Matching Figma Node) */}
      <section className="category-spotlight-section">
        <div className="category-spotlight-card">
          {/* Left Feature Image */}
          <div className="spotlight-image-col">
            <img 
              src="/images/image__tableware___crockery__c6601dfa.png" 
              alt={activeFilter} 
              className="spotlight-img"
            />
            <div className="spotlight-img-gradient" />
          </div>

          {/* Right Information & Products List */}
          <div className="spotlight-info-col">
            <span className="spotlight-eyebrow">BONE CHINA & MELAMINE DINING</span>
            <h2 className="spotlight-heading">{activeFilter}</h2>

            <div className="spotlight-badges">
              <span className="industry-badge">Hotels</span>
              <span className="industry-badge">Restaurants</span>
              <span className="industry-badge">Catering</span>
            </div>

            <div className="spotlight-items-grid">
              {TABLEWARE_DETAIL_ITEMS.map((item, idx) => (
                <div key={idx} className="spotlight-item-row" onClick={onOpenQuote}>
                  <span className="item-name">{item}</span>
                  <ChevronRight size={14} className="item-chevron" />
                </div>
              ))}
            </div>

            <p className="spotlight-footnote">
              Available in bulk and minimum quantities. Customer-specific sizes and branding arranged on request — contact us for a quote.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="products-grid-section">
        <div className="products-grid-container">
          <div className="grid-header">
            <div className="grid-title-group">
              <h2 className="grid-heading">Our Products</h2>
              <div className="grid-heading-bar" />
            </div>
            <button className="view-all-link" onClick={onOpenQuote}>
              <span>View all products</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="catalog-cards-grid">
            {CATALOG_PRODUCTS.map((card) => (
              <div key={card.id} className="catalog-product-card" onClick={onOpenQuote}>
                <div className="card-thumb-wrapper">
                  <img src={card.image} alt={card.title} className="card-thumb-img" />
                  <div className="card-accent-pill">
                    <ArrowRight size={12} color="#ffffff" />
                  </div>
                </div>
                <div className="card-details-box">
                  <h3 className="card-category-title">{card.title}</h3>
                  <p className="card-category-sub">{card.subtitle}</p>
                  <p className="card-meta-line">{card.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .product-page {
          background-color: #fafafa;
          min-height: 100vh;
        }
        .product-hero-section {
          background-color: #fafafa;
          padding: 60px 0 40px 0;
          border-bottom: 1px solid var(--color-border);
        }
        .product-hero-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .product-hero-title {
          font-family: var(--font-display);
          font-size: 58px;
          font-weight: 800;
          color: #000000;
          line-height: 1.1;
          margin-bottom: 14px;
        }
        .product-hero-bar {
          width: 320px;
          max-width: 100%;
          height: 3px;
          background-color: var(--color-red-alt);
          margin-bottom: 20px;
        }
        .product-hero-desc {
          font-family: var(--font-inter);
          font-size: 16px;
          line-height: 1.6;
          color: var(--color-text-body);
          margin-bottom: 28px;
          max-width: 480px;
        }
        .btn-browse-catalog {
          background-color: var(--color-red-alt);
          color: #ffffff;
          font-family: var(--font-inter);
          font-weight: 600;
          font-size: 14px;
          padding: 12px 24px;
          border-radius: var(--radius-xs);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background-color var(--transition-fast);
        }
        .btn-browse-catalog:hover {
          background-color: #b31a20;
        }
        .product-hero-image-card {
          position: relative;
          width: 100%;
          max-width: 480px;
          height: 300px;
          border-radius: 16px;
          overflow: hidden;
          margin-left: auto;
          box-shadow: var(--shadow-card);
        }
        .product-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .product-hero-img-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%);
        }
        /* Filter tabs */
        .category-filters-section {
          background-color: #ffffff;
          border-bottom: 1px solid var(--color-border);
          padding: 16px 0;
          position: sticky;
          top: 80px;
          z-index: 100;
        }
        .category-filters-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          align-items: center;
          gap: 16px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .category-filters-container::-webkit-scrollbar {
          display: none;
        }
        .filters-label {
          font-family: var(--font-inter);
          font-size: 13px;
          font-weight: 700;
          color: var(--color-text-muted);
          flex-shrink: 0;
        }
        .filter-pills-list {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: nowrap;
        }
        .filter-pill {
          padding: 6px 14px;
          border-radius: var(--radius-xs);
          font-family: var(--font-inter);
          font-weight: 600;
          font-size: 12px;
          white-space: nowrap;
          background-color: var(--color-border-light);
          color: #374151;
          transition: all var(--transition-fast);
        }
        .filter-pill:hover {
          background-color: #e5e7eb;
        }
        .filter-pill.active {
          background-color: var(--color-red-alt);
          color: #ffffff;
        }
        /* Spotlight Card */
        .category-spotlight-section {
          padding: 48px 0;
        }
        .category-spotlight-card {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 320px 1fr;
          box-shadow: var(--shadow-sm);
        }
        .spotlight-image-col {
          position: relative;
          background-color: #f3f4f6;
          height: 100%;
          min-height: 480px;
        }
        .spotlight-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .spotlight-img-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 70%, rgba(255,255,255,0.4) 100%);
        }
        .spotlight-info-col {
          padding: 40px;
          display: flex;
          flex-direction: column;
        }
        .spotlight-eyebrow {
          font-family: var(--font-inter);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-red-alt);
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .spotlight-heading {
          font-family: var(--font-inter);
          font-size: 32px;
          font-weight: 900;
          color: var(--color-navy-deep);
          margin-bottom: 16px;
        }
        .spotlight-badges {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
        }
        .industry-badge {
          background-color: var(--color-red-badge-bg);
          color: var(--color-red-alt);
          font-family: var(--font-inter);
          font-weight: 600;
          font-size: 12px;
          padding: 4px 12px;
          border-radius: 4px;
        }
        .spotlight-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 24px;
          margin-bottom: 28px;
        }
        .spotlight-item-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          border-bottom: 1px solid #f3f4f6;
          font-family: var(--font-inter);
          font-size: 14px;
          color: #364153;
          cursor: pointer;
          transition: background-color var(--transition-fast), color var(--transition-fast);
          border-radius: 4px;
        }
        .spotlight-item-row:hover {
          background-color: #fef2f2;
          color: var(--color-red-alt);
        }
        .item-chevron {
          color: var(--color-text-muted);
        }
        .spotlight-footnote {
          font-family: var(--font-inter);
          font-size: 12px;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-top: auto;
        }
        /* Products Grid */
        .products-grid-section {
          padding: 32px 0 80px 0;
        }
        .products-grid-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
        }
        .grid-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        .grid-heading {
          font-family: var(--font-inter);
          font-size: 28px;
          font-weight: 900;
          color: var(--color-navy-deep);
        }
        .grid-heading-bar {
          width: 60px;
          height: 3px;
          background-color: var(--color-red-alt);
          margin-top: 4px;
        }
        .view-all-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-inter);
          font-size: 14px;
          font-weight: 600;
          color: var(--color-red-alt);
          transition: transform var(--transition-fast);
        }
        .view-all-link:hover {
          transform: translateX(4px);
        }
        .catalog-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .catalog-product-card {
          background: #ffffff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          border: 1px solid var(--color-border);
          transition: transform var(--transition-smooth), box-shadow var(--transition-smooth);
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .catalog-product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
        }
        .card-thumb-wrapper {
          position: relative;
          height: 170px;
          background-color: #f3f4f6;
          overflow: hidden;
        }
        .card-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .catalog-product-card:hover .card-thumb-img {
          transform: scale(1.05);
        }
        .card-accent-pill {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--color-red-alt);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card-details-box {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex-grow: 1;
        }
        .card-category-title {
          font-family: var(--font-inter);
          font-size: 14px;
          font-weight: 700;
          color: var(--color-red-alt);
        }
        .card-category-sub {
          font-family: var(--font-inter);
          font-size: 13px;
          color: var(--color-text-body);
        }
        .card-meta-line {
          font-family: var(--font-inter);
          font-size: 11px;
          color: var(--color-text-muted);
          margin-top: 6px;
        }
        @media (max-width: 1024px) {
          .catalog-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .category-spotlight-card {
            grid-template-columns: 1fr;
          }
          .spotlight-image-col {
            height: 240px;
            min-height: auto;
          }
        }
        @media (max-width: 600px) {
          .catalog-cards-grid {
            grid-template-columns: 1fr;
          }
          .product-hero-container {
            grid-template-columns: 1fr;
            padding: 0 20px;
          }
          .product-hero-title {
            font-size: 40px;
          }
          .spotlight-items-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
