# Quickie AQA UI Automation

Automated UI test project for the Quickie application using *Playwright*, *TypeScript*, and *Allure Reporting*.

# Technologies Used

- Playwright(https://playwright.dev) – End-to-end testing framework
- TypeScript(https://www.typescriptlang.org/) – Typed JavaScript
- Allure Report(https://docs.qameta.io/allure/) – Test reporting
- Node.js & npm – Runtime and package manager

# Installation

- git clone https://github.com/movadex/quickie-aqa.git   # clone the repository
- npm install                                            # install dependencies
- npx playwright install                                 # install playwright browsers

# Run Tests

- npx playwright test                               # run all tests
- npx playwright test --headed                      # run all tests - run tests in headed mode (browser UI visible)
- npx playwright test tests/user-registration-email.spec.ts    # run a specific test

# Custom Test Scripts

In package.json, you can find and use:
- npm run clean         # Clean old test and report results
- npm run test:run      # Run all tests
- npm run report        # Generate and open Allure report
- npm run test:ci       # Clean, run tests, and open report (CI style)

# Allure Reporting

- npx allure generate allure-results --clean -o allure-report    # generate Allure report
- npx allure open allure-report                                  # open allure report
- Remove-Item -Recurse -Force allure-results, allure-report      # recommended: clean previous results first