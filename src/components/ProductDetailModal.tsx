import React, { useEffect, useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Droplets, 
  Gem, 
  BarChart2, 
  FileText, 
  ArrowRight 
} from 'lucide-react';
import { 
  ProductCatalogCard, 
  PRODUCT_SPECS_MAP, 
  ProductDetailInfo 
} from '../data/siteData';

interface ProductDetailModalProps {
  product: ProductCatalogCard | null;
  onClose: () => void;
  onInquire: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onInquire
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close on ESC key & reset index on product change
  useEffect(() => {
    setActiveImageIndex(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [product, onClose]);

  if (!product) return null;

  // Retrieve rich spec data or fallback defaults
  const specSheet: ProductDetailInfo = PRODUCT_SPECS_MAP[product.id] || {
    skuPrefix: `CR-${product.id.toUpperCase()} / COMM-SPEC`,
    tagline: product.subtitle,
    material: 'Commercial Hospitality Grade Materials',
    finish: 'Heavy Duty Commercial Finish',
    galleryImages: [product.image, product.image, product.image],
    badges: [
      { title: '100% Food Grade', sub: 'Lead, Cadmium & Arsenic Safe', icon: 'food' },
      { title: 'Dishwasher Safe', sub: '1,000+ Cycles', icon: 'wash' },
      { title: 'Premium Finish', sub: 'Commercial Glaze', icon: 'finish' }
    ],
    parGuideline: {
      fineDining: '2.5x',
      banquet: '3.0x',
      roomService: '2.0x',
      barLounge: '3.0x'
    },
    keySpecs: {
      material: 'Commercial Hospitality Grade Materials',
      dimensions: 'Commercial Metric Standards',
      weight: 'Standard Commercial Spec',
      finish: 'Heavy Duty Commercial Glaze',
      dishwasherSafe: 'Yes (1,000+ Cycles)',
      usage: 'Hotels, Restaurants, Catering, Banquets',
      packing: '6 / 12 / 24 pcs per carton'
    }
  };

  // Safe fallback array of 3 images
  const gallery = (specSheet.galleryImages && specSheet.galleryImages.length >= 3)
    ? specSheet.galleryImages
    : [product.image, product.image, product.image];

  const currentMainImage = gallery[activeImageIndex] || gallery[0] || product.image;

  // Safe fallback badges
  const badges = specSheet.badges && specSheet.badges.length >= 3
    ? specSheet.badges
    : [
        { title: '100% Food Grade', sub: 'Lead, Cadmium & Arsenic Safe', icon: 'food' as const },
        { title: 'Dishwasher Safe', sub: '1,000+ Cycles', icon: 'wash' as const },
        { title: 'Premium Finish', sub: 'Super-Vitrified Glaze', icon: 'finish' as const }
      ];

  // Safe fallback keySpecs
  const keySpecs = specSheet.keySpecs || {
    material: specSheet.material,
    dimensions: 'Standard Commercial Hospitality Spec',
    weight: 'Standard Commercial Weight',
    finish: specSheet.finish,
    dishwasherSafe: 'Yes (1,000+ Cycles)',
    usage: 'Hotels, Restaurants, Catering, Banquets',
    packing: '6 / 12 / 24 pcs per carton (varies by item)'
  };

  const handleDownloadSpecSheet = () => {
    window.print();
  };

  return (
    <div className="pdm-backdrop" onClick={onClose}>
      <div className="pdm-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Top Header */}
        <div className="pdm-header">
          <div className="pdm-breadcrumb">
            <span className="pdm-crumb-category">{product.category}</span>
            <span className="pdm-crumb-sep">&gt;</span>
            <span className="pdm-crumb-sku">{specSheet.skuPrefix}</span>
          </div>
          <button 
            className="pdm-close-btn" 
            onClick={onClose} 
            aria-label="Close product dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Main Body */}
        <div className="pdm-body">
          {/* Left Column: Main Image & Gallery Thumbnails */}
          <div className="pdm-left-col">
            <div className="pdm-main-img-card">
              <img 
                src={currentMainImage} 
                alt={product.title} 
                className="pdm-main-img" 
              />
            </div>

            {/* Row of 3 Thumbnails */}
            <div className="pdm-thumbs-row">
              {gallery.slice(0, 3).map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`pdm-thumb-btn ${activeImageIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(idx)}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img src={imgUrl} alt={`${product.title} view ${idx + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Title, Badges, Material/Finish, PAR box, Key Specifications */}
          <div className="pdm-right-col">
            <h2 className="pdm-title">{product.title}</h2>
            <p className="pdm-tagline">{specSheet.tagline}</p>

            {/* 3 Top Feature Badges */}
            <div className="pdm-badges-row">
              {badges.map((b, idx) => {
                let iconEl = <ShieldCheck size={20} className="badge-ico badge-ico-green" />;
                if (idx === 1 || b.icon === 'wash') {
                  iconEl = <Droplets size={20} className="badge-ico badge-ico-blue" />;
                } else if (idx === 2 || b.icon === 'finish') {
                  iconEl = <Gem size={20} className="badge-ico badge-ico-red" />;
                }

                return (
                  <div key={idx} className="pdm-badge-card">
                    {iconEl}
                    <div className="pdm-badge-text">
                      <span className="pdm-badge-title">{b.title}</span>
                      <span className="pdm-badge-sub">{b.sub}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Material & Finish Block */}
            <div className="pdm-mat-fin-block">
              <div className="pdm-mf-col">
                <span className="pdm-mf-label">MATERIAL</span>
                <span className="pdm-mf-val">{specSheet.material}</span>
              </div>
              <div className="pdm-mf-col">
                <span className="pdm-mf-label">FINISH</span>
                <span className="pdm-mf-val">{specSheet.finish}</span>
              </div>
            </div>

            {/* Recommended Stock PAR Box */}
            <div className="pdm-par-box">
              <div className="pdm-par-head">
                <BarChart2 size={16} className="pdm-par-ico" />
                <span>RECOMMENDED STOCK PAR (PER OPERATIONAL SEAT)</span>
              </div>
              <div className="pdm-par-cards">
                <div className="pdm-par-card">
                  <span className="par-c-label">Fine Dining</span>
                  <span className="par-c-val">{specSheet.parGuideline.fineDining}</span>
                </div>
                <div className="pdm-par-card">
                  <span className="par-c-label">Banquet & Events</span>
                  <span className="par-c-val">{specSheet.parGuideline.banquet}</span>
                </div>
                <div className="pdm-par-card">
                  <span className="par-c-label">Room Service</span>
                  <span className="par-c-val">{specSheet.parGuideline.roomService}</span>
                </div>
                <div className="pdm-par-card">
                  <span className="par-c-label">Bar & Lounge</span>
                  <span className="par-c-val">{specSheet.parGuideline.barLounge}</span>
                </div>
              </div>
            </div>

            {/* Key Specifications Section (Weights & Dimensions) */}
            <div className="pdm-key-specs-section">
              <div className="pdm-ks-head">
                <FileText size={17} className="pdm-ks-ico" />
                <span>Key Specifications</span>
              </div>
              <div className="pdm-ks-table">
                <div className="pdm-ks-row">
                  <span className="ks-label">Material</span>
                  <span className="ks-val">{keySpecs.material}</span>
                </div>
                <div className="pdm-ks-row">
                  <span className="ks-label">Dimensions</span>
                  <span className="ks-val">{keySpecs.dimensions}</span>
                </div>
                <div className="pdm-ks-row">
                  <span className="ks-label">Weight</span>
                  <span className="ks-val">{keySpecs.weight}</span>
                </div>
                <div className="pdm-ks-row">
                  <span className="ks-label">Finish</span>
                  <span className="ks-val">{keySpecs.finish}</span>
                </div>
                <div className="pdm-ks-row">
                  <span className="ks-label">Dishwasher Safe</span>
                  <span className="ks-val">{keySpecs.dishwasherSafe}</span>
                </div>
                <div className="pdm-ks-row">
                  <span className="ks-label">Usage</span>
                  <span className="ks-val">{keySpecs.usage}</span>
                </div>
                <div className="pdm-ks-row">
                  <span className="ks-label">Packing</span>
                  <span className="ks-val">{keySpecs.packing}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="pdm-footer">
          <div className="pdm-footer-left">
            <button 
              type="button" 
              className="pdm-btn-download" 
              onClick={handleDownloadSpecSheet}
              title="Download or Print Technical Spec Sheet"
            >
              <FileText size={16} />
              <span>Download Spec Sheet</span>
            </button>
          </div>

          <div className="pdm-footer-right">
            <button 
              type="button" 
              className="pdm-btn-catalog" 
              onClick={onClose}
            >
              Back to Catalog
            </button>
            <button 
              type="button"
              className="pdm-btn-quote"
              onClick={() => onInquire(product.title)}
            >
              <span>Request Quote</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .pdm-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: pdmFadeIn 0.2s ease-out;
        }

        @keyframes pdmFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .pdm-dialog {
          background: #ffffff;
          border-radius: 16px;
          width: 100%;
          max-width: 1040px;
          max-height: 92vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          animation: pdmScaleUp 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes pdmScaleUp {
          from { opacity: 0; transform: scale(0.97) translateY(6px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* Top Header */
        .pdm-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          border-bottom: 1px solid #f1f5f9;
        }

        .pdm-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
        }

        .pdm-crumb-category {
          color: #dc2626;
          font-weight: 600;
        }

        .pdm-crumb-sep {
          color: #94a3b8;
          font-size: 13px;
        }

        .pdm-crumb-sku {
          color: #64748b;
          font-weight: 500;
        }

        .pdm-close-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: none;
          background: #f1f5f9;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .pdm-close-btn:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        /* Modal Body */
        .pdm-body {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
          display: grid;
          grid-template-columns: 440px 1fr;
          gap: 28px;
          align-items: stretch;
        }

        /* Custom Scrollbar for Modal Body */
        .pdm-body::-webkit-scrollbar {
          width: 6px;
        }
        .pdm-body::-webkit-scrollbar-track {
          background: #f8fafc;
        }
        .pdm-body::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }

        /* Left Column */
        .pdm-left-col {
          display: flex;
          flex-direction: column;
          height: 100%;
          gap: 14px;
        }

        .pdm-main-img-card {
          width: 100%;
          flex: 1;
          min-height: 440px;
          border-radius: 14px;
          overflow: hidden;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          position: relative;
        }

        .pdm-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }

        .pdm-main-img-card:hover .pdm-main-img {
          transform: scale(1.02);
        }

        .pdm-thumbs-row {
          display: flex;
          gap: 12px;
        }

        .pdm-thumb-btn {
          flex: 1;
          height: 94px;
          border-radius: 10px;
          overflow: hidden;
          padding: 0;
          background: #f8fafc;
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .pdm-thumb-btn img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .pdm-thumb-btn:hover {
          border-color: #cbd5e1;
        }

        .pdm-thumb-btn.active {
          border-color: #dc2626;
          box-shadow: 0 0 0 1px #dc2626;
        }

        /* Right Column */
        .pdm-right-col {
          display: flex;
          flex-direction: column;
        }

        .pdm-title {
          font-size: 26px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 6px 0;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .pdm-tagline {
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.5;
          margin: 0 0 18px 0;
        }

        /* Badges Row */
        .pdm-badges-row {
          display: flex;
          gap: 10px;
          margin-bottom: 18px;
        }

        .pdm-badge-card {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }

        .badge-ico {
          flex-shrink: 0;
        }
        .badge-ico-green {
          color: #16a34a;
        }
        .badge-ico-blue {
          color: #0284c7;
        }
        .badge-ico-red {
          color: #dc2626;
        }

        .pdm-badge-text {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .pdm-badge-title {
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .pdm-badge-sub {
          font-size: 10.5px;
          color: #64748b;
          line-height: 1.2;
          margin-top: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Material & Finish */
        .pdm-mat-fin-block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid #f1f5f9;
          margin-bottom: 16px;
        }

        .pdm-mf-col {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .pdm-mf-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #64748b;
        }

        .pdm-mf-val {
          font-size: 13.5px;
          font-weight: 600;
          color: #0f172a;
          line-height: 1.4;
        }

        /* PAR Box */
        .pdm-par-box {
          background: #fff5f5;
          border: 1px solid #fee2e2;
          border-radius: 10px;
          padding: 12px 14px;
          margin-bottom: 18px;
        }

        .pdm-par-head {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #dc2626;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 10px;
        }

        .pdm-par-ico {
          color: #dc2626;
        }

        .pdm-par-cards {
          display: flex;
          gap: 8px;
        }

        .pdm-par-card {
          flex: 1;
          background: #ffffff;
          border: 1px solid #fee2e2;
          border-radius: 6px;
          padding: 7px 10px;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .par-c-label {
          font-size: 11px;
          color: #64748b;
          white-space: nowrap;
        }

        .par-c-val {
          font-size: 18px;
          font-weight: 700;
          color: #dc2626;
          line-height: 1;
        }

        /* Key Specifications Section */
        .pdm-key-specs-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .pdm-ks-head {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #0f172a;
          font-size: 14.5px;
          font-weight: 700;
        }

        .pdm-ks-ico {
          color: #dc2626;
        }

        .pdm-ks-table {
          display: flex;
          flex-direction: column;
        }

        .pdm-ks-row {
          display: flex;
          align-items: baseline;
          padding: 7px 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .pdm-ks-row:last-child {
          border-bottom: none;
        }

        .ks-label {
          width: 140px;
          flex-shrink: 0;
          font-size: 13px;
          color: #64748b;
          font-weight: 500;
        }

        .ks-val {
          flex: 1;
          font-size: 13px;
          color: #0f172a;
          font-weight: 500;
          line-height: 1.4;
        }

        /* Modal Footer */
        .pdm-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          border-top: 1px solid #f1f5f9;
          background: #ffffff;
        }

        .pdm-btn-download {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 9px 16px;
          font-size: 13.5px;
          font-weight: 600;
          color: #334155;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .pdm-btn-download:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }

        .pdm-footer-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .pdm-btn-catalog {
          background: none;
          border: none;
          color: #64748b;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          padding: 9px 12px;
          transition: color 0.15s ease;
        }

        .pdm-btn-catalog:hover {
          color: #0f172a;
        }

        .pdm-btn-quote {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #dc2626;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 10px 20px;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s ease;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.25);
        }

        .pdm-btn-quote:hover {
          background: #b91c1c;
          box-shadow: 0 4px 12px rgba(185, 28, 28, 0.35);
        }

        /* Responsive */
        @media (max-width: 860px) {
          .pdm-dialog {
            max-height: 96vh;
          }

          .pdm-body {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 18px;
          }

          .pdm-main-img-card {
            height: 260px;
            min-height: unset;
            flex: initial;
          }

          .pdm-thumbs-row {
            justify-content: center;
          }

          .pdm-thumb-btn {
            max-width: 100px;
          }

          .pdm-badges-row {
            flex-direction: column;
            gap: 8px;
          }

          .pdm-par-cards {
            grid-template-columns: 1fr 1fr;
            display: grid;
          }

          .pdm-footer {
            flex-direction: column;
            gap: 12px;
            padding: 14px 18px;
          }

          .pdm-footer-left,
          .pdm-footer-right {
            width: 100%;
            justify-content: space-between;
          }

          .pdm-btn-download,
          .pdm-btn-quote {
            flex: 1;
            justify-content: center;
          }
        }

        /* Print Mode */
        @media print {
          .pdm-backdrop {
            position: static;
            background: none;
            backdrop-filter: none;
            padding: 0;
          }
          .pdm-dialog {
            box-shadow: none;
            max-width: 100%;
            max-height: none;
            border-radius: 0;
          }
          .pdm-close-btn,
          .pdm-footer {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
