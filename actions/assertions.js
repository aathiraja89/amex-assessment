// assertions.js (or assertions.ts)
import { expect } from '@playwright/test';

// Define assertion functions
async function checkPageTitle(page, expectedTitle) {
  await expect(page).toHaveTitle(expectedTitle);
}

async function checkElementIsVisible(locator) {
  await expect(locator).toBeVisible();
}

async function checkElementText(locator, expectedText) {
  await expect(locator).toHaveText(expectedText);
}

async function checkURLContains(page, expectedPart) {
  await expect(page).toHaveURL(expectedPart); // Using template literal for flexibility
}


// For TypeScript:
export { checkPageTitle, checkElementIsVisible, checkElementText, checkURLContains };
