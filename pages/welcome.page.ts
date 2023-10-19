import { Page, expect } from "@playwright/test";

export class WelcomePage {
    constructor(private page: Page) {}

    async openWelcomePage(): Promise<void>{
        await this.page.goto('/');
        await expect(this.page).toHaveTitle('The Internet');
        await this.page.waitForLoadState();
    }

    async openPage(subPage: String){
        await this.page.getByText(`${subPage}`).first().click();
    }
}