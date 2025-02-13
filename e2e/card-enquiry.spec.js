// @ts-check
import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage'
import CardTypesPage from '../pages/cardTypesPage'
import CardDetailsPage from '../pages/cardDetailsPage'
const { checkPageTitle, checkElementIsVisible, checkElementText, checkURLContains } = require('../actions/assertions');

const homePath = '/fr-fr/?inav=NavLogo';
const cardTypeInTest = 'Cartes American Express';
const cardInTest = 'Carte Gold American Express';

test(`verify contact submission on for ${cardInTest} card`, async ({ page }) => {
  const homePage = new HomePage(page);
  const cardTypesPage = new CardTypesPage(page);
  const cardDetailsPage = new CardDetailsPage(page);

  await page.goto(homePath);
  await checkPageTitle(page, homePage._.title);
  await homePage.acceptCookiePref();
  await homePage.clickOnCard(cardTypeInTest);

  // Card Types details
  await checkURLContains(page, cardTypesPage._.url);
  await checkPageTitle(page, cardTypesPage._.title);
  await homePage.acceptCookiePref();
  await cardTypesPage.clickOnCard(cardInTest);

  // Request Card contact form
  await checkURLContains(page, cardDetailsPage._.url);
  await checkPageTitle(page, cardDetailsPage._.title);
  await cardDetailsPage.clickOnRequestCard();
  await cardDetailsPage.verifyPageHeader(cardInTest);
  await cardDetailsPage.enterContactDetails();
});


test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== 'passed') {
    const screenshotPath = `screenshots/${testInfo.title}-${testInfo.retry}-${Date.now()}.png`;
    await page.screenshot({ path: screenshotPath, fullPage: true });
    testInfo.attach('Homepage Screenshot', { path: screenshotPath, contentType: 'image/png' });
    console.log(`Screenshot saved for ${testInfo.title}: ${screenshotPath}`);
  }
});
