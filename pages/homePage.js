import { expect } from '@playwright/test';

export default class HomePage {
  constructor(page) {
    this.page = page;
    this._ = {
      cookiesDialog:{
        acceptAll_TestId: 'granular-banner-button-accept-all',
      },
      cardTypesNav: 'div.productnav a'
    };
  }

  async acceptCookiePref() {
    await this.page.getByTestId(this._.cookiesDialog.acceptAll_TestId).click();
  }

  async clickOnCard(cardName) {
    const cardNav = this.page.locator(this._.cardTypesNav, { hasText: cardName });
    await expect(cardNav).toBeVisible();
    await cardNav.click();
  }
}
