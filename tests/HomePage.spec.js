
 const {test,expect} = require('@playwright/test');

 test('HomePage',async({page})=>
 {
           await  page.goto('https://www.amazon.in/');

        const Title =  await page.title();
        console.log('page title is', Title);

       const URL = page.url();
   console.log('page URL is', URL);
       await  expect(page).toHaveURL('https://www.amazon.in/');

 })

 test('locationAllWebElement',async({page})=>
    {

 const ALLLinks = await page.$$('a');

 for(const link of ALLLinks){
      const Text= await link.textContent();
        console.log('text is ', Text);
 }


})
