import { chromium } from "playwright";

async function runLiveAddAndVerify() {
  console.log("Testing Live Add Project & Reactive Reflection...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();

  // Go to live production
  await page.goto("https://design-dimensions-uv-printing.vercel.app", { waitUntil: "networkidle" });

  // Open modal from footer
  const footerBtn = page.locator('button:has-text("Owner Access")');
  await footerBtn.scrollIntoViewIfNeeded();
  await footerBtn.click();

  // Enter PIN
  const pin = page.locator('input[aria-label="Enter owner passcode"]');
  await pin.waitFor({ state: "visible" });
  await pin.fill("948255");
  await page.locator('button:has-text("Unlock Studio Dashboard")').click();

  // Check Gallery tab
  await page.locator('button:has-text("Gallery & Photos")').waitFor({ state: "visible" });

  // Click Add New Project Photo
  await page.locator('button:has-text("Add New Project Photo")').click();

  // Fill in title
  const titleInput = page.locator('input[placeholder="e.g. Sacred WPC Balaji Door Panel"]');
  await titleInput.fill("Bespoke Villa Entrance Door 2026");

  // Click Add to Live Gallery
  await page.locator('button:has-text("Add to Live Gallery")').click();
  await page.waitForTimeout(1000);

  // Close modal
  await page.locator('button[aria-label="Close modal"]').click();

  // Check on Home page WorkPreview
  const hasOnHome = await page.locator('text=Bespoke Villa Entrance Door 2026').isVisible();
  console.log("Visible on Homepage WorkPreview:", hasOnHome);

  // Navigate to /work
  await page.goto("https://design-dimensions-uv-printing.vercel.app/work", { waitUntil: "networkidle" });
  const hasOnWork = await page.locator('text=Bespoke Villa Entrance Door 2026').isVisible();
  console.log("Visible on /work Portfolio Gallery:", hasOnWork);

  if (hasOnWork) {
    console.log("🎉 SUCCESS: Newly added project is immediately live and rendered on /work!");
  } else {
    console.error("❌ FAILED: Project did not render on /work");
  }

  await browser.close();
}

runLiveAddAndVerify().catch(console.error);
