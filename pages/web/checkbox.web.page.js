const Global = require("../global.page");

class Checkbox extends Global {
  constructor() {
    super();
    this.url = "/checkboxes";
  }

  get checkboxes() {
    return cy.get("#checkboxes");
  }

  getCheckbox(index) {
    return this.checkboxes.get(
      `input:nth-child(${index > 1 ? index * 2 - 1 : index})`
    );
  }

  verifyCheckboxChecked(index) {
    this.getCheckbox(index).should("be.checked");
  }

  verifyCheckboxNotChecked(index) {
    this.getCheckbox(index).should("not.be.checked");
  }

  checkCheckbox(index) {
    this.getCheckbox(index).check();
  }

  uncheckCheckbox(index) {
    this.getCheckbox(index).uncheck();
  }
}

module.exports = new Checkbox();
