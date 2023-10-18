import { test, expect } from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { DynamicLoading } from "../pages/dynamicLoading.page";

test.beforeEach("dynamic loading page tests", async ({ page }) => {
  const welcomePage = new WelcomePage(page);
  await welcomePage.openWelcomePage();
  await welcomePage.openPage("Dynamic Loading");
});
test("example 1", async ({ page }) => {
  const dynamicLoading = new DynamicLoading(page);
  await dynamicLoading.clickExample("1");
  await dynamicLoading.clickStart();
  expect(await dynamicLoading.verifyFinalText()).toBe("Hello World!");
});

test("example 2", async ({ page }) => {
  const dynamicLoading = new DynamicLoading(page);
  await dynamicLoading.clickExample('2');
  await dynamicLoading.clickStart();
  expect(await dynamicLoading.verifyFinalText()).toBe("Hello World!");
});
