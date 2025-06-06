import { test } from './helpers/base.helper';
import { expect } from '@playwright/test';
import { TestData } from './helpers/testData';
import { HomePage } from '../src/pages/HomePage';
import { RegistrationPage } from '../src/pages/RegistrationPage';

test('User Login via Email', async ({ page }) => {
    let registration = new RegistrationPage(page);
    let home = new HomePage(page);

    await home.openApplication();
    await registration.verifyAge();
    await registration.selectLoginMethod(TestData.EMAIL_LOGIN);
    await registration.fillEmail(TestData.USER_EMAIL);
    await registration.clickContinue();
    await registration.enterVerificationCode(TestData.VERIFICATION_CODE);

    expect(await home.isVideoPlayerVisible()).toBeTruthy();
});