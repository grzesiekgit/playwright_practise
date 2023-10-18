import test, { expect } from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { DragAndDrop } from "../pages/dragAndDrop.page";

test('switch elements A and B', async ({page})=>{
    const welcomePage = new WelcomePage(page);
    await welcomePage.openWelcomePage();
    await welcomePage.openPage("Drag and Drop");

    const dragAndDrop = new DragAndDrop(page);
    expect.soft(await dragAndDrop.getFirstElementText()).toBe('A');
    expect.soft(await dragAndDrop.getSecondElementText()).toBe('B');
    
    await dragAndDrop.moveFirstElementToSecond();
    
    expect.soft(await dragAndDrop.getFirstElementText()).toBe('B');
    expect.soft(await dragAndDrop.getSecondElementText()).toBe('A');
});