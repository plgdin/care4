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
  'Arcoroc',
  'Ariane',
  'Bharat - Crockery',
  'Borosil',
  'Cello',
  'Clay Craft',
  'Dinewell',
  'JCPL',
  'Ocean',
  'Servewell',
  'Superware',
  'Union',
  'V 4',
  'Shapes',
  'Supreme',
  'Venus',
  'FNS',
  'Cintra Cottons',
  'Victol Gold',
  'Anchor Utensils',
  'Bakers',
  'Cambro Nilkamal',
  'Godrej - Cartini',
  'Hem',
  'Indigo',
  'Kenford',
  'KMW',
  'Milton',
  'Mosaic',
  'Polygaurd',
  'Pradeep',
  'Prestige',
  'Rena',
  'Rudra',
  'Sujatha',
  'Zanuff Corvus',
  'Conta',
  'Dabur',
  'Family Plastic',
  'Fresh N Fine',
  'Gala',
  'Hit',
  'Kimberly',
  'Premier',
  'Roots',
  'Diversey',
  'SAC',
  'Kitchen Equipments',
  'Serman'
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
  // --- 1. CROCKERY ---
  {
    id: 'crockery-dinewell',
    title: 'Dinewell Melamine Dinnerware',
    subtitle: 'Chip-resistant buffet plates, bowls & platters',
    details: '100% Melamine · Dinewell',
    image: '/images/cardimage_b6bc00f1.png',
    category: 'Crockery',
    brands: ['Dinewell'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Bulk Wholesale', 'Custom Branding', 'ISO Certified']
  },
  {
    id: 'crockery-borosil',
    title: 'Borosil Glassware & Opalware',
    subtitle: 'Toughened glass dining & beverage collections',
    details: 'Opalware & Glass · Borosil',
    image: '/images/image__tableware___crockery__a8a959b7.png',
    category: 'Crockery',
    brands: ['Borosil'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Bulk Wholesale', 'Heat Resistant']
  },
  {
    id: 'crockery-ariane-arcoroc',
    title: 'Ariane & Arcoroc Fine Porcelain',
    subtitle: 'European vitrified tableware & banquet plates',
    details: 'Fine Porcelain & Opal · Ariane, Arcoroc',
    image: '/images/image__tableware___crockery__c6601dfa.png',
    category: 'Crockery',
    brands: ['Ariane', 'Arcoroc'],
    industries: ['Hotels', 'Restaurants'],
    factors: ['Super Vitrified', 'Dishwasher Safe']
  },
  {
    id: 'crockery-bharat-claycraft',
    title: 'Bharat Crockery & Clay Craft',
    subtitle: 'High-alumina ceramic & bone china dinner suites',
    details: 'Ceramic & Bone China · Bharat - Crockery, Clay Craft',
    image: '/images/cardimage_b6bc00f1.png',
    category: 'Crockery',
    brands: ['Bharat - Crockery', 'Clay Craft'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Lead & Cadmium Safe', 'Custom Branding']
  },
  {
    id: 'crockery-ocean-union',
    title: 'Ocean & Union Commercial Glassware',
    subtitle: 'Clear soda-lime tumblers, goblets & beer glasses',
    details: 'Commercial Glassware · Ocean, Union',
    image: '/images/image__hospitality_tableware__eab14684.png',
    category: 'Crockery',
    brands: ['Ocean', 'Union'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Crystal Clarity', 'Bulk Wholesale']
  },
  {
    id: 'crockery-servewell-superware',
    title: 'Servewell & Superware Melamine Dining',
    subtitle: 'Food-grade melamine serving trays, bowls & plates',
    details: 'Melamine Dining · Servewell, Superware',
    image: '/images/image__fine_dining__2ac60065.png',
    category: 'Crockery',
    brands: ['Servewell', 'Superware'],
    industries: ['Restaurants', 'Catering', 'Hotels'],
    factors: ['Break Resistant', 'BPA Free']
  },
  {
    id: 'crockery-cello-jcpl-v4',
    title: 'Cello, JCPL & V 4 Tableware',
    subtitle: 'Modern tabletop essentials & banquet collections',
    details: 'Tabletop Sets · Cello, JCPL, V 4',
    image: '/images/image__restaurant_setting__c005091f.png',
    category: 'Crockery',
    brands: ['Cello', 'JCPL', 'V 4'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Bulk Wholesale', 'ISO Certified']
  },

  // --- 2. CUTLERY ---
  {
    id: 'cutlery-fns',
    title: 'FNS Luxury Cutlery Collection',
    subtitle: 'Handcrafted premium 18/10 stainless steel suites',
    details: '18/10 Stainless Steel · FNS',
    image: '/images/image__stainless_steel_brassware__69672dfd.png',
    category: 'Cutlery',
    brands: ['FNS'],
    industries: ['Hotels', 'Restaurants'],
    factors: ['Mirror Polish', 'Heavy Gauge', 'Rust Proof']
  },
  {
    id: 'cutlery-shapes',
    title: 'Shapes Commercial Flatware',
    subtitle: 'Contemporary dining spoons, forks, knives & steak suites',
    details: 'Heavy Gauge Flatware · Shapes',
    image: '/images/image__stainless_steel_brassware__69672dfd.png',
    category: 'Cutlery',
    brands: ['Shapes'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Dishwasher Safe', 'Bulk Wholesale']
  },
  {
    id: 'cutlery-venus',
    title: 'Venus Hospitality Cutlery',
    subtitle: 'Heavy-gauge mirror & satin banquet silverware',
    details: 'High-Grade Cutlery · Venus',
    image: '/images/cardimage_ac51211f.png',
    category: 'Cutlery',
    brands: ['Venus'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Custom Crest Embossing', 'ISO Certified']
  },
  {
    id: 'cutlery-supreme',
    title: 'Supreme Foodservice Cutlery',
    subtitle: 'High-turnover durable cutlery for banquets & cafes',
    details: 'Foodservice Grade · Supreme',
    image: '/images/image__fine_dining__2ac60065.png',
    category: 'Cutlery',
    brands: ['Supreme'],
    industries: ['Restaurants', 'Catering', 'Hotels'],
    factors: ['Economic Bulk', 'Corrosion Resistant']
  },

  // --- 3. LINEN ---
  {
    id: 'linen-towels-bathmats',
    title: 'Bath Towels, Hand Towels & Bath Mats',
    subtitle: '100% Combed terry cotton luxury plush towels',
    details: '550-650 GSM Cotton · Cintra Cottons',
    image: '/images/image__hotels__8af4967c.png',
    category: 'Linen',
    brands: ['Cintra Cottons'],
    industries: ['Hotels', 'Resorts'],
    factors: ['100% Combed Cotton', 'High Absorbency', 'Bulk Wholesale']
  },
  {
    id: 'linen-pool-face-towels',
    title: 'Pool Towels & Face Towels',
    subtitle: 'Vat-dyed chlorine-resistant poolside & face linens',
    details: 'Vat-Dyed Cotton · Cintra Cottons',
    image: '/images/heroimage_3f45b21f.png',
    category: 'Linen',
    brands: ['Cintra Cottons'],
    industries: ['Hotels', 'Resorts'],
    factors: ['Chlorine Resistant', 'Quick Dry']
  },
  {
    id: 'linen-bedsheets-duvets',
    title: 'Bed Sheets, Bed Covers & Duvets',
    subtitle: '300-400 TC pure cotton & sateen stripe bed linen',
    details: '300-400 TC Sateen · Cintra Cottons',
    image: '/images/centerimage_f8709305.png',
    category: 'Linen',
    brands: ['Cintra Cottons'],
    industries: ['Hotels'],
    factors: ['Hypoallergenic', 'Commercial Wash Proof']
  },
  {
    id: 'linen-pillows-protectors',
    title: 'Pillows, Pillow Covers & Mattress Protectors',
    subtitle: 'Microfiber down-feel pillows & waterproof protectors',
    details: 'Microfiber & Quilted · Cintra Cottons',
    image: '/images/image__hotels__8af4967c.png',
    category: 'Linen',
    brands: ['Cintra Cottons'],
    industries: ['Hotels'],
    factors: ['Waterproof Barrier', 'Anti-Bacterial']
  },
  {
    id: 'linen-curtains-carpets-rugs',
    title: 'Curtains, Carpets, Rugs & Cushions',
    subtitle: 'Flame-retardant blackout drapery, throws & floor coverings',
    details: 'Flame-Retardant Fabric · Cintra Cottons',
    image: '/images/centerimage_f8709305.png',
    category: 'Linen',
    brands: ['Cintra Cottons'],
    industries: ['Hotels', 'Restaurants'],
    factors: ['Blackout FR', 'Custom Dimensions']
  },

  // --- 4. GUEST AMENITIES ---
  {
    id: 'amenities-liquids-soaps',
    title: 'Liquid Amenities & Soaps',
    subtitle: 'Bath gel, shampoo, body lotion, moisturizer & soaps',
    details: 'Botanical Formulations · Victol Gold',
    image: '/images/image__guest_amenities_equipment__f4f6ec37.png',
    category: 'Guest Amenities',
    brands: ['Victol Gold'],
    industries: ['Hotels'],
    factors: ['Paraben Free', 'Custom Hotel Branding']
  },
  {
    id: 'amenities-room-kits',
    title: 'Customised Guest & Room Kits',
    subtitle: 'Dental kit, shaving kit, sewing kit & medical kits',
    details: 'Eco-Packaging · Victol Gold',
    image: '/images/cardimage_1dbd1171.png',
    category: 'Guest Amenities',
    brands: ['Victol Gold'],
    industries: ['Hotels'],
    factors: ['Biodegradable', 'Custom Hotel Logo']
  },
  {
    id: 'amenities-room-accessories',
    title: 'Room Amenities & Bath Slippers',
    subtitle: 'Bath slippers, hangers, laundry paper bags, shoe mitts',
    details: 'In-Room Essentials · Victol Gold',
    image: '/images/image__guest_amenities_equipment__f4f6ec37.png',
    category: 'Guest Amenities',
    brands: ['Victol Gold'],
    industries: ['Hotels'],
    factors: ['Eco-Friendly', 'Bulk Wholesale']
  },
  {
    id: 'amenities-bath-tissue',
    title: 'Bath Amenities, Toilet Rolls & WC Bands',
    subtitle: 'Virgin pulp toilet rolls, sanitized WC bands & glass covers',
    details: 'Sanitary Paper Goods · Victol Gold',
    image: '/images/image__paper_products___dispensers__1a5dc51e.png',
    category: 'Guest Amenities',
    brands: ['Victol Gold'],
    industries: ['Hotels'],
    factors: ['100% Virgin Pulp', 'Hygienic Wrapping']
  },
  {
    id: 'amenities-housekeeping-stationery',
    title: 'Folders, Cards & Disposables',
    subtitle: 'Bill folders, menu folders, DND cards, luggage tags, stirrers & straws',
    details: 'Front Office & Dining · Victol Gold',
    image: '/images/cardimage_4fdce090.png',
    category: 'Guest Amenities',
    brands: ['Victol Gold'],
    industries: ['Hotels', 'Restaurants'],
    factors: ['Custom Embossing', 'Food Grade Disposables']
  },

  // --- 5. KITCHEN UTENSILS ---
  {
    id: 'utensils-prestige-milton',
    title: 'Prestige & Milton Commercial Cookware',
    subtitle: 'Heavy-gauge stock pots, frying pans & pressure cookers',
    details: 'Commercial Cookware · Prestige, Milton',
    image: '/images/cardimage_ac51211f.png',
    category: 'Kitchen Utensils',
    brands: ['Prestige', 'Milton'],
    industries: ['Restaurants', 'Hotels', 'Catering'],
    factors: ['Heavy Gauge SS', 'Induction & Gas Compatible']
  },
  {
    id: 'utensils-godrej-cartini-bakers',
    title: 'Godrej - Cartini & Bakers Professional Knives',
    subtitle: 'Chef knives, carving tools, cleavers & prep accessories',
    details: 'Culinary Cutlery · Godrej - Cartini, Bakers',
    image: '/images/image__stainless_steel_brassware__69672dfd.png',
    category: 'Kitchen Utensils',
    brands: ['Godrej - Cartini', 'Bakers'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['High-Carbon Steel', 'Ergonomic Grip']
  },
  {
    id: 'utensils-cambro-polyguard',
    title: 'Cambro Nilkamal & Polygaurd Food Storage',
    subtitle: 'GN food pans, airtight ingredient bins & measuring jugs',
    details: 'NSF Certified · Cambro Nilkamal, Polygaurd',
    image: '/images/image__buffet___beverage_equipment__f2c7e5ac.png',
    category: 'Kitchen Utensils',
    brands: ['Cambro Nilkamal', 'Polygaurd'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['NSF Certified', 'Stackable']
  },
  {
    id: 'utensils-pradeep-anchor',
    title: 'Pradeep & Anchor Utensils',
    subtitle: 'Stainless steel catering degchis, topes, handis & colanders',
    details: 'Catering Vessels · Pradeep, Anchor Utensils',
    image: '/images/cardimage_ac51211f.png',
    category: 'Kitchen Utensils',
    brands: ['Pradeep', 'Anchor Utensils'],
    industries: ['Catering', 'Restaurants', 'Hotels'],
    factors: ['Commercial Tri-Ply', 'High Volume']
  },
  {
    id: 'utensils-hem-indigo-kenford',
    title: 'Hem, Indigo & Kenford Kitchenware',
    subtitle: 'Commercial ladles, skimmers, whisks & buffet serving tongs',
    details: 'Kitchen Prep Tools · Hem, Indigo, Kenford',
    image: '/images/image__fine_dining__2ac60065.png',
    category: 'Kitchen Utensils',
    brands: ['Hem', 'Indigo', 'Kenford'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Seamless Stainless', 'Dishwasher Safe']
  },
  {
    id: 'utensils-mosaic-rena-rudra-venus',
    title: 'Mosaic, Rena, Rudra & Venus Kitchen Vessels',
    subtitle: 'Gastronorm containers, serving dishes & kitchen holloware',
    details: 'Commercial Vessels · Mosaic, Rena, Rudra, Venus',
    image: '/images/image__restaurant_setting__c005091f.png',
    category: 'Kitchen Utensils',
    brands: ['Mosaic', 'Rena', 'Rudra', 'Venus'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Commercial Gauge', 'ISO Certified']
  },
  {
    id: 'utensils-kmw-sujatha-zanuff',
    title: 'KMW, Sujatha & Zanuff Corvus Equipment',
    subtitle: 'Heavy commercial kitchen prep appliances & utility accessories',
    details: 'Prep & Utility · KMW, Sujatha, Zanuff Corvus',
    image: '/images/image__buffet___beverage_equipment__f2c7e5ac.png',
    category: 'Kitchen Utensils',
    brands: ['KMW', 'Sujatha', 'Zanuff Corvus'],
    industries: ['Restaurants', 'Catering', 'Hotels'],
    factors: ['Heavy Duty Motor', 'Commercial Grade']
  },

  // --- 6. HOUSE KEEPING ---
  {
    id: 'housekeeping-gala-roots',
    title: 'Gala & Roots Commercial Cleaning Tools',
    subtitle: 'Heavy-duty microfiber mops, floor squeegees & lobby dustpans',
    details: 'Janitorial Tools · Gala, Roots',
    image: '/images/image__cleaning_equipment___janitorial__b009223f.png',
    category: 'House Keeping',
    brands: ['Gala', 'Roots'],
    industries: ['Hotels', 'Facilities & Janitorial', 'Restaurants'],
    factors: ['Heavy Duty Durability', 'Ergonomic Handles']
  },
  {
    id: 'housekeeping-cambro-conta',
    title: 'Cambro Nilkamal & Conta Utility Trolleys & Bins',
    subtitle: 'Room service carts, linen hampers & waste segregation bins',
    details: 'Trolleys & Bins · Cambro Nilkamal, Conta',
    image: '/images/image_3_c35c9821.png',
    category: 'House Keeping',
    brands: ['Cambro Nilkamal', 'Conta'],
    industries: ['Hotels', 'Facilities & Janitorial', 'Restaurants'],
    factors: ['Non-Marking Wheels', 'High Load Capacity']
  },
  {
    id: 'housekeeping-kimberly-premier',
    title: 'Kimberly & Premier Paper & Dispensers',
    subtitle: 'Commercial hand roll towels, jumbo rolls & facial tissues',
    details: 'Washroom Solutions · Kimberly, Premier',
    image: '/images/image__paper_products___dispensers__1a5dc51e.png',
    category: 'House Keeping',
    brands: ['Kimberly', 'Premier'],
    industries: ['Hotels', 'Facilities & Janitorial', 'Restaurants'],
    factors: ['High Absorbency', 'Touchless Dispensing']
  },
  {
    id: 'housekeeping-freshnfine-familyplastic',
    title: 'Fresh N Fine & Family Plastic Supplies',
    subtitle: 'Guestroom liners, dustbins, laundry baskets & plastics',
    details: 'Room Plastics · Fresh N Fine, Family Plastic',
    image: '/images/cardimage_4fdce090.png',
    category: 'House Keeping',
    brands: ['Fresh N Fine', 'Family Plastic'],
    industries: ['Hotels', 'Facilities & Janitorial'],
    factors: ['Recyclable Polymers', 'Commercial Grade']
  },
  {
    id: 'housekeeping-dabur-hit',
    title: 'Dabur & Hit Room Care & Pest Solutions',
    subtitle: 'Commercial odor neutralizers, fresheners & insect control',
    details: 'Facility Hygiene · Dabur, Hit',
    image: '/images/cardimage_1dbd1171.png',
    category: 'House Keeping',
    brands: ['Dabur', 'Hit'],
    industries: ['Hotels', 'Restaurants', 'Facilities & Janitorial'],
    factors: ['Institutional Formulation', 'Fast Acting']
  },

  // --- 7. CLEANING CHEMICALS ---
  {
    id: 'chemicals-diversey',
    title: 'Diversey Professional Cleaning Concentrates',
    subtitle: 'Taski floor care, kitchen degreasers, sanitizers & dishwash',
    details: 'Concentrated Chemicals · Diversey',
    image: '/images/image__cleaning_chemicals__b85bdd2d.png',
    category: 'Cleaning Chemicals',
    brands: ['Diversey'],
    industries: ['Hotels', 'Restaurants', 'Facilities & Janitorial', 'Catering'],
    factors: ['ISO Certified', 'Automated Dilution Safe', 'Eco-Friendly']
  },
  {
    id: 'chemicals-sac',
    title: 'SAC Commercial Hygiene Chemicals',
    subtitle: 'Surface cleaners, glass cleaners, descalers & multi-purpose liquids',
    details: 'Surface & Multi-Clean · SAC',
    image: '/images/cardimage_4fdce090.png',
    category: 'Cleaning Chemicals',
    brands: ['SAC'],
    industries: ['Hotels', 'Restaurants', 'Facilities & Janitorial'],
    factors: ['High Potency', 'Bulk 5L / 20L Packs']
  },

  // --- 8. ENGINEERING EQUIPMENTS ---
  {
    id: 'engineering-kitchen-equipments',
    title: 'Commercial Kitchen Equipments',
    subtitle: 'High-power burners, ovens, fryers, griddles & hot bain-maries',
    details: 'Commercial Kitchen Units · Kitchen Equipments',
    image: '/images/image__buffet___beverage_equipment__f2c7e5ac.png',
    category: 'Engineering Equipments',
    brands: ['Kitchen Equipments'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Heavy Commercial Power', 'ISI / CE Certified']
  },
  {
    id: 'engineering-serman',
    title: 'Serman Engineering & Commercial Machinery',
    subtitle: 'Commercial refrigeration, dishwashers & facility machines',
    details: 'Heavy Machinery & Systems · Serman',
    image: '/images/image__fine_dining__2ac60065.png',
    category: 'Engineering Equipments',
    brands: ['Serman'],
    industries: ['Hotels', 'Restaurants', 'Facilities & Janitorial'],
    factors: ['Energy Efficient', 'Heavy Duty Performance']
  }
];

export const CATEGORY_FILTERS = [
  'Crockery',
  'Cutlery',
  'Linen',
  'Guest Amenities',
  'Kitchen Utensils',
  'House Keeping',
  'Cleaning Chemicals',
  'Engineering Equipments'
];

export const CATEGORY_SPOTLIGHT_MAP: Record<string, CategorySpotlightInfo> = {
  'Crockery': {
    eyebrow: 'FINE DINING & BUFFET TABLEWARE',
    title: 'Crockery',
    image: '/images/image__tableware___crockery__c6601dfa.png',
    badges: ['Hotels', 'Restaurants', 'Catering'],
    items: [
      'Dinewell Melamine Plates & Bowls',
      'Borosil Commercial Glassware',
      'Ariane Fine Porcelain Dinner Sets',
      'Arcoroc Vitrified Glass Tableware',
      'Bharat Crockery Ceramic Suites',
      'Clay Craft Bone China Crockery',
      'Ocean Glass Drinkware & Goblets',
      'Servewell & Superware Trays & Plates',
      'Union Glass Tumblers & Beer Mugs',
      'Cello & JCPL Tabletop Collections',
      'V 4 Fine Dining Accessories'
    ],
    footnote: 'Authorized distributors for Arcoroc, Ariane, Bharat, Borosil, Cello, Clay Craft, Dinewell, JCPL, Ocean, Servewell, Superware, Union, and V 4.'
  },
  'Cutlery': {
    eyebrow: 'MIRROR & SATIN CUTLERY SUITES',
    title: 'Cutlery',
    image: '/images/image__stainless_steel_brassware__69672dfd.png',
    badges: ['Hotels', 'Restaurants', 'Catering'],
    items: [
      'FNS Luxury 18/10 Cutlery Sets',
      'Shapes Heavy Gauge Dinner Spoons & Forks',
      'Venus Mirror Finish Cutlery Suites',
      'Supreme Commercial Cafe & Banquet Silverware',
      'Steak Knives & Butter Spreaders',
      'Dessert, Soup & Teaspoons',
      'Buffet Serving Tongs & Ladles'
    ],
    footnote: 'Featuring leading cutlery brands Shapes, Supreme, Venus, and FNS. Custom crest embossing and bulk packing available.'
  },
  'Linen': {
    eyebrow: 'LUXURY COTTON BED & BATH LINENS',
    title: 'Linen',
    image: '/images/cardimage_ac51211f.png',
    badges: ['Hotels', 'Resorts'],
    items: [
      'Bath Towels (550 - 650 GSM Combed Cotton)',
      'Face Towels & Hand Towels',
      'Pool Towels & Heavy Bath Mats',
      'Bed Sheets (300-400 TC Sateen / Percale)',
      'Bed Covers, Duvets & Quilt Inserts',
      'Mattress Protectors & Waterproof Pads',
      'Pillows & Sateen Pillow Covers',
      'Flame-Retardant Curtains & Drapes',
      'Carpets, Rugs, Cushions & Throws'
    ],
    footnote: 'High-thread count luxury hospitality linens crafted with premium cottons. Base reference: www.cintracottons.com.'
  },
  'Guest Amenities': {
    eyebrow: 'IN-ROOM LUXURY & GUEST COMFORTS',
    title: 'Guest Amenities',
    image: '/images/image__guest_amenities_equipment__f4f6ec37.png',
    badges: ['Hotels', 'Resorts'],
    items: [
      'Bath Gel, Body Lotion, Foam Bath & Moisturizer',
      'Shampoo, Shower Gel & Botanical Soaps',
      'Dental Kit, Shaving Kit, Medical & Sewing Kits',
      'Customised Hotel Room & Guest Kits',
      'Bath Slippers & Hotel Wooden Hangers',
      'Laundry Paper Bags & Hygiene / Disposable Bags',
      'Toilet Rolls, Sanitized WC Bands & Glass Covers',
      'Bill Folders, DND Cards, Menu Folders & Luggage Tags',
      'Room Fresheners, Shoe Shine, Stirrers & Straws'
    ],
    footnote: 'Full range of curated guestroom and bathroom amenities. Base reference: www.victolgold.com.'
  },
  'Kitchen Utensils': {
    eyebrow: 'COMMERCIAL COOKWARE & PREP HARDWARE',
    title: 'Kitchen Utensils',
    image: '/images/image__buffet___beverage_equipment__f2c7e5ac.png',
    badges: ['Restaurants', 'Hotels', 'Catering'],
    items: [
      'Prestige Commercial Cookware & Pressure Pans',
      'Milton Insulated Vessels & Food Containers',
      'Godrej - Cartini Professional Culinary Knives',
      'Bakers Chef Knives & Kitchen Prep Slicers',
      'Cambro Nilkamal Food Pans & Ingredient Storage',
      'Polygaurd Food Grade Kitchen Storage',
      'Pradeep & Anchor Heavy Stainless Steel Topes & Degchis',
      'Hem, Indigo & Kenford Commercial Ladles & Whisks',
      'Mosaic, Rena, Rudra & Venus Cooking Vessels',
      'KMW, Sujatha & Zanuff Corvus Commercial Kitchen Tools'
    ],
    footnote: 'Engineered for high-volume commercial kitchens, banquets and catering operations from trusted national brands.'
  },
  'House Keeping': {
    eyebrow: 'FACILITY CLEANING & JANITORIAL SYSTEMS',
    title: 'House Keeping',
    image: '/images/image__cleaning_equipment___janitorial__b009223f.png',
    badges: ['Hotels', 'Facilities & Janitorial', 'Restaurants'],
    items: [
      'Gala & Roots Commercial Microfiber Mops & Squeegees',
      'Cambro Nilkamal Housekeeping Carts & Trolleys',
      'Conta Commercial Bins & Linen Hampers',
      'Kimberly & Premier Hand Towels & Tissue Systems',
      'Fresh N Fine Room Supplies & Disposables',
      'Family Plastic Commercial Buckets & Containers',
      'Dabur & Hit Room Fresheners & Pest Control',
      'Double Bucket Wringer Trolleys & Caution Signs'
    ],
    footnote: 'Complete housekeeping solutions from Gala, Roots, Cambro Nilkamal, Conta, Kimberly, Premier, Dabur, and Hit.'
  },
  'Cleaning Chemicals': {
    eyebrow: 'INSTITUTIONAL HYGIENE & SANITATION',
    title: 'Cleaning Chemicals',
    image: '/images/image__cleaning_chemicals__b85bdd2d.png',
    badges: ['Hotels', 'Restaurants', 'Facilities & Janitorial'],
    items: [
      'Diversey Taski Floor Cleaners (R1 - R9 Series)',
      'Diversey Suma Kitchen Degreasers & Oven Cleaners',
      'Diversey Automatic Machine Dishwash & Rinse Aid',
      'SAC Surface Disinfectants & Multipurpose Cleaners',
      'SAC Toilet Bowl Descalers & Scale Removers',
      'SAC Glass & Mirror Cleaners Streak-Free',
      'Food-Grade Kitchen Surface Sanitizers',
      'Antibacterial Foaming Hand Wash Concentrates'
    ],
    footnote: 'ISO-certified concentrated chemical solutions by Diversey and SAC Chemicals for industrial and hospitality hygiene.'
  },
  'Engineering Equipments': {
    eyebrow: 'COMMERCIAL HEAVY-DUTY MACHINERY',
    title: 'Engineering Equipments',
    image: '/images/image__buffet___beverage_equipment__f2c7e5ac.png',
    badges: ['Hotels', 'Restaurants', 'Catering'],
    items: [
      'Commercial High-Pressure Cooking Ranges & Burners',
      'Serman Heavy-Duty Commercial Refrigeration & Freezers',
      'Serman Industrial Dishwashers & Glasswashers',
      'Stainless Steel Bain-Maries & Hot Food Warmers',
      'Deep Fat Fryers, Griddles & Salamanders',
      'Commercial Exhaust Hoods & Ventilation Units',
      'Kitchen Stainless Steel Prep Tables & Sinks',
      'Maintenance Engineering Machinery & Spares'
    ],
    footnote: 'Heavy-duty commercial food service engineering equipment and maintenance solutions by Serman and Kitchen Equipments.'
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
  },

  // --- Mappings for CSV Products ---
  'crockery-dinewell': {
    skuPrefix: 'CR-DW / Dinewell Melamine',
    tagline: '100% pure food-grade melamine banquet & buffet dinnerware.',
    material: '100% Food-Grade Melamine Resin',
    finish: 'Glazed Porcelain-Like Scratch-Resistant Finish',
    galleryImages: [
      '/images/cardimage_b6bc00f1.png',
      '/images/image__tableware___crockery__c6601dfa.png',
      '/images/image__fine_dining__2ac60065.png'
    ],
    badges: [
      { title: '100% Melamine', sub: 'BPA Free & Food Contact Safe', icon: 'food' },
      { title: 'Dishwasher Safe', sub: 'Commercial Pan Wash Safe', icon: 'wash' },
      { title: 'Break Resistant', sub: 'High Durability for Buffets', icon: 'finish' }
    ],
    parGuideline: { fineDining: '2.5x', banquet: '3.5x', roomService: '2.0x', barLounge: '2.5x' },
    keySpecs: {
      material: '100% Pure Food-Grade Melamine',
      dimensions: 'Buffet Plates: 260–310 mm · Bowls: 120–180 mm · Platters: 350 mm',
      weight: '0.28 kg – 0.65 kg / pc',
      finish: 'Glazed High-Gloss Scratch Resistant',
      dishwasherSafe: 'Yes (Top rack & commercial dishwasher safe up to 120°C)',
      usage: 'Hotel Buffets, Banquets, Restaurants, Outdoor Catering',
      packing: '12 / 24 pcs per export corrugated carton'
    }
  },
  'crockery-borosil': {
    skuPrefix: 'CR-BR / Borosil Glassware',
    tagline: '100% borosilicate & toughened opal dining glassware.',
    material: 'Toughened Borosilicate & Opal Glass',
    finish: 'Crystal Clear & Non-Porous Ultra-Smooth Glaze',
    galleryImages: [
      '/images/image__tableware___crockery__a8a959b7.png',
      '/images/image__hospitality_tableware__eab14684.png',
      '/images/image__restaurant_setting__c005091f.png'
    ],
    badges: [
      { title: '100% Borosilicate', sub: 'Thermal Shock Resistant', icon: 'food' },
      { title: 'Dishwasher Safe', sub: '1,000+ Cycles', icon: 'wash' },
      { title: 'Non-Porous', sub: 'Zero Odor or Stain Absorption', icon: 'finish' }
    ],
    parGuideline: { fineDining: '3.0x', banquet: '2.5x', roomService: '2.0x', barLounge: '3.5x' },
    keySpecs: {
      material: '100% Borosilicate & Opal Glass',
      dimensions: 'Tumblers: 250–350 ml · Bowls: 200–500 ml · Casseroles: 1.0–2.5 L',
      weight: '0.18 kg – 0.85 kg / pc',
      finish: 'Flame-Polished Crystal Clear & Opal White',
      dishwasherSafe: 'Yes (Microwave, Oven & Dishwasher Safe)',
      usage: 'Hotels, Fine Dining, Room Service, Cafes',
      packing: '6 pcs inner box · 24 / 48 pcs master carton'
    }
  },
  'cutlery-fns': {
    skuPrefix: 'CT-FNS / FNS Luxury Cutlery',
    tagline: 'Hand-crafted premium 18/10 stainless steel flatware suites.',
    material: 'AISI 304 (18/10) Food-Grade Stainless Steel',
    finish: 'Mirror Polished Bowls with Ergonomic Forged Stems',
    galleryImages: [
      '/images/image__stainless_steel_brassware__69672dfd.png',
      '/images/cardimage_ac51211f.png',
      '/images/image__fine_dining__2ac60065.png'
    ],
    badges: [
      { title: '18/10 Stainless Steel', sub: 'Maximum Rust & Corrosion Resistance', icon: 'food' },
      { title: 'Dishwasher Safe', sub: 'Industrial 1,000+ Cycles', icon: 'wash' },
      { title: 'Mirror Finish', sub: 'Hand-Polished Luxury Shine', icon: 'finish' }
    ],
    parGuideline: { fineDining: '3.5x', banquet: '4.0x', roomService: '2.0x', barLounge: '2.5x' },
    keySpecs: {
      material: '18/10 Surgical Grade Stainless Steel',
      dimensions: 'Table Knife: 232 mm · Table Fork: 208 mm · Dessert Spoon: 185 mm',
      weight: '75g – 110g per piece (Substantial Heavy Weight)',
      finish: 'Mirror Polish with Satin Brushed Handle Accents',
      dishwasherSafe: 'Yes (High-Temp Commercial Sanitizer Safe)',
      usage: 'Luxury Hotels, Fine Dining, Premium Banquets, VIP Lounges',
      packing: '12 pcs per branded box · 120 pcs per master shipping carton'
    }
  },
  'linen-towels-bathmats': {
    skuPrefix: 'LN-CC / Cintra Cottons Luxury',
    tagline: '550–650 GSM 100% combed cotton luxury hospitality towels.',
    material: '100% Ring-Spun Long-Staple Combed Cotton',
    finish: 'Double-Stitched Reinforced Hems & Terry Loop Weave',
    galleryImages: [
      '/images/cardimage_ac51211f.png',
      '/images/heroimage_3f45b21f.png',
      '/images/image__hotels__8af4967c.png'
    ],
    badges: [
      { title: '100% Combed Cotton', sub: 'High GSM Ultra-Plush Feel', icon: 'food' },
      { title: 'Commercial Laundry', sub: 'Withstands 150+ Heavy Washes', icon: 'wash' },
      { title: 'High Absorbency', sub: 'Fast Drying Terry Loops', icon: 'finish' }
    ],
    parGuideline: { fineDining: '1.0x', banquet: '1.0x', roomService: '3.0x', barLounge: '1.0x' },
    keySpecs: {
      material: '100% Combed Cotton (Long Staple)',
      dimensions: 'Bath Towel: 70 × 140 cm (600 GSM) · Hand Towel: 40 × 60 cm (550 GSM) · Bath Mat: 50 × 80 cm (900 GSM)',
      weight: 'Bath Towel: ~580g · Hand Towel: ~140g · Bath Mat: ~360g',
      finish: 'Bright Optical White / Reactive Vat-Dyed Colors',
      dishwasherSafe: 'High-Temperature Commercial Wash (up to 90°C Safe)',
      usage: 'Luxury Hotel Bathrooms, Spa, Resorts, Wellness Centers',
      packing: '10 pcs compressed polybag · 40 / 60 pcs export bale/carton'
    }
  },
  'amenities-liquids-soaps': {
    skuPrefix: 'AM-VG / Victol Gold Botanical',
    tagline: 'Eco-conscious botanical room formulations with customizable hotel branding.',
    material: 'Natural Extracts, Paraben-Free, Biodegradable Surfactants',
    finish: 'Silkscreen Printed / Hot-Stamped Bottle & Soft Tubes',
    galleryImages: [
      '/images/image__guest_amenities_equipment__f4f6ec37.png',
      '/images/cardimage_1dbd1171.png',
      '/images/cardimage_4fdce090.png'
    ],
    badges: [
      { title: 'Dermatologically Tested', sub: 'Paraben & Cruelty Free', icon: 'food' },
      { title: 'Custom Branding', sub: 'Hot Stamp & Full-Color Logos', icon: 'wash' },
      { title: 'Eco Packaging', sub: 'Biodegradable Wheat Straw Tubes', icon: 'finish' }
    ],
    parGuideline: { fineDining: '1.0x', banquet: '1.0x', roomService: '3.5x', barLounge: '1.0x' },
    keySpecs: {
      material: 'Botanical Formulations (Green Tea, Aloe Vera, Sandalwood)',
      dimensions: 'Tubes/Bottles: 30ml, 40ml, 50ml · Bar Soaps: 20g, 25g, 35g pleat wrapped',
      weight: '30g – 55g per unit',
      finish: 'Matte Soft-Touch Tubes / Recycled Kraft Paper Packaging',
      dishwasherSafe: 'Single-Use Sealed Guest Dispense',
      usage: 'Hotel Guestrooms, VIP Suites, Boutique Resorts, Spas',
      packing: '100 pcs inner tray · 400 pcs master shipping carton'
    }
  },
  'chemicals-diversey': {
    skuPrefix: 'CH-DIV / Diversey Professional',
    tagline: 'Global standard concentrated kitchen degreasers, floor care & room disinfectants.',
    material: 'ISO 9001 / ISO 14001 Professional Chemical Concentrates',
    finish: 'Color-Coded Sealed HDPE Canisters for Dispenser Dosing',
    galleryImages: [
      '/images/image__cleaning_chemicals__b85bdd2d.png',
      '/images/cardimage_4fdce090.png',
      '/images/centerimage_f8709305.png'
    ],
    badges: [
      { title: 'Food-Grade Certified', sub: 'Safe for Commercial Kitchen Contact', icon: 'food' },
      { title: 'Ultra Concentrate', sub: 'Dilution Ratios up to 1:200', icon: 'wash' },
      { title: 'Global Standard', sub: 'Diversey Taski & Suma Formulation', icon: 'finish' }
    ],
    parGuideline: { fineDining: '1.0x', banquet: '2.0x', roomService: '1.0x', barLounge: '1.0x' },
    keySpecs: {
      material: 'Concentrated Active Surfactants, QAC Disinfectants & Enzymes',
      dimensions: '5 Litre Canisters · 20 Litre Commercial Barrels',
      weight: '5.2 kg per 5L can · 21.0 kg master box (4 × 5L)',
      finish: 'Color-Coded Spill-Resistant HDPE Drums',
      dishwasherSafe: 'Automated Chemical Dispenser & Machine Injector Safe',
      usage: 'Commercial Kitchens, Guestrooms, Public Lobbies, Banquets',
      packing: '4 × 5L cans per master carton with leakproof partitions'
    }
  }
};

