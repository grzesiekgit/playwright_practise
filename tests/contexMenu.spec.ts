import test from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { ContexMenu } from "../pages/contexMenu.page";

test('contex menu test', async ({page})=>{
    const welcomePage = new WelcomePage(page);
    await welcomePage.openWelcomePage();
    await welcomePage.openPage("Context Menu");
    const contexMenu = new ContexMenu(page);
    await contexMenu.alertHandler();
    await contexMenu.rightClickContexBox();
});