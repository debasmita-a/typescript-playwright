import { Page, Locator } from '@playwright/test';
import AccountPage from './accountPage';
import { RegisterUserDetails } from '../testData/registerUserTestData';

class RegisterUserPage{

    constructor(private readonly page:Page){

    }

    private firstName_text:Locator = this.page.locator('#input-firstname');
    private lastName_text:Locator = this.page.locator('#input-lastname');
    private email_text:Locator = this.page.locator('#input-email');
    private telephone_text:Locator = this.page.locator('#input-telephone');
    private password_text:Locator = this.page.locator('#input-password');
    private confirmPassword_text:Locator = this.page.locator('#input-confirm');
    private privacyPolicy_checkBox:Locator = this.page.locator('.agree + input[type= "checkbox"]');
    private continue_Btn:Locator = this.page.getByRole('button', {name:'Continue'});

    private async enterFirstName(firstname:string){
        await this.firstName_text.fill(firstname);
    }

    private async enterLastName(lastName:string){
        await this.lastName_text.fill(lastName);
    }

    private async enterEmail(email:string){
        await this.email_text.fill(email);
    }

    private async enterTelephone(telephone:string){
        await this.telephone_text.fill(telephone);
    }

    private async enterPassword(password:string){
        await this.password_text.fill(password);
    }

    private async enterConfirmPassword(password:string){
        await this.confirmPassword_text.fill(password);
    }

    private async selectNewsletterOption(radioVal:string){
        let newsletter_radio:Locator = await this.page.locator(`.radio-inline input[value="${radioVal}"]`);      
        if(radioVal == "1"){
            await newsletter_radio.check();
        }      
    }

    private async checkPrivacyPolicy(){
        await this.privacyPolicy_checkBox.check();
    }

    private async clickContinueBtn(){
        await this.continue_Btn.click();
        return new AccountPage(this.page)
    }

    async doRegistration(registerUserDetails: RegisterUserDetails){
            await this.enterFirstName(registerUserDetails.firstname);
            await this.enterLastName(registerUserDetails.lastname);
            await this.enterEmail(registerUserDetails.email);
            await this.enterTelephone(registerUserDetails.telephone);
            await this.enterPassword(registerUserDetails.password);
            await this.enterConfirmPassword(registerUserDetails.password);
            await this.selectNewsletterOption(registerUserDetails.newsletter);
            await this.checkPrivacyPolicy();
            await this.clickContinueBtn();
            return new AccountPage(this.page);
    }
}

export default RegisterUserPage;