import { expect, test } from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { Checkboxes } from "../pages/checkboxes.page";

test.describe("test checkboxes page", () => {
  let checkboxPage: Checkboxes;
  test.beforeEach(async ({ page }) => {
    const welcomePage = new WelcomePage(page);
    await welcomePage.openWelcomePage();
    await welcomePage.openPage("Checkboxes");
    checkboxPage = new Checkboxes(page);
  });
  test("verify page header", async () => {
    expect(await checkboxPage.getHeaderText()).toEqual("Checkboxes");
  });

  test("check checkbox 1", async () => {
    await checkboxPage.selectCheckbox(1);
    expect(await checkboxPage.assertCheckboxStatus(1)).toBeTruthy();
  });

  test("unselect checkbox 2", async () => {
    await checkboxPage.unselectChecbox(2);
    expect(await checkboxPage.assertCheckboxStatus(2)).toBeFalsy();
  });

  test("select all checboxes", async () => {
    await checkboxPage.selectAllCheckboxes();
    expect(await checkboxPage.assertAllChecboxesSelected(true)).toBeTruthy();
  });

  test("unselect all checboxes", async () => {
    await checkboxPage.unselectAllChexkboxes();
    expect(await checkboxPage.assertAllChecboxesSelected(false)).toBeFalsy();
  });

  test("change checkboxes status", async () => {
    await checkboxPage.changeCheckboxStatus();
    expect.soft(await checkboxPage.assertCheckboxStatus(1)).toBeTruthy();
    expect.soft(await checkboxPage.assertCheckboxStatus(2)).toBeFalsy();
  });
});
