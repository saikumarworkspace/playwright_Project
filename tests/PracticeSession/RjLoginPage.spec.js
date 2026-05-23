import {test,Expect} from '@playwright/test'

test('Rj Login Page ' ,async ({page})=>{

    await page.goto('https://www.rjwealthmgt.com/');

    const page_title = await page.title();

    console.log('page title is',page_title);
})