import test, { expect } from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { DissapearingElements } from "../pages/dissapearingElements.page";

test("check if element dissapears after page is refreshed a few times", async ({
  page,
}) => {
  const welcomePage = new WelcomePage(page);
  await welcomePage.openWelcomePage();
  await welcomePage.openPage("Disappearing Elements");

  const dissapearingElements = new DissapearingElements(page);

  expect(async () => {
    await page.reload({ waitUntil: "load" });
    expect(await dissapearingElements.isGalleryVisible()).toBeFalsy();
  }).toPass();

  expect(async () => {
    await page.reload({ waitUntil: "load" });
    expect(await dissapearingElements.isGalleryVisible()).toBeTruthy();
  }).toPass();
});
