import React, { useState, useEffect, useMemo } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Search, 
  ExternalLink, 
  Tag, 
  Layers, 
  X, 
  Building2,
  CheckCircle2,
  Package
} from 'lucide-react';
import { 
  CLIENT_CATEGORIES, 
  CATALOGUE_ENTRIES, 
  SHEET1_DIRECTORY,
  CatalogueEntry,
  CategoryDefinition
} from '../data/siteData';
import { EnquiryContext } from '../components/QuoteModal';

interface ProductPageProps {
  selectedCategoryId?: string;
  onSelectCategory?: (catId: string) => void;
  onOpenQuote: (context?: EnquiryContext) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ 
  selectedCategoryId, 
  onSelectCategory,
  onOpenQuote 
}) => {
  const [activeId, setActiveId] = useState<string>(selectedCategoryId || 'crockery');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSheet1, setShowSheet1] = useState<boolean>(false);
  const [sheet1Search, setSheet1Search] = useState<string>('');

  // Sync internal state when prop changes from outside
  useEffect(() => {
    if (selectedCategoryId && selectedCategoryId !== activeId) {
      setActiveId(selectedCategoryId);
      setSearchQuery('');
    }
  }, [selectedCategoryId]);

  const handleCategorySelect = (id: string) => {
    setActiveId(id);
    setSearchQuery('');
    if (onSelectCategory) {
      onSelectCategory(id);
    }
  };

  const activeCategory: CategoryDefinition = useMemo(() => {
    return CLIENT_CATEGORIES.find((c) => c.id === activeId) || CLIENT_CATEGORIES[0];
  }, [activeId]);

  // Entries belonging exclusively to the active category
  const categoryEntries = useMemo(() => {
    return CATALOGUE_ENTRIES.filter((e) => e.categoryId === activeCategory.id);
  }, [activeCategory.id]);

  // Search filter inside active category
  const filteredEntries = useMemo(() => {
    if (!searchQuery.trim()) return categoryEntries;
    const q = searchQuery.toLowerCase().trim();
    return categoryEntries.filter(
      (e) => e.name.toLowerCase().includes(q) || (e.subgroup && e.subgroup.toLowerCase().includes(q))
    );
  }, [categoryEntries, searchQuery]);

  // Guest Amenities subgroups
  const guestAmenityGroups = useMemo(() => {
    if (activeCategory.classificationType !== 'grouped-items') return null;
    const groups: { [key: string]: CatalogueEntry[] } = {};
    filteredEntries.forEach((entry) => {
      const g = entry.subgroup || 'GENERAL AMENITIES';
      if (!groups[g]) groups[g] = [];
      groups[g].push(entry);
    });
    return groups;
  }, [activeCategory.classificationType, filteredEntries]);

  // Filtered Sheet1 directory
  const filteredSheet1 = useMemo(() => {
    if (!sheet1Search.trim()) return SHEET1_DIRECTORY;
    const q = sheet1Search.toLowerCase().trim();
    return SHEET1_DIRECTORY.filter((name) => name.toLowerCase().includes(q));
  }, [sheet1Search]);

  const getCategoryEyebrow = (cat: CategoryDefinition) => {
    if (cat.id === 'linen') return 'HOSPITALITY FABRIC & BEDDING • SOURCE: WWW.CINTRACOTTONS.COM';
    if (cat.id === 'guest-amenities') return 'GUEST CARE & PERSONAL HYGIENE • SOURCE: WWW.VICTOLGOLD.COM';
    if (cat.id === 'crockery') return 'PREMIER COMMERCIAL TABLEWARE BRANDS';
    if (cat.id === 'cutlery') return 'PRECISION STAINLESS STEEL & FLATWARE';
    if (cat.id === 'kitchen-utensils') return 'COMMERCIAL COOKWARE & PREPARATION UTENSILS';
    if (cat.id === 'house-keeping') return 'FACILITY MAINTENANCE & JANITORIAL BRANDS';
    if (cat.id === 'cleaning-chemicals') return 'INDUSTRIAL HYGIENE & SANITIZATION CHEMICALS';
    if (cat.id === 'engineering-equipments') return 'HEAVY HOSPITALITY MACHINERY & BACK-OF-HOUSE';
    return 'HOSPITALITY CLASSIFICATION';
  };

  return (
    <div className="product-page">
      {/* Product Hero Header */}
      <section className="product-hero-section">
        <div className="product-hero-container">
          <div className="product-hero-left">
            <h1 className="product-hero-title">Product Catalogue</h1>
            <div className="product-hero-bar" />
            <p className="product-hero-desc">
              Comprehensive institutional supply across {CLIENT_CATEGORIES.length} verified categories for hotels, restaurants, catering operations, and commercial establishments.
            </p>
            <div className="hero-action-row">
              <button 
                className="btn-browse-catalog" 
                onClick={() => onOpenQuote({ category: activeCategory.name })}
              >
                <span>Request Custom Quote</span>
                <ArrowRight size={16} />
              </button>
              <button 
                className="btn-view-sheet1"
                onClick={() => setShowSheet1(!showSheet1)}
              >
                <Layers size={15} />
                <span>{showSheet1 ? 'Hide Sheet 1 Directory' : 'Sheet 1 Brand Directory (57)'}</span>
              </button>
            </div>
          </div>

          <div className="product-hero-right">
            <div className="product-hero-image-card">
              <img 
                src="/images/image__hospitality_tableware__eab14684.png" 
                alt="Hospitality Tableware Collection" 
                className="product-hero-img" 
              />
              <div className="product-hero-img-gradient" />
              <div className="hero-img-overlay-content">
                <span className="hero-img-badge">Official Classification</span>
                <p className="hero-img-tagline">Serving top hospitality brands across India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Official Client Category Filter Tabs */}
      <section className="category-filters-section" id="catalog-filters">
        <div className="category-filters-container">
          <span className="filters-label">Categories:</span>
          <div className="filter-pills-list">
            {CLIENT_CATEGORIES.map((cat) => {
              const count = CATALOGUE_ENTRIES.filter(e => e.categoryId === cat.id).length;
              return (
                <button
                  key={cat.id}
                  className={`filter-pill ${activeId === cat.id ? 'active' : ''}`}
                  onClick={() => handleCategorySelect(cat.id)}
                  title={`View ${cat.name}`}
                >
                  <span className="pill-name">{cat.name}</span>
                  <span className="pill-badge">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Spotlight Detail */}
      <section className="category-spotlight-section">
        <div className="category-spotlight-card">
          {/* Left Feature Image */}
          <div className="spotlight-image-col">
            <img 
              src={activeCategory.image} 
              alt={activeCategory.name} 
              className="spotlight-img"
            />
            <div className="spotlight-img-gradient" />
            <div className="spotlight-img-label">
              <Package size={14} />
              <span>{categoryEntries.length} Listed {activeCategory.classificationType === 'items' ? 'Items' : 'Entries'}</span>
            </div>
          </div>

          {/* Right Information & Products List */}
          <div className="spotlight-info-col">
            <div className="spotlight-header-meta">
              <span className="spotlight-eyebrow">
                {getCategoryEyebrow(activeCategory)}
              </span>
              <h2 className="spotlight-heading">{activeCategory.name}</h2>
              <p className="spotlight-desc">{activeCategory.description}</p>
            </div>

            <div className="spotlight-badges">
              <span className="industry-badge">Hotels & Resorts</span>
              <span className="industry-badge">Restaurants & Cafes</span>
              <span className="industry-badge">Catering & Banquets</span>
              <span className="industry-badge">Commercial Facilities</span>
            </div>

            {/* Reference Source Note if present */}
            {activeCategory.referenceUrl && (
              <div className="source-reference-banner">
                <ExternalLink size={15} className="banner-icon" />
                <span className="banner-text">
                  Source Reference: <strong>{activeCategory.referenceUrl}</strong>
                </span>
                <span className="banner-tag">Institutional Supply</span>
              </div>
            )}

            {/* Quick Chips of preview items/brands */}
            <div className="spotlight-chips-container">
              <span className="chips-label">
                {activeCategory.classificationType === 'items' ? 'Catalog Items Overview:' : 'Featured Brands & Suppliers:'}
              </span>
              <div className="spotlight-chips-list">
                {categoryEntries.slice(0, 10).map((entry) => (
                  <button 
                    key={entry.id} 
                    className="spotlight-chip"
                    onClick={() => onOpenQuote({ 
                      category: activeCategory.name, 
                      itemOrBrand: entry.name,
                      subgroup: entry.subgroup 
                    })}
                    title={`Request quote for ${entry.name}`}
                  >
                    <span>{entry.name}</span>
                    <ChevronRight size={13} />
                  </button>
                ))}
                {categoryEntries.length > 10 && (
                  <span className="more-chip-indicator">
                    +{categoryEntries.length - 10} more below
                  </span>
                )}
              </div>
            </div>

            <p className="spotlight-footnote">
              {activeCategory.classificationType === 'items'
                ? 'Item specifications, GSM variants, custom dimensions, and institutional packaging provided upon request.'
                : 'Authorized brand distribution, volume trade pricing, and manufacturer catalogs available on request.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Entries / Products Listing Section */}
      <section className="products-grid-section">
        <div className="products-grid-container">
          <div className="grid-header">
            <div className="grid-title-group">
              <h2 className="grid-heading">
                {activeCategory.classificationType === 'items' ? `${activeCategory.name} Items Range` : `${activeCategory.name} Catalogue`}
              </h2>
              <div className="grid-heading-bar" />
              <p className="grid-subtext">
                {activeCategory.classificationType === 'items'
                  ? `Showing institutional product types under ${activeCategory.name}. Click any item to request bulk pricing.`
                  : `Showing verified brands and suppliers under ${activeCategory.name}. Click to request brand catalog.`}
              </p>
            </div>

            {/* Real-time Search Box within Active Category */}
            <div className="search-box-wrapper">
              <Search size={16} className="search-icon" />
              <input 
                type="text" 
                placeholder={`Search in ${activeCategory.name}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button 
                  className="search-clear-btn" 
                  onClick={() => setSearchQuery('')}
                  title="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Grouped Rendering for GUEST AMENITIES */}
          {activeCategory.classificationType === 'grouped-items' && guestAmenityGroups && (
            <div className="guest-amenities-groups-container">
              {Object.keys(guestAmenityGroups).map((groupTitle) => {
                const groupItems = guestAmenityGroups[groupTitle];
                return (
                  <div key={groupTitle} className="amenity-group-block">
                    <div className="amenity-group-header">
                      <div className="group-title-badge">
                        <Tag size={14} />
                        <h3 className="group-title">{groupTitle}</h3>
                      </div>
                      <span className="group-count">{groupItems.length} items</span>
                    </div>

                    <div className="catalog-cards-grid">
                      {groupItems.map((item) => (
                        <div 
                          key={item.id} 
                          className="catalog-product-card"
                          onClick={() => onOpenQuote({ 
                            category: activeCategory.name, 
                            itemOrBrand: item.name,
                            subgroup: item.subgroup 
                          })}
                        >
                          <div className="card-thumb-wrapper card-thumb-amenity">
                            <div className="card-item-icon-box">
                              <Package size={32} className="item-icon" />
                            </div>
                            <span className="card-type-tag">Guest Amenity</span>
                            <div className="card-accent-pill">
                              <ArrowRight size={12} color="#ffffff" />
                            </div>
                          </div>
                          <div className="card-details-box">
                            <span className="card-subgroup-meta">{groupTitle}</span>
                            <h3 className="card-category-title">{item.name}</h3>
                            <p className="card-category-sub">Hospitality Grade Amenity</p>
                            <div className="card-action-row">
                              <span className="card-enquire-text">Enquire Item</span>
                              <ChevronRight size={14} className="card-arrow" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Flat Grid for LINEN (Product / Item Types) */}
          {activeCategory.classificationType === 'items' && (
            <div className="catalog-cards-grid">
              {filteredEntries.map((item) => (
                <div 
                  key={item.id} 
                  className="catalog-product-card"
                  onClick={() => onOpenQuote({ 
                    category: activeCategory.name, 
                    itemOrBrand: item.name 
                  })}
                >
                  <div className="card-thumb-wrapper card-thumb-linen">
                    <div className="card-item-icon-box">
                      <Package size={32} className="item-icon" />
                    </div>
                    <span className="card-type-tag">Linen Item</span>
                    <div className="card-accent-pill">
                      <ArrowRight size={12} color="#ffffff" />
                    </div>
                  </div>
                  <div className="card-details-box">
                    <span className="card-subgroup-meta">Base: www.cintracottons.com</span>
                    <h3 className="card-category-title">{item.name}</h3>
                    <p className="card-category-sub">Institutional hospitality fabric</p>
                    <p className="card-meta-line">Custom GSM & thread count options</p>
                    <div className="card-action-row">
                      <span className="card-enquire-text">Request Quote</span>
                      <ChevronRight size={14} className="card-arrow" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Grid for BRANDS / SUPPLIERS / ENTRIES */}
          {(activeCategory.classificationType === 'brands' || activeCategory.classificationType === 'entries') && (
            <div className="catalog-cards-grid">
              {filteredEntries.map((entry) => (
                <div 
                  key={entry.id} 
                  className="catalog-product-card"
                  onClick={() => onOpenQuote({ 
                    category: activeCategory.name, 
                    itemOrBrand: entry.name 
                  })}
                >
                  <div className="card-thumb-wrapper card-thumb-brand">
                    <div className="card-brand-display">
                      <Building2 size={26} className="brand-icon" />
                      <span className="brand-logo-text">{entry.name}</span>
                    </div>
                    <span className="card-type-tag">
                      {activeCategory.classificationType === 'entries' ? 'Equipment Entry' : 'Brand / Manufacturer'}
                    </span>
                    <div className="card-accent-pill">
                      <ArrowRight size={12} color="#ffffff" />
                    </div>
                  </div>
                  <div className="card-details-box">
                    <span className="card-subgroup-meta">{activeCategory.name} Partner</span>
                    <h3 className="card-category-title">{entry.name}</h3>
                    <p className="card-category-sub">
                      {activeCategory.classificationType === 'entries' 
                        ? 'Heavy hospitality equipment & solutions' 
                        : 'Commercial hospitality distribution'}
                    </p>
                    <p className="card-meta-line">Full catalogue & pricing available on request</p>
                    <div className="card-action-row">
                      <span className="card-enquire-text">Enquire Brand</span>
                      <ChevronRight size={14} className="card-arrow" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State when no entries match */}
          {filteredEntries.length === 0 && (
            <div className="empty-catalog-state">
              <Package size={48} className="empty-icon" />
              <h3 className="empty-title">
                {searchQuery ? `No results for "${searchQuery}"` : 'Product details available on request'}
              </h3>
              <p className="empty-desc">
                {searchQuery 
                  ? `We could not find any items matching "${searchQuery}" under ${activeCategory.name}. Try a different search term or enquire directly.`
                  : `Contact our team for specifications, commercial pricing, and availability for ${activeCategory.name}.`}
              </p>
              <div className="empty-btn-row">
                {searchQuery ? (
                  <button className="btn-empty-clear" onClick={() => setSearchQuery('')}>
                    Clear search filter
                  </button>
                ) : (
                  <button 
                    className="btn-empty-enquire"
                    onClick={() => onOpenQuote({ category: activeCategory.name })}
                  >
                    Enquire About {activeCategory.name}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sheet 1 Master Directory Collapsible Drawer */}
      {showSheet1 && (
        <section className="sheet1-directory-section">
          <div className="sheet1-directory-container">
            <div className="sheet1-header">
              <div className="sheet1-title-group">
                <div className="sheet1-badge">Excel Source: Sheet 1</div>
                <h3 className="sheet1-heading">Master Directory (57 Verified Names)</h3>
                <p className="sheet1-sub">
                  This master listing reflects all 57 manufacturer, brand, and company names provided in the client's Excel Sheet 1. Names are preserved exactly as supplied.
                </p>
              </div>
              <div className="sheet1-search-box">
                <Search size={15} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Filter 57 names..." 
                  value={sheet1Search}
                  onChange={(e) => setSheet1Search(e.target.value)}
                  className="sheet1-input"
                />
                {sheet1Search && (
                  <button onClick={() => setSheet1Search('')} className="sheet1-clear">
                    <X size={13} />
                  </button>
                )}
              </div>
            </div>

            <div className="sheet1-names-grid">
              {filteredSheet1.map((name, idx) => (
                <div 
                  key={`${name}-${idx}`} 
                  className="sheet1-name-pill"
                  onClick={() => onOpenQuote({ 
                    category: 'Master Directory (Sheet 1)', 
                    itemOrBrand: name 
                  })}
                  title={`Request quote for ${name}`}
                >
                  <span className="sheet1-index">{(idx + 1).toString().padStart(2, '0')}</span>
                  <span className="sheet1-name-text">{name}</span>
                  <ChevronRight size={13} className="sheet1-arrow" />
                </div>
              ))}
            </div>

            <div className="sheet1-footer-note">
              <CheckCircle2 size={15} color="#16a34a" />
              <span>
                All 57 names preserved verbatim from Sheet 1 without alteration. Click any entry to request supplier information or quotation.
              </span>
            </div>
          </div>
        </section>
      )}

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
          grid-template-columns: 1.15fr 1fr;
          gap: 48px;
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
          width: 280px;
          max-width: 100%;
          height: 4px;
          background-color: var(--color-accent-red);
          margin-bottom: 20px;
          border-radius: 2px;
        }
        .product-hero-desc {
          font-family: var(--font-inter);
          font-size: 16px;
          line-height: 1.6;
          color: var(--color-text-secondary);
          margin-bottom: 28px;
          max-width: 520px;
        }
        .hero-action-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .btn-browse-catalog {
          background-color: var(--color-accent-red);
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
          box-shadow: 0 4px 12px rgba(192, 29, 36, 0.2);
        }
        .btn-browse-catalog:hover {
          background-color: var(--color-accent-red-hover);
        }
        .btn-view-sheet1 {
          background-color: #ffffff;
          color: var(--color-navy-dark);
          border: 1px solid var(--color-border);
          font-family: var(--font-inter);
          font-weight: 600;
          font-size: 13px;
          padding: 11px 20px;
          border-radius: var(--radius-xs);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all var(--transition-fast);
        }
        .btn-view-sheet1:hover {
          border-color: var(--color-navy-dark);
          background-color: #f8fafc;
        }
        .product-hero-image-card {
          position: relative;
          width: 100%;
          max-width: 480px;
          height: 310px;
          border-radius: 16px;
          overflow: hidden;
          margin-left: auto;
          box-shadow: var(--shadow-md);
        }
        .product-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .product-hero-img-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.05) 40%, rgba(16,40,67,0.75) 100%);
        }
        .hero-img-overlay-content {
          position: absolute;
          bottom: 20px;
          left: 24px;
          right: 24px;
          color: #ffffff;
        }
        .hero-img-badge {
          display: inline-block;
          font-family: var(--font-inter);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: var(--color-accent-red);
          color: #ffffff;
          padding: 3px 10px;
          border-radius: 4px;
          margin-bottom: 6px;
        }
        .hero-img-tagline {
          font-family: var(--font-inter);
          font-size: 13px;
          font-weight: 500;
          color: #f1f5f9;
        }

        /* 8 Category Filter Tabs */
        .category-filters-section {
          background-color: #ffffff;
          border-bottom: 1px solid var(--color-border);
          padding: 14px 0;
          position: sticky;
          top: 80px;
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
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
          color: var(--color-navy-dark);
          flex-shrink: 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .filter-pills-list {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: nowrap;
        }
        .filter-pill {
          padding: 8px 16px;
          border-radius: var(--radius-xs);
          font-family: var(--font-inter);
          font-weight: 600;
          font-size: 13px;
          white-space: nowrap;
          background-color: #f1f5f9;
          color: var(--color-navy-dark);
          transition: all var(--transition-fast);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid transparent;
        }
        .filter-pill:hover {
          background-color: #e2e8f0;
          color: var(--color-navy-dark);
        }
        .filter-pill.active {
          background-color: var(--color-accent-red);
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(192, 29, 36, 0.25);
        }
        .pill-badge {
          background: rgba(0, 0, 0, 0.08);
          font-size: 11px;
          padding: 2px 7px;
          border-radius: 999px;
          font-weight: 700;
        }
        .filter-pill.active .pill-badge {
          background: rgba(255, 255, 255, 0.25);
          color: #ffffff;
        }

        /* Spotlight Card */
        .category-spotlight-section {
          padding: 40px 0;
        }
        .category-spotlight-card {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 360px 1fr;
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
          background: linear-gradient(90deg, transparent 75%, rgba(255,255,255,0.3) 100%);
        }
        .spotlight-img-label {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(16, 40, 67, 0.85);
          backdrop-filter: blur(4px);
          color: #ffffff;
          padding: 6px 14px;
          border-radius: 6px;
          font-family: var(--font-inter);
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .spotlight-info-col {
          padding: 40px;
          display: flex;
          flex-direction: column;
        }
        .spotlight-header-meta {
          margin-bottom: 20px;
        }
        .spotlight-eyebrow {
          font-family: var(--font-inter);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-accent-red);
          text-transform: uppercase;
          margin-bottom: 8px;
          display: inline-block;
        }
        .spotlight-heading {
          font-family: var(--font-inter);
          font-size: 34px;
          font-weight: 800;
          color: var(--color-navy-dark);
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .spotlight-desc {
          font-family: var(--font-inter);
          font-size: 15px;
          color: var(--color-text-body);
          line-height: 1.6;
        }
        .spotlight-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .industry-badge {
          background-color: var(--color-red-badge-bg);
          color: var(--color-accent-red);
          font-family: var(--font-inter);
          font-weight: 600;
          font-size: 12px;
          padding: 4px 12px;
          border-radius: 4px;
        }
        .source-reference-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 10px 16px;
          border-radius: 8px;
          margin-bottom: 22px;
          font-family: var(--font-inter);
          font-size: 13px;
          color: #1e40af;
        }
        .banner-icon {
          color: #2563eb;
          flex-shrink: 0;
        }
        .banner-text {
          flex-grow: 1;
        }
        .banner-tag {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          background: #dbeafe;
          color: #1e40af;
          padding: 2px 8px;
          border-radius: 4px;
        }
        .spotlight-chips-container {
          margin-bottom: 24px;
        }
        .chips-label {
          display: block;
          font-family: var(--font-inter);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-navy-dark);
          margin-bottom: 10px;
        }
        .spotlight-chips-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
        }
        .spotlight-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f8fafc;
          border: 1px solid var(--color-border);
          border-radius: 6px;
          padding: 6px 12px;
          font-family: var(--font-inter);
          font-size: 13px;
          font-weight: 600;
          color: var(--color-navy-dark);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .spotlight-chip:hover {
          background: #fef2f2;
          border-color: var(--color-accent-red);
          color: var(--color-accent-red);
          transform: translateY(-1px);
        }
        .more-chip-indicator {
          font-family: var(--font-inter);
          font-size: 12px;
          font-weight: 600;
          color: var(--color-text-muted);
          padding: 4px 8px;
        }
        .spotlight-footnote {
          font-family: var(--font-inter);
          font-size: 12px;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-top: auto;
          border-top: 1px solid #f1f5f9;
          padding-top: 16px;
        }

        /* Products Listing Section */
        .products-grid-section {
          padding: 16px 0 80px 0;
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
          align-items: flex-end;
          gap: 32px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }
        .grid-title-group {
          max-width: 680px;
        }
        .grid-heading {
          font-family: var(--font-inter);
          font-size: 28px;
          font-weight: 800;
          color: var(--color-navy-dark);
        }
        .grid-heading-bar {
          width: 60px;
          height: 3px;
          background-color: var(--color-accent-red);
          margin: 6px 0 10px 0;
          border-radius: 2px;
        }
        .grid-subtext {
          font-family: var(--font-inter);
          font-size: 14px;
          color: var(--color-text-secondary);
        }
        .search-box-wrapper {
          position: relative;
          width: 320px;
          max-width: 100%;
        }
        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-muted);
        }
        .search-input {
          width: 100%;
          padding: 10px 36px 10px 38px;
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xs);
          font-family: var(--font-inter);
          font-size: 13px;
          color: var(--color-navy-dark);
          outline: none;
          transition: border-color var(--transition-fast);
        }
        .search-input:focus {
          border-color: var(--color-accent-red);
        }
        .search-clear-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Guest Amenities Subgroups Container */
        .guest-amenities-groups-container {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .amenity-group-block {
          background: transparent;
        }
        .amenity-group-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 2px solid #e2e8f0;
        }
        .group-title-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-accent-red);
        }
        .group-title {
          font-family: var(--font-inter);
          font-size: 20px;
          font-weight: 700;
          color: var(--color-navy-dark);
        }
        .group-count {
          font-family: var(--font-inter);
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text-muted);
          background: #f1f5f9;
          padding: 3px 10px;
          border-radius: 999px;
        }

        /* Catalog Cards Grid */
        .catalog-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .catalog-product-card {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
          transition: transform var(--transition-smooth), box-shadow var(--transition-smooth), border-color var(--transition-smooth);
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .catalog-product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
          border-color: #cbd5e1;
        }
        .card-thumb-wrapper {
          position: relative;
          height: 140px;
          background: #f8fafc;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #f1f5f9;
        }
        .card-thumb-brand {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }
        .card-thumb-linen {
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
        }
        .card-thumb-amenity {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
        }
        .card-brand-display {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 12px;
          text-align: center;
        }
        .brand-icon {
          color: var(--color-navy-dark);
          opacity: 0.7;
        }
        .brand-logo-text {
          font-family: var(--font-inter);
          font-size: 16px;
          font-weight: 800;
          color: var(--color-navy-dark);
          letter-spacing: 0.04em;
        }
        .card-item-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .item-icon {
          color: var(--color-navy-dark);
          opacity: 0.5;
        }
        .card-type-tag {
          position: absolute;
          bottom: 10px;
          left: 12px;
          font-family: var(--font-inter);
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(4px);
          color: var(--color-navy-dark);
          padding: 3px 8px;
          border-radius: 4px;
          border: 1px solid rgba(0,0,0,0.06);
        }
        .card-accent-pill {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--color-accent-red);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-fast);
        }
        .catalog-product-card:hover .card-accent-pill {
          transform: scale(1.15);
        }
        .card-details-box {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .card-subgroup-meta {
          font-family: var(--font-inter);
          font-size: 11px;
          font-weight: 700;
          color: var(--color-accent-red);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 4px;
        }
        .card-category-title {
          font-family: var(--font-inter);
          font-size: 17px;
          font-weight: 700;
          color: var(--color-navy-dark);
          margin-bottom: 4px;
          line-height: 1.3;
        }
        .card-category-sub {
          font-family: var(--font-inter);
          font-size: 13px;
          color: var(--color-text-body);
          line-height: 1.4;
          margin-bottom: 6px;
        }
        .card-meta-line {
          font-family: var(--font-inter);
          font-size: 12px;
          color: var(--color-text-muted);
          line-height: 1.4;
          margin-bottom: 16px;
        }
        .card-action-row {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid #f1f5f9;
        }
        .card-enquire-text {
          font-family: var(--font-inter);
          font-size: 13px;
          font-weight: 600;
          color: var(--color-accent-red);
        }
        .card-arrow {
          color: var(--color-accent-red);
          transition: transform var(--transition-fast);
        }
        .catalog-product-card:hover .card-arrow {
          transform: translateX(4px);
        }

        /* Empty State */
        .empty-catalog-state {
          text-align: center;
          padding: 64px 20px;
          background: #ffffff;
          border: 1px dashed var(--color-border);
          border-radius: 12px;
          max-width: 600px;
          margin: 40px auto;
        }
        .empty-icon {
          color: var(--color-text-muted);
          margin-bottom: 16px;
        }
        .empty-title {
          font-family: var(--font-inter);
          font-size: 22px;
          color: var(--color-navy-dark);
          margin-bottom: 8px;
        }
        .empty-desc {
          font-family: var(--font-inter);
          font-size: 14px;
          color: var(--color-text-secondary);
          max-width: 440px;
          margin: 0 auto 24px auto;
          line-height: 1.6;
        }
        .empty-btn-row {
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        .btn-empty-clear {
          background: #f1f5f9;
          color: var(--color-navy-dark);
          padding: 10px 20px;
          border-radius: var(--radius-xs);
          font-family: var(--font-inter);
          font-weight: 600;
          font-size: 13px;
        }
        .btn-empty-enquire {
          background: var(--color-accent-red);
          color: #ffffff;
          padding: 10px 22px;
          border-radius: var(--radius-xs);
          font-family: var(--font-inter);
          font-weight: 600;
          font-size: 13px;
        }

        /* Sheet 1 Directory Drawer Section */
        .sheet1-directory-section {
          background: #ffffff;
          border-top: 1px solid var(--color-border);
          padding: 60px 0;
          box-shadow: 0 -4px 16px rgba(0,0,0,0.02);
        }
        .sheet1-directory-container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 48px;
        }
        .sheet1-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 32px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }
        .sheet1-badge {
          display: inline-block;
          font-family: var(--font-inter);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: #eff6ff;
          color: #1e40af;
          border: 1px solid #bfdbfe;
          padding: 3px 10px;
          border-radius: 4px;
          margin-bottom: 8px;
        }
        .sheet1-heading {
          font-family: var(--font-inter);
          font-size: 26px;
          font-weight: 800;
          color: var(--color-navy-dark);
          margin-bottom: 8px;
        }
        .sheet1-sub {
          font-family: var(--font-inter);
          font-size: 14px;
          color: var(--color-text-secondary);
          max-width: 600px;
          line-height: 1.5;
        }
        .sheet1-search-box {
          position: relative;
          width: 280px;
        }
        .sheet1-input {
          width: 100%;
          padding: 9px 32px 9px 34px;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xs);
          font-family: var(--font-inter);
          font-size: 13px;
          outline: none;
        }
        .sheet1-input:focus {
          border-color: var(--color-navy-dark);
        }
        .sheet1-clear {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-muted);
        }
        .sheet1-names-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 28px;
        }
        .sheet1-name-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: #f8fafc;
          border: 1px solid var(--color-border);
          border-radius: 8px;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .sheet1-name-pill:hover {
          background: #ffffff;
          border-color: var(--color-accent-red);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .sheet1-index {
          font-family: var(--font-inter);
          font-size: 11px;
          font-weight: 700;
          color: var(--color-text-muted);
          width: 20px;
        }
        .sheet1-name-text {
          font-family: var(--font-inter);
          font-size: 13px;
          font-weight: 700;
          color: var(--color-navy-dark);
          flex-grow: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .sheet1-arrow {
          color: var(--color-text-muted);
          flex-shrink: 0;
        }
        .sheet1-name-pill:hover .sheet1-arrow {
          color: var(--color-accent-red);
          transform: translateX(2px);
        }
        .sheet1-footer-note {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-inter);
          font-size: 13px;
          color: var(--color-text-secondary);
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          padding: 12px 18px;
          border-radius: 8px;
        }

        @media (max-width: 1200px) {
          .catalog-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .sheet1-names-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 1024px) {
          .category-spotlight-card {
            grid-template-columns: 1fr;
          }
          .spotlight-image-col {
            height: 260px;
            min-height: auto;
          }
          .catalog-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .sheet1-names-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .product-hero-container {
            grid-template-columns: 1fr;
            padding: 0 20px;
          }
          .product-hero-title {
            font-size: 38px;
          }
          .category-filters-container {
            padding: 0 20px;
          }
          .products-grid-container {
            padding: 0 20px;
          }
          .sheet1-directory-container {
            padding: 0 20px;
          }
          .grid-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .search-box-wrapper {
            width: 100%;
          }
        }
        @media (max-width: 540px) {
          .catalog-cards-grid {
            grid-template-columns: 1fr;
          }
          .sheet1-names-grid {
            grid-template-columns: 1fr;
          }
          .spotlight-info-col {
            padding: 24px 20px;
          }
        }
      `}</style>
    </div>
  );
};
