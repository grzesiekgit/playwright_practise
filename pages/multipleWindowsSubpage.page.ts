import { Page, expect } from "@playwright/test";

export class MultipleWindowsSubpage{
    constructor(private page: Page){}

    header = this.page.getByRole('heading', {name: 'New Window'});
    
    async verifyPageHeader(){
        await expect(this.header).toHaveText('New Window');
    }
}