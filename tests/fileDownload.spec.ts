import { FileDownload } from "../pages/fileDownload.page";
import { test } from "@playwright/test";

test("download file first way", async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');

  const fileDownload = new FileDownload(page);
  await fileDownload.downloadFile("boat.jpg");
});


test("download file second way", async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/download');
  
    const fileDownload = new FileDownload(page);
    await fileDownload.downloadFile2("test.txt");
  });
  

