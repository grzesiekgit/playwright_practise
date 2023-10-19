import { Page, expect } from "@playwright/test";

export class IFrame{
    constructor(private page: Page){}

    iFrame = this.page.frameLocator('#mce_0_ifr').locator('#tinymce');

    async verifyFramesContent() {
        await expect.soft(this.iFrame).toHaveText("Your content goes here."); 
      }
}