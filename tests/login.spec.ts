import {Env} from '../src/config/env';
import { encrypt, decrypt } from '../src/utils/cryptoJsUtil';
import { test, expect } from '../src/utils/fixtures'; 
import {Page} from 'playwright';

test('login test', async ({page, loginPage, accountPage})=>{
    await page.goto(Env.BASE_URL);
    await loginPage.doLogin(Env.USER_EMAIL, Env.USER_PASSWORD);

    const title: string = await accountPage.getAccountPageTitle();
    expect(title).toContain("My Account");
});

test('encrypt and decrypt test', async()=>{
    const plaintext = 'Hello Kitty';
    const encryptedText = encrypt(plaintext);
    console.log('SALT: ', process.env.SALT);
    console.log('Encyrpted: ', encryptedText);
    const decryptedText = decrypt(encryptedText);
    console.log('Decrypted: ' + decryptedText);
});