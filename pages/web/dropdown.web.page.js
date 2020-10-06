const Global = require("../global.page");

class DropdownPage extends Global {
  constructor() {
    super();
    this.url = "/dropdown";
  }

  get dropdown() {
    return cy.get("#dropdown");
  }

  selectDropdownOption(indexOrText) {
    this.dropdown.select(indexOrText + "");
  }
}

module.exports = new DropdownPage();
