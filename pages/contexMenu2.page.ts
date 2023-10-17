import { Page, expect } from "@playwright/test";

export class ContexMenu2 {
  constructor(private page: Page) {}

    trigerAlert = this.page.locator('#alert-button');
    trigerConformation = this.page.locator('#confirm-button');
    trigerPrompt = this.page.locator('#prompt-button');
    message = this.page.locator('#msg')


  async openAutoPractComPage(){
    await this.page.goto('http://autopract.com/selenium/alert5/');
  }
  
  async openAlert() {
    await this.trigerAlert.click();
  }

  async openConfirmation(){
    await this.trigerConformation.click();
  }

  async alertHandler() {
    this.page.on("dialog", async (dialog) => {
      expect(dialog.type()).toContain("alert");
      expect(dialog.message()).toContain("This is an Alert Box.");
      await dialog.accept();
    });
  }

  async verifyMessage(expectedMessage: string){
    await expect(this.message).toHaveText(expectedMessage);
  }

  async confimationDecline() {
    this.page.on("dialog", async (dialog) => {
      expect(dialog.type()).toContain("confirm");
      expect(dialog.message()).toContain("Do you want to save changes?");
      await dialog.dismiss();
    });
  }
}