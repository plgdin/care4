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
    image: '/images/product_catalog_hero_bright.jpg',
    alt: 'Hospitality tableware and equipment collection'
  },
  {
    id: 3,
    image: '/images/FineDining.png',
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
    subtitle: 'In-room soaps, slippers, dental kits & comforts.',
    image: '/images/hotel_bath_slippers.jpg'
  },
  {
    id: 'kitchen-utensils',
    title: 'Kitchen Utensils',
    subtitle: 'Heavy-gauge commercial cookware, chef knives & prep tools.',
    image: '/images/commercial_stockpots.jpg'
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
    id: 'kitchen-equipments',
    title: 'Kitchen Equipments',
    subtitle: 'Heavy duty commercial cooking ranges, chillers, ovens, fresh air & exhaust systems, industrial hood, griddles, fryers etc.',
    image: '/images/commercial_kitchen_equipment.jpg'
  }
];

export const BRANDS_ROWS: BrandItem[][] = [
  [
    { name: 'Dinewell', logo: '/images/dinewell_logo_clean.webp', scale: 0.92 },
    { name: 'Borosil', logo: '/images/borosil_logo_clean.svg', scale: 0.95 },
    { name: 'Ariane', logo: '/images/ariane_logo_clean.svg', scale: 1.0 },
    { name: 'Bharath Potteries', logo: '/images/bharath_potteries_logo_clean.webp', scale: 1.05 },
    { name: 'MILTON', logo: '/images/milton_logo_clean.webp', scale: 0.9 },
    { name: 'Prestige', logo: '/images/prestige_logo_clean.svg', scale: 0.95 }
  ],
  [
    { name: 'H&H', logo: '/images/h_h_logo_clean.webp', scale: 0.88 },
    { name: 'Diversey', logo: '/images/diversey_logo_clean.svg', scale: 1.0 },
    { name: 'Ocean', logo: '/images/ocean_logo_clean.svg', scale: 0.95 },
    { name: 'Cambro Nilkamal', logo: '/images/cambro_logo_clean.svg', scale: 0.92 },
    { name: 'FRESH N FINE', logo: '/images/fresh_n_fine_clean.webp', scale: 0.92 },
    { name: 'SAC Chemicals', logo: '/images/sac_chemicals_logo_clean.webp', scale: 0.95 }
  ],
  [
    { name: 'CONTA', logo: '/images/conta_logo_clean.webp', scale: 0.92 },
    { name: 'Kimberly-Clark', logo: '/images/kimberly_clark_logo_clean.webp', scale: 0.92 },
    { name: '3M', logo: '/images/3m_logo_clean.webp', scale: 0.85 },
    { name: 'Finware', logo: '/images/finware_logo_clean.svg', scale: 1.0 },
    { name: 'Supreme', logo: '/images/supreme_logo_clean.svg', scale: 1.0 },
    { name: 'Venus', logo: '/images/venus_logo_clean.svg', scale: 1.0 }
  ],
  [
    { name: 'Poly Guard', logo: '/images/poly_guard_logo_clean.svg', scale: 1.0 },
    { name: 'Rudra', logo: '/images/rudra_logo_clean.svg', scale: 1.0 },
    { name: 'Sujatha', logo: '/images/sujatha_logo_clean.svg', scale: 1.0 },
    { name: 'Zanuff Corvus', logo: '/images/zanuff_corvus_logo_clean.svg', scale: 1.0 },
    { name: 'KMW', logo: '/images/kmw_logo_clean.svg', scale: 1.0 },
    { name: 'Kenford', logo: '/images/kenford_logo_clean.svg', scale: 1.0 }
  ]
];

export const CATALOG_PRODUCTS: ProductCatalogCard[] = [
  {
    id: 'crockery-ariane',
    title: 'Fine Porcelain Tableware',
    subtitle: '',
    details: 'Tableware for serving meals and drinks in hospitality settings. fine porcelain tableware suits everyday dining and food presentation.',
    image: '/images/cardimage_b6bc00f1.webp',
    category: 'Crockery',
    brands: ['Ariane'],
    industries: [],
    factors: []
  },
  {
    id: 'crockery-arcoroc',
    title: 'Tableware & Drinkware',
    subtitle: '',
    details: 'Tableware for serving meals and drinks in hospitality settings. tableware and drinkware suits everyday dining and food presentation.',
    image: '/images/image__tableware___crockery__c6601dfa.webp',
    category: 'Crockery',
    brands: ['Arcoroc'],
    industries: [],
    factors: []
  },
  {
    id: 'crockery-stemware-arcoroc',
    title: 'Commercial Bar & Restaurant Stemware',
    subtitle: '',
    details: 'Tableware for serving meals and drinks in hospitality settings. commercial bar and restaurant stemware suits everyday dining and food presentation.',
    image: '/images/image__fine_dining__2ac60065.webp',
    category: 'Crockery',
    brands: ['Arcoroc'],
    industries: [],
    factors: []
  },
  {
    id: 'crockery-stemware-borosil',
    title: 'Commercial Bar & Restaurant Stemware',
    subtitle: '',
    details: 'Tableware for serving meals and drinks in hospitality settings. commercial bar and restaurant stemware suits everyday dining and food presentation.',
    image: '/images/image__restaurants__6ff4e1ae.webp',
    category: 'Crockery',
    brands: ['Borosil'],
    industries: [],
    factors: []
  },
  {
    id: 'crockery-bharat',
    title: 'Commercial Crockery',
    subtitle: 'Fine Ceramic Tableware',
    details: 'Tableware for serving meals and drinks in hospitality settings. Bharath Potteries commercial crockery suits everyday dining and food presentation.',
    image: '/images/ceramic_latte_cups.jpg',
    category: 'Crockery',
    brands: ['Bharath Potteries'],
    industries: [],
    factors: []
  },
  {
    id: 'crockery-borosil',
    title: 'Glassware & Opalware',
    subtitle: '',
    details: 'Tableware for serving meals and drinks in hospitality settings. glassware and opalware suits everyday dining and food presentation.',
    image: '/images/image__tableware___crockery__a8a959b7.webp',
    category: 'Crockery',
    brands: ['Borosil'],
    industries: [],
    factors: []
  },
  {
    id: 'crockery-cello',
    title: 'Hospitality Tableware',
    subtitle: '',
    details: 'Tableware for serving meals and drinks in hospitality settings. hospitality tableware suits everyday dining and food presentation.',
    image: '/images/image__hospitality_tableware__eab14684.webp',
    category: 'Crockery',
    brands: ['Cello'],
    industries: [],
    factors: []
  },
  {
    id: 'crockery-claycraft',
    title: 'Fine Tableware',
    subtitle: '',
    details: 'Tableware for serving meals and drinks in hospitality settings. clay craft fine tableware suits everyday dining and food presentation.',
    image: '/images/ceramic_claycraft_tableware.jpg',
    category: 'Crockery',
    brands: ['Claycraft Fine Tableware'],
    industries: [],
    factors: []
  },
  {
    id: 'crockery-dinewell',
    title: 'Dinnerware Collection',
    subtitle: 'Melamine Dinnerware',
    details: 'Tableware for serving meals and drinks in hospitality settings. dinnerware collection suits everyday dining and food presentation.',
    image: '/images/dinewell_melamine_platters.jpg',
    category: 'Crockery',
    brands: ['Dinewell'],
    industries: [],
    factors: []
  },
  {
    id: 'crockery-finware',
    title: '100% Melamine Collection',
    subtitle: 'Fine Forever',
    details: 'Fine Forever 100% pure food-grade melamine collection for hotels, restaurants, banquets and catering. Durable, break-resistant and elegant food presentation.',
    image: '/images/finware_melamine_collection.jpg',
    category: 'Crockery',
    brands: ['Finware'],
    industries: [],
    factors: []
  },
  {
    id: 'crockery-jcpl',
    title: 'Commercial Dinnerware',
    subtitle: '',
    details: 'Tableware for serving meals and drinks in hospitality settings. commercial dinnerware suits everyday dining and food presentation.',
    image: '/images/FineDining.png',
    category: 'Crockery',
    brands: ['JCPL'],
    industries: [],
    factors: []
  },
  {
    id: 'crockery-ocean',
    title: 'Commercial Glassware & Stemware',
    subtitle: 'Lead-Free Crystal Glass',
    details: 'Ocean lead-free crystal glassware & stemware collection: beer mugs, champagne flutes, coffee mugs, decanters, sundae cups, juice glasses, mixing bowls, pop jars, salad bowls, shot glasses, water & wine glasses.',
    image: '/images/image__restaurant_setting__c005091f.webp',
    category: 'Crockery',
    brands: ['Ocean'],
    industries: [],
    factors: []
  },
  {
    id: 'crockery-servewell',
    title: 'Melamine Tableware',
    subtitle: '100% Melamine Collection',
    details: 'Tableware for serving meals and drinks in hospitality settings. 100% melamine collection suits everyday dining, buffet and food presentation.',
    image: '/images/image__tableware___crockery__a8a959b7.webp',
    category: 'Crockery',
    brands: ['Servewell'],
    industries: [],
    factors: []
  },
  {
    id: 'crockery-superware',
    title: 'Heavy-Duty Buffetware',
    subtitle: '100% Melamine Collection',
    details: 'Tableware for serving meals and drinks in hospitality settings. 100% melamine collection suits everyday dining, buffet and food presentation.',
    image: '/images/dinewell_melamine_platters.jpg',
    category: 'Crockery',
    brands: ['Superware'],
    industries: [],
    factors: []
  },
  {
    id: 'crockery-union',
    title: 'Hospitality Glassware',
    subtitle: '',
    details: 'Tableware for serving meals and drinks in hospitality settings. hospitality glassware suits everyday dining and food presentation.',
    image: '/images/commercial_union_glassware.jpg',
    category: 'Crockery',
    brands: ['Union'],
    industries: [],
    factors: []
  },
  {
    id: 'crockery-v4',
    title: 'Banquet & Catering Tableware',
    subtitle: '100% Melamine Collection',
    details: 'Tableware for serving meals and drinks in hospitality settings. 100% melamine collection suits everyday dining, banquet and catering presentations.',
    image: '/images/FineDining.png',
    category: 'Crockery',
    brands: ['V 4'],
    industries: [],
    factors: []
  },
  {
    id: 'crockery-yeraa',
    title: 'Commercial Foodservice Glassware',
    subtitle: '',
    details: 'Tableware for serving meals and drinks in hospitality settings. yera commercial foodservice glassware suits everyday dining and food presentation.',
    image: '/images/image__hospitality_tableware__eab14684.webp',
    category: 'Crockery',
    brands: ['Yeraa'],
    industries: [],
    factors: []
  },
  {
    id: 'cutlery-fns',
    title: 'Luxury Cutlery Collection',
    subtitle: '',
    details: 'Dining utensils for serving and eating meals. luxury cutlery collection supports table settings in hospitality venues.',
    image: '/images/fns_luxury_cutlery.jpg',
    category: 'Cutlery',
    brands: ['FNS'],
    industries: [],
    factors: []
  },
  {
    id: 'cutlery-shapes',
    title: 'Commercial Flatware',
    subtitle: '',
    details: 'Dining utensils for serving and eating meals. commercial flatware supports table settings in hospitality venues.',
    image: '/images/cutlery_fork_spoon_knife.jpg',
    category: 'Cutlery',
    brands: ['Shapes'],
    industries: [],
    factors: []
  },
  {
    id: 'cutlery-supreme',
    title: 'Foodservice Cutlery',
    subtitle: '',
    details: 'Dining utensils for serving and eating meals. foodservice cutlery supports table settings in hospitality venues.',
    image: '/images/cutlery_fork_spoon_knife.jpg',
    category: 'Cutlery',
    brands: ['Supreme'],
    industries: [],
    factors: []
  },
  {
    id: 'cutlery-venus',
    title: 'Hospitality Cutlery',
    subtitle: '',
    details: 'Dining utensils for serving and eating meals. hospitality cutlery supports table settings in hospitality venues.',
    image: '/images/fns_luxury_cutlery.jpg',
    category: 'Cutlery',
    brands: ['Venus'],
    industries: [],
    factors: []
  },
  {
    id: 'linen-bath-mats',
    title: 'Bath Mats',
    subtitle: 'Naturally dry. Effortlessly clean.',
    details: 'Plush, quick-drying bath mats with a non-slip grip that keep bathroom floors dry, safe and comfortable.',
    image: '/images/linen/linen-bath-mats.jpg',
    category: 'Linen',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'linen-bath-towels',
    title: 'Bath Towels',
    subtitle: 'Purely absorbent. Naturally soft.',
    details: 'Fast-absorbing, quick-drying bath towels woven for everyday comfort and lasting freshness.',
    image: '/images/linen/linen-bath-towels.jpg',
    category: 'Linen',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'linen-bed-covers',
    title: 'Bed Covers',
    subtitle: 'Smooth, breathable luxury designed for deep rest.',
    details: 'Smooth, breathable bed covers with cool, airy weaves for comfortable sleep in every season.',
    image: '/images/linen/linen-bed-covers.jpg',
    category: 'Linen',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'linen-bed-sheets',
    title: 'Bed Sheets',
    subtitle: 'Pure comfort, for restful sleep.',
    details: 'Cool, crisp bed sheets woven from long-staple fibres for breathable softness and enduring strength.',
    image: '/images/linen/linen-bed-sheets.jpg',
    category: 'Linen',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'linen-carpets',
    title: 'Carpets',
    subtitle: 'Unmatched durability underfoot.',
    details: 'Plush, commercial-grade carpets that balance underfoot softness with enduring resilience.',
    image: '/images/linen/linen-carpets.jpg',
    category: 'Linen',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'linen-curtains',
    title: 'Curtains',
    subtitle: 'Draped in elegance. Designed for comfort.',
    details: 'Gracefully draped curtains with blackout and sheer options for privacy, light control and quiet comfort.',
    image: '/images/linen/linen-curtains.jpg',
    category: 'Linen',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'linen-cushions',
    title: 'Decorative Cushions',
    subtitle: 'Handpicked textures, crafted for everyday living.',
    details: 'Textured decorative cushions that bring warmth, personality and soft support to every seating area.',
    image: '/images/linen/linen-cushions.jpg',
    category: 'Linen',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'linen-decorative-throws',
    title: 'Decorative Throws',
    subtitle: 'Woven for warmth. Styled for living.',
    details: 'Softly textured throws that add warmth, colour and an inviting layer to beds, sofas and reading corners.',
    image: '/images/linen/linen-decorative-throws.jpg',
    category: 'Linen',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'linen-duvets',
    title: 'Duvets',
    subtitle: 'Soft. Plush. Perfect.',
    details: 'Lofty, plush duvets that give every bed a neat, inviting finish and a perfect night’s sleep.',
    image: '/images/linen/linen-duvets.jpg',
    category: 'Linen',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'linen-face-towels',
    title: 'Face Towels',
    subtitle: 'Softness your skin deserves.',
    details: 'Ultra-soft face towels woven for gentle comfort and reliable absorbency against delicate skin.',
    image: '/images/linen/linen-face-towels.jpg',
    category: 'Linen',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'linen-hand-towels',
    title: 'Hand Towels',
    subtitle: 'Gentle care in every touch.',
    details: 'Soft, highly absorbent hand towels that dry quickly and stay fresh between uses.',
    image: '/images/linen/linen-hand-towels.jpg',
    category: 'Linen',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'linen-mattress-protectors',
    title: 'Mattress Protectors',
    subtitle: 'Invisible protection, total comfort.',
    details: 'Fitted, machine-washable mattress protectors that shield every mattress from spills, allergens and daily wear.',
    image: '/images/linen/linen-mattress-protectors.jpg',
    category: 'Linen',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'linen-pillow-covers',
    title: 'Pillow Covers',
    subtitle: 'Pure white, perfect sleep.',
    details: 'Crisp white pillow covers with strong stitching that stay bright, wash after wash.',
    image: '/images/linen/linen-pillow-covers.jpg',
    category: 'Linen',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'linen-pillows',
    title: 'Pillows',
    subtitle: 'Sleep better. Wake happier.',
    details: 'Supportive pillows in soft, medium and firm options, filled to stay plump night after night.',
    image: '/images/linen/linen-pillows.jpg',
    category: 'Linen',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'linen-pool-towels',
    title: 'Pool Towels',
    subtitle: 'Soft. Thick. Poolside perfect.',
    details: 'Extra-large, super-absorbent pool towels in solid colours and stripes, made for poolside, beach and spa.',
    image: '/images/linen/linen-pool-towels.jpg',
    category: 'Linen',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'linen-rugs',
    title: 'Rugs',
    subtitle: 'Step into luxury.',
    details: 'Warm, elegant rugs in classic and modern designs, built for daily use and heavy foot traffic.',
    image: '/images/linen/linen-rugs.jpg',
    category: 'Linen',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'amenities-toilet-rolls-wcbands',
    title: 'Toilet Rolls & WC Bands',
    subtitle: '',
    details: 'toilet rolls and wc bands provides a useful in-room or bathroom item for hotel guests.',
    image: '/images/toilet_rolls_wc_bands.png',
    category: 'Guest Amenities',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'amenities-glass-covers-coasters',
    title: 'Glass Covers & Glass Coasters',
    subtitle: '',
    details: 'glass covers and glass coasters provides a useful in-room or bathroom item for hotel guests.',
    image: '/images/HotelAmenities.png',
    category: 'Guest Amenities',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'amenities-bathroom-kits',
    title: 'Bathroom Guest Kits',
    subtitle: '',
    details: 'bathroom guest kits provides a useful in-room or bathroom item for hotel guests.',
    image: '/images/bathroom_guest_kit.png',
    category: 'Guest Amenities',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'amenities-sewing-medical-kits',
    title: 'Sewing & Medical Kits',
    subtitle: '',
    details: 'sewing and medical kits provides a useful in-room or bathroom item for hotel guests.',
    image: '/images/sewing_medical_kits.png',
    category: 'Guest Amenities',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'amenities-guest-stationery',
    title: 'Guest Stationery & Folders',
    subtitle: '',
    details: 'guest stationery and folders provides a useful in-room or bathroom item for hotel guests.',
    image: '/images/guest_stationery_and_folders.png',
    category: 'Guest Amenities',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'amenities-table-sundries',
    title: 'Table & Guest Sundries',
    subtitle: '',
    details: 'table and guest sundries provides a useful in-room or bathroom item for hotel guests.',
    image: '/images/table_guest_sundries.png',
    category: 'Guest Amenities',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'amenities-liquids-soaps',
    title: 'Liquid Amenities & Soaps',
    subtitle: '',
    details: 'liquid amenities and soaps provides a useful in-room or bathroom item for hotel guests.',
    image: '/images/liquid_amenities_and_soap.png',
    category: 'Guest Amenities',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'amenities-hygiene-laundry-essentials',
    title: 'Hygiene Bags & Laundry Essentials',
    subtitle: '',
    details: 'hygiene bags and laundry essentials provides a useful in-room or bathroom item for hotel guests.',
    image: '/images/hygiene_bag_and_laundry_essentials.png',
    category: 'Guest Amenities',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'amenities-bath-slippers',
    title: 'Bath Slippers',
    subtitle: '',
    details: 'bath slippers provides a useful in-room or bathroom item for hotel guests.',
    image: '/images/hotel_bath_slippers.jpg',
    category: 'Guest Amenities',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-alltime-ingredient-bins',
    title: 'Ingredient Storage Bins',
    subtitle: '',
    details: 'ingredient storage bins supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/commercial_kitchen_prep_tools.jpg',
    category: 'Kitchen Utensils',
    brands: ['All Time'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-alltime-storage',
    title: 'Food Storage Containers',
    subtitle: '',
    details: 'food storage containers supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/cambro_food_pans.jpg',
    category: 'Kitchen Utensils',
    brands: ['All Time'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-anchor',
    title: 'Anchor Commercial Kitchen Utensils',
    subtitle: '',
    details: 'anchor commercial kitchen utensils supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/commercial_stockpots.jpg',
    category: 'Kitchen Utensils',
    brands: ['Anchor Utensils'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-bakers',
    title: 'Culinary Prep & Pastry Tools',
    subtitle: 'Commercial Baking & Pastry Collection',
    details: 'Professional culinary prep and pastry tools: stainless steel whisks, dough scrapers, silicone spatulas, baking sheets, pastry nozzles and cake rings.',
    image: '/images/commercial_bakery_pastry_tools.jpg',
    category: 'Kitchen Utensils',
    brands: ['Bakers'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-cambro-gn-pans',
    title: 'GN Food Pans',
    subtitle: '',
    details: 'gn food pans supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/cambro_food_pans.jpg',
    category: 'Kitchen Utensils',
    brands: ['Cambro Nilkamal'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-cambro-ingredient-bins',
    title: 'Ingredient Bins',
    subtitle: '',
    details: 'ingredient bins supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/cardimage_ac51211f.webp',
    category: 'Kitchen Utensils',
    brands: ['Cambro Nilkamal'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-chafing-mosaic',
    title: 'Commercial Roll-Top Chafing Dishes & Buffet Stations',
    subtitle: '',
    details: 'commercial roll-top chafing dishes and buffet stations supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/mosaic.png',
    category: 'Kitchen Utensils',
    brands: ['Mosaic'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-chafing-pradeep',
    title: 'Commercial Roll-Top Chafing Dishes & Buffet Stations',
    subtitle: '',
    details: 'commercial roll-top chafing dishes and buffet stations supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/commercial_stockpots.jpg',
    category: 'Kitchen Utensils',
    brands: ['Pradeep'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-godrej-cartini',
    title: 'Professional Knives',
    subtitle: '',
    details: 'professional knives supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/professional_knives_godrej.png',
    category: 'Kitchen Utensils',
    brands: ['Godrej Cartini'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-haccp-boards-alltime',
    title: 'HACCP Color-Coded Commercial Cutting Boards',
    subtitle: '',
    details: 'haccp color-coded commercial cutting boards supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/commercial_cutting_boards.jpg',
    category: 'Kitchen Utensils',
    brands: ['All Time'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-haccp-boards-cambro',
    title: 'HACCP Color-Coded Commercial Cutting Boards',
    subtitle: '',
    details: 'haccp color-coded commercial cutting boards supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/commercial_cutting_boards.jpg',
    category: 'Kitchen Utensils',
    brands: ['Cambro Nilkamal'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-hem',
    title: 'Commercial Ladles & Tools',
    subtitle: '',
    details: 'commercial ladles and tools supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/commercial_ladles_and_tools.png',
    category: 'Kitchen Utensils',
    brands: ['Hem'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-indigo',
    title: 'Commercial Kitchenware',
    subtitle: '',
    details: 'commercial kitchenware supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/commercial_kitchenware_indigo.png',
    category: 'Kitchen Utensils',
    brands: ['Indigo'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-kenford',
    title: 'Kitchen Prep Accessories',
    subtitle: '',
    details: 'kitchen prep accessories supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/kitchen_prep_accessories.png',
    category: 'Kitchen Utensils',
    brands: ['Kenford'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-kmw',
    title: 'Kitchen Prep Appliances',
    subtitle: '',
    details: 'kitchen prep appliances supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/kitchen_prep_appliances.png',
    category: 'Kitchen Utensils',
    brands: ['KMW'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-milton',
    title: 'Commercial Kitchenware',
    subtitle: '',
    details: 'commercial kitchenware supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/commercial_kitchenware_milton.png',
    category: 'Kitchen Utensils',
    brands: ['Milton'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-mosaic',
    title: 'Commercial Kitchen Vessels',
    subtitle: '',
    details: 'commercial kitchen vessels supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/commercial_kitchen_prep_tools.jpg',
    category: 'Kitchen Utensils',
    brands: ['Mosaic'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-polyguard-containers',
    title: 'Food Containers',
    subtitle: '',
    details: 'food containers supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/commercial_food_storage_containers.jpg',
    category: 'Kitchen Utensils',
    brands: ['Polyguard'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-polyguard-bins',
    title: 'Ingredient Bins',
    subtitle: '',
    details: 'ingredient bins supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/image__stainless_steel_brassware__69672dfd.webp',
    category: 'Kitchen Utensils',
    brands: ['Polyguard'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-pradeep',
    title: 'Catering Degchis & Vessels',
    subtitle: '',
    details: 'catering degchis and vessels supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/commercial_stockpots.jpg',
    category: 'Kitchen Utensils',
    brands: ['Pradeep'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-prestige',
    title: 'Commercial Cookware',
    subtitle: '',
    details: 'commercial cookware supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/commercial_stockpots.jpg',
    category: 'Kitchen Utensils',
    brands: ['Prestige'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-rena',
    title: 'Gastronorm Pans & Holloware',
    subtitle: '',
    details: 'gastronorm pans and holloware supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/gastronorm_pans_holloware.png',
    category: 'Kitchen Utensils',
    brands: ['Rena'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-rudra',
    title: 'Commercial Kitchenware',
    subtitle: '',
    details: 'commercial kitchenware supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/image__stainless_steel_brassware__69672dfd.webp',
    category: 'Kitchen Utensils',
    brands: ['Rudra'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-sujatha',
    title: 'Commercial Mixers & Blenders',
    subtitle: '',
    details: 'commercial mixers and blenders supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/commercial_mixers_blenders.jpg',
    category: 'Kitchen Utensils',
    brands: ['Sujatha'],
    industries: [],
    factors: []
  },
  {
    id: 'utensils-zanuff',
    title: 'Commercial Equipment',
    subtitle: '',
    details: 'commercial equipment supports food preparation, cooking, storage, or buffet service in professional kitchens.',
    image: '/images/commercial_equipment_zanuff_corvus.png',
    category: 'Kitchen Utensils',
    brands: ['Zanuff Corvus'],
    industries: [],
    factors: []
  },
  {
    id: 'housekeeping-cambro',
    title: 'Housekeeping Trolleys',
    subtitle: '',
    details: 'housekeeping trolleys helps staff clean, maintain, and restock guest and shared areas.',
    image: '/images/housekeeping_service_cart.jpg',
    category: 'House Keeping',
    brands: ['Cambro Nilkamal'],
    industries: [],
    factors: []
  },
  {
    id: 'housekeeping-conta',
    title: 'Utility Bins & Segregation',
    subtitle: '',
    details: 'utility bins and segregation helps staff clean, maintain, and restock guest and shared areas.',
    image: '/images/image_3_c35c9821.webp',
    category: 'House Keeping',
    brands: ['Conta'],
    industries: [],
    factors: []
  },
  {
    id: 'housekeeping-dabur',
    title: 'Facility Hygiene & Air Fresheners',
    subtitle: '',
    details: 'facility hygiene and air fresheners helps staff clean, maintain, and restock guest and shared areas.',
    image: '/images/dabur.png',
    category: 'House Keeping',
    brands: ['Dabur'],
    industries: [],
    factors: []
  },
  {
    id: 'housekeeping-familyplastic',
    title: 'Hospitality Bins & Carts',
    subtitle: '',
    details: 'hospitality bins and carts helps staff clean, maintain, and restock guest and shared areas.',
    image: '/images/housekeeping_service_cart.jpg',
    category: 'House Keeping',
    brands: ['Family Plastic'],
    industries: [],
    factors: []
  },
  {
    id: 'housekeeping-gala',
    title: 'Professional Cleaning Tools',
    subtitle: '',
    details: 'professional cleaning tools helps staff clean, maintain, and restock guest and shared areas.',
    image: '/images/image__cleaning_equipment___janitorial__b009223f.webp',
    category: 'House Keeping',
    brands: ['Gala'],
    industries: [],
    factors: []
  },
  {
    id: 'housekeeping-hit',
    title: 'Commercial Pest & Insect Solutions',
    subtitle: '',
    details: 'commercial pest and insect solutions helps staff clean, maintain, and restock guest and shared areas.',
    image: '/images/pest_control_and_pesticides.png',
    category: 'House Keeping',
    brands: ['Hit'],
    industries: [],
    factors: []
  },
  {
    id: 'housekeeping-kimberly',
    title: 'Professional Paper Products & Dispensers',
    subtitle: '',
    details: 'clark professional paper and dispensers helps staff clean, maintain, and restock guest and shared areas.',
    image: '/images/paper_products_dispensers.jpg',
    category: 'House Keeping',
    brands: ['Kimberly'],
    industries: [],
    factors: []
  },
  {
    id: 'housekeeping-premier',
    title: 'Commercial Tissues & Dispensers',
    subtitle: '',
    details: 'commercial tissues and dispensers helps staff clean, maintain, and restock guest and shared areas.',
    image: '/images/centerimage_f8709305.webp',
    category: 'House Keeping',
    brands: ['Premier'],
    industries: [],
    factors: []
  },
  {
    id: 'housekeeping-fresh-n-fine',
    title: 'Tissues & Dispensers',
    subtitle: '',
    details: 'fresh n fine supplies facial tissues, toilet tissue, napkins and tissue dispensers for guest rooms, washrooms and shared spaces.',
    image: '/images/fresh_n_fine_tissues_and_dispensers.png',
    category: 'House Keeping',
    brands: ['Fresh N Fine'],
    industries: [],
    factors: []
  },
  {
    id: 'housekeeping-reckitt-sanitation',
    title: 'Professional Infection Control & Disinfection',
    subtitle: '',
    details: 'professional infection control and disinfection helps staff clean, maintain, and restock guest and shared areas.',
    image: '/images/reckitt.png',
    category: 'House Keeping',
    brands: ['Reckitt'],
    industries: [],
    factors: []
  },
  {
    id: 'housekeeping-roots',
    title: 'Commercial Floor Machines & Tools',
    subtitle: '',
    details: 'commercial floor machines and tools helps staff clean, maintain, and restock guest and shared areas.',
    image: '/images/roots_floor_machines.png',
    category: 'House Keeping',
    brands: ['Roots'],
    industries: [],
    factors: []
  },
  {
    id: 'housekeeping-skylark-floorcare',
    title: 'Professional Mops, Squeegees & Floor Care',
    subtitle: '',
    details: 'professional mops, squeegees and floor care helps staff clean, maintain, and restock guest and shared areas.',
    image: '/images/professional_mops_squeegees_floor_care.png',
    category: 'House Keeping',
    brands: ['Skylark'],
    industries: [],
    factors: []
  },
  {
    id: 'chemicals-diversey',
    title: 'Professional Cleaning Concentrates',
    subtitle: '',
    details: 'professional cleaning concentrates is used for routine cleaning and hygiene tasks in hospitality and food-service spaces.',
    image: '/images/cleaning_concentrates.png',
    category: 'Cleaning Chemicals',
    brands: ['Diversey'],
    industries: [],
    factors: []
  },
  {
    id: 'chemicals-sac',
    title: 'Commercial Hygiene Chemicals',
    subtitle: '',
    details: 'commercial hygiene chemicals is used for routine cleaning and hygiene tasks in hospitality and food-service spaces.',
    image: '/images/image__cleaning_chemicals__b85bdd2d.webp',
    category: 'Cleaning Chemicals',
    brands: ['SAC'],
    industries: [],
    factors: []
  },
  {
    id: 'chemicals-sdb-biotic',
    title: 'Eco-Enzyme & Kitchen Hygiene Concentrates',
    subtitle: '',
    details: 'eco-enzyme and kitchen hygiene concentrates is used for routine cleaning and hygiene tasks in hospitality and food-service spaces.',
    image: '/images/eco_enzyme_kitchen_hygiene_concentrates.png',
    category: 'Cleaning Chemicals',
    brands: ['SDB Biotic'],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-commercial-gas-ranges',
    title: 'Commercial Gas Ranges',
    subtitle: '',
    details: 'commercial gas ranges is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/gas_range.png',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-induction-cookers',
    title: 'Induction Cookers',
    subtitle: '',
    details: 'induction cookers is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/commercial_induction_cookers.jpg',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-dosa-plates',
    title: 'Dosa Plate / Dosa Tawa',
    subtitle: '',
    details: 'A heavy cast-iron dosa plate built for even heat and crisp, golden dosas in commercial kitchens.',
    image: '/images/commercial_dosa_plates.jpg',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-griddles',
    title: 'Griddles',
    subtitle: '',
    details: 'griddles is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/griddles.png',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-commercial-refrigerators',
    title: 'Commercial Refrigerators',
    subtitle: '',
    details: 'commercial refrigerators is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/commercial_refrigeration_units.jpg',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-deep-freezers',
    title: 'Deep Freezers',
    subtitle: '',
    details: 'deep freezers is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/deep_freezer.png',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-undercounter-chillers',
    title: 'Undercounter Chillers',
    subtitle: '',
    details: 'undercounter chillers is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/undercounter_chillers.png',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-display-counters',
    title: 'Display Counters',
    subtitle: '',
    details: 'display counters is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/display_counter.png',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-shawarma-machine',
    title: 'Shawarma Machine',
    subtitle: '',
    details: 'shawarma machine is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/commercial_shawarma_machine_v2.jpg',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-chicken-grill-machine',
    title: 'Chicken Grill Machine',
    subtitle: '',
    details: 'chicken grill machine is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/chicken_grill_machine.png',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-dough-kneader',
    title: 'Dough Kneader',
    subtitle: '',
    details: 'dough kneader is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/dough_kneader.png',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-vegetable-cutter',
    title: 'Vegetable Cutter',
    subtitle: '',
    details: 'vegetable cutter is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/commercial_vegetable_cutter.jpg',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-pulverizer',
    title: 'Pulverizer',
    subtitle: '',
    details: 'pulverizer is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/commercial_pulverizer.jpg',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-meat-mincer',
    title: 'Meat Mincer',
    subtitle: '',
    details: 'meat mincer is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/commercial_meat_mincer.jpg',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-planetary-mixer',
    title: 'Planetary Mixer',
    subtitle: '',
    details: 'planetary mixer is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/commercial_planetary_mixer_v2.jpg',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-deck-oven',
    title: 'Deck Oven',
    subtitle: '',
    details: 'deck oven is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/deck_oven.png',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-convection-oven',
    title: 'Convection Oven',
    subtitle: '',
    details: 'convection oven is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/convection_oven.png',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-pizza-oven',
    title: 'Pizza Oven',
    subtitle: '',
    details: 'pizza oven is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/commercial_pizza_oven_v2.jpg',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-dishwasher',
    title: 'Dishwasher',
    subtitle: '',
    details: 'dishwasher is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/dishwasher.png',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-water-cooler',
    title: 'Water Cooler',
    subtitle: '',
    details: 'water cooler is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/commercial_water_cooler.jpg',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-ice-cube-machine',
    title: 'Ice Cube Machine',
    subtitle: '',
    details: 'ice cube machine is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/commercial_ice_cube_machine.jpg',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-industrial-hood',
    title: 'Industrial Hood',
    subtitle: '',
    details: 'industrial hood is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/industrial_hood.png',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-fresh-air-exhaust',
    title: 'Fresh Air & Exhaust Systems',
    subtitle: '',
    details: 'fresh air and exhaust systems is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/commercial_exhaust_hood.jpg',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-ss-tables-sinks',
    title: 'SS Tables & Sinks',
    subtitle: '',
    details: 'ss tables and sinks is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/KitchenEquipment.png',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  },
  {
    id: 'engineering-fryers',
    title: 'Fryers',
    subtitle: '',
    details: 'fryers is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
    image: '/images/fryers.png',
    category: 'Kitchen Equipments',
    brands: [],
    industries: [],
    factors: []
  }
];


/* ── Linen: one tagline + short write-up per item (no brands, no catalogues) ── */
export interface LinenProductDetail {
  tagline: string;
  writeup: string[];
}

export const LINEN_PRODUCT_DETAILS: Record<string, LinenProductDetail> = {
  'linen-bath-mats': {
    tagline: 'Naturally dry. Effortlessly clean.',
    writeup: [
      'Quickly soaks up moisture to keep your bathroom floors dry and puddle-free.',
      'Features a non-slip grip to prevent slips and falls on wet tiles.',
      'Offers a soft, warm surface for your feet the moment you step out of the shower.',
      'Crafted to blend seamlessly with any bathroom decor.',
      'Designed for everyday durability and easy maintenance.'
    ]
  },
  'linen-bath-towels': {
    tagline: 'Purely absorbent. Naturally soft.',
    writeup: [
      'Quickly soaks up moisture to leave you dry and refreshed after every shower.',
      'Dries fast between uses, staying fresh and free from musty odours.',
      'Crafted from sustainable fibres that feel gentle on your skin.'
    ]
  },
  'linen-bed-covers': {
    tagline: 'Smooth, breathable luxury designed for deep rest.',
    writeup: [
      'Designed to elevate your everyday sleep.',
      'Cool, airy weaves provide comfortable sleep across every season.',
      'Classic whites and calming neutrals pair easily with any bedding.'
    ]
  },
  'linen-bed-sheets': {
    tagline: 'Pure comfort, for restful sleep.',
    writeup: [
      'Redefine your nightly rest with the cool, crisp elegance of a luxury suite.',
      'Woven from long-staple fibres that balance breathable softness with enduring strength.'
    ]
  },
  'linen-carpets': {
    tagline: 'Unmatched durability underfoot.',
    writeup: [
      'Brings plush comfort and enduring sophistication to your interiors.',
      'Crafted to balance underfoot softness with commercial-grade resilience, each piece anchors your room with quiet elegance.'
    ]
  },
  'linen-curtains': {
    tagline: 'Draped in elegance. Designed for comfort.',
    writeup: [
      'Transform any room into a calm, private retreat.',
      'Tailored for a graceful drape and superior light control, adding effortless style and quiet comfort to your windows.',
      'Available in room-darkening blackout weaves for restful sleep and airy sheers for soft, diffused daylight.',
      'Offered in calming neutrals, subtle linens and lustrous weaves to complement your bedding and carpets.'
    ]
  },
  'linen-cushions': {
    tagline: 'Handpicked textures, crafted for everyday living.',
    writeup: [
      'Thoughtfully designed to blend everyday comfort with effortless style, each piece brings warmth, texture and personality to your home.',
      'Crafted for both beauty and relaxation, these cushions offer soft back and neck support whether you are reading or unwinding.'
    ]
  },
  'linen-decorative-throws': {
    tagline: 'Woven for warmth. Styled for living.',
    writeup: [
      'Woven to balance visual appeal with cosy comfort, each piece invites you to relax in style.'
    ]
  },
  'linen-duvets': {
    tagline: 'Soft. Plush. Perfect.',
    writeup: [
      'Creates rooms that feel luxurious, look neat, and are made for comfort, durability and a perfect night’s sleep.',
      'Gives beds a neat, plush, inviting look.',
      'Available in Single, Double, Queen and King sizes, in a range of GSM and fill options.'
    ]
  },
  'linen-face-towels': {
    tagline: 'Softness your skin deserves.',
    writeup: [
      'Elevate your daily skincare and cleansing routine with a collection of ultra-soft face towels.',
      'Skilfully woven for gentle comfort and reliable absorbency, each towel feels soothing against delicate skin.'
    ]
  },
  'linen-hand-towels': {
    tagline: 'Gentle care in every touch.',
    writeup: [
      'Woven for gentle comfort and quick absorbency.',
      'Wicks away moisture effortlessly and dries fresh between uses.',
      'Upgrade your everyday cleansing ritual with ultra-soft hand towels.'
    ]
  },
  'linen-mattress-protectors': {
    tagline: 'Invisible protection, total comfort.',
    writeup: [
      'Commercial-grade mattress protectors act as an invisible shield against spills, sweat, allergens and daily wear, keeping every room fresh, hygienic and guest-ready.',
      'Fitted style, easy to put on and remove, and machine washable for daily use.'
    ]
  },
  'linen-pillow-covers': {
    tagline: 'Pure white, perfect sleep.',
    writeup: [
      'Gives a finishing touch to a perfectly made bed.',
      'Fresh white covers stay bright, wash after wash.',
      'Strong stitching, easy to wash and long-lasting.',
      'Available in Standard and King sizes, in cotton and polycotton options to suit every room.'
    ]
  },
  'linen-pillows': {
    tagline: 'Sleep better. Wake happier.',
    writeup: [
      'Designed to give guests the perfect balance of softness and support.',
      'High-quality fill that doesn’t go flat.',
      'Available in soft, medium and firm options, in Standard and King sizes to suit every room and every guest.',
      'Comfort they remember, and the sleep they deserve.'
    ]
  },
  'linen-pool-towels': {
    tagline: 'Soft. Thick. Poolside perfect.',
    writeup: [
      'Extra large and thick for full coverage.',
      'Super absorbent, dries fast and easy to wash.',
      'Available in solid colours and striped designs, in 100% cotton and cotton-rich options.',
      'Perfect for poolside, beach and spa.'
    ]
  },
  'linen-rugs': {
    tagline: 'Step into luxury.',
    writeup: [
      'Adds warmth, elegance and a premium feel to every room.',
      'Durable for daily use and heavy foot traffic.',
      'Available in different sizes, colours and designs — from classic to modern — to match rooms, corridors and lobbies.'
    ]
  }
};

export function linenDetailFor(productId: string): LinenProductDetail | null {
  return LINEN_PRODUCT_DETAILS[productId] ?? null;
}

/* ── Kitchen Equipments: client tagline + short write-up per item ───────── */
export const KITCHEN_PRODUCT_DETAILS: Record<string, LinenProductDetail> = {
  'engineering-chicken-grill-machine': {
    tagline: 'Grill it right. Every time.',
    writeup: [
      'Even heat, golden crisp and juicy perfection, crafted for professional kitchens.',
      'A motorised rotisserie turns every bird evenly for consistent colour and succulence.',
      'Food-grade stainless steel body, built for high-volume service and easy daily cleaning.'
    ]
  },
  'engineering-commercial-gas-ranges': {
    tagline: 'High flame. Fast cooking.',
    writeup: [
      'Engineered to outlast the busiest shift.',
      'Cook more. Serve faster. Taste better.',
      'High-pressure brass burners deliver a fast, even flame with gas safety built in.'
    ]
  },
  'engineering-commercial-refrigerators': {
    tagline: 'Freshness that never fades.',
    writeup: [
      'Powerful cooling, spacious storage and hygienic design, built to keep every ingredient fresh.',
      'Fan-assisted cooling holds an even temperature across every shelf, with adjustable digital control.',
      'A heavy-duty compressor and food-grade stainless steel body stand up to daily kitchen use.'
    ]
  },
  'engineering-convection-oven': {
    tagline: 'Built for culinary excellence.',
    writeup: [
      'Uniform hot airflow for flawless baking, perfect results every time.',
      'A reversible fan circulates heat evenly across every tray for consistent colour and rise.',
      'Toughened glass view windows and adjustable digital control keep every batch easy to manage.'
    ]
  },
  'engineering-deck-oven': {
    tagline: 'Bake like a master.',
    writeup: [
      'Stone deck base for crispy crust, even baking and authentic flavour in every bake.',
      'Top and bottom heating gives breads, pizzas and pastries a professional finish.',
      'Heavy-duty stainless steel construction with toughened glass doors and easy-clean decks.'
    ]
  },
  'engineering-deep-freezers': {
    tagline: 'Stock up with confidence.',
    writeup: [
      'Powerful, uniform cooling for long-lasting freshness, fast freezing and safe storage.',
      'Thick insulation holds temperature through busy service and power fluctuations.',
      'A lockable, easy-clean interior keeps bulk stock organised and hygienic.'
    ]
  },
  'engineering-dishwasher': {
    tagline: 'Spotless wash. Every time.',
    writeup: [
      'Powerful hot-water wash and hygienic rinse leave dishes sparkling clean.',
      'Fast, easy cycles keep glassware, crockery and cutlery moving through busy service.',
      'Stainless steel construction and simple controls make daily operation effortless.'
    ]
  },
  'engineering-display-counters': {
    tagline: 'Display that sells.',
    writeup: [
      'Crystal-clear glass display, perfect temperature and elegant design showcase your food beautifully.',
      'Even, fan-assisted cooling keeps pastries, desserts and savouries fresh through the day.',
      'Slim stainless steel body with easy-glide glass doors and bright, even presentation lighting.'
    ]
  },
  'engineering-dosa-plates': {
    tagline: 'Seasoned for perfection, made for generations.',
    writeup: [
      'Heavy cast iron with even heat distribution and a smooth finish, built for crispy, golden dosas.',
      'The thick plate holds heat steadily, so every dosa cooks evenly from centre to edge.',
      'A traditional, durable workhorse for breakfast service, canteens and live counters.'
    ]
  },
  'engineering-dough-kneader': {
    tagline: 'Perfect dough, in minutes.',
    writeup: [
      'Heavy-duty motor, stainless steel bowl and uniform kneading deliver a perfectly consistent texture, batch after batch.',
      'A spiral hook mixes and kneads evenly, cutting preparation time in a busy bakery.',
      'Sturdy construction and simple controls make daily dough production reliable and repeatable.'
    ]
  }
};

/* ── Guest Amenities: client tagline + short write-up per item ───────────── */
export const GUEST_PRODUCT_DETAILS: Record<string, LinenProductDetail> = {
  'amenities-toilet-rolls-wcbands': {
    tagline: 'Fresh. Sealed. Perfect.',
    writeup: [
      'Soft rolls and sealed bands make every bathroom feel brand new, every time.',
      'Soft, strong tissue with a clean, hygienic finish that guests notice.',
      'WC bands show the room has been sanitised and is ready for the next guest.'
    ]
  },
  'amenities-glass-covers-coasters': {
    tagline: 'A cleaner table. A classier stay.',
    writeup: [
      'Keep every glass and cup dust-free, and every table spotless.',
      'Glass covers protect in-room glassware between services, while absorbent coasters protect polished surfaces.',
      'Washable, reusable and finished in calm, neutral tones.'
    ]
  },
  'amenities-bathroom-kits': {
    tagline: 'Complete care. One perfect kit.',
    writeup: [
      'From shampoo to shaving kit, everything your guest needs, freshly packed.',
      'A single, neatly presented kit keeps the bathroom stocked and guest-ready.',
      'Available with gentle, aloe vera or herbal formulations to suit your property.'
    ]
  },
  'amenities-sewing-medical-kits': {
    tagline: 'Ready for every little need.',
    writeup: [
      'A quick fix for every little emergency, and first-aid essentials that are safe and ready.',
      'Compact, travel-friendly kits packed in tamper-proof pouches or boxes.',
      'A thoughtful in-room detail that guests appreciate exactly when they need it.'
    ]
  },
  'amenities-guest-stationery': {
    tagline: 'Small paper. Big impression.',
    writeup: [
      'Letterhead, notepad and folder — everything your guest needs, neatly placed.',
      'Premium paper and durable folders present your property with quiet professionalism.',
      'Plain, printed or embossed with your hotel identity.'
    ]
  },
  'amenities-table-sundries': {
    tagline: 'Thoughtful details. Effortless comfort.',
    writeup: [
      'Curated table and guest sundries, crafted for refined stays and unmatched comfort.',
      'Napkins, coasters, paper mats and condiments finish the table; grooming essentials finish the room.',
      'Hygienic, disposable and neatly presented for daily service.'
    ]
  },
  'amenities-liquids-soaps': {
    tagline: 'Gentle care. Lasting freshness.',
    writeup: [
      'Soft on skin, rich in fragrance, fresh and relaxing.',
      'pH-balanced, paraben-free formulations in guest bottles or dispensers.',
      'Available in mild, herbal, lavender and jasmine fragrances to match your property.'
    ]
  },
  'amenities-hygiene-laundry-essentials': {
    tagline: 'Clean. Fresh. Cared for.',
    writeup: [
      'Discreet disposal and fresh clothes for a perfect stay.',
      'Hygiene bags and laundry forms are individually packed for hygiene and easy handling.',
      'Drawstring laundry bags and hanger tags keep the guest laundry process simple and neat.'
    ]
  },
  'amenities-bath-slippers': {
    tagline: 'Grip, every step.',
    writeup: [
      'A non-slip grip sole, fast-draining waterproof EVA and an ergonomic cushioned footbed.',
      'Ultra-lightweight and comfortable for bathrooms, showers, pools and spas.',
      'Open-toe or closed-toe styles, finished in clean hotel neutrals.'
    ]
  }
};

/* ── Section tagline + short write-up shown above the category grid ─────── */
export const SECTION_INTROS: Record<string, { tagline: string; writeup: string }> = {
  'Kitchen Equipments': {
    tagline: 'Built for the busiest kitchens.',
    writeup:
      'From heavy-duty cooking ranges and ovens to refrigeration, dishwashing and ventilation, we supply a complete commercial kitchen package — specified, delivered and supported across Kerala.'
  },
  'Guest Amenities': {
    tagline: 'Every detail your guests notice.',
    writeup:
      'A complete in-room collection — bathroom kits, glass covers, stationery, slippers and soaps — chosen for comfort, hygiene and quiet luxury.'
  }
};

/** Copy for the brand-free ranges: Linen, Guest Amenities and Kitchen Equipments. */
export function productCopyFor(productId: string): LinenProductDetail | null {
  return (
    LINEN_PRODUCT_DETAILS[productId] ??
    GUEST_PRODUCT_DETAILS[productId] ??
    KITCHEN_PRODUCT_DETAILS[productId] ??
    null
  );
}


export const CATEGORY_FILTERS = [
  'Crockery',
  'Cutlery',
  'Linen',
  'Guest Amenities',
  'Kitchen Utensils',
  'House Keeping',
  'Cleaning Chemicals',
  'Kitchen Equipments'
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
    title: 'One-Stop Solution',
    description: 'From a teaspoon to a full kitchen project — complete hospitality operating supplies and equipment under one roof.'
  },
  {
    number: '2',
    title: 'Premium Brands & Quality Assured',
    description: 'Authorized distribution of India’s and global leading brands with certified commercial durability and hygiene standards.'
  },
  {
    number: '3',
    title: 'Bulk Supply at Best Wholesale Price',
    description: 'Direct institutional wholesale pricing, reliable volume supply, and transparent commercial procurement rates.'
  },
  {
    number: '4',
    title: 'Pan-Kerala Delivery & After-Sales Support',
    description: 'Prompt logistics across Kerala and neighbouring states backed by dedicated service technicians and maintenance support.'
  },
  {
    number: '5',
    title: 'Complete Project Supply',
    description: 'Full commercial kitchen equipment packages for new hotels, resorts, restaurants, and cloud kitchens — supplied, delivered, and backed by after-sales support.'
  },
  {
    number: '6',
    title: 'Expert Consultation for New Setups',
    description: 'Professional layout planning, equipment sizing, and par-level budgeting for new hotels, resorts, restaurants, and cloud kitchens.'
  }
];

export const OFFER_TAGLINE = "We Don't Just Supply Equipment, We Build Kitchens that Perform.";

/** Industry segment choices shared by the contact + quote form dropdowns.
 *  Mirrors the served sectors shown in ClientMarquee (SERVED_SECTORS). */
export const INDUSTRY_OPTIONS: { value: string; label: string }[] = [
  { value: 'Hotels & Resorts', label: 'Hotels & Resorts' },
  { value: 'Restaurants & Cafes', label: 'Restaurants & Cafes' },
  { value: 'Cloud Kitchens', label: 'Cloud Kitchens' },
  { value: 'Catering', label: 'Catering Companies & Banquets' },
  { value: 'Hospitals', label: 'Hospitals & Healthcare' },
  { value: 'Industrial Canteens', label: 'Industrial & Institutional Canteens' },
  { value: 'Homestays & Retreats', label: 'Homestays & Retreat Centres' },
  { value: 'Other', label: 'Other' }
];

export interface ProductHighlight {
  label: string;
  value: string;
}

export interface ProductDetailInfo {
  tagline: string;
  galleryImages: string[];
  highlights: ProductHighlight[];
  /** Item-only specification rows (no Product / Classification / Brand). */
  features?: ProductHighlight[];
}

/**
 * Client-supplied "Features / Specifications" for Linen, Guest Amenities and
 * the Kitchen Equipments items documented so far. These replace the draft
 * specs generated below, and are shown in their own table in the modal.
 */
const SPEC_OVERRIDES: Record<string, ProductHighlight[]> = {
  /* ── Linen ─────────────────────────────────────────────────────────── */
  'linen-bath-mats': [
    { label: 'Size', value: 'Extra Large' },
    { label: 'Colour', value: 'Clean White / Soft Colours — fresh & neat' },
    { label: 'Fabric', value: '100% Cotton / Cotton Rich — soft on skin, gentle for all guests' },
    { label: 'Feel', value: 'Thick & Plush — soft, cushioned feel underfoot' },
    { label: 'Fit', value: 'Non-slip backing — stays in place, safe for guests' },
    { label: 'Durability', value: 'Strong & long lasting — withstands daily hotel washing' },
    { label: 'Maintenance', value: 'Easy to wash, dry & fold — no fading, no shrinking' },
    { label: 'Look', value: 'Clean, fresh & luxury finish' }
  ],
  'linen-bath-towels': [
    { label: 'Size', value: 'Extra Large' },
    { label: 'Colour', value: 'Pure White / Soft Colours' },
    { label: 'Fabric', value: '100% Cotton / Cotton Rich — soft, smooth & breathable' },
    { label: 'Feel', value: 'Thick & Plush — soft and fluffy, gentle on skin' },
    { label: 'Fit', value: 'Full body coverage — wraps fully after bath or shower' },
    { label: 'Durability', value: 'Strong & long lasting — withstands daily hotel washing' },
    { label: 'Maintenance', value: 'Easy to wash, dry & fold — no fading, no shrinking' },
    { label: 'Look', value: 'Clean, fresh & neat' }
  ],
  'linen-bed-covers': [
    { label: 'Size', value: 'Single, Double, Queen & King' },
    { label: 'Colour', value: 'Pure White / Soft Colours / Prints' },
    { label: 'Fabric', value: '100% Cotton / Cotton Percale — soft, smooth & breathable' },
    { label: 'Feel', value: 'Cool & comfortable — soft on skin, gentle for all guests' },
    { label: 'Fit', value: 'Perfect fit — covers the bed fully, no slipping, tucked neatly' },
    { label: 'Durability', value: 'Strong & long lasting — withstands daily hotel washing' },
    { label: 'Maintenance', value: 'Easy to wash & iron — quick dry, no fading, no shrinking' },
    { label: 'Look', value: 'Clean, fresh & neat — gives the bed a luxury finish' }
  ],
  'linen-bed-sheets': [
    { label: 'Size', value: 'Single, Double, Queen & King — flat & fitted' },
    { label: 'Colour', value: 'Pure White / Crisp White — bright white that stays white' },
    { label: 'Fabric', value: '100% Cotton / Cotton Percale' },
    { label: 'Feel', value: 'Cool & comfortable — soft on skin, gentle for all guests' },
    { label: 'Fit', value: 'Deep-pocket fitted or flat sheet that tucks neatly, no slipping' },
    { label: 'Durability', value: 'Strong & long lasting — withstands daily hotel washing' },
    { label: 'Maintenance', value: 'Easy to wash & iron — quick dry, no fading, no shrinking' },
    { label: 'Look', value: 'Clean, fresh & neat — gives the bed a luxury finish' }
  ],
  'linen-carpets': [
    { label: 'Size', value: 'Standard runner, room size & custom — 2×3, 4×6, 5×7 ft and wall-to-wall' },
    { label: 'Colour', value: 'Rich colours / patterns — no fading, stays fresh' },
    { label: 'Fabric', value: 'Wool / Nylon / Polyester Blend — soft, dense & breathable' },
    { label: 'Feel', value: 'Soft & plush — cushioned underfoot, comfortable for guests' },
    { label: 'Fit', value: 'Non-slip backing — lays flat, no curling or slipping' },
    { label: 'Durability', value: 'Strong & long lasting — withstands heavy foot traffic' },
    { label: 'Maintenance', value: 'Easy to clean — vacuum & shampoo, no fading, no shedding' },
    { label: 'Look', value: 'Rich, elegant & neat — gives lobby and room a luxury look' }
  ],
  'linen-cushions': [
    { label: 'Size', value: 'Standard — 16×16, 18×18, 20×20 inch' },
    { label: 'Colour', value: 'Assorted colours / prints — bright, stays fresh' },
    { label: 'Fabric', value: 'Cotton / Cotton Blend / Velvet' },
    { label: 'Feel', value: 'Soft & plush — comfortable, gentle for all guests' },
    { label: 'Fit', value: 'Zip / envelope closure for a neat look, no slipping' },
    { label: 'Durability', value: 'Strong & long lasting — withstands daily hotel use & washing' },
    { label: 'Maintenance', value: 'Easy to wash & dry — no fading, no shrinking' },
    { label: 'Look', value: 'Stylish, fresh & neat — gives sofa and bed a luxury finish' }
  ],
  'linen-decorative-throws': [
    { label: 'Size', value: 'Large — 50×70 inch' },
    { label: 'Colour', value: 'Assorted colours' },
    { label: 'Fabric', value: 'Cotton / Cotton Blend / Knitted — soft' },
    { label: 'Feel', value: 'Soft & cosy — warm, comfortable, gentle on skin' },
    { label: 'Fit', value: 'Sits neatly on sofa and bed, no slipping' },
    { label: 'Durability', value: 'Strong & long lasting — withstands daily hotel use & washing' },
    { label: 'Maintenance', value: 'Easy to wash, dry & fold — no fading, no shrinking' },
    { label: 'Look', value: 'Stylish, fresh & neat — gives the room a luxury finish' }
  ],
  'linen-duvets': [
    { label: 'Size', value: 'Single, Double, Queen & King' },
    { label: 'Colour', value: 'Pure White / Crisp White — bright white' },
    { label: 'Fabric', value: '100% Cotton / Microfiber — soft, smooth & breathable' },
    { label: 'Feel', value: 'Soft & fluffy — lightweight, warm & comfortable for all guests' },
    { label: 'Fit', value: 'Fits inside the duvet cover neatly — no bunching, no slipping' },
    { label: 'Durability', value: 'Strong & long lasting — withstands daily hotel use & washing' },
    { label: 'Maintenance', value: 'Easy to wash & dry — no fading, no shrinking, no lumping' },
    { label: 'Look', value: 'Clean, fresh & neat — gives the bed a luxury finish' }
  ],
  'linen-face-towels': [
    { label: 'Size', value: 'Small — 12×12 / 13×13 inch' },
    { label: 'Colour', value: 'Pure White' },
    { label: 'Fabric', value: '100% Cotton / Cotton Rich' },
    { label: 'Feel', value: 'Soft & gentle — soft on the face, gentle for all guests' },
    { label: 'Fit', value: 'Perfect size — easy to hold, fits hand and face' },
    { label: 'Durability', value: 'Strong & long lasting — withstands daily hotel washing' },
    { label: 'Maintenance', value: 'Easy to wash, dry & fold — no fading, no shrinking' },
    { label: 'Look', value: 'Clean, fresh & neat — gives the bathroom a luxury finish' }
  ],
  'linen-hand-towels': [
    { label: 'Size', value: 'Medium — 16×28 inch' },
    { label: 'Colour', value: 'Pure White' },
    { label: 'Fabric', value: '100% Cotton / Cotton Rich' },
    { label: 'Feel', value: 'Soft & absorbent — soft on hands, gentle for all guests' },
    { label: 'Fit', value: 'Perfect size — easy to hold, fits hand and bathroom hook' },
    { label: 'Durability', value: 'Strong & long lasting — withstands daily hotel washing' },
    { label: 'Maintenance', value: 'Easy to wash, dry & fold — no fading, no shrinking' },
    { label: 'Look', value: 'Clean, fresh & neat — gives the bathroom a luxury finish' }
  ],
  'linen-mattress-protectors': [
    { label: 'Size', value: 'Single, Double, Queen & King — deep pocket' },
    { label: 'Colour', value: 'Pure White / Crisp White' },
    { label: 'Fabric', value: '100% Cotton / Waterproof TPU — soft, smooth & breathable' },
    { label: 'Feel', value: 'Soft & quiet — cool and comfortable with no crinkle sound' },
    { label: 'Fit', value: 'Elastic fitted — no slipping, covers the mattress fully' },
    { label: 'Durability', value: 'Strong & long lasting — waterproof' },
    { label: 'Maintenance', value: 'Easy to wash & dry — no fading, no shrinking' },
    { label: 'Look', value: 'Clean, fresh & neat — gives the bed a luxury look' }
  ],
  'linen-pillow-covers': [
    { label: 'Size', value: 'Standard, Queen & King' },
    { label: 'Colour', value: 'Pure White / Crisp White' },
    { label: 'Fabric', value: '100% Cotton / Cotton Percale — soft, smooth & breathable' },
    { label: 'Feel', value: 'Cool & comfortable — soft on skin, gentle for all guests' },
    { label: 'Fit', value: 'Envelope / flap closure for a neat look, no slipping' },
    { label: 'Durability', value: 'Strong & long lasting — withstands daily hotel washing' },
    { label: 'Maintenance', value: 'Easy to wash & iron — quick dry, no fading, no shrinking' },
    { label: 'Look', value: 'Clean, fresh & neat — gives beds a luxury look' }
  ],
  'linen-pillows': [
    { label: 'Size', value: 'Standard, Queen & King — 20×30 inch' },
    { label: 'Colour', value: 'Pure White / Crisp White — bright white that stays white' },
    { label: 'Fabric', value: '100% Cotton / Microfiber — soft, smooth & breathable' },
    { label: 'Feel', value: 'Soft & supportive — plump, comfortable, gentle for all guests' },
    { label: 'Fit', value: 'Fits the pillow cover neatly — no lumping, no flattening' },
    { label: 'Durability', value: 'Strong & long lasting — withstands daily hotel use & washing' },
    { label: 'Maintenance', value: 'Easy to wash & dry — no fading, no shrinking, no lumping' },
    { label: 'Look', value: 'Clean, fresh & neat — gives the bed a luxury finish' }
  ],
  'linen-pool-towels': [
    { label: 'Size', value: 'Extra Large — full body coverage' },
    { label: 'Colour', value: 'Bright colours & stripes — no fading, stays fresh' },
    { label: 'Fabric', value: '100% Cotton / Cotton Rich — soft on skin, gentle for all guests' },
    { label: 'Feel', value: 'Thick & plush — soft and fluffy' },
    { label: 'Absorbency', value: 'Super absorbent — soaks water quickly' },
    { label: 'Drying', value: 'Quick dry — dries fast after use' },
    { label: 'Durability', value: 'Strong & long lasting — withstands daily hotel washing' },
    { label: 'Maintenance', value: 'Easy to wash, dry & fold' }
  ],
  'linen-rugs': [
    { label: 'Size', value: 'Standard — 2×3, 3×5, 4×6 ft; runner and custom sizes' },
    { label: 'Colour', value: 'Rich colours / patterns' },
    { label: 'Fabric', value: 'Cotton / Wool / Polyester Blend — soft, dense & breathable' },
    { label: 'Feel', value: 'Soft & plush — cushioned underfoot, comfortable for guests' },
    { label: 'Fit', value: 'Non-slip backing — lays flat, no curling or slipping' },
    { label: 'Durability', value: 'Strong & long lasting — withstands heavy foot traffic and daily cleaning' },
    { label: 'Maintenance', value: 'Easy to clean — vacuum & shampoo, no fading, no shedding' },
    { label: 'Look', value: 'Rich, elegant & neat — gives lobby and room a luxury finish' }
  ],

  /* ── Guest Amenities ───────────────────────────────────────────────── */
  'amenities-toilet-rolls-wcbands': [
    { label: 'Toilet Rolls — Material', value: '100% virgin tissue paper, 2-ply / 3-ply — soft & absorbent' },
    { label: 'Toilet Rolls — Size', value: '20 m / 30 m as per requirement; 10 cm width' },
    { label: 'Toilet Rolls — Colour', value: 'White / ivory' },
    { label: 'Toilet Rolls — Packing', value: 'Individually wrapped / bulk pack' },
    { label: 'WC Bands — Material', value: 'Premium paper — strong & tear resistant' },
    { label: 'WC Bands — Size', value: 'Standard WC seat size' },
    { label: 'WC Bands — Design', value: 'Elegant, hotel logo printed' },
    { label: 'Feature', value: 'Soft, strong, hygienic & eco-friendly; shows the room is sanitised and ready' }
  ],
  'amenities-glass-covers-coasters': [
    { label: 'Glass Cover — Material', value: 'Soft cotton / felt / polyester — durable & washable' },
    { label: 'Glass Cover — Size', value: 'Standard — fits all hotel glasses' },
    { label: 'Glass Coaster — Material', value: 'Felt / cotton / cork / fabric — absorbent' },
    { label: 'Glass Coaster — Size', value: '10 × 10 cm / 4 inch round or square' },
    { label: 'Colour', value: 'White / ivory / beige / custom hotel colour' },
    { label: 'Design', value: 'Elegant, plain / embroidered / printed logo' },
    { label: 'Use', value: 'Cover keeps dust, insects & germs away; coaster protects the table from water marks' },
    { label: 'Care', value: 'Washable, reusable, quick dry' }
  ],
  'amenities-bathroom-kits': [
    { label: 'Items Included', value: 'Shampoo, conditioner, body wash, body lotion, bath soap, dental kit, shaving kit, vanity / sewing kit' },
    { label: 'Shampoo / Conditioner', value: '30 ml / 50 ml — gentle, aloe vera or herbal' },
    { label: 'Body Wash / Lotion', value: '30 ml / 50 ml — gentle, moisturising' },
    { label: 'Bath Soap', value: '25 g / 40 g — gentle, aloe vera or herbal' },
    { label: 'Dental Kit', value: 'Travel size — toothbrush + toothpaste, soft bristle' },
    { label: 'Shaving Kit', value: 'Travel size — razor + cream, gentle on skin' },
    { label: 'Vanity / Sewing Kit', value: 'Compact — cotton buds, nail file, sewing essentials' }
  ],
  'amenities-sewing-medical-kits': [
    { label: 'Sewing Kit — Items', value: 'Needle, threads (black, white, blue), safety pin, button, scissors' },
    { label: 'Sewing Kit — Size', value: 'Pocket size — 8 × 10 cm' },
    { label: 'Sewing Kit — Packing', value: 'Individually sealed pouch / box' },
    { label: 'Medical Kit — Items', value: 'Band-Aid, cotton, antiseptic wipe, pain balm, paracetamol, gauze' },
    { label: 'Medical Kit — Size', value: 'Compact box — 10 × 12 cm' },
    { label: 'Medical Kit — Packing', value: 'Sealed box / pouch — tamper proof' },
    { label: 'Feature', value: 'Compact, easy to use, travel friendly; safe and essential for every room' }
  ],
  'amenities-guest-stationery': [
    { label: 'Stationery — Items', value: 'Notepad, pen, envelope, letterhead, comment card' },
    { label: 'Stationery — Material', value: 'Premium 80 GSM / eco-friendly paper' },
    { label: 'Stationery — Size', value: 'A5 notepad / A4 letterhead / standard envelope' },
    { label: 'Folders — Material', value: 'Hardboard / leatherette / rexine / cardboard — durable' },
    { label: 'Folders — Size', value: 'A4 / A5 — fits letterhead & documents' },
    { label: 'Folders — Inside Pockets', value: 'For menu, tariff card, stationery & brochures' },
    { label: 'Colour', value: 'White / ivory / black / brown / maroon / custom hotel colour' },
    { label: 'Design', value: 'Elegant, plain or hotel logo printed / embossed' }
  ],
  'amenities-table-sundries': [
    { label: 'Table Sundries — Items', value: 'Table napkin, coaster, paper mat, toothpick, sugar sachet, salt & pepper' },
    { label: 'Table Sundries — Material', value: 'Premium paper & food-grade material' },
    { label: 'Table Sundries — Size', value: 'Standard hotel table size' },
    { label: 'Guest Sundries — Items', value: 'Shower cap, dental kit, shaving kit, comb, shoe shine, vanity kit' },
    { label: 'Guest Sundries — Size', value: 'Travel size — compact & lightweight' },
    { label: 'Packing', value: 'Individually packed / bulk pack' },
    { label: 'Feature', value: 'Hygienic, disposable, neat presentation; complete care for daily grooming' }
  ],
  'amenities-liquids-soaps': [
    { label: 'Liquid Amenities — Items', value: 'Shampoo, conditioner, body wash, hand wash, body lotion' },
    { label: 'Liquid Amenities — Size', value: '30 / 40 / 50 ml bottle; 500 ml dispenser' },
    { label: 'Liquid Amenities — Fragrance', value: 'Mild / herbal / lavender / jasmine / custom fragrance' },
    { label: 'Soaps — Items', value: 'Bathing soap, hand soap, facial soap' },
    { label: 'Soaps — Size', value: '15 g / 20 g / 25 g / 50 g' },
    { label: 'Packing', value: 'Sealed flip-top bottle / pump dispenser; soap flow-wrapped or boxed' },
    { label: 'Feature', value: 'pH balanced, paraben free, skin friendly, rich lather' }
  ],
  'amenities-hygiene-laundry-essentials': [
    { label: 'Hygiene Bags — Material', value: 'Soft paper / biodegradable / LDPE — hygienic' },
    { label: 'Hygiene Bags — Size', value: 'Standard — 10 × 15 cm / 12 × 18 cm' },
    { label: 'Hygiene Bags — Use', value: 'Sanitary napkins, diapers & personal waste' },
    { label: 'Laundry Essentials — Items', value: 'Laundry bag, laundry list / form, cloth hanger tag' },
    { label: 'Laundry Essentials — Material', value: 'Cotton cloth bag / non-woven / paper form' },
    { label: 'Laundry Bag — Size', value: '45 × 60 cm' },
    { label: 'Packing', value: 'Individually packed, easy to open; clear poly bag' },
    { label: 'Feature', value: 'Discreet, odour-proof, easy disposal; drawstring closure, strong & reusable' }
  ],
  'amenities-bath-slippers': [
    { label: 'Upper Material', value: '100% high-density EVA' },
    { label: 'Sole Material', value: 'Textured anti-skid EVA — non-slip' },
    { label: 'Water Resistance', value: '100% waterproof & quick-dry' },
    { label: 'Sole Thickness', value: '3.0 cm cushioned base' },
    { label: 'Toe Style', value: 'Open-toe / closed-toe' },
    { label: 'Gender', value: 'Unisex' },
    { label: 'Care Instructions', value: 'Rinse with water and air dry' },
    { label: 'Ideal For', value: 'Bathroom, shower, pool, spa, post-shower and bedroom' }
  ],

  /* ── Kitchen Equipments (client specifications) ────────────────────── */
  'engineering-chicken-grill-machine': [
    { label: 'Material', value: 'Stainless steel body — food grade' },
    { label: 'Type', value: 'Electric / gas / charcoal — as per requirement' },
    { label: 'Capacity', value: '4 / 6 / 8 / 12 chickens per batch' },
    { label: 'Power', value: '220 V / 380 V — as per model' },
    { label: 'Heating', value: 'Even heating — rotisserie system' },
    { label: 'Temperature', value: 'Adjustable temperature control' },
    { label: 'Feature', value: 'Easy to clean, durable, hygienic & energy efficient' },
    { label: 'Use', value: 'Hotels, restaurants, fast food & catering' },
    { label: 'Design', value: 'Compact, modern & professional' }
  ],
  'engineering-commercial-gas-ranges': [
    { label: 'Material', value: 'Stainless steel body — heavy duty' },
    { label: 'Type', value: 'Single burner / 2 burner / 4 burner / 6 burner' },
    { label: 'Burners', value: 'High-pressure brass burners — high flame' },
    { label: 'Ignition', value: 'Auto / manual ignition — as per model' },
    { label: 'Gas Type', value: 'LPG' },
    { label: 'Safety', value: 'Gas safety valve & sturdy stand' },
    { label: 'Feature', value: 'Fast heating, even flame, easy to clean & durable' },
    { label: 'Use', value: 'Hotels, restaurants, canteens & commercial kitchens' },
    { label: 'Design', value: 'Compact, heavy duty & professional' }
  ],
  'engineering-commercial-refrigerators': [
    { label: 'Material', value: 'Stainless steel body — food grade' },
    { label: 'Type', value: 'Single door / double door / 4 door' },
    { label: 'Capacity', value: '400 L / 800 L / 1000 L / 1200 L' },
    { label: 'Temperature', value: '-18°C to 10°C — adjustable digital control' },
    { label: 'Cooling', value: 'Fan cooling — fast & even' },
    { label: 'Power', value: '220 V — energy efficient & low noise' },
    { label: 'Feature', value: 'Easy to clean, durable, hygienic & heavy-duty compressor' },
    { label: 'Use', value: 'Hotels, restaurants, supermarkets & commercial kitchens' },
    { label: 'Design', value: 'Spacious, sturdy & professional' }
  ],
  'engineering-convection-oven': [
    { label: 'Material', value: 'Stainless steel body — food grade' },
    { label: 'Type', value: '1 door / 2 doors — with toughened glass view window' },
    { label: 'Capacity', value: '4 tray / 6 tray / 10 tray' },
    { label: 'Temperature', value: '50°C to 300°C — adjustable digital control' },
    { label: 'Heating', value: 'Fan-forced hot air — even baking' },
    { label: 'Power', value: '220 V / 380 V — energy efficient' },
    { label: 'Feature', value: 'Even baking, fast heating, easy to clean & durable' },
    { label: 'Use', value: 'Bakeries, hotels, restaurants, cafes & commercial kitchens' },
    { label: 'Design', value: 'Compact, sturdy & professional' }
  ],
  'engineering-deck-oven': [
    { label: 'Material', value: 'Stainless steel body — food grade' },
    { label: 'Type', value: '1 door / 2 doors / 3 doors — toughened glass view window & handle' },
    { label: 'Capacity', value: '1 deck / 2 deck / 3 deck — as per model' },
    { label: 'Temperature', value: '50°C to 350°C — adjustable digital control' },
    { label: 'Heating', value: 'Top & bottom heating — stone deck base' },
    { label: 'Power', value: '220 V / 380 V — energy efficient' },
    { label: 'Feature', value: 'Crispy crust, even baking, fast heating & durable' },
    { label: 'Use', value: 'Bakeries, pizza shops, hotels, restaurants & commercial kitchens' },
    { label: 'Design', value: 'Heavy duty, sturdy & professional' }
  ],
  'engineering-deep-freezers': [
    { label: 'Material', value: 'Stainless steel body — food grade' },
    { label: 'Type', value: 'Chest / upright — as per model' },
    { label: 'Capacity', value: '200 L / 300 L / 500 L / 700 L' },
    { label: 'Temperature', value: '-18°C to -22°C — adjustable digital control' },
    { label: 'Cooling', value: 'Fan-assisted fast freeze' },
    { label: 'Power', value: '220 V — energy efficient & low noise' },
    { label: 'Feature', value: 'Thick insulation, lockable lid, easy to clean & hygienic' },
    { label: 'Use', value: 'Hotels, restaurants, supermarkets & commercial kitchens' },
    { label: 'Design', value: 'Sturdy, spacious & professional' }
  ],
  'engineering-dishwasher': [
    { label: 'Material', value: 'Stainless steel body — food grade' },
    { label: 'Type', value: 'Undercounter / hood type / rack conveyor — as per model' },
    { label: 'Output', value: 'Up to 40 racks per hour (nominal)' },
    { label: 'Wash Cycle', value: '90 / 120 seconds' },
    { label: 'Washing', value: 'Hot-water wash with hygienic rinse' },
    { label: 'Power', value: '415 V three-phase, 9 kW (nominal)' },
    { label: 'Feature', value: 'Automatic detergent & rinse dosing, easy to clean & durable' },
    { label: 'Use', value: 'Hotels, restaurants, canteens & commercial kitchens' },
    { label: 'Design', value: 'Compact, sturdy & professional' }
  ],
  'engineering-display-counters': [
    { label: 'Material', value: 'Stainless steel body with toughened glass' },
    { label: 'Type', value: 'Counter-top / island / wall-facing — as per model' },
    { label: 'Length', value: '1,000 mm / 1,200 mm / 1,500 mm' },
    { label: 'Temperature', value: '+2°C to +8°C — adjustable digital control' },
    { label: 'Cooling', value: 'Fan-assisted even cooling' },
    { label: 'Power', value: '220 V — energy efficient' },
    { label: 'Feature', value: 'Crystal-clear display, sliding glass doors, easy to clean' },
    { label: 'Use', value: 'Bakeries, cafes, hotels & restaurants' },
    { label: 'Design', value: 'Elegant, slim & professional' }
  ],
  'engineering-dosa-plates': [
    { label: 'Material', value: 'Heavy cast iron' },
    { label: 'Plate Size', value: '600 mm / 750 mm / 900 mm diameter' },
    { label: 'Heating', value: 'LPG burner assembly — as per model' },
    { label: 'Surface', value: 'Smooth finish with even heat distribution' },
    { label: 'Feature', value: 'Pre-seasoned, durable & easy to maintain' },
    { label: 'Use', value: 'Hotels, restaurants, canteens & commercial kitchens' },
    { label: 'Design', value: 'Heavy duty & professional' }
  ],
  'engineering-dough-kneader': [
    { label: 'Material', value: 'Stainless steel bowl with food-grade body' },
    { label: 'Capacity', value: '10 kg / 25 kg / 50 kg dough per batch' },
    { label: 'Motor', value: 'Heavy-duty, 1.5 kW (nominal)' },
    { label: 'Kneading', value: 'Spiral hook — uniform mixing' },
    { label: 'Bowl Speed', value: '25 rpm (nominal)' },
    { label: 'Power', value: '230 V AC, 50 Hz' },
    { label: 'Feature', value: 'Heavy-duty motor, stainless steel bowl, easy to clean' },
    { label: 'Use', value: 'Bakeries, hotels, restaurants & commercial kitchens' },
    { label: 'Design', value: 'Sturdy, compact & professional' }
  ]
};


/**
 * Plausible draft specifications for layout/content review. These are not
 * supplier-confirmed product data; the modal keeps a visible verification notice.
 */
export const PRODUCT_SPECS_MAP: Record<string, ProductDetailInfo> = Object.fromEntries(
  CATALOG_PRODUCTS.map(product => {
    const title = product.title.toLowerCase();
    let specs: ProductHighlight[];
    let isMelamine = false;
    if (product.category === 'Crockery') {
      isMelamine =
        product.brands.some(b => ['Finware', 'Servewell', 'Superware', 'V 4', 'Dinewell'].includes(b)) ||
        /melamine/i.test(product.title) ||
        /melamine/i.test(product.subtitle);

      if (isMelamine) {
        specs = [
          { label: 'Material', value: '100% Food Grade Melamine' },
          { label: 'Safe for Dishwasher', value: 'Safe for Dish Washer Use' },
          { label: 'Heat Resistance', value: 'Heat Resistance up to Temperature of 140°C' },
          { label: 'Durability', value: 'Resistance to Breaking, Cracking, & Chipping' },
          { label: 'Stain Resistance', value: 'Stain Proof, Long Lasting Designs' },
          { label: 'Finish', value: 'Glazed Finish' },
          { label: 'Colour Safety', value: 'Food Contact Grade Colour (Colour safe for food contact)' },
          { label: 'Freezer Safe', value: 'Freezer safe' },
          { label: 'Packing', value: '6 pieces per inner box; 24 / 48 per master carton' }
        ];
      } else if (product.brands.includes('Ocean')) {
        specs = [
          { label: 'Material', value: 'Lead-free crystal glass' },
          { label: 'Items Available', value: 'Beer Mugs, Champagne Flutes, Coffee Mugs, Decanters, Ice cream Sundae cups, Juice Glass, Mixing Bowls, Pop Jar, Salad bowls, Shot Glass, Tea Cup, Water Glass, Wine Glass, Coffee & Tea Mug' },
          { label: 'Temperature', value: 'Heat resistant up to 140°C, suitable for hot & cold food service; avoid direct flame' },
          { label: 'Durability & Safety', value: 'Dishwasher safe, colour safe for food contact' },
          { label: 'Packing', value: '6 pieces per inner box; 24 per outer carton' }
        ];
      } else if (/glass|stemware|drinkware/.test(title)) {
        specs = [{ label: 'Material', value: 'Clear soda-lime glass' }, { label: 'Capacity', value: '300 ml wine glass; 350 ml tumbler' }, { label: 'Dimensions', value: 'Approx. 7.5 cm rim × 21 cm height (wine glass)' }, { label: 'Packing', value: '6 pieces per inner box; 24 per outer carton' }];
      } else {
        specs = [{ label: 'Material', value: 'Vitrified ceramic, glazed finish' }, { label: 'Typical pieces', value: '27 cm dinner plate, 20 cm side plate, 15 cm bowl' }, { label: 'Temperature', value: 'Suitable for hot food service; avoid direct flame' }, { label: 'Packing', value: '6 pieces per inner box; 24 per outer carton' }];
      }
    } else if (product.category === 'Cutlery') {
      specs = [{ label: 'Material', value: '18/0 stainless steel (nominal chromium/nickel grade)' }, { label: 'Thickness', value: 'Approx. 2.0 mm spoon/fork; knife blade varies by pattern' }, { label: 'Finish', value: 'Polished mirror finish' }, { label: 'Packing', value: '12 pieces per item' }];
    } else if (product.category === 'Linen') {
      if (/bath towels/.test(title)) specs = [{ label: 'Material', value: '100% cotton terry' }, { label: 'Size', value: '70 × 140 cm' }, { label: 'Fabric weight', value: '500 GSM' }, { label: 'Packing', value: '10 pieces per bale' }];
      else if (/hand towels/.test(title)) specs = [{ label: 'Material', value: '100% cotton terry' }, { label: 'Size', value: '40 × 70 cm' }, { label: 'Fabric weight', value: '450 GSM' }, { label: 'Packing', value: '20 pieces per bale' }];
      else if (/face towels/.test(title)) specs = [{ label: 'Material', value: '100% cotton terry' }, { label: 'Size', value: '30 × 30 cm' }, { label: 'Fabric weight', value: '450 GSM' }, { label: 'Packing', value: '50 pieces per bale' }];
      else if (/pool towels/.test(title)) specs = [{ label: 'Material', value: 'Cotton terry' }, { label: 'Size', value: '90 × 180 cm' }, { label: 'Fabric weight', value: '550 GSM' }, { label: 'Packing', value: '10 pieces per bale' }];
      else if (/bath mats/.test(title)) specs = [{ label: 'Material', value: 'Cotton terry with non-slip backing option' }, { label: 'Size', value: '50 × 80 cm' }, { label: 'Fabric weight', value: '800 GSM' }, { label: 'Packing', value: '10 pieces per bale' }];
      else if (/bed sheets/.test(title)) specs = [{ label: 'Material', value: 'Polycotton percale,  T-250 thread count' }, { label: 'Size', value: 'Flat sheet: 275 × 300 cm' }, { label: 'Construction', value: 'Plain weave, white' }, { label: 'Packing', value: '10 pieces per bale' }];
      else if (/duvets/.test(title)) specs = [{ label: 'Cover', value: 'Cotton-rich shell with polyester fill' }, { label: 'Size', value: 'King: 240 × 260 cm' }, { label: 'Fill weight', value: '300 GSM' }, { label: 'Packing', value: '1 piece per bag' }];
      else if (/pillows/.test(title)) specs = [{ label: 'Fill', value: 'Hollow conjugated polyester fibre' }, { label: 'Size', value: '50 × 75 cm' }, { label: 'Fill weight', value: '900 g' }, { label: 'Packing', value: '1 piece per bag' }];
      else if (/curtains/.test(title)) specs = [{ label: 'Material', value: 'Polyester blackout fabric' }, { label: 'Panel size', value: '140 × 240 cm' }, { label: 'Header', value: 'Eyelet or pinch-pleat option' }, { label: 'Packing', value: '1 panel per bag' }];
      else if (/mattress protectors/.test(title)) specs = [{ label: 'Top fabric', value: 'Quilted polycotton' }, { label: 'Size', value: 'King: 180 × 200 cm' }, { label: 'Skirt depth', value: 'Approx. 30 cm' }, { label: 'Packing', value: '1 piece per bag' }];
      else specs = [{ label: 'Material', value: 'Polyester-cotton upholstery fabric' }, { label: 'Typical size', value: /carpet|rug/.test(title) ? 'Area sizes: 120 × 180 cm and 160 × 230 cm' : 'Throw: 130 × 180 cm; cushion: 45 × 45 cm' }, { label: 'Fabric weight', value: 'Approx. 250 GSM' }, { label: 'Packing', value: '1 piece per bag' }];
    } else if (product.category === 'Guest Amenities') {
      if (/toilet rolls/.test(title)) specs = [{ label: 'Paper', value: '2-ply tissue, 17 GSM per ply' }, { label: 'Roll length', value: '100 m' }, { label: 'Roll width', value: '9 cm' }, { label: 'Packing', value: '48 rolls per case' }];
      else if (/bathroom guest kits/.test(title)) specs = [{ label: 'Soap', value: '15 g wrapped guest soap' }, { label: 'Shampoo', value: '30 ml sachet or bottle' }, { label: 'Contents', value: 'Soap, shampoo, dental kit and shower cap' }, { label: 'Packing', value: '100 guest kits per carton' }];
      else if (/sewing/.test(title)) specs = [{ label: 'Sewing kit', value: 'Needle, 6 thread colours, 2 buttons and safety pin' }, { label: 'Medical kit', value: 'Cotton swabs, adhesive strips and antiseptic wipe' }, { label: 'Pack format', value: 'Individually sealed paper pouch' }, { label: 'Packing', value: '500 pouches per carton' }];
      else if (/stationery/.test(title)) specs = [{ label: 'Folder', value: 'Approx. 23 × 32 cm, leatherette finish' }, { label: 'Contents', value: 'Writing pad, 2 sheets hotel stationery, envelope and pen' }, { label: 'Pad size', value: 'A4' }, { label: 'Packing', value: '25 sets per carton' }];
      else if (/slippers/.test(title)) specs = [{ label: 'Upper', value: 'Terry cloth' }, { label: 'Sole', value: '5 mm EVA foam' }, { label: 'Size', value: 'Universal adult size, approx. 28 cm' }, { label: 'Packing', value: '100 pairs per carton' }];
      else if (/liquid amenities/.test(title)) specs = [{ label: 'Products', value: 'Shampoo, conditioner, body wash and lotion' }, { label: 'Pack size', value: '30 ml guest bottle' }, { label: 'Container', value: 'PET bottle with flip-top cap' }, { label: 'Packing', value: '100 bottles per carton' }];
      else if (/glass covers/.test(title)) specs = [{ label: 'Cover diameter', value: '9 cm' }, { label: 'Coaster diameter', value: '9 cm' }, { label: 'Material', value: 'Clear reusable plastic' }, { label: 'Packing', value: '100 pieces per pack' }];
      else if (/hygiene bags/.test(title)) specs = [{ label: 'Laundry bag', value: '50 × 70 cm, non-woven fabric' }, { label: 'Hygiene bag', value: 'Approx. 12 × 20 cm, disposable' }, { label: 'Pack format', value: 'Individually folded guest-room supply' }, { label: 'Packing', value: '100 pieces per inner pack' }];
      else specs = [{ label: 'Item size', value: 'Drinking straw: 20 cm; coaster: 9 cm diameter' }, { label: 'Material', value: 'Paper or food-contact plastic, by item' }, { label: 'Pack quantity', value: '100 pieces per retail pack' }, { label: 'Carton quantity', value: '20 retail packs per carton' }];
    } else if (product.category === 'Kitchen Utensils') {
      if (/ingredient.*bin/.test(title)) specs = [{ label: 'Material', value: 'Food-grade polyethylene' }, { label: 'Capacity', value: '81 L' }, { label: 'Dimensions', value: 'Approx. 33 × 74 × 71 cm' }, { label: 'Packing', value: '1 bin per carton' }];
      else if (/storage containers|food containers/.test(title)) specs = [{ label: 'Material', value: 'Polypropylene, translucent' }, { label: 'Capacities', value: '1.5 L, 3.8 L and 7.6 L' }, { label: 'Temperature range', value: '-20°C to 100°C' }, { label: 'Packing', value: '12 containers per case' }];
      else if (/gn food pans|gastronorm pans/.test(title)) specs = [{ label: 'Material', value: 'Stainless steel, 0.7 mm nominal thickness' }, { label: 'Size', value: 'GN 1/1, 530 × 325 mm' }, { label: 'Depth / capacity', value: '65 mm / approx. 8.5 L' }, { label: 'Packing', value: '6 pans per carton' }];
      else if (/cutting boards/.test(title)) specs = [{ label: 'Material', value: 'High-density polyethylene (HDPE)' }, { label: 'Size', value: '450 × 300 × 12 mm' }, { label: 'Colour options', value: 'Red, blue, green, yellow, white and brown' }, { label: 'Packing', value: '1 board per sleeve' }];
      else if (/chafing/.test(title)) specs = [{ label: 'Body', value: '18/8 stainless steel' }, { label: 'Food pan', value: 'GN 1/1, 9 L' }, { label: 'Heat source', value: 'Fuel-holder compatible' }, { label: 'Packing', value: '1 complete set per carton' }];
      else if (/knives/.test(title)) specs = [{ label: 'Blade', value: 'Stainless steel, 8-inch chef knife' }, { label: 'Handle', value: 'Riveted polymer, 5-inch grip' }, { label: 'Overall length', value: 'Approx. 33 cm' }, { label: 'Packing', value: '6 knives per carton' }];
      else if (/ladles/.test(title)) specs = [{ label: 'Material', value: 'Stainless steel, 1.2 mm nominal thickness' }, { label: 'Capacity', value: '120 ml ladle' }, { label: 'Overall length', value: 'Approx. 35 cm' }, { label: 'Packing', value: '12 pieces per carton' }];
      else if (/degchis|vessels|cookware/.test(title)) specs = [{ label: 'Material', value: 'Stainless steel, 0.8 mm nominal thickness' }, { label: 'Capacity range', value: '5 L, 10 L and 20 L' }, { label: 'Lid', value: 'Matching stainless-steel lid' }, { label: 'Packing', value: '1 vessel per carton' }];
      else if (/mixer|blender/.test(title)) specs = [{ label: 'Motor', value: '750 W, single-phase' }, { label: 'Jar / bowl', value: '2 L stainless-steel jar' }, { label: 'Speed', value: '2 speeds plus pulse' }, { label: 'Supply', value: '230 V AC, 50 Hz' }];
      else if (/knives|tools|accessories/.test(title)) specs = [{ label: 'Material', value: 'Stainless steel working parts with polymer handles' }, { label: 'Typical size', value: 'Handle 12 cm; working length 20 cm' }, { label: 'Use', value: 'Food preparation and portioning' }, { label: 'Packing', value: '12 pieces per carton' }];
      else specs = [{ label: 'Material', value: 'Stainless steel, 0.8 mm nominal thickness' }, { label: 'Size', value: 'Approx. 30 cm diameter × 15 cm deep' }, { label: 'Capacity', value: 'Approx. 10 L' }, { label: 'Packing', value: '1 piece per carton' }];
    } else if (product.category === 'House Keeping') {
      if (/trolley/.test(title)) specs = [{ label: 'Frame', value: 'Polypropylene body with coated-steel support' }, { label: 'Configuration', value: '3 shelves, 2 × 100 L waste bags' }, { label: 'Dimensions', value: 'Approx. 150 × 55 × 100 cm' }, { label: 'Packing', value: '1 trolley, flat-packed' }];
      else if (/bins|segregation/.test(title)) specs = [{ label: 'Material', value: 'Injection-moulded polypropylene' }, { label: 'Capacity', value: '60 L per bin' }, { label: 'Dimensions', value: 'Approx. 40 × 35 × 70 cm' }, { label: 'Packing', value: '1 bin per carton' }];
      else if (/paper|tissue/.test(title)) specs = [{ label: 'Tissue', value: '2-ply, 150 sheets per box' }, { label: 'Sheet size', value: '20 × 20 cm' }, { label: 'Dispenser', value: 'Wall-mount ABS plastic' }, { label: 'Packing', value: '30 boxes per case' }];
      else if (/mops|squeegees|cleaning tools/.test(title)) specs = [{ label: 'Mop head', value: '450 g cotton blend' }, { label: 'Handle', value: 'Aluminium, 135 cm' }, { label: 'Squeegee width', value: '45 cm' }, { label: 'Packing', value: '12 mop heads per carton' }];
      else if (/air fresheners/.test(title)) specs = [{ label: 'Format', value: 'Aerosol spray' }, { label: 'Net volume', value: '300 ml' }, { label: 'Fragrance', value: 'Citrus or floral variant' }, { label: 'Packing', value: '12 cans per case' }];
      else if (/pest|insect/.test(title)) specs = [{ label: 'Format', value: 'Aerosol insect-control spray' }, { label: 'Net volume', value: '300 ml' }, { label: 'Application', value: 'Indoor spot use; follow label precautions' }, { label: 'Packing', value: '12 cans per case' }];
      else if (/floor machines/.test(title)) specs = [{ label: 'Motor', value: '1.5 HP single-disc motor' }, { label: 'Brush diameter', value: '17 in (430 mm)' }, { label: 'Speed', value: '175 rpm' }, { label: 'Supply', value: '230 V AC, 50 Hz' }];
      else specs = [{ label: 'Material', value: 'ABS plastic housing' }, { label: 'Power', value: '1,200 W' }, { label: 'Supply', value: '230 V AC, 50 Hz' }, { label: 'Packing', value: '1 unit per carton' }];
    } else if (product.category === 'Cleaning Chemicals') {
      const cleaner = /biotic/.test(title) ? 'Enzyme-based kitchen degreaser' : /sac/.test(title) ? 'Neutral floor and surface cleaner' : 'Multi-purpose detergent cleaner';
      specs = [{ label: 'Product type', value: cleaner }, { label: 'Appearance', value: 'Liquid concentrate' }, { label: 'Pack size', value: '5 L HDPE can' }, { label: 'Dilution (draft)', value: 'General cleaning: 1:100; heavy soil: 1:20' }, { label: 'Safety', value: 'Use PPE and follow the manufacturer label' }];
    } else {
      const engineeringSpecs: Record<string, ProductHighlight[]> = {
        'engineering-commercial-gas-ranges': [{ label: 'Burners', value: '4 × 6 kW open burners' }, { label: 'Gas input', value: '24 kW total; LPG/PNG jet options' }, { label: 'Dimensions', value: '800 × 700 × 850 mm' }, { label: 'Construction', value: '304 stainless-steel worktop' }],
        'engineering-induction-cookers': [{ label: 'Rated power', value: '3.5 kW' }, { label: 'Supply', value: '230 V AC, 50 Hz, 16 A' }, { label: 'Temperature range', value: '60–240°C' }, { label: 'Cookware', value: 'Magnetic-base pans, 12–26 cm' }],
        'engineering-dosa-plates': [{ label: 'Plate size', value: '600 × 600 mm' }, { label: 'Heating', value: '9 kW LPG burner assembly' }, { label: 'Plate', value: '12 mm mild-steel cooking surface' }, { label: 'Dimensions', value: '750 × 800 × 850 mm' }],
        'engineering-griddles': [{ label: 'Cooking surface', value: '600 × 600 mm' }, { label: 'Heating', value: '9 kW gas burner' }, { label: 'Plate thickness', value: '12 mm mild steel' }, { label: 'Dimensions', value: '750 × 800 × 850 mm' }],
        'engineering-commercial-refrigerators': [{ label: 'Gross capacity', value: '600 L' }, { label: 'Temperature', value: '+2°C to +8°C' }, { label: 'Cooling', value: 'Fan-assisted; digital controller' }, { label: 'Supply', value: '230 V AC, 50 Hz' }],
        'engineering-deep-freezers': [{ label: 'Gross capacity', value: '500 L' }, { label: 'Temperature', value: '-18°C to -22°C' }, { label: 'Defrost', value: 'Manual defrost' }, { label: 'Supply', value: '230 V AC, 50 Hz' }],
        'engineering-undercounter-chillers': [{ label: 'Gross capacity', value: '300 L' }, { label: 'Temperature', value: '+2°C to +8°C' }, { label: 'Doors', value: '2 hinged doors' }, { label: 'Dimensions', value: '1360 × 700 × 850 mm' }],
        'engineering-display-counters': [{ label: 'Display length', value: '1,200 mm' }, { label: 'Temperature', value: '+2°C to +8°C' }, { label: 'Refrigerant', value: 'R290 system' }, { label: 'Supply', value: '230 V AC, 50 Hz' }],
        'engineering-shawarma-machine': [{ label: 'Meat capacity', value: '25 kg' }, { label: 'Burners', value: '4 infrared burners' }, { label: 'Heating input', value: '8 kW LPG' }, { label: 'Skewer height', value: '700 mm' }],
        'engineering-chicken-grill-machine': [{ label: 'Capacity', value: '8 whole chickens' }, { label: 'Heating', value: '6 × 2 kW electric elements' }, { label: 'Rotisserie', value: 'Motor-driven, 4 spits' }, { label: 'Supply', value: '230 V AC, 50 Hz' }],
        'engineering-dough-kneader': [{ label: 'Bowl capacity', value: '25 kg dough' }, { label: 'Motor', value: '1.5 kW' }, { label: 'Bowl speed', value: '25 rpm' }, { label: 'Supply', value: '230 V AC, 50 Hz' }],
        'engineering-vegetable-cutter': [{ label: 'Output', value: '150–250 kg/hour' }, { label: 'Motor', value: '550 W' }, { label: 'Discs', value: '5 interchangeable cutting discs' }, { label: 'Supply', value: '230 V AC, 50 Hz' }],
        'engineering-pulverizer': [{ label: 'Output', value: '10–15 kg/hour (dry spices)' }, { label: 'Motor', value: '2 HP' }, { label: 'Grinding chamber', value: 'Stainless steel' }, { label: 'Supply', value: '230 V AC, 50 Hz' }],
        'engineering-meat-mincer': [{ label: 'Output', value: '150 kg/hour' }, { label: 'Mouth plate', value: 'No. 22' }, { label: 'Motor', value: '1.5 HP' }, { label: 'Supply', value: '230 V AC, 50 Hz' }],
        'engineering-planetary-mixer': [{ label: 'Bowl capacity', value: '20 L' }, { label: 'Batches', value: 'Up to 5 kg flour per batch' }, { label: 'Attachments', value: 'Whisk, beater and dough hook' }, { label: 'Supply', value: '230 V AC, 50 Hz' }],
        'engineering-deck-oven': [{ label: 'Chamber', value: '2 decks, 2 trays per deck' }, { label: 'Tray size', value: '600 × 400 mm' }, { label: 'Temperature', value: '50–300°C' }, { label: 'Heating', value: '6 kW per deck' }],
        'engineering-convection-oven': [{ label: 'Capacity', value: '4 trays, 600 × 400 mm' }, { label: 'Temperature', value: '50–300°C' }, { label: 'Fan', value: 'Reversible convection fan' }, { label: 'Supply', value: '6.5 kW, 415 V three-phase' }],
        'engineering-pizza-oven': [{ label: 'Chamber', value: 'Single deck, 4 × 12-inch pizzas' }, { label: 'Temperature', value: '50–450°C' }, { label: 'Deck', value: 'Refractory stone' }, { label: 'Heating', value: '6 kW electric' }],
        'engineering-dishwasher': [{ label: 'Rack size', value: '500 × 500 mm' }, { label: 'Output', value: 'Up to 40 racks/hour' }, { label: 'Wash cycle', value: '90 / 120 seconds' }, { label: 'Electrical load', value: '9 kW, 415 V three-phase' }],
        'engineering-water-cooler': [{ label: 'Storage tank', value: '40 L' }, { label: 'Cooling output', value: '40 L/hour at 10°C rise' }, { label: 'Refrigerant', value: 'R134a' }, { label: 'Supply', value: '230 V AC, 50 Hz' }],
        'engineering-ice-cube-machine': [{ label: 'Daily production', value: '50 kg/24 hours' }, { label: 'Storage bin', value: '20 kg' }, { label: 'Ice type', value: 'Hollow cube' }, { label: 'Supply', value: '230 V AC, 50 Hz' }],
        'engineering-industrial-hood': [{ label: 'Body', value: '304 stainless steel, 1.0 mm' }, { label: 'Hood size', value: '1,800 × 1,000 × 500 mm' }, { label: 'Exhaust airflow', value: '2,500 m³/hour' }, { label: 'Filter', value: 'Baffle filters, removable' }],
        'engineering-fresh-air-exhaust': [{ label: 'Airflow', value: '2,500 m³/hour per fan' }, { label: 'Fan motor', value: '1.5 kW' }, { label: 'Duct size', value: '450 mm diameter' }, { label: 'Supply', value: '415 V, three-phase' }],
        'engineering-ss-tables-sinks': [{ label: 'Material', value: '304 stainless steel, 1.2 mm top' }, { label: 'Table size', value: '1,500 × 700 × 850 mm' }, { label: 'Sink bowl', value: '500 × 450 × 300 mm' }, { label: 'Finish', value: 'No. 4 brushed finish' }],
        'engineering-fryers': [{ label: 'Oil capacity', value: '2 × 8 L tanks' }, { label: 'Heating', value: '2 × 6 kW electric elements' }, { label: 'Temperature', value: '60–200°C thermostat' }, { label: 'Supply', value: '415 V, three-phase' }]
      };
      specs = engineeringSpecs[product.id] || [{ label: 'Capacity', value: 'Approx. 20 L working capacity' }, { label: 'Construction', value: '304 stainless-steel food-contact surfaces' }, { label: 'Dimensions', value: 'Approx. 600 × 600 × 850 mm' }, { label: 'Supply', value: '230 V AC, 50 Hz' }];
    }
    const finalSpecs = SPEC_OVERRIDES[product.id] ?? specs;
    const galleryImages = isMelamine
      ? [product.image, '/images/melamine_features_guide.png']
      : [product.image];

    return [product.id, {
      tagline: product.subtitle || product.title,
      galleryImages,
      highlights: [
        { label: 'Product', value: product.title },
        { label: 'Classification', value: product.category },
        ...product.brands.map(brand => ({ label: 'Brand', value: brand })),
        ...finalSpecs
      ],
      features: finalSpecs
    }];
  })
);

export function buildCardDetail(product: ProductCatalogCard): ProductDetailInfo {
  const highlights: ProductHighlight[] = [
    { label: 'Product', value: product.title },
    { label: 'Classification', value: product.category },
    ...product.brands.map(brand => ({ label: 'Brand', value: brand }))
  ];

  return {
    tagline: product.title,
    galleryImages: [product.image],
    highlights
  };
}

/* ── Brand brochures (Product Catalogue PDFs, served from /brochures) ───── */
export const BRAND_BROCHURES: Record<string, string> = {
  'Claycraft Fine Tableware': '/brochures/claycraft-catalogue.pdf',
  Dinewell: '/brochures/dinewell-catalogue.pdf',
  Ocean: '/brochures/ocean-catalogue.pdf',
  Union: '/brochures/union-glass-catalogue.pdf'
};

export function findBrochure(brands: string[]): string | null {
  for (const brand of brands) {
    const brochure = BRAND_BROCHURES[brand];
    if (brochure) return brochure;
  }
  return null;
}

/* ── Alternating brand-pill tones (blue / red) over all sorted brands ───── */
export type BrandTone = 'blue' | 'red';

export const BRAND_COLORS: Record<string, BrandTone> = (() => {
  const allBrands = Array.from(
    new Set(CATALOG_PRODUCTS.flatMap(product => product.brands))
  ).sort((a, b) => a.localeCompare(b));

  const tones: Record<string, BrandTone> = {};
  allBrands.forEach((brand, index) => {
    tones[brand] = index % 2 === 0 ? 'blue' : 'red';
  });
  return tones;
})();

export function brandColor(brand: string): BrandTone {
  return BRAND_COLORS[brand] ?? 'blue';
}

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
    '+91 471 247 5111'
  ],
  mobiles: [
    '+91 99954 65830',
    '+91 98470 11830',
    '+91 99959 11830',
    '+91 93491 98950'
  ],
  mapEmbedUrl: 'https://maps.google.com/maps?q=Care4+Associates,+GPO+Lane,+Statue,+Thiruvananthapuram,+Kerala+695001&t=&z=16&ie=UTF8&iwloc=&output=embed',
  mapDirectionsUrl: 'https://www.google.com/maps/search/Care4+Associates,+GPO+Lane,+Statue,+Thiruvananthapuram,+Kerala+695001'
};
