import { test } from './helpers/base.helper';
import { expect } from '@playwright/test';
import { TestData } from './helpers/testData';
import { AdminPage } from '../src/pages/AdminPage';

test('Admin Login', async ({ page }) => {
    let admin = new AdminPage(page);

    await admin.openAdminPanel();
    await admin.fillEmail(TestData.ADMIN_EMAIL);
    await admin.clickLogin();
    await admin.enterVerificationCode(TestData.VERIFICATION_CODE);

    expect(await admin.isBulkUploadButtonVisible()).toBeTruthy();
});