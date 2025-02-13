# AMEX-assessment - Playwright Test Framework

This project utilizes Playwright for end-to-end testing of American Express Credit card application.  This README provides information about the project setup, requirements, architecture, and how to run the tests.

## Table of Contents

- [Introduction](#introduction)
- [Setup Requirements](#setup-requirements)
- [Project Architecture](#project-architecture)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Reporting](#reporting)
- [Best Practices](#best-practices)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This framework is designed to provide robust and reliable end-to-end tests for American Express Credit card application. It leverages Playwright's powerful features and the framework is modularized with functions aligned on different layers for ease of access.

## Setup Requirements

Before running the tests, ensure you have the following installed:

- **Node.js:** Latest Node.js LTS.  It's recommended to use a Node version manager like [nvm](https://github.com/nvm-sh/nvm), [n](https://github.com/tj/n), or [Volta](https://volta.sh/) for managing Node.js versions.
- **npm or yarn:** Uses NPM package manager for the dependencies.
- **Playwright:** Install Playwright and the necessary browsers:

```shell
git clone https://github.com/aathiraja89/amex-assessment.git

npm install -D @playwright/test
npx playwright install

# or, to install specific browsers:
npx playwright install chromium firefox webkit

# Run all tests
npx playwright test

# Run tests in specific browsers
npx playwright test --browser chromium firefox webkit

# Run tests in headed mode
npx playwright test --headed

# Run a specific file
npx playwright test e2e/card-enquiry.spec.js

# Run for report
npx playwright show-report
```
## Project Architecture
The project follows the Page Object Model (POM) pattern to organize tests and locators.

- **tests/:** Contains the test files. Each test file typically represents a specific test scenario or feature. Test files use the .spec.js (or .spec.ts if using TypeScript) extension.
- **pages/:** Contains the Page Objects. Each Page Object represents a specific page or component of the application and encapsulates the locators and interactions for that page/component. This promotes code reusability and maintainability.
- **helpers/:** Contains utility functions or helper classes used across the tests (e.g., custom assertions, data generation functions, etc.).
- **playwright.config.js:** Contains the Playwright configuration, including browser settings, reporters, timeout settings, and other configurations.
- **package.json:** Contains the project dependencies and scripts.

