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
6. **No Terminal Commands for Shop Owner:** The shop owner requested a completely zero-command experience. Management is handled via the clickable in-browser **Owner Portal** accessible globally from the header, mobile drawer, footer, and `/visit` page.

---

## 2. REPOSITORY, HOSTING & DEPLOYMENT TOPOLOGY

| Environment | Provider / Location | Details |
| :--- | :--- | :--- |
| **Local Project Root** | `c:\Users\jarvis\Desktop\Builds\Design Dimensions` | Working directory on Windows |
| **Git Repository** | `https://github.com/sujay2520/design-dimensions-uv-printing.git` | Private repository on GitHub |
| **Primary Branch** | `main` | Production branch |
| **Hosting Platform** | **Vercel Edge Platform** | Production deployment linked to project `design-dimensions-uv-printing` |
| **Production URL** | `https://design-dimensions-uv-printing.vercel.app` | Live globally on Vercel Anycast CDN (Edge POP in Mumbai for <50ms India latency) |
| **Framework & Engine**| **TanStack Start + Vite + React 19 + Tailwind CSS v4** | Full SSR/SSG, near-zero JS overhead, sub-second page loads |

> [!IMPORTANT]
> **Vercel Deployment Procedure:**
> Because GitHub automated webhooks are not connected to this Vercel project, every code update MUST be pushed to GitHub AND built and deployed to production via Vercel CLI:
> 1. `npm run typecheck` (verify 0 errors)
> 2. `npm run build` (compiles `.vercel/output`)
> 3. `npx vercel deploy --prebuilt --prod` (instantly updates the live site)
> 4. `git push origin main` (keeps GitHub repo synchronized)

---

## 3. UI SYNTHESIS & FEATURE MIXTURE (FROM UV-PRINTING REFERENCE)
Per owner request (`https://github.com/sujay2520/UV-printing`), the most valuable features and UI patterns from the reference repository have been seamlessly blended into the enterprise Design Dimensions engine:

1. **Interactive Fullscreen Gallery Lightbox (`src/components/ui/lightbox.tsx`):**
   - Integrated into `src/routes/work.tsx`.
   - Allows visitors to click any portfolio card to enlarge and inspect prints in high definition.
   - Features: Keyboard navigation (Esc to close, Left/Right arrows to navigate, `Z` to zoom in/out), full-resolution image showcase, image counter, category pill badge, and direct Active UV substrate caption.

2. **Why Choose Design Dimensions 8-Pillar Value Grid (`src/components/sections/why-choose-us.tsx`):**
   - Embedded on the Homepage (`src/routes/index.tsx`).
   - Showcases 8 industrial strengths: Vibrant Colors & High Resolution, Durable & Scratch-Resistant, Active UV Instant Curing, Eco-Friendly Process, Direct Print on 30+ Surfaces, Rigid Flatbed Precision, Fast Studio Turnaround, and Bilingual English/Kannada Artwork Support.
   - High-impact Stats Counter Bar: `10+` Years Expertise, `30+` Substrates Supported, `1,000+` Projects Delivered, and `100%` Active UV Curing.

3. **Verified Client Endorsements & Testimonials (`src/components/sections/testimonials.tsx`):**
   - Embedded on Homepage (`src/routes/index.tsx`) and Studio Page (`src/routes/visit.tsx`).
   - Displays 5-star ratings from verified architects, villa owners in RR Nagar/Channasandra, commercial contractors, and interior decorators.

4. **Interactive Accordion FAQ Component (`src/components/ui/faq-accordion.tsx`):**
   - Embedded on Services (`src/routes/services.tsx`) and Studio Page (`src/routes/visit.tsx`).
   - Categorized under: All Questions, Substrates & Sizing, Active UV Curing, Artwork & Proofs, and Walk-in & Location.
   - Smooth expand/collapse, mobile-responsive, zero pricing/payment references.

5. **Floating "Back to Top" Button (`src/components/ui/back-to-top.tsx`):**
   - Mounted globally in `src/routes/__root.tsx`.
   - Listens to scroll (>320px) and appears above the mobile action bar and footer with a smooth-scroll handler.

6. **Interactive WhatsApp Job Quoter & Surface Calculator (`src/components/ui/interactive-quote-builder.tsx`):**
   - Embedded in `src/routes/enquire.tsx`.
   - Allows prospective clients to select from the 28 flat substrates, input length and width (feet/inches), specify quantity, material sourcing, and artwork readiness.
   - Calculates total surface area in square feet (strictly physical dimensions, zero money or pricing rates).
   - Generates a 1-click structured WhatsApp message directed to `+91 93432 22266`.

---

## 4. IN-BROWSER OWNER PORTAL ARCHITECTURE (CLICKABLE & PASSWORD PROTECTED)

### 4.1 Global Mounting & Access Points
The Owner Portal is mounted once at the root level in `src/routes/__root.tsx` via `useOwnerModal()`:
1. **Desktop Header:** Dedicated Lock icon button next to WhatsApp / Enquire.
2. **Mobile Navigation Drawer:** "Owner Portal (Passcode)" row inside the hamburger menu.
3. **Global Footer:** "Owner Access" button in the bottom copyright row.
4. **About & Studio Page (`/visit`):**
   - Top-right "Owner Access (Passcode)" button.
   - Middle "Studio Login (Passcode)" button inside the contact card.
   - Prominent bottom dashed card with "Click to Enter Passcode" button.
5. **Direct URL Trigger:** Appending `?owner=1`, `?portal=1`, or `#owner` to any route URL opens the portal automatically.

### 4.2 Security & Passcodes
- **Default PIN:** `948255`
- **Master PIN:** `dimensions9482`
- **Full Office Phone:** `9482558936`
- **Session Auth:** Validated tokens are stored in `sessionStorage` (`dd_owner_session_token`), meaning authorized sessions stay open while browsing, but automatically lock when the tab/browser is closed or when "Lock Session" is clicked.
- **PIN Customization:** The owner can set a custom PIN anytime inside the "Security & PIN" tab.

### 4.3 Control Panel Capabilities
1. **Notice Banner:** Toggle ON/OFF website-wide emergency or holiday banners with customizable alert styles (`info`, `holiday`, `rush`).
2. **28 Flat Substrates Manager:** Live reactive toggle for any of the 28 substrates. Toggling off a material immediately hides it from the customer-facing catalog across the entire site.
3. **Contact & Store Details:** Edit displayed office phone, WhatsApp number, studio address, and hours without touching code.
4. **WhatsApp Quoter:** Built-in quoter for shop operators to assemble fast quotes and dispatch directly to customers via WhatsApp.

---

## 5. COMPLETE VERIFICATION & RUNBOOK COMMANDS

```bash
# 1. Typecheck the entire TypeScript codebase
npm run typecheck
# Must exit with code 0

# 2. Build production assets
npm run build
# Produces prebuilt output in .vercel/output

# 3. Deploy live to Vercel production
npx vercel deploy --prebuilt --prod
# Aliased immediately to https://design-dimensions-uv-printing.vercel.app

# 4. Synchronize with GitHub
git add .
git commit -m "Your descriptive commit message"
git push origin main
```
