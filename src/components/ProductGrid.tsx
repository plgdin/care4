import React, { useState } from 'react';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

interface ProductItem {
  id: string;
  category: string;
  title: string;
  badge: string;
  tag: string;
  desc: string;
}

export const ProductGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'cat1', label: 'Category 1' },
    { id: 'cat2', label: 'Category 2' },
    { id: 'cat3', label: 'Category 3' },
  ];

  const products: ProductItem[] = [
    {
      id: 'p1',
      category: 'cat1',
      title: 'Workflow Orchestrator',
      badge: 'Free',
      tag: 'POPULAR',
      desc: 'Automate project handoffs and streamline task states across all departments seamlessly.',
    },
    {
      id: 'p2',
      category: 'cat1',
      title: 'Collaborative Whiteboard',
      badge: 'Free',
      tag: 'POPULAR',
      desc: 'Brainstorm ideas, sketch architectures, and capture feedback in real-time visual canvases.',
    },
    {
      id: 'p3',
      category: 'cat2',
      title: 'Insight Analytics Suite',
      badge: 'Free',
      tag: 'POPULAR',
      desc: 'Real-time telemetry and throughput metrics that reveal operational bottlenecks instantly.',
    },
    {
      id: 'p4',
      category: 'cat2',
      title: 'Team Sync Engine',
      badge: 'Free',
      tag: 'POPULAR',
      desc: 'Contextual messaging and synchronous collaboration that keep distributed teams aligned.',
    },
    {
      id: 'p5',
      category: 'cat3',
      title: 'Automation Builder',
      badge: 'Free',
      tag: 'POPULAR',
      desc: 'No-code workflow recipes connecting over 200+ external tools into unified pipelines.',
    },
    {
      id: 'p6',
      category: 'cat3',
      title: 'Enterprise Vault',
      badge: 'Free',
      tag: 'POPULAR',
      desc: 'SOC2-compliant role-based access control, SSO integration, and comprehensive audit logs.',
    },
  ];

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section style={{ padding: '40px 0 80px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <span className="pill-badge">PRODUCTS</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}
          >
            Powerful tools for modern teams<span style={{ color: 'var(--text-muted)' }}>.</span>
          </h1>

          <p
            style={{
              fontSize: '16px',
              maxWidth: '560px',
              margin: '0 auto 36px',
              color: 'var(--text-secondary)',
            }}
          >
            Modular solutions tailored to plan, build, and ship exceptional work.
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#EDE9E1',
              padding: '4px',
              borderRadius: '9999px',
              gap: '4px',
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '9999px',
                    fontSize: '13px',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                    boxShadow: isActive ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '24px',
          }}
        >
          {filtered.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: '#EDE9E1',
                borderRadius: '24px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
              }}
              className="hover-lift"
            >
              {/* Product Image Placeholder matching wireframe */}
              <div
                style={{
                  width: '100%',
                  height: '180px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9C958A',
                  marginBottom: '20px',
                }}
              >
                <ImageIcon size={36} strokeWidth={1.25} />
              </div>

              {/* Title & Free Tag */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '8px',
                }}
              >
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: 'var(--text-primary)',
                  }}
                >
                  {product.title}
                </h3>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {product.badge}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.55,
                  marginBottom: '24px',
                  flexGrow: 1,
                }}
              >
                {product.desc}
              </p>

              {/* Footer row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                }}
              >
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  {product.tag}
                </span>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
