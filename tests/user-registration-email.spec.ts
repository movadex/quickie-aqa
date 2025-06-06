import { test } from './helpers/base.helper';
import { expect } from '@playwright/test';
import { TestData } from './helpers/testData';
import { HomePage } from '../src/pages/HomePage';
import { RegistrationPage } from '../src/pages/RegistrationPage';

const randomEmail = `user_${Date.now()}@example.com`;

test('New User Registration via Email', async ({ page }) => {
    let registration = new RegistrationPage(page);
    let home = new HomePage(page);

    await home.openApplication();
    await registration.verifyAge();
    await registration.selectLoginMethod(TestData.EMAIL_LOGIN);
    await registration.fillEmail(randomEmail);
    await registration.clickContinue();
    await registration.enterVerificationCode(TestData.VERIFICATION_CODE);
    await registration.selectGenderIdentity("Male");
    await registration.clickNext();
    await registration.selectPreferredGender("Gay");
    await registration.clickNext();
    await registration.selectFavoriteCategories(['Bear', 'Feet', 'Jock']);
    await registration.clickNext();
    await home.skipPhoneNumber();

    expect(await home.isVideoPlayerVisible()).toBeTruthy();
});