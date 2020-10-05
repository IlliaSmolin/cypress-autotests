class InputsPage {
  constructor() {
    this.url = "/inputs";
  }

  openUrl() {
    cy.visit(this.url);
  }
}

module.exports = new InputsPage();
