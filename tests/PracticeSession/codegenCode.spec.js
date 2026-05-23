import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('link', { name: 'Home', exact: true }).click();
  await page.getByRole('link', { name: 'Shorts' }).click();
  await page.getByRole('link', { name: 'Home', exact: true }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('DC');
  await page.locator('div').filter({ hasText: 'dc song' }).nth(5).click();
  await page.locator('#inline-preview-player video').click();
  await page.getByRole('button', { name: 'Full screen keyboard shortcut' }).click();
  await page.getByLabel('YouTube Video Player in').locator('video').click();
});