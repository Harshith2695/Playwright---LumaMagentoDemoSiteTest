import { expect, Page } from "@playwright/test";

export class HomePage {
    page: Page;
    menu: string;
    url: string;

    constructor(page: Page) {
        this.page = page;
        this.menu = 'div[id="store.menu"]';
        this.url = 'https://magento.softwaretestingboard.com';
    }

    public async selectCategory (item) {

        const element = `(//span[text()="${item}"]/parent::a)[1]`;
            await this.page.locator (element).click ();
            console.log (`Clicked ${element}`);
    }


    public async navigateToHomePage() {
        await this.page.goto(this.url);
    }
}
