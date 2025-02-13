// @ts-check
import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage'
import CardTypesPage from '../pages/cardTypesPage'
import CardDetailsPage from '../pages/cardDetailsPage'
const { checkPageTitle, checkElementIsVisible, checkElementText, checkURLContains } = require('../actions/assertions');

const cardInTest = 'CARTE GOLD AMERICAN EXPRESS';

test(`verify contact submission on for ${cardInTest} card`, async ({ page }) => {
  const homePage = new HomePage(page);
  const cardTypesPage = new CardTypesPage(page);
  const cardDetailsPage = new CardDetailsPage(page);

  await page.goto('/fr-fr/?inav=NavLogo');
  await checkPageTitle(page, /American Express FR : Cartes de Paiement & Services Privilégiés/);
  await homePage.acceptCookiePref();
  await homePage.clickOnCard('Cartes American Express');

  await checkURLContains(page, '/fr/carte-de-paiement/types-cartes/cartes-proprietaires/?intlink=fr-fr-hp-product1-all-pry_cartes-01032021');
  await checkPageTitle(page, /Cartes American Express : Dépenser + pour Gagner | AMEX France/);
  // await page.waitForTimeout(3000);
  await homePage.acceptCookiePref();
  // await page.waitForTimeout(3000);
  await cardTypesPage.clickOnCard();

  await checkURLContains(page, '/fr-fr/carte-de-paiement/gold-card-americanexpress/?intlink=fr-proprietary-gold&intlink=fr-fr-hp-product1-all-pry_cartes-01032021');
  await checkPageTitle(page, /Gold American Express: La Carte à la Hauteur de Votre Quotidien/);
  await cardDetailsPage.clickOnRequestCard();
  await cardDetailsPage.verifyPageHeader();
  await cardDetailsPage.enterContactDetails();
  await page.waitForTimeout(3000);
});


test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== 'passed') { // Check if the test failed or had an error
    const screenshotPath = `screenshots/${testInfo.title}-${testInfo.retry}-${Date.now()}.png`;
    await page.screenshot({ path: screenshotPath, fullPage: true });
    testInfo.attach('Homepage Screenshot', { path: screenshotPath, contentType: 'image/png' });
    // console.log(`Screenshot saved for ${testInfo.title}: ${screenshotPath}`);
  }
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
