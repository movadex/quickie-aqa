import { Page } from '@playwright/test';

export class RegistrationPage {
    constructor(private page: Page) {}

    async verifyAge() {
        await this.page.click('text="Accept & Enter"');
    }

    async selectLoginMethod(method: string) {
        await this.page.click(`text=${method}`);
    }

    async fillEmail(email: string) {
        await this.page.fill('input[name="email"]', email);
    }

    async clickContinue() {
        await this.page.click('button[type="submit"]');
    }

    async enterVerificationCode(code: string) {
        await this.page.locator('input[aria-label="verification input"]').fill(code);
    }

    async selectGenderIdentity(gender: string) {
        await this.page.click(`text=${gender}`);
    }

    async clickNext() {
        await this.page.click(`text="Next"`);
    }

    async selectPreferredGender(gender: string) {
        await this.page.click(`text=${gender}`);
    }

    async selectFavoriteCategories(categories: string[]) {
        for (const category of categories) {
            await this.page.click(`text=${category}`);
        }
    }

    async skipPhoneNumber() {
        await this.page.click('text="Skip for now"');
    }
}