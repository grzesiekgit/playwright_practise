import { Page, expect } from "@playwright/test";
import { StringHelper } from "../helpers/stringHelper";

export class StatusCodes{
    constructor(private page: Page){};

    subPage = this.page.getByRole('link', { name: '{0}' });

    async openPageAndVeryfieStatus(status: string){

        const responsePromise = this.page.waitForResponse(res => res.url()==`https://the-internet.herokuapp.com/status_codes/${status}`);
        await this.page.getByRole('link', {name: `${status}`}).click();
        const response = await responsePromise;
        expect(response.status().toString()).toBe(status);

    }
}