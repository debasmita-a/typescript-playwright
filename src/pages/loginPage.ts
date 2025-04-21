import { Page, Locator } from '@playwright/test';
import AccountPage from './accountPage';

class LoginPage{
      
    constructor(private readonly page: Page){
    }

    private readonly email_text = this.page.locator('#input-email');
    private readonly password_text = this.page.locator('#input-password');
    private readonly login_btn = this.page.locator('input[value="Login"]');

    private async enterEmail(email: string){
        await this.email_text.fill(email);
    }

    private async enterPassword(password: string){
        await this.password_text.fill(password);
    }

    private async clickLoginBtn(){
        await this.login_btn.click();
    }

    public async doLogin(email: string, password: string){
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginBtn();
        return new AccountPage(this.page);
    }
}
export default LoginPage;