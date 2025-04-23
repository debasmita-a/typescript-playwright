import { Env } from '../src/config/env';
import { getRandomUserData } from '../src/testData/getRandomUserData';
import { RegisterUserDetails } from '../src/testData/registerUserTestData';
import { expect, test } from '../src/utils/fixtures';

test('Register user successfully', async({page, accountPage, registerPage })=>{
    const registerUserData: RegisterUserDetails = getRandomUserData();
      await page.goto(Env.BASE_URL+'/register');
      await registerPage.doRegistration(registerUserData); 
      await page.waitForTimeout(10000);  
      expect(page.waitForURL('https://naveenautomationlabs.com/opencart/index.php?route=account/success'));
})