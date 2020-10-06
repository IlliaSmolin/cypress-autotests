class Global {
  verifyText(element, text) {
    element.should('have.text', text);
  }
  verifyDisplay(element) {
    element.should('be.visible');
  }
}

module.exports = Global;
