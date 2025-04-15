import {Env} from '../src/frameworkConfig/env';
import { test, expect } from '../src/utils/fixtures'; 
import {Page} from 'playwright';

test('login test', async ({page, loginPage, accountPage})=>{
    console.log('Launching app at:', Env.BASE_URL);
    await page.goto(Env.BASE_URL);
    await loginPage.doLogin(Env.USER_EMAIL, Env.USER_PASSWORD);
    const title: string = await accountPage.getAccountPageTitle();
    expect(title).toContain("My Account");
});