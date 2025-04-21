import {test, expect, Browser, Page, Locator, FrameLocator, chromium, BrowserContext} from '@playwright/test';

test('locator chaining test', async()=>{
    const page:Page = await (await chromium.launch({ headless: false, channel: 'chrome' })).newPage();
    await page.goto("https://www.orangehrm.com/30-day-free-trial");

   // const userName:Locator = await page.locator('form#Form_getForm >> #Form_getForm_subdomain');
   // await userName.fill("KLennert");

   // await page.locator('form#Form_getForm >> text=Get Your Free Trial').click();
   const form:Locator = await page.locator('form#Form_getForm').locator('#Form_getForm_subdomain');
   await form.fill("KLennert");
   const button:Locator = await page.getByRole('button', {name: "Get Your Free Trial"});
   await button.click();
    await page.waitForTimeout(5000);
})