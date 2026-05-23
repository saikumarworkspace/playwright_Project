const { test, expect } = require('@playwright/test');

test('datatable', async ({ page }) => {
  await page.goto('https://www.w3schools.com/html/html_tables.asp');

  // Target the Germany cell
  const tableCell = page.locator("//table[@id='customers']//td[text()='Germany']");

  await expect(tableCell).toHaveText('Germany');
});