import { test } from './helpers/base.helper';
import { expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { RegistrationPage } from '../src/pages/RegistrationPage';
import { VerificationPage } from '../src/pages/VerificationPage';

const randomEmail = `user_${Date.now()}@example.com`;
const randomUsername = `user_${Date.now()}`;

test('New Creator Registration', async ({ page }) => {
    let registration = new RegistrationPage(page);
    let verification = new VerificationPage(page);
    let home = new HomePage(page);

    await home.openApplication();
    await registration.verifyAge();
    await registration.clickCreatorLogin();
    await registration.fillEmail(randomEmail);
    await registration.clickContinue();
    await registration.enterVerificationCode("0000");
    await registration.fillNameAndBirthDate("Jane", "Doe", "1")
    await registration.clickNext();
    await registration.clickNext();
    await registration.fillPerformerInformation(randomUsername, "StageName")
    await registration.clickNext();
    await registration.fillContentInformation("Male", "Gay", "Yes", "Yes");
    await registration.clickNext();
    await registration.fillAddress("Test", "Ukraine", "Test", "12345");
    await registration.clickNext();
    await verification.acceptVerificationRecord();
    await verification.clickTakeOrUploadPicture();
    await verification.clickTakePicture();
    await verification.clickNext();
    await verification.clickTakePicture();
    await verification.clickNext();

    await expect(await registration.getSuccessMessage())
        .toHaveText('Your ID has been verified successfully - thank you!');

    await verification.clickContinue();
    await registration.clickComplete();

    await expect(await registration.getWelcomeToQuickieMessage())
        .toHaveText('Welcome to Quickie. We’re completing payment and ID verification; ' +
            'your account will be reviewed within the next 24-48 hours.');
});