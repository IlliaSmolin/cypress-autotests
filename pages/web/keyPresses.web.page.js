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
  pressF10() {
    //121 = F10
    this.keyPressInput.trigger('keydown', { keyCode: 121, which: 121 });
  }
}

module.exports = new KeyPressPage();
