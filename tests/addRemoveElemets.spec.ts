import { expect, test } from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { AddRemoveElementsPage } from "../pages/addRemoveElements.page";
test.describe("add/remove tests", () => {});
let addRemoveElementsPage: AddRemoveElementsPage;

test.beforeEach(async ({ page }) => {
  const welcomePage = new WelcomePage(page);
  await welcomePage.openWelcomePage();
  await welcomePage.openPage("Add/Remove Elements");
  addRemoveElementsPage = new AddRemoveElementsPage(page);
});

test("verify page header", async ({ page }) => {
  await expect(await addRemoveElementsPage.getHeaderText()).toEqual(
    "Add/Remove Elements"
  );
});

test("adding elements", async ({ page }) => {
  const newElements: number = 10;
  await addRemoveElementsPage.addElements(newElements);
  await expect(await addRemoveElementsPage.getNumberOfElements()).toBe(
    newElements
  );
});

test("delete all added elements", async ({ page }) => {
  await addRemoveElementsPage.addElements(15);
  await addRemoveElementsPage.deleteAllElements();
  await expect(await addRemoveElementsPage.getNumberOfElements()).toBe(0);
});

test("delete a few elements", async ({ page }) => {
  const newElements: number = 15;
  const elemnentToDelete: number = 5;
  await addRemoveElementsPage.addElements(newElements);
  await addRemoveElementsPage.deleteNthElement(elemnentToDelete);
  await expect(await addRemoveElementsPage.getNumberOfElements()).toBe(
    newElements - 1
  );
});
