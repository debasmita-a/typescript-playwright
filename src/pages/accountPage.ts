import { Locator, Page } from "playwright";
import SearchResultPage from "./searchResultPage";

class AccountPage{

    constructor(private readonly page: Page){
    }

    private searchBox_text:Locator = this.page.getByPlaceholder("Search");
    private searchBtn:Locator = this.page.locator('button.btn-lg i.fa-search');

    public async getAccountPageTitle(){
        return await this.page.title();
    }

    private async enterSearchText(searchText:string){
        await this.searchBox_text.fill(searchText);
    }

    private async clickSearchBtn(){
        await this.searchBtn.click();
    }

    public async doSearch(searchText:string){
        await this.enterSearchText(searchText);
        await this.clickSearchBtn();
        return new SearchResultPage(this.page);
    }
}
export default AccountPage;