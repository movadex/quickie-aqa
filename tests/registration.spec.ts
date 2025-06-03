import { test } from './helpers/base.helper';
import { expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { RegistrationPage } from '../src/pages/RegistrationPage';

const randomEmail = `user_${Date.now()}@example.com`;

test('New User Registration via Email', async ({ page }) => {
    let registration = new RegistrationPage(page);
    let home = new HomePage(page);

    await home.openApplication();
    await registration.verifyAge();
    await registration.selectLoginMethod("Email");
    await registration.fillEmail(randomEmail);
    await registration.clickContinue();
    await registration.enterVerificationCode("0000");
    await registration.selectGenderIdentity("Male");
    await registration.clickNext();
    await registration.selectPreferredGender("Gay");
    await registration.clickNext();
    await registration.selectFavoriteCategories(['Bear', 'Feet', 'Jock']);
    await registration.clickNext();
    await registration.skipPhoneNumber();

    expect(await home.isVideoPlayerVisible()).toBeTruthy();
});