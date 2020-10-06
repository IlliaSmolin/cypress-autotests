class InputsPage {
  constructor() {
    this.url = "/inputs";
  }

  openUrl() {
    cy.visit(this.url);
  }

  get header() {
    return cy.get("h3");
  }

  verifyHeaderText(text) {
    return this.header.should('have.text', text);
  }
}

module.exports = new InputsPage();
