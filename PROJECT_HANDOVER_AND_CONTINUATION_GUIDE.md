# Design Dimensions — UV Printing Studio, RR Nagar, Bengaluru
## Master Architecture, Project Handover & Multi-Agent Execution Manifesto

> **Confidential & Operational Handover Document**  
> **Location:** Shop 14, Ideal Homes Circle, Rajarajeshwari Nagar (RR Nagar), Bengaluru, Karnataka 560098  
> **Brand Name:** Design Dimensions  
> **Tagline:** INSPIRED DESIGNS | FLAWLESS PRINTS  
> **Primary Phone & WhatsApp:** +91 93432 22266  
> **Secondary Studio Desk:** +91 94825 58936  
> **Official Email:** print.designdimensions@gmail.com  
> **Repository:** `sujay2520/design-dimensions-uv-printing` (Private on GitHub)  
> **Deployment Target:** Vercel (Nitro / TanStack Start / Vite)  

---

## 1. Executive Summary & Business Blueprint

**Design Dimensions** is a specialized, industrial-grade UV flatbed printing studio located in the heart of Rajarajeshwari Nagar (Ideal Homes Circle), South-West Bengaluru. 

### Core Operating Philosophy:
1. **Zero Online Checkout / No Payment Gateway on Website:**
   - The studio operates strictly on custom pre-press consultations, digital WhatsApp proofs, and walk-in order confirmations.
   - Payments are accepted at the studio via **UPI (QR code), Cash, or Bank Transfer / NEFT**.
   - Standard business terms: *Designing charges applicable, 100% advance / confirmation to process final print run, GST % applicable*.
2. **Hyper-Local Bengaluru Footprint:**
   - Neighborhood coverage: RR Nagar, Ideal Homes, Kengeri, BHEL Layout, Ullal, Nagarbhavi, Banashankari, Mysore Road, and Global Village Tech Park.
   - Transit: **Namma Metro Purple Line (RR Nagar Metro Station)** on Mysore Road, followed by a 5-minute auto ride to Ideal Homes Circle.
3. **Institutional Prestige Proof:**
   - National & VVIP credentials: Official foundation stone plaque for **CSIR-National Aerospace Laboratories (CSIR-NAL)** inaugurated by the Hon'ble Vice President of India.
   - Corporate, University & Commercial clients: **Hindustan Aeronautics Limited (HAL)**, **PES University**, **Union Bank of India**, **Dayananda Sagar University**, **SOBHA Developers**, **Bangalore Club**, **Gold's Gym**, and **NEXGEN Fitness**.

---

## 2. Brand Identity & Visual Assets Master

All processed, transparent, and enhanced assets reside in `/public`:

- **Official Logo:** `/public/brand/logo-transparent.png` and `/public/logo.png`
  - Deep Peacock Navy Blue (`#0E294B`), Warm Copper/Rust Orange (`#C85A17`), and Royal Gold (`#D4AF37`).
  - Features the majestic Peacock intertwined with the "DD" monogram and the sacred gopuram trident atop the letter 'I'.
- **The Mystery / Special UV Print (High-Light Recovery):**
  - Source: `WhatsApp Image 2026-10-05 at 5.02.11 PM.jpeg` had a floodlight shining directly into the lens, washing out the right side.
  - Enhancement Applied: LAB color space CLAHE contrast recovery + inverse gamma curve (`γ=1.6`) + unsharp masking.
  - Recovered Output:
    - `/public/prints/special-dandelion-glass-shelf.jpg` (Complete showcase of translucent dandelion seeds on float glass + background architectural cathedral arches).
    - `/public/prints/frosted-dandelion-glass.jpg` (Isolated clean crop of the frosted dandelion seeds motif).
    - `/public/prints/special-uv-showcase.jpg` (Full high-light recovery).
- **Curated Real Portfolio Works in `/public/prints/`:**
  1. `lion-splatter.jpg` — Giant multicolor splash lion on high-gloss acrylic.
  2. `radha-krishna-glass.jpg` — 3-panel divine triptych glass mural with peacock feather and lotus.
  3. `balaji-pooja-panel.jpg` — Lord Venkateshwara Balaji & Lakshmi with gold relief effect on gloss black acrylic.
  4. `kamadhenu-door.jpg` — Sacred Kamadhenu & Kalpavriksha full-panel pooja door print.
  5. `csir-nal-foundation.jpg` — Gold mirror brass VVIP inauguration plaque for CSIR-NAL.
  6. `corporate-clients.jpg` — Reference display board for HAL, PES Univ, Sobha, Union Bank.
  7. `fitness-clients.jpg` — Reference board for Gold's Gym, Bangalore Club, NEXGEN.
  8. `mysore-palace.jpg` — Framed panoramic painting of Mysore Palace heritage.
  9. `flatbed-printer-action.jpg` — The actual studio UV flatbed printer running with purple LED lamps.
  10. `official-board.jpg` — The master workshop substrate board detailing 30+ surfaces.
  11. `sunflowers-decor.jpg` — Modern yellow sunflowers duotone printed on textured wood.
  12. `portrait-acrylic.jpg` — Classical fine-art portrait with standoff wall screws.
  13. `blue-eyes-acrylic.jpg` — Macro blue eyes print on rigid panel.
  14. `clownfish-marine.jpg` — Vibrant underwater marine clownfish on gloss acrylic.
  15. `rainbow-eye.jpg` — Pop art rainbow eye on wood/MDF.
  16. `standee-banner.jpg` — Floor standing roll-up banner at studio entrance.
  17. `krishna-flute.jpg` — Krishna with flute & peacocks framed sacred mural.
  18. `balaji-devotional.jpg` — Lord Murugan/Balaji acrylic pooja panel.
  19. `branding-sample-disc.jpg` — Coaster sample disc with Design Dimensions logo.

---

## 3. Substrates Catalog (The 30+ Flat Surfaces Master)

1. **WPC Doors & Boards:** 100% waterproof, termite-proof; full-height 8×4 ft door printing.
2. **Toughened Glass & Partitions:** Multi-layer white ink underprint for backsplashes, doors & partitions.
3. **Cast Acrylic:** 3mm, 5mm, 8mm, 10mm clear, frosted, white, black with diamond flame polished edges.
4. **Natural Wood, Sanded MDF & Teak Ply:** Preserves wood grain, perfect for temple frames and café menus.
5. **Metal & ACP Sheets:** Weather-resistant outdoor fascias and industrial machine tags.
6. **Stainless Steel & Brass:** VVIP foundation stones and executive plaques.
7. **Ceramic & Floor/Wall Tiles:** Customized bathroom/kitchen printed tiles.
8. **Canvas & Wallpaper:** Fine art textured cotton canvas and bespoke wallpaper rolls.
9. **Spot UV Visiting Cards:** 350 GSM matte cards with selective raised gloss varnish.
10. **Sunboard & Sunpack:** Lightweight exhibition displays and retail signage.
11. **Gym Mats & Floor Mats:** High-grip printed rubber mats.
12. **PVC, Polycarbonate & DTF Sheets:** Specialized flat surface industrial prints.

---

## 4. Technical Architecture & Tech Stack

- **Framework:** TanStack Start (`@tanstack/react-start`) + TanStack Router (`@tanstack/react-router`)
- **UI & Styling:** React 19, Tailwind CSS v4, Radix UI primitives, Lucide Icons, Sonner toasts
- **Bundler:** Vite 8 with `@tailwindcss/vite`
- **Server Deployment Preset:** Nitro (`nitro/vite` with preset `vercel`) producing `.vercel/output`
- **Routing Structure (`src/routes/`):**
  - `__root.tsx`: Document root shell, meta tags, font imports, Toaster, Header, Footer
  - `index.tsx`: Homepage (Hero, Client Trust Bar, Featured Dandelion Glass, Services Grid, Materials, Portfolio Preview, Process, Directions, FAQ)
  - `services.tsx`: Full services catalog with 30+ flat surfaces cloud, material cards, and WhatsApp quote buttons
  - `work.tsx`: Filterable 19-sample gallery, featuring the high-light dandelion glass craft and client badges
  - `process.tsx`: 5-step UV workflow, pre-flight file specifications (300 DPI, CMYK, bleed, vector text)
  - `visit.tsx`: Complete transit guide (Purple Line Metro, Mysore Road Arch), interactive map, studio photos, hours, phone numbers
  - `enquire.tsx`: Walk-in spec sheet and instant WhatsApp quote generator

---

## 5. Instructions for Successor AI / Agent Continuer

If you are continuing this task as another AI model or multi-agent worker:
1. **Never Revert Real Details:**
   - Always retain the verified phone numbers (`+91 93432 22266` and `+91 94825 58936`).
   - Retain email `print.designdimensions@gmail.com`.
   - Never reintroduce fake placeholder text or generic numbers.
   - Maintain the Purple Line Namma Metro detail for RR Nagar.
2. **Dev Server & Verification:**
   - Start dev server via `npm run dev` (runs on `http://localhost:8080`).
   - Run typecheck via `npm run typecheck` (tsc `--noEmit`).
   - Run production build via `npm run build` (outputs to `.vercel/output/`).
3. **Deployment to Vercel:**
   - Code is tracked in git repository connected to `sujay2520/design-dimensions-uv-printing`.
   - When deployed to Vercel, use root directory with Vite/TanStack Start preset.
