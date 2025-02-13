import { expect } from '@playwright/test';

export default class CardTypesPage {
  constructor(page) {
    this.page = page;
  }

  async clickOnCard() {
    const cardNav = this.page.locator('div.container', { hasText: 'Carte Gold American Express®' })
      .locator('.container')
      .getByRole('link', { name: 'En savoir plus' }).nth(1);

    await cardNav.scrollIntoViewIfNeeded();
    await expect(cardNav).toBeVisible();
    await cardNav.click();
  }
}
