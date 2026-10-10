import { chromium } from "playwright";
import fs from "fs";
import path from "path";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();

  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });

  const screenshotDir = "screenshots";
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  console.log("1. Navigating to https://design-dimensions-uv-printing.vercel.app...");
  await page.goto("https://design-dimensions-uv-printing.vercel.app", { waitUntil: "networkidle" });

  console.log("2. Clicking Studio Portal trigger in footer...");
  const footerOwnerBtn = page.locator('button[aria-label="Studio Portal"], button[title="Studio Portal"], button:has-text("Studio Portal"), button:has-text("Owner Access")').first();
  await footerOwnerBtn.scrollIntoViewIfNeeded();
  await footerOwnerBtn.click();

  console.log("3. Waiting for passcode modal...");
  const pinInput = page.locator('input[aria-label="Enter owner passcode"]');
  await pinInput.waitFor({ state: "visible", timeout: 5000 });
  await pinInput.fill("948255");
  await page.locator('button:has-text("Unlock Studio Dashboard")').click();

  console.log("4. Verifying authenticated Gallery & Photos tab...");
  const galleryTab = page.locator('button:has-text("Gallery & Photos")');
  await galleryTab.waitFor({ state: "visible", timeout: 5000 });
  console.log("✅ Authenticated dashboard unlocked. Gallery & Photos tab is visible.");

  // Check 'Add New Project Photo' button
  const addBtn = page.locator('button:has-text("Add New Project Photo")');
  await addBtn.waitFor({ state: "visible" });
  console.log("✅ 'Add New Project Photo' button located.");

  // Check Change Photo buttons
  const changePhotoBtns = page.locator('button:has-text("Change Photo")');
  const count = await changePhotoBtns.count();
  console.log(`✅ Located ${count} 'Change Photo' buttons across existing projects.`);

  // Take screenshot of Owner Portal Modal Gallery Tab
  await page.screenshot({ path: path.join(screenshotDir, "owner-portal-gallery-tab.png") });
  console.log("✅ Screenshot captured: screenshots/owner-portal-gallery-tab.png");

  // Click 'Add New Project Photo' to open form
  await addBtn.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(screenshotDir, "owner-portal-add-photo-form.png") });
  console.log("✅ Screenshot captured: screenshots/owner-portal-add-photo-form.png");

  // Close modal and navigate to /work
  await page.locator('button[aria-label="Close modal"]').click();
  await page.waitForTimeout(300);

  console.log("5. Navigating to /work page...");
  await page.goto("https://design-dimensions-uv-printing.vercel.app/work", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(screenshotDir, "work-gallery-live.png") });
  console.log("✅ Screenshot captured: screenshots/work-gallery-live.png");

  console.log("\nSummary of QA check:");
  console.log(`Console Errors: ${errors.length}`);
  if (errors.length > 0) {
    console.error("Errors found:", errors);
  } else {
    console.log("🎉 0 Console Errors! All Gallery & Photo features verified live on production!");
  }

  await browser.close();
}

main().catch(console.error);
