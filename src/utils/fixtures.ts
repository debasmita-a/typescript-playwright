import { test as base } from '@playwright/test';
import AccountPage from '../pages/accountPage';
import LoginPage from '../pages/loginPage';
import RegisterUserPage from '../pages/registerUsers';
import SearchResultPage from '../pages/searchResultPage';

type PageObjects = {
    loginPage : LoginPage,
    accountPage : AccountPage,
    registerPage : RegisterUserPage,
    searchResultPage : SearchResultPage
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
   },
   searchResultPage: async({ page }, use)=>{
    await use(new SearchResultPage(page));
   }
});

export { expect } from '@playwright/test';