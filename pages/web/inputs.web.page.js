const Global = require("../global.page");

class InputsPage extends Global {
  constructor() {
    super();
    this.url = "/inputs";
  }

  openUrl() {
    cy.visit(this.url);
  }

  get header() {
    return cy.get("h3");
  }
  get input() {
    return cy.get("input");
  }

  verifyHeaderText(text) {
    super.verifyText(this.header, text);
  }
  verifyInputDisplay() {
    super.verifyDisplay(this.input);
  }
  verifyInputValue(value) {
    super.verifyValue(this.input, value);
  }
}

module.exports = new InputsPage();
