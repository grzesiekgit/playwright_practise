import test from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { StatusCodes } from "../pages/statusCodes.page";

test.beforeEach('status codes tests', async ({page})=>{
    const welcomePage = new WelcomePage(page);
    await welcomePage.openWelcomePage();
    await welcomePage.openPage("Status Codes");
});

test('status 200', async ({page})=>{
    const statusCodes = new StatusCodes(page);
    await statusCodes.openPageAndVeryfieStatus('200');
});
test('status 301', async ({page})=>{
    const statusCodes = new StatusCodes(page);
    await statusCodes.openPageAndVeryfieStatus('301');
});
test('status 404', async ({page})=>{
    const statusCodes = new StatusCodes(page);
    await statusCodes.openPageAndVeryfieStatus('404');
});
test('status 500', async ({page})=>{
    const statusCodes = new StatusCodes(page);
    await statusCodes.openPageAndVeryfieStatus('500');
});