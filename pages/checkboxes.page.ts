import { Page } from "@playwright/test";

export class Checkboxes {
  constructor(private page: Page) {}

  checkboxes = this.page.locator("input");
  pageHeader = this.page.locator("//h3");

  async getHeaderText(): Promise<String> {
    return await this.pageHeader.innerText();
  }

  async selectCheckbox(checkboxNumber: number) {
    await this.checkboxes.nth(checkboxNumber - 1).check();
  }

  async assertCheckboxStatus(checkboxNumber: number): Promise<boolean> {
    return await this.checkboxes.nth(checkboxNumber - 1).isChecked();
  }

  async unselectChecbox(checkboxNumber: number) {
    await this.checkboxes.nth(checkboxNumber - 1).uncheck();
  }

  async selectAllCheckboxes() {
    for (const checkbox of await this.checkboxes.all()) {
      await checkbox.setChecked(true);
    }
  }

  async unselectAllChexkboxes() {
    for (const checkbox of await this.checkboxes.all()) {
      await checkbox.setChecked(false);
    }
  }

  async assertAllChecboxesSelected(expectedStatus: boolean): Promise<boolean> {
    for (let i = 0; i < (await this.checkboxes.all()).length; i++) {
      if (!((await this.assertCheckboxStatus(i + 1)) === expectedStatus)) {
        return !expectedStatus;
        break;
      }
    }
    return expectedStatus;
  }

  async changeCheckboxStatus() {
    for (let i = 0; i < (await this.checkboxes.all()).length; i++) {
      if (await this.assertCheckboxStatus(i + 1)) {
        await this.unselectChecbox(i + 1);
      } else {
        await this.selectCheckbox(i + 1);
      }
    }
  }
}
