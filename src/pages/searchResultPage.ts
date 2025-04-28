import { Locator, Page } from 'playwright';

class SearchResultPage{
    constructor(private readonly page:Page) {
       
    }

    private readonly productImages:Locator = this.page.locator('.thumbnail img');
    private readonly productPrice:Locator = this.page.locator('div.col-sm-4 h2');

    public async clickProductResult(product:string){
        let productResultImage:Locator = await this.page.getByAltText(product, {exact:true});
        await productResultImage.click();
    }

    public async getProductPriceText(){
        return await this.productPrice.textContent()??'';
    }

    public async getProductImagesCount(){
        await this.page.waitForSelector('.thumbnail img');
        return await this.productImages.count();
    }
}

export default SearchResultPage;