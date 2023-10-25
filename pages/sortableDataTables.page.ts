import { Page, expect } from "@playwright/test";
import { Console } from "console";

export class SortableDataTables {
  constructor(private page: Page) {}
  header = this.page.getByRole("heading", { name: "Data Tables" });
  table1 = this.page.locator("#table1");
  table2 = this.page.locator("#table2");
  lastNameValues = this.table1.locator("//tbody//td[1]");
  lastNameHeader = this.table1.getByText("Last Name").locator("..");

  async verifyPageHeader() {
    await expect(this.header).toBeVisible();
  }

  async getRowValues(name: String): Promise<string[]> {
    const rowWithName = this.table1
      .locator("tr")
      .filter({ has: this.page.getByText(`${name}`) })
      .locator("td");
    let rowValues: string[] = [];
    for (const cell of await rowWithName.all()) {
      rowValues.push(await cell.innerText());
    }
    return rowValues;
  }

  async getLastNames(): Promise<string[]> {
    const lastNameColumn: string[] = [];
    for (const cell of await this.lastNameValues.all()) {
      lastNameColumn.push(await cell.innerText());
    }
    return lastNameColumn;
  }

  async compareValues(
    expectedValues: string[],
    values: string[]
  ): Promise<boolean> {
    let areEqual;
    if (expectedValues.length !== values.length) {
      areEqual = false;
    } else {
      for (let i = 0; i < values.length; i++) {
        if (expectedValues[i] !== values[i]) {
          areEqual = false;
        } else {
          areEqual = true;
        }
      }
    }
    return areEqual;
  }

  async sortAlphabetically() {
    await expect(async () => {
      await this.lastNameHeader.click();
      expect(this.lastNameHeader).toHaveClass(/SortDown/);
    }).toPass();
  }
  async sortReverse() {
    await expect(async () => {
      await this.lastNameHeader.click();
      expect(this.lastNameHeader).toHaveClass(/headerSortUp/);
    }).toPass();
  }
}
