import { expect } from '@playwright/test';

export default class CardTypesPage {
  constructor(page) {
    this.page = page;
  }

  async clickOnCard(cardType) {
    const cardNav = this.page.locator('div.container', { hasText: cardType })
      .locator('div.container')
      .getByRole('link', { name: 'En savoir plus' }).nth(1);

    await cardNav.scrollIntoViewIfNeeded();
    await expect(cardNav).toBeVisible();
    await cardNav.click();
  }
}
