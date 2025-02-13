import { expect } from '@playwright/test';
import { generateFakePersonData } from '../helper/faker'

export default class CardDetailsPage {
  constructor(page) {
    this.page = page;
  }

  async clickOnRequestCard() {
    const requestCardButton = this.page.locator('#pdp-side-railwrapper').getByRole('link', { name: 'Demandez votre Carte' });

    await requestCardButton.scrollIntoViewIfNeeded();
    await expect(requestCardButton).toBeVisible();
    await requestCardButton.click();
  }

  async verifyPageHeader(){
    await expect(this.page.locator('h4')).toContainText('CARTE GOLD AMERICAN EXPRESS');
  }

  async selectCivility(){
    await this.page.locator('label').filter({ hasText: 'M.' }).click();
    // locator('label').filter({ hasText: 'Mme' })
  }

  async enterFirstName(firstName){
    await this.page.getByRole('textbox', { name: 'Prénom' }).fill(firstName);
  }

  async enterName(name){
    await this.page.getByRole('textbox', { name: 'Nom', exact: true }).fill(name);
  }

  async enterDOB(dob){
    await this.page.getByRole('textbox', { name: 'Date de naissance (JJ/MM/AAAA)' }).fill(dob);
  }

  async enterEmail(email){
    await this.page.getByRole('textbox', { name: 'Adresse e-mail' }).fill(email);
  }

  async enterMobileNo(mobile){
    await this.page.getByRole('textbox', { name: 'Numéro de téléphone portable' }).fill(mobile);
  }

  async selectSaveNCont(){
    await this.page.getByRole('button', { name: 'Sauvegarder et Continuer' }).click();
  }

  async enterContactDetails(){
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
