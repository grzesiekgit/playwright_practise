import { Page, expect } from "@playwright/test";

export class KeyPress {
  constructor(private page: Page) {}

  textBox = this.page.getByRole("textbox");
  result = this.page.locator("#result");

  async enterTextAndVerifyResult(textToEnter: string) {
    const stringArray = textToEnter.split("");
    await this.textBox.focus();
    for (let i = 0; i < stringArray.length; i++) {
      await this.page.keyboard.press(stringArray[i]);
      let expectedText: string;
      (stringArray[i]===" ")? expectedText="SPACE": expectedText=stringArray[i].toUpperCase();
      await expect(this.result).toHaveText(`You entered: ${expectedText}`);
      await this.page.waitForTimeout(500);
    }
  }
}
