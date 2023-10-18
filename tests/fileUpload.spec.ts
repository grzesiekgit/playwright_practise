import test from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { FileUpload } from "../pages/fileUpload.page";

test('file Upload tests', async({page})=>{
    const welcomePage = new WelcomePage(page);
    await welcomePage.openWelcomePage();
    await welcomePage.openPage("File Upload");

    const fileUpload = new FileUpload(page);
    await fileUpload.uploadFile('boat.jpg');
    await fileUpload.verifyIfFileUploaded('boat.jpg');
});