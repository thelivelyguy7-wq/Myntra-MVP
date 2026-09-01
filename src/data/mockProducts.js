export const mockProducts = [
  {
    id: "p1",
    name: "Men Air Force 1 '07 Sneakers",
    brand: "Nike",
    price: 7495,
    originalPrice: 7495,
    rating: 4.8,
    reviewCount: 4200,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop",
    colors: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: [
      { size: "3", available: false },
      { size: "4", available: false },
      { size: "5", available: false },
      { size: "6", available: true },
      { size: "7", available: true },
      { size: "8", available: true },
      { size: "9", available: true },
      { size: "10", available: true },
      { size: "11", available: true },
      { size: "12", available: false }
    ],
    features: [
      "SOFTRIDE: Soft foam designed for all-day cushioning and comfort",
      "The upper of the shoes is made with at least 30% recycled materials."
    ],
    details: {
      "Width": "Regular",
      "Toe Type": "Rounded",
      "Fastener": "Laces",
      "Main material of upper": "Textile",
      "Zoned rubber outsole": "Yes",
      "Lining": "Textile",
      "Cushioning": "Medium",
      "Pronation": "Neutral"
    },
    materialCare: {
      "Upper Material": "Mesh",
      "Sole Material": "Rubber",
      "Care": "Wipe with a clean, dry cloth to remove dust"
    },
    specifications: {
      "Sport": "Running",
      "Fastening": "Lace-Ups",
      "Ankle Height": "Regular",
      "Outsole Type": "Marking",
      "Cleats": "No Cleats",
      "Pronation for Running Shoes": "Neutral",
      "Arch Type": "Medium",
      "Cushioning": "Medium"
    },
    attributes: {
      material: "Leather",
      fit: "Regular",
      delivery: "2 Days"
    },
    decisionSignals: ["Bestseller", "Highly Rated"],
    aiEvidence: "The Nike Air Force 1 '07 is a timeless classic with a 4.8 rating from over 4,200 users. Its durable leather build and versatile design make it a reliable choice for everyday wear.",
    aiTradeOffs: "Most durable and iconic, but comes at a premium price."
  },
  {
    id: "p2",
    name: "Men Solid Slip-On Sneakers",
    brand: "Puma",
    price: 2999,
    originalPrice: 4999,
    rating: 4.1,
    reviewCount: 1530,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&auto=format&fit=crop",
    colors: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: [
      { size: "6", available: true },
      { size: "7", available: false },
      { size: "8", available: true },
      { size: "9", available: true },
      { size: "10", available: true }
    ],
    features: [
      "Slip-on construction for easy on and off",
      "Lightweight midsole for supreme cushioning"
    ],
    details: {
      "Width": "Regular",
      "Toe Type": "Rounded",
      "Fastener": "Slip-on",
      "Main material of upper": "Mesh",
      "Cushioning": "High"
    },
    materialCare: {
      "Upper Material": "Mesh",
      "Sole Material": "EVA",
      "Care": "Wipe with a clean, dry cloth to remove dust"
    },
    specifications: {
      "Sport": "Lifestyle",
      "Fastening": "Slip-On",
      "Ankle Height": "Regular",
      "Outsole Type": "Non-Marking"
    },
    attributes: {
      material: "Mesh",
      fit: "Snug",
      delivery: "3 Days"
    },
    decisionSignals: ["Great Value"],
    aiEvidence: "These Puma slip-ons are an excellent value pick. The mesh material offers breathability, making them perfect for light, everyday comfort on a budget.",
    aiTradeOffs: "Best value and highly breathable, but lower overall rating."
  },
  {
    id: "p3",
    name: "Unisex Chuck Taylor All Star",
    brand: "Converse",
    price: 3999,
    originalPrice: 3999,
    rating: 4.6,
    reviewCount: 8900,
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=600&auto=format&fit=crop",
    colors: [
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: [
      { size: "5", available: true },
      { size: "6", available: true },
      { size: "7", available: true },
      { size: "8", available: false },
      { size: "9", available: true },
      { size: "10", available: true }
    ],
    features: [
      "Classic canvas upper for lightweight, flexible comfort",
      "Vulcanized rubber sole for durability",
      "Medial eyelets enhance airflow"
    ],
    details: {
      "Width": "Narrow",
      "Toe Type": "Rubber Toe Cap",
      "Fastener": "Laces",
      "Main material of upper": "Canvas",
      "Cushioning": "Low"
    },
    materialCare: {
      "Upper Material": "Canvas",
      "Sole Material": "Rubber",
      "Care": "Machine wash cold, air dry"
    },
    specifications: {
      "Sport": "Casual",
      "Fastening": "Lace-Ups",
      "Ankle Height": "High-Top",
      "Outsole Type": "Textured"
    },
    attributes: {
      material: "Canvas",
      fit: "Narrow",
      delivery: "Tomorrow"
    },
    decisionSignals: ["Fastest Delivery"],
    aiEvidence: "With over 8,900 reviews, the Chuck Taylor All Star is a globally trusted sneaker. It offers the fastest delivery (Tomorrow) and a classic canvas look that pairs with almost any outfit.",
    aiTradeOffs: "Fastest delivery and classic style, but has a narrow fit."
  },
  {
    id: "p4",
    name: "Men Ultraboost Light Running Shoes",
    brand: "Adidas",
    price: 13599,
    originalPrice: 16999,
    rating: 4.7,
    reviewCount: 512,
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=600&auto=format&fit=crop",
    colors: [
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: [
      { size: "7", available: true },
      { size: "8", available: true },
      { size: "9", available: false },
      { size: "10", available: true },
      { size: "11", available: true }
    ],
    features: [
      "Lightest Ultraboost ever made",
      "Linear Energy Push system for more responsiveness",
      "Continental™ Rubber outsole for extraordinary traction"
    ],
    details: {
      "Width": "Regular",
      "Toe Type": "Rounded",
      "Fastener": "Laces",
      "Main material of upper": "Primeknit",
      "Cushioning": "Maximum"
    },
    materialCare: {
      "Upper Material": "Textile/Synthetic",
      "Sole Material": "Rubber",
      "Care": "Clean with a soft damp cloth"
    },
    specifications: {
      "Sport": "Running",
      "Fastening": "Lace-Ups",
      "Ankle Height": "Regular",
      "Arch Type": "Medium",
      "Pronation": "Neutral"
    },
    attributes: {
      material: "Primeknit",
      fit: "Regular",
      delivery: "4 Days"
    },
    decisionSignals: ["Premium Choice", "High Performance"],
    aiEvidence: "The Ultraboost Light is the ultimate performance shoe with a strong 4.7 rating. Its Primeknit upper and advanced cushioning provide unmatched comfort for running and walking.",
    aiTradeOffs: "Highest performance and rating, but is the most expensive option."
  },
  {
    id: "p5",
    name: "Men 574 Core Sneakers",
    brand: "New Balance",
    price: 7999,
    originalPrice: 9999,
    rating: 4.5,
    reviewCount: 2200,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=600&auto=format&fit=crop",
    colors: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: [
      { size: "6", available: true },
      { size: "7", available: true },
      { size: "8", available: true },
      { size: "9", available: true },
      { size: "10", available: false },
      { size: "11", available: true }
    ],
    features: [
      "ENCAP midsole cushioning combines lightweight foam with a durable polyurethane rim",
      "Suede and mesh upper for premium feel and breathability"
    ],
    details: {
      "Width": "Wide Available",
      "Toe Type": "Rounded",
      "Fastener": "Laces",
      "Main material of upper": "Suede/Mesh",
      "Cushioning": "Medium"
    },
    materialCare: {
      "Upper Material": "Suede",
      "Sole Material": "Rubber",
      "Care": "Use a suede brush to gently remove dirt"
    },
    specifications: {
      "Sport": "Lifestyle",
      "Fastening": "Lace-Ups",
      "Ankle Height": "Regular",
      "Outsole Type": "Durable Rubber"
    },
    attributes: {
      material: "Suede/Mesh",
      fit: "Wide Available",
      delivery: "2 Days"
    },
    decisionSignals: ["Comfort Focused"],
    aiEvidence: "The New Balance 574 Core perfectly balances retro style with modern comfort. The suede/mesh mix and wide fit availability make it ideal for all-day wear.",
    aiTradeOffs: "Great comfort and wide fit options, but slightly heavier build."
  },
  {
    id: "p6",
    name: "Men Old Skool Classic Sneakers",
    brand: "Vans",
    price: 4999,
    originalPrice: 4999,
    rating: 4.7,
    reviewCount: 6500,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=600&auto=format&fit=crop",
    colors: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=600&auto=format&fit=crop"
    ],
    sizes: [
      { size: "5", available: true },
      { size: "6", available: true },
      { size: "7", available: false },
      { size: "8", available: true },
      { size: "9", available: true },
      { size: "10", available: true }
    ],
    features: [
      "Iconic Vans side stripe",
      "Reinforced toe caps to withstand repeated wear",
      "Signature rubber waffle outsoles"
    ],
    details: {
      "Width": "Regular",
      "Toe Type": "Rounded",
      "Fastener": "Laces",
      "Main material of upper": "Suede/Canvas",
      "Cushioning": "Low"
    },
    materialCare: {
      "Upper Material": "Canvas/Suede",
      "Sole Material": "Rubber",
      "Care": "Spot clean with mild soap and water"
    },
    specifications: {
      "Sport": "Skateboarding",
      "Fastening": "Lace-Ups",
      "Ankle Height": "Low-Top",
      "Outsole Type": "Waffle Rubber"
    },
    attributes: {
      material: "Suede/Canvas",
      fit: "Regular",
      delivery: "3 Days"
    },
    decisionSignals: ["Timeless Classic", "Popular"],
    aiEvidence: "A staple in streetwear, the Vans Old Skool boasts a strong 4.7 rating. It offers excellent durability and a timeless look at a very reasonable mid-tier price point.",
    aiTradeOffs: "Very popular and durable, but lacks advanced athletic cushioning."
  }
];
