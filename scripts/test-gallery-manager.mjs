import { chromium } from "playwright";

async function runTest() {
  console.log("Starting Gallery Manager QA test...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });

  try {
    // 1. Visit Home Page
    console.log("Navigating to local dev or live site...");
    // Let's test against production URL
    const targetUrl = "https://design-dimensions-uv-printing.vercel.app";
    console.log(`Checking live production target: ${targetUrl}`);
    await page.goto(targetUrl, { waitUntil: "networkidle", timeout: 30000 });

    // Verify footer Owner Access button exists
    const ownerAccessLink = page.locator('button:has-text("Owner Access")');
    await ownerAccessLink.waitFor({ timeout: 5000 });
    console.log("✅ Footer 'Owner Access' button located.");

    console.log("All pre-checks passed!");
  } catch (err) {
    console.error("Test error:", err);
  } finally {
    await browser.close();
  }
}

runTest();
