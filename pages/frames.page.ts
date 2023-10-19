import { Page } from "@playwright/test";
import { NestedFrame } from "./frames_nested.page";
import { IFrame } from "./frames_iframe.page";

export class Frames {
  constructor(private page: Page) {}

  nestedFrame = this.page.getByText("Nested Frames");
  iFrame = this.page.getByText("iFrame");

  async openNestedFrame(){
    await this.nestedFrame.click();
    
  }
  async openIFrame(){
    await this.iFrame.click();
  }
}
