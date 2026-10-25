export interface CategoryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface BrandItem {
  name: string;
  logo: string;
  scale?: number;
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


export const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/heroimage_3f45b21f.webp',
    alt: 'Fine dining hospitality table setting'
  },
  {
    id: 2,
    image: '/images/image__restaurant_setting__c005091f.webp',
    alt: 'Elegant restaurant setting'
  },
  {
    id: 3,
    image: '/images/image__fine_dining__2ac60065.webp',
    alt: 'Hospitality catering and banquet'
  }
];

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: 'crockery',
    title: 'Crockery',
    subtitle: 'Dining essentials, bone china & melamine collections.',
    image: '/images/cardimage_b6bc00f1.webp'
  },
  {
    id: 'cutlery',
    title: 'Cutlery',
    subtitle: 'Mirror & satin finished stainless steel flatware.',
    image: '/images/cutlery_fork_spoon_knife.jpg'
  },
  {
    id: 'linen',
    title: 'Linen',
    subtitle: 'Luxury combed cotton bath towels, bed sheets & drapes.',
    image: '/images/luxury_hotel_linen.jpg'
  },
  {
    id: 'guest-amenities',
    title: 'Guest Amenities',
    subtitle: 'In-room botanical soaps, slippers, dental kits & comforts.',
    image: '/images/cardimage_1dbd1171.webp'
  },
  {
    id: 'cafes',
    title: 'Cafes',
    subtitle: 'Specialty coffee mugs, frappe glassware, barista tools & disposables.',
    image: '/images/category_cafe_beverage.jpg'
  },
  {
    id: 'kitchen-utensils',
    title: 'Kitchen Utensils',
    subtitle: 'Heavy-gauge commercial cookware, chef knives & prep tools.',
    image: '/images/cardimage_ac51211f.webp'
  },
  {
    id: 'housekeeping',
    title: 'Housekeeping',
    subtitle: 'Janitorial hardware, carts, bins, tissue & room care.',
    image: '/images/image__cleaning_equipment___janitorial__b009223f.webp'
  },
  {
    id: 'cleaning-chemicals',
    title: 'Cleaning Chemicals',
    subtitle: 'ISO concentrated degreasers, floor care & sanitizers.',
    image: '/images/commercial_cleaning_chemicals.jpg'
  },
  {
    id: 'engineering-equipments',
    title: 'Engineering Equipments',
    subtitle: 'Heavy-duty commercial kitchen ranges, chillers & machines.',
    image: '/images/commercial_kitchen_equipment.jpg'
  }
];

export const BRANDS_ROW_1: BrandItem[] = [
  { name: 'Dinewell', logo: '/images/dinewell_logo_clean.webp', scale: 0.92 },
  { name: 'Borosil', logo: '/images/borosil_logo_clean.svg', scale: 0.95 },
  { name: 'Ariane', logo: '/images/ariane_logo_clean.svg', scale: 1.0 },
  { name: 'Bharath Potteries', logo: '/images/bharath_potteries_logo_clean.webp', scale: 1.05 },
  { name: 'MILTON', logo: '/images/milton_logo_clean.webp', scale: 0.9 },
  { name: 'Prestige', logo: '/images/prestige_logo_clean.svg', scale: 0.95 },
  { name: 'H&H', logo: '/images/h_h_logo_clean.webp', scale: 0.88 }
];

export const BRANDS_ROW_2: BrandItem[] = [
  { name: 'Diversey', logo: '/images/diversey_logo_clean.svg', scale: 1.0 },
  { name: 'Ocean', logo: '/images/ocean_logo_clean.svg', scale: 0.95 },
  { name: 'Cambro Nilkamal', logo: '/images/cambro_logo_clean.svg', scale: 0.92 },
  { name: 'FRESH N FINE', logo: '/images/fresh_n_fine_clean.webp', scale: 0.92 },
  { name: 'SAC Chemicals', logo: '/images/sac_chemicals_logo_clean.webp', scale: 0.95 },
  { name: 'CONTA', logo: '/images/conta_logo_clean.webp', scale: 0.92 },
  { name: 'Kimberly-Clark', logo: '/images/kimberly_clark_logo_clean.webp', scale: 0.92 },
  { name: '3M', logo: '/images/3m_logo_clean.webp', scale: 0.85 },
  { name: 'Rubbermaid', logo: '/images/rubbermaid_logo_3d_clean.webp', scale: 0.88 }
];

export const CATALOG_PRODUCTS: ProductCatalogCard[] = [
  // --- 1. CROCKERY ---
  {
    id: 'crockery-dinewell',
    title: 'Dinewell Melamine Dinnerware',
    subtitle: 'Chip-resistant buffet plates, bowls & platters',
    details: '100% Melamine · Dinewell',
    image: '/images/dinewell_melamine_platters.jpg',
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
    image: '/images/image__tableware___crockery__a8a959b7.webp',
    category: 'Crockery',
    brands: ['Borosil'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Bulk Wholesale', 'Heat Resistant']
  },
  {
    id: 'crockery-ariane',
    title: 'Ariane Fine Porcelain Tableware',
    subtitle: 'European vitrified porcelain dining & banquet plates',
    details: 'Fine Porcelain · Ariane',
    image: '/images/image__tableware___crockery__c6601dfa.webp',
    category: 'Crockery',
    brands: ['Ariane'],
    industries: ['Hotels', 'Restaurants'],
    factors: ['Super Vitrified', 'Dishwasher Safe', 'Lead Safe']
  },
  {
    id: 'crockery-arcoroc',
    title: 'Arcoroc Tableware & Drinkware',
    subtitle: 'Toughened French opal dinnerware & banquet service',
    details: 'Opal Tableware & Glass · Arcoroc',
    image: '/images/image__tableware___crockery__a8a959b7.webp',
    category: 'Crockery',
    brands: ['Arcoroc'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Toughened Glass', 'Thermal Shock Proof']
  },
  {
    id: 'crockery-bharat',
    title: 'Bharat Commercial Crockery',
    subtitle: 'High-durability ceramic dinner sets & banquet tableware',
    details: 'Ceramic Tableware · Bharat - Crockery',
    image: '/images/cardimage_b6bc00f1.webp',
    category: 'Crockery',
    brands: ['Bharat - Crockery'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Commercial Grade', 'Chip Resistant']
  },
  {
    id: 'crockery-claycraft',
    title: 'Clay Craft Fine Tableware',
    subtitle: 'Fine ceramic dining, luxury teaware & hotel dinner sets',
    details: 'Ceramic & Fine Tableware · Claycraft Fine Tableware',
    image: '/images/ceramic_claycraft_tableware.jpg',
    category: 'Crockery',
    brands: ['Claycraft Fine Tableware'],
    industries: ['Hotels', 'Restaurants'],
    factors: ['Lead & Cadmium Safe', 'Custom Crest Embossing']
  },
  {
    id: 'crockery-ocean',
    title: 'Ocean Commercial Glassware',
    subtitle: 'Premium crystal-clear beverage tumblers, stems & goblets',
    details: 'Commercial Glassware · Ocean',
    image: '/images/image__hospitality_tableware__eab14684.webp',
    category: 'Crockery',
    brands: ['Ocean'],
    industries: ['Hotels', 'Restaurants', 'Cafes'],
    factors: ['Crystal Clarity', 'Flame Polished Rims']
  },
  {
    id: 'crockery-union',
    title: 'Union Hospitality Glassware',
    subtitle: 'High-turnover durable glassware for catering & banquets',
    details: 'Beverage Glassware · Union',
    image: '/images/category_cafe_beverage.jpg',
    category: 'Crockery',
    brands: ['Union'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Bulk Wholesale', 'Scratch Resistant']
  },
  {
    id: 'crockery-servewell',
    title: 'Servewell Melamine Tableware',
    subtitle: '100% food-grade melamine serving trays, bowls & plates',
    details: 'Melamine Dining · Servewell',
    image: '/images/image__fine_dining__2ac60065.webp',
    category: 'Crockery',
    brands: ['Servewell'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Break Resistant', 'BPA Free']
  },
  {
    id: 'crockery-superware',
    title: 'Superware Heavy-Duty Melamine',
    subtitle: 'Commercial buffetware, platters & heavy-gauge melamine sets',
    details: 'Buffet & Melamine · Superware',
    image: '/images/dinewell_melamine_platters.jpg',
    category: 'Crockery',
    brands: ['Superware'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Heavy Gauge', 'Stain Resistant']
  },
  {
    id: 'crockery-cello',
    title: 'Cello Hospitality Tableware',
    subtitle: 'Contemporary opalware dinner sets & dining essentials',
    details: 'Opal & Tableware · Cello',
    image: '/images/image__restaurant_setting__c005091f.webp',
    category: 'Crockery',
    brands: ['Cello'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Lightweight & Tough', 'ISO Certified']
  },
  {
    id: 'crockery-jcpl',
    title: 'JCPL Commercial Dinnerware',
    subtitle: 'Fine vitrified tableware & modern tabletop banquet collections',
    details: 'Vitrified Tableware · JCPL',
    image: '/images/image__tableware___crockery__c6601dfa.webp',
    category: 'Crockery',
    brands: ['JCPL'],
    industries: ['Hotels', 'Restaurants'],
    factors: ['High Glaze', 'Oven Safe']
  },
  {
    id: 'crockery-v4',
    title: 'V 4 Banquet & Catering Tableware',
    subtitle: 'Commercial catering plates, side bowls & dining sets',
    details: 'Tabletop Sets · V 4',
    image: '/images/cardimage_b6bc00f1.webp',
    category: 'Crockery',
    brands: ['V 4'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Bulk Wholesale', 'Economical Bulk']
  },

  // --- 2. CUTLERY ---
  {
    id: 'cutlery-fns',
    title: 'FNS Luxury Cutlery Collection',
    subtitle: 'Handcrafted premium 18/10 stainless steel suites',
    details: '18/10 Stainless Steel · FNS',
    image: '/images/fns_luxury_cutlery.jpg',
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
    image: '/images/cutlery_fork_spoon_knife.jpg',
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
    image: '/images/image__stainless_steel_brassware__69672dfd.webp',
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
    image: '/images/cutlery_fork_spoon_knife.jpg',
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
    details: '550-650 GSM Combed Cotton · Luxury Hospitality',
    image: '/images/luxury_hotel_linen.jpg',
    category: 'Linen',
    brands: [],
    industries: ['Hotels', 'Resorts'],
    factors: ['100% Combed Cotton', 'High Absorbency', 'Bulk Wholesale']
  },
  {
    id: 'linen-pool-face-towels',
    title: 'Pool Towels & Face Towels',
    subtitle: 'Vat-dyed chlorine-resistant poolside & face linens',
    details: 'Vat-Dyed Chlorine-Resistant Cotton',
    image: '/images/resort_pool_towels.jpg',
    category: 'Linen',
    brands: [],
    industries: ['Hotels', 'Resorts'],
    factors: ['Chlorine Resistant', 'Quick Dry']
  },
  {
    id: 'linen-bedsheets-duvets',
    title: 'Bed Sheets, Bed Covers & Duvets',
    subtitle: '300-400 TC pure cotton & sateen stripe bed linen',
    details: '300-400 TC Pure Cotton Sateen',
    image: '/images/luxury_hotel_bed_linen.jpg',
    category: 'Linen',
    brands: [],
    industries: ['Hotels'],
    factors: ['Hypoallergenic', 'Commercial Wash Proof']
  },
  {
    id: 'linen-pillows-protectors',
    title: 'Pillows, Pillow Covers & Mattress Protectors',
    subtitle: 'Microfiber down-feel pillows & waterproof protectors',
    details: 'Microfiber Down-Feel & Quilted Fill',
    image: '/images/hotel_pillows_collection.jpg',
    category: 'Linen',
    brands: [],
    industries: ['Hotels'],
    factors: ['Waterproof Barrier', 'Anti-Bacterial']
  },
  {
    id: 'linen-curtains-carpets-rugs',
    title: 'Curtains, Carpets, Rugs & Cushions',
    subtitle: 'Flame-retardant blackout drapery, throws & floor coverings',
    details: 'Flame-Retardant Hospitality Fabric',
    image: '/images/hotel_curtains_drapery.jpg',
    category: 'Linen',
    brands: [],
    industries: ['Hotels', 'Restaurants'],
    factors: ['Blackout FR', 'Custom Dimensions']
  },

  // --- 4. GUEST AMENITIES ---
  {
    id: 'amenities-liquids-soaps',
    title: 'Liquid Amenities & Soaps',
    subtitle: 'Bath gel, shampoo, body lotion, moisturizer & soaps',
    details: 'Botanical Formulations · Hotel Essentials',
    image: '/images/botanical_guest_amenities.jpg',
    category: 'Guest Amenities',
    brands: [],
    industries: ['Hotels'],
    factors: ['Paraben Free', 'Custom Hotel Branding']
  },
  {
    id: 'amenities-room-kits',
    title: 'Customised Guest & Room Kits',
    subtitle: 'Dental kit, shaving kit, sewing kit & medical kits',
    details: 'Eco-Packaging · Custom Guest Kits',
    image: '/images/hotel_guest_kits.jpg',
    category: 'Guest Amenities',
    brands: [],
    industries: ['Hotels'],
    factors: ['Biodegradable', 'Custom Hotel Logo']
  },
  {
    id: 'amenities-room-accessories',
    title: 'Room Amenities & Bath Slippers',
    subtitle: 'Bath slippers, hangers, laundry paper bags, shoe mitts',
    details: 'In-Room Essentials & Slippers',
    image: '/images/image__guest_amenities_equipment__f4f6ec37.webp',
    category: 'Guest Amenities',
    brands: [],
    industries: ['Hotels'],
    factors: ['Eco-Friendly', 'Bulk Wholesale']
  },
  {
    id: 'amenities-bath-tissue',
    title: 'Bath Amenities, Toilet Rolls & WC Bands',
    subtitle: 'Virgin pulp toilet rolls, sanitized WC bands & glass covers',
    details: 'Sanitary Paper Goods & Tissue',
    image: '/images/hotel_bath_amenities_toilet_rolls.jpg',
    category: 'Guest Amenities',
    brands: [],
    industries: ['Hotels'],
    factors: ['100% Virgin Pulp', 'Hygienic Wrapping']
  },
  {
    id: 'amenities-housekeeping-stationery',
    title: 'Folders, Cards & Disposables',
    subtitle: 'Bill folders, menu folders, DND cards, luggage tags, stirrers & straws',
    details: 'Front Office, Guest Stationery & Dining',
    image: '/images/hotel_folders_cards_stationery.jpg',
    category: 'Guest Amenities',
    brands: [],
    industries: ['Hotels', 'Restaurants'],
    factors: ['Custom Embossing', 'Food Grade Disposables']
  },

  // --- 5. KITCHEN UTENSILS ---
  {
    id: 'utensils-prestige',
    title: 'Prestige Commercial Cookware',
    subtitle: 'Heavy-gauge commercial stock pots, pans & pressure cookers',
    details: 'Commercial Cookware · Prestige',
    image: '/images/commercial_stockpots.jpg',
    category: 'Kitchen Utensils',
    brands: ['Prestige'],
    industries: ['Restaurants', 'Hotels', 'Catering'],
    factors: ['Heavy Gauge SS', 'Induction & Gas Compatible']
  },
  {
    id: 'utensils-milton',
    title: 'Milton Commercial Kitchenware',
    subtitle: 'Insulated casseroles, beverage dispensers & stainless prepware',
    details: 'Kitchenware & Thermal Ware · Milton',
    image: '/images/commercial_stockpots.jpg',
    category: 'Kitchen Utensils',
    brands: ['Milton'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Thermal Retention', 'Commercial Grade']
  },
  {
    id: 'utensils-godrej-cartini',
    title: 'Godrej - Cartini Professional Knives',
    subtitle: 'High-carbon chef knives, carving tools & prep accessories',
    details: 'Culinary Knives · Godrej - Cartini',
    image: '/images/image__stainless_steel_brassware__69672dfd.webp',
    category: 'Kitchen Utensils',
    brands: ['Godrej - Cartini'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['High-Carbon Steel', 'Ergonomic Grip']
  },
  {
    id: 'utensils-bakers',
    title: 'Bakers Culinary Prep & Pastry Tools',
    subtitle: 'Baking pans, scrapers, piping tips & commercial prepware',
    details: 'Bakery & Prep Equipment · Bakers',
    image: '/images/image__stainless_steel_brassware__69672dfd.webp',
    category: 'Kitchen Utensils',
    brands: ['Bakers'],
    industries: ['Hotels', 'Restaurants', 'Cafes'],
    factors: ['Commercial Grade', 'Food Safe Non-Stick']
  },
  {
    id: 'utensils-cambro',
    title: 'Cambro Nilkamal NSF Food Storage',
    subtitle: 'GN polycarbonate food pans, airtight ingredient bins & measuring jugs',
    details: 'NSF Certified Storage · Cambro Nilkamal',
    image: '/images/cambro_food_pans.jpg',
    category: 'Kitchen Utensils',
    brands: ['Cambro Nilkamal'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['NSF Certified', 'Stackable']
  },
  {
    id: 'utensils-polyguard',
    title: 'Polygaurd Storage Containers & Bins',
    subtitle: 'Heavy-duty food grade ingredient bins & prep vessels',
    details: 'Commercial Storage · Polygaurd',
    image: '/images/cambro_food_pans.jpg',
    category: 'Kitchen Utensils',
    brands: ['Polygaurd'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['BPA Free Polymers', 'High Impact Strength']
  },
  {
    id: 'utensils-pradeep',
    title: 'Pradeep Catering Degchis & Vessels',
    subtitle: 'Stainless steel heavy catering degchis, topes & handis',
    details: 'Catering Vessels · Pradeep',
    image: '/images/cardimage_ac51211f.webp',
    category: 'Kitchen Utensils',
    brands: ['Pradeep'],
    industries: ['Catering', 'Restaurants', 'Hotels'],
    factors: ['Commercial Tri-Ply', 'High Volume']
  },
  {
    id: 'utensils-anchor',
    title: 'Anchor Commercial Kitchen Utensils',
    subtitle: 'Heavy catering stock pots, colanders & banquet cooking ware',
    details: 'Catering Utensils · Anchor Utensils',
    image: '/images/cardimage_ac51211f.webp',
    category: 'Kitchen Utensils',
    brands: ['Anchor Utensils'],
    industries: ['Catering', 'Restaurants'],
    factors: ['Seamless Welds', 'Heavy Gauge']
  },
  {
    id: 'utensils-hem',
    title: 'Hem Commercial Ladles & Tools',
    subtitle: 'One-piece stainless steel skimmers, ladles & cooking spoons',
    details: 'Kitchen Prep Tools · Hem',
    image: '/images/image__fine_dining__2ac60065.webp',
    category: 'Kitchen Utensils',
    brands: ['Hem'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Seamless Stainless', 'Dishwasher Safe']
  },
  {
    id: 'utensils-indigo',
    title: 'Indigo Commercial Kitchenware',
    subtitle: 'Heavy-gauge commercial whisks, turners & buffet serving tongs',
    details: 'Kitchen Prep Tools · Indigo',
    image: '/images/image__fine_dining__2ac60065.webp',
    category: 'Kitchen Utensils',
    brands: ['Indigo'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Rust Proof SS', 'Commercial Grade']
  },
  {
    id: 'utensils-kenford',
    title: 'Kenford Kitchen Prep Accessories',
    subtitle: 'Professional chefs strainers, graters & kitchen accessories',
    details: 'Prep Accessories · Kenford',
    image: '/images/image__fine_dining__2ac60065.webp',
    category: 'Kitchen Utensils',
    brands: ['Kenford'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Precision Edges', 'Dishwasher Safe']
  },
  {
    id: 'utensils-mosaic',
    title: 'Mosaic Commercial Kitchen Vessels',
    subtitle: 'Stainless steel gastronorm food containers & holloware',
    details: 'Commercial Vessels · Mosaic',
    image: '/images/image__restaurant_setting__c005091f.webp',
    category: 'Kitchen Utensils',
    brands: ['Mosaic'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Commercial Gauge', 'ISO Certified']
  },
  {
    id: 'utensils-rena',
    title: 'Rena Gastronorm Pans & Holloware',
    subtitle: 'Steam table pans, buffet inserts & kitchen prep containers',
    details: 'Gastronorm Containers · Rena',
    image: '/images/image__restaurant_setting__c005091f.webp',
    category: 'Kitchen Utensils',
    brands: ['Rena'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Standard GN Sizing', 'High Temp Resistant']
  },
  {
    id: 'utensils-rudra',
    title: 'Rudra Commercial Kitchenware',
    subtitle: 'Heavy-duty stainless serving dishes & back-of-house holloware',
    details: 'Kitchen Holloware · Rudra',
    image: '/images/image__restaurant_setting__c005091f.webp',
    category: 'Kitchen Utensils',
    brands: ['Rudra'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Heavy Gauge', 'Rust Proof']
  },
  {
    id: 'utensils-venus-kitchen',
    title: 'Venus Commercial Stainless Vessels',
    subtitle: 'Mirror-polished buffet inserts & commercial food prep containers',
    details: 'Commercial Vessels · Venus',
    image: '/images/image__restaurant_setting__c005091f.webp',
    category: 'Kitchen Utensils',
    brands: ['Venus'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Commercial Gauge', 'ISO Certified']
  },
  {
    id: 'utensils-kmw',
    title: 'KMW Kitchen Prep Appliances',
    subtitle: 'Commercial planetary mixers, dough kneaders & slicers',
    details: 'Commercial Machinery · KMW',
    image: '/images/image__buffet___beverage_equipment__f2c7e5ac.webp',
    category: 'Kitchen Utensils',
    brands: ['KMW'],
    industries: ['Restaurants', 'Catering', 'Hotels'],
    factors: ['Heavy Duty Motor', 'Commercial Grade']
  },
  {
    id: 'utensils-sujatha',
    title: 'Sujatha Commercial Mixers & Blenders',
    subtitle: 'High-torque heavy duty mixer grinders for busy commercial kitchens',
    details: 'High-Torque Prep · Sujatha',
    image: '/images/image__buffet___beverage_equipment__f2c7e5ac.webp',
    category: 'Kitchen Utensils',
    brands: ['Sujatha'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Continuous Run Motors', 'Stainless Steel Jars']
  },
  {
    id: 'utensils-zanuff',
    title: 'Zanuff Corvus Commercial Equipment',
    subtitle: 'Back-of-house utility accessories, heat lamps & food warmers',
    details: 'Commercial Utility · Zanuff Corvus',
    image: '/images/image__buffet___beverage_equipment__f2c7e5ac.webp',
    category: 'Kitchen Utensils',
    brands: ['Zanuff Corvus'],
    industries: ['Hotels', 'Restaurants', 'Catering'],
    factors: ['Industrial Build', 'CE Certified']
  },

  // --- 6. HOUSE KEEPING ---
  {
    id: 'housekeeping-gala',
    title: 'Gala Professional Cleaning Tools',
    subtitle: 'Heavy-duty microfiber wet mops, floor squeegees & scrub pads',
    details: 'Janitorial Tools · Gala',
    image: '/images/image__cleaning_equipment___janitorial__b009223f.webp',
    category: 'House Keeping',
    brands: ['Gala'],
    industries: ['Hotels', 'Facilities & Janitorial', 'Restaurants'],
    factors: ['Heavy Duty Durability', 'Ergonomic Handles']
  },
  {
    id: 'housekeeping-roots',
    title: 'Roots Commercial Floor Machines & Tools',
    subtitle: 'Industrial floor scrubbers, vacuum accessories & janitorial hardware',
    details: 'Floor & Machine Care · Roots',
    image: '/images/image__cleaning_equipment___janitorial__b009223f.webp',
    category: 'House Keeping',
    brands: ['Roots'],
    industries: ['Hotels', 'Facilities & Janitorial', 'Restaurants'],
    factors: ['Commercial Grade', 'High Efficiency']
  },
  {
    id: 'housekeeping-cambro',
    title: 'Cambro Nilkamal Housekeeping Trolleys',
    subtitle: 'Heavy-duty multi-shelf room attendant carts & linen hampers',
    details: 'Janitorial Trolleys · Cambro Nilkamal',
    image: '/images/housekeeping_service_cart.jpg',
    category: 'House Keeping',
    brands: ['Cambro Nilkamal'],
    industries: ['Hotels', 'Facilities & Janitorial', 'Restaurants'],
    factors: ['Non-Marking Wheels', 'High Load Capacity']
  },
  {
    id: 'housekeeping-conta',
    title: 'Conta Utility Bins & Segregation',
    subtitle: 'Pedal waste bins, recycling bins & color-coded waste segregation',
    details: 'Waste Management · Conta',
    image: '/images/housekeeping_service_cart.jpg',
    category: 'House Keeping',
    brands: ['Conta'],
    industries: ['Hotels', 'Facilities & Janitorial', 'Restaurants'],
    factors: ['Hands-Free Pedal', 'Heavy Duty HDPE']
  },
  {
    id: 'housekeeping-kimberly',
    title: 'Kimberly-Clark Professional Paper & Dispensers',
    subtitle: 'Touchless hand roll towel dispensers & multi-fold washroom tissues',
    details: 'Washroom Solutions · Kimberly',
    image: '/images/paper_products_dispensers.jpg',
    category: 'House Keeping',
    brands: ['Kimberly'],
    industries: ['Hotels', 'Facilities & Janitorial', 'Restaurants'],
    factors: ['High Absorbency', 'Touchless Dispensing']
  },
  {
    id: 'housekeeping-premier',
    title: 'Premier Commercial Tissues & Dispensers',
    subtitle: 'Jumbo roll toilet tissue, facial tissue boxes & c-fold refills',
    details: 'Washroom Paper · Premier',
    image: '/images/paper_products_dispensers.jpg',
    category: 'House Keeping',
    brands: ['Premier'],
    industries: ['Hotels', 'Facilities & Janitorial', 'Restaurants'],
    factors: ['100% Virgin Pulp', 'Soft & Strong']
  },
  {
    id: 'housekeeping-freshnfine',
    title: 'Fresh N Fine Guestroom Supplies & Plastics',
    subtitle: 'Heavy-duty bin liners, guestroom laundry baskets & plasticware',
    details: 'Room Plastics · Fresh N Fine',
    image: '/images/image_3_c35c9821.webp',
    category: 'House Keeping',
    brands: ['Fresh N Fine'],
    industries: ['Hotels', 'Facilities & Janitorial'],
    factors: ['Recyclable Polymers', 'Tear Resistant']
  },
  {
    id: 'housekeeping-familyplastic',
    title: 'Family Plastic Hospitality Bins & Carts',
    subtitle: 'Durable plastic utility tubs, laundry hampers & cleaning buckets',
    details: 'Hospitality Plastics · Family Plastic',
    image: '/images/image_3_c35c9821.webp',
    category: 'House Keeping',
    brands: ['Family Plastic'],
    industries: ['Hotels', 'Facilities & Janitorial'],
    factors: ['Heavy Duty Mold', 'Chemical Resistant']
  },
  {
    id: 'housekeeping-dabur',
    title: 'Dabur Facility Hygiene & Air Fresheners',
    subtitle: 'Odonil room freshener blocks, sprays & institutional odor control',
    details: 'Air Care & Hygiene · Dabur',
    image: '/images/image__guest_amenities_equipment__f4f6ec37.webp',
    category: 'House Keeping',
    brands: ['Dabur'],
    industries: ['Hotels', 'Restaurants', 'Facilities & Janitorial'],
    factors: ['Long Lasting Fragrance', 'Institutional Packs']
  },
  {
    id: 'housekeeping-hit',
    title: 'Hit Commercial Pest & Insect Solutions',
    subtitle: 'Institutional insect sprays, fly catchers & perimeter pest control',
    details: 'Pest Solutions · Hit',
    image: '/images/image__guest_amenities_equipment__f4f6ec37.webp',
    category: 'House Keeping',
    brands: ['Hit'],
    industries: ['Hotels', 'Restaurants', 'Facilities & Janitorial'],
    factors: ['Instant Kill Formulation', 'Fast Acting']
  },

  // --- 7. CLEANING CHEMICALS ---
  {
    id: 'chemicals-diversey',
    title: 'Diversey Professional Cleaning Concentrates',
    subtitle: 'Taski floor care, kitchen degreasers, sanitizers & dishwash',
    details: 'Concentrated Chemicals · Diversey',
    image: '/images/commercial_cleaning_chemicals.jpg',
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
    image: '/images/image__cleaning_chemicals__b85bdd2d.webp',
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
    image: '/images/commercial_kitchen_equipment.jpg',
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
    image: '/images/commercial_kitchen_equipment.jpg',
    category: 'Engineering Equipments',
    brands: ['Serman'],
    industries: ['Hotels', 'Restaurants', 'Facilities & Janitorial'],
    factors: ['Energy Efficient', 'Heavy Duty Performance']
  },

  // --- 9. CAFES ---
  {
    id: 'cafes-borosil-mugs-glassware',
    title: 'Borosil Specialty Coffee Mugs & Tumblers',
    subtitle: 'Heat-resistant borosilicate latte cups, espresso shots & tumblers',
    details: 'Borosilicate Glassware · Borosil',
    image: '/images/ceramic_latte_cups.jpg',
    category: 'Cafes',
    brands: ['Borosil'],
    industries: ['Cafes', 'Restaurants', 'Hotels'],
    factors: ['Thermal Shock Proof', 'Commercial Grade', 'Dishwasher Safe']
  },
  {
    id: 'cafes-ocean-drinkware-beverage',
    title: 'Ocean Cafe Beverage & Frappe Glassware',
    subtitle: 'Cold brew glasses, smoothie goblets & iced tea carafes',
    details: 'Clear Soda-Lime Glass · Ocean',
    image: '/images/image__tableware___crockery__a8a959b7.webp',
    category: 'Cafes',
    brands: ['Ocean'],
    industries: ['Cafes', 'Restaurants', 'Hotels'],
    factors: ['Crystal Clarity', 'High Durability', 'Bulk Wholesale']
  },
  {
    id: 'cafes-dinewell-bakery-display',
    title: 'Dinewell Melamine Pastry & Display Platters',
    subtitle: 'Countertop bakery trays, dessert pedestals & cake stands',
    details: '100% Melamine · Dinewell',
    image: '/images/dinewell_melamine_platters.jpg',
    category: 'Cafes',
    brands: ['Dinewell'],
    industries: ['Cafes', 'Restaurants'],
    factors: ['Chip Resistant', 'Stain Resistant', 'Easy Clean']
  },
  {
    id: 'cafes-shapes-fns-cutlery',
    title: 'Shapes & FNS Cafe Flatware & Dessert Spoons',
    subtitle: 'Long sundae spoons, pastry forks, tea spoons & butter spreaders',
    details: '18/10 Stainless Steel · Shapes, FNS',
    image: '/images/cutlery_fork_spoon_knife.jpg',
    category: 'Cafes',
    brands: ['Shapes', 'FNS'],
    industries: ['Cafes', 'Restaurants'],
    factors: ['Mirror Finish', 'Ergonomic Handle']
  },
  {
    id: 'cafes-beverage-blenders-dispensers',
    title: 'Commercial Barista Blenders & Beverage Dispensers',
    subtitle: 'Heavy-duty smoothie blenders, hot water urns & juice dispensers',
    details: 'Commercial Machinery · Serman, Kitchen Equipments',
    image: '/images/commercial_kitchen_equipment.jpg',
    category: 'Cafes',
    brands: ['Serman', 'Kitchen Equipments'],
    industries: ['Cafes', 'Hotels', 'Restaurants'],
    factors: ['Heavy Duty Performance', 'Energy Efficient']
  },
  {
    id: 'cafes-paper-disposables-straws',
    title: 'Cafe Disposables, Straws & Wooden Stirrers',
    subtitle: 'Kraft coffee sleeves, PLA biodegradable straws, stirrers & paper napkins',
    details: 'Eco-Friendly Paper & Wood · Fresh N Fine, Kimberly',
    image: '/images/cafe_disposables_straws.jpg',
    category: 'Cafes',
    brands: ['Fresh N Fine', 'Kimberly'],
    industries: ['Cafes', 'Restaurants', 'Catering'],
    factors: ['Eco-Friendly / Green', 'Food Grade Certified', 'Biodegradable']
  }
];

export const CATEGORY_FILTERS = [
  'Crockery',
  'Cutlery',
  'Linen',
  'Cafes',
  'Guest Amenities',
  'Kitchen Utensils',
  'House Keeping',
  'Cleaning Chemicals',
  'Engineering Equipments'
];

export const ABOUT_STATS = [
  { value: '15+', label: 'Years of Experience' },
  { value: '500+', label: 'Happy Clients' },
  { value: '10000+', label: 'Products Supplied' }
];

export const WHO_WE_SERVE: WhoWeServeItem[] = [
  {
    title: 'Hotels',
    description: 'Premium guest amenities, luxury linens and housekeeping hardware for boutique & chain hotels.',
    image: '/images/image__hotels__8af4967c.webp'
  },
  {
    title: 'Restaurants & Cafes',
    description: 'Commercial tableware, cutlery, heavy cookware and hygiene solutions for dining operations.',
    image: '/images/image__restaurants__6ff4e1ae.webp'
  },
  {
    title: 'Catering',
    description: 'Reliable banquetware, chaffing systems, catering vessels and bulk logistics for large events.',
    image: '/images/image__buffet___beverage_equipment__f2c7e5ac.webp'
  }
];

export const WHAT_WE_OFFER: OfferItem[] = [
  {
    number: '1',
    title: 'Comprehensive OS&E Portfolio',
    description: 'From dining essentials to commercial machinery, we supply a complete operating supplies and equipment range.'
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
  'crockery-dinewell': {
    skuPrefix: 'CR-DW / Dinewell Melamine',
    tagline: '100% pure food-grade melamine banquet & buffet dinnerware.',
    material: '100% Food-Grade Melamine Resin',
    finish: 'Glazed Porcelain-Like Scratch-Resistant Finish',
    galleryImages: [
      '/images/cardimage_b6bc00f1.webp',
      '/images/image__tableware___crockery__c6601dfa.webp',
      '/images/image__fine_dining__2ac60065.webp'
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
      '/images/image__tableware___crockery__a8a959b7.webp',
      '/images/image__hospitality_tableware__eab14684.webp',
      '/images/image__restaurant_setting__c005091f.webp'
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
      '/images/image__stainless_steel_brassware__69672dfd.webp',
      '/images/cardimage_ac51211f.webp',
      '/images/image__fine_dining__2ac60065.webp'
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
    skuPrefix: 'LN-HT / Hotel Luxury Towels',
    tagline: '550–650 GSM 100% combed cotton luxury hospitality towels.',
    material: '100% Ring-Spun Long-Staple Combed Cotton',
    finish: 'Double-Stitched Reinforced Hems & Terry Loop Weave',
    galleryImages: [
      '/images/luxury_hotel_linen.jpg',
      '/images/luxury_hotel_linen.jpg',
      '/images/luxury_hotel_linen.jpg'
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
    skuPrefix: 'AM-GA / Hotel Guest Amenities',
    tagline: 'Eco-conscious botanical room formulations with customizable hotel branding.',
    material: 'Natural Extracts, Paraben-Free, Biodegradable Surfactants',
    finish: 'Silkscreen Printed / Hot-Stamped Bottle & Soft Tubes',
    galleryImages: [
      '/images/image__guest_amenities_equipment__f4f6ec37.webp',
      '/images/cardimage_1dbd1171.webp',
      '/images/cardimage_4fdce090.webp'
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
      '/images/commercial_cleaning_chemicals.jpg',
      '/images/cardimage_4fdce090.webp',
      '/images/centerimage_f8709305.webp'
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

export const CONTACT_INFO = {
  company: 'Care4 Associates',
  addressLine1: 'Shanum, TC-26/1960, GPO Lane,',
  addressLine2: 'Statue, Thiruvananthapuram – 695 001,',
  addressLine3: 'Kerala, India.',
  fullAddress: 'Care4 Associates, Shanum, TC-26/1960, GPO Lane, Statue, Thiruvananthapuram – 695 001, Kerala, India.',
  emails: [
    'care4associate@gmail.com',
    'info@care4associates.com'
  ],
  landlines: [
    '+91 471 245 0977',
    '+91 471 247 5111',
    '+91 471 245 0978'
  ],
  mobiles: [
    '+91 99959 11830',
    '+91 93491 98950',
    '+91 75588 53330',
    '+91 99954 65830',
    '+91 98470 11830'
  ],
  mapEmbedUrl: 'https://maps.google.com/maps?q=Care4+Associates,+GPO+Lane,+Statue,+Thiruvananthapuram,+Kerala+695001&t=&z=16&ie=UTF8&iwloc=&output=embed',
  mapDirectionsUrl: 'https://www.google.com/maps/search/Care4+Associates,+GPO+Lane,+Statue,+Thiruvananthapuram,+Kerala+695001'
};

