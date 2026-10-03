export type ClassificationType = 'brands' | 'items' | 'grouped-items' | 'entries';

export interface CategoryDefinition {
  id: string;
  name: string; // Exact client wording
  slug: string;
  description: string;
  classificationType: ClassificationType;
  referenceUrl?: string;
  image: string;
}

export interface CatalogueEntry {
  id: string;
  name: string; // Exact Excel entry name
  categoryId: string;
  entryType: 'brand' | 'item' | 'entry';
  subgroup?: string; // For grouped items (e.g. Guest Amenities sections)
  note?: string;
}

export interface BrandItem {
  name: string;
  logo: string;
}

export interface OfferItem {
  number: string;
  title: string;
  description: string;
}

export interface WhoWeServeItem {
  title: string;
  description: string;
  image: string;
}

export const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/heroimage_3f45b21f.png',
    alt: 'Fine dining hospitality table setting'
  },
  {
    id: 2,
    image: '/images/image__restaurant_setting__c005091f.png',
    alt: 'Elegant restaurant setting'
  },
  {
    id: 3,
    image: '/images/image__fine_dining__2ac60065.png',
    alt: 'Hospitality catering and banquet'
  }
];

// The Client's 8 Official Categories from Sheet "28-07-26"
export const CLIENT_CATEGORIES: CategoryDefinition[] = [
  {
    id: 'crockery',
    name: 'Crockery',
    slug: 'crockery',
    description: 'Premier tableware and dining collections from leading commercial manufacturers.',
    classificationType: 'brands',
    image: '/images/cardimage_b6bc00f1.png'
  },
  {
    id: 'cutlery',
    name: 'Cutlery',
    slug: 'cutlery',
    description: 'Precision-crafted stainless steel and fine dining flatware solutions.',
    classificationType: 'brands',
    image: '/images/image__stainless_steel_brassware__69672dfd.png'
  },
  {
    id: 'linen',
    name: 'Linen',
    slug: 'linen',
    description: 'Hospitality-grade bedding, premium bath towels, rugs, and room fabrics.',
    classificationType: 'items',
    referenceUrl: 'www.cintracottons.com',
    image: '/images/centerimage_f8709305.png'
  },
  {
    id: 'guest-amenities',
    name: 'Guest Amenities',
    slug: 'guest-amenities',
    description: 'Thoughtful room accessories, bath liquids, soaps, and guest convenience kits.',
    classificationType: 'grouped-items',
    referenceUrl: 'www.victolgold.com',
    image: '/images/cardimage_1dbd1171.png'
  },
  {
    id: 'kitchen-utensils',
    name: 'Kitchen Utensils',
    slug: 'kitchen-utensils',
    description: 'Commercial kitchen cookware, prep tools, and professional utensils.',
    classificationType: 'brands',
    image: '/images/image__buffet___beverage_equipment__f2c7e5ac.png'
  },
  {
    id: 'house-keeping',
    name: 'House Keeping',
    slug: 'house-keeping',
    description: 'Specialized housekeeping, waste, and facility maintenance supplies.',
    classificationType: 'brands',
    image: '/images/image__cleaning_equipment___janitorial__b009223f.png'
  },
  {
    id: 'cleaning-chemicals',
    name: 'Cleaning Chemicals',
    slug: 'cleaning-chemicals',
    description: 'Industrial hygiene, dishwashing, and surface sanitization chemicals.',
    classificationType: 'brands',
    image: '/images/image__cleaning_chemicals__b85bdd2d.png'
  },
  {
    id: 'engineering-equipments',
    name: 'Engineering Equipments',
    slug: 'engineering-equipments',
    description: 'Heavy-duty hospitality machinery, back-of-house, and kitchen equipment.',
    classificationType: 'entries',
    image: '/images/image_3_c35c9821.png'
  }
];

// Actual Excel classification data from Sheet "28-07-26"
export const CATALOGUE_ENTRIES: CatalogueEntry[] = [
  // 1. CROCKERY (Brands / Suppliers)
  { id: 'cr-1', name: 'ARCOROC', categoryId: 'crockery', entryType: 'brand' },
  { id: 'cr-2', name: 'ARIANE', categoryId: 'crockery', entryType: 'brand' },
  { id: 'cr-3', name: 'BHARAT - CROCKERY', categoryId: 'crockery', entryType: 'brand' },
  { id: 'cr-4', name: 'BOROSIL', categoryId: 'crockery', entryType: 'brand' },
  { id: 'cr-5', name: 'CELLO', categoryId: 'crockery', entryType: 'brand' },
  { id: 'cr-6', name: 'CLAY CRAFT', categoryId: 'crockery', entryType: 'brand' },
  { id: 'cr-7', name: 'DINEWELLL', categoryId: 'crockery', entryType: 'brand' },
  { id: 'cr-8', name: 'JCPL', categoryId: 'crockery', entryType: 'brand' },
  { id: 'cr-9', name: 'OCEAN', categoryId: 'crockery', entryType: 'brand' },
  { id: 'cr-10', name: 'SERVEWELL', categoryId: 'crockery', entryType: 'brand' },
  { id: 'cr-11', name: 'SUPERWARE', categoryId: 'crockery', entryType: 'brand' },
  { id: 'cr-12', name: 'UNION', categoryId: 'crockery', entryType: 'brand' },
  { id: 'cr-13', name: 'V 4', categoryId: 'crockery', entryType: 'brand' },

  // 2. CUTLERY (Brands / Suppliers)
  { id: 'cu-1', name: 'SHAPES', categoryId: 'cutlery', entryType: 'brand' },
  { id: 'cu-2', name: 'SUPREME', categoryId: 'cutlery', entryType: 'brand' },
  { id: 'cu-3', name: 'VENUS', categoryId: 'cutlery', entryType: 'brand' },
  { id: 'cu-4', name: 'FNS', categoryId: 'cutlery', entryType: 'brand' },

  // 3. LINEN (Product / Item Types - Not brands. Source: www.cintracottons.com)
  { id: 'li-1', name: 'BATH TOWELS', categoryId: 'linen', entryType: 'item' },
  { id: 'li-2', name: 'FACE TOWEL', categoryId: 'linen', entryType: 'item' },
  { id: 'li-3', name: 'HAND TOWEL', categoryId: 'linen', entryType: 'item' },
  { id: 'li-4', name: 'POOL TOWEL', categoryId: 'linen', entryType: 'item' },
  { id: 'li-5', name: 'BATH MAT', categoryId: 'linen', entryType: 'item' },
  { id: 'li-6', name: 'BED COVERS', categoryId: 'linen', entryType: 'item' },
  { id: 'li-7', name: 'BED SHEETS', categoryId: 'linen', entryType: 'item' },
  { id: 'li-8', name: 'CARPETS', categoryId: 'linen', entryType: 'item' },
  { id: 'li-9', name: 'CURTAINS', categoryId: 'linen', entryType: 'item' },
  { id: 'li-10', name: 'CUSHIONS', categoryId: 'linen', entryType: 'item' },
  { id: 'li-11', name: 'DUVETS', categoryId: 'linen', entryType: 'item' },
  { id: 'li-12', name: 'MATTRESS PROTECTOR', categoryId: 'linen', entryType: 'item' },
  { id: 'li-13', name: 'PILLOW COVER', categoryId: 'linen', entryType: 'item' },
  { id: 'li-14', name: 'PILLOWS', categoryId: 'linen', entryType: 'item' },
  { id: 'li-15', name: 'RUGS', categoryId: 'linen', entryType: 'item' },
  { id: 'li-16', name: 'THROWS', categoryId: 'linen', entryType: 'item' },

  // 4. GUEST AMENITIES (Grouped Product / Item Types. Source: www.victolgold.com)
  // Subgroup: ROOM AMENITIES
  { id: 'ga-1', name: 'Hygiene /disposable Bag', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'ROOM AMENITIES' },
  { id: 'ga-2', name: 'Shoe mitt', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'ROOM AMENITIES' },
  { id: 'ga-3', name: 'Hanger', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'ROOM AMENITIES' },
  { id: 'ga-4', name: 'Laundry Paper Bag', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'ROOM AMENITIES' },
  { id: 'ga-5', name: 'Bath Slipper', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'ROOM AMENITIES' },
  { id: 'ga-6', name: 'Pencil & Pen', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'ROOM AMENITIES' },
  { id: 'ga-7', name: 'Glass Cover', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'ROOM AMENITIES' },
  { id: 'ga-8', name: 'Glass Coaster', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'ROOM AMENITIES' },

  // Subgroup: LIQUID AMENITIES & SOAP
  { id: 'ga-9', name: 'Bath Gel', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'LIQUID AMENITIES & SOAP' },
  { id: 'ga-10', name: 'Body lotion', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'LIQUID AMENITIES & SOAP' },
  { id: 'ga-11', name: 'Foam Bath', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'LIQUID AMENITIES & SOAP' },
  { id: 'ga-12', name: 'Moisturizer', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'LIQUID AMENITIES & SOAP' },
  { id: 'ga-13', name: 'Shampoo', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'LIQUID AMENITIES & SOAP' },
  { id: 'ga-14', name: 'Shower Gel', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'LIQUID AMENITIES & SOAP' },
  { id: 'ga-15', name: 'soap', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'LIQUID AMENITIES & SOAP' },

  // Subgroup: BATH AMENITIES
  { id: 'ga-16', name: 'Toilet Roll', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'BATH AMENITIES' },
  { id: 'ga-17', name: 'WC Band', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'BATH AMENITIES' },

  // Subgroup: HOUSE KEEPING
  { id: 'ga-18', name: 'Bill folder', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'HOUSE KEEPING' },
  { id: 'ga-19', name: 'D N D Card', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'HOUSE KEEPING' },
  { id: 'ga-20', name: 'Doli paper', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'HOUSE KEEPING' },
  { id: 'ga-21', name: 'Food Container', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'HOUSE KEEPING' },
  { id: 'ga-22', name: 'Luggage Tag', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'HOUSE KEEPING' },
  { id: 'ga-23', name: 'Menu Folder', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'HOUSE KEEPING' },
  { id: 'ga-24', name: 'Room freshner', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'HOUSE KEEPING' },
  { id: 'ga-25', name: 'Shoe Shine', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'HOUSE KEEPING' },
  { id: 'ga-26', name: 'Stirrer', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'HOUSE KEEPING' },
  { id: 'ga-27', name: 'Straw', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'HOUSE KEEPING' },
  { id: 'ga-28', name: 'Tooth Pick', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'HOUSE KEEPING' },

  // Subgroup: OTHER GUEST AMENITY KITS
  { id: 'ga-29', name: 'DENTAL KIT', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'OTHER GUEST AMENITY KITS' },
  { id: 'ga-30', name: 'MEDICAL KIT', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'OTHER GUEST AMENITY KITS' },
  { id: 'ga-31', name: 'SHAVING KIT', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'OTHER GUEST AMENITY KITS' },
  { id: 'ga-32', name: 'SEWING KIT', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'OTHER GUEST AMENITY KITS' },
  { id: 'ga-33', name: 'CUSTOMISED HOTEL ROOM KITS', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'OTHER GUEST AMENITY KITS' },
  { id: 'ga-34', name: 'CUSTOMISED GUEST KITS', categoryId: 'guest-amenities', entryType: 'item', subgroup: 'OTHER GUEST AMENITY KITS' },

  // 5. KITCHEN UTENSILS (Brands / Suppliers)
  { id: 'ku-1', name: 'ANCHOR UTENSILS', categoryId: 'kitchen-utensils', entryType: 'brand' },
  { id: 'ku-2', name: 'BAKERS', categoryId: 'kitchen-utensils', entryType: 'brand' },
  { id: 'ku-3', name: 'CAMBRO NILKAMAL', categoryId: 'kitchen-utensils', entryType: 'brand' },
  { id: 'ku-4', name: 'GODREJ - CARTINI', categoryId: 'kitchen-utensils', entryType: 'brand' },
  { id: 'ku-5', name: 'HEM', categoryId: 'kitchen-utensils', entryType: 'brand' },
  { id: 'ku-6', name: 'INDIGO', categoryId: 'kitchen-utensils', entryType: 'brand' },
  { id: 'ku-7', name: 'KENFORD', categoryId: 'kitchen-utensils', entryType: 'brand' },
  { id: 'ku-8', name: 'KMW', categoryId: 'kitchen-utensils', entryType: 'brand' },
  { id: 'ku-9', name: 'MILTON', categoryId: 'kitchen-utensils', entryType: 'brand' },
  { id: 'ku-10', name: 'MOSAIC', categoryId: 'kitchen-utensils', entryType: 'brand' },
  { id: 'ku-11', name: 'POLYGAURD', categoryId: 'kitchen-utensils', entryType: 'brand' },
  { id: 'ku-12', name: 'PRADEEP', categoryId: 'kitchen-utensils', entryType: 'brand' },
  { id: 'ku-13', name: 'PRESTIGE', categoryId: 'kitchen-utensils', entryType: 'brand' },
  { id: 'ku-14', name: 'RENA', categoryId: 'kitchen-utensils', entryType: 'brand' },
  { id: 'ku-15', name: 'RUDRA', categoryId: 'kitchen-utensils', entryType: 'brand' },
  { id: 'ku-16', name: 'SUJATHA', categoryId: 'kitchen-utensils', entryType: 'brand' },
  { id: 'ku-17', name: 'VENUS', categoryId: 'kitchen-utensils', entryType: 'brand' },
  { id: 'ku-18', name: 'ZANUFF CORVUS', categoryId: 'kitchen-utensils', entryType: 'brand' },

  // 6. HOUSE KEEPING (Brands / Suppliers)
  { id: 'hk-1', name: 'CAMBRO NILKAMAL', categoryId: 'house-keeping', entryType: 'brand' },
  { id: 'hk-2', name: 'CONTA', categoryId: 'house-keeping', entryType: 'brand' },
  { id: 'hk-3', name: 'DABUR', categoryId: 'house-keeping', entryType: 'brand' },
  { id: 'hk-4', name: 'FAMILY PLASTIC', categoryId: 'house-keeping', entryType: 'brand' },
  { id: 'hk-5', name: 'FRESH N FINE', categoryId: 'house-keeping', entryType: 'brand' },
  { id: 'hk-6', name: 'GALA', categoryId: 'house-keeping', entryType: 'brand' },
  { id: 'hk-7', name: 'HIT', categoryId: 'house-keeping', entryType: 'brand' },
  { id: 'hk-8', name: 'KIMBERLY', categoryId: 'house-keeping', entryType: 'brand' },
  { id: 'hk-9', name: 'PREMIER', categoryId: 'house-keeping', entryType: 'brand' },
  { id: 'hk-10', name: 'ROOTS', categoryId: 'house-keeping', entryType: 'brand' },

  // 7. CLEANING CHEMICALS (Brands / Suppliers)
  { id: 'cc-1', name: 'DIVERSEY', categoryId: 'cleaning-chemicals', entryType: 'brand' },
  { id: 'cc-2', name: 'SAC', categoryId: 'cleaning-chemicals', entryType: 'brand' },

  // 8. ENGINEERING EQUIPMENTS (Category Entries)
  { id: 'ee-1', name: 'KITCHEN EQUIPMENTS', categoryId: 'engineering-equipments', entryType: 'entry' },
  { id: 'ee-2', name: 'SERMAN', categoryId: 'engineering-equipments', entryType: 'entry' }
];

// Sheet 1: Master Brand / Company Directory (exact names preserved)
export const SHEET1_DIRECTORY: string[] = [
  'CONTA', 'HEM', 'BAKERS', 'INDIGO', 'KMW', 'ZANUFF CORVUS', 'KENFORD', 'MOSIQ',
  'MILTON', 'POLYGAURD', 'PRESTIGE', 'ANCHOR UTENSILS', 'FAMILY PLASTIC', 'DIVERSEY',
  'SAC', 'VICTOL', 'SDB - BIOTIC', 'DINE WELLL', 'SERVE WELL', 'SUPERWARE', 'ARIANE',
  'OCEAN', 'ARCROC', 'CLAY CRAFT', 'BHARAT - CROCKERY', 'SUPREME - CUTLERY', 'VENUS',
  'RUDRA', 'PRADEEP', 'ALL TIME', 'CAMBRO NILKAMAL', 'ROOTS', 'ALTEK', 'GALA',
  'FRESH&FINE', 'KIMBERLY', 'PREMIERE', 'DABUR', 'HIT', 'RICKET', 'RENA',
  'GODREJ - CARTINI', 'UNION', 'PINACLE', 'V 4', 'SKYLARK', 'CARPETS', 'SUJATHA',
  'SERMAN', 'BOROSSIL', 'CELLO', 'KITCHEN EQUIPMENTS', 'INSCAPE', 'JCPL', 'HAVELS',
  'PHILIPS', 'YERAA'
];

// Verified Showcase Brands (Figma presentation preserved with logos)
export const BRANDS_ROW_1: BrandItem[] = [
  { name: 'Dinewell', logo: '/images/dinewell_logo_8ea87d82.png' },
  { name: 'Bharath Potteries', logo: '/images/bharath_potteries_logo_734f20b7.png' },
  { name: 'MILTON', logo: '/images/milton_logo_6b559719.png' },
  { name: 'H&H', logo: '/images/h_h_logo_660137d0.png' },
  { name: 'FRESH N FINE', logo: '/images/fresh_n_fine_logo_58f73fee.png' },
  { name: 'SAC Chemicals', logo: '/images/sac_chemicals_logo_4c9ab67e.png' }
];

export const BRANDS_ROW_2: BrandItem[] = [
  { name: 'CONTA', logo: '/images/conta_logo_76d10c2d.png' },
  { name: 'Betco', logo: '/images/betco_logo_b77db17d.png' },
  { name: 'Kimberly-Clark', logo: '/images/kimberly-clark_logo_39ffe52a.png' },
  { name: '3M', logo: '/images/3m_logo_a7adaa13.png' },
  { name: 'TORK', logo: '/images/tork_logo_e4dd436c.png' },
  { name: 'Rubbermaid', logo: '/images/rubbermaid_logo_f49e0fad.png' }
];

export const ABOUT_STATS = [
  { value: '15+', label: 'Years of Experience' },
  { value: '500+', label: 'Happy Clients' },
  { value: '1000+', label: 'Products Supplied' }
];

export const WHO_WE_SERVE: WhoWeServeItem[] = [
  {
    title: 'Hotels',
    description: 'Premium products for hotels of all sizes, from boutique to large-scale chains.',
    image: '/images/image__hotels__8af4967c.png'
  },
  {
    title: 'Restaurants',
    description: 'Quality ingredients and supplies for diverse cuisines and concepts.',
    image: '/images/image__restaurants__6ff4e1ae.png'
  },
  {
    title: 'Catering',
    description: 'Reliable supply for caterers, banquets and large events.',
    image: '/images/image__buffet___beverage_equipment__f2c7e5ac.png'
  }
];

export const WHAT_WE_OFFER: OfferItem[] = [
  {
    number: '1',
    title: 'Complete FMCG Range',
    description: 'From daily essentials to speciality items, we provide a comprehensive product portfolio.'
  },
  {
    number: '2',
    title: 'Authorized Distribution',
    description: 'Authorized distributor of leading national and international brands.'
  },
  {
    number: '3',
    title: 'Bulk & Consistent Supply',
    description: 'Reliable and timely supply to meet your business needs at any scale.'
  },
  {
    number: '4',
    title: 'Customer-Specific Sourcing',
    description: 'We understand your requirements and source products accordingly.'
  },
  {
    number: '5',
    title: 'Maintenance & Service',
    description: 'A dedicated team to ensure smooth operations and quick support.'
  },
  {
    number: '6',
    title: 'Logistics & Delivery',
    description: 'Efficient and prompt delivery across Kerala and nearby regions.'
  }
];
