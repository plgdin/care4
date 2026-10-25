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

  it('includes the 2026 guest amenities and engineering ranges', () => {
    const guestAmenities = CATALOG_PRODUCTS
      .filter(product => product.category === 'Guest Amenities')
      .map(product => `${product.title} ${product.subtitle}`)
      .join(' ')
      .toLowerCase();
    const engineering = CATALOG_PRODUCTS
      .filter(product => product.category === 'Engineering Equipments')
      .map(product => `${product.title} ${product.subtitle}`)
      .join(' ')
      .toLowerCase();

    expect(guestAmenities).toContain('foam bath');
    expect(guestAmenities).toContain('hygiene bags');
    expect(guestAmenities).toContain('glass coasters');
    expect(guestAmenities).toContain('shoe shine');
    expect(engineering).toContain('induction cookers');
    expect(engineering).toContain('undercounter chillers');
    expect(engineering).toContain('shawarma machines');
    expect(engineering).toContain('industrial hoods');
  });

  it('ensures all newly added 2026 classification brands and lines are covered in catalog', () => {
    const allBrands = new Set(CATALOG_PRODUCTS.flatMap(p => p.brands));
    
    // Check 2026 brands
    expect(allBrands.has('Victol Gold')).toBe(true);
    expect(allBrands.has('Cintra Cottons')).toBe(true);
    expect(allBrands.has('Yeraa')).toBe(true);
    expect(allBrands.has('Inscape')).toBe(true);
    expect(allBrands.has('All Time')).toBe(true);
    expect(allBrands.has('Pinnacle')).toBe(true);
    expect(allBrands.has('Reckitt')).toBe(true);
    expect(allBrands.has('Skylark')).toBe(true);
    expect(allBrands.has('SDB Biotic')).toBe(true);
    expect(allBrands.has('Havells')).toBe(true);
    expect(allBrands.has('Philips')).toBe(true);
    expect(allBrands.has('Altek')).toBe(true);

    // Verify key lines exist
    expect(CATALOG_PRODUCTS.some(p => p.id === 'linen-table-dining')).toBe(true);
    expect(CATALOG_PRODUCTS.some(p => p.id === 'linen-bathrobes-decor')).toBe(true);
    expect(CATALOG_PRODUCTS.some(p => p.id === 'crockery-yeraa')).toBe(true);
    expect(CATALOG_PRODUCTS.some(p => p.id === 'crockery-bar-stemware')).toBe(true);
    expect(CATALOG_PRODUCTS.some(p => p.id === 'utensils-chafing-buffet')).toBe(true);
    expect(CATALOG_PRODUCTS.some(p => p.id === 'utensils-haccp-chopping-boards')).toBe(true);
    expect(CATALOG_PRODUCTS.some(p => p.id === 'engineering-guestroom-kettles')).toBe(true);
    expect(CATALOG_PRODUCTS.some(p => p.id === 'engineering-hairdryers-handdryers')).toBe(true);
    expect(CATALOG_PRODUCTS.some(p => p.id === 'engineering-insect-killers-aircurtains')).toBe(true);
  });
});
