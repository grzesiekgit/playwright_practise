import test, { expect } from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { Dropdown } from "../pages/dropdown.page";

test("dropdown tests", async ({ page }) => {
  const welcomePage = new WelcomePage(page);
  await welcomePage.openWelcomePage();
  await welcomePage.openPage("Dropdown");

  const dropdown = new Dropdown(page);
  await expect(await dropdown.getDropdownValue()).toEqual("Please select an option");
  await dropdown.selectOption1();
  await expect(await dropdown.getDropdownValue()).toEqual("Option 1");
  await dropdown.selectOption2();
  await expect(await dropdown.getDropdownValue()).toEqual("Option 2");
});
