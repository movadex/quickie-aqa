import { Page } from '@playwright/test';

export class HomePage {
    constructor(private page: Page) {}

    async openApplication() {
        await this.page.goto('https://dev-go.quickie.app');
    }

    async skipPhoneNumber() {
        await this.page.click('text="Skip for now"');
    }

    async logOut() {
        await this.page.locator('button').first().click();
        await this.page.click(`text="Log out"`);
    }

    async isVideoPlayerVisible(): Promise<boolean> {
        await this.page.waitForSelector('[class*="videoPlayer"]', { state: 'visible' });
        return await this.page.locator('[class*="videoPlayer"]').isVisible();
    }
}