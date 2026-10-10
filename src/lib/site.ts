export const site = {
  name: "Design Dimensions",
  shortName: "Design Dimensions",
  tagline: "INSPIRED DESIGNS | FLAWLESS PRINTS",
  subtitle: "UV PRINTING – INTERIORS & EXTERIORS | Most Modern & Eco-Friendly Printing Solutions",
  city: "Bengaluru",
  locality: "Dwarakanagar Stage 1, Channasandra",
  localityShort: "RR Nagar",
  kannadaPlace: "ದ್ವಾರಕಾನಗರ, ಚನ್ನಸಂದ್ರ · ಆರ್.ಆರ್. ನಗರ, ಬೆಂಗಳೂರು",
  description:
    "At DESIGN DIMENSIONS, we deliver premium-quality UV printing solutions for both interior and exterior applications. Our advanced UV printing technology produces vibrant, durable, scratch-resistant, and long-lasting prints on a wide range of materials, making it easy to create customized products that perfectly suit your requirements.",
  officePhoneDisplay: "+91 94825 58936",
  officePhoneE164: "919482558936",
  whatsappDisplay: "+91 93432 22266",
  whatsappE164: "919343222266",
  phoneDisplay: "+91 94825 58936",
  phoneE164: "919482558936",
  email: "print.designdimensions@gmail.com",
  addressLines: [
    "#8/2 A, 18th Main Road",
    "Dwarakanagar Stage 1, Channasandra",
    "Bangalore - 560098, Karnataka - India",
  ],
  exactAddress: "#8/2 A, 18TH MAIN ROAD, DWARAKANAGAR STAGE 1, CHANNASANDRA, BANGALORE - 560098, KARNATAKA - INDIA",
  landmark: "18th Main Road, Stage 1, Dwarakanagar, Channasandra (near RR Nagar & Kengeri)",
  plusCode: "VGXC+G2 Bengaluru, Karnataka",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=DESIGN+DIMENSIONS+-+UV+PRINTING+8%2F2+A+18TH+MAIN+ROAD+1ST+STAGE+Dwarakanagar+Channasandra+Bengaluru",
  googleMapsShareUrl: "https://share.google/Avf8u63F9MB2SZhwG",
  mapQuery: "DESIGN DIMENSIONS - UV PRINTING, #8/2 A, 18th Main Road, Dwarakanagar Stage 1, Channasandra, Bangalore - 560098",
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=77.5020%2C12.9120%2C77.5280%2C12.9320&layer=mapnik&marker=12.9219%2C77.5162",
  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 8:00 PM" },
    { day: "Sunday", time: "10:30 AM – 3:00 PM (Or by WhatsApp appointment)" },
  ],
  isWomenOwned: true,
  gstNote: "GST invoice and corporate billing available on request.",
  termsNote:
    "Work begins upon digital proof confirmation. GST invoice available on request. Walk-in consultations and direct WhatsApp proofs.",
  areas: [
    "Dwarakanagar",
    "Channasandra",
    "RR Nagar",
    "Ideal Homes",
    "Kengeri",
    "BHEL Layout",
    "Ullal",
    "Nagarbhavi",
    "Banashankari",
    "Mysore Road",
    "Global Village Tech Park",
    "BEML Layout",
  ],
  url: "https://design-dimensions-uv-printing.vercel.app",
  metaDescription:
    "Design Dimensions: Premier UV flatbed printing in Dwarakanagar, Channasandra, RR Nagar, Bangalore - 560098. Direct high-definition printing on Glass, Acrylic, WPC Doors, Wood, and Metal.",
  postalCode: "560098",
  state: "Karnataka",
  country: "India",
  countryCode: "IN",
  geo: {
    latitude: 12.9219,
    longitude: 77.5162,
  },
} as const;

export function canonicalUrl(path: string = "/"): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${cleanPath === "/" ? "" : cleanPath}`;
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#localbusiness`,
    name: "Design Dimensions",
    alternateName: "Design Dimensions - UV Printing",
    description: site.description,
    url: site.url,
    telephone: site.officePhoneDisplay,
    email: site.email,
    image: [
      `${site.url}/og.jpg`,
      `${site.url}/prints/uv-flatbed-printer-active-curing.jpg`,
      `${site.url}/prints/workshop-sample-wall.jpg`,
    ],
    logo: `${site.url}/brand/logo-transparent.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "#8/2 A, 18th Main Road, Dwarakanagar Stage 1, Channasandra",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560098",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.googleMapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:30",
        closes: "15:00",
      },
    ],
    areaServed: site.areas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
  };
}

export const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services & Materials" },
  { to: "/work", label: "Work Gallery" },
  { to: "/process", label: "How We Print" },
  { to: "/visit", label: "About & Studio" },
] as const;

export const prestigiousClients = [
  { name: "CSIR-NAL", category: "National Aerospace Laboratories", note: "Foundation Stone Plaques" },
  { name: "HAL", category: "Hindustan Aeronautics Limited", note: "Aviation & Institutional Displays" },
  { name: "PES University", category: "Premier University", note: "Campus Signage & Directories" },
  { name: "Union Bank of India", category: "National Bank", note: "Branch Signboards & Panels" },
  { name: "Dayananda Sagar Univ.", category: "University Campus", note: "Academic Boards" },
  { name: "SOBHA", category: "Luxury Real Estate", note: "Architectural & Site Boards" },
  { name: "Bangalore Club", category: "Heritage Club", note: "Custom Display Panels" },
  { name: "Gold's Gym", category: "Fitness Leader", note: "Studio Wall Graphics" },
  { name: "NEXGEN Fitness", category: "Fitness Studio", note: "Interior Gym Branding" },
] as const;

export const whyChooseUs = [
  {
    title: "Modern UV Printing Technology",
    description: "Industrial multi-axis UV flatbed printers with micro-piezo heads and instant active UV curing on flat materials.",
    highlight: "Active UV Curing",
  },
  {
    title: "Eco-Friendly Printing Process",
    description: "Low-VOC, odorless, non-toxic UV inks cured instantly without harmful chemical off-gassing or acid etching.",
    highlight: "Zero Toxic Fumes",
  },
  {
    title: "High Resolution & Vibrant Colors",
    description: "Up to 1440 DPI photographic detail with multi-layer high-density white ink backing for deep saturation.",
    highlight: "1440 DPI Precision",
  },
  {
    title: "Scratch & Water Resistant Prints",
    description: "Tough polymerized ink bonds permanently to glass, acrylic, metal, and WPC for complete washability.",
    highlight: "100% Waterproof",
  },
  {
    title: "Long-Lasting Quality",
    description: "UV-stable pigments designed to resist fading under continuous indoor lighting and harsh outdoor sun & rain.",
    highlight: "Fade Proof",
  },
  {
    title: "Custom Designs & Quick Turnaround",
    description: "Bespoke architectural cutting, bilingual Kannada & English layouts, digital on-screen proofs, and rapid turnaround.",
    highlight: "Fast Local Delivery",
  },
  {
    title: "Commercial & Residential Applications",
    description: "Tailored solutions for home pooja rooms, luxury villa doors, corporate offices, universities, cafes, and shop fascias.",
    highlight: "Homes & Enterprise",
  },
] as const;

export const materials = [
  {
    id: "wpc",
    name: "WPC Doors & Boards",
    uses: "Waterproof main doors, bedroom & pooja doors, decorative partitions & wall panels",
    image: "/prints/uv-wpc-doors-showroom.jpg",
    from: "Custom Quote on WhatsApp",
    highlight: "100% Termite & Waterproof",
  },
  {
    id: "glass",
    name: "Architectural & Toughened Glass",
    uses: "Sliding wardrobe profiles, frosted etch motifs, kitchen backsplashes, pooja door glass",
    image: "/prints/uv-wardrobe-tfn-sliding-glass.jpg",
    from: "Custom Quote on WhatsApp",
    highlight: "High-density White Ink underprint",
  },
  {
    id: "acrylic",
    name: "Cast Acrylic (3–10mm) & Signage",
    uses: "3D embossed brand letters, illuminated signs, gold relief plaques, photo panels",
    image: "/prints/uv-acrylic-cast-sheet.jpg",
    from: "Custom Quote on WhatsApp",
    highlight: "Diamond flame polished edges",
  },
  {
    id: "wood",
    name: "Wood, MDF & Laminates",
    uses: "Natural grain carvings, Kannada cafe wooden boards, wardrobe face laminates, kids room art",
    image: "/prints/uv-kannada-wood-cafe-signage.jpg",
    from: "Custom Quote on WhatsApp",
    highlight: "Preserves natural wood grain",
  },
  {
    id: "metal",
    name: "ACP Sheets, SS & Brass Metal",
    uses: "VVIP foundation stones, exterior shop fascias, machine labels, elevator plates",
    image: "/prints/uv-acp-exterior-sheet.jpg",
    from: "Custom Quote on WhatsApp",
    highlight: "Weather-proof UV & outdoor durability",
  },
  {
    id: "canvas",
    name: "Fine Art Canvas & Ceramic Tiles",
    uses: "Heritage portraits, pooja wall tiles, sacred sanctum backdrops, custom wallpapers",
    image: "/prints/uv-krishna-livingroom-backdrop.jpg",
    from: "Custom Quote on WhatsApp",
    highlight: "Museum grade fade-resistant inks",
  },
] as const;

export const allFlatSurfaces = [
  "Glass",
  "Acrylic",
  "Laminates",
  "ACP Sheets",
  "Wood",
  "Plastic",
  "Vinyl",
  "Gym Mats",
  "Paper Products",
  "Stainless Steel (SS)",
  "Metal",
  "Ceramic",
  "Floor Tiles",
  "Wall Tiles",
  "Carpets",
  "Sunpack Sheets",
  "Sunboards",
  "Plywood",
  "Flexiply",
  "PVC",
  "WPC Doors",
  "Fiberglass",
  "Wallpapers",
  "DTF Sheets",
  "Canvas",
  "Polycarbonate Sheets",
  "Fabric",
  "Books",
] as const;

export const substrateCategories = [
  {
    category: "Doors & Panels",
    substrates: ["WPC Doors", "PVC", "Flexiply", "Plywood", "Laminates", "Fiberglass"],
    description: "Waterproof, termite-proof door panels, pooja room partitions, and wardrobe face sheets.",
    badge: "High Priority",
  },
  {
    category: "Glass & Glazing",
    substrates: ["Glass", "Ceramic", "Floor Tiles", "Wall Tiles", "Polycarbonate Sheets"],
    description: "Toughened float glass, sliding wardrobe profiles, frosted dandelion etchings, and kitchen backsplashes.",
    badge: "Architectural",
  },
  {
    category: "Acrylic & Rigid",
    substrates: ["Acrylic", "Plastic", "Stainless Steel (SS)", "Metal", "ACP Sheets"],
    description: "Cast acrylic 3D cut letters, tactile embossed signs, brushed aluminium name boards, and outdoor ACP fascias.",
    badge: "Commercial",
  },
  {
    category: "Wood & Organics",
    substrates: ["Wood", "Plywood", "Flexiply", "Laminates", "Sunboards"],
    description: "Sanded MDF, natural grain plaques, custom cafe wooden signage, and kids' bedroom themed laminates.",
    badge: "Interiors",
  },
  {
    category: "Textiles & Flexible",
    substrates: ["Canvas", "Wallpapers", "Fabric", "Carpets", "Gym Mats", "Vinyl", "DTF Sheets"],
    description: "Fine art canvas, luxury textured wallpapers, heavy-duty gym rubber mats, and commercial floor carpets.",
    badge: "Décor",
  },
  {
    category: "Specialty & Niche",
    substrates: ["Sunpack Sheets", "Paper Products", "Books", "Ceramic"],
    description: "Hardbound book covers, Spot UV business cards, prototype presentation packaging, and ceramic table tops.",
    badge: "Bespoke",
  },
] as const;

export const services = [
  {
    slug: "wpc-doors-panels",
    title: "WPC Doors & Decorative Panels",
    summary: "Full-sheet UV printing on waterproof, termite-proof WPC doors and boards.",
    body: "We print complete door-height artworks directly onto WPC (Wood Plastic Composite) sheets. Perfect for devotional pooja doors, modern apartment entrances, and luxury wardrobe panels. Inks are scratch-resistant and will not bubble or peel like laminates.",
    typical: "3–5 working days",
    from: "Custom Quote on WhatsApp",
    image: "/prints/kamadhenu-door.jpg",
    group: "Interiors",
  },
  {
    slug: "acrylic-uv",
    title: "UV on Acrylic & 3D Cut Letters",
    summary: "Glossy, high-definition direct flatbed prints on 3mm, 5mm, 8mm & 10mm sheets.",
    body: "Printed directly with high-output UV curing on clear, frosted, white or black acrylic. Back-printed with opaque white layer for crystal-depth effect, or front-printed for tactile gloss. Includes precision CNC cutting, beveling and standoff wall fixtures.",
    typical: "2–4 working days",
    from: "Custom Quote on WhatsApp",
    image: "/prints/lion-splatter.jpg",
    group: "Rigid",
  },
  {
    slug: "glass-uv",
    title: "UV on Toughened Glass & Mirrors",
    summary: "Opaque white-ink backed prints for partitions, backsplashes and door inserts.",
    body: "UV flatbed technology prints directly onto toughened float glass. With our multi-layer white ink system, colors remain vivid and completely opaque even against backlight. Ideal for doctor clinic doors, shower cubicles, pooja mandir glass and award trophies.",
    typical: "3–5 working days",
    from: "Custom Quote on WhatsApp",
    image: "/prints/radha-krishna-glass.jpg",
    group: "Rigid",
  },
  {
    slug: "architectural-glass-decor",
    title: "Frosted Glass & Architectural Décor",
    summary: "Subtle translucent patterns, dandelion motifs, and heritage lattice effects.",
    body: "Special multi-pass print technique that creates frosted-etched appearances on glass without chemical acid. Highlights subtle grey, white, and translucent patterns that catch ambient room light gracefully.",
    typical: "3–5 working days",
    from: "Custom Quote on WhatsApp",
    image: "/prints/special-dandelion-glass-shelf.jpg",
    group: "Interiors",
  },
  {
    slug: "devotional-pooja-panels",
    title: "Devotional & Pooja Room Wall Art",
    summary: "Tirupati Balaji, Radha Krishna, Kamadhenu & temple sanctum murals.",
    body: "Customized sacred art printed on high-gloss acrylic, glass or gold-sheen boards. We specialize in high-contrast gold relief effects and rich traditional Indian iconography that adds holiness to home shrines.",
    typical: "2–4 working days",
    from: "Custom Quote on WhatsApp",
    image: "/prints/balaji-pooja-panel.jpg",
    group: "Décor",
  },
  {
    slug: "brass-metal-plaques",
    title: "Brass, SS & Foundation Stone Plaques",
    summary: "VVIP inauguration stones, government foundation plaques and brass signage.",
    body: "Trusted by national institutes including CSIR-NAL for state inaugurations. High-precision text rendering in Kannada, Hindi and English on brushed aluminium, mirror brass and heavy stainless steel sheets.",
    typical: "3–6 working days",
    from: "Custom Quote on WhatsApp",
    image: "/prints/csir-nal-foundation.jpg",
    group: "Institutional",
  },
  {
    slug: "corporate-office-branding",
    title: "Reception Walls & Office Directories",
    summary: "Logo walls, directory boards, elevator signs and brand fascia.",
    body: "End-to-end office branding for tech parks, universities and clinics. We have delivered branding boards for HAL, PES University, Sobha, Union Bank, and leading fitness chains across Bangalore.",
    typical: "3–6 working days",
    from: "Custom Quote on WhatsApp",
    image: "/prints/corporate-clients.jpg",
    group: "Commercial",
  },
  {
    slug: "shop-fascia-signage",
    title: "Shop Sign Boards & ACP Fascia",
    summary: "Weather-resistant outdoor boards, 3D lettering and storefront displays.",
    body: "Tough outdoor boards on ACP sheets with UV-cured pigments that withstand Bangalore sun and monsoon rain. Bring your shop dimensions or a photo with a tape measure; we guide you on the best layout.",
    typical: "4–7 working days",
    from: "Custom Quote on WhatsApp",
    image: "/prints/official-board.jpg",
    group: "Commercial",
  },
  {
    slug: "house-nameplates",
    title: "Villa & House Nameplates (Kannada + English)",
    summary: "Custom doctor, advocate, apartment and villa gate nameboards.",
    body: "Acrylic, wood-grain, brushed metallic and glass-style nameplates. Bilingual layouts in Kannada Unicode and English are designed with you on-screen. Proof sent on WhatsApp before printing.",
    typical: "2–4 working days",
    from: "Custom Quote on WhatsApp",
    image: "/prints/branding-sample-disc.jpg",
    group: "Plates",
  },
  {
    slug: "spot-uv-visiting-cards",
    title: "Spot UV Business Cards",
    summary: "350 GSM premium matte stock with selective high-gloss raised UV varnish.",
    body: "Distinguish your cards with tactile, raised UV varnish on your logo or typography. Minimum practical runs starting from 300, 500 to 1,000 cards. Full artwork review via WhatsApp before press.",
    typical: "3–5 working days",
    from: "Custom Quote on WhatsApp",
    image: "/prints/cards.jpg",
    group: "Paper",
  },
  {
    slug: "fine-art-canvas-tiles",
    title: "Canvas Art, Tiles & Custom Wallpapers",
    summary: "Vibrant high-resolution photo prints on canvas, ceramic tiles and mats.",
    body: "From Mysore Palace heritage landscapes to modern pop art, we print ultra-vibrant, smudge-free artwork on fine cotton canvas, textured ceramic tiles, gym rubber mats and bespoke wallpaper rolls.",
    typical: "2–4 working days",
    from: "Custom Quote on WhatsApp",
    image: "/prints/mysore-palace.jpg",
    group: "Décor",
  },
] as const;

export const works = [
  // 1. Doors & Panels (High Priority WPC & Carved)
  {
    id: "wpc-doors-showroom",
    title: "Architectural WPC Carved Doors Display",
    material: "Direct UV on Waterproof WPC Board",
    area: "Studio Showroom, Bengaluru",
    image: "/prints/uv-wpc-doors-showroom.jpg",
    category: "Doors & Panels",
    featured: true,
    tag: "WPC Doors",
  },
  {
    id: "wpc-luxury-entrance",
    title: "Luxury Residential WPC Entrance Door",
    material: "High-Resolution UV Gold Inlay Pattern on WPC",
    area: "Villa Residence, RR Nagar",
    image: "/prints/uv-wpc-luxury-entrance-door.jpg",
    category: "Doors & Panels",
    featured: true,
    tag: "Entrance Door",
  },
  {
    id: "wpc-boards-dual",
    title: "Dual Floral & Geometric WPC Sample Boards",
    material: "Carved WPC Texture with Direct UV Ink Polymerization",
    area: "Architectural Sample Stand",
    image: "/prints/uv-wpc-boards-dual-display.jpg",
    category: "Doors & Panels",
    featured: true,
    tag: "Dual Sample",
  },
  {
    id: "wpc-door-carved-sample",
    title: "Full-Height Decorative WPC Interior Door",
    material: "Direct UV on Termite-Proof WPC Sheet",
    area: "Apartment Bedroom, Channasandra",
    image: "/prints/uv-wpc-door-carved-sample.jpg",
    category: "Doors & Panels",
    featured: false,
    tag: "Carved Door",
  },
  {
    id: "kamadhenu-door",
    title: "Kamadhenu & Kalpavriksha Sacred Door Panel",
    material: "Pooja Room WPC & Glass Inlay",
    area: "Banashankari Residence",
    image: "/prints/kamadhenu-door.jpg",
    category: "Doors & Panels",
    featured: false,
    tag: "Pooja Door",
  },
  {
    id: "print-door-finish",
    title: "Architectural Wood & Door Direct Print",
    material: "Scratch-Resistant UV Curing on Door Core",
    area: "Interior Fitout, Ideal Homes",
    image: "/prints/uv-print-door-finish.jpg",
    category: "Doors & Panels",
    featured: false,
    tag: "Door Finish",
  },

  // 2. Glass & Glazing (Architectural, Wardrobes, Frosted)
  {
    id: "wardrobe-tfn-glass",
    title: "Luxury Sliding Wardrobe TFN Profile Glass",
    material: "Direct UV Back-Printed Float Glass with Opaque White Layer",
    area: "Master Bedroom Interior, Bengaluru",
    image: "/prints/uv-wardrobe-tfn-sliding-glass.jpg",
    category: "Glass & Glazing",
    featured: true,
    tag: "Wardrobe Glass",
  },
  {
    id: "frosted-dancer-glass",
    title: "Classical Bharatanatyam Dancer on Frosted Glass",
    material: "Translucent White Ink & Frosted Etched Effect on Glass",
    area: "Dance Academy & Cultural Foyer",
    image: "/prints/uv-dancer-frosted-glass.jpg",
    category: "Glass & Glazing",
    featured: true,
    tag: "Frosted Glass",
  },
  {
    id: "special-uv-dandelion",
    title: "Dandelion & Heritage Arches Frosted Glass",
    material: "Direct UV on Translucent Glass & Acrylic",
    area: "RR Nagar Studio Showcase",
    image: "/prints/special-dandelion-glass-shelf.jpg",
    category: "Glass & Glazing",
    featured: true,
    tag: "Translucent Craft",
  },
  {
    id: "glass-kitchen-backsplash",
    title: "Panoramic Kitchen Counter Glass Backsplash",
    material: "Toughened Heat-Resistant Float Glass UV Print",
    area: "Modern Modular Kitchen, RR Nagar",
    image: "/prints/uv-glass-kitchen-backsplash.jpg",
    category: "Glass & Glazing",
    featured: false,
    tag: "Backsplash",
  },
  {
    id: "dancer-door-panel",
    title: "Indian Classical Dance Glass Partition Panel",
    material: "High-Resolution Multi-Pass UV Print on Float Glass",
    area: "Interior Partition, Ideal Homes",
    image: "/prints/uv-dancer-door-panel.jpg",
    category: "Glass & Glazing",
    featured: false,
    tag: "Dance Panel",
  },
  {
    id: "glass-wardrobe-profile",
    title: "Modular Wardrobe Aluminum Profile Glass",
    material: "Direct UV on Clear & Frosted Glass",
    area: "Wardrobe Manufacturer Fitout",
    image: "/prints/uv-glass-wardrobe-profile.jpg",
    category: "Glass & Glazing",
    featured: false,
    tag: "Profile Glass",
  },
  {
    id: "radha-krishna-triptych",
    title: "Radha Krishna Divine Hands Triptych",
    material: "3-Piece Toughened Glass with White Layer",
    area: "Luxury Residence, RR Nagar",
    image: "/prints/radha-krishna-glass.jpg",
    category: "Glass & Glazing",
    featured: false,
    tag: "Multi-Panel Glass",
  },

  // 3. Acrylic & Signage (Cast Acrylic, Relief, Names)
  {
    id: "acrylic-cast-sheet",
    title: "High-Gloss Cast Acrylic Print (5mm)",
    material: "Flame Polished Cast Acrylic with Opaque White Backing",
    area: "Corporate Installation",
    image: "/prints/uv-acrylic-cast-sheet.jpg",
    category: "Acrylic & Signage",
    featured: true,
    tag: "Cast Acrylic",
  },
  {
    id: "lion-splash",
    title: "Majestic Splash Lion Vivid Acrylic Panel",
    material: "Full-Bed Acrylic UV Flatbed Print",
    area: "Interior Art Installation",
    image: "/prints/lion-splatter.jpg",
    category: "Acrylic & Signage",
    featured: true,
    tag: "Vibrant Color",
  },
  {
    id: "acrylic-embossed-signage",
    title: "3D Textured & Embossed Acrylic Brand Signage",
    material: "Multi-Layer UV Varnish & High-Opacity White on Cast Acrylic",
    area: "Corporate Brand Installation",
    image: "/prints/uv-acrylic-embossed-signage.jpg",
    category: "Acrylic & Signage",
    featured: true,
    tag: "Tactile Relief",
  },
  {
    id: "aluminium-name-board",
    title: "Brushed Aluminium Architectural Name Board",
    material: "Direct UV on Heavy Gauge Brushed Aluminium",
    area: "Villa Entrance, Bengaluru",
    image: "/prints/uv-aluminium-name-board.jpg",
    category: "Acrylic & Signage",
    featured: false,
    tag: "Name Board",
  },

  // 4. Wood & Laminates (Natural Wood, MDF, Wardrobe Laminates)
  {
    id: "kannada-wood-cafe",
    title: "Kannada Wood Signage: Sathvika Vilag THE CAFE",
    material: "Direct Flatbed UV on Natural Textured Wood",
    area: "Heritage Café, Bengaluru",
    image: "/prints/uv-kannada-wood-cafe-signage.jpg",
    category: "Wood & Laminates",
    featured: true,
    tag: "Kannada Wood Art",
  },
  {
    id: "laminates-kids-room",
    title: "Themed Kids Room Wardrobe Laminates",
    material: "Scratch-Resistant UV Print on Wardrobe Laminates",
    area: "Children's Bedroom, Kengeri",
    image: "/prints/uv-laminates-kids-room-decor.jpg",
    category: "Wood & Laminates",
    featured: true,
    tag: "Kids Bedroom",
  },
  {
    id: "laminate-sheet-print",
    title: "Custom Printed Interior Laminate Sheet",
    material: "High-Pressure Laminate Direct UV Print",
    area: "Interior Millwork Fitting",
    image: "/prints/uv-laminate-sheet-print.jpg",
    category: "Wood & Laminates",
    featured: false,
    tag: "Laminate Sheet",
  },
  {
    id: "sunflowers-decor",
    title: "Sunflowers Duotone Contemporary Art",
    material: "Direct UV on Textured Wood & MDF",
    area: "Café Décor, Kengeri",
    image: "/prints/sunflowers-decor.jpg",
    category: "Wood & Laminates",
    featured: false,
    tag: "Wood Print",
  },
  {
    id: "mdf-printing-panel",
    title: "Precision Sanded MDF Decorative Panel",
    material: "Direct UV on Sanded Medium Density Fiberboard",
    area: "Acoustic & Wall Paneling",
    image: "/prints/uv-mdf-printing-panel.jpg",
    category: "Wood & Laminates",
    featured: false,
    tag: "MDF Print",
  },

  // 5. ACP & Metal (Exterior Signs, Foundation Stones)
  {
    id: "acp-exterior-sheet",
    title: "Weather-Proof ACP Exterior Signboard",
    material: "Aluminum Composite Panel (ACP) with UV Resistance",
    area: "Commercial Storefront, Bengaluru",
    image: "/prints/uv-acp-exterior-sheet.jpg",
    category: "ACP & Metal",
    featured: true,
    tag: "ACP Board",
  },
  {
    id: "csir-nal-foundation",
    title: "CSIR-NAL State Foundation Plaque",
    material: "Mirror Gold Metal Plate UV Inscription",
    area: "National Aerospace Laboratories, Bengaluru",
    image: "/prints/csir-nal-foundation.jpg",
    category: "ACP & Metal",
    featured: true,
    tag: "VVIP Plaque",
  },
  {
    id: "metal-acp-architectural",
    title: "Architectural Exterior ACP Facia Board",
    material: "UV Flatbed Cured Aluminum Composite Panel",
    area: "Exterior Commercial Signage",
    image: "/prints/uv-metal-acp-architectural.jpg",
    category: "ACP & Metal",
    featured: false,
    tag: "ACP Facia",
  },

  // 6. Devotional & Sanctum (Pooja Inlays, Krishna, Balaji, Tiles)
  {
    id: "krishna-livingroom-backdrop",
    title: "Lord Krishna Living Room Wall Backdrop",
    material: "Ultra High-Resolution Multi-Layer UV Mural",
    area: "Luxury Living Room, Banashankari",
    image: "/prints/uv-krishna-livingroom-backdrop.jpg",
    category: "Devotional & Sanctum",
    featured: true,
    tag: "Living Room Mural",
  },
  {
    id: "pooja-room-3panel-glass",
    title: "3-Panel Pooja Mandir Sanctum Glass Inlay",
    material: "Panoramic Toughened Glass Inlay with Gold Embellishment",
    area: "Sacred Mandir, Dwarakanagar",
    image: "/prints/uv-pooja-room-3panel-glass-inlay.jpg",
    category: "Devotional & Sanctum",
    featured: true,
    tag: "Pooja Mandir",
  },
  {
    id: "balaji-gold-acrylic",
    title: "Lord Venkateshwara Balaji Gold Foil Panel",
    material: "Gloss Black Acrylic with Gold Relief Inks",
    area: "Pooja Room Mandir, Ideal Homes",
    image: "/prints/uv-balaji-gold-acrylic-panel.jpg",
    category: "Devotional & Sanctum",
    featured: true,
    tag: "Sacred Art",
  },
  {
    id: "shiva-parvati-pooja",
    title: "Lord Shiva, Parvati & Ganesha Family Sanctum",
    material: "Vibrant UV on Ceramic & Glass Panel",
    area: "Home Mandir, RR Nagar",
    image: "/prints/uv-shiva-parvati-pooja-panel.jpg",
    category: "Devotional & Sanctum",
    featured: false,
    tag: "Devotional",
  },
  {
    id: "ceramic-tiles-waterproof",
    title: "Custom Waterproof UV Ceramic Wall Tiles",
    material: "Direct UV Cured Glaze on Ceramic Tiles",
    area: "Bathroom & Pooja Tile Decor",
    image: "/prints/uv-ceramic-tiles-waterproof.jpg",
    category: "Devotional & Sanctum",
    featured: false,
    tag: "Ceramic Tiles",
  },

  // 7. Workshop & Machine (Active UV Curing Flatbed & Master Wall)
  {
    id: "flatbed-printer-active",
    title: "Industrial Flatbed UV Printer in Active Operation",
    material: "Micro-Piezo Printhead & Instant Active UV Curing",
    area: "Design Dimensions In-House Workshop",
    image: "/prints/uv-printer-active-curing-head.jpg",
    category: "Workshop & Machine",
    featured: true,
    tag: "Active UV Curing",
  },
  {
    id: "workshop-showroom-wall",
    title: "Design Dimensions 30+ Surfaces Master Sample Wall",
    material: "Live Workshop Demonstration on 30+ Substrates",
    area: "Workshop Studio, Dwarakanagar 1st Stage, RR Nagar",
    image: "/prints/workshop-sample-wall.jpg",
    category: "Workshop & Machine",
    featured: true,
    tag: "Studio Wall",
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Artwork Submission & Pre-Flight",
    body: "Send your design on WhatsApp or walk in with a phone, USB drive or paper reference. We check resolution (300 DPI), color profile (CMYK) and bilingual spelling (Kannada & English).",
  },
  {
    n: "02",
    title: "Substrate & Thickness Selection",
    body: "Choose from 30+ flat rigid surfaces — WPC doors, toughened glass, acrylic (3–10mm), wood/MDF, ACP sheets, brass, or fine canvas. Standard 8×4 ft bed size handles custom sizes effortlessly.",
  },
  {
    n: "03",
    title: "Digital Proof Approval (WhatsApp / Screen)",
    body: "We generate a full-scale digital proof and share it directly on WhatsApp or our studio monitor. Printing only commences once you give written sign-off. No guesswork.",
  },
  {
    n: "04",
    title: "Precision UV Flatbed Printing & Curing",
    body: "Micro-piezo printheads lay UV-curable inks that are instantly polymerized with high-intensity UV lamps. Multiple layers (Primer + White + CMYK + Gloss/Varnish) are deposited in one pass.",
  },
  {
    n: "05",
    title: "Finishing & Pickup / Local Delivery",
    body: "We trim, flame polish edges, drill holes, and pack with scratch-resistant protection. Pickup at Ideal Homes Circle or quick Porter delivery across South-West Bengaluru.",
  },
] as const;

export const fileSpecs = [
  { label: "Supported Formats", value: "PDF, AI, PSD, CDR, TIFF, PNG, High-Res JPG" },
  { label: "Resolution", value: "300 DPI at 100% final output size" },
  { label: "Color Space", value: "CMYK preferred (RGB automatically mapped with proof)" },
  { label: "Bleed Allowance", value: "3 mm on all trimmed perimeter edges" },
  { label: "Fonts & Text", value: "Convert fonts to curves/outlines, or send font files" },
  { label: "White Ink Layer", value: "Provide vector spot color named 'Spot1' or let our team create it" },
  { label: "Kannada Typography", value: "Unicode text or high-resolution vector curves" },
] as const;

export const faqs = [
  {
    q: "Can I place an order online?",
    a: "No. This website is purely for service details, technical guidance, and direct WhatsApp consultations. Final proofs and orders are confirmed directly via WhatsApp or at our studio.",
  },
  {
    q: "Who are your notable clients?",
    a: "We have proudly crafted high-precision UV printing for prestigious institutions including CSIR-National Aerospace Laboratories (foundation stones), Hindustan Aeronautics Limited (HAL), PES University, Union Bank of India, SOBHA Developers, Bangalore Club, and Gold's Gym.",
  },
  {
    q: "Can you print on my own material / doors?",
    a: "Yes! You can bring your own WPC doors, plywood sheets, cut glass panels, marble/tiles, or metal sheets. As long as the surface is relatively flat and fits within our 8×4 ft bed, we can UV print on it.",
  },
  {
    q: "What is the turnaround time for a job?",
    a: "Standard nameplates, acrylic panels, and signboards typically take 2–4 working days. Large format WPC doors, complex glass multi-panels, or multi-piece corporate orders take 4–6 working days. Rush jobs can be accommodated on request.",
  },
  {
    q: "Will the colors fade under outdoor Bengaluru sunlight and rain?",
    a: "UV cured inks are inherently weatherproof and UV-resistant because the pigments are photopolymerized to the surface. For severe outdoor exposure on ACP and metal, we also apply specialized protective overcoats.",
  },
  {
    q: "Can you design or fix my artwork for me?",
    a: "Yes! In-house designing and pre-press artwork preparation are available (designing charges applicable). Bring your logos, photos, text, and concept — our team will create a polished layout for you.",
  },
  {
    q: "Do you deliver to Kengeri, Banashankari, or Nagarbhavi?",
    a: "Yes. In addition to studio pickup at Ideal Homes Circle, we regularly coordinate Porter drops and delivery across RR Nagar, Kengeri, Mysore Road, Banashankari, Nagarbhavi, and throughout Bengaluru.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Single piece orders are welcomed! You can print one personalized home nameplate, one pooja door panel, or one corporate plaque. For spot-UV visiting cards, the practical minimum run is 300 cards.",
  },
] as const;

export const serviceOptions = [
  "WPC Doors & Decorative Panels",
  "UV on Acrylic & 3D Cut Letters",
  "UV on Toughened Glass & Partitions",
  "Frosted Glass & Dandelion Décor",
  "Devotional & Pooja Room Wall Art",
  "Brass, SS & Foundation Stone Plaques",
  "Corporate Office & Reception Branding",
  "Shop Fascia & ACP Sign Boards",
  "House Name Plates (Kannada + English)",
  "Spot UV Visiting Cards (350 GSM)",
  "Canvas Art & Wall Tiles",
  "Not sure yet — advise me on material",
] as const;

export function whatsappHref(text?: string) {
  const msg =
    text ??
    `Hello Design Dimensions, I would like a quote for UV flatbed printing. I am located in / near RR Nagar, Bengaluru.`;
  return `https://wa.me/${site.whatsappE164}?text=${encodeURIComponent(msg)}`;
}

export type Enquiry = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  size: string;
  material: string;
  message: string;
};

const ENQUIRY_KEY = "dd-uv-enquiries";

export function loadEnquiries(): Enquiry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(ENQUIRY_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Enquiry[]) : [];
  } catch {
    return [];
  }
}

export function saveEnquiry(entry: Omit<Enquiry, "id" | "createdAt">): Enquiry {
  const full: Enquiry = {
    ...entry,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const next = [full, ...loadEnquiries()].slice(0, 40);
  localStorage.setItem(ENQUIRY_KEY, JSON.stringify(next));
  return full;
}
