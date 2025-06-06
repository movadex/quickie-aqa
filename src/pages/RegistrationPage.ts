import { Page } from '@playwright/test';
import { Locator } from '@playwright/test';

export class RegistrationPage {
    constructor(private page: Page) {}

    async verifyAge() {
        await this.page.click('text="Accept & Enter"');
    }

    async selectLoginMethod(method: string) {
        await this.page.click(`text=${method}`);
    }

    async clickCreatorLogin() {
        await this.page.click('text="Log in"');
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

    async fillNameAndBirthDate(firstName: string, lastName: string, birthDate: string) {
        await this.page.fill('input[name="firstName"]', firstName);
        await this.page.fill('input[name="lastName"]', lastName);
        await this.page.click('text="Select date"');
        await this.page.click(`text=${birthDate}`);
    }

    async fillPerformerInformation(username: string, stageName: string) {
        await this.page.fill('input[name="username"]', username);
        await this.page.fill('input[name="stageName"]', stageName);
    }

    async fillContentInformation(identity: string, contentType: string, otherPeople: string, face: string) {
        await this.page.click(`text=${identity}`);
        await this.page.click(`text=${contentType}`);
        await this.page.locator(`text=${otherPeople}`).first().click();
        await this.page.locator(`text=${face}`).last().click();
    }

    async fillAddress(address: string, country: string, city: string, zip: string) {
        await this.page.fill('input[name="address"]', address);
        await this.page.fill('input[name="country"]', country);
        await this.page.click(`li[role="option"]:has-text("${country}")`);
        await this.page.fill('input[name="city"]', city);
        await this.page.fill('input[name="zip"]', zip);
    }

    async selectGenderIdentity(gender: string) {
        await this.page.click(`text=${gender}`);
    }

    async clickNext() {
        await this.page.click(`text="Next"`);
    }

    async clickComplete() {
        await this.page.click(`text="Complete"`);
    }

    async selectPreferredGender(gender: string) {
        await this.page.click(`text=${gender}`);
    }

    async selectFavoriteCategories(categories: string[]) {
        for (const category of categories) {
            await this.page.click(`text=${category}`);
        }
    }

    async getSuccessMessage(): Promise<Locator> {
        const locator = this.page.locator('#ac-success-text');
        await locator.waitFor({ state: 'visible' });
        return locator;
    }

    async getWelcomeToQuickieMessage(): Promise<Locator> {
        const locator = this.page.locator('p.MuiTypography-body2').first();
        await locator.waitFor({ state: 'visible' });
        return locator;
    }
}