import { Page } from "@playwright/test";

export class AddRemoveElementsPage {
  constructor(private page: Page) {}

  pageHeader = this.page.locator("//h3");
  addElement = this.page.getByText("Add Element");
  deleteElement = this.page.getByText("Delete");

  async getHeaderText(): Promise<String> {
    return await this.pageHeader.innerText();
  }

  async addElements(newElements: number) {
    for (let i = 0; i < newElements; i++) {
      await this.addElement.click();
    }
  }

  async getNumberOfElements(): Promise<number> {
    return (await this.deleteElement.all()).length;
  }

  async deleteAllElements() {
    const numberOfElements = await this.getNumberOfElements();
    for (let i = 0; i < numberOfElements; i++) {
      await this.deleteNthElement(numberOfElements-i);
    }
  }

  async deleteNthElement(numberOfElement: number) {
    await this.deleteElement.nth(numberOfElement - 1).click();
  }
}
