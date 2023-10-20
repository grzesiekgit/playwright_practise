import { Page } from "@playwright/test";
import { MultipleWindowsSubpage } from "./multipleWindowsSubpage.page";

export class MultipleWindowsMain{
    constructor(private page: Page){}

    openNewWindowBtn = this.page.getByRole('link', { name: 'Click Here' });

    async openNewWindow(){
        await this.openNewWindowBtn.click();
    }
}