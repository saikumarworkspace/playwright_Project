const {test,expect} = require('@playwright/test');

test('Login into the Application',async({page})=>{

    await page.goto("https://www.amazon.in");

    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");

    await page.click("//a[contains(text(),'MX Player')]");

    const PageTitle = await page.title();
    
    await expect(page).toHaveTitle("Amazon miniTV - Watch Free Web Series, Movies, Short Films & K-Dramas Online");

    await expect(page).toHaveTitle(PageTitle);


await page.locator('[data-testid="appnavbar-menuitem-ct-movies"]').click();

await page.locator('//img[@elementtiming="THUMBNAIL"]').nth(1).click();

await page.locator('[class=" WatchNowButton_title__zq_CR WatchNowButton_dWeb__lNj6w"]').click();

const MXplayerTitle = await page.title();

console.log('title of moive ',MXplayerTitle);

await expect(page).toHaveTitle('Watch Coolie No. 1 Movie Online for Free on Amazon');
})
