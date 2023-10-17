import test, { expect } from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { DissapearingElements } from "../pages/dissapearingElements.page";

test('check if element dissapears after page is refreshed a few times', async ({page})=>{
    const welcomePage = new WelcomePage(page);
    await welcomePage.openWelcomePage();
    await welcomePage.openPage("Disappearing Elements");

    const dissapearingElements = new DissapearingElements(page);

    await expect(async()=>{
        await page.reload({waitUntil: 'load'});
        await expect(await dissapearingElements.isGalleryVisible()).toBeFalsy();
    }).toPass()

    await expect(async()=>{
        await page.reload({waitUntil: 'load'});
        await expect(await dissapearingElements.isGalleryVisible()).toBeTruthy();
    }).toPass()    
})