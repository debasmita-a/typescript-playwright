import { test as base } from '@playwright/test';
import AccountPage from '../pages/accountPage';
import LoginPage from '../pages/loginPage';
import RegisterUserPage from '../pages/registerUsers';

type PageObjects = {
    loginPage : LoginPage,
    accountPage : AccountPage,
    registerPage : RegisterUserPage
}

export const test = base.extend<PageObjects>({
   loginPage: async({ page }, use)=>{
    await use(new LoginPage(page));
   },
   accountPage: async({ page }, use)=>{
    await use(new AccountPage(page));
   },
   registerPage: async({ page }, use)=>{
    await use(new RegisterUserPage(page));
   }
});

export { expect } from '@playwright/test';