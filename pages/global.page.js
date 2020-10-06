class Global {
  verifyText(element, text) {
    element.should('have.text', text);
  }
}

module.exports = Global;
