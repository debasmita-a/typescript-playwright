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

    const loginPageLink:Locator = await page.locator('.list-group', {hasText:"Login"})
    const loginPageLinkExists:boolean = await loginPageLink.isDisabled();
    console.log(loginPageLinkExists);
    expect(loginPageLinkExists).toBe(false);

    const personalDetailsHeader: Locator = await page.locator('legend', {hasText:"Your Personal Details"});
    console.log(await personalDetailsHeader.textContent());
   // expect(personalDetailsHeader)

   const emailText:Locator = page.getByPlaceholder('E-Mail');
   await emailText.fill("lenner_123@gmail.com");
   expect(await emailText.isEnabled()).toBe(true);


   const radioBtn:Locator = await page.getByRole('radio', {name:'Yes'});
   console.log(await radioBtn.getAttribute("value"));
   expect(await radioBtn.isChecked()).toBe(false);

   const checkBox:Locator = await page.getByRole('checkbox');
   await checkBox.click();

   const continueBtn:Locator = await page.getByRole('button', {name: 'Continue'});
   await continueBtn.click();
   await page.waitForTimeout(3000);
});
