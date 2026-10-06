import React, { useState, useMemo } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Search, 
  X, 
  SlidersHorizontal, 
  RotateCcw
} from 'lucide-react';
import { 
  CATALOG_PRODUCTS, 
  CATEGORY_FILTERS, 
  CATEGORY_SPOTLIGHT_MAP,
  TABLEWARE_DETAIL_ITEMS,
  ProductCatalogCard
} from '../data/siteData';
import { ProductDetailModal } from '../components/ProductDetailModal';

// Concise popular brands list for clean tag pills
const POPULAR_BRANDS = [
  'Dinewell',
  'MILTON',
  'Betco',
  'Rubbermaid',
  'Kimberly-Clark',
  '3M',
  'TORK',
  'H&H',
  'CONTA',
  'Bharath Potteries'
];

const SECTORS = ['Hotels', 'Restaurants', 'Catering'];

interface ProductPageProps {
  onOpenQuote: (productName?: string) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ onOpenQuote }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<ProductCatalogCard | null>(null);

  // Toggle helpers
  const handleToggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const handleToggleSector = (sector: string) => {
    setSelectedSector(prev => (prev === sector ? 'All' : sector));
  };

  const handleResetAll = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedBrands([]);
    setSelectedSector('All');
  };

  // Filter calculations
  const filteredProducts = useMemo(() => {
    return CATALOG_PRODUCTS.filter(product => {
      // 1. Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = product.title.toLowerCase().includes(q);
        const matchSubtitle = product.subtitle.toLowerCase().includes(q);
        const matchDetails = product.details.toLowerCase().includes(q);
        const matchCategory = product.category.toLowerCase().includes(q);
        const matchBrands = product.brands.some(b => b.toLowerCase().includes(q));
        const matchIndustries = product.industries.some(i => i.toLowerCase().includes(q));
        if (!matchTitle && !matchSubtitle && !matchDetails && !matchCategory && !matchBrands && !matchIndustries) {
          return false;
        }
      }

      // 2. Category
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }

      // 3. Brands
      if (selectedBrands.length > 0) {
        const hasBrand = product.brands.some(b => selectedBrands.includes(b));
        if (!hasBrand) return false;
      }

      // 4. Sector
      if (selectedSector !== 'All') {
        const hasSector = product.industries.some(i => i.toLowerCase() === selectedSector.toLowerCase());
        if (!hasSector) return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedBrands, selectedSector]);

  // Counts helpers
  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return CATALOG_PRODUCTS.length;
    return CATALOG_PRODUCTS.filter(p => p.category === cat).length;
  };

  const activeFilterCount = 
    (searchQuery.trim() ? 1 : 0) +
    (selectedCategory !== 'All' ? 1 : 0) +
    selectedBrands.length +
    (selectedSector !== 'All' ? 1 : 0);

  // Active spotlight category
  const activeSpotlightKey = selectedCategory !== 'All' ? selectedCategory : 'Tableware & Crockery';
  const spotlightData = CATEGORY_SPOTLIGHT_MAP[activeSpotlightKey] || {
    eyebrow: 'BONE CHINA & MELAMINE DINING',
    title: 'Tableware & Crockery',
    image: '/images/image__tableware___crockery__c6601dfa.png',
    badges: ['Hotels', 'Restaurants', 'Catering'],
    items: TABLEWARE_DETAIL_ITEMS,
    footnote: 'Available in bulk and minimum quantities. Customer-specific sizes and branding arranged on request — contact us for a quote.'
  };

  // Render the left sidebar content (simple & uncluttered)
  const renderFilterSidebar = () => (
    <div className="filter-sidebar-inner">
      {/* Sidebar Header */}
      <div className="filter-sidebar-header">
        <div className="filter-header-title-box">
          <SlidersHorizontal size={17} className="filter-header-icon" />
          <span className="filter-header-title">Filters</span>
          {activeFilterCount > 0 && (
            <span className="filter-active-count-badge">{activeFilterCount}</span>
          )}
        </div>
        {activeFilterCount > 0 && (
          <button className="btn-reset-filters" onClick={handleResetAll} title="Reset all filters">
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* 1. Search Box */}
      <div className="filter-group">
        <div className="sidebar-search-box">
          <Search size={16} className="sidebar-search-icon" />
          <input
            id="product-search-input"
            type="text"
            className="sidebar-search-input"
            placeholder="Search products, brands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              className="sidebar-search-clear" 
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      <div className="filter-divider" />

      {/* 2. Product Category Filter */}
      <div className="filter-group">
        <div className="filter-group-header">
          <span className="filter-group-label">Category</span>
          {selectedCategory !== 'All' && (
            <button 
              className="filter-group-clear"
              onClick={() => setSelectedCategory('All')}
            >
              All
            </button>
          )}
        </div>
        <div className="category-filter-list">
          <button
            className={`category-filter-item ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('All')}
          >
            <span className="category-item-name">All Categories</span>
            <span className="filter-count-badge">{getCategoryCount('All')}</span>
          </button>
          {CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat}
              className={`category-filter-item ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              <span className="category-item-name">{cat}</span>
              <span className="filter-count-badge">{getCategoryCount(cat)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="filter-divider" />

      {/* 3. Brand Filter - Clean Pill Badges (No tall scroll lists) */}
      <div className="filter-group">
        <div className="filter-group-header">
          <span className="filter-group-label">Brand</span>
          {selectedBrands.length > 0 && (
            <button 
              className="filter-group-clear"
              onClick={() => setSelectedBrands([])}
            >
              Clear
            </button>
          )}
        </div>
        <div className="pills-filter-wrap">
          {POPULAR_BRANDS.map((brand) => {
            const isChecked = selectedBrands.includes(brand);
            return (
              <button 
                key={brand}
                type="button"
                className={`brand-pill-btn ${isChecked ? 'active' : ''}`}
                onClick={() => handleToggleBrand(brand)}
              >
                {brand}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-divider" />

      {/* 4. Who We Serve (Sector) */}
      <div className="filter-group">
        <div className="filter-group-header">
          <span className="filter-group-label">For</span>
          {selectedSector !== 'All' && (
            <button 
              className="filter-group-clear"
              onClick={() => setSelectedSector('All')}
            >
              All
            </button>
          )}
        </div>
        <div className="pills-filter-wrap">
          {SECTORS.map((sector) => {
            const isChecked = selectedSector === sector;
            return (
              <button 
                key={sector}
                type="button"
                className={`brand-pill-btn ${isChecked ? 'active' : ''}`}
                onClick={() => handleToggleSector(sector)}
              >
                {sector}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

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
            <button className="btn-browse-catalog" onClick={() => onOpenQuote()}>
              <span>Browse Catalogue</span>
              <ArrowRight size={19} />
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

      {/* Mobile Sticky Bar for quick filter access */}
      <div className="mobile-filter-bar">
        <button 
          className="btn-mobile-filter-toggle"
          onClick={() => setMobileFilterOpen(true)}
        >
          <SlidersHorizontal size={15} />
          <span>Filters & Search</span>
          {activeFilterCount > 0 && (
            <span className="mobile-badge-count">{activeFilterCount}</span>
          )}
        </button>
        <span className="mobile-results-hint">{filteredProducts.length} products found</span>
      </div>

      {/* Main Catalog Section: Left Filter Sidebar + Right Products List */}
      <section className="product-catalog-section">
        <div className="product-catalog-container">
          {/* Left Filter Sidebar (Desktop) */}
          <aside className="product-filter-sidebar">
            {renderFilterSidebar()}
          </aside>

          {/* Right Main Content */}
          <main className="product-content-area">
            {/* Top Results Bar & Active Filter Chips */}
            <div className="catalog-top-bar">
              <div className="results-count-title">
                <span className="results-count-number">{filteredProducts.length}</span>
                <span className="results-count-text">
                  {filteredProducts.length === 1 ? 'Product found' : 'Products found'}
                </span>
                {selectedCategory !== 'All' && (
                  <span className="results-category-tag">in {selectedCategory}</span>
                )}
              </div>

              {activeFilterCount > 0 && (
                <button className="clear-all-inline-btn" onClick={handleResetAll}>
                  <RotateCcw size={13} />
                  <span>Clear All</span>
                </button>
              )}
            </div>

            {/* Active Chips Strip */}
            {activeFilterCount > 0 && (
              <div className="active-chips-strip">
                {searchQuery.trim() && (
                  <div className="active-chip">
                    <span className="chip-label">Search: "{searchQuery}"</span>
                    <button 
                      className="chip-remove" 
                      onClick={() => setSearchQuery('')}
                      aria-label="Remove search filter"
                    >
                      <X size={12} />
                    </button>
                  </div>
                )}
                {selectedCategory !== 'All' && (
                  <div className="active-chip">
                    <span className="chip-label">Category: {selectedCategory}</span>
                    <button 
                      className="chip-remove" 
                      onClick={() => setSelectedCategory('All')}
                      aria-label="Remove category filter"
                    >
                      <X size={12} />
                    </button>
                  </div>
                )}
                {selectedBrands.map(b => (
                  <div key={b} className="active-chip">
                    <span className="chip-label">Brand: {b}</span>
                    <button 
                      className="chip-remove" 
                      onClick={() => handleToggleBrand(b)}
                      aria-label={`Remove brand ${b}`}
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
                {selectedSector !== 'All' && (
                  <div className="active-chip">
                    <span className="chip-label">For: {selectedSector}</span>
                    <button 
                      className="chip-remove" 
                      onClick={() => setSelectedSector('All')}
                      aria-label="Remove sector filter"
                    >
                      <X size={12} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Category Spotlight Card */}
            <div className="category-spotlight-wrapper">
              <div className="category-spotlight-card">
                <div className="spotlight-image-col">
                  <img 
                    src={spotlightData.image} 
                    alt={spotlightData.title} 
                    className="spotlight-img"
                  />
                  <div className="spotlight-img-gradient" />
                </div>

                <div className="spotlight-info-col">
                  <span className="spotlight-eyebrow">{spotlightData.eyebrow}</span>
                  <h2 className="spotlight-heading">{spotlightData.title}</h2>

                  <div className="spotlight-badges">
                    {spotlightData.badges.map(b => (
                      <span key={b} className="industry-badge">{b}</span>
                    ))}
                  </div>

                  <div className="spotlight-items-grid">
                    {spotlightData.items.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="spotlight-item-row" 
                        onClick={() => {
                          const match = CATALOG_PRODUCTS.find(p => p.category === activeSpotlightKey) || CATALOG_PRODUCTS[0];
                          setSelectedDetailProduct(match);
                        }}
                      >
                        <span className="item-name">{item}</span>
                        <ChevronRight size={14} className="item-chevron" />
                      </div>
                    ))}
                  </div>

                  <p className="spotlight-footnote">
                    {spotlightData.footnote}
                  </p>
                </div>
              </div>
            </div>

            {/* Product Cards Section Header */}
            <div className="products-grid-header">
              <div className="grid-title-group">
                <h3 className="grid-heading">Available Products</h3>
                <div className="grid-heading-bar" />
              </div>
              <button className="view-all-link" onClick={() => onOpenQuote()}>
                <span>Request Custom Sourcing</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Product Cards Grid */}
            {filteredProducts.length > 0 ? (
              <div className="catalog-cards-grid">
                {filteredProducts.map((card) => (
                  <div 
                    key={card.id} 
                    className="catalog-product-card" 
                    onClick={() => setSelectedDetailProduct(card)}
                  >
                    <div className="card-thumb-wrapper">
                      <img src={card.image} alt={card.title} className="card-thumb-img" />
                      <div className="card-category-pill-tag">
                        {card.category}
                      </div>
                      <div className="card-accent-pill" title="View Specifications">
                        <ArrowRight size={12} color="#ffffff" />
                      </div>
                    </div>
                    <div className="card-details-box">
                      <h4 className="card-category-title">{card.title}</h4>
                      <p className="card-category-sub">{card.subtitle}</p>
                      <p className="card-meta-line">{card.details}</p>

                      <div className="card-footer-tags">
                        {card.industries.slice(0, 2).map(ind => (
                          <span key={ind} className="card-mini-tag">{ind}</span>
                        ))}
                      </div>

                      <div className="card-view-specs-link">
                        <span>View Specs & Sizing</span>
                        <ChevronRight size={13} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="catalog-empty-state">
                <div className="empty-state-icon-box">
                  <Search size={32} color="var(--color-red-alt)" />
                </div>
                <h3 className="empty-state-title">No matching products found</h3>
                <p className="empty-state-desc">
                  We couldn't find any items matching your selected criteria. Try adjusting your search query or clearing filters.
                </p>
                <button className="btn-reset-empty" onClick={handleResetAll}>
                  <RotateCcw size={15} />
                  <span>Reset Filters</span>
                </button>
              </div>
            )}
          </main>
        </div>
      </section>

      {/* Mobile Drawer Backdrop & Panel */}
      {mobileFilterOpen && (
        <div className="mobile-filter-drawer-backdrop" onClick={() => setMobileFilterOpen(false)}>
          <div 
            className="mobile-filter-drawer-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-drawer-header">
              <span className="mobile-drawer-title">Filters</span>
              <button 
                className="mobile-drawer-close-btn"
                onClick={() => setMobileFilterOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="mobile-drawer-body">
              {renderFilterSidebar()}
            </div>
            <div className="mobile-drawer-footer">
              <button 
                className="btn-mobile-apply"
                onClick={() => setMobileFilterOpen(false)}
              >
                Show {filteredProducts.length} Products
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Detail Modal (Union Glass & Ocean Glass Specs) */}
      <ProductDetailModal 
        product={selectedDetailProduct}
        onClose={() => setSelectedDetailProduct(null)}
        onInquire={(prodName) => {
          setSelectedDetailProduct(null);
          onOpenQuote(prodName);
        }}
      />

      <style>{`
        .product-page {
          background-color: #fafafa;
          min-height: 100vh;
        }

        /* Hero Header */
        .product-hero-section {
          background-color: #fafafa;
          padding: 68px 0 54px 0;
          border-bottom: 1px solid var(--color-border);
        }
        .product-hero-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .product-hero-title {
          font-family: var(--font-display);
          font-size: 72px;
          font-weight: 800;
          color: #000000;
          line-height: 1.08;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .product-hero-bar {
          width: 340px;
          max-width: 100%;
          height: 4px;
          background-color: var(--color-red-alt);
          border-radius: 2px;
          margin-bottom: 24px;
        }
        .product-hero-desc {
          font-family: var(--font-inter);
          font-size: 21px;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 32px;
          max-width: 580px;
        }
        .btn-browse-catalog {
          background-color: var(--color-red-alt);
          color: #ffffff;
          font-family: var(--font-inter);
          font-weight: 600;
          font-size: 18px;
          padding: 15px 34px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all var(--transition-fast);
          box-shadow: 0 4px 14px rgba(201, 42, 42, 0.28);
        }
        .btn-browse-catalog:hover {
          background-color: #b31a20;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(201, 42, 42, 0.38);
        }
        .product-hero-image-card {
          position: relative;
          width: 100%;
          max-width: 580px;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          margin-left: auto;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.18);
          transition: transform 0.3s ease;
        }
        .product-hero-image-card:hover {
          transform: translateY(-3px);
        }
        .product-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .product-hero-img-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%);
        }

        /* Mobile Filter Bar */
        .mobile-filter-bar {
          display: none;
          background: #ffffff;
          padding: 12px 20px;
          border-bottom: 1px solid var(--color-border);
          position: sticky;
          top: 70px;
          z-index: 90;
          justify-content: space-between;
          align-items: center;
        }
        .btn-mobile-filter-toggle {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #f3f4f6;
          border: 1px solid #e5e7eb;
          padding: 8px 16px;
          border-radius: 6px;
          font-family: var(--font-inter);
          font-size: 14px;
          font-weight: 600;
          color: #111827;
          cursor: pointer;
        }
        .mobile-badge-count {
          background-color: var(--color-red-alt);
          color: #ffffff;
          font-size: 11px;
          padding: 2px 6px;
          border-radius: 10px;
        }
        .mobile-results-hint {
          font-size: 13px;
          color: #6b7280;
          font-weight: 500;
        }

        /* Main Catalog Layout */
        .product-catalog-section {
          padding: 36px 0 80px 0;
        }
        .product-catalog-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 290px 1fr;
          gap: 36px;
          align-items: start;
        }

        /* Left Filter Sidebar - Compact, No Ugly Scrollbar */
        .product-filter-sidebar {
          position: sticky;
          top: 96px;
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 20px 18px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.03);
          max-height: calc(100vh - 110px);
          overflow-y: auto;
          /* Completely hide scrollbars across all browsers */
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
        }
        .product-filter-sidebar::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }

        .filter-sidebar-inner {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .filter-sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 2px;
        }
        .filter-header-title-box {
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .filter-header-icon {
          color: var(--color-red-alt);
        }
        .filter-header-title {
          font-family: var(--font-inter);
          font-size: 15.5px;
          font-weight: 800;
          color: #111827;
        }
        .filter-active-count-badge {
          background-color: var(--color-red-alt);
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: 10px;
        }
        .btn-reset-filters {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-inter);
          font-size: 12px;
          font-weight: 600;
          color: var(--color-red-alt);
          background: #fef2f2;
          padding: 3px 8px;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .btn-reset-filters:hover {
          background: #fee2e2;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .filter-group-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .filter-group-label {
          font-family: var(--font-inter);
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #4b5563;
        }
        .filter-group-clear {
          font-size: 11.5px;
          font-weight: 600;
          color: var(--color-red-alt);
          background: none;
          cursor: pointer;
        }
        .filter-group-clear:hover {
          text-decoration: underline;
        }

        /* Search Box */
        .sidebar-search-box {
          position: relative;
          display: flex;
          align-items: center;
        }
        .sidebar-search-icon {
          position: absolute;
          left: 11px;
          color: #9ca3af;
          pointer-events: none;
        }
        .sidebar-search-input {
          width: 100%;
          height: 38px;
          padding: 0 30px 0 34px;
          font-family: var(--font-inter);
          font-size: 13.5px;
          border: 1px solid #d1d5db;
          border-radius: 7px;
          background-color: #f9fafb;
          color: #111827;
          transition: all 0.2s ease;
        }
        .sidebar-search-input:focus {
          outline: none;
          border-color: var(--color-red-alt);
          background-color: #ffffff;
          box-shadow: 0 0 0 3px rgba(204, 34, 41, 0.1);
        }
        .sidebar-search-clear {
          position: absolute;
          right: 7px;
          background: none;
          color: #9ca3af;
          cursor: pointer;
          padding: 3px;
          display: flex;
          align-items: center;
        }
        .sidebar-search-clear:hover {
          color: #111827;
        }

        .filter-divider {
          height: 1px;
          background-color: #f3f4f6;
          margin: 1px 0;
        }

        /* Category Filter List */
        .category-filter-list {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .category-filter-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 6px 8px;
          border-radius: 6px;
          font-family: var(--font-inter);
          font-size: 13px;
          font-weight: 500;
          color: #374151;
          background: transparent;
          cursor: pointer;
          transition: all 0.15s ease;
          text-align: left;
          width: 100%;
        }
        .category-filter-item:hover {
          background-color: #f3f4f6;
          color: #111827;
        }
        .category-filter-item.active {
          background-color: #fef2f2;
          color: var(--color-red-alt);
          font-weight: 700;
        }
        .filter-count-badge {
          font-size: 11px;
          font-weight: 600;
          color: #6b7280;
          background: #f3f4f6;
          padding: 1px 6px;
          border-radius: 10px;
        }
        .category-filter-item.active .filter-count-badge {
          background: #fee2e2;
          color: var(--color-red-alt);
        }

        /* Pills Filter Wrap (Brands & Sectors) */
        .pills-filter-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .brand-pill-btn {
          font-family: var(--font-inter);
          font-size: 12px;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          background-color: #f9fafb;
          color: #4b5563;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .brand-pill-btn:hover {
          background-color: #f3f4f6;
          border-color: #d1d5db;
          color: #111827;
        }
        .brand-pill-btn.active {
          background-color: var(--color-red-alt);
          border-color: var(--color-red-alt);
          color: #ffffff;
          font-weight: 600;
        }

        /* Right Content Area */
        .product-content-area {
          display: flex;
          flex-direction: column;
          gap: 26px;
          min-width: 0;
        }

        /* Catalog Top Bar */
        .catalog-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--color-border);
        }
        .results-count-title {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }
        .results-count-number {
          font-family: var(--font-inter);
          font-size: 22px;
          font-weight: 800;
          color: var(--color-navy-deep);
        }
        .results-count-text {
          font-family: var(--font-inter);
          font-size: 14.5px;
          font-weight: 600;
          color: #4b5563;
        }
        .results-category-tag {
          font-family: var(--font-inter);
          font-size: 12.5px;
          font-weight: 600;
          color: var(--color-red-alt);
          background: #fef2f2;
          padding: 2px 8px;
          border-radius: 4px;
        }
        .clear-all-inline-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          color: var(--color-red-alt);
          font-family: var(--font-inter);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
        }
        .clear-all-inline-btn:hover {
          text-decoration: underline;
        }

        /* Active Chips Strip */
        .active-chips-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }
        .active-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          padding: 4px 11px;
          border-radius: 16px;
          font-family: var(--font-inter);
          font-size: 12px;
          font-weight: 600;
          color: #374151;
          box-shadow: 0 1px 2px rgba(0,0,0,0.03);
        }
        .chip-remove {
          background: transparent;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 0;
          transition: color 0.15s ease;
        }
        .chip-remove:hover {
          color: var(--color-red-alt);
        }

        /* Spotlight Card */
        .category-spotlight-wrapper {
          width: 100%;
        }
        .category-spotlight-card {
          width: 100%;
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 14px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 280px 1fr;
          box-shadow: 0 2px 10px rgba(0,0,0,0.03);
        }
        .spotlight-image-col {
          position: relative;
          background-color: #f3f4f6;
          height: 100%;
          min-height: 400px;
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
          padding: 30px 34px;
          display: flex;
          flex-direction: column;
        }
        .spotlight-eyebrow {
          font-family: var(--font-inter);
          font-size: 11.5px;
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
          margin-bottom: 12px;
        }
        .spotlight-badges {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .industry-badge {
          background-color: var(--color-red-badge-bg);
          color: var(--color-red-alt);
          font-family: var(--font-inter);
          font-weight: 600;
          font-size: 12px;
          padding: 3px 10px;
          border-radius: 4px;
        }
        .spotlight-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px 18px;
          margin-bottom: 22px;
        }
        .spotlight-item-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 6px 9px;
          border-bottom: 1px solid #f3f4f6;
          font-family: var(--font-inter);
          font-size: 14.5px;
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

        /* Products Grid Header */
        .products-grid-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 6px;
        }
        .grid-heading {
          font-family: var(--font-inter);
          font-size: 26px;
          font-weight: 800;
          color: var(--color-navy-deep);
        }
        .grid-heading-bar {
          width: 48px;
          height: 3px;
          background-color: var(--color-red-alt);
          margin-top: 4px;
        }
        .view-all-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-inter);
          font-size: 14px;
          font-weight: 600;
          color: var(--color-red-alt);
          background: none;
          cursor: pointer;
          transition: transform var(--transition-fast);
        }
        .view-all-link:hover {
          transform: translateX(4px);
        }

        /* Catalog Cards Grid */
        .catalog-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
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
          transform: scale(1.06);
        }
        .card-category-pill-tag {
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: rgba(17, 24, 39, 0.75);
          backdrop-filter: blur(4px);
          color: #ffffff;
          font-family: var(--font-inter);
          font-size: 11px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 4px;
        }
        .card-accent-pill {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--color-red-alt);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card-details-box {
          padding: 15px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          flex-grow: 1;
        }
        .card-category-title {
          font-family: var(--font-inter);
          font-size: 16px;
          font-weight: 700;
          color: var(--color-red-alt);
          line-height: 1.3;
        }
        .card-category-sub {
          font-family: var(--font-inter);
          font-size: 13.5px;
          color: var(--color-text-body);
          line-height: 1.4;
        }
        .card-meta-line {
          font-family: var(--font-inter);
          font-size: 11.5px;
          color: var(--color-text-muted);
          margin-top: 4px;
        }
        .card-footer-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 8px;
          padding-top: 8px;
          border-top: 1px solid #f3f4f6;
        }
        .card-mini-tag {
          font-family: var(--font-inter);
          font-size: 11px;
          font-weight: 600;
          color: #4b5563;
          background: #f3f4f6;
          padding: 2px 7px;
          border-radius: 4px;
        }
        .card-view-specs-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-inter);
          font-size: 12.5px;
          font-weight: 700;
          color: var(--color-red-alt);
          margin-top: 8px;
          padding-top: 8px;
          border-top: 1px dashed #f3f4f6;
          transition: transform var(--transition-fast);
        }
        .catalog-product-card:hover .card-view-specs-link {
          transform: translateX(3px);
        }

        /* Empty State */
        .catalog-empty-state {
          background: #ffffff;
          border: 1px dashed #d1d5db;
          border-radius: 12px;
          padding: 50px 30px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .empty-state-icon-box {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #fef2f2;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .empty-state-title {
          font-family: var(--font-inter);
          font-size: 19px;
          font-weight: 800;
          color: #111827;
        }
        .empty-state-desc {
          font-family: var(--font-inter);
          font-size: 14px;
          color: #6b7280;
          max-width: 420px;
          line-height: 1.5;
        }
        .btn-reset-empty {
          margin-top: 4px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: var(--color-red-alt);
          color: #ffffff;
          font-family: var(--font-inter);
          font-size: 14px;
          font-weight: 600;
          padding: 9px 18px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .btn-reset-empty:hover {
          background: #b31a20;
        }

        /* Mobile Drawer */
        .mobile-filter-drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(2px);
          z-index: 1000;
          display: flex;
          justify-content: flex-start;
        }
        .mobile-filter-drawer-content {
          width: 85%;
          max-width: 340px;
          height: 100%;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-card);
        }
        .mobile-drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 18px;
          border-bottom: 1px solid var(--color-border);
        }
        .mobile-drawer-title {
          font-family: var(--font-inter);
          font-size: 17px;
          font-weight: 800;
          color: #111827;
        }
        .mobile-drawer-close-btn {
          background: none;
          color: #4b5563;
          cursor: pointer;
          padding: 4px;
        }
        .mobile-drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 18px;
          scrollbar-width: none;
        }
        .mobile-drawer-body::-webkit-scrollbar {
          display: none;
        }
        .mobile-drawer-footer {
          padding: 14px 18px;
          border-top: 1px solid var(--color-border);
          background: #ffffff;
        }
        .btn-mobile-apply {
          width: 100%;
          background: var(--color-red-alt);
          color: #ffffff;
          font-family: var(--font-inter);
          font-size: 14.5px;
          font-weight: 700;
          padding: 11px;
          border-radius: 6px;
          cursor: pointer;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .catalog-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 992px) {
          .product-catalog-container {
            grid-template-columns: 1fr;
            padding: 0 24px;
          }
          .product-filter-sidebar {
            display: none;
          }
          .mobile-filter-bar {
            display: flex;
          }
          .category-spotlight-card {
            grid-template-columns: 1fr;
          }
          .spotlight-image-col {
            min-height: 240px;
            height: 240px;
          }
        }

        @media (max-width: 600px) {
          .product-hero-container {
            grid-template-columns: 1fr;
            padding: 0 20px;
            gap: 28px;
          }
          .product-hero-title {
            font-size: 44px;
          }
          .product-hero-desc {
            font-size: 17px;
          }
          .product-hero-image-card {
            max-width: 100%;
            height: 260px;
            margin-left: 0;
          }
          .catalog-cards-grid {
            grid-template-columns: 1fr;
          }
          .spotlight-items-grid {
            grid-template-columns: 1fr;
          }
          .spotlight-info-col {
            padding: 24px 20px;
          }
          .spotlight-heading {
            font-size: 26px;
          }
        }
      `}</style>
    </div>
  );
};
