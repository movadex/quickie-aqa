import { test as base, chromium, expect } from '@playwright/test';

export const test = base.extend({
    page: async ({}, use, testInfo) => {
        const browser = await chromium.launch({
            headless: true,
            args: [
                '--start-maximized',
                '--use-fake-ui-for-media-stream',      // auto-accept camera/microphone
                '--use-fake-device-for-media-stream',  // use fake media stream (mock camera)
            ],
        });

        const context = await browser.newContext({
            viewport: null,
            deviceScaleFactor: undefined,
            permissions: ['camera'], // grant camera permission
        });

        const page = await context.newPage();

        // Attach screenshot on failure (it must exist first — see note below)
        testInfo.attachments.push({
            name: 'screenshot',
            path: `screenshots/${testInfo.title}.png`,
            contentType: 'image/png',
        });

        // Use the page
        await use(page);

        if (testInfo.status !== testInfo.expectedStatus) {
            await page.screenshot({ path: `screenshots/${testInfo.title}.png` });
        }

        await browser.close();
    }
});