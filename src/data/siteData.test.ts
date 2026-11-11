import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  CATALOG_PRODUCTS,
  CATEGORY_FILTERS,
  CONTACT_INFO,
  BRAND_BROCHURES,
  BRAND_COLORS,
  brandColor,
  findBrochure,
  PRODUCT_SPECS_MAP,
  buildCardDetail
} from './siteData';

/** Brand names that must never appear anywhere on the site. */
const FORBIDDEN_BRANDS = ['Inscape', 'Pinnacle'];

/** Classifications the client asked to keep free of supplier brand names. */
const UNBRANDED_CATEGORIES = ['Linen', 'Guest Amenities', 'Kitchen Equipments'];

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

  it('keeps every card supplied with a visible description and brand-free title', () => {
    for (const product of CATALOG_PRODUCTS) {
      expect((product.subtitle || product.details).trim(), `${product.id} description`).toBeTruthy();
      for (const brand of product.brands) {
        // Brand badge carries this information; title should describe the item only.
        expect(product.title.toLowerCase(), `${product.id} title`).not.toContain(brand.toLowerCase());
      }
    }
    expect(CATALOG_PRODUCTS.find(p => p.id === 'housekeeping-kimberly')?.title)
      .toBe('Professional Paper Products & Dispensers');
  });

  it('never exposes disallowed supplier brand names on any card', () => {
    for (const product of CATALOG_PRODUCTS) {
      const haystack = [
        product.id,
        product.title,
        product.subtitle,
        product.details,
        ...product.brands
      ].join(' ').toLowerCase();

      for (const forbidden of FORBIDDEN_BRANDS) {
        expect(haystack).not.toContain(forbidden.toLowerCase());
      }
    }
  });

  it('keeps brand names off Linen, Guest Amenities and Kitchen Equipments listings', () => {
    for (const product of CATALOG_PRODUCTS) {
      if (UNBRANDED_CATEGORIES.includes(product.category)) {
        expect(product.brands, `${product.id} must not carry a brand`).toEqual([]);
      }
    }
  });

  it('gives every listing outside the unbranded classifications a brand', () => {
    for (const product of CATALOG_PRODUCTS.filter(p => !UNBRANDED_CATEGORIES.includes(p.category))) {
      expect(
        product.brands.length,
        `${product.id} must carry exactly one brand`
      ).toBe(1);
    }
  });

  it('removed obsolete catalog cards entirely', () => {
    const ids = new Set(CATALOG_PRODUCTS.map(p => p.id));
    expect(ids.has('utensils-pinnacle-thermal')).toBe(false);
    expect(ids.has('utensils-venus-kitchen')).toBe(false);
    expect(ids.has('housekeeping-freshnfine')).toBe(false);
  });

  it('only sells Venus brand under the Cutlery classification', () => {
    const venusCards = CATALOG_PRODUCTS.filter(p => p.brands.includes('Venus'));
    expect(venusCards.length).toBeGreaterThan(0);
    for (const product of venusCards) {
      expect(product.category).toBe('Cutlery');
    }
  });

  it('keeps every brand list sorted alphabetically', () => {
    for (const product of CATALOG_PRODUCTS) {
      const sorted = [...product.brands].sort((a, b) => a.localeCompare(b));
      expect(product.brands).toEqual(sorted);
      expect(new Set(product.brands).size).toBe(product.brands.length);
    }
  });

  it('lists one brand per listing — same product may appear under many brands', () => {
    for (const product of CATALOG_PRODUCTS) {
      expect(
        product.brands.length,
        `${product.id} must carry at most one brand`
      ).toBeLessThanOrEqual(1);
    }

    // Same product across brands stays as separate listings
    const stemwareBrands = CATALOG_PRODUCTS
      .filter(p => p.title === 'Commercial Bar & Restaurant Stemware')
      .map(p => p.brands[0]);
    expect(stemwareBrands).toEqual(['Arcoroc', 'Borosil', 'Ocean']);
  });

  it('reuses photos responsibly: max 2 categories and 4 uses per category', () => {
    const usesByImage = new Map<string, string[]>();
    for (const product of CATALOG_PRODUCTS) {
      const hits = usesByImage.get(product.image) ?? [];
      hits.push(product.category);
      usesByImage.set(product.image, hits);
    }

    for (const [image, categories] of usesByImage) {
      const uniqueCategories = new Set(categories);
      expect(uniqueCategories.size, `image ${image} spans too many categories`).toBeLessThanOrEqual(2);
      for (const category of uniqueCategories) {
        const usesInCategory = categories.filter(c => c === category).length;
        expect(usesInCategory, `image ${image} repeats in ${category}`).toBeLessThanOrEqual(4);
      }
    }
  });

  it('ships a Product Catalogue PDF for every mapped brochure brand', () => {
    const allBrands = new Set(CATALOG_PRODUCTS.flatMap(p => p.brands));

    for (const [brand, brochurePath] of Object.entries(BRAND_BROCHURES)) {
      expect(allBrands.has(brand), `${brand} must exist in the catalog`).toBe(true);
      expect(
        existsSync(resolve(process.cwd(), 'public', brochurePath.replace(/^\//, ''))),
        `${brochurePath} must exist on disk`
      ).toBe(true);
    }

    // Mapped brands really resolve through the helper
    expect(findBrochure(['Claycraft Fine Tableware'])).toBe('/brochures/claycraft-catalogue.pdf');
    expect(findBrochure(['Nobody Real'])).toBeNull();
  });

  it('alternates brand pill tones blue / red across the sorted brand roster', () => {
    const sortedBrands = Array.from(new Set(CATALOG_PRODUCTS.flatMap(p => p.brands)))
      .sort((a, b) => a.localeCompare(b));

    for (const [index, brand] of sortedBrands.entries()) {
      expect(BRAND_COLORS[brand]).toBe(index % 2 === 0 ? 'blue' : 'red');
      expect(brandColor(brand)).toBe(index % 2 === 0 ? 'blue' : 'red');
    }
    expect(brandColor('Unknown Extra Brand')).toBe('blue');
  });

  it('groups commercial kitchen equipment under the Kitchen Equipments classification', () => {
    expect(CATEGORY_FILTERS).toContain('Kitchen Equipments');
    expect(CATEGORY_FILTERS).not.toContain('Engineering Equipments');

    const equipment = CATALOG_PRODUCTS.filter(p => p.category === 'Kitchen Equipments');
    expect(equipment.length).toBeGreaterThan(0);
    expect(equipment.some(p => /range|oven|chiller|hood|exhaust|griddle|fryer/i.test(p.title))).toBe(true);
    for (const product of equipment) {
      expect(`${product.title} ${product.subtitle} ${product.details}`.toLowerCase())
        .not.toContain('engineering');
    }
  });

  it('provides specifications for all products', () => {
    for (const product of CATALOG_PRODUCTS) {
      const detail = PRODUCT_SPECS_MAP[product.id] || buildCardDetail(product);

      for (const row of detail.highlights) {
        expect(row.label.trim(), `${product.id} label`).toBeTruthy();
        expect(row.value.trim(), `${product.id} value`).toBeTruthy();
      }
      expect(detail.highlights.map(row => row.label)).toEqual(
        expect.arrayContaining(['Product', 'Classification'])
      );
    }

    expect(Object.keys(PRODUCT_SPECS_MAP)).toHaveLength(CATALOG_PRODUCTS.length);
  });

  it('ensures contact information is complete and free of outdated address markers', () => {
    expect(CONTACT_INFO.landlines.length).toBe(2);
    expect(CONTACT_INFO.mobiles.length).toBe(4);
    expect(CONTACT_INFO.landlines).toContain('+91 471 245 0977');
    expect(CONTACT_INFO.landlines).toContain('+91 471 247 5111');
    expect(CONTACT_INFO.landlines).not.toContain('+91 471 245 0978');
    expect(CONTACT_INFO.mobiles[0]).toBe('+91 99954 65830');
    expect(CONTACT_INFO.mobiles[1]).toBe('+91 98470 11830');
    expect(CONTACT_INFO.mobiles[2]).toBe('+91 99959 11830');
    expect(CONTACT_INFO.mobiles[3]).toBe('+91 93491 98950');
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
