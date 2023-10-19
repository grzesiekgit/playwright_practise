import test from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { HorizontalSlider } from "../pages/horizontalSlider.page";

test("horizontal slider test", async ({ page }) => {
  const welcomePage = new WelcomePage(page);
  await welcomePage.openWelcomePage();
  await welcomePage.openPage("Horizontal Slider");

  const horizontalSlider = new HorizontalSlider(page);
  await horizontalSlider.clickSlider();
  await horizontalSlider.moveSliderToExpectedValue(4.5);
  await horizontalSlider.checkIfSliderHasExpectedValue(4.5);
});
