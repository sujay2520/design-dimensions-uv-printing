export const site = {
  name: "Design Dimensions",
  shortName: "Design Dimensions",
  tagline: "INSPIRED DESIGNS | FLAWLESS PRINTS",
  city: "Bengaluru",
  locality: "Rajarajeshwari Nagar",
  localityShort: "RR Nagar",
  kannadaPlace: "ಆರ್.ಆರ್. ನಗರ · ಬೆಂಗಳೂರು",
  description:
    "Premier UV flatbed printing studio at Ideal Homes Circle, RR Nagar, Bengaluru. Direct printing on Acrylic, Glass, Wood, WPC Doors, ACP, Metal, Tiles, Canvas, Wallpaper & 30+ flat surfaces. Eco-friendly instant UV curing. Walk-in studio & WhatsApp enquiries only.",
  phoneDisplay: "+91 94825 58936",
  phoneE164: "919482558936",
  email: "print.designdimensions@gmail.com",
  addressLines: [
    "Shop 14, Ideal Homes Circle",
    "Rajarajeshwari Nagar (RR Nagar)",
    "Bengaluru, Karnataka 560098",
  ],
  landmark: "Near Ideal Homes Circle, close to RR Nagar Arch & BEML Layout",
  mapQuery: "Ideal Homes Circle, Rajarajeshwari Nagar, Bengaluru 560098",
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=77.5005%2C12.9105%2C77.5355%2C12.9385&layer=mapnik&marker=12.9244%2C77.5191",
  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 8:00 PM" },
    { day: "Sunday", time: "10:30 AM – 3:00 PM (Or by WhatsApp)" },
  ],
  gstNote: "GST invoice and corporate billing available on request.",
  termsNote:
    "Designing charges applicable. 100% advance / confirmation to process final print work. GST % applicable. No online payment on this website — cash, UPI or NEFT at studio.",
  areas: [
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
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services & Materials" },
  { to: "/work", label: "Work Gallery" },
  { to: "/process", label: "How We Print" },
  { to: "/visit", label: "Visit Studio" },
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

export const materials = [
  {
    id: "wpc",
    name: "WPC Doors & Boards",
    uses: "Waterproof main doors, bedroom & pooja doors, decorative partitions",
    image: "/prints/kamadhenu-door.jpg",
    from: "Custom size quotation",
    highlight: "100% Termite & Waterproof",
  },
  {
    id: "glass",
    name: "Toughened Glass",
    uses: "Office partitions, kitchen backsplashes, pooja door glass, award trophies",
    image: "/prints/radha-krishna-glass.jpg",
    from: "Direct flatbed print",
    highlight: "High-density White Ink underprint",
  },
  {
    id: "acrylic",
    name: "Cast Acrylic (3–10mm)",
    uses: "Corporate logo walls, illuminated signs, photo panels, 3D cut letters",
    image: "/prints/lion-splatter.jpg",
    from: "From ₹150 / sq ft",
    highlight: "Diamond flame polished edges",
  },
  {
    id: "wood",
    name: "Wood, MDF & Teak Ply",
    uses: "Natural grain plaques, temple frames, café menus, customized wall art",
    image: "/prints/sunflowers-decor.jpg",
    from: "From ₹180 / sq ft",
    highlight: "Preserves natural wood grain",
  },
  {
    id: "metal",
    name: "Metal, Brass & ACP",
    uses: "VVIP foundation stones, outdoor shop fascias, machine labels, elevator plates",
    image: "/prints/csir-nal-foundation.jpg",
    from: "Quote by gauge & size",
    highlight: "Weather-proof UV & lacquer",
  },
  {
    id: "canvas",
    name: "Fine Art Canvas & Tiles",
    uses: "Heritage portraits, pooja wall tiles, pool textures, wallpaper panels",
    image: "/prints/mysore-palace.jpg",
    from: "Custom sizes",
    highlight: "Museum grade fade-resistant inks",
  },
] as const;

export const allFlatSurfaces = [
  "WPC Doors",
  "Toughened Glass",
  "Cast Acrylic",
  "Laminates",
  "ACP Sheets",
  "Natural Wood",
  "Sanded MDF",
  "Plywood & Flexiply",
  "Vinyl & Sunboards",
  "Sunpack Sheets",
  "Fine Art Canvas",
  "Stainless Steel",
  "Mirror Brass",
  "Ceramic Tiles",
  "Floor & Wall Tiles",
  "Carpets & Floor Mats",
  "Gym Mats",
  "Paper Products",
  "PVC & Polycarbonate",
  "Fiberglass",
  "Custom Wallpapers",
  "Fabric & DTF Sheets",
  "Books & Hardbound Covers",
] as const;

export const services = [
  {
    slug: "wpc-doors-panels",
    title: "WPC Doors & Decorative Panels",
    summary: "Full-sheet UV printing on waterproof, termite-proof WPC doors and boards.",
    body: "We print complete door-height artworks directly onto WPC (Wood Plastic Composite) sheets. Perfect for devotional pooja doors, modern apartment entrances, and luxury wardrobe panels. Inks are scratch-resistant and will not bubble or peel like laminates.",
    typical: "3–5 working days",
    from: "Quote upon door size",
    image: "/prints/kamadhenu-door.jpg",
    group: "Interiors",
  },
  {
    slug: "acrylic-uv",
    title: "UV on Acrylic & 3D Cut Letters",
    summary: "Glossy, high-definition direct flatbed prints on 3mm, 5mm, 8mm & 10mm sheets.",
    body: "Printed directly with high-output UV curing on clear, frosted, white or black acrylic. Back-printed with opaque white layer for crystal-depth effect, or front-printed for tactile gloss. Includes precision CNC cutting, beveling and standoff wall fixtures.",
    typical: "2–4 working days",
    from: "₹150 / sq ft",
    image: "/prints/lion-splatter.jpg",
    group: "Rigid",
  },
  {
    slug: "glass-uv",
    title: "UV on Toughened Glass & Mirrors",
    summary: "Opaque white-ink backed prints for partitions, backsplashes and door inserts.",
    body: "UV flatbed technology prints directly onto toughened float glass. With our multi-layer white ink system, colors remain vivid and completely opaque even against backlight. Ideal for doctor clinic doors, shower cubicles, pooja mandir glass and award trophies.",
    typical: "3–5 working days",
    from: "Ask for quote after size",
    image: "/prints/radha-krishna-glass.jpg",
    group: "Rigid",
  },
  {
    slug: "architectural-glass-decor",
    title: "Frosted Glass & Architectural Décor",
    summary: "Subtle translucent patterns, dandelion motifs, and heritage lattice effects.",
    body: "Special multi-pass print technique that creates frosted-etched appearances on glass without chemical acid. Highlights subtle grey, white, and translucent patterns that catch ambient room light gracefully.",
    typical: "3–5 working days",
    from: "Custom quote",
    image: "/prints/special-dandelion-glass-shelf.jpg",
    group: "Interiors",
  },
  {
    slug: "devotional-pooja-panels",
    title: "Devotional & Pooja Room Wall Art",
    summary: "Tirupati Balaji, Radha Krishna, Kamadhenu & temple sanctum murals.",
    body: "Customized sacred art printed on high-gloss acrylic, glass or gold-sheen boards. We specialize in high-contrast gold relief effects and rich traditional Indian iconography that adds holiness to home shrines.",
    typical: "2–4 working days",
    from: "From ₹999",
    image: "/prints/balaji-pooja-panel.jpg",
    group: "Décor",
  },
  {
    slug: "brass-metal-plaques",
    title: "Brass, SS & Foundation Stone Plaques",
    summary: "VVIP inauguration stones, government foundation plaques and brass signage.",
    body: "Trusted by national institutes including CSIR-NAL for state inaugurations. High-precision text rendering in Kannada, Hindi and English on brushed aluminium, mirror brass and heavy stainless steel sheets.",
    typical: "3–6 working days",
    from: "Custom institutional quote",
    image: "/prints/csir-nal-foundation.jpg",
    group: "Institutional",
  },
  {
    slug: "corporate-office-branding",
    title: "Reception Walls & Office Directories",
    summary: "Logo walls, directory boards, elevator signs and brand fascia.",
    body: "End-to-end office branding for tech parks, universities and clinics. We have delivered branding boards for HAL, PES University, Sobha, Union Bank, and leading fitness chains across Bangalore.",
    typical: "3–6 working days",
    from: "Ask for a custom quote",
    image: "/prints/corporate-clients.jpg",
    group: "Commercial",
  },
  {
    slug: "shop-fascia-signage",
    title: "Shop Sign Boards & ACP Fascia",
    summary: "Weather-resistant outdoor boards, 3D lettering and storefront displays.",
    body: "Tough outdoor boards on ACP sheets with UV-cured pigments that withstand Bangalore sun and monsoon rain. Bring your shop dimensions or a photo with a tape measure; we guide you on the best layout.",
    typical: "4–7 working days",
    from: "Custom quote",
    image: "/prints/official-board.jpg",
    group: "Commercial",
  },
  {
    slug: "house-nameplates",
    title: "Villa & House Nameplates (Kannada + English)",
    summary: "Custom doctor, advocate, apartment and villa gate nameboards.",
    body: "Acrylic, wood-grain, brushed metallic and glass-style nameplates. Bilingual layouts in Kannada Unicode and English are designed with you on-screen. Proof sent on WhatsApp before printing.",
    typical: "2–4 working days",
    from: "From ₹499",
    image: "/prints/branding-sample-disc.jpg",
    group: "Plates",
  },
  {
    slug: "spot-uv-visiting-cards",
    title: "Spot UV Business Cards",
    summary: "350 GSM premium matte stock with selective high-gloss raised UV varnish.",
    body: "Distinguish your cards with tactile, raised UV varnish on your logo or typography. Minimum practical runs starting from 300, 500 to 1,000 cards. Full artwork review via WhatsApp before press.",
    typical: "3–5 working days",
    from: "From ₹5 / card (at 1,000)",
    image: "/prints/standee-banner.jpg",
    group: "Paper",
  },
  {
    slug: "fine-art-canvas-tiles",
    title: "Canvas Art, Tiles & Custom Wallpapers",
    summary: "Vibrant high-resolution photo prints on canvas, ceramic tiles and mats.",
    body: "From Mysore Palace heritage landscapes to modern pop art, we print ultra-vibrant, smudge-free artwork on fine cotton canvas, textured ceramic tiles, gym rubber mats and bespoke wallpaper rolls.",
    typical: "2–4 working days",
    from: "From ₹160 / sq ft",
    image: "/prints/mysore-palace.jpg",
    group: "Décor",
  },
] as const;

export const works = [
  {
    id: "special-uv-dandelion",
    title: "Dandelion & Heritage Arches Frosted Glass",
    material: "Direct UV on Translucent Glass & Acrylic",
    area: "RR Nagar Studio Showcase",
    image: "/prints/special-dandelion-glass-shelf.jpg",
    category: "Glass",
    featured: true,
    tag: "High-Light UV Craft",
  },
  {
    id: "lion-splash",
    title: "Majestic Splash Lion Large Panel",
    material: "Full-Bed Acrylic UV Flatbed Print",
    area: "Interior Art Installation",
    image: "/prints/lion-splatter.jpg",
    category: "Acrylic",
    featured: true,
    tag: "Vibrant Color",
  },
  {
    id: "radha-krishna-triptych",
    title: "Radha Krishna Divine Hands Triptych",
    material: "3-Piece Toughened Glass with White Layer",
    area: "Luxury Residence, RR Nagar",
    image: "/prints/radha-krishna-glass.jpg",
    category: "Glass",
    featured: true,
    tag: "Multi-Panel Glass",
  },
  {
    id: "balaji-pooja",
    title: "Lord Venkateshwara Balaji & Lakshmi",
    material: "Gloss Black Acrylic with Gold Relief Effect",
    area: "Pooja Room Mandir, Ideal Homes",
    image: "/prints/balaji-pooja-panel.jpg",
    category: "Devotional",
    featured: true,
    tag: "Sacred Art",
  },
  {
    id: "csir-nal-foundation",
    title: "CSIR-NAL State Foundation Plaque",
    material: "Mirror Gold Metal Plate UV Inscription",
    area: "National Aerospace Laboratories, Bengaluru",
    image: "/prints/csir-nal-foundation.jpg",
    category: "Corporate",
    featured: true,
    tag: "VVIP Inauguration",
  },
  {
    id: "corporate-clients",
    title: "Corporate Client Reference Board",
    material: "HAL, PES Univ, Sobha, Union Bank on Acrylic",
    area: "RR Nagar Studio Display",
    image: "/prints/corporate-clients.jpg",
    category: "Corporate",
    featured: true,
    tag: "Enterprise",
  },
  {
    id: "fitness-clients",
    title: "Fitness & Lifestyle Client Board",
    material: "Gold's Gym, Bangalore Club, NEXGEN",
    area: "Commercial Clients Showcase",
    image: "/prints/fitness-clients.jpg",
    category: "Corporate",
    featured: false,
    tag: "Fitness Brands",
  },
  {
    id: "kamadhenu-door",
    title: "Kamadhenu & Kalpavriksha Sacred Door Panel",
    material: "Pooja Room WPC & Glass Inlay",
    area: "Banashankari Residence",
    image: "/prints/kamadhenu-door.jpg",
    category: "Devotional",
    featured: true,
    tag: "Door Panel",
  },
  {
    id: "mysore-palace",
    title: "Mysore Palace Heritage Panoramic Art",
    material: "High-DPI UV Print on Framed Rigid Sheet",
    area: "Heritage Collection",
    image: "/prints/mysore-palace.jpg",
    category: "Canvas",
    featured: true,
    tag: "Karnataka Heritage",
  },
  {
    id: "flatbed-printer",
    title: "Flatbed UV Machine in Active UV Curing",
    material: "Industrial Multi-Color & Active UV Curing",
    area: "In-House Studio Workshop",
    image: "/prints/flatbed-printer-action.jpg",
    category: "Studio",
    featured: true,
    tag: "Production",
  },
  {
    id: "sunflowers-decor",
    title: "Sunflowers Duotone Contemporary Art",
    material: "Direct UV on Textured Wood & MDF",
    area: "Café Décor, Kengeri",
    image: "/prints/sunflowers-decor.jpg",
    category: "Wood",
    featured: false,
    tag: "Wood Print",
  },
  {
    id: "portrait-acrylic",
    title: "Classical Portrait with Standoff Mount",
    material: "High-Gloss Acrylic Wall Mount",
    area: "Studio Sample",
    image: "/prints/portrait-acrylic.jpg",
    category: "Acrylic",
    featured: false,
    tag: "Photo Acrylic",
  },
  {
    id: "blue-eyes-acrylic",
    title: "Hyper-Detailed Blue Eyes Macro Art",
    material: "Direct Surface UV Print",
    area: "Modern Interior",
    image: "/prints/blue-eyes-acrylic.jpg",
    category: "Acrylic",
    featured: false,
    tag: "Fine Detail",
  },
  {
    id: "clownfish-marine",
    title: "Vivid Marine Life Reef Acrylic",
    material: "Gloss Acrylic with UV Layer",
    area: "Aquarium Décor",
    image: "/prints/clownfish-marine.jpg",
    category: "Acrylic",
    featured: false,
    tag: "Gloss Finish",
  },
  {
    id: "rainbow-eye",
    title: "Abstract Rainbow Eye Pop Art",
    material: "Textured UV on Wood Panel",
    area: "Youth Creative Space",
    image: "/prints/rainbow-eye.jpg",
    category: "Wood",
    featured: false,
    tag: "Pop Art",
  },
  {
    id: "official-board",
    title: "Design Dimensions 30+ Surfaces Master Board",
    material: "Official Workshop Demonstration Board",
    area: "Ideal Homes Circle Studio",
    image: "/prints/official-board.jpg",
    category: "Studio",
    featured: true,
    tag: "Substrates",
  },
  {
    id: "standee-banner",
    title: "Design Dimensions Floor Standee Banner",
    material: "Commercial Display Standee",
    area: "Studio Entrance",
    image: "/prints/standee-banner.jpg",
    category: "Signage",
    featured: false,
    tag: "Display Standee",
  },
  {
    id: "krishna-flute",
    title: "Lord Krishna with Peacocks & Flute",
    material: "Framed Sacred Wall Artwork",
    area: "Devotional Collection",
    image: "/prints/krishna-flute.jpg",
    category: "Devotional",
    featured: false,
    tag: "Sacred Art",
  },
  {
    id: "balaji-devotional",
    title: "Lord Murugan Divine Acrylic Panel",
    material: "Back-printed Clear Acrylic with White Layer",
    area: "Home Sanctum",
    image: "/prints/balaji-devotional.jpg",
    category: "Devotional",
    featured: false,
    tag: "Devotional",
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
    q: "Do I need to pay online?",
    a: "No. This website is purely for service details, technical guidance, and instant WhatsApp quotations. All payments are completed directly at the studio via UPI, cash, or bank transfer after proof confirmation.",
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
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(msg)}`;
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
