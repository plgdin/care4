import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
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
  Droplets,
  CookingPot,
  SprayCan,
  FlaskConical,
  Wrench,
  Package,
  Send,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Tag as TagIcon,
  Check,
  type LucideIcon
} from 'lucide-react';
import {
  CATALOG_PRODUCTS,
  CATEGORY_FILTERS,
  ProductCatalogCard,
  brandColor,
  findBrochure
} from '../data/siteData';
import { ProductDetailModal } from '../components/ProductDetailModal';
import { ClientMarquee } from '../components/ClientMarquee';
import '../styles/product-page.css';


// Category Icon Mapping
const CATEGORY_ICON_MAP: Record<string, LucideIcon> = {
  'Crockery': UtensilsCrossed,
  'Cutlery': Utensils,
  'Linen': Layers,
  'Guest Amenities': Droplets,
  'Kitchen Utensils': CookingPot,
  'House Keeping': SprayCan,
  'Cleaning Chemicals': FlaskConical,
  'Kitchen Equipments': Wrench
};

const CategoryIcon: React.FC<{ category: string; size?: number }> = ({ category, size = 14 }) => {
  const IconComponent = CATEGORY_ICON_MAP[category] || Package;
  return <IconComponent size={size} />;
};

// Hook to track scroll overflow and provide scroll actions
function useScrollArrows(deps: unknown[] = []) {
  const ref = useRef<HTMLElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkScroll, ...deps]);

  const scrollBy = useCallback((dir: 'left' | 'right') => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -200 : 200, behavior: 'smooth' });
  }, []);

  return { ref, canScrollLeft, canScrollRight, scrollBy };
}

// Scroll arrow button component
const ScrollArrow: React.FC<{
  direction: 'left' | 'right';
  visible: boolean;
  onClick: () => void;
  variant?: 'light' | 'dark';
}> = ({ direction, visible, onClick, variant = 'dark' }) => {
  if (!visible) return null;
  return (
    <button
      type="button"
      className={`scroll-arrow-btn scroll-arrow-${direction} scroll-arrow-${variant}`}
      onClick={onClick}
      aria-label={`Scroll ${direction}`}
    >
      {direction === 'left' ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
    </button>
  );
};

// Custom Brand Dropdown — styled alternative to a native select
const BrandSelect: React.FC<{
  brands: string[];
  value: string | null;
  onChange: (brand: string | null) => void;
}> = ({ brands, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click / Escape
  useEffect(() => {
    if (!open) return;
    const handlePointer = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handlePointer);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handlePointer);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  return (
    <div className="lb-brand-select-wrap" ref={wrapRef}>
      <button
        type="button"
        className="lb-brand-select-btn"
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <TagIcon size={15} className="lb-brand-select-ico" />
        <span className={`lb-brand-select-value ${value ? 'picked' : ''}`}>
          {value ?? 'All Brands'}
        </span>
        <ChevronDown size={14} className={`lb-brand-select-chev ${open ? 'open' : ''}`} />
      </button>

      {open && (
        <div className="lb-brand-menu" role="listbox" aria-label="Brands">
          <button
            type="button"
            role="option"
            aria-selected={value === null}
            className="lb-brand-option lb-brand-option-all"
            onClick={() => {
              onChange(null);
              setOpen(false);
            }}
          >
            <Grid3X3 size={14} />
            <span>All Brands</span>
            {value === null && <Check size={14} className="lb-brand-check" />}
          </button>

          <div className="lb-brand-menu-list">
            {brands.map(brand => (
              <button
                key={brand}
                type="button"
                role="option"
                aria-selected={value === brand}
                className={`lb-brand-option ${value === brand ? 'active' : ''}`}
                onClick={() => {
                  onChange(brand);
                  setOpen(false);
                }}
              >
                <span className={`lb-brand-dot ${brandColor(brand) === 'blue' ? 'dot-blue' : 'dot-red'}`} />
                <span className="lb-brand-name" title={brand}>{brand}</span>
                {value === brand && <Check size={14} className="lb-brand-check" />}
              </button>
            ))}
            {brands.length === 0 && (
              <div className="lb-brand-none">No brands in this classification</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

interface ProductPageProps {
  onOpenQuote: (productName?: string) => void;
  initialFilter?: string;
  onClearInitialFilter?: () => void;
}

// Open the matching brand brochure PDF; fall back to the full detail dialog
const openBrochureOrDetails = (
  product: ProductCatalogCard,
  openDetails: () => void
) => {
  const brochure = findBrochure(product.brands);
  if (brochure) {
    window.open(brochure, '_blank', 'noopener,noreferrer');
  } else {
    openDetails();
  }
};

export const ProductPage: React.FC<ProductPageProps> = ({
  onOpenQuote,
  initialFilter,
  onClearInitialFilter
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<ProductCatalogCard | null>(null);

  // Scroll arrows for classification tabs
  const classificationScroll = useScrollArrows([activeCategory]);

  // Sync initial filter from navigation
  useEffect(() => {
    if (initialFilter) {
      const normalizedFilter = initialFilter.toLowerCase().replace(/-/g, ' ');
      const clean = (s: string) => s.toLowerCase().replace(/[-\s]+/g, '');
      const matchedCat = CATEGORY_FILTERS.find(c =>
        c.toLowerCase() === initialFilter.toLowerCase() ||
        c.toLowerCase() === normalizedFilter ||
        clean(c) === clean(initialFilter)
      );
      if (matchedCat) {
        setActiveCategory(matchedCat);
      }
      if (onClearInitialFilter) onClearInitialFilter();
    }
  }, [initialFilter, onClearInitialFilter]);

  // Handle classification change
  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
    setSelectedBrand(null);
  };

  // Brand pills for the active classification (sorted A→Z)
  const availableBrands = useMemo(() => {
    const brands = CATALOG_PRODUCTS
      .filter(product => activeCategory === 'All' || product.category === activeCategory)
      .map(product => product.brands[0])
      .filter((brand): brand is string => Boolean(brand));
    return Array.from(new Set(brands)).sort((a, b) => a.localeCompare(b));
  }, [activeCategory]);

  // Filter by classification, brand pill & search, then group brands A→Z
  const filteredProducts = useMemo(() => {
    return CATALOG_PRODUCTS
      .filter(product => {
        // 1. Category classification match
        if (activeCategory !== 'All') {
          if (product.category !== activeCategory) return false;
        }

        // 2. Brand pill match
        if (selectedBrand && !product.brands.includes(selectedBrand)) {
          return false;
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
      })
      .sort((a, b) => {
        const byBrand = (a.brands[0] ?? '').localeCompare(b.brands[0] ?? '');
        return byBrand !== 0 ? byBrand : a.title.localeCompare(b.title);
      });
  }, [activeCategory, selectedBrand, searchQuery]);

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
          <div className="product-hero-tabs-container scroll-arrow-wrapper">
            <ScrollArrow direction="left" visible={classificationScroll.canScrollLeft} onClick={() => classificationScroll.scrollBy('left')} variant="light" />
            <nav className="classification-tabs-bar" ref={classificationScroll.ref as React.RefObject<HTMLElement>} aria-label="Official Product Classifications">
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
            <ScrollArrow direction="right" visible={classificationScroll.canScrollRight} onClick={() => classificationScroll.scrollBy('right')} variant="light" />
          </div>
        </div>
      </section>

      {/* ==================== 2. STICKY SEARCH BAR ==================== */}
      <div className="lookbook-subnav-bar">
        <div className="lookbook-subnav-inner">
          <div className="lookbook-search-toggle-wrap">
            <div className="lookbook-search-controls">
              <div className="lookbook-search-input-wrap">
                <Search size={16} className="lookbook-search-icon" />
                <input
                  id="catalog-main-search-input"
                  type="text"
                  placeholder={`Search ${CATALOG_PRODUCTS.length} products & brands...`}
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

              {/* Brand Dropdown — pick the brand inside the selected classification */}
              <BrandSelect
                brands={availableBrands}
                value={selectedBrand}
                onChange={setSelectedBrand}
              />
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
                title="Procurement Ledger"
              >
                <LayoutList size={15} />
                <span>Ledger</span>
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
              <span> across <strong>All {CATEGORY_FILTERS.length} Classifications</strong></span>
            )}
            {selectedBrand && <span> · Brand: <strong>{selectedBrand}</strong></span>}
            {searchQuery && <span> · Matching "<strong>{searchQuery}</strong>"</span>}
          </div>

          {(activeCategory !== 'All' || selectedBrand || searchQuery) && (
            <button
              type="button"
              className="btn-clear-all-filters"
              onClick={() => {
                setActiveCategory('All');
                setSelectedBrand(null);
                setSearchQuery('');
              }}
            >
              <RotateCcw size={13} />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>

        {/* ==================== HIGH-IMPACT CARDS GRID OR PROCURE LEDGER ==================== */}

        {/* ==================== EMPTY / NO-MATCH STATE ==================== */}
        {filteredProducts.length === 0 ? (
          <div className="catalog-empty-view">
            <div className="empty-icon-box">
              <Search size={32} />
            </div>
            <h3 className="empty-heading">Uh-oh — that combination is not in our catalogue</h3>
            <p className="empty-desc">
              What you're looking for is not currently listed here. No problem — our sales team
              sources products like this for clients. Try contacting our sales desk and we will get it for you.
            </p>
            <div className="empty-actions">
              <button
                type="button"
                className="btn-reset-filters-cta"
                onClick={() => {
                  setActiveCategory('All');
                  setSelectedBrand(null);
                  setSearchQuery('');
                }}
              >
                <RotateCcw size={15} />
                <span>Reset Search & Filters</span>
              </button>
              <button
                type="button"
                className="btn-contact-sales-cta"
                onClick={() => onOpenQuote()}
              >
                <Send size={15} />
                <span>Contact Our Sales Team</span>
              </button>
            </div>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="lookbook-cards-grid">
            {filteredProducts.map(product => {
              const hasBrochure = Boolean(findBrochure(product.brands));
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
                  {/* Brand badges — top-left of the image */}
                  {product.brands.length > 0 && (
                    <div className="lb-brand-pills lb-card-brand-pills">
                      {product.brands.map(brand => (
                        <span
                          key={brand}
                          className={`lb-brand-pill ${brandColor(brand) === 'blue' ? 'brand-pill-blue' : 'brand-pill-red'}`}
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="lb-card-body">
                  <h3
                    className="lb-card-title"
                    onClick={() => setSelectedDetailProduct(product)}
                  >
                    {product.title}
                  </h3>
                  <p className="lb-card-desc">{product.subtitle || product.details}</p>

                  <div className="lb-card-actions">
                    <button
                      type="button"
                      className="btn-lb-catalog"
                      onClick={() => openBrochureOrDetails(product, () => setSelectedDetailProduct(product))}
                    >
                      <FileText size={15} />
                      <span>{hasBrochure ? 'Product Catalogue' : 'View Details'}</span>
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
                  <th>Product</th>
                  <th>Brands</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map(product => {
                  const hasBrochure = Boolean(findBrochure(product.brands));
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
                      {product.brands.map(brand => (
                        <span
                          key={brand}
                          className={`table-brand-pill ${brandColor(brand) === 'blue' ? 'brand-pill-blue' : 'brand-pill-red'}`}
                        >
                          {brand}
                        </span>
                      ))}
                    </td>
                    <td style={{ textAlign: 'right' }} className="table-actions-cell">
                      <button
                        type="button"
                        className="btn-table-specs"
                        onClick={() => openBrochureOrDetails(product, () => setSelectedDetailProduct(product))}
                      >
                        {hasBrochure ? 'Catalogue' : 'Details'}
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

      {/* ==================== 5. OUR CLIENTS ==================== */}
      <ClientMarquee />

      {/* ==================== 6. PRODUCT DETAIL MODAL ==================== */}
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
