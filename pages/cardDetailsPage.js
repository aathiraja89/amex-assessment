import { expect } from '@playwright/test';
import { generateFakePersonData } from '../helper/faker'

export default class CardDetailsPage {
  constructor(page) {
    this.page = page;
    this._ = {
      title: /Gold American Express: La Carte à la Hauteur de Votre Quotidien/,
      url: '/fr-fr/carte-de-paiement/gold-card-americanexpress/?intlink=fr-proprietary-gold&intlink=fr-fr-hp-product1-all-pry_cartes-01032021',
      requestYourCard: {
        wrapperContainer: '#pdp-side-railwrapper',
        name: 'Demandez votre Carte',
      },
      contactForm: {
        firstName: 'Prénom',
        name: 'Nom',
        dob: 'Date de naissance (JJ/MM/AAAA)',
        email: 'Adresse e-mail',
        mobileNo: 'Numéro de téléphone portable',
        save: 'Sauvegarder et Continuer'
      }
    };
  }

  async clickOnRequestCard() {
    const requestCardButton = this.page.locator(this._.requestYourCard.wrapperContainer).getByRole('link', { name: this._.requestYourCard.name });

    await requestCardButton.scrollIntoViewIfNeeded();
    await expect(requestCardButton).toBeVisible();
    await requestCardButton.click();
  }

  async verifyPageHeader(pageHeader) {
    await expect(this.page.locator('h4')).toContainText(pageHeader, { ignoreCase: true });
  }

  async selectCivility() {
    await this.page.locator('label').filter({ hasText: 'M.' }).click();
  }

  async enterFirstName(firstName) {
    await this.page.getByRole('textbox', { name: this._.contactForm.firstName }).fill(firstName);
  }

  async enterName(name) {
    await this.page.getByRole('textbox', { name: this._.contactForm.name, exact: true }).fill(name);
  }

  async enterDOB(dob) {
    await this.page.getByRole('textbox', { name: this._.contactForm.dob }).fill(dob);
  }

  async enterEmail(email) {
    await this.page.getByRole('textbox', { name: this._.contactForm.email }).fill(email);
  }

  async enterMobileNo(mobile) {
    await this.page.getByRole('textbox', { name: this._.contactForm.mobileNo }).fill(mobile);
  }

  async selectSaveNCont() {
    await this.page.getByRole('button', { name: this._.contactForm.save }).click();
  }

  async enterContactDetails() {
    const person = generateFakePersonData();
    await this.selectCivility();
    await this.enterFirstName(person.firstName);
    await this.enterName(person.fullName);
    await this.enterDOB(person.birthDate);
    await this.enterEmail(person.email);
    await this.enterMobileNo(person.mobileNumber);
    await this.selectSaveNCont();
  }
}
