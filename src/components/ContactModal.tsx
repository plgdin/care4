import React, { useState, useEffect } from 'react';
import { 
  X, 
  MapPin, 
  Phone, 
  Smartphone, 
  Mail,
  Clock, 
  Send, 
  CheckCircle, 
  ExternalLink 
} from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    industry: 'Hotels',
    message: ''
  });

  // Close on Escape key press & prevent background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      business: '',
      email: '',
      phone: '',
      industry: 'Hotels',
      message: ''
    });
  };

  return (
    <div className="contact-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="contact-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className="contact-modal-close-btn" 
          onClick={onClose} 
          aria-label="Close contact popup"
        >
          <X size={22} />
        </button>

        {/* Modal Scrollable Body */}
        <div className="contact-modal-scrollable">
          
          {/* SECTION 1: Form (The very first thing you see) */}
          <div className="contact-modal-form-section">
            <div className="contact-modal-header">
              <span className="contact-badge-pill">Quick Inquiry</span>
              <h2 className="contact-modal-title">Send Us a Message</h2>
              <p className="contact-modal-subtitle">
                Fill out the form below and our hospitality supply consultants will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="contact-modal-success">
                <CheckCircle size={56} className="success-icon" />
                <h3 className="success-title">Thank You!</h3>
                <p className="success-message">
                  Your inquiry has been submitted successfully. Our hospitality consultant will reach out to you shortly.
                </p>
                <button 
                  type="button" 
                  className="btn-modal-reset" 
                  onClick={handleReset}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form className="contact-modal-form" onSubmit={handleSubmit}>
                <div className="form-two-col-grid">
                  <div className="form-field-group">
                    <label htmlFor="modal-name">Contact Name *</label>
                    <input 
                      id="modal-name"
                      type="text" 
                      required 
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="modal-business">Business / Property Name *</label>
                    <input 
                      id="modal-business"
                      type="text" 
                      required 
                      placeholder="e.g. Grand Palace Hotel"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="modal-email">Work Email *</label>
                    <input 
                      id="modal-email"
                      type="email" 
                      required 
                      placeholder="rahul@hotel.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="modal-phone">Phone Number *</label>
                    <input 
                      id="modal-phone"
                      type="tel" 
                      required 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field-group full-width">
                  <label htmlFor="modal-industry">Industry Segment</label>
                  <select 
                    id="modal-industry"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  >
                    <option value="Hotels">Hotels &amp; Resorts</option>
                    <option value="Restaurants">Restaurants &amp; Cafes</option>
                    <option value="Catering">Catering &amp; Banquets</option>
                    <option value="Healthcare">Healthcare &amp; Hospitals</option>
                    <option value="Commercial">Commercial &amp; Facility Management</option>
                    <option value="Other">Other Hospitality Services</option>
                  </select>
                </div>

                <div className="form-field-group full-width">
                  <label htmlFor="modal-message">Requirements / Message</label>
                  <textarea 
                    id="modal-message"
                    rows={3} 
                    placeholder="Tell us what products, categories or quantities you need..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn-modal-submit">
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Section Divider */}
          <div className="modal-section-divider">
            <span className="divider-line" />
            <span className="divider-label">OR VISIT &amp; CONTACT US DIRECTLY</span>
            <span className="divider-line" />
          </div>

          {/* SECTION 2: Map on the Left, Contact Details on the Right (Visible as you scroll down) */}
          <div className="contact-modal-info-section">
            {/* Left: Map */}
            <div className="modal-map-col">
              <div className="modal-map-card">
                <div className="map-card-top">
                  <div>
                    <h3 className="map-card-title">Location Map</h3>
                    <p className="map-card-address">Statue, Trivandrum, Kerala</p>
                  </div>
                  <a 
                    href={CONTACT_INFO.mapDirectionsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="modal-directions-btn"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                <div className="modal-map-embed">
                  <iframe
                    title="Care 4 Associates Location"
                    src={CONTACT_INFO.mapEmbedUrl}
                    width="100%"
                    height="270"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Right: Contact Information & Details */}
            <div className="modal-details-col">
              <div className="modal-info-card">
                <div className="info-card-header">
                  <span className="info-head-badge">Head Office</span>
                  <h3 className="info-company-title">{CONTACT_INFO.company}</h3>
                </div>

                {/* Address */}
                <div className="info-detail-row">
                  <div className="detail-icon-box">
                    <MapPin size={18} />
                  </div>
                  <div className="detail-text-box">
                    <span className="detail-label">Office Address</span>
                    <p className="detail-value">
                      {CONTACT_INFO.addressLine1}<br />
                      {CONTACT_INFO.addressLine2}<br />
                      {CONTACT_INFO.addressLine3}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="info-detail-row">
                  <div className="detail-icon-box">
                    <Mail size={18} />
                  </div>
                  <div className="detail-text-box">
                    <span className="detail-label">Email</span>
                    <div className="modal-mobile-tags">
                      {CONTACT_INFO.emails.map((em, idx) => (
                        <a 
                          key={idx}
                          href={`mailto:${em}`} 
                          className="modal-mobile-pill"
                        >
                          {em}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Landline */}
                <div className="info-detail-row">
                  <div className="detail-icon-box">
                    <Phone size={18} />
                  </div>
                  <div className="detail-text-box">
                    <span className="detail-label">Landline</span>
                    <div className="modal-mobile-tags">
                      {CONTACT_INFO.landlines.map((ll, idx) => (
                        <a 
                          key={idx}
                          href={`tel:${ll.replace(/\s+/g, '')}`} 
                          className="modal-mobile-pill"
                        >
                          {ll}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobiles */}
                <div className="info-detail-row">
                  <div className="detail-icon-box">
                    <Smartphone size={18} />
                  </div>
                  <div className="detail-text-box">
                    <span className="detail-label">Mobile Support</span>
                    <div className="modal-mobile-tags">
                      {CONTACT_INFO.mobiles.map((mob, idx) => (
                        <a 
                          key={idx}
                          href={`tel:${mob.replace(/\s+/g, '')}`} 
                          className="modal-mobile-pill"
                        >
                          {mob}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="info-detail-row">
                  <div className="detail-icon-box">
                    <Clock size={18} />
                  </div>
                  <div className="detail-text-box">
                    <span className="detail-label">Working Hours</span>
                    <p className="detail-value">
                      Monday – Saturday: 9:00 AM – 6:30 PM<br />
                      <span className="text-closed">Sunday: Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .contact-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 28, 45, 0.72);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2100;
          padding: 24px 16px;
          animation: modalFadeIn 0.22s ease-out;
        }

        .contact-modal-dialog {
          background: #ffffff;
          border-radius: 24px;
          width: 100%;
          max-width: 920px;
          max-height: 90vh;
          position: relative;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.22), 0 4px 16px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: modalSlideUp 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .contact-modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f1f5f9;
          border: 1px solid rgba(0, 0, 0, 0.06);
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s ease;
        }
        .contact-modal-close-btn:hover {
          background: #e2e8f0;
          color: #0f172a;
          transform: rotate(90deg);
        }

        .contact-modal-scrollable {
          padding: 36px 40px 40px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 #f8fafc;
        }
        .contact-modal-scrollable::-webkit-scrollbar {
          width: 6px;
        }
        .contact-modal-scrollable::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }

        /* SECTION 1: Form */
        .contact-modal-form-section {
          margin-bottom: 28px;
        }
        .contact-modal-header {
          margin-bottom: 24px;
          padding-right: 48px;
        }
        .contact-badge-pill {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-accent-red);
          background-color: #fee2e2;
          padding: 4px 12px;
          border-radius: 12px;
          margin-bottom: 10px;
        }
        .contact-modal-title {
          font-family: var(--font-heading);
          font-size: 26px;
          font-weight: 800;
          color: var(--color-navy-dark);
          line-height: 1.25;
          margin-bottom: 8px;
        }
        .contact-modal-subtitle {
          font-family: var(--font-body);
          font-size: 14.5px;
          color: #64748b;
          line-height: 1.5;
        }

        .contact-modal-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .form-two-col-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-field-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-field-group.full-width {
          grid-column: 1 / -1;
        }
        .form-field-group label {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          color: #334155;
        }
        .form-field-group input,
        .form-field-group select,
        .form-field-group textarea {
          width: 100%;
          font-family: var(--font-body);
          font-size: 14px;
          padding: 10px 14px;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          color: #0f172a;
          transition: all 0.2s ease;
          outline: none;
        }
        .form-field-group input:focus,
        .form-field-group select:focus,
        .form-field-group textarea:focus {
          background: #ffffff;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(2, 52, 141, 0.12);
        }
        .form-field-group textarea {
          resize: vertical;
          min-height: 80px;
        }

        .form-submit-row {
          margin-top: 4px;
          display: flex;
          justify-content: flex-end;
        }
        .btn-modal-submit {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: var(--color-accent-red);
          color: #ffffff;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 700;
          padding: 12px 28px;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 16px rgba(217, 27, 42, 0.28);
        }
        .btn-modal-submit:hover {
          background-color: var(--color-accent-red-hover);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(217, 27, 42, 0.38);
        }

        /* Success State */
        .contact-modal-success {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .success-icon {
          color: #16a34a;
        }
        .success-title {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 800;
          color: #14532d;
        }
        .success-message {
          font-family: var(--font-body);
          font-size: 14.5px;
          color: #166534;
          max-width: 480px;
          line-height: 1.5;
        }
        .btn-modal-reset {
          margin-top: 6px;
          font-family: var(--font-body);
          font-size: 13.5px;
          font-weight: 600;
          color: var(--color-primary);
          background: #ffffff;
          border: 1px solid #cbd5e1;
          padding: 8px 18px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .btn-modal-reset:hover {
          background: #f8fafc;
          border-color: #94a3b8;
        }

        /* Section Divider */
        .modal-section-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 32px 0 28px 0;
        }
        .divider-line {
          flex: 1;
          height: 1px;
          background: #e2e8f0;
        }
        .divider-label {
          font-family: var(--font-body);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #94a3b8;
          white-space: nowrap;
        }

        /* SECTION 2: Map on the left, Contact details on the right */
        .contact-modal-info-section {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 24px;
          align-items: stretch;
        }

        /* Left: Map Card */
        .modal-map-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .map-card-top {
          padding: 16px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2e8f0;
          background: #ffffff;
        }
        .map-card-title {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 700;
          color: var(--color-navy-dark);
          line-height: 1.2;
        }
        .map-card-address {
          font-family: var(--font-body);
          font-size: 12px;
          color: #64748b;
          margin-top: 2px;
        }
        .modal-directions-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-body);
          font-size: 12.5px;
          font-weight: 600;
          color: var(--color-primary);
          background: #eff6ff;
          padding: 6px 12px;
          border-radius: 6px;
          transition: background 0.15s ease;
        }
        .modal-directions-btn:hover {
          background: #dbeafe;
        }
        .modal-map-embed {
          flex: 1;
          min-height: 250px;
          position: relative;
        }
        .modal-map-embed iframe {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 250px;
        }

        /* Right: Contact Information */
        .modal-info-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 22px 22px 18px 22px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          height: 100%;
        }
        .info-card-header {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e2e8f0;
        }
        .info-head-badge {
          display: inline-block;
          align-self: flex-start;
          font-family: var(--font-body);
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-primary);
          background: #eff6ff;
          padding: 3px 10px;
          border-radius: 10px;
        }
        .info-company-title {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 800;
          color: var(--color-navy-dark);
          line-height: 1.25;
        }

        .info-detail-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .detail-icon-box {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .detail-text-box {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }
        .detail-label {
          font-family: var(--font-body);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #94a3b8;
        }
        .detail-value {
          font-family: var(--font-body);
          font-size: 13.5px;
          color: #334155;
          line-height: 1.45;
        }
        .phone-link {
          color: var(--color-primary);
          font-weight: 600;
          transition: color 0.15s ease;
        }
        .phone-link:hover {
          color: var(--color-accent-red);
        }
        .modal-mobile-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }
        .modal-mobile-pill {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          color: var(--color-navy-dark);
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 4px 10px;
          border-radius: 6px;
          transition: all 0.15s ease;
        }
        .modal-mobile-pill:hover {
          background: #eff6ff;
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
        .text-closed {
          color: #94a3b8;
          font-size: 12px;
        }

        /* Animations */
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: scale(0.97) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .contact-modal-scrollable {
            padding: 28px 20px 32px;
          }
          .form-two-col-grid {
            grid-template-columns: 1fr;
          }
          .contact-modal-info-section {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .modal-map-embed {
            min-height: 220px;
          }
          .modal-map-embed iframe {
            height: 220px;
          }
        }
      `}</style>
    </div>
  );
};
