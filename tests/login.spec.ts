import {test, expect, Browser, Page, BrowserContext} from '@playwright/test';
import {Env} from '../src/frameworkConfig/env';
import LoginPage from '../src/pages/loginPage';
import AccountPage from '../src/pages/accountPage';

test('login test', async ({page})=>{
    const loginPage: LoginPage = new LoginPage(page);
    const accountPage: AccountPage = new AccountPage(page);
    console.log('Launching app at:', Env.BASE_URL);
    await page.goto(Env.BASE_URL);
    await loginPage.doLogin(Env.USER_EMAIL, Env.USER_PASSWORD);
    const title: string = await accountPage.getAccountPageTitle();
    expect(title).toContain("My Account");
});