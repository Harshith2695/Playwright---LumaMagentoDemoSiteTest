import { expect } from "@playwright/test";
import { Locator, Page } from "playwright-core";

export class ProductListingPage {
    private page: Page;
    private list: string;
    private items: string;

    constructor (page: Page) {
        this.page =page;
        this.list = '//ol[contains(@class,"product-items")]';
        this.items = '//ol[contains(@class,"product-items")]/child::li/descendant::a[@class="product-item-link"]';
    }
    

    private async countOfElements (locator) {
        return await this.page.locator(locator).count ();
    }

    public elementsList (locator) {}

    public async selectARandomItem () {
        let numberOfItems = await this.countOfElements (this.items);
        console.log (`${numberOfItems} items displayed in Product Listing Page `);
        let itemToBeSelected = Math.floor ((Math.random () * Number (numberOfItems))+1);
        console.log (`Selecting item number ${itemToBeSelected} in list`)
        let targetUrl = await this.page.getAttribute(`(${this.items})[${itemToBeSelected}]`,'href');
        console.log (`Item URL ${targetUrl}`)
        await this.page.click (`(${this.items})[${itemToBeSelected}]`);
        expect (this.page.url()).toBe (targetUrl);
    }

}