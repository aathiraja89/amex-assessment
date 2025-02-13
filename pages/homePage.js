import { expect } from '@playwright/test';

export default class HomePage {
  constructor(page) {
    this.page = page;
  }

  async acceptCookiePref() {
    await this.page.getByTestId('granular-banner-button-accept-all').click();
  }

  async clickOnCard(cardName) {
    const cardNav = this.page.locator(`div.productnav a:has-text("${cardName}")`);
    await expect(cardNav).toBeVisible();
    await cardNav.click();
  }

  // async enterPassword(password) {
  //   await this.page.fill('#password', password);
  // }

  // async clickLoginButton() {
  //   await this.page.click('#login-button');
  // }
}
