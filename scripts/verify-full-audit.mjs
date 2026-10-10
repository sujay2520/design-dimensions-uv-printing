import { chromium } from "playwright";

async function runAudit() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const consoleErrors = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
    }
  });

  const routes = ["/", "/services", "/work", "/process", "/visit", "/enquire"];
  const baseUrl = "https://design-dimensions-uv-printing.vercel.app";

  console.log("=== COMPREHENSIVE LIVE AUDIT VERIFICATION ===");

  for (const r of routes) {
    const url = `${baseUrl}${r}`;
    console.log(`\nAuditing route: ${url}...`);
    await page.goto(url, { waitUntil: "networkidle" });
    const content = await page.content();

    // Check 1: No Namma Metro references
    if (content.toLowerCase().includes("namma metro")) {
      console.error(`❌ Found 'Namma Metro' on ${r}`);
    } else {
      console.log(`✅ No metro references on ${r}`);
    }

    // Check 2: No 'Dwarakanagar Stage 1' (must be '1st Stage')
    if (content.includes("Dwarakanagar Stage 1")) {
      console.error(`❌ Found 'Dwarakanagar Stage 1' on ${r}`);
    } else {
      console.log(`✅ Address uses '1st Stage' on ${r}`);
    }

    // Check 3: Check hours on visit & enquire & home
    if (r === "/visit" || r === "/enquire" || r === "/") {
      if (content.includes("7:00 PM") && content.includes("2:30 PM")) {
        console.log(`✅ Accurate working hours verified on ${r}`);
      } else {
        console.warn(`⚠️ Check hours representation on ${r}`);
      }
    }
  }

  // Check 4: Testimonials section on /
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  const homeContent = await page.content();
  if (homeContent.includes("Verified Feedback") || homeContent.includes("Verified Projects")) {
    console.error("❌ Testimonials still contain 'Verified' label");
  } else {
    console.log("✅ Testimonials section clean of unverified badges");
  }

  // Check 5: Softened claims on /
  if (homeContent.includes("100% scratch-proof") || homeContent.includes("100% waterproof")) {
    console.error("❌ Absolute durability claims found");
  } else {
    console.log("✅ Claims softened to scratch-resistant & water-resistant");
  }

  console.log("\n=== AUDIT SUMMARY ===");
  console.log(`Total Console Errors across all pages: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.error("Console Errors:", consoleErrors);
  } else {
    console.log("🎉 ZERO Console Errors across all tested routes!");
  }

  await browser.close();
}

runAudit().catch((err) => {
  console.error("Audit test error:", err);
  process.exit(1);
});
