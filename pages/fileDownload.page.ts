import { Page, expect } from "@playwright/test";

const fs = require("fs");

export class FileDownload {
  constructor(private page: Page) {}

  async downloadFile(fileName: string) {
    const [download] = await Promise.all([
      this.page.waitForEvent("download"),
      this.page.locator(`text=${fileName}`).click(),
    ]);
    const suggestedFileName = download.suggestedFilename();
    const filePath = "download/" + suggestedFileName;
    await download.saveAs(filePath);
    expect(fs.existsSync(filePath)).toBeTruthy();
  }

  async downloadFile2(fileName: string) {
    const downloadPromise = this.page.waitForEvent("download");
    await this.page.getByText(`${fileName}`).click();
    const download = await downloadPromise;
    await download.saveAs('download/' + download.suggestedFilename());
    expect(fs.existsSync('download/' + download.suggestedFilename())).toBeTruthy();
  }
}
