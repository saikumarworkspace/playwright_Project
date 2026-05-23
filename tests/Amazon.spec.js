const { test, expect, chromium } = require("@playwright/test");

let browser, context, page;

test.beforeAll(async () => {
  browser = await chromium.launch({ headless: false }); // headed mode
  context = await browser.newContext();
  page = await context.newPage();
});

test.afterAll(async () => {
  await browser.close();
});

test.describe.serial("sequential test", () => {
  test("NavigateToURL", async () => {
    await page.goto("https://www.amazon.in/");
    expect(page.url()).toBe("https://www.amazon.in/");
  });

  test("ClickingOnSecondMobile", async () => {
    await page.locator("#twotabsearchtextbox").fill("Mobile");
    await page.locator("#nav-search-submit-button").click();

    const secondItem = page.locator(".s-result-item").nth(1);
    await secondItem.click();

    const [newPage] = await Promise.all([
      context.waitForEvent("page"),
      page.locator('[target="_blank"]').first().click()
    ]);
    await newPage.waitForLoadState();
    console.log(await newPage.title());
  });
});