import { describe, it, expect } from 'vitest';
import { CATALOG_PRODUCTS, CATEGORY_FILTERS, CONTACT_INFO } from './siteData';

describe('siteData catalog integrity', () => {
  it('ensures all catalog products belong to declared category filters', () => {
    expect(CATALOG_PRODUCTS.length).toBeGreaterThan(0);
    for (const product of CATALOG_PRODUCTS) {
      expect(CATEGORY_FILTERS).toContain(product.category);
      expect(product.id).toBeTruthy();
      expect(product.title).toBeTruthy();
      expect(product.image).toBeTruthy();
      expect(Array.isArray(product.brands)).toBe(true);
      expect(Array.isArray(product.industries)).toBe(true);
      expect(Array.isArray(product.factors)).toBe(true);
    }
  });

  it('ensures contact information is complete and free of outdated address markers', () => {
    expect(CONTACT_INFO.landlines.length).toBeGreaterThanOrEqual(3);
    expect(CONTACT_INFO.mobiles.length).toBeGreaterThanOrEqual(3);
    expect(CONTACT_INFO.fullAddress.toLowerCase()).not.toContain('pulimoodu');
    expect(CONTACT_INFO.addressLine1.toLowerCase()).not.toContain('pulimoodu');
    expect(CONTACT_INFO.mapEmbedUrl.toLowerCase()).not.toContain('pulimoodu');
  });

  it('ensures every category filter has at least one associated product', () => {
    for (const cat of CATEGORY_FILTERS) {
      const matching = CATALOG_PRODUCTS.filter(p => p.category === cat);
      expect(matching.length).toBeGreaterThan(0);
    }
  });
});
