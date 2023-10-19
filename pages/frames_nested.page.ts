import { Page, expect } from "@playwright/test";

let topFrame, leftFrame, middleFrame, rightFrame, bottomFrame;
export class NestedFrame {
  constructor(private page: Page) {}

  topFrame = this.page.frameLocator('[name="frame-top"]');
  leftFrame = this.topFrame.frameLocator('[name="frame-left"]').locator("body");
  middleFrame = this.topFrame
    .frameLocator('[name="frame-middle"]')
    .locator('body');
  rightFrame = this.topFrame.frameLocator('[name="frame-right"]').locator('body');
  bottomFrame = this.page.frameLocator('[name="frame-bottom"]').locator("body");

  async verifyFramesContent() {
    await expect.soft(this.leftFrame).toHaveText("LEFT");
    await expect.soft(this.middleFrame).toHaveText("MIDDLE");
    await expect.soft(this.rightFrame).toHaveText("RIGHT");
    await expect.soft(this.bottomFrame).toHaveText("BOTTOM");
  }
}
