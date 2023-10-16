import { expect, test } from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { BasicAuth } from "../pages/basicAuth.page";

test("verify basic auth page header verison 1", async ({ browser }) => {
  const context = await browser.newContext({
    httpCredentials: {
      username: "admin",
      password: "admin",
    },
  });

  const newPage = await context.newPage();
  const welcomePage = new WelcomePage(newPage);
  await welcomePage.openWelcomePage();
  await welcomePage.openPage("Basic Auth");
  const basicAuthPage = new BasicAuth(newPage);

  await expect(await basicAuthPage.getHeaderText()).toEqual("Basic Auth");
});

test("verify basic auth page header verison 2", async ({ page }) => {
  const httpCredentials = {
    username: "admin",
    password: "admin",
  };

  const welcomePage = new WelcomePage(page);
  await welcomePage.openWelcomePage();
  await page.goto(
    `http://${httpCredentials.username}:${httpCredentials.password}@the-internet.herokuapp.com/basic_auth`
  );
  const basicAuthPage = new BasicAuth(page);

  await expect(await basicAuthPage.getHeaderText()).toEqual("Basic Auth");
});
