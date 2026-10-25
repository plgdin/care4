import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  X, 
  Grid3X3, 
  LayoutList, 
  FileText, 
  RotateCcw, 
  UtensilsCrossed, 
  Utensils, 
  Layers, 
  Coffee, 
  Droplets, 
  CookingPot, 
  SprayCan, 
  FlaskConical, 
  Wrench, 
  Package, 
  Send,
  ShieldCheck,
  type LucideIcon 
} from 'lucide-react';
import { 
  CATALOG_PRODUCTS, 
  CATEGORY_FILTERS, 
  ProductCatalogCard,
  PRODUCT_SPECS_MAP
} from '../data/siteData';
import { ProductDetailModal } from '../components/ProductDetailModal';
import '../styles/product-page.css';

// ----------------------------------------------------------------------
// Department Lookbook Definitions
// ----------------------------------------------------------------------
interface HospitalityDepartment {
  id: string;
  label: string;
  categories: string[];
}

const HOSPITALITY_DEPARTMENTS: HospitalityDepartment[] = [
  {
    id: 'dining',
    label: 'Fine Dining & Banquets',
    categories: ['Crockery', 'Cutlery', 'Linen']
  },
  {
    id: 'cafe',
    label: 'Cafe & Beverage Lounge',
    categories: ['Cafes', 'Crockery']
  },
  {
    id: 'kitchen',
    label: 'Commercial Kitchen',
    categories: ['Kitchen Utensils', 'Engineering Equipments']
  },
  {
    id: 'housekeeping',
    label: 'Housekeeping & Suites',
    categories: ['Guest Amenities', 'Linen', 'House Keeping', 'Cleaning Chemicals']
  }
];

// Category Icon Mapping
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

const CategoryIcon: React.FC<{ category: string; size?: number }> = ({ category, size = 14 }) => {
  const IconComponent = CATEGORY_ICON_MAP[category] || Package;
  return <IconComponent size={size} />;
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
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeDeptId, setActiveDeptId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<ProductCatalogCard | null>(null);

  // Sync initial filter from navigation
  useEffect(() => {
    if (initialFilter) {
      const normalizedFilter = initialFilter.toLowerCase().replace(/-/g, ' ');
      // Check if it's a category
      const matchedCat = CATEGORY_FILTERS.find(c => 
        c.toLowerCase() === initialFilter.toLowerCase() ||
        c.toLowerCase() === normalizedFilter
      );
      if (matchedCat) {
        setActiveCategory(matchedCat);
        setActiveDeptId('all');
      } else {
        // Check if sector matches a department
        if (initialFilter.toLowerCase().includes('hotel') || initialFilter.toLowerCase().includes('dining') || initialFilter.toLowerCase().includes('restaurant')) {
          setActiveDeptId('dining');
          setActiveCategory('All');
        } else if (initialFilter.toLowerCase().includes('cafe')) {
          setActiveDeptId('cafe');
          setActiveCategory('All');
        } else if (initialFilter.toLowerCase().includes('kitchen') || initialFilter.toLowerCase().includes('catering')) {
          setActiveDeptId('kitchen');
          setActiveCategory('All');
        } else if (initialFilter.toLowerCase().includes('housekeeping')) {
          setActiveDeptId('housekeeping');
          setActiveCategory('All');
        }
      }
      if (onClearInitialFilter) onClearInitialFilter();
    }
  }, [initialFilter, onClearInitialFilter]);

  // Active Department Object
  const currentDept = useMemo(() => {
    return HOSPITALITY_DEPARTMENTS.find(d => d.id === activeDeptId) || null;
  }, [activeDeptId]);

  // Handle classification change
  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
    if (cat !== 'All' && activeDeptId !== 'all') {
      const dept = HOSPITALITY_DEPARTMENTS.find(d => d.id === activeDeptId);
      if (dept && !dept.categories.includes(cat)) {
        setActiveDeptId('all');
      }
    }
  };

  // Handle department filter change
  const handleSelectDept = (deptId: string) => {
    setActiveDeptId(deptId);
    if (deptId !== 'all') {
      const dept = HOSPITALITY_DEPARTMENTS.find(d => d.id === deptId);
      if (dept && activeCategory !== 'All' && !dept.categories.includes(activeCategory)) {
        setActiveCategory('All');
      }
    }
  };

  // Filter products based on active department, classification, and search query
  const filteredProducts = useMemo(() => {
    return CATALOG_PRODUCTS.filter(product => {
      // 1. Department match
      if (activeDeptId !== 'all') {
        const dept = HOSPITALITY_DEPARTMENTS.find(d => d.id === activeDeptId);
        if (dept && !dept.categories.includes(product.category)) return false;
      }

      // 2. Category classification match
      if (activeCategory !== 'All') {
        if (product.category !== activeCategory) return false;
      }

      // 3. Search query match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = product.title.toLowerCase().includes(q);
        const matchSubtitle = product.subtitle.toLowerCase().includes(q);
        const matchDetails = product.details.toLowerCase().includes(q);
        const matchCategory = product.category.toLowerCase().includes(q);
        const matchBrands = product.brands.some(b => b.toLowerCase().includes(q));
        if (!matchTitle && !matchSubtitle && !matchDetails && !matchCategory && !matchBrands) {
          return false;
        }
      }

      return true;
    });
  }, [activeDeptId, activeCategory, searchQuery]);

  return (
    <div className="lookbook-page-root">
      {/* ==================== 1. PRODUCT HERO HEADER ==================== */}
      <section className="product-hero-section">
        <div className="product-hero-bg-overlay" />
        <div className="product-hero-container">
          <div className="product-hero-left">
            <h1 className="product-hero-title">Our Products</h1>
            <div className="product-hero-bar" />
            <p className="product-hero-desc">
              Care4 Associates supplies the essentials for hotels, restaurants, cafes and catering businesses — all the way from a spoon to commercial kitchen equipment, guest amenities and housekeeping solutions.
            </p>
            <button 
              type="button"
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

        {/* 2026 Product Classification Master Navigation Bar */}
        <div className="product-hero-tabs-wrap">
          <div className="product-hero-tabs-container">
            <nav className="classification-tabs-bar" aria-label="Official Product Classifications">
              <button
                type="button"
                className={`classification-tab-btn ${activeCategory === 'All' ? 'active' : ''}`}
                onClick={() => handleSelectCategory('All')}
              >
                <Grid3X3 size={15} />
                <span>All Products</span>
                <span className="tab-count-badge">{CATALOG_PRODUCTS.length}</span>
              </button>

              {CATEGORY_FILTERS.map(cat => {
                const count = CATALOG_PRODUCTS.filter(p => p.category === cat).length;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    className={`classification-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleSelectCategory(cat)}
                  >
                    <CategoryIcon category={cat} size={15} />
                    <span>{cat}</span>
                    <span className="tab-count-badge">{count}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </section>

      {/* ==================== 2. STICKY SUB-CATEGORY & SEARCH BAR ==================== */}
      <div className="lookbook-subnav-bar">
        <div className="lookbook-subnav-inner">
          {/* Operational Venue Filter Chips */}
          <div className="dept-pills-row">
            <span className="filter-row-label">Operational Scope:</span>
            <button
              type="button"
              className={`dept-pill-btn ${activeDeptId === 'all' ? 'active' : ''}`}
              onClick={() => handleSelectDept('all')}
            >
              <span>All Venues</span>
              <span className="dept-pill-badge">{CATALOG_PRODUCTS.length}</span>
            </button>
            {HOSPITALITY_DEPARTMENTS.map(dept => {
              const count = CATALOG_PRODUCTS.filter(p => dept.categories.includes(p.category)).length;
              const isActive = activeDeptId === dept.id;
              return (
                <button
                  key={dept.id}
                  type="button"
                  className={`dept-pill-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleSelectDept(dept.id)}
                >
                  <span>{dept.label}</span>
                  <span className="dept-pill-badge">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="lookbook-search-toggle-wrap">
            <div className="lookbook-search-input-wrap">
              <Search size={16} className="lookbook-search-icon" />
              <input 
                id="catalog-main-search-input"
                type="text"
                placeholder="Search 86 products, specs, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  className="lookbook-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* View Switcher */}
            <div className="lookbook-view-switcher">
              <button 
                type="button"
                className={`lb-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Showcase Cards"
              >
                <Grid3X3 size={15} />
                <span>Showcase</span>
              </button>
              <button 
                type="button"
                className={`lb-view-btn ${viewMode === 'table' ? 'active' : ''}`}
                onClick={() => setViewMode('table')}
                title="Procurement Specs Ledger"
              >
                <LayoutList size={15} />
                <span>Specs Ledger</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== 3. MAIN CONTENT AREA ==================== */}
      <main className="lookbook-content-layout">
        <div className="lookbook-results-header">
          <div className="lookbook-results-count">
            Showing <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'commercial product' : 'commercial products'}
            {activeCategory !== 'All' ? (
              <span> in <strong>{activeCategory}</strong></span>
            ) : (
              <span> across <strong>All 9 Classifications</strong></span>
            )}
            {activeDeptId !== 'all' && (
              <span> · Filtered by <strong>{currentDept?.label}</strong></span>
            )}
            {searchQuery && <span> · Matching "<strong>{searchQuery}</strong>"</span>}
          </div>

          {(activeCategory !== 'All' || activeDeptId !== 'all' || searchQuery) && (
            <button 
              type="button"
              className="btn-clear-all-filters"
              onClick={() => {
                setActiveCategory('All');
                setActiveDeptId('all');
                setSearchQuery('');
              }}
            >
              <RotateCcw size={13} />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>

        {/* ==================== 5. HIGH-IMPACT CARDS GRID OR SPEC LEDGER ==================== */}
        {filteredProducts.length === 0 ? (
          <div className="catalog-empty-view">
            <div className="empty-icon-box">
              <Search size={32} />
            </div>
            <h3 className="empty-heading">No commercial items match your query</h3>
            <p className="empty-desc">
              Try adjusting your search keyword or switching to another category tab to view available supply lines.
            </p>
            <button 
              type="button"
              className="btn-reset-filters-cta"
              onClick={() => {
                setActiveCategory('All');
                setActiveDeptId('all');
                setSearchQuery('');
              }}
            >
              <RotateCcw size={15} />
              <span>Reset Category Filter</span>
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="lookbook-cards-grid">
            {filteredProducts.map(product => {
              const specs = PRODUCT_SPECS_MAP[product.id];
              const primaryBrand = product.brands[0] || 'Care4 Institutional';
              const materialSpec = specs?.material || specs?.keySpecs?.material || product.details;
              const packingSpec = specs?.keySpecs?.packing || 'Standard Commercial Pack';
              const badgesList = specs?.badges?.map(b => b.title) || product.factors || [];
              const displayedBadges = badgesList.slice(0, 3);

              return (
                <article key={product.id} className="lb-product-card">
                  <div 
                    className="lb-card-media"
                    onClick={() => setSelectedDetailProduct(product)}
                  >
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="lb-card-img"
                      loading="lazy"
                    />
                    <div className="lb-card-cat-badge">
                      <CategoryIcon category={product.category} size={13} />
                      <span>{product.category}</span>
                    </div>
                    <div className="lb-card-brand-badge">
                      {primaryBrand}
                    </div>
                  </div>

                  <div className="lb-card-body">
                    <h3 
                      className="lb-card-title"
                      onClick={() => setSelectedDetailProduct(product)}
                    >
                      {product.title}
                    </h3>
                    <p className="lb-card-desc">{product.subtitle}</p>

                    {/* On-Card Commercial Specs Panel */}
                    <div className="lb-card-specs-panel">
                      <div className="lb-spec-line">
                        <FileText size={15} className="lb-spec-line-icon" />
                        <div className="lb-spec-line-content">
                          <span className="lb-spec-line-label">Material:</span>
                          <span className="lb-spec-line-value">{materialSpec}</span>
                        </div>
                      </div>
                      <div className="lb-spec-line">
                        <Package size={15} className="lb-spec-line-icon" />
                        <div className="lb-spec-line-content">
                          <span className="lb-spec-line-label">Packing:</span>
                          <span className="lb-spec-line-value">{packingSpec}</span>
                        </div>
                      </div>

                      {displayedBadges.length > 0 && (
                        <div className="lb-badges-strip">
                          {displayedBadges.map((badge, idx) => (
                            <span key={idx} className="lb-spec-pill">
                              <ShieldCheck size={12} />
                              <span>{badge}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="lb-card-actions">
                      <button 
                        type="button"
                        className="btn-lb-specs"
                        onClick={() => setSelectedDetailProduct(product)}
                      >
                        <FileText size={15} />
                        <span>Specs Sheet</span>
                      </button>

                      <button 
                        type="button"
                        className="btn-lb-quote"
                        onClick={() => onOpenQuote(product.title)}
                      >
                        <Send size={15} />
                        <span>Request Quote</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="catalog-table-wrapper">
            <table className="catalog-table">
              <thead>
                <tr>
                  <th style={{ width: '100px' }}>Item</th>
                  <th>Product Title & Category</th>
                  <th>Verified Brands</th>
                  <th>Material & Key Specifications</th>
                  <th>Carton Packing</th>
                  <th style={{ textAlign: 'right' }}>Procurement Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map(product => {
                  const specs = PRODUCT_SPECS_MAP[product.id];
                  const packing = specs?.keySpecs?.packing || 'Standard Commercial Pack';
                  const material = specs?.material || specs?.keySpecs?.material || product.details;

                  return (
                    <tr key={product.id}>
                      <td>
                        <div 
                          className="table-thumb-wrap"
                          onClick={() => setSelectedDetailProduct(product)}
                        >
                          <img src={product.image} alt={product.title} loading="lazy" />
                        </div>
                      </td>
                      <td>
                        <div 
                          className="table-prod-name"
                          onClick={() => setSelectedDetailProduct(product)}
                        >
                          {product.title}
                        </div>
                        <div className="table-prod-cat">{product.category}</div>
                      </td>
                      <td>
                        {product.brands.map(b => (
                          <span key={b} className="table-brand-pill">{b}</span>
                        ))}
                      </td>
                      <td>
                        <div className="table-spec-text">{material}</div>
                      </td>
                      <td>
                        <div className="table-packing-text">{packing}</div>
                      </td>
                      <td style={{ textAlign: 'right' }} className="table-actions-cell">
                        <button 
                          type="button"
                          className="btn-table-specs"
                          onClick={() => setSelectedDetailProduct(product)}
                        >
                          Specs
                        </button>
                        <button 
                          type="button"
                          className="btn-table-quote"
                          onClick={() => onOpenQuote(product.title)}
                        >
                          Request Quote
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* ==================== 6. PRODUCT SPEC MODAL ==================== */}
      <ProductDetailModal 
        product={selectedDetailProduct}
        onClose={() => setSelectedDetailProduct(null)}
        onInquire={(prodName) => {
          setSelectedDetailProduct(null);
          onOpenQuote(prodName);
        }}
      />
    </div>
  );
};

export default ProductPage;
