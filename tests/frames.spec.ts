import test from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { Frames } from "../pages/frames.page";
import { NestedFrame } from "../pages/frames_nested.page";
import { IFrame } from "../pages/frames_iframe.page";

test.beforeEach("frames page test", async ({ page }) => {
  const welcomePage = new WelcomePage(page);
  welcomePage.openWelcomePage();
  welcomePage.openPage("Frames");
});
test("nested frames test", async ({ page }) => {
  const frames = new Frames(page);
  await frames.openNestedFrame();
  const nestedFrame = new NestedFrame(page);
  await nestedFrame.verifyFramesContent();
});
test("iframe test", async ({ page }) => {
  const frames = new Frames(page);
  await frames.openIFrame();
  const iFrame = new IFrame(page);
  await iFrame.verifyFramesContent();
});
