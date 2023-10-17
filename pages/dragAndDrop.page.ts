import { Page } from "@playwright/test";

export class DragAndDrop{
    constructor(private page: Page){}

    firstElement = this.page.locator('#column-a');
    secondElement = this.page.locator('#column-b');

    async moveFirstElementToSecond(){
        await this.firstElement.dragTo(this.secondElement);
    }

    async getFirstElementText(): Promise<string>{
        return await this.firstElement.innerText();
    }

    async getSecondElementText(): Promise<string>{
        return await this.secondElement.innerText();
    }

}