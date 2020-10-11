class Global {
  openUrl() {
    cy.visit(this.url);
  }

  verifyText(element, text) {
    element.should("have.text", text);
  }
  verifyValue(element, value) {
    element.should("have.value", value);
  }
  verifyDisplay(element) {
    element.should("be.visible");
  }
  verifyAbsence(element) {
    element.should("not.be.visible");
  }
  verifySelection(element) {
    element.should("be.selected");
  }
  verifyDisability(element) {
    element.should("be.disabled");
  }
}

module.exports = Global;
