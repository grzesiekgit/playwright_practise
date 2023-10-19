import { Page, expect } from "@playwright/test";

export class HorizontalSlider {
  constructor(private page: Page) {}

  slider = this.page.getByRole("slider");
  sliderValue = this.page.locator("#range");

  async checkCurrentValue(): Promise<string> {
    await this.page.waitForTimeout(5000);
    return await this.sliderValue.innerText();
  }

  async clickSlider() {
    await this.slider.click({ position: { x: 0, y: 0 } });
    return this;
  }

  async checkIfSliderHasExpectedValue(expectedValue: number) {
    await expect(this.sliderValue).toHaveText(`${expectedValue}`);
  }

  async getCurrentValue(): Promise<number> {
    return await parseFloat(await this.sliderValue.innerText());
  }

  async moveSliderToExpectedValue(expectedValue: number) {
    while ((await this.getCurrentValue()) < expectedValue) {
      await this.page.keyboard.press("ArrowRight");
    }
    return this;
  }
}
