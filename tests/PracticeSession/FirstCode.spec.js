  const {test,expect} = require('@playwright/test')


  test('My First Code On Googl', async({page})=>{

    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle("Googleee");
    console.log("Login to Google");
  })