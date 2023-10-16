import { Page } from "@playwright/test";

export class BasicAuth{
    constructor(private page: Page){}
    
    pageHeader = this.page.locator("//h3");

    async getHeaderText(): Promise<String> {
        return await this.pageHeader.innerText();
      }
}