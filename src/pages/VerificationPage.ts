import { Page } from '@playwright/test';

export class VerificationPage {
    constructor(private page: Page) {
    }

    async clickNext() {
        await this.page.click('#ac-next-button');
    }

    async clickContinue() {
        await this.page.click('#ac-close-button');
    }

    async acceptVerificationRecord() {
        await this.page.check('input[name="agree"]');
    }

    async clickTakeOrUploadPicture() {
        await this.page.click(`text="Take or Upload Picture"`);
    }

    async clickTakePicture() {
        await this.page.click(`text="Take Picture"`);
    }
}