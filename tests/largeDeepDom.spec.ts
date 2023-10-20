import test, { expect } from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { LargeDeepDom } from "../pages/largeDeepDom.page";

test.beforeEach("large deep dom tests", async ({ page }) => {
  const welcomePage = new WelcomePage(page);
  await welcomePage.openWelcomePage();
  await welcomePage.openPage("Large & Deep DOM");
});

test("large DOM tests", async ({ page }) => {
  const largeDeepDom = new LargeDeepDom(page);
  await largeDeepDom.verifyElemntHasProperClassAtribute("14.3");
  await largeDeepDom.verifyElemntHasProperIdAtribute("15.2");
});
test("table tests", async ({ page }) => {
  const largeDeepDom = new LargeDeepDom(page);
  expect(await largeDeepDom.getColumn('12.8')).toBe(8);
  expect(await largeDeepDom.getRow('12.8')).toBe(12);

});
