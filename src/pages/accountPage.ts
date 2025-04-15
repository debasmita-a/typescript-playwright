import { Page } from "playwright";

class AccountPage{

    constructor(private readonly page: Page){
    }

    public async getAccountPageTitle(){
        return await this.page.title();
    }
}
export default AccountPage;