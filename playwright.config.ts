import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    reporter: [
        ['list'],                  // console output
        ['allure-playwright'],     // allure integration
    ],
    use: {
        baseURL: 'https://dev-go.quickie.app',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                launchOptions: {
                    args: ['--start-maximized'],
                },
            },
        },
    ],
});