import { test } from './helpers/base.helper';
import { expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { RegistrationPage } from '../src/pages/RegistrationPage';

test('User Login via Email', async ({ page }) => {
    let registration = new RegistrationPage(page);
    let home = new HomePage(page);

    await home.openApplication();
    await registration.verifyAge();
    await registration.selectLoginMethod("Email");
    await registration.fillEmail("test@gmail.com");
    await registration.clickContinue();
    await registration.enterVerificationCode("0000");

    expect(await home.isVideoPlayerVisible()).toBeFalsy();
});