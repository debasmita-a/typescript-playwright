import { Page, BrowserContext} from 'playwright';
import { expect } from '@playwright/test';
import *as CryptoJS from 'crypto-js';
import { Env } from '../config/env';

export class WebActions{
    readonly page: Page;
    readonly context: BrowserContext;

    constructor(page: Page, context: BrowserContext){
        this.page = page;
        this.context = context;
    }

    async decipherPassword(){
        const key= `SECRET`;
        return CryptoJS.AES.decrypt(Env.USER_PASSWORD, key).toString(CryptoJS.enc.Utf8);
    }

    async delay(time: number){
        return new Promise(function (resolve){
            setTimeout(resolve, time);
        });
    }

    async clickByText(text: string){
        await this.page.getByText(text, {exact: true}).click();
    }

    async clickElementJS(locator: string){
        await this.page.$eval(locator, (element: HTMLElement)=> element.click());  
    }

    async boundingBoxClickElement(){
        
    }

    async getElementText(locator: string){
        return await this.page.locator(locator).textContent();
    }

    async getAttributeValue(locator: string, attribute: string){
        return await this.page.locator(locator).getAttribute(attribute);
    }

    async navigateToPage(event: string){
        switch (event.toLowerCase()) {
            case `networkidle`:

                break;
            case `load`:
                
                break;
            case `domcontentloaded`:
                
                break;
        
            default:
                break;
        }

    }
}