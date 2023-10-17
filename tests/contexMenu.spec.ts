import test from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { ContexMenu } from "../pages/contexMenu.page";
import { ContexMenu2 } from "../pages/contexMenu2.page";

test("contex menu test", async ({ page }) => {
  const welcomePage = new WelcomePage(page);
  await welcomePage.openWelcomePage();
  await welcomePage.openPage("Context Menu");
  const contexMenu = new ContexMenu(page);
  await contexMenu.alertHandler();
  await contexMenu.rightClickContexBox();
});

test("alert on page autopract.com", async ({ page }) => {
  const contexMenu2 = new ContexMenu2(page);
  await contexMenu2.openAutoPractComPage();
  await contexMenu2.alertHandler();
  await contexMenu2.openAlert();
  await contexMenu2.verifyMessage("You clicked on Ok button.");
});

test("confirmation on page autopract.com", async ({ page }) => {
  const contexMenu2 = new ContexMenu2(page);
  await contexMenu2.openAutoPractComPage();
  await contexMenu2.confimationDecline();
  await contexMenu2.openConfirmation();
  await contexMenu2.verifyMessage("Save Canceled!");
});
