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
  const [activeDeptId, setActiveDeptId] = useState<string>('dining');
  const [activeSubcat, setActiveSubcat] = useState<string>('All');
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
        // Find which department owns this category
        const dept = HOSPITALITY_DEPARTMENTS.find(d => d.categories.includes(matchedCat));
        if (dept) {
          setActiveDeptId(dept.id);
          setActiveSubcat(matchedCat);
        } else {
          setActiveDeptId('all');
          setActiveSubcat(matchedCat);
        }
      } else {
        // Check if sector matches a department
        if (initialFilter.toLowerCase().includes('hotel') || initialFilter.toLowerCase().includes('restaurant')) {
          setActiveDeptId('dining');
        } else if (initialFilter.toLowerCase().includes('cafe')) {
          setActiveDeptId('cafe');
        } else if (initialFilter.toLowerCase().includes('catering')) {
          setActiveDeptId('kitchen');
        }
      }
      if (onClearInitialFilter) onClearInitialFilter();
    }
  }, [initialFilter, onClearInitialFilter]);

  // Active Department Object
  const currentDept = useMemo(() => {
    return HOSPITALITY_DEPARTMENTS.find(d => d.id === activeDeptId) || null;
  }, [activeDeptId]);

  // Available sub-categories for the active department
  const availableSubcategories = useMemo(() => {
    if (!currentDept) return CATEGORY_FILTERS;
    return currentDept.categories;
  }, [currentDept]);

  // Filter products based on active department, subcategory, and search query
  const filteredProducts = useMemo(() => {
    return CATALOG_PRODUCTS.filter(product => {
      // 1. Department match
      if (currentDept) {
        const belongsToDept = currentDept.categories.includes(product.category);
        if (!belongsToDept) return false;
      }

      // 2. Sub-category match
      if (activeSubcat !== 'All') {
        if (product.category !== activeSubcat) return false;
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
  }, [currentDept, activeSubcat, searchQuery]);

  // Handle department change
  const handleSelectDept = (deptId: string) => {
    setActiveDeptId(deptId);
    setActiveSubcat('All');
    setSearchQuery('');
  };

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

        {/* Department Switcher Navigation */}
        <div className="product-hero-tabs-wrap">
          <div className="product-hero-tabs-container">
            <nav className="department-tabs-bar" aria-label="Hospitality departments">
              {HOSPITALITY_DEPARTMENTS.map(dept => {
                const count = CATALOG_PRODUCTS.filter(p => dept.categories.includes(p.category)).length;
                const isActive = activeDeptId === dept.id;
                return (
                  <button
                    key={dept.id}
                    type="button"
                    className={`dept-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleSelectDept(dept.id)}
                  >
                    <span>{dept.label}</span>
                    <span className="dept-tab-badge">{count}</span>
                  </button>
                );
              })}
              <button
                type="button"
                className={`dept-tab-btn ${activeDeptId === 'all' ? 'active' : ''}`}
                onClick={() => handleSelectDept('all')}
              >
                <span>Master Catalog (All Items)</span>
                <span className="dept-tab-badge">{CATALOG_PRODUCTS.length}</span>
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* ==================== 3. SUB-CATEGORY & SEARCH BAR ==================== */}
      <div className="lookbook-subnav-bar">
        <div className="lookbook-subnav-inner">
          <div className="subcat-pills-row">
            <button
              type="button"
              className={`subcat-pill ${activeSubcat === 'All' ? 'active' : ''}`}
              onClick={() => setActiveSubcat('All')}
            >
              <span>All Department Items</span>
              <span className="subcat-count">{filteredProducts.length}</span>
            </button>
            {availableSubcategories.map(cat => {
              const catCount = CATALOG_PRODUCTS.filter(p => p.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  className={`subcat-pill ${activeSubcat === cat ? 'active' : ''}`}
                  onClick={() => setActiveSubcat(cat)}
                >
                  <CategoryIcon category={cat} size={14} />
                  <span>{cat}</span>
                  <span className="subcat-count">{catCount}</span>
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
                placeholder="Search products, materials, brands..."
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

      {/* ==================== 4. MAIN CONTENT AREA ==================== */}
      <main className="lookbook-content-layout">
        <div className="lookbook-results-header">
          <div className="lookbook-results-count">
            Showing <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'commercial product' : 'commercial products'} in {currentDept ? currentDept.label : 'Master Catalog'}
            {activeSubcat !== 'All' && <span> · Category: <strong>{activeSubcat}</strong></span>}
            {searchQuery && <span> · Matching "<strong>{searchQuery}</strong>"</span>}
          </div>

          {(activeSubcat !== 'All' || searchQuery) && (
            <button 
              type="button"
              className="btn-clear-all-filters"
              onClick={() => {
                setActiveSubcat('All');
                setSearchQuery('');
              }}
            >
              <RotateCcw size={13} />
              <span>Reset Filters</span>
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
                setActiveSubcat('All');
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
