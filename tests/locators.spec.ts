import { Browser, chromium, Page} from 'playwright';
import { test, expect, Locator} from '@playwright/test';

test('practice locators', async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    const firstName:Locator = await page.locator('#input-firstname');
    const lastName:Locator = await page.locator('#input-lastname');
    await firstName.fill("Kate");
    await lastName.fill("Lennert");

    const logo:Locator = await page.locator('.img-responsive');
    const logoIsDisplayed:boolean = await logo.isVisible();
    console.log(logoIsDisplayed);

    const header:Locator = await page.locator('text=Register Account');
    const headerExist:boolean = await header.isEnabled();
    console.log(headerExist);
    expect(headerExist).toBe(true);

    const continueBtn:Locator = await page.locator('text=Continue');
    const continueBtnExist:boolean = await header.isEnabled();
    console.log(continueBtnExist);
    expect(continueBtnExist).toBe(true);
});
