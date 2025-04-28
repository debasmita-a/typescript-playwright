import {Env} from '../src/config/env';
import { test, expect } from '../src/utils/fixtures'; 
import productData from '../testdata/productTestData.json';

test('Search products', async({page, loginPage, accountPage, searchResultPage})=>{
    await page.goto(Env.BASE_URL+'/login');
    accountPage = await loginPage.doLogin(Env.USER_EMAIL, Env.USER_PASSWORD);
    searchResultPage = await accountPage.doSearch("MacBook");
    await searchResultPage.clickProductResult("MacBook");
    console.log(await searchResultPage.getProductImagesCount());
    console.log(await searchResultPage.getProductPriceText());
})

test('Search products with testdata', async({page, loginPage, accountPage, searchResultPage})=>{
    await page.goto(Env.BASE_URL+'/login');
    accountPage = await loginPage.doLogin(Env.USER_EMAIL, Env.USER_PASSWORD);
    for(const product of productData){
        searchResultPage = await accountPage.doSearch(product.productname);
        await searchResultPage.clickProductResult(product.productname);
        const imageCount:number = await searchResultPage.getProductImagesCount();
        const productPrice:string = await searchResultPage.getProductPriceText();
        expect(imageCount).toEqual(product.productImageCount);
        expect(productPrice).toEqual(product.productPriceText);
        //console.log(await searchResultPage.getProductImagesCount());
       // console.log(await searchResultPage.getProductPriceText());
    }
    
})