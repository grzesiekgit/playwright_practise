import { Page, expect } from "@playwright/test";

export class WelcomePage {
    constructor(private page: Page) {}

    async openWelcomePage(): Promise<void>{
        await this.page.goto('/');
        await expect(this.page).toHaveTitle('The Internet');
    }

    async openPage(subPage: String){
        await this.page.getByText(`${subPage}`).click();
    }
}