class Global {
  openUrl() {
    cy.visit(this.url);
  }

  verifyText(element, text) {
    element.should('have.text', text);
  }
  verifyValue(element, value) {
    element.should('have.value', value);
  }
  verifyDisplay(element) {
    element.should('be.visible');
  }
  verifySelection(element) {
    element.should('be.selected');
  }
}

module.exports = Global;
