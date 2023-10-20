import { Page, expect } from "@playwright/test";

export class Hovers {
  constructor(private page: Page) {}

  pageHeader = this.page.getByRole("heading", { name: "Hovers" });
  firstAvatar = this.page.getByAltText("User Avatar").nth(0);
  secondAvatar = this.page.getByAltText("User Avatar").nth(1);
  thirdAvatar = this.page.getByAltText("User Avatar").nth(2);

  firstUser = this.page.getByText("name: user1");
  secondUser = this.page.getByText("name: user2");
  thirdUser = this.page.getByText("name: user3");

  async verifyHeader() {
    await expect(this.pageHeader).toHaveText("Hovers");
  }

  async verifyIfUsersAreNotViisble() {
    for (let i = 1; i < 4; i++) {
      await expect(this.page.getByText(`name: user${i}`)).not.toBeVisible();
    }
  }

  async verifyIfUserAreVisibleAfterHover() {
    for (let i = 0; i < 3; i++) {
      await this.page.getByAltText("User Avatar").nth(i).hover();
      await expect(this.page.getByText(`name: user${i + 1}`)).toBeVisible();
    }
  }
}
