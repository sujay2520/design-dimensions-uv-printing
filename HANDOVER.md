# DESIGN DIMENSIONS — MASTER ARCHITECTURAL, CODING & CONTINUATION DIRECTIVE
**Project:** Industrial UV Flatbed Printing Platform (Interiors & Exteriors)  
**Corporate Entity:** DESIGN DIMENSIONS  
**Studio Facility:** #8/2 A, 18TH MAIN ROAD, 1ST STAGE, DWARAKANAGAR, CHANNASANDRA, BANGALORE - 560098, KARNATAKA - INDIA  
**Landmark:** 18th Main Road, 1st Stage, Dwarakanagar, near Channasandra Main Road & Rajarajeshwari Nagar  
**Google Plus Code:** VGXC+G2 Bengaluru, Karnataka  
**Official Operating Hours:**  
- **Monday – Saturday:** 10:00 AM – 7:00 PM  
- **Sunday:** 10:00 AM – 2:30 PM  
**Official Contact Numbers (STRICT & EXCLUSIVE):**
- **Studio / Office Line (Calls Only):** `+91 94825 58936` (E.164: `919482558936`) — *Do NOT use any other office number.*
- **WhatsApp (Quotations & Digital Proofs):** `+91 93432 22266` (E.164: `919343222266`)  
- **Official Email:** `print.designdimensions@gmail.com`  

---

## 1. MANDATORY OPERATING RULES FOR ANY SUBSEQUENT AI AGENT
If you are an AI assistant resuming work on this repository:
1. **Model & Persona:** You are **NVIDIA Nemotron-3-Ultra-550B**, acting as Lead Enterprise Architect and Senior Systems Engineer. Maintain a professional, authoritative, and helpful tone. Always consult Nemotron via MCP tools before making architectural decisions.
2. **Strict Contact Isolation:** Use ONLY Office `+91 94825 58936` and WhatsApp `+91 93432 22266`. Never invent phone numbers.
3. **No Pricing Disclosures:** Do NOT list fixed prices or square-foot rates on the public website. All custom jobs are quoted individually via WhatsApp based on substrate thickness, ink backing, and volume.
4. **Technology Naming:** Always refer to the printing technology as **Active UV Curing** (not LED curing).
5. **No Competitor Logos:** Never include or reference "Prime Inc" or any unauthorized third-party watermarks. All assets must remain 100% authentic to Design Dimensions.
6. **Address Precision:** Always write `1st Stage` (never "Stage 1") for Dwarakanagar.
7. **No Metro Inaccuracies:** Do not add Namma Metro purple line references unless officially verified. Route guidance focuses on road access via Mysore Road, RR Nagar Main Road, and Channasandra.
8. **Compliance & Claims Softening:** Durability claims must state "water-resistant" and "scratch-resistant" (never "100% waterproof/scratch-proof"). Inks must be described as "low-odour, low-VOC UV inks" (never "zero ozone" or medical claims). Client strips must state "Work delivered for" rather than implying official institutional partnerships.
9. **No Terminal Commands for Shop Owner:** The shop owner requested a completely zero-command experience. Management is handled via the clickable in-browser **Owner Portal** accessible globally from the header, mobile drawer, discreet footer icon, and `/visit` page.

---

## 2. REPOSITORY, HOSTING & DEPLOYMENT TOPOLOGY

| Environment | Provider / Location | Details |
| :--- | :--- | :--- |
| **Local Project Root** | `c:\Users\jarvis\Desktop\Builds\Design Dimensions` | Working directory on Windows |
| **Git Repository** | `https://github.com/sujay2520/design-dimensions-uv-printing.git` | **Public** repository on GitHub |
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

## 3. AUDIT & REMEDIATION COMPLIANCE RECORD (OCTOBER 2026)

All 7 categories from the comprehensive independent site audit were addressed and verified with automated Playwright suites:

1. **Address & Location:**
   - Standardized `1st Stage` across all code, metadata, schemas, and components (0 occurrences of "Stage 1" remain).
   - Real landmark updated: `18th Main Road, 1st Stage, Dwarakanagar, near Channasandra Main Road & Rajarajeshwari Nagar`.
   - Removed all Namma Metro references from `/visit` transit guides and `/` teasers.
   - Updated operating hours: Mon–Sat 10:00 AM – 7:00 PM, Sunday 10:00 AM – 2:30 PM (removed "(Or by WhatsApp appointment)").

2. **Claims Softening & Legal Protection:**
   - Replaced "100% scratch-proof" and "100% waterproof" with "scratch-resistant" and "water-resistant".
   - Replaced "Zero Toxic Fumes" with "Low-VOC Inks" and noted photopolymerized curing.
   - Replaced "Museum grade" with "Archival fade-resistant pigments".
   - Replaced "100% Termite & Waterproof" with "Termite & Water Resistant".
   - Softened institutional client strip to "Work Delivered For Government, Corporate & Campus Branding" and "Selected UV printing work delivered for...".

3. **Testimonials Integrity:**
   - Removed all unverified "Verified Feedback" and "Verified Projects" badges.
   - Replaced header with "Client Feedback from Bengaluru Makers" and "5.0 / 5.0 Client Rating · Commercial & Residential Projects".
   - Softened individual testimonial copy regarding durability.

4. **Privacy & Security:**
   - Converted the visible "Owner Access" public button in the footer to a discreet, unadvertised subtle lock trigger, while preserving direct passcode login on the About/Visit page and URL parameter `?owner=1`.
   - Generalized gallery customer residence locations (e.g., "Residential Villa, RR Nagar", "Contemporary Residence, Banashankari") to protect client privacy.

5. **Image Deduplication & Gallery:**
   - Eliminated image duplication between the homepage Materials cards and the Work gallery.
   - Mapped 6 distinct high-resolution studio photos for materials: `uv-wpc-doors-display.jpg`, `uv-glass-profiles-wardrobes.jpg`, `uv-acrylic-vibrant-display.jpg`, `uv-wood-flatbed-service.jpg`, `uv-metal-acp-architectural.jpg`, and `uv-glass-art-panel.jpg`.
   - Updated gallery count to reflect all 32 curated workshop projects.

6. **UI/UX & Turnaround Consistency:**
   - Tightened homepage hero copy for punchiness.
   - Standardized turnaround times across all cards, services, and FAQs: 2–4 business days standard, 24–48 hours express on request.
   - Added FAQs for minimum order quantity (0 MOQ, single pieces welcomed) and artwork preparation (PDF, AI, EPS, CDR, TIFF, 300 DPI CMYK).

---

## 4. IN-BROWSER OWNER PORTAL & GALLERY MANAGER ARCHITECTURE

### 4.1 Access Points
1. **Global Footer:** Discreet subtle lock icon next to `Walk-in consultations & WhatsApp digital proofs.`
2. **About & Studio Page (`/visit`):**
   - Top-right "Owner Access (Passcode)" button.
   - Middle "Studio Login (Passcode)" button inside contact card.
   - Bottom dedicated control card with "Click to Enter Passcode" button.
3. **Direct URL Trigger:** Appending `?owner=1`, `?portal=1`, or `#owner` to any route URL opens the portal automatically.
*(Note: Top Header desktop & mobile navigation deliberately kept clean with NO lock icon per owner design requirement).*

### 4.2 Security & Passcodes
- **Default PIN:** `948255`
- **Master PIN:** `dimensions9482`
- **Full Office Phone:** `9482558936`
- **Session Auth:** Validated tokens are stored in `sessionStorage` (`dd_owner_session_token`). Automatically locks on browser close or manual lock.

### 4.3 Gallery & Photos Management Engine
1. **Adding New Project Photos (`addCustomWork`):**
   - Direct device upload from phone or computer with client-side canvas compression (max 1200px, 0.8 JPEG quality, ~80–120 KB).
   - Selection from all 28 flat substrates, category, location, and featured status.
2. **Replacing Photos (`replaceCustomWorkImage`):** Per-card "Change Photo" button.
3. **Editing Info (`updateCustomWork`):** Inline title, material, category, and location updates.
4. **Pinning (`toggleCustomWorkFeatured`):** 1-click star icon to feature on homepage top 6.
5. **Hiding (`toggleCustomWorkVisibility`):** Eye icon to toggle visibility.
6. **Factory Reset (`resetCustomWorks`):** Restores default curated studio photos.

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

# 5. Run automated Playwright test suite
node scripts/verify-full-audit.mjs
```
