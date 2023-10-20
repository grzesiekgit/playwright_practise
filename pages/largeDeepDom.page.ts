import { Page, expect } from "@playwright/test";

export class LargeDeepDom {
  constructor(private page: Page) {}

  async verifyElemntHasProperClassAtribute(elementValue: string) {
    const integerPart = elementValue.split(".")[0];
    const decimalPart = elementValue.split(".")[1];
    const el = this.page
      .locator("#siblings")
      .getByText(elementValue, { exact: true });
    const elClasses = await el.getAttribute("class");
    expect(elClasses).toContain(`tier-${integerPart}`);
    expect(elClasses).toContain(`item-${decimalPart}`);
  }
  async verifyElemntHasProperIdAtribute(elementValue: string) {
    const integerPart = elementValue.split(".")[0];
    const decimalPart = elementValue.split(".")[1];
    const el = this.page
      .locator("#siblings")
      .getByText(elementValue, { exact: true });
    const elId = await el.getAttribute("id");
    expect(elId).toContain(`sibling-${integerPart}.${decimalPart}`);
  }
  async getColumn(searchedValue: string): Promise<number>{
    const el = this.page.locator("#large-table").getByText(searchedValue);
    const elClass = await el.getAttribute("class");
    if (elClass == null) {
      throw new Error("we don't have that column");
    }
    return parseInt(elClass.split("-")[1]);
  }
  async getRow(searchedValue: string): Promise<number>{
    const el = this.page.locator("#large-table").getByText(searchedValue).locator('xpath=..');
    const elRow = await el.getAttribute("class");
    if (elRow == null) {
      throw new Error("we don't have that row");
    }
    return parseInt(elRow.split("-")[1]);
  }
}
