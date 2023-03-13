const { faker } = require("@faker-js/faker");
const Page = require("./page");

faker.locale = "en_US";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputEmail() {
    return $('[name="email"]');
  }

  get inputPassword() {
    return $('[name="password"]');
  }

  get btnSignUp() {
    return $("p.button-text.paragraph.button-large");
  }

  get inputFirstName() {
    return $('[name="first-name"]');
  }

  get inputLastName() {
    return $('[name="last-name"]');
  }

  get inputLastName() {
    return $('[name="last-name"]');
  }

  get inputIndustry() {
    return $('[name="industry"]');
  }

  get inputPhoneNumber() {
    return $('[name="phone-number"]');
  }

  get btnStartUsingAutobahn() {
    return $("p.button-text.paragraph.button-large");
  }

  get commercialServicesIndustry() {
    return $('[id="item-1"]');
  }

  get messageToVerifyEmail() {
    return $('//*[contains(text(), "Verify Your Email")]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async enterEmail() {
    const email = faker.internet.email("dian", "prasetyo", "tesfactory.com");

    await browser.waitUntil(async () => await this.inputEmail.isDisplayed(), {
      timeout: 5000,
      timeoutMsg: "Email input field was not displayed after 5 seconds",
    });

    // Wait for 1 second before inputting the email
    await browser.pause(1000);
    await this.inputEmail.click();
    await this.inputEmail.addValue(email);
    browser.waitUntil(() => this.inputEmail.getValue() === email);
  }

  async enterPassword() {
    const password = faker.internet.password(12, false, /[A-Z]/, "3a!");

    await this.inputPassword.setValue(password);
    browser.waitUntil(() => this.inputPassword.getValue() === password);
  }

  async clickSignUpButton() {
    const { btnSignUp } = this;

    await browser.pause(1000);
    await btnSignUp.waitForClickable({ timeout: 5000 });
    await btnSignUp.click();
  }

  async enterFirstName() {
    const firstname = faker.name.firstName("male");

    await browser.waitUntil(
      async () => await this.inputFirstName.isDisplayed(),
      {
        timeout: 5000,
        timeoutMsg: "First name input field was not displayed after 5 seconds",
      }
    );

    await browser.pause(2000);
    await this.inputFirstName.setValue(firstname);

    browser.waitUntil(() => this.inputFirstName.getValue() === firstname);
  }

  async enterLastName() {
    const lastname = faker.name.lastName("male");

    await this.inputLastName.waitForDisplayed();
    await this.inputLastName.setValue(lastname);

    browser.waitUntil(() => this.inputLastName.getValue() === lastname);
  }

  async clickIndustryDropdown() {
    await this.inputIndustry.click();
  }

  async chooseCommercialService() {
    await this.commercialServicesIndustry.waitForDisplayed();
    await this.commercialServicesIndustry.click();
  }

  async enterPhoneNumber() {
    const phonenumber = faker.phone.number("484497####");

    await this.inputPhoneNumber.waitForDisplayed();
    await this.inputPhoneNumber.setValue(phonenumber);

    browser.waitUntil(() => this.inputPhoneNumber.getValue() === phonenumber);
  }

  async clickStartUsingButton() {
    await this.btnStartUsingAutobahn.click();
  }

  async verifyEmailMessage(message) {
    //console.log()
    await this.messageToVerifyEmail.waitForDisplayed();
    await expect(this.messageToVerifyEmail).toHaveTextContaining(message);
  }
  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("signup");
  }
}

module.exports = new SignUpPage();
