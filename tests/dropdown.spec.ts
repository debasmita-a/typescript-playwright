import {test, expect, Browser, Page, Locator, FrameLocator, chromium, BrowserContext} from '@playwright/test';

test('dropdown in playwright test', async()=>{
    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
    const page:Page = await browser.newPage();

    await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");
    const countryDropdown:string = "select#Contact_CountryCode";
 /*    await page.selectOption(countryDropdown, {value:'AD'});
    await page.waitForTimeout(3000);
    await page.selectOption(countryDropdown, {label:'Algeria'});
    await page.waitForTimeout(3000);
    await page.selectOption(countryDropdown, {index:8});

    await page.waitForTimeout(3000); */

    const options = await page.$$('select#Contact_CountryCode>option');
    console.log(options.length);
   
for(const option of options){
    console.log(await option.textContent());
}

})