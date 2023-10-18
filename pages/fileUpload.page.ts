import { Page, expect } from "@playwright/test";

export class FileUpload {
  constructor(private page: Page) {}

  selectFile = "#file-upload";
  uploadBtn = this.page.getByRole("button", { name: "Upload" });
  uploadedFilesTile = this.page.locator("#uploaded-files");
  confirmationHeader = this.page.locator(".example h3");

  async uploadFile(fileName: string) {
    await this.page.setInputFiles(this.selectFile, `download/${fileName}`);
    await this.uploadBtn.click();
  }

  async verifyIfFileUploaded(fileName: string) {
    await expect(this.uploadedFilesTile).toContainText(`${fileName}`);
    await expect(this.confirmationHeader).toHaveText("File Uploaded!");
  }
}
