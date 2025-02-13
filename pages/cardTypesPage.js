import { expect } from '@playwright/test';

export default class CardTypesPage {
  constructor(page) {
    this.page = page;
    this._ = {
      title: /Cartes American Express : Dépenser + pour Gagner | AMEX France/,
      url: '/fr/carte-de-paiement/types-cartes/cartes-proprietaires/?intlink=fr-fr-hp-product1-all-pry_cartes-01032021',
      cardsContainer: {
        container: 'div.container',
        learnMore: 'En savoir plus'
      }
    };
  }

  async clickOnCard(cardType) {
    const cardNav = this.page.locator(this._.cardsContainer.container, { hasText: cardType })
      .locator(this._.cardsContainer.container)
      .getByRole('link', { name: this._.cardsContainer.learnMore }).nth(1);

    await cardNav.scrollIntoViewIfNeeded();
    await expect(cardNav).toBeVisible();
    await cardNav.click();
  }
}
