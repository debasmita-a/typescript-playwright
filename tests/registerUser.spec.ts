import { Env } from '../src/config/env';
import { getRandomUserData } from '../src/testData/getRandomUserData';
import { RegisterUserDetails } from '../src/testData/registerUserTestData';
import { expect, test } from '../src/utils/fixtures';

test.beforeEach('navigate to registration page', async({page})=>{
  await page.goto(Env.BASE_URL+'/register');
});

test('Register user successfully test 1', async({page, registerPage })=>{
    const registerUserData: RegisterUserDetails = getRandomUserData();
      await registerPage.doRegistration(registerUserData); 
      expect(await page.waitForURL('https://naveenautomationlabs.com/opencart/index.php?route=account/success'));
});

test('Register user successfully test 2', async({page, registerPage })=>{
  const registerUserData: RegisterUserDetails = getRandomUserData();
    await registerPage.doRegistration(registerUserData); 
    expect(await page.waitForURL('https://naveenautomationlabs.com/opencart/index.php?route=account/success'));
});