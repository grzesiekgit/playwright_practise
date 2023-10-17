import { Page } from "@playwright/test";

export class DissapearingElements{
    constructor(private page: Page){}

    galleryTile = this.page.getByText('Gallery');
    tilesVisible = this.page.locator('li a');

    async isGalleryVisible(): Promise<boolean>{
        return await this.galleryTile.isVisible();
    }

    async numberofVisibleTiles(): Promise<number>{
        return (await this.tilesVisible.count());
    }
}