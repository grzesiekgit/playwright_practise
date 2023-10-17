import { Page, expect } from "@playwright/test";
import { StringHelper } from "../helpers/stringHelper";

export class DynamicLoading {
  constructor(private page: Page) {}


  example = ("[href='/dynamic_loading/{0}']");
  startBtn = this.page.getByRole("button", { name: "Start" });
  finalText = this.page.locator("#finish");


  
  async clickExample(exampleNumber: string) {
    await this.page.locator(StringHelper.format(this.example, exampleNumber)).click();
  }

  async clickStart() {
    await this.startBtn.click();
  }

  async verifyFinalText(): Promise<string> {
    await expect(this.finalText).toBeVisible({timeout: 6000});
    return await this.finalText.innerText();
  }
}
