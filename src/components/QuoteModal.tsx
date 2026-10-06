import React, { useState } from 'react';
import { X, CheckCircle, Send } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialProduct }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    industry: 'Hotels',
    message: ''
  });

  React.useEffect(() => {
    if (initialProduct && isOpen) {
      setFormData(prev => ({
        ...prev,
        message: `I would like to request bulk pricing and product specifications for: ${initialProduct}`
      }));
    }
  }, [initialProduct, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success-state">
            <CheckCircle size={60} color="#16a34a" />
            <h3 className="success-title">Thank You!</h3>
            <p className="success-desc">
              Your inquiry has been received. Our hospitality specialist will get in touch with you within 24 hours.
            </p>
            <button className="btn-modal-done" onClick={handleReset}>
              Close
            </button>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="modal-header">
              <span className="modal-badge">Direct Inquiry</span>
              <h3 className="modal-title">Request a Hospitality Quote</h3>
              <p className="modal-sub">
                Tell us your requirements and we will build a custom product quote for your establishment.
              </p>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Contact Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Business / Property Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Grand Palace Hotel"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Work Email *</label>
                <input 
                  type="email" 
                  required 
                  placeholder="rahul@hotel.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Industry Segment</label>
              <select 
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              >
                <option value="Hotels">Hotels & Resorts</option>
                <option value="Restaurants">Restaurants & Cafes</option>
                <option value="Catering">Catering & Banquets</option>
                <option value="Healthcare">Healthcare & Hospitals</option>
                <option value="Commercial">Commercial / Facilities</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label>Product Requirements / Message</label>
              <textarea 
                rows={3} 
                placeholder="Mention categories, items, quantities or specific brands needed..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-modal-submit">
              <span>Send Inquiry</span>
              <Send size={16} />
            </button>
          </form>
        )}
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(16, 40, 67, 0.65);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
        }
        .modal-container {
          background: #ffffff;
          border-radius: var(--radius-md);
          width: 100%;
          max-width: 580px;
          padding: 40px;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          animation: modalAppear 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes modalAppear {
          from { opacity: 0; transform: scale(0.96) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--color-bg-alt);
          color: var(--color-navy-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background var(--transition-fast);
        }
        .modal-close-btn:hover {
          background: var(--color-border);
        }
        .modal-badge {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-accent-red);
          background: var(--color-red-badge-bg);
          padding: 4px 10px;
          border-radius: 9999px;
          margin-bottom: 12px;
        }
        .modal-title {
          font-family: var(--font-heading);
          font-size: 26px;
          color: var(--color-navy-dark);
          margin-bottom: 8px;
        }
        .modal-sub {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-text-body);
          margin-bottom: 24px;
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-group.full-width {
          margin-bottom: 16px;
        }
        .form-group label {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          color: var(--color-navy-dark);
        }
        .form-group input, 
        .form-group select, 
        .form-group textarea {
          font-family: var(--font-body);
          font-size: 14px;
          padding: 10px 14px;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xs);
          outline: none;
          transition: border-color var(--transition-fast);
        }
        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus {
          border-color: var(--color-accent-red);
        }
        .btn-modal-submit {
          width: 100%;
          background: var(--color-accent-red);
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 16px;
          padding: 14px;
          border-radius: var(--radius-xs);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: background var(--transition-fast);
          margin-top: 8px;
        }
        .btn-modal-submit:hover {
          background: var(--color-accent-red-hover);
        }
        .modal-success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 32px 0;
        }
        .success-title {
          font-family: var(--font-heading);
          font-size: 28px;
          color: var(--color-navy-dark);
          margin: 16px 0 8px 0;
        }
        .success-desc {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--color-text-body);
          margin-bottom: 24px;
          max-width: 380px;
        }
        .btn-modal-done {
          background: var(--color-navy-dark);
          color: #ffffff;
          padding: 12px 32px;
          border-radius: var(--radius-xs);
          font-family: var(--font-body);
          font-weight: 600;
        }
        @media (max-width: 600px) {
          .modal-container {
            padding: 24px;
          }
          .form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
