import { Page, expect } from "@playwright/test";

export class DynamicControls{
    constructor(private page: Page){}

    checkbox = this.page.locator('#checkbox');
    private removeBtn = this.page.getByRole('button', {name: 'Remove'});
    private addBtn = this.page.getByRole('button', {name: 'Add'});
    private enableBtn = this.page.getByRole('button', {name: 'Enable'});
    private disableBtn = this.page.getByRole('button', {name: 'Disable'});
    inputFiled = this.page.locator('#input-example input');

    async disableCheckbox(){
        await this.removeBtn.click();
    }

    async enableCheckbox(){
        await this.addBtn.click();
    }

    async enableTextInput(){
        await this.enableBtn.click();
    }

    async fillTextInput(expectedText: string){
        await expect(this.inputFiled).toBeEnabled();
        await this.inputFiled.fill(expectedText);
    }


}