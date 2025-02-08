import { test, expect } from '@playwright/test';
const { default: loginActions } = require('./PMO/objectAction/loginActions');

test('Testcase Login', async ({ page }) => {
  const objLogin = new loginActions(page);

  await objLogin.goto();
  await objLogin.inputLogin();
});

test('add to cart and click cart', async ({ page }) => {
  const objATC = new loginActions(page);

  await objATC.goto();
  await objATC.inputLogin();
  await objATC.atc();
  await objATC.clickCartButton();
});

test('klik button check out', async ({ page }) => {
  const objCO = new loginActions(page);

  await objCO.goto();
  await objCO.inputLogin();
  await objCO.atc();
  await objCO.clickCartButton();
  await objCO.clickcoButton();
});

test('Fill in form customer and click button continue', async ({ page }) => {
  const objForm = new loginActions(page);

  await objForm.goto();
  await objForm.inputLogin();
  await objForm.atc();
  await objForm.clickCartButton();
  await objForm.clickcoButton();
  await objForm.inputFormCustomer();
  await objForm.clickContinueButton();
});

test('Button finish after form customer', async ({ page }) => {
  const objFC = new loginActions(page);

  await objFC.goto();
  await objFC.inputLogin();
  await objFC.atc();
  await objFC.clickCartButton();
  await objFC.clickcoButton();
  await objFC.inputFormCustomer();
  await objFC.clickContinueButton();
  await objFC.clickButtonFinish();
});

test('Check wording success check out', async ({ page }) => {
  const objCW = new loginActions(page);

  await objCW.goto();
  await objCW.inputLogin();
  await objCW.atc();
  await objCW.clickCartButton();
  await objCW.clickcoButton();
  await objCW.inputFormCustomer();
  await objCW.clickContinueButton();
  await objCW.clickButtonFinish();
  await objCW.checkWordingSuccess();
});
