const Global = require("../global.page");

class KeyPressPage extends Global {
  constructor() {
    super();
    this.url = "/key_presses";
  }

  get keyPressInput() {
    return cy.get("#target");
  }
  get pressResult() {
    return cy.get("#result");
  }

  verifyPressResult(key) {
    super.verifyText(this.pressResult, `You entered: ${key.toUpperCase()}`);
  }
}

module.exports = new KeyPressPage();
