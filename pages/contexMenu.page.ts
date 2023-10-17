import { Page, expect } from "@playwright/test";

export class ContexMenu {
  constructor(private page: Page) {}

  contexBox = this.page.locator("#hot-spot");

  async rightClickContexBox() {
    await this.contexBox.click({ button: "right" });
  }

  async alertHandler() {
    this.page.on("dialog", async (dialog) => {
      expect(dialog.type()).toContain("alert");
      expect(dialog.message()).toContain("You selected a context menu");
      await dialog.accept();
    });
    //await this.page.getByRole("button").click();
  }
}
