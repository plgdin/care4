import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  X, 
  Grid3X3, 
  LayoutList, 
  Check, 
  Plus, 
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
// Department Lookbook Definitions & Turnkey Bundles
// ----------------------------------------------------------------------
interface TurnkeyBundle {
  title: string;
  desc: string;
  includes: string[];
  dispatch: string;
  inquiryPayload: string;
}

interface HospitalityDepartment {
  id: string;
  label: string;
  categories: string[];
  narrativeTitle: string;
  narrativeText: string;
  bgImage: string;
  verifiedBrands: string[];
  bundle: TurnkeyBundle;
}

const HOSPITALITY_DEPARTMENTS: HospitalityDepartment[] = [
  {
    id: 'dining',
    label: 'Fine Dining & Banquets',
    categories: ['Crockery', 'Cutlery', 'Linen'],
    narrativeTitle: 'Curated Tabletop & Banquet Hospitality',
    narrativeText: 'Super-vitrified European fine porcelain, high-grade Dinewell melamine, mirror-finished stainless flatware, and luxury banquet linens engineered for high-turnover luxury dining.',
    bgImage: '/images/image__fine_dining__2ac60065.webp',
    verifiedBrands: ['Dinewell', 'Ariane', 'Arcoroc', 'Borosil', 'FNS', 'Ocean'],
    bundle: {
      title: '100-Cover Banquet Opening Suite',
      desc: 'Turnkey procurement package including complete dinner plates, side bowls, satin cutlery, water goblets & banquet napkins.',
      includes: [
        '100x Dinewell Melamine Dinner Plates',
        '100x FNS 18/10 Mirror Cutlery Sets',
        '120x Borosil / Ocean Glassware Tumblers',
        '100x Combed Cotton Damask Napkins'
      ],
      dispatch: 'Ready for 48-Hour Dispatch',
      inquiryPayload: 'Turnkey 100-Cover Banquet Opening Suite (Dinewell Tableware, FNS Cutlery, Ocean Glassware, Luxury Napkins)'
    }
  },
  {
    id: 'cafe',
    label: 'Cafe & Beverage Lounge',
    categories: ['Cafes', 'Crockery'],
    narrativeTitle: 'Specialty Coffee, Barista & Bar Supply',
    narrativeText: 'Commercial ceramic espresso cups, frappe drinkware, stainless barista steaming pitchers, cocktail bar accessories, and food-grade eco takeout packaging.',
    bgImage: '/images/category_cafe_beverage.jpg',
    verifiedBrands: ['Ocean', 'Borosil', 'Dinewell', 'Milton'],
    bundle: {
      title: 'Specialty Espresso & Bar Launch Setup',
      desc: 'Everything required behind the barista station and beverage bar counter for modern quick-service cafes.',
      includes: [
        '72x Commercial Latte & Cappuccino Cups',
        '48x Ocean Frappe & Shake Glassware',
        'Commercial Barista Milk Pitchers & Tampers',
        '1,000x Eco Paper Cups & Straws'
      ],
      dispatch: 'In Stock / Rapid Delivery',
      inquiryPayload: 'Specialty Espresso & Bar Launch Setup (Commercial Ceramic Mugs, Ocean Frappe Glassware, Barista Pitchers, Eco Cups)'
    }
  },
  {
    id: 'kitchen',
    label: 'Commercial Kitchen',
    categories: ['Kitchen Utensils', 'Engineering Equipments'],
    narrativeTitle: 'Back-of-House Cookline & Food Storage',
    narrativeText: 'Heavy-gauge commercial cookware, Cambro NSF food storage pans, forged chef knives, preparation tools, and institutional engineering equipment.',
    bgImage: '/images/commercial_kitchen_equipment.jpg',
    verifiedBrands: ['Cambro Nilkamal', 'Prestige', 'Godrej - Cartini', 'Conta'],
    bundle: {
      title: 'Heavy Back-of-House Chef Cookline Suite',
      desc: 'Commercial prep and cooking suite designed to withstand intense 16-hour kitchen operations.',
      includes: [
        'Prestige Heavy-Duty Stockpots & Kadai',
        'Godrej Cartini Forged Chef Knife Sets',
        'Cambro NSF Polycarbonate GN Food Pans',
        'Stainless Steel Prep Colanders & Ladles'
      ],
      dispatch: 'Institutional Freight Ready',
      inquiryPayload: 'Heavy Back-of-House Chef Cookline Suite (Prestige Commercial Cookware, Cambro GN Pans, Godrej Cartini Knives)'
    }
  },
  {
    id: 'housekeeping',
    label: 'Housekeeping & Suites',
    categories: ['Guest Amenities', 'Linen', 'House Keeping', 'Cleaning Chemicals'],
    narrativeTitle: 'In-Room Luxury & Institutional Sanitation',
    narrativeText: 'Plush combed cotton bath towels, botanical hotel toiletries, Diversey hospital-grade disinfectant suites, and professional janitorial equipment.',
    bgImage: '/images/luxury_hotel_linen.jpg',
    verifiedBrands: ['Diversey', 'Gala', 'SAC', 'Conta'],
    bundle: {
      title: '50-Room Hotel Suite Sourcing Package',
      desc: 'Complete turnkey room essentials bundle for boutique hotels, resorts, and corporate guest houses.',
      includes: [
        '150x 600 GSM Combed Cotton Bath Towels',
        '500x Botanical Guest Shampoo & Soaps',
        'Diversey R-Series Sanitation Chemical Kit',
        'Commercial Mops, Trolleys & Janitorial Carts'
      ],
      dispatch: 'Bulk Institutional Freight Ready',
      inquiryPayload: '50-Room Hotel Suite Sourcing Package (Plush Bath Towels, Guest Amenities, Diversey Chemicals)'
    }
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

  // RFQ Inquiry Tray State
  const [rfqItems, setRfqItems] = useState<string[]>([]);
  const [rfqDrawerOpen, setRfqDrawerOpen] = useState(false);

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

  // Toggle item in RFQ Tray
  const handleToggleRfq = (productId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setRfqItems(prev => {
      const exists = prev.includes(productId);
      const updated = exists ? prev.filter(id => id !== productId) : [...prev, productId];
      if (!exists && updated.length === 1) {
        setRfqDrawerOpen(true);
      }
      return updated;
    });
  };

  // Submit RFQ Tray
  const handleSubmitRfq = () => {
    const productsInRfq = CATALOG_PRODUCTS.filter(p => rfqItems.includes(p.id));
    const titles = productsInRfq.map(p => p.title).join(', ');
    setRfqDrawerOpen(false);
    onOpenQuote(titles);
  };

  // Quick Inquire on Turnkey Bundle
  const handleInquireBundle = (bundle: TurnkeyBundle) => {
    onOpenQuote(bundle.inquiryPayload);
  };

  return (
    <div className="lookbook-page-root">
      {/* ==================== 1. MASTHEAD & DEPARTMENT TABS ==================== */}
      <section className="lookbook-masthead">
        <div className="lookbook-masthead-inner">
          <div className="lookbook-masthead-header">
            <div className="lookbook-header-text">
              <h1 className="lookbook-main-title">Hospitality Department Lookbook</h1>
              <p className="lookbook-main-desc">
                Organized by operational department. Explore curated supply lines, verified partner brands, and turnkey opening bundles for hotels, restaurants, cafes, and catering facilities.
              </p>
            </div>

            <div className="lookbook-quick-stats">
              <div className="lookbook-stat-item">
                <span className="lookbook-stat-num">4</span>
                <span className="lookbook-stat-label">Departments</span>
              </div>
              <div className="lookbook-stat-div" />
              <div className="lookbook-stat-item">
                <span className="lookbook-stat-num">68+</span>
                <span className="lookbook-stat-label">Product Lines</span>
              </div>
              <div className="lookbook-stat-div" />
              <div className="lookbook-stat-item">
                <span className="lookbook-stat-num">100%</span>
                <span className="lookbook-stat-label">Commercial Grade</span>
              </div>
            </div>
          </div>

          {/* Department Switcher Navigation */}
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
              <span>Master Catalog (All)</span>
              <span className="dept-tab-badge">{CATALOG_PRODUCTS.length}</span>
            </button>
          </nav>
        </div>
      </section>

      {/* ==================== 2. EDITORIAL HERO & TURNKEY BUNDLE ==================== */}
      {currentDept && (
        <section className="dept-editorial-banner">
          <div className="dept-editorial-inner">
            {/* Department Narrative & Environment Visual */}
            <div className="dept-narrative-card">
              <img 
                src={currentDept.bgImage} 
                alt={currentDept.narrativeTitle} 
                className="dept-narrative-bg" 
              />
              <div className="dept-narrative-overlay" />
              <div className="dept-narrative-content">
                <h2 className="dept-narrative-title">{currentDept.narrativeTitle}</h2>
                <p className="dept-narrative-text">{currentDept.narrativeText}</p>
                <div className="dept-verified-brands">
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
                    Verified Brands:
                  </span>
                  {currentDept.verifiedBrands.map(b => (
                    <span key={b} className="dept-brand-pill">{b}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Turnkey Procurement Bundle */}
            <div className="turnkey-bundle-card">
              <div>
                <span className="bundle-highlight-badge">Turnkey Procurement Bundle</span>
                <h3 className="bundle-card-title">{currentDept.bundle.title}</h3>
                <p className="bundle-card-desc">{currentDept.bundle.desc}</p>

                <div className="bundle-includes-grid">
                  {currentDept.bundle.includes.map((inc, i) => (
                    <div key={i} className="bundle-item-check">
                      <Check size={14} className="bundle-check-icon" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bundle-action-row">
                <div className="bundle-dispatch-note">
                  Logistics: <strong>{currentDept.bundle.dispatch}</strong>
                </div>
                <button 
                  type="button"
                  className="btn-inquire-bundle"
                  onClick={() => handleInquireBundle(currentDept.bundle)}
                >
                  <Send size={14} />
                  <span>Inquire on Bundle</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

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
                  <CategoryIcon category={cat} size={13} />
                  <span>{cat}</span>
                  <span className="subcat-count">{catCount}</span>
                </button>
              );
            })}
          </div>

          <div className="lookbook-search-toggle-wrap">
            <div className="lookbook-search-input-wrap">
              <Search size={14} className="lookbook-search-icon" />
              <input 
                type="text"
                placeholder="Search items in this section..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  className="lookbook-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* View Switcher */}
            <div className="lookbook-view-switcher">
              <button 
                type="button"
                className={`lb-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Card Grid"
              >
                <Grid3X3 size={14} />
                <span>Cards</span>
              </button>
              <button 
                type="button"
                className={`lb-view-btn ${viewMode === 'table' ? 'active' : ''}`}
                onClick={() => setViewMode('table')}
                title="Spec Table"
              >
                <LayoutList size={14} />
                <span>Specs</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== 4. MAIN CONTENT AREA ==================== */}
      <main className="lookbook-content-layout">
        <div className="lookbook-results-header">
          <div className="lookbook-results-count">
            Showing <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'item' : 'items'} in {currentDept ? currentDept.label : 'All Categories'}
            {activeSubcat !== 'All' && <span> · Filtered by <strong>{activeSubcat}</strong></span>}
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
              <RotateCcw size={12} />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* ==================== 5. CARDS GRID OR SPEC TABLE ==================== */}
        {filteredProducts.length === 0 ? (
          <div className="catalog-empty-view">
            <div className="empty-icon-box">
              <Search size={28} />
            </div>
            <h3 className="empty-heading">No items match your query</h3>
            <p className="empty-desc">
              Try clearing your search keyword or switching to another category.
            </p>
            <button 
              type="button"
              className="btn-reset-filters-cta"
              onClick={() => {
                setActiveSubcat('All');
                setSearchQuery('');
              }}
            >
              <RotateCcw size={14} />
              <span>Clear Filter</span>
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="lookbook-cards-grid">
            {filteredProducts.map(product => {
              const inRfq = rfqItems.includes(product.id);
              const specs = PRODUCT_SPECS_MAP[product.id];
              const primaryBrand = product.brands[0] || 'Care4 Institutional';
              const materialSpec = specs?.material || product.details;

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
                      <CategoryIcon category={product.category} size={11} />
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

                    <div className="lb-card-spec-meta">
                      <FileText size={12} style={{ color: '#64748b', flexShrink: 0 }} />
                      <span>{materialSpec}</span>
                    </div>

                    <div className="lb-card-actions">
                      <button 
                        type="button"
                        className="btn-lb-specs"
                        onClick={() => setSelectedDetailProduct(product)}
                      >
                        <FileText size={13} />
                        <span>Specs Sheet</span>
                      </button>

                      <button 
                        type="button"
                        className={`btn-lb-quote ${inRfq ? 'in-rfq' : ''}`}
                        onClick={(e) => handleToggleRfq(product.id, e)}
                      >
                        {inRfq ? (
                          <>
                            <Check size={13} />
                            <span>In RFQ</span>
                          </>
                        ) : (
                          <>
                            <Plus size={13} />
                            <span>+ Quote</span>
                          </>
                        )}
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
                  <th style={{ width: '80px' }}>Item</th>
                  <th>Product Title & Category</th>
                  <th>Verified Brands</th>
                  <th>Material & Specs</th>
                  <th>Sectors</th>
                  <th>Carton Pack</th>
                  <th style={{ textAlign: 'right' }}>Procurement Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map(product => {
                  const inRfq = rfqItems.includes(product.id);
                  const specs = PRODUCT_SPECS_MAP[product.id];
                  const packing = specs?.keySpecs?.packing || 'Standard Commercial Pack';
                  const material = specs?.keySpecs?.material || product.details;

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
                        {product.industries.map(ind => (
                          <span key={ind} className="table-brand-pill">{ind}</span>
                        ))}
                      </td>
                      <td>
                        <span style={{ fontSize: '12px', color: '#64748b' }}>{packing}</span>
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
                          className={`btn-table-quote ${inRfq ? 'in-rfq' : ''}`}
                          onClick={(e) => handleToggleRfq(product.id, e)}
                        >
                          {inRfq ? '✓ In RFQ' : '+ Add Quote'}
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

      {/* ==================== 6. FLOATING RFQ DOCK & DRAWER ==================== */}
      {rfqItems.length > 0 && (
        <aside className="rfq-dock-root" aria-label="RFQ Inquiry Tray">
          {rfqDrawerOpen && (
            <div className="rfq-dock-drawer">
              <div className="rfq-drawer-top">
                <span className="rfq-drawer-top-title">Selected for Quote ({rfqItems.length})</span>
                <button 
                  className="rfq-drawer-top-close"
                  onClick={() => setRfqDrawerOpen(false)}
                  aria-label="Close tray"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="rfq-drawer-scroll">
                {rfqItems.map(id => {
                  const prod = CATALOG_PRODUCTS.find(p => p.id === id);
                  if (!prod) return null;
                  return (
                    <div key={id} className="rfq-drawer-row">
                      <div className="rfq-drawer-info">
                        <div className="rfq-drawer-item-title">{prod.title}</div>
                        <div className="rfq-drawer-item-sub">{prod.category} · {prod.brands[0] || 'Care4'}</div>
                      </div>
                      <button 
                        type="button"
                        className="rfq-drawer-remove"
                        onClick={() => handleToggleRfq(id)}
                        title="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="rfq-drawer-bottom">
                <button 
                  type="button"
                  className="btn-rfq-submit-tray"
                  onClick={handleSubmitRfq}
                >
                  <Send size={15} />
                  <span>Request Bulk Pricing ({rfqItems.length})</span>
                </button>
                <button 
                  type="button"
                  className="btn-rfq-clear"
                  onClick={() => setRfqItems([])}
                >
                  Clear all items
                </button>
              </div>
            </div>
          )}

          <button 
            type="button"
            className="rfq-dock-pill"
            onClick={() => setRfqDrawerOpen(!rfqDrawerOpen)}
          >
            <span>RFQ Inquiry</span>
            <span className="rfq-dock-count">{rfqItems.length}</span>
          </button>
        </aside>
      )}

      {/* ==================== 7. PRODUCT SPEC MODAL ==================== */}
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
