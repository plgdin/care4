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
  category: string;
  brands: string[];
  industries: string[];
  factors: string[];
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

export interface CategorySpotlightInfo {
  eyebrow: string;
  title: string;
  image: string;
  badges: string[];
  items: string[];
  footnote: string;
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

export const ALL_FILTER_BRANDS: string[] = [
  'Dinewell',
  'Bharath Potteries',
  'MILTON',
  'H&H',
  'FRESH N FINE',
  'SAC Chemicals',
  'CONTA',
  'Betco',
  'Kimberly-Clark',
  '3M',
  'TORK',
  'Rubbermaid'
];

export const INDUSTRY_FACTORS: string[] = [
  'Hotels',
  'Restaurants',
  'Catering',
  'Facilities & Janitorial'
];

export const OTHER_FACTORS: string[] = [
  'Bulk Wholesale',
  'Custom Branding',
  'Eco-Friendly / Green',
  'ISO Certified'
];

export const CATALOG_PRODUCTS: ProductCatalogCard[] = [
  {
    id: 'p1',
    title: 'Tableware & Crockery',
    subtitle: 'Bone china & bespoke dining',
    details: '24 products · Dinewell, Bharath Potteries',
    image: '/images/image__tableware___crockery__a8a959b7.png',
    category: 'Tableware & Crockery',
    brands: ['Dinewell', 'Bharath Potteries'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Bulk Wholesale', 'Custom Branding', 'ISO Certified']
  },
  {
    id: 'p2',
    title: 'Stainless Steel Silverware',
    subtitle: 'Hand-finished & multi-finish serving',
    details: '18 products · MILTON, H&H, Dinewell',
    image: '/images/image__stainless_steel_brassware__69672dfd.png',
    category: 'Stainless Steel Silverware',
    brands: ['MILTON', 'H&H', 'Dinewell'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Bulk Wholesale', 'Custom Branding']
  },
  {
    id: 'p3',
    title: 'Buffet & Beverage Equipment',
    subtitle: 'Dispensers, chafers & kitchen machines',
    details: '32 products · CONTA, MILTON, H&H',
    image: '/images/image__buffet___beverage_equipment__f2c7e5ac.png',
    category: 'Buffet & Beverage Equipment',
    brands: ['CONTA', 'MILTON', 'H&H'],
    industries: ['Hotels', 'Catering', 'Restaurants'],
    factors: ['Bulk Wholesale', 'ISO Certified']
  },
  {
    id: 'p4',
    title: 'Cleaning Chemicals',
    subtitle: 'Concentrates & surface cleaners · ISO-certified',
    details: '45 products · Betco, SAC Chemicals, FRESH N FINE',
    image: '/images/image__cleaning_chemicals__b85bdd2d.png',
    category: 'Cleaning Chemicals',
    brands: ['Betco', 'SAC Chemicals', 'FRESH N FINE'],
    industries: ['Hotels', 'Restaurants', 'Catering', 'Facilities & Janitorial'],
    factors: ['ISO Certified', 'Eco-Friendly / Green', 'Bulk Wholesale']
  },
  {
    id: 'p5',
    title: 'Cleaning Equipment & Janitorial',
    subtitle: 'Mops, brooms, trolleys & commercial bins',
    details: '38 products · Rubbermaid, 3M, CONTA',
    image: '/images/image__cleaning_equipment___janitorial__b009223f.png',
    category: 'Cleaning Equipment & Janitorial',
    brands: ['Rubbermaid', '3M', 'CONTA'],
    industries: ['Hotels', 'Restaurants', 'Facilities & Janitorial'],
    factors: ['Bulk Wholesale', 'ISO Certified']
  },
  {
    id: 'p6',
    title: 'Paper Products & Dispensary',
    subtitle: 'Toilet rolls, napkins, towels & tissue',
    details: '26 products · Kimberly-Clark, TORK, FRESH N FINE',
    image: '/images/image__paper_products___dispensers__1a5dc51e.png',
    category: 'Paper Products & Dispensary',
    brands: ['Kimberly-Clark', 'TORK', 'FRESH N FINE'],
    industries: ['Hotels', 'Restaurants', 'Catering', 'Facilities & Janitorial'],
    factors: ['Eco-Friendly / Green', 'Bulk Wholesale']
  },
  {
    id: 'p7',
    title: 'Guest Amenities',
    subtitle: 'In-room comfort & luxury bathroom sets',
    details: '21 products · H&H, FRESH N FINE, Kimberly-Clark',
    image: '/images/image__guest_amenities_equipment__f4f6ec37.png',
    category: 'Guest Amenities',
    brands: ['H&H', 'FRESH N FINE', 'Kimberly-Clark'],
    industries: ['Hotels'],
    factors: ['Custom Branding', 'Bulk Wholesale']
  },
  {
    id: 'p8',
    title: 'Waste Management',
    subtitle: 'Plastic & stainless steel segregation bins',
    details: '15 products · Rubbermaid, CONTA, 3M',
    image: '/images/image_3_c35c9821.png',
    category: 'Waste Management',
    brands: ['Rubbermaid', 'CONTA', '3M'],
    industries: ['Hotels', 'Restaurants', 'Catering', 'Facilities & Janitorial'],
    factors: ['Bulk Wholesale', 'Eco-Friendly / Green']
  },
  {
    id: 'p9',
    title: 'Melamine & Buffet Dinnerware',
    subtitle: 'Chip-resistant serving plates & bowls',
    details: '28 products · Dinewell, Bharath Potteries',
    image: '/images/cardimage_b6bc00f1.png',
    category: 'Tableware & Crockery',
    brands: ['Dinewell', 'Bharath Potteries'],
    industries: ['Restaurants', 'Catering', 'Hotels'],
    factors: ['Bulk Wholesale', 'Custom Branding']
  },
  {
    id: 'p10',
    title: 'Commercial Cookware & Holloware',
    subtitle: 'Heavy-gauge stainless steel kitchen sets',
    details: '22 products · MILTON, H&H',
    image: '/images/cardimage_ac51211f.png',
    category: 'Stainless Steel Silverware',
    brands: ['MILTON', 'H&H'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Bulk Wholesale', 'ISO Certified']
  },
  {
    id: 'p11',
    title: 'Industrial Floor Care & Degreasers',
    subtitle: 'Heavy-duty kitchen & hygiene chemical solutions',
    details: '34 products · Betco, SAC Chemicals',
    image: '/images/cardimage_4fdce090.png',
    category: 'Cleaning Chemicals',
    brands: ['Betco', 'SAC Chemicals'],
    industries: ['Hotels', 'Facilities & Janitorial', 'Restaurants'],
    factors: ['ISO Certified', 'Eco-Friendly / Green']
  },
  {
    id: 'p12',
    title: 'Commercial Washroom Dispensers',
    subtitle: 'Touch-free sensor paper & soap units',
    details: '19 products · Kimberly-Clark, TORK',
    image: '/images/cardimage_1dbd1171.png',
    category: 'Paper Products & Dispensary',
    brands: ['Kimberly-Clark', 'TORK'],
    industries: ['Hotels', 'Facilities & Janitorial'],
    factors: ['Eco-Friendly / Green', 'Custom Branding']
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

export const CATEGORY_SPOTLIGHT_MAP: Record<string, CategorySpotlightInfo> = {
  'Tableware & Crockery': {
    eyebrow: 'BONE CHINA & MELAMINE DINING',
    title: 'Tableware & Crockery',
    image: '/images/image__tableware___crockery__c6601dfa.png',
    badges: ['Hotels', 'Restaurants', 'Catering'],
    items: [
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
    ],
    footnote: 'Available in bulk and minimum quantities. Customer-specific sizes and branding arranged on request — contact us for a quote.'
  },
  'Stainless Steel Silverware': {
    eyebrow: 'MIRROR & MATTE CUTLERY SUITES',
    title: 'Stainless Steel Silverware',
    image: '/images/image__stainless_steel_brassware__69672dfd.png',
    badges: ['Hotels', 'Restaurants', 'Catering'],
    items: [
      'Dinner Fork & Knife Set',
      'Dessert Spoon Heavy Gauge',
      'Soup Spoon Oval',
      'Steak Knife Serrated',
      'Butter Knife & Spreader',
      'Serving Tongs & Ladles',
      'Ice Bucket & Tongs SS',
      'Gravy Boat Stainless 12oz',
      'Finger Bowl Set',
      'Wine Cooler Stand'
    ],
    footnote: 'High-grade 18/10 and 18/0 stainless steel cutlery with laser etching or embossed crest for bespoke hotel identity.'
  },
  'Buffet & Beverage Equipment': {
    eyebrow: 'BANQUET PRESENTATION & WARMING',
    title: 'Buffet & Beverage Equipment',
    image: '/images/image__buffet___beverage_equipment__f2c7e5ac.png',
    badges: ['Hotels', 'Catering', 'Restaurants'],
    items: [
      'Roll-Top Chafing Dish 9L',
      'Hydraulic Induction Chafer',
      'Juice Dispenser Double 8L+8L',
      'Commercial Cereal Dispenser',
      'Electric Soup Kettle Warmer',
      'Coffee Urn / Boiler 15L',
      'GN Food Pans 1/1, 1/2, 1/3',
      'Multi-Tier Acrylic Riser Set',
      'Bread Display Basket Display',
      'Carving Station Heat Lamp'
    ],
    footnote: 'Heavy duty commercial buffet fixtures engineered for high turnover banquets and hotel breakfast service.'
  },
  'Cleaning Chemicals': {
    eyebrow: 'COMMERCIAL HYGIENE & DISINFECTION',
    title: 'Cleaning Chemicals',
    image: '/images/image__cleaning_chemicals__b85bdd2d.png',
    badges: ['Hotels', 'Restaurants', 'Facilities & Janitorial'],
    items: [
      'Floor Cleaner Concentrate (Neutral)',
      'Glass & Multi-Surface Cleaner',
      'Heavy Duty Kitchen Degreaser',
      'Automatic Dishwash Detergent',
      'Rinse Aid Machine Liquid',
      'Hand Soap Foam Anti-Bacterial',
      'Toilet Bowl Descaler 5L',
      'Air Freshener Aromatherapy 5L',
      'Kitchen Sanitizer QAC Based',
      'Stainless Steel Polish & Cleaner'
    ],
    footnote: 'ISO & Green-certified concentrated chemicals with automated dispenser dilution systems to reduce waste.'
  },
  'Cleaning Equipment & Janitorial': {
    eyebrow: 'FACILITY MAINTENANCE HARDWARE',
    title: 'Cleaning Equipment & Janitorial',
    image: '/images/image__cleaning_equipment___janitorial__b009223f.png',
    badges: ['Hotels', 'Restaurants', 'Facilities & Janitorial'],
    items: [
      'Double Bucket Wringer Trolley',
      'Kentucky Mop Cotton & Microfiber',
      'Housekeeping Service Trolley',
      'Wet Floor Caution Safety Sign',
      'Lobby Dustpan with Broom',
      'Window Squeegee Telescopic Pole',
      'Microfiber Color-Coded Towels',
      'Floor Squeegee Heavy Duty 60cm',
      'Scrubbing Brushes Deck & Wall',
      'Utility Carts 3-Shelf Polypropylene'
    ],
    footnote: 'Durable Rubbermaid and Filmop commercial equipment built to withstand rigorous daily hotel and kitchen operation.'
  },
  'Paper Products & Dispensary': {
    eyebrow: 'DISPOSABLE HYGIENE & DISPENSERS',
    title: 'Paper Products & Dispensary',
    image: '/images/image__paper_products___dispensers__1a5dc51e.png',
    badges: ['Hotels', 'Restaurants', 'Catering', 'Facilities & Janitorial'],
    items: [
      'M-Fold Interfold Hand Towels',
      'Jumbo Roll Tissue (JRT) 2-Ply',
      'Dinner Paper Napkins 40x40cm',
      'Cocktail Napkins 24x24cm',
      'Automatic Sensor Hand Towel Dispenser',
      'Center-Pull Kitchen Paper Rolls',
      'Facial Tissue Cube & Flat Box',
      'Foam Soap Wall Dispensers',
      'Toilet Seat Cover Papers',
      'Custom Printed Napkins & Coasters'
    ],
    footnote: 'Sustainably sourced virgin and recycled paper fibers from Kimberly-Clark, TORK and leading hygiene manufacturers.'
  },
  'Guest Amenities': {
    eyebrow: 'IN-ROOM HOSPITALITY COMFORTS',
    title: 'Guest Amenities',
    image: '/images/image__guest_amenities_equipment__f4f6ec37.png',
    badges: ['Hotels', 'Resorts'],
    items: [
      'Dental Kit with Biodegradable Brush',
      'Shaving Kit with Cream Tube',
      'Hotel Slippers Open / Closed Toe',
      'Shampoo & Body Wash Tubes 30ml',
      'Conditioner & Body Lotion 30ml',
      'Glycerin Hand Soap 25g/30g',
      'Sewing Kit & Vanity Pack',
      'Shoe Shine Sponge / Mitt',
      'Shower Cap Compostable Pouch',
      'Laundry Bags Cloth & Eco-PE'
    ],
    footnote: 'Eco-conscious packaging with botanical formulations and custom hotel logo hot-stamping or box printing.'
  },
  'Waste Management': {
    eyebrow: 'ENVIRONMENTAL & REFUSE CONTROL',
    title: 'Waste Management',
    image: '/images/image_3_c35c9821.png',
    badges: ['Hotels', 'Restaurants', 'Facilities & Janitorial'],
    items: [
      'Hands-Free Foot Pedal Bins 20L/45L',
      'Slim Space-Saver Recycling Bins',
      'Color-Coded Segregation Bins Set',
      'Outdoor Stainless Ash / Trash Bin',
      'Heavy Duty Wheeled Waste Bin 120L/240L',
      'Stainless Steel Open Top Room Bins',
      'Leatherette Guestroom Double Layer Bin',
      'Heavy Duty Garbage Bags 50 Micron',
      'Sanitary Bin Pedal Operated',
      'Recycling Station Bins with Lid Inserts'
    ],
    footnote: 'Compliant with commercial municipal sanitation standards. Heavy-gauge stainless steel and virgin polymers.'
  }
};

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

export interface ProductSpecRow {
  code: string;
  name: string;
  capacity: string;
  dimensions: string; // TD x BD x H in mm
  packing: string;    // Inner / Carton pcs
  weight: string;     // Gross wt per master carton
}

export interface KeySpecsInfo {
  material: string;
  dimensions: string;
  weight: string;
  finish: string;
  dishwasherSafe: string;
  usage: string;
  packing: string;
}

export interface FeatureBadgeItem {
  title: string;
  sub: string;
  icon: 'food' | 'wash' | 'finish';
}

export interface ProductDetailInfo {
  skuPrefix: string;
  tagline: string;
  material: string;
  finish: string;
  galleryImages: string[];
  badges: FeatureBadgeItem[];
  parGuideline: {
    fineDining: string;
    banquet: string;
    roomService: string;
    barLounge: string;
  };
  keySpecs: KeySpecsInfo;
  certifications?: string[];
  description?: string;
  packagingDetails?: {
    innerBox: string;
    masterCarton: string;
    partition: string;
    customBranding: string;
  };
  specs?: ProductSpecRow[];
}

export const PRODUCT_SPECS_MAP: Record<string, ProductDetailInfo> = {
  p1: {
    skuPrefix: 'CR-TC / Bone China & Glass',
    tagline: 'High-alumina porcelain, bone china and clear dining drinkware engineered for luxury hospitality.',
    material: 'Fine Bone China & Soda-Lime Commercial Glass',
    finish: 'Super-Vitrified Glaze / Rolled Rim Chip Resistance',
    galleryImages: [
      '/images/image__restaurant_setting__c005091f.png',
      '/images/image__tableware___crockery__c6601dfa.png',
      '/images/image__fine_dining__2ac60065.png'
    ],
    badges: [
      { title: '100% Food Grade', sub: 'Lead, Cadmium & Arsenic Safe', icon: 'food' },
      { title: 'Dishwasher Safe', sub: '1,000+ Cycles', icon: 'wash' },
      { title: 'Premium Finish', sub: 'Super-Vitrified Glaze', icon: 'finish' }
    ],
    parGuideline: {
      fineDining: '2.5x',
      banquet: '3.0x',
      roomService: '2.0x',
      barLounge: '3.0x'
    },
    keySpecs: {
      material: 'Fine Bone China / Commercial Glass',
      dimensions: 'Plates: 190–255 mm · Drinkware: 82 × 91 mm · Bowls: 180 × 45 mm',
      weight: '0.35 kg – 1.10 kg / unit (Master Carton: 14.8 – 18.5 kg)',
      finish: 'Super-Vitrified Glaze / Rolled Rim (Chip Resistant)',
      dishwasherSafe: 'Yes (1,000+ Cycles)',
      usage: 'Hotels, Restaurants, Catering, Banquets',
      packing: '6 / 12 / 24 pcs per carton (varies by item)'
    }
  },
  p2: {
    skuPrefix: 'SS-SLV / 18-10 Gauge Cutlery',
    tagline: 'Precision-forged 18/10 stainless steel cutlery featuring mirror and satin dual-finishes.',
    material: 'AISI 304 (18/10) Food-Grade Stainless Steel',
    finish: 'Hand-Polished Mirror Rim & Satin Brushed Stem',
    galleryImages: [
      '/images/image__stainless_steel_brassware__69672dfd.png',
      '/images/cardimage_ac51211f.png',
      '/images/cardimage_1dbd1171.png'
    ],
    badges: [
      { title: '18/10 Stainless Steel', sub: 'Acid & Rust Resistant', icon: 'food' },
      { title: 'Dishwasher Safe', sub: '1,000+ Commercial Cycles', icon: 'wash' },
      { title: 'Mirror Hand-Polish', sub: 'Forged Monobloc Blades', icon: 'finish' }
    ],
    parGuideline: {
      fineDining: '3.0x',
      banquet: '3.5x',
      roomService: '2.0x',
      barLounge: '2.0x'
    },
    keySpecs: {
      material: 'AISI 304 (18/10) Food-Grade Stainless Steel',
      dimensions: 'Dinner Knife: 228 mm · Fork: 205 mm · Soup Spoon: 185 mm',
      weight: '65g – 95g / pc (Master Carton: 9.8 – 11.2 kg)',
      finish: 'Hand-Polished Mirror Rim & Satin Brushed Stem',
      dishwasherSafe: 'Yes (1,000+ Cycles)',
      usage: 'Fine Dining, Banquets, Room Service, Lounges',
      packing: '12 pcs/box · 120 pcs per master shipping carton'
    }
  },
  p3: {
    skuPrefix: 'BF-EQ / Commercial Banquet',
    tagline: 'Hydraulic induction chafers, juice stations, and commercial warming equipment.',
    material: 'Heavy-Gauge SS304 Stainless Steel & Shatterproof Polycarbonate',
    finish: 'Mirror Polished SS with Tempered Glass Viewing Window',
    galleryImages: [
      '/images/image__buffet___beverage_equipment__f2c7e5ac.png',
      '/images/cardimage_ac51211f.png',
      '/images/cardimage_b6bc00f1.png'
    ],
    badges: [
      { title: 'Food Grade SS304', sub: 'NSF & CE Commercial Certified', icon: 'food' },
      { title: 'Dishwasher Safe Pans', sub: 'Commercial Pan Wash', icon: 'wash' },
      { title: 'Mirror Chrome Finish', sub: 'Hydraulic Soft-Close (50k cycles)', icon: 'finish' }
    ],
    parGuideline: {
      fineDining: '1.0x',
      banquet: '2.0x',
      roomService: '1.0x',
      barLounge: '1.5x'
    },
    keySpecs: {
      material: 'SS304 Food Grade Stainless Steel & Shatterproof Polycarbonate',
      dimensions: 'Chafer: 660 × 480 × 420 mm (GN 1/1) · Dispenser: 560 × 350 × 580 mm',
      weight: '7.8 kg – 10.5 kg / unit (Master Carton: 11.8 kg)',
      finish: 'Mirror Polished SS with Tempered Glass Lid',
      dishwasherSafe: 'Removable Food Pans & Water Trays (Yes)',
      usage: 'Hotel Buffets, Banquet Halls, Event Catering',
      packing: '1 unit / heavy-duty reinforced export carton'
    }
  },
  p4: {
    skuPrefix: 'CH-CHEM / Concentrated Formulations',
    tagline: 'High-dilution concentrated sanitizers, kitchen degreasers, and automated dosage liquids.',
    material: 'ISO 9001 & ISO 14001 Compliant Formulations',
    finish: 'Concentrate Liquid with Color-Coded Dispenser Dosing',
    galleryImages: [
      '/images/image__cleaning_chemicals__b85bdd2d.png',
      '/images/cardimage_4fdce090.png',
      '/images/centerimage_f8709305.png'
    ],
    badges: [
      { title: '100% Food Safe QAC', sub: 'Surface & Dishwash Contact', icon: 'food' },
      { title: 'Eco-Degradable', sub: 'Biodegradable Surfactants', icon: 'wash' },
      { title: 'Ultra-Concentrate', sub: 'Dilution 1:20 to 1:200', icon: 'finish' }
    ],
    parGuideline: {
      fineDining: '1.0x',
      banquet: '2.0x',
      roomService: '1.0x',
      barLounge: '1.0x'
    },
    keySpecs: {
      material: 'Eco-Friendly Biodegradable Surfactants & QAC Sanitizer',
      dimensions: '5.0 L Canister (290 × 185 × 135 mm) · 20 L Drum (380 × 300 mm)',
      weight: '5.2 kg / can · 21.5 kg / master carton (4 × 5L)',
      finish: 'Color-Coded Spill-Proof HDPE Safety Canisters',
      dishwasherSafe: 'Machine Automated Dispenser Safe',
      usage: 'Commercial Kitchens, Guestrooms, Public Areas',
      packing: '4 × 5L cans per master carton with safety cell dividers'
    }
  },
  p5: {
    skuPrefix: 'EQ-JAN / Janitorial Hardware',
    tagline: 'Ergonomic wringer mops, heavy service trolleys, and facility janitorial hardware.',
    material: 'Virgin Polypropylene, Tubular Stainless Steel, Microfiber',
    finish: 'Impact-Resistant Color-Coded Moulded Finish',
    galleryImages: [
      '/images/image__cleaning_equipment___janitorial__b009223f.png',
      '/images/cardimage_4fdce090.png',
      '/images/image_3_c35c9821.png'
    ],
    badges: [
      { title: 'HACCP Compliant', sub: 'Color-Coded Hygiene Zones', icon: 'food' },
      { title: 'Sanitizable Hardware', sub: 'High-Temp Wash Mops', icon: 'wash' },
      { title: 'Reinforced Resin', sub: 'Silent Rubber Casters', icon: 'finish' }
    ],
    parGuideline: {
      fineDining: '1.0x',
      banquet: '2.0x',
      roomService: '1.5x',
      barLounge: '1.0x'
    },
    keySpecs: {
      material: 'Virgin Polypropylene & Tubular Stainless Steel Chassis',
      dimensions: 'Trolley: 850 × 440 × 920 mm · Mop Pole: 1400 mm length',
      weight: '6.2 kg – 8.6 kg / trolley assembly',
      finish: 'Impact-Resistant Textured Polypropylene & Epoxy Coat',
      dishwasherSafe: 'Sanitizer / Steam Cleanable',
      usage: 'Hotels, Hospitals, Airports, Banquets, Kitchens',
      packing: '1 unit / carton (knockdown assembly with instructions)'
    }
  },
  p6: {
    skuPrefix: 'PP-DISP / Hygiene Refills',
    tagline: 'High-absorbency paper towels, jumbo rolls, napkins, and touchless wall dispensers.',
    material: '100% Pure Virgin Pulp & FSC-Certified Fibers',
    finish: '2-Ply Embossed Quilted Weave',
    galleryImages: [
      '/images/image__paper_products___dispensers__1a5dc51e.png',
      '/images/cardimage_1dbd1171.png',
      '/images/heroimage_3f45b21f.png'
    ],
    badges: [
      { title: '100% Virgin Pulp', sub: 'FSC Forestry Certified', icon: 'food' },
      { title: 'High Absorbency', sub: 'Instant Moisture Lock', icon: 'wash' },
      { title: 'Quilted 2-Ply', sub: 'Embossed Soft Weave', icon: 'finish' }
    ],
    parGuideline: {
      fineDining: '2.0x',
      banquet: '2.5x',
      roomService: '1.5x',
      barLounge: '2.0x'
    },
    keySpecs: {
      material: '100% Virgin Pulp (FSC Certified Sustainable)',
      dimensions: 'M-Fold: 230 × 210 mm · JRT: 300m Roll (Dia: 220 mm)',
      weight: '5.8 kg / carton (M-Fold) · 7.4 kg / carton (JRT)',
      finish: 'Embossed Quilted 2-Ply Soft Weave',
      dishwasherSafe: 'Rapid-Dissolve Flush Safe (Anti-Clog)',
      usage: 'Guest Restrooms, Kitchen Stations, Dining Tables',
      packing: '20 packs/carton (3000 sheets) or 12 rolls/carton'
    }
  },
  p7: {
    skuPrefix: 'GA-AMEN / In-Room Luxury',
    tagline: 'Bespoke guestroom dental kits, vanity amenities, and luxury botanical toiletries.',
    material: 'Biodegradable Wheat Straw, Kraft Board, Botanical Extracts',
    finish: 'Matte Kraft Foil-Lined Pouch & Hot-Stamped Gold Foil',
    galleryImages: [
      '/images/image__guest_amenities_equipment__f4f6ec37.png',
      '/images/image_2_f90fe997.png',
      '/images/heroimage_3f45b21f.png'
    ],
    badges: [
      { title: 'Eco-Degradable Straw', sub: 'Zero Single-Use Plastic', icon: 'food' },
      { title: 'Dermatology Tested', sub: 'Paraben & Cruelty Free', icon: 'wash' },
      { title: 'Luxury Foil Packaging', sub: 'Custom Brand Stamping', icon: 'finish' }
    ],
    parGuideline: {
      fineDining: '1.0x',
      banquet: '1.5x',
      roomService: '2.5x',
      barLounge: '1.0x'
    },
    keySpecs: {
      material: 'Wheat Straw Bioplastic & Recycled Natural Kraft Board',
      dimensions: 'Dental Box: 190 × 30 × 18 mm · Soap: 48 mm Dia',
      weight: '8.5 kg / master carton (500 sets)',
      finish: 'Matte Natural Kraft with Water-Resistant Inner Lining',
      dishwasherSafe: 'Individually Sealed Sanitary Packaging',
      usage: 'Hotel Guest Rooms, Resorts, Luxury Suites',
      packing: '50 pcs/inner box · 500 pcs/master shipping carton'
    }
  },
  p8: {
    skuPrefix: 'WM-REF / Segregation Bins',
    tagline: 'Heavy-duty pedal bins, municipal recycling stations, and durable garbage containers.',
    material: 'Commercial Stainless Steel & High-Density Virgin Polyethylene (HDPE)',
    finish: 'Fingerprint-Resistant Brushed SS & Color-Coded Lids',
    galleryImages: [
      '/images/image_3_c35c9821.png',
      '/images/image__cleaning_equipment___janitorial__b009223f.png',
      '/images/cardimage_4fdce090.png'
    ],
    badges: [
      { title: 'Sanitary Hands-Free', sub: 'Heavy Duty Foot Pedal', icon: 'food' },
      { title: 'Washable Liner Buckets', sub: 'Easy Disinfecting', icon: 'wash' },
      { title: 'Brushed SS Anti-Fingerprint', sub: 'Odor-Control Sealed Lid', icon: 'finish' }
    ],
    parGuideline: {
      fineDining: '2.0x',
      banquet: '4.0x',
      roomService: '1.0x',
      barLounge: '2.0x'
    },
    keySpecs: {
      material: 'AISI 430 Brushed Stainless Steel & Heavy HDPE',
      dimensions: '20L: 340 × 280 × 450 mm · 60L Slim: 500 × 280 × 750 mm',
      weight: '3.2 kg (20L) · 5.4 kg (60L) · Master: 11.5 kg',
      finish: 'Satin Brushed Fingerprint-Resistant Coating',
      dishwasherSafe: 'Removable Inner Liner Washable',
      usage: 'Commercial Kitchens, Lobbies, Guestrooms, Banquet Halls',
      packing: '4 pcs per corrugated export shipping carton'
    }
  },
  p9: {
    skuPrefix: 'ML-DIN / 100% Food-Grade Melamine',
    tagline: 'Chip-resistant melamine buffet plates, bowls, and serving platters.',
    material: '100% Certified Food-Grade Melamine',
    finish: 'Matte & Gloss Vitrified Porcelain Appearance',
    galleryImages: [
      '/images/cardimage_b6bc00f1.png',
      '/images/image__tableware___crockery__c6601dfa.png',
      '/images/image__fine_dining__2ac60065.png'
    ],
    badges: [
      { title: '100% Food Grade', sub: 'BPA & Lead Free Certified', icon: 'food' },
      { title: 'Dishwasher Safe', sub: 'Commercial Racks Safe', icon: 'wash' },
      { title: 'Chip & Break Resistant', sub: 'Heavy Duty Buffet Grade', icon: 'finish' }
    ],
    parGuideline: {
      fineDining: '2.0x',
      banquet: '3.5x',
      roomService: '2.0x',
      barLounge: '3.0x'
    },
    keySpecs: {
      material: '100% High-Density Food Grade Melamine Resin',
      dimensions: 'Platter: 350 × 240 × 22 mm · Bowl: 175 × 65 mm (550 ml)',
      weight: '0.42 kg / platter (Master Carton: 12.5 kg)',
      finish: 'Scratch-Resistant Vitrified Glaze Appearance',
      dishwasherSafe: 'Yes (Heat safe up to 120°C, Commercial Cycles)',
      usage: 'Outdoor Buffets, Poolside Bars, Catering Events',
      packing: '6 pcs/inner box · 24 pcs per master carton'
    }
  },
  p10: {
    skuPrefix: 'CK-COOK / Heavy Commercial Cookware',
    tagline: 'Heavy-gauge stainless steel stock pots, sauté pans, and forged kitchen cutlery.',
    material: 'Tri-Ply Base SS304 Stainless Steel & Forged High-Carbon Steel',
    finish: 'Commercial Satin Exterior with Brushed Interior',
    galleryImages: [
      '/images/cardimage_ac51211f.png',
      '/images/image__stainless_steel_brassware__69672dfd.png',
      '/images/image__buffet___beverage_equipment__f2c7e5ac.png'
    ],
    badges: [
      { title: 'Food Grade SS304', sub: 'NSF Certified Heavy Base', icon: 'food' },
      { title: 'Dishwasher Safe', sub: 'Commercial Sanitizing', icon: 'wash' },
      { title: 'Tri-Ply Encapsulated', sub: 'Induction & Gas Ready', icon: 'finish' }
    ],
    parGuideline: {
      fineDining: '3.0x',
      banquet: '6.0x',
      roomService: '2.0x',
      barLounge: '2.0x'
    },
    keySpecs: {
      material: 'Tri-Ply 18/10 Stainless Steel & High-Carbon German Steel',
      dimensions: 'Stock Pot: 320 × 260 mm (20L) · Sauté Pan: 280 × 75 mm (4.5L)',
      weight: '4.6 kg – 5.8 kg / cookware piece',
      finish: 'Brushed Interior with Mirror Exterior Accents',
      dishwasherSafe: 'Yes (Commercial Dishwasher Safe)',
      usage: 'Hotel Main Kitchens, Banquet Pantries, Live Cooking',
      packing: '1 – 2 pcs per reinforced box with corner protection'
    }
  },
  p11: {
    skuPrefix: 'FC-FLOOR / Industrial Polymers',
    tagline: 'Heavy-duty polymer floor wax, strippers, and kitchen degreasing concentrates.',
    material: 'High-Solid Acrylic Polymers & Alkaline Degreasers',
    finish: 'Ultra High-Gloss Wet Look Finish (Non-Yellowing)',
    galleryImages: [
      '/images/cardimage_4fdce090.png',
      '/images/image__cleaning_chemicals__b85bdd2d.png',
      '/images/image__cleaning_equipment___janitorial__b009223f.png'
    ],
    badges: [
      { title: 'UL Slip Certified', sub: 'ASTM D-2047 Safe Traction', icon: 'food' },
      { title: 'Water & Scuff Resistant', sub: 'Detergent Scrub Safe', icon: 'wash' },
      { title: 'Ultra High Gloss', sub: 'Wet Look Mirror Finish', icon: 'finish' }
    ],
    parGuideline: {
      fineDining: '1.0x',
      banquet: '2.0x',
      roomService: '1.0x',
      barLounge: '1.5x'
    },
    keySpecs: {
      material: 'High-Solid Thermoplastic Acrylic Polymers',
      dimensions: '5.0 L Canister (Coverage: 200 sq.m per 5L)',
      weight: '5.3 kg / can · 21.2 kg / master carton (4 × 5L)',
      finish: 'Self-Polishing Non-Yellowing Clear Wet Look',
      dishwasherSafe: 'Resistant to Neutral Commercial Floor Cleaners',
      usage: 'Hotel Marble Lobbies, Banquet Halls, Terrazzo, Vinyl',
      packing: '4 × 5L cans per heavy carton with dividers'
    }
  },
  p12: {
    skuPrefix: 'WD-WASH / Touchless Restroom',
    tagline: 'Commercial automatic sensor foam dispensers and roll towel hardware.',
    material: 'Impact-Resistant ABS Polymer & SS Accent Trim',
    finish: 'Matte White & Satin Chrome Front Panel',
    galleryImages: [
      '/images/image__paper_products___dispensers__1a5dc51e.png',
      '/images/image__guest_amenities_equipment__f4f6ec37.png',
      '/images/cardimage_1dbd1171.png'
    ],
    badges: [
      { title: 'Infrared Sensor', sub: 'Touchless Sanitary Dispense', icon: 'food' },
      { title: 'Easy Wipe Clean', sub: 'Waterproof Battery Box', icon: 'wash' },
      { title: 'Keyed Security Lock', sub: 'Prevents Pilferage', icon: 'finish' }
    ],
    parGuideline: {
      fineDining: '2.0x',
      banquet: '6.0x',
      roomService: '1.0x',
      barLounge: '2.0x'
    },
    keySpecs: {
      material: 'High-Impact ABS Engineered Polymer & Stainless Trim',
      dimensions: 'Dispenser: 125 × 110 × 260 mm (1000 ml refillable)',
      weight: '0.85 kg / unit (Master Carton: 10.5 kg)',
      finish: 'Matte White with Satin Chrome Accent Window',
      dishwasherSafe: 'Splashproof IPX4 Rated Housing',
      usage: 'Commercial Restrooms, Kitchen Entry, Hotel Lobbies',
      packing: '12 pcs per master carton with mounting hardware & keys'
    }
  }
};

