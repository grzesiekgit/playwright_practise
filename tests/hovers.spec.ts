import test, { expect } from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { Hovers } from "../pages/hovers.page";

test("hovers test", async ({ page }) => {
  const welcomePage = new WelcomePage(page);
  await welcomePage.openWelcomePage();
  await welcomePage.openPage("Hovers");

  const hovers = new Hovers(page);
  await hovers.verifyHeader();
  await hovers.verifyIfUsersAreNotViisble();
  await hovers.verifyIfUserAreVisibleAfterHover();
});
