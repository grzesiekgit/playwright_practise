import test from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { MultipleWindowsMain } from "../pages/multipleWindowsMain.page";
import { MultipleWindowsSubpage } from "../pages/multipleWindowsSubpage.page";

test("multiple windows test", async ({ context }) => {
  const pageOne = await context.newPage();
  const welcomePage = new WelcomePage(pageOne);
  await welcomePage.openWelcomePage();
  await welcomePage.openPage("Multiple Windows");

  const multipleWindowsMain = new MultipleWindowsMain(pageOne);
  const pagePromise = context.waitForEvent("page");
  await multipleWindowsMain.openNewWindow();
  const pageTwo = await pagePromise;
  await pageTwo.waitForLoadState();
  const multipleWindowsSubpage = new MultipleWindowsSubpage(pageTwo);
  await multipleWindowsSubpage.verifyPageHeader();
});
