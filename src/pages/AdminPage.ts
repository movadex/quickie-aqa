import { Page } from '@playwright/test';

export class AdminPage {
    constructor(private page: Page) {}

    async openAdminPanel() {
        await this.page.goto('https://dev-admin.quickie.app');
    }

    async fillEmail(email: string) {
        await this.page.fill('input[name="email"]', email);
    }

    async enterVerificationCode(code: string) {
        await this.page.locator('input[aria-label="verification input"]').fill(code);
    }

    async clickLogin() {
        await this.page.click('button[type="submit"]');
    }

    async isBulkUploadButtonVisible(): Promise<boolean> {
        await this.page.waitForSelector('button:has-text("Bulk Upload")', { state: 'visible' });
        return await this.page.locator('button:has-text("Bulk Upload")').isVisible();
    }
}