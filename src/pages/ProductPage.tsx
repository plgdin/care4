import React, { useState, useMemo, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Search, 
  X, 
  SlidersHorizontal, 
  RotateCcw,
  Package,
  Grid3X3,
  UtensilsCrossed,
  Utensils,
  Layers,
  Coffee,
  Droplets,
  CookingPot,
  SprayCan,
  FlaskConical,
  Wrench,
  type LucideIcon
} from 'lucide-react';
import { 
  CATALOG_PRODUCTS, 
  CATEGORY_FILTERS, 
  ProductCatalogCard
} from '../data/siteData';
import { ProductDetailModal } from '../components/ProductDetailModal';

// Concise popular brands list for clean tag pills
const POPULAR_BRANDS = [
  'Dinewell',
  'Borosil',
  'Milton',
  'Prestige',
  'Ocean',
  'Ariane',
  'FNS',
  'Cambro Nilkamal',
  'Diversey',
  'Gala',
  'Godrej - Cartini',
  'SAC',
  'Conta'
];

const SECTORS = ['Hotels', 'Restaurants', 'Cafes', 'Catering'];

// Category icon mapping using Lucide icons
const CATEGORY_ICON_MAP: Record<string, LucideIcon> = {
  'Crockery': UtensilsCrossed,
  'Cutlery': Utensils,
  'Linen': Layers,
  'Cafes': Coffee,
  'Guest Amenities': Droplets,
  'Kitchen Utensils': CookingPot,
  'House Keeping': SprayCan,
  'Cleaning Chemicals': FlaskConical,
  'Engineering Equipments': Wrench
};

const CategoryIcon: React.FC<{ category: string; size?: number; className?: string }> = ({ category, size = 15, className = '' }) => {
  const IconComponent = CATEGORY_ICON_MAP[category] || Package;
  return <IconComponent size={size} className={`cat-icon ${className}`} />;
};

interface ProductPageProps {
  onOpenQuote: (productName?: string) => void;
  initialFilter?: string;
  onClearInitialFilter?: () => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ 
  onOpenQuote, 
  initialFilter, 
  onClearInitialFilter 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<ProductCatalogCard | null>(null);

  useEffect(() => {
    if (initialFilter) {
      const catMatch = CATEGORY_FILTERS.find(c => c.toLowerCase() === initialFilter.toLowerCase());
      if (catMatch) {
        setSelectedCategory(catMatch);
        setSelectedSector('All');
      } else {
        const secMatch = SECTORS.find(s => s.toLowerCase() === initialFilter.toLowerCase());
        if (secMatch) {
          setSelectedSector(secMatch);
          setSelectedCategory('All');
        }
      }
      if (onClearInitialFilter) onClearInitialFilter();
    }
  }, [initialFilter, onClearInitialFilter]);

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
        const matchId = product.id.toLowerCase().includes(q);
        const matchBrands = product.brands.some(b => b.toLowerCase().includes(q));
        const matchIndustries = product.industries.some(i => i.toLowerCase().includes(q));
        const matchFactors = product.factors ? product.factors.some(f => f.toLowerCase().includes(q)) : false;
        if (!matchTitle && !matchSubtitle && !matchDetails && !matchCategory && !matchId && !matchBrands && !matchIndustries && !matchFactors) {
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
    (selectedCategory !== 'All' ? 1 : 0) +
    selectedBrands.length +
    (selectedSector !== 'All' ? 1 : 0);

  // Group products by category when viewing "All"
  const groupedProducts = useMemo(() => {
    if (selectedCategory !== 'All' || searchQuery.trim() || selectedBrands.length > 0 || selectedSector !== 'All') {
      return null; // Don't group when filtering
    }
    const groups: Record<string, ProductCatalogCard[]> = {};
    filteredProducts.forEach(p => {
      if (!groups[p.category]) groups[p.category] = [];
      groups[p.category].push(p);
    });
    return groups;
  }, [filteredProducts, selectedCategory, searchQuery, selectedBrands, selectedSector]);

  // Render the left sidebar content
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

      {/* Product Category Filter */}
      <div className="filter-group">
        <div className="filter-group-header">
          <span className="filter-group-label">Category</span>
          {selectedCategory !== 'All' && (
            <button 
              className="filter-group-clear"
              onClick={() => setSelectedCategory('All')}
            >
              Show All
            </button>
          )}
        </div>
        <div className="category-filter-list">
          <button
            className={`category-filter-item ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('All')}
          >
            <span className="category-item-name">
              <Grid3X3 size={14} className="cat-item-icon" />
              All Categories
            </span>
            <span className="filter-count-badge">{getCategoryCount('All')}</span>
          </button>
          {CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat}
              className={`category-filter-item ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              <span className="category-item-name">
                <CategoryIcon category={cat} size={14} />
                {cat}
              </span>
              <span className="filter-count-badge">{getCategoryCount(cat)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="filter-divider" />

      {/* Brand Filter */}
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

      {/* Sector Filter */}
      <div className="filter-group">
        <div className="filter-group-header">
          <span className="filter-group-label">Industry</span>
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

      <div className="filter-divider" />

      {/* Quick Help */}
      <div className="sidebar-help-box">
        <Package size={16} className="sidebar-help-icon" />
        <p className="sidebar-help-text">
          Can't find what you need? We source 500+ products across all categories.
        </p>
        <button className="sidebar-help-btn" onClick={() => onOpenQuote()}>
          Request Custom Sourcing
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );

  // Render a single product card
  const renderProductCard = (card: ProductCatalogCard) => (
    <div 
      key={card.id} 
      className="catalog-product-card" 
      onClick={() => setSelectedDetailProduct(card)}
    >
      <div className="card-thumb-wrapper">
        <img src={card.image} alt={card.title} className="card-thumb-img" />
        <div className="card-category-pill-tag">
          <CategoryIcon category={card.category} size={13} className="card-pill-icon" />
          {card.category}
        </div>
      </div>
      <div className="card-details-box">
        <h4 className="card-product-title">{card.title}</h4>
        <p className="card-product-subtitle">{card.subtitle}</p>
        
        <div className="card-brands-line">
          {card.brands.slice(0, 3).map(b => (
            <span key={b} className="card-brand-tag">{b}</span>
          ))}
        </div>

        <div className="card-bottom-row">
          <div className="card-industries">
            {card.industries.slice(0, 2).map(ind => (
              <span key={ind} className="card-industry-dot">{ind}</span>
            ))}
          </div>
          <div className="card-view-link">
            <span>View Details</span>
            <ChevronRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );

  // Render a category group section
  const renderCategoryGroup = (category: string, products: ProductCatalogCard[]) => (
    <div key={category} className="category-group-section">
      <div className="category-group-header">
        <div className="category-group-title-row">
          <CategoryIcon category={category} size={22} className="category-group-icon" />
          <h3 className="category-group-title">{category}</h3>
          <span className="category-group-count">{products.length} {products.length === 1 ? 'product' : 'products'}</span>
        </div>
        <button 
          className="category-group-view-all"
          onClick={() => setSelectedCategory(category)}
        >
          View All
          <ArrowRight size={14} />
        </button>
      </div>
      <div className="catalog-cards-grid">
        {products.map(card => renderProductCard(card))}
      </div>
    </div>
  );

  return (
    <div className="product-page">
      {/* Product Hero Header */}
      <section className="product-hero-section">
        <div className="product-hero-bg-overlay" />
        <div className="product-hero-container">
          <div className="product-hero-left">
            <h1 className="product-hero-title">Our Products</h1>
            <div className="product-hero-bar" />
            <p className="product-hero-desc">
              A complete range of hospitality products for hotels, restaurants, cafes and catering businesses.
            </p>
            <button 
              className="btn-browse-catalog" 
              onClick={() => {
                const el = document.getElementById('catalog-main-search-input');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  el.focus();
                }
              }}
            >
              <span>Search Products</span>
              <Search size={18} />
            </button>
          </div>

          <div className="product-hero-right">
            <div className="product-hero-image-card">
              <img 
                src="/images/product_catalog_hero_bright.jpg" 
                alt="Hospitality Tableware & Equipment Collection" 
                className="product-hero-img" 
              />
              <div className="product-hero-img-gradient" />
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Search Bar — The First Thing You See */}
      <section className="catalog-search-section">
        <div className="catalog-search-container">
          <div className="catalog-search-box">
            <div className="catalog-search-inner">
              <Search size={20} className="catalog-search-icon" />
              <input
                id="catalog-main-search-input"
                type="text"
                className="catalog-search-input"
                placeholder="Search by product name, brand, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  className="catalog-search-clear" 
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <div className="catalog-search-suggestions">
              <span className="search-suggest-label">Try:</span>
              {['Ocean', 'Dinewell', 'Borosil', 'Crockery', 'Cutlery'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`search-suggest-chip ${searchQuery.toLowerCase() === tag.toLowerCase() ? 'active' : ''}`}
                  onClick={() => setSearchQuery(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Category Pills — Horizontal Scroll */}
          <div className="quick-category-row">
            <button
              className={`quick-cat-pill ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              All
            </button>
            {CATEGORY_FILTERS.map((cat) => (
              <button
                key={cat}
                className={`quick-cat-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                <CategoryIcon category={cat} size={14} />
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bar */}
      <div className="mobile-filter-bar">
        <div className="mobile-search-inline-wrap">
          <Search size={15} className="mobile-search-icon" />
          <input
            type="text"
            className="mobile-search-input"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              className="mobile-search-clear" 
              onClick={() => setSearchQuery('')}
              aria-label="Clear mobile search"
            >
              <X size={14} />
            </button>
          )}
        </div>
        <button 
          className="btn-mobile-filter-toggle"
          onClick={() => setMobileFilterOpen(true)}
        >
          <SlidersHorizontal size={15} />
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="mobile-badge-count">{activeFilterCount}</span>
          )}
        </button>
      </div>

      {/* Main Catalog: Sidebar + Products */}
      <section className="product-catalog-section">
        <div className="product-catalog-container">
          {/* Left Sidebar */}
          <aside className="product-filter-sidebar">
            {renderFilterSidebar()}
          </aside>

          {/* Right: Products */}
          <main className="product-content-area">
            {/* Results Summary Bar */}
            <div className="catalog-results-bar">
              <div className="results-info">
                <span className="results-number">{filteredProducts.length}</span>
                <span className="results-label">
                  {filteredProducts.length === 1 ? 'Product' : 'Products'}
                </span>
                {selectedCategory !== 'All' && (
                  <span className="results-in-cat">
                    in <strong>{selectedCategory}</strong>
                  </span>
                )}
                {searchQuery.trim() && (
                  <span className="results-for-query">
                    for "<strong>{searchQuery}</strong>"
                  </span>
                )}
              </div>
              {activeFilterCount > 0 && (
                <button className="clear-all-btn" onClick={handleResetAll}>
                  <RotateCcw size={13} />
                  Clear All Filters
                </button>
              )}
            </div>

            {/* Active Filter Chips */}
            {activeFilterCount > 0 && (
              <div className="active-chips-row">
                {selectedCategory !== 'All' && (
                  <div className="active-chip">
                    <span className="chip-with-icon"><CategoryIcon category={selectedCategory} size={13} /> {selectedCategory}</span>
                    <button className="chip-x" onClick={() => setSelectedCategory('All')}>
                      <X size={12} />
                    </button>
                  </div>
                )}
                {selectedBrands.map(b => (
                  <div key={b} className="active-chip">
                    <span>{b}</span>
                    <button className="chip-x" onClick={() => handleToggleBrand(b)}>
                      <X size={12} />
                    </button>
                  </div>
                ))}
                {selectedSector !== 'All' && (
                  <div className="active-chip">
                    <span>{selectedSector}</span>
                    <button className="chip-x" onClick={() => setSelectedSector('All')}>
                      <X size={12} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Product Cards — Grouped or Flat */}
            {filteredProducts.length > 0 ? (
              groupedProducts ? (
                // Show grouped by category when no filters active
                <div className="category-groups-container">
                  {CATEGORY_FILTERS.map(cat => {
                    const products = groupedProducts[cat];
                    if (!products || products.length === 0) return null;
                    return renderCategoryGroup(cat, products);
                  })}
                </div>
              ) : (
                // Flat grid when filtering
                <div className="catalog-cards-grid">
                  {filteredProducts.map(card => renderProductCard(card))}
                </div>
              )
            ) : (
              <div className="catalog-empty-state">
                <div className="empty-icon-circle">
                  <Search size={32} color="var(--color-red-alt)" />
                </div>
                <h3 className="empty-title">No products match your filters</h3>
                <p className="empty-desc">
                  Try adjusting your search or clearing some filters to see more results.
                </p>
                <button className="btn-reset-empty" onClick={handleResetAll}>
                  <RotateCcw size={15} />
                  <span>Reset All Filters</span>
                </button>
              </div>
            )}
          </main>
        </div>
      </section>

      {/* Mobile Drawer */}
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

      {/* Product Detail Modal */}
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
          background-color: #f8f9fb;
          min-height: 100vh;
        }

        /* ==================== HERO ==================== */
        .product-hero-section {
          position: relative;
          background-color: var(--color-navy-deep);
          background-image: url('/images/product_catalog_hero_bright.jpg');
          background-size: cover;
          background-position: center;
          padding: 80px 0 72px 0;
          color: #ffffff;
        }
        .product-hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15, 28, 45, 0.94) 0%, rgba(15, 28, 45, 0.82) 100%);
        }
        .product-hero-container {
          position: relative;
          z-index: 2;
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
          color: #ffffff;
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
          color: rgba(255, 255, 255, 0.8);
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
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
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

        /* ==================== SEARCH SECTION ==================== */
        .catalog-search-section {
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          padding: 28px 0 20px 0;
          position: sticky;
          top: 72px;
          z-index: 95;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }
        .catalog-search-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
        }
        .catalog-search-box {
          margin-bottom: 16px;
        }
        .catalog-search-inner {
          position: relative;
          display: flex;
          align-items: center;
        }
        .catalog-search-icon {
          position: absolute;
          left: 16px;
          color: #94a3b8;
          pointer-events: none;
        }
        .catalog-search-input {
          width: 100%;
          height: 52px;
          padding: 0 44px 0 48px;
          font-family: var(--font-inter);
          font-size: 16px;
          font-weight: 500;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          background-color: #f8fafc;
          color: #0f172a;
          transition: all 0.2s ease;
        }
        .catalog-search-input:focus {
          outline: none;
          background-color: #ffffff;
          border-color: var(--color-red-alt);
          box-shadow: 0 0 0 4px rgba(204, 34, 41, 0.08);
        }
        .catalog-search-clear {
          position: absolute;
          right: 14px;
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          border-radius: 4px;
        }
        .catalog-search-clear:hover {
          color: #0f172a;
        }
        .catalog-search-suggestions {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 10px;
        }
        .search-suggest-label {
          font-family: var(--font-inter);
          font-size: 12.5px;
          font-weight: 600;
          color: #94a3b8;
        }
        .search-suggest-chip {
          font-family: var(--font-inter);
          font-size: 12px;
          font-weight: 500;
          padding: 4px 12px;
          border-radius: 999px;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          color: #475569;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .search-suggest-chip:hover {
          background: #e2e8f0;
          color: #0f172a;
          border-color: #cbd5e1;
        }
        .search-suggest-chip.active {
          background: var(--color-red-alt);
          color: #ffffff;
          border-color: var(--color-red-alt);
        }

        /* Quick Category Row */
        .quick-category-row {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 2px;
          scrollbar-width: none;
        }
        .quick-category-row::-webkit-scrollbar {
          display: none;
        }
        .quick-cat-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 16px;
          border-radius: 9999px;
          font-family: var(--font-inter);
          font-size: 13.5px;
          font-weight: 600;
          color: #475569;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .quick-cat-pill:hover {
          color: var(--color-navy-dark);
          background: #e2e8f0;
          border-color: #cbd5e1;
        }
        .quick-cat-pill.active {
          background: var(--color-navy-dark);
          color: #ffffff;
          border-color: var(--color-navy-dark);
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.2);
        }
        .quick-cat-pill .cat-icon {
          color: #1f2937;
        }
        .quick-cat-pill.active .cat-icon {
          color: #ffffff;
        }

        /* ==================== MOBILE FILTER BAR ==================== */
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
        .mobile-search-inline-wrap {
          position: relative;
          display: flex;
          align-items: center;
          flex: 1;
          margin-right: 12px;
        }
        .mobile-search-icon {
          position: absolute;
          left: 10px;
          color: #94a3b8;
          pointer-events: none;
        }
        .mobile-search-input {
          width: 100%;
          height: 38px;
          padding: 0 28px 0 32px;
          font-family: var(--font-inter);
          font-size: 13.5px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          background-color: #f9fafb;
          color: #0f172a;
        }
        .mobile-search-input:focus {
          outline: none;
          border-color: var(--color-red-alt);
          background-color: #ffffff;
        }
        .mobile-search-clear {
          position: absolute;
          right: 8px;
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          padding: 2px;
          display: flex;
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

        /* ==================== MAIN CATALOG LAYOUT ==================== */
        .product-catalog-section {
          padding: 32px 0 80px 0;
        }
        .product-catalog-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 32px;
          align-items: start;
        }

        /* ==================== LEFT SIDEBAR ==================== */
        .product-filter-sidebar {
          position: sticky;
          top: 200px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 20px 18px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          max-height: calc(100vh - 220px);
          overflow-y: auto;
          scrollbar-width: none;
        }
        .product-filter-sidebar::-webkit-scrollbar {
          display: none;
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
          padding-bottom: 4px;
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
          font-size: 11.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #6b7280;
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
        .filter-divider {
          height: 1px;
          background-color: #f1f5f9;
          margin: 2px 0;
        }

        /* Category List */
        .category-filter-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .category-filter-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 7px 10px;
          border-radius: 8px;
          font-family: var(--font-inter);
          font-size: 13.5px;
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
        .category-item-name {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cat-item-icon {
          color: #9ca3af;
        }
        .category-filter-item.active .cat-item-icon {
          color: var(--color-red-alt);
        }
        .cat-icon {
          color: #1f2937;
          flex-shrink: 0;
        }
        .category-filter-item.active .cat-icon {
          color: var(--color-red-alt);
        }
        .filter-count-badge {
          font-size: 11px;
          font-weight: 600;
          color: #9ca3af;
          background: #f3f4f6;
          padding: 1px 7px;
          border-radius: 10px;
          min-width: 22px;
          text-align: center;
        }
        .category-filter-item.active .filter-count-badge {
          background: #fee2e2;
          color: var(--color-red-alt);
        }

        /* Brand Pills */
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

        /* Sidebar Help Box */
        .sidebar-help-box {
          background: linear-gradient(135deg, #fef2f2 0%, #fff7ed 100%);
          border: 1px solid #fde8e8;
          border-radius: 10px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .sidebar-help-icon {
          color: var(--color-red-alt);
        }
        .sidebar-help-text {
          font-family: var(--font-inter);
          font-size: 12.5px;
          line-height: 1.5;
          color: #6b7280;
        }
        .sidebar-help-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-inter);
          font-size: 12.5px;
          font-weight: 700;
          color: var(--color-red-alt);
          background: none;
          cursor: pointer;
          margin-top: 2px;
          transition: transform 0.15s ease;
        }
        .sidebar-help-btn:hover {
          transform: translateX(3px);
        }

        /* ==================== RIGHT CONTENT AREA ==================== */
        .product-content-area {
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-width: 0;
        }

        /* Results Bar */
        .catalog-results-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #e2e8f0;
        }
        .results-info {
          display: flex;
          align-items: baseline;
          gap: 6px;
          flex-wrap: wrap;
        }
        .results-number {
          font-family: var(--font-inter);
          font-size: 24px;
          font-weight: 800;
          color: var(--color-navy-deep);
        }
        .results-label {
          font-family: var(--font-inter);
          font-size: 15px;
          font-weight: 600;
          color: #6b7280;
        }
        .results-in-cat,
        .results-for-query {
          font-family: var(--font-inter);
          font-size: 14px;
          color: #6b7280;
        }
        .results-in-cat strong,
        .results-for-query strong {
          color: var(--color-red-alt);
        }
        .clear-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          color: var(--color-red-alt);
          font-family: var(--font-inter);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          padding: 6px 12px;
          border-radius: 6px;
          transition: background 0.15s ease;
        }
        .clear-all-btn:hover {
          background: #fef2f2;
        }

        /* Active Chips */
        .active-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .active-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 5px 12px;
          border-radius: 20px;
          font-family: var(--font-inter);
          font-size: 12.5px;
          font-weight: 600;
          color: #374151;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .chip-x {
          background: transparent;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 0;
        }
        .chip-x:hover {
          color: var(--color-red-alt);
        }

        /* ==================== CATEGORY GROUPS ==================== */
        .category-groups-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .category-group-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .category-group-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 12px;
          border-bottom: 2px solid #e2e8f0;
        }
        .category-group-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .category-group-icon {
          color: #1f2937;
          flex-shrink: 0;
        }
        .category-group-title {
          font-family: var(--font-inter);
          font-size: 22px;
          font-weight: 800;
          color: var(--color-navy-deep);
        }
        .category-group-count {
          font-family: var(--font-inter);
          font-size: 13px;
          font-weight: 600;
          color: #94a3b8;
          background: #f1f5f9;
          padding: 2px 10px;
          border-radius: 99px;
        }
        .category-group-view-all {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-inter);
          font-size: 13.5px;
          font-weight: 600;
          color: var(--color-red-alt);
          background: none;
          cursor: pointer;
          transition: transform 0.15s ease;
        }
        .category-group-view-all:hover {
          transform: translateX(3px);
        }

        /* ==================== PRODUCT CARDS ==================== */
        .catalog-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .catalog-product-card {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          border: 1px solid #e8ecf1;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .catalog-product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
        }
        .card-thumb-wrapper {
          position: relative;
          height: 200px;
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
        .card-category-pill-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background-color: rgba(17, 24, 39, 0.8);
          backdrop-filter: blur(6px);
          color: #ffffff;
          font-family: var(--font-inter);
          font-size: 11.5px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .card-details-box {
          padding: 18px 20px 20px 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex-grow: 1;
        }
        .card-product-title {
          font-family: var(--font-inter);
          font-size: 17px;
          font-weight: 700;
          color: #111827;
          line-height: 1.3;
        }
        .card-product-subtitle {
          font-family: var(--font-inter);
          font-size: 13.5px;
          color: #6b7280;
          line-height: 1.45;
        }
        .card-brands-line {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 6px;
        }
        .card-brand-tag {
          font-family: var(--font-inter);
          font-size: 11px;
          font-weight: 600;
          color: var(--color-red-alt);
          background: #fef2f2;
          padding: 2px 8px;
          border-radius: 4px;
        }
        .card-bottom-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 12px;
          border-top: 1px solid #f3f4f6;
        }
        .card-industries {
          display: flex;
          gap: 12px;
        }
        .card-industry-dot {
          font-family: var(--font-inter);
          font-size: 11.5px;
          font-weight: 500;
          color: #94a3b8;
          position: relative;
          padding-left: 10px;
        }
        .card-industry-dot::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #d1d5db;
        }
        .card-view-link {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-family: var(--font-inter);
          font-size: 12.5px;
          font-weight: 700;
          color: var(--color-red-alt);
          transition: transform 0.15s ease;
        }
        .catalog-product-card:hover .card-view-link {
          transform: translateX(3px);
        }

        /* ==================== EMPTY STATE ==================== */
        .catalog-empty-state {
          background: #ffffff;
          border: 2px dashed #e2e8f0;
          border-radius: 16px;
          padding: 60px 30px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }
        .empty-icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #fef2f2;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .empty-title {
          font-family: var(--font-inter);
          font-size: 20px;
          font-weight: 800;
          color: #111827;
        }
        .empty-desc {
          font-family: var(--font-inter);
          font-size: 14.5px;
          color: #6b7280;
          max-width: 400px;
          line-height: 1.5;
        }
        .btn-reset-empty {
          margin-top: 6px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: var(--color-red-alt);
          color: #ffffff;
          font-family: var(--font-inter);
          font-size: 14px;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .btn-reset-empty:hover {
          background: #b31a20;
        }

        /* ==================== MOBILE DRAWER ==================== */
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

        /* ==================== RESPONSIVE ==================== */
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
          .catalog-search-section {
            display: none;
          }
          .catalog-cards-grid {
            grid-template-columns: repeat(2, 1fr);
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
          .category-group-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .category-group-title {
            font-size: 18px;
          }
          .product-catalog-container {
            padding: 0 16px;
          }
        }
      `}</style>
    </div>
  );
};
