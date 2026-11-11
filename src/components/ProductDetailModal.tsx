import React, { useEffect, useState } from 'react';
import {
  X,
  FileText,
  ArrowRight
} from 'lucide-react';
import {
  ProductCatalogCard,
  PRODUCT_SPECS_MAP,
  ProductDetailInfo,
  buildCardDetail,
  brandColor,
  findBrochure
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

  // Retrieved detail strip, or an honest fallback built from the card itself
  const specSheet: ProductDetailInfo =
    PRODUCT_SPECS_MAP[product.id] || buildCardDetail(product);

  // Distinct gallery images (deduplicated) with the card image as guaranteed anchor
  const gallery = Array.from(
    new Set([product.image, ...(specSheet.galleryImages || [])])
  );
  const currentMainImage = gallery[activeImageIndex % gallery.length] || product.image;

  const brochure = findBrochure(product.brands);

  return (
    <div className="pdm-backdrop" onClick={onClose}>
      <div className="pdm-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Top Header */}
        <div className="pdm-header">
          <div className="pdm-breadcrumb">
            <span className="pdm-crumb-category">{product.category}</span>
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

            {/* Thumbnails Row */}
            <div className="pdm-thumbs-row">
              {gallery.slice(0, 3).map((imgUrl, idx) => (
                <button
                  key={imgUrl}
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

          {/* Right Column: Title, Brand Pills, Highlights */}
          <div className="pdm-right-col">
            <h2 className="pdm-title">{product.title}</h2>
            {specSheet.tagline && specSheet.tagline !== product.title && (
              <p className="pdm-tagline">{specSheet.tagline}</p>
            )}

            {/* Brand Pills — bold, alternating blue / red */}
            {product.brands.length > 0 && (
              <div className="pdm-brand-pills">
                {product.brands.map(brand => (
                  <span
                    key={brand}
                    className={`pdm-brand-pill ${brandColor(brand) === 'blue' ? 'brand-pill-blue' : 'brand-pill-red'}`}
                  >
                    {brand}
                  </span>
                ))}
              </div>
            )}

            {/* Product Highlights */}
            <div className="pdm-highlights-section">
              <div className="pdm-hl-head">
                <FileText size={18} className="pdm-hl-ico" />
                <span>Product Details &amp; Technical Specifications</span>
              </div>
              <div className="pdm-hl-table">
                {specSheet.highlights.map((row, idx) => (
                  <div className="pdm-hl-row" key={`${row.label}-${idx}`}>
                    <span className="hl-label">{row.label}</span>
                    <span className="hl-val">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Catalogue */}
            <div className="pdm-catalogue-box">
              <div className="pdm-catalogue-head">
                <FileText size={18} className="pdm-hl-ico" />
                <span>Product Catalogue</span>
              </div>
              {brochure ? (
                <a
                  className="pdm-catalogue-link"
                  href={brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open brand catalogue (PDF)
                  <ArrowRight size={16} />
                </a>
              ) : (
                <p className="pdm-catalogue-note">
                  Brand catalogue available on request. Send us an enquiry and our
                  sales team will share it with you.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="pdm-footer">
          <div className="pdm-footer-left">
            {brochure && (
              <a
                className="pdm-btn-brochure"
                href={brochure}
                target="_blank"
                rel="noopener noreferrer"
                title="Open Brand Catalogue (PDF)"
              >
                <FileText size={16} />
                <span>Product Catalogue</span>
              </a>
            )}
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
              <ArrowRight size={17} />
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
          font-size: 15px;
        }

        .pdm-crumb-category {
          color: #dc2626;
          font-weight: 600;
        }

        .pdm-crumb-sep {
          color: #94a3b8;
          font-size: 13px;
        }

        .pdm-crumb-code {
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
          font-size: 29px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 6px 0;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .pdm-tagline {
          font-size: 16px;
          color: #64748b;
          line-height: 1.5;
          margin: 0 0 16px 0;
        }

        /* Brand Pills */
        .pdm-brand-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 18px;
        }

        .pdm-brand-pill {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.01em;
          padding: 5px 14px;
          border-radius: 999px;
        }

        /* Product Highlights */
        .pdm-highlights-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .pdm-hl-head {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #0f172a;
          font-size: 16.5px;
          font-weight: 700;
        }

        .pdm-hl-ico {
          color: #dc2626;
        }

        .pdm-hl-table {
          display: flex;
          flex-direction: column;
        }

        .pdm-hl-row {
          display: flex;
          align-items: baseline;
          padding: 7px 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .pdm-hl-row:last-child {
          border-bottom: none;
        }

        .hl-label {
          width: 150px;
          flex-shrink: 0;
          font-size: 15px;
          color: #64748b;
          font-weight: 500;
        }

        .hl-val {
          flex: 1;
          font-size: 15.5px;
          color: #0f172a;
          font-weight: 500;
          line-height: 1.45;
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

        .pdm-footer-left:empty {
          display: none;
        }

        .pdm-btn-brochure {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1.5px solid #1d4ed8;
          border-radius: 8px;
          padding: 9px 16px;
          font-size: 14.5px;
          font-weight: 700;
          color: #1d4ed8;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .pdm-btn-brochure:hover {
          background: #eff6ff;
          border-color: #1e40af;
          color: #1e40af;
        }

        .pdm-footer-right {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-left: auto;
        }

        .pdm-btn-catalog {
          background: none;
          border: none;
          color: #64748b;
          font-size: 14.5px;
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
          gap: 9px;
          background: #02348d;
          color: #ffffff;
          border: none;
          border-radius: 10px;
          padding: 12px 26px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.15s ease;
          box-shadow: 0 4px 14px rgba(2, 52, 141, 0.3);
        }

        /* Brand Catalogue */
        .pdm-catalogue-box {
          margin-top: 16px;
          padding: 18px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: #f8fafc;
        }

        .pdm-catalogue-head {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
        }

        .pdm-catalogue-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #1d4ed8;
          font-size: 15.5px;
          font-weight: 700;
          text-decoration: none;
        }

        .pdm-catalogue-link:hover {
          text-decoration: underline;
        }

        .pdm-catalogue-note {
          font-size: 14.5px;
          color: #475569;
          line-height: 1.55;
          margin: 0;
        }

        .pdm-btn-quote:hover {
          background: #012463;
          box-shadow: 0 6px 18px rgba(2, 52, 141, 0.4);
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

          .pdm-btn-brochure,
          .pdm-btn-quote {
            flex: 1;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};
