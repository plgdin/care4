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
    subtitle: 'In-room botanical soaps, slippers, dental kits & comforts.',
    image: '/images/cardimage_1dbd1171.webp'
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
    { name: 'Rubbermaid', logo: '/images/rubbermaid_logo_3d_clean.webp', scale: 0.88 },
    { name: 'Tork', logo: '/images/tork_logo_clean.webp', scale: 0.9 },
    { name: 'Betco', logo: '/images/betco_logo_clean.webp', scale: 0.9 }
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
    image: '/images/hotel_bath_amenities_toilet_rolls.jpg',
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
    image: '/images/hotel_guest_kits.jpg',
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
    image: '/images/hotel_sewing_medical_kits.jpg',
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
    image: '/images/hotel_folders_cards_stationery.jpg',
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
    image: '/images/cafe_disposables_straws.jpg',
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
    image: '/images/botanical_guest_amenities.jpg',
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
    image: '/images/cardimage_1dbd1171.webp',
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
    image: '/images/image__buffet___beverage_equipment__f2c7e5ac.webp',
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
    image: '/images/commercial_professional_knives.jpg',
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
    image: '/images/cardimage_ac51211f.webp',
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
    image: '/images/cardimage_ac51211f.webp',
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
    image: '/images/image__buffet___beverage_equipment__f2c7e5ac.webp',
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
    image: '/images/commercial_kitchen_prep_tools.jpg',
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
    image: '/images/image__buffet___beverage_equipment__f2c7e5ac.webp',
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
    image: '/images/cambro_food_pans.jpg',
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
    image: '/images/image__buffet___beverage_equipment__f2c7e5ac.webp',
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
    image: '/images/image_2_f90fe997.webp',
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
    image: '/images/image_2_f90fe997.webp',
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
    image: '/images/paper_products_dispensers.jpg',
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
    image: '/images/image_2_f90fe997.webp',
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
    image: '/images/image__cleaning_equipment___janitorial__b009223f.webp',
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
    image: '/images/image__cleaning_equipment___janitorial__b009223f.webp',
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
    image: '/images/commercial_cleaning_chemicals.jpg',
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
    image: '/images/commercial_cleaning_chemicals.jpg',
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
    image: '/images/commercial_kitchen_equipment.jpg',
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
    title: 'Dosa Plates',
    subtitle: '',
    details: 'dosa plates is equipment used to support food preparation, storage, cooking, or ventilation in commercial kitchens.',
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
    image: '/images/commercial_flat_griddles.jpg',
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
    image: '/images/commercial_refrigeration_units.jpg',
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
    image: '/images/commercial_refrigeration_units.jpg',
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
    image: '/images/commercial_display_counters.jpg',
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
    image: '/images/commercial_chicken_grill_machine.jpg',
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
    image: '/images/commercial_food_prep_machines.jpg',
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
    image: '/images/commercial_food_prep_machines.jpg',
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
    image: '/images/commercial_deck_ovens.jpg',
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
    image: '/images/commercial_convection_oven.jpg',
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
    image: '/images/commercial_dishwasher.jpg',
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
    image: '/images/commercial_exhaust_hood.jpg',
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
    image: '/images/commercial_deep_fryers.jpg',
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
}

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
        ...specs
      ]
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
