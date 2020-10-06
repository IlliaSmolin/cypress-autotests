const Global = require("../global.page");

class DropdownPage extends Global {
  constructor() {
    super();
    this.url = "/dropdown";
  }

  get dropdown() {
    return cy.get("#dropdown");
  }
  dropdownOption(index) {
    return cy.get(`option:nth-child(${index})`);
  }

  selectDropdownOption(indexOrText) {
    this.dropdown.select(indexOrText + "");
  }

  verifySelectedOption(index) {
    super.verifySelection(this.dropdownOption(index));
  }

  verifyOptionDisabled(index) {
    super.verifyDisability(this.dropdownOption(index));
  }
}

module.exports = new DropdownPage();
