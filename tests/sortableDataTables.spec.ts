import test, { expect } from "@playwright/test";
import { WelcomePage } from "../pages/welcome.page";
import { SortableDataTables } from "../pages/sortableDataTables.page";

test.describe("sortable data tests", () => {
  let sortableDataTables: SortableDataTables;
  const userData: string[] = [
    "Bach",
    "Frank",
    "fbach@yahoo.com",
    "$51.00",
    "http://www.frank.com",
    "edit delete",
  ];
  test.beforeEach("open data tables page", async ({ page }) => {
    const welcomePage = new WelcomePage(page);
    await welcomePage.openWelcomePage();
    await welcomePage.openPage("Sortable Data Tables");
    sortableDataTables = new SortableDataTables(page);
    await sortableDataTables.verifyPageHeader();
  });
  test("check all data for user with name Frank", async ({ page }) => {
    const row: string[] = await sortableDataTables.getRowValues("Frank");
    expect(await sortableDataTables.compareValues(userData, row)).toBeTruthy();
  });
  test("check sorting in column Last Name", async ({ page }) => {
    const column: string[] = await sortableDataTables.getLastNames();
    await sortableDataTables.sortAlphabetically();
    const columnSorted: string[] = await sortableDataTables.getLastNames();
    expect(
      await sortableDataTables.compareValues(column.sort(), columnSorted)
    ).toBeTruthy();
    await sortableDataTables.sortReverse();
    const columnReversed: string[] = await sortableDataTables.getLastNames();
    expect(
      await sortableDataTables.compareValues(column.reverse(), columnReversed)
    ).toBeTruthy();
  });
  test("check if user data are correct after sorting", async () => {
    await sortableDataTables.sortAlphabetically();
    const row: string[] = await sortableDataTables.getRowValues("Frank");
    expect(await sortableDataTables.compareValues(userData, row)).toBeTruthy();
    await sortableDataTables.sortReverse();
    const row2: string[] = await sortableDataTables.getRowValues("Frank");
    expect(await sortableDataTables.compareValues(userData, row2)).toBeTruthy();
  });
});
