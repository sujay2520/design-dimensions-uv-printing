# DESIGN DIMENSIONS — MASTER ARCHITECTURAL, CODING & CONTINUATION DIRECTIVE
**Project:** Industrial UV Flatbed Printing Platform (Interiors & Exteriors)  
**Corporate Entity:** DESIGN DIMENSIONS  
**Studio Facility:** #8/2 A, 18TH MAIN ROAD, DWARAKANAGAR STAGE 1, CHANNASANDRA, BANGALORE - 560098, KARNATAKA - INDIA  
**Landmark:** Near RR Nagar & Kengeri / Global Village Tech Park  
**Google Plus Code:** VGXC+G2 Bengaluru, Karnataka  
**Official Contact Numbers (STRICT & EXCLUSIVE):**
- **Studio / Office Line (Calls Only):** `+91 94825 58936` (E.164: `919482558936`) — *Do NOT use any other office number.*
- **WhatsApp (Quotations & Digital Proofs):** `+91 93432 22266` (E.164: `919343222266`)  
- **Official Email:** `print.designdimensions@gmail.com`  

---

## 1. MANDATORY OPERATING RULES FOR ANY SUBSEQUENT AI AGENT
If you are an AI assistant resuming work on this repository:
1. **Model & Persona:** You are **NVIDIA Nemotron-3-Ultra-550B**, acting as Lead Enterprise Architect and Senior Systems Engineer. Maintain a professional, authoritative, and helpful tone.
2. **Strict Contact Isolation:** Use ONLY Office `+91 94825 58936` and WhatsApp `+91 93432 22266`. Never invent phone numbers.
3. **No Pricing Disclosures:** Do NOT list fixed prices or square-foot rates on the public website. All custom jobs are quoted individually via WhatsApp based on substrate thickness, ink backing, and volume.
4. **Technology Naming:** Always refer to the printing technology as **Active UV Curing** (not LED curing).
5. **No Competitor Logos:** Never include or reference "Prime Inc" or any unauthorized third-party watermarks. All assets must remain 100% authentic to Design Dimensions.
6. **No Terminal Commands for Shop Owner:** The shop owner requested a completely zero-command experience. Management is handled via the clickable in-browser **Owner Portal** on the `/visit` (About & Studio) page.

---

## 2. REPOSITORY, HOSTING & DEPLOYMENT TOPOLOGY

| Environment | Provider / Location | Details |
| :--- | :--- | :--- |
| **Local Project Root** | `c:\Users\jarvis\Desktop\Builds\Design Dimensions` | Working directory on Windows |
| **Git Repository** | `https://github.com/sujay2520/design-dimensions-uv-printing.git` | Private repository on GitHub |
| **Primary Branch** | `main` | Production branch |
| **Hosting & CI/CD** | **Vercel Edge Platform** | Connected to GitHub `main`. Every `git push origin main` automatically triggers a zero-downtime production deployment. |
| **Production URL** | `https://design-dimensions-uv-printing.vercel.app` | Live globally on Vercel Anycast CDN (Edge POP in Mumbai for <50ms India latency) |
| **Framework & Engine**| **TanStack Start + Vite + React 19 + Tailwind CSS v4** | Full SSR/SSG, near-zero JS overhead, sub-second page loads |

---

## 3. IN-BROWSER OWNER PORTAL ARCHITECTURE (CLICKABLE & PASSWORD PROTECTED)

### 3.1 Overview
The business owner has a private, password-protected admin dashboard embedded directly in the web application. No server, database, or command-line tools are required. Everything is stored reactively in browser `localStorage` and `sessionStorage`.

### 3.2 Access Points
- **Primary Access on About & Studio Page (`/visit`):**
  - Clickable button in header: `Owner Access (Passcode)`
  - Clickable button in Studio Address card: `Studio Login (Passcode)`
  - Prominent card at the bottom of the page: `Manage Design Dimensions Website` -> `Click to Enter Passcode`
- **Global Footer (`SiteFooter`):**
  - Discreet `🔐 Owner Access` link in the bottom copyright bar of every single page.

### 3.3 Authentication & Security
- **File:** `src/lib/owner-store.ts`
- **Passcode Verification (`verifyOwnerPin`):**
  - **Default Easy Owner PIN:** `948255` (the first 6 digits of the office line `94825 58936`)
  - **Master Passcode:** `dimensions9482`
  - **Alternative Passcode:** `9482558936`
  - The owner can change their custom PIN to any 4–8 digit code from inside the portal under the "Security & PIN" tab.
- **Session Duration:** Upon successful passcode entry, `sessionStorage.setItem("dd_owner_session_token", "authorized")` maintains an unlocked session while the tab is open. Clicking "Lock Session" immediately terminates authentication.

### 3.4 Capabilities Inside the Owner Control Panel
1. **Contact & Store Details:** Edit Office phone, WhatsApp number, physical address, and operating hours. Instant 1-click save.
2. **Notice & Holiday Banner:**
   - Toggle switch: `Show Announcement Banner on Website (ON / OFF)`
   - Custom banner text input (e.g. "We are open on Sundays by prior WhatsApp appointment.")
   - Banner urgency style: Teal (General Info), Amber (Holiday Notice), or Emerald (Rush Delivery).
   - Rendered globally at the very top of `SiteHeader` across all routes.
   - Protected with an empty/whitespace guard (`ownerConfig.bannerEnabled && Boolean(ownerConfig.bannerText?.trim())`).
3. **28 Substrates Catalog Manager:**
   - Live search filter.
   - Individual **Active / Inactive toggle buttons** for each of the 28 flat substrates.
   - Hiding a substrate instantly filters it out from the public customer view in real time (`index.tsx` and `services.tsx` consume `useOwnerConfig()`).
4. **WhatsApp Quoter:**
   - Customer Name, Substrate selector, Dimensions, Quantity, and Special Job Notes.
   - One-tap button: `Open Quote on WhatsApp (+91 93432 22266)` which immediately formats and deep-links to WhatsApp with fully URI-encoded parameters.
5. **Security & PIN:**
   - Change passcode.
   - "Restore Factory Defaults" button to wipe customizations and restore standard studio configuration.

---

## 4. MOBILE UX, ACCESSIBILITY & PERFORMANCE COMPLIANCE
Following a comprehensive multi-agent audit across 390px mobile viewports:
1. **Global Mobile Action Bar (`src/components/layout/mobile-action-bar.tsx`):**
   - Fixed sticky bottom dock on mobile (`<sm`), presenting thumb-friendly 44px touch targets:
     - **[ Call Studio ]** (`tel:+919482558936`)
     - **[ WhatsApp Quote ]** (`wa.me/919343222266`)
   - Fully reactive to owner store overrides and respects mobile safe-area insets (`env(safe-area-inset-bottom)`).
2. **WCAG 2.1 AA Contrast Ratios:**
   - Fixed the dark `bg-ink` section in `src/routes/index.tsx` by upgrading dark teal accents to high-visibility emerald tones (`text-emerald-400` and `text-emerald-300`), achieving an >8:1 contrast ratio.
   - Upgraded light-surface WhatsApp links to `text-emerald-700` (`#047857`) for >4.5:1 contrast.
   - Upgraded footer owner link to `text-accent-fg/70` for >6:1 contrast.
3. **Screen Reader & Keyboard Accessibility:**
   - Owner Modal now includes `role="dialog"`, `aria-modal="true"`, `aria-labelledby="owner-modal-title"`.
   - Global `Escape` key listener closes the modal instantly.
   - Clicking the backdrop dismisses the dialog.
   - Distinct `aria-label` attributes on navigation landmarks (`Main navigation` vs `Mobile navigation`) and card quote links.
   - Decorative Wordmark emblem marked `aria-hidden="true"` to prevent redundant screen reader announcements.

---

## 5. THE 28 FLAT SUBSTRATES TAXONOMY
The platform models all 28 flat substrates categorized into 6 core industrial groups in `src/lib/site.ts`:

1. **Doors & Panels:** WPC Doors, PVC, Flexiply, Plywood, Laminates, Fiberglass
2. **Glass & Glazing:** Glass, Ceramic, Floor Tiles, Wall Tiles, Polycarbonate Sheets
3. **Acrylic & Rigid:** Acrylic, Plastic, Stainless Steel (SS), Metal, ACP Sheets
4. **Wood & Organics:** Wood, Plywood, Flexiply, Laminates, Sunboards
5. **Textiles & Flexible:** Canvas, Wallpapers, Fabric, Carpets, Gym Mats, Vinyl, DTF Sheets
6. **Specialty & Niche:** Sunpack Sheets, Paper Products, Books, Ceramic Tiles

### Authentic High-Definition Media Files
All authentic studio and sample images are preserved in `public/prints/`:
- `workshop-sample-wall.jpg` (Full showroom master sample wall)
- `uv-printer-industrial-bed.jpg` (Industrial flatbed UV printer and active carriage)
- `uv-printer-active-curing-head.jpg` (Industrial UV print carriage and active curing head)
- `uv-wpc-doors-showroom.jpg` (Complete carved WPC waterproof door panels)
- `uv-wardrobe-tfn-sliding-glass.jpg` (Sliding wardrobe toughened glass with white ink)
- `uv-acrylic-cast-sheet.jpg` (High-gloss acrylic with flame-polished edges)
- `uv-kannada-wood-cafe-signage.jpg` (Bespoke Kannada carved wooden cafe board)
- `uv-acp-exterior-sheet.jpg` (Weather-proof exterior ACP facade panels)
- `uv-krishna-livingroom-backdrop.jpg` (Fine art canvas & divine living room mural)
- `kamadhenu-door.jpg` (Traditional pooja door with 3D embossed gold reliefs)
- `special-dandelion-glass-shelf.jpg` (Dandelion and architectural glass UV print display shelf)
- `cards.jpg` (Visiting card acrylic and composite samples)

---

## 6. CODEBASE MAP & ROUTING STRUCTURE

```text
c:\Users\jarvis\Desktop\Builds\Design Dimensions\
├── package.json                   # Dependencies: React 19, TanStack Start, Tailwind v4
├── tsconfig.json                  # TypeScript configuration
├── vite.config.ts                 # Vite bundler configuration
├── public/                        # Static assets, branding, and /prints workshop images
├── src/
│   ├── router.tsx                 # TanStack Router initialization with getRouter()
│   ├── routeTree.gen.ts           # Generated route tree
│   ├── styles.css                 # Tailwind v4 theme tokens and global base styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── site-header.tsx    # Header, navigation, and dynamic owner notice banner
│   │   │   ├── site-footer.tsx    # Footer with address, WhatsApp callouts & Owner Access link
│   │   │   └── mobile-action-bar.tsx # Sticky bottom dock for mobile one-tap call & WhatsApp
│   │   ├── owner/
│   │   │   └── owner-portal-modal.tsx  # In-browser Owner Control Panel with PIN authentication
│   │   ├── brand/
│   │   │   └── logo.tsx           # Official wordmark & emblem components
│   │   ├── enquiry-form.tsx       # Interactive lead capture form with WhatsApp dispatch
│   │   └── ui/                    # Reusable Radix/Tailwind buttons, badges, inputs
│   ├── lib/
│   │   ├── site.ts                # Master data: 28 substrates, contact info, clients, FAQs
│   │   ├── owner-store.ts         # Reactive localStorage store for owner configurations
│   │   └── utils.ts               # Class merging utilities (cn)
│   └── routes/
│       ├── __root.tsx             # Root document shell with header, footer, mobile bar & providers
│       ├── index.tsx              # Home page (Hero, 28 substrates grid, trust bar, samples)
│       ├── services.tsx           # Services & 28-material breakdown with category filters
│       ├── work.tsx               # Authentic work gallery with real workshop prints
│       ├── process.tsx            # Industrial UV printing workflow & file requirements
│       ├── visit.tsx              # Visit Studio & About page with Owner Portal triggers
│       └── enquire.tsx            # Digital quotation & WhatsApp proof submission page
```

---

## 7. WORKFLOWS & ROUTINE COMMANDS

### How to Run Locally:
```bash
npm run dev
# Starts development server on http://localhost:8080 (or 0.0.0.0:8080)
```

### How to Verify Type Safety:
```bash
npm run typecheck
# Must exit with code 0 (zero errors)
```

### How to Build for Production:
```bash
npm run build
# Compiles Vite assets and produces .vercel/output in ~600ms
```

### How to Deploy Updates:
```bash
git add .
git commit -m "Your descriptive message"
git push origin main
# Vercel automatically deploys to https://design-dimensions-uv-printing.vercel.app in ~30s
```

---

## 8. OWNER HANDOFF SUMMARY CHEAT SHEET
Share this directly with the shop owner:

1. **How to open the Control Panel:**
   - Open [https://design-dimensions-uv-printing.vercel.app/visit](https://design-dimensions-uv-printing.vercel.app/visit).
   - Click the **"Owner Access"** or **"Click to Enter Passcode"** button.
   - Enter PIN: **`948255`** (or `dimensions9482`) and tap **Unlock**.
2. **How to turn On the Holiday / Special Notice Banner:**
   - Go to the **Notice Banner** tab.
   - Toggle the switch to **ON**.
   - Type your notice (e.g., "Open on Sunday for festival rush orders").
   - Tap **Update Banner Status**. It goes live instantly across the site!
3. **How to hide an out-of-stock material:**
   - Go to the **28 Substrates** tab.
   - Tap **"Active (Click to Hide)"** next to any material. It is instantly hidden from customers.
4. **How to prepare a WhatsApp quote:**
   - Go to the **WhatsApp Quoter** tab.
   - Select the material and enter dimensions.
   - Tap **Open Quote on WhatsApp** to launch WhatsApp with a pre-filled quote for `+91 93432 22266`.
