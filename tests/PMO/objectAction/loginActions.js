//object yang berisi semua fungtion
import loginPage from '../locator/loginpage';
import { expect } from '@playwright/test';

export default class loginAction {
  constructor(page) {
    this.page = page;
    this.loginPage = new loginPage();

    //untuk login
    this.inputUsername = page.locator(this.loginPage.inputUsername);
    this.inputPassword = page.locator(this.loginPage.inputPassword);
    this.clickButtonLogin = page.locator(this.loginPage.buttonLogin);

    //untuk ATC
    this.atcBarang = page.locator(this.loginPage.atcBackpack);
    this.buttonCart = page.locator(this.loginPage.cardButton);

    //untuk CO
    this.coButton = page.locator(this.loginPage.coButton);

    //untuk lengkapi form customer
    this.inputFirstName = page.locator(this.loginPage.firstName);
    this.inputLastName = page.locator(this.loginPage.lastName);
    this.inputCodePos = page.locator(this.loginPage.codePos);
    this.buttonContinue = page.locator(this.loginPage.contButton);

    //untuk klik button Finish
    this.buttonFinish = page.locator(this.loginPage.buttonFinish);

    //check wording success checkout
    this.checkWording = page.locator(this.loginPage.checkWording);
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async inputLogin() {
    await this.inputUsername.fill('standard_user');
    await expect(this.inputUsername).toHaveValue('standard_user');

    await this.inputPassword.fill('secret_sauce');
    await expect(this.inputPassword).toHaveValue('secret_sauce');

    await this.clickButtonLogin.click();
  }

  async atc() {
    await this.atcBarang.click();
  }

  async clickCartButton() {
    await this.buttonCart.click();
  }

  async clickcoButton() {
    await this.coButton.click();
  }

  async inputFormCustomer() {
    await this.inputFirstName.fill('test1');
    await expect(this.inputFirstName).toHaveValue('test1');

    await this.inputLastName.fill('test2');
    await expect(this.inputLastName).toHaveValue('test2');

    await this.inputCodePos.fill('test3');
    await expect(this.inputCodePos).toHaveValue('test3');
  }

  async clickContinueButton() {
    await this.buttonContinue.click();
  }

  async clickButtonFinish() {
    await this.buttonFinish.click();
  }

  async checkWordingSuccess() {
    await expect(this.checkWording).toHaveText('Thank you for your order!');
  }
}
