import test from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { KeyPress } from "../pages/keyPress.page";

test('key press test', async ({page})=>{
    test.slow();
    const welcomePage = new WelcomePage(page);
    await welcomePage.openWelcomePage();
    await welcomePage.openPage("Key Presses");

    const keyPress = new KeyPress(page);
    await keyPress.enterTextAndVerifyResult('It would be nice to have a cross browser way to test scrolling');
});