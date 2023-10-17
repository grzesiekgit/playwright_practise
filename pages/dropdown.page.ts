import { Page, expect } from "@playwright/test";

export class Dropdown{
    constructor(private page: Page){}

    dropdown = this.page.locator('#dropdown');
    selectedValue = this.page.locator("option[selected='selected']")

    async selectOption1(){
        await this.dropdown.selectOption('1');
    }

    async selectOption2(){
        await this.dropdown.selectOption('Option 2');
    }

    async getDropdownValue(): Promise<string>{
        return await this.selectedValue.innerText();
    }
}