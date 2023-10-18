import { test, expect } from "@playwright/test";
import { DynamicControls } from "../pages/dynamicControls.page";
import { WelcomePage } from "../pages/welcome.page";

test.beforeEach("dynamic controls page tests", async ({ page }) => {
  const welcomePage = new WelcomePage(page);
  await welcomePage.openWelcomePage();
  await welcomePage.openPage("Dynamic Controls");
});
test("dynamic checkbox", async ({ page }) => {
  const dynamicControls = new DynamicControls(page);
  await expect(dynamicControls.checkbox).toBeVisible();
  await dynamicControls.disableCheckbox();
  await expect(dynamicControls.checkbox).not.toBeVisible();
  await dynamicControls.enableCheckbox();
  await expect(dynamicControls.checkbox).toBeVisible();
});

test("dynamic text input", async ({ page }) => {
  const dynamicControls = new DynamicControls(page);
  await expect(dynamicControls.inputFiled).not.toBeEnabled();
  await dynamicControls.enableTextInput();
  await dynamicControls.fillTextInput("bla bla bla");
  await expect(dynamicControls.inputFiled).toBeEnabled();
});
