import { Page, BrowserContext , expect, test, chromium} from '@playwright/test';
import { channel } from 'diagnostics_channel';

test('No Incognito mode', async()=>{
    const context:BrowserContext = await chromium.launchPersistentContext('',{headless:false, channel:'chrome'});
    const page = await context.pages()[0];
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    await page.waitForTimeout(5000);
})