import { chromium } from "playwright";

async function verify() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("https://design-dimensions-uv-printing.vercel.app/", { waitUntil: "networkidle" });

  const headerLock = await page.$("header button[title*='Portal'], header svg.lucide-lock");
  const footerLock = await page.$("footer button[title*='Portal'], footer svg.lucide-lock");

  console.log("Header lock present:", !!headerLock);
  console.log("Footer lock present:", !!footerLock);

  // Take screenshot of header
  const header = await page.$("header");
  if (header) {
    await header.screenshot({ path: "screenshots/header-verified.png" });
  }

  // Take screenshot of footer bottom bar
  const footerBottom = await page.$("footer .border-t.border-accent-fg\\/10");
  if (footerBottom) {
    await footerBottom.screenshot({ path: "screenshots/footer-verified.png" });
  }

  await browser.close();
}

verify().catch((err) => {
  console.error(err);
  process.exit(1);
});
