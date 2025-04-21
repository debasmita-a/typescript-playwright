import { test as base } from '@playwright/test';
import AccountPage from '../pages/accountPage';
import LoginPage from '../pages/loginPage';

type PageObjects = {
    loginPage : LoginPage,
    accountPage : AccountPage
}

export const test = base.extend<PageObjects>({
   loginPage: async({ page }, use)=>{
    await use(new LoginPage(page));
   },
   accountPage: async({ page }, use)=>{
    await use(new AccountPage(page));
   }
});

export { expect } from '@playwright/test';