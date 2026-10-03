export interface CategoryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface BrandItem {
  name: string;
  logo: string;
}

export interface ProductCatalogCard {
  id: string;
  title: string;
  subtitle: string;
  details: string;
  image: string;
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

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: 'tableware',
    title: 'Tableware & Crockery',
    subtitle: 'Dining essentials for every experience.',
    image: '/images/cardimage_b6bc00f1.png'
  },
  {
    id: 'buffet',
    title: 'Buffet & Banquet',
    subtitle: 'Professional serving solutions for any event.',
    image: '/images/cardimage_ac51211f.png'
  },
  {
    id: 'cleaning',
    title: 'Cleaning & Janitorial',
    subtitle: 'Hygiene solutions for safer spaces.',
    image: '/images/cardimage_4fdce090.png'
  },
  {
    id: 'amenities',
    title: 'Guest Amenities',
    subtitle: 'Thoughtful products for a better stay.',
    image: '/images/cardimage_1dbd1171.png'
  }
];

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

export const CATALOG_PRODUCTS: ProductCatalogCard[] = [
  {
    id: 'p1',
    title: 'Tableware & Crockery',
    subtitle: 'Bone china & bespoke dining',
    details: '24 products · Dinewell, Bharath Potteries, Queenland',
    image: '/images/image__tableware___crockery__a8a959b7.png'
  },
  {
    id: 'p2',
    title: 'Stainless Steel Brassware',
    subtitle: 'Hand-finished & multi-finish serving',
    details: '18 products · Guest Essentials, Supreme Range',
    image: '/images/image__stainless_steel_brassware__69672dfd.png'
  },
  {
    id: 'p3',
    title: 'Buffet & Beverage Equipment',
    subtitle: 'Dispensers, chafers & kitchen machines',
    details: '32 products · Star Plus, Mace, Metro NZ',
    image: '/images/image__buffet___beverage_equipment__f2c7e5ac.png'
  },
  {
    id: 'p4',
    title: 'Cleaning Chemicals',
    subtitle: 'VAC & Betco · ISO-certified',
    details: '45 products · Betco, Milton, SAC',
    image: '/images/image__cleaning_chemicals__b85bdd2d.png'
  },
  {
    id: 'p5',
    title: 'Cleaning Equipment & Janitorial',
    subtitle: 'Mops, brooms, trolleys & machines',
    details: '38 products · Rubbermaid, Filmop',
    image: '/images/image__cleaning_equipment___janitorial__b009223f.png'
  },
  {
    id: 'p6',
    title: 'Paper Products & Dispensers',
    subtitle: 'Toilet rolls, napkins & tissue',
    details: '26 products · Prime, Pristine, Premier',
    image: '/images/image__paper_products___dispensers__1a5dc51e.png'
  },
  {
    id: 'p7',
    title: 'Guest Amenities Equipment',
    subtitle: 'In-room comfort & bathroom sets',
    details: '21 products · Guest Essentials, Guest Line',
    image: '/images/image__guest_amenities_equipment__f4f6ec37.png'
  },
  {
    id: 'p8',
    title: 'Waste Management',
    subtitle: 'Plastic, stainless steel short-line',
    details: '15 products · Filmop, Rubbermaid',
    image: '/images/image_3_c35c9821.png'
  }
];

export const CATEGORY_FILTERS = [
  'Tableware & Crockery',
  'Stainless Steel Silverware',
  'Buffet & Beverage Equipment',
  'Cleaning Chemicals',
  'Cleaning Equipment & Janitorial',
  'Paper Products & Dispensary',
  'Guest Amenities',
  'Waste Management'
];

export const TABLEWARE_DETAIL_ITEMS = [
  'Round Dinner Plate',
  'Soup Bowl',
  'Tea Cup & Saucer',
  'Coffee Mug / Bowl - China',
  'Half Plate Square',
  'Buffet Plate',
  'Rim Soup Plate 10"',
  'Oval Serving Platter',
  'Noodle Bowl',
  'Melamine Tumbler',
  'Tea Pot',
  'Salt & Pepper Set'
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
