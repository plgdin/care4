import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

interface FormSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  id?: string;
  ariaLabel?: string;
}

/**
 * Premium custom select used across forms (contact + quote modals).
 * Pill trigger + floating menu, matching the product page filter dropdown
 * (lb-brand-select) design language: navy #02348d accents, 16px menu radius,
 * soft elevation shadow, animated chevron and a check mark on the active row.
 */
const FormSelect: React.FC<FormSelectProps> = ({ value, onChange, options, id, ariaLabel }) => {
  const [open, setOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

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

  const toggle = () => {
    // Flip the menu upward when there is no room below (near modal bottom)
    if (!open && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      setDropUp(spaceBelow < 280 && rect.top > spaceBelow);
    }
    setOpen(o => !o);
  };

  const selected = options.find(o => o.value === value);

  return (
    <div className="form-select-wrap" ref={wrapRef}>
      <button
        type="button"
        id={id}
        ref={btnRef}
        className="form-select-btn"
        onClick={toggle}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
      >
        <span className="form-select-value">{selected ? selected.label : value}</span>
        <ChevronDown size={16} className={`form-select-chev ${open ? 'open' : ''}`} />
      </button>

      {open && (
        <div
          className={`form-select-menu ${dropUp ? 'drop-up' : ''}`}
          role="listbox"
          aria-label={ariaLabel}
        >
          {options.map(option => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={option.value === value}
              className={`form-select-option ${option.value === value ? 'active' : ''}`}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              <span className="form-select-option-label">{option.label}</span>
              {option.value === value && <Check size={15} className="form-select-check" />}
            </button>
          ))}
        </div>
      )}

      <style>{`
        .form-select-wrap {
          position: relative;
          width: 100%;
        }
        .form-select-btn {
          width: 100%;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 0 14px 0 18px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          border: 1.5px solid #cbd5e1;
          border-radius: 9999px;
          background: #f8fafc;
          color: #0f1c2d;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(15, 28, 45, 0.04);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .form-select-btn:hover,
        .form-select-btn:focus-visible {
          border-color: #02348d;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(15, 28, 45, 0.08);
          outline: none;
        }
        .form-select-value {
          flex: 1;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .form-select-chev {
          color: #64748b;
          flex-shrink: 0;
          transition: transform 0.18s ease;
        }
        .form-select-chev.open {
          transform: rotate(180deg);
        }
        .form-select-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          right: 0;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 18px 40px -10px rgba(15, 28, 45, 0.22);
          padding: 8px;
          z-index: 90;
          max-height: 300px;
          overflow-y: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          animation: formSelectMenuIn 0.16s ease;
        }
        .form-select-menu::-webkit-scrollbar {
          display: none;
        }
        .form-select-menu.drop-up {
          top: auto;
          bottom: calc(100% + 8px);
          animation: formSelectMenuInUp 0.16s ease;
        }
        @keyframes formSelectMenuIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes formSelectMenuInUp {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .form-select-option {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 9px;
          border: none;
          background: transparent;
          color: #334155;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          text-align: left;
          padding: 9px 14px;
          border-radius: 9999px;
          cursor: pointer;
          transition: background 0.12s ease;
        }
        .form-select-option:hover {
          background: #f1f5f9;
        }
        .form-select-option.active {
          background: #eff6ff;
          color: #02348d;
        }
        .form-select-option-label {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .form-select-check {
          color: #02348d;
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
};

export default FormSelect;
