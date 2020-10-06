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

  verifyHeaderText(text) {
    super.verifyText(this.header, text);
  }
}

module.exports = new InputsPage();
