const { Given, When, Then } = require("@wdio/cucumber-framework");

const signUpPage = require("../pageobjects/signup.page");

const pages = {
  login: signUpPage,
};

Given(/^I am on the "(\w+)" page$/, async (page) => {
  await pages[page].open();
});

When(/user input a valid random email/, async () => {
  await signUpPage.enterEmail();
});

When(/user input a random strong password/, async () => {
  await signUpPage.enterPassword();
});

When(/user click sign up button/, async () => {
  await signUpPage.clickSignUpButton();
});

When(/user enter first name/, async () => {
  await signUpPage.enterFirstName();
});

When(/user enter last name/, async () => {
  await signUpPage.enterLastName();
});

When(/user choose industry/, async () => {
  await signUpPage.clickIndustryDropdown();
  await signUpPage.chooseCommercialService();
});

When(/user enters a random us phone number/, async () => {
  await signUpPage.enterPhoneNumber();
});

When(/user click start using autobahn/, async () => {
  await signUpPage.clickStartUsingButton();
});

Then(/^user should see a message saying "(.*)"$/, async (message) => {
  await signUpPage.verifyEmailMessage(message);
});
