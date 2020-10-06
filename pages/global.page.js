class Global {
  openUrl() {
    cy.visit(this.url);
  }

  verifyText(element, text) {
    element.should('have.text', text);
  }
  verifyDisplay(element) {
    element.should('be.visible');
  }
  verifyValue(element, value) {
    element.should('have.value', value);
  }
}

module.exports = Global;
